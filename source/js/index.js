"use-strict";

const toggleMobileNav = () => {
  const navBtn = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const closeMenu = document.querySelector(".close");
  const overlay = document.getElementById("overlay");
  const navItems = document.querySelectorAll(".nav-item");
  const navLinks = document.querySelectorAll(".nav-link");

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

    navItems.forEach(item => {
      item.style.animation = "";
    });
  };

  navLinks.forEach(link => link.addEventListener("click", closeNav));
  closeMenu.addEventListener("click", closeNav);
  overlay.addEventListener("click", closeNav);
}

const shrinkNavbar = () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    navbar.className = (window.pageYOffset >= 20) ? "shrink" : "";
  });
}

const getDate = () => {
  const d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();
}

/* Randomly change page link colors */
const changeLinkColor = () => {
  const links = document.querySelectorAll("#main a");
  const colors = ["#74B570", "#88CC2E", "#EC9B61", "#EC9B12"];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  setInterval(() => {
    links.forEach(link => (link.style.color = randomColor()));
  }, 5000);
}

const activeNavLink = () => {
  const sections = document.querySelectorAll("#main section");
  const navLinks = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    let index = sections.length;

    if (window.pageYOffset + 100 < sections[0].offsetTop) {
      navLinks[0].classList.add("active");
      navLinks[1].classList.remove("active");
    } else {
      while (--index && window.pageYOffset + 50 < sections[index].offsetTop) {}
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[index + 1].classList.add("active");
    }
  });
}

const darkMode = () => {
  const darkModeBtn = document.getElementById("dark-mode-container");
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const icon = darkModeIcon.firstChild;

  darkModeBtn.addEventListener("click", () => {
    switch (darkModeIcon.className){
      case "":
      case "sun":
        darkModeIcon.className = "moon";
        setTimeout(() => icon.className = "fas fa-moon", 300);
        document.documentElement.className = "dark-mode";
        break;
      case "moon":
        darkModeIcon.className = "sun";
        setTimeout(() => icon.className = "fas fa-sun", 300);
        document.documentElement.className = "";
    }
  });
}

(function () {
  toggleMobileNav();
  shrinkNavbar();
  getDate();
  changeLinkColor();
  activeNavLink();
  darkMode();
})();
