// ✅ TASK 1: Reverse Words in a Sentence
// Input: A sentence string
// Output: Reverse the words (not letters), like this:
console.log("TASK NO 1 :");

let str = "JavaScript is fun";
console.log("original:", str);

let arr = str.split(" ");           // Convert string into array
let arr_rev = arr.reverse();        // Reverse the array
let result = arr_rev.join(" ");     // Join array back into string with space
console.log("reverse:", result);

// Note: .toString() converts the array into a string, but joins elements using commas by default.
// That's why we use .join(" ") — it converts the array to string without commas.



// ✅ TASK 2: Find Longest Word in a String
// Input: A string of words
// Output: Find and return the longest word
console.log("TASK NO 2 :");

let str2 = "I love web development";
let arr2 = str2.split(" ");
let longestword = "";

for (const word of arr2) {
    if (longestword.length < word.length) {
        longestword = word;
    }
}
console.log("The longest word in str2 is:", longestword);



// ✅ TASK 3: Remove Duplicates from an Array
// Input: An array with duplicates
// Output: Return a new array without duplicates
console.log("TASK NO 3 : must practice ✔");

let nums = [1, 2, 2, 3, 4, 4, 5];

let unique_no = nums.filter((value, index, arr) => {
    if (index === 0) {
        return true; // Always keep the first element
    } else {
        return value !== arr[index - 1]; // Keep if different from the previous one
    }
});
console.log(unique_no);

// Note: We use .filter() because it returns a new array after filtering



// ✅ TASK 4: Practice Higher-Order Functions
// a) Create a new array with all numbers multiplied by 2 using map()
// b) Filter out numbers less than 10 using filter()
// c) Find the sum of all numbers using reduce()
console.log("TASK NO 4 :");

let numbers = [5, 12, 8, 20, 7];

// a) Multiply each number by 2
let double = numbers.map((number) => {
    return number * 2;
});
console.log(double);

// b) Keep only numbers greater than 10
let new_numbers = numbers.filter((value) => {
    if (value > 10) {
        return true; // Yes, keep it
    } else {
        return false; // No, skip it
    }
});
console.log(new_numbers);

// c) Sum all numbers using reduce
let sum = numbers.reduce((a, b) => {
    return a + b; // Return is important here
});
console.log(sum);



// ✅ TASK 5: Practice String Methods (Real-World Format)
// Suppose you are making a basic username checker:
console.log("TASK NO 5 :");

let username = "       OMAIMA_QASIM234  ";

// a) Trim the spaces
let new_username = username.trim();
console.log(new_username); // Remember: trim() removes spaces only from start and end, not in the middle

// b) Convert it to lowercase
username = username.toLowerCase();
console.log("LOWERCASE", username);

// c) Check if it includes "qasim"
console.log(username.includes("qasim")); // Case-sensitive — "QASIM" won't match "qasim"

// d) Check if it starts with a letter ✅ IMPORTANT TO REMEMBER
if (/^[a-zA-Z]/.test(new_username)) {
    console.log("Yes, it starts with a letter ✅");
} else {
    console.log("Does not start with a letter ❌");
}

// ✅ Explanation:
// /^[a-zA-Z]/.test(username)  --> pattern-based check
// Purpose                      | Use     | Returns
// ----------------------------|---------|---------
// You only need true/false    | .test() | true or false
// You want the matched value  | .match()| matched array or null

// e) Print the length of the cleaned username
let cleaned_username = username.trim();
console.log("Length of cleaned username is:", cleaned_username.length);
