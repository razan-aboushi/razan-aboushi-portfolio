/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Wide enough for the hero's code/terminal windows to sit beside the name without overlapping it.
        desk: '1440px',
      },
      colors: {
        primary: '#8b5cf6',
        secondary: '#ec4899',
        accent: '#06b6d4',
        navy: '#0f172a',
      },
      animation: {
        'particle-drift': 'particleDrift 18s linear infinite',
        'glow-breathe': 'glowBreathe 5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 12s ease-in-out infinite',
        'aurora': 'aurora 18s ease-in-out infinite alternate',
      },
      keyframes: {
        particleDrift: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(var(--drift-x, 0px), -110vh)', opacity: '0' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Transform-only so the drifting background blobs stay on the compositor (no repaints).
        aurora: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(6%, -4%, 0) scale(1.08)' },
          '100%': { transform: 'translate3d(-5%, 5%, 0) scale(0.96)' },
        },
      },
    },
  },
  plugins: [],
}
