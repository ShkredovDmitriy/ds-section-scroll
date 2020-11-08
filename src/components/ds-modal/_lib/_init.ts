import config from "./_config";
import addBg from "./_addBg";
import DsModal from "./_DsModal";
import controlOpen from "./_controlOpen";
import controlClose from "./_controlClose";
import outClickClose from "./_outClickClose";

function userEvent(event: any) {
  if(event && event.target) {
    const openData: string = event.target.getAttribute('data-ds-modal-open');
    const closeData: string = event.target.getAttribute('data-ds-modal-close');
    const modalData: any = event.target.classList.contains('ds-modal-wrapper')? event.target.parentElement.getAttribute('data-ds-modal') : false;
    if(openData){
      controlOpen(openData);
    } else if(closeData){
      controlClose(closeData);
    } else if(modalData) {
      const wrapper = document.querySelector(`.ds-modal-container[data-ds-modal="${modalData}"] .ds-modal-wrapper`);
      if (event.target === wrapper) {
        outClickClose(modalData);
      }
    }
  }
}

export default function init() {
  document.addEventListener('click', function(event: any) {
    userEvent(event);
  });
  config.modals = new Map();
  document.querySelectorAll(config.modalQuery).forEach(modal => {
    const dataValue = modal.getAttribute(config.modalData);
    const clone = new DsModal(dataValue);
    config.modals.set(`${dataValue}`, clone);
  });
  addBg();
}
