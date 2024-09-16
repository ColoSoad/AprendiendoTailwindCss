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
            screens: {
                smartphone: '390px',
                smartphoneRotate: '500px',
                tablet: '640px',
                fhd: '1280px',
                dosK: '1440px',
            },
        },
    },
    plugins: [],
};
