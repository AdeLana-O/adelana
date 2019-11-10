(function () {
  toggleNav();
})();


function toggleNav() {

  let navMenu = document.querySelector(".nav-menu");
  let overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  document.querySelector(".hamburger").addEventListener("click", () => {
    navMenu.classList.add("open");
    overlay.style.display = "block";

    navLinks.forEach( (item, index) => {
      item.style.animation = "slideIn 0.4s linear " + index / 10 + "s" + " forwards";
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    navMenu.classList.remove("open");
    overlay.style.display = "none";

    navLinks.forEach( (item, index) => {
      item.style.animation = "";
    });
  });

}