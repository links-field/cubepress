export default {
    //description meta tag for the site
    title: 'Cube Press',
    base: '/cubepress/',
    lang: 'en-US',
    description: 'IOT Cube Documentation',
    lastUpdated: true,
    lastUpdatedText: 'Update Date',

    themeConfig: {
        logo: '/logo.png',
        search: false,
        searchMaxSuggestions: 10,
        lastUpdated: true,
        lastUpdatedText: 'Updated Date',
        editLink:{
            pattern: 'https://github.com/links-field/cubepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },  
        footer: {
            message: '',
            copyright: 'Copyright © 2022-present Links Field Networks'
          },
        nav: [
            { text: '🏠 Home', link: '/'},
            { text: 'Cube', link: 'https://beta.iotcube.link'},
            { text: 'About Links Field', link: 'https://www.linksfield.net' },
            
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/links-field/cubepress' },
        ],
        sidebar: [
            {
              text: 'Guide',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Getting Started', link: '/guide/gettingstarted' },
                { text: 'Get Account', link: '/guide/getaccount'},
                { text: 'Organisation', link: '/guide/organisation'},
                { text: 'Collaborators', link: '/guide/collaborator'},
                { text: 'Roles', link: '/guide/roles'},
                { text: 'Order SIMs', link: '/guide/order'},
                { text: 'Dashboard', link: '/guide/dashboard'},
                { text: 'Check Your SIMs', link: '/guide/checksim'},
                { text: 'SIM Status', link: '/guide/simstatus'},    
                { text: 'CDR', link: '/guide/cdr'},
                { text: 'SMS', link: '/guide/sms'},
                { text: 'Support', link: '/guide/support'},


              ]
            },
            {
              text: 'SIM In Depth',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/sim/' },
                { text: 'SIM', link: '/sim/sim' },
                { text: 'Pause SIM', link: '/sim/pausesim'},
                { text: 'Overage Policy', link: '/sim/overage'}
              ]
            },
            {
              text: 'Account In Depth',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/account/' },
              ]
            }
          ]
    },
    
}