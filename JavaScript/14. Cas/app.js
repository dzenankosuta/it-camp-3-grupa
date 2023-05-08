const zbirKvadrata = function (a, b) {
  if (a === b) {
    return "Povrsina kvadrata iznosi: " + a * b;
  } else {
    return "Povrsina pravougaonika iznosi: " + a * b;
  }
};

console.log(zbirKvadrata(4, 5));
console.log(zbirKvadrata(5, 5));

// Arrow function:
const kvadratBroja = (a) => {
  return a ** 2;
};
console.log(kvadratBroja(4));

// Ako arrow function ima samo jedan parametar, nije neophodno stavljati ga u zagradama.
// Ako funkcija vraca neki jednostavan izraz (prethodno nije bilo dodatnog koda) mozemo izostaviti viticaste zagrade i return keyword.

const kvadratBroja2 = (a) => a ** 2;

// Napraviti arrow funkciju koja na osnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

function newFunc() {
  const broj = prompt("Unesite neki broj: ");
  if (isNaN(broj)) {
    return "Niste uneli korektan broj.";
  } else if (broj > 0) {
    return "Uneli ste pozitivan broj.";
  } else if (broj < 0) {
    return "Uneli ste negativan broj.";
  } else {
    return "Uneli ste nulu.";
  }
}
newFunc(); // takodje se izvrsava
console.log(newFunc()); // ispisujemo u konzoli radi provere
