// ✅ PROMISES CONCEPT

// 🔸 SYNTAX OF A PROMISE
// let myPromise = new Promise(function(resolve, reject) {
//   if (success) {
//     resolve("✅ Task done!"); // fulfilled
//   } else {
//     reject("❌ Something went wrong"); // rejected
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result); // runs if resolved
//   })
//   .catch((error) => {
//     console.log(error); // runs if rejected
//   });


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
  .then((message) => {
    console.log(message); // shows resolve message
  })
  .catch((error) => {
    console.log(error); // shows reject message
  });


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
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });


/* 
🔑 KEY CONCEPTS TO REMEMBER:

✅ 1. A Promise represents a value that might be available now, later, or never.
✅ 2. Three States of a Promise:
   - pending (initial)
   - fulfilled (resolved)
   - rejected (error/failure)

✅ 3. Use `.then()` to handle resolve (success)
✅ 4. Use `.catch()` to handle reject (failure)

✅ 5. Never call resolve() inside .then — it should only be inside the Promise body.
✅ 6. Use setTimeout to simulate delays (like loading/spinner)
✅ 7. You can chain multiple `.then()` calls
✅ 8. Use `async/await` (later) for cleaner syntax

✅ 9. Don’t mix prompt inputs with parameters unless needed.
✅ 10. Be careful with types — compare strings with strings ("1234" !== 1234)

*/
// PROMISE with MULTIPLE HANDLERS Example

const prom1 = new Promise((resolve, reject) => {
  let a = Math.random(); // Generate a random number between 0 and 1

  if (a > 0.5) {
    setTimeout(() => {
      console.log("✅ Promise is resolved after delay...");
      resolve(a); // Pass the value 'a' to the next .then()
    }, 3000);
  } else {
    reject("❌ Promise rejected. Number was less than or equal to 0.5");
  }
});

// First handler: Logs the original number and returns it
prom1
  .then((a) => {
    console.log("Handler 1 ➤ Original number:", a);
    return a; // Pass value to next handler
  })
  // Second handler: Calculates and logs the square
  .then((a) => {
    let square = a ** 2;
    console.log("Handler 2 ➤ Square of number:", square);
    return square; // Pass value to next handler
  })
  // Third handler: Divides the square by 2 and logs the result
  .then((square) => {
    let result = square / 2;
    console.log("Handler 3 ➤ Square divided by 2:", result);
    return result;
  })
  // Catch any error if promise is rejected
  .catch((error) => {
    console.log(error); // You can use alert(error) for alert popup
  });


// reject ke lite hum .catch ka use karte hai or resolve ke liye then ka

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done")
//             resolve("Harry")
//         }, 3000);
//     }
// })


// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you  promp2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done promp2")
//             resolve("Harry2")
//         }, 2000);
//     }

  
            
// })
// promise.all main aghar dono main se ek bhi promise reject ho 
// jai ga to phir value nahi aye gi

// allsettled se ye ho ga ke aghar reject ho gi tabh bhi likha a jai ga
// or aghar resolve ho gi to bhi likha a gai ga

// .race se jo fast resolve ya reject ho gi wo outcome ban ja gi 

// .any hum use karte hai tk aghar koi bhi ek promise resolve hoti hai to wo print kar deta hai or
// yeh tabh reject hota hai jabh sari promises reject hoti hai or reason de deta hai

// Promise.all():

// Behavior:
// Resolves when all input promises resolve.
// Rejects immediately if any input promise rejects.
// Returns an array of resolved values in the order of the input promises.

// Promise.allSettled
// Always resolves when all input promises have settled (either resolved or rejected).
// Never rejects.
// Returns an array of objects, each describing the outcome of a promise (status: "fulfilled" or "rejected", and either the value or the reason).
// Use Case: Useful when you need to know the outcome of every promise, regardless of whether they succeeded or failed. This is helpful for tasks like logging or reporting.
// Promise.any():

// Behavior:
// Resolves as soon as any input promise resolves.
// Rejects only if all input promises reject.
// If all promises reject, it rejects with an AggregateError containing the rejection reasons.
// Use Case: Best when you need the first successful result from multiple promises, and you don't care about the others. For example, trying multiple servers to find the fastest one.

// Promise.resolve() is used to create Promises that represent successful outcomes.
// Promise.reject() is used to create Promises that represent error conditions.

// let p3 = Promise.reject([prom1,prom2])

            
// p3.then ((a) => {
//     console.log(a);
// }).catch((err)=>{
//      console.log(err)
// })


//     //  exercise 1
// let promise1 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//         resolve(" resolve:promise fulfilled after 4 sec")
//      },4000 );
    
// })
// // aghar resolve ko prink karwana hai to phir ese karwain gy
// promise1.then((message)=>{
//   console.log("promise fulfilled")
//   console.log(message)
// }).catch((err)=>{
//              console.log(err)
//        })

// exercise 2 = promise chaining example
// hum promise chaning ka use tabh karte hai jabh humain ek data received ke baad hi dosra 
// data chahiyeh hota hai

// prom = new Promise((resolve, reject) => {
//    let a = Math.random();
//    if (a>0.5) {
//     resolve("promise is resolve")
//     alert("promise is resolved")
//    } else {
    
//     reject("promise is reject")
//     alert("promise is reject")
//    }
// })
  


