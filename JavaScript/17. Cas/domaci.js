// Domaci zadaci:
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima;
// 2. recenicu ispisanu malim slovima;
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.

// Zadatak: Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string.
// Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

// Zadatak: Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore.
// Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.

function first() {
  const recenica = prompt("Unesite neku recenicu: ");
  const recenica1 = recenica.toUpperCase();
  const recenica2 = recenica.toLowerCase();

  const duzinaRecenice = recenica.length;
  let recenica3 = "";
  for (let i = 0; i < duzinaRecenice; i++) {
    if (i <= duzinaRecenice / 2) {
      recenica3 += recenica[i].toUpperCase();
    } else {
      recenica3 += recenica[i].toLowerCase();
    }
  }

  const recenica4 = recenica.replace(/skola/gi, "fakultet");

  return `${recenica1} \n
  ${recenica2} \n
  ${recenica3} \n
  ${recenica4}`;
}

console.log(first());

const second = (recenica, rec) => recenica.replace(rec, "#");

console.log(second("Danas je lep dan", "lep"));

const third = (recenica) => {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
};

console.log(third("Koliko ima karaktera"));
