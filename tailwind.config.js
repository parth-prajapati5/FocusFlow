/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: "#F7F7F2",
          white: "#FFFFFF",
          black: "#151515",
          stone: "#E9E9E1",
          border: "#E2E2D8",
          borderDark: "#D8D8CE",
          charcoal: "#52524E",
          slate: "#74746E",
          lime: "#C7F36B",
          limeHover: "#B8E855",
          green: "#8FBF3F",
          greenDark: "#4B6700",
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xs': '2px',
      }
    }
  },
  plugins: [],
}
