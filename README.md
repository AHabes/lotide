# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade
software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ahabes/lotide`

**Require it:**

`const _ = require('@ahabes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Compares the two values and checks if they match or not.
* `assertArraysEqual(arr1, arr2)`: Given two arrays, the function asserts if they are equal.
* `assertObjectsEqual(obj1, obj2)`: Compares the two objects and checks if they match or not.
* `countOnly(allItems, itemsToCount)`: Given an array and an object. It will return an object containing counts of
  everything that the input object listed.
* `countLetters(sentence)`: Takes in a sentence (as a string) and then return a count of each of the letters in that
  sentence
* `findKeyByValue(obj, key)`: Takes in an object and a value. It should scan the object and return the first key which
  contains the given value.
* `flatten(array)`: Takes a nested array and flattens it into one-level array.
* `head(array)`: Returns the first element of the array.
* `letterPositions(sentence)`: Takes a sentence and return an object containing the location of each letter.
* `middle(array)`: Returns the middle element of the array.