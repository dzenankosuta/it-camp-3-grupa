// Zadatak.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

// 1. nacin:
// const recenica = prompt("Unesite neku recenicu: ");
// let brojac = 0;
// for (let i = 0; i < recenica.length; i++) {
//   if (
//     recenica[i] === "0" ||
//     recenica[i] === "1" ||
//     recenica[i] === "2" ||
//     recenica[i] === "3" ||
//     recenica[i] === "4" ||
//     recenica[i] === "5" ||
//     recenica[i] === "6" ||
//     recenica[i] === "7" ||
//     recenica[i] === "8" ||
//     recenica[i] === "9"
//   ) {
//     brojac++;
//   }
// }
// console.log(brojac);

// 2. nacin
const recenica = prompt("Unesite neku recenicu: ");
let brojac = 0;
for (let i = 0; i < recenica.length; i++) {
  if (!isNaN(recenica[i]) && recenica[i] !== " ") {
    brojac++;
  }
}
console.log(brojac);

// Domaci zadaci:

//  1. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

//  3. Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

// 1.
const recenica5 = prompt("Unesite neku recenicu: ");
let recenica6 = "";
for (let i = 0; i < recenica5.length; i++) {
  if (recenica5[i] === " ") {
    continue;
  } else {
    recenica6 += recenica5[i];
  }
}
console.log(recenica6);
