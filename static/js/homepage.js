const HamburgerCheckbox = document.getElementById("hamburger-menu");
const Overlay = document.querySelector(".overlay");
HamburgerCheckbox.addEventListener("change", function () {
  if (this.checked) {
    Overlay.style.display = "grid";
    Overlay.style.placeItems = "center";
    document.body.style.overflow = "hidden";
  } else {
    Overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});