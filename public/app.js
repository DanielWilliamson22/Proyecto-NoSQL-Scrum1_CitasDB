const API_URL = 'http://localhost:4000/api/sedes';
let sedesGlobal = []; // Aquí guardamos los datos para el buscador

// 1. Cargar datos al inicio
document.addEventListener('DOMContentLoaded', async () => {
    await cargarSedes();
});

// 2. Función para obtener datos del servidor
async function cargarSedes() {
    try {
        const res = await fetch(API_URL);
        sedesGlobal = await res.json(); // Guardamos en memoria
        renderizar(sedesGlobal); // Mostramos todo
    } catch (error) {
        alert('Error conectando con el servidor');
    }
}

// 3. Renderizar (Dibujar en pantalla)
function renderizar(lista) {
    const contenedor = document.getElementById('lista-sedes');
    document.getElementById('contador').innerText = lista.length;
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = '<p class="text-center text-muted mt-4">No se encontraron resultados.</p>';
        return;
    }

    lista.forEach(sede => {
        contenedor.innerHTML += `
            <div class="col-12">
                <div class="card p-3 shadow-sm border-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="fw-bold text-dark mb-1">${sede.nombre}</h5>
                            <span class="badge badge-ciudad mb-2">${sede.ciudad}</span>
                            <p class="text-muted small mb-0"><i class="bi bi-geo-alt"></i> ${sede.direccion}</p>
                        </div>
                        <div>
                            <button class="btn btn-sm btn-edit me-1" onclick='cargarEdicion(${JSON.stringify(sede)})'>
                                <i class="bi bi-pencil-fill"></i>
                            </button>
                            <button class="btn btn-sm btn-delete" onclick="eliminarSede('${sede._id}')">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// 4. Buscador (Filtra la lista localmente)
function filtrarSedes() {
    const texto = document.getElementById('buscador').value.toLowerCase();
    const filtradas = sedesGlobal.filter(sede => 
        sede.ciudad.toLowerCase().includes(texto) || 
        sede.nombre.toLowerCase().includes(texto)
    );
    renderizar(filtradas);
}

// 5. Crear o Editar Sede
async function gestionarSede(event) {
    event.preventDefault(); // Evita que se recargue la página

    const id = document.getElementById('id-sede').value;
    const datos = {
        nombre: document.getElementById('nombre').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value
    };

    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    resetearFormulario();
    cargarSedes(); // Recarga la lista actualizada
}

// 6. Preparar formulario para editar
function cargarEdicion(sede) {
    document.getElementById('id-sede').value = sede._id;
    document.getElementById('nombre').value = sede.nombre;
    document.getElementById('direccion').value = sede.direccion;
    document.getElementById('ciudad').value = sede.ciudad;

    // Cambios visuales
    document.getElementById('titulo-form').innerText = 'Editar Sede';
    document.getElementById('btn-guardar').innerText = 'Actualizar';
    document.getElementById('btn-guardar').classList.remove('btn-primary-custom');
    document.getElementById('btn-guardar').classList.add('btn-warning', 'text-white');
    document.getElementById('btn-cancelar').classList.remove('d-none'); // Mostrar botón cancelar
}

// 7. Eliminar
async function eliminarSede(id) {
    if (confirm('¿Eliminar esta sede?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        cargarSedes();
    }
}

// 8. Resetear formulario
function resetearFormulario() {
    document.getElementById('form-sede').reset();
    document.getElementById('id-sede').value = '';
    
    document.getElementById('titulo-form').innerHTML = '<i class="bi bi-plus-circle me-2"></i>Nueva Sede';
    const btn = document.getElementById('btn-guardar');
    btn.innerText = 'Guardar';
    btn.classList.add('btn-primary-custom');
    btn.classList.remove('btn-warning', 'text-white');
    document.getElementById('btn-cancelar').classList.add('d-none');
}

