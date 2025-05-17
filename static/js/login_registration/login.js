document.getElementById("login-button").onclick = function (event) {
        event.preventDefault();
        document.getElementById("right-panel").classList.add("hidden");
        document.getElementById("reset_password_panel").classList.remove("hidden");
};
    
document.getElementById("reset-password-button").onclick = function (event) {
    event.preventDefault();
    document.getElementById("reset_password_panel").classList.add("hidden");
    document.getElementById("left-panel").classList.add("hidden");
    document.getElementById("successfully_reset_password_panel").classList.remove("hidden");
};
