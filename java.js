// // Grocery Calculator//

// function calculateBill() {
//   // Ask number of items
//   let items = prompt("Enter number of items:");
//   items = Number(items);

//   let total = 0;

//   // Loop to get price of each item
//   for (let i = 1; i <= items; i++) {
//     let price = prompt("Enter price of item " + i + ":");
//     price = Number(price);

//     total = total + price;
//   }

//   // Apply discount if total > 5000
//   if (total > 5000) {
//     total = total - (total * 0.10);
//     alert("10% discount applied!");
//   }

//   // Return total bill
//   return total;
// }

// // Call function
// let finalBill = calculateBill();

// // Print final bill
// alert("Final Bill: " + finalBill);
// console.log("Final Bill:", finalBill);


//Student Result Checker//

// Function to calculate grade
function calculateGrade(avg) {
  if (avg >= 80) {
    return "A";
  } else if (avg >= 60) {
    return "B";
  } else if (avg >= 40) {
    return "C";
  } else {
    return "Fail";
  }
}

// Main program
let name = prompt("Enter student name:");

let total = 0;

// Loop for 5 subjects
for (let i = 1; i <= 5; i++) {
  let marks = prompt("Enter marks for subject " + i + ":");
  marks = Number(marks);

  total = total + marks;
}

// Calculate average
let average = total / 5;

// Get grade
let grade = calculateGrade(average);

// Print result
alert("Name: " + name);
alert("Total Marks: " + total);
alert("Average: " + average);
alert("Grade: " + grade);

console.log("Name:", name);
console.log("Total:", total);
console.log("Average:", average);
console.log("Grade:", grade);



    
 