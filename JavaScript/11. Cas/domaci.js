// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

const broj = +prompt("Unesite neki broj: ");

if (isNaN(broj) || broj < 12 || broj >= 16) {
  console.log("Niste uneli korektan broj.");
} else {
  for (let i = broj; i >= 1; i--) {
    console.log(i, i ** 2, i - 25);
  }
}
