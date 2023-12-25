/* eslint-disable no-undef */
const findMore = document.querySelector(".find-more");
const finishToScroll = document.querySelector(".finish-to-scroll");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("done");
  setTimeout(function () {
    preloader.style.display = "none";
    document.body.style.overflow = "auto";
  }, 1000);
});

findMore.addEventListener("click", () => {
  finishToScroll.scrollIntoView({
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const splide__1 = new Splide(".splide__1", {
    arrows: false,
    focus: 0,
    omitEnd: true,
    perPage: 5,
    type: "loop",
  });
  splide__1.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  const splide__2 = new Splide(".splide__2", {
    autoplay: true,
    drag: "free",
    pagination: false,
    perPage: 3,
    snap: true,
    type: "loop",
  });
  splide__2.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide__3", {
    drag: "free",
    perPage: 3,
    snap: true,
    type: "loop",
    autoScroll: {
      speed: 2,
    },
  }).mount(window.splide.Extensions);
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
    mute: true,
    updateOnMove: true,
    pagination: true,
    perPage: 2,
    type: "loop",
    width: "90%",
    video: {
      loop: true,
    },
  }).mount(window.splide.Extensions);
});