// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

const numbers = [1, 2, 3, 4];

const sumEvenDouble = (arr) => {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((prev, curr) => prev + curr);
};

console.log(sumEvenDouble(numbers));
