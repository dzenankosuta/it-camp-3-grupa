// U Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih elemenata.

// [1, 1];

const fibonacci = () => {
  const arr = [1, 1];
  let i = 2;
  while (arr[i - 2] + arr[i - 1] <= 4000000) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
  }
  return arr.filter((el) => el % 2 === 0).reduce((prev, curr) => prev + curr);
};
console.log(fibonacci());

// 1. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function najcesciElement(arr) {
  let element;
  let brojac = 0;
  let brojPojavljivanja = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        brojac++;
      }
      if (brojac > brojPojavljivanja) {
        brojPojavljivanja = brojac;
        element = arr[i];
      }
    }
    brojac = 0;
  }
  return element;
}
console.log(najcesciElement(arr1));
console.log(najcesciElement([1, 2, 2, 3, 4, 5, 6, 2]));

// every() Array iterator metoda nam sluzi za proveru da li je svaki element niza prosao test.
// Ova metoda vraca boolean.

const godine = [17, 22, 18, 22, 19];

const isEveryAdult = godine.every((student) => student > 17);
console.log(isEveryAdult);

// some() metoda proverava da li je bar jedan element niza prosao test.
// Ova metoda vraca boolean.

const isSomeAdult = godine.some((student) => student > 17);
console.log(isSomeAdult);

// 1. Preko funkcije napraviti niz koji se sastoji od parnih brojeva manjih ili jednakih 50 postojeceg niza.

// 2. Sabrati sve godine tj. elemente niza a nakon toga podeliti sa brojem elemenata.
// tj. vratiti prosecnu starost godina.

// 3. Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
