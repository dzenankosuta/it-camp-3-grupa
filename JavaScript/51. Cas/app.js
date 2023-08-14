// https://jsonplaceholder.typicode.com/

// async function getUsers() {
// }

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
};

getUsers();

// Napraviti getComments funkciju koja ce prikazati email adrese ljudi koji su komentarisali objavu (random u prvih 50), zatim random u drugih pedeset itd.
// S obzirom da imamo 500 komentara treba vratiti 10 email adresa.

const getComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  const firstFifty = comments.filter((comment) => comment.id < 51);
  const secondFifty = comments.filter(
    (comment) => comment.id > 50 && comment.id < 101
  );
  const thirdFifty = comments.filter(
    (comment) => comment.id > 100 && comment.id < 151
  );
  const fourthFifty = comments.filter(
    (comment) => comment.id > 150 && comment.id < 201
  );
  const fifthFifty = comments.filter(
    (comment) => comment.id > 200 && comment.id < 251
  );
  const sixthFifty = comments.filter(
    (comment) => comment.id > 250 && comment.id < 301
  );
  const seventhFifty = comments.filter(
    (comment) => comment.id > 300 && comment.id < 351
  );
  const eightthFifty = comments.filter(
    (comment) => comment.id > 350 && comment.id < 401
  );
  const ninethFifty = comments.filter(
    (comment) => comment.id > 400 && comment.id < 451
  );
  const tenthFifty = comments.filter(
    (comment) => comment.id > 450 && comment.id < 501
  );
  const first = firstFifty.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 1
  ).email;
  const second = secondFifty.find(
    (el) => el.id === Math.floor(Math.random() * 50) + 51
  ).email;
  console.log(second);
};

// getComments();

// console.log(Math.floor(Math.random() * 10) + 1);

const getSpecialPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const posts = await response.json();
  console.log(posts);
};

getSpecialPost(Math.floor(Math.random() * 40) + 30);
