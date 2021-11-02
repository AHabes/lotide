const middle = function(array) {
  if (array.length === 1 || array.length === 2)
    return [];

  let index = array.length / 2;
  if (array.length % 2 === 1) {
    return [array[Math.floor(index)]];
  } else {
    return [array[index - 1], array[index]];
  }
};

module.exports = middle;