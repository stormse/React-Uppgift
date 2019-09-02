const bbcLogo = require('assets/images/bbc-news.png');
const biLogo = require('assets/images/business-insider.png');
const rtLogo = require('assets/images/reuters.png');
const ncLogo = require('assets/images/new-scientist.png');
const idLogo = require('assets/images/independent.png');
const timeLogo = require('assets/images/time.png');

export const appleMetas = [
  {
    name: 'theme-color',
    content: '#fdce09',
  },
  {
    name: 'full-screen',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-title',
    content: 'News',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: '#fdce09'
  }
];

export const linkPwaMetas = [
  {
    rel: 'apple-touch-icon',
    href: '/favicon.ico',
  }
];

export const menuItems = [
  {
    title: 'BBC News',
    url: '/bbc-news',
    logo: bbcLogo,
  },
  {
    title: 'Business Insider',
    url: '/business-insider',
    logo: biLogo,
  },
  {
    title: 'Reuters',
    url: '/reuters',
    logo: rtLogo,
  },  
  {
    title: 'New Scientist',
    url: '/new-scientist',
    logo: ncLogo,
  },
  {
    title: 'Independent',
    url: '/independent',
    logo: idLogo,
  },
  {
    title: 'Time',
    url: '/time',
    logo: timeLogo,
  }
];
