const docEvent = new Event('myCustomEvent', {
  bubbles: true,
  cancelable: true,
});
document.addEventListener('myCustomEvent', (e) => {
  console.log('event : ', e);
});

document.dispatchEvent(docEvent);
