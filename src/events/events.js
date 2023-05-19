const docEvent = new Event('myCustomEvent', {
  cancelable: true,
  bubbles: true,
});

document.addEventListener('myCustomEvent', (e) => {
  console.log('doc event  : ', e.defaultPrevented);
});

const btn = document.querySelector('.btn');
btn.addEventListener('myCustomEvent', (e) => {
  e.preventDefault();
  console.log('btn  event : ', e.defaultPrevented);
});

btn.dispatchEvent(docEvent);
