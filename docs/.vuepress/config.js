module.exports = {
  base: '/Exploring-JS/',
  title: 'Exploring JS',
  themeConfig: {
    nav: [
      {
        text: 'Exploring ES6',
        link: '/exploring-es6/',
      },
      {
        text: 'Exploring ES2016 and ES2017',
        link: '/exploring-es2016-and-es2017/',
      },
    ],
    sidebar: {
      '/exploring-es6/': ['', 'core-es6-features'],
      '/exploring-es2016-and-es2017/': [
        '',
        {
          title: 'ECMAScript 2017',
          collapsable: false,
          children: ['async-functions'],
        },
      ],
    },
    sidebarDepth: 2,
  },
  //   description: "Just playing around"
};
