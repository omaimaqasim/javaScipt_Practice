// --- Product Pricing Calculation --- qno 1

// Define core product details
const productPrice = 50.00; // Base price of a single product

// Prompt the user for the quantity
// Using 'prompt' makes this a browser-side script, as Node.js doesn't have 'prompt' by default.
let productQuantityInput = prompt("Please enter the quantity of the product:");

// Convert the input string to an integer
// parseInt() ensures we're working with a number.
// Adding a check for valid input is good practice (though simplified here for the task).
let productQuantity = parseInt(productQuantityInput);

// Define shipping cost
const shippingPrice = 70; // Flat shipping cost

// --- Calculation without any discount ---
console.log("--- Calculation without Discount ---");

let finalAmountWithoutDiscount = (productPrice * productQuantity) + shippingPrice;
console.log(`Total amount (no discount): $${finalAmountWithoutDiscount.toFixed(2)}`);

// --- Calculation with a 10% discount ---
console.log("\n--- Calculation with 10% Discount ---");

const discountPercentage = 0.10; // 10% discount (as a decimal)

// Calculate the total price of products before applying discount
const totalProductPriceBeforeDiscount = productPrice * productQuantity;

// Calculate the price after applying the discount
// (1 - discountPercentage) gives you the remaining percentage to pay.
const priceAfterDiscount = totalProductPriceBeforeDiscount * (1 - discountPercentage);

// Calculate the final total price including the discount and shipping
const finalAmountWithDiscount = priceAfterDiscount + shippingPrice;

console.log(`Total amount (with 10% discount): $${finalAmountWithDiscount.toFixed(2)}`);

/*
// Example Usage (for testing if you run this in a browser):
// 1. Open this HTML file in your browser.
// 2. A prompt will appear. Enter a number (e.g., 3).
// 3. Open your browser's console (F12 or Ctrl+Shift+I, then go to 'Console' tab)
//    to see the output.

// Expected output for quantity = 3:
// --- Calculation without Discount ---
// Total amount (no discount): $220.00
//
// --- Calculation with 10% Discount ---
// Total amount (with 10% discount): $199.00
*/