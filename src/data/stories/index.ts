import type { Story } from '../../types/game';

import { islandWillStory } from './island-will';
import { onsenHotelStory } from './onsen-hotel';
import { inkAndPaperStory } from './ink-and-paper';
import { trainCarriageStory } from './train-carriage';
import { immersiveTheaterStory } from './immersive-theater';
import { goldenHallStory } from './golden-hall';
import { nightAuctionStory } from './night-auction';
import { deepSeaStory } from './deep-sea';
import { auditionNightStory } from './audition-night';
import { paintingFrameStory } from './painting-frame';
import { lastBusStory } from './last-bus';
import { lighthouseStory } from './lighthouse';
import { bellTowerStory } from './bell-tower';
import { mirrorMirrorStory } from './mirror-mirror';
import { redMailboxStory } from './red-mailbox';
import { iceFlameStory } from './ice-flame';
import { coffeeStory } from './coffee';
import { welcomeStory } from './welcome';
import { countdownStory } from './countdown';
import { lastPageStory } from './last-page';

export const stories: Story[] = [
  islandWillStory,
  onsenHotelStory,
  inkAndPaperStory,
  trainCarriageStory,
  immersiveTheaterStory,
  goldenHallStory,
  nightAuctionStory,
  deepSeaStory,
  auditionNightStory,
  paintingFrameStory,
  lastBusStory,
  lighthouseStory,
  bellTowerStory,
  mirrorMirrorStory,
  redMailboxStory,
  iceFlameStory,
  coffeeStory,
  welcomeStory,
  countdownStory,
  lastPageStory,
];

export function getStoryById(id: string): Story | undefined {
  return stories.find((s) => s.id === id);
}

/* ── 懶加載 API ── */
export { storyMetas, type StoryMeta } from './meta';
export { loadStory, getCachedStory, preloadStory } from './lazy';
