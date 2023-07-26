// Domaci:
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17h free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (datum1, datum2) {
      const d1 = new Date(datum1);
      const d2 = new Date(datum2);
      const razlika = d2.getTime() - d1.getTime();
      const razlikaDana = razlika / (1000 * 3600 * 24);
      //   console.log("brdana", razlikaDana);
      return razlikaDana * this.dnevnaKarta;
    },
  },
};
console.log(automobil.garaza.platiZa("2023-6-22", "2023-6-26"));

//  2. Write a JavaScript program to sort an array of JavaScript objects:

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

// 1. nacin
// library.sort((a, b) => a.title.localeCompare(b.title));
// console.log(library);

// 2. nacin
const sortByTitle = (arr) => {
  const titleArr = arr.map((el) => el.title);
  titleArr.sort();

  const library2 = [];
  titleArr.forEach((title) => {
    const element = arr.find((obj) => obj.title === title);
    library2.push(element);
  });
  return library2;
};

console.log(sortByTitle(library));
