function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (name === "") {
        msg.innerText = "Name is required";
        msg.style.color = "red";
        return false;
    }

    if (!email.includes("@")) {
        msg.innerText = "Enter a valid email";
        msg.style.color = "red";
        return false;
    }

    if (password.length < 6) {
        msg.innerText = "Password must be at least 6 characters";
        msg.style.color = "red";
        return false;
    }

    msg.innerText = "Form submitted successfully!";
    msg.style.color = "green";
    return false; // prevent actual submit
}
