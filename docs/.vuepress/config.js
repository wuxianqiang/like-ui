const path = require('path')
const fileList = require('../../fileList')

module.exports = {
  base: '/like-ui/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': path.resolve(__dirname, 'components')
      }
    }
  },
  head: [
    ['script', { src: '//at.alicdn.com/t/font_416066.js' }]
  ],
  devServer: {
    proxy: {
      host: 'localhost',
      port: '8080',
      '/api': {
          target: "http://localhost:8000/",
          secure: false,
          changeOrigin: false
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    sidebarDepth: 1,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '指南', link: '/api/' },
      { text: '组件', link: '/components/' },
      // 下拉列表
      {
        text: '生态系统',
        items: [
          { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/' },
          { text: 'Vuex', link: 'https://cn.vuejs.org/v2/guide/11' },
        ]
      }
    ],
    sidebar: {
      '/components/': [
        '/components/',
        {
          collapsable: false,
          children: [...fileList]
        }
      ],

      '/api/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            '/api/'
          ]
        }
      ]
    }
  }
}
