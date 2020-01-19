(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{229:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[s._v("#")]),s._v(" Configuration")]),s._v(" "),a("p",[s._v("Before you can start using heliosRX, you have to configure Firebase and heliosRX.\nUsually this should be very simple.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Configure Firebase")]),s._v(" "),a("p",[s._v("If you haven't configured firebase yet, first create a new project in the firebase console")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://console.firebase.google.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("console.firebase.google.com"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("then create a "),a("code",[s._v("firebase.json")]),s._v(" and "),a("code",[s._v(".firebaserc.js")]),s._v(" by typing:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("firebase login "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# when ushing firebase the 1st time")]),s._v("\nfirebase init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# select newly created project")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'firebase use' for existing firebase projects")]),s._v("\n")])])]),a("p",[s._v("Don't forget to also create a database for your project in the Firebase console.")])]),s._v(" "),a("h3",{attrs:{id:"create-folder-structure-and-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-folder-structure-and-configuration-files"}},[s._v("#")]),s._v(" Create folder structure and configuration files")]),s._v(" "),a("p",[s._v("Next, create the following folder structure:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p rules\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p src/models\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" rules/rules.bolt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" src/models/config.js\n")])])]),a("p",[s._v("after you successfully created these files and folders your directory structure\nshould look like this:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("├── rules               - Used for database access rules\n│   └── rules.bolt      - Default access rules\n└── src\n    └── models\n        ├── config.js   - Models are assigned to DB paths here\n        └── *           - Model definitions (Can be accessed through this.$models)\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("Create src/models/index.js")]),s._v(" "),a("p",[s._v("This won't be necessary in future releases, but for now please also create a new file "),a("code",[s._v("src/models/index.js")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" GenericStores "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./config.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" storeName "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" GenericStores "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  GenericStores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" storeName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" storeName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" GenericStores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("p",[s._v("alternatively you can run")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("helios init\n")])])]),a("p",[s._v("which will create these files and folders automatically.")]),s._v(" "),a("h3",{attrs:{id:"add-heliosrx-to-your-main-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-heliosrx-to-your-main-js"}},[s._v("#")]),s._v(" Add heliosRX to your main.js")]),s._v(" "),a("p",[s._v("Next in your "),a("code",[s._v("src/main.js")]),s._v(" you can import "),a("code",[s._v("rtdb")]),s._v(" as well as your model\ndefinitions and setup heliosRX:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file: src/main.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" heliosRX "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'heliosrx'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rtdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./firebase'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Import realtime database")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/models"')]),s._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("heliosRX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  devMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("      rtdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"configure-firebase-realtime-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-firebase-realtime-database"}},[s._v("#")]),s._v(" Configure Firebase Realtime Database")]),s._v(" "),a("p",[s._v("This is really up to you, but one way to do it, is to get your Firebase\nconfiguration and put it in a new file in "),a("code",[s._v("src/firebase.js")]),s._v(" that looks\nsomething like this:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file: src/firebase.js")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Firebase App (the core Firebase SDK) is always required and must be listed first")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" firebase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Add the Firebase products that you want to use")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/auth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"firebase/database"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO: Replace the following with your app's Firebase project configuration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" firebaseConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apiKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR API KEY>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  authDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR AUTH DOMAIN>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  databaseURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR DATABSE URL>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  projectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR PROJECT ID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  storageBucket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR STORAGE BUCKET>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  messagingSenderId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR MESSAING SENDER ID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  appId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<YOUR APP ID>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Initialize Firebase")]),s._v("\nfirebase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initializeApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("firebaseConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Initialize Realtime DB")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rtdb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" firebase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Please feel free to do this in a way that suits your needs best.\nThe important thing here is that we need to import "),a("code",[s._v("rtdb")]),s._v(" later on,\nwhich is why we're exporting it here.")])])}),[],!1,null,null,null);t.default=n.exports}}]);