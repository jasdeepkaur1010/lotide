const flatten = require('../flatten');

let test1 = [1, 2, [3, 4], 5, [6]];
flatten(test1);

let test2 = [1, 2, [2, 3], 7];
flatten(test2);
