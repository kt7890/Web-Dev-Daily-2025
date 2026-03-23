const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    error.innerText = "All fields are required.";
    return;
  }

  error.innerText = "Form submitted successfully!";
  error.style.color = "#00ff99";
});