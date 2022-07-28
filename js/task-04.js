let counterValue = 0;

const value = document.querySelector("#value");
const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');

decr.addEventListener("click", () => (value.textContent = counterValue -= 1));
incr.addEventListener("click", () => (value.textContent = counterValue += 1));
