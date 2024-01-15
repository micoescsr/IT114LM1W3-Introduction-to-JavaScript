/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("3.1")
const first = numbers[0]
console.log("First item", first)

const fifth = numbers[4]
console.log("Fifth item:", fifth)

const last = numbers[numbers.length - 1]
console.log("Last item:", last)

console.log()

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

console.log("3.2")

// MIN
const minResult = Math.min(...numbers)
// MAX
const maxResult = Math.max(...numbers)
// AVERAGE
const aveResult = numbers.reduce((sum, num) => sum + num, 0) / numbers.length

console.log("Min:", minResult)
console.log("Max:", maxResult)
console.log("Average:", aveResult)

console.log()


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Both lists in Python and arrays in JavaScript have similarities in storing elements in a specified order
//         and elements can be added, removed, or modidied. However, there are significant differences between the
//         two. When storing items in a list in python, you can store different data types. On the other hand, arrays
//         in JavaScript can only store items that share the same data type. Moreover, there is also a difference of the
//         mutability in JavaScript and Python.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

console.log("3.3")
const IT114L ={
    courseCode: "IT114L",
    courseName: "Web Systems and Technologies (Laboratory)",
    courseUnits: 1,
    numStudents: 40
}

console.log("IT114L Objects:", IT114L)

console.log()

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

console.log("3.4")
IT114L["Professor"] = "Job Lipat"
console.log("Professor:", IT114L["Professor"])

console.log()

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

console.log("3.5")
const courses = [
    {courseCode: "IT114", courseName: "Web Systems and Technologies", courseUnits: 2},
    {courseCode: "IT114L", courseName: "Web Systems and Technologies (Laboratory)", courseUnits: 1},
    {courseCode: "CS107", courseName: "Information Management", courseUnits: 2},
    {courseCode: "CS107L", courseName: "Information Management (Laboratory)", courseUnits: 1},
    {courseCode: "IT132", courseName: "Logic Design and Switching Theory", courseUnits: 2},
    {courseCode: "IT132L", courseName: "Logic Design and Switching Theory (Laboratory)", courseUnits: 1},
    {courseCode: "IT133", courseName: "Technopreneurship", courseUnits: 3},
    {courseCode: "HUM039", courseName: "Ethics", courseUnits: 3},
]

console.log("Courses:", courses)

console.log()

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

console.log("3.5")
const totalUnits = courses.reduce((sum, course) => sum + course.courseUnits, 0)
console.log("Total Course Units:", totalUnits)
console.log()

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects from JavaScript in Python would be the dictionaries. Both objects and dictionaries
//         are key-value pairs. However, for some use cases, there are difference. You may use JS's object when dealing
//         with complex data models and use Python's dictionary when dealing with simple data organization.
//         Moreover, JS's object can have methods, which we can not do in Python's dictionary. 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

console.log("3.6")

const otherNum = [...numbers,93]
console.log("Additional Number for Numbers Array", otherNum)
console.log()

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
console.log("3.7")
const { courseCode, courseUnits, ...rest} = IT114L;
console.log("IT114L Course Code:", courseCode);
console.log("IT114L Units:", courseUnits);
