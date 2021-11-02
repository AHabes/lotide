// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`${String.fromCodePoint(0x2705)} : ${actual} === ${expected}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${actual} !== ${expected}`);

};

module.exports = assertEqual;