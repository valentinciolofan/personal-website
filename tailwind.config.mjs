/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			 backgroundImage: {
        		'custom-gradient': 'linear-gradient(to right, #121212, #121212)',
     		 },
			 backgroundColor: {
				'about-me': '#121212',
				'light-dark': '#1E1E1F',
			 }

		},
	},
	plugins: [require("daisyui")],
}

