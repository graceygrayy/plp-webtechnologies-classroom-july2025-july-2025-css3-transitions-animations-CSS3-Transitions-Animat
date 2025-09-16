 /* ================================
   Part 2: Functions with Parameters,
   Return Values, Scope
   ================================ */

// Global variable for the box element
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

// Function to toggle bouncing effect
function toggleBounce(element, shouldBounce) {
  if (shouldBounce) {
    element.classList.add("bounce");
  } else {
    element.classList.remove("bounce");
  }
}

// Local vs Global Scope Example
function scopeExample() {
  let localMessage = "I am local!";
  console.log(localMessage); // accessible only inside
}
scopeExample();

/* ================================
   Part 3: Combine CSS + JS
   ================================ */

// Animate Box on Button Click
document.getElementById("animateBtn").addEventListener("click", () => {
  let newSize = scaleElement(box, 1.3); // scale up
  console.log("Box scaled by factor:", newSize);

  toggleSpin(box, true); // start spinning
  toggleBounce(box, true); // bounce as well

  // stop animations after 4s
  setTimeout(() => {
    toggleSpin(box, false);
    toggleBounce(box, false);
    scaleElement(box, 1); // reset scale
  }, 4000);
});

/* ================================
   Extra: Loader Example
   ================================ */
const loader = document.getElementById("loader");
function showLoader(duration) {
  loader.classList.remove("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, duration);
}

/* ================================
   Modal Controls
   ================================ */
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  showLoader(1500); // show loading spinner before opening modal
  setTimeout(() => modal.classList.add("show"), 1500);
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
