export default function addBg(){
  let dsModalBg = document.createElement("div");
  dsModalBg.classList.add('ds-modal-bg');
  document.querySelector('body').appendChild(dsModalBg);
}