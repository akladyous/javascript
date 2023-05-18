const mainSection = document.querySelector('.main');

const myEvent = new Event('myCustomEvent');

mainSection.addEventListener('myCustomEvent', (e) => {
  console.log(e);
});

document.dispatchEvent(myEvent);
