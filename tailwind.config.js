/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				bodyFont: ["Poppins", "sans-serif"],
				titleFont: ["Montserrat", "sans-serif"],
			},
			colors: {
				bodyColor: "#212428",
				lightText: "#c4cfde",
				boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
				designColor: "#ff014f",
			},
			boxShadow: {
				shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
}
