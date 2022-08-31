const numBtn = document.querySelectorAll(".numBtn");
const calcBtn = document.querySelectorAll(".calcBtn");
const clearBtn = document.querySelector(".resetBtn");
const eqlBtn = document.querySelector(".eqlBtn");
const upperDisplay = document.querySelector(".input1");
const lowerDisplay = document.querySelector(".input2");

// Adding numbers to lowerDisplay on Number Button click
numBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    let button = e.target.innerText;
    lowerDisplay.value += button;
  });
});