export default function deBounce(callback: Function) {
  let working = true;
  return function() {
    if(working === false) return
    callback();
    working = false;
    setTimeout(() => { working = true; }, 900)
  }
}