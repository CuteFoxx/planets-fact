import tabs from "./tabs.js";
import buttonText from "./buttonText.js";

tabs();
buttonText();

const menuBtn = document.querySelector(".header__nav-hamburger");
const navMenu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu_show");
  menuBtn.classList.toggle("header__nav-hamburger_active");
});
