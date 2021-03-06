# brace-expand-join

[![Build Status](https://travis-ci.org/shinnn/node-brace-expand-join.svg)](https://travis-ci.org/shinnn/node-brace-expand-join)
[![Build status](https://ci.appveyor.com/api/projects/status/57c2s0eqfq6ro65g?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/node-brace-expand-join)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-brace-expand-join.svg?style=flat)](https://coveralls.io/r/shinnn/node-brace-expand-join)
[![Dependency Status](https://david-dm.org/shinnn/node-brace-expand-join.svg)](https://david-dm.org/shinnn/node-brace-expand-join)
[![devDependency Status](https://david-dm.org/shinnn/node-brace-expand-join/dev-status.svg)](https://david-dm.org/shinnn/node-brace-expand-join#info=devDependencies)

A [Node](http://nodejs.org/) module to join and normalize glob patterns considering [brace expansion](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html)

```javascript
var braceExpandJoin = require('brace-expand-join');

braceExpandJoin('{a,b}', 'c'); //=> '{a/c,b/c}'
braceExpandJoin('{a,b}', '{c,d}'); //=> '{a/c,a/d,b/cb/d}'
braceExpandJoin('{a,b,c/d}', '../', 'e'); //=> '{e,c/e}'
```

## Installation

[![NPM version](https://img.shields.io/npm/v/brace-expand-join.svg?style=flat)](https://www.npmjs.com/package/brace-expand-join)
[![Bower version](https://img.shields.io/bower/v/brace-expand-join.svg?style=flat)](https://github.com/shinnn/node-brace-expand-join/releases)

### [npm](https://www.npmjs.com/)

```sh
npm install --save brace-expand-join
```

### [bower](http://bower.io/)

```sh
bower install --save brace-expand-join
```

## API

```javascript
var braceExpandJoin = require('brace-expand-join');
```

### braceExpandJoin(*pattern0* [, *pattern1*, ...])

*pattern0* [, *pattern1*, ...]: `String`  
Return: `String`

It joins *patterns* like [path.join()](http://nodejs.org/api/path.html#path_path_join_path1_path2) expanding each part of brace expansions, and returns a new single glob pattern.

```javascript
braceExpandJoin('{,a{b,c}}', '{,d{e,f}}', '{,g{h,i}}')
// => '{.,gh,gi,de,de/gh,de/gi,df,df/gh,df/gi,ab,ab/gh,ab/gi,ab/de,ab/de/gh,ab/de/gi,ab/df,ab/df/gh,ab/df/gi,ac,ac/gh,ac/gi,ac/de,ac/de/gh,ac/de/gi,ac/df,ac/df/gh,ac/df/gi}'
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
