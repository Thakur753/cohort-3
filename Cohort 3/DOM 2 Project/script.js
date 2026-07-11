const Login = document.querySelector(".Login");
const Register = document.querySelector(".register-container");
const andar = document.querySelector(".andar");
const LoginBtn = document.querySelector("#go-to-register");
const RegisterBtn = document.querySelector("#go-to-login");
const logout = document.querySelector(".nav-logout-btn");
const setting = document.querySelector("#menu-settings");
const dashboardBtn = document.querySelector("#menu-dashboard");
const settPage = document.querySelector("#settings-page");
const dashboard = document.querySelector("#dashboard-page");
const transaction = document.querySelector(".add-btn");
const trans = document.querySelector("#transactionModal");
const closeBtn = document.querySelector("#closeModalBtn");
const loginForm = document.querySelector("#main-login-form");
const registerForm = document.querySelector("#main-register-form");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const resetBtn = document.querySelector(".reset-btn");



resetBtn.addEventListener("click", () => {
    
    let confirmReset = confirm("Are you sure you want to reset your data? This action cannot be undone.");
    if (confirmReset) {
        localStorage.clear();
        alert("Data reset successfully!");
    }

    window.location.reload();
});

darkModeToggle.addEventListener("change", () => {

    if (darkModeToggle.checked) {
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
    }
});

transaction.addEventListener("click", () => {
    trans.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    trans.style.display = "none";
});

setting.addEventListener("click", () => {
    setting.classList.add("active");
    dashboardBtn.classList.remove("active");
    settPage.style.display = "flex";
    dashboard.style.display = "none";
});

dashboardBtn.addEventListener("click", () => {
    dashboardBtn.classList.add("active");
    setting.classList.remove("active");
    dashboard.style.display = "flex";
    settPage.style.display = "none";
});

LoginBtn.addEventListener("click", () => {
    Register.style.display = "flex";
    Login.style.display = "none";
});

RegisterBtn.addEventListener("click", () => {
    Login.style.display = "flex";
    Register.style.display = "none";
});

logout.addEventListener("click", () => {
    Login.style.display = "flex";
    andar.style.display = "none";
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("reg-username").value;
    let password = document.getElementById("reg-password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    registerForm.reset();

    Register.style.display = "none";
    Login.style.display = "flex";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = document.getElementById("log-username").value;
    let pass = document.getElementById("log-password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (user === storedUsername && pass === storedPassword) {
        alert("Login successful!");

        document.getElementById("nav-username").innerHTML = user;
        document.getElementById("settings-fullname").value = user;

        loginForm.reset();
        Login.style.display = "none";
        andar.style.display = "grid";
    } else {
        alert("Invalid username or password.");
    }
    
});