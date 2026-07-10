# Pomodoro Timer — Chrome Extension

I built this mostly to mess around with Chrome extensions and figure out 
how they actually work. Ended up learning more than expected.

## What it does

A 25/5 Pomodoro timer that floats over whatever webpage you're on. 
Drag it wherever, start/pause/reset, tracks how many sessions you've done.

## What I learned building this

Getting the extension to inject into pages was straightforward enough 
but keeping the timer's styles isolated from the host page's CSS was 
the real problem. Ended up using Shadow DOM to fix it — without that, 
sites like Udemy were completely mangling the layout.

The drag logic was also more interesting than I expected. The offset 
calculation (tracking where on the widget you grabbed it, not just 
where your mouse is) is the kind of thing that seems obvious in 
hindsight but took a minute to figure out.

## Tech

React, Vite, CRXJS, custom hooks (`useTimer`, `useDrag`), Shadow DOM

## Run it locally

```bash
npm install
npm run build
```
Load the `dist/` folder as an unpacked extension in `chrome://extensions`.

## What's next

The original plan was to have the timer live in the popup (`App.jsx`) 
with a "pop out" button to detach it as a floating widget — syncing 
state between the two via `chrome.storage`. Ran out of time but the 
architecture is clear, just needs building.
