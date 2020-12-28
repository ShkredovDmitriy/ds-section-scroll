import config from "./_lib/_config";
import componentInit from "./_lib/_componentInit";
import deBounce from "./_lib/_deBounce";
import {movingVariantUp1, movingVariantDown1} from "./_lib/_movingVariant1";
import {movingVariantUpDown2} from "./_lib/_movingVariant2";
import {movingVariantUpDown3} from "./_lib/_movingVariant3";
import { componentBeforeScroll, componentAfterScroll } from "./_lib/_componentsCallback";

function wheelDirection() {
  if (config.delta > 0) {

    const beforeScrollData = {
      currentID: config.currentID
    }

    config.beforeScroll(beforeScrollData);

    config.currentID += 1;
    if(config.currentID > config.sections.length - 1) config.currentID = config.sections.length - 1;
    if (config.variant === 1) movingVariantUp1()
    else if (config.variant === 2) movingVariantUpDown2()
    else if (config.variant === 3) movingVariantUpDown3()

    const afterScrollData = {
      currentID: config.currentID
    }

    config.afterScroll(afterScrollData);
    
  } else {

    const beforeScrollData = {
      currentID: config.currentID
    }

    config.beforeScroll(beforeScrollData);

    config.currentID -= 1;
    if(config.currentID < 0) config.currentID = 0;   

    if (config.variant === 1) movingVariantDown1()
    else if (config.variant === 2) movingVariantUpDown2()
    else if (config.variant === 3) movingVariantUpDown3()

    const afterScrollData = {
      currentID: config.currentID
    }

    config.afterScroll(afterScrollData);
  }
}

const move = deBounce(function(){
  wheelDirection();
})

class DsSectionScroll {

  async init() {
    await componentInit();
    document.addEventListener('wheel', function(event) {
      config.delta = event.deltaY;
      move();
    })
  }

  scrollTo(id: number) {
    if(id > config.currentID) {

      const beforeScrollData = {
        currentID: config.currentID
      }
      config.beforeScroll(beforeScrollData); 

      config.currentID = id;
      config.beforeScroll(beforeScrollData);
      if (config.variant === 1) movingVariantUp1()
      else if (config.variant === 2) movingVariantUpDown2()
      else if (config.variant === 3) movingVariantUpDown3()

      const afterScrollData = {
        currentID: config.currentID
      }
      config.afterScroll(afterScrollData);

    } else if(id < config.currentID) {

      const beforeScrollData = {
        currentID: config.currentID
      }
      config.beforeScroll(beforeScrollData); 

      config.currentID = id;
      if (config.variant === 1) movingVariantDown1()
      else if (config.variant === 2) movingVariantUpDown2()
      else if (config.variant === 3) movingVariantUpDown3()

      const afterScrollData = {
        currentID: config.currentID
      }
      config.afterScroll(afterScrollData);
    }
  }

  beforeScroll(callback: Function) {
    componentBeforeScroll(callback);
  }

  afterScroll(callback: Function) {
    componentAfterScroll(callback);
  }
}

declare global { interface Window { dsSectionScroll: any; }}
window.dsSectionScroll = new DsSectionScroll();
export default window.dsSectionScroll;
