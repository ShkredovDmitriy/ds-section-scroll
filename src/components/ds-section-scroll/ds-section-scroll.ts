import config from "./_lib/_config";
import componentInit from "./_lib/_componentInit";
import deBounce from "./_lib/_deBounce";
import {movingVariantUp1, movingVariantDown1} from "./_lib/_movingVariant1";
import {movingVariantUpDown2} from "./_lib/_movingVariant2";
import {movingVariantUpDown3} from "./_lib/_movingVariant3";

function wheelDirection() {
  if (config.delta > 0) {
    config.currentID += 1;
    if(config.currentID > config.sections.length - 1) config.currentID = config.sections.length - 1;
    if (config.variant === 1) movingVariantUp1()
    else if (config.variant === 2) movingVariantUpDown2()
    else if (config.variant === 3) movingVariantUpDown3()    
  } else {
    config.currentID -= 1;
    if(config.currentID < 0) config.currentID = 0;
    if (config.variant === 1) movingVariantDown1()
    else if (config.variant === 2) movingVariantUpDown2()
    else if (config.variant === 3) movingVariantUpDown3()
  }
  console.log(config.currentID);  
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
}

declare global { interface Window { dsSectionScroll: any; }}
window.dsSectionScroll = new DsSectionScroll();
export default window.dsSectionScroll;