const darkModeInput = document.querySelector('#darkMode');
const labelDarkMode = document.querySelector('#label_darkMode');
const darkie = 'dark';

function guardarInfoDeDarkMode(darkie) {
    const infoDark = {
        darkie: darkie,
    };
    localStorage.setItem('infoDark', JSON.stringify(infoDark));
}

darkModeInput.addEventListener('change', (event) => {
    document.documentElement.classList.toggle(darkie);
    let checked = event.target.checked;
    if (checked == true) {
        labelDarkMode.innerHTML = `<i class="fa-solid fa-sun text-3xl cursor-pointer" style="color: #FFD43B;"></i>`;
        guardarInfoDeDarkMode(darkie);
    } else {
        labelDarkMode.innerHTML = `<i class="fa-solid fa-moon text-3xl cursor-pointer"></i>`;
        localStorage.removeItem('infoDark');
    }
});
