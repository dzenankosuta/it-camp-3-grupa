// JavaScript GET metode za datume:

// Sledece metode mozemo iskoristiti za dobijanje odredjenih informacija vezano za neki datum:

const date = new Date();

// 1. getFullYear()

console.log(date.getFullYear());

// 2. getMonth()

console.log(date.getMonth());

// 3. getDate()

console.log(date.getDate());

// 4. getHours()

console.log(date.getHours());

// 5. getMinutes()

console.log(date.getMinutes());

// 6. getSeconds()

console.log(date.getSeconds());

// 7. getMilliseconds()

console.log(date.getMilliseconds());

// 8. getTime()

console.log(date.getTime());
// console.log(Date.parse(date));

// 9. getDay()

console.log(date.getDay()); // vraca vrednost 0-6 (dani u nedelji)
// 0 - nedelja
// 6 - subota

// 10. Date.now()

console.log(Date.now()); // broj milisekundi od 1.1.1970. do trenutnog vremena

// JavaScript SET metode za datume:

// Sledece metode mozemo iskoristiti za setovanje odredjenih informacija vezano za neki datum:

// 1. setFullYear()

const updatedDate = date.setFullYear(1999);
console.log(new Date(updatedDate));

// 2. setMonth()
const updatedDate2 = date.setMonth(9);
console.log(new Date(updatedDate2));

// 3. setDate()

// 4. setHours()

// 5. setMinutes()

// 6. setSeconds()

// 7. setMilliseconds()

// Boolean

console.log(7 === 77);
console.log(typeof (7 === 77));

console.log(Boolean(7 === 77));
console.log(typeof Boolean(7 === 77));

console.log(5);
console.log(Boolean(5));

// VREDNOSNI I REFERENTNI TIPOVI PODATAKA
// (OSNOVNI I SLOZENI)
// (PRIMITIVNI I NEPRIMITIVNI)

// Primer vrednosnog tipa podatka
let rec = "danas";
let drugaRec = rec;

console.log(rec);
console.log(drugaRec);

drugaRec += " je bilo prelepo vreme.";

console.log(drugaRec);
console.log(rec);

// Primer referentnog tipa podatka

const niz = [1, 2, 3];
console.log(niz);
const drugiNiz = niz;
console.log(drugiNiz);

drugiNiz.pop();
console.log(drugiNiz);
console.log(niz);

//  Write a JavaScript function to get the number of days in a month.

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 0, 22, 22, 22).getDate();
  return date;
};

// saljemo godinu, mesec
console.log(new Date(2023, 5, 0, 22, 22, 22));

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

// Write a JavaScript function to get the month name from a particular date.

("2023-05-22");

const getMONTH = (string) => {
  const months = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ];
  const date = new Date(string);
  const month = date.getMonth();
  return months[month];
};
console.log(getMONTH("2023-01-22"));

// Write a JavaScript program to calculate age.
