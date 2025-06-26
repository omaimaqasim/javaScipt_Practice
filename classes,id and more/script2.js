// Task: no 1
// Write JavaScript to change the text to "Welcome to DOM Practice".

document.getElementById("main-title").innerHTML = "Welcome to DOM Practice"

// Task:NO 2
// Use JavaScript to set the background color of all .box elements to "lightblue".

document.querySelectorAll(".child").forEach(e=>{
    e.style.backgroundColor = "lightblue"
})

// Task:no3   IMPORTANT TO REMEMBER
// Change the text color of the third paragraph to "green" .

document.getElementsByTagName("p")[2].style.color = "green";
