/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': '570px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
        },
        extend: {
            gridTemplateColumns: {
                "New-inputs": 'repeat(auto-fit , minmax(px , 1fr))',
            },

        },
    },
    plugins: [],
};