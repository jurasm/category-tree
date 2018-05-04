const recursiveContainer = document.getElementById('recursive');
const iterativeContainer = document.getElementById('iterative');

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

function render(tree) {
  clearContainer(recursiveContainer);
  clearContainer(iterativeContainer);
}

document.addEventListener('DOMContentLoaded', function() { 
  fetchTree().then(render).catch(console.error);
});