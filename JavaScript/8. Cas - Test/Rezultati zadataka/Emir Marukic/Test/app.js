// 1. Traziti od korisnika unos nekog realnog broj.
//  Nakon toga ispisati u konzoli kvadrat tog broja
// (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost)

let num = +prompt("Unesite broj");

if (isNaN(num)) {
  console.log("Niste uneli broj");
} else if (num <= 0) {
  console.log("Broj ne moze biti 0 ili manji");
} else {
  console.log(num * num);
}
