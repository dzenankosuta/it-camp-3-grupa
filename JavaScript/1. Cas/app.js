console.log("Prvi cas javascripta");
console.log("nova poruka");

tekst = document.getElementById("paragraf");
console.log(tekst);

tekst.innerHTML = "<em>Da li se vidi paragraf?<em>";

// TIPOVI PODATAKA //

// Postoje:
//  1. primitivni (vrednosni) tipovi podataka i
//  2. neprimitivni (referentni) tipovi podataka.

// Za proveru tipa odredjene promenljive (varijable) se koristi typeof operator.

// PRIMITIVNI (VREDNOSNI) TIPOVI PODATAKA:

// 1. string - promenljiva koja je zapisana unutar navodnika (obicnih ili duplih);

console.log("neki string");
console.log(typeof "neki string");

// 2. number - brojevi mogu biti zapisani sa ili bez decimalnog zareza (.)

console.log(56);
console.log(typeof 56);

console.log(56.56);
console.log(typeof 56.56);

// 3. BigInt - brojevi koji su iznad ogranicenja za number tip podatka.

console.log(BigInt(543654861685435486416874));
console.log(typeof BigInt(543654861685435486416874));

// 4. boolean - Logicki entitet koji ima dve vrednosti:
// true
// false

console.log(true);
console.log(typeof true);

// 5. undefined - Promenljiva koja je definisana u memoriji ali joj nije dodeljena vrednost ima:
// tip: undefined i
// vrednost: undefined.

var a;

console.log(a);
console.log(typeof a);

// 6. null - Nepostojeca ili nekorektna promenljiva ima vrednost null.
// Tip promenljive cija je vrednost null u JavaScriptu je object.

b = null;

console.log(b);
console.log(typeof b);

// 7. Symbol - Koristi se za promenljive koje su anonimne ili jedinstvene.

c = Symbol("IT CAMP");
console.log(c);
console.log(typeof c);

// Svi tipovi podatka koji nisu primitivni su tipa object.
// Promenljive koje mogu sadrzati vise (od jedne) vrednosti su referentnog (neprimitivnog) tipa.

// 1. Array (niz) - Struktura podataka za skladistenje vise vrednosti (te vrednosti mogu biti razlicitog tipa).

niz = ["Emir", 21, true];
console.log(niz);
console.log(typeof niz);

// 2. Object (objekat) - Struktura podataka za skladistenje vise vrednosti (te vrednosti mogu biti razlicitog tipa).
// Te vrednosti su prikazane u key:value (name:value) paru.

obj = {
  ime: "Emir",
  prezime: "Marukic",
  punoletan: true,
};

console.log(obj);
console.log(typeof obj);

// 3. Set - Struktura podataka za skladistenje vise vrednosti koja ne dozvoljava duplikate. Slicna je nizu (Array), a sintaksa za pravljenje seta je:

set = new Set(["Asija", "Melida", "Dino", 19, 31, 25, "Dino"]); // Svako novo pojavljivanje elementa u setu se nece primeniti.
console.log(set);

// 4. Map - Struktura podataka za skladistenje vise vrednosti i slicna je objektu. Sintaksa za pravljenje mape je:

map = new Map([
  ["banana", 160],
  ["jagoda", 240],
  ["kruska", 140],
  ["ananas", 289],
]);
console.log(map);
