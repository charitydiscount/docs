module.exports = {
  title: 'CharityDiscount',
  description: 'CharityDiscount Technical Documentation',
  base: '/docs/',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: 'Components', link: '/tech/' },
      { text: 'CharityDiscount', link: 'https://charitydiscount.ro' },
      { text: 'Github', link: 'https://github.com/charitydiscount' },
    ],
    sidebar: [
      {
        title: 'Overview',
        path: '/overview/',
        collapsable: false,
        children: ['/overview/presentation'],
      },
      {
        title: 'Components',
        path: '/tech/',
        collapsable: false,
        children: ['/tech/web', '/tech/mobile'],
      },
    ],
  },
};
