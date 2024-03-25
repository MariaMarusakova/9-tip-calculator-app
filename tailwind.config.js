/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'very-dark-cyan': 'hsl(183, 100%, 15%)',
    'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
    'grayish-cyan': 'hsl(184, 14%, 56%)',
    'light-grayish-cyan': 'hsl(185, 41%, 84%)',
    'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
    'white': 'hsl(0, 0%, 100%)',
    'strong-cyan': 'hsl(172, 67%, 45%)',
  },
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
