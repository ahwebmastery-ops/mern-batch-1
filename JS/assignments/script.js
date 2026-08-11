// 1. Positive, Negative, or Zero
//    Take a number from the user and determine whether it is:
//    - Positive
//    - Negative
//    - Zero
let integer = Number(prompt("Enter a Number: "));

if (num == 0) {
  alert(`${num} is Zero.`);
} else if (num > 0) {
  alert(`${num} is Positive Number.`);
} else if (num < 0) {
  alert(`${num} is Negative Number.`);
} else {
  alert("Input Invalid.");
}

// 2. Even or Odd
//    Input an integer and check whether the number is even or odd.
let num = Number(prompt("Enter a Number: "));

if (num % 2 == 0) {
  alert(`${num} is Even Number.`);
} else if (num % 2 != 1) {
  alert(`${num} is Odd Number.`);
} else {
  alert("Input Invalid.");
}

// 3. Pass or Fail
//    Ask the user to enter marks.
//    If marks are 50 or above, display "Pass"; otherwise display "Fail".
let marks = Number(prompt("Enter Your Marks: "));

if (marks >= 50) {
  alert("You Passed.");
} else {
  alert("You Failed");
}

// 4. Voting Eligibility
//    Take the user's age as input.
//    If the age is 18 or above, display "Eligible to Vote"; otherwise display "Not Eligible".
let age = Number(prompt("Enter You Age: "));

if (age >= 18) {
  alert("You are eligible to vote.");
} else {
  alert("You are not eligible to vote.");
}

// 5. Largest of Two Numbers
//    Take two numbers from the user and display which number is greater.
let num1 = Number(prompt("Enter a Random Number: "));
let num2 = Number(prompt("Enter another Random Number: "));

if (num1 >= num2) {
  alert(`${num1} is Greater than ${num2}`);
} else {
  alert(`${num2} is Greater than ${num1}`);
}

// 6. Electricity Bill Category
//    A power company charges customers based on monthly units consumed.
//    Determine the bill category:
//    - 0 - 100 units → Low Usage
//    - 101 - 300 units → Medium Usage
//    - Above 300 units → High Usage
let units = Number(prompt("Enter Your Consumed Units: "));

if (units > 0 && units <= 100) {
  alert("Low Usage.");
} else if (units >= 101 && units <= 300) {
  alert("Medium Usage.");
} else {
  alert("High Usage.");
}

// 7. Employee Bonus Eligibility
//    A company gives bonuses based on years of service:
//    - Less than 2 years → No Bonus
//    - 2 to 5 years → 10% Bonus
//    - More than 5 years → 20% Bonus
//    Display the employee's bonus category.
let exper = Number(prompt("Enter Your Service (in Years): "));

if (exper < 2) {
  alert("No Bonus.");
} else if (exper >= 2 && exper <= 5) {
  alert("10% Bounus.");
} else {
  alert("20% Bonus.");
}

// 8. Online Shopping Discount
//    An online store offers discounts based on the purchase amount:
//    - Less than $50 → No Discount
//    - $50 - $199 → 10% Discount
//    - $200 or more → 20% Discount
//    Display the applicable discount.
let amount = Number(prompt("Enter your Purchased Amount: "));

if (amount < 50) {
  alert("No Discount.");
} else if (amount > 50 && amount < 199) {
  alert("10% Discount.");
} else {
  alert("20% Discount.");
}

// 9. Student Grade Evaluation
//    Calculate the student's grade using marks:
//    - 90 - 100 → Grade A
//    - 80 - 89 → Grade B
//    - 70 - 79 → Grade C
//    - 60 - 69 → Grade D
//    - Below 60 → Fail
let mark = Number(prompt("Enter Your Marks:"));

if (mark == 100 && mark >= 90) {
  alert("Grade A");
} else if (mark >= 80 && mark <= 89) {
  alert("Grade B");
} else if (mark >= 70 && mark <= 79) {
  alert("Grade C");
} else if (mark >= 60 && mark <= 69) {
  alert("Grade D");
} else {
  alert("Grade F");
}

// 10. ATM Withdrawal Validation
//     A customer wants to withdraw money from an ATM.
//     Check the following:
//     - If the withdrawal amount is greater than the account balance, display "Insufficient Balance".
//     - Otherwise, if the amount is not a multiple of 500, display "Enter amount in multiples of 500".
//     - Otherwise, display "Transaction Successful".
let balance = 99999999;
let amount = Number(prompt("Enter Withdrawal Amount: "));

if (amount != balance) {
  alert("Insufficent Balance.");
} else if (amount % 500 != 0) {
  alert("Enter amount in multiples of 500");
} else {
  alert("Transaction Successful.");
}

// 11. Scenario: A junior developer is writing code to parse string values from a web form. What will the following code output to the console, and why?
let input = "0";

switch (input) {
  case 0:
    console.log("Matched Number Zero");
    break;
  case "0":
    console.log("Matched String Zero");
    break;
  default:
    console.log("No Match Found");
}
//Answer: 2nd statement ("0") will be executed, because the passed expression is a string and the the 2nd statement gets excuted for string value.

// 12. Grouping Categories
// Scenario: You need to categorize clothing items into "Winter Wear" or "Summer Wear".
// According to categories, show a message to the user. For user enters category Winter Wear so you have to show futher sub categories coat, jersey etc and user select coat then show statement this coat price is – and other related info to that sub category
let category = prompt("Enter Clothing Category (Winter Wear/Summer Wear): ");

switch (category) {
  case "Winter Wear":
    let winterItem = prompt("Enter Winter Item: ");
    switch (winterItem) {
      case "Coat":
        alert("Price: $100. Material: Wool. Available Sizes: S, M, L, XL.");
        break;
      case "Blazer":
        alert("Price: $150. Material: Cotton. Available Sizes: S, M, L, XL.");
        break;
      case "Jersey":
        alert("Price: $50. Material: Polyester. Available Sizes: S, M, L, XL.");
        break;
      case "Scarf":
        alert(
          "Price: $80. Material: 10% Silk 90% Linen. Available Sizes: One Size.",
        );
        break;
      case "Gloves":
        alert("Price: $25. Material: Leather. Available Sizes: S, M, L, XL.");
        break;
      case "Beanie":
        alert("Price: $20. Material: Fleece. Available Sizes: One Size.");
        break;
      default:
        alert("Invalid Winter Item.");
    }
    break;
  case "Summer Wear":
    let summerItem = prompt("Enter Summer Item: ");
    switch (summerItem) {
      case "T-Shirt":
        alert("Price: $20. Material: Cotton. Available Sizes: S, M, L, XL.");
        break;
      case "Shorts":
        alert("Price: $30. Material: Polyester. Available Sizes: S, M, L, XL.");
        break;
      case "Sunglasses":
        alert(
          "Price: $80. Material: Polarized Saffire. Available Sizes: One Size.",
        );
        break;
      case "Tank Top":
        alert(
          "Price: $25. Material: 20% Cotton 80% Polyester. Available Sizes: S, M, L, XL.",
        );
        break;
      case "Flip Flops":
        alert("Price: $15. Material: EVA. Available Sizes: S, M, L, XL.");
      case "Swimwear":
        alert("Price: $60. Material: Nylon. Available Sizes: S, M, L, XL.");
        break;
      default:
        alert("Invalid Summer Item.");
    }
}

// 13. You are building a subscription billing system. Tier 1 and Tier 2 get basic support, Tier 3 gets premium support, and all other codes are invalid. Write a clean switch statement to handle this without duplicating the log code for Tiers 1 and 2.
let tier = prompt("Enter Your Tier: ");

switch (tier) {
  case 1 || tier === "Tier 1":
    alert("You have Basic Support.");
    break;
  case 2 || tier === "Tier 2":
    alert("You have Basic Support.");
    break;
  case 3 || tier === "Tier 3":
    alert("You have Premium Support.");
    break;
  default:
    alert("Invalid Tier Code.");
}

// 14. Switch only matches discrete values. How can you rewrite a complex if/else range logic (like user age grouping) inside a Switch statement?
let age = Number(prompt("Enter Your Age: "));

switch (age) {
  case age >= 0 && age <= 12:
    alert("Child");
    break;
  case age >= 13 && age <= 19:
    alert("Teenager");
    break;
  case age >= 20 && age <= 64:
    alert("Adult");
    break;
  case age >= 65:
    alert("Senior");
    break;
}

// 15. Write a shopping cart discount flow. If the user passes the coupon code “silver”, they should get a 10% discount, if he passes “gold” then should apply 20%.
let code = prompt("Enter Your Coupon Code: ");

switch (code) {
  case "silver":
    alert("You got 10% Discount.");
    break;
  case "gold":
    alert("You got 20% Discount.");
    break;
  default:
    alert("Coupon Code Invalid.");
}
