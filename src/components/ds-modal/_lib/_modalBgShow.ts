import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default function modalOpen(dataValue:string) {
  const bg:string = '.ds-modal-bg';
  const bgEl:HTMLElement = document.querySelector('.ds-modal-bg');
  bgEl.style.zIndex = `${config.zIndex}`;
  classAdd(bg, "ds-modal-bg-show", 0);
  classAdd(bg, "ds-modal-bg-block", 0);
  classRemove(bg, "ds-modal-bg-show", 500);
  message(`ds-modal: background opened`, config.logs);
}
