import config from "./_config";
import {startingVariant1} from "./_movingVariant1";
import {startingVariant2} from "./_movingVariant2";
import {startingVariant3} from "./_movingVariant3";
import {moveSectionFromTop, moveSectionToTop, moveSectionFromBottom, moveSectionToBottom} from "./_movingRules";

export default class Section {
  section: HTMLElement;
  id: number;

  constructor(element: HTMLElement, id:number) {
    this.section = element;
    this.id = id;
  }

  init () {
    if (config.variant === 1) startingVariant1(this.section, this.id);
    else if (config.variant === 2) startingVariant2(this.section, this.id);
    else if (config.variant === 3) startingVariant3(this.section, this.id);
  }

  async moveFromTop() {
    moveSectionFromTop(this.section);
  }

  async moveToTop() {
    moveSectionToTop(this.section);
  }

  async moveFromBottom() {
    moveSectionFromBottom(this.section);
  }

  async moveToBottom() {
    moveSectionToBottom(this.section);
  }
}