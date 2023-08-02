(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(a,s,t){"use strict";t.r(s);var e=t(17),o=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"getting-started-with-damocles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-damocles"}},[a._v("#")]),a._v(" Getting started with damocles")]),a._v(" "),t("p",[a._v("This guide will walk you through how to qiuckly get started with damocles")]),a._v(" "),t("h2",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[a._v("#")]),a._v(" Preparation")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Install 3rd party dependencies. Please refer to instrcutions "),t("a",{attrs:{href:"1"}},[a._v("here")]),a._v(".")])]),a._v(" "),t("li",[t("p",[a._v("Download source code.")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/ipfs-force-community/damocles.git\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Compile "),t("code",[a._v("damocles")]),a._v(" component.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" damocles\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" all\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("After completion, you should be able to find binaries for both "),t("code",[a._v("damocles-worker")]),a._v(" and "),t("code",[a._v("damocles-manager")]),a._v(".")])]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[a._v("Copy the binaries to your machine(s).")])]),a._v(" "),t("li",[t("p",[a._v("Copy "),t("code",[a._v("./damocles-worker/create-cgroup.sh")]),a._v(" to all "),t("code",[a._v("damocles-worker")]),a._v(" machine and execute the script under same user which you are going to run "),t("code",[a._v("damocles-worker")]),a._v(".")])])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("The script will generate "),t("code",[a._v("cgroup")]),a._v(" for the user, which allows "),t("code",[a._v("damocles-worker")]),a._v(" to allocate hardware resources accordingly.")])]),a._v(" "),t("h2",{attrs:{id:"mock-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mock-mode"}},[a._v("#")]),a._v(" Mock mode")]),a._v(" "),t("p",[a._v("By default, starting a set of "),t("code",[a._v("mock")]),a._v(" instance can be done by a series of commands.")]),a._v(" "),t("h3",{attrs:{id:"damocles-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager"}},[a._v("#")]),a._v(" damocles-manager")]),a._v(" "),t("p",[a._v("For example, start "),t("code",[a._v("damocles-manager")]),a._v(" with a dummy miner actor "),t("code",[a._v("t010000")]),a._v(" and schedule sealing jobs with sector size of 2KiB.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-manager mock --miner"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" --sector-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2KiB\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[t("code",[a._v("./mock/start_smgr.sh")]),a._v(" could also be used to do this.")])]),a._v(" "),t("h3",{attrs:{id:"damocles-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker"}},[a._v("#")]),a._v(" damocles-worker")]),a._v(" "),t("ol",[t("li",[a._v("Init both sealing and permanent storage.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-worker store sealing-init -l ./mock-tmp/store1 ./mock-tmp/store2 ./mock-tmp/store3\n\n$ ./dist/bin/damocles-worker store file-init -l ./mock-tmp/remote\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[t("code",[a._v("./mock/cleanup_store.sh")]),a._v(" could also be used to do this.")])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Start "),t("code",[a._v("damocles-worker")]),a._v(" in "),t("code",[a._v("mock")]),a._v(" mode.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-worker daemon -c ./damocles-worker/assets/damocles-worker.mock.toml\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[t("code",[a._v("./mock/start_worker.sh")]),a._v(" could also be used to do this.")])]),a._v(" "),t("h2",{attrs:{id:"production-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#production-mode"}},[a._v("#")]),a._v(" Production mode")]),a._v(" "),t("h3",{attrs:{id:"damocles-manager-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-manager-2"}},[a._v("#")]),a._v(" damocles-manager")]),a._v(" "),t("ol",[t("li",[a._v("Init working directories.")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-manager daemon init\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Configure "),t("code",[a._v("~/.damocles-manager/sector-manager.cfg")]),a._v(" per your use case.")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("For more details on what each configuration does, please refer to "),t("a",{attrs:{href:"1"}},[a._v("this document")]),a._v(".")])]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Start "),t("code",[a._v("damocles-manager")]),a._v(".")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-manager daemon run\n")])])]),t("h3",{attrs:{id:"damocles-worker-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#damocles-worker-2"}},[a._v("#")]),a._v(" damocles-worker")]),a._v(" "),t("ol",[t("li",[a._v("Init sealing path for unsealed sector(s).")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-worker store sealing-init -l "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("3")]),a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("Init permanent storage path for sealed sector(s).")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ ./dist/bin/damocles-worker store file-init -l "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Configure your "),t("code",[a._v("damocles-worker")]),a._v(" according to your planning of CPU cores, numa, zone and etc for each sealing phases.")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("For more details on what each configuration does, please refer to "),t("a",{attrs:{href:"1"}},[a._v("this document")]),a._v(".")])]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[a._v("Start "),t("code",[a._v("damocles-worker")]),a._v(".")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ /path/to/damocles-worker daemon -c /path/to/damocles-worker.toml\n")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);