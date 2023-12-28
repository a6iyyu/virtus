/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide__1", {
    drag: "free",
    perPage: 3,
    snap: true,
    type: "loop",
  }).mount(window.splide.Extensions);
});