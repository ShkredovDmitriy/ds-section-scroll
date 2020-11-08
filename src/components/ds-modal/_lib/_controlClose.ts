import config from "./_config";
import { error } from "./_log";

export default function controlClose(dataValue: string) {
  if (dataValue) {
    if (config.modals.has(dataValue)) {
      config.modals.get(dataValue).close();
    } else {
      error("ds-modal: no such modal exists", true);
    }
  }
}
