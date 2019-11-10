
const toggleNav = () => {

  let hamburger = document.querySelector(".hamburger");
  let navMenu = document.querySelector(".nav-menu");
  let overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.add("rotate");
    navMenu.classList.add("open");
    overlay.style.display = "block";

    navLinks.forEach( (item, index) => {
      item.style.animation = "slideIn 0.3s linear " + index / 11 + "s" + " forwards";
    });
  });

  navMenu.addEventListener("click", () => {
    hamburger.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navLinks.forEach( (item, index) => {
      item.style.animation = "";
    });
  });

  overlay.addEventListener("click", () => {
    hamburger.classList.remove("rotate");
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navLinks.forEach( (item, index) => {
      item.style.animation = "";
    });
  });

}

(function () {
  toggleNav();
})();

