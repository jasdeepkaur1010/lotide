const countLetters = function(sentence) {
  const count = {};
  for (let letter of sentence) {
    if (letter !== " ") {    
       if(!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] = count[letter] + 1;
    }
  }
  }
  return count;
};

module.exports = countLetters;
