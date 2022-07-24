const form = document.querySelector(".login-form");

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Check the entered data - all fields must be filled! ");
  }
  const objForm = `Email: ${email.value}, Password: ${password.value}`;
  //   console.log(`Email: ${email.value}, Password: ${password.value}`);
  console.log(objForm);
  event.currentTarget.reset();
}

form.addEventListener("submit", formSubmit);
