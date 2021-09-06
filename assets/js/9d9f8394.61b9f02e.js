"use strict";(self.webpackChunkvspacecode_github_io=self.webpackChunkvspacecode_github_io||[]).push([[360],{9222:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],a={id:"troubleshooting",title:"Troubleshooting"},d=void 0,l={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:'Error "\u2423 is undefined" when pressing SPC SPC',source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Bonus",permalink:"/docs/bonus"},next:{title:"Suggested plugins",permalink:"/docs/suggested-plugins"}},c=[{value:"Error &quot;\u2423 is undefined&quot; when pressing SPC SPC",id:"error--is-undefined-when-pressing-spc-spc",children:[]},{value:"<code>,</code> cannot find previous match",id:"-cannot-find-previous-match",children:[]},{value:"Unresponsive menu activation",id:"unresponsive-menu-activation",children:[{value:"Conflicting vim binding",id:"conflicting-vim-binding",children:[]},{value:"Virtual Machine or slow hardware",id:"virtual-machine-or-slow-hardware",children:[]},{value:"Other conflicts",id:"other-conflicts",children:[]}]},{value:"Known Issues",id:"known-issues",children:[]}],u={toc:c};function p(e){var n=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"error--is-undefined-when-pressing-spc-spc"},'Error "\u2423 is undefined" when pressing SPC SPC'),(0,r.kt)("p",null,"When pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"SPC SPC")," quickly on macOS, which-key doesn't recognize the second ",(0,r.kt)("inlineCode",{parentName:"p"},"SPC"),' sometimes,\nand the error "\u2423 is undefined" is displayed on the status bar.'),(0,r.kt)("p",null,"This problem is due to a keyboard settings on macOS that add a period with double-space."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mac keyboard preferences",src:t(7001).Z})),(0,r.kt)("p",null,"If you don't use this feature, disabling it should fix this issue. Otherwise, add the following overrides to your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," as a workaround:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"vspacecode.bindingOverrides": [\n    {\n        "keys": ["."],\n        "name": "Commands...",\n        "type": "command",\n        "command": "workbench.action.showCommands"\n    }\n],\n')),(0,r.kt)("h2",{id:"-cannot-find-previous-match"},(0,r.kt)("inlineCode",{parentName:"h2"},",")," cannot find previous match"),(0,r.kt)("p",null,"The default VSpaceCode configuration overrides ",(0,r.kt)("inlineCode",{parentName:"p"},",")," as a shortcut for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/major-mode"},"major mode"),";\ntherefore, the key ",(0,r.kt)("inlineCode",{parentName:"p"},",")," cannot get back to the previous match after a find ",(0,r.kt)("inlineCode",{parentName:"p"},"f{character}")," with Vim."),(0,r.kt)("p",null,"In order to remove this major mode shortcut, remove the following section from your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "before": [","],\n    "commands": [\n        "vspacecode.space",\n        {\n            "command": "whichkey.triggerKey",\n            "args": "m"\n        }\n    ],\n}\n')),(0,r.kt)("p",null,"Alternatively, you can change the shortcut key by changing ",(0,r.kt)("inlineCode",{parentName:"p"},'","')," in ",(0,r.kt)("inlineCode",{parentName:"p"},'"before"')," to other keys."),(0,r.kt)("h2",{id:"unresponsive-menu-activation"},"Unresponsive menu activation"),(0,r.kt)("p",null,"If you press ",(0,r.kt)("inlineCode",{parentName:"p"},"<spc>")," on a buffer and the which-key menu doesn't appear immediately, you might have one of the following problems."),(0,r.kt)("h3",{id:"conflicting-vim-binding"},"Conflicting vim binding"),(0,r.kt)("p",null,"If in your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," file you have a vim binding that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"<spc>"),", vim will wait for the second input when ",(0,r.kt)("inlineCode",{parentName:"p"},"<spc>")," is pressed."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"vim.normalModeKeyBindingsNonRecursive": [\n  {\n    "before": [" ", "d"],\n    "after": ["d", "d"]\n  },\n  {\n    "before": ["<space>"],\n    "commands": ["vspacecode.space"]\n  }\n]\n')),(0,r.kt)("p",null,"In order to solve it, remove the conflicting vim bindings from your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," completely,\nor use the VSpaceCode's ",(0,r.kt)("a",{parentName:"p",href:"./menu-customization#addreplace"},"overrides")," instead."),(0,r.kt)("h3",{id:"virtual-machine-or-slow-hardware"},"Virtual Machine or slow hardware"),(0,r.kt)("p",null,"If you are working on limiting resources consider using ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/remote-overview"},"VSCode remote")),(0,r.kt)("h3",{id:"other-conflicts"},"Other conflicts"),(0,r.kt)("p",null,"Try to remove all the extensions except the ones installed by VSpaceCode, and clean your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"keybindings.json")," files in order to spot some weird conflicts."),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File browser (bound to ",(0,r.kt)("inlineCode",{parentName:"li"},"<spc> f f"),") doesn't have a button to open local file with VSCode Remote")))}p.isMDXComponent=!0},7001:function(e,n,t){n.Z=t.p+"assets/images/mac_double_space-f3df24d8ae40b834f3206222d1b171e6.png"}}]);