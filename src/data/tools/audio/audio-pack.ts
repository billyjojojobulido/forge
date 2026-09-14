// data/tools/audio-pack.ts

import type { Tool } from "@/types/tool";

export const audioPack: Tool = {
  id: "audio-pack",
  name: "Pack Audio",
  description: "Convert and pack audio assets for game projects.",
  category: "Audio",

  command: "./pack-audio.sh <source>",

  options: [
    {
      flag: "--format <format>",
      description: "Target audio format, e.g. ogg or mp3.",
    },
    {
      flag: "--output <directory>",
      description: "Output directory.",
    },
  ],

  examples: ["./pack-audio.sh ./audio --format ogg"],
};
