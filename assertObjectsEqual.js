const eqArrays = require('./eqArrays')
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length)
    return false;

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    } else if (object1[key] !== object2[key])
      return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected))
    console.log(`${String.fromCodePoint(0x2705)} : ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`${String.fromCodePoint(0x274C)} : ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({a: '1', b: 2}, {a: '1', b: 2});
assertObjectsEqual({a: '1', b: 2, c: 1}, {a: '1', b: 2, c: 1});
assertObjectsEqual({}, {});
assertObjectsEqual({a: '1', b: 3}, {a: '1', b: 2});
assertObjectsEqual({a: '1', b: 2, c: 1}, {a: '1', b: 2});
assertObjectsEqual({a: '1', b: 2}, {});


module.exports = assertObjectsEqual;