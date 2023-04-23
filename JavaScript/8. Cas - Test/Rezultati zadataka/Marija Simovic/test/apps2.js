let s = +prompt("unesite broj");
for (s = 1; s <= 100; s++) {
  if (s % 5 === 0 && s % 3 === 0) {
    console.log(" FIZZ BUZZ");
  } else if (s % 3 === 0) {
    console.log("FIZZ");
  } else if (s % 5 === 0) {
    console.log("BUZZ");
  } else if (s % 5 === 0 && s % 3 === 0) {
    console.log(" FIZZ BUZZ");
  } else {
    console.log(s);
  }
}
