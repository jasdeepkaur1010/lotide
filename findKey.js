const findKey = function(object, callback) {
  const truthyArray = [];
  for(let element in object) {
    if(callback(object[element])) {
      truthyArray.push(element);
    }
  }
  return truthyArray[0];
};

module.exports = findKey;
 