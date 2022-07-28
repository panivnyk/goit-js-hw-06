const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("blur", (event) => {
  if (
    event.target.value.length === Number(inputForm.getAttribute("data-length"))
  ) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
    inputForm.classList.remove("valid");
  }
});
