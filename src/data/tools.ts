import type { Tool } from '@/types/tool';
import { wavToOgg } from './tools/audio/wav-ogg';
import { audioPack } from './tools/audio/audio-pack';
import { restructureLocalisation } from './tools/localisation/restructure';
import { gameSetup } from './tools/game/game-setup';
import { lazyUpdateSetup } from './tools/maintainer/lazy-update-setup';

export const tools: Tool[] = [
  gameSetup,
  lazyUpdateSetup,
  restructureLocalisation,
  audioPack,
  wavToOgg
];

export const categories = Array.from(new Set(tools.map((tool) => tool.category)));
