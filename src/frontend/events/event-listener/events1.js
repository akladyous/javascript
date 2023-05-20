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

function parentClick(e) {
  console.log('Parent');
}
function oneClick(e) {
  console.log('One');
}
function TwoClick(e) {
  console.log('Two');
}
function ThreeClick(e) {
  console.log('Three');
}
function FourClick(e) {
  console.log('Four');
}
function fiveClick(e) {
  console.log('Five');
}

parent.addEventListener('click', parentClick);
one.addEventListener('click', oneClick);
two.addEventListener('click', TwoClick);
three.addEventListener('click', ThreeClick);
four.addEventListener('click', FourClick);
five.addEventListener('click', fiveClick);
