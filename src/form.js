const form = document.querySelectorAll(".needs-validation");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const invalidText = document.querySelector('#invalid-feedback');

function validateForm(event) {
  event.preventDefault();
  console.log(event);
}

form.addEventListener("submit", validateForm());
