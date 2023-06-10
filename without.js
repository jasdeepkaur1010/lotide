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
        arrayFinal.splice(j, 1);
      }
    }
  }
  return (arrayFinal);
};

module.exports = without;
