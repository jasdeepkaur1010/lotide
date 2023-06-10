const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); 

const multiColorShirtObject1 = { colors: ["red", "blue"], size: "large" };
const anotherMultiColorShirtObject1 = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject1, anotherMultiColorShirtObject1);
