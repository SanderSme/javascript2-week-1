// const pet = {
//   type: "Dog",
//   name: "Lilje",
// };

//turn object to JSON
// const petJSON = JSON.stringify(pet);
// console.log(petJSON);

//store data in localstorage
// localStorage.setItem("pet", petJSON);

//get data from localstorage
// const pet = localStorage.getItem("pet");
// console.log(pet);

// //turn JSON to object(JS)
// const petJS = JSON.parse(pet);
// console.log(petJS);

// //Remove item from localstorage:
// localStorage.removeItem("pet");

// //clear all data from localstorage:
// localStorage.clear;

//Example:
//store data in localstorage:
localStorage.setItem("name", "Sander");
localStorage.setItem("age", "27");
localStorage.setItem("city", "Oslo");

//get data from localstorage:
const name = localStorage.getItem("name");
console.log(name);

//remove item from localstorage:
localStorage.removeItem("age");

//Clear all data from localstorage:
localStorage.clear();
