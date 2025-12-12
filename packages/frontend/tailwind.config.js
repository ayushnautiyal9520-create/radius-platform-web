/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dynamic CSS variables for theming (RGB format)
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        accent: 'rgb(var(--accent))',
        background: 'rgb(var(--background))',
        surface: 'rgb(var(--surface))',
        'surface-hover': 'rgb(var(--surface-hover))',
        text: 'rgb(var(--text))',
        'text-secondary': 'rgb(var(--text-secondary))',
        border: 'rgb(var(--border))',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
