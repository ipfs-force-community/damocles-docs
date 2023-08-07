(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{399:function(r,s,e){"use strict";e.r(s);var a=e(17),v=Object(a.a)({},(function(){var r=this,s=r.$createElement,e=r._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"自定义算法和存储方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义算法和存储方案"}},[r._v("#")]),r._v(" 自定义算法和存储方案")]),r._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),e("p",[e("strong",[r._v("damocles")]),r._v(" 希望在提供一套健壮的算力生产方案的同时，允许使用者最大限度地根据实际情况调配和定制自己的使用方式，其中就包括自定义算法和存储方案。")]),r._v(" "),e("p",[r._v("例如，使用者可以选择：")]),r._v(" "),e("ul",[e("li",[r._v("使用开源的优化算法")]),r._v(" "),e("li",[r._v("购买付费授权的闭源算法")]),r._v(" "),e("li",[r._v("购买外包计算服务")]),r._v(" "),e("li",[r._v("使用对象存储（如 S3）作为自己的持久化存储方案")])]),r._v(" "),e("p",[r._v("等，并将这些定制方案以极小的成本集成到 damocles 中。")]),r._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[r._v("#")]),r._v(" 使用")]),r._v(" "),e("p",[r._v("对于自定义算法和存储方案的使用，"),e("code",[r._v("SP")]),r._v(" 和开发者需要关注不同的内容。这里我们会分开阐述。")]),r._v(" "),e("h3",{attrs:{id:"sp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sp"}},[r._v("#")]),r._v(" SP")]),r._v(" "),e("p",[r._v("对于 "),e("code",[r._v("SP")]),r._v(" 来说，只需要关注如何将自定义的内容集成到算力生成过程中。这里主要分成多个部分：")]),r._v(" "),e("h3",{attrs:{id:"damocles-worker-上的-ext-processors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker-上的-ext-processors"}},[r._v("#")]),r._v(" damocles-worker 上的 ext-processors")]),r._v(" "),e("p",[r._v("关于 damocles-worker 上的 ext-processors，可以通过以下步骤集成：")]),r._v(" "),e("ol",[e("li",[r._v("准备好符合交互协议的可执行文件")]),r._v(" "),e("li",[r._v("在 damocles-worker 配置文件中的 "),e("code",[r._v("[[processors.{stage_name}]]")]),r._v(" 块中正确地配上要启用的阶段、可执行文件位置、参数、环境变量等")]),r._v(" "),e("li",[r._v("启动 damocles-worker 并检查自定义外部处理器的工作情况")])]),r._v(" "),e("p",[r._v("这部分内容可以参考：")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"1"}},[r._v("07.damocles-worker外部执行器的配置范例")])]),r._v(" "),e("li",[e("a",{attrs:{href:"damocles-worker-config"}},[r._v("03.damocles-worker的配置解析")])])]),r._v(" "),e("h3",{attrs:{id:"damocles-manager-上的-ext-provers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager-上的-ext-provers"}},[r._v("#")]),r._v(" damocles-manager 上的 ext-provers")]),r._v(" "),e("p",[r._v("damocles-manager 上涉及算法定制的只有 wining post 和 window post 两部分，这两部分可以以 ext-prover 的形式进行定制，起作用机制、使用方法和 ext-processors 都很相似。")]),r._v(" "),e("p",[r._v("这部分内容可以参考：")]),r._v(" "),e("p",[e("a",{attrs:{href:"1"}},[r._v("09.独立运行的poster节点#ext-prover-执行器")])]),r._v(" "),e("h3",{attrs:{id:"自定义存储方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义存储方案"}},[r._v("#")]),r._v(" 自定义存储方案")]),r._v(" "),e("p",[r._v("自定义存储方案可以是完全的非文件系统存储方案，如对象存储等，也可以是基于传统的大规模文件系统方案的简化，如将 NFS 挂载简化为一种自定义的轻量数据访问方式。")]),r._v(" "),e("p",[r._v("相比 ext-processors、ext-provers 来说，支持自定义存储相对来说要复杂一些，这种复杂度主要体现在：")]),r._v(" "),e("ol",[e("li",[r._v("对自定义存储的支持涉及到多个场景，如扇区封装过程中的数据持久化阶段、扇区升级过程中的原始数据访问阶段、winning post、window post 等。")]),r._v(" "),e("li",[r._v("damocles-manager 和 damocles-worker 都涉及到和存储实例的一些交互行为。")])]),r._v(" "),e("p",[r._v("简单来说，为了能够使用某种自定义存储方案，需要至少进行：")]),r._v(" "),e("ol",[e("li",[r._v("为 damocles-worker 配置支持这种存储方案的 "),e("code",[r._v("transfer")]),r._v(" 阶段 ext-processor")]),r._v(" "),e("li",[r._v("为 damocles-manager 配置支持这种存储方案的 winning post 和 window post ext-prover")]),r._v(" "),e("li",[r._v("为 damocles-manager 配置支持这种存储方案的 objstore 插件，参考 "),e("a",{attrs:{href:"1"}},[r._v("04.damocles-manager的配置解析")])])]),r._v(" "),e("p",[r._v("在具备上述条件后，damocles 即可基于定制化的存储方案工作。")]),r._v(" "),e("h3",{attrs:{id:"开发者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发者"}},[r._v("#")]),r._v(" 开发者")]),r._v(" "),e("p",[r._v("对于开发者来说，最重要的事情是按照 damocles 已经定义好的一系列接口和协议，开发出适用的自定义组件，如外部处理器、golang 插件等。")]),r._v(" "),e("h4",{attrs:{id:"ext-processors-ext-provers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ext-processors-ext-provers"}},[r._v("#")]),r._v(" ext-processors / ext-provers")]),r._v(" "),e("p",[r._v("从开发层面来说， ext-processors 和 ext-provers 是同一类实现，使用在了不同的场景中。")]),r._v(" "),e("p",[r._v("它的基本原理，是一个可执行文件，满足：")]),r._v(" "),e("ul",[e("li",[r._v("父进程通过 stdin / stdout 进行交互")]),r._v(" "),e("li",[r._v("符合 "),e("a",{attrs:{href:"1"}},[r._v("vc-processors")]),r._v(" 定义的交互协议和数据格式")])]),r._v(" "),e("p",[r._v("开发者可以通过以下步骤了解基本的开发过程：")]),r._v(" "),e("ol",[e("li",[r._v("了解原理和机制，参考 "),e("a",{attrs:{href:"1"}},[r._v("vc-processors: examples")])]),r._v(" "),e("li",[r._v("为需要定制的阶段实现相应的算法，参考 "),e("a",{attrs:{href:"1"}},[r._v("vc-processors: builtin/processors")])]),r._v(" "),e("li",[r._v("将已经实现的算法封装成可执行程序，参考 "),e("a",{attrs:{href:"1"}},[r._v("vc-worker: subcommand/processors")])])]),r._v(" "),e("h4",{attrs:{id:"damocles-manager-objstore-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager-objstore-plugin"}},[r._v("#")]),r._v(" damocles-manager objstore plugin")]),r._v(" "),e("p",[r._v("它本质是 golang 的 plugin，满足：")]),r._v(" "),e("ul",[e("li",[r._v("满足 "),e("a",{attrs:{href:"1"}},[r._v("golang plugin")]),r._v(" 的要求和限制")]),r._v(" "),e("li",[r._v("符合 "),e("a",{attrs:{href:"1"}},[r._v("damocles-manager objstore")]),r._v(" 定义的接口和语义")])]),r._v(" "),e("p",[r._v("开发者可以通过以下步骤了解基本的开发过程：")]),r._v(" "),e("ol",[e("li",[r._v("了解 damocles-manager "),e("a",{attrs:{href:"1"}},[r._v("插件框架")])]),r._v(" "),e("li",[r._v("了解接口定义和运作方式，参考："),e("a",{attrs:{href:"1"}},[r._v("damocles-manager objstore: Store")]),r._v(" 和 "),e("a",{attrs:{href:"1"}},[r._v("objstore: spi")])]),r._v(" "),e("li",[r._v("了解范例实现 "),e("a",{attrs:{href:"1"}},[r._v("damocles-manager: plugin/fsstore")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);