interface Props {
  progress: number;
  label?: string;
}

export default function ProgressBar({ progress, label }: Props) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs text-ink-4 mb-1.5">
          <span>{label}</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-night-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cinnabar-2 to-cinnabar-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
