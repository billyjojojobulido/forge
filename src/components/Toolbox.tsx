'use client';

import { useMemo, useState } from 'react';
import { categories, tools } from '@/data/tools';
import type { Tool } from '@/types/tool';
import { ToolCard } from './ToolCard';
import { ToolModal } from './ToolModal';

function toCategoryId(category: string) {
  return `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
}

export function Toolbox() {
  const [selected, setSelected] = useState<Tool | null>(null);
  const groupedTools = useMemo(
    () => categories.map((category) => ({
      category,
      tools: tools.filter((tool) => tool.category === category)
    })),
    []
  );

  const navigateToCategory = (category: string) => {
    document.getElementById(toCategoryId(category))?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <main className="toolbox-layout">
        <aside className="category-nav glass glass--dense" aria-label="Tool categories">
          <div className="category-nav__header">
            <span className="eyebrow">Categories</span>
            <span className="category-nav__count">{categories.length}</span>
          </div>
          <nav className="category-nav__list">
            {groupedTools.map(({ category, tools: categoryTools }) => (
              <button
                type="button"
                className="category-nav__item"
                key={category}
                onClick={() => navigateToCategory(category)}
              >
                <span>{category}</span>
                <span className="category-nav__badge">{categoryTools.length}</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="page-shell">
          <header className="hero">
            <p className="eyebrow">PERSONAL CLI HANDBOOK</p>
            <h1>Toolbox</h1>
            <p>Things I&apos;ve already solved. Browse by purpose, recognise the tool, copy the command.</p>
          </header>

          <div className="catalogue">
            {groupedTools.map(({ category, tools: categoryTools }) => (
              <section className="category-section" id={toCategoryId(category)} key={category}>
                <div className="category-heading">
                  <h2>{category}</h2>
                  <span>{categoryTools.length} tools</span>
                </div>
                <div className="tool-grid">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} onOpen={() => setSelected(tool)} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <ToolModal tool={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </>
  );
}
