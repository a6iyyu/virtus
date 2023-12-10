const splide1 = new Splide(".splide__1", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
});
splide1.mount();

var splide2 = new Splide(".splide__2", {
  type: "loop",
  padding: "5rem",
});
splide2.mount();

const FindMore = document.querySelector(".find-more");
const FinishToScroll = document.querySelector(".top-trending-parent");
FindMore.addEventListener("click", () => {
  FinishToScroll.scrollIntoView({
    behavior: "smooth",
  });
});