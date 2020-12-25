import config from "./_config";
import Section from "./_section";

export default async function componentInit() {
  const sectionScrollContainer:HTMLElement = document.querySelector(config.scrollContainer);
  const sectionsOnPage = sectionScrollContainer.querySelectorAll(config.scrollItem);
  sectionsOnPage.forEach((section:HTMLElement, id:number) => {
    const sectionItem = new Section(section, id);
    sectionItem.init();
    config.sections.push(sectionItem);
  })
}
