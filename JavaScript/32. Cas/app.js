// Niz (Array) u JavaScriptu predstavlja strukturu podataka za skladistenje vise vrednosti.
// Dakle, unutar jedne promenljive (jednog niza) mozemo imati vise razlicitih (ili istih) vrednosti.
// Nizovi u JavaScriptu dozvoljavaju duplikate.
// Nizovi su heterogeni (unutar jednog niza mozemo imati elemente razlicitih tipova).

const niz = ["string", 23, true];
console.log(niz);

// Mozemo prvo samo kreirati niz a nakon toga mu dodeliti elemente.

const cars = [];
cars[0] = "Audi";
cars[1] = "Mercedes";
console.log(cars);

cars[3] = "Passat";
console.log(cars);
// array[index] sluzi za pristupanje elementu niza.
console.log(cars[2]);

// length metoda nam vraca broj elemenata nekog niza.

console.log(cars.length);

// Promena vrednosti nekog elementa se moze vrsiti na isti nacin:

cars[2] = "BMW";
console.log(cars);

// Niz mozemo napraviti i preko:
const cars2 = new Array("Golf", "Skoda", "Volvo");
console.log(cars2);

// Primer zbog kojeg treba izbegavati new Array():
// Napraviti niz od jednog elementa tipa number
const points = [40];
console.log(points);

// Pravi se niz od 40 undefined elemenata.
const points2 = new Array(40);
console.log(points2);

// Zbog jednostavnosti, citanja i brzine izvrsavanaj je bolje koristiti [] nacin nego new Array.

const arr = [[1, 2, 3], new Date(), false, function () {}];
console.log(arr);

// Postoje 2 nacina za proveru da li je neka promenljiva niz:

const num = 3;
const fruits = ["apple", "pineapple", "strawberry"];
// 1. Array.isArray(arr)

console.log(Array.isArray(fruits));
console.log(Array.isArray(num));

// 2. arr instanceof Array

console.log(fruits instanceof Array);
console.log(num instanceof Array);

fruits[fruits.length] = "banana";
console.log(fruits);

// Domaci:
// 1. Write a JavaScript function to check whether an `input` is an array or not.
// 2. Write a JavaScript function to clone an array.
// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
