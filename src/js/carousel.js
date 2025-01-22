const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const slide3 = document.querySelector('.slide3');

const sliderInner = document.querySelector('.sliderInner');
const indicators = document.querySelectorAll('.indicator');
const indicatorsColorsActive = ['bg-gradient-to-br', 'from-[#c058dd]', 'via-[#f33095]', 'to-[#8b5cf6]', 'animate-bg'];
const indicatorsColorsInactive = 'bg-gray-400';
const slides = sliderInner.querySelectorAll('.divSliders');
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
        indicator.classList.remove(...indicatorsColorsActive);
        if (index === currentIndex) {
            indicator.classList.add(...indicatorsColorsActive); // Indicador activo
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
    }, 5000);
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

// redireccionar cada slides
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
