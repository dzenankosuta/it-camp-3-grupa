// includes() metoda vraca boolean(true ili false) u zavisnosti od toga da li se argument nalazi u stringu na kojem se primenjuje metoda ili ne.
// Opciono, drugi argument predstavlaj poziciju od koje cemo traziti dati argument u stringu.

const recenica = "Dobar dan!";
console.log(recenica.includes("vece"));
console.log(recenica.includes("dan"));

const recenica2 = "Na koliko ste casova bili danas u skoli?";

// match() metoda vraca niz. U zavisnosti od toga u kom obliku smo poslali argument, dobijamo razlicite nizove.

console.log(recenica2.match("a")); // niz za informacijama vezano za argument i string na koji smo primenili metodu
console.log(recenica2.match(/a/g)); // niz sa elementima iste vrednosti (ima ih onoliko koliko se argument pojavljuje puta u stringu)
console.log(recenica2.match(/adfv/g)); // Ako posaljemo argument koji se ne nalazi u stringu dobijamo null.

// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string, vratiti poziciju prvog i poslednjeg pojavljivanja, ako se pojavljuje jednom, vratiti poziciju pojavljivanja, dok ako se ne pojavljuje dati string vratiti poruku:
// "Nismo pronasli dati string."

// Ponasanje match metode:
// console.log("ko osvaja je rec ku trazimo.".match(/ko osvaja/g));
// console.log(
//   "ko osvaja je rec ku trazimo. Dakle, ko osvaja?".match(/ko osvaja/g)
// );
// console.log("Dobro vece".match(/ko osvaja/g));

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "Nismo pronasli dati string.";
  } else if (recenica.match(/ko osvaja/g).length === 1) {
    return recenica.indexOf("ko osvaja");
  } else {
    return `Pozicija prvog pojavljivanja: ${recenica.indexOf(
      "ko osvaja"
    )}; \n Pozicija poslednjeg pojavljivanja: ${recenica.lastIndexOf(
      "ko osvaja"
    )}.`;
  }
};
console.log(zadatak("ko osvaja ligu sampiona?"));
console.log(zadatak("Ko osvaja ligu sampiona?"));
console.log(zadatak("ko osvaja ligu sampiona? ko osvaja? ko osvaja?"));

// Domaci zadaci:
// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.

// 3.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.
