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

const without = function(source, itemsToRemove) {
  const arrayFinal = [...source]; //spread operator 
  for(let i = 0; i < itemsToRemove.length; i++) {
    for(let j = 0; j < source.length; j++) {
      if(itemsToRemove[i] === arrayFinal[j]) {
        console.log(j);
        arrayFinal.splice(j, 1);
      }
    }
  }
  console.log(arrayFinal);
};

const test = [1, 2, 3];
without(test, [1]);
assertArraysEqual(test, [1, 2, 3]);

const test1 = ["1", "2", "3"];
without(test1, [1, 2, "3"]);
assertArraysEqual(test1, ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);