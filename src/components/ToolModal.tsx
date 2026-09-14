'use client';

/**
 * Dialog structure inspired by ByteBox CardModal by Pink Pixel.
 * Modified for Personal Toolbox: read-only usage/options/examples view.
 * Licensed under Apache-2.0. See LICENSE.
 */
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { Tool } from '@/types/tool';
import { CodeBlock } from './CodeBlock';

export function ToolModal({ tool, open, onClose }: Readonly<{ tool: Tool | null; open: boolean; onClose: () => void }>) {
  if (!tool) return null;

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <TransitionChild as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/65 backdrop-blur-sm" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto p-4 md:p-8">
          <div className="flex min-h-full items-center justify-center">
            <TransitionChild as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95 translate-y-3" enterTo="opacity-100 scale-100 translate-y-0" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <DialogPanel className="tool-modal glass glass--dense">
                <header className="tool-modal__header">
                  <div>
                    <span className="eyebrow">{tool.category}</span>
                    <DialogTitle className="tool-modal__title">{tool.name}</DialogTitle>
                    <p className="tool-modal__description">{tool.description}</p>
                  </div>
                  <button type="button" onClick={onClose} className="icon-button" aria-label="Close"><XMarkIcon /></button>
                </header>

                <div className="tool-modal__body">
                  <Section title="Usage"><CodeBlock code={tool.command} /></Section>

                  {tool.options?.length ? (
                    <Section title="Options">
                      <div className="option-list">
                        {tool.options.map((option) => (
                          <div className="option-row" key={option.flag}>
                            <code>{option.flag}</code>
                            <p>{option.description}</p>
                          </div>
                        ))}
                      </div>
                    </Section>
                  ) : null}

                  {tool.examples?.length ? (
                    <Section title="Examples">
                      <div className="stack">
                        {tool.examples.map((example) => <CodeBlock key={example} code={example} />)}
                      </div>
                    </Section>
                  ) : null}

                  {tool.notes?.length ? (
                    <Section title="Notes">
                      <ul className="notes-list">{tool.notes.map((note) => <li key={note}>{note}</li>)}</ul>
                    </Section>
                  ) : null}

                  {tool.source ? <Section title="Source"><code className="source-path">{tool.source}</code></Section> : null}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function Section({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return <section className="detail-section"><h3>{title}</h3>{children}</section>;
}
