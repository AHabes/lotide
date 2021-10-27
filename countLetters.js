// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`${String.fromCodePoint(0x2705)} : ${actual} === ${expected}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${actual} !== ${expected}`);
};


const countLetters = str => {
  let countedLetters = {};
  for (let char of str) {
    if (countedLetters[char] !== undefined)
      countedLetters[char] = countedLetters[char] + 1;
    else countedLetters[char] = 1;
  }
  return countedLetters;
};


// TEST CODE
assertEqual(countLetters('AAABDDE1113')['1'], 3);
assertEqual(countLetters('AAABDDE1113')['3'], 1);
assertEqual(countLetters('AAABDDE1113')['A'], 3);
assertEqual(countLetters('AAABDDE1113')['B'], 1);
assertEqual(countLetters('AAABDDE1113')['C'], undefined);
assertEqual(countLetters('AAABDDE1113')['D'], 2);