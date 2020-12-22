import config from "./_config";

function startingVariant1(section: HTMLElement, id: number) {
  if(id > 0) section.style.transform = config.cssDown;
  section.style.zIndex = "1000";
  section.classList.add(config.scrollable);
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