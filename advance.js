//Task: Advanced Sorting
//Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
// Array of student objects
const students = [
  { name: "Alice", grades: [85, 92, 78] },
  { name: "Bob", grades: [88, 75, 90] },
  { name: "Charlie", grades: [95, 100, 85] },
  { name: "David", grades: [70, 80, 75] },
];

// Function to calculate average grade
function getAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to sort students by average grade in descending order
function sortStudentsByAverageGrade(students) {
  const sortedStudents = [];

  while (students.length > 0) {
    let highest = students[0];
    for (let i = 1; i < students.length; i++) {
      if (getAverage(students[i].grades) > getAverage(highest.grades)) {
        highest = students[i];
      }
    }
    sortedStudents.push(highest);
    students = students.filter((student) => student !== highest); // Remove the highest from original array
  }

  return sortedStudents;
}

// Sorting the students
const sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);

//Task: Functional Programming - Reduce
//Write a function that uses the reduce function to calculate the total value of an array of ////objects with a 'quantity' and 'price' property
// Array of items
const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 15 },
  { quantity: 1, price: 25 },
];

// Function to calculate total value using reduce
function calculateTotalValue(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

// Calculate and log the total value
const totalValue = calculateTotalValue(items);
console.log(totalValue); // Output: 85

//Task: Array Intersection
//Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.
// Function to find intersection of two arrays
function arrayIntersection(arr1, arr2) {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

// Example arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

// Finding and logging the intersection
const result = arrayIntersection(array1, array2);
console.log(result); // Output: [3, 4]

//Task: Object Transformation
//Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.
// Array of customer objects
const customers = [
  { name: "Alice", purchases: 6, loyaltyPoints: 100 },
  { name: "Bob", purchases: 3, loyaltyPoints: 50 },
  { name: "Charlie", purchases: 8, loyaltyPoints: 200 },
];

// Function to transform customers
function transformCustomers(customers) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].purchases > 5) {
      customers[i].loyaltyPoints *= 2; // Double loyalty points
    }
  }
  return customers;
}

// Transforming and logging the customers
const transformedCustomers = transformCustomers(customers);
console.log(transformedCustomers);

//Task: Function Memoization
//Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
// Memoization function
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key based on arguments
    if (cache[key]) {
      return cache[key]; // Return cached result
    }
    const result = fn(...args); // Call the original function
    cache[key] = result; // Store result in cache
    return result; // Return result
  };
}

// Example function to be memoized
function expensiveFunction(num) {
  // Simulating an expensive computation
  let result = 0;
  for (let i = 0; i < 1e6; i++) {
    result += i;
  }
  return result + num;
}

// Create a memoized version of the function
const memoizedExpensiveFunction = memoize(expensiveFunction);

// Calling the memoized function
console.log(memoizedExpensiveFunction(10)); // First call, computes
console.log(memoizedExpensiveFunction(10)); // Second call, returns cached result
