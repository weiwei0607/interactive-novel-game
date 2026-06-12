import { useState, useEffect, useCallback } from 'react';
import { useGameStore } from './store/gameStore';

import { getSetting, setSetting } from './db/gameDatabase';
import type { GameState } from './types/game';
import { loadStory } from './data/stories/lazy';
import MenuScreen from './components/screens/MenuScreen';
import StorySelectScreen from './components/screens/StorySelectScreen';
import CharacterSelectScreen from './components/screens/CharacterSelectScreen';
import CaseIntroScreen from './components/screens/CaseIntroScreen';
import PrologueScreen from './components/screens/PrologueScreen';
import DiscoveryScreen from './components/screens/DiscoveryScreen';
import GameplayScreen from './components/screens/GameplayScreen';
import FinalAccusationScreen from './components/screens/FinalAccusationScreen';
import EndingScreen from './components/screens/EndingScreen';
import ApiKeyModal from './components/common/ApiKeyModal';
import LoadGameMenu from './components/common/LoadGameMenu';
import { Key, Loader2 } from 'lucide-react';

export default function App() {
  const {
    phase, storyId, currentStory,
    setPhase, selectStory, selectCharacter, setCurrentStory,
    resetGame, getCurrentCharacter, loadState,
    setSpecialFlag,
  } = useGameStore();

  const [apiKey, setApiKey] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [showLoadMenu, setShowLoadMenu] = useState(false);
  const [accusedId, setAccusedId] = useState<string | null>(null);
  const [loadingStory, setLoadingStory] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const story = currentStory;
  const playerCharacter = getCurrentCharacter();

  // 載入 API Key（優先使用使用者設定的，否則 fallback 到環境變數）
  useEffect(() => {
    getSetting('gemini_api_key', '').then((saved) => {
      const envKey = import.meta.env.VITE_GEMINI_API_KEY;
      setApiKey(saved || (typeof envKey === 'string' ? envKey : ''));
    });
  }, []);

  // 離線檢測
  useEffect(() => {
    const update = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    setIsOnline(navigator.onLine);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  // 當 storyId 存在但 currentStory 為 null 時，自動載入故事數據
  useEffect(() => {
    if (storyId && !currentStory && !loadingStory) {
      setLoadingStory(true);
      loadStory(storyId).then((s) => {
        if (s) setCurrentStory(s);
        setLoadingStory(false);
      }).catch(() => setLoadingStory(false));
    }
  }, [storyId, currentStory, setCurrentStory, loadingStory]);

  const handleSaveApiKey = useCallback((key: string) => {
    setApiKey(key);
    setSetting('gemini_api_key', key);
  }, []);

  const handleStart = useCallback(() => {
    setPhase('story-select');
  }, [setPhase]);

  const handleSelectStory = useCallback(async (id: string) => {
    setLoadingStory(true);
    const s = await loadStory(id);
    if (s) {
      setCurrentStory(s);
      selectStory(id);
    }
    setLoadingStory(false);
  }, [selectStory, setCurrentStory]);

  const handleSelectCharacter = useCallback((id: string) => {
    selectCharacter(id);
  }, [selectCharacter]);

  const handleStartGameplay = useCallback(() => {
    if (story?.hasPrologue) {
      setPhase('prologue');
    } else {
      setPhase('gameplay');
    }
  }, [setPhase, story]);

  const handleAccuse = useCallback(() => {
    setPhase('final-accusation');
  }, [setPhase]);

  const handleConfirmAccusation = useCallback((id: string) => {
    setAccusedId(id);
    setPhase('ending');
  }, [setPhase]);

  const handleEndPrologue = useCallback(() => {
    setSpecialFlag('incidentTriggered', 'true');
    setPhase('discovery');
  }, [setPhase, setSpecialFlag]);

  const handleStartInvestigation = useCallback(() => {
    setPhase('gameplay');
  }, [setPhase]);

  const handleRestart = useCallback(() => {
    setAccusedId(null);
    if (story) {
      selectStory(story.id);
      setPhase('character-select');
    }
  }, [story, selectStory, setPhase]);

  const handleMenu = useCallback(() => {
    resetGame();
    setAccusedId(null);
    setShowLoadMenu(false);
    setPhase('menu');
  }, [resetGame, setPhase]);

  const handleLoadGameState = useCallback(async (state: GameState) => {
    loadState(state);
    setShowLoadMenu(false);
    if (state.storyId) {
      const s = await loadStory(state.storyId);
      if (s) setCurrentStory(s);
    }
  }, [loadState, setCurrentStory]);

  // 載入中遮罩
  if (loadingStory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-night text-paper-3">
        <Loader2 className="w-8 h-8 animate-spin text-cinnabar-2 mb-4" />
        <p className="text-sm">載入案件中...</p>
      </div>
    );
  }

  const offlineBanner = !isOnline && (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-950/90 border-b border-red-800/50 text-red-200 text-xs text-center py-2 px-4">
      ⚠️ 你已離線。遊戲本體可繼續進行，但 AI 對話功能將無法使用。
    </div>
  );

  // 根據階段渲染對應畫面
  switch (phase) {
    case 'menu':
      return (
        <>
          {offlineBanner}
          <MenuScreen
            onStart={handleStart}
            onLoad={() => setShowLoadMenu(true)}
            onSettings={() => setShowApiKeyModal(true)}
          />
          <ApiKeyModal
            isOpen={showApiKeyModal}
            onClose={() => setShowApiKeyModal(false)}
            onSave={handleSaveApiKey}
            currentKey={apiKey}
          />
          <LoadGameMenu
            isOpen={showLoadMenu}
            onClose={() => setShowLoadMenu(false)}
            onLoad={handleLoadGameState}
          />
          {!apiKey && (
            <button
              onClick={() => setShowApiKeyModal(true)}
              className="fixed bottom-4 left-4 z-40 p-3 rounded-full night-card hover:bg-night-3/80 transition-colors"
              title="設定 API Key"
            >
              <Key className="w-4 h-4 text-cinnabar-2" />
            </button>
          )}
        </>
      );

    case 'story-select':
      return (
        <>
          {offlineBanner}
          <StorySelectScreen
          onSelect={handleSelectStory}
          onBack={handleMenu}
        />
        </>
      );

    case 'character-select':
      return story ? (
        <>
          {offlineBanner}
          <CharacterSelectScreen
          story={story}
          onSelect={handleSelectCharacter}
          onBack={() => setPhase('story-select')}
        />
        </>
      ) : null;

    case 'case-intro':
      return story ? (
        <>
          {offlineBanner}
          <CaseIntroScreen
          story={story}
          onStart={handleStartGameplay}
          onBack={() => setPhase('character-select')}
        />
        </>
      ) : null;

    case 'prologue':
      return story && playerCharacter ? (
        <>
          {offlineBanner}
          <PrologueScreen
            story={story}
            playerCharacter={playerCharacter}
            apiKey={apiKey}
            onEndPrologue={handleEndPrologue}
          />
        </>
      ) : null;

    case 'discovery':
      return story && playerCharacter ? (
        <>
          {offlineBanner}
          <DiscoveryScreen
            story={story}
            playerCharacter={playerCharacter}
            apiKey={apiKey}
            onStartInvestigation={handleStartInvestigation}
          />
        </>
      ) : null;

    case 'gameplay':
      return story && playerCharacter ? (
        <>
          {offlineBanner}
          <GameplayScreen
          story={story}
          playerCharacter={playerCharacter}
          apiKey={apiKey}
          onAccuse={handleAccuse}
        />
        </>
      ) : null;

    case 'final-accusation':
      return story && playerCharacter ? (
        <>
          {offlineBanner}
          <FinalAccusationScreen
          story={story}
          playerCharacter={playerCharacter}
          onConfirm={handleConfirmAccusation}
          onBack={() => setPhase('gameplay')}
        />
        </>
      ) : null;

    case 'ending':
      return story && playerCharacter && accusedId ? (
        <>
          {offlineBanner}
          <EndingScreen
          story={story}
          playerCharacter={playerCharacter}
          accusedId={accusedId}
          apiKey={apiKey}
          onRestart={handleRestart}
          onMenu={handleMenu}
        />
        </>
      ) : null;

    default:
      return null;
  }
}
