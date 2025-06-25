// 🌟 JavaScript String Tutorial – Full Revision with Explanation 🌟

// ✅ Basic Logging
console.log("String Tutorial");
console.log("");  // Empty line for spacing

// ✅ String Declaration and Indexing
let my_name = "omaima";
console.log(my_name);         // Prints the full string
console.log(my_name[0]);      // Access character at index 0 → 'o'
console.log(my_name[1]);      // 'm'
console.log(my_name[2]);      // 'a'
console.log(my_name[3]);      // 'i'
console.log(my_name[4]);      // 'm'
console.log(my_name[5]);      // 'a'
console.log(my_name.length);  // Length of the string → 6

console.log("");
let friend = "noor";

// ✅ String Concatenation (2 ways)
console.log("My name is " + my_name + " and my friend name is " + friend);  // Using +
console.log(`My name is ${my_name} and my friend name is ${friend}`);       // Using template literals

// 🔤 String Methods – toUpperCase(), toLowerCase(), length, slice(), replace(), concat()
let b = "ShivamSh";

// Convert the string to uppercase
console.log(b.toUpperCase());  // "SHIVAMSH"

// Convert the string to lowercase
console.log(b.toLowerCase());  // "shivamsh"

// Get the length of the string
console.log(b.length);         // 8

// Slice from index 1 to 4 (end index 5 is not included)
console.log(b.slice(1, 5));    // "hiva"

// Slice from index 1 till end
console.log(b.slice(1));       // "hivamSh"

// Replace method:
// Replaces only the first match of the given string
console.log(b.replace("Sh", "77"));  // "77ivamSh"
// If the word appears multiple times, only the first one is replaced

// Concatenation using concat()
console.log(b.concat("rahul", "ali"));  // "ShivamShrahulali"
// Adds the new strings to the original string

// 🔁 Replace Example with Explanation
let message = "hey how are you i hope ypu are fine";

// Replace "ypu" with correct spelling "you"
let correctmessage = message.replace("ypu", "you");
console.log(correctmessage);  // "hey how are you i hope you are fine"

// ✅ startsWith() and endsWith() – Check string beginning or ending

// "We use startsWith() and endsWith() to check
// whether a string begins or ends with a specific substring.
// These methods return a boolean value — true or false."

let fileName = "report.pdf";

if (fileName.endsWith(".pdf")) {
  console.log("This is a PDF file.");
}

let command = "delete-user";

if (command.startsWith("delete")) {
  console.log("This is a delete operation.");
}

// Test with your own string
const real_name = "omaima qasim";
console.log(real_name.startsWith("omaima"));  // true
console.log(real_name.endsWith("ime"));       // false

// 🧾 Template Literals and Escape Sequences
let myname = "zeynen";

// How to insert quotes inside template literals
console.log(`my brother's fav fruit is "mango"`);

// How to insert variable inside template literal
console.log(`"${myname}" is my best friend`);

// Using escape sequences
let birthday = 'zara\'s birthday';  // Escape single quote with \'
console.log(birthday);

// \n = new line, \t = tab space
console.log('Hi!\nWhat are you doing?\tJust relaxing.');

// 🎨 More String Methods
let color = "black";

// Print original, length, and uppercase
console.log(color, color.length, color.toUpperCase());  // "black", 5, "BLACK"
console.log(color.toLowerCase());  // "black"

// Slice from index 2 till end
console.log(color.slice(2));       // "ack"

// Slice from index 0 to 3 (end index not included)
console.log(color.slice(0, 4));    // "blac"

// Replace "black" with new string
let new_color = color.replace("black", "blue and green");
console.log(new_color);            // "blue and green"

// 🔗 Merging (Concatenation) of Strings
let name1 = "zara";
let name2 = "zeynen";

// Merge using concat()
let name3 = name1.concat(" and ", name2);

// Or use +
let name4 = name1 + " and " + name2;

console.log(name3);  // "zara and zeynen"
console.log(name4);  // "zara and zeynen"

// 🧼 Trimming Whitespace
let textWithLeadingSpace = "  \n\n  Hello World  \n";

// trim() removes spaces and line breaks from both ends
let trimmedText1 = textWithLeadingSpace.trim();

console.log(`Original: "${textWithLeadingSpace}"`);
console.log(`Trimmed:  "${trimmedText1}"`);

// 🔢 STRING PRACTICE QS
console.log("");
console.log("STRING PRACTICE QS");

// Q1: print length of string with escaped quotes
console.log("harr\"".length);  // Output: 5 (includes escape character " as one character)

// Q2: startsWith(), endsWith(), includes()
let fruits = "mango ,banana,strawberry";
console.log(fruits.startsWith("mango"), fruits.endsWith("banana"));
console.log(fruits.includes("banana"));  // Check if substring exists in string

// Q3: toLowerCase()
let name5 = "ZEYNEN";
console.log(name5);
console.log(name5.toLowerCase());  // Convert to lowercase

// Q4: replace() and slice()
let rps = "please give me 1000RS";
console.log(rps.replace("please", "just"));  // Replace word
console.log(rps.slice(14));                    // Slice from index 14
console.log(rps.slice("please give me".length));  // Slice using length of prefix string

// Q5: String immutability
let name6 = "hunza";
name6[3] = "w";  // ❌ Strings are immutable, this won't change the character
console.log(name6);  // Output: "hunza"
// Explanation: You cannot change a specific character in a string directly.
