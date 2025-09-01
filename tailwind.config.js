/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5'
        },
        accent: {
          DEFAULT: '#06b6d4',
          light: '#67e8f9',
          dark: '#0891b2'
        },
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        'card-bg': 'var(--card-bg)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border-color': 'var(--border-color)',
        'dark-bg': 'var(--dark-bg)',
        'darker-bg': 'var(--darker-bg)'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
      borderRadius: {
        'lg-custom': '12px',
        'xl-custom': '16px'
      },
      boxShadow: {
        'custom-sm': 'var(--shadow-sm)',
        'custom-md': 'var(--shadow-md)',
        'custom-lg': 'var(--shadow-lg)',
        'glow-green': '0 0 8px rgba(16, 185, 129, 0.3)',
        'glow-red': '0 0 8px rgba(239, 68, 68, 0.3)',
        'glow-yellow': '0 0 8px rgba(245, 158, 11, 0.3)'
      },
      backdropBlur: {
        '20': '20px'
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        slideUp: {
          from: {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
}
