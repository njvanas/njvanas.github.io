module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cyber': {
          'primary': '#00d4ff',
          'secondary': '#0099cc',
          'accent': '#ff6b35',
          'success': '#00ff88',
          'warning': '#ffaa00',
          'error': '#ff4757',
          'dark': '#0a0e27',
          'darker': '#050814',
          'light': '#1a1f3a',
          'lighter': '#2d3561',
          'text': '#e2e8f0',
          'text-muted': '#94a3b8',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      backdropBlur: {
        'xs': '2px',
      },
      maxWidth: {
        '66ch': '66ch',
      },
      lineHeight: {
        'relaxed': '1.6',
      }
    },
  },
  plugins: [],
};