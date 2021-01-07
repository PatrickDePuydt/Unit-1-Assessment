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

//// Event Handlers
const handleIncrement = (event) => {
  console.log(`Incremented number: `, event.target);
};

const handleDecrement = (event) => {
  console.log(`Decremented number: `, event.target);
};

const handleKeyInput = (event) => {
  initialNumber = Number(input.value);// Make sure the value is a number
  // console.log(`Decremented number: `, inputNumber);
  finalNumber = initialNumber;
  counter.innerText = finalNumber;
  console.log(`1. initialNumber: `, initialNumber);

};

//  Event Listeners
increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
input.addEventListener("keyup", handleKeyInput);
