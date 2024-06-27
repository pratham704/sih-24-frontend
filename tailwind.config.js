/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3490dc', // Define your custom primary color
                // secondary: '#ffed4a', // Define your custom secondary color
                'primary-foreground': '#ffffff', // Define your custom primary foreground color
                accent: '#38b2ac', // Define your custom accent color
                'accent-foreground': '#1a202c', // Define your custom accent foreground color
                background: '#f7fafc', // Define your custom background color
                muted: '#e2e8f0', // Define your custom muted color
                'muted-foreground': '#718096', // Define your custom muted foreground color
            },
        },
    },
    plugins: [],
};