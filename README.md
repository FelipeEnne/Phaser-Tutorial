# Phaser-Tutorial

Follow the Phaser [Making your first Phaser 3 Game](http://phaser.io/tutorials/making-your-first-phaser-3-game) tutorial.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Install

```bash
npm install
```

### Build

Compiles `src/index.js` with esbuild and copies static files from `public/` to `dist/`:

```bash
npm run build
```

For development, rebuild automatically on file changes:

```bash
npm run watch
```

### Run

```bash
npm run server
```

Open [http://localhost:3000/](http://localhost:3000/)

## Scripts

| Command | Description |
|---|---|
| `npm run build` | Bundle game code and copy static assets to `dist/` |
| `npm run watch` | Rebuild on file changes |
| `npm run server` | Serve `dist/` on port 3000 |
| `npm run lint` | Lint `src/` with ESLint |
| `npm run lint:fix` | Lint and auto-fix where possible |

## Project structure

```
public/          Static files (HTML, CSS, images)
  index.html     Loads Phaser 3.90 from CDN
  assets/
src/
  index.js       Game logic
  server.js      Static file server (Node.js http)
dist/            Build output (generated)
scripts/
  build.mjs      esbuild + asset copy
```

Game assets (sprites, etc.) should be placed in `public/assets/img/`. They are copied to `dist/` during the build.

## Tutorial progress

### Part 1 - Introduction

- Getting Started Guide
- Node.js setup

### Part 2 - Loading Assets

- Preload
- Create

### Part 3 - World Building

- `this.physics`

### Part 4 - The Platforms

- `platforms = this.physics.add.staticGroup()`

### Part 5 - Ready Player One

- `player = this.physics.add.sprite(100, 450, 'dude')`
- `this.physics.add.collider(player, platforms)`

### Part 7 - Controlling the player with the keyboard

- Update
- `cursors = this.input.keyboard.createCursorKeys()`

### Part 8 - Stardust

- `stars = this.physics.add.group({...})`

### Part 9 - A score to settle

- score

### Part 10 - Bouncing Bombs

- bombs and game over
