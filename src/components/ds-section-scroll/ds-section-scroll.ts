import config from "./_lib/_config";

class DsSectionScroll {

  init() {
    //   sectionScrollInit();
    const body: HTMLElement = document.querySelector('body');
    const container: HTMLElement = document.querySelector('.ds-section-scroll-container');
    const sections = container.querySelectorAll('.ds-section-scroll-item');

    body.classList.add('ds-section-scroll-body');
    
    sections.forEach(function(item, i){
      if( i === 0) {
        item.classList.add('ds-section-scroll-scrollable');
      } else {
        item.classList.add('ds-section-scroll-scrollable');
        item.classList.add('ds-section-scroll-bottom');
      }
    })

    document.addEventListener('wheel', function(event){
      console.log(event.deltaY);
      if(event.deltaY > 0){
        config.state += 1;
        if(config.state > 2) {config.state = 2 }
        console.log(config.state);
        sections.forEach(function(item, i) {
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
        sections.forEach(function(item, i){
          if( i === config.state) {
            item.classList.remove('ds-section-scroll-top');
            item.classList.remove('ds-section-scroll-bottom');
          } else if (i < config.state ) {
            item.classList.add('ds-section-scroll-bottom');
          } else {
            item.classList.add('ds-section-scroll-top');
          }
        })
      }
    })
  }
}

declare global { interface Window { dsSectionScroll: any; }}
window.dsSectionScroll = new DsSectionScroll();
export default window.dsSectionScroll;