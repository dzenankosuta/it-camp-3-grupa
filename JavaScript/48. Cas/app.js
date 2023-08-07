const person = {
  firstName: "Nedim",
  lastName: "Huseinovic",
  age: 18,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

const person2 = {
  firstName: "Emir",
  lastName: "Marukic",
  age: 22,
};

// Postoje 3 metode koje mozemo koristiti za izvrsavanje neke funkcije (metode) za odredjeni objekat.
// 1. call()
// 2. apply()
// 3. bind()

// Prvo dolazimo do funkcije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekta, a moze biti i funkcija koja je definisana u global scope.
// Nakon toga, na tu funkciju primenjujemo call metodu ciji prvi argument predstavlja objekat na kojem zelimo izvrsavanje funkcije, a potencijalno drugi, treci,... su argumenti glavne funkcije.
console.log(person.fullName.call(person2));

const restoran = {
  specijalitet: "Becka snicla",
  zadovoljstoGostiju: "zadovoljni",
  lokacija: "Avnoja bb",
};

function poruka(mesto) {
  return `Nas vecerasnji specijalitet je bio ${this.specijalitet}. Gosti su bili veoma ${this.zadovoljstoGostiju}. 
Nalazimo se na lokaciji ${this.lokacija} u ${mesto}.`;
}

console.log(poruka.call(restoran, "Novom Pazaru"));

const restoran2 = {
  specijalitet: "Lovacka snicla",
  zadovoljstoGostiju: "nezadovoljni",
  lokacija: "Stevana Nemanje, 26",
};
console.log(poruka.call(restoran2, "Beogradu"));

// Prvo dolazimo do funkcije cije izvrsavanje zelimo, to moze biti funkcija koja predstavlja metodu nekog objekta, a moze biti i funkcija koja je definisana u global scope.
// Nakon toga, na tu funkciju primenjujemo apply metodu ciji prvi argument predstavlja objekat na kojem zelimo izvrsavanje funkcije, a potencijalno drugi argument je niz elemenata (gde svaki element predstavlja argument glavne metode).
console.log(poruka.apply(restoran, ["Beogradu"]));

const bindFunction = poruka.bind(restoran2);
console.log(bindFunction("Sarajevu"));

// Destructuring //

// const firstName = person.firstName;
// console.log(firstName);

const { firstName } = person;
console.log(firstName);

const age = 12;
const { lastName, age: agee } = person;
console.log(agee);

// Domaci:
// 1.
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
    vikend: "od 17 free",
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};
// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

//   2.
//  2. Zadatak
//  The variable watchList holds an array of objects with information
//  on several movies. Use reduce to find the average IMDB rating
//  of the movies directed by Christopher Nolan. Recall from prior challenges
//  how to filter data and map over it to pull what you need. You may need to
//   create other variables, and return the average rating from getRating function.
//   Note that the rating values are saved as strings in the object and need to be
//   converted into numbers before they are used in any mathematical operations.

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// 3.
//  Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is
const numbers = [-3, 4.8, 5, 3, -3.2];
