"use strict";
import { nameErr, emailErr, numErr, msgErr } from "./functions.js";

import {
  darkMode,
  setCookie,
  getCookie,
  inputHasFocus,
  validateName,
  validateEmail,
  validatePhoneNumber,
  validateMessage,
} from "./functions.js";

const toggleMobileNav = () => {
  const navBtn = document.querySelector(".hamburger");
  const navMenu = document.getElementById("navbar__menu-container");
  const closeMenu = document.querySelector(".navbar__menu--close");
  const overlay = document.getElementById("overlay");
  const navItems = document.querySelectorAll(".navbar__menu--item");
  const navLinks = document.querySelectorAll(".navbar__menu--link");

  navBtn.addEventListener("click", () => {
    navBtn.classList.add("rotate");
    navMenu.classList.add("open");
    overlay.style.display = "block";

    navItems.forEach((item, index) => {
      const delay = index / 11;
      item.style.animation = `slide-in 0.3s linear ${delay}s forwards`;
    });
  });

  const closeNav = () => {
    navBtn.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navItems.forEach((item) => {
      item.style.animation = "";
    });
  };

  navLinks.forEach((link) => link.addEventListener("click", closeNav));
  closeMenu.addEventListener("click", closeNav);
  overlay.addEventListener("click", closeNav);
};

const shrinkNavbar = () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    navbar.className = window.pageYOffset >= 20 ? "shrink" : "";
  });
};

const getDate = () => {
  const d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();
};

/* Randomly change page link colors */
const changeLinkColor = () => {
  const links = document.querySelectorAll("#main a");
  const colors = ["#74B570", "#88CC2E", "#EC9B61", "#EC9B12"];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  setInterval(() => {
    links.forEach((link) => (link.style.color = randomColor()));
  }, 5000);
};

const activeNavLink = () => {
  const sections = document.querySelectorAll("#main section");
  const navLinks = document.querySelectorAll(".navbar__menu--item");

  window.addEventListener("scroll", () => {
    let index = sections.length;

    if (window.pageYOffset + 100 < sections[0].offsetTop) {
      navLinks[0].classList.add("active");
      navLinks[1].classList.remove("active");
    } else {
      while (--index && window.pageYOffset + 50 < sections[index].offsetTop) {}
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index + 1].classList.add("active");
    }
  });
};

const setDarkMode = () => {
  const darkModeBtn = document.getElementById("dark-mode-container");
  const darkModeIcon = document.getElementById("dark-mode--icon");

  darkModeBtn.addEventListener("click", () => {
    switch (darkModeIcon.className) {
      case "":
      case "light":
        darkMode("dark", "fas fa-moon", "dark-mode");
        setCookie("dark");
        break;
      case "dark":
        darkMode("light", "fas fa-sun", "");
        setCookie("light");
    }
  });
};

/* Set dark mode on page load */
const setTheme = () => {
  setTimeout(() => (window.onload = getCookie("theme")), 800);
};

const validateForm = () => {
  const form = document.querySelector("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const num = document.getElementById("number");
  const msg = document.getElementById("message");

  name.addEventListener("blur", validateName);
  name.addEventListener("focus", inputHasFocus);
  email.addEventListener("blur", validateEmail);
  email.addEventListener("focus", inputHasFocus);
  num.addEventListener("blur", validatePhoneNumber);
  num.addEventListener("focus", inputHasFocus);
  msg.addEventListener("blur", validateMessage);
  msg.addEventListener("focus", inputHasFocus);

  form.addEventListener("submit", (e) => {
    validateName();
    validateEmail();
    validatePhoneNumber();
    validateMessage();

    if ((nameErr || emailErr || numErr || msgErr) === true) {
      e.preventDefault();
    }
  });
};

(function () {
  toggleMobileNav();
  shrinkNavbar();
  getDate();
  changeLinkColor();
  activeNavLink();
  setDarkMode();
  setTheme();
  validateForm();
})();
