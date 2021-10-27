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


// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length === 1 || array.length === 2)
    return [];

  let index = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(index)]];
  } else {
    return [array[index - 1], array[index]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);