const sec = document.querySelector('.mainSection');

const myEvent = new Event('myCustomEvent');

sec.addEventListener('click', (e) => console.log('click event..'));
