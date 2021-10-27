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


// TEST CODE
assertArraysEqual(["Lighthouse Labs"], ["Bootcamp"]);
assertArraysEqual(["Bootcamp"], ["Bootcamp"]);
assertArraysEqual([1], [0]);
assertArraysEqual(['ABCD'], ['ABCD', 'AAAA']);
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
assertArraysEqual([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
