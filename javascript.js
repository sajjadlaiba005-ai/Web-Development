

// 1. Total price of items in an e-commerce cart //


let item1 = 500;
let item2 = 300;
let item3 = 200;

let totalPrice = item1 + item2 + item3;
console.log("Total Price:", totalPrice);



// 2. Discounted price with 10% coupon//


let price = 1000;
let discount = price * 0.10;
let finalPrice = price - discount;

console.log("Price after 10% discount:", finalPrice);



// 3. Total bill including 18% tax//


let bill = 2000;
let tax = bill * 0.18;
let totalBill = bill + tax;

console.log("Total bill with tax:", totalBill);



// 4. BMI Calculator//


let weight = 70;   // kg
let height = 1.75; // meters

let bmi = weight / (height * height);

console.log("BMI:", bmi);



// 5. Monthly salary after tax deduction//


let salary = 50000;
let salaryTax = salary * 0.10;
let finalSalary = salary - salaryTax;

console.log("Salary after tax:", finalSalary);



// 6. Average rating from 5 users//


let r1 = 4;
let r2 = 5;
let r3 = 3;
let r4 = 4;
let r5 = 5;

let averageRating = (r1 + r2 + r3 + r4 + r5) / 5;

console.log("Average Rating:", averageRating);



// 7. Delivery charge calculator//


let orderAmount = 400;
let deliveryCharge;

if (orderAmount < 500) {
    deliveryCharge = 100;
} else {
    deliveryCharge = 0;
}

console.log("Delivery Charge:", deliveryCharge);



// 8. Simple Interest Calculator //


let principal = 10000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);



// 9. Remaining balance after withdrawa //


let balance = 10000;
let withdraw = 2500;

let remainingBalance = balance - withdraw;

console.log("Remaining Balance:", remainingBalance);



// 10. Minutes to hours converter //

let minutes = 130;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log(hours + " hours " + remainingMinutes + " minutes");



// IF-ELSE STATEMENTS (Decision Making) //




// 1. Login system //


let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}



// 2. Age restriction check //


let age = 16;

if (age >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied - Under 18");
}



// 3. Discount system //


let order = 250;
let orderDiscount = 0;

if (order > 200) {
    orderDiscount = order * 0.20;
} else if (order > 100) {
    orderDiscount = order * 0.10;
}

let finalAmount = order - orderDiscount;

console.log("Final Order Price:", finalAmount);



// 4. Student grade checker //


let marks = 75;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



// 5. Weather advisory system //


let weather = "rainy";

if (weather === "hot") {
    console.log("Drink more water");
} else if (weather === "cold") {
    console.log("Wear warm clothes");
} else if (weather === "rainy") {
    console.log("Carry an umbrella");
} else {
    console.log("Weather normal");
}