const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("should return undefined for ''", () => {
    assert.strictEqual(head(""), undefined);
  });

  it("should return 'Hello' for [''Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
