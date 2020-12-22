import config from "./_config";

function startingVariant3(section: HTMLElement, id: number) {
  const zIndex = 1000 + id;
  if(id > 0) section.style.transform = config.cssDown;
  section.style.zIndex = zIndex + "";
  section.classList.add(config.scrollable);
}

function movingVariantUpDown3() {
  config.sections.forEach((section, i) => {
    if (i === config.currentID) section.moveFromTop();
    else if (i < config.currentID) section.moveFromBottom();
    else if (i > config.currentID) section.moveToBottom();
  });
}

export {startingVariant3, movingVariantUpDown3}