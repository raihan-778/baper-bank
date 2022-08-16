// code for validation

const emailInput = document.getElementById("email-input");
console.log(emailInput);
const passwordInput = document.getElementById("password-input");
const btnSubmit = document.getElementById("submit-btn");
btnSubmit.addEventListener("click", function () {
  if (
    emailInput.value === "raihan@gmail.com" &&
    passwordInput.value === "raihan"
  ) {
    window.location.href = "deposit.html";
  } else {
    alert("please input valid user & password");
  }
});
emailInput.value = "";
passwordInput.value = "";
