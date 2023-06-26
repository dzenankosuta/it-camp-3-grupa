// 3. Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Dzevdet, Marija, Melida i Tarik ne smeju naci.

const grupa = [
  "Tarik",
  "Selver",
  "Nedim",
  "Merjem",
  "Melida",
  "Marija",
  "Dzevdet",
  "Dzana",
  "Asija",
  "Anastasija",
  "Ajsa",
];
const novaGrupa = [];
for (let person of grupa) {
  if (
    person === "Tarik" ||
    person === "Melida" ||
    person === "Marija" ||
    person === "Dzevdet"
  ) {
    continue;
  } else {
    novaGrupa.push(person);
  }
}

const muskarci = [];
const devojke = [];

for (let person of novaGrupa) {
  if (person[person.length - 1] === "a" || person === "Merjem") {
    devojke.push(person);
  } else {
    muskarci.push(person);
  }
}
console.log(muskarci);
console.log(devojke);
