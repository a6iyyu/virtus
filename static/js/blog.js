/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", function () {
  const splide__1 = new Splide(".splide__1", {
    arrows: false,
    autoplay: true,
    drag: "free",
    pagination: false,
    perPage: 2,
    snap: true,
    type: "loop",
  });
  splide__1.mount();
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