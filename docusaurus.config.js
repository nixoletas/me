// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Nixoletas`,
  tagline: "I'm a Software Developer. I like to create things. I like chess, music and soccer. ⚽",
  favicon: 'img/logo_nixoletas.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    localeConfigs: {
      'pt-br': {
        label: 'Português (Brasil)',
        direction: 'ltr',  // Sentido da escrita (esquerda para direita)
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'portfolio'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_nixoletas.png',
      navbar: {
        title: 'Nixoletas',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_nixoletas.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: "localeDropdown",
            position: "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About me',
            items: [
              {
                label: 'Experience',
                to: '/portfolio/experience',
              },
              {
                label: 'Education',
                to: '/portfolio/education',
              },
              {
                label: 'Projects',
                to: '/portfolio/projects',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/nixoletas',
              },
              {
                label: 'Likedin',
                href: 'https://linkedin.com/in/nixoletas',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/nixoletas',
              },
              {
                label: 'Soundcloud',
                href: 'https://soundcloud.com/soundcloud',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nick Miyasato Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
