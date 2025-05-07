const toggle = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  nav.classList.toggle("showing");
});