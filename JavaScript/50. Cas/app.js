// Promise (Obecanje) je JavaScript objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije.

// const obecanje = new Promise((resolve, reject) => {
//   const response = 200;
//   if (response === 200) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// then metoda predstavlja mesto za izvrsavanje funkcije u slucaju resolve()
// catch metoda predstavlja mesto za izvrsavanje funkcije u slucaju reject()

// obecanje
//   .then(() => {
//     console.log("Uspesno dobijeni podaci.");
//   })
//   .catch(() => {
//     console.log("Nisu dobijeni podaci.");
//   })
//   .finally(() => {
//     console.log("Izvrsava se u svakom slucaju.");
//   });

// Napraviti promise koji proverava da li je neki objekat ispunio uslov da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

// const isAdult = new Promise((res, rej) => {
//   const person = {
//     firstName: "Dzenan",
//     lastName: "Kosuta",
//     age: 17,
//   };
//   if (person.age > 17) {
//     res();
//   } else {
//     rej(person.age);
//   }
// });

// isAdult
//   .then(() => {
//     console.log("Punoletni ste.");
//   })
//   .catch((years) => {
//     console.log(years);
//   });

const chain = new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -4, -6, -8];
  if (arr.every((num) => typeof num === "number")) {
    resolve(arr);
  } else {
    const errorMessage = "Dobijeni niz ima vrednosti koje nisu brojevi.";
    reject(errorMessage);
  }
});

chain
  .then((dobijeniNiz) => {
    console.log(`Dobijeni niz je ${dobijeniNiz}`);
    return dobijeniNiz;
  })
  .then((niz) => {
    const parni = niz.filter((num) => num % 2 === 0);
    console.log(`Niz parnih brojeva je ${parni}`);
  })
  .catch((poruka) => {
    console.log(poruka);
  });

// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je izvrsena".
