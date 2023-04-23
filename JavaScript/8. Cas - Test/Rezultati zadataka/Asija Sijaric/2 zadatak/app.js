// 2. Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:
// (i) ako je broj deljiv sa 3, potrebno je ispiati "FIZZ" umesto tog broja;
// (ii) ako je broj deljiv sa 5, potrebno je ipisati "BUZZ" umesto tog broja;
// (iii) ako je broj deljiv i sa 3 sa 5, potrebno je ispisati "FIZZ BUZZ" umesto tog broja;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else {
    console.log(i);
  }
}
