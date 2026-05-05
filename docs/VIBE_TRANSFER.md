# Sarath Portfolio Vibe Transfer

Use this file to continue the project in another AI chat.

## Project

This is a React + TypeScript + Vite portfolio project in:

```txt
D:\D\portfolio
```

Current URL:

```txt
http://localhost:5173/
```

## Current Accepted Direction

The accepted direction is a 2D minimalist scroll-story portfolio.

Do not rebuild this as a 3D / Three.js portfolio. We tried multiple Three.js versions and the user did not like them.

The project should feel like:

- A personal story
- A scroll-driven journey
- A quirky minimalist animation
- A stickman narrator telling Sarath's life
- Big typography and playful small actions

Visual style:

- Cream paper-like background
- Black stickman
- Huge dark typography
- Minimal decorative graphics
- Fun but not cluttered

## Important: Things We Tried and Rejected

Do not bring these back unless the user explicitly asks:

- Three.js cinematic portfolio
- Minimal black-and-white Three.js typography world
- Bazooka scene
- Moonwalk
- Public speaking skill badge/section
- Fast orbit animation
- Hover speed-up on orbit

The user specifically preferred returning to the 2D CSS stickman version.

## Current Core Files

```txt
src/App.tsx
src/App.css
src/index.css
```

There is no active Three.js code now.

Dependencies are simple:

```txt
react
react-dom
vite
typescript
eslint
```

## Current Features

### Stickman Narrator

The stickman is made with CSS spans:

- `.head`
- `.body`
- `.arm`
- `.leg`
- `.shadow`
- flowers
- paper plane
- speech bubble

React computes scroll values and sends them into CSS variables.

Important CSS variables:

```txt
--progress
--walk
--counter-walk
--jump
--lean
--left-arm
--right-arm
--left-leg
--right-leg
--travel-x
--travel-y
--face
--action-pulse
--local-progress
--orbit-speed
--orbit-rotation
```

The main wrapper receives:

```tsx
data-action={currentAction}
```

CSS uses selectors like:

```css
.story[data-action='flowers'] ...
.story[data-action='trip'] ...
.story[data-action='point'] ...
```

## Scroll Logic

Scroll progress is normalized from 0 to 1.

The core animation math:

```ts
const phase = motion.progress * Math.PI * 12
const walk = Math.sin(phase)
const counterWalk = Math.cos(phase)
const jump = Math.max(0, Math.sin(motion.progress * Math.PI * 5))
const lean = motion.speed * 14
```

The stickman starts near the left and moves smoothly across the story.

Moonwalk was removed because it caused glitches and broke the flow.

## Story Beats

Current `beats` data in `src/App.tsx`:

```ts
const beats = [
  {
    marker: '00',
    eyebrow: 'stick man speaks',
    text: "hi. i'm the stick man. walk with me. we're about to scroll through sarath's life, one strange little chapter at a time.",
    bubble: 'yes, i am the narrator.',
    action: 'wave',
  },
  {
    marker: '01',
    eyebrow: 'name enters',
    text: 'bro is sarath krishnan pv. born in 2001. a quiet start, a curious brain, and a suspicious amount of thinking.',
    bubble: 'born in 2001. vintage enough.',
    action: 'flowers',
  },
  {
    marker: '02',
    eyebrow: 'school chapter',
    text: 'then school happened. uniforms, corridors, notebooks, small wins, strange doubts, and the classic feeling that life forgot to give instructions.',
    bubble: 'school: the original loading screen.',
    action: 'trip',
  },
  {
    marker: '03',
    eyebrow: 'the turn',
    text: 'somewhere between marks, machines, friends, and late nights, the story started choosing technology.',
    bubble: 'ah yes. character development.',
    action: 'point',
  },
  {
    marker: '04',
    eyebrow: 'work in progress',
    text: 'this portfolio is not a resume page. it is a walk. keep scrolling and the man keeps moving.',
    bubble: 'resume pages could never.',
    action: 'lean',
  },
]
```

## Current Actions

### `wave`

Used in the opening.

Stickman introduces himself as narrator.

### `flowers`

Used in the name section.

Small black line flowers pop around him.

This replaced a weird gray prop that looked wrong.

### `trip`

Used in the school section.

Includes a paper plane:

- Goes left to right
- Flips mid-flight
- Has smoke trail circles

### `point`

Used when the story turns toward technology.

### `lean`

Used near the end.

## First Page Skill Orbit

The first page has all the skill highlights.

They should stay on the first page, not become separate scroll sections.

Current orbit items:

- Flutter
- Coding
- Video editing
- AI prompting

Removed:

- Public speaking

The orbit is like a slow solar system.

Behavior:

- Revolves slowly
- User can drag the whole orbit system to rotate it
- User can drag each item to spin it individually
- Hover speed-up was removed because it glitched
- Scroll speed only affects orbit very slightly

Current icons:

- Flutter: Flutter-like blue mark from user reference
- Coding: `{/}`
- Video editing: frame/play-style icon
- AI prompting: Gemini-style colorful sparkle from user reference

## User Preferences Learned

The user likes:

- Minimal but playful
- Stickman story vibe
- Scroll-based storytelling
- Sarcastic bubble comments
- Big typography
- Simple CSS animations
- Small symbolic graphics
- Personal story over generic portfolio sections

The user dislikes:

- Overcomplicated 3D
- Things that feel like placeholders
- Weird props
- Animation glitches
- Fast spinning orbit
- Moonwalk interruption
- Bazooka

## Verification Commands

Always run:

```powershell
npm run lint
npm run build
```

Dev server:

```powershell
npm run dev
```

## Suggested Prompt For Another AI

Paste this into another AI:

```txt
We are continuing a React + TypeScript + Vite portfolio in D:\D\portfolio.

Do not rebuild it in Three.js. The user rejected 3D versions.

Current accepted direction:
- 2D minimalist scroll-story portfolio.
- Cream paper background.
- Huge typography.
- Black CSS stickman narrator.
- Stickman walks as the user scrolls.
- Stickman gives sarcastic bubble commentary.
- First page has a slow draggable solar-system skill orbit.
- Orbit items: Flutter, Coding ({/}), Video editing, AI prompting/Gemini sparkle.
- User can drag the orbit and spin individual items.
- Name section has flowers popping.
- School section has paper plane flying left-to-right with smoke trail.
- No bazooka.
- No moonwalk.
- No public speaking.
- No Three.js.

Before changing anything, inspect src/App.tsx and src/App.css.
Keep changes small and preserve the current vibe.
Verify with npm run lint and npm run build.
```

