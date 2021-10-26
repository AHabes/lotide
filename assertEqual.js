// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(String.fromCodePoint(0x2705), ': [', actual, '] === [', expected, ']');
  else
    console.log(String.fromCodePoint(0x274C), ': [', actual, '] !== [', expected, ']');

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Comparing identical strings
assertEqual('ABCD', 'ABCD');

// Comparing non-identical strings
assertEqual('ABCD', 'AAAA');

// Comparing identical numbers
assertEqual(123, 123);

// Comparing non-identical numbers
assertEqual(123, 111);
