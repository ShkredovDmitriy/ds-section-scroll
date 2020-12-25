import config from "./_config";

async function sectionPositionTop(section: HTMLElement) {
  section.style.transform = config.cssUp;
  section.style.transition = "transform " + config.duration + "ms ease 0ms";
}

async function sectionPositionBottom(section: HTMLElement) {
  section.style.transform = config.cssDown;
  section.style.transition = "transform " + config.duration + "ms ease 0ms";
}

async function sectionPositionLeft(section: HTMLElement) {
  section.style.transform = config.cssLeft;
  section.style.transition = "transform " + config.duration + "ms ease 0ms";
}

async function sectionPositionRight(section: HTMLElement) {
  section.style.transform = config.cssRight;
  section.style.transition = "transform " + config.duration + "ms ease 0ms";
}

async function sectionPositionCenter(section: HTMLElement) {
  section.style.transform = "translate3d(0, 0, 0)";
}

async function moveSectionFromTop(section: HTMLElement) {
  await sectionPositionTop(section);
  await sectionPositionCenter(section);
}

async function moveSectionToTop(section: HTMLElement) {
  await sectionPositionCenter(section);
  await sectionPositionTop(section);
}

async function moveSectionFromBottom(section: HTMLElement) {
  await sectionPositionBottom(section);
  await sectionPositionCenter(section);
}

async function moveSectionToBottom(section: HTMLElement) {
  await sectionPositionCenter(section);
  await sectionPositionBottom(section);
}

export {moveSectionFromTop, moveSectionToTop, moveSectionFromBottom, moveSectionToBottom}
