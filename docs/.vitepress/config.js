export default {
    //description meta tag for the site
    title: 'Cube Press',
    base: '/',
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
        algolia: {
          appId: 'YZOCYQPX31',
          apiKey: '4cb863651a4230f496af3e488a2b83e3',
          indexName: 'cubepress'
        },
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
            { text: 'FAQ', link: '/faq/'},
            { text: 'Cube', link: 'https://www.iotcube.link'},
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
                { text: 'In Cube', link: '/guide/incube'},
                { text: 'Dashboard', link: '/guide/dashboard'},
                // { text: 'Time', link: '/guide/time'},
                { text: 'Check Your SIMs', link: '/guide/checksim'},
                { text: 'SIM - Basic', link: '/guide/simbasic'},
                { text: 'SIM - Connection', link: '/guide/simconnection'},
                { text: 'SIM Diagnose', link: '/guide/diagnose'},
                { text: 'SIM - Service', link: '/guide/simservice'},
                { text: 'SIM Status', link: '/guide/simstatus'}, 
                { text: 'SIM Detail', link: '/guide/simdetail'},       
                { text: 'CDR', link: '/guide/cdr'},
                { text: 'SMS', link: '/guide/sms'},
                { text: 'Task Center', link: '/guide/taskcenter'},
                { text: 'Auto Flow', link: '/guide/autoflow'},
                { text: 'Support', link: '/guide/support'},


              ]
            },
            {
              text: 'SIM In Depth',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/sim/' },
                { text: 'SIM', link: '/sim/sim' },
                { text: 'Pause a SIM', link: '/sim/pausesim'},
                { text: 'Overage Policy', link: '/sim/overage'},
                { text: 'Transfer SIMs', link: '/sim/transfer'}
              ]
            },
            {
              text: 'Account Deep Dive',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/account/' },
                { text: 'Delete', link: '/account/delete'},
                { text: 'Disable', link: '/account/disable'}, 
                { text: 'Edit', link: '/account/edit'}
              ]
            },
            {
              text: 'Organisation Deep Dive',
              collapsible: true,
              items: [
                { text: 'Introduction', link: '/org/'},
                
                { text: 'Manage', link:'/org/manage'},
              ]
            },
            {
              text: 'FAQ',
              collapsible: true,
              items: [
                { text: "General", link: '/faq/'},
                { text: 'Account', link: '/faq/account'},
                { text: 'Organisation', link: '/faq/organisation'}
            
              ]
            },
          ]
    },
    
}