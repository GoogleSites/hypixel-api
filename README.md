# hypixel-api-v2

[![npm version](https://badge.fury.io/js/hypixel-api-v2.svg)](https://www.npmjs.com/package/hypixel-api-v2)

## Features
 * [TypeScript](https://www.typescriptlang.org/) support.
 * Support for multiple API keys at once.
 * Automatic ratelimiting.
 * Configurable cache.
 * Full coverage of the [Hypixel API](https://api.hypixel.net/).

## Installation

First, install nodejs >= 14 from [nodejs.org](https://nodejs.org/), then:

`npm install hypixel-api-v2`

## Getting Started

### "Hello world" example:
```js
// ES6 import syntax
import { HypixelAPI } from 'hypixel-api-v2';

// CommonJS
// const { HypixelAPI } = require('hypixel-api-v2');

const hypixel = new HypixelAPI('your-key-here'); // or ['first-key-here', 'second-key-here', ...]

(async () => {
	const player = await hypixel.player('hypixel');

	console.log(`${player.displayname} has ${player.networkExp} experience.`);
})();
```

## Documentation

View the documentation [here](https://googlesites.github.io/hypixel-api-v2/HypixelAPI.html).