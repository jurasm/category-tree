// @ts-check
const recursiveContainer = document.getElementById('recursive');
const iterativeContainer = document.getElementById('iterative');
let tree;

async function fetchTree() {
  try {
    const response = await fetch('tree.json');
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch(e) {
    console.error(e);
  }
}

function clearContainer(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
}

function renderItem(container, item) {
  const element = document.createElement('li');
  element.appendChild(document.createTextNode(item.title));

  const add = document.createElement('a');
  add.appendChild(document.createTextNode(' [+] '))
  element.appendChild(add);

  add.addEventListener('click', () => {
    const title = prompt('Enter title:');
    item.children.push({
      title: title || 'Empty title',
      children: []
    });
    render();
  });
  
  const ul = document.createElement('ul')
  element.appendChild(ul);

  container.querySelector('ul').appendChild(element);
  return element;
}

function renderRecursive(tree, container) {
  if (!container) {
    recursiveContainer.appendChild(document.createElement('ul'));
    container = recursiveContainer;
  }

  tree.forEach(branch => {
    const item = renderItem(container, branch);
    if (branch.children.length > 0) {
      renderRecursive(branch.children, item);
    }
  });
}

function renderIterative(tree) {

}

function render() {
  clearContainer(recursiveContainer);
  clearContainer(iterativeContainer);

  renderRecursive(tree);
  renderIterative(tree);
}

document.addEventListener('DOMContentLoaded', function() { 
  fetchTree().then(response => {
    tree = response;
    render();
  }).catch(console.error);
});