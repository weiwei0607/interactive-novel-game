import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

interface Props {
  lastSaveTime: number;
}

export default function SaveBadge({ lastSaveTime }: Props) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (lastSaveTime > 0) {
      setExiting(false);
      setVisible(true);
      const hideTimer = setTimeout(() => {
        setExiting(true);
        const removeTimer = setTimeout(() => setVisible(false), 300);
        return () => clearTimeout(removeTimer);
      }, 2000);
      return () => clearTimeout(hideTimer);
    }
  }, [lastSaveTime]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-xs font-medium backdrop-blur-sm transition-all duration-300 ${
        exiting ? 'opacity-0 translate-y-[-8px]' : 'opacity-100 translate-y-0'
      }`}
    >
      <Save className="w-3 h-3" />
      已自動儲存
    </div>
  );
}
