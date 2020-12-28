const config = {
  // 
  bodyBlockClass: "ds-section-scroll-overflow-hidden",
  scrollContainer: ".ds-section-scroll-container",
  scrollItem: ".ds-section-scroll-item",
  // 
  scrollable: "ds-section-scroll-scrollable",
  //
  cssUp: "translate3d(0, -100vh, 0)",
  cssDown: "translate3d(0, 100vh, 0)",
  cssLeft: "translate3d(-100vw, 0, 0)",
  cssRight: "translate3d(100vw, 0, 0)",
  // logs text
  logComponent: "ds-section-scroll",
  // callbacks 
  beforeScroll: new Function,
  afterScroll: new Function,
  // 
  sections: new Array,
  state: 0,
  delta: 0,
  currentID: 0,
  // 
  variant: 3,
  zIndex: 1000,
  duration: 500,
  logs: false,
};

export default config;

