// 🌐 DOM vs BOM
// We use the DOM so that we can change the structure, content, or style of a web page.
// We use the BOM to interact with browser features, such as navigating to another website, showing alerts, or accessing browser information.

// 🌿 Everything inside the HTML is a node — for example: element nodes, text nodes, and comment nodes.

// 📄 Change the title of the web page
document.title = "DOM Practice";

// 🌈 Change background color of the body
document.body.style.backgroundColor = "green";

// 🔍 Log the body element to console
console.log(document.body);

// 🎯 Targeting nested elements and applying styles
document.body.firstElementChild.firstElementChild.style.backgroundColor = "yellow";
// ⚠️ If you use `.firstChild`, it may select text nodes (like spaces or line breaks).
// ✅ Use `.firstElementChild` to target only element nodes.

// ✅ The window object is global, so you don’t need to write `window.` every time:
confirm("Are you sure?");
// or
window.confirm("Are you sure!");

// 🧱 DOM Structure Notes:
// `document.body.children` → returns only element children (ignores text and comments)
// `document.body.childNodes` → returns all nodes (elements, text, comments, etc.)

// Accessing parent of first element child
// document.body.childNodes[1].firstElementChild.parentElement

// Target the previous sibling element of the last child
// document.body.childNodes[1].lastElementChild.previousElementSibling

// ✅ Use `.children` to get only element children
// ✅ Use `.childNodes` to get all nodes (including text and comments)

// ▶ Using nextElementSibling and previousElementSibling
let child2;

// Get the next sibling of the second child element
child2 = document.body.firstElementChild.children[1].nextElementSibling;
child2.style.backgroundColor = "green";

// Get the previous sibling of the second child element
child2 = document.body.firstElementChild.children[1].previousElementSibling;
child2.style.backgroundColor = "black";

// 🧪 Check data types of `document` and `window`
console.log(typeof document, typeof window); // output: "object object"

// ✅ If elements are close together in HTML, use DOM navigation properties (as used above)
// ❌ If elements are far apart, use other selectors like class or ID

// 🎯 Target elements by class name
let boxes = document.body.getElementsByClassName("child");
console.log(boxes);

// Change background color of the 4th element with class "child"
boxes[3].style.backgroundColor = "black";

// 🔹 Target element by ID
// `getElementById()` is called directly on `document`, not on another element
/// ✅ Use ID when you want to target a specific element uniquely,
// so changes don't affect others with the same class

// 🔸 Use `querySelector()` to apply a style to the first element with a specific class
document.querySelector(".child").style.backgroundColor = 'orange';
// Note: Use `.` for classes, `#` for IDs, just like in CSS

// 🔁 `querySelectorAll()` returns all elements with a given class
// You need a loop (like `forEach`) to apply styles to each
document.querySelectorAll(".child").forEach(e => {
    e.style.backgroundColor = "blue";
});

// 🏷️ getElementsByTagName()
// Targets elements by tag name (e.g., all <div> tags)
// Returns an HTMLCollection of matching elements
document.getElementsByTagName("div");

// 🎯 getElementsByName()
// Targets elements with a specific `name` attribute (commonly used in forms)
document.getElementsByName("first");

// matches,closest,contains method

// MATCHES : we use this method to check if that css property matches the
// element css property then give answer in boolen

let el = document.getElementsByClassName("child")[2]; // or [2] for third one
console.log(el.matches("#child3"));

// CLOSEST : Finds the nearest ancestor (including the element itself) that matches the selector.
// it does not give answer in boolen

let closestdiv = document.getElementById("target-box")
console.log(closestdiv.closest(".container"))

// contain: we use this method to check of that elemen contains  his child element or not
// remember that getElementsByClassName return html collection thats why we have
// to add [0] because we can apply contains preperty to one element
//  but .contains() only works with actual DOM elements, not strings.
let container = document.getElementsByClassName("container")[0]
let target = document.getElementById("target-box");
console.log(container.contains(target))




// .closest("selector"):
// Finds the nearest parent (including itself) that matches the given selector.
// Used to search upward in the DOM tree.

// .matches("selector"):
// Checks if the element itself matches the given CSS selector.
// Returns true or false.

// .contains(element):
// Checks if one element exists inside another (as child, grandchild, etc.).
// Takes a real DOM element, not a selector string.

// .contains() is about real DOM structure — not CSS rules — so it works with actual elements, not selectors.








