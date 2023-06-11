
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  const keys2 = Object.keys(object2);
  for (let i of keys) {
    for (let value in object1) {
      if (keys.length !== keys2.length) {
        return false;
      }
      else if(Array.isArray(object1[value]) || Array.isArray(object2[value])) {
        const a = eqArrays(object1[value], object2[value])
        if(!a){
          return false;
        }
      } else if (object1[value] !== object2[value]) {
          return false;
      }
     else {
        return true;
      }
    }   
  }  
};

module.exports = eqObjects;
