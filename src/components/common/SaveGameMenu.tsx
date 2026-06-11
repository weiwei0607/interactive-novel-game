import { useState, useEffect } from 'react';
import { X, Save, Clock, AlertTriangle } from 'lucide-react';
import { listSaves } from '../../db/gameDatabase';
import type { SaveSlot } from '../../types/game';
import { useGameStore } from '../../store/gameStore';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

export default function SaveGameMenu({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = useState('');
  const [saves, setSaves] = useState<SaveSlot[]>([]);
  const [overwritingId, setOverwritingId] = useState<string | null>(null);
  const story = useGameStore((s) => s.getCurrentStory());
  const phase = useGameStore((s) => s.phase);

  useEffect(() => {
    if (isOpen && story) {
      const defaultName = `${story.title} - ${phaseLabel(phase)}`;
      setName(defaultName);
      listSaves().then((all) => {
        setSaves(all.filter((s) => s.storyId === story.id && !s.id.startsWith('auto-')));
      });
    }
  }, [isOpen, story, phase]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onSave(trimmed);
    onClose();
  };

  const handleOverwrite = (slotId: string, existingName: string) => {
    if (overwritingId === slotId) {
      setName(existingName);
      onSave(existingName);
      onClose();
      setOverwritingId(null);
    } else {
      setOverwritingId(slotId);
      setTimeout(() => setOverwritingId((prev) => (prev === slotId ? null : prev)), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md glass rounded-2xl p-6 max-h-[80vh] flex flex-col animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-100">儲存遊戲</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800/60 transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* 輸入存檔名稱 */}
        <div className="mb-4">
          <label className="text-xs text-slate-500 mb-1.5 block">存檔名稱</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            className="w-full px-4 py-2.5 bg-slate-900/60 border border-slate-700/50 rounded-xl text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            placeholder="輸入存檔名稱..."
            autoFocus
          />
        </div>

        <button
          onClick={handleSave}
          disabled={!name.trim()}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 text-white font-medium text-sm hover:shadow-amber-900/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-5"
        >
          <Save className="w-4 h-4" />
          儲存新存檔
        </button>

        {/* 現有存檔（可覆蓋） */}
        {saves.length > 0 && (
          <>
            <div className="text-xs text-slate-500 mb-2">或覆蓋現有存檔</div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-hide">
              {saves.map((save) => {
                const isOverwriting = overwritingId === save.id;
                return (
                  <div
                    key={save.id}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-900/30 flex items-center justify-center shrink-0">
                      <Save className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-200 truncate">{save.name}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(save.savedAt).toLocaleString('zh-TW', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        <span>·</span>
                        <span>{save.progressPercent}%</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleOverwrite(save.id, save.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isOverwriting
                          ? 'bg-red-700/80 text-white'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                      }`}
                    >
                      {isOverwriting ? (
                        <span className="flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          確認覆蓋
                        </span>
                      ) : (
                        '覆蓋'
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function phaseLabel(phase: string): string {
  const labels: Record<string, string> = {
    menu: '主選單',
    'story-select': '選擇案件',
    'character-select': '選擇角色',
    'case-intro': '案件介紹',
    prologue: '序幕',
    discovery: '發現現場',
    gameplay: '調查中',
    'final-accusation': '最終指認',
    ending: '結局',
  };
  return labels[phase] || phase;
}
