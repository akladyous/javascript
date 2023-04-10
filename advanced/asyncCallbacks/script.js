console.log('--- start ---');
function wait5Seconds() {
  var fiveSeconds = 10000 + new Date().getTime();

  while (new Date() < fiveSeconds) {
    console.log('5 seconds not finished yet...');
  }
  console.log('5 second finished');
}

function clickHandler() {
  console.log('click event handler');
}
document.addEventListener('click', clickHandler);
wait5Seconds();
console.log('--- end ---');
