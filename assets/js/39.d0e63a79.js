(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{227:function(e,t,s){"use strict";s.r(t);var o=s(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-debug-security-rules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-debug-security-rules"}},[e._v("#")]),e._v(" How to debug Security Rules")]),e._v(" "),s("ol",[s("li",[e._v("Look for "),s("code",[e._v("[GENS]")]),e._v(" message, copy path to simulator (Database -> Rules)")]),e._v(" "),s("li",[e._v("Double check if path is correct (!) - is it pointing to parent or child? Add child path if necessary")]),e._v(" "),s("li",[e._v("Serialize payload with "),s("code",[e._v('JSON.stringify(temp1, null, " ")')]),e._v(" and copy to simulator")]),e._v(" "),s("li",[e._v("Set user in simulator to the value of "),s("code",[e._v("this.$models.user.defaultUserId")])]),e._v(" "),s("li",[e._v("Check why permission was denied")]),e._v(" "),s("li",[e._v("Check if check "),s("code",[e._v("database.rules.json")]),e._v(" makes sense (and was correctly compiled)")]),e._v(" "),s("li",[e._v("Check if check "),s("code",[e._v("database.rules.bolt")]),e._v(" is correct")])]),e._v(" "),s("p",[e._v("Also see "),s("a",{attrs:{href:"./03-security-rules-tips"}},[e._v("Tips")]),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);