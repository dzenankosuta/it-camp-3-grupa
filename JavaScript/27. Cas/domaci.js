// 3. Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

function vratiBroj(broj) {
  if (!isNaN(broj) && broj >= 100 && broj <= 999) {
    const stotina = Math.floor(broj / 100);
    const jedinica = broj % 10;
    const noviBroj = Number(`${stotina}${jedinica}`);
    return noviBroj;
  } else {
    return "Argument nije trazeni broj iz opsega.";
  }
}
console.log(vratiBroj(123));
console.log(vratiBroj(976));
