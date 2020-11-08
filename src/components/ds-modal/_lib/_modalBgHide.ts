import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalClose(dataValue:string) {
  const bg:string = '.ds-modal-bg';
  classAdd(bg, "ds-modal-bg-hide", 200);
  classRemove(bg, "ds-modal-bg-block", 600);
  classRemove(bg, "ds-modal-bg-hide", 600);
  message(`ds-modal: background closed`, config.logs);
}
