// ✅ KEYBOARD EVENTS EXPLANATION
// keydown: when we press any key, this listener is triggered.
// keyup: when we release the key after pressing, this listener is triggered.

// ✅ Task 1: Change Background on Key Press
// Description: When any key is pressed, change the background color of the page to a random color.

// Function to generate a random RGB color
function getRandomColor() {
  let val1 = Math.ceil(Math.random() * 255);
  let val2 = Math.ceil(Math.random() * 255);
  let val3 = Math.ceil(Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

// Event listener for key press on the whole page
document.body.addEventListener("keydown", () => {
  document.body.style.backgroundColor = getRandomColor();
});


// ✅ Task 2: Show Input Value on Button Click
// Description: Create an input and a button.
// When the button is clicked, show the entered value inside a <p> tag.

let input = document.getElementById("input");
let btn = document.querySelector(".btn");
let para = document.querySelector(".para");

// Event listener to show input value inside <p>
btn.addEventListener("click", () => {
  para.textContent = input.value;                 // show input value in paragraph
  btn.style.backgroundColor = "yellow";           // change button color on click
});

// 🧠 Mistake I made before:
// input.value = para.textContent; ❌
// This means paragraph’s text will go into input box (wrong direction).
// Correct: para.textContent = input.value; ✅


// ✅ Task 3: Toggle a Class on an Element
// Description: Create a div and a button. When the button is clicked,
// change the style of the div (simulate toggle effect by changing background and text)

let box = document.querySelector(".box");
let btn2 = document.querySelector(".btn2");

// Event listener to change the box's style and text
btn2.addEventListener("click", () => {
  box.style.backgroundColor = "rgb(67, 77, 187)";
  box.innerHTML = "Yey! You clicked it 👍";
});


//  Task 5: Display Key Pressed by User
// Description: Create a <p> tag. When the user
//  types on the keyboard, show the last key they
//  pressed inside the <p>. 

let para2 = document.querySelector(".para2")
document.body.addEventListener("keydown",()=>{
   para2.innerHTML = `You pressed: ${event.key}`
})