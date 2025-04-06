/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        lightMode: {
          css: {
            '--tw-prose-quote-borders': theme('colors.foreground'),
            '--tw-prose-bullets': theme('colors.foreground'),
            '--tw-prose-code': theme('colors.main-foreground'),
          },
        },
        darkMode: {
          css: {
            '--tw-prose-quote-borders': theme('colors.foreground'),
            '--tw-prose-bullets': theme('colors.foreground'),
            '--tw-prose-code': theme('colors.main-foreground'),
          },
        },
      }),
    },
  },
}
