const display = document.querySelector(".display");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

const counter = function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      display.textContent = count;
    },
    decrement: function () {
      count--;
      display.textContent = count;
    },
    reset: function () {
      count = 0;
      display.textContent = count;
    },
  };
};

const counterinner = counter();
plusButton.addEventListener("click", counterinner.increment);
minusButton.addEventListener("click", counterinner.decrement);
resetButton.addEventListener("click", counterinner.reset);
