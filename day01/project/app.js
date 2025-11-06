const display = document.querySelector('.input-box');
const container = document.querySelector('.container');

let displayValue = 0;
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

container.addEventListener("click", event =>{
    const {target} = event
    console.log(target);
    if(!target.matches('button')){
        return;
    };

    if(target.classList.contains('btn')){
        inputDigit(target.value);
        updateDisplay()
        return;
    };

    if(target.classList.contains('operators')){
        handleOperator(target.value);
        updateDisplay()
        return;
    }

    if(target.classList.contains('deciaml')){
        inputDecimal(target.value)
        updateDisplay()
        return;
    }

    if(target.classList.contains('clear')){
        resetCalculator(target.value);
        updateDisplay()
    }

    if(target.classList.contains('equal')){
        performCalculation();
        updateDisplay()
        return;
    }
})

function inputDigit(digit){
    if(waitingForSecondOperand === true){
        displayValue = digit;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
  if (waitingForSecondOperand === true) return;
  if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}

function handleOperator(nextOperator) {
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
  displayValue = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

function updateDisplay() {
  display.textContent = displayValue;
}

function operate(operator, num1, num2) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
  return num2; // Default for '='
}

updateDisplay();