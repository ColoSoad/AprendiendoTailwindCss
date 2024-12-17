const buttons = document.querySelectorAll('.nav-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => btn.classList.remove('navbarHidden:bg-slate-500'));
        button.classList.add('navbarHidden:focus:bg-slate-500');
    });
});
