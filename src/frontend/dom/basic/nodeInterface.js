function isNode(value) {
  return value instanceof Node;
}

const isEmptyNode = (node) => {
  if (!isNode(node) || !node) return false;

  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() === '') {
    return true;
  }
  return false;
};

let node = document.querySelector('.parent').firstChild;
const nodes = [];

const outputSection = document.querySelector('.output');
const ul = document.createElement('ul');
outputSection.appendChild(ul);

while (node) {
  let listItem = document.createElement('li');
  listItem.textContent = `Value of ${node.nodeName} : ${
    node.nodeValue
  }isEmptyNode: ${isEmptyNode(node)}
  `;
  console.log(node.nodeValue);
  outputSection.appendChild(listItem);
  node = node.nextSibling;
}
