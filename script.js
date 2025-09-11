// ===== Part 2: Functions, Scope, Parameters, Return Values =====

// Global variable
let box = document.getElementById("box");

// Function to toggle spinning animation
function toggleSpin(element, shouldSpin) {
  if (shouldSpin) {
    element.classList.add("spin");
  } else {
    element.classList.remove("spin");
  }
}

// Function to scale an element
function scaleElement(element, factor) {
  element.style.transform = `scale(${factor})`;
  return factor; // returning for demonstration
}

// Function to log scope example
function scopeExample() {
  let localMessage = "I am local!";
  console.log(localMessage); // accessible here
}
scopeExample();

// ===== Part 3: Combining CSS + JS =====

// Button to animate the box
document.getElementById("animateBtn").addEventListener("click", () => {
  let newSize = scaleElement(box, 1.5); // scaling box
  console.log("Box scaled by factor:", newSize);

  toggleSpin(box, true); // start spinning
  setTimeout(() => toggleSpin(box, false), 4000); // stop after 4s
});

// Modal controls
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
