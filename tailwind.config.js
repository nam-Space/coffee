/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                superSm: "350px",
                xs: "480px",
            },
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            colors: {
                coffee: {
                    50: "#e8d6d0",
                    200: "#c89f94",
                    400: "#a25f4b",
                    600: "#744838",
                },
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-100%)", opacity: 0.4 },
                    "100%": { transform: "translateY(0%)", opacity: 1 },
                },
                fadeIn: {
                    from: {
                        opacity: 0,
                        bottom: "6px",
                    },
                    to: {
                        opacity: 1,
                        bottom: "16px",
                    },
                },
            },
            animation: {
                slideDown: "slideDown 0.8s ease-in-out",
                fadeIn: "fadeIn 0.4s ease-in-out",
            },
            backgroundImage: {
                "slider-bg": "url('/src/img/background.jpg')",
            },
        },
    },
    plugins: [],
};
