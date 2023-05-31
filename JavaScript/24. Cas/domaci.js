// Domaci:
// 1. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com")); (posle imena moze biti ili _ ili .)
// "robin...@example.com"

function protectUser(email) {
  const indexUnderline = email.indexOf("_");
  const indexDot = email.indexOf(".");
  //   let indexSymbol;
  //   if (indexUnderline === -1) {
  //     indexSymbol = indexDot;
  //   } else {
  //     indexSymbol = indexUnderline;
  //   }
  const indexSymbol = indexUnderline === -1 ? indexDot : indexUnderline;
  const indexEt = email.indexOf("@");
  const surname = email.slice(indexSymbol, indexEt);
  return email.replace(surname, "...");
}
console.log(protectUser("robin_singh@example.com"));
console.log(protectUser("robin.singh@example.com"));
