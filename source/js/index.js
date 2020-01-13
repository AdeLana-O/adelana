"use-strict";

// Toggle mobile nav in and out of display
const toggleNav = () => {

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const closeMenu = document.querySelector(".close");
  const overlay = document.getElementById("overlay");
  const navItems = document.querySelectorAll(".nav-item");
  const navLinks = document.querySelectorAll(".nav-link");
  let delay;

  hamburger.addEventListener("click", () => {
    hamburger.classList.add("rotate");
    navMenu.classList.add("open");
    overlay.style.display = "block";

    navItems.forEach((item, index) => {
      delay = index / 11;
      item.style.animation = `slideIn 0.3s linear ${delay}s forwards`;
    });
  });

  const closeNav = () => {

    hamburger.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navItems.forEach(item => {
      item.style.animation = "";
    });
    
  };

  navLinks.forEach(link => link.addEventListener("click", closeNav));
  closeMenu.addEventListener("click", closeNav);
  overlay.addEventListener("click", closeNav);

};


// Animate navbar when the window is scrolled
const animateNavbar = () => {

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 20) {
      navbar.className = "shrink";
    } else {
      navbar.className = "";
    }
  });

};


// Get Date and Year
const getDate = () => {

  const d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();

};


// Randomly change page link colors
const changeColor = () => {

  const links = document.querySelectorAll("#main a");
  const colors = ["#74B570", "#88CC2E", "#EC9B61", "#EC9B12", "#F80725"];

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  setInterval(() => {
    links.forEach(link => link.style.color = randomColor());
  }, 5000);

};

// Set active nav links
const activeLink = () => {

  const sections = document.querySelectorAll("#main section");
  const navLinks = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let index = sections.length;

    if (window.pageYOffset + 100 < sections[0].offsetTop) {
      navLinks[0].classList.add("active");
      navLinks[1].classList.remove("active");
    } else {
      while(--index && window.pageYOffset + 50 < sections[index].offsetTop) {}
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index + 1].classList.add('active');
    }
  });

};


// Invoke program functions
(function () {
  toggleNav();
  animateNavbar();
  getDate();
  changeColor();
  activeLink();
})();
