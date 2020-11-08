export default function classAdd(modal: string, cls: string, time: number) {
  setTimeout(() => {
    document.querySelector(modal).classList.add(cls);
  }, time);
}
