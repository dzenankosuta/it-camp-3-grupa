// JSON JavaScript Object Notation //

// JSON je format za skladistenje i prenos podataka. Najcesce se koristi kada se podaci salju sa backenda ka WEB stranici.
// Sintaksa je vrlo slicna JavaScript objektima:

// const person = {
//     "firstName": "Dzenan",
//     "lastName": "Kosuta",
//     "age": 27
// }

const person = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  age: 27,
};

// JSON.stringify() metoda koja neki JSON format pretvara u string

const strJSON = JSON.stringify(person);
console.log(strJSON);
console.log(typeof strJSON);

// JSON.parse() metoda koja od nekog stringa pokusava dobiti objekat

const obj = JSON.parse(strJSON);
console.log(obj);
