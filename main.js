document.getElementById('perfilForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    nombre: document.getElementById('nombre').value.trim(),
    apellido: document.getElementById('apellido').value.trim(),
    username: document.getElementById('username').value.trim(),
    password: document.getElementById('password').value
  };

  try {
    const res = await fetch('/api/perfil', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    const out = document.getElementById('resultado');
    if (data.ok) {
      out.textContent = 'Registro OK: ' + (data.message || '');
    } else {
      out.textContent = 'Error: ' + (data.error || 'Respuesta no OK');
    }
  } catch (err) {
    document.getElementById('resultado').textContent = 'Error de red: ' + err.message;
  }
});
