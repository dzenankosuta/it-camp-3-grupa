// 1. zadatak
// Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja
// pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajuci broj.
let broj = +prompt("Unesite neki realan broj:");

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else {
  kvadrat = broj * broj;
  console.log("Uneli ste " + broj + " ,a kvadrat tog broja je " + kvadrat);
}
