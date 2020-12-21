import config from "./_lib/_config";
import sectionScrollInit from "./_lib/_init";
import deBounce from "./_lib/_deBounce";

function wheelDirection() {

  if(config.delta > 0) {
    config.state += 1;
    if(config.state > 2) {config.state = 2 }
    config.sections.forEach(function(item, i) {
      if( i === config.state) {
        item.classList.remove('ds-section-scroll-bottom');
      } else if (i < config.state ) {
        item.classList.add('ds-section-scroll-top');
      } else {
        item.classList.add('ds-section-scroll-bottom');
      }
    })
  } else {
    config.state -= 1;
    if(config.state < 0) {config.state = 0 }
    config.sections.forEach(function(item, i){
      if( i === config.state) {
        item.classList.remove('ds-section-scroll-top');
      } else if (i > config.state ) {
        item.classList.add('ds-section-scroll-bottom');
      } else {
        item.classList.add('ds-section-scroll-top');
      }
    })
  }
  config.beforeScroll(config.state);
}

const move = deBounce(function(){
  wheelDirection();
})

class DsSectionScroll {

  init() {
    sectionScrollInit();
    
    config.sections.forEach(function(item, i){
      if( i === 0) {
        item.classList.add('ds-section-scroll-scrollable');
      } else {
        item.classList.add('ds-section-scroll-scrollable');
        item.classList.add('ds-section-scroll-bottom');
      }
    })

    document.addEventListener('wheel', function(event) {
      config.delta = event.deltaY;
      move();
    })
  }

  changeSection(id: number){
    console.log(id);
  }

  beforeScroll(f: any) {
    config.beforeScroll = f;
  }
}

declare global { interface Window { dsSectionScroll: any; }}
window.dsSectionScroll = new DsSectionScroll();
export default window.dsSectionScroll;