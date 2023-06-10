const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

letterPositions("lighthouse in the house");
letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);
