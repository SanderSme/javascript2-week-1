// console.log();
// console.clear();
// console.warn();
// console.error();
// console.table();

// //1: console.log();

// console.log("ka du meina ka sa du");

// const name = "Sander";
// console.log(name);

// const responseDataOne = [
//   {
//     name: "Sander",
//     age: "27",
//   },
//   {
//     name: "Mordi",
//     age: "900",
//   },
// ];

// const responseDataTwo = [
//   {
//     name: "Sander",
//     age: "27",
//   },
//   {
//     name: "Mordi",
//     age: "900",
//   },
// ];

// console.log("responseDataOne: ", responseDataOne);
// console.log("responseDataTwo: ", responseDataTwo);

// //2: console.clear();
// //Clearing the console of anything written befor this line

// //3: console.table();
// console.table(responseDataOne);
// //convert arrays to a sort of form in the console

// //4: console.time();, console.timeEnd();
// console.time(); //this starts the timer
// console.timeEnd(); //this ends the timer

// function timerTest() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// console.time("myTimer");
// timerTest();
// console.timeEnd("myTimer");

// console.time("myTimer");
// timerTest();
// console.timeEnd("myTimer");

// console.time("myTimer");
// timerTest();
// console.timeEnd("myTimer");

// // example for console.log();
// function sum(num1, num2) {
//   return num1 + num2;
// }

// let number1 = 30;
// console.log(number1);

// let number2 = 18;
// console.log(number2);

// let total = sum(number1, number2);
// console.log("total: ", total);

//function that calculates the average:
// function getAverage(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }

// let number1 = 30;
// console.log(number1);

// let number2 = 28;
// console.log(number2);

// let number3 = 14;
// console.log(number3);

// let average = getAverage(number1, number2, number3);
// console.log("average: ", average);

//average of array:

// const myArray = [1, 3, 6, 8, 26];

// function getArrayAverage(arr) {
//   var total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   console.log(total);
//   const numberOfItemsInArr = arr.length;
//   console.log(numberOfItemsInArr);
//   let average = total / numberOfItemsInArr;
//   return average;
// }
// const resultAverage = getArrayAverage(myArray);

// console.log("AverageOfArray: ", resultAverage);

//When you make an API-call

//https://catfact.ninja/fact

// function getCatFacts() {
//   fetch("https://catfact.ninja/facts")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.data);
//     })
//     .catch((error) => {});
// }
// getCatFacts();

async function getCatyFacts() {
  const response = await fetch("https://catfact.ninja/facts");
  console.log(response);
  const catFacts = await response.json();
  console.log(catFacts);
  console.log(catFacts.data);
  return catFacts;
}
getCatyFacts().then((r) => {});
