export const customAos = (animation,element) => {
  window.addEventListener('scroll',() => {
    const el = document.querySelector(element);
    let animationPoin = el.offsetTop - el.offsetHeight;
    if(window.pageYOffset > animationPoin) el.classList.add(animation)
    if(window.pageYOffset < animationPoin) el.classList.remove(animation)
  })
  
}