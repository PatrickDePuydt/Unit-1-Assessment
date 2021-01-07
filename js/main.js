// Selectors
const counter = document.querySelector("[data-target='counter']");
const increase = document.querySelector("[data-target='increase']");
const input = document.querySelector("[data-target='input-text']");
const decrease = document.querySelector("[data-target='decrease']");


// Functions
const increment = (event) => {
  console.log(`Incremented number: `, event.target);
};

const decrement = (event) => {
  console.log(`Decremented number: `, event.target);
};


//  Event Listeners
increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);
