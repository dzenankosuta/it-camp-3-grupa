// Domaci:
// 1. Write a JavaScript function to retrieve all the values of an object's properties.

const itCamp = {
  duzina: "9 meseci",
  brojTehnologija: 4,
  prvaTehnologija: "HTML",
  drugaTehnologija: "CSS",
  trecaTehnologija: "JavaScript",
  cetvrtaTehnologija: "React",
  ocekivaniIshod: "Junior Frontend Developer",
};

// for in

for (let x in itCamp) {
  console.log(x); // x je key za svaki property objekta
  console.log(itCamp[x]); // ispisuje se value za svaki property objekta
}

// 1. nacin
const values = (obj) => {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
};

console.log(values(itCamp));

// 2. nacin
const newArr = Object.values(itCamp);
console.log(newArr);

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

const filterStudents = (arr) => {
  return arr.filter(
    // (student) => student.bojaOciju === "braon" && student.polozenC === false
    (student) => student.bojaOciju === "braon" && !student.polozenC
  );
};

console.log(filterStudents(arr));
