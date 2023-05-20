const scroller = document.querySelector('.scroller');
const scrollTop = document.querySelector('.scroll-top');
const scrollHeight = document.querySelector('.scroll-height');
const clientHeight = document.querySelector('.client-height');
const scrollHeightMinusScrollTop = document.querySelector(
  '.scrollHeightMinusScrollTop',
);
const read = document.querySelector('.read');
const isScrolled = document.querySelector('.isScrolled');

scroller.addEventListener('scroll', (event) => {
  scrollTop.textContent = scroller.scrollTop;
  scrollHeight.textContent = scroller.scrollHeight;
  clientHeight.textContent = scroller.clientHeight;
  scrollHeightMinusScrollTop.textContent =
    scroller.scrollHeight - Math.round(scroller.scrollTop);

  read.textContent =
    scroller.scrollHeight - Math.round(scroller.scrollTop) ===
    scroller.clientHeight;

  isScrolled.textContent = isTotallyScrolled(scroller).toString();
});

const isTotallyScrolled = (element) => {
  return (
    Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <
    1
  );
};

onload = () => {
  const read = document.querySelector('.read');
  read.textContent =
    scroller.scrollHeight - Math.round(scroller.scrollTop) ===
    scroller.clientHeight;
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
/*

function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read =
    this.scrollHeight - Math.round(this.scrollTop) === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    'nextstep',
  ).disabled = !checkReading.read;
  checkReading.noticeBox.textContent = checkReading.read
    ? 'Thank you.'
    : 'Please, scroll and read the following text.';
}

onload = () => {
  const oToBeRead = document.getElementById('rules');
  checkReading.noticeBox = document.createElement('span');
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = 'notice';
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement('br'), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};

*/
