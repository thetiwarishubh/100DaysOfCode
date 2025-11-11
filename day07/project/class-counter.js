const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const display = document.querySelector(".display");

class Counter {
  constructor(count) {
    this.count = 0;
  }
  increment() {
    this.count++;
    return this.count;
  }
  decrement() {
    if (this.count <= 0) return this.count;
    this.count--;
    return this.count;
  }
  reset() {
    this.count = 0;
    return this.count;
  }
}

const myObject = new Counter();
plusButton.addEventListener("click", () => {
  display.textContent = myObject.increment();
});
minusButton.addEventListener("click", () => {
  display.textContent = myObject.decrement();
});
resetButton.addEventListener("click", () => {
  display.textContent = myObject.reset();
});
