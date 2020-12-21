import config from "./_config";

function startingVariant1(section: HTMLElement, id: number) {
  if(id > 0) section.style.transform = "translate3d(0, 100vh, 0)";
  section.style.zIndex = "1000";
  section.classList.add("ds-section-scroll-scrollable");
}

function movingVariantUp1() {
  config.sections.forEach((section, i) => {
    if (i < config.currentID) section.moveToTop();
    if (i === config.currentID) section.moveFromBottom();
  });
}


function movingVariantDown1() {
  config.sections.forEach((section, i) => {
    if (i > config.currentID) section.moveToBottom();
    if (i === config.currentID) section.moveFromTop();
  });
}

export {startingVariant1, movingVariantUp1, movingVariantDown1}