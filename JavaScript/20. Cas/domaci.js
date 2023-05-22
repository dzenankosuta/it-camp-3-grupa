// Domaci zadaci:
// 1. Prebrojavanje reči
// Napiši funkciju koja prima jedan string kao argument i vraća broj reči u tom stringu. Pretpostavi da su reči odvojene samo jednim razmakom. Na primer, za ulazni string "Ovo je primer." funkcija treba da vrati broj 3.

// 2. Obrtanje stringa
// Napiši funkciju koja prima jedan string kao argument i vraća taj string u obrnutom redosledu. Na primer, za ulazni string "hello" funkcija treba da vrati "olleh".

// 3.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.`

const first = (recenica) => recenica.split(" ").length;

console.log(first("Koliko ima reci?"));
console.log(first("Koliko"));
console.log(first(""));

const second = (string) => {
  let noviString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    noviString += string[i];
  }
  return noviString;
};
console.log(second("hello"));

const third = (string) => {
  let brojac = 0;
  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(string[i]) && string[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
};
console.log(third("Koliko ima cifara broj 256?"));
