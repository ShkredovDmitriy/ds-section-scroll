const config = {
  bodyBlockClass: "ds-modal-overflow-hidden", // block body scroll class
  modalQuery: ".ds-modal-container[data-ds-modal]", // modal container selector
  modalContainer: ".ds-modal-container", // modal container class
  modalData: "data-ds-modal", // modal data attribute
  modalWrapper: ".ds-modal-wrapper", // modal wrapper class
  modalClass: ".ds-modal", // modal class
  openData: "data-ds-modal-open", // open button data attribute
  buttonClose: ".ds-modal-close", // close buttons class
  animationStep1: "block", // animation step 1 class
  animationStep2: "shadow", // animation step 2 class
  animationStep3: "opacity", // animation step 3 class
  animationStep4: "transform", // animation step 4 class
  vibration: "ds-modal-vibration", // vibration class
  modals: new Map(), // all inited modals
  initialised: false, // initialised indicator
  logs: false, // show logs in terminal
  outClick: true, // close modal when click outside the modal
  zIndex: 9999, // modal z-index
};

export default config;
