const pFooter = document.querySelector('#footerP');

const tituloContacto = document.querySelector('#titulo-contacto');
const btnContactoClick = document.querySelector('#btnClick');
const inputBtnClick = document.querySelector('#inputBtnContacto');

// ENLACES A LOS BOTONES DE NAVEGACION Y NAVEGACION RESPONSIVE (PARA CAMBIOS DE ESTADO POR IDIOMA)
const buttonContactoNav = document.querySelector('#btnContactoNav');
const buttonResponsiveNav = document.querySelector('#btnResposiveNav');
const buttonNavNav = document.querySelector('#btnNavNav');

const inputNombre = document.querySelector('#inputNombre');
const inputCorreo = document.querySelector('#correo');
const inputContraseña = document.querySelector('#password');
const buttonIngresar = document.querySelector('#buttonIngresar');

const inputBurger = document.querySelector('#burger');
const mainElement = document.querySelector('#main');

const URL = '../assets/json/en.json';

// Función para obtener el archivo JSON y cambiar el texto
async function obtenerJson(checker) {
    try {
        const respuesta = await fetch(URL); // Esperar el resultado de la llamada a fetch
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la información solicitada. (' + respuesta.status + ')');
        }
        const data = await respuesta.json(); // Esperar la conversión a JSON

        cambiar(data, checker); // Cambiar el idioma con los datos obtenidos
    } catch (error) {
        alert('Error al obtener los datos del JSON:', error); // Manejo de errores
    }
}

// // Función para cambiar el idioma
function cambiar(data, checker) {
    if (checker) {
        pFooter.textContent = data[0].index.footer;
        tituloContacto.textContent = data[0].contacto.tituloPrincipalContacto;
        btnContactoClick.textContent = data[0].contacto.buttonClick;
        inputBtnClick.placeholder = data[0].contacto.inputClick;
        inputNombre.placeholder = data[0].contacto.inputNombre;
        inputCorreo.placeholder = data[0].contacto.inputCorreo;
        inputContraseña.placeholder = data[0].contacto.inputContraseña;
        buttonIngresar.value = data[0].contacto.buttonIngresar;
        buttonContactoNav.textContent = data[0].index.btnInicio;
        buttonResponsiveNav.textContent = data[0].index.btnResponsive;
        buttonNavNav.textContent = data[0].index.btnNav;
    } else {
        pFooter.textContent;
        tituloContacto.textContent;
        btnContactoClick.textContent;
        inputBtnClick.placeholder;
        inputNombre.placeholder;
        inputCorreo.placeholder;
        inputContraseña.placeholder;
        buttonIngresar.value;
        buttonContactoNav.textContent;
        buttonNavNav.textContent;
        buttonResponsiveNav.textContent;
    }
}

// funcion para recuperar infoDark de localStorage
function recuperarInfoDePreferences() {
    const infoDelDark = JSON.parse(localStorage.getItem('infoDark'));
    const infoDelLenguaje = JSON.parse(localStorage.getItem('infoLeng'));
    let checker = infoDelLenguaje.isCheckedLenguaje;
    obtenerJson(checker);
    if (infoDelDark !== '') {
        let dark = infoDelDark.darkie;
        let check = infoDelDark.isChecked;
        if (check == true) {
            document.documentElement.classList.toggle(dark);
        }
    }
}

// evento para input correo y contraseña
inputCorreo.addEventListener('input', function () {
    // Uso de un operador ternario para habilitar/deshabilitar el input de contraseña
    inputContraseña.disabled = inputCorreo.value === '' ? true : false;
});

inputBurger.addEventListener('change', () => {
    if (inputBurger.checked) {
        mainElement.classList.add('hidden');
    } else {
        mainElement.classList.remove('hidden');
    }
});

recuperarInfoDePreferences();

// obtenerJson();

// Llamar a la función para cargar el estado al iniciar la página
// cargarEstadoDeLenguaje();
// obtener(); // Llamamos obtener inicialmente para ajustar el texto según el estado actual del checkbox
