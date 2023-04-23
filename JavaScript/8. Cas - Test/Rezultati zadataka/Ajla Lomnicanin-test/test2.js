// 2. Napisati program koji ispisuje  u konzoli brojeve od 1 do 100(ukljucujuci)tako da :
// ako je broj deljiv sa 3, potrebno je ispisati "FIZZ" umesto tog broja
// ako je broj deljiv sa 5, potrebno je ispisati "BUZZ" umesto tog broja
// ako je broj deljiv sa 3 i 5, potrebno je ispisati "FIZ BUZZ" umesto tog broja

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  }
}

// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   } else if (i % 3 === 0) {
//     console.log(i);
//   } else if (i % 5 === 0) {
//     console.log(i);
//   }
// }
