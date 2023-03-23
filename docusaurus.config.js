const path = require('path')
const beian = '闽ICP备2020017848号-2'

const announcementBarContent = `<a href="/typescript-full-stack-technology-trpc" target="_blank">Typescript 全栈最值得学习的技术栈 TRPC</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Clover's Blog`,
  titleDelimiter: '-',
  url: 'https://blog.cloverzz.com',
  baseUrl: '/',
  favicon: 'img/icons/icon-dark.png',
  organizationName: 'Clover',
  projectName: 'blog',
  tagline: 'Write and learn',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/icons/icon.png',
    announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'Clover',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, vue, web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向，现在主攻ts全栈',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: `Clover's blog`,
      logo: {
        alt: 'Clover',
        src: 'img/icons/icon.png',
        srcDark: 'img/icons/icon-dark.png',
      },
      hideOnScroll: true,
      items: [
        {
          label: 'Notebook',
          position: 'right',
          items: [
            {
              label: 'Alogrithm notes',
              to: 'docs/algorithm/',
            },
            {
              label: 'Archive',
              to: 'archive',
            },
          ],
          // to: 'docs/skill/',
        },
        {
          label: 'Lifebook',
          position: 'right',
          to: 'docs/skill/',
        },
        {
          label: 'Collection',
          position: 'right',
          items: [
            {
              label: 'Tags',
              to: 'tags',
            },
            {
              label: 'Archive',
              to: 'archive',
            },
          ],
        },
        {
          label: 'Wright',
          position: 'right',
          items: [
            {
              label: 'API服务',
              to: 'https://api.kuizuo.cn',
            },
            {
              label: 'JS代码还原',
              to: 'https://js-de-obfuscator.kuizuo.cn',
            },
            {
              label: 'CyberChef加密',
              to: 'https://cipher.kuizuo.cn',
            },
            {
              label: 'Transform',
              to: 'https://transform.kuizuo.cn',
            },
            {
              label: '网盘',
              to: 'https://pan.kuizuo.cn',
            },
          ],
        },
        
        // {
        //   label: 'Project',
        //   position: 'right',
        //   to: 'project',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kuizuo',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              position: 'right',
              to: 'friends',
            },
            {
              label: '导航',
              position: 'right',
              to: 'resource',
            },
            // {
            //   label: '我的站点',
            //   position: 'right',
            //   to: 'website',
            // },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
            },
          ],
        },
      ],
      copyright: `<p>Copyright © 2022 - PRESENT Clover Built with Docusaurus.</p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'https://matomo.kuizuo.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/kuizuo',
      twitter: 'https://twitter.com/kuizuo',
      juejin: 'https://juejin.cn/user/1565318510545901',
      csdn: 'https://blog.csdn.net/kuizuo12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=911993023&amp;site=qq',
      zhihu: 'https://www.zhihu.com/people/kuizuo',
      cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '愧怍的个人博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '愧怍的个人博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '愧怍',
          copyright: `Copyright © ${new Date().getFullYear()} 愧怍 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

module.exports = config
