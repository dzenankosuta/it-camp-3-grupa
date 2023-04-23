// 1. Traziti od korisnika unos nekog realnog broja. Nakon toga ipisati u konzoli kvadrata tog broja (pozeljno je obuhvatit
// kada korisnik ne unese odgovarajucu vrednost.)

let broj = +prompt("Unesite neki broj:");
if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else {
  console.log(broj * broj);
}
