// 1.	Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

const pera = "Pera ima devojku";

let epar = "";

//                   inace bi bilo
epar += pera[1]; // pera[0];
epar += pera[0]; // pera[1];

epar += pera[3]; // pera[2];
epar += pera[2]; // pera[3];

console.log(epar);

const zamenaMesta = (string) => {
  let noviString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 !== 0 && i === string.length - 1) {
      noviString += string[i];
    } else if (i % 2 !== 0) {
      noviString += string[i - 1];
    } else if (i % 2 === 0) {
      noviString += string[i + 1];
    }
  }
  return noviString;
};

console.log(zamenaMesta("Pera ima devojku"));
console.log(zamenaMesta("Neparan broj karaktera."));

// 2.	Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

const spajanje = (A, B) => {
  let duzina;
  // if (A.length > B.length) {
  //     duzina = A.length
  // } else {
  //     duzina = B.length
  // }
  duzina = A.length > B.length ? A.length : B.length;
  let noviString = "";
  for (let i = 0; i < duzina; i++) {
    if (!A[i]) {
      // !A[i] umesto A[i] === undefined
      noviString += B[i];
    } else if (B[i] === undefined) {
      noviString += A[i];
    } else {
      noviString += A[i] + B[i];
    }
  }
  return noviString;
};

console.log(spajanje("PERA", "sladoled"));

// Domaci:
// 1. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com")); (posle imena moze biti ili _ ili .)
// "robin...@example.com"
