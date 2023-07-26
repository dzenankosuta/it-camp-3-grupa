// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];

// 1. nacin
// const movies2 = movies.map((movie) => {
//   return {
//     title: movie.title,
//     budget: movie.budget,
//   };
// });

// 2. nacin
const movies2 = movies.map((movie) => ({
  title: movie.title,
  budget: movie.budget,
}));

console.log(movies2);

// Domaci:
// 1. Write a JavaScript function to retrieve all the values of an object's properties.

// 2. Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

const arr = [
  {
    ime: "Anastasija",
    prezime: "Milovic",
    starost: 17,
    bojaOciju: "braon",
    polozenC: false,
  },
  {
    ime: "Merjem",
    prezime: "Sinanovic",
    starost: 17,
    bojaOciju: "plava",
    polozenC: true,
  },
  {
    ime: "Emir",
    prezime: "Marukic",
    starost: 22,
    bojaOciju: "braon",
    polozenC: true,
  },
  {
    ime: "Ajsa",
    prezime: "Medjedovic",
    starost: 18,
    bojaOciju: "braon",
    polozenC: false,
  },
  {
    ime: "Ajla",
    prezime: "Lomnicanin",
    starost: 22,
    bojaOciju: "braon",
    polozenC: true,
  },
  {
    ime: "Asija",
    prezime: "Sijaric",
    starost: 19,
    bojaOciju: "plava",
    polozenC: false,
  },
];
