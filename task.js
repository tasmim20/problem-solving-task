//Task: Array Filtering and Mapping
//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

// const people = [
//   {
//     name: "mr.x",
//     age: 23,
//     gender: "male",
//   },
//   { name: "etu", age: 24, gender: "female" },
//   { name: "mr.z", age: 20, gender: "male" },
//   { name: "mr.y", age: 29, gender: "male" },
// ];

// const filterAndMap = (arr) => {
//   const males = arr.filter((people) => people.gender === "male");
//   const names = males.map((people) => people.name);
//   return names;
// };
// const result = filterAndMap(people);
// console.log(result);

//Task: Object Manipulation
//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
// const books = [
//   { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
//   { title: "1984", author: "George Orwell", year: 1949 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
// ];
// const newArray = (arr) => {
//   const newArr = arr.map((book) => book.title);
//   return newArr;
// };

// const bookTitle = newArray(books);
// console.log(bookTitle);

//Task: Function Composition
//Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
// const square = (n) => n * n;
// const double = (n) => n * 2;
// const add5 = (n) => n + 5;
// const squareDoubleAdd5 = (num) => {
//   const result = add5(double(square(num)));
//   return result;
// };
// const number = squareDoubleAdd5(5);
// console.log(number);

//Task: Sorting Objects
//Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2015 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];
// const ascendingArray = (arr) => {
//   const newArr = arr.sort((a, b) => a.year - b.year);
//   return newArr;
// };

// const asArr = ascendingArray(cars);
// console.log(asArr);

//Task: Find and Modify
//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
// const people = [
//   { name: "John", age: 25, gender: "male" },
//   { name: "Jane", age: 22, gender: "female" },
//   { name: "Mark", age: 30, gender: "male" },
// ];
// const modifyAge = (arr, name, newAge) => {
//   const person = arr.find((person) => person.name === name);
//   if (person) {
//     person.age = newAge;
//   }
//   return arr;
// };
// const newArr = modifyAge(people, "Mark", 50);
// console.log(newArr);
