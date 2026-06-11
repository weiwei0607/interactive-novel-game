import { useState } from 'react';
import { AlertTriangle, ArrowRight, Check, Shield, ChevronLeft, Package, Skull, Target } from 'lucide-react';
import type { Story, Character } from '../../types/game';
import { useGameStore } from '../../store/gameStore';
import PortraitAvatar from '../gameplay/PortraitAvatar';

interface Props {
  story: Story;
  playerCharacter: Character;
  onConfirm: (accusedId: string) => void;
  onBack?: () => void;
}

export default function FinalAccusationScreen({ story, playerCharacter, onConfirm, onBack }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showClues, setShowClues] = useState(false);
  const { collectedClues, examinedClues, setSpecialFlag, plantedEvidence } = useGameStore();

  const isPlayerKiller = story.specialMechanic?.type === 'player_is_killer' && playerCharacter.id === story.truth.murdererId;

  const suspects = story.characters.filter((c) => c.isPlayable && (isPlayerKiller ? c.id !== playerCharacter.id : c.id !== playerCharacter.id));
  // Hidden clues only visible if player explicitly examined them
  const myClues = story.clues.filter(
    (c) => collectedClues.includes(c.id) && (!c.isHidden || examinedClues.includes(c.id))
  );

  if (confirmed && selected) {
    const accused = suspects.find((s) => s.id === selected);
    const isSelfConfession = selected === 'self-confession';
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
        <div className="text-center max-w-sm">
          <Shield className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{isPlayerKiller && !isSelfConfession ? '最終栽贓' : '最終指認'}</h2>
          <p className="text-slate-400 text-sm mb-6">
            {isSelfConfession
              ? <>你選擇<span className="text-amber-300 font-bold">自首</span>，承認自己是兇手</>
              : <>你{isPlayerKiller ? '栽贓' : '指控'} <span className="text-amber-300 font-bold">{accused?.name}</span> 是兇手</>
            }
          </p>
          <p className="text-sm text-slate-300 mb-8">
            收集了 {collectedClues.length} 個線索，準備揭開真相...
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setConfirmed(false)}
              className="flex-1 py-3 rounded-xl bg-slate-700/50 text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              返回修改
            </button>
            <button
              onClick={() => onConfirm(isSelfConfession ? playerCharacter.id : selected)}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              揭開真相
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-6 animate-fade-in">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-slate-400 text-sm mb-4 hover:text-slate-200 transition-colors py-2 -ml-1"
        >
          <ChevronLeft className="w-4 h-4" />
          返回調查
        </button>
      )}

      <div className="text-center mb-6">
        {isPlayerKiller ? (
          <>
            <Skull className="w-10 h-10 text-red-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">最終栽贓</h2>
            <p className="text-slate-400 text-sm">
              你才是兇手。選擇一個替罪羊，或者選擇自首。
            </p>
          </>
        ) : (
          <>
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">最終指認</h2>
            <p className="text-slate-400 text-sm">
              根據你收集的 {collectedClues.length} 個線索，選擇你認為的兇手
            </p>
          </>
        )}
      </div>

      {/* 線索回顧 */}
      {myClues.length > 0 && (
        <div className="mb-5">
          <button
            onClick={() => setShowClues(!showClues)}
            className="w-full flex items-center justify-between py-3 px-4 rounded-xl glass-card hover:bg-slate-800/80 transition-colors text-sm"
          >
            <span className="flex items-center gap-2">
              <Package className="w-4 h-4 text-amber-400" />
              已收集的線索 ({myClues.length})
            </span>
            <ChevronLeft className={`w-4 h-4 text-slate-500 transition-transform ${showClues ? '-rotate-90' : ''}`} />
          </button>
          {showClues && (
            <div className="mt-2 space-y-2 animate-slide-up">
              {myClues.map((clue) => (
                <div key={clue.id} className="glass-card p-3 border-l-2 border-amber-600/50">
                  <p className="text-sm font-medium text-slate-200">{clue.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{clue.description.slice(0, 60)}...</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="space-y-3 mb-6">
        {suspects.map((suspect) => (
          <button
            key={suspect.id}
            onClick={() => setSelected(suspect.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${
              selected === suspect.id
                ? 'bg-red-950/40 border-red-600/50 ring-1 ring-red-600/30'
                : 'glass-card border-slate-700/40 hover:bg-slate-800/80'
            }`}
          >
            <PortraitAvatar target={suspect} size="md" />
            <div className="flex-1 text-left">
              <h3 className="font-bold">{suspect.name}</h3>
              <p className="text-xs text-slate-500">{suspect.role}</p>
              {isPlayerKiller && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full mt-1 inline-flex items-center gap-1 ${
                  (plantedEvidence[suspect.id] || []).length >= 3
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                    : (plantedEvidence[suspect.id] || []).length >= 1
                    ? 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                    : 'bg-slate-800 text-slate-500 border border-slate-700/40'
                }`}>
                  <Target className="w-2.5 h-2.5" />
                  已栽贓 {(plantedEvidence[suspect.id] || []).length} 個證據
                </span>
              )}
            </div>
            {selected === suspect.id && (
              <Check className="w-5 h-5 text-red-400" />
            )}
          </button>
        ))}
      </div>

      {isPlayerKiller && (
        <div className="mb-4">
          <button
            onClick={() => setSelected('self-confession')}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${
              selected === 'self-confession'
                ? 'bg-amber-950/40 border-amber-600/50 ring-1 ring-amber-600/30'
                : 'glass-card border-slate-700/40 hover:bg-slate-800/80'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center">
              <Skull className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold text-amber-300">自首</h3>
              <p className="text-xs text-slate-500">承認自己是兇手，接受應有的懲罰</p>
            </div>
            {selected === 'self-confession' && <Check className="w-5 h-5 text-amber-400" />}
          </button>
        </div>
      )}

      <div className="flex gap-3">
        {onBack && (
          <button
            onClick={onBack}
            className="flex-1 py-4 rounded-2xl bg-slate-700/50 text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            繼續調查
          </button>
        )}
        <button
          onClick={() => {
            if (!selected) return;
            if (isPlayerKiller && selected !== 'self-confession') {
              setSpecialFlag('endingCause', 'killer_escaped');
            }
            setConfirmed(true);
          }}
          disabled={!selected}
          className={`flex-1 py-4 rounded-2xl font-semibold text-lg transition-all ${
            selected
              ? 'bg-gradient-to-r from-red-800 to-red-700 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {isPlayerKiller
            ? (selected && selected !== 'self-confession' && (plantedEvidence[selected] || []).length >= 3
              ? '確認栽贓（證據充足）'
              : '確認栽贓')
            : '確認指認'}
        </button>
      </div>
    </div>
  );
}
