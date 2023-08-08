(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{405:function(e,t,s){"use strict";s.r(t);var a=s(17),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"damocles-worker-pc1-hugetlb-pages-支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker-pc1-hugetlb-pages-支持"}},[e._v("#")]),e._v(" damocles-worker PC1 HugeTLB Pages 支持")]),e._v(" "),s("p",[e._v("在 PC1 阶段 "),s("code",[e._v("rust-fil-proofs")]),e._v(" 会 mmap 两块和扇区大小一致的大块内存。 这两块内存如果和 PC1 工作线程在同一 NUMA 节点会有效提升性能, 使用 "),s("a",{attrs:{href:"https://www.kernel.org/doc/html/v5.16/admin-guide/mm/hugetlbpage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HugeTLB Pages"),s("OutboundLink")],1),e._v(" 也会带来一定的性能提升。")]),e._v(" "),s("p",[e._v("经过测试，即便配置了 "),s("RouterLink",{attrs:{to:"/zh/operation/03.damocles-worker的配置解析.html#processorsstage_name"}},[e._v("numa_preferred")]),e._v(" 在运行一段时间后，系统也经常会跨 NUMA 节点申请这两块内存。使用我们改造后的 "),s("a",{attrs:{href:"https://github.com/ipfs-force-community/rust-fil-proofs/tree/force/master_v12.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("rust-fil-proofs"),s("OutboundLink")],1),e._v(" (当前版本的 damocles-worker 已支持) 可以使用预先创建好的和扇区大小一致的 hugepage 内存文件，该内存文件仅供上述 PC1 阶段的两大块内存的需求使用。可以一定程度上解决问题。")],1),e._v(" "),s("p",[e._v("提示: 原本的 mmap 方式优势在于由于 mmap 申请的内存由操作系统管理，即便在内存不足的情况下也能正常工作（内存严重不足可能会导致性能下降），用户可以根据自己的需要自行选择是否使用此功能。")]),e._v(" "),s("h3",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[e._v("#")]),e._v(" 使用方法")]),e._v(" "),s("p",[e._v("下文将演示启用两个 PC1 外部执行器子进程，两个 PC1 子进程分别运行在 NUMA0 和 NUMA1。并且每个 PC1 子进程的并发数为 1。")]),e._v(" "),s("h4",{attrs:{id:"_1-为每个-numa-node-分配足够的-persistent-hugepages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为每个-numa-node-分配足够的-persistent-hugepages"}},[e._v("#")]),e._v(" 1. 为每个 NUMA node 分配足够的 Persistent hugepages.")]),e._v(" "),s("p",[e._v("单个 PC1 任务需要 64 GiB 的 persistent hugepages, 用户应该按照自己的需求分配足够的 persistent hugepages。")]),e._v(" "),s("p",[e._v("下面命令演示分配 128 GiB 的 persistent hugepages:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 为 NUMA node 0 分配 64GiB, PageSize 为 1GiB 的 Persistent HugeTLB Pages 内存")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"64"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /sys/devices/system/node/node0/hugepages/hugepages-1048576kB/nr_hugepages\n$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 为 NUMA node 1 分配 64GiB, PageSize 为 1GiB Persistent HugeTLB Pages 内存")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"64"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" /sys/devices/system/node/node1/hugepages/hugepages-1048576kB/nr_hugepages\n")])])]),s("p",[e._v("更多信息请参考 "),s("a",{attrs:{href:"https://www.kernel.org/doc/html/v5.16/admin-guide/mm/hugetlbpage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HugeTLB Pages"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"_2-挂载-hugetlbfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-挂载-hugetlbfs"}},[e._v("#")]),e._v(" 2. 挂载 hugetlbfs")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /mnt/huge_1g\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mount")]),e._v(" -t hugetlbfs -o "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("pagesize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1g none /mnt/huge_1g\n")])])]),s("p",[e._v("上面的 "),s("code",[e._v("mount")]),e._v(" 命令会挂载(虚拟)文件系统 "),s("code",[e._v("hugetlbfs")]),e._v(" 到 "),s("code",[e._v("/mnt/huge_1g")]),e._v(" 目录。在 "),s("code",[e._v("/mnt/huge_1g")]),e._v(" 目录中创建的任何文件都会使用 huge pages。")]),e._v(" "),s("p",[e._v("更多信息请参考 "),s("a",{attrs:{href:"https://www.kernel.org/doc/html/v5.16/admin-guide/mm/hugetlbpage.html#using-huge-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Huge Pages"),s("OutboundLink")],1)]),e._v(" "),s("h4",{attrs:{id:"_3-使用-damocles-worker-store-hugepage-init-工具创建-hugepage-内存文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用-damocles-worker-store-hugepage-init-工具创建-hugepage-内存文件"}},[e._v("#")]),e._v(" 3. 使用 damocles-worker-store-hugepage-init 工具创建 hugepage 内存文件")]),e._v(" "),s("p",[e._v("Usage:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("damocles-worker-store-hugepage-file-init \n\nUSAGE:\n   damocles-worker store hugepage-file-init --node <numa_node_index> --num <number_of_files> --path <path> --path_pattern <path_pattern> --size <size>\n\nFLAGS:\n   -h, --help       \n            Prints help information\n\n   -V, --version    \n            Prints version information\n\n\nOPTIONS:\n   -n, --node <numa_node_index>         \n            Specify the numa node\n\n   -c, --num <number_of_files>          \n            Specify the number of hugepage memory files to be created\n\n      --path <path>                    \n            Specify the path to the output hugepage memory files and using the default pattern\n            (/specified_hugepage_file_path/numa_$NUMA_NODE_INDEX).\n            The created files looks like this:\n            /specified_hugepage_file_path/numa_0/file\n            /specified_hugepage_file_path/numa_1/file\n            /specified_hugepage_file_path/numa_2/file\n            ...\n            \n            This argument will be ignored if `path_pattern` is specified.\n      --path_pattern <path_pattern>    \n            Specify the path pattern for the output hugepage memory files where $NUMA_NODE_INDEX represents \n            the numa node index placeholder, which extracts the number in the folder name as the numa node index.\n            \n            If both the argument `path` and the argument `path_pattern` are specified, the argument `path` will be\n            ignored.\n   -s, --size <size>                    \n            Specify the size of each hugepage memory file. (e.g., 1B, 2KB, 3kiB, 1MB, 2MiB, 3GB, 1GiB, ...)\n\n")])])]),s("p",[e._v("Example:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在 NUMA 节点 0 上创建 2 个大小为 32GiB 的 hugepage 内存文件")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ./dist/bin/damocles-worker store hugepage-file-init --node"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" --num"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" --size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("32GiB --path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/mnt/huge_1g/pc1_1"')]),e._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在 NUMA 节点 1 上创建 2 个大小为 32GiB 的 hugepage 内存文件")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ./dist/bin/damocles-worker store hugepage-file-init --node"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --num"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" --size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("32GiB --path"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/mnt/huge_1g/pc1_2"')]),e._v("\n\n$ tree /mnt/huge_1g\n/mnt/huge_1g\n├── pc1_1\n│   └── numa_0\n│       ├── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v(".0_GiB_0\n│       └── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v(".0_GiB_1\n└── pc1_2\n    └── numa_1\n        ├── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v(".0_GiB_0\n        └── "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v(".0_GiB_1\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" files\n")])])]),s("h4",{attrs:{id:"_4-配置-pc1-processor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置-pc1-processor"}},[e._v("#")]),e._v(" 4. 配置 pc1 processor")]),e._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# damocles-worker.toml")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("processors.pc1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[e._v("envs")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key property"}},[e._v("HUGEPAGE_FILES_PATH")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/mnt/huge_1g/pc1_1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[e._v("concurrent")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[e._v("processors.pc1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[e._v("envs")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key property"}},[e._v("HUGEPAGE_FILES_PATH")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/mnt/huge_1g/pc1_2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[e._v("concurrent")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ...")]),e._v("\n\n")])])]),s("h4",{attrs:{id:"_5-启动-damocles-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-damocles-worker"}},[e._v("#")]),e._v(" 5. 启动 damocles-worker")]),e._v(" "),s("p",[e._v("启动 damocles-worker 后，如果日志级别为 trace 并且出现以下日志则表示 HugeTLb files 配置成功。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2022-08-19T10:12:14.731440277+08:00 TRACE ThreadId(01) storage_proofs_porep::stacked::vanilla::memory_handling::numa_mem_pool: loaded memory file: /mnt/huge_1g/processor_a/numa_0/32.0_GiB_0\n2022-08-19T10:12:14.749523696+08:00 TRACE ThreadId(01) storage_proofs_porep::stacked::vanilla::memory_handling::numa_mem_pool: loaded memory file: /mnt/huge_1g/processor_a/numa_0/32.0_GiB_1\n2022-08-19T10:12:14.767479765+08:00 TRACE ThreadId(01) storage_proofs_porep::stacked::vanilla::memory_handling::numa_mem_pool: loaded memory file: /mnt/huge_1g/processor_a/numa_1/32.0_GiB_0\n2022-08-19T10:12:14.785486639+08:00 TRACE ThreadId(01) storage_proofs_porep::stacked::vanilla::memory_handling::numa_mem_pool: loaded memory file: /mnt/huge_1g/processor_a/numa_1/32.0_GiB_1\n2022-08-19T10:12:14.78549745+08:00 TRACE ThreadId(01) storage_proofs_porep::stacked::vanilla::memory_handling::numa_mem_pool: number of loaded memory files: numa_id: 0, loaded: 2; numa_id: 1, loaded: 2\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);