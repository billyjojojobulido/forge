'use client';

/**
 * Adapted from ByteBox CodeBlock by Pink Pixel.
 * Modified for Personal Toolbox: simplified props and styling.
 * Licensed under Apache-2.0. See LICENSE.
 */
import { useEffect, useState } from 'react';
import { CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

export function CodeBlock({ code, language = 'bash', label }: Readonly<CodeBlockProps>) {
  const [html, setHtml] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;
    codeToHtml(code, { lang: language, theme: 'github-dark-dimmed' })
      .then((value) => active && setHtml(value))
      .catch(() => active && setHtml(`<pre><code>${escapeHtml(code)}</code></pre>`));
    return () => { active = false; };
  }, [code, language]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="code-block group">
      <div className="code-block__header">
        <span>{label ?? language.toUpperCase()}</span>
        <button type="button" onClick={copy} className="copy-button" aria-label="Copy command">
          {copied ? <CheckIcon /> : <ClipboardDocumentIcon />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <div className="code-block__body" dangerouslySetInnerHTML={{ __html: html || `<pre><code>${escapeHtml(code)}</code></pre>` }} />
    </div>
  );
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
