var b = 7;

let a = 4;

const c = 9;

// Cesto u literaturi cemo naici na tvrdnju da je JavaScript interpreterski jezik, ali to nije bas tako. U pozadini postoji JS masina koja vrsi pozadinsko kompajliranje pre izvrsavanja koda.
// Stoga nije pogresno reci da je JS kompajliran jezik.

// Pojam hoisting u JavaScriptu predstavlja izvlacenje svih deklaracija na vrhu skripte (fajla).

d = 11;

console.log(d);

// Kasnije deklariranje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno.

var d;
// let d;
// const d;

// 4.	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

function kojihJeVise(recenica) {
  let brVelikih = 0;
  let brMalih = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brMalih++;
    } else if (recenica[i] >= "A" && recenica[i] <= "Z") {
      brVelikih++;
    }
  }
  if (brVelikih > brMalih) {
    return `U datoj recenici ima vise velikih slova. Ima ih ${brVelikih}, dok malih slova ima ${brMalih}.`;
  } else if (brMalih > brVelikih) {
    return `U datoj recenici ima vise malih slova. Ima ih ${brMalih}, dok velikih slova ima ${brVelikih}.`;
  } else {
    return `Dati string ima jednak broj velikih i malih slova, ${brMalih}.`;
  }
}
console.log(kojihJeVise("Treba imati VISE malih SLova."));
console.log(kojihJeVise("TREBA IMATI VISE velikih SLova."));
console.log(kojihJeVise("mala i VELIKA s"));

// Domaci zadaci:
// 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.
