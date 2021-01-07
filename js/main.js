// Selectors
const counter = document.querySelector("[data-target='counter']");
const increase = document.querySelector("[data-target='increase']");
const input = document.querySelector("[data-target='input-text']");
const decrease = document.querySelector("[data-target='decrease']");


// Functions

//// Event Handlers
const handleIncrement = (event) => {
  console.log(`Incremented number: `, event.target);
};

const handleDecrement = (event) => {
  console.log(`Decremented number: `, event.target);
};

const handleKeyInput = (event) => {
  console.log(`Decremented number: `, event.target.value);
};

//  Event Listeners
increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
input.addEventListener("keydown", handleKeyInput);
