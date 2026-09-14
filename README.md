# Personal Toolbox

A deliberately small, visual catalogue for scripts and CLI commands you have already built.

The project is adapted from the UI treatment of **ByteBox** by Pink Pixel, but removes its database, DnD, search, settings, Electron shell, editable cards, tags, and general-purpose dashboard features.

## What remains

- Category sections
- Glass command cards
- Read-only tool modal
- Usage / options / examples / notes
- Syntax highlighting with Shiki
- One-click copy
- Static TypeScript data

## Add a tool

Edit `src/data/tools.ts` and add another `Tool` object. Categories are generated from the `category` field.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Attribution

Parts of the card, modal, code-block, and glass visual treatment are adapted from ByteBox by Pink Pixel and modified for this project. ByteBox is licensed under Apache License 2.0. The original license is retained in `LICENSE`.
