// Get elements
const annualButton = document.getElementById("toggle-button");
const priceAnnual = document.getElementById("price-annual");
const priceAnnualTwo = document.getElementById("price-annual-2");
const priceAnnualThree = document.getElementById("price-annual-3");
const priceMonthly = document.getElementById("price-monthly");
const priceMonthlyTwo = document.getElementById("price-monthly-2");
const priceMonthlyThree = document.getElementById("price-monthly-3");

// Add click event listener to the toggle button
annualButton.addEventListener("click", () => {
  // Toggle the visibility of the prices
  priceAnnual.classList.toggle("hidden");
  priceMonthly.classList.toggle("hidden");

  priceAnnualTwo.classList.toggle("hidden");
  priceMonthlyTwo.classList.toggle("hidden");

  priceAnnualThree.classList.toggle("hidden");
  priceMonthlyThree.classList.toggle("hidden");

  // Change the button text based on the selected pricing
  if (annualButton.classList.contains("annual")) {
    // annualButton.innerText = "Monthly";
    annualButton.classList.remove("annual");
  } else {
    // annualButton.innerText = "Annual";
    annualButton.classList.add("annual");
  }
});

const moveMe = document.getElementById("toggle-button");
let isRight = true; // Variable to track movement direction

// Event listener for element click
moveMe.addEventListener("click", () => {
  // Define the distance to move (adjust this value as needed)
  const moveDistance = -38;

  // Calculate the new position
  const currentLeft = parseInt(getComputedStyle(moveMe).left);
  const newLeft = isRight
    ? currentLeft + moveDistance
    : currentLeft - moveDistance;

  // Update the position
  moveMe.style.left = newLeft + "px";

  // Toggle the direction for the next click
  isRight = !isRight;
});
