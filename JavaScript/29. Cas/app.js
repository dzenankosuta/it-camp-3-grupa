// Math.min(x,y,z,...,n) - vraca najmanji broj od prosledjenih.

console.log(Math.min(2, 5, 1, -9, 10, 26));

// Math.max(x,y,z,...,n) - vraca najveci broj od prosledjenih.

console.log(Math.max(2, 5, 1, -9, 10, 26));

// Nacin da dobijemo najmanji (najveci) element NIZA je da na vec postojecu metodu Math.min() (Math.max()) dodamo jos:
// .apply(null, [1,2,3]).
console.log(Math.min.apply(null, [2, 5, 1, -9, 10, 26]));

const nizBrojeva = [2, 5, 1, -9, 10, 26];

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMax(nizBrojeva));

// Math.random() metoda vraca random broj izmadju 0(ukljucujuci) i 1(ne ukljucujuci).

// Broj izmedju 0 i 1 (realan broj)
console.log(Math.random());

// 0 ili 1
console.log(Math.round(Math.random()));

// Broj izmedju 0 i 20
console.log(Math.round(Math.random() * 20));

// Broj izmedju 50 i 100
console.log(Math.round(Math.random() * 50) + 50);

// Math.log(x) - vraca logaritam broja x za osnovu e
// Math.log2(x) - vraca logaritam broja x za osnovu 2
// Math.log10(x) - vraca logaritam broja x za osnovu 10

// Napraviti funkciju koja izracunava obim kruga, na osnovu
//  poluprecnika (parametra). O = 2 * r * PI

const obim = (r) => +(2 * r * Math.PI).toFixed(2);

console.log(obim(2));

// Izracunati rastojanje izmedu dve tacke u prostoru ako su zadate koordinate krajnjih tacaka.

function rastojanje(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(rastojanje(2, -3, 5, 4));

// Domaci:
// 1.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

// 2.
// Napraviti funkciju za pretvaranje radijana u stepene.
