const assertEqual = require('../assertEqual');
const tail = require("../tail");

const chai = require('chai');
const assert = chai.assert;

describe('#tail', () => {
  it('should return length of 2 for ["Hello", "Lighthouse", "Labs"]', () => {
    let arr = ["Hello", "Lighthouse", "Labs"];
    const result = tail(arr);
    assert.strictEqual(result.length, 2);
  });

  it('should return length of ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    let arr = ["Hello", "Lighthouse", "Labs"];
    const result = tail(arr);
    console.log(result);
    arr.slice(1).forEach((element, index) => {
      assert.strictEqual(element, result[index]);
    });
  });

  it('should return length of 3 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });

  it('should return length of ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let wordsRes = tail(words);
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(wordsRes, expectedOutput);
  });

  it('should return length of 0 for []', () => {
    const words_ = [];
    let wordsRes_ = tail(words_);
    assert.strictEqual(wordsRes_.length, 0);
  });

  it('should return length of 0 for [3]', () => {
    const words__ = [3];
    let wordsRes__ = tail(words__);
    assertEqual(wordsRes__.length, 0);
  });

  it('should return undefined for "[3]"', () => {
    const wordString = "[3]";
    let wordStringRes = tail(wordString);
    assert.strictEqual(wordStringRes, undefined);
  });
});





