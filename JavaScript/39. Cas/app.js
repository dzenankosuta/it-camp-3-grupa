// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = (arr) => {
  const sum = arr.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
    // return curr % 2 === 0 ? prev + curr : prev;
  }, 0);
  return sum;
};
console.log(sum(numbers));

// Ugnjezdena (nested) for petlja

// const arr11 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr11.length; i++) {
//   for (let j = i; j < arr11.length; j++) {
//     console.log(arr11[i], arr11[j]);
//   }
// }

// Domaci:
// 1. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// 2. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
