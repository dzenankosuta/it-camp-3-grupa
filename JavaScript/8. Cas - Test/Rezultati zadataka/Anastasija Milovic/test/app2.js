// 2. Napisati program koji ispisuje u konzoli brojeve od 1 do 100 (ukljucujuci) tako da:

// 1) Ako je broj deljiv sa 3, potrebno je ispisati "FIZZ" umesto tog broja;
// 2) Ako je broj deljiv sa 5, potrebno je ispisati "BUZZ" umesto tog broja;
// 3) Ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati "FIZZ BUZZ" umesto tog broja.

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FIZZ BUZZ");
  }
  if (i % 3 == 0) {
    console.log("BUZZ");
  }
  if (i % 5 == 0) {
    console.log("FIZZ");
  }
}
