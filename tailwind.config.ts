/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
      },
    },
  },
  safelist: [
    {
      pattern: /text-(red|green|blue|yellow|purple|pink|teal)-400/,
    },
    {
      pattern: /ring-(red|green|blue|yellow|purple|pink|teal)-400/,
    },
  ],
  plugins: [],
};

export {};
