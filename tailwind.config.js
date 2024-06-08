const flowbite = require("flowbite-react/tailwind");

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */module.exports = {
    content: [
        // "./node_modules/flowbite-react/lib/**/*.js",
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "./public/**/*.html",
        flowbite.content(),

    ],
    theme: {
        extend: {
            colors: {
                'sunny': "#FDB813",
                'cropy': "#38785F",
            },
            // fontFamily: {
            //   sans: ['Graphik', 'sans-serif'],
            //   serif: ['Merriweather', 'serif'],
            // },
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
    plugins: [flowbite.plugin(),
    ],
}