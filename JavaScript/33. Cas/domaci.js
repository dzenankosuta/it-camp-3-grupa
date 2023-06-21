// 1. Write a JavaScript function to check whether an `input` is an array or not.
// 2. Write a JavaScript function to clone an array.
// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// 1.
function isArray(arr) {
  return Array.isArray(arr);
}
console.log(isArray([1, 2, 3]));
console.log(isArray(123));

// 2.
const cloneArr = (arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
};
console.log(cloneArr([1, 3, 5, 7, 9, 11, 13]));

// for petlja koja se koristi kod iterirajucih objekata (2. verzija)
// for (let element of arr) {
//     element; DIREKTNO IMAMO ELEMENT (NIJE NEOPHODNI PRISTUPANI PREKO INDEKSA)
//   }

// 3.
const firstN = (arr, n = 1) => {
  // if (n === undefined) {
  //     return arr[0]
  // } else {
  // }
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
  return "Kraj!";
};
console.log(firstN([5, 4, 3, 2, 1]));
console.log(firstN([5, 4, 3, 2, 1], 3));
