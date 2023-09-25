(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{408:function(t,e,s){"use strict";s.r(e);var a=s(17),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"lotus-miner-切换-damocles-流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lotus-miner-切换-damocles-流程"}},[t._v("#")]),t._v(" lotus-miner 切换 damocles 流程")]),t._v(" "),s("p",[t._v("本节介绍从 "),s("code",[t._v("lotus-miner")]),t._v(" 切换 "),s("code",[t._v("damocles")]),t._v(" 的流程，通常此需求的场景为：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("lotus-miner")]),t._v(" 已经封装了扇区；")]),t._v(" "),s("li",[t._v("切换为 "),s("code",[t._v("damocles")]),t._v(" 后要求：\n"),s("ul",[s("li",[t._v("可以继续封装新的扇区；")]),t._v(" "),s("li",[t._v("时空证明正常（wdPoSt 和 winPoSt）。")])])])]),t._v(" "),s("h3",{attrs:{id:"切换流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换流程"}},[t._v("#")]),t._v(" 切换流程")]),t._v(" "),s("p",[t._v("根据上述需求，切换为 "),s("code",[t._v("damocles")]),t._v(" 流程有：")]),t._v(" "),s("ul",[s("li",[t._v("搭建 "),s("code",[t._v("venus")]),t._v(" 链服务，或者"),s("a",{attrs:{href:"https://sophon.venus-fil.io/zh/operation/join-a-cs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("接入已有的链服务"),s("OutboundLink")],1),t._v("，请参考 "),s("code",[t._v("venus")]),t._v(" 相关文档，注意钱包私钥需要导入 "),s("code",[t._v("venus-wallet")]),t._v("；")]),t._v(" "),s("li",[t._v("初始化 "),s("code",[t._v("damocles")]),t._v(" repo，具体参考"),s("RouterLink",{attrs:{to:"/zh/operation/05.快速启动.html"}},[t._v("快速启动")]),t._v("；")],1),t._v(" "),s("li",[t._v("扇区永久存储导入，参考"),s("RouterLink",{attrs:{to:"/zh/operation/migrate-sectors.html"}},[t._v("06.导入已存在的扇区")]),t._v("；")],1),t._v(" "),s("li",[t._v("扇区元数据导入；")]),t._v(" "),s("li",[t._v("用 "),s("code",[t._v("damocles")]),t._v(" 封装新的扇区，具体参考"),s("RouterLink",{attrs:{to:"/zh/operation/damocles-worker-config.html"}},[t._v("相关文档")]),t._v("。")],1)]),t._v(" "),s("p",[t._v("先决条件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("damocles")]),t._v(" 和 "),s("code",[t._v("lotus-miner")]),t._v(" 封装扇区的过程不兼容，故切换时应保证所有的扇区封装任务都已完成 ("),s("code",[t._v("Proving")]),t._v(")")])]),t._v(" "),s("h4",{attrs:{id:"元数据导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据导入"}},[t._v("#")]),t._v(" 元数据导入")]),t._v(" "),s("p",[t._v("导入扇区元数据是通过调用各自接口进行的，故过程中需要 "),s("code",[t._v("lotus-miner")]),t._v(" 和 "),s("code",[t._v("damocles-manager")]),t._v(" 服务都启动。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./damocles-manager util sealer sectors import --api=<lotus api> \\\n--token=<lotus-miner token>\n")])])]),s("p",[t._v("可选 "),s("code",[t._v("flag")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("override")]),t._v(", "),s("code",[t._v("bool")]),t._v("类型，标识是否覆盖已有的数据，默认为 "),s("code",[t._v("false")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("numbers")]),t._v(", 切片类型，指定要导入的扇区号，假设要导入扇区号为 "),s("code",[t._v("200,300")]),t._v(" 的扇区元数据，使用参考为："),s("code",[t._v("--numbers=200 --numbers=300")]),t._v("；")])]),t._v(" "),s("p",[s("code",[t._v("damocles")]),t._v(" 中通过下面命令查询导入的扇区信息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./damocles-manager util sealer sectors list --offline=true\n")])])]),s("h2",{attrs:{id:"damocles-切换为-lotus-miner-流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#damocles-切换为-lotus-miner-流程"}},[t._v("#")]),t._v(" damocles 切换为 lotus-miner 流程")]),t._v(" "),s("p",[t._v("本节介绍从 "),s("code",[t._v("damocles")]),t._v(" 切换为 "),s("code",[t._v("lotus-miner")]),t._v(" 的流程，通常此需求的场景为：")]),t._v(" "),s("ul",[s("li",[t._v("用 "),s("code",[t._v("damocles")]),t._v(" 封装了扇区；")]),t._v(" "),s("li",[t._v("切换为 "),s("code",[t._v("lotus-miner")]),t._v(" 后要求：\n"),s("ul",[s("li",[t._v("可以继续封装新的扇区；")]),t._v(" "),s("li",[t._v("时空证明正常（wdPoSt 和 winPoSt）。")])])])]),t._v(" "),s("h3",{attrs:{id:"切换流程-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换流程-2"}},[t._v("#")]),t._v(" 切换流程")]),t._v(" "),s("p",[t._v("根据上述需求，切换为 "),s("code",[t._v("lotus-miner")]),t._v(" 需要进行的流程有：")]),t._v(" "),s("ul",[s("li",[t._v("搭建 "),s("code",[t._v("lotus")]),t._v(" 链服务，请参考 "),s("a",{attrs:{href:"https://lotus.filecoin.io/lotus/get-started/what-is-lotus/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("lotus")]),t._v(" 官方文档"),s("OutboundLink")],1),t._v("，需要注意的是 "),s("code",[t._v("venus-wallet")]),t._v(" 中用到的钱包私钥需全部导出到 "),s("code",[t._v("lotus")]),t._v("；")]),t._v(" "),s("li",[t._v("扇区持久化数据导出，保证 "),s("code",[t._v("damocles")]),t._v(" 密封的扇区在 "),s("code",[t._v("lotus-miner")]),t._v(" 中能够被正确读取，这是时空证明所必需的；")]),t._v(" "),s("li",[t._v("扇区元数据导出，以支持在 "),s("code",[t._v("lotus-miner")]),t._v(" 中查看历史扇区信息和重建扇区。"),s("em",[s("strong",[t._v("如果需要重建已损坏的扇区文件，这一步是必须的")])]),t._v("；")]),t._v(" "),s("li",[t._v("更新 "),s("code",[t._v("lotus-miner")]),t._v(" 数据库中 "),s("code",[t._v("/storage/nextid")]),t._v("，以使得新封装扇区的编号不重复。")])]),t._v(" "),s("p",[t._v("先决条件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("damocles")]),t._v(" 和 "),s("code",[t._v("lotus-miner")]),t._v(" 封装扇区的过程不兼容，故切换时应保证所有的扇区封装任务（"),s("em",[s("strong",[t._v("包括重做的")])]),t._v("）都已完成，即状态 "),s("code",[t._v("Finalized: true")]),t._v("，未完成的扇区不会导出。")]),t._v(" "),s("li",[s("code",[t._v("lotus-miner")]),t._v(" 没有提供导入扇区元数据的 API，故采用直接将数据写入数据库的方式，"),s("em",[s("strong",[t._v("导出数据前需要停止 "),s("code",[t._v("lotus-miner")]),t._v(" 进程")])]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"持久化数据导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化数据导出"}},[t._v("#")]),t._v(" 持久化数据导出")]),t._v(" "),s("p",[s("code",[t._v("damocles")]),t._v(" 的持久化存储目录允许管理多个 "),s("code",[t._v("miner")]),t._v(" 的扇区文件，而 "),s("code",[t._v("lotus-miner")]),t._v(" 的多个持久化目录仅管理一个 "),s("code",[t._v("miner")]),t._v(" 的扇区文件。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果 "),s("code",[t._v("cluster")]),t._v(" 的永久存储管理了多个 "),s("code",[t._v("miner")]),t._v(" 的扇区文件，退出一个 "),s("code",[t._v("miner")]),t._v(" 时需要重新归档，则建议使用命令导出，否则只需将 "),s("code",[t._v("cluster")]),t._v(" 永久存储配置给 "),s("code",[t._v("lotus-miner")]),t._v(" 即可，见后文。")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("lotus-miner")]),t._v(" 中通过命令配置持久化存储：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./lotus-miner storage attach --init --store <store path>\n")])])]),s("p",[t._v("查看持久化存储")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./lotus-miner storage list\n")])])]),s("p",[t._v("更多关于 "),s("code",[t._v("lotus-miner")]),t._v(" 的持久化存储请参考"),s("a",{attrs:{href:"https://lotus.filecoin.io/tutorials/lotus-miner/run-a-miner/#lotus-miner-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("lotus-miner storage config"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("导出扇区持久化数据")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./damocles-manager util sealer sectors export --miner=<miner address> files \\\n--dest-path=<lotus store path>\n")])])]),s("p",[t._v("可选 "),s("code",[t._v("flag")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("reserve")]),t._v(", "),s("code",[t._v("bool")]),t._v("类型，标识是否保留 "),s("code",[t._v("damocles")]),t._v(" 中的持久化数据，默认为 "),s("code",[t._v("false")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("numbers")]),t._v(", 切片类型，指定要导出的扇区号，不设置则导出全部。假设要导出扇区号为 "),s("code",[t._v("200,300")]),t._v(" 的持久化数据，使用参考为："),s("code",[t._v("--numbers=200 --numbers=300")]),t._v("；")])]),t._v(" "),s("p",[t._v("命令执行参考：")]),t._v(" "),s("ul",[s("li",[t._v("增加 "),s("code",[t._v("--reserve")]),t._v(" flag 表示保留源文件，即拷贝扇区文件。这种方式比较慢，如果目标文件不存在，直接拷贝，存在则忽略。使用此方式可以避免导出时间段内可能的 "),s("code",[t._v("wdPoSt")]),t._v(" 失败。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> ./damocles-manager util sealer sectors export --miner=t04079 files --dest-path=/storage-nfs-4/dest/t04079 --numbers 160 --reserve\nmove sector 160 file...\ncopy file from /storage-nfs-4/src/t04079/update/s-t04079-160 to /storage-nfs-4/dest/t04079/update/s-t04079-160\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/p_aux to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/p_aux\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-0.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-0.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-1.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-1.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-2.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-2.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-3.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-3.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-4.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-4.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-5.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-5.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-6.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-6.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-7.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-7.dat\ncopy file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/t_aux to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/t_aux\nexport failure number: 0, total: 1\n")])])]),s("ul",[s("li",[t._v("不增加 "),s("code",[t._v("--reserve")]),t._v(" flag 表示不保留源文件，即移动扇区文件。如果目标和源在磁盘同一个分区，这种方式速度很快，建议使用此方式。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> ./damocles-manager util sealer sectors export --miner=t04079 files --dest-path=/storage-nfs-4/dest/t04079 --numbers 160\nmove sector 160 file...\nmove file from /storage-nfs-4/src/t04079/update/s-t04079-160 to /storage-nfs-4/dest/t04079/update/s-t04079-160\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/p_aux to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/p_aux\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-0.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-0.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-1.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-1.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-2.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-2.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-3.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-3.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-4.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-4.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-5.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-5.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-6.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-6.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-7.dat to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/sc-02-data-tree-r-last-7.dat\nmove file from /storage-nfs-4/src/t04079/update-cache/s-t04079-160/t_aux to /storage-nfs-4/dest/t04079/update-cache/s-t04079-160/t_aux\nexport failure number: 0, total: 1\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("什么时候需要迁移扇区持久化文件呢？当 "),s("code",[t._v("damocles")]),t._v(" 和 "),s("code",[t._v("lotus-miner")]),t._v(" 的持久化目录不一致时。在通常情况下，我们不建议对扇区文件进行迁移，因为迁移比较耗时，过程中可能导致窗口期的 "),s("code",[t._v("wdPoSt")]),t._v(" 失败。\n比较好的做法就是将 "),s("code",[t._v("damocles")]),t._v(" 的持久化目录也配置到 "),s("code",[t._v("lotus-miner")]),t._v(" 的存储列表中。")]),t._v(" "),s("p",[t._v("假设 "),s("code",[t._v("lotus-miner")]),t._v(" 原来的 "),s("code",[t._v("store")]),t._v(" 列表有：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./lotus-miner storage list\n4e34aa51-e955-4542-bd3a-6da3befc15a4:\n        [############                                      ] 54.58 TiB/217.4 TiB 25%\n        Unsealed: 0; Sealed: 0; Caches: 0; Updated: 0; Update-caches: 0; Reserved: 0 B\n        Weight: 10; Use: Store\n        Local: /storage-nfs-4/thelt/t05114\n        URL: http://127.0.0.1:2345/remote\n")])])]),s("p",[t._v("切换到 "),s("code",[t._v("damocles")]),t._v(" 后为此 miner 新增存储列表如下：")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Common.PersistStores")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t05114_01"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/storage-nfs-4/t05114_01"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Common.PersistStores")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t05114_02"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/storage-nfs-4/t05114_02"')]),t._v("\n")])])]),s("p",[t._v("我们只需将这两个目录 "),s("code",[t._v("attach")]),t._v(" 到 "),s("code",[t._v("lotus-miner")]),t._v(" 的存储列表中：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ ./lotus-miner storage attach --store --init /storage-nfs-4/t05114_02\n$ ./lotus-miner storage attach --store --init /storage-nfs-4/t05114_01\n")])])]),s("p",[t._v("添加后在列表中出现即表示成功。")])]),t._v(" "),s("h4",{attrs:{id:"元数据导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据导出"}},[t._v("#")]),t._v(" 元数据导出")]),t._v(" "),s("p",[t._v("仅修改"),s("code",[t._v("/storage/nextid")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./damocles-manager util sealer sectors export --miner=<miner address> metadata \\\n--dest-repo=<lotus-miner repo> \\\n--next-number=<next number> \\\n--only-next-number=true \n")])])]),s("blockquote",[s("p",[s("em",[s("strong",[s("code",[t._v("next-number")]),t._v(" 是必填项，最好为已封装扇区中最大的扇区号，"),s("code",[t._v("lotus-miner")]),t._v(" 中新分配的扇区号是这里设置的值 +1。")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("dest-repo")]),t._v(" 使用绝对路径，如 "),s("code",[t._v("/root/.lotusminer")]),t._v("。")])]),t._v(" "),s("blockquote",[s("p",[t._v("修改 "),s("code",[t._v("/storage/nextid")]),t._v(" 需要在 "),s("code",[t._v("lotus-miner")]),t._v(" 开始新的扇区封装之前完成。一旦用 "),s("code",[t._v("lotus-miner")]),t._v(" 开始了封装，此修改将无效，这是 "),s("code",[t._v("lotus-miner")]),t._v(" 自身的分配机制决定的，具体参考 "),s("a",{attrs:{href:"https://github.com/filecoin-project/lotus/blob/master/storage/pipeline/numassign.go#L90",target:"_blank",rel:"noopener noreferrer"}},[t._v("lotus-miner next-sid 分配"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("导出元数据，并设置新扇区号：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./damocles-manager util sealer sectors export --miner=<miner address> metadata \\\n--dest-repo=<lotus-miner repo> \\\n--next-number=<next number>\n")])])]),s("blockquote",[s("p",[s("em",[s("strong",[t._v("next-number 为可选项，不设置时处理为已封装的最大扇区号。设置时，如果值小于已封装的最大扇区号，则处理为已封装的最大扇区号，否则处理为设置的值。")])])])]),t._v(" "),s("p",[t._v("启动 "),s("code",[t._v("lotus-miner")]),t._v(",通过下面命令能够查询到 "),s("code",[t._v("damocles")]),t._v(" 封装的扇区即表示导出成功，后续就可以封装新的扇区了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./lotus-miner sector list\n")])])]),s("p",[t._v("查看新的扇区号：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./lotus-miner sectors numbers info\n")])])]),s("blockquote",[s("p",[s("code",[t._v("damocles")]),t._v(" 中可能存在已经封装上链的扇区状态还是 "),s("code",[t._v("Finalized: false")]),t._v(" 的情况，需要手动将其设置为完成状态才会被导出到 "),s("code",[t._v("lotus-miner")]),t._v("。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);