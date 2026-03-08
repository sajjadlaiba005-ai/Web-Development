// ===============================
// JavaScript Operators Practice
// ===============================

console.log("----- Arithmetic Operators -----");

// Addition
let price = 100;
let tax = 20;
let total = price + tax;
console.log("Total Price:", total);

// Multiplication
let itemPrice = 500;
let quantity = 2;
let totalPrice = itemPrice * quantity;
console.log("Total Shopping Price:", totalPrice);

// Remainder
let remainder = 10 % 3;
console.log("Remainder of 10 % 3:", remainder);



console.log("\n----- Assignment Operators -----");

let score = 50;
score += 10;
console.log("Score after += 10:", score);

let balance = 1000;
balance += 500;
balance -= 200;
console.log("Final Balance:", balance);



console.log("\n----- Comparison Operators -----");

console.log("10 == '10':", 10 == "10");
console.log("10 === '10':", 10 === "10");
console.log("5 != 3:", 5 != 3);
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);



console.log("\n----- Logical Operators -----");

// AND example
let username = "admin";
let password = "123";

if (username === "admin" && password === "123") {
  console.log("Login Successful");
}

// OR example
let isStudent = true;
let isMember = false;

if (isStudent || isMember) {
  console.log("Discount Available");
}

// NOT example
let isLoggedIn = false;
console.log("User logged in:", !isLoggedIn);



console.log("\n----- Unary Operators -----");

let count = 5;
count++;
console.log("Count after increment:", count);

let lives = 3;
lives--;
console.log("Lives left:", lives);



console.log("\n----- Ternary Operator -----");

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log("Age Check:", result);

let amount = 1200;
let discount = amount > 1000 ? "10% Discount" : "No Discount";
console.log("Shopping Discount:", discount);



console.log("\n----- IF Statement -----");

let votingAge = 20;

if (votingAge >= 18) {
  console.log("You can vote");
}



console.log("\n----- IF ELSE Statement -----");

let marks = 40;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}



console.log("\n----- ELSE IF Statement -----");

let examMarks = 75;

if (examMarks >= 90) {
  console.log("Grade A");
} else if (examMarks >= 70) {
  console.log("Grade B");
} else if (examMarks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}



console.log("\n----- SWITCH Statement -----");

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Weekend");
}