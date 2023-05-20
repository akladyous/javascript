const scroller = document.querySelector('.scroller');
const scrollTop = document.querySelector('.scroll-top');
const scrollHeight = document.querySelector('.scroll-height');
const clientHeight = document.querySelector('.client-height');

scroller.addEventListener('scroll', (event) => {
  scrollTop.textContent = scroller.scrollTop;
  scrollHeight.textContent = scroller.scrollHeight;
  clientHeight.textContent = scroller.clientHeight;

  const x = Math.abs(
    scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop,
  );
  console.log('x                     : ', scroller.scrollHeight);
});
