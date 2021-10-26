const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`${String.fromCodePoint(0x2705)} : ${actual} === ${expected}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${actual} !== ${expected}`);

};


const tail = (arr) => {
  if (!Array.isArray(arr))
    console.log('The provided argument in not an array.');
  else {
    return arr.slice(1, arr.length);
  }
};


// Test Case 1: Check the returned array elements
let arr = ["Hello", "Lighthouse", "Labs"];
const result = tail(arr);
assertEqual(result.length, 2); // ensure we get back two elements

arr.slice(1).forEach((element, index) => {
  assertEqual(element, result[index]);
});


const words = ["Yo Yo", "Lighthouse", "Labs"];

let wordsRes = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
words.slice(1).forEach((element, index) => {
  assertEqual(element, wordsRes[index]);
});


const words_ = [];
let wordsRes_ = tail(words_);
assertEqual(wordsRes_.length, 0);


const words__ = [3];
let wordsRes__ = tail(words__);
assertEqual(wordsRes__.length, 0);

const wordString = "[3]";
let wordStringRes = tail(wordString);
assertEqual(wordStringRes, 4);

