import config from "./_lib/_config";
import deBounce from "./_lib/_deBounce";
import sectionAnimation from "./_lib/_sectionAnimation";

(() => {
  const sectionScrollContainer:HTMLElement = document.querySelector(".ds-section-scroll-container");
  const sectionsOnPage = sectionScrollContainer.querySelectorAll(".ds-section-scroll-item");
  sectionsOnPage.forEach((section, id) => {
    section.classList.add("ds-section-scroll-scrollable");
    section.style.zIndex=`${1000 + id}`;
    if(id > 0) {
      section.classList.add("ds-section-scroll-top");
    }
    config.sections.push(section);
  })
})()

function wheelDirection() {
  console.log(config.delta);
  console.log(config.sections);
  if (config.delta > 0) config.currentID += 1;
  else config.currentID -= 1;

  console.log(config.currentID);
  sectionAnimation(config.sections[config.currentID], "ds-section-scroll-current");
  
}

const move = deBounce(function(){
  wheelDirection();
})



class DsSectionScroll {

  init() {
    document.addEventListener('wheel', function(event) {
      config.delta = event.deltaY;
      move();
    })
  }
}

declare global { interface Window { dsSectionScroll: any; }}
window.dsSectionScroll = new DsSectionScroll();
export default window.dsSectionScroll;