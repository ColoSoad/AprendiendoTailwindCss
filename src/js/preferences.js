// const containerLenguaje = document.querySelector('.container-lenguajes');
// const lenguajeInput = document.querySelector('#lenguaje');
// const lenguajeLabel = document.querySelector('#label-lenguaje');
// let isCheckedLenguaje = lenguajeInput.checked;
// const parrafo = document.querySelector('#parrafoTraducir');

// const URL = '../assets/json/en.json';

// Función para obtener el archivo JSON y cambiar el texto
// async function obtener() {
//     try {
//         const respuesta = await fetch(URL); // Esperar el resultado de la llamada a fetch
//         if (!respuesta.ok) {
//             throw new Error('No se pudo obtener la información solicitada. (' + respuesta.status + ')');
//         }
//         const data = await respuesta.json(); // Esperar la conversión a JSON
//         cambiar(data); // Cambiar el idioma con los datos obtenidos
//     } catch (error) {
//         console.error('Error al obtener los datos del JSON:', error); // Manejo de errores
//     }
// }

// funcion para recuperar infoDark de localStorage
function recuperarInfoDeDark() {
    const infoDelDark = JSON.parse(localStorage.getItem('infoDark'));
    if (infoDelDark !== '') {
        let dark = infoDelDark.darkie;
        let check = infoDelDark.isChecked;
        if (check == true) {
            document.documentElement.classList.toggle(dark);
        }
    }
}

recuperarInfoDeDark();

// // Función para guardar el estado de checkbox lenguaje
// function guardarInfoDeLenguaje() {
//     const infoLeng = {
//         isCheckedLenguaje: lenguajeInput.checked,
//     };
//     localStorage.setItem('infoLeng', JSON.stringify(infoLeng));
// }

// // Función para cargar el estado de checkbox lenguaje desde localStorage
// function cargarEstadoDeLenguaje() {
//     const savedState = JSON.parse(localStorage.getItem('infoLeng')); // Obtener el objeto guardado
//     if (savedState !== null) {
//         lenguajeInput.checked = savedState.isCheckedLenguaje; // Actualizar el estado del checkbox
//     }
// }

// // Función para cambiar el idioma del párrafo
// function cambiar(data) {
//     if (lenguajeInput.checked) {
//         parrafo.textContent = data.index.h2; // Cambiar al idioma del JSON
//     } else {
//         parrafo.textContent = 'Esta es mi página para practicar y aprender!'; // Cambiar de nuevo al español
//     }
// }

// // Escuchar cambios en el checkbox
// lenguajeInput.addEventListener('change', () => {
//     isCheckedLenguaje = lenguajeInput.checked; // Actualizar variable
//     guardarInfoDeLenguaje(); // Guardar en localStorage cada vez que cambia
//     obtener(); // Cambiar el idioma al cambiar el checkbox
// });

// // Llamar a la función para cargar el estado al iniciar la página
// cargarEstadoDeLenguaje();
// obtener(); // Llamamos obtener inicialmente para ajustar el texto según el estado actual del checkbox
