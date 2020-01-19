(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{215:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"designing-good-security-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#designing-good-security-rules"}},[t._v("#")]),t._v(" Designing Good Security Rules")]),t._v(" "),s("p",[t._v("Let's say we want to save messages in groups. There are different ways how this can be archived with Firebase Realtime Database. The following list gives an overview of the pros and cons of each approach.")]),t._v(" "),s("p",[t._v("Good Design requires that you think about how your data will be used in advance!\nEach approach has different pros and cons regarding flexibility, security rules, amount of data traffic, amount of stored data,\ncomplexity of client, sharding.")]),t._v(" "),s("h2",{attrs:{id:"nested-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nested-data"}},[t._v("#")]),t._v(" Nested data")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("messageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  createdAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServerTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Advantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Simple data fetching / subscription ("),s("code",[t._v("$models.group.subscribeNode(groupId)")]),t._v(") = fast")]),t._v(" "),s("li",[t._v("Server only has to manage one subscription")]),t._v(" "),s("li",[t._v("Simple security rules (just grant access to "),s("code",[t._v("/group/{groupId}")]),t._v(")")])]),t._v(" "),s("p",[s("strong",[t._v("Disadvantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Grant access to single message complicated")]),t._v(" "),s("li",[t._v("We have to know "),s("code",[t._v("groupId")])])]),t._v(" "),s("h2",{attrs:{id:"flat-de-normalized-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flat-de-normalized-data"}},[t._v("#")]),t._v(" Flat / de-normalized data")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("messageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  createdAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServerTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PushId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Advantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Less nested data")]),t._v(" "),s("li",[t._v("Sharding friendly")]),t._v(" "),s("li",[t._v("Easy sharing of access to data between groups")])]),t._v(" "),s("p",[s("strong",[t._v("Disadvantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("We have to do a "),s("code",[t._v("subscribeQuery")])]),t._v(" "),s("li",[t._v("We'll lose one sort key, filtering by another criterion is not possible anymore (e.g. give me all messages from group X, that are also newer than date Y).")])]),t._v(" "),s("h2",{attrs:{id:"multi-id-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-id-key"}},[t._v("#")]),t._v(" Multi-ID-Key")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("messageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Advantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Multiple sort keys possible (more than 2)")])]),t._v(" "),s("p",[s("strong",[t._v("Disadvantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Sorting must be defined a priori")])]),t._v(" "),s("h2",{attrs:{id:"time-sectioned"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-sectioned"}},[t._v("#")]),t._v(" Time sectioned")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("year"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("messageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Advantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Easy fetching of time sections")]),t._v(" "),s("li",[t._v("Easy archives of old data (just grab "),s("code",[t._v("/group/{groupId}/year/2019")]),t._v(", dump to json and delete node)")])]),t._v(" "),s("p",[s("strong",[t._v("Disadvantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Loading multiple years requires multiple subscriptions")]),t._v(" "),s("li",[t._v("Difficult to manage time ranges (e.g. show years 2010 to 2020)")])]),t._v(" "),s("h2",{attrs:{id:"data-duplication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-duplication"}},[t._v("#")]),t._v(" Data duplication")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("messageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cachedCreatedAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServerTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cachedTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("messageId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  createdAt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServerTimestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PushId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Advantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Best of approach 1 and 2 (one subscription/fast data + easy sharing/sharding)")])]),t._v(" "),s("p",[s("strong",[t._v("Disadvantage")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Managing data in two places")]),t._v(" "),s("li",[t._v("Data can become inconsistent")])])])}),[],!1,null,null,null);a.default=n.exports}}]);