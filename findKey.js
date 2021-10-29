// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`${String.fromCodePoint(0x2705)} : ${actual} === ${expected}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${actual} !== ${expected}`);
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key]))
      return key;
  }
};

let obj = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
};

let res = findKey(obj, x => x.stars === 1);
let res1 = findKey(obj, x => x.stars === 2);
let res2 = findKey(obj, x => x.stars === 3);
let res3 = findKey(obj, x => x.stars === 30);

assertEqual(res, 'Blue Hill');
assertEqual(res1, 'noma');
assertEqual(res2, 'Akaleri');
assertEqual(res3, undefined);
