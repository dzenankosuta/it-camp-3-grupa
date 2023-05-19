// Napraviti funkciju koja uzima neki trocifren broj za argument i vraca zbir cifara tog broja.
// Na primer, za argument 234, rezultat treba biti 9.
// Pretvaranje broja u string se vrsi preko toString() metoda.

function zbirCifara(a) {
  let jedinica = a % 10;
  let desetica = Math.floor((a / 10) % 10);
  let stotina = Math.floor(a / 100);
  return jedinica + desetica + stotina;
}
console.log(zbirCifara(379));

function zbirCifara2(broj) {
  const brString = broj.toString();
  const brNiz = brString.split("");
  let brojac = 0;
  for (let i = 0; i < brNiz.length; i++) {
    brojac += Number(brNiz[i]);
  }
  return brojac;
}
console.log(zbirCifara2(379));
