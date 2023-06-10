const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ['abc', ['def', 'ghi']];
const words3 = ['call', 'all'];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words2, word => word[0]);
console.log(results2);

const results3 = map(words3, word => word[0]);
console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'a', 'def']);
assertArraysEqual(results3, [ 'c', 'a' ]);