// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// 3.
for (let i = 6; i < 15; i++) {
  console.log(2 * i);
}

// 1.
for (let i = 1; i < 21; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

for (let i = 1; i < 20; i += 2) {
  console.log(i);
}

// 2.
for (let broj = 50; broj <= 100; broj++) {
  if (broj % 5 === 0) {
    console.log(broj);
  }
}

//4.
let zbir = 0;
for (let i = 11; i < 20; i += 2) {
  zbir += i;
}
console.log(zbir);
