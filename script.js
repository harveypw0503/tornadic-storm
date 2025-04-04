function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "TRUSTGODINTHESTORM";
    const message = document.getElementById("message");

    if (password.toUpperCase() === correctPassword) {
        window.location.href = "home.html";
    } else {
        message.textContent = "Incorrect password. Try again.";
        message.style.color = "red";
    }
}