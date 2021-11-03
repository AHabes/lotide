const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(' ').join('');
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]])
      results[sentence[i]].push(i);
    else
      results[sentence[i]] = [i];
  }


  return results;
};
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("results")['s'], [2, 6]);
assertArraysEqual(letterPositions("ABRACADABRA")['A'], [0, 3, 5, 7, 10]);
assertArraysEqual(letterPositions("ABRACADABRA")['R'], [2,9]);

module.exports = letterPositions;