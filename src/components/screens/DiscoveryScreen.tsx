import { useState, useEffect, useRef } from 'react';
import { Eye, AlertTriangle, ArrowRight } from 'lucide-react';
import type { Story, Character } from '../../types/game';
import { useGameStore } from '../../store/gameStore';
import { useAI } from '../../hooks/useAI';

interface Props {
  story: Story;
  playerCharacter: Character;
  apiKey: string;
  onStartInvestigation: () => void;
}

export default function DiscoveryScreen({ story, playerCharacter, apiKey, onStartInvestigation }: Props) {
  const incidentDescription = useGameStore((s) => s.incidentDescription);
  const specialFlags = useGameStore((s) => s.specialFlags);
  const { generateSceneDescription, loading } = useAI({ apiKey });
  const [displayText, setDisplayText] = useState(incidentDescription);
  const generatedRef = useRef(false);

  // 如果沒有預設的 incidentDescription，用 AI 生成
  useEffect(() => {
    if (!incidentDescription && !generatedRef.current && apiKey) {
      generatedRef.current = true;
      generateSceneDescription('發現屍體', { title: story.title, synopsis: story.synopsis } as Story).then((desc) => {
        setDisplayText(desc);
      });
    } else if (!incidentDescription && !apiKey) {
      // Fallback without AI
      const victim = story.characters.find((c) => c.id === story.truth.murdererId);
      setDisplayText(
        `你醒來時，天還沒亮。\n\n空氣裡有一種說不上來的異樣——太安靜了，安靜得不像是這棟房子應該有的聲音。你循著直覺走向${story.locations[0]?.name || '大廳'}，然後你看見了${victim?.name || '他'}。\n\n${victim?.name || '他'}的姿勢很奇怪，像是被突然打斷了什麼動作。你站在原地，感覺到某種東西從腳底升起——不是恐懼，是一種更深、更冷的東西。你知道，從這一刻起，一切都不同了。`
      );
    }
  }, [incidentDescription, apiKey, story, playerCharacter, generateSceneDescription]);

  // 記憶碎片：顯示玩家在序幕階段的特殊行動
  const memoryFragments = Object.entries(specialFlags)
    .filter(([key]) => key.startsWith('prologue-') || key.includes('choice'))
    .map(([, value]) => value);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-red-950/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Eye className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-red-300 mb-2">發現</h2>
          <p className="text-sm text-ink-4">
            你醒了。或者說，你以為你醒了。
          </p>
        </div>

        <div className="night-card p-5 mb-5 border-red-900/20">
          {loading && !displayText ? (
            <div className="flex flex-col items-center py-4">
              <div className="w-6 h-6 border-2 border-red-600/30 border-t-red-500 rounded-full animate-spin mb-2" />
              <p className="text-xs text-ink-4">AI 正在撰寫發現場景...</p>
            </div>
          ) : (
            <p className="text-sm text-paper-3 leading-relaxed whitespace-pre-wrap">
              {displayText}
            </p>
          )}
        </div>

        {memoryFragments.length > 0 && (
          <div className="night-card p-4 mb-5 border-cinnabar/20">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-cinnabar-2" />
              <span className="text-xs font-bold text-cinnabar-2">你記得的事</span>
            </div>
            <div className="space-y-2">
              {memoryFragments.map((frag, i) => (
                <p key={i} className="text-xs text-ink-4 border-l-2 border-cinnabar/30 pl-3">
                  {frag}
                </p>
              ))}
            </div>
            <p className="text-xs text-ink-3 mt-3 italic">
              但這些記憶是完整的嗎？你確定自己沒有遺漏什麼嗎？
            </p>
          </div>
        )}

        <button
          onClick={onStartInvestigation}
          disabled={loading && !displayText}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-cinnabar to-cinnabar-2 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <ArrowRight className="w-5 h-5" />
          開始調查
        </button>
      </div>
    </div>
  );
}
