function promisedAnimation (htmlElement:HTMLElement, animationClass:string) {
  return new Promise((resolve) => {
    htmlElement.classList.add(animationClass);
    const onCssAnimationEnd = (event:Event) => {
      if(event.target === htmlElement) {
        // htmlElement.classList.remove(animationClass);
        resolve(true);
        htmlElement.removeEventListener(
          "animationend",
          onCssAnimationEnd
        );
        htmlElement.removeEventListener(
          "transitionend",
          onCssAnimationEnd
        );
      }
    }
    htmlElement.addEventListener("animationend", onCssAnimationEnd);
    htmlElement.addEventListener("transitionend", onCssAnimationEnd);
  });
}

async function sectionPositionTop(section: HTMLElement) {
  section.style.transform = "translate3d(0, -100vh, 0)";
}

async function sectionPositionBottom(section: HTMLElement) {
  section.style.transform = "translate3d(0, 100vh, 0)";
}

async function sectionPositionCenter(section: HTMLElement) {
  section.style.transform = "translate3d(0, 0, 0)";
}

export default class Section {
  section: HTMLElement;
  id: number;

  constructor(element: HTMLElement, id:number) {
    this.section = element;
    this.id = id;
  }

  async initFromTop () {
    const zIndex = 1000 + this.id;
    if(this.id > 0) this.section.style.transform = "translate3d(0, -100vh, 0)";
    this.section.style.zIndex = zIndex + "";
    this.section.classList.add("ds-section-scroll-scrollable");
    console.log(this.section);
    console.log("initialised");
  }

  async initLinear () {
    if(this.id > 0) this.section.style.transform = "translate3d(0, 100vh, 0)";
    this.section.style.zIndex = "1000";
    this.section.classList.add("ds-section-scroll-scrollable");
    console.log(this.section);
    console.log("initialised");
  }

  async moveFromTop() {
    await sectionPositionTop(this.section);
    await sectionPositionCenter(this.section);
  }

  async moveToTop() {
    await sectionPositionCenter(this.section);
    await sectionPositionTop(this.section);
  }

  async moveFromBottom() {
    await sectionPositionBottom(this.section);
    await sectionPositionCenter(this.section);
  }

  async moveToBottom() {
    await sectionPositionCenter(this.section);
    await sectionPositionBottom(this.section);
  }

}