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