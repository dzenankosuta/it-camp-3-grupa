// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// const d = +prompt("Unesite duzinu terena: ");
// const s = +prompt("Unesite sirinu terena: ");
// const r = +prompt("Unesite rastojanje terena: ");

// const duzinaOgrade = 2 * d + 2 * s + 8 * r;
// console.log("Treba nam " + duzinaOgrade + " metara za ogradjivanje terena.");

// Osnove o stringovima:
const recenica = "Necemo matematicke zadatke!";
console.log(recenica);
// Pristupanje nekom karakteru ide preko indeksa!
// Indeksiranje ide od 0!
// Poslednji karakter u stringu ima index (cela duzina stringa - 1)!
console.log(recenica[0]);
console.log(recenica[7]);
// Za izracunavanje duzine stringa se koristi length metoda:
const duzina = recenica.length;
console.log(duzina);
// Ispisivanje poslednjeg karaktera datog stringa:
console.log(recenica[duzina - 1]);

// Domaci zadaci:
// 1. Zavrsiti zadatak za racunanje duzine ograde fudbalskog terena;

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.
