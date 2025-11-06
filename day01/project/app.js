const display = document.querySelector(".input-box");
const container = document.querySelector(".container");

let displayValue = "0";
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

container.addEventListener("click", (event) => {
  const { target } = event;
  const value = target.textContent;

  if (!target.matches("button")) return;

  if (target.classList.contains("clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  if (target.classList.contains("delete")) {
    deleteLastDigit();
    updateDisplay();
    return;
  }

  if (target.classList.contains("operators")) {
    handleOperator(value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("equal")) {
    performCalculation();
    updateDisplay();
    return;
  }

  inputDigit(value);
  updateDisplay();
});

function inputDigit(digit) {
  if (waitingForSecondOperand === true) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === "0" ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (waitingForSecondOperand === true) return;
  if (!displayValue.includes(dot)) displayValue += dot;
}

function handleOperator(nextOperator) {
  if (nextOperator === "×") nextOperator = "*";
  if (nextOperator === "÷") nextOperator = "/";
  if (nextOperator === "−") nextOperator = "-";

  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }

  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = operate(operator, firstOperand, inputValue);
    displayValue = String(result);
    firstOperand = result;
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
}

function performCalculation() {
  if (firstOperand === null || operator === null) return;
  const inputValue = parseFloat(displayValue);
  const result = operate(operator, firstOperand, inputValue);
  displayValue = String(result);
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

function resetCalculator() {
  displayValue = "0";
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

function deleteLastDigit() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = "0";
  }
}

function updateDisplay() {
  display.textContent = displayValue;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Error" : num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return num2;
  }
}

updateDisplay();
