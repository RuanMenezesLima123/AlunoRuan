const mesasContainer = document.getElementById('mesas-container');

const mesas = [
  { id: 1, status: 'livre' },
  { id: 2, status: 'ocupada' },
  { id: 3, status: 'reservada' },
  { id: 4, status: 'livre' },
  { id: 5, status: 'ocupada' },
  { id: 6, status: 'reservada' },
  { id: 7, status: 'livre' },
  { id: 8, status: 'ocupada' }
];

function renderMesas() {
  mesas.forEach(mesa => {
    const mesaDiv = document.createElement('div');
    mesaDiv.classList.add('mesa', mesa.status);
    mesaDiv.textContent = `Mesa ${mesa.id}`;
    mesaDiv.addEventListener('click', () => mudarStatus(mesa.id));
    mesasContainer.appendChild(mesaDiv);
  });
}


function mudarStatus(id) {
  const mesa = mesas.find(m => m.id === id);
  if (mesa.status === 'livre') mesa.status = 'ocupada';
  else if (mesa.status === 'ocupada') mesa.status = 'reservada';
  else mesa.status = 'livre';

  mesasContainer.innerHTML = '';
  renderMesas();
}

renderMesas();