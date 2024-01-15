/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
console.log("2.1")
if (randomNumber > 50){
    console.log("more than fifty")
}
else{
    console.log("less than fifty")
}

console.log()

// TODO 2.2 Display whether the random number is odd or even
// Your code here

console.log("2.2")
if (randomNumber % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}
console.log()

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

console.log("2.3")
let toDisplay = randomNumber

if (toDisplay % 5 == 0){
    console.log("buzz")
}
else if (toDisplay % 3 == 0){
    console.log("fizz")
}
else if(toDisplay % 5 == 0 && toDisplay % 3 == 0){
    console.log("fizzbuzz")
}
else{
    console.log(toDisplay)
}
console.log()

// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

console.log("2.4")
toDisplay = randomNumber % 2 == 0 ? "Even" : "Odd"

console.log("toDisplay", toDisplay);
console.log()

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: According to Programiz (2023), the switch statements are used for decision making and evaluating an expression. 
//         They are used when you have multiple conditions or choices for the same value.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
console.log("2.5")
for (let i = 1; i <= n; i++){
    console.log(i)
}

console.log()

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
console.log("2.6")
let index = 0
while (index < list.length){
    console.log(list[index])
    index++
}

console.log()

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The while loop assess the condition first before executing the code. On the other hand,
//          the do while loop executes first the code then it evaluates the condition. 

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("2.7")
for (const fruits of list){
    console.log(fruits)
}

console.log()

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code 
console.log("2.8")
for (const fruits in list){
    console.log(list[fruits])
}
console.log()

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("2.9")
list.forEach(fruits => {
    console.log(fruits)
})
console.log()

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: According to 30 seconds of code (2021), for of loop is used to iterate over iterable objects like arrays,
//         strings, maps etc. The for in loop is used to iterate over all enumerable properties of an object. Lastly,
//         the .forEach loop is used for arrays to iterate each element of an array.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

console.log("2.10")
try{
    if(denominator === 0){
        throw new Error("Division by zero error")
    } else {
        console.log(numerator / denominator);
    }
}catch (error){
    console.error(error.message)
}finally{
    console.log("cleaning up resources")
}