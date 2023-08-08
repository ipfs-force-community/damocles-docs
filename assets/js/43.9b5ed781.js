(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{411:function(a,s,t){"use strict";t.r(s);var e=t(17),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"快速启用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速启用"}},[a._v("#")]),a._v(" 快速启用")]),a._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装必要的第三方库。")]),a._v(" "),t("p",[a._v("这一部分可以参考 "),t("code",[a._v("lotus")]),a._v(" 文档中的相应部分 "),t("a",{attrs:{href:"https://lotus.filecoin.io/lotus/install/linux/#software-dependencies",target:"_blank",rel:"noopener noreferrer"}},[a._v("Software dependencies"),t("OutboundLink")],1),a._v("。")])]),a._v(" "),t("li",[t("p",[a._v("下载代码库")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clone https://github.com/ipfs-force-community/damocles.git\n")])])])]),a._v(" "),t("li",[t("p",[a._v("编译 "),t("code",[a._v("damocles")]),a._v(" 的组件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd damocles\nmake all\n")])])]),t("p",[a._v("完成后，在 "),t("code",[a._v("./dist/bin")]),a._v(" 目录下会有 "),t("code",[a._v("damocles-worker")]),a._v(" 和 "),t("code",[a._v("damocles-manager")]),a._v(" 两个可执行文件。")])]),a._v(" "),t("li",[t("p",[a._v("分发可执行文件到需要的机器上。")])]),a._v(" "),t("li",[t("p",[a._v("将 "),t("code",[a._v("./damocles-worker/create-cgroup.sh")]),a._v(" 分发到 "),t("code",[a._v("damocles-worker")]),a._v(" 所在的机器上，并以准备运行 "),t("code",[a._v("damocles-worker")]),a._v(" 的系统用户身份执行。")]),a._v(" "),t("p",[a._v("这会为这样的用户生成相应的 "),t("code",[a._v("cgroup")]),a._v(" 组，以便"),t("code",[a._v("damocles-worker")]),a._v(" 为其外部执行器进程分配硬件资源。")])])]),a._v(" "),t("h2",{attrs:{id:"生产模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产模式"}},[a._v("#")]),a._v(" 生产模式")]),a._v(" "),t("h3",{attrs:{id:"damocles-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager"}},[a._v("#")]),a._v(" damocles-manager")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("初始化工作目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./dist/bin/damocles-manager daemon init\n")])])])]),a._v(" "),t("li",[t("p",[a._v("按需配置默认配置文件 "),t("code",[a._v("~/.damocles-manager/sector-manager.cfg")])]),a._v(" "),t("p",[a._v("配置项、作用、配置方法可以参考文档 "),t("RouterLink",{attrs:{to:"/zh/operation/04.damocles-manager的配置解析.html"}},[t("code",[a._v("04.damocles-manager的配置解析")])]),a._v("。")],1)]),a._v(" "),t("li",[t("p",[a._v("创建矿工号（可选；如果已有，可略过此步骤）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./damocles-manager util miner create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--from"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("OWNER_ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--owner"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("OWNER_ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--worker"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("WORKER_ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--sector-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("32GiB\n")])])]),t("p",[a._v("会得到如下返回值。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2023")]),a._v("-07-26T18:05:30.568+0800\tINFO\tcmd\tinternal/global.go:245\tmsg state: FillMsg\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"size"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"32GiB"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"from"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f3slzp2qdxtw44l6decoutkzyc5l4hxxxxxxxxxxxxxxxxxxxxxa"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"actor"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f018528"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"owner"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f3slzp2qdxtw44l6decoutkzyc5l4hxxxxxxxxxxxxxxxxxxxxxa"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"worker"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f3slzp2qdxtw44l6decoutkzyc5l4hxxxxxxxxxxxxxxxxxxxxxa"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mid"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bafy2bzaceb2amcob2z6hwggtgu6de4mjebvaviwr46ew2lh5lkcfmuyvqyvno"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2023")]),a._v("-07-26T18:06:30.576+0800\tINFO\tcmd\tinternal/util_miner.go:274\tminer actor: f0xxx9 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("f2drcv6746m5ehwxxxxxy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"size"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"32GiB"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"from"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f3slzp2qdxtw44l6decoutkzyc5l4hxxxxxxxxxxxxxxxxxxxxxa"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"actor"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f0xxx8"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"owner"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f1slzp2qdxtw44l6decoutkzyc5l4hxxxxxxxxxxxxxxxxxxxxxa"')]),a._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"worker"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"f3slzp2qdxtw44l6decoutkzyc5l4hxxxxxxxxxxxxxxxxxxxxxa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("结果中的"),t("code",[a._v("miner actor f0xxx9")]),a._v("就是创建的miner id。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意⚠️：--from 地址要保证有足够的余额，保证上链成功。")])])]),a._v(" "),t("li",[t("p",[a._v("启动 "),t("code",[a._v("damocles-manager")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./dist/bin/damocles-manager daemon run\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"damocles-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker"}},[a._v("#")]),a._v(" damocles-worker")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("规划用于封装过程中数据的本地存储，并使用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./dist/bin/damocles-worker store sealing-init -l <dir1> <dir2> <dir3> <...>\n")])])]),t("p",[a._v("命令创建并初始化数据目录。")])]),a._v(" "),t("li",[t("p",[a._v("挂载持久化数据目录，并使用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./dist/bin/damocles-worker store file-init -l <dir1>\n")])])]),t("p",[a._v("命令初始化数据目录。")])]),a._v(" "),t("li",[t("p",[a._v("(可选) "),t("RouterLink",{attrs:{to:"/zh/operation/15.damocles-worker_PC1_HugeTLB_Pages_支持.html#damocles-worker-pc1-hugetlb-pages-支持"}},[a._v("创建 NUMA 亲和的 hugepage 内存文件")])],1)]),a._v(" "),t("li",[t("p",[a._v("规划用于各阶段的CPU核、numa 区域等配置。")]),a._v(" "),t("p",[a._v("按需完成配置文件。")]),a._v(" "),t("p",[a._v("配置项、作用、配置方法可以参考文档 "),t("RouterLink",{attrs:{to:"/zh/operation/03.damocles-worker的配置解析.html"}},[t("code",[a._v("03.damocles-worker的配置解析")])]),a._v("。")],1)]),a._v(" "),t("li",[t("p",[a._v("启动 "),t("code",[a._v("damocles-worker")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/path/to/damocles-worker daemon -c /path/to/damocles-worker.toml\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"mock-模式-开发人员使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock-模式-开发人员使用"}},[a._v("#")]),a._v(" Mock 模式(开发人员使用)")]),a._v(" "),t("p",[a._v("默认情况下，可以通过一系列命令在单机上启动一组 "),t("code",[a._v("mock")]),a._v(" 实例。")]),a._v(" "),t("h3",{attrs:{id:"damocles-manager-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager-2"}},[a._v("#")]),a._v(" damocles-manager")]),a._v(" "),t("p",[a._v("通过")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./dist/bin/damocles-manager mock --miner=10000 --sector-size=2KiB\n")])])]),t("p",[a._v("命令启动一个模拟为 Actor 为 "),t("code",[a._v("t010000")]),a._v("   的 "),t("code",[a._v("SP")]),a._v(" 分配 2KiB 扇区的 "),t("code",[a._v("damocles-manager")]),a._v(" 服务。")]),a._v(" "),t("p",[a._v("这一步骤也可以通过代码目录中的 "),t("code",[a._v("./mock/start_manager.sh")]),a._v(" 脚本完成。")]),a._v(" "),t("h3",{attrs:{id:"damocles-worker-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker-2"}},[a._v("#")]),a._v(" damocles-worker")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("创建并初始化本地存储，初始化远程存储")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./dist/bin/damocles-worker store sealing-init -l ./mock-tmp/store1 ./mock-tmp/store2 ./mock-tmp/store3\n./dist/bin/damocles-worker store file-init -l ./mock-tmp/remote\n")])])]),t("p",[a._v("这一步骤也可以通过代码目录中的 "),t("code",[a._v("./mock/cleanup_store.sh")]),a._v(" 脚本完成。")])]),a._v(" "),t("li",[t("p",[a._v("以 "),t("code",[a._v("mock")]),a._v(" 配置启动 "),t("code",[a._v("damocles-worker")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("./dist/bin/damocles-worker daemon -c ./damocles-worker/assets/damocles-worker.mock.toml\n")])])]),t("p",[a._v("这一步骤也可以通过代码目录中的 "),t("code",[a._v("./mock/start_worker.sh")]),a._v(" 脚本完成。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);