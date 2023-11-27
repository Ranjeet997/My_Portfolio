/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bFont: ["Poppins", "sans-serif"],    // Body font
        tFont: ["Montserrat", "sans-serif"]  // text font
      },
      colors: {
        bColor: "#191919",                      // body color
        bColorL: "#ffff",                      // body color in light mode
        // tColor: "rgba(255, 255, 255, 0.85)",    // text color in dark mode
        tColor: "rgba(0, 0, 0, 0.9)",    // text color in light mode
        dColor: "#edff20",                      // design color
        tRoundBg: "linear-gradient(135deg, rgba(120, 204, 109, .15) 0%, rgba(120, 204, 109, 1%) 100%"             // title color
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          }
        }
      },
      boxShadow:{
        gShadow: "0px 0px 188px -14px rgba(237, 255, 32, 1)",
        tShadow: "11px 0px 123px rgba(0, 0, 0, 1)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
