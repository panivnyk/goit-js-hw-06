const sliderControl = document.querySelector("#font-size-control");
const fontChange = document.querySelector("#text");

sliderControl.addEventListener("input", (event) => {
  fontChange.style.fontSize = `${event.currentTarget.value}px`;
});
