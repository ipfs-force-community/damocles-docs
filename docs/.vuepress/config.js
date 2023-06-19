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
                    text: 'Deployment & Operation',
                    link: '/operation/'
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
                    ],
                    '/operation/': [
                    {
                        title: 'Deployment',
                        collapsable: false,
                        children: [
                            ['', 'Getting started'],
                        ]
                    },
                    {
                        title: 'Configurations',
                        collapsable: false,
                        children: [
                            ['venus-sector-manager-config.md', 'damocles-manager config', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/04.damocles-manager-config.md'],
                            ['venus-worker-config.md', 'damocles-worker config', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/03.damocles-worker-config.md'],
                        ]
                    },
                    {
                        title: 'Operations',
                        collapsable: false,
                        children: [
                            ['task-management.md', 'Task management', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/10.damocles-worker-task-management.md'],
                            ['task-flow.md', 'Task flow', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/11.task-status-flow.md'],
                            ['poster.md', 'Dedicated PoSt node', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/09.poster-node.md'],
                            ['worker-util.md', 'Worker utils', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/12.damocles-worker-util.md'],
                        ]
                    },
                    {
                        title: 'Migration',
                        collapsable: false,
                        children: [
                            ['migrate-sectors.md', 'Import existing sectors', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/en/06.migrate-sectors-to-damocles.md'],
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
                    text: '功能介绍',
                    link: '/zh/intro/'
                },
                {
                    text: '部署/运维',
                    link: '/zh/operation/'
                },
                {
                    text: '研发/设计',
                    link: '/zh/developer/'
                },
                {
                    text: '关于',
                    link: '/zh/about/'
                },
                ],
                sidebar: {
                    '/zh/intro/': [{
                        title: '功能特性',
                        collapsable: false,
                        children: [
                            ['', '概要'],
                            ['architecture.md', '架构'],
                        ]
                    },
                    ],
                    '/zh/operation/': [
                    {
                        title: '部署',
                        collapsable: false,
                        children: [
                            ['', '快速上手'],
                        ]
                    },
                    {
                        title: '配置',
                        collapsable: false,
                        children: [
                            ['venus-sector-manager-config.md', 'venus-sector-manager 配置', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/04.venus-sector-manager%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md"],
                            ['venus-worker-config.md', 'venus-worker 配置', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/03.venus-worker%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md"],
                            ['processors-config-example.md', '外部执行器配置范例', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/07.venus-worker%E5%A4%96%E9%83%A8%E6%89%A7%E8%A1%8C%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E8%8C%83%E4%BE%8B.md"],
                        ]
                    },
                    {
                        title: '运维',
                        collapsable: false,
                        children: [
                            ['task-management.md', 'worker 任务管理', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/10.venus-worker%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86.md"],
                            ['task-flow.md', '任务状态流转', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/11.%E4%BB%BB%E5%8A%A1%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC.md"],
                            ['poster.md', '独立 Poster', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/09.%E7%8B%AC%E7%AB%8B%E8%BF%90%E8%A1%8C%E7%9A%84poster%E8%8A%82%E7%82%B9.md"],
                            ['snapup.md', 'snapdeal 支持', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/08.snapdeal%E7%9A%84%E6%94%AF%E6%8C%81.md"],
                            ['worker-util.md', 'venus-worker-util', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/12.venus-worker-util.md"],
                            ['custom-algo.md', '自定义算法/存储方案', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/13.%E8%87%AA%E5%AE%9A%E4%B9%89%E7%AE%97%E6%B3%95%E5%92%8C%E5%AD%98%E5%82%A8%E6%96%B9%E6%A1%88.md"],
                            ['metrics.md', 'damocles-manager metrics 使用', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/14.venus-sector-manager%E7%9A%84mertics%E4%BD%BF%E7%94%A8.md"],
                            ['hugeTLB.md', 'PC1 hugeTLB 支持', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/15.venus-worker_PC1_HugeTLB_Pages_%E6%94%AF%E6%8C%81.md"],
                            ['sector-rebuild.md', '扇区重建支持', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/16.%E6%89%87%E5%8C%BA%E9%87%8D%E5%BB%BA%E7%9A%84%E6%94%AF%E6%8C%81.md"],
                        ]
                    },
                    {
                        title: '迁移',
                        collapsable: false,
                        children: [
                            ['migrate-sectors.md', '导入已有扇区', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/06.%E5%AF%BC%E5%85%A5%E5%B7%B2%E5%AD%98%E5%9C%A8%E7%9A%84%E6%89%87%E5%8C%BA%E6%95%B0%E6%8D%AE.md"],
                            ['migrate-miner.md', 'lotus-miner 与 damocles 切换流程', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/17.%20venus-cluster%E4%B8%8Elotus-miner%E5%88%87%E6%8D%A2%E6%B5%81%E7%A8%8B.md"],
                        ]
                    },
                    {
                        title: 'FAQ',
                        collapsable: false,
                        children: [
                            ['faq.md', '常见问题', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/QA.md"],
                        ]
                    },
                    ],
                    '/zh/developer/': [
                    {
                        title: '设计理念',
                        collapsable: false,
                        children: [
                            ['', '简述'],
                            ['concept.md', '概念和基础设施', "https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/02.%E6%A6%82%E5%BF%B5%E5%92%8C%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD.md"],
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
