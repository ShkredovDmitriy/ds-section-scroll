import config from "./_config";

function startingVariant2(section: HTMLElement, id: number) {
  const zIndex = 1000 + id;
  if(id > 0) section.style.transform = config.cssUp;
  section.style.zIndex = zIndex + "";
  section.classList.add(config.scrollable);
}

function movingVariantUpDown2() {
  config.sections.forEach((section, i) => {
    if (i === config.currentID) section.moveFromTop();
    else if (i < config.currentID) section.moveFromTop();
    else if (i > config.currentID) section.moveToTop();
  });
}

export {startingVariant2, movingVariantUpDown2}
