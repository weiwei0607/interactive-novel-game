import type { Story, Character } from '../../../types/game';
import { useGameStore } from '../../../store/gameStore';
import PortraitAvatar from '../PortraitAvatar';

interface Props {
  story: Story;
  playerCharacter: Character;
  onBack: () => void;
}

/** 將第三人稱敘述轉為第一人稱（玩家視角） */
function toFirstPerson(text: string): string {
  return text
    .replace(/他獨自/g, '我獨自')
    .replace(/他的/g, '我的')
    .replace(/他畢生/g, '我畢生')
    .replace(/他唯一/g, '我唯一')
    .replace(/他聲稱/g, '我聲稱')
    .replace(/他/g, '我')
    .replace(/她/g, '我')
    .replace(/妳/g, '我');
}

export default function ProfileView({ story, playerCharacter, onBack }: Props) {
  const unlockedMemories = useGameStore((s) => s.unlockedMemories);
  const isPlayerKiller = story.specialMechanic?.type === 'player_is_killer' && playerCharacter.id === story.truth.murdererId;
  const hasAmnesia = isPlayerKiller && playerCharacter.secretPrologue;

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="px-5 pt-5 pb-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-slate-400 text-sm mb-3 hover:text-slate-200"
        >
          <span>←</span>
          返回
        </button>
        <h2 className="text-xl font-bold">角色檔案</h2>
      </div>

      <div className="flex-1 px-5 pb-24 overflow-y-auto scrollbar-hide">
        <div className="glass-card p-5 mb-4 text-center">
          <PortraitAvatar target={playerCharacter} size="xl" />
          <h3 className="text-xl font-bold mt-3">{playerCharacter.name}</h3>
          <p className="text-sm text-slate-400">{playerCharacter.role}</p>
        </div>

        {hasAmnesia && (
          <div className="glass-card p-4 mb-4 border-amber-800/30">
            <h4 className="font-bold text-sm text-amber-400 mb-2">模糊記憶</h4>
            <p className="text-sm text-slate-300 italic">{toFirstPerson(playerCharacter.secretPrologue || '')}</p>
            <p className="text-xs text-slate-500 mt-2">有些記憶像是被水泡過的照片——你能看見輪廓，卻看不清細節。</p>
          </div>
        )}

        {hasAmnesia && unlockedMemories.length > 0 && (
          <div className="glass-card p-4 mb-4 border-purple-800/30">
            <h4 className="font-bold text-sm text-purple-400 mb-2">恢復的記憶</h4>
            <div className="space-y-2">
              {unlockedMemories.map((mem, i) => (
                <p key={i} className="text-sm text-slate-300 border-l-2 border-purple-700/30 pl-3">
                  {mem === 'memory-blood' && '你記得自己的手上有血。但那是誰的血？'}
                  {mem === 'memory-weapon' && '你記得自己碰過某個東西——金屬的，冷的。'}
                  {mem === 'memory-argue' && '你記得爭吵的聲音，記得自己說了什麼，但不記得對方說了什麼。'}
                  {mem === 'memory-walk' && '你記得自己走過一條很長的走廊，但不知道為什麼要走。'}
                  {!['memory-blood', 'memory-weapon', 'memory-argue', 'memory-walk'].includes(mem) && `記憶碎片：${mem}`}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="glass-card p-4 mb-4">
          <h4 className="font-bold text-sm text-amber-400 mb-2">{hasAmnesia ? '隱藏的秘密' : '我的秘密'}</h4>
          <p className={`text-sm text-slate-300 ${hasAmnesia && unlockedMemories.length < 3 ? 'blur-sm select-none' : ''}`}>
            {toFirstPerson(playerCharacter.secret)}
          </p>
          {hasAmnesia && unlockedMemories.length < 3 && (
            <p className="text-xs text-slate-500 mt-2">收集更多線索來恢復記憶...</p>
          )}
        </div>

        {playerCharacter.tool && (
          <div className="glass-card p-4 mb-4 border border-indigo-800/30">
            <h4 className="font-bold text-sm text-indigo-400 mb-2">隨身道具</h4>
            <p className="text-sm font-medium text-slate-200">{playerCharacter.tool.name}</p>
            <p className="text-xs text-slate-400 mt-1">{playerCharacter.tool.description}</p>
          </div>
        )}

        <div className="glass-card p-4 mb-4">
          <h4 className="font-bold text-sm text-red-400 mb-2">我的動機</h4>
          <p className="text-sm text-slate-300">{toFirstPerson(playerCharacter.motive)}</p>
        </div>

        <div className="glass-card p-4 mb-4">
          <h4 className="font-bold text-sm text-emerald-400 mb-2">我的不在場證明</h4>
          <p className="text-sm text-slate-300">{toFirstPerson(playerCharacter.alibi)}</p>
        </div>

        <h3 className="font-bold text-sm text-slate-400 mb-3">其他角色</h3>
        <div className="space-y-2">
          {story.characters.filter((c) => c.id !== playerCharacter.id && c.isPlayable).map((char) => (
            <div key={char.id} className="glass-card p-3 flex items-center gap-3">
              <PortraitAvatar target={char} size="sm" />
              <div>
                <span className="font-bold text-sm">{char.name}</span>
                <p className="text-xs text-slate-500">{char.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
