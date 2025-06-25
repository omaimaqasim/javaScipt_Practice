
// ARRAY TUTORIAL
console.log("\nARRAY TUTORIAL\n");

let even = [2, 4, 6, 8, 10];
console.log(even);

// Accessing values using index
console.log(even[3]);

// Changing values using index
even[3] = 12;
console.log(even);

// Finding length of array
console.log(even.length);

// Type of array is object
console.log(typeof even);

// Array can store different types of values
const a = [1, 3, "ummi"];
console.log(a);

// ARRAY METHODS IN JS
let b = [22, 33, 44, 55];
console.log(b.toString());
console.log(b.join("-"));
console.log(b.pop());

let c = [23, 34, 45, 56];
console.log(c.push(444));
console.log(c.shift());
console.log(c.unshift("mama"));

let d = [22, 33, 44, 55];
console.log(delete d[2]);

let d1 = [1, 2, 3];
let d2 = [11, 22, 33];
let d3 = [111, 222, 333];
console.log(d1.concat(d2, d3));

let e = [3, 2, 7, 6];
console.log(e.sort());
console.log(e.splice(2, 2, 444, 555));

const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log("original fruits", fruits);
console.log(fruits.reverse());

const somefruits = fruits.slice(1, 3);
console.log(somefruits);

let fruits_list = ["apple", "banana", "orange", "grape", "mango", "peaches", "berries"];
console.log("fruits_list", fruits_list);

// Remove elements
console.log("removed fruits array", fruits_list.splice(1, 2));

// Add elements
let colors = ["red", "blue", "black", "mahroon"];
console.log("Original colors:", colors);
colors.splice(1, 0, "light-green", "purple");
console.log("Updated colors:", colors);

// Replace elements
let nums = [1, 2, 3, 4];
nums.splice(1, 2, 9, 8);
console.log(nums);

// Remove all after a point
let items = ["a", "b", "c", "d"];
items.splice(2);
console.log(items);

// LOOPS THROUGH ARRAY
console.log("loops through array :");

let double = [11, 22, 33, 44, 55];
for (let i = 0; i < double.length; i++) {
  const element = double[i];
  console.log(element * 2);
}

let names = ["zara", "hunza", "json", "zeynen"];
console.log("example foreach loop:");
names.forEach(function (name) {
  console.log(name);
});

console.log("another example foreach loop:");
names.forEach(function (name, index) {
  console.log("name at index", index, "is", name);
});

console.log("array function foreach loop:");
let odd_no = [1, 3, 5, 7, 9];
odd_no.forEach((no) => {
  console.log(no + 2);
});

// MAP METHOD EXAMPLE
console.log("mapping example:");
let numbers_list = [2, 4, 5, 6, 7, 8];
let squares = numbers_list.map((numbers) => {
  return numbers ** 2;
});
console.log(squares);

// FILTER METHOD EXAMPLE
console.log("even numbers using filter:");
let numbers_list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_no = numbers_list2.filter((num) => {
  return num % 2 === 0;
});
console.log(even_no);

console.log("map method another example:");
let namelower = ["zara", "zeynen", "hunza"];
let uppercase = namelower.map((e) => {
  return e.toUpperCase();
});
console.log(namelower);
console.log(uppercase);

console.log("filter another example:");
let both_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let iseven = (e) => {
  if (e % 2 == 0) {
    return true;
  }
  return false;
};
let even22 = both_no.filter(iseven);
console.log(even22);

// REDUCE METHOD EXAMPLE
let arr33 = [1, 2, 3, 4, 5, 6];
const red = (a, b) => {
  return a - b;
};
console.log(arr33.reduce(red));

// ARRAY FROM METHOD
console.log("array from method:");
console.log(Array.from("zeynen"));


