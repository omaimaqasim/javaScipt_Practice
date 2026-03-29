// 🔴 ==============================================
// 🔥 ULTIMATE TASK: Smart Order & Delivery System
// ==============================================

// 🔴 🔥 QUESTION: Smart Order & Delivery System

// Build a JavaScript program that simulates an online food ordering system.

// Your program should:

// Authenticate a user using a function that returns a Promise.
// Fetch a list of food items from an online API using async/await.
// Allow the user to place an order using a callback function.
// Simulate food preparation using a Promise.
// Deliver the order using a callback function.

// 🧠 Scenario:
// Build a mini system like Foodpanda / Uber Eats

// 🎯 Goal:
// Simulate this flow:
// 1. User logs in
// 2. Fetch menu from API
// 3. Place order
// 4. Prepare food
// 5. Deliver order


// 🟣 STEP 1: LOGIN (Promise)

// 👉 Create function:
// function loginUser(username, password)

// ✔️ Requirements:
// - Return a Promise
// - Add 1–2 sec delay using setTimeout
// - If username === "admin" AND password === "1234"
//     → resolve("✅ Login successful")
// - Else
//     → reject("❌ Invalid credentials")



// 🔵 STEP 2: FETCH MENU (async/await + fetch)

// 👉 Create function:
// async function getMenu()

// ✔️ Requirements:
// - Use fetch:
//   https://jsonplaceholder.typicode.com/posts
// - Use await
// - Convert response to JSON
// - Print ONLY first 3 items as menu



// 🟡 STEP 3: PLACE ORDER (Callback)

// 👉 Create function:
// function placeOrder(item, callback)

// ✔️ Requirements:
// - Print: "🛒 Ordering {item}..."
// - Add 2 sec delay using setTimeout
// - After delay → call callback()
// - Callback should print: "✅ Order placed!"



// 🟢 STEP 4: PREPARE FOOD (Promise)

// 👉 Create function:
// function prepareFood(item)

// ✔️ Requirements:
// - Return a Promise
// - Add 2 sec delay
// - Resolve with: "👨‍🍳 {item} is ready!"



// 🟠 STEP 5: DELIVER ORDER (Callback)

// 👉 Create function:
// function deliverOrder(callback)

// ✔️ Requirements:
// - Add 1 sec delay
// - Call callback()
// - Callback should print: "🚴 Order delivered!"



// 🔥 FINAL STEP: MAIN FUNCTION

// 👉 Create async function:
// async function main()

// ✔️ Flow:
// 1. Call loginUser()
// 2. Await result
// 3. Call getMenu()
// 4. Place order using callback
// 5. Await prepareFood()
// 6. Deliver order using callback



// 💡 EXPECTED FLOW (for understanding)

// 🔐 Logging in...
// ✅ Login successful

// 📋 Fetching menu...
// 1. Item A
// 2. Item B
// 3. Item C

// 🛒 Ordering Item A...
// ✅ Order placed!

// 👨‍🍳 Preparing food...
// 👨‍🍳 Item A is ready!

// 🚴 Order delivered!



// ⚠️ IMPORTANT RULES:

// ❌ Do NOT convert everything into async/await
// ✅ Use:
//    - Promise → loginUser, prepareFood
//    - async/await → getMenu
//    - callback → placeOrder, deliverOrder



// 🚀 Now implement everything step by step below 👇