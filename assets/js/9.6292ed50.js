(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{325:function(e,v,_){e.exports=_.p+"assets/img/vc_arc.d0caeac4.jpeg"},397:function(e,v,_){"use strict";_.r(v);var r=_(17),o=Object(r.a)({},(function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),r("p",[r("code",[e._v("venus-cluster")]),e._v("诞生的大背景是，大量存储提供者加入到"),r("code",[e._v("Filecoin")]),e._v("存储提供网络之后，发现 filecoin 扇区封装过程中存在着种种问题和可以优化的部分。这边暂时列举了 3 个。")]),e._v(" "),r("ul",[r("li",[e._v("第一，调度问题，lotus-miner 作为调度的核心，中心化负责扇区状态机的更新，导致管理和编排 worker 任务繁重，worker 专攻某封装阶段的模式，造成扇区临时文件在集群中的无谓传输和磁盘 io 的浪费。")]),e._v(" "),r("li",[e._v("第二，扩容问题，调配或者扩容，封装管道的硬件和软件配置方案在现有 lotus 实现中对运维要求非常非常高，封装时需要用到的，计算和存储资源往往不能被有效利用。")]),e._v(" "),r("li",[e._v("第三，自定义代码问题，很多有研发背景的存储提供者对扇区封装的不同阶段可能会有一些自定义的代码优化，修改 lotus 代码之后，后期网络升级等造成的代码维护都是不小的挑战。")])]),e._v(" "),r("p",[r("code",[e._v("venus-cluster")]),e._v("便是针对上述种种疼点，"),r("code",[e._v("Venus")]),e._v("研发团经过大量的运维实践和对技术的攻坚，最终形成的一套算力服务方案。")]),e._v(" "),r("h2",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" 架构")]),e._v(" "),r("p",[r("code",[e._v("Sealer")]),e._v("是"),r("code",[e._v("Filecoin")]),e._v("中负责算力增长和算力维持的一个子系统。他之前由"),r("code",[e._v("lotus-miner")]),e._v("+"),r("code",[e._v("lotus-worker")]),e._v("体系亦或是由"),r("code",[e._v("venus-sealer")]),e._v("+"),r("code",[e._v("venus-worker")]),e._v("体系负责，而在"),r("code",[e._v("venus-cluster")]),e._v("中，"),r("code",[e._v("Sealer")]),e._v("子系统由"),r("code",[e._v("venus-sector-manager")]),e._v("+"),r("code",[e._v("venus-worker")]),e._v("的体系全权负责。需要注意的是由"),r("code",[e._v("venus-sealer")]),e._v("编译出来的"),r("code",[e._v("venus-worker")]),e._v("和"),r("code",[e._v("venus-cluster")]),e._v("中编译出来的"),r("code",[e._v("worker")]),e._v("是完全不一样的东西。")]),e._v(" "),r("h3",{attrs:{id:"封装管道优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#封装管道优化"}},[e._v("#")]),e._v(" 封装管道优化")]),e._v(" "),r("p",[e._v("需要注意的是"),r("code",[e._v("venus-cluster")]),e._v("的中一些独有的概念，从根本上改变了封装管道的架构。")]),e._v(" "),r("ul",[r("li",[e._v("第一个非常重要的概念，和当前封装模式完全不一样的是，使用 venus-cluster 封装单个扇区的过程会在一台机器上完成。这意味着扇区封装所需要的临时文件不会在集群之间做无谓的传输，浪费集群磁盘读写和网络资源。")]),e._v(" "),r("li",[e._v("第二个巨大的改变就是从以前 lotus-miner 或者 venus-sealer 主动的，中心化的管理 worker 的封装任务，到现在 venus-worker 自己能够自主的领任务，一台 worker 完成单个扇区的所有封装任务。")]),e._v(" "),r("li",[e._v("第三个，封装需要用到的计算和存储资源，深度，灵活的配置管理，使得封装任务资源隔离，互不相争，高效利用。为稳定，高产的封装管道保驾护航！")])]),e._v(" "),r("h3",{attrs:{id:"运维优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运维优化"}},[e._v("#")]),e._v(" 运维优化")]),e._v(" "),r("p",[e._v("基于上述的一些根本改变，"),r("code",[e._v("venus-cluster")]),e._v("在运维管理存储集群事也有多方面的优化。")]),e._v(" "),r("p",[e._v("With architectural changes of "),r("code",[e._v("venus-cluster")]),e._v(", it presents new streamlined ways of managing your storage system.")]),e._v(" "),r("ul",[r("li",[e._v("第一，时空证明 worker 与封装管道的完全解偶，windowPost 和 winningPost 可单独部署在专门的机器上，防止资源竞争导致的 windowPost 失败和出块失败。避免集群收到惩罚，确保得到挖矿收益。")]),e._v(" "),r("li",[e._v("第二，部署复杂度大大降低，相同配置的硬件使用相同 worker 配置文件，使得部署速度大大提升，极大的方便了封装管道的横向扩容。")]),e._v(" "),r("li",[e._v("第三，得益于优化后的封装管道，封装任务现在有了更聪明的重试机制。在不得不需要人工介入的情况下，问题的快速定位。使得运维排查更加高效。")])]),e._v(" "),r("h3",{attrs:{id:"配置文件架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件架构"}},[e._v("#")]),e._v(" 配置文件架构")]),e._v(" "),r("p",[r("img",{attrs:{src:_(325),alt:"venus-cluster"}})]),e._v(" "),r("p",[e._v("深入展开"),r("code",[e._v("venus-cluster")]),e._v("配置架构，请看上面，"),r("code",[e._v("venus-sector-manager")]),e._v("，"),r("code",[e._v("venus-worker")]),e._v(", 和配置文件，和封装所需计算与存储资源，之间关系的一张大的架构图。左边是"),r("code",[e._v("sector-manager")]),e._v("。他有一份自己的配置文件。右边就是多个不同的"),r("code",[e._v("venus-worker")]),e._v("。我们深度展开第一个"),r("code",[e._v("venus-worker")]),e._v("，"),r("code",[e._v("venus-worker")]),e._v("包含三块内容，"),r("code",[e._v("venus-worker")]),e._v("机器上的存储资源（像是 NVMe 或者 SSD 的硬盘），然后中间的是，"),r("code",[e._v("venus-worker")]),e._v("自身的配置文件，最后，最下面的这个是 venus-worker 机器上计算资源（像是 CPU，RAM，GPU）。")]),e._v(" "),r("p",[r("code",[e._v("sector-manager")]),e._v("配置文件指向"),r("code",[e._v("venus-worker")]),e._v("配置文件的箭头具体指的是，"),r("code",[e._v("venus-worker")]),e._v("部分配置可以从"),r("code",[e._v("sector-manager")]),e._v("继承，也可以覆盖"),r("code",[e._v("sector-manager")]),e._v("的部分配置。"),r("code",[e._v("venus-worker")]),e._v("配置文件中非常重要的 2 个配置，需要着重关注的是，"),r("code",[e._v("[[sealing_thread]]")]),e._v("和"),r("code",[e._v("[[processors]]")]),e._v("这 2 个配置。这 2 个配置分别代表了，封装管道优化一个很大的难点，即是存储资源和计算资源匹配的问题。")]),e._v(" "),r("p",[e._v("在"),r("code",[e._v("venus-worker")]),e._v("的配置文件中，"),r("code",[e._v("[[sealing_thread]]")]),e._v("配置了，封装任务的控制和存储资源的规划，而"),r("code",[e._v("[[processors]]")]),e._v("则配置了计算资源的规划。上图中在"),r("code",[e._v("venus-worker")]),e._v("配置文件中配置一个"),r("code",[e._v("[[sealing_thread]]")]),e._v("便会在"),r("code",[e._v("venus-worker")]),e._v("机器能够访问使用到的存储资源中画出一片区域。该区域将被用于存储单个扇区封装过程中的零食文件。每个"),r("code",[e._v("[[sealing_thread]]")]),e._v("画出的区域互不干扰。都将被用于存储，封装单个扇区所需的临时文件。那么单台"),r("code",[e._v("venus-worker")]),e._v("机器能同时封装扇区的最大数量便为 存储资源大小 / 扇区临时文件大小。举个例子，"),r("code",[e._v("venus-worker")]),e._v("机器有 2000G 的存储资源，封装扇区临时文件大小为 520G，那么单台"),r("code",[e._v("venus-worker")]),e._v("机器能同时封装扇区的最大数量便为 2000 / 520。")]),e._v(" "),r("p",[e._v("那么最后，"),r("code",[e._v("[[processors]]")]),e._v("，"),r("code",[e._v("[[processors]]")]),e._v("配置对应的是计算资源的规划与相互隔离，上图中在"),r("code",[e._v("venus-worker")]),e._v("配置文件中配置一个"),r("code",[e._v("[[processors.pc1]]")]),e._v("便会在"),r("code",[e._v("venus-worker")]),e._v("机器的计算资源中画出一片区域，专门用于 pc1 任务的计算。如果像图中，配置了 3 个"),r("code",[e._v("[[processors.pc1]]")]),e._v("，那么该台"),r("code",[e._v("venus-worker")]),e._v("机器就能并行 3 个"),r("code",[e._v("pc1")]),e._v("。"),r("code",[e._v("[[processors.pc2]]")]),e._v("，"),r("code",[e._v("[[processors.c2]]")]),e._v("，"),r("code",[e._v("[[processors.tree_d]]")]),e._v("也是相同的道理。但是所有"),r("code",[e._v("[[processors]]")]),e._v("配置文件中的规划的计算资源总和不能超过该台"),r("code",[e._v("venus-worker")]),e._v("机器的计算资源。")])])}),[],!1,null,null,null);v.default=o.exports}}]);