// Domaci zadaci:
// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".
// Inace vratiti duzinu datog stinga.

// 2.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

const first = (recenica) => {
  if (recenica.includes("skola")) {
    return recenica.indexOf("skola");
  } else if (recenica.startsWith("Automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    if (recenica.match(/kuca/g) === null) {
      return 0;
    } else {
      return recenica.match(/kuca/g).length;
    }
  } else {
    return recenica.length;
  }
};

console.log(first("Koja se skola podrazumeva?"));

console.log(first("Automobil na prodaju"));

console.log(first("parna recenica kuca "));
console.log(first("parna recenica"));

console.log(first("parna recenica kuca"));

console.log("a");
console.log("b");

console.log("a" > "b");
console.log("a" > "A");
// Prvo idu velika slova, pa onda mala.
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

// 2.
const second = (recenica) => {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brojac++;
    }
  }
  return brojac;
};

console.log(second("Koliko ima MALIH SLOVA?"));
