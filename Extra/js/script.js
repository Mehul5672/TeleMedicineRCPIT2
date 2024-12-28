const loginModal = document.getElementById("login-modal");
const closeModal = document.getElementById("close-modal");

window.addEventListener("load", () => {
    loginModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});
document.getElementById("signupButton").addEventListener("click", function() {
    // Perform signup action here
    alert("You clicked the signup button!");
    // You can replace the alert with your signup form or any other action
});