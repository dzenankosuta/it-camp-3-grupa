const godine = [17, 17, 21, 27, 19];
// 1. Napraviti novi niz, koji ce sadrzati samo godine vece od 17.

const godine2 = [];
godine.forEach((godina) => {
  //   if (godina > 17) {
  //     godine2.push(godina);
  //   }
  godina > 17 && godine2.push(godina);
});
console.log(godine2);

// filter() metoda pravi novi niz sa onim elementima koji su prosli test.
// Novi niz moze biti prazan, iste duzine kao originalni ili imati manje elemenata od originalnoz niza. Zavisi od toga koliko je elemenata proslo test.
// callback funkcija vraca uslov koji neki element treba da zadovoljava kako bi prosao test (kako bi bio dodat u novom nizu)
const godine3 = godine.filter((godina) => godina > 17);
console.log(godine3);

// 1.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

function helpers(arr1, arr2) {
  const helper1 = arr1.concat(arr2);
  const helper2 = helper1.filter((num) => num % 2 === 0);
  helper2.unshift(10, 20);
  return `First helper: ${helper1}
  second helper: ${helper2}`;
}
console.log(helpers([1, 2, 3, 4, 5], [6, 7, 8, 9]));

const students = [
  "Anastasija",
  "Merjem",
  "Emir",
  "Nedim",
  "Selver",
  "Ajla",
  "Asija",
];
// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza, gde je drugo slovo "e".

const students2 = students.filter((student) => student[1] === "e");
console.log(students2);

// reduce() metoda izvrsava callback funkciju za svaki element jednom i vraca nam jednu vrednost.
// reduce() metoda se izvrsava sa leve na desnu stranu.
// callback funkcija reduce metode moze imati 4 argumenta:
// (previousValue, currentValue, index, array)

// const godine = [17, 17, 21, 27, 19];
const suma = godine.reduce((prev, curr) => prev + curr);
console.log(suma);

// Mozemo dodati pocetnu vrednost, ona predstavlja drugi parametar callback funkcije.
const suma2 = godine.reduce((prev, curr) => prev + curr, 100);
console.log(suma2);

// 1. Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

// 2. Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".

// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// 4. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
