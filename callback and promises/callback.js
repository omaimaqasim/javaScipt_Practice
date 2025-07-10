// ✅ CONCEPT NO 1: CALLBACK FUNCTION

// 🧠 Imagine this: "Hey filterList, here’s a function (afterFiltering) — call it later when you're done."
// ⚠️ If you use parentheses like `afterFiltering()`, you're calling it immediately.
// ✅ When passing a function to be called later, use its name only (no brackets).

// ✅ Basic Syntax:
function doSomething(callback) {
  // ... some code
  callback(); // ← call the function passed as argument
}

function sayHello() {
  console.log("Hello!");
}

doSomething(sayHello); // ← pass function as a callback (not sayHello())

// ---------------------------------------------

// ✅ EXAMPLE 1: "Custom Greeting System"

function goodbye() {
  console.log("👋 Goodbye! See you next time 💕");
  let now = new Date();
  console.log(now.toLocaleTimeString()); // Shows the time goodbye() is called
}

function greetUser(name, callback) {
  console.log(`Hello, ${name}! 😊`);
  callback(); // Call the passed function
}

// Call greetUser with name and callback
greetUser("Omaima", goodbye);

// ---------------------------------------------

// ✅ EXAMPLE 2: Load external script (callback runs when script loads)
const callback = (arg) => {
  console.log(arg);
  alert(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => callback("Script is loaded!");
  sc.onerror = ()=> callback ("something went wrong pla try later")
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// ---------------------------------------------

// ✅ EXAMPLE 3: Birthday Check — Using Callback Functions Based on Input

function wish() {
  console.log("🎉 Happy birthday dear!");
}

function noWish() {
  console.log("😄 Ohh, your birthday is coming soon!");
}

function birthdayCheck(check, callback) {
  if (check === "yes") {
    callback(wish);
  } else {
    callback(noWish);
  }
}

// Prompt user input
let check = prompt("Is it your birthday? yes or no");

// Anonymous function to execute selected callback
birthdayCheck(check, function (func) {
  func();
});

// OR using ternary operator version:
// let selectedCallback = check === "yes" ? wish : noWish;
// birthdayCheck(check, selectedCallback);

// ---------------------------------------------
// ✅ KEY TAKEAWAYS (Very Important Concepts):

/*
✔️ A callback is a function passed as an argument to another function — usually to run later.

✔️ Don't add parentheses when passing a function as a callback: doThis(myFunction), NOT doThis(myFunction()).

✔️ Callbacks are used in:
   → Event handling
   → Asynchronous operations (e.g. loading scripts, fetching data)
   → Custom function behavior (like running something after greeting)

✔️ If you want to delay or control execution, use setTimeout(), event listeners, or load triggers.

✔️ You can also pass and choose between multiple callbacks conditionally (like in the birthday example).
*/

