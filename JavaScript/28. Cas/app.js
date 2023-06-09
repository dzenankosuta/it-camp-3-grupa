// Math methods //

// Sintaksa za bilo koju matematicku metodu je sledeca:
// Math.method(number)

// Number to Integer //

// Postoje 4 razlicite metode za dobijanje celog broja slanjem broja sa decimalnim zapisom:

// Math.round(x) - vraca blizi ceo broj broju x.

console.log(Math.round(3.145342725));

// Math.ceil(x) - vraca sledeci ceo broj broja x.

console.log(Math.ceil(3.145342725));
console.log(Math.ceil(-3.145342725));

// Math.floor(x) - vraca prethodni ceo broj broja x.

console.log(Math.floor(3.8945342725));
console.log(Math.floor(-3.8945342725));

// Math.trunc(x) - vraca ceo broj odstanjujuci decimalni ostatak.

console.log(Math.trunc(3.8945342725));
console.log(Math.trunc(-3.8945342725));

// Math.sign(x) - metoda vraca:
//  1 ako je x pozitivan broj;
//  0 ako je x nula;
// -1 ako je x negativan broj.

console.log(Math.sign(34));
console.log(Math.sign(-34));
console.log(Math.sign(0));

// Math.pow(x,y) - vraca broj x stepenovan brojem y.

console.log(Math.pow(2, 3)); // 2*2*2
console.log(Math.pow(6, 2)); // 6*6

// Math.sqrt(x) - vraca kvadratni koren broja x.

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5

// Math.abs(x) - vraca apsolutnu vrednost broja x.

console.log(Math.abs(124));
console.log(Math.abs(-124));
console.log(Math.abs(-124.456));

// Math.sin(x) - vraca sinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

console.log(Math.sin(Math.PI / 2));

// Math.cos(x) - vraca kosinus (vrednost izmedju -1 i 1) nekog ugla x (datog u radijanima).

console.log(Math.cos(Math.PI));

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.(Math.abs)

function nearestTo100(num1, num2) {
  let broj = Math.abs(num1 - 100);
  let broj2 = Math.abs(num2 - 100);
  if (broj === broj2) {
    return "Brojevi su na istoj udaljenosti od broja 100";
  } else if (broj > broj2) {
    return `${num2} je blizi broju 100 od broja ${num1}`;
  } else {
    return `${num1} je blizi broju 100 od broja ${num2}`;
  }
}

console.log(nearestTo100(95, 105));
console.log(nearestTo100(93, 96));

// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 2. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
