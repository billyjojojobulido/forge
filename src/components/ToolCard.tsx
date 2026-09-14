'use client';

/**
 * Visual treatment adapted from ByteBox Card by Pink Pixel.
 * Modified for Personal Toolbox: removed DnD, stars, tags, card types and persistence.
 * Licensed under Apache-2.0. See LICENSE.
 */
import { CommandLineIcon } from '@heroicons/react/24/outline';
import type { Tool } from '@/types/tool';

export function ToolCard({ tool, onOpen }: Readonly<{ tool: Tool; onOpen: () => void }>) {
  return (
    <button type="button" className="tool-card group" onClick={onOpen}>
      <span className="tool-card__shine" aria-hidden="true" />
      <span className="tool-card__plate" aria-hidden="true" />
      <span className="tool-card__content">
        <span className="tool-card__title-row">
          <CommandLineIcon className="tool-card__icon" />
          <span className="tool-card__title">{tool.name}</span>
        </span>
        <span className="tool-card__description">{tool.description}</span>
        <code className="tool-card__command">{tool.command}</code>
      </span>
    </button>
  );
}
