//2.zadatak

for (i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 3 == 0) {
    console.log("BUZZ");
  } else if (i % 5 == 0) {
    console.log("FIZZ");
  } else {
    continue;
  }
}
