const config = {
  bodyBlockClass: "ds-section-scroll-overflow-hidden", // body class
  scrollContainer: ".ds-section-scroll-container", // scroll container class
  scrollItem: ".ds-section-scroll-container", // scroll item class
  sections: new Array, // all scroll items
  logs: false, // show logs in terminal
  zIndex: 1999, // scroll z-index
  state: 0, // scroll state
  delta: 0, // scroll direction
  // 
  modalData: "data-ds-modal", // modal data attribute
  modalWrapper: ".ds-modal-wrapper", // modal wrapper class
  modalClass: ".ds-modal", // modal class
  openData: "data-ds-modal-open", // open button data attribute
  buttonClose: ".ds-modal-close", // close buttons class
  // 
  beforeScroll: function(id){},
};

export default config;
