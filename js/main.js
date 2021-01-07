// Selectors
const counter = document.querySelector("[data-target='counter']");
const increase = document.querySelector("[data-target='increase']");
const input = document.querySelector("[data-target='input-text']");
const decrease = document.querySelector("[data-target='decrease']");

// Initializers
//// Global Variables
let finalNumber; // What we will finally display
let initialNumber; // what number we are starting with
//// Initiatives
input.value = 100;


// Functions
const updateDOM = (number) => counter.innerText = number;
const getInitialNumber = () => initialNumber = Number(input.value);

//// Event Handlers
const handleIncrement = (event) => {
  let originalNumber = getInitialNumber();
  let increasedNumber =  originalNumber++
  console.log(`1. increasedNumber:`, increasedNumber + 1);

  finalNumber = increasedNumber;
  // Get the current number
  

  // Add to it
  updateDOM(finalNumber);
  // console.log(`Incremented number: `, finalNumber);
};

const handleDecrement = (event) => {
  getInitialNumber();
  console.log(`Decremented number: `, event.target);
};

const handleKeyInput = (event) => {
  getInitialNumber();

  // console.log(`Decremented number: `, inputNumber);
  finalNumber = initialNumber;
  updateDOM(finalNumber);
};

//  Event Listeners
increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
input.addEventListener("keyup", handleKeyInput);

