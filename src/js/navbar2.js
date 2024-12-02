const openModal = document.querySelector('#btnOpenModal');
const closeModal = document.querySelector('#btnCloseModal');
const modal = document.querySelector('#modal');

const svg = document.querySelector('#svg');
const svgTrue = ``;
const svgFalse = `<svg viewBox="0 0 32 32" class="navbarHidden:hidden h-12 cursor-pointer stroke-slate-500 transition-transform duration-700 peer-checked:-rotate-45" id="svg">
                  <path
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    class="line-top-bottom fill-none stroke-[linecap:round] stroke-[linejoin:round] stroke-2 transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] timing-function stroke-dasharray-12-63 peer-checked:stroke-dasharray-20-300 peer-checked:stroke-dashoffset--32"
                  ></path>
                  <path d="M7 16 27 16" class="line fill-none stroke-[linecap:round] stroke-[linejoin:round] stroke-2 transition duration-[600ms] timing-function"></path>
                </svg>`;
const dialogHtml = `<svg viewBox="0 0 32 32" class="navbarHidden:hidden checked:-rotate-45" id="svg">
                  <path
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    class="line line-top-bottom"
                  ></path>
                  <path d="M7 16 27 16" class="line"></path>
                </svg>`;

//FN PARA ESTADO DE CHECK
function check(checked) {
    if (checked) {
        svg.innerHTML = svgTrue;
    } else {
        svg.innerHTML = svgFalse;
    }
}
openModal.addEventListener('click', () => {
    if (openModal.checked) {
        modal.showModal();
    } else {
        modal.close();
    }

    // check(openModal.checked);
});
closeModal.addEventListener('click', () => {
    modal.close();
    openModal.checked = false;
    // check(openModal.checked);
});

// tratar de poner el svg transformado dentro del modal para que cierre el mismo
