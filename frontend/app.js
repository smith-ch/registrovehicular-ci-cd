const API = 'http://localhost:3000/api/vehicles';
const form = document.getElementById('form');
const listEl = document.getElementById('list');

async function fetchVehicles() {
  const res = await fetch(API);
  const data = await res.json();
  listEl.innerHTML = data.map(v => 
    `<li>${v.placa} - ${v.marca} ${v.modelo} (${v.año})</li>`).join('');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const body = {
    placa: form.placa.value,
    marca: form.marca.value,
    modelo: form.modelo.value,
    año: Number(form.ano.value)
  };
  await fetch(API, {
    method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body)
  });
  form.reset();
  fetchVehicles();
});

fetchVehicles();