const assertEqual = function(actual, expected){
  if(actual === expected){
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else{  
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (bestTVShowsByGenre, value) {
  for (let i in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[i] == value) {
      return i;
    }
  }
}

module.exports = findKeyByValue;