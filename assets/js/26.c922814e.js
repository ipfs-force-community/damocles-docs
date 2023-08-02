(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{392:function(v,_,e){"use strict";e.r(_);var r=e(17),o=Object(r.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"简述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[v._v("#")]),v._v(" 简述")]),v._v(" "),e("p",[v._v("我们的不少合作伙伴曾大量、深度使用过 "),e("code",[v._v("lotus")]),v._v(" 的封装组件，也不乏自行定制的经历。")]),v._v(" "),e("p",[v._v("使用过程中，他们遇到不少痛点，也总结出许多经验。我们将这些思考汇总起来，尝试提供一套与 "),e("code",[v._v("lotus")]),v._v(" 封装组件思路不完全相同、以简洁、效率和灵活为最优先考虑，但同样具备竞争力的集群方案，供广大的 "),e("code",[v._v("SP")]),v._v(" （Storage Provider，存储供应商）选择。")]),v._v(" "),e("h2",{attrs:{id:"设计思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[v._v("#")]),v._v(" 设计思路")]),v._v(" "),e("p",[e("code",[v._v("venus-cluster")]),v._v(" 主要包含 "),e("code",[v._v("venus-sector-manager")]),v._v(" 和 "),e("code",[v._v("venus-worker")]),v._v(" 两个组件，其功能大致与 "),e("code",[v._v("lotus-miner")]),v._v(" 和 "),e("code",[v._v("lotus-seal-worker")]),v._v(" 的组合相当。")]),v._v(" "),e("p",[e("code",[v._v("venus-cluster")]),v._v(" 着眼于实现一套满足：")]),v._v(" "),e("ul",[e("li",[v._v("面向大量同质化计算设备，降低硬件需求类型、实例数量和部署复杂度")]),v._v(" "),e("li",[v._v("尽可能针对不同环节、不同类型的异常，安全地完成“自愈”，减少人工介入、提供生产效率")]),v._v(" "),e("li",[v._v("依托云服务、外包服务及其他可共享的基础设施，降低门槛，削减不必要的成本")])]),v._v(" "),e("p",[v._v("等目标的高效封装集群方案。")]),v._v(" "),e("p",[v._v("当然，明确且针对性强的设计意图可能导致这套方案并不普适于所有用户。例如，如果使用者已经拥有大量针对封装的不同阶段单独配置、形成搭配的设备，那么 "),e("code",[v._v("venus-cluster")]),v._v(" 方案可能并不能有效地提升。具体情形，可以在阅读完后续文档后，由用户自行判断。")]),v._v(" "),e("h3",{attrs:{id:"lotus-封装组件的模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lotus-封装组件的模式"}},[v._v("#")]),v._v(" lotus 封装组件的模式")]),v._v(" "),e("p",[v._v("在介绍 "),e("code",[v._v("venus-cluster")]),v._v(" 的具体设计思路之前，我们有必要回顾一下 "),e("code",[v._v("louts")]),v._v(" 相关组件的工作模式。")]),v._v(" "),e("p",[e("code",[v._v("lotus")]),v._v(" 的封装组件是一套标准的中心化调度集群：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("lotus-miner")]),v._v(" 是中心调度服务，对任务进行分配、管理；")]),v._v(" "),e("li",[e("code",[v._v("lotus-seal-worker")]),v._v(" 是封装执行体，负责完成分配到其之上的具体任务，并反馈给 "),e("code",[v._v("lotus-miner")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("lotus-miner")]),v._v(" 作为发起方，与 "),e("code",[v._v("lotus-seal-worker")]),v._v(" 之间通过 RPC 交互。")])]),v._v(" "),e("p",[v._v("这套设计优点十分明显：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("lotus-seal-worker")]),v._v(" 是几乎无状态的工作进程，理论上很方便进行横向扩容；")]),v._v(" "),e("li",[e("code",[v._v("lotus-miner")]),v._v(" 可以灵活地将任务在 "),e("code",[v._v("lotus-worker")]),v._v(" 之间进行调度。")])]),v._v(" "),e("p",[v._v("但是这套机制也存在另一面：")]),v._v(" "),e("ol",[e("li",[e("p",[e("code",[v._v("lotus-miner")]),v._v(" 作为调度核心：")]),v._v(" "),e("ul",[e("li",[v._v("承担着繁重的、不同类型的逻辑，如任务调度和管理，与链进行交互等")]),v._v(" "),e("li",[v._v("保留着需要同时兼容本地模式和远程模式的历史负担")])]),v._v(" "),e("p",[v._v("导致内部逻辑（状态机）复杂、异常处理难以细化。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("lotus-seal-worker")]),v._v(" 被完全设计为无状态的模式。")])])]),v._v(" "),e("p",[v._v("继而产生了一些问题，例如：")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("由于各个阶段之间对硬件资源的要求迥异，为了保证资源的合理分配，通常会将 "),e("code",[v._v("lotus-seal-worker")]),v._v(" 设置成每个实例支持一个阶段任务的模式，在同一机器上部署多个不同的实例，通过操作系统级别的资源控制（cgroup、docker、numa 等）进行隔离。")]),v._v(" "),e("p",[v._v("这导致在大规模集群中， "),e("code",[v._v("lotus-seal-worker")]),v._v(" 数量众多，编排和管理都较为复杂。")])]),v._v(" "),e("li",[e("p",[v._v("任何中心化任务调度机制都很有可能需要考虑计算和存储资源的匹配、亲和性等。")]),v._v(" "),e("p",[v._v("我们说 "),e("code",[v._v("lotus-seal-worker")]),v._v(" 几乎无状态，但是事实上，扇区封装过程中存在着 "),e("strong",[v._v("临时文件")]),v._v(" 这样一种特殊的“上下文”。对于这类“上下文”，"),e("code",[v._v("lotus-miner")]),v._v(" 长期以来简单地对其进行整体搬移。这导致了巨大的网络带宽开销，以及一系列随之产生的网络、存储异常的可能性。")]),v._v(" "),e("p",[v._v("直到 "),e("a",{attrs:{href:"damocles-manager-config"}},[v._v("PR 7453")]),v._v(" 提出“存储分组”概念之后，亲和性问题才初步解决，但这一方案给 "),e("code",[v._v("worker")]),v._v(" 的编排又增加了额外的复杂度。")])]),v._v(" "),e("li",[e("p",[v._v("大规模集群中存在着大量可能导致任务异常的因素，包括但不限于：计算错误、存储失效、网络抖动。而 "),e("code",[v._v("lotus-miner")]),v._v(" 内部缺乏有效感知异常根因的手段，使得其难以根据具体原因选择不同的异常恢复机制，只能统一粗粒度地处理或等待人工介入。")])])]),v._v(" "),e("h3",{attrs:{id:"venus-cluster-的设计思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#venus-cluster-的设计思路"}},[v._v("#")]),v._v(" venus-cluster 的设计思路")]),v._v(" "),e("p",[v._v("基于我们的目标和过去的经验，"),e("code",[v._v("venus-cluster")]),v._v(" 在设计之初就确立了几点思路：")]),v._v(" "),e("ul",[e("li",[v._v("简化逻辑")]),v._v(" "),e("li",[v._v("优化流程")]),v._v(" "),e("li",[v._v("隔离异常")]),v._v(" "),e("li",[v._v("降低部署复杂度")]),v._v(" "),e("li",[v._v("灵活替换功能组件")])]),v._v(" "),e("p",[v._v("下面我们会具体进行阐述。")]),v._v(" "),e("h4",{attrs:{id:"简化逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简化逻辑"}},[v._v("#")]),v._v(" 简化逻辑")]),v._v(" "),e("p",[v._v("我们重新规划了上下游组件之间的责任划分：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("venus-sector-manager")]),v._v(" 负责：\n"),e("ul",[e("li",[v._v("扇区封装过程中与链进行交互的部分，如 "),e("code",[v._v("Ticket")]),v._v(" 和 "),e("code",[v._v("Seed")]),v._v(" 的获取，消息的独立或聚合提交等")]),v._v(" "),e("li",[v._v("扇区封装任务的状态记录，如当前阶段、异常及原因等")]),v._v(" "),e("li",[v._v("已完成扇区的管理和维持，如响应 "),e("code",[v._v("WindowPoST")]),v._v(" 等")])])]),v._v(" "),e("li",[e("code",[v._v("venus-worker")]),v._v(" 负责：\n"),e("ul",[e("li",[v._v("管理各个阶段计算资源的分配")]),v._v(" "),e("li",[v._v("使用预先规划好的本地存储空间完成扇区封装的完整过程")])])])]),v._v(" "),e("p",[v._v("通过这样的划分，使得 "),e("code",[v._v("venus-sector-manager")]),v._v(" 只需被动地接收必须传递的信息，不必实现一套复杂的感知和调度系统；同时 "),e("code",[v._v("venus-worker")]),v._v(" 直接管理各类本地异常，便于执行不同的处理策略。")]),v._v(" "),e("p",[v._v("这样，两者的业务逻辑都不会频繁出现分支，相对便于理解及修改。")]),v._v(" "),e("h4",{attrs:{id:"优化流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化流程"}},[v._v("#")]),v._v(" 优化流程")]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("lotus")]),v._v(" 的封装流程中，最大的问题就是上文提到的，对封装过程中的临时文件的处理。此外还存在一些不尽如人意的点，例如：")]),v._v(" "),e("ul",[e("li",[v._v("订单的等待逻辑可能会使计算资源闲置")]),v._v(" "),e("li",[v._v("存储资源和计算资源的强制一对一匹配")]),v._v(" "),e("li",[v._v("部分阶段，内部多个环节对资源的需求度不一致")]),v._v(" "),e("li",[v._v("将与链的交互和扇区封装计算捆绑，带来的存储空间释放不及时等")])]),v._v(" "),e("p",[v._v("等。这些都会到封装的整体效率产生影响。")]),v._v(" "),e("h4",{attrs:{id:"隔离异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隔离异常"}},[v._v("#")]),v._v(" 隔离异常")]),v._v(" "),e("p",[v._v("一方面，主要的异常处理被移动到了 "),e("code",[v._v("venus-worker")]),v._v(" 一层，且在与 "),e("code",[v._v("venus-sector-manager")]),v._v(" 交互的接口设计中，就尽早考虑了区分网络异常和逻辑异常，从而使得 "),e("code",[v._v("venus-worker")]),v._v(" 比较容易感知到异常的具体原因。")]),v._v(" "),e("p",[v._v("另一方面，我们将封装过程中可能产生的错误类型归为四个级别，并设定了不同的处理方式：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("temp(orary)，临时：\n这个级别的错误通常明确属于临时性的，或者我们知道重试不会带来负面影响的。\n对于这类错误，"),e("code",[v._v("worker")]),v._v(" 会自动尝试重试（以 "),e("code",[v._v("recover_interval")]),v._v(" 为间隔，最多 "),e("code",[v._v("max_retries")]),v._v(" 次）。\n当重试次数超过设定的上限时，会自动升级到 "),e("code",[v._v("perm")]),v._v(" 级别。\nRPC 错误是比较典型的临时错误类型。")])]),v._v(" "),e("li",[e("p",[v._v("perm(anent)，持续：\n这个级别的错误通常出现在 "),e("code",[v._v("sealing")]),v._v(" 的过程中，无法简单判断是否可以安全重试，或一旦修复会有较大的收益（如不必重新完成 pre commit phase1）。\n这类错误会阻塞 "),e("code",[v._v("worker")]),v._v(" 线程，直到人工介入完成处理。")])]),v._v(" "),e("li",[e("p",[v._v("crit(tical)，严重：\n严重级别的错误在各个方面都与持续级别的错误比较相似。\n比较显著的区别是，严重级别的错误通常明确来自运行的环境而非 "),e("code",[v._v("sealing")]),v._v(" 的过程。\n如可甄别的本地文件系统异常、本地持久化数据库异常等都归入此类。\n严重级别的错误同样也会阻塞 "),e("code",[v._v("worker")]),v._v(" 线程直到人工介入。")])]),v._v(" "),e("li",[e("p",[v._v("abort，终止：\n遇到这个级别的错误，"),e("code",[v._v("worker")]),v._v(" 会直接放弃当前的 "),e("code",[v._v("sealing")]),v._v(" 进度，尝试重新开始一个新的流程。")])])]),v._v(" "),e("p",[v._v("这使得 "),e("code",[v._v("venus-worker")]),v._v(" 能够在更多不需要人工介入的异常场景下自行恢复，同时也给予将来用户定制异常处理策略提供了空间。")]),v._v(" "),e("h4",{attrs:{id:"降低部署复杂度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降低部署复杂度"}},[v._v("#")]),v._v(" 降低部署复杂度")]),v._v(" "),e("p",[e("code",[v._v("venus-worker")]),v._v(" 降低部署复杂度的努力主要体现在三个方面：")]),v._v(" "),e("ul",[e("li",[v._v("降低实例数")]),v._v(" "),e("li",[v._v("减少差异化的配置")]),v._v(" "),e("li",[v._v("降低硬件失效，尤其是存储失效影响的范围")])]),v._v(" "),e("p",[e("code",[v._v("venus-worker")]),v._v(" 是以一台设备一个实例的部署方式为目标设计的，同时内部融入了精简但足够的资源控制和隔离方式。使用者可以根据实际情况决定资源的分配策略以期达到最高的使用效率。同时，扇区粒度的任务隔离也可以做到确保部分硬件的失效不会蔓延影响到其他扇区任务。")]),v._v(" "),e("p",[e("code",[v._v("venus-sector-manager")]),v._v(" 被设计为一个实例可以为多个不同的 "),e("code",[v._v("SP")]),v._v(" 服务，同时得益于 "),e("code",[v._v("venus")]),v._v(" 系列链服务组件的设计，可以达成一些不太常见的运行模式：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("SP")]),v._v(" 联合体")]),v._v(" "),e("li",[v._v("使用云厂商设备的多算力集群协同")]),v._v(" "),e("li",[v._v("多 "),e("code",[v._v("SP")]),v._v(" 共享算力设备下的动态调配")])]),v._v(" "),e("h4",{attrs:{id:"灵活替换功能组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#灵活替换功能组件"}},[v._v("#")]),v._v(" 灵活替换功能组件")]),v._v(" "),e("p",[e("code",[v._v("venus-cluster")]),v._v(" 内的大量功能组件都是按照先抽象接口，再具体实现的路径设计的。这样做可以确保我们仅对必要的部分进行约束，保留不同实现并存的可能性，从而能够更容易地提供对诸如：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("定制化或闭源的封装算法执行器")])]),v._v(" "),e("li",[e("p",[v._v("共享的订单数据存储")])]),v._v(" "),e("li",[e("p",[v._v("部分阶段外包服务")])])]),v._v(" "),e("p",[v._v("等功能的支持。")]),v._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("p",[v._v("我们并不将 "),e("code",[v._v("venus-cluster")]),v._v(" 定义为一套全能的封装集群方案，我们希望它是在特定的场景下，满足对简洁、高效、灵活有需求的使用者的一种选择。")]),v._v(" "),e("p",[v._v("同时我们期待有更多的参与者为其引入更丰富的功能组件实现。")]),v._v(" "),e("p",[v._v("我们认为扩大“特定场景”的覆盖范围有助于扩大 "),e("code",[v._v("venus-cluster")]),v._v(" 的受众，但也不会贸然允诺对于 "),e("code",[v._v("venus-cluster")]),v._v(" 的全部功能需求，尤其是那些对其自身特质有影响的部分。")])])}),[],!1,null,null,null);_.default=o.exports}}]);