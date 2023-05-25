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
  for(let value1 in object1) {
    for(let value2 in object2) {
      if (Object.keys(object1).length !== Object.keys(object2).length) {
        if(Array.isArray(object1[value1])) {
          const a = eqArrays(object1[value1], object2[value2])
          if(!a){
            return false;
          }
        } else if (object1[value1] !== object2[value2]) {
            return false;
        }
        
      } else {
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
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(shirtObject , longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); 
