(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{413:function(e,a,_){"use strict";_.r(a);var v=_(17),s=Object(v.a)({},(function(){var e=this,a=e.$createElement,_=e._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"snapdeal-的支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#snapdeal-的支持"}},[e._v("#")]),e._v(" SnapDeal 的支持")]),e._v(" "),_("h2",{attrs:{id:"snapdeal-简述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#snapdeal-简述"}},[e._v("#")]),e._v(" SnapDeal 简述")]),e._v(" "),_("p",[_("code",[e._v("SnalDeal")]),e._v(" 是在 "),_("a",{attrs:{href:"https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0019.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("FIP-19"),_("OutboundLink")],1),e._v(" 中提出，在 "),_("code",[e._v("network15")]),e._v(" 上线的一种扇区升级方案。\n相比之前的升级方案需要重新、完整完成一遍封装过程的巨大开销，"),_("code",[e._v("SnalDeal")]),e._v(" 显得相当轻量，它的开销大约为：")]),e._v(" "),_("ul",[_("li",[e._v("完成一次 "),_("code",[e._v("add piece")])]),e._v(" "),_("li",[e._v("完成一次 "),_("code",[e._v("tree d")])]),e._v(" "),_("li",[e._v("完成一次 "),_("code",[e._v("snap_encode")]),e._v("，其开销约等于一次 "),_("code",[e._v("pc2")])]),e._v(" "),_("li",[e._v("完成一次 "),_("code",[e._v("snap_prove")]),e._v("，其开销约等于一次 "),_("code",[e._v("c1")]),e._v(" + "),_("code",[e._v("c2")]),e._v("\n因此，无论是对于新增的真实数据存储需求，还是对存量 "),_("code",[e._v("CC 扇区")]),e._v(" 进行转化，"),_("code",[e._v("SnalDeal")]),e._v(" 都具备相当的吸引力。")])]),e._v(" "),_("h2",{attrs:{id:"damocles-对-snapdeal-的支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#damocles-对-snapdeal-的支持"}},[e._v("#")]),e._v(" damocles 对 SnapDeal 的支持")]),e._v(" "),_("p",[e._v("目前，在 "),_("code",[e._v("lotus")]),e._v(" 和 "),_("code",[e._v("venus")]),e._v(" 现存的算力方案中，对于 "),_("code",[e._v("SnapDeal")]),e._v(" 的支持都局限于手动触发这样一种相对简陋的方式。\n"),_("code",[e._v("damocles")]),e._v(" 在设计之初就着眼于提供生产线模式的算力生产方案，为此我们提供了一种不太需要人工介入的 "),_("code",[e._v("SnapDeal")]),e._v(" 生产方案，我们称之为 "),_("code",[e._v("SnapUp")]),e._v("。它的步骤大致如下：")]),e._v(" "),_("ol",[_("li",[e._v("将已有的 "),_("code",[e._v("CC 扇区")]),e._v(" 批量导入为本地候选扇区")]),e._v(" "),_("li",[e._v("配置 "),_("code",[e._v("damocles-manager")]),e._v("，对指定 "),_("code",[e._v("SP")]),e._v(" 启用 "),_("code",[e._v("SnapUp")]),e._v(" 支持")]),e._v(" "),_("li",[e._v("配置 "),_("code",[e._v("damocles-worker")]),e._v("，将已有的 "),_("code",[e._v("sealing_thread")]),e._v(" 转化成 "),_("code",[e._v("SnapUp")]),e._v(" 生产计划，或新增用于 "),_("code",[e._v("SnapUp")]),e._v(" 的 "),_("code",[e._v("sealing_thread")]),e._v("\n整个过程中，使用者仅需关注本地候选扇区的导入和余量，其余过程都会自动完成。")])]),e._v(" "),_("h2",{attrs:{id:"示例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),_("p",[e._v("下面以一套 "),_("code",[e._v("butterfly")]),e._v(" 网络上的生产集群为例，逐步演示如何配置 "),_("code",[e._v("SnapUp")]),e._v(" 的生产方案。")]),e._v(" "),_("h3",{attrs:{id:"候选扇区的导入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#候选扇区的导入"}},[e._v("#")]),e._v(" 候选扇区的导入")]),e._v(" "),_("p",[e._v("使用新增的 "),_("code",[e._v("util sealer snap fetch")]),e._v(" 工具，能够按 "),_("code",[e._v("deadline")]),e._v(" 将满足限制（剩余生命周期大于180天，满足订单的最小生命周期）的 "),_("code",[e._v("CC 扇区")]),e._v(" 导入为本地候选扇区。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('./dist/bin/damocles-manager util sealer snap fetch 1153 3\n2022-04-15T04:28:03.380Z        DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "butterfly"}\n2022-04-15T04:28:03.401Z        INFO    cmd     internal/util_sealer_snap.go:53 candidate sectors fetched        {"available-in-deadline": 2, "added": 2}\n')])])]),_("h3",{attrs:{id:"观察候选扇区的余量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#观察候选扇区的余量"}},[e._v("#")]),e._v(" 观察候选扇区的余量")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('./dist/bin/damocles-manager util sealer snap candidates 1153\n2022-04-15T04:28:13.955Z        DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "butterfly"}\ndeadline  count\n3         2\n')])])]),_("p",[e._v("可以看到，当前存在 2 个 "),_("code",[e._v("#3 deadline")]),e._v(" 中的 "),_("code",[e._v("CC 扇区")]),e._v(" 作为候选，可供升级")]),e._v(" "),_("h3",{attrs:{id:"配置-damocles-worker"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置-damocles-worker"}},[e._v("#")]),e._v(" 配置 "),_("code",[e._v("damocles-worker")])]),e._v(" "),_("p",[_("code",[e._v("damocles-worker")]),e._v(" 中需要配置的内容主要是用于 "),_("code",[e._v("SnapUp")]),e._v(" 任务的 "),_("code",[e._v("sealing_thread")]),e._v("， 和针对 "),_("code",[e._v("snap_encode")]),e._v("、"),_("code",[e._v("snap_prove")]),e._v(" 的计算资源分配。")]),e._v(" "),_("p",[e._v("示例如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('[[sealing_thread]]\nlocation = "/data/local-snap"\nplan = "snapup"\n\n[processors.limitation.concurrent]\n...\ntree_d = 1\nsnap_encode = 1\nsnap_prove = 1\n\n[[processors.snap_encode]]\ncgroup.cpuset = "48-63"\nenvs = { FIL_PROOFS_USE_GPU_COLUMN_BUILDER = "1", FIL_PROOFS_USE_GPU_TREE_BUILDER = "1", CUDA_VISIBLE_DEVICES = "0" }\n\n[[processors.snap_prove]]\ncgroup.cpuset = "16-31"\nenvs = { CUDA_VISIBLE_DEVICES = "1" }\n')])])]),_("p",[_("code",[e._v("snap_encode")]),e._v(" 的计算资源分配可以参考 "),_("code",[e._v("pc2")]),e._v("，"),_("code",[e._v("snap_prove")]),e._v(" 的计算资源分配可以参考 "),_("code",[e._v("c2")])]),e._v(" "),_("h3",{attrs:{id:"配置-damocles-manager"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置-damocles-manager"}},[e._v("#")]),e._v(" 配置 "),_("code",[e._v("damocles-manager")])]),e._v(" "),_("p",[_("code",[e._v("damocles-manager")]),e._v(" 中需要的配置内容主要是为指定的 "),_("code",[e._v("SP")]),e._v(" 启用 "),_("code",[e._v("SnapUp")]),e._v("，示例如下：")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('[[Miners]]\nActor = 1153\n[Miners.Sector]\nInitNumber = 0\nMaxNumber = 10000\nEnabled = true\nEnableDeals = false\n\n[Miners.SnapUp]\nEnabled = true\nSender = "t1abjxfbp274xpdqcpuaykwkfb43omjotacm2p3za"\n')])])]),_("p",[e._v("其中")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("[Miners.Sector]")]),e._v(" 块中的配置内容不会影响 "),_("code",[e._v("SnapUp")]),e._v(" 的运转。")]),e._v(" "),_("li",[e._v("在这套配置下，将可以支持：\n"),_("ul",[_("li",[_("code",[e._v("CC 扇区")]),e._v(" 持续生产")]),e._v(" "),_("li",[_("code",[e._v("SnapUp")]),e._v(" 在本地候选扇区有余量的情况下持续生产")])])])]),e._v(" "),_("h3",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项：")]),e._v(" "),_("ol",[_("li",[e._v("考虑到 "),_("code",[e._v("snap_encode")]),e._v(" 和 "),_("code",[e._v("snap_prove")]),e._v(" 所需的计算资源，如果在同一个 "),_("code",[e._v("damocles-worker")]),e._v(" 实例中同时启用常规扇区封装和 "),_("code",[e._v("SnapUp")]),e._v(" 的话，可能需要考虑资源竞争的情况，可以参考 "),_("RouterLink",{attrs:{to:"/zh/operation/07.damocles-worker外部执行器的配置范例.html"}},[e._v("07.damocles-worker外部执行器的配置范例")])],1),e._v(" "),_("li",[e._v("考虑到扇区持久化数据的分布情况，用于 "),_("code",[e._v("SnapUp")]),e._v(" 的 "),_("code",[e._v("damocles-worker")]),e._v(" 需要同时能够以可读可写的方式访问所有持久化存储空间("),_("code",[e._v("persist store")]),e._v(")，且确保他们的命名和 "),_("code",[e._v("damocles-manager")]),e._v(" 中一致。")]),e._v(" "),_("li",[e._v("基于以上两点，我们推荐使用单独的设备专门进行 "),_("code",[e._v("SnapUp")]),e._v(" 的生产，从而避免常规扇区和 "),_("code",[e._v("SnapUp")]),e._v(" 混布带来的配置和运维的复杂度。")])]),e._v(" "),_("h2",{attrs:{id:"持续优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#持续优化"}},[e._v("#")]),e._v(" 持续优化")]),e._v(" "),_("p",[e._v("对于 "),_("code",[e._v("SnapUp")]),e._v(" 方案的完善和优化还在不断进行中，目前我们主要关注：")]),e._v(" "),_("ul",[_("li",[e._v("将半自动的候选扇区导入转换成自动方式，或提供等效的运维工具")]),e._v(" "),_("li",[e._v("更多候选扇区导入规则，如按存储配置导入")]),e._v(" "),_("li",[e._v("上链消息的聚合，以降低成本")]),e._v(" "),_("li",[e._v("其他能够简化运维、降低成本、提高效率的优化和工具")])])])}),[],!1,null,null,null);a.default=s.exports}}]);