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

// let random_number = Math.floor(Math.random() * 100) + 1; // Generates number from 1 to 100

// let guess_no;

// do {
//   guess_no = prompt("📥 ENTER ANY NUMBER (1 - 100):");
//   guess_no = parseInt(guess_no); // Converts string input to number

//   if (guess_no > random_number) {
//     console.log("📉 Too high! Try a smaller number.");
//   } else if (guess_no < random_number) {
//     console.log("📈 Too low! Try a bigger number.");
//   }

// } while (guess_no !== random_number);

// console.log("🎉 Yay! You win, the guess was correct.");


// ❌ If you declare guess_no inside the loop like this:
// let guess_no = prompt(...);

// It will cause:
// ReferenceError: guess_no is not defined in `while(...)`

// ✅ Fix: Declare it once outside the loop:
// let guess_no;



/*
🎯 Exercise 2 – Snake Water Gun Game (With Loop)

📝 Goal:
Use JavaScript to create a game of Snake, Water, and Gun.

✔ Ask the user to enter either:
   - 'S' for Snake
   - 'W' for Water
   - 'G' for Gun

✔ The computer should randomly choose between S, W, or G.
✔ Use alert or console to declare: Win / Loss / Draw
✔ Use `prompt()` to get input from the user.
✔ Use `confirm()` to allow replaying the game.
*/

console.log("🐍💧🔫 Welcome to the Snake Water Gun Game");

let playAgain = true;

while (playAgain) {
  // ✅ Ask user for input
  let choose = prompt("Choose one:\nG = Gun\nS = Snake\nW = Water").toUpperCase();

  // ✅ Validate input
  if (choose !== "G" && choose !== "S" && choose !== "W") {
    alert("❌ Invalid choice! Please enter G, S, or W only.");
    continue;
  }

  // ✅ Computer random choice
  let choices = ["G", "W", "S"];
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = choices[randomIndex];
  console.log("💻 Computer chose: " + computerChoice);

  // ✅ Game logic
  if (
    (choose === "G" && computerChoice === "S") ||
    (choose === "S" && computerChoice === "W") ||
    (choose === "W" && computerChoice === "G")
  ) {
    alert("🎉 You Win!");
  } else if (
    (computerChoice === "G" && choose === "S") ||
    (computerChoice === "S" && choose === "W") ||
    (computerChoice === "W" && choose === "G")
  ) {
    alert("😢 You Lose!");
  } else {
    alert("🤝 It's a Draw!");
  }

  // ✅ Ask if user wants to play again
  playAgain = confirm("🔁 Do you want to play again?");
}

alert("👋 Thanks for playing");

/*
❌ MISTAKES YOU MADE EARLIER:

1️⃣ Incorrect validation condition:
   if (choose !== "G" || "S" || "W") → always true ❌
   ✅ Use: if (choose !== "G" && choose !== "S" && choose !== "W")

2️⃣ Forgot .toUpperCase():
   ✅ Allows lowercase like 'g', 's', 'w' by converting to uppercase

3️⃣ No loop:
   ✅ Added while loop with confirm() to allow replaying the game

🧠 continue: Skips the rest of the current iteration and goes back to the start of the loop

💡 IMPROVEMENTS YOU CAN TRY:
✅ Add a score tracker: Count wins/losses/draws
✅ Use HTML buttons instead of prompt/alert for better UX
✅ Limit game to best of 3 or 5 rounds
*/



