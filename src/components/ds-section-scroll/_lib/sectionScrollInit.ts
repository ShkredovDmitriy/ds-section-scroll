import config from "./_config";

export default function sectionScrollInit() {
  document.querySelector('body').classList.add('ds-section-scroll-body');
  const container: HTMLElement = document.querySelector('.ds-section-scroll-container');
  const sections = container.querySelectorAll('.ds-section-scroll-item');
  config.sections = Array.prototype.slice.call(sections);
}