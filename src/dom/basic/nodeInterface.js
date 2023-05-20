let node = document.querySelector('.parent').firstChild;
const nodes = [];

const outputSection = document.querySelector('.output');
const ul = document.createElement('ul');
outputSection.appendChild(ul);

while (node) {
  let listItem = document.createElement('li');
  listItem.textContent = `Value of ${node.nodeName} : ${node.nodeValue}`;
  outputSection.appendChild(listItem);
  node = node.nextSibling;
}
