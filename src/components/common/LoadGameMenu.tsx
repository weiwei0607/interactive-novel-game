import { useState, useEffect } from 'react';
import { X, Clock, Trash2, BookOpen, AlertTriangle } from 'lucide-react';
import { listSaves, loadGame, deleteSave } from '../../db/gameDatabase';
import type { SaveSlot, GameState } from '../../types/game';
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoad: (state: GameState) => void;
}

export default function LoadGameMenu({ isOpen, onClose, onLoad }: Props) {
  const [saves, setSaves] = useState<SaveSlot[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      listSaves().then(setSaves);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleLoad = async (slotId: string) => {
    setLoadingId(slotId);
    try {
      const data = await loadGame(slotId);
      if (data) {
        onLoad(data.state);
      }
    } finally {
      setLoadingId(null);
    }
  };

  const handleDelete = async (slotId: string) => {
    if (deletingId === slotId) {
      await deleteSave(slotId);
      setSaves((prev) => prev.filter((s) => s.id !== slotId));
      setDeletingId(null);
    } else {
      setDeletingId(slotId);
      setTimeout(() => setDeletingId((prev) => (prev === slotId ? null : prev)), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md glass rounded-2xl p-6 max-h-[80vh] flex flex-col animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-100">讀取存檔</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800/60 transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {saves.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12 text-slate-500">
            <BookOpen className="w-12 h-12 mb-3 opacity-30" />
            <p>尚無存檔</p>
            <p className="text-xs mt-1">遊戲進度會自動儲存到本地</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-hide">
            {saves.map((save) => {
              const isDeleting = deletingId === save.id;
              return (
                <div
                  key={save.id}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-900/30 flex items-center justify-center shrink-0">
                    <span className="text-lg">{'🔍'}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-200 truncate">
                      {save.storyTitle}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>{save.characterName}</span>
                      <span>·</span>
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
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleLoad(save.id)}
                      disabled={loadingId !== null}
                      className="px-3 py-1.5 rounded-lg bg-amber-700/80 hover:bg-amber-600 text-white text-xs font-medium transition-colors disabled:opacity-50"
                    >
                      {loadingId === save.id ? '讀取中...' : '讀取'}
                    </button>
                    <button
                      onClick={() => handleDelete(save.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDeleting
                          ? 'bg-red-900/50 text-red-400'
                          : 'text-slate-500 hover:text-red-400 hover:bg-red-900/30 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {isDeleting ? (
                        <AlertTriangle className="w-4 h-4" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
