document.addEventListener("DOMContentLoaded", function () {
  const splide__1 = new Splide(".splide__1", {
    arrows: false,
    focus: 0,
    omitEnd: true,
    perPage: 3,
    type: "loop",
  });
  splide__1.mount();
});

const loader = document.querySelector(".loader > div > div");
const cancel = document.querySelector(".cancel");
const processing = document.querySelector(".processing");

cancel.addEventListener("click", function () {
  this.style.display = "none";
  loader.style.display = "none";
  processing.textContent = "The end of content.";
});