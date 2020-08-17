let count = 0;
const add = document.getElementById("increment");

const minus = document.getElementById("decrement");

let counter = document.getElementById("counter");

const addOne = () => {
  count += 1;
  counter.textContent = count;
};

const minusOne = () => {
  if (count > 0) {
    count -= 1;
    counter.textContent = count;
  } else {
    count = 0;
  }
};

add.addEventListener("click", addOne);

minus.addEventListener("click", minusOne);
