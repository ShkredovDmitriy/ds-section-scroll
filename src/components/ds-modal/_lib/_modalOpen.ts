import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalOpen(dataValue:string) {
  const modal:string = `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  const modalEl:HTMLElement = document.querySelector(modal);
  modalEl.style.zIndex = `${config.zIndex + 1}`;
  classAdd(modal, "ds-modal-opacity-up", 0);
  classAdd(modal, "ds-modal-container-block", 0);
  classRemove(modal, "ds-modal-opacity-up", 500);
  message(`ds-modal: ${dataValue} opened`, config.logs);
}
