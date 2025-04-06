import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'

import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    expressiveCode({
      // themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black',
        },
        uiFontFamily: 'inherit',
        borderColor: 'black',
      },
    }),
    mdx(),
  ],
  site: 'https://neobrutalism-blog.netlify.app/',
  vite: {
    plugins: [tailwindcss()],
  },
})
