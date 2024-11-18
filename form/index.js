// Function to show the Login page and hide the Register page
function showLogin() {
    document.getElementById("loginPage").classList.add("active");
    document.getElementById("registerPage").classList.remove("active");
}

// Function to show the Register page and hide the Login page
function showRegister() {
    document.getElementById("registerPage").classList.add("active");
    document.getElementById("loginPage").classList.remove("active");
}

// Login validation function (basic example)
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var loginError = document.getElementById("loginError");

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        loginError.textContent = "";
        return true;
    } else {
        loginError.textContent = "Invalid username or password";
        return false;
    }
}

// Register validation function (basic example)
function register() {
    var username = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var registerError = document.getElementById("registerError");

    if (username && email && password) {
        alert("Registration successful!");
        registerError.textContent = "";
        return true;
    } else {
        registerError.textContent = "Please fill in all fields";
        return false;
    }
}
