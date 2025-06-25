// SOME TASK TO TEST CONCEPT OF STRING AND ARRAY

// ✅ TASK 1: Reverse Words in a Sentence
// Input: A sentence string
// Output: Reverse the words (not letters), like this:
console.log("TASK NO 1 :")

let str = "JavaScript is fun";
console.log("original :", str)
let arr = str.split(" ") // convert string into array
let arr_rev = arr.reverse()
let result = arr_rev.join(" ")
console.log("reverse :", result);

// .toString() converts the array into a string, but it joins elements using commas by default.
// that why we use join() because it convert arr to string without ,



// ✅ TASK 2: Find Longest Word in a String
// Input: A string of words
// Output: Find and return the longest word
console.log("TASK NO 2 :")
let str2 = "I love web development";
let arr2 = str2.split(" ")
let longestword = ""

for (const word of arr2) {
    if (longestword.length < word.length) {
        longestword = word
    }

}
console.log("the longest word in str2 is : ",longestword)

// ✅ TASK 3: Remove Duplicates from an Array
// Input: An array with duplicates
// Output: Return a new array without duplicates
// filter((value, index, array) => { ... })
// we use filter because in return new array after filtering
console.log("TASK NO 3 : must practice ✔")
let nums = [1, 2, 2, 3, 4, 4, 5];

let unique_no = nums.filter((value,index,arr)=>{
    if (index===0) {
        return true // if true then always add
    } else  {
      return value!==arr[index-1]
    //   if value diff from previous one then return
    }
})
console.log(unique_no)


