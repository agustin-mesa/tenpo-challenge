/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				v1: {
					neutral: {
						50: '#f6f6f6',
						100: '#e7e7e7',
						200: '#d1d1d1',
						300: '#b0b0b0',
						400: '#888888',
						500: '#6d6d6d',
						600: '#5d5d5d',
						700: '#4f4f4f',
						800: '#454545',
						900: '#3d3d3d',
						950: '#000000'
					},
					primary: {
						50: '#edfff7',
						100: '#d5ffee',
						200: '#aeffdd',
						300: '#70ffc4',
						400: '#2bfda4',
						500: '#03ff94', // Main
						600: '#00c06a',
						700: '#009656',
						800: '#067547',
						900: '#07603c',
						950: '#003720'
					}
				}
			}
		}
	},
	plugins: []
};
