const icono = document.querySelector('#icono');
const icon = document.querySelector('#icon');
const close = `<i class="fa-solid fa-close text-4xl absolute left-[20px] cursor-pointer top-5 text-[#161D2D]" id="icono"></i>`;

icono.addEventListener('change', (event) => {
    if (icon.checked) {
        icono.innerHTML = close;
    }
});
