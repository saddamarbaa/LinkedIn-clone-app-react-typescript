/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				customBlack: {
					50: '#F5F8FA', // Very light gray
					100: '#EBF2F5', // Lighter gray
					200: '#DDE8ED', // Light gray
					300: '#C9D9E1', // Soft gray-blue
					400: '#AEBCC5', // Grayish-blue
					500: '#8F9EA7', // Muted blue-gray
					600: '#6F7E87', // Soft medium gray-blue
					700: '#37404A', // Dark gray with a slight blue tint (for dark theme)
					800: '#2A2E35', // Darker gray with a blue hint (for dark theme)
					900: '#1C1F24', // Deep gray (for dark theme background)
				},
				customWhite: {
					40: '#f3f2ef',
					50: '#FDFDFD', // Almost white (for light theme background)
					100: '#F5F5F5', // Soft gray (for light theme)
					200: '#E8E8E8', // Lighter gray
					300: '#E5E5E5', // Light gray (for light theme)
					400: '#CECECE', // Medium gray
					500: '#BEBEBE', // Slightly darker gray
					600: '#ACACAC', // Gray for borders
					700: '#979797', // Text gray
					800: '#7D7D7D', // Dark gray for subtle contrasts
					900: '#FFFFFF', // White (default white for text or elements)
				},
				customBlue: {
					200: '#58A6D7',
					300: '#3297D3',
					400: '#1A87CF',
					500: '#0073B1',
					600: '#006095',
					700: '#004F7A',
					800: '#003D5F',
					900: '#002C45',
					950: '#0066c0',
				},
				customGray: {
					500: '#707070',
				},
				twitterBlack: '#14171A',
				twitterWhite: '#F5F8FA',
			},
			screens: {
				ss: '300px',
				xs: '320px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		maxWidth: ({ theme, breakpoints }) => ({
			none: 'none',
			0: '0rem',
			ss: '19rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			'8xl': '90rem',
			'9xl': '95rem',
			'10xl': '100rem',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
			prose: '65ch',
			...breakpoints(theme('screens')),
		}),
	},
	variants: {
		lineClamp: ['responsive'],
	},
	plugins: [],
	mode: 'jit',
	darkMode: 'class',
}
