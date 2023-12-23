document.addEventListener("DOMContentLoaded", function () {
  const splide__1 = new Splide(".splide__1", {
    drag: "free",
    focus: 0,
    omitEnd: true,
    perPage: 2,
    rewind: true,
    snap: true,
    type: "loop",
  });
  splide__1.mount();
});