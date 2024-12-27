// let sliderInner = document.querySelector('.sliderInner');
// let inicio = 1;
// let imagenes = sliderInner.querySelectorAll('img');

// setInterval(function () {
//     let porcentaje = inicio * -100;
//     sliderInner.style.transform = 'translateX(' + porcentaje + '%)';
//     inicio++;
//     if (inicio > imagenes.length - 1) {
//         inicio = 0;
//     }
// }, 3000);

// const sliderInner = document.querySelector('.sliderInner');
// const indicators = document.querySelectorAll('.indicator');
// const slides = sliderInner.querySelectorAll('img');
// let currentIndex = 0;
// let autoSlideInterval;

// // Función para cambiar slide
// function goToSlide(index) {
//     currentIndex = index;
//     const offset = currentIndex * -100;
//     sliderInner.style.transform = `translateX(${offset}%)`;
//     updateIndicators();
// }

// // Actualizar indicadores
// function updateIndicators() {
//     indicators.forEach((indicator, index) => {
//         indicator.classList.remove('bg-gray-400', 'bg-blue-500');
//         if (index === currentIndex) {
//             indicator.classList.add('bg-blue-500'); // Cambia el color del indicador activo
//         } else {
//             indicator.classList.add('bg-gray-400');
//         }
//     });
// }

// // Auto-slide
// function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % slides.length;
//         goToSlide(currentIndex);
//     }, 3000);
// }

// // Detener auto-slide temporalmente
// function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
// }

// // Inicializar eventos en los indicadores
// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         stopAutoSlide();
//         goToSlide(index);
//         setTimeout(startAutoSlide, 3000); // Reiniciar auto-slide después de 3s
//     });
// });

// // Iniciar auto-slide al cargar
// startAutoSlide();
// updateIndicators();

const slide1 = document.querySelector('#slide1');
const slide2 = document.querySelector('#slide2');
const slide3 = document.querySelector('#slide3');
const sliderInner = document.querySelector('.sliderInner');
const indicators = document.querySelectorAll('.indicator');
const slides = sliderInner.querySelectorAll('img');
let currentIndex = 0;
let autoSlideInterval;

// Función para cambiar al slide correspondiente
function goToSlide(index) {
    currentIndex = index;
    const offset = currentIndex * -100;
    sliderInner.style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

// Actualizar indicadores visualmente
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('bg-[#8b5cf6]', 'bg-gray-400');
        if (index === currentIndex) {
            indicator.classList.add('bg-[#8b5cf6]'); // Indicador activo
        } else {
            indicator.classList.add('bg-gray-400');
        }
    });
}

// Auto-slide
function startAutoSlide() {
    stopAutoSlide(); // Detiene cualquier intervalo activo
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }, 3000);
}

// Detener el auto-slide
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Configurar eventos para los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopAutoSlide(); // Detiene el auto-slide
        goToSlide(index); // Cambia al slide seleccionado
        setTimeout(startAutoSlide, 900); // Reinicia auto-slide después de 9ms
    });
});

slide1.addEventListener('click', (e) => {
    location.href = 'pages/contacto.html';
});
slide2.addEventListener('click', (e) => {
    location.href = 'pages/responsive.html';
});
slide3.addEventListener('click', (e) => {
    location.href = 'pages/navbar.html';
});

// Inicializar el auto-slide
startAutoSlide();
updateIndicators();
