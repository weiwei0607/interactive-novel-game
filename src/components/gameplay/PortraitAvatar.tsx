import CharacterPortrait from './CharacterPortrait';

interface PortraitSet {
  normal?: string;
  angry?: string;
  surprised?: string;
  worried?: string;
  nervous?: string;
  calm?: string;
}

interface PortraitTarget {
  id?: string;
  name: string;
  avatar: string;
  role?: string;
  portraits?: PortraitSet;
}

const SIZE_PX: Record<string, number> = { sm: 48, md: 80, lg: 112, xl: 144 };

interface Props {
  target: PortraitTarget;
  mood?: string | null;
  isSpeaking?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  era?: string;
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

export default function PortraitAvatar({ target, mood = null, isSpeaking = false, size = 'lg', era }: Props) {
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
        className={`relative ${sizeClass} rounded-full overflow-hidden border-2 border-ink-3/50 bg-paper-3/40 backdrop-blur-sm flex items-center justify-center`}
        style={{
          animation: isSpeaking ? 'avatarTalk 0.6s ease-in-out infinite' : moodAnimName,
        }}
      >
        <img
          src={portrait}
          alt={target.name}
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(0.35) sepia(0.18) contrast(1.02)' }}
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
      className={`relative ${sizeClass} flex items-center justify-center`}
      style={{
        animation: isSpeaking ? 'avatarTalk 0.6s ease-in-out infinite' : moodAnimName,
      }}
    >
      <CharacterPortrait
        seed={target.id || target.name}
        name={target.name}
        role={target.role}
        avatar={target.avatar}
        era={era}
        size={SIZE_PX[size]}
        speaking={isSpeaking}
      />
    </div>
  );
}
