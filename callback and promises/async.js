// ✅ Function 1: Basic async function returning a value after 2 seconds
async function getRupees() {
  return new Promise((resolve) => {
    setTimeout(() => {  
      resolve(20000); // Simulated response after delay
    }, 2000);
  });
}

// ✅ Using .then() to handle the resolved value
getRupees().then((result) => {
  console.log("Rupees you left is", result);
});


// ✅ Function 2: Fetch data from API using async/await
async function getDataFromAPI() {
  // Fetch returns a built-in Promise
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Free fake REST API
// settle mean resolve or reject not pending
  // Convert response (stream) into JavaScript object
  let data = await response.json();

  // Log the received data
  console.log(data);

  // Return some value to test await
  return 344;
}


// ✅ Function 3: Main function to run tasks step-by-step
async function main() {
  console.log("Loading module...");
  console.log("Doing something else...");
  console.log("Loading data...");

  // Wait for API data to be fetched and processed
  let value = await getDataFromAPI();

  console.log("Returned value:", value);
  console.log("Processing data...");
  console.log("Task 2 completed.");
}

// Call the main function to execute everything
main();


// ✅ Task: Fake Bank Balance Checker
async function checkBalance() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🤑 Your current balance is PKR 25,000");
    }, 3000);
  });
}

// Separate main function for balance checking
async function checkBalanceMain() {
  console.log("🔄 Checking your account balance...");
  
  let bankBalance = await checkBalance();
  console.log(bankBalance);
  
  console.log("✅ Process complete.");
}

// Call balance checker
checkBalanceMain();


/* 
📌 Summary of Concepts Used:

1. async function:
   - Always returns a Promise.
   - Allows using `await` inside.

2. await:
   - Pauses execution until Promise is resolved.
   - Only valid inside async functions.

3. fetch:
   - Returns a built-in Promise.
   - Use `.json()` to convert response to JS object.

4. Promise:
   - Used for handling asynchronous operations like API calls or timeouts.

✅ This code demonstrates:
- Basic Promise resolution.
- Real API call using async/await.
- A fake bank balance check with controlled async flow.
*/
