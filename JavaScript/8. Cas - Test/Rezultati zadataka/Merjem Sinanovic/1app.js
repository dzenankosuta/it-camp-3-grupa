// 1.(20)Traziti od koristnika unos nekog realno broja.Nakon toga ispisati u konzoli kvadrat tog broja(pozeljno je obuhvatiti slucaj kada koristnik ne unese odgovarajuce vrednosti).

let i = +prompt("unesite broj");

if (isNaN(i)) {
  console.log("niste uneli broj");
} else {
  console.log(i ** 2);
}
