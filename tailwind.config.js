/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                fucsiaCool: '#4a044e',
            },
            spacing: {
                42: '170px',
                50: '200px',
                100: '400px',
            },
        },
    },
    plugins: [],
};
