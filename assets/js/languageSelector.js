const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
const isMobile = () => window.matchMedia(mobileQuery).matches;

const languageSelector = document.querySelector(".language-selector-current");
const moreLanguagesContainer = document.querySelector(".language-selector__more");

document.body.addEventListener("click", () => {
  if (
    !isMobile() &&
    moreLanguagesContainer &&
    !moreLanguagesContainer.classList.contains("hidden")
  ) {
    moreLanguagesContainer.classList.add("hidden");
  }
});

languageSelector &&
  languageSelector.addEventListener("click", (e) => {
    if (!isMobile()) {
      e.stopPropagation();
      moreLanguagesContainer.classList.toggle("hidden");
    }
  });
