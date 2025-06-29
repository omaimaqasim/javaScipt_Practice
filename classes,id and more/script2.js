// ✅ Task No. 1
// Change the text to "Welcome to DOM Practice"
document.getElementById("main-title").innerHTML = "Welcome to DOM Practice";


// ✅ Task No. 2
// Set the background color of all .child elements to "lightblue"
document.querySelectorAll(".child").forEach(e => {
    e.style.backgroundColor = "lightblue";
});


// ✅ Task No. 3 (IMPORTANT TO REMEMBER)
// Change the text color of the third <p> element to "green"
document.getElementsByTagName("p")[2].style.color = "green";


// ✅ Task No. 4
// Change the background color of the element before #target-box to "orange"

// Method 1: Accessing through DOM tree directly
document.body.children[5].lastElementChild.previousElementSibling.style.backgroundColor = "orange";

// Method 2: Recommended — using previousElementSibling
document.getElementById("target-box").previousElementSibling.style.backgroundColor = "orange";



