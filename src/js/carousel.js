const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
const slide3 = document.querySelector('#slide3');
let sliderInner = document.querySelector('.sliderInner');
// sliderInner.style.transform = 'translateX(-100%)';
let inicio = 1;
let imagenes = sliderInner.querySelectorAll('img');

setInterval(function () {
    let porcentaje = inicio * -100;
    sliderInner.style.transform = 'translateX(' + porcentaje + '%)';
    inicio++;
    if (inicio > imagenes.length - 1) {
        inicio = 0;
    }
}, 3000);

slide1.addEventListener('click', (e) => {
    location.href = 'pages/contacto.html';
});
slide2.addEventListener('click', (e) => {
    location.href = 'pages/responsive.html';
});
slide3.addEventListener('click', (e) => {
    location.href = 'pages/navbar.html';
});
