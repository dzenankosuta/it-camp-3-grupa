// number - BROJEVI //

a = 0.1;
b = 0.2;
c = a + b;

console.log(c);

// Kod realnih brojeva JavaScript nije 100% tacan.

// Svi brojevi u JavaScriptu pripadaju "number" tipu podataka.

// Mnogo veliki ili mali brojevi mogu biti zapisani preko (exponent oznake) e:

let x = 123e5; // 123 * 100000
console.log(x);
let y = 123e-5; // 123 / 100000
console.log(y);

console.log("100" / "10"); // 10
console.log("10k0" / "10"); // NaN

console.log("100" - "10"); // 90
console.log("100" * "10"); // 1000
console.log("100e5" * "10"); // 100000000
console.log("100e5" * "10e"); // NaN

console.log("100" + "10"); // "10010"

console.log(isNaN("100"));

NaN; // je number tipa.

// Infinity (-Infinity) je vrednost u JavaScriptu koja prelazi najveci (najmanji) dozvoljeni broj.
// Infinity (-Infinity) je number tipa.
// Deljenjem nulom dobijamo Infinity (-Infinity).
console.log(1 / 0);
console.log(typeof (1 / 0));

// Brojevi kao objekti:
// Brojevi mogu biti definisani kao objekti preko new keyword.

let z = new Number(123);
console.log(z);
console.log(typeof z);
console.log(z + 2);

// numbers i number objects ne mogu biti jednaki (zbog razlicitosti tipa).
let w = 123;
console.log(z === w);

// JavaScript interpretira brojeve kao hexadecimalne ako im prethodi 0x.

let broj = 0xff;
console.log(broj);
