// data/tools/audio-pack.ts

import type { Tool } from "@/types/tool";

export const restructureLocalisation: Tool = {
  id: "restructure-localisation",
  name: "Restructure Localisation",
  description:
    "Fix localisation assets delivered as language → feature and reorganise them into feature → language.",
  category: "Localisation",
  command: "./restructure-localisation.sh <source-directory>",
  options: [
    {
      flag: "--dry-run",
      description:
        "Preview the planned file operations without changing anything.",
    },
    {
      flag: "--backup",
      description: "Create a backup before restructuring files.",
    },
    {
      flag: "--verbose",
      description: "Print each file operation while the script runs.",
    },
  ],
  examples: [
    "./restructure-localisation.sh ./localisation --dry-run",
    "./restructure-localisation.sh ./localisation --backup",
  ],
  notes: [
    "Normalise two-letter language folders to lowercase.",
    "Standalone splash.jpg files can be grouped under splash/<language>/splash.jpg.",
  ],
  source: "scripts/localisation/restructure-localisation.sh",
};