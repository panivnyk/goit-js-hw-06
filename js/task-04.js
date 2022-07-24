let counterValue = 0;

const value = document.querySelector("#value");
const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');

// const decrValue = () => (value.textContent = counterValue -= 1);
// const incrValue = () => (value.textContent = counterValue += 1);

// decr.addEventListener("click", decrValue);
// incr.addEventListener("click", incrValue);

decr.addEventListener("click", () => (value.textContent = counterValue -= 1));
incr.addEventListener("click", () => (value.textContent = counterValue += 1));
