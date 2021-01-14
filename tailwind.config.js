module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#2c2c33',
      blue: {
        dark: '#2424ed',
        darker: '#5d5db2',
        DEFAULT: '#3333c3',
        light: '#e8e8ff',
        lighter: '#8f8fe8',
        lightest: '#6e6eff',
      },
      gray: '#e2e0e0',
      white: '#fff',
    },
    fontFamily: {
      sans: ['Noto Sans JP', 'sans-serif'],
      english: ['Montserrat', 'sans-serif'],
    },
    extend: {
      width: {
        container: '85vw',
        'over-5': 'calc(100% + 5px)',
        'over-10': 'calc(100% + 10px)',
        'over-20': 'calc(100% + 20px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
