/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				sm: '640px',  // Custom small container size
				md: '768px',  // Custom medium container size
				lg: '1024px',  // Custom large container size
				xl: '1280px', // Custom extra-large container size
				'2xl': '1536px' // Custom 2xl container size
			}
		}
	},
	plugins: []
}
