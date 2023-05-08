
const formulario = document.querySelector('#formulario');
const resultados = document.querySelector('.resultados');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const metodo = document.querySelector('#metodo').value;
    const ruta = document.querySelector('#url').value;

    // Construir URL de solicitud
    const url = `https://damirpinzon05.github.io/act6uniminuto202305api/main${ruta}`;

    try {
        const respuesta = await fetch(url, { method: metodo });
        const datos = await respuesta.json();

        resultados.innerHTML = JSON.stringify(datos, null, 2);
    } catch (error) {
        resultados.innerHTML = error.message;
    }
});


/*const formulario = document.getElementById('formulario');
const resultados = document.querySelector('.resultados');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtener valores del formulario
    const metodo = document.getElementById('metodo').value;
    const ruta = document.getElementById('url').value;

    // Construir URL de solicitud
    const url = `https://damirpinzon05.github.io/act6uniminuto202305api/main${ruta}`;

    // Realizar solicitud HTTP utilizando fetch
    fetch(url, { method: metodo })
        .then((response) => response.json())
        .then((data) => {
            // Mostrar resultados
            resultados.innerHTML = JSON.stringify(data);
        })
        .catch((error) => console.log(error));
});*/