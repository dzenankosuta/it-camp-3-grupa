//1. Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).

let i = +prompt("uneti broj");

if (isNaN(i)) {
  console.log("niste uneli ispravan broj");
} else {
  console.log(i ** 2);
}
