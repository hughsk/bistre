# bistre [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A command-line tool and module for printing colourful
[bole](http://github.com/rvagg/bole) logs.

## Usage

[![NPM](https://nodei.co/npm/bistre.png)](https://nodei.co/npm/bistre/)

Install globally to use as a command-line tool:

``` bash
npm install -g bistre
```

Simply pipe your bole output into the command-line tool, e.g.:

``` bash
node server.js | bistre
```

Install locally to use as a module:

### stream = bistre()

Creates a transform stream that takes line-delimted JSON logs as input and
outputs ANSI-highlighted logs for you.

``` javascript
var bole = require('bole')
var pretty = require('bistre')()

bole.output({
    level: 'info'
  , stream: pretty
})

pretty.pipe(process.stdout)
```

![bistre](http://imgur.com/SP38CCK.png)

## See Also
- [bole](https://github.com/rvagg/bole)
- [debug-to-json](https://github.com/yoshuawuyts/debug-to-json)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/bistre/blob/master/LICENSE.md) for details.
