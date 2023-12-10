var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
});
splide.mount();

const FindMore = document.querySelector(".find-more");
const FinishToScroll = document.querySelector(".top-trending-parent");
FindMore.addEventListener("click", () => {
  FinishToScroll.scrollIntoView({
    behavior: "smooth",
  });
});