/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: { "awesome-color": "#7DD3FC" },
      spacing: {
        "sign-height": "35rem",
        "sign-width": "30rem",
        "login-height":"25rem",
        "login-width":"30rem",
      },
    },
    backgroundImage: {
      'backg-home': "url('./assets/fondo2.jpg')",
    },
  },
  plugins: [],
};


