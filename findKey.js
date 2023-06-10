const assertEqual = function(actual, expected){
  if(actual === expected){
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else{  
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

let truthyArray = [];
const findKey = function(object, callback) {
  for(let element in object) {
    if(callback(object[element])) {
      truthyArray.push(element);
    }
  }
  return truthyArray[0];
};

module.exports = findKey;
