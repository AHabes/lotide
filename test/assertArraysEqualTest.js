const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertArraysEqual(["Lighthouse Labs"], ["Bootcamp"]);
assertArraysEqual(["Bootcamp"], ["Bootcamp"]);
assertArraysEqual([1], [0]);
assertArraysEqual(['ABCD'], ['ABCD', 'AAAA']);
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
assertArraysEqual([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
