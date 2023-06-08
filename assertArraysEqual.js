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


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
