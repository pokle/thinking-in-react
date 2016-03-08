# react-minimal-start

A minimal (I promise!) React starter kit with:

	- ES2015 (ES6) compilation (Babel)
	- Browserify build (For require('...') modules)
	- live reload of your browser thanks to budo

## Dev workflow

1. Start the watch script that re-compiles your app

		./scripts/watch --live --open

	(--open opens the browser, and --live reloads it when you change source files)

2. Make an edit to your code, and save it from your editor
3. Look at the result in the reloaded browser
4. Repeat

## Production build

(Generates public/build/bundle.js)

	./scripts/build

## What's missing?

- Minimisation
- Tests