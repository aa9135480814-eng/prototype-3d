const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ПРОТОТИП 3D',
  tagline: '3D-печать и цифровое производство',
  favicon: 'img/favicon.ico',

  // === Настройка под GitHub Pages ===
  url: 'https://aa9135480814-eng.github.io',     // ← заменяешь на свой логин
  baseUrl: '/prototype-3d/',            // ← заменяешь на имя репо (с обоих сторон /)

  organizationName: 'aa9135480814-eng',          // ← твой GitHub-логин
  projectName: 'prototype-3d',          // ← имя репозитория
  deploymentBranch: 'gh-pages',              // ветка для публикации
  trailingSlash: false,                      // ссылки без / на конце

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'ru', locales: ['ru'] },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: false,
        pages: { path: 'src/pages' },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    // Светлая тема по умолчанию
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },

    navbar: {
      style: 'dark',
      hideOnScroll: true,
      logo: { alt: 'ПРОТОТИП 3D', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Главная', position: 'left', activeBaseRegex: '^/$' },
        { to: '/services', label: 'Услуги', position: 'left' },
        { to: '/technologies', label: 'Технологии', position: 'left' },
       {to: '/projects', label: 'Проекты', position: 'left'},
        { to: '/contacts', label: 'Контакты', position: 'left' },
        { to: '/contacts', label: 'Получить предложение', position: 'right', className: 'button button--primary navbar-cta' },
      ],
    },

    footer: {
      style: 'dark',
      links: [],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  },
};

module.exports = config;