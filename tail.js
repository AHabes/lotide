const tail = (arr) => {
  if (!Array.isArray(arr))
    console.log('The provided argument in not an array.');
  else {
    return arr.slice(1, arr.length);
  }
};

module.exports = tail;

