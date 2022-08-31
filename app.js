const numBtn = document.querySelectorAll(".numBtn");
const calcBtn = document.querySelectorAll(".calcBtn");
const clearBtn = document.querySelector(".resetBtn");
const eqlBtn = document.querySelector(".eqlBtn");
const upperDisplay = document.querySelector(".input1");
const lowerDisplay = document.querySelector(".input2");

let firstValue = "";
let secondValue = "";
let operator = "";

// Adding numbers to lowerDisplay on Number Button click
numBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (firstValue !== "" && operator !== "") {
      let button = e.target.innerText;
      lowerDisplay.value += button;
      secondValue += button;
    } else {
      let button = e.target.innerText;
      lowerDisplay.value += button;
      firstValue += button;
    }
  });
});

// Getting the clicked operator for calculating
calcBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    operator = e.target.value;
    lowerDisplay.value += ` ${operator} `;
  });
});

// Calculating first and second value with the assigned operator
eqlBtn.addEventListener("click", () => {
  upperDisplay.value = lowerDisplay.value;

  // Converting the first Value into integer or floating number
  if (firstValue.includes(".")) {
    firstValue = parseFloat(firstValue).toFixed(2);
  } else {
    firstValue = parseInt(firstValue);
  }
  // Converting the second Value into integer or floating number
  if (secondValue.includes(".")) {
    secondValue = parseFloat(secondValue).toFixed(2);
  } else {
    secondValue = parseInt(secondValue);
  }

  // Operating the Math Calculation
  let calc;
  if (operator === "x") {
    let calc = firstValue * secondValue;
    lowerDisplay.value = calc;
  } else if (operator === "/") {
    let calc = firstValue / secondValue;
    lowerDisplay.value = calc;
  } else if (operator === "+") {
    let calc = firstValue + secondValue;
    lowerDisplay.value = calc;
  } else if (operator === "-") {
    let calc = firstValue - secondValue;
    lowerDisplay.value = calc;
  }
});

// AC button to clear current input
clearBtn.addEventListener("click", () => {
  upperDisplay.value = "";
  lowerDisplay.value = "";
  firstValue = "";
  secondValue = "";
  operator = "";
});
