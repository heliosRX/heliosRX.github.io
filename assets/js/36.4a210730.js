(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{233:function(e,t,n){"use strict";n.r(t);var i=n(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"lessons-learned"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lessons-learned"}},[e._v("#")]),e._v(" Lessons learned")]),e._v(" "),n("h3",{attrs:{id:"question-why-does-delete-sometimes-work-and-sometimes-not"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#question-why-does-delete-sometimes-work-and-sometimes-not"}},[e._v("#")]),e._v(" Question: Why does delete sometimes work and sometimes not?")]),e._v(" "),n("p",[e._v("How is it possible, that the following rules allow to delete\nin one case and don't allow to delete in the other case?")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("path /user/{uid}/outgoing_invitations is UserOutgoingInvitation[] {\n  delete(true)\n}\n\npath /user/{uid}/incoming_invitations is UserIncomingInvitation[] {\n  delete(true)\n}\n")])])]),n("h3",{attrs:{id:"answer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#answer"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),n("p",[e._v("Delete is defined at the wrong level, it should be:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("path /user/{uid}/outgoing_invitations {\n  /{invitationId} is UserOutgoingInvitation {\n    delete() { true }\n  }\n}\n")])])]),n("p",[e._v("The reason why it works in some cases is how delete is defined:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("delete( exp ) => write() { prior(this) != null && this == null && exp }\n")])])]),n("p",[e._v("Assuming "),n("code",[e._v("/user/{uid}/incoming_invitation")]),e._v(" has two existing children\nand "),n("code",[e._v("/user/{uid}/outgoing_invitations")]),e._v(" has one existing child node.\n"),n("code",[e._v("this")]),e._v(" will refer to the parent node (the list), not the child (which is not intended!).\nSo in case we send a delete to "),n("code",[e._v("/user/{uid}/incoming_invitation/{IdOfExistingChild}")]),e._v(",\n"),n("code",[e._v("this")]),e._v(" will be "),n("code",[e._v("null")]),e._v(" in one case and "),n("code",[e._v("{ [ ... other children, null ] }")]),e._v("\nin the other case. ("),n("code",[e._v("prior(this)")]),e._v(" will be "),n("code",[e._v("!= null")]),e._v(" in both cases.)")]),e._v(" "),n("p",[e._v("This is how delete is evaluated:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("incoming_invitation (has TWO children):\n  delete( true ) => write() { prior(this) != null && this == null && true }\n  delete( true ) => write() { true && false && true }\n  delete( true ) => write() { false }\n\noutgoing_invitations (has ONE child):\n  delete( true ) => write() { prior(this) != null && this == null && true }\n  delete( true ) => write() { true && true && true }\n  delete( true ) => write() { true }\n")])])]),n("p",[e._v("So the true meaning of")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("path /user/{uid}/incoming_invitations is UserIncomingInvitation[] {\n  delete(true)\n}\n")])])]),n("p",[e._v("is:")]),e._v(" "),n("p",[n("strong",[e._v("Only allow deletion, if the list has exactly one child")])]),e._v(" "),n("p",[e._v("The same is true for:")]),e._v(" "),n("p",[e._v("update(): "),n("strong",[e._v("Allow to change anything (also other children) if expression is true")]),e._v(" and\ncreate(): "),n("strong",[e._v("Becomes irrelavant, always true, when update is true")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("incoming_invitation (has TWO children):\n  create() { true }  write() { false }\n  update() { true }  write() { true }\n\noutgoing_invitations (has ONE child):\n  create() { true }  write() { false }\n  update() { true }  write() { true }\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);