/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/


// ALWAYS USE const declaration - A STANDARD


// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var x = 1
console.log(x)


// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let name = "Mico"
console.log(name)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

// const num = 52
// num = 55
// console.log(num)

// Answer: When I reassigned the value of x from 52 to 55, it throwed an error because it is not possible to reassign
//         the value of a const variable.

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: According to MDN Web Docs (2023), The declarations var, let, and const have differences in terms of using it.
//         The var declaration declares or provides a function-level scoping, let declaration provides a block-level scoping,
//         and const declaration declares a variable that meant to be constant or unchanged.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const y = 1 + 5 * 5 / 13
console.log(y)

// Checkpoint 1.2 What operators did you use?
// Answer: Addition, Multiplication, and Division
// Your code here
const g = 1 + 5 * 5 / 13
console.log(g)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

let str1 ="Mico"
let str2 ="Efraim"
console.log(str1+str2)

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation Operator

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

const cont1 = true || false 
console.log(cont1)
const cont2 = false && true
console.log(cont2)

// Checkpoint 1.4 What operators did you use?
// Answer: AND and OR


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const names = ["moshi","fiona","tricia","robert","cate","dion"]
if (0 in names){
    console.log("MADZWAE KO YAN")
}

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] is an object so any array that is empty will always result to false
// Your code here
console.log(![])