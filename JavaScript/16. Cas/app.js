const prom1 =
  "Sta ako zelimo da se data recenica ispise u \n dva odvojena reda";
console.log(prom1);

const prom2 =
  "Sta ako zelimo da se data recenica ispise u  dva odvojena reda kada kucamo, \
  ali njen prikaz ce izgledati u jednom redu.\
  sdfsdfsdfsd";
console.log(prom2);

// const prom3 =
// "Sta ako zelimo da se data recenica ispise u  dva odvojena reda kada kucamo,
// ali njen prikaz ce izgledati u jednom redu.
// sdfsdfsdfsd"

let br1 = 7;
let br2 = 13;
// let zbir = br1 + br2;
console.log("Zbir brojeva " + 7 + " i " + 13 + " je " + (br1 + br2));

// Resenje preko back-ticks

console.log(`Zbir brojeva ${br1} i ${br2} je ${br1 + br2}`);

// Zapisivanje navodnika se vrsi bez ikakvih problema kroz back-ticks sintaksu.

// Zapisivanje stringa u vise redova je ispravna sintaksa kroz back-ticks navode.

let recenica = "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'";

// replace() metoda menja specifican karakter (niz karaktera) nekim drugim (koji saljemo kroz drugi argument). To se postize pravljenjem novog stringa.
// console.log(recenica.replace("promenljivo", "lepse"));
let recenica2 = recenica.replace("promenljivo", "lepse");
console.log(recenica);

let recenica3 =
  "Zelimo zameniti rec 'promenljivo' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

let recenica4 = recenica3.replace("promenljivo", "lepse");
console.log(recenica4);

// replace() metoda menja samo prvi pronadjeni argument u datom stringu.
// Medjutim, koriscenjem regular expression mozemo zameniti dati argument gde god se nadje u stringu novim.
// Sintaksa:

// Regular Expression g (global) menja sve reci u stringu nekom novom
let recenica5 = recenica3.replace(/promenljivo/g, "lepse");
console.log(recenica5);

// Regular Expression i (insensitive) menja rec drugom bez obzira na njen zapis (bilo da je ispisana velikim ili malim slovima)
let recenica6 =
  "Zelimo zameniti rec 'PromenljivO' sa recju 'lepse'. Sta ako se rec promenljivo nadje na jos nekom mestu?";

let recenica7 = recenica6.replace(/promenljivo/gi, "lepse");
console.log(recenica7);

// toUpperCase() metoda pretvara ceo string u velika slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana velikim slovima.".toUpperCase());

// toLowerCase() metoda pretvara ceo string u mala slova, bez obzira na to kako je prethodno ispisan i koliko ima karaktera.

console.log("Data recenica treba biti ispisana malim slovima.".toLowerCase());

// concat() metoda spaja dva ili vise stringova u jedan.
// Nismo ograniceni slanjem argumenata.
// Dodavanje se vrsi onim redosledom kako saljemo argumente.

let a = "Prvi deo ";
let b = "nase recenice";
let b2 = ".";
let c = a.concat(b, b2);
console.log(c);

// Sve metode vezane za stingove prave novi string, ne vrsi se modifikacija postojeceg.

// 1.
// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string gde menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " + novaRecenica
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// Recenica je nedovoljne duzine za dalje ispitivanje.

function myFunc(recenica) {
  const duzina = recenica.length;
  if (duzina > 9) {
    const novaRecenica = recenica.replace(/a/g, "B");
    return "Ovo je novodobijena recenica: ".concat(novaRecenica);
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje.";
  }
}
console.log(myFunc("Recenica za modifikaciju."));
console.log(myFunc("Nije do"));

// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet.

// Zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti. Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string. Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

// Zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore. Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.
