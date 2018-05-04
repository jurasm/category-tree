const recursiveContainer = document.getElementById('recursive');
const iterativeConteainer = document.getElementById('iterative');

async function fetchTree() {
  try {
    const response = await fetch('tree.json');
    return response.json();
  } catch(e) {
    throw new Error('Fetch failed');
  }
}

function render(tree) {
  console.log(tree);
}

document.addEventListener('DOMContentLoaded', function() { 
  fetchTree().then(render).catch(console.error);
});