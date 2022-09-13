// const person = {
//   firstName: "Sander",
//   lastName: "Smedbøl",
//   country: "Norway",
// };

// const greeting = `Hello, I am ${person.firstName} ${person.lastName} from ${person.country}`;

// console.log(greeting);

//destructuring the properties:

// const person = {
//   firstName: "Sander",
//   lastName: "Smedbøl",
//   country: "Norway",
// };
// const { firstName, lastName, country } = person;

// const greeting = `Hello, I am ${firstName} ${lastName} from ${country}`;
// console.log(greeting);

// const person = {
//   firstName: "Sander",
//   lastName: "Smedbøl",
//   country: "Norway",
// };

//normal variable assignement:
// const firstName = person.firstName;
// const lastName = person.lastName;
// const country = person.country;

//Destructuring variables insted:
// const { firstName, lastName, country } = person;

//Destructuring parameters:
// function personGreeting(personObject) {
//   const { firstName, lastName } = personObject;
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// const person = {
//   firstName: "Sander",
//   lastName: "Smedbøl",
// };

// personGreeting(person);

//destructure the properties from the object where the parameter is:
// function personGreeting({ firstName, lastName }) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }
// const person = {
//   firstName: "Sander",
//   lastName: "Smedbøl",
// };

// personGreeting(person);

// values being destructured in an Array method:
// const people = [
//   {
//     firstName: "Sander",
//     lastName: "Smedbøl",
//     score: 50,
//   },
//   {
//     firstName: "CrazyKiller",
//     lastName: "Mike",
//     score: 2,
//   },
//   {
//     firstName: "Sandra",
//     lastName: "Møll",
//     score: 49,
//   },
// ];

// const winners = people.filter((currentItem) => {
//   if (currentItem.score >= 1) {
//     return true;
//   }
// });

//Destructuring 'score':
// const winners = people.filter(({ score }) => {
//   if (score >= 1) {
//     return true;
//   }
// });

// console.log(winners);

//destructuring in arrays:
// const coords = [12, 30, 5, 9, 100, 53];
// const [x, y] = coords;
// console.log(x, y);

//example 2:
// const people = ["Ola", "Kari", "CrazyKillerMike", "Petter"];
// const [name0, name1, ...rest] = people;

// console.log(name0, name1); //logs Ola Kari
// console.log(rest); //logs ['CrazyKillerMike', 'Petter']

//Ignoring values:
// const values = [1, 2, 3, 4, 5, 6];
// const [value0, , value2] = values;
// console.log(value0, value2);

// const names = ["Sander", "Mike", "Sandra", "Emil"];
// const [name0, name1, name2] = names;

// console.log(name0, name1, name2);

// const myCat = {
//   name: "handsome",
//   age: "10",
//   breed: "Egyptian Mau",
// };

// const { name, age, breed } = myCat;
// console.log(name, age, breed);
