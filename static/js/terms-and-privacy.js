const introList = document.querySelector(".intro-list");
const introParagraph = document.querySelector(".intro-paragraph");
const personalList = document.querySelector(".personal-list");
const personalParagraph = document.querySelector(".personal-paragraph");
const purposeList = document.querySelector(".purpose-list");
const purposeParagraph = document.querySelector(".purpose-paragraph");
const cookieList = document.querySelector(".cookie-list");
const cookieParagraph = document.querySelector(".cookie-paragraph");
const thirdPartyList = document.querySelector(".third-party-list");
const thirdPartyParagraph = document.querySelector(".third-party-paragraph");
const dataList = document.querySelector(".data-list");
const dataParagraph = document.querySelector(".data-paragraph");
const applicableList = document.querySelector(".applicable-list");
const applicableParagraph = document.querySelector(".applicable-paragraph");

introList.addEventListener("click", () => {
  introParagraph.scrollIntoView({
    behavior: "smooth",
  });
});

personalList.addEventListener("click", () => {
  personalParagraph.scrollIntoView({
    behavior: "smooth",
  });
});

purposeList.addEventListener("click", () => {
  purposeParagraph.scrollIntoView({
    behavior: "smooth",
  });
});

cookieList.addEventListener("click", () => {
  cookieParagraph.scrollIntoView({
    behavior: "smooth",
  });
});

thirdPartyList.addEventListener("click", () => {
  thirdPartyParagraph.scrollIntoView({
    behavior: "smooth",
  });
});

dataList.addEventListener("click", () => {
  dataParagraph.scrollIntoView({
    behavior: "smooth",
  });
});

applicableList.addEventListener("click", () => {
  applicableParagraph.scrollIntoView({
    behavior: "smooth",
  });
});