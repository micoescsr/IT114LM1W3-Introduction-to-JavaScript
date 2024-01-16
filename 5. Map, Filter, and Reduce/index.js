/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

console.log("5.1")
const squareNum = numbers.map(num => num ** 2)
console.log("Square of Numbers:", squareNum)
console.log()

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

console.log("5.2")
const evenNum = numbers.filter(num => num % 2 === 0)
console.log("Even Numbers in the Array:", evenNum)
console.log()

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

console.log("5.3")
const sumNum = numbers.reduce((total, value) => total + value, 0)
console.log("Sum of Numbers:", sumNum)
console.log()

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world', 'man','fox'];
// Your code here

console.log("5.4")
const upperWord = words.map(word => word.toUpperCase())
console.log("Converted Uppercase Words:", upperWord)
console.log()

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

console.log("5.5")
const longWords = words.filter(word => word.length > 4)
console.log("More than 4 letter words:", longWords)
console.log()

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

console.log("5.6")
const concat = words.reduce((concatString, word) => concatString + word, '')
console.log("Concatenated Words:", concat)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// The method map is used for creating a new array by applying a function to each element of an existing array.
// On the other hand, the method filter is used to create a new array containing only the elements that pass a 
// certain condition. Lastly, the method reduce reduces an array to a single value by applying a function against 
// an accumulator and each element in the array.