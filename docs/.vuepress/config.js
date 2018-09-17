module.exports = {
  base: '/exploring-js/',
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
      '/exploring-es2016-and-es2017/': [],
    },
  },
  //   description: "Just playing around"
};
