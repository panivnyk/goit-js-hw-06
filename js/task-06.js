const inputForm = document.querySelector("#validation-input");

//console.log(Number(inputForm.dataset.length));

// const checkInput = (event) => {
//   event.target.value.length === Number(inputForm.dataset.length)
//     ? (inputForm.classList.add("valid"), inputForm.classList.remove("invalid"))
//     : (inputForm.classList.add("invalid"), inputForm.classList.remove("valid"));
// };

// inputForm.addEventListener("blur", checkInput);

inputForm.addEventListener("blur", (event) => {
  event.target.value.length === Number(inputForm.getAttribute("data-length"))
    ? (inputForm.classList.add("valid"), inputForm.classList.remove("invalid"))
    : (inputForm.classList.add("invalid"), inputForm.classList.remove("valid"));
});
