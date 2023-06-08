
let m = 0;
const middle = function(array) {
  let middleElement = [];
  if(array.length <= 2) {
    return [];
  } else if(array.length % 2 !== 0) {
    m = Math.floor((array.length / 2));
    middleElement.push(array[m]);
  } else {
    m = (array.length / 2);
    middleElement.push(array[m-1]);
    middleElement.push(array[m]);        
  }
  
return middleElement;

};

module.exports = middle;
