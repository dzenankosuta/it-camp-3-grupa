//  Write a JavaScript function to get the greatest common divisor (NZD) of two integers.

const NZD = (br1, br2) => {
  const manji = br1 > br2 ? br2 : br1;
  let NZD = 1;
  for (let i = manji; i >= 1; i--) {
    if (br1 % i === 0 && br2 % i === 0) {
      NZD = i;
      break;
    }
  }
  return NZD;
};
console.log(NZD(6, 4));
console.log(NZD(3, 4));
console.log(NZD(12, 8));

// Write a JavaScript function to get the least common multiple (NZS) of two numbers.

const NZS = (br1, br2) => {
  const veci = br1 > br2 ? br1 : br2;
  let NZS = veci;
  let i = veci;
  while (true) {
    if (i % br1 === 0 && i % br2 === 0) {
      NZS = i;
      break;
    }
    i++;
  }
  return NZS;
};
console.log(NZS(3, 4));
console.log(NZS(6, 8));
