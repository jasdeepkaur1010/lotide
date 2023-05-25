const assertEqual = function(actual, expected){
  if(actual === expected){
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else{  
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
  /*let array = [];
  let i = 0;
  for(i = 0; i < sentence.length; i++) {
    array.push(i);
    if (sentence[i] !== " ") {    
      results[sentence[i]] = array.slice(i);
    }*/
  // }
 
  // logic to update results here
  // console.log(results);
};


letterPositions("lighthouse in the house");
letterPositions("hello");