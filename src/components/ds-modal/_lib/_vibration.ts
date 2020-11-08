import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function vibration(dataValue:string) {
  const modal:string = `.ds-modal-container[data-ds-modal="${dataValue}"]`;
  classAdd(modal, config.vibration, 50);
  classRemove(modal, config.vibration, 500);
  message(`ds-modal: ${dataValue} vibration`, config.logs);
}
