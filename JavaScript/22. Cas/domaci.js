// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4.
// Podrazumeva se da uneti string nema vodeće razmake.

const rec = "Pera ima devojku";

const third = (recenica) => {
  const prviRazmak = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, prviRazmak);
  const duzina = prvaRec.length;
  return duzina;
};

console.log(third("Pera ima devojku"));
