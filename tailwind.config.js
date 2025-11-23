/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
    },
  },
 plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.fade-scroll': {
          opacity: '0',
          transform: 'translateY(1rem)',
          transition: 'all 0.7s ease-in-out',
        },
        '.fade-scroll-active': {
          opacity: '1',
          transform: 'translateY(0)',
        }
      });
    }
  ],
};
