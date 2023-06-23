(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{386:function(e,a,t){"use strict";t.r(a);var r=t(17),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"damocles-worker-task-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker-task-management"}},[e._v("#")]),e._v(" damocles-worker task management")]),e._v(" "),t("p",[e._v("In the previous document, we mentioned that in the "),t("code",[e._v("damocles")]),e._v(" architecture, the process management of a sector is by "),t("code",[e._v("worker")]),e._v(".")]),e._v(" "),t("p",[e._v("Therefore, the management of sector tasks, especially exception handling, is also performed by the "),t("code",[e._v("worker")]),e._v(" instance where the sector is being processed.")]),e._v(" "),t("p",[e._v("However, it must be very inconvenient if all status checking and exception handling require remote access to the corresponding "),t("code",[e._v("worker")]),e._v(" machine to operate.")]),e._v(" "),t("p",[e._v("Therefore, in v0.2.0 and later versions, workers report status to sector-manager, and sector-manager manages workers remotely.")]),e._v(" "),t("p",[e._v("Below, we will explain both how worker can be managed locally and how sector-manager manage workers remotely.")]),e._v(" "),t("h2",{attrs:{id:"damocles-worker-local-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker-local-management"}},[e._v("#")]),e._v(" damocles-worker local management")]),e._v(" "),t("p",[e._v("The local management of "),t("code",[e._v("damocles-worker")]),e._v(" is mainly through a set of tools provided to call the management interface to operate…")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./dist/bin/damocles-worker worker\n")])])]),t("p",[e._v("With subcommands like…")]),e._v(" "),t("ul",[t("li",[e._v("list")]),e._v(" "),t("li",[e._v("pause")]),e._v(" "),t("li",[e._v("resume")])]),e._v(" "),t("h3",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[e._v("#")]),e._v(" list")]),e._v(" "),t("p",[t("code",[e._v("list")]),e._v(" is used to list the current state of all "),t("code",[e._v("sealing_thread")]),e._v("s in the currently running "),t("code",[e._v("damocles-worker")]),e._v(" instance.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("damocles-worker worker -c <config file path> list\n")])])]),t("p",[e._v("Let's take the mock configuration in the codebase as an example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ ./dist/bin/damocles-worker worker -c ./damocles-worker/assets/damocles-worker.mock.toml list\n\n#0: "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store1"; sector_id=Some(s-t010000-2), paused=true, paused_elapsed=Some (17s), state=C1Done, last_err=Some("permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793/cointmpail/var finding [f3793/cointmpail/var] -proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]")\n#1: "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store2"; sector_id=Some(s-t010000-3), paused=true, paused_elapsed=Some (17s), state=C1Done, last_err=Some("permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793/cointmpail/var finding [f3793/cointmpail/var] -proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]")\n#2: "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store3"; sector_id=Some(s-t010000-1), paused=true, paused_elapsed=Some (17s), state=C1Done, last_err=Some("permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793/cointmpail/var finding [f3793/cointmpail/var] -proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]")\n')])])]),t("p",[e._v("As you can see, for each "),t("code",[e._v("sealing_thread")]),e._v(" , it will list")]),e._v(" "),t("ul",[t("li",[e._v("Index number")]),e._v(" "),t("li",[e._v("Local storage location information")]),e._v(" "),t("li",[e._v("Sector ID (if there is a sector task being processed)")]),e._v(" "),t("li",[e._v("If the task is paused")]),e._v(" "),t("li",[e._v("Paused time (if there are paused sector tasks)")]),e._v(" "),t("li",[e._v("current status")]),e._v(" "),t("li",[e._v("Last exception information (if there is a sector task suspended due to exception)")])]),e._v(" "),t("h3",{attrs:{id:"pause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[e._v("#")]),e._v(" pause")]),e._v(" "),t("p",[t("code",[e._v("pause")]),e._v(" is used to pause the "),t("code",[e._v("sealing_thread")]),e._v(" with the specified index number.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ damocles-worker worker -c <config file path> pause --index <index>\n")])])]),t("p",[e._v("Note that:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("index")]),e._v(" needs to match the index number from "),t("code",[e._v("list")]),e._v(" command.")])]),e._v(" "),t("h3",{attrs:{id:"resume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resume"}},[e._v("#")]),e._v(" resume")]),e._v(" "),t("p",[t("code",[e._v("resume")]),e._v(" is used to resume a suspended "),t("code",[e._v("sealing_thread")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("damocles-worker worker -c <config file path> resume [--state <state>] --index <index>\n")])])]),t("p",[e._v("Note that:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("index")]),e._v(" needs to match the index number from "),t("code",[e._v("list")]),e._v(" command.")]),e._v(" "),t("li",[t("code",[e._v("state")]),e._v(" is optional.")])]),e._v(" "),t("p",[e._v("If state is not supplied, the sector will try to restart with the current state; if the correct "),t("code",[e._v("state")]),e._v(" value is supplied, it will restart with the specified state")]),e._v(" "),t("p",[e._v("For different "),t("code",[e._v("sealing_thread")]),e._v(" task types, the optional status values ​​can be found in "),t("RouterLink",{attrs:{to:"/operation/11.task-status-flow.html"}},[e._v("11. Task Status Flow")])],1),e._v(" "),t("h2",{attrs:{id:"damocles-manager-remote-management-of-damocles-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager-remote-management-of-damocles-worker"}},[e._v("#")]),e._v(" damocles-manager remote management of damocles-worker")]),e._v(" "),t("p",[e._v("The management of damocles-worker by damocles-manager is mainly in two aspects:")]),e._v(" "),t("ol",[t("li",[e._v("Receive periodic report information of the worker instance")]),e._v(" "),t("li",[e._v("Call the management interface on the specified damocles-worker instance")])]),e._v(" "),t("p",[e._v("Remote management is done through a set of tools provided to call the management interface of damocles-manager, or a proxy call to the management interface of the specified damocles-worker.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./dist/bin/damocles-manager util worker\n")])])]),t("p",[e._v("The subcommands included are:")]),e._v(" "),t("ul",[t("li",[e._v("list")]),e._v(" "),t("li",[e._v("info")]),e._v(" "),t("li",[e._v("pause")]),e._v(" "),t("li",[e._v("resume")])]),e._v(" "),t("h3",{attrs:{id:"list-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-2"}},[e._v("#")]),e._v(" list")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("list")]),e._v(" here is used to list the worker profiles that have reported information to this "),t("code",[e._v("damocles-manager")]),e._v(" instance, for example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ./dist/bin/damocles-manager util worker list\nName Dest Threads Empty Paused Errors LastPing(with ! if expired)\n127.0.0.1 127.0.0.1:17890 3 0 3 3 2.756922465s\n")])])]),t("p",[e._v("As you can see, for each instance, it will list:")]),e._v(" "),t("ul",[t("li",[e._v("instance name (if no instance name is specified, it will be the ip used to connect to "),t("code",[e._v("damocles-manager")]),e._v(")")]),e._v(" "),t("li",[e._v("instance connection information")]),e._v(" "),t("li",[t("code",[e._v("sealing_thread")]),e._v(" number")]),e._v(" "),t("li",[e._v("The number of empty "),t("code",[e._v("sealing_thread")])]),e._v(" "),t("li",[e._v("The number of suspended "),t("code",[e._v("sealing_thread")])]),e._v(" "),t("li",[e._v("The number of "),t("code",[e._v("sealing_thread")]),e._v(" that have reported errors")]),e._v(" "),t("li",[e._v("The interval from the last report to the current time")])]),e._v(" "),t("h3",{attrs:{id:"info-pause-resume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#info-pause-resume"}},[e._v("#")]),e._v(" info / pause / resume")]),e._v(" "),t("p",[e._v("This set of commands is executed against the specified damocles-worker instance.")]),e._v(" "),t("p",[e._v("Their effects are equivalent to "),t("code",[e._v("damocles-worker")]),e._v("’s own "),t("code",[e._v("list")]),e._v(" / "),t("code",[e._v("pause")]),e._v(" / "),t("code",[e._v("resume")]),e._v(", which are used in the following ways.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("damocles-manager util worker info <worker instance name or address>")])]),e._v(" "),t("li",[t("code",[e._v("damocles-manager util worker pause <worker instance name or address> <thread index>")])]),e._v(" "),t("li",[t("code",[e._v("damocles-manager util worker resume <worker instance name or address> <thread index> [<next state>]")])])]),e._v(" "),t("p",[e._v("Specific information can be viewed through "),t("code",[e._v("help")]),e._v(", and the definition and effect of parameters are consistent with the "),t("code",[e._v("damocles-worker")]),e._v(" management tool.")]),e._v(" "),t("p",[e._v("for example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ./dist/bin/damocles-manager util worker info 127.0.0.1\n\nIndex Loc SectorID Paused PausedElapsed State LastErr\n0 /home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store1 s-t010000-2 true 13m42s C1Done permanent: No cached parameters found for stacked-proof-of-replication- merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]\n1      /home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store2  s-t010000-3  true    13m42s         C1Done  permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]\n2      /home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store3  s-t010000-1  true    13m42s         C1Done  permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);