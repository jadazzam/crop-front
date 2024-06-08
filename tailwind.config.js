const flowbite = require('flowbite-react/tailwind');

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */module.exports = {
  content: [
    // "./node_modules/flowbite-react/lib/**/*.js",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    flowbite.content()

  ],
  theme: {
    extend: {
      colors: {
        'sunny': '#FDB813',
        'cropy': '#38785F'

      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem' }],
        'h2': ['1.875rem', { lineHeight: '2.25rem' }],
        'h3': ['1.5rem', { lineHeight: '2rem' }]
      }

      // extend: {
      //   spacing: {
      //     '128': '32rem',
      //     '144': '36rem',
      //   },
      //   borderRadius: {
      //     '4xl': '2rem',
      //   }
      // }
    }
  },
  plugins: [flowbite.plugin()
  ]
};