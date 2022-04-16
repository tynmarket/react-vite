module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        finder: {
          "--width-global": "960px",
          // primary: "#e24524"と.bg-primaryの場合#e24524にならない
          "--color-primary": "#e24524",
          "--border-color-gray": "#e0e0e7",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
