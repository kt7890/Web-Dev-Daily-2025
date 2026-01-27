function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (name === "") {
        error.innerText = "Name is required";
        return false;
    }

    if (!email.includes("@")) {
        error.innerText = "Enter a valid email";
        return false;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return false;
    }

    error.innerText = "Form submitted successfully!";
    error.style.color = "green";
    return false; // keep false to prevent actual submit
}
