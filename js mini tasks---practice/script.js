// ✅ JS PRACTICE QUESTION

/*
🎯 Exercise 1: Guess the Number

📝 Goal:
1. Generate a random number between 1 to 100.
2. Ask the user to guess the number.
3. Tell if the guess is greater, lesser, or correct.
4. Keep asking until the guess is correct.
5. Final score = 100 - number of guesses.
*/

// ✅ Random number generation formula:
// Math.floor(Math.random() * (max - min + 1)) + min

// 🔹 Math.floor() vs Math.ceil():
// 🔸 Math.floor(): Always rounds DOWN to nearest integer
//     Example: Math.floor(4.9) ➝ 4
// 🔸 Math.ceil(): Always rounds UP to nearest integer
//     Example: Math.ceil(4.1) ➝ 5
// ✅ For random numbers in a full range (inclusive), Math.floor is preferred.

let random_number = Math.floor(Math.random() * 100) + 1; // Generates number from 1 to 100

let guess_no;

do {
  guess_no = prompt("📥 ENTER ANY NUMBER (1 - 100):");
  guess_no = parseInt(guess_no); // Converts string input to number

  if (guess_no > random_number) {
    console.log("📉 Too high! Try a smaller number.");
  } else if (guess_no < random_number) {
    console.log("📈 Too low! Try a bigger number.");
  }

} while (guess_no !== random_number);

console.log("🎉 Yay! You win, the guess was correct.");


// ❌ If you declare guess_no inside the loop like this:
// let guess_no = prompt(...);

// It will cause:
// ReferenceError: guess_no is not defined in `while(...)`

// ✅ Fix: Declare it once outside the loop:
// let guess_no;
