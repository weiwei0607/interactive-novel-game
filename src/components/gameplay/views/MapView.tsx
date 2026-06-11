import { User, Pause, Package, AlertTriangle, Clock, Moon, Sun } from 'lucide-react';
import type { Story, Location } from '../../../types/game';
import { computeGameTime, getTimeAtmosphere } from '../../../utils/gameTime';
import { useGameStore } from '../../../store/gameStore';
import ProgressBar from '../../common/ProgressBar';
import SaveBadge from '../../common/SaveBadge';

interface Props {
  story: Story;
  progress: number;
  onEnterLocation: (loc: Location) => void;
  onShowClues: () => void;
  onShowProfile: () => void;
  onShowPause: () => void;
  onShowAccuse: () => void;
}

export default function MapView({
  story, progress, onEnterLocation, onShowClues, onShowProfile, onShowPause, onShowAccuse,
}: Props) {
  const visitedLocations = useGameStore((s) => s.visitedLocations);
  const collectedClues = useGameStore((s) => s.collectedClues);
  const lastSaveTime = useGameStore((s) => s.lastSaveTime);
  const elapsedMinutes = useGameStore((s) => s.elapsedMinutes);
  const getNpcsAtLocation = useGameStore((s) => s.getNpcsAtLocation);


  const gameTime = computeGameTime(elapsedMinutes, false);
  const timeIcon = gameTime.period === 'night' || gameTime.period === 'pre-dawn'
    ? <Moon className="w-3 h-3" />
    : <Sun className="w-3 h-3" />;

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="px-5 pt-5 pb-3 safe-top">
        {/* 時間顯示 */}
        <div className="flex items-center gap-1.5 mb-2 text-[11px] text-slate-400">
          <Clock className="w-3 h-3" />
          <span className="font-medium text-slate-300">{gameTime.periodLabel} {gameTime.label}</span>
          <span className="text-slate-500">·</span>
          {timeIcon}
          <span className="text-slate-500 italic">{getTimeAtmosphere(gameTime.period)}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">{story.title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onShowProfile}
              className="p-2 rounded-xl glass-card"
            >
              <User className="w-4 h-4" />
            </button>
            <button
              onClick={onShowPause}
              className="p-2 rounded-xl glass-card"
            >
              <Pause className="w-4 h-4" />
            </button>
          </div>
        </div>
        <ProgressBar progress={progress} label="調查進度" />
      </div>

      <div className="flex-1 px-5 pb-24 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-2 gap-3">
          {story.locations.map((loc) => {
            const isVisited = visitedLocations.includes(loc.id);
            const npcsHere = getNpcsAtLocation(loc.id);
            const npcCount = npcsHere.length;
            const hasClue = loc.clues.some((cId) => !collectedClues.includes(cId));
            return (
              <button
                key={loc.id}
                onClick={() => onEnterLocation(loc)}
                className={`relative p-4 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isVisited
                    ? 'bg-slate-800/60 border-slate-700/50'
                    : 'bg-slate-900/40 border-slate-800/50'
                }`}
              >
                <span className="text-2xl mb-2 block">{loc.icon}</span>
                <h3 className="font-bold text-sm">{loc.name}</h3>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {npcCount > 0 && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-blue-950/60 text-blue-400 rounded-full">
                      {npcCount} 人
                    </span>
                  )}
                  {hasClue && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-amber-950/60 text-amber-400 rounded-full">
                      線索
                    </span>
                  )}
                  {isVisited && !hasClue && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-500 rounded-full">
                      已探索
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 底部導航 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-slate-950 via-slate-950 to-transparent">
        <div className="flex gap-3">
          <button
            onClick={onShowClues}
            className="flex-1 py-3 rounded-xl glass-card flex items-center justify-center gap-2 text-sm font-medium hover:bg-slate-800/80"
          >
            <Package className="w-4 h-4" />
            線索 ({collectedClues.length})
          </button>
          <button
            onClick={onShowAccuse}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-900 to-red-800 text-white flex items-center justify-center gap-2 text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <AlertTriangle className="w-4 h-4" />
            指認兇手
          </button>
        </div>
      </div>

      <SaveBadge lastSaveTime={lastSaveTime} />
    </div>
  );
}
