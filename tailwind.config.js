/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "New-ContactInfo": 'repeat(auto-fit , minmax(260px , 1fr))'
            }
        },
    },
    plugins: [],
};