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

## Finding your way around

Required by the build:

- `package.json`      - package manager configuration - edit your dependencies here
- `public/`	          - Everything here should be deployed
- `public/index.html`
- `public/build/`     - Compiled from src/app.js (by browserify and babelify)
- `src/`              - All your Javascript ES6 source files go here.
- `src/app.js`        - The main entry point
- `scripts/` 				  - Shell scripts


Conventions:
Dan Abramov's [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.nfmzrakn4):

- `src/containers`   - Place all your data aware React components here
- `src/presentation` - Place all your pure presentation React components here

## Releasing

1. Build public/build/bundle.js

		./scripts/build

2. Deploy public/** to your website


## Build pipeline
- npm is the package manager - so add libraries to package.json
- browserify is used to compile src/app.js (and dependencies) to public/build/bundle.js

## What's missing?

- Minimisation
- Tests
