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
        'marquee': 'marquee 45s linear infinite',
        'scan': 'scan 4.8s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'evidence': 'evidence 4.8s ease-out infinite',
        'evidence-hit': 'evidenceHit 4.8s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
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
        // SEOLens showcase: the beam wrapper is as tall as the page mock, so 0→100% sweeps it top to bottom.
        scan: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '6%': { opacity: '1' },
          '88%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        // Each chip/element runs these with a delay matching its height on the page, so it fires as the beam
        // reaches it. Base styles stay visible, so reduced-motion users (animations disabled) see the final state.
        evidence: {
          '0%': { opacity: '0', transform: 'translateX(-10px) scale(0.9)' },
          '7%, 70%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          '84%, 100%': { opacity: '0', transform: 'translateX(0) scale(1)' },
        },
        evidenceHit: {
          '0%': { boxShadow: '0 0 0 1px rgba(236,72,153,0.9), 0 0 22px rgba(236,72,153,0.45)' },
          '22%, 100%': { boxShadow: '0 0 0 1px rgba(255,255,255,0), 0 0 0 rgba(236,72,153,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // The track holds two copies of the list, so sliding by half loops seamlessly.
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
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
