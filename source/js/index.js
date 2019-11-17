// Toggle mobile nav in and out of display
const toggleNav = () => {

  // Select HTML elements
  let hamburger = document.querySelector(".hamburger");
  let navMenu = document.querySelector(".nav-menu");
  let closeMenu = document.querySelector(".close");
  let overlay = document.getElementById("overlay");
  let navLinks = document.querySelectorAll(".nav-link");

  // Open mobile nav and add animations
  hamburger.addEventListener("click", () => {
    hamburger.classList.add("rotate");
    navMenu.classList.add("open");
    overlay.style.display = "block";

    navLinks.forEach( (item, index) => {
      item.style.animation = "slideIn 0.3s linear " + index / 11 + "s" + " forwards";
    });
  });

  // Close mobile nav and remove animations
  const closeNav = () => {
    hamburger.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navLinks.forEach( item => {
      item.style.animation = "";
    });
  };

  // Close mobile nav when any of the nav links is clicked
  navLinks.forEach( item => item.addEventListener("click", closeNav));

  // Close mobile nav when the close button is clicked
  closeMenu.addEventListener("click", closeNav);

  // Close mobile nav when the overlay is clicked
  overlay.addEventListener("click", closeNav);

};


// Animate navbar when the window is scrolled
const animateNavbar = () => {
  // Select navbar
  let navbar = document.getElementById("navbar");

  // Add class to navbar when window is scrolled
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 20) {
      navbar.className = "shrink";
    } else {
      navbar.className = "";
    }
  });
};


// Invoke program functions
(function () {
  toggleNav();
  animateNavbar();
})();

