const pFooter = document.querySelector('#footerP');
const tituloPrincipalDiseño = document.querySelector('#tituloPrincipalDiseño');
const h2Responsive = document.querySelector('#h2Responsive');
const pResponsive = document.querySelector('#pResponsive');
const wallBasis = document.querySelector('#wallBasis');
const collageBasis = document.querySelector('#collageBasis');
const layoutGrid = document.querySelector('#layoutGrid');
const collageGrid = document.querySelector('#collageGrid');
// ENLACES A LOS BOTONES DE NAVEGACION Y NAVEGACION RESPONSIVE (PARA CAMBIOS DE ESTADO POR IDIOMA)
const buttonContactoNav = document.querySelector('#btnContactoNav');
const buttonResponsiveNav = document.querySelector('#btnResposiveNav');
const buttonNavNav = document.querySelector('#btnNavNav');

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
        tituloPrincipalDiseño.textContent = data[0].responsivo.tituloPrincipalDiseño;
        h2Responsive.textContent = data[0].responsivo.h2Responsive;
        pResponsive.textContent = data[0].responsivo.pResponsive;
        wallBasis.textContent = data[0].responsivo.wallBasis;
        collageBasis.textContent = data[0].responsivo.collageBasis;
        layoutGrid.textContent = data[0].responsivo.layoutGrid;
        collageGrid.textContent = data[0].responsivo.collageGrid;
        buttonContactoNav.textContent = data[0].index.btnContacto;
        buttonNavNav.textContent = data[0].index.btnNav;
        buttonResponsiveNav.textContent = data[0].index.btnInicio;
    } else {
        pFooter.textContent;
        tituloPrincipalDiseño.textContent;
        h2Responsive.textContent;
        pResponsive.textContent;
        wallBasis.textContent;
        collageBasis.textContent;
        layoutGrid.textContent;
        collageGrid.textContent;
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

inputBurger.addEventListener('change', () => {
    if (inputBurger.checked) {
        mainElement.classList.add('hidden');
    } else {
        mainElement.classList.remove('hidden');
    }
});

recuperarInfoDePreferences();
