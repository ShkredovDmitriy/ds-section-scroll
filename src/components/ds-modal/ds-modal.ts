import init from "./_lib/_init";
import controlOpen from "./_lib/_controlOpen";
import controlClose from "./_lib/_controlClose";
import configSet from "./_lib/_configSet";
import configGet from "./_lib/_configGet";

class DsModalComponent {

  init() {
    init();
  }

  config(data:object) {
    configSet(data);
  }

  open(dataValue: string) {
    controlOpen(dataValue);
  }

  close(dataValue: string) {
    controlClose(dataValue);
  }

  status() {
    configGet();
  }
}

declare global { interface Window { dsModal: any; }}
window.dsModal = new DsModalComponent();
export default window.dsModal;
