module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        figtree: ['var(--font-figtree)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        lightgray: {
          100: '#B3B3B3'
        },
        darkgray: {
          100: '#808080'
        },
        lightgold: {
          100: '#E4C798',
          200: '#D9B880'
        },
        blues: {
          100: '#2A304B'
        }
      }
    },
  },
};
