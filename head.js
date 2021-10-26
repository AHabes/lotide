const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`${String.fromCodePoint(0x2705)} : ${actual} === ${expected}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${actual} !== ${expected}`);

};


const head = (arr) => {
  if (!Array.isArray(arr))
    console.log('The provided argument in not an array.');
  else
    return arr[0];
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), 5);
assertEqual(head(""), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");