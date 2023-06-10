const eqArrays = function(a, b) {
  let firstArray = "";
  let secondArray = "";
  if(a.length === b.length){
    for (let i = 0; i < a.length; i++) {
    firstArray = a[i];
    secondArray = b[i];
    if (firstArray !== secondArray) {
    return false;
    }
    }
  return true;
  } else {
  return false;
  }
};

function assertArraysEqual(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {  
      console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
    }
};

const takeUntil = function(array, callback) {
  let c = 0;
  let results = [];
  array.forEach(function (a, b) {
    if(callback(a)) {
      c = b;
    }
  
  });
  array.map(function(a, b) {
    if( b < c) {
      results.push(array[b]);
    }
  })
  return results;
  }

module.exports = takeUntil;
