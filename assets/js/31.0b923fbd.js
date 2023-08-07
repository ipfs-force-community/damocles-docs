(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{397:function(e,s,a){"use strict";a.r(s);var t=a(17),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"快速启用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速启用"}},[e._v("#")]),e._v(" 快速启用")]),e._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("安装必要的第三方库。")]),e._v(" "),a("p",[e._v("这一部分可以参考 "),a("code",[e._v("lotus")]),e._v(" 文档中的相应部分 "),a("a",{attrs:{href:"1"}},[e._v("building-from-source")]),e._v("。")])]),e._v(" "),a("li",[a("p",[e._v("下载代码库")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/ipfs-force-community/venus-cluster.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("编译 "),a("code",[e._v("venus-cluster")]),e._v(" 的组件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd venus-cluster\nmake all\n")])])]),a("p",[e._v("完成后，在 "),a("code",[e._v("./dist/bin")]),e._v(" 目录下会有 "),a("code",[e._v("venus-worker")]),e._v(" 和 "),a("code",[e._v("venus-sector-manager")]),e._v(" 两个可执行文件。")])]),e._v(" "),a("li",[a("p",[e._v("分发可执行文件到需要的机器上。")])]),e._v(" "),a("li",[a("p",[e._v("将 "),a("code",[e._v("./venus-worker/create-cgroup.sh")]),e._v(" 分发到 "),a("code",[e._v("venus-worker")]),e._v(" 所在的机器上，并以准备运行 "),a("code",[e._v("venus-worker")]),e._v(" 的系统用户身份执行。")]),e._v(" "),a("p",[e._v("这会为这样的用户生成相应的 "),a("code",[e._v("cgroup")]),e._v(" 组，以便"),a("code",[e._v("venus-worker")]),e._v(" 为其外部执行器进程分配硬件资源。")])])]),e._v(" "),a("h2",{attrs:{id:"mock-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mock-模式"}},[e._v("#")]),e._v(" Mock 模式")]),e._v(" "),a("p",[e._v("默认情况下，可以通过一系列命令在单机上启动一组 "),a("code",[e._v("mock")]),e._v(" 实例。")]),e._v(" "),a("h3",{attrs:{id:"venus-sector-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sector-manager"}},[e._v("#")]),e._v(" venus-sector-manager")]),e._v(" "),a("p",[e._v("通过")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-sector-manager mock --miner=10000 --sector-size=2KiB\n")])])]),a("p",[e._v("命令启动一个模拟为 Actor 为 "),a("code",[e._v("t010000")]),e._v("   的 "),a("code",[e._v("SP")]),e._v(" 分配 2KiB 扇区的 "),a("code",[e._v("venus-sector-manager")]),e._v(" 服务。")]),e._v(" "),a("p",[e._v("这一步骤也可以通过代码目录中的 "),a("code",[e._v("./mock/start_smgr.sh")]),e._v(" 脚本完成。")]),e._v(" "),a("h3",{attrs:{id:"venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker"}},[e._v("#")]),e._v(" venus-worker")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("创建并初始化本地存储，初始化远程存储")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-worker store sealing-init -l ./mock-tmp/store1 ./mock-tmp/store2 ./mock-tmp/store3\n./dist/bin/venus-worker store file-init -l ./mock-tmp/remote\n")])])]),a("p",[e._v("这一步骤也可以通过代码目录中的 "),a("code",[e._v("./mock/cleanup_store.sh")]),e._v(" 脚本完成。")])]),e._v(" "),a("li",[a("p",[e._v("以 "),a("code",[e._v("mock")]),e._v(" 配置启动 "),a("code",[e._v("venus-worker")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-worker daemon -c ./venus-worker/assets/venus-worker.mock.toml\n")])])]),a("p",[e._v("这一步骤也可以通过代码目录中的 "),a("code",[e._v("./mock/start_worker.sh")]),e._v(" 脚本完成。")])])]),e._v(" "),a("h2",{attrs:{id:"生产模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产模式"}},[e._v("#")]),e._v(" 生产模式")]),e._v(" "),a("h3",{attrs:{id:"venus-sector-manager-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sector-manager-2"}},[e._v("#")]),e._v(" venus-sector-manager")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("初始化工作目录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-sector-manager daemon init\n")])])])]),e._v(" "),a("li",[a("p",[e._v("按需配置默认配置文件 "),a("code",[e._v("~/.venus-sector-manager/sector-manager.cfg")])]),e._v(" "),a("p",[e._v("配置项、作用、配置方法可以参考文档 "),a("code",[e._v("04.venus-sector-manager的配置解析")]),e._v("。")])]),e._v(" "),a("li",[a("p",[e._v("启动 "),a("code",[e._v("venus-sector-manager")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-sector-manager daemon run\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("建议参看"),a("a",{attrs:{href:"1"}},[e._v("Poster 分离文档")]),e._v("分别将计算"),a("code",[e._v("windowPost")]),e._v("和"),a("code",[e._v("winningPost")]),e._v("的进程启动在各自进程专用的机器上。如果想让"),a("code",[e._v("secotr-manager")]),e._v("运行所有"),a("code",[e._v("Post")]),e._v("计算，可以这样启动"),a("code",[e._v("sector-manager")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ ./dist/bin/venus-sector-manager daemon run --miner --poster\n")])])])]),e._v(" "),a("h3",{attrs:{id:"venus-worker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker-2"}},[e._v("#")]),e._v(" venus-worker")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("规划用于封装过程中数据的本地存储，并使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-worker store sealing-init -l <dir1> <dir2> <dir3> <...>\n")])])]),a("p",[e._v("命令创建并初始化数据目录。")])]),e._v(" "),a("li",[a("p",[e._v("挂载持久化数据目录，并使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-worker store file-init -l <dir1>\n")])])]),a("p",[e._v("命令初始化数据目录。")])]),e._v(" "),a("li",[a("p",[e._v("规划用于各阶段的 CPU 核、numa 区域等配置。")]),e._v(" "),a("p",[e._v("按需完成配置文件。")]),e._v(" "),a("p",[e._v("配置项、作用、配置方法可以参考文档 "),a("code",[e._v("03.venus-worker的配置解析")]),e._v("。")])]),e._v(" "),a("li",[a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/path/to/venus-worker daemon -c /path/to/venus-worker.toml\n")])])]),a("p",[e._v("启动 "),a("code",[e._v("venus-worker")]),e._v("。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);