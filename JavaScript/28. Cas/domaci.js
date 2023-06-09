// 2. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const nearestTo100 = (num1, num2) => {
  let firstCounter = 0;
  let secondCounter = 0;
  if (num1 < 100) {
    for (let i = num1; i < 100; i++) {
      firstCounter++;
    }
  } else {
    for (let i = num1; i > 100; i--) {
      firstCounter++;
    }
  }

  if (num2 < 100) {
    for (let i = num2; i < 100; i++) {
      secondCounter++;
    }
  } else {
    for (let i = num2; i > 100; i--) {
      secondCounter++;
    }
  }

  if (firstCounter < secondCounter) {
    return `${num1} is nearest to 100 than ${num2}`;
  } else if (firstCounter > secondCounter) {
    return `${num2} is nearest to 100 than ${num1}`;
  } else {
    return `They are on equal distance to number 100.`;
  }
};
console.log(nearestTo100(100, 9));
console.log(nearestTo100(98, 99));
console.log(nearestTo100(105, 105));
console.log(nearestTo100(105, 95));
