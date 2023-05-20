const scroller = document.querySelector('.scroller');
const scrollData = document.querySelector('.scroll-top');
scroller.addEventListener('scroll', (event) => {
  scrollData.textContent = scroller.scrollTop;

  console.log('scroller.scrollTop    : ', scroller.scrollTop);
  console.log('scroller.scrollHeight : ', scroller.scrollHeight);
  console.log('scroller.clientHeight : ', scroller.clientHeight);

  const x = Math.abs(
    scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop,
  );
  console.log('x                     : ', scroller.scrollHeight);
});
