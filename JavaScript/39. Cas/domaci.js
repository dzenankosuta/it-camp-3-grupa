// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
//       [4, 5, 8, 10, 12, 13]

// 3.
const third = (arr) => {
  const arr2 = arr.filter((value) => typeof value === "number" && value > 2);
  const arr3 = arr2.map((value) => {
    if (value < 8) {
      return value * 2;
    } else {
      return value * 7;
    }
  });
  return arr3.filter((value) => value < 10);
};
console.log(third([1, 2, 3, 5, 7, 9, 11]));

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

const fifth = (arr1, arr2) => {
  const longerArr = arr1.length > arr2.length ? arr1 : arr2;
  const shorterArr = arr2.length >= arr1.length ? arr1 : arr2;
  const arr3 = longerArr.map(
    (value, index) => value + (shorterArr[index] || 0)
  );
  return arr3;
};
console.log(fifth(array1, array2));
console.log(fifth(array2, array1));
console.log(fifth([1, 0, 2, 3, 4], [4, 1, 9, -3, 4]));
