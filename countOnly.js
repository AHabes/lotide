// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`${String.fromCodePoint(0x2705)} : ${actual} === ${expected}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${actual} !== ${expected}`);
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const countObj = {};
  for (let item in itemsToCount) {
    let count = 0;
    if (itemsToCount[item]) {
      for (let i of allItems)
        if (i === item)
          count++;
    }
    if (count !== 0)
      countObj[item] = count;
  }
  return countObj;

};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);