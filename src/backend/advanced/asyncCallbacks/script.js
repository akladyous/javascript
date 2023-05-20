console.log('--- start ---');
function wait5Seconds() {
  var startTime = new Date().getTime(); // Get the current time in milliseconds
  var endTime = startTime + 500; // Add 5 seconds to the start time

  while (new Date().getTime() < endTime) {
    // Your code to be executed while the current time is less than the end time
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
