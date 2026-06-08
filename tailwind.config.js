/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        mml: {
          navy: '#0F1B2D',
          'navy-mid': '#1A2B42',
          'navy-light': '#243450',
          'navy-card': '#1E2F47',
          teal: '#7DD3E8',
          'teal-dark': '#4BA8C4',
          'teal-light': '#B5E8F4',
          text: '#F0F6FF',
          'text-secondary': '#94A3B8',
          muted: '#64748B',
          yellow: '#FCD34D',
          green: '#4ADE80',
          purple: '#A78BFA',
          red: '#F87171',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-serif)', 'DM Serif Display', 'Georgia', 'serif'],
        mono: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        mml: '16px',
        'mml-sm': '10px',
        'mml-xs': '6px',
      },
      boxShadow: {
        mml: '0 4px 24px rgba(0,0,0,0.3)',
        teal: '0 0 30px rgba(125, 211, 232, 0.28)',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        ppUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'none' },
        },
        libRise: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease both',
        'scale-in': 'scaleIn 0.4s ease both',
        'pp-up': 'ppUp 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'lib-rise': 'libRise 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up': 'fadeUp 0.5s ease both',
      },
    },
  },
  plugins: [],
}
