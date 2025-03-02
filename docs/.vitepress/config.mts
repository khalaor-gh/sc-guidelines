import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Security Corps Guidelines",
  description: "Guidelines",

  cleanUrls: true,
  lastUpdated: true,

  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
    ]
  ],

  themeConfig: {
    siteTitle: 'SC Guidelines',
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guidelines', link: '/guidelines' }
    ],

    sidebar: [
      {
        text: 'Security Corps',
        items: [
          { text: 'Overview', link: '/guidelines' },
          { text: 'Regulations', link: '/sc/regulations' },
          { text: 'Honor', link: '/sc/honor-system' },
          { text: 'Protocols', link: '/sc/protocols' },
          { 
            text: 'Locations', 
            link: '/sc/locations',
            items: [
              { text: 'Test Subject Zone', link: '/sc/locations/tsz' },
              { text: 'Main Encampment', link: '/sc/locations/me' },
              { text: 'Entity Area', link: '/sc/locations/ea' },
              { text: 'Forward Operating Base', link: '/sc/locations/fob' },
              { text: 'Serpent Research', link: '/sc/locations/sr' },
              { text: 'Solar Panels', link: '/sc/locations/sp' },
            ]
          },
        ]
      },
      {
        text: 'Main Force',
        items: [
          { text: 'Information', link: '/mf/' },
        ]
      },
      {
        text: 'Iron Fist',
        items: [
          { text: 'Information', link: '/if/' },
        ]
      },
      {
        text: 'The Armed Gentlemen',
        items: [
          { text: 'Information', link: '/tag/' },
        ]
      },
      {
        text: 'The Crazies',
        items: [
          { text: 'Information', link: '/tc/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'discord', link: 'https://discord.gg/xXJgeEs6ND'}
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Property of the Security Corps, part of the Nova Corporation',
    },
  }
})
