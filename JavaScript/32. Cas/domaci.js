// Write a JavaScript program to calculate age.

function countMyAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();
  const birthMilliseconds = Date.parse(birthDate);
  const currentTimeMilliseconds = Date.parse(currentDate);

  const sub = currentTimeMilliseconds - birthMilliseconds;
  const year = new Date(sub).getFullYear() - 1970;
  return year;
}

console.log(countMyAge("1996-06-24"));
