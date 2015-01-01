/*!
 * brace-expand-join | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/node-brace-expand-join
*/
'use strict';

var path = require('path');

var arrayUniq = require('array-uniq');
var braceExpansion = require('brace-expansion');
var concatMap = require('concat-map');
var sliced = require('sliced');

module.exports = function braceExpandJoin() {
  var args = sliced(arguments);

  if (args.length === 0) {
    throw new TypeError('More than 1 glob pattern string required.');
  }

  var len = args.length;
  var patterns = new Array(len);

  while (len--) {
    patterns[len] = braceExpansion(args[len]).map(path.normalize);
  }

  var joinedPatterns = patterns.reduce(function(parentPatterns, childPatterns) {
    return concatMap(parentPatterns, function(parentPattern) {
      return childPatterns.map(function(childPattern) {
        return path.join(parentPattern, childPattern);
      });
    });
  });

  joinedPatterns = arrayUniq(joinedPatterns);

  if (joinedPatterns.length > 1) {
    return '{' + joinedPatterns.join(',') + '}';
  }

  return joinedPatterns[0];
};
