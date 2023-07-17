// Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array :
const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
// Sample Output :
// "row 1"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 2"

const output = (arr) => {
  arr.forEach((element, index) => {
    console.log(`row ${index + 1}`);
    element.forEach((el) => {
      console.log(el);
    });
  });
  return "";
};
console.log(output(a));

console.log(55);

console.log(!55); // false

console.log(!!55); // true

console.log(!!0); // false

const prom = !(55 + "");
console.log(typeof (55 + ""));
console.log(prom);

console.log(!!false);
console.log(!true);

// Rekurzivna funkcija //

// Rekurzivna funkcija je funkcija koja zahteva izvrsavanje same sebe unutar definisanja funkcije.
// Pomocu rekurzivne funkcije mozemo postici efekat petlje.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

function petlja(n) {
  console.log(n);
  if (n - 1 > 0) {
    petlja(n - 1);
  }
}

petlja(10);

// Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funkciji, ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koji predstavljaju argumente te callback funkcije.

const main = (callback) => {
  console.log("Radi se o glavnoj funkciji");
  callback(3, 4, 5);
};

const average = (a, b, c) => {
  console.log((a + b + c) / 3);
};

console.log(main(average));

// CLOSURE FUNKCIJE //

function zbir() {
  const a = 5;
  const b = 3;
  return a + b;
}
console.log(zbir());

// Poznata je cinjenica da kada se izvrsi neka funkcija sve njene lokalne promenljive pokupi garbage colector i one prestaju da postoje u memoriji.
// Medjutim to nije slucaj za funkcije koje unutar sebe sadrze closure funkciju.

// Closure su funkcije koje imaju pravo pristupa promenljivima iz domena neke druge funckije.

const proizvod = () => {
  const x = 5;
  const y = 10;
  const closure = () => {
    console.log(x * y);
  };
  closure();
};

proizvod();

// Napraviti funkciju koja vraca niz prestupnih godina u segmentu [pocetnaGodina, krajnjaGodina].
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ILII ako je deljiva sa 400.

const leapYears = (from, to) => {
  const leapYears = [];
  for (let i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
};

console.log(leapYears(2000, 2020));
