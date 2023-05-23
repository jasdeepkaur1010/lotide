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

let m = 0;
const middle = function(array) {
  let middleElement = [];
  if(array.length <= 2) {
    return [];
  } else if(array.length % 2 !== 0) {
    m = Math.floor((array.length / 2));
    middleElement.push(array[m]);
  } else {
    m = (array.length / 2);
    middleElement.push(array[m-1]);
    middleElement.push(array[m]);        
  }
  
return middleElement;

};


console.log(middle([1])); // => []
middle([1, 2]) // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]