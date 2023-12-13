const splide__1 = new Splide(".splide__1", {
  type: "slide",
  perPage: 5,
  focus: 0,
  omitEnd: true,
  arrows: false,
});
splide__1.mount();

const splide__2 = new Splide(".splide__2", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
});
splide__2.mount();

const splide__3 = new Splide(".splide__3", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
});
splide__3.mount();

const splide__4 = new Splide(".splide__4", {
  type: "loop",
  direction: "ttb",
  height: "10rem",
  arrows: false,
});
splide__4.mount();

const FindMore = document.querySelector(".find-more");
const FinishToScroll = document.querySelector(".filtered-menu");
FindMore.addEventListener("click", () => {
  FinishToScroll.scrollIntoView({
    behavior: "smooth",
  });
});