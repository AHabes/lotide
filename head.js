const head = (arr) => {
  if (!Array.isArray(arr))
    console.log('The provided argument in not an array.');
  else
    return arr[0];
};

module.exports = head;