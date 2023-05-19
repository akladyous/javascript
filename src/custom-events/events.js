const docEvent = new CustomEvent('app:click', {
  cancelable: true,
  bubbles: true,
  detail: { name: 'app:clock', prova: (e) => console.log(e.target.name) },
});

document.addEventListener('app:click', (e) => {
  console.log('doc event  : ', e.defaultPrevented);
});

const btn = document.querySelector('.btn');

btn.addEventListener('app:click', (e) => {
  console.log('btn  event : ', e.defaultPrevented);
  e.preventDefault();
});

let lastClickElapsedTime = 0;
btn.addEventListener('click', (e) => {
  debugger;
  console.log('button click event');
  let elapsedTime = e.timestamp - lastClickElapsedTime;
  if (elapsedTime > 500) {
    console.log('elapsed time is more than 500ms');
    lastClickElapsedTime = e.timestamp;
    return;
  }
  console.log('button timestamp : ', e.timeStamp);
  console.log('button elapsed time : ', elapsedTime);
});

btn.dispatchEvent(docEvent);
