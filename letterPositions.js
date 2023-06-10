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


const letterPositions = function(sentence) {
  const results = {};
  let array = sentence.split("");

  let noSpaceArray = array.filter(function(letter) {
    return letter !== " ";
  })
  noSpaceArray.forEach(function(character, index) {
    if (results[character]) {
      results[character].push(index);

    } else {
      results[character] = [index];
    }
  })
  
  console.log(results);
  return results;
};


module.exports = letterPositions;

/*let array = [];
  let i = 0;
  for(i = 0; i < sentence.length; i++) {
    array.push(i);
    if (sentence[i] !== " ") {   
      if(!results[sentence[i]]) {
        results[letter] = [];
      } 
      results[sentence[i]].push(i);
    }*/
  // }
 
  // logic to update results here
  // console.log(results);
  