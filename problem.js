//Task: Array Reduction
//Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
// const numbers = [2, 3, 6, 1, 4, 7, 8, 5, 2];
// const evenSum = (array) => {
//   let sum = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//       sum = sum + array[i];
//     }
//   }
//   return sum;
// };
// console.log(evenSum(numbers));

//Task: Leap Year Checker
//Write a function that determines whether a given year is a leap year.
// const leapYearChecker = (year) => {
//   if (year % 4 === 0) return true;
//   else return false;
// };
// console.log(leapYearChecker(2020));

//Task: Count Vowels:
//Write a function that counts the number of vowels in a given string.
//Example: Happy New Year
// const countVowel = (string) => {
//   let vowel = "aeiouAEIOU";
//   var count = 0;
//   for (i = 0; i < string.length; i++) {
//     if (vowel.includes(string[i])) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVowel("Happy New Year"));

//Task: Unique Values
//Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// const removeDuplicate = (arr) => {
//   let newArray = [];
//   for (i = 0; i < arr.length; i++) {
//     if (!newArray.includes(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };
// const numbers = [2, 3, 6, 4, 4, 2, 8, 5, 2, 8];
// // const newArr = new Set(numbers);
// console.log(removeDuplicate(numbers));

//Task: Find Maximum Value:
//Write a function that takes an array of numbers and returns the maximum value.
// const numbers = [6, 7, 1, 2, 5, 22, 5, 9];
// const maxNum = (arr) => {
//   let num = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (num < arr[i]) {
//       num = arr[i];
//     }
//   }
//   return num;
// };
// console.log(maxNum(numbers));
