import config from "./_config";
import { error } from "./_log";

export default function outClickClose(dataValue: string) {
 
  if (config.modals.has(dataValue)) {
    config.outClick === true ? config.modals.get(dataValue).close() : config.modals.get(dataValue).vibration();
  } else {
    error("ds-modal: no such modal exists", true);
  }
}
