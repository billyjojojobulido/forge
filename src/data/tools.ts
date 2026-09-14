import type { Tool } from '@/types/tool';

export const tools: Tool[] = [
  {
    id: 'restructure-localisation',
    name: 'Restructure Localisation',
    description: 'Fix localisation assets delivered as language → feature and reorganise them into feature → language.',
    category: 'Localisation',
    command: './restructure-localisation.sh <source-directory>',
    options: [
      { flag: '--dry-run', description: 'Preview the planned file operations without changing anything.' },
      { flag: '--backup', description: 'Create a backup before restructuring files.' },
      { flag: '--verbose', description: 'Print each file operation while the script runs.' }
    ],
    examples: [
      './restructure-localisation.sh ./localisation --dry-run',
      './restructure-localisation.sh ./localisation --backup'
    ],
    notes: [
      'Normalise two-letter language folders to lowercase.',
      'Standalone splash.jpg files can be grouped under splash/<language>/splash.jpg.'
    ],
    source: 'scripts/localisation/restructure-localisation.sh'
  },
  {
    id: 'wav-to-ogg',
    name: 'WAV → OGG',
    description: 'Batch-convert source WAV audio into OGG files for game assets.',
    category: 'Audio',
    command: './wav-to-ogg.sh <source-directory>',
    options: [
      { flag: '--quality <n>', description: 'Choose the OGG quality level used for conversion.' }
    ],
    examples: ['./wav-to-ogg.sh ./audio --quality 6']
  },
  {
    id: 'clean-git-lfs',
    name: 'Inspect Git LFS',
    description: 'Quickly inspect LFS-tracked files before cleaning or migrating repository assets.',
    category: 'Git',
    command: 'git lfs ls-files',
    examples: ['git lfs ls-files', 'git lfs status']
  }
];

export const categories = Array.from(new Set(tools.map((tool) => tool.category)));
