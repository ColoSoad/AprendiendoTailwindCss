//ENLACE AL DOM DARKMODE
const containerDarkMode = document.querySelector('.containerDarkMode');
const darkModeInput = document.querySelector('#darkMode');
const labelDarkMode = document.querySelector('#label_darkMode');

//ENLACE AL DOM LENGUAJE
const containerLeguaje = document.querySelector('.container-lenguajes');
const lenguajeInput = document.querySelector('#lenguaje');
const lenguajeLabel = document.querySelector('#label-lenguaje');
const tituloPrincipal = document.querySelector('#tituloPrincipal');
const h2Index = document.querySelector('#h2-index');
const buttonContacto = document.querySelector('#btnContacto');
const buttonResponsive = document.querySelector('#btnResposive');
const pFooter = document.querySelector('#footerP');

//ENLACE AL DOM ERROR LENGUAJE
const body = document.querySelector('body');
const URL = './assets/json/en.json';
let isCheckedLenguaje = lenguajeInput.checked;
//VARIABLES GLOBALES Y TEMPLATE LITERALS
const darkie = 'dark';
const divError = `<div class="div-error flex flex-col pb-3">
            <p class="text-center">
                <img class="h-[30px]" src="https://github.com/ColoSoad/ProyectoFinal-Miranda-Joel/blob/master/img/error.png?raw=true" alt="Foto error">
            </p>
            <h3 class="font-semibold h-[30px] text-center tablet:mb-4 sm:text-left sm:pt-0 sm:pl-5">No se ha podido cargar el modo dark.</h3>
            <h4 class="font-semibold text-center h-[28px] pt-10 sm:pt-0 sm:pl-5">Intenta nuevamente en unos instantes...</h4>
        </div>`;

const divError2 = `<div class="div-error2 flex flex-col">
             <p class="">
                 <img class="h-[30px]" src="https://github.com/ColoSoad/ProyectoFinal-Miranda-Joel/blob/master/img/error.png?raw=true" alt="Foto error">
             </p>
             <h3 class="font-semibold h-[30px] mb-10 tablet:mb-4 text-center pl-2">No se ha podido cargar multi-lenguaje.</h3>
             <h4 class="font-semibold h-[28px] text-center">Intenta nuevamente en unos instantes...</h4>
         </div>`;

const divError3 = `<body class="flex justify-center items-center">
    <div>
        <img class="h-[30px] block mx-auto" src="https://github.com/ColoSoad/ProyectoFinal-Miranda-Joel/blob/master/img/error.png?raw=true" alt="Foto error">
        <p class="text-center">
            ERROR AL INTENTAR TRAER INFORMACION DEL LENGUAJE SELECCIONADO
        </p>
        <P class="text-center text-red-600 font-bold">
            POR FAVOR RECARGAR LA PAGINA...
        </P>
    </div>
    
</body>`;

const sun = `<svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>`;

const moon = `<svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;

//FUNCIONALIDADES

//ERROR
// Funciones para retornar error
function retornarError() {
    return divError;
}
function retornarError2() {
    return divError2;
}

function retornarError3() {
    return divError3;
}

//LENGUAJE
// Función para obtener el archivo JSON y cambiar el texto
async function obtener() {
    try {
        const respuesta = await fetch(URL); // Esperar el resultado de la llamada a fetch
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la información solicitada. (' + respuesta.status + ')');
        }
        const data = await respuesta.json(); // Esperar la conversión a JSON
        cambiar(data); // Cambiar el idioma con los datos obtenidos
    } catch (error) {
        retornarError3(); // Manejo de errores
    }
}
// Función para guardar el estado de checkbox lenguaje
function guardarInfoDeLenguaje() {
    const infoLeng = {
        isCheckedLenguaje: lenguajeInput.checked,
    };
    localStorage.setItem('infoLeng', JSON.stringify(infoLeng));
}
// Función para cargar el estado de checkbox lenguaje desde localStorage
function cargarEstadoDeLenguaje() {
    const savedState = JSON.parse(localStorage.getItem('infoLeng')); // Obtener el objeto guardado
    if (savedState !== null) {
        lenguajeInput.checked = savedState.isCheckedLenguaje; // Actualizar el estado del checkbox
    }
}
// Función para cambiar el idioma del párrafo
function cambiar(data) {
    if (lenguajeInput.checked) {
        // Cambiar al idioma del JSON
        tituloPrincipal.textContent = data[0].index.tituloPrincipal;
        h2Index.textContent = data[0].index.h2index;
        buttonContacto.textContent = data[0].index.btnContacto;
        buttonResponsive.textContent = data[0].index.btnResponsive;
        pFooter.textContent = data[0].index.footer;
    } else {
        // Cambiar de nuevo al español
        tituloPrincipal.textContent = 'Hola mundo!';
        h2Index.textContent = 'Esta es mi página para practicar y aprender!';
        buttonContacto.textContent = 'CONTACTO';
        buttonResponsive.textContent = 'DISEÑO RESPONSIVO';
        pFooter.textContent = 'Todos los derechos reservados.';
    }
}
// Escuchar cambios en el checkbox
lenguajeInput.addEventListener('change', () => {
    isCheckedLenguaje = lenguajeInput.checked; // Actualizar variable
    guardarInfoDeLenguaje(); // Guardar en localStorage cada vez que cambia
    obtener(); // Cambiar el idioma al cambiar el checkbox
});
// Llamar a la función para cargar el estado al iniciar la página
cargarEstadoDeLenguaje();
obtener(); // Llamamos obtener inicialmente para ajustar el texto según el estado actual del checkbox

//DARKMODE
// Función para guardar el estado de dark mode y el valor del checkbox en localStorage
function guardarInfoDeDarkMode(darkie, isChecked) {
    const infoDark = {
        darkie: darkie,
        isChecked: isChecked,
    };
    localStorage.setItem('infoDark', JSON.stringify(infoDark));
}

// Función para cargar el estado de dark mode desde localStorage
function cargarInfoDeDarkMode() {
    const infoDark = JSON.parse(localStorage.getItem('infoDark'));

    if (infoDark) {
        // Si el modo oscuro estaba activado, aplicamos la clase 'dark' al elemento raíz
        if (infoDark.isChecked) {
            document.documentElement.classList.add(darkie);
            darkModeInput.checked = true;
            labelDarkMode.innerHTML = sun;
        } else {
            darkModeInput.checked = false;
            labelDarkMode.innerHTML = moon;
        }
    } else {
        containerDarkMode.innerHTML = retornarError();
        guardarInfoDeDarkMode(darkie, darkModeInput.checked);
    }
}

// Cargar el estado de dark mode al iniciar la página
cargarInfoDeDarkMode();

// Escuchar los cambios en el checkbox
darkModeInput.addEventListener('change', (event) => {
    document.documentElement.classList.toggle(darkie); // Para colocar o quitar la clase 'dark'

    if (darkModeInput.checked) {
        labelDarkMode.innerHTML = sun;
    } else {
        labelDarkMode.innerHTML = moon;
    }

    // Guardar el estado actual en localStorage
    guardarInfoDeDarkMode(darkie, darkModeInput.checked);
});
