import config from "./_lib/_config";
import sectionScrollInit from "./_lib/sectionScrollInit";


function wheelDirection() {
  if(config.delta > 0) {
    config.state += 1;
    if(config.state > 2) {config.state = 2 }
    console.log(config.state);
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
    console.log(config.state);
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
}

function deBounce(callback: Function) {
  console.log("debouncing");
  let working = true;
  return function() {
    if(working === false) return
    console.log("bbbbbbbbb");
    callback();
    working = false;
    setTimeout(() => { working = true; }, 500)
  }
}

const bbb = deBounce(function(){
  console.log("aaaaaaaaa");
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
      bbb();
    })
  }
}

declare global { interface Window { dsSectionScroll: any; }}
window.dsSectionScroll = new DsSectionScroll();
export default window.dsSectionScroll;