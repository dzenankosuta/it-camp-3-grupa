// JavaScript Math Object //

// JavaScript Math objekat nam dozvoljava da izvrsavamo razlicite zadatke sa brojevima.

// Math Properties (Svojstva-Konstante)

// Bilo kojoj matematickoj konstanti mozemo prostupiti:
// Math.property_name

// JavaScript nam obezbedjuje 8 razlicitih matematickih konstanti, kojima jedino mozemo pristupiti preko Math objekta.

Math.E;
Math.PI;
Math.SQRT2;
Math.SQRT1_2;
Math.LN2;
Math.LN10;
Math.LOG2E;
Math.LOG10E;

// Napraviti funkciju koja trazi od korisnika unos 7 vrednosti (svaka se odnosi na maksimalnu dnevnu temperaturu dana u nedelji). Funkcija treba da vrati temperatutu najtoplijeg dana u nedelji.

// Write a JavaScript program to find the largest of three given integers.

function max(num1, num2, num3) {
  let maxNumber = num1;
  if (num2 >= num1 && num2 >= num3) {
    maxNumber = num2;
  } else if (num3 >= num1 && num3 >= num2) {
    maxNumber = num3;
  }
  return maxNumber;
}
console.log(max(2, 4, 6));
console.log(max(4, 8, 6));
console.log(max(10, 8, 6));

// Domaci zadaci:
// 1. Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
