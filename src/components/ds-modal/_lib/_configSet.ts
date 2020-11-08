import config from "./_config";
import { message } from "./_log";
import zIndexSet from "./_zIndexSet";

export default function configSet({...data}) {
    if (data.logs === true) {
      config.logs = true;
      message("ds-modal: logs = true", config.logs);
    }
    if (data.logs === false) {
      config.logs = false;
      message("ds-modal: logs = false", config.logs);
    }      
    if (data.outClick === true) {
      config.outClick = true;
      message("ds-modal: outClick = true", config.logs);
    }
    if (data.outClick === false) {
      config.outClick = false;
      message("ds-modal: outClick = false", config.logs);
    }
    if (data.zIndex) {
      zIndexSet(data.zIndex);
    }
   
}
