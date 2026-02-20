/*
🔥 4-Minute Challenge — Safe Power Calculator

🧠 TASK:
Write a JavaScript program that calculates the power of a number safely.

-----------------------------------------
📌 Requirements:

1️⃣ Take two inputs using prompt():
   - Base number
   - Exponent number

2️⃣ Convert inputs to numbers using:
   - parseInt() OR Number()

3️⃣ Validation Rules:
   - If either input is NOT a valid number → 
     throw new Error("❌ Please enter valid numbers!")

   - If exponent is negative →
     throw new Error("❌ Negative exponents are not allowed!")

4️⃣ Use try...catch to handle errors.

5️⃣ If inputs are valid:
   - Calculate result using Math.pow(base, exponent)
   - Print:
     "✅ Result is: <answer>"

6️⃣ Use finally block to ALWAYS print:
   "🔚 Calculation complete."

-----------------------------------------
📌 Example 1 (Valid Input):
Base: 2
Exponent: 3

Output:
✅ Result is: 8
🔚 Calculation complete.

-----------------------------------------
📌 Example 2 (Invalid Input):
Base: hello
Exponent: 3

Output:
❌ Please enter valid numbers!
🔚 Calculation complete.

-----------------------------------------
📌 Example 3 (Negative Exponent):
Base: 2
Exponent: -2

Output:
❌ Negative exponents are not allowed!
🔚 Calculation complete.

-----------------------------------------
⏳ Time Limit: 4 Minutes
🎯 Goal: Use prompt, parseInt/Number, isNaN, throw, try-catch, and finally correctly.
*/


let base = prompt("enter base number");
 base = parseInt(base);

let exponent = prompt("enter exponent number");
 exponent = parseInt(exponent);

 if (isNaN(base) || isNaN(exponent)) {
    
    throw  SyntaxError("enter valid number");
    
 }

 try {
     
 } catch (error) {
    
 }

