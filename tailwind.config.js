module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        finder: {
          primary: "#e24524",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
