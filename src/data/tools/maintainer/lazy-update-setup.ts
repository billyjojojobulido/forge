// data/tools/audio-pack.ts

import type { Tool } from "@/types/tool";

export const lazyUpdateSetup: Tool = {
  id: "game-lazy-update",
  name: "Lazy Game Setup",
  description: "A short cut one-line stream solution ",
  category: "Maintainer",
  command: "lazy-update-setup",
  examples: ["setup"],
};