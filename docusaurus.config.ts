import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DevOps Knowledge Base',
  tagline: 'Centralized documentation for DevOps topics',
  favicon: 'img/logos/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://devops.ruicoelho.pt',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'user-cube', // Usually your GitHub org/user name.
  projectName: 'devops', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/user-cube/devops/tree/main/',
        },
        // Blog is disabled for now, but you can enable it if needed
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/user-cube/devops/tree/main/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevOps Knowledge Base',
      logo: {
        alt: 'DevOps Knowledge Base Logo',
        src: 'img/logos/logo-no-background.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'awsSidebar',
          position: 'left',
          label: 'AWS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'kubernetesSidebar',
          position: 'left',
          label: 'Kubernetes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'terraformSidebar',
          position: 'left',
          label: 'Terraform',
        },
        {
          href: 'https://github.com/user-cube/devops',
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
            { label: 'Kubernetes', to: '/docs/kubernetes/intro' },
            { label: 'AWS', to: '/docs/aws/intro' },  
            { label: 'Terraform', to: '/docs/terraform/intro' },
          ],
        },
        {
          title: 'Contact',
          items: [
            { label: 'GitHub', href: 'https://github.com/user-cube/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rui-m-coelho/' }
            // Add more contact or community links here if needed
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevOps Knowledge Base. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
