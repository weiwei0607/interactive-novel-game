import type { Story, Character, Location, NPC, Clue, Truth } from '../../types/game';

interface StoryTemplate {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  setting: string;
  synopsis: string;
  victim: string;
  characters: Omit<Character, 'isPlayable'>[];
  locations: Omit<Location, 'clues' | 'npcs'>[];
  npcs: NPC[];
  clues: Clue[];
  truth: Truth;
}

export function buildStory(t: StoryTemplate): Story {
  const playableChars: Character[] = t.characters.map((c) => ({ ...c, isPlayable: true }));
  const victimChar: Character = {
    id: `victim-${t.id}`,
    name: t.victim.split('（')[0],
    role: '受害者',
    avatar: '💀',
    description: t.victim,
    secret: t.truth.murdererId === 'unknown' ? '' : ' victim secret ',
    motive: '',
    alibi: '',
    isPlayable: false,
  };

  // 建立 location -> clues/npcs 映射
  const locClues = new Map<string, string[]>();
  const locNpcs = new Map<string, string[]>();
  t.clues.forEach((c) => {
    const arr = locClues.get(c.locationId) || [];
    arr.push(c.id);
    locClues.set(c.locationId, arr);
  });
  t.npcs.forEach((n) => {
    const arr = locNpcs.get(n.defaultLocation) || [];
    arr.push(n.id);
    locNpcs.set(n.defaultLocation, arr);
  });

  const locations: Location[] = t.locations.map((l) => ({
    ...l,
    clues: locClues.get(l.id) || [],
    npcs: locNpcs.get(l.id) || [],
  }));

  return {
    id: t.id,
    title: t.title,
    subtitle: t.subtitle,
    era: t.era,
    setting: t.setting,
    synopsis: t.synopsis,
    victim: t.victim,
    characters: [...playableChars, victimChar],
    locations,
    npcs: t.npcs,
    clues: t.clues,
    truth: t.truth,
  };
}
