document.addEventListener("DOMContentLoaded", function () {
  const splide__1 = new Splide(".splide__1", {
    arrows: false,
    focus: 0,
    omitEnd: true,
    perPage: 5,
    type: "slide",
  });
  splide__1.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const splide__2 = new Splide(".splide__2", {
    drag: "free",
    perPage: 3,
    snap: true,
    type: "loop",
  });
  splide__2.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const splide__3 = new Splide(".splide__3", {
    drag: "free",
    perPage: 3,
    snap: true,
    type: "loop",
  });
  splide__3.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const splide__4 = new Splide(".splide__4", {
    arrows: false,
    direction: "ttb",
    height: "10rem",
    type: "loop",
  });
  splide__4.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide__5", {
    arrows: true,
    cover: true,
    drag: "free",
    gap: "1rem",
    heightRatio: 0.3,
    updateOnMove: true,
    perPage: 1,
    wheel: true,
    width: "90%",
    video: {
      loop: true,
    },
  }).mount(window.splide.Extensions);
});

const FindMore = document.querySelector(".find-more");
const FinishToScroll = document.querySelector(".filtered-menu");
FindMore.addEventListener("click", () => {
  FinishToScroll.scrollIntoView({
    behavior: "smooth",
  });
});