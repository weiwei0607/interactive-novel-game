import { useState, useRef, useEffect, useCallback } from 'react';
import {
  X, AlertTriangle, RotateCcw, Settings, Sun, Moon, Clock, Save, BookOpen, MessageCircle, User,
} from 'lucide-react';
import type { Story, Location, NPC, Clue, Character } from '../../types/game';
import { isTimePressured } from '../../utils/gameTime';
import { useGameStore } from '../../store/gameStore';
import { useAI } from '../../hooks/useAI';
import { useSound } from '../../hooks/useSound';
import { useTheme } from '../../hooks/useTheme';

import MapView from '../gameplay/views/MapView';
import LocationView from '../gameplay/views/LocationView';
import DialogView from '../gameplay/views/DialogView';
import CluesView from '../gameplay/views/CluesView';
import ProfileView from '../gameplay/views/ProfileView';
import SaveGameMenu from '../common/SaveGameMenu';
import LoadGameMenu from '../common/LoadGameMenu';

interface Props {
  story: Story;
  playerCharacter: Character;
  apiKey: string;
  onAccuse: () => void;
}

type SubView = 'map' | 'location' | 'dialog' | 'clues' | 'profile';

export default function GameplayScreen({ story, playerCharacter, apiKey, onAccuse }: Props) {
  const [subView, setSubView] = useState<SubView>('map');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedNpc, setSelectedNpc] = useState<NPC | null>(null);
  const [locationDesc, setLocationDesc] = useState('');
  const [descLoading, setDescLoading] = useState(false);
  const [showAccuseConfirm, setShowAccuseConfirm] = useState(false);
  const [trustToast, setTrustToast] = useState<{npc: string; delta: number} | null>(null);
  const [showPauseMenu, setShowPauseMenu] = useState(false);
  const [showSaveMenu, setShowSaveMenu] = useState(false);
  const [showLoadMenu, setShowLoadMenu] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [hintText, setHintText] = useState('');
  const [policeAlert, setPoliceAlert] = useState<string | null>(null);
  const [timePressureAlert, setTimePressureAlert] = useState<string | null>(null);
  const [approachToast, setApproachToast] = useState<{npc: string; message: string} | null>(null);
  const [avoidNote, setAvoidNote] = useState<string | null>(null);
  const [activeKeyChoice, setActiveKeyChoice] = useState<{
    id: string;
    question: string;
    options: { label: string; value: string }[];
  } | null>(null);
  const [shownKeyChoices, setShownKeyChoices] = useState<Set<string>>(new Set());
  const staleTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const {
    visitedLocations, collectedClues, setLocation, collectClue, examineClue,
    getProgress, lastSaveTime, saveToSlot, saveToNamedSlot, questionsRemaining, lastDisruptionEvent,
    elapsedMinutes, loadState, npcTrustLevel, getNpcLocation, currentLocationId,
    setSpecialFlag,
  } = useGameStore();

  const progress = getProgress();

  const { generateSceneDescription } = useAI({ apiKey });
  const { play } = useSound();
  const { isDark, setTheme } = useTheme();

  // key_choice 觸發檢查
  useEffect(() => {
    const sm = story.specialMechanic;
    if (!sm?.config.choices) return;
    const choices = sm.config.choices as Array<{
      id: string;
      condition: { type: string; clueId?: string; locationId?: string };
      question: string;
      options: { label: string; value: string }[];
    }>;
    for (const choice of choices) {
      if (shownKeyChoices.has(choice.id) || activeKeyChoice) break;
      const cond = choice.condition;
      let met = false;
      if (cond.type === 'clue' && cond.clueId && collectedClues.includes(cond.clueId)) met = true;
      if (cond.type === 'location' && cond.locationId && visitedLocations.includes(cond.locationId)) met = true;
      if (met) {
        setActiveKeyChoice({ id: choice.id, question: choice.question, options: choice.options });
        setShownKeyChoices((prev) => new Set(prev).add(choice.id));
        play('notify');
        break;
      }
    }
  }, [collectedClues, visitedLocations, story.specialMechanic, shownKeyChoices, activeKeyChoice, play]);

  // 干擾事件處理
  useEffect(() => {
    if (!lastDisruptionEvent) return;
    const loc = story.locations.find((l) => l.id === lastDisruptionEvent.location);
    const locName = loc?.name || lastDisruptionEvent.location;
    const dc = story.disruption;
    if (lastDisruptionEvent.hitPlayer) {
      const msg = dc?.hitMessage.replace('{location}', locName) || `${lastDisruptionEvent.name}到了${locName}，你被迫離開！`;
      setPoliceAlert(msg);
      setSubView('map');
      setSelectedLocation(null);
      setSelectedNpc(null);
      play('notify');
    } else {
      const msg = dc?.missMessage.replace('{location}', locName) || `警告：${lastDisruptionEvent.name}正在${locName}`;
      setPoliceAlert(msg);
      play('notify');
    }
    const timer = setTimeout(() => setPoliceAlert(null), 4000);
    return () => clearTimeout(timer);
  }, [lastDisruptionEvent, story.locations, story.disruption, play]);

  // 自動存檔到 IndexedDB
  useEffect(() => {
    if (lastSaveTime > 0) {
      const timer = setTimeout(() => saveToSlot(), 500);
      return () => clearTimeout(timer);
    }
  }, [lastSaveTime, saveToSlot]);

  // 時間壓力提示
  useEffect(() => {
    if (isTimePressured(elapsedMinutes, false)) {
      setTimePressureAlert('天快亮了，你感到焦慮——必須盡快做出判斷');
      play('notify');
      const timer = setTimeout(() => setTimePressureAlert(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [elapsedMinutes, play]);

  // 高信任 NPC 主動接近
  useEffect(() => {
    if (subView !== 'location' || !currentLocationId) return;
    const highTrustNpcs = story.npcs.filter((n) => {
      const trust = npcTrustLevel[n.id] || 50;
      const loc = getNpcLocation(n.id);
      return trust >= 75 && loc !== currentLocationId;
    });
    if (highTrustNpcs.length > 0 && Math.random() < 0.2) {
      const npc = highTrustNpcs[Math.floor(Math.random() * highTrustNpcs.length)];
      setApproachToast({ npc: npc.name, message: `${npc.name} 主動來找你，似乎有話要說` });
      play('notify');
      const timer = setTimeout(() => setApproachToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [elapsedMinutes, subView, currentLocationId, story.npcs, npcTrustLevel, getNpcLocation, play]);

  // 卡關提示系統
  useEffect(() => {
    const checkHint = () => {
      if (subView !== 'map') return;
      const unvisited = story.locations.filter((l) => !visitedLocations.includes(l.id));

      let hint = '';
      if (progress === 0 && unvisited.length > 0) {
        hint = `💡 試著點擊「${unvisited[0].name}」開始探索`;
      } else if (progress < 30 && unvisited.length > 0) {
        hint = `💡 還有「${unvisited[0].name}」沒探索過`;
      } else if (collectedClues.length > 0 && progress < 60) {
        const unseen = story.clues.filter((c) => !collectedClues.includes(c.id));
        if (unseen.length > 0) {
          const loc = story.locations.find((l) => l.id === unseen[0].locationId);
          hint = `💡 「${loc?.name}」可能還有未發現的線索`;
        }
      }

      if (hint) {
        setHintText(hint);
        setHintVisible(true);
        const hide = setTimeout(() => setHintVisible(false), 6000);
        return () => clearTimeout(hide);
      }
    };

    staleTimerRef.current = setTimeout(checkHint, 90000);
    return () => clearTimeout(staleTimerRef.current);
  }, [subView, story, visitedLocations, collectedClues, progress]);

  const handleEnterLocation = useCallback(async (loc: Location) => {
    play('tap');
    setSelectedLocation(loc);
    setLocation(loc.id);
    setSubView('location');
    setLocationDesc('');
    setDescLoading(true);

    // 低信任 NPC 迴避檢查
    const avoidingNpcs = story.npcs.filter((n) => {
      const trust = npcTrustLevel[n.id] || 50;
      const npcLoc = getNpcLocation(n.id);
      return trust <= 30 && npcLoc === loc.id;
    });
    if (avoidingNpcs.length > 0) {
      const names = avoidingNpcs.map((n) => n.name).join('、');
      setAvoidNote(`${names} 看到你後匆匆離開了`);
      play('error');
      setTimeout(() => setAvoidNote(null), 4000);
    }

    const desc = await generateSceneDescription(loc.name, story);
    setLocationDesc(desc);
    setDescLoading(false);
  }, [setLocation, generateSceneDescription, story, play, npcTrustLevel, getNpcLocation]);

  // 鍵盤導航
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showPauseMenu) return;
      if (e.key === 'Escape') {
        setShowPauseMenu(true);
        return;
      }
      if (subView === 'map') {
        const idx = parseInt(e.key, 10);
        if (idx >= 1 && idx <= story.locations.length) {
          e.preventDefault();
          handleEnterLocation(story.locations[idx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [subView, story.locations, showPauseMenu, handleEnterLocation]);

  const handleTalkToNpc = useCallback((npc: NPC) => {
    play('tap');
    // 點到自己角色 → 開個人檔案，不要跟自己對話
    if (npc.id === playerCharacter.id) {
      setSubView('profile');
      return;
    }
    setSelectedNpc(npc);
    setSubView('dialog');
  }, [play, playerCharacter.id]);

  const handleCollectClue = useCallback((clue: Clue) => {
    if (!collectedClues.includes(clue.id)) {
      play('collect');
      collectClue(clue.id);
    }
    examineClue(clue.id);
  }, [collectedClues, collectClue, examineClue, play]);

  const handleTrustChange = useCallback((npcName: string, delta: number) => {
    setTrustToast({ npc: npcName, delta });
    setTimeout(() => setTrustToast(null), 2000);
  }, []);

  // ── 子畫面路由 ──
  const subViewNode = (() => {
    switch (subView) {
      case 'map':
        return (
          <>
            <MapView
            story={story}
            progress={progress}
            onEnterLocation={handleEnterLocation}
            onShowClues={() => setSubView('clues')}
            onShowProfile={() => setSubView('profile')}
            onShowPause={() => setShowPauseMenu(true)}
            onShowAccuse={() => setShowAccuseConfirm(true)}
          />
          {/* 卡關提示 */}
          {hintVisible && (
            <div className="fixed bottom-24 left-4 right-4 z-30 animate-slide-up">
              <div className="night-card p-3 flex items-center gap-2 text-xs text-cinnabar-3/80 border-cinnabar/30">
                <span className="shrink-0">{hintText}</span>
                <button
                  onClick={() => setHintVisible(false)}
                  className="ml-auto p-1 text-ink-4 hover:text-paper-3 shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
          {/* 信任度變化提示 */}
          {trustToast && (
            <div
              className={`fixed top-16 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full text-xs font-medium border ${
                trustToast.delta > 0
                  ? 'bg-verdigris/80 border-verdigris/50 text-verdigris-2'
                  : 'bg-red-900/80 border-red-700/50 text-red-300'
              }`}
              style={{
                animation: `${trustToast.delta > 0 ? 'trustPop' : 'trustShake'} 0.55s ease-out`,
              }}
            >
              <span className="inline-block">
                {trustToast.npc} 的信任度{' '}
                <span className={`font-bold text-sm ${trustToast.delta > 0 ? 'text-paper-2' : 'text-red-200'}`}>
                  {trustToast.delta > 0 ? '+' : ''}{trustToast.delta}%
                </span>
              </span>
            </div>
          )}
          {/* 指認確認 */}
          {showAccuseConfirm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <div className="night-card w-full max-w-sm p-6 text-center">
                <AlertTriangle className="w-10 h-10 text-cinnabar-2 mx-auto mb-3" />
                <h3 className="font-kai text-xl mb-2">準備好指認兇手了嗎？</h3>
                <p className="text-sm text-ink-4 mb-5">
                  一旦做出選擇就無法回頭。建議先收集足夠的線索再下判斷。
                  <br />
                  目前進度：{progress}%
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAccuseConfirm(false)}
                    className="flex-1 py-2.5 rounded-xl bg-ink-2/50 text-sm font-medium"
                  >
                    繼續調查
                  </button>
                  <button
                    onClick={() => { setShowAccuseConfirm(false); onAccuse(); }}
                    className="flex-1 py-2.5 rounded-xl bg-red-700 text-white text-sm font-medium"
                  >
                    開始指認
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* 暫停選單 */}
          {showPauseMenu && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
              <div className="night-card w-full max-w-sm p-6 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-kai text-xl">遊戲選單</h3>
                  <button
                    onClick={() => setShowPauseMenu(false)}
                    className="p-2 rounded-lg hover:bg-night-3/60 transition-colors"
                  >
                    <X className="w-5 h-5 text-ink-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => { setShowPauseMenu(false); setSubView('map'); }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left"
                  >
                    <RotateCcw className="w-5 h-5 text-cinnabar-2" />
                    <div>
                      <p className="font-medium text-sm">回到地圖</p>
                      <p className="text-xs text-ink-4">繼續調查</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setShowPauseMenu(false); setShowSaveMenu(true); }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left"
                  >
                    <Save className="w-5 h-5 text-verdigris-2" />
                    <div>
                      <p className="font-medium text-sm">儲存遊戲</p>
                      <p className="text-xs text-ink-4">手動記錄當前進度</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setShowPauseMenu(false); setShowLoadMenu(true); }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left"
                  >
                    <BookOpen className="w-5 h-5 text-cinnabar-2" />
                    <div>
                      <p className="font-medium text-sm">讀取存檔</p>
                      <p className="text-xs text-ink-4">載入先前儲存的進度</p>
                    </div>
                  </button>
                  <button
                    onClick={() => { setShowPauseMenu(false); onAccuse(); }}
                    className="w-full flex items-center gap-3 p-4 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="font-medium text-sm">指認兇手</p>
                      <p className="text-xs text-ink-4">目前進度 {progress}%</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    className="w-full flex items-center gap-3 p-4 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left"
                  >
                    {isDark ? <Sun className="w-5 h-5 text-cinnabar-3" /> : <Moon className="w-5 h-5 text-ink-4" />}
                    <div>
                      <p className="font-medium text-sm">切換主題</p>
                      <p className="text-xs text-ink-4">{isDark ? '深色模式' : '淺色模式'}</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setShowPauseMenu(false)}
                    className="w-full flex items-center gap-3 p-4 rounded-xl night-card hover:bg-night-3/80 transition-colors text-left"
                  >
                    <Settings className="w-5 h-5 text-ink-4" />
                    <div>
                      <p className="font-medium text-sm">設定 API Key</p>
                      <p className="text-xs text-ink-4">{apiKey ? '已設定' : '尚未設定'}</p>
                    </div>
                  </button>
                </div>
                <button
                  onClick={() => setShowPauseMenu(false)}
                  className="w-full mt-6 py-3 rounded-xl bg-ink-2/50 text-sm font-medium hover:bg-ink-2 transition-colors"
                >
                  關閉選單
                </button>
              </div>
            </div>
          )}
        </>
      );

    case 'location':
      return selectedLocation ? (
        <LocationView
          story={story}
          location={selectedLocation}
          locationDesc={locationDesc}
          descLoading={descLoading}
          onBack={() => setSubView('map')}
          onTalk={handleTalkToNpc}
          onCollectClue={handleCollectClue}
        />
      ) : null;

    case 'dialog':
      return selectedNpc ? (
        <DialogView
          story={story}
          playerCharacter={playerCharacter}
          selectedNpc={selectedNpc}
          apiKey={apiKey}
          onBack={() => setSubView('location')}
          onGoMap={() => { setSelectedNpc(null); setSubView('map'); }}
          onTrustChange={handleTrustChange}
          questionsRemaining={questionsRemaining}
        />
      ) : null;

      case 'clues':
        return <CluesView story={story} playerCharacter={playerCharacter} onBack={() => setSubView('map')} />;

      case 'profile':
        return <ProfileView story={story} playerCharacter={playerCharacter} onBack={() => setSubView('map')} />;

      default:
        return null;
    }
  })();

  return (
    <>
      {/* 警察巡邏警告 */}
      {policeAlert && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className={`px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-sm flex items-center gap-2 ${
            policeAlert.includes('被迫')
              ? 'bg-red-950/80 border-red-700/50 text-red-300'
              : 'bg-cinnabar-deep/80 border-cinnabar/50 text-cinnabar-3'
          }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${policeAlert.includes('被迫') ? 'bg-red-400' : 'bg-cinnabar-2'}`} />
            {policeAlert}
          </div>
        </div>
      )}
      {/* 時間壓力提示 */}
      {timePressureAlert && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-sm flex items-center gap-2 bg-indigo-950/80 border-indigo-700/50 text-indigo-300">
            <Clock className="w-3 h-3 animate-pulse" />
            {timePressureAlert}
          </div>
        </div>
      )}
      {/* NPC 主動接近提示 */}
      {approachToast && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <button
            onClick={() => {
              const npc = story.npcs.find((n) => n.name === approachToast.npc);
              if (npc) { setSelectedNpc(npc); setSubView('dialog'); }
              setApproachToast(null);
            }}
            className="px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-sm flex items-center gap-2 bg-verdigris-deep/80 border-verdigris/50 text-verdigris-2 cursor-pointer hover:bg-verdigris/80 transition-colors"
          >
            <MessageCircle className="w-3 h-3 animate-pulse" />
            {approachToast.message}
          </button>
        </div>
      )}
      {/* NPC 迴避提示 */}
      {avoidNote && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
          <div className="px-4 py-2 rounded-full text-xs font-bold border backdrop-blur-sm flex items-center gap-2 bg-night-3/80 border-ink-3/50 text-ink-4">
            <User className="w-3 h-3" />
            {avoidNote}
          </div>
        </div>
      )}
      {/* 關鍵抉擇 Modal */}
      {activeKeyChoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="night-card w-full max-w-sm p-6">
            <h3 className="font-kai text-xl mb-4 text-cinnabar-3">關鍵抉擇</h3>
            <p className="text-sm text-paper-3 mb-5 leading-relaxed">{activeKeyChoice.question}</p>
            <div className="space-y-2.5">
              {activeKeyChoice.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSpecialFlag(activeKeyChoice.id, opt.value);
                    setActiveKeyChoice(null);
                  }}
                  className="w-full text-left p-3.5 rounded-xl bg-night-3/60 border border-ink-3/40 hover:bg-cinnabar-deep/30 hover:border-cinnabar/30 transition-colors text-sm text-paper"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* 儲存 / 讀取 Modal */}
      <SaveGameMenu
        isOpen={showSaveMenu}
        onClose={() => setShowSaveMenu(false)}
        onSave={(name) => saveToNamedSlot(name)}
      />
      <LoadGameMenu
        isOpen={showLoadMenu}
        onClose={() => setShowLoadMenu(false)}
        onLoad={(state) => {
          loadState(state);
          setShowLoadMenu(false);
        }}
      />
      {subViewNode}
    </>
  );
}
