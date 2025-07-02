// ✅ Task: Dynamic List Filter
// 🎯 Goal: Show names from a list and filter them in real-time based on user input

// 🔹 STEP 0: Data & DOM selection
const arr = ["zara", "ali", "sadia", "zeynen", "suboha", "jennie"];
const namelist = document.getElementById("namelist");
const input = document.querySelector(".input");

// 🔹 STEP 1: Print all names initially
arr.forEach(function (name) {
  const li = document.createElement("li");
  li.textContent = name;
  li.style.fontSize = "20px";
  namelist.appendChild(li);
});

// 🔹 STEP 2: Filter names when user types
function filternames() {
  namelist.textContent = ""; // Clear the previous list
  const search = input.value.toLowerCase();
  let found = false;

  arr.forEach(function (name) {
    if (name.toLowerCase().includes(search)) {
      const li = document.createElement("li");
      li.textContent = name;
      li.style.fontSize = "20px";
      namelist.appendChild(li);
      found = true;
    }
  });

  if (!found) {
    const li = document.createElement("li");
    li.textContent = "❌ No matching names found";
    li.style.fontSize = "20px";
    li.style.color = "red";
    namelist.appendChild(li);
  }
}

// 🔹 STEP 3: Add event listener
input.addEventListener("input", filternames);


// 📌 Mistakes I Made & Fixed (For Learning)
// ----------------------------------------------
// ❌ 1. Used filternames() instead of filternames → called it immediately
// ✅ Fix: Pass function reference, not call → filternames

// ❌ 2. Overwrote 'input' with input.value
// ✅ Fix: Keep input as the element, and use separate 'search' variable

// ❌ 3. Declared input again inside the function (duplicate scope)
// ✅ Fix: Declare once globally

// ❌ 4. Showed "❌ No matching names" inside the loop
// ✅ Fix: Use 'found = false', then check outside the loop
