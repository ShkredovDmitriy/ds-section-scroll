import config from "./_config";

// function sectionAnimation(section:HTMLElement, inlineCss:string) {
//   return new Promise((resolve) => {
//     section.style.transform = inlineCss;
//     const onCssAnimationEnd = (event:Event) => {
//       if(event.target === section) {
//         resolve(true);
//         section.removeEventListener(
//           "animationend",
//           onCssAnimationEnd
//         );
//         section.removeEventListener(
//           "transitionend",
//           onCssAnimationEnd
//         );
//       }
//     }
//     section.addEventListener("animationend", onCssAnimationEnd);
//     section.addEventListener("transitionend", onCssAnimationEnd);
//   });
// }

async function sectionPositionTop(section: HTMLElement) {
  section.style.transition = "transform " + config.duration + "ms ease 0ms";
  section.style.transform = config.cssUp;
}

async function sectionPositionBottom(section: HTMLElement) {
  section.style.transition = "transform " + config.duration + "ms ease 0ms";
  section.style.transform = config.cssDown;
}

// move section from to
async function moveSectionFromTop(section: HTMLElement) {
  await sectionPositionTop(section);
  section.style.transform = "translate3d(0, 0, 0)";
}

async function moveSectionToTop(section: HTMLElement) {
  if(section.style.transform === "translate3d(0px, 100vh, 0px)") {
    section.style.transition = "transform " + 0 + "ms ease 0ms";
    section.style.transform = "translate3d(0, -100vh, 0)";
  } else {
    section.style.transform = "translate3d(0, 0, 0)";
    await sectionPositionTop(section);
  }
}

async function moveSectionFromBottom(section: HTMLElement) {
  await sectionPositionBottom(section);
  section.style.transform = "translate3d(0, 0, 0)";
}

async function moveSectionToBottom(section: HTMLElement) {
  if (section.style.transform === "translate3d(0px, -100vh, 0px)") {
    section.style.transition = "transform " + 0 + "ms ease 0ms";
    section.style.transform = "translate3d(0, 100vh, 0)";
  } else {
    section.style.transform = "translate3d(0, 0, 0)";
    await sectionPositionBottom(section);
  }
}

export {moveSectionFromTop, moveSectionToTop, moveSectionFromBottom, moveSectionToBottom}
