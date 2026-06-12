import { ArrowRight, Skull, MapPin, Users, ChevronLeft, Wine } from 'lucide-react';
import type { Story } from '../../types/game';

interface Props {
  story: Story;
  onStart: () => void;
  onBack?: () => void;
}

export default function CaseIntroScreen({ story, onStart, onBack }: Props) {
  return (
    <div className="min-h-screen px-5 py-6 animate-fade-in bg-paper text-ink">
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-ink-3 text-sm mb-4 hover:text-ink transition-colors py-2 -ml-1"
        >
          <ChevronLeft className="w-4 h-4" />
          返回角色選擇
        </button>
      )}
      <div className="paper-card p-6 mb-6">
        <span className="text-xs font-medium text-cinnabar bg-cinnabar/10 px-2 py-0.5 rounded-full">
          {story.era} · {story.setting}
        </span>
        <h2 className="font-kai text-3xl mt-3 mb-2">{story.title}</h2>
        <p className="text-ink-2 text-sm leading-relaxed mb-5">{story.synopsis}</p>

        {story.hasPrologue ? (
          <div className="flex items-center gap-2 text-sm text-verdigris bg-verdigris/10 border border-verdigris/25 rounded-xl px-4 py-3 mb-5">
            <Wine className="w-4 h-4 shrink-0" />
            <span>今晚的聚會還在進行中</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-cinnabar bg-cinnabar/10 border border-cinnabar/25 rounded-xl px-4 py-3 mb-5">
            <Skull className="w-4 h-4 shrink-0" />
            <span>受害者：{story.victim}</span>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 text-xs text-ink-3">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>{story.characters.filter((c) => c.isPlayable).length} 名嫌疑人</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{story.locations.length} 個調查地點</span>
          </div>
        </div>
      </div>

      <div className="paper-card p-5 mb-6">
        <h3 className="font-kai text-lg mb-3">{story.hasPrologue ? '這個夜晚' : '你的任務'}</h3>
        <ul className="space-y-2.5 text-sm text-ink-2">
          {story.hasPrologue ? (
            <>
              <li className="flex items-start gap-2">
                <span className="text-verdigris mt-0.5">1.</span>
                <span>與在場的人交談，感受這個場合的氛圍</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verdigris mt-0.5">2.</span>
                <span>注意每個人的舉止和對話——這些記憶可能很重要</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verdigris mt-0.5">3.</span>
                <span>當你選擇「回房休息」後，故事才會繼續發展</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-start gap-2">
                <span className="text-cinnabar mt-0.5">1.</span>
                <span>探索各個地點，收集關鍵線索</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cinnabar mt-0.5">2.</span>
                <span>與其他角色對話，判斷他們是否在說謊</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cinnabar mt-0.5">3.</span>
                <span>根據線索推理出真正的兇手</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cinnabar mt-0.5">4.</span>
                <span>在最後的指認中揭開真相</span>
              </li>
            </>
          )}
        </ul>
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 rounded-2xl bg-ink text-paper-2 font-semibold text-lg shadow-lg shadow-ink/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
      >
        {story.hasPrologue ? '進入場景' : '進入現場'}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
