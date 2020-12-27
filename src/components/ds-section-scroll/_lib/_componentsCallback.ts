import config from "./_config";
import { error } from "./_log";

function componentBeforeScroll(callback: Function) {
  if(typeof(callback) === "function") {
    config.beforeScroll = callback;
  } else {
    error(`${config.logComponent}: callback must be a function`, true);
  }
}

function componentAfterScroll(callback: Function) {
  if(typeof(callback) === "function") {
    config.afterScroll = callback;
  } else {
    error(`${config.logComponent}: callback must be a function`, true);
  }
}

export { componentBeforeScroll, componentAfterScroll }