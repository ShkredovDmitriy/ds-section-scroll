// Polifill forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

import "../common/main.scss";
import dsSectionScroll from '../components/ds-section-scroll/ds-section-scroll';

const headerButtons = document.querySelectorAll(".ds-modal-demo-header__button");

function setActiveHeaderButton(data: any) {
  headerButtons.forEach( (button, id) => {
    if(id === data.currentID) button.classList.add("active")
    else button.classList.remove("active")
  })
}

headerButtons.forEach((button, id) => {
  button.addEventListener("click", () => {
    dsSectionScroll.scrollTo(id);
  })
});

dsSectionScroll.init();
dsSectionScroll.afterScroll( setActiveHeaderButton );

