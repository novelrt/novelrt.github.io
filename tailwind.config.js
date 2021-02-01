module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["Optimus Princeps", "serif"]
      },
      spacing: {
        "88": "22rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
