/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        carbon: '#111111',
        graphite: '#1a1a1a',
        steel: '#2a2a2a',
        smoke: '#888',
        silver: '#aaa',
        cream: '#f0ede8',
        amber: '#e8a020',
        'amber-dim': '#a06c10',
        red: '#c0281a',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      },
      clipPath: {
        btn: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease 0.3s forwards',
        fadeInDelay: 'fadeIn 1s ease 1.2s forwards',
        slideUp: 'slideUp 0.9s ease 0.6s forwards',
        pulse2: 'pulse2 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { to: { opacity: '1' } },
        slideUp: { to: { opacity: '1', transform: 'translateY(0)' } },
        pulse2: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.08)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
