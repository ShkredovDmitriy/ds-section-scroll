import "../common/main.scss";
import dsSectionScroll from '../components/ds-section-scroll/ds-section-scroll';
dsSectionScroll.init();

const dots = document.querySelectorAll(".ds-section-scroll-dot");
const buttons = document.querySelectorAll(".ds-section-scroll-button");

dsSectionScroll.beforeScroll(
  function(activeSectionId: number) {
    dots.forEach((el, activeDotId) => {
      activeSectionId === activeDotId ? el.classList.add("active") : el.classList.remove("active");
    });
    buttons.forEach((el, activeDotId) => {
      activeSectionId === activeDotId ? el.classList.add("active") : el.classList.remove("active");
    });
  }
);

dots.forEach((el, buttonId) => {
  el.addEventListener("click", () => {
    dsSectionScroll.changeSection(buttonId);
  })
});
