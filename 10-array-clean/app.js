// Дано
let arr = [3, 6, 9, 2, 5, 10, 13, 20, 100, 1];

// Решение
function arrayClean(arr) {
  return function(num) {
    let cleanArray = [];
    arr.forEach(function(item) {
      if (item > num) {
        cleanArray.push(item);
      }
    })
    return cleanArray;
  }
}

console.log(arrayClean(arr)(5));