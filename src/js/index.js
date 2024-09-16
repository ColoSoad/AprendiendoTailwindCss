const darkModeInput = document.querySelector('#darkMode');
const labelDarkMode = document.querySelector('#label_darkMode');

darkModeInput.addEventListener('change', (event) => {
    document.documentElement.classList.toggle('dark');
    let checked = event.target.checked;
    if (checked == true) {
        labelDarkMode.innerHTML = `<i class="fa-solid fa-sun text-3xl cursor-pointer" style="color: #FFD43B;"></i>`;
    } else {
        labelDarkMode.innerHTML = `<i class="fa-solid fa-moon text-3xl cursor-pointer"></i>`;
    }
});
