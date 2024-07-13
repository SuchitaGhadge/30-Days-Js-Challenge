// Activity 1 : Declare a variable
console.log(number)  // undefined
var number = 30;
console.log(number);  //30
// console.log(proName) // Uncaught ReferenceError: proName is not defined
let proName = "Chai";
console.log(proName);  // Chai

// Activity 2 : Constant Declaration
const isValid = true;
console.log(isValid);

// Activity 3 : Data Types
let myLove = "Coffee";
console.log(typeof myLove) //string
let myAge = 25;
console.log(typeof myAge); //number
let isMarried = false;
console.log(typeof isMarried); //boolean
let myInfo = {
    name : "abc",
    age : 25,
    hobby : "coding"
}
console.log(typeof myInfo); // object
let otherHobbies = ["travel", "music", "drawing"];
console.log(typeof otherHobbies); //object
let myInfo2 = undefined; 
console.log(typeof myInfo2);  //undefined
let myInfo3 = null;
console.log(typeof myInfo3); //object

const myFuc = () => {}
console.log(typeof myFuc);

// Activity 4 : Reassigning Variables
let myName = "Chai";
console.log(myName);  // Chai
myName = "Coffee";
console.log(myName);  // Coffee

// Activity 5 : Understanding const
const myName2 = "Chai";
console.log(myName2);  // Chai
// myName2 = "Coffee";
// console.log(myName2);  // Uncaught TypeError: Assignment to constant variable

/**
 * var => global scope variable, can be accessed before declaration, can be reassigned;
 * let => block scope variable, can't be accessed before declaration, can be reassigned;
 * const => block scope variable, can't be accessed before declaration, can't be reassigned;
 * 
 * Types of Data Types (See Activity 3)
 * 1. String =>   type String
 * 2. Number =>  type Number
 * 3. Boolean =>  type Boolean
 * 4. Object =>  type Object 
 * 5. Array => type Object
 * 6. Undefined => type Undefined
 * 7. Null => type Object
 * 8. Function => type Function
 */