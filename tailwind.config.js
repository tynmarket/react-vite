module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        finder: {
          "--width-global": "960px",
          "--width-page": "1072px",
          "--width-page-content": "864px",
          // primary: "#e24524"と.bg-primaryの場合#e24524にならない
          "--color-black": "#313138",
          "--color-primary": "#e24524",
          "--color-page-gray": "#9a9aa1",
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
