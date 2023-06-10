const assertEqual = function(actual, expected){
  if(actual === expected){
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else{  
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let keys = Object.keys(object1);
  let keys2 = Object.keys(object2);
  for (let i of keys) {
    for (let value in object1) {
      if (keys.length !== keys2.length) {
        return false;
      }
      else if(Array.isArray(object1[value]) || Array.isArray(object2[value])) {
        const a = eqArrays(object1[value], object2[value])
        if(!a){
          return false;
        }
      } else if (object1[value] !== object2[value]) {
          return false;
      }
     else {
        return true;
      }
    }   
  }  
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {  
      console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

module.exports = assertObjectsEqual;