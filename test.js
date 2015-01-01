'use strict';

var sep = require('path').sep;

var braceExpandJoin = require('./');
var test = require('tape');

test('braceExpandJoin()', function(t) {
  t.plan(9);

  t.equal(braceExpandJoin.name, 'braceExpandJoin', 'should have a function name.');

  t.strictEqual(
    braceExpandJoin('*', 'a'), '*' + sep + 'a',
    'should join patterns like path.join().'
  );

  t.equal(
    braceExpandJoin('a'),
    'a',
    'should return a single pattern as it is when it has no brace expansion.'
  );

  t.equal(
    braceExpandJoin('a', '../b', '../', 'c'),
    'c',
    'should join patterns considering parent directory reference.'
  );

  t.equal(
    braceExpandJoin('{a,b}', '*'),
    '{a' + sep + '*,b' + sep + '*}',
    'should join patterns considering brace expansion.'
  );

  t.strictEqual(
    braceExpandJoin('{a,b/*/../c}', '../*'),
    '{*,b' + sep + '*}',
    'should join patterns considering brace expansion and parent directory reference.'
  );

  t.strictEqual(
    braceExpandJoin('{a,a,b/../a}'),
    'a',
    'should omit duplicated patterns.'
  );

  t.throws(
    braceExpandJoin.bind(null),
    /TypeError.*More than 1/,
    'should throw an error when it doesn\'t take any arguments.'
  );

  t.throws(
    braceExpandJoin.bind(null, ['a']),
    /TypeError/,
    'should throw an error when it doesn\'t take any strings.'
  );

  t.end();
});
