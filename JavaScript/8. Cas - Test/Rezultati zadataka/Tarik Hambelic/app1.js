const broj = +prompt("Unesite neki realan broj");

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else {
  console.log("Kvadrat broja je:" + broj ** 2);
}
