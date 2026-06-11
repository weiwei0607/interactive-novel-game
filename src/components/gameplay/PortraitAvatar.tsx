interface PortraitSet {
  normal?: string;
  angry?: string;
  surprised?: string;
  worried?: string;
  nervous?: string;
  calm?: string;
}

interface PortraitTarget {
  name: string;
  avatar: string;
  portraits?: PortraitSet;
}

interface Props {
  target: PortraitTarget;
  mood?: string | null;
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const MOOD_MAP: Record<string, string> = {
  angry: 'angry',
  dodge: 'worried',
  panic: 'surprised',
  lie: 'nervous',
  float: 'calm',
};

const SIZE_CLASS: Record<string, string> = {
  sm: 'w-12 h-12 text-2xl',
  md: 'w-20 h-20 text-4xl',
  lg: 'w-28 h-28 text-6xl',
  xl: 'w-36 h-36 text-7xl',
};

function resolvePortrait(target: PortraitTarget, mood: string | null): string | null {
  if (!target.portraits) return null;
  const key = mood ? (MOOD_MAP[mood] ?? 'normal') : 'normal';
  return target.portraits[key as keyof PortraitSet] ?? target.portraits['normal'] ?? null;
}

export default function PortraitAvatar({ target, mood = null, isSpeaking = false, size = 'lg' }: Props) {
  const portrait = resolvePortrait(target, mood);
  const moodAnimName = (() => {
    if (isSpeaking) return undefined;
    if (mood === 'angry') return 'avatarAngry 0.8s ease-in-out';
    if (mood === 'dodge') return 'avatarDodge 0.9s ease-out';
    if (mood === 'panic') return 'moodPanic 0.6s ease-in-out';
    if (mood === 'lie') return 'moodLie 0.5s ease-in-out';
    if (mood === 'float') return 'moodFloat 2s ease-in-out infinite';
    return 'avatarIdleLive 3s ease-in-out infinite';
  })();

  const sizeClass = SIZE_CLASS[size];

  if (portrait) {
    return (
      <div
        className={`relative ${sizeClass} rounded-full overflow-hidden border-2 border-amber-500/30 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center`}
        style={{
          animation: isSpeaking ? 'avatarTalk 0.6s ease-in-out infinite' : moodAnimName,
        }}
      >
        <img
          src={portrait}
          alt={target.name}
          className="w-full h-full object-cover object-top"
          loading="eager"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = 'none';
            const parent = t.parentElement;
            if (parent) parent.textContent = target.avatar;
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${sizeClass} rounded-full flex items-center justify-center border-2 backdrop-blur-sm bg-gradient-to-b from-amber-500/10 to-slate-900/20 border-amber-500/20`}
      style={{
        animation: isSpeaking ? 'avatarTalk 0.6s ease-in-out infinite' : moodAnimName,
      }}
    >
      {target.avatar}
    </div>
  );
}
