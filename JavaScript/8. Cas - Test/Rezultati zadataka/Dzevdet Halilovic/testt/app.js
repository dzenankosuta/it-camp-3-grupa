const broj = +prompt("Unesi neki realni broj");

if (isNaN(broj)) {
  console.log("Niste uneli odgovarajucu vrednost");
} else {
  console.log("Kvadrat broja:" + broj ** 2);
}
