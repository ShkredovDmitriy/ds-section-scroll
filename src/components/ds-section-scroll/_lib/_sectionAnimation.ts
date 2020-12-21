export default function sectionAnimation(htmlElement:HTMLElement, animationClass:string) {
  return new Promise((resolve) => {
    htmlElement.classList.add(animationClass);
    const onCssAnimationEnd = (event:Event) => {
      if(event.target === htmlElement) {
        // htmlElement.classList.remove(animationClass);
        resolve(true);
        htmlElement.removeEventListener(
          "animationend",
          onCssAnimationEnd
        );
        htmlElement.removeEventListener(
          "transitionend",
          onCssAnimationEnd
        );
      }
    }
    htmlElement.addEventListener("animationend", onCssAnimationEnd);
    htmlElement.addEventListener("transitionend", onCssAnimationEnd);
  });
}