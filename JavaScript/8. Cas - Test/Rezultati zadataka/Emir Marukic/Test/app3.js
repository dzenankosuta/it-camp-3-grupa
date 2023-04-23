// Ispisati prva tri boja koja su deljiva sa 4 i 6

for (let i = 1; i < 40; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
  }
}
