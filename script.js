function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "TRUSTGODINTHESTORM";
    const message = document.getElementById("message");

    if (password.toUpperCase() === correctPassword) {
        // Store a flag in localStorage to indicate the user has authenticated
        localStorage.setItem("authenticated", "true");
        // Redirect to home.html
        window.location.href = "home.html";
    } else {
        message.textContent = "Incorrect password. Try again.";
        message.style.color = "red";
    }
}