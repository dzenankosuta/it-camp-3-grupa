// find() metoda vraca prvu vrednost niza koja je prosla test.
// Ako nema elementa koji bi zadovoljio uslov find() metoda vraca undefined.

const grupa = ["Anastasija", "Merjem", "Ajla", "Selver", "Dzana"];

// Naci prvi element niza cije je ime duze od 8 karaktera.

const prvi = grupa.find((student) => student.length > 8);
console.log(prvi);

const drugi = grupa.find((student) => student.length > 11);
console.log(drugi);

// findIndex() metoda vraca poziciju prvog elementa koji je zadovoljio uslov.

const prviIndex = grupa.findIndex((student) => student.length > 8);
console.log(prviIndex);

const drugiIndex = grupa.findIndex((student) => student.length > 11);
console.log(drugiIndex);

// Ako imamo niz gde su elementi posebni nizovi i zelimo da napravimo novi niz sastavljen od elemenata podnizova mozemo primeniti flat() metodu.

const arr = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [11, 22, 33, 44, 55, 66, 77, 88, 99],
];
const newArr = arr.flat();
console.log(newArr);

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const fruits = [
  "strawberry",
  "cherry",
  "STRAWberry",
  "apple",
  "apple",
  "STRAWBERRY",
];

const removeDuplicates = (arr) => {
  // const newArr = arr.filter((el) => !newArr.includes(el.toLowerCase())) ne mozemo koristiti niz koji se tek kreira u uslovu same callback funkcije
  const newArr = [];
  arr.forEach((element) => {
    if (!newArr.includes(element.toLowerCase())) {
      newArr.push(element);
    }
  });
  return newArr;
};
console.log(removeDuplicates(fruits));

// Domaci:
// 1. Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.

// 2. We have the following arrays : Go to the editor
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["st", "nd", "rd", "th"];
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
