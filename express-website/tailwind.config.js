/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      animation: {
        popAndFade: 'popAndFade 3s infinite',
      },
      keyframes: {
        popAndFade: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(4)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}

