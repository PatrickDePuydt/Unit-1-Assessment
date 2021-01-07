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
input.value = 1;

// Functions
const updateDOM = (number) => counter.innerText = number;

//// Event Handlers
const handleIncrement = () => {
  let increment = input.value++;
  updateDOM(increment);
};

const handleDecrement = (event) => {
  let decrement = input.value--;
  updateDOM(decrement);
};

// const handleKeyInput = (event) => {
//   // console.log(`Decremented number: `, inputNumber);
//   finalNumber = initialNumber;
//   updateDOM(finalNumber);
// };

//  Event Listeners
increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
// input.addEventListener("keyup", handleKeyInput);

