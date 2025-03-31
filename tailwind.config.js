/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#8338ec",
                secondary: "#ff6b6b", // Example secondary color, you can change it
            },
        },
    },
    plugins: [],
};