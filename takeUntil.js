const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  return array.slice(0, array.findIndex(x => callback(x)));
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["Lighthouse", "Labs", "Hello", "World", " ", "Nice", "to", "meet", "you"];
const results3 = takeUntil(data3, x => x === ' ');
console.log(results3);

const data4 = ["Lighthouse", "Labs", "Hello", 1, " ", "Nice", "to", "meet", "you"];
const results4 = takeUntil(data4, x => x === 1);
console.log(results4);


assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results3,[ 'Lighthouse', 'Labs', 'Hello', 'World' ]);
assertArraysEqual(results4, ["Lighthouse","Labs","Hello"]);

module.exports = takeUntil;
