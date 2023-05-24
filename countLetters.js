const assertEqual = function(actual, expected){
  if(actual === expected){
  console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else{  
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let count = {};
  for (let letter of sentence) {
    if (letter !== " ") {    
       if(!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] = count[letter] + 1;
    }
  }
  }
  console.log(count);
};

(countLetters('LHL'));
(countLetters('lighthouse in the house'));
