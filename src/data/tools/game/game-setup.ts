// data/tools/audio-pack.ts

import type { Tool } from "@/types/tool";

export const gameSetup: Tool = {
  id: "game-setup",
  name: "Cocos Game Setup",
  description:
    "Force cleanup the project and re-install all libs, and it will auto generate an .env file.",
  category: "Cocos Game Project",
  command: "setup",
  examples: ["setup"],
};