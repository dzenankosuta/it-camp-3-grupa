// 3. Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
//     123
//    "123"
//    "321"
function jeLiPalindrom(broj) {
  const strBroj = broj.toString();
  let obrnutiBroj = "";
  for (let i = strBroj.length - 1; i >= 0; i--) {
    obrnutiBroj += strBroj[i];
  }
  //   if (strBroj === obrnutiBroj) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return strBroj === obrnutiBroj;
}

// console.log(jeLiPalindrom(123));
// console.log(jeLiPalindrom(101));

function najveciPalindrom() {
  let najveciPalindrom = 0;
  for (let i = 999; i > 99; i--) {
    for (let j = i; j > 99; j--) {
      if (jeLiPalindrom(i * j) && i * j > najveciPalindrom) {
        najveciPalindrom = i * j;
      }
    }
  }
  return najveciPalindrom;
}
console.log(najveciPalindrom());
