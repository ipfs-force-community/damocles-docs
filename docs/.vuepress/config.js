var path = require('path')
var url = require('node:url')

const docsUrlMappings = {
    'en': {
        '04.damocles-manager-config.md': ['damocles-manager-config.md', 'damocles-manager config'],
        '03.damocles-worker-config.md': ['damocles-worker-config.md', 'damocles-worker config'],
        '10.damocles-worker-task-management.md': ['task-management.md', 'Task management'],
        '11.task-status-flow.md': ['task-flow.md', 'Task flow'],
        '09.poster-node.md': ['poster.md', 'Dedicated PoSt node'],
        '08.snapdeal-support.md': ['snapup.md', 'Snapdeal support'],
        '12.damocles-worker-config-guide.md': ['worker-config-guide.md', 'Worker config guide'],
        '06.migrate-sectors-to-damocles.md': ['migrate-sectors.md', 'Import existing sectors'],
    },
    'zh': {
        '05.%E5%BF%AB%E9%80%9F%E5%90%AF%E7%94%A8.md': ['quick-start.md', '快速上手'],
        '04.damocles-manager%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md': ['damocles-manager-config.md', 'damocles-manager 配置'],
        '03.damocles-worker%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md': ['damocles-worker-config.md', 'damocles-worker 配置'],
        '07.damocles-worker%E5%A4%96%E9%83%A8%E6%89%A7%E8%A1%8C%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E8%8C%83%E4%BE%8B.md': ['processors-config-example.md', '外部执行器配置范例'],
        '10.damocles-worker%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86.md': ['task-management.md', 'worker 任务管理'],
        '11.%E4%BB%BB%E5%8A%A1%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC.md': ['task-flow.md', '任务状态流转'],
        '09.%E7%8B%AC%E7%AB%8B%E8%BF%90%E8%A1%8C%E7%9A%84poster%E8%8A%82%E7%82%B9.md': ['poster.md', '独立 Poster'],
        '08.snapdeal%E7%9A%84%E6%94%AF%E6%8C%81.md': ['snapup.md', 'snapdeal 支持'],
        '12.damocles-worker-%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8C%97.md': ['worker-config-guide.md', 'damocles-worker 配置指北'],
        '13.%E8%87%AA%E5%AE%9A%E4%B9%89%E7%AE%97%E6%B3%95%E5%92%8C%E5%AD%98%E5%82%A8%E6%96%B9%E6%A1%88.md': ['custom-algo.md', '自定义算法/存储方案'],
        '14.damocles-manager%E7%9A%84mertics%E4%BD%BF%E7%94%A8.md': ['metrics.md', 'damocles-manager metrics 使用'],
        '15.damocles-worker_PC1_HugeTLB_Pages_%E6%94%AF%E6%8C%81.md': ['hugeTLB.md', 'PC1 hugeTLB 支持'],
        '16.%E6%89%87%E5%8C%BA%E9%87%8D%E5%BB%BA%E7%9A%84%E6%94%AF%E6%8C%81.md': ['sector-rebuild.md', '扇区重建支持'],
        '18.Unseal%E4%BB%BB%E5%8A%A1%E7%9A%84%E6%94%AF%E6%8C%81.md': ['unseal.md', 'unseal 反封装'],
        '06.%E5%AF%BC%E5%85%A5%E5%B7%B2%E5%AD%98%E5%9C%A8%E7%9A%84%E6%89%87%E5%8C%BA%E6%95%B0%E6%8D%AE.md': ['migrate-sectors.md', '导入已有扇区'],
        '17.%20damocles%E4%B8%8Elotus-miner%E5%88%87%E6%8D%A2%E6%B5%81%E7%A8%8B.md': ['migrate-miner.md', 'lotus-miner 与 damocles 切换流程'],
        'QA.md': ['faq.md', '常见问题'],
        '02.%E6%A6%82%E5%BF%B5%E5%92%8C%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD.md': ['concept.md', '概念和基础设施'],
        '19.damocles-%E6%89%87%E5%8C%BA%E5%AD%98%E5%82%A8%E9%85%8D%E7%BD%AE.md': ['storage.md', 'damocles 扇区存储配置'],
    }
}

function U(githubUrl) {
    try {
        let lang = githubUrl.match(/docs\/(zh|en)/g)[0].substr('docs/'.length)
        let basename = path.basename(githubUrl)
        return [...docsUrlMappings[lang][basename], githubUrl]
    } catch (e) {
        return []
    }
}

module.exports = {
    title: 'Damocles',
    description: 'Damocles, formerly known as Venus Power Service, is THE Filecoin storage power solution.',
    base: '/',
    extendMarkdown: md => {
        md.use(require('markdown-it-replace-link'), {
            processHTML: true, // defaults to false for backwards compatibility
            replaceLink: function (link, env, token, htmlToken) {
                try {
                    let u = url.parse(link)
                    let filename = path.basename(u.pathname)
                    for (let m of Object.values(docsUrlMappings)) {
                        if (filename in m) {
                            u.pathname = m[filename][0]
                            return u.format()
                        }
                    }
                } catch (_) {
                }

                return link;
            }
        })
    },
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
        },
    },
    plugins: [
        'vuepress-plugin-check-md',
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress-plugin-zooming',
        'fulltext-search',
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
        // Optional options for generating 'Edit this page' link
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
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/04.damocles-manager-config.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/03.damocles-worker-config.md')
                            ]
                        },
                        {
                            title: 'Operations',
                            collapsable: false,
                            children: [
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/10.damocles-worker-task-management.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/11.task-status-flow.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/09.poster-node.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/08.snapdeal-support.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/12.damocles-worker-config-guide.md'),
                            ]
                        },
                        {
                            title: 'Migration',
                            collapsable: false,
                            children: [
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/en/06.migrate-sectors-to-damocles.md'),
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
                                ['quick-start.md', '快速上手', 'https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/05.%E5%BF%AB%E9%80%9F%E5%90%AF%E7%94%A8.md'],
                            ]
                        },
                        {
                            title: '配置',
                            collapsable: false,
                            children: [
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/04.damocles-manager%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/03.damocles-worker%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/07.damocles-worker%E5%A4%96%E9%83%A8%E6%89%A7%E8%A1%8C%E5%99%A8%E7%9A%84%E9%85%8D%E7%BD%AE%E8%8C%83%E4%BE%8B.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/19.damocles-%E6%89%87%E5%8C%BA%E5%AD%98%E5%82%A8%E9%85%8D%E7%BD%AE.md#damocles-%E6%89%87%E5%8C%BA%E5%AD%98%E5%82%A8%E9%85%8D%E7%BD%AE'),
                            ]
                        },
                        {
                            title: '运维',
                            collapsable: false,
                            children: [
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/10.damocles-worker%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/11.%E4%BB%BB%E5%8A%A1%E7%8A%B6%E6%80%81%E6%B5%81%E8%BD%AC.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/09.%E7%8B%AC%E7%AB%8B%E8%BF%90%E8%A1%8C%E7%9A%84poster%E8%8A%82%E7%82%B9.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/08.snapdeal%E7%9A%84%E6%94%AF%E6%8C%81.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/12.damocles-worker-%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8C%97.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/13.%E8%87%AA%E5%AE%9A%E4%B9%89%E7%AE%97%E6%B3%95%E5%92%8C%E5%AD%98%E5%82%A8%E6%96%B9%E6%A1%88.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/14.damocles-manager%E7%9A%84mertics%E4%BD%BF%E7%94%A8.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/15.damocles-worker_PC1_HugeTLB_Pages_%E6%94%AF%E6%8C%81.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/16.%E6%89%87%E5%8C%BA%E9%87%8D%E5%BB%BA%E7%9A%84%E6%94%AF%E6%8C%81.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/18.Unseal%E4%BB%BB%E5%8A%A1%E7%9A%84%E6%94%AF%E6%8C%81.md'),
                            ]
                        },
                        {
                            title: '迁移',
                            collapsable: false,
                            children: [
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/06.%E5%AF%BC%E5%85%A5%E5%B7%B2%E5%AD%98%E5%9C%A8%E7%9A%84%E6%89%87%E5%8C%BA%E6%95%B0%E6%8D%AE.md'),
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/17.%20damocles%E4%B8%8Elotus-miner%E5%88%87%E6%8D%A2%E6%B5%81%E7%A8%8B.md'),
                            ]
                        },
                        {
                            title: 'FAQ',
                            collapsable: false,
                            children: [
                                U('https://github.com/ipfs-force-community/damocles/blob/main/docs/zh/QA.md'),
                            ]
                        },
                    ],
                    '/zh/developer/': [
                        {
                            title: '设计理念',
                            collapsable: false,
                            children: [
                                ['', '简述'],
                                U('https://github.com/ipfs-force-community/Damocles/blob/main/docs/zh/02.%E6%A6%82%E5%BF%B5%E5%92%8C%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD.md'),
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
