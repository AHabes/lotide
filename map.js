const assertArraysEqual = require('./assertArraysEqual');


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(["Lighthouse", "Labs"], word => word[0]), ['L','L']);
assertArraysEqual(map(["Hello", "World"], word => word[0]), ['H','W']);
assertArraysEqual(map(["great", " "], word => word[0]), ['g',' ']);

module.exports = map;


