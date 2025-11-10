import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Phil Blog',
  tagline: 'SmartThings · Algorithms · Dev Notes',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages 기본 도메인
  url: 'https://philpark-geosr.github.io',
  // 프로젝트 기반 배포: /<repo>/
  baseUrl: '/my-blog/',

  // GitHub 정보
  organizationName: 'PhilPark-geosr',
  projectName: 'my-blog',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',          // /my-blog/docs/... 에서 문서
          sidebarPath: './sidebars.ts',
          // 필요하면 나중에 네 repo 기준으로 열어줘:
          // editUrl: 'https://github.com/PhilPark-geosr/my-blog/edit/main/',
        },
        blog: {
          routeBasePath: 'blog',          // /my-blog/blog 에서 블로그
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 마찬가지로 수정 가능:
          // editUrl: 'https://github.com/PhilPark-geosr/my-blog/edit/main/',
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Phil Blog',
      logo: {
        alt: 'Phil Blog Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // sidebars.ts 기본 sidebar id
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/PhilPark-geosr/my-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs Home',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub Repo',
              href: 'https://github.com/PhilPark-geosr/my-blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Phil Blog. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
