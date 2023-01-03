module.exports = {
    title: 'Damocles',
    description: 'Damocles, formerly known as Venus Power Service, is THE Filecoin storage power solution.',
    base: '/',
    markdown: {
        config: md => {
            md.set({
                linkify: true
            })
            md.use(require('markdown-it-emoji'))
            md.use(require('markdown-it-container'))
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-deflist'))
            md.use(require('markdown-it-task-lists'))
        }
    },
    plugins: [
        'vuepress-plugin-check-md',
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress-plugin-zooming',
        ['vuepress-plugin-code-copy', true]
    ],
    head: [
        ['link', {
            rel: 'icon',
            href: '/assets/damocles-icon.png'
        }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-C1545RTPE5',
            },
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-C1545RTPE5');",
            ],
        ],
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Damocles',
            description: 'Damocles, formerly known as Venus Power Service, is THE Filecoin storage power solution.',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '执剑人',
            description: '执剑人，原Venus算力服务，是一个Filecoin存储算力解决方案',
        }
    },
    themeConfig: {
        logo: '/assets/damocles-icon.png',
        lastUpdated: 'Last Updated',
        // Optional options for generating "Edit this page" link
        // if your docs are in a different repo from your main project:
        docsRepo: 'ipfs-force-community/damocles-docs',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'main',
        // defaults to false, set to true to enable
        editLinks: true,
        // end Edit on Github section
        displayAllHeaders: false,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                lang: 'en-US',
                title: 'Damocles',
                description: 'Damocles (formerly known as Venus Power Service) is THE Filecoin storage power solution.',
                nav: [{
                    text: 'Introduction',
                    link: '/intro/'
                },
                {
                    text: 'About',
                    link: '/about/'
                },
                ],
                sidebar: {
                    '/intro/': [{
                        title: 'Introduction',
                        collapsable: false,
                        children: [
                            ['', 'Overview'],
                            ['architecture.md', 'Architecture'],
                        ]
                    },
                    {
                        title: 'Deployment',
                        collapsable: false,
                        children: [
                            ['getting-started.md', 'Getting started'],
                        ]
                    },
                    {
                        title: 'Configurations',
                        collapsable: false,
                        children: [
                            ['venus-sector-manager-config.md', 'venus-sector-manager config', 'https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/en/04.venus-sector-manager-config.md'],
                            ['venus-worker-config.md', 'venus-worker config', 'https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/en/03.venus-worker-config.md'],
                        ]
                    },
                    {
                        title: 'Operations',
                        collapsable: false,
                        children: [
                            ['task-management.md', 'Task management', 'https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/en/10.venus-worker-task-management.md'],
                            ['task-flow.md', 'Task flow', 'https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/en/11.task-status-flow.md'],
                        ]
                    },
                    {
                        title: 'Migration',
                        collapsable: false,
                        children: [
                            ['migrate-sectors.md', 'Import existing sectors', 'https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/en/06.migrate-sectors-to-venus.md'],
                        ]
                    },
                    {
                        title: 'Other Features',
                        collapsable: false,
                        children: [
                            ['other.md', 'More features...'],
                        ]
                    },
                    ],
                    '/about/': [{
                        title: '',
                        collapsable: false,
                        children: [
                            ['', 'About Us'],
                        ]
                    },
                    ],
                }
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                title: '执剑人',
                description: '执剑人（原Venus算力服务）是一个Filecoin存储算力解决方案',
                nav: [
                {
                    text: '介绍',
                    link: '/zh/intro/'
                },
                {
                    text: '关于',
                    link: '/zh/about/'
                },
                ],
                sidebar: {
                    '/zh/intro/': [{
                        title: '简述',
                        collapsable: false,
                        children: [
                            ['', '概要'],
                            ['architecture.md', '架构'],
                        ]
                    },
                    {
                        title: '部署',
                        collapsable: false,
                        children: [
                            ['getting-started.md', '快速上手'],
                        ]
                    },
                    {
                        title: '配置',
                        collapsable: false,
                        children: [
                            ['venus-sector-manager-config.md', 'venus-sector-manager配置', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/04.venus-sector-manager%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md"],
                            ['venus-worker-config.md', 'venus-worker配置', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/03.venus-worker%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md"],
                            ['processors-config-example.md', '外部执行器配置范例', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/07.venus-worker%E5%A4%96%E9%83%A8%E6%89%A7%E8%A1%8C%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E8%8C%83%E4%BE%8B.md"],
                        ]
                    },
                    {
                        title: '运维',
                        collapsable: false,
                        children: [
                            ['task-management.md', 'worker任务管理', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/10.venus-worker%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86.md"],
                            ['task-flow.md', '任务状态流转', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/11.%E4%BB%BB%E5%8A%A1%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC.md"],
                        ]
                    },
                    {
                        title: '迁移',
                        collapsable: false,
                        children: [
                            ['migrate-sectors.md', '导入已有扇区', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/06.%E5%AF%BC%E5%85%A5%E5%B7%B2%E5%AD%98%E5%9C%A8%E7%9A%84%E6%89%87%E5%8C%BA%E6%95%B0%E6%8D%AE.md"],
                        ]
                    },
                    {
                        title: '其他功能特性',
                        collapsable: false,
                        children: [
                            ['other.md', '其他'],
                        ]
                    },
                    ],
                    '/zh/about/': [{
                        title: '',
                        collapsable: false,
                        children: [
                            ['', '关于我们'],
                        ]
                    },
                    ]
                }
            }
        }
    }
}
