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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); 


const multiColorShirtObject1 = { colors: ["red", "blue"], size: "large" };
const anotherMultiColorShirtObject1 = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject1  , anotherMultiColorShirtObject1)); // => true