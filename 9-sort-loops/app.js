// Дано
let arr = [1, 40, -5, 10, 0];

// Сортировка массива по возрастанию
function sortArrayAsc(arr) {
  let arrayCopy = arr.slice();
    for (let i = 0; i < arrayCopy.length; i++) {
    for (let j = i; j < arrayCopy.length; j++) {
      if (arrayCopy[i] > arrayCopy[j]) {
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
      }
    }
  }
  return arrayCopy;
}

console.log(sortArrayAsc(arr));

// Сортировка массива по убыванию
function sortArrayDesc(arr) {
  let arrayCopy = arr.slice();
  for (let i = 0; i < arrayCopy.length; i++) {
    for (let j = i; j < arrayCopy.length; j++) {
      if (arrayCopy[i] < arrayCopy[j]) {
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
      }
    }
  }
  return arrayCopy;
}

console.log(sortArrayDesc(arr));
