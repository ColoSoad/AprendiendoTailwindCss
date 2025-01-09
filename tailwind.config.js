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
            animation: {
                bg: 'bg 5s linear infinite',
            },
            keyframes: {
                bg: {
                    '100%': {
                        filter: 'hue-rotate(360deg)',
                    },
                },
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
                '.text-shadow': {
                    textShadow: `
                        0 0 1px #c058dd,
                        0 0 50px #f33095,
                        0 0 0px #8b5cf6,
                        0 0 50px #8b5cf6`,
                },
                '.text-shadow-cyan': {
                    textShadow: `
                        0 0 1px cyan,
                        0 0 20px cyan,
                        0 0 20px cyan,
                        0 0 20px cyan`,
                },
                '.btn-shadow': {
                    boxShadow: `
                        0 0 0px #c058dd,
                        0 0 50px #f33095,
                        0 0 0px #8b5cf6,
                        0 0 0px #8b5cf6`,
                },
                '.btn-shadow-white': {
                    boxShadow: `
                        0 0 0px #fff,
                        0 0 50px #fff,
                        0 0 0px #fff,
                        0 0 0px #fff`,
                },
                '.btn-shadow-blue': {
                    boxShadow: `
                        0 0 0px #5f89ae,
                        0 0 50px #5f89ae,
                        0 0 0px #5f89ae,
                        0 0 0px #5f89ae`,
                },
                '.btn-shadow-black': {
                    boxShadow: `
                        0 0 0px #000,
                        0 0 50px #000,
                        0 0 0px #000,
                        0 0 0px #000`,
                },
            });
        },
    ],
};
