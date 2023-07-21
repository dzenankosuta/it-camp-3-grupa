// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

const student = {
  ime: "Dženan",
  prezime: "Škaljić",
  brojIndeksa: 12345,
  ocene: [6, 7, 8, 9, 10],
  prosekOcena: function () {
    let sum = 0;
    for (let i = 0; i < this.ocene.length; i++) {
      sum += this.ocene[i];
    }
    return sum / this.ocene.length;
  },
};

console.log(student.prosekOcena());
