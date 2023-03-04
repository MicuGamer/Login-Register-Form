const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginToggle = document.getElementById("login-toggle");
const registerToggle = document.getElementById("register-toggle");

registerToggle.addEventListener("click", () => {
  registerForm.classList.add("visible");
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  loginForm.classList.remove("visible");
  registerToggle.classList.add("active");
  loginToggle.classList.remove("active");
});

loginToggle.addEventListener("click", () => {
  loginForm.classList.add("visible");
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  registerForm.classList.remove("visible");
  loginToggle.classList.add("active");
  registerToggle.classList.remove("active");
});



