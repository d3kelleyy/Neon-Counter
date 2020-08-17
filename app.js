let count = 0;
const add = document.getElementById("increment");

const minus = document.getElementById("decrement");

const reset = document.getElementById("reset");

let counter = document.getElementById("counter");

const mainHeader = document.getElementById("uppercase");

const header = "Neon Counter";

mainHeader.textContent = header.toUpperCase();

const addOne = () => {
  count += 1;
  counter.textContent = count;
};

const minusOne = () => {
  count -= 1;
  counter.textContent = count;
};

const setToZero = () => {
  count = 0;
  counter.textContent = count;
};

add.addEventListener("click", addOne);

minus.addEventListener("click", minusOne);

reset.addEventListener("click", setToZero);
