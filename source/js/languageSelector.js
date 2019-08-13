const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
const isMobile = () => window.matchMedia(mobileQuery).matches;

if(!isMobile()) {
  languageSelector = document.getElementsByClassName("language-selector-actual")[0];
  moreLanguagesContainer = document.getElementsByClassName("language-selector-more")[0];

  document.body.addEventListener("click", () => {
    if (moreLanguagesContainer && !moreLanguagesContainer.classList.contains("hidden")) {
      moreLanguagesContainer.classList.add("hidden");
    }
  });

  languageSelector && languageSelector.addEventListener("click", e => {
    e.stopPropagation();
    moreLanguagesContainer.classList.toggle("hidden");
  });
}
