//Activity 1: Arithmatic Operators
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const remainder = (a, b) => a % b;

console.log(sum(1, 2)); //3
console.log(sub(1, 2)); //-1
console.log(mul(1, 2)); //2
console.log(div(1, 2)); //0.5
console.log(remainder(1, 2)); //1

// Activity 2: Assignment Operators
let x = 1;
let y = 4
x  += 2;
console.log(x); //3
y  -= 2;
console.log(y); //2

// Activity 3: Comparison Operators 
let a = 1;
let b = 2;
console.log(a === b); // false
console.log( a == b);  //false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true    

// Activity 4 : Logical Operators
let c = 1;
let d = 2;
console.log(c > 0 && d > 0); //true
console.log(c > 0 || d > 0); //true
console.log(!(c > 0 && d > 0)); //false

// Activity 5 : Ternary Operator   
let e = 1;
let f = 2;
console.log(e > 0 ? true : false); //true
console.log(f > 1 ? true : false); //false