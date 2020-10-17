/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    screens: {
      sm: '440px',
      // => @media (min-width: 440px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.5rem',
      lx: '1rem',
      full: '50%'
    },
    fontFamily: {
      niramit: 'Niramit, Helvetica, Arial, sans-serif',
      opsans: 'Open Sans, Helvetica, Arial, sans-serif'
    },
    maxWidth: {
      content: 'max-content'
    }
  },
  variants: {
    backgroundColor: [
      'responsive',
      'first',
      'last',
      'even',
      'odd',
      'hover',
      'focus'
    ]
  },
  plugins: []
}
