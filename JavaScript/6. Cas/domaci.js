// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

const br1 = +prompt("Unesite prvi broj: ");
const br2 = Number(prompt("Unesite drugi broj: "));

if (isNaN(br1) || isNaN(br2)) {
  console.log("Uneti brojevi moraju biti ispravni");
} else if (br1 <= 0 || br2 <= 0) {
  console.log("Uneti brojevi moraju biti pozitivni");
} else if (br1 === br2) {
  console.log("Povrsina kvadrata je " + br1 * br2);
} else {
  console.log("Povrsina pravougaonika je " + br1 * br2);
}

// 2.
const x = +prompt("Unesite prvi broj: ");
const y = Number(prompt("Unesite drugi broj: "));

switch (y) {
  case 0:
    console.log("Deljenje nulom nije moguce.");
    break;
  default:
    console.log("Kolicnik unetih brojeva je: " + x / y);
}
