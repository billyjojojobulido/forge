'use client';

import { useState } from 'react';
import { categories, tools } from '@/data/tools';
import type { Tool } from '@/types/tool';
import { ToolCard } from './ToolCard';
import { ToolModal } from './ToolModal';

export function Toolbox() {
  const [selected, setSelected] = useState<Tool | null>(null);

  return (
    <>
      <main className="page-shell">
        <header className="hero">
          <p className="eyebrow">PERSONAL CLI HANDBOOK</p>
          <h1>Toolbox</h1>
          <p>Things I&apos;ve already solved. Browse by purpose, recognise the tool, copy the command.</p>
        </header>

        <div className="catalogue">
          {categories.map((category) => (
            <section className="category-section" key={category}>
              <div className="category-heading">
                <h2>{category}</h2>
                <span>{tools.filter((tool) => tool.category === category).length} tools</span>
              </div>
              <div className="tool-grid">
                {tools.filter((tool) => tool.category === category).map((tool) => (
                  <ToolCard key={tool.id} tool={tool} onOpen={() => setSelected(tool)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <ToolModal tool={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </>
  );
}
