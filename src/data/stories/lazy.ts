import type { Story } from '../../types/game';

const storyLoaders: Record<string, () => Promise<Story>> = {
  'island-will': () => import('./island-will').then((m) => m.islandWillStory),
  'onsen-hotel': () => import('./onsen-hotel').then((m) => m.onsenHotelStory),
  'ink-and-paper': () => import('./ink-and-paper').then((m) => m.inkAndPaperStory),
  'train-carriage': () => import('./train-carriage').then((m) => m.trainCarriageStory),
  'immersive-theater': () => import('./immersive-theater').then((m) => m.immersiveTheaterStory),
  'golden-hall': () => import('./golden-hall').then((m) => m.goldenHallStory),
  'night-auction': () => import('./night-auction').then((m) => m.nightAuctionStory),
  'deep-sea': () => import('./deep-sea').then((m) => m.deepSeaStory),
  'audition-night': () => import('./audition-night').then((m) => m.auditionNightStory),
  'painting-frame': () => import('./painting-frame').then((m) => m.paintingFrameStory),
  'last-bus': () => import('./last-bus').then((m) => m.lastBusStory),
  'lighthouse': () => import('./lighthouse').then((m) => m.lighthouseStory),
  'bell-tower': () => import('./bell-tower').then((m) => m.bellTowerStory),
  'mirror-mirror': () => import('./mirror-mirror').then((m) => m.mirrorMirrorStory),
  'red-mailbox': () => import('./red-mailbox').then((m) => m.redMailboxStory),
  'ice-flame': () => import('./ice-flame').then((m) => m.iceFlameStory),
  'coffee': () => import('./coffee').then((m) => m.coffeeStory),
  'welcome': () => import('./welcome').then((m) => m.welcomeStory),
  'countdown': () => import('./countdown').then((m) => m.countdownStory),
  'last-page': () => import('./last-page').then((m) => m.lastPageStory),
};

const cache = new Map<string, Story>();

export async function loadStory(id: string): Promise<Story | undefined> {
  if (cache.has(id)) return cache.get(id);
  const loader = storyLoaders[id];
  if (!loader) return undefined;
  const story = await loader();
  cache.set(id, story);
  return story;
}

export function getCachedStory(id: string): Story | undefined {
  return cache.get(id);
}

export function preloadStory(id: string): void {
  const loader = storyLoaders[id];
  if (loader && !cache.has(id)) {
    loader().then((s) => cache.set(id, s)).catch(() => {});
  }
}
