const words = ["ground", "control", "to", "major", "tom"];
const words2 = ['abc', ['def', 'ghi']];
const words3 = ['call', 'all'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words2, word => word[0]);
console.log(results2);

const results3 = map(words3, word => word[0]);
console.log(results3);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'a', 'def']);
assertArraysEqual(results3, [ 'c', 'a' ]);
// map(map1, word);
