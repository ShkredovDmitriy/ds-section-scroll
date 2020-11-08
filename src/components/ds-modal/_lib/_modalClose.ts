import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalClose(dataValue:string) {
  const modal = `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  classAdd(modal, "ds-modal-opacity-down", 0);
  classRemove(modal, "ds-modal-container-block", 500);
  classRemove(modal, "ds-modal-opacity-down", 500);
  message(`ds-modal: ${dataValue} closed`, config.logs);
}
