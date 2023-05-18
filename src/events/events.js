const main = document.querySelector('.main');

const myEvent = new Event('myCustomEvent');

main.addEventListener('myCustomEvent', (e) => {
  console.log(e);
});
