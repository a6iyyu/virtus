const hamburger = document.getElementById("hamburger-menu");
const overlay = document.querySelector(".overlay");
hamburger.addEventListener("change", function () {
  if (this.checked) {
    overlay.style.display = "grid";
    overlay.style.placeItems = "center";
    document.body.style.overflow = "hidden";
  } else {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }
});