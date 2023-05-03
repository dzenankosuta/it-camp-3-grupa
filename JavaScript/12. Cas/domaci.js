// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

// 1.
const recenica =
  "treba nam nova recenica gde svaka rec zavrsava velikim slovom";
let recenica2 = "";

for (let i = 0; i < recenica.length; i++) {
  if (i === recenica.length - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else if (recenica[i + 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}
console.log(recenica2);

const recenica3 = prompt("Unesite neki string: ");
let brojac = 0;
for (let i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === "M" || recenica3[i] === "m") {
    brojac++;
  }
}
console.log(brojac);
