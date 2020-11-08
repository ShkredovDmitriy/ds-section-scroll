export default function classRemove(modal: string, cls: string, time: number) {
  setTimeout(() => {
    document.querySelector(modal).classList.remove(cls);
  }, time);
}
