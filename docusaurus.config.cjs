// docusaurus.config.cjs
// CommonJS-вариант, чтобы точно работало без ESM-настроек
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ПРОТОТИП 3D',
  tagline: '3D‑печать и цифровое производство',
  favicon: 'img/favicon.ico',

  // === GitHub Pages ===
  url: 'https://aa9135480814-eng.github.io',
  baseUrl: '/prototype-3d/',
  organizationName: 'aa9135480814-eng',
  projectName: 'prototype-3d',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'ru', locales: ['ru'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,   // если раздел Docs не используешь
        blog: false,   // если блог не нужен
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
