// data/tools/audio-pack.ts

import type { Tool } from "@/types/tool";

export const wavToOgg: Tool = {
  id: "wav-to-ogg",
  name: "WAV → OGG",
  description: "Batch-convert source WAV audio into OGG files for game assets.",
  category: "Audio",
  command: "./wav-to-ogg.sh <source-directory>",
  options: [
    {
      flag: "--quality <n>",
      description: "Choose the OGG quality level used for conversion.",
    },
  ],
  examples: ["./wav-to-ogg.sh ./audio --quality 6"],
};