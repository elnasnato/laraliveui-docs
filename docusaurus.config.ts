import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LaraLiveUI',
  tagline: 'UI component library untuk Livewire + Tailwind CSS',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://elnasnato.github.io',
  baseUrl: '/laraliveui-docs/',

  organizationName: 'elnasnato',
  projectName: 'laraliveui-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/elnasnato/laraliveui-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/elnasnato/laraliveui-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/laraliveui-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LaraLiveUI',
      logo: {
        alt: 'LaraLiveUI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Dokumentasi',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://packagist.org/packages/elnasnato/laraliveui',
          label: 'Packagist',
          position: 'right',
        },
        {
          href: 'https://github.com/elnasnato/laraliveui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentasi',
          items: [
            {
              label: 'Pengenalan',
              to: '/docs/intro',
            },
            {
              label: 'Instalasi',
              to: '/docs/instalasi/library',
            },
            {
              label: 'Komponen',
              to: '/docs/komponen/overview',
            },
          ],
        },
        {
          title: 'Proyek',
          items: [
            {
              label: 'laraliveui',
              href: 'https://github.com/elnasnato/laraliveui',
            },
            {
              label: 'laraliveui-starter-kit',
              href: 'https://github.com/elnasnato/laraliveui-starter-kit',
            },
            {
              label: 'Packagist',
              href: 'https://packagist.org/packages/elnasnato/laraliveui',
            },
          ],
        },
        {
          title: 'Lainnya',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub (docs)',
              href: 'https://github.com/elnasnato/laraliveui-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LaraLiveUI. MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'php', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
