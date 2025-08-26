import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs

export default defineConfig({
  base: '/',
  title: 'My Docs',
  description: 'VitePress on GitHub Pages',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Shopify', link: '/shopify/shopifyIndex' },
      // { text: 'Reference', link: '/reference/' }, // add later
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/shopify/shopifyIndex' },
          // { text: 'Project Structure', link: '/guide/structure' },
        ]
      },
      // {
      //   text: 'Reference',
      //   items: [{ text: 'CLI', link: '/reference/cli' }]
      // }
    ],

    // nice-to-haves you can toggle on later:
    // socialLinks: [{ icon: 'github', link: 'https://github.com/<you>/<repo>' }],
    // editLink: { pattern: 'https://github.com/<you>/<repo>/edit/main/docs/:path' },
    // lastUpdated: true
  }
})