// Object built in methods

const osoba = {
  ime: "Asija",
  prezime: "Sijaric",
  starost: 19,
};

osoba.bojaOciju = "plava";

console.log(osoba);

delete osoba.bojaOciju;

console.log(osoba);

// Object.freeze(osoba) cini objekat nepromenljivim (immutabile).
// Ne mozemo dodavati, menjati ili brisati neki property.

// Object.freeze(osoba);

// osoba.bojaOciju = "plava";
// osoba.ime = "Ajla";
// console.log(osoba);

// Object.seal(osoba) cini objekat promenljivim ali nije dozvoljeno dodavati, niti brisati elemente.

Object.seal(osoba);

osoba.bojaOciju = "plava";
delete osoba.starost;
osoba.ime = "Ajla";
console.log(osoba);

// Object.keys(osoba) vraca niz kljuceva datog objekta.

const keys = Object.keys(osoba);
console.log(keys);

// Object.values(osoba) vraca niz vrednosti datog objekta.

const values = Object.values(osoba);
console.log(values);

// Object.entries(osoba) vraca niz nizova, gde je svaki podniz par [key, value]

const entries = Object.entries(osoba);
console.log(entries);

const entries2 = entries.flat();
console.log(entries2);

// niz stringova
const strings = entries2.filter((el) => typeof el === "string");
console.log(strings);
// niz brojeva
const numbers = entries2.filter((el) => typeof el === "number");
console.log(numbers);
// niz booleana
const booleans = entries2.filter((el) => typeof el === "boolean");
console.log(booleans);

// Object.is(obj1, obj2) metoda proverava identicku jednakost (vraca boolean).

console.log(osoba);

const osoba2 = {
  ime: "Ajla",
  prezime: "Sijaric",
  starost: 19,
};

const osoba3 = osoba;

console.log(Object.is(osoba, osoba2)); // false
console.log(Object.is(osoba, osoba3)); // true

// Domaci:
// 1.  Iz 2 poslata niza vratiti 3. niz koji ce sadrzati one elemente iz oba niza koji nisu sadrzani u onom drugom nizu.
const niz1 = [1, 3, 4, 5, 6, 7, 9];
const niz2 = [2, 4, 5, 6, 8, 10];
