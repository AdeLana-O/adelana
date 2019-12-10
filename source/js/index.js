// Toggle mobile nav in and out of display
const toggleNav = () => {

  // Select HTML elements
  let hamburger = document.querySelector(".hamburger");
  let navMenu = document.querySelector(".nav-menu");
  let closeMenu = document.querySelector(".close");
  let overlay = document.getElementById("overlay");
  let navItems = document.querySelectorAll(".nav-item");
  let navLinks = document.querySelectorAll(".nav-link");
  let delay;

  // Open mobile nav and add animations
  hamburger.addEventListener("click", () => {
    hamburger.classList.add("rotate");
    navMenu.classList.add("open");
    overlay.style.display = "block";

    // Animate nav links and slide into view
    navItems.forEach((item, index) => {
      delay = index / 11;

      item.style.animation = `slideIn 0.3s linear ${delay}s forwards`;
    });
  });

  // Close mobile nav and remove animations
  const closeNav = () => {

    hamburger.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    // Remove nav links animation
    navItems.forEach(item => {
      item.style.animation = "";
    });
  };

  // Close mobile nav when any of the nav links is clicked
  navLinks.forEach(link => link.addEventListener("click", closeNav));

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


// Animate page sections into view on scroll
const animateSection = () => {

  // Select page sections
  let sections = document.querySelectorAll("#main > section");
  let sectionPosition;

  // Add animation effects to page sections
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      sectionPosition = section.offsetTop - 450;

      if (window.pageYOffset >= sectionPosition) {
        section.style.transform = "scaleX(1)";
        section.style.opacity = "1";
        section.style.transition = "0.4s ease-in";
      }
    });
  });

};

// Get Date and Year
const getDate = () => {

  // Get Year
  let d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();

}


// Invoke program functions
(function () {
  toggleNav();
  animateNavbar();
  animateSection();
  getDate();
})();