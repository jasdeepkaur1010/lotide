const eqArrays = require('./eqArrays');

function assertArraysEqual(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {  
      console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    }
};


module.exports = assertArraysEqual;
