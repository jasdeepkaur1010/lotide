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


const flatten = function (array) {
  const flattenedArray = [];
  for(let i = 0; i < array.length; i++) {
    elements = array[i];
    if(Array.isArray(elements) === true){
      for(let j = 0; j < elements.length; j++) {
        flattenedArray.push(elements[j]);
      }
    } else {
      flattenedArray.push(elements);
    }
  }
  console.log(flattenedArray);
};

let test1 = [1, 2, [3, 4], 5, [6]];
flatten(test1);

let test2 = [1, 2, [2, 3], 7];
flatten(test2);