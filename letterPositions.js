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


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(' ').join('');
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]])
      results[sentence[i]].push(i);
    else
      results[sentence[i]] = [i];
  }


  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("results")['s'], [2, 6]);
assertArraysEqual(letterPositions("ABRACADABRA")['A'], [0, 3, 5, 7, 10]);
assertArraysEqual(letterPositions("ABRACADABRA")['R'], [2,9]);