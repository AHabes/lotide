const middle = require('../middle');

const chai = require('chai');
const assert = chai.assert;

describe('#middle', () => {
  it('should return [] for []', () => {
    const expectedOutput = [];
    const actualOutput = middle([1]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [] for middle([1, 2])', () => {
    const expectedOutput = [];
    const actualOutput = middle([1, 2]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [2] for middle([1, 2, 3])', () => {
    const expectedOutput = [2];
    const actualOutput = middle([1, 2, 3]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [3] for middle([1, 2, 3, 4, 5])', () => {
    const expectedOutput = [3];
    const actualOutput = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [2,3] for middle([1, 2, 3, 4,])', () => {
    const expectedOutput = [2, 3];
    const actualOutput = middle([1, 2, 3, 4,]);
    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should return [3,4] for middle([1, 2, 3, 4, 5, 6])', () => {
    const expectedOutput = [3, 4];
    const actualOutput = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(actualOutput, expectedOutput);
  });
});