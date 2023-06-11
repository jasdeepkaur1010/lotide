const without = function(source, itemsToRemove) {
  const arrayFinal = [...source]; //spread operator 
  for(let i = 0; i < itemsToRemove.length; i++) {
    for(let j = 0; j < source.length; j++) {
      if(itemsToRemove[i] === arrayFinal[j]) {
        arrayFinal.splice(j, 1);
      }
    }
  }
  return (arrayFinal);
};

module.exports = without;
