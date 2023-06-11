const flatten = function (array) {
  const flattenedArray = [];
  for(let i = 0; i < array.length; i++) {
    elements = array[i];
    if(Array.isArray(elements) === true){
      for(let j = 0; j < elements.length; j++) {
        flattenedArray.push(elements[j]);
      }
    } else {
      flattenedArray.push(elements);
    }
  }
  return (flattenedArray);
};

module.exports = flatten;
