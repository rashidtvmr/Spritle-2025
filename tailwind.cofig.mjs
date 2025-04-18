
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				primary: '10px',
				secondary: '20px',
			},
			animation: {
				'moving-line': 'scrolling 2s linear infinite',
			},
			keyframes: {
				scrolling: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '1rem',
				lg: '3.5rem',
				xl: '4rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1736px',
			}
		},
	},
	plugins: [require('@tailwindcss/forms'),],
};