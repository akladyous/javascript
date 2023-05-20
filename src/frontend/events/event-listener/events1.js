const parent = document.querySelector('.parent');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');

function handleClick(e) {
  let targetName = e.target.className.split(' ').at(-1);
  console.log('Target         : ', targetName.toLocaleUpperCase());
  let currentTargetName = e.currentTarget.className.split(' ').at(-1);
  if (!e.target.isSameNode(e.currentTarget)) {
    console.log('Current Target : ', currentTargetName.toLocaleUpperCase());
  }
  e.target.style.backgroundColor = 'yellow';
  e.target.style.border = '2px dashed red';
  setTimeout(() => {
    e.target.style.backgroundColor = '';
    e.target.style.border = '';
  }, 500);
  console.log('-'.repeat(50));
}

parent.addEventListener('click', (e) => {
  console.log('parent');
});
one.addEventListener('click', (e) => {
  console.log('one');
});
two.addEventListener('click', (e) => {
  console.log('two');
});
three.addEventListener('click', (e) => {
  console.log('three');
});
four.addEventListener('click', (e) => {
  console.log('four');
});
five.addEventListener('click', (e) => {
  console.log('five');
});
