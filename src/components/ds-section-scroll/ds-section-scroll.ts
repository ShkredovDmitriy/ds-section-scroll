import config from "./_lib/_config";
import deBounce from "./_lib/_deBounce";
import Section from "./_lib/_section";

(() => {
  const sectionScrollContainer:HTMLElement = document.querySelector(".ds-section-scroll-container");
  const sectionsOnPage = sectionScrollContainer.querySelectorAll(".ds-section-scroll-item");
  sectionsOnPage.forEach((section:HTMLElement, id:number) => {
    const sectionItem = new Section(section, id);
    // sectionItem.initLinear();
    sectionItem.initFromTop();
    config.sections.push(sectionItem);
  })
})()

function wheelDirection() {

  // moveType - fromTop
  if (config.delta > 0) {
    config.currentID += 1;
  } else {
    config.currentID -= 1;
  }
  config.sections.forEach((section, i) => {
    if (i === config.currentID) section.moveFromTop();
    else if (i < config.currentID) section.moveFromTop();
    else if (i > config.currentID) section.moveToTop();
  });

  // moveType - linear
  // if (config.delta > 0) {
  //   config.currentID += 1;
  //   config.sections.forEach((section, i) => {
  //     if (i < config.currentID) section.moveToTop();
  //     if (i === config.currentID) section.moveFromBottom();
  //   });
  // } else {
  //   config.currentID -= 1;
  //   config.sections.forEach((section, i) => {
  //     if (i > config.currentID) section.moveToBottom();
  //     if (i === config.currentID) section.moveFromTop();
  //   });
  // }


  console.log(config.currentID);  
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