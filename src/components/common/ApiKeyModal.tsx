import { useState, useEffect, useCallback } from 'react';
import { Key, X, Eye, EyeOff } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
  currentKey: string;
}

export default function ApiKeyModal({ isOpen, onClose, onSave, currentKey }: Props) {
  const [key, setKey] = useState(currentKey);
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setKey(currentKey);
      setError('');
    }
  }, [isOpen, currentKey]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleSave = useCallback(() => {
    const trimmed = key.trim();
    if (trimmed && !trimmed.startsWith('AIzaSy')) {
      setError('API Key 格式應以 AIzaSy 開頭');
      return;
    }
    setError('');
    onSave(trimmed);
    onClose();
  }, [key, onSave, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="glass-card w-full max-w-sm p-6 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Key className="w-5 h-5 text-amber-400" />
            Gemini API Key
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-700/50 transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          AI NPC 對話需要 Gemini API Key。金鑰只會存在你的裝置上，不會上傳到任何伺服器。
        </p>
        <div className="relative mb-2">
          <input
            type={showKey ? 'text' : 'password'}
            value={key}
            onChange={(e) => { setKey(e.target.value); setError(''); }}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            placeholder="AIzaSy..."
            className="w-full px-4 py-3 pr-12 bg-slate-900/80 border border-slate-700 rounded-xl text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
          />
          <button
            onClick={() => setShowKey(!showKey)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-300 transition-colors"
          >
            {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {error && (
          <p className="text-xs text-red-400 mb-3">{error}</p>
        )}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-slate-700/50 text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 rounded-xl bg-amber-600 text-sm font-medium hover:bg-amber-500 transition-colors"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  );
}
