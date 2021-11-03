const assertArraysEqual = require('./assertArraysEqual');


const without = (source, itemsToRemove) => {
  let source_ = source.slice();
  for (let item of itemsToRemove) {
    if (source_.includes(item))
      source_.splice(source_.indexOf(item), 1);
  }
  return source_;
};

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without([1, 2, 3], [1, 2])); // => [3]
console.log(without([1, 2, 3], [1, 2, 3])); // => []
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]
console.log(without(["1", "2", "3"], [1, "2", "3"]));// => ["1"]
console.log(without(["1", "2", "3"], []));// => ["1", "2","3"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;