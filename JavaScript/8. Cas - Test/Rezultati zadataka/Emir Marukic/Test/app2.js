/* Napisati program koji ispisuje brojeve od 1 do 100 (ukljucujuci) tako da:
Ako je broj deljiv sa 3, potrebno je ispisati "FIZZ"
Ako je broj deljiv sa 5, potrebno je ispisati "BUZZ"
Ako je broj deljiv sa 3 i 5, potrebno je ispisati "FIZZ BUZZ"
*/

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  console.log(i);
}
