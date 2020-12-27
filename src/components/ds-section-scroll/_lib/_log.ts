function message(msg: string, show: boolean) {
  if (show) {
    console.log(`%c ${msg} `, "background: #00ff00; color: #000000");
  }
}

function error(msg: string, show: boolean) {
  if (show) {
    console.log(`%c ${msg} `, "background: #ff0000; color: #ffffff");
  }
}

export { message, error };
