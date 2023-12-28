/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide__1", {
    drag: "free",
    perPage: 3,
    snap: true,
    type: "loop",
  }).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
  const splide__2 = new Splide(".splide__2", {
    arrows: false,
    focus: 0,
    omitEnd: true,
    perPage: 5,
    type: "loop",
  });
  splide__2.mount();
});