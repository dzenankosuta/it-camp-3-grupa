// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return the string No such contact.
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (arr, name, prop) => {
  const contact = arr.find((contact) => contact.firstName === name);
  if (contact) {
    if (contact.hasOwnProperty(prop)) {
      return contact[prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
};

console.log(lookUpProfile(contacts, "Sherlock", "number"));
console.log(lookUpProfile(contacts, "Sherlock", "hobby"));
console.log(lookUpProfile(contacts, "Michael", "number"));

// Napraviti funkciju koja mapira neki niz (argument).
// Ako produkt ima u zalihama vise od 20 treba:
// Treba datom produktu smanjiti cenu za 20%
// Ako produkt ima u zalihama vise od 40 treba:
// Treba datom produktu smanjiti cenu za 40%
// U slucaju da u zalihama ima 20 i manje kolicine,
// cena se ne menja.

// {
//     id: 1,
//     name: "ARSENAL 22/23 HOME JERSEY",
//     price: 50,
//     imgUrl:
//       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/450ddf1b5943474fa472ae25009dfed0_9366/ARSENAL_22-23_HOME_JERSEY_Y_Red_HA5339_01_laydown.jpg",
//     currency: "EUR",
//     quantity: 41,
//   }

const dicountProducts = (arr) => {
  arr.map((product) => {
    if (product.quantity > 40) {
      return {
        ...product,
        price: product.price * 0.6,
      };
    } else if (product.quantity > 20) {
      return {
        ...product,
        price: product.price * 0.8,
      };
    } else {
      return product;
    }
  });
};
