// Za komunikaciju sa korisnikom koristimo prompt metodu:

const ime = prompt("Unesite vase ime: ");

console.log(ime);

const brojGodina = prompt("Unesite broj godina: ");
console.log(brojGodina);
console.log(typeof brojGodina);

// Posto je vrednost dobijena preko prompt metode uvek string, otuda potreba da pretvorimo taj string u number tip podatka.

// Pomenucemo 2 nacina za prevodjenje stringa u broj:

// 1. Number(string)
const brojGodina2 = Number(brojGodina);
console.log(brojGodina2);
console.log(typeof brojGodina2);

// 2. +string => number
const brojGodina3 = +brojGodina;
console.log(brojGodina3);
console.log(typeof brojGodina3);

// Unesite vasu visinu:

// const visina = Number(prompt("Unesite vasu visinu: "));
const visina = +prompt("Unesite vasu visinu: ");
console.log(visina);
console.log(typeof visina);

// Na osnovu unetih godina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decijeg doba
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba
// ako je korisnik uneo negativan broj: Broj godina ne moze biti negativan.
// ako korisnik nije uneo broj: Niste uneli broj godina.

// isNaN() ispituje da li je vrednost nekog broja NaN.

console.log(isNaN("56"));
console.log(isNaN("5sefnsdklf6"));

const brojGodina4 = +prompt("Unesite broj vasih godina: ");

if (isNaN(brojGodina4)) {
  console.log("Niste uneli broj godina");
} else if (brojGodina4 > 0 && brojGodina4 < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina4 >= 12 && brojGodina4 < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina4 >= 18 && brojGodina4 < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina4 >= 40) {
  console.log("Vi ste zrela osoba");
} else {
  console.log("Broj godina ne moze biti negativan ili 0");
}

console.log(5 + "4");
console.log(5 - "4");
// prazan string => number = 0
console.log(Number("")); // 0
