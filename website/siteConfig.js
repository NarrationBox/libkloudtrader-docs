/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.


const siteConfig = {
  title: 'Libkloudtrader', 
  tagline: " Connect your trading models and conquer the markets.",
  //KloudTrader's in-house trading framework optimized for computational finance and algorithmic trading.
  tagline2:"LibKloudtrader is KloudTrader's in-house trading framework optimized for computational finance and algorithmic trading.",
  url: 'https://your-docusaurus-test-site.com', 
  baseUrl: '/',
  projectName: 'libkloudtrader-docs',
  organizationName: "KloudTrader Ltd.",
  headerLinks: [
    {doc: 'getting_started_with_libkloudtrader', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {href:'https://kloudtrader.com',label:"KloudTrader"},
    {href:'https://kloudtrader.com/narwhal',label:"Narwhal"},
    {href:'https://blog.kloudtrader.com/',label:"Blog"}
  ],
  /* path to images for header/footer */
  //headerIcon: 'img/kloudtrader_logo.svg',
  footerIcon: 'img/kloudtrader_logo.svg',
  favicon: 'img/kloudtrader_logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#3ba666',
    secondaryColor: '#374549',
  },

  /* Custom fonts for website */

  fonts: {
    myFont: [
      "Lato",
      "Serif"
    ],

  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} KloudTrader Ltd.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
