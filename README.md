# react-minimal-start

A minimal React starter kit without the batteries.

What you get:
	- ES2015 (ES6) compilation (Babel)
	- npm is your package manager
	- Browserify lets you require('modules') in the browser
	- Live reload of your browser thanks to budo

What you need to figure out on your own:
	- Minimisation - Use uglify?
	- Tests - That test library that React proposes
	- Data management - How to add in Redux, etc.


## Dev workflow

1. Start the watch script that re-compiles your app

		./scripts/watch --live --open

	(--open opens the browser, and --live reloads it when you change source files)

2. Make an edit to your code, and save it in your editor
3. Look at the result in the reloaded browser
4. Repeat

## Finding your way around

Required by the build:

- `package.json`      - package manager configuration - edit your dependencies here
- `public/`	          - Everything here should be deployed
- `public/index.html` - bootstraps your application
- `public/build/`     - Compiled from src/app.js (by browserify and babelify)
- `src/`              - All your Javascript ES6 source files go here.
- `src/app.js`        - The main entry point
- `scripts/` 				  - Shell scripts used during development / build

## Releasing

1. Build public/build/bundle.js

		./scripts/build

2. Deploy public/** to your website


## Build pipeline
- npm is the package manager - so add libraries to package.json
- browserify is used to compile src/app.js (and dependencies) to public/build/bundle.js
