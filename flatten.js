const flatten = arr => {
  let flattened = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let subElement of element)
        flattened.push(subElement);
    } else
      flattened.push(element);
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
console.log(flatten([[1, 2], [3, 4], [6], ["5"], ['a', 'b']])); // => [1, 2, 3, 4, 5, 6])

module.exports = flatten;