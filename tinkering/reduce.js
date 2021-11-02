const addArrays_ = (array) => {
  return array.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator.concat(currentValue)
  }).reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
  })
}
console.log(addArrays_([[3, 2], [1], [4, 12]]))
