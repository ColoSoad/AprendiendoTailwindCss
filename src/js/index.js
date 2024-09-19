const darkModeInput = document.querySelector('#darkMode');
const labelDarkMode = document.querySelector('#label_darkMode');
const darkie = 'dark';

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
            labelDarkMode.innerHTML = `<i class="fa-solid fa-sun text-3xl cursor-pointer" style="color: #FFD43B;"></i>`;
        } else {
            darkModeInput.checked = false;
            labelDarkMode.innerHTML = `<i class="fa-solid fa-moon text-3xl cursor-pointer"></i>`;
        }
    }
}

// Cargar el estado de dark mode al iniciar la página
cargarInfoDeDarkMode();

// Escuchar los cambios en el checkbox
darkModeInput.addEventListener('change', (event) => {
    document.documentElement.classList.toggle(darkie); // Para colocar o quitar la clase 'dark'

    if (darkModeInput.checked) {
        labelDarkMode.innerHTML = `<i class="fa-solid fa-sun text-3xl cursor-pointer" style="color: #FFD43B;"></i>`;
    } else {
        labelDarkMode.innerHTML = `<i class="fa-solid fa-moon text-3xl cursor-pointer"></i>`;
    }

    // Guardar el estado actual en localStorage
    guardarInfoDeDarkMode(darkie, darkModeInput.checked);
});
