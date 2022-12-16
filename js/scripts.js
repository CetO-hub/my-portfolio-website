(function () {
  let contactForm = document.querySelector(".contact-form");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");

  function validateName() {
    if (!name.value) {
      errorMessage(name, "Please enter your name");
      return false;
    }

    errorMessage(name, null);
    return true;
  }

  function validateEmail() {
    if (!email.value) {
      errorMessage(email, "E-mail is a required field");
      return false;
    }
    if (email.value.indexOf("@") === -1) {
      errorMessage(email, "You must enter a valid e-mail address");
      return false;
    }
    if (email.value.indexOf(".") === -1) {
      errorMessage(email, "You must enter a valid e-mail address");
      return false;
    }

    errorMessage(email, null);
    return true;
  }

  function errorMessage(input, message) {
    let parentContainer = input.parentElement;

    let error = parentContainer.querySelector(".error");
    if (error) {
      parentContainer.removeChild(error);
    }

    if (message) {
      let errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.textContent = message;
      parentContainer.appendChild(errorElement);
    }
  }

  function validateForm() {
    let isName = validateName();
    let isEmailValid = validateEmail();

    return isName && isEmailValid;
  }

  name.addEventListener("input", validateName);
  email.addEventListener("input", validateEmail);

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      contactForm.submit();
    }
  });
})();
