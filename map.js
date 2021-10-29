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


