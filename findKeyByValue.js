// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const findKeyByValue = (obj, value) => {
  for (let element in obj) {
    if (obj[element] === value)
      return element;
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const persons = {
  firstName: "John",
  age: 21,
  hobbies: "football",
  givenName: "John",
  name: "John",
  bestSports: "football"
};

assertEqual(findKeyByValue(persons, "John"), "firstName");
assertEqual(findKeyByValue(persons, "football"), "hobbies");
assertEqual(findKeyByValue(persons, 21), "age");

module.exports = findKeyByValue;
