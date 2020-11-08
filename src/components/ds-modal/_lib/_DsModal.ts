import modalOpen from "./_modalOpen";
import modalClose from "./_modalClose";
import modalBgShow from "./_modalBgShow";
import modalBgHide from "./_modalBgHide";
import vibration from "./_vibration";

class DsModal {
  dataValue: string;
  
  constructor(value: string) {
    this.dataValue = value;
  }

  open() {
    modalOpen(this.dataValue);
    modalBgShow(this.dataValue);
  }

  close() {
    modalClose(this.dataValue);
    modalBgHide(this.dataValue);
  }

  vibration() {
    vibration(this.dataValue);
  }

  status() {
    return this.dataValue;
  }
}

export default DsModal;
