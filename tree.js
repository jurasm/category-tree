const recursiveContainer = document.getElementById('recursive');
const iterativeContainer = document.getElementById('iterative');

async function fetchTree() {
  try {
    const response = await fetch('tree.json');
    return response.json();
  } catch(e) {
    throw new Error('Fetch failed');
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