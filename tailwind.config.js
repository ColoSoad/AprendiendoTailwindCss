/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                ladrillo: '#D26932',
                cemento: '#482A14',
                fucsiaCool: '#4a044e',
                azulFb: '#3B5998',
                insta: '#CE097B',
                insta2: '#FACD24',
                linkaBg: '#306CB2',
                linka: '#080808',
            },
            spacing: {
                42: '170px',
                50: '200px',
                100: '400px',
                125: '500px',
                150: '600px',
                200: '800px',
            },
            width: {
                42: '170px',
                50: '200px',
                100: '400px',
                125: '500px',
                134: '535px',
                150: '600px',
                200: '800px',
            },
            height: {
                calc: 'calc(100vh - 80px)',
            },
            screens: {
                smartphone: '390px',
                smartphoneRotate: '500px',
                navbarHidden: '535px',
                tablet: '640px',
                tabletXL: '900px',
                fhd: '1280px',
                dosK: '1440px',
            },
            backdropBlur: {
                back: '5px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.stroke-dasharray-12-63': { 'stroke-dasharray': '12 63' },
                '.stroke-dasharray-20-300': { 'stroke-dasharray': '20 300' },
                '.stroke-dashoffset--32.42': { 'stroke-dashoffset': '-32.42' },
                '.stroke-linecap': { 'stroke-linecap': 'round' },
                '.stroke-linejoin': { 'stroke-linejoin': 'round' },
            });
        },
    ],
};
