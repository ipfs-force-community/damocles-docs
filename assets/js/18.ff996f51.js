(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{384:function(e,t,o){"use strict";o.r(t);var n=o(17),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"standalone-poster-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#standalone-poster-node"}},[e._v("#")]),e._v(" Standalone PoSter node")]),e._v(" "),o("p",[e._v("In earlier versions, although "),o("code",[e._v("damocles-manager")]),e._v(" supports using "),o("code",[e._v("--poster")]),e._v(" and "),o("code",[e._v("--miner")]),e._v(" parameters of the "),o("code",[e._v("daemon run")]),e._v(" command to enable the corresponding module, the "),o("code",[e._v("post")]),e._v(" proof process is still of strong correlation with sector location information which makes it more limited and difficult to expand.")]),e._v(" "),o("p",[e._v("From v0.2.0 onwards, we have provided a series of functional combinations that make easy-to-use, scalable standalone PoSter nodes an option for "),o("code",[e._v("SP")]),e._v(" with large-scale operations.")]),e._v(" "),o("p",[e._v("Below, we will introduce these new features and provide a practice to complete the deployment of standalone PoSter nodes using these features. Subsequent documents use the node with "),o("code",[e._v("--poster")]),e._v(" enabled as an example, and the standalone "),o("code",[e._v("--miner")]),e._v(" node operates in a similar manner, which will not be described separately.")]),e._v(" "),o("h2",{attrs:{id:"proxy-node-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proxy-node-mode"}},[e._v("#")]),e._v(" Proxy node mode")]),e._v(" "),o("p",[e._v("We know that for PoSter nodes, the most important capability is to obtain real-time and accurate sector location information. In the current "),o("code",[e._v("damocles-manager")]),e._v(" version, we only provide metadata management based on the local embedded kv database (more to be supported).")]),e._v(" "),o("p",[e._v("This only allows data to be managed by one process, and direct data sharing across processes is not possible.")]),e._v(" "),o("p",[e._v("Therefore, we designed the proxy node mode to provide some metadata to other consumer nodes through network interfaces, thus realizing data sharing.")]),e._v(" "),o("h3",{attrs:{id:"how-to-use-the-proxy-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-proxy-node"}},[e._v("#")]),e._v(" How to use the proxy node")]),e._v(" "),o("p",[e._v("We have added the "),o("code",[e._v("--proxy")]),e._v(" parameter to the "),o("code",[e._v("daemon run")]),e._v(" command. Its format is like "),o("code",[e._v("{ip}:{port}")]),e._v(". When the startup command contains a valid "),o("code",[e._v("--proxy")]),e._v(" parameter, "),o("code",[e._v("{ip}:{port}")]),e._v(" will be used as data source for the current "),o("code",[e._v("damocles-manager")]),e._v(" node and the necessary metadata (read-only) management module will be constructed.")]),e._v(" "),o("p",[e._v("In addition to "),o("code",[e._v("--proxy")]),e._v(", we also provide switches that control whether proxy mode is enabled for specific data management modules.")]),e._v(" "),o("p",[e._v("We just provide "),o("code",[e._v("--proxy-sector-indexer-off")]),e._v(" switch for the time being. When "),o("code",[e._v("--proxy-sector-indexer-off")]),e._v(" is enabled, nodes use the "),o("code",[e._v("SectorIndexer")]),e._v(" database in their own data directory.")]),e._v(" "),o("p",[e._v("For example, if started with the "),o("code",[e._v("damocles-manager daemon run --miner")]),e._v(" command, it will launch a "),o("code",[e._v("damocles-manager")]),e._v(" instance listening on port "),o("code",[e._v("1789")]),e._v(" using "),o("code",[e._v("~/.damocles-manager")]),e._v(" as the data directory with mining module enabled.")]),e._v(" "),o("p",[e._v("At this time, we can use the following command to initialize and start a proxy node with the above instance as the data source on the same machine. This proxy node will use "),o("code",[e._v("~/.damocles-manager2")]),e._v(" as the data directory and listen to "),o("code",[e._v("2789")]),e._v(" port.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('damocles-manager --home ~/.damocles-manager2 daemon init\n// maintain configuration files\ndamocles-manager --home ~/.damocles-manager2 daemon run --proxy="127.0.0.1:1789" --listen=":2789" --poster\n')])])]),o("p",[e._v("The proxy node can provide the exact same and real-time sector location information as the source node.")]),e._v(" "),o("h3",{attrs:{id:"the-agent-node-uses-the-existing-configuration-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-agent-node-uses-the-existing-configuration-file"}},[e._v("#")]),e._v(" The agent node uses the existing configuration file")]),e._v(" "),o("p",[e._v("According to the method described in the previous section, we can already start an proxy node, but there is still a problem with this startup method: the configuration file of the proxy node needs to be written again, or copied from the data directory of the source node. This introduces additional maintenance work, especially when configuration files may change frequently.")]),e._v(" "),o("p",[e._v("For this, we also provide a "),o("code",[e._v("--conf-dir")]),e._v(" parameter, which is in the form of a directory path. When the startup command includes a valid "),o("code",[e._v("--conf-dir")]),e._v(" parameter, the node will use the configuration file that already exists in the specified directory as its own configuration file.")]),e._v(" "),o("p",[e._v("This saves the work of writing and maintaining configuration files for different source and agent nodes on the same machine and serving the same set of clusters.")]),e._v(" "),o("p",[e._v("Based on this function, the agent node startup method mentioned in the previous section can become:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('damocles-manager --home ~/.damocles-manager2 daemon run --proxy="127.0.0.1:1789" --listen=":2789" --conf-dir="~/.damocles-manager" --poster\n')])])]),o("p",[e._v("At this point, the source node and the proxy node will use the same batch of configuration files.")]),e._v(" "),o("h2",{attrs:{id:"ext-prover-executor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ext-prover-executor"}},[e._v("#")]),e._v(" ext-prover executor")]),e._v(" "),o("p",[e._v("In addition to sharing sector information, another challenge faced by standalone PoSter nodes is the utilization of hardware resources.")]),e._v(" "),o("p",[e._v("Limited by the underlying algorithm library, granularity of computing nodes utilizing GPUs is by process. This makes it difficult for PoSter nodes to effectively utilize the computing power of multiple GPUs, and it is also difficult to safely avoid proof timeouts when multiple "),o("code",[e._v("SP")]),e._v("s have conflicting "),o("code",[e._v("WindostPoSt")]),e._v(" proof windows.")]),e._v(" "),o("p",[e._v("For this, we provide an "),o("code",[e._v("ext-prover")]),e._v(" mechanism similar to the "),o("code",[e._v("ext processor")]),e._v(" in "),o("code",[e._v("damocles-worker")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ext-prover")]),e._v(" mechanism consists of two components:")]),e._v(" "),o("ol",[o("li",[e._v("The "),o("code",[e._v("--ext-prover")]),e._v(" parameter of the "),o("code",[e._v("daemon run")]),e._v(" command")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("ext-prover.cfg")]),e._v(" configuration file in the node data directory")])]),e._v(" "),o("p",[e._v("A default "),o("code",[e._v("ext-prover.cfg")]),e._v(" file looks like:")]),e._v(" "),o("div",{staticClass:"language-toml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-toml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Default config:")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[[WdPost]]")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#Bin = "/path/to/custom/bin"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#Args = ["args1", "args2", "args3"]')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Concurrent = 1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Weight = 1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#ReadyTimeoutSecs = 5")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[WdPost.Envs]")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#ENV_KEY = "ENV_VAL"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[[WinPost]]")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#Bin = "/path/to/custom/bin"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#Args = ["args1", "args2", "args3"]')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Concurrent = 1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#Weight = 1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#ReadyTimeoutSecs = 5")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#[WinPost.Envs]")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#ENV_KEY = "ENV_VAL"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n")])])]),o("p",[e._v("In recent versions, "),o("code",[e._v("daemon init")]),e._v(" initializes the "),o("code",[e._v("ext-prover.cfg")]),e._v(" file.")]),e._v(" "),o("p",[e._v("Users can write their own, or copy the corresponding files from a data directory initialized by the latest version to an existing data directory.")]),e._v(" "),o("p",[e._v("The functions of the configuration items in "),o("code",[e._v("ext-prover.cfg")]),e._v(" are very similar to the configuration blocks in "),o("code",[e._v("damocles-worker")]),e._v(", and users can refer to the corresponding documents for reference.")]),e._v(" "),o("p",[e._v("When the "),o("code",[e._v("--ext-prover")]),e._v(" parameter is included in the start command of "),o("code",[e._v("damocles-manager")]),e._v(", the node will use the "),o("code",[e._v("ext-prover.cfg")]),e._v(" configuration file in the configuration directory as the basis for starting child processes. For this configuration file, setting the "),o("code",[e._v("--conf-dir")]),e._v(" parameter will also have an effect.")]),e._v(" "),o("p",[e._v("If user sees logs like the following, then it means that "),o("code",[e._v("ext-prover")]),e._v(" is ready.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('2022-04-27T19:15:00.441+0800 INFO porver-ext ext/prover.go:122 response loop start {"pid": 24764, "ppid": 24732, "loop": "resp"}\n2022-04-27T19:15:00.441+0800 INFO porver-ext ext/prover.go:155 request loop start {"pid": 24764, "ppid": 24732, "loop": "req"}\n2022-04-27T19:15:00.468+0800 INFO processor-cmd processor/processor.go:35 ready {"pid": 24764, "ppid": 24732, "proc": "wdpost"}\n')])])]),o("h2",{attrs:{id:"deployment-practice"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployment-practice"}},[e._v("#")]),e._v(" Deployment Practice")]),e._v(" "),o("p",[e._v("Suppose we have a node machine with 8 GPUs, then we can provide stronger PoSt processing capabilities through the following configuration.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Configure and start the source node")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("damocles-manager daemon run --miner\n")])])]),o("p",[e._v("At this time, the source node only provides functions and capabilities related to sealing;")])]),e._v(" "),o("li",[o("p",[e._v("Configure the "),o("code",[e._v("ext-prover.cfg")]),e._v(" file:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "0"\nTMPDIR = "/tmp/ext-prover0/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "1"\nTMPDIR = "/tmp/ext-prover1/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "2"\nTMPDIR = "/tmp/ext-prover2/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "3"\nTMPDIR = "/tmp/ext-prover3/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "4"\nTMPDIR = "/tmp/ext-prover4/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "5"\nTMPDIR = "/tmp/ext-prover5/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "6"\nTMPDIR = "/tmp/ext-prover6/"\n\n[[WdPost]]\n[WdPost.Envs]\nCUDA_VISIBLE_DEVICES = "7"\nTMPDIR = "/tmp/ext-prover7/"\n\n')])])])]),e._v(" "),o("li",[o("p",[e._v("Initialize and start a standalone "),o("code",[e._v("PoSter")]),e._v(" node")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('damocles-manager --home=~/.damocles-individual-poster daemon init\ndamocles-manager --home=~/.damocles-individual-poster daemon run --proxy="127.0.0.1:1789" --poster --listen=":2789" --conf-dir="~/.damocles-manager" --ext-prover\n')])])])])]),e._v(" "),o("p",[e._v("By this way of deployment,")]),e._v(" "),o("ul",[o("li",[e._v("The source node provides both sealing and mining support")]),e._v(" "),o("li",[e._v("Proxy nodes provide "),o("code",[e._v("WindowPoSt")]),e._v(" support\n"),o("ul",[o("li",[e._v("The proxy node enables "),o("code",[e._v("ext-prover")]),e._v(", and each child process independently uses a GPU and a computing lock directory")])])])]),e._v(" "),o("p",[e._v("There is no conflict between "),o("code",[e._v("winningPost")]),e._v(" and "),o("code",[e._v("windowPost")]),e._v(" due to device usage")]),e._v(" "),o("h2",{attrs:{id:"limitations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),o("p",[e._v("So far, we have described the functions, principles and simple usage examples that stand-alone "),o("code",[e._v("PoSter")]),e._v(" nodes rely on.")]),e._v(" "),o("p",[e._v("However, this mode still has some limitations for very large "),o("code",[e._v("SP")]),e._v(" clusters, which may manifest in:")]),e._v(" "),o("ul",[o("li",[e._v("Unless the configuration is split, "),o("code",[e._v("PoSter")]),e._v(" node can only provide "),o("code",[e._v("PoSt")]),e._v(" support for some miners, it is difficult to provide horizontal scalability across machines;")]),e._v(" "),o("li",[e._v("The scheduling of the "),o("code",[e._v("PoSt")]),e._v(" and the serious conflict in the "),o("code",[e._v("PoSt")]),e._v(" window period still relies on the operation and maintenance to a certain extent;")])]),e._v(" "),o("p",[e._v("In general, the above limitations rely on a fully state decoupled, distributed "),o("code",[e._v("damocles-manager")]),e._v("implementation, which is one of the directions we focus on in the future.")])])}),[],!1,null,null,null);t.default=a.exports}}]);