export default {
    //description meta tag for the site
    title: 'Cube Press',
    description: "IOT Cube Documentation",
    themeConfig: {
        logo: '/logo.png',
        search: false,
        searchMaxSuggestions: 10,
        footer: {
            message: '',
            copyright: 'Copyright © 2022-present Links Field Networks'
          },
        nav: [
            { text: '🏠 Home', link: '/'},
            { text: 'Cube', link: 'https://beta.iotcube.link'},
            { text: 'About Links Field', link: 'https://www.linksfield.net' },
            
        ],
        sidebar: [
            {
              text: 'Guide',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Getting Started', link: '/guide/gettingstarted' }
              ]
            },
            {
              text: 'SIM In Depth',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/sim/' },
                { text: 'SIM', link: '/sim/sim' }
                
              ]
            }
          ]
    },
    
}