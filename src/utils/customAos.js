export const customAos = (animation,element,x=100) => {
  window.addEventListener('scroll',() => {
    const el = document.querySelector(element);
    if(!el) return;
    let animationPoin = el.offsetTop - el.offsetHeight - x;
    if(window.pageYOffset > animationPoin) el.classList.add(animation)
    if(window.pageYOffset < animationPoin) el.classList.remove(animation)
  })
  
}