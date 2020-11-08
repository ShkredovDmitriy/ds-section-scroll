const config = {
  bodyBlockClass: "ds-section-scroll-overflow-hidden", // body class
  scrollContainer: ".ds-section-scroll-container", // scroll container class
  scrollItem: ".ds-section-scroll-container", // scroll item class
  modals: new Map(), // all scroll items
  logs: false, // show logs in terminal
  zIndex: 1999, // scroll z-index
  state: 0, // scroll state

  // 
  modalData: "data-ds-modal", // modal data attribute
  modalWrapper: ".ds-modal-wrapper", // modal wrapper class
  modalClass: ".ds-modal", // modal class
  openData: "data-ds-modal-open", // open button data attribute
  buttonClose: ".ds-modal-close", // close buttons class
};

export default config;
