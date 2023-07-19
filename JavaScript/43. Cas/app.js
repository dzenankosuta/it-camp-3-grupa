const arr = ["Emir", "Ajsa", "Dzenan"];
//             0        1        2

// Objekti su struktura podataka koja moze skladistiti vise vrednosti.
// Elemetni su zapisani u key/value (name/value) parovima.
// key/value (name/value) parovi u JavaScript objektima se zovu svojstva (properties).

const car = {
  type: "Fiat",
  model: 500,
  color: "white",
};

// Pristupanje nekoj vrednosti svojstva (property) mozemo izvrsiti na dva nacina:

// 1. obj.propertyName

console.log(car.type);

// 2. obj["propertyName"]

console.log(car["type"]);

// Objekti takodje mogu imati metode.
// Metode predstavljaju funkcije koje se izvrsavaju na objektu.

const person = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  age: 27,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

// U JavaScriptu this referencira (ukazuje) na neki objekat.
// this nije promenljiva vec rezervisana rec (keyword).
// Ne mozemo promeniti vrednost this.

const x = person;

console.log(x);

// Promena vrednosti svojstva:

person.firstName = "Dženan";
console.log(person);

// Dodavanje novog svojstva:

person.adult = true;
console.log(person);
console.log(x);

// Brisanje svojstva objekta:
// delete keyword brise i property name i value
// delete x.adult; ili
delete x["adult"];

console.log(x);

// Vrednost nekog svojstva u objektu moze biti objekat, niz...

// Od objekta mozemo dobiti niz pomocu metode Object.values()

const personArr = Object.values(person);

console.log(personArr);

// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const sub = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let k = i; k < str.length; k++) {
      arr.push(str.slice(i, k + 1));
    }
  }
  return arr;
};
console.log(sub("dog"));

// Domaci:
// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).
