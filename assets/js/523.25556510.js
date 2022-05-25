(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{1038:function(t,a,s){"use strict";s.r(a);var e=s(35),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[t._v("#")]),t._v(" Streams")]),t._v(" "),s("p",[t._v("Async streams form the foundation for how information flows from one end of the pipeline to the other. This allows nu to work with internal commands, external commands, and plugins in a way that's relatively seamless.")]),t._v(" "),s("p",[t._v("There are two fundamental types for streams in Nu: InputStream and OutputStream")]),t._v(" "),s("h2",{attrs:{id:"inputstream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputstream"}},[t._v("#")]),t._v(" InputStream")]),t._v(" "),s("p",[t._v("Let's look at the InputStream type a little closer:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BoxStream")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tagged")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("\n")])])]),s("p",[t._v("That is, it's an async stream which will send "),s("code",[t._v("Tagged<Value>")]),t._v(" into the command. For more information about tagging, see the chapter on "),s("RouterLink",{attrs:{to:"/contributor-book/metadata.html"}},[t._v("metadata")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"outputstream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputstream"}},[t._v("#")]),t._v(" OutputStream")]),t._v(" "),s("p",[t._v("Similar to InputStream above, an Output stream will return values from a command:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BoxStream")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnValue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Where a ReturnValue is:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("ReturnValue")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReturnSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShellError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("And a ReturnSuccess is:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("ReturnSuccess")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tagged")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Why is OutputStream different from InputStream? This comes down to a few differences in needs of the two ends of the stream. By the time data has gotten to the command, it's already been checked for any errors, so it's expected to be a pure data stream.")]),t._v(" "),s("p",[t._v("Output streams, on the other hand, have to be able to return two other types of data in addition to values: errors and actions.")]),t._v(" "),s("h3",{attrs:{id:"errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),s("p",[t._v("Errors that are passed down the stream will be detected as values are copied from one command to another. Once the error is detected, it will halt the streams progress and display an error.")]),t._v(" "),s("h3",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),s("p",[t._v("An action differs from a value in that where a value is a bit of data that the next command in the pipeline will see, an action is something intended only for the core Nu runtime. Actions will change the state of the shell itself by, for example, changing the current path, changing the current shell, updating internal side tables, and so on.")])])}),[],!1,null,null,null);a.default=r.exports}}]);