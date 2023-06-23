(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{404:function(r,t,e){"use strict";e.r(t);var a=e(17),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"damocles-manager的metrics使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager的metrics使用"}},[r._v("#")]),r._v(" damocles-manager的metrics使用")]),r._v(" "),e("p",[r._v("damocles使用metrics来记录程序运行过程中的性能指标，本篇主要讲damocles-manager中metrics的意义，关于如何使用metrics进行进程的监控，\n可以找到很多资料，不在此进行赘述。")]),r._v(" "),e("h2",{attrs:{id:"exporter-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exporter-info"}},[r._v("#")]),r._v(" exporter info")]),r._v(" "),e("p",[r._v("damocles-manager的exporter和rpc使用同样的端口，url为"),e("code",[r._v("/metrics")]),r._v(", 因此对于默认的部署方式，exporter的url为\n"),e("code",[r._v("host:1789/metrics")])]),r._v(" "),e("h2",{attrs:{id:"metrics-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metrics-type"}},[r._v("#")]),r._v(" metrics type")]),r._v(" "),e("h4",{attrs:{id:"venusclusterinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venusclusterinfo"}},[r._v("#")]),r._v(" VenusClusterInfo")]),r._v(" "),e("p",[r._v("damocles-manager启动的时候会将这个标记置成1。")]),r._v(" "),e("h4",{attrs:{id:"sectormanagernewsector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sectormanagernewsector"}},[r._v("#")]),r._v(" SectorManagerNewSector")]),r._v(" "),e("p",[r._v("sector manager记录新建扇区的计数器，存在miner的tag，根据不同的miner分开统计。")]),r._v(" "),e("h4",{attrs:{id:"sectormanagerprecommitsector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sectormanagerprecommitsector"}},[r._v("#")]),r._v(" SectorManagerPreCommitSector")]),r._v(" "),e("p",[r._v("sector manager记录扇区preCommit次数的计数器，存在miner的tag，根据不同的miner分开统计。")]),r._v(" "),e("h4",{attrs:{id:"sectormanagercommitsector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sectormanagercommitsector"}},[r._v("#")]),r._v(" SectorManagerCommitSector")]),r._v(" "),e("p",[r._v("sector manager记录扇区commit次数的计数器，存在miner的tag，根据不同的miner分开统计。")]),r._v(" "),e("h4",{attrs:{id:"proverwinningpostduration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proverwinningpostduration"}},[r._v("#")]),r._v(" ProverWinningPostDuration")]),r._v(" "),e("p",[r._v("prover侧记录winningPost时间跨度的计数器，存在miner的tag，根据不同的miner分开统计，并且计算时间会按s作单位，进行分段统计。"),e("strong",[r._v("目前还没有启用")]),r._v("。")]),r._v(" "),e("h4",{attrs:{id:"proverwindowpostduration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proverwindowpostduration"}},[r._v("#")]),r._v(" ProverWindowPostDuration")]),r._v(" "),e("p",[r._v("prover侧记录windowPost时间跨度的计数器，存在miner的tag，根据不同的miner分开统计,并且计算时间会按minute作单位，进行分段统计。"),e("strong",[r._v("目前还没有启用")]),r._v("。")]),r._v(" "),e("h4",{attrs:{id:"proverwindowpostcompleterate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proverwindowpostcompleterate"}},[r._v("#")]),r._v(" ProverWindowPostCompleteRate")]),r._v(" "),e("p",[r._v("prover侧记录windowPost完成率的计数器，在miner进入当前deadline倒数20个epoch的时候会开始显示partition的完成率，在没有进入倒计时状态的时候都显示1，\n进入之后显示完成率的小数，比如10个partition里有9个完成提交了，那么显示为0.9。存在miner的tag，根据不同的miner分开统计。"),e("strong",[r._v("目前还没有启用")]),r._v("。")]),r._v(" "),e("h4",{attrs:{id:"apirequestduration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apirequestduration"}},[r._v("#")]),r._v(" APIRequestDuration")]),r._v(" "),e("p",[r._v("damocles-manager的API都会记录其响应的时间，并且响应时间会按ms作单位，进行分段统计。")])])}),[],!1,null,null,null);t.default=s.exports}}]);