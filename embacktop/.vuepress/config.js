const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const base = process.env.GH ? '/backtop/' : '/';

module.exports = {
  title: '返回顶部',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'em-fe/backtop',
    editLinks: true,
    lastUpdated: '上次更新', // string | boolean
    searchMaxSuggestions: 5,
    docsDir: 'embacktop',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/backtoppc/zh-cn',
    ]
  }
};
