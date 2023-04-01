// JavaScript Switch naredba //

// Switch naredbu koristimo kada imamo slucajeve koji preciziraju vrednost nekog izraza:

// switch (izraz) {
//   case vrednost1:
// blok koda za izvrsavanje u slucaju da je izraz === vrednost1
// break;
//   case vrednost2:
// blok koda za izvrsavanje u slucaju da je izraz === vrednost2
// break;
//   default:
// blok koda za izvrsavanje u slucaju da izraz nije jednak prethodnim vrednostima.
//   break; nije neophodno koristiti break na poslednjem slucaju
// }

// break keyword daje naredbu prestanka switch naredbe.
// break se ne sme izostaviti na kraju nekog slucaja (sem zadnjeg).
// Ako izostavimo break u slucaju koji je zadovoljen, izvrsice se i sledeci slucaj koji nije zadovoljen.

// Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se se ispise poruka: "uneli ste vrednostBroja"
// Defaultno: Niste uneli broj iz trazenog opsega.

const broj = Number(prompt("Unesite broj iz segmenta [12,15]"));
switch (broj) {
  case 12:
    console.log("Uneli ste broj " + broj);
    break;
  case 13:
    console.log("Uneli ste broj " + broj);
    break;
  case 14:
    console.log("Uneli ste broj " + broj);
    break;
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.
