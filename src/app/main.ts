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
dsSectionScroll.init();
