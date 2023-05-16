// trim() metoda brise prazan prostor sa obe strane stringa.

const str = "      email@gmail.com  ";
const duzina = str.length;
console.log(str);
console.log(duzina);

const str2 = str.trim();
const duzina2 = str2.length;
console.log(str2);
console.log(duzina2);

// Domaci:
// Zadatak: Spajanje stringova
// Napiši funkciju koja prima dva stringa kao argumenta i vraća njihovu konkatenaciju.
// Na primer, za ulazne vrednosti "Hello" i "World!", funkcija treba da vrati "HelloWorld!".

// Zadatak: Palindrom
// Napiši funkciju koja prima jedan string kao argument i proverava da li je taj string palindrom,
// tj. da li se čita isto i s leva na desno i s desna na levo.
// Funkcija treba da vrati true ako je string palindrom, inače false.
// Na primer, za ulazni string "radar" funkcija treba da vrati true, dok za ulazni string "hello" funkcija treba da vrati false.
