const flatten = require('../flatten');

let test1 = [1, 2, [3, 4], 5, [6]];
console.log(flatten(test1));

let test2 = [1, 2, [2, 3], 7];
console.log(flatten(test2));
