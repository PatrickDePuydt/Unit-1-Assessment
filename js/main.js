// Selectors
const counter = document.querySelector("[data-target='counter']");
const increase = document.querySelector("[data-target='increase']");
const input = document.querySelector("[data-target='input-text']");
const decrease = document.querySelector("[data-target='decrease']");

// Initializers
//// Global Variables
let finalNumber; // What we will finally display
let globalNumber; // what number we are starting with
let initialNumber; // what number we are starting with

//// Initiatives
input.value = 1;

// Functions
const updateDOM = (number) => {
  counter.innerText = number;
  globalNumber = number;
}

//// Event Handlers

const handleChange = () => {
  let number = Math.sign(globalNumber);
  if (number == -1) {
    counter.classList.add("NEGATIVE");
  } else {
    counter.classList.remove("NEGATIVE");
  }
};

const handleIncrement = () => {
  globalNumber = input.value++;
  updateDOM(globalNumber);
  handleChange();
};

const handleDecrement = () => {
  globalNumber = input.value--;
  updateDOM(globalNumber);
  handleChange();
};

const handleKeyInput = (event) => {
  let inputNumber = Number(event.target.value);
  globalNumber = inputNumber;
  updateDOM(globalNumber);
};

//  Event Listeners
increase.addEventListener("click", handleIncrement);
decrease.addEventListener("click", handleDecrement);
input.addEventListener("keyup", handleKeyInput);
