const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
    return false;
  else {
    for (let i = 0; i < arr1.length; i++)
      if (arr1[i] !== arr2[i])
        return false;
    return true;
  }
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2))
    console.log(`${String.fromCodePoint(0x2705)} : ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
};


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