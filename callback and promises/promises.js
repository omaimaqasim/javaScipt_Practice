// ✅ PROMISES CONCEPT

// 🔸 SYNTAX OF A PROMISE
let myPromise = new Promise(function (resolve, reject) {
  let success = true; // Change to false to test rejection

  if (success) {
    resolve("✅ Task done!"); // fulfilled
  } else {
    reject("❌ Something went wrong"); // rejected
  }
});
 // ✅ resolve() and reject() produce the result
// ✅ .then() and .catch() use (handle) that result
myPromise
  .then((result) => {
    console.log(result); // Runs if resolved
  })
  .catch((error) => {
    console.log(error); // Runs if rejected
  });


// ✅ Task 01: Simulate Loading Data with a Promise
function loaddata() {
  let isloaddata = true;

  return new Promise((resolve, reject) => {
    if (isloaddata === true) {
      setTimeout(() => {
        resolve("📦 Data loaded successfully!");
      }, 2000);
    } else {
      reject("❌ Failed to load data.");
    }
  });
}

loaddata()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));


// ✅ Task 02: Simulate a User Login with a Promise
function loginuser() {
  let username = prompt("Enter your username:");
  let password = prompt("Enter your password:");

  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      console.log("⏳ Loading...");

      setTimeout(() => {
        console.log("🔍 Checking credentials...");

        setTimeout(() => {
          resolve("✅ Login successful! Welcome admin.");
        }, 2000);
      }, 1000);
    } else {
      reject("❌ Invalid credentials. Please try again.");
    }
  });
}

loginuser()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));


// ✅ PROMISE with MULTIPLE HANDLERS Example
const prom11 = new Promise((resolve, reject) => {
  let a = Math.random();

  if (a > 0.5) {
    setTimeout(() => {
      console.log("✅ Promise is resolved after delay...");
      resolve(a);
    }, 3000);
  } else {
    reject("❌ Promise rejected. Number was less than or equal to 0.5");
  }
});

prom11
  .then((a) => {
    console.log("Handler 1 ➤ Original number:", a);
    return a;
  })
  .then((a) => {
    let square = a ** 2;
    console.log("Handler 2 ➤ Square of number:", square);
    return square;
  })
  .then((square) => {
    let result = square / 2;
    console.log("Handler 3 ➤ Square divided by 2:", result);
  })
  .catch((error) => console.log(error));


// ✅ Promise.all() Example
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("❌ prom1: Random number too low");
  } else {
    setTimeout(() => {
      console.log("✅ prom1 finished");
      resolve("Harry1");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("❌ prom2: Random number too low");
  } else {
    setTimeout(() => {
      console.log("✅ prom2 finished");
      resolve("Harry2");
    }, 2000);
  }
});

Promise.all([prom1, prom2])
  .then((result) => console.log("✅ All Done:", result))
  .catch((error) => console.log("❌ One Failed:", error));


// ✅ Promise.race() Example – first one to finish wins
let slow = new Promise((resolve) => {
  setTimeout(() => resolve("🐢 Slow won!"), 3000);
});

let fast = new Promise((resolve) => {
  setTimeout(() => resolve("🐇 Fast won!"), 1000);
});

Promise.race([slow, fast])
  .then((result) => console.log("🏁 Race Result:", result))
  .catch((err) => console.log("Error in race:", err));



/* 
========================================================
📘 PROMISES – KEY POINTS REVISION
========================================================

✅ 1. A Promise represents a value that may be available now, later, or never.
✅ 2. States of a Promise:
    - pending (initial)
    - fulfilled (resolved)
    - rejected (error/failure)

✅ 3. Use `.then()` to handle resolved values.
✅ 4. Use `.catch()` to handle rejected values (errors).
✅ 5. `Promise.resolve(x)` creates an instantly fulfilled promise with value x.
✅ 6. `Promise.reject(x)` creates an instantly rejected promise with reason x.
✅ 7. `Promise.all([])` waits for all to succeed, rejects if **any** fails.
✅ 8. `Promise.allSettled([])` waits for all to finish (both success/fail).
✅ 9. `Promise.race([])` settles with the first result (resolve or reject).
✅ 10. `Promise.any([])` resolves with the first success, rejects only if **all** fail.
✅ 11. You can **chain `.then()`** to handle step-by-step transformations.

Best Practice:
👉 Use `Promise.all` when all must succeed.
👉 Use `Promise.allSettled` when you need all results, even failed ones.
👉 Use `Promise.race` for timeout or speed-based tasks.
👉 Use `Promise.any` when **any success is enough**.

========================================================
*/
