(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{1003:function(e,n,t){"use strict";t.r(n);var a=t(35),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),t("p",[e._v("A common task in a shell is to control the environment that external applications will use. This is often done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.")]),e._v(" "),t("p",[e._v("You can see the current environment variables using the "),t("RouterLink",{attrs:{to:"/book/commands/env.html"}},[t("code",[e._v("env")])]),e._v(" command:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   #           name                 type                value                 raw\n──────────────────────────────────────────────────────────────────────────────────────────\n  16   DISPLAY              string               :0                   :0\n  17   EDITOR               string               nvim                 nvim\n  28   LANG                 string               en_US.UTF-8          en_US.UTF-8\n  35   PATH                 list<unknown>        [list 16 items]      /path1:/path2:/...\n  36   PROMPT_COMMAND       block                <Block 197>\n")])])]),t("p",[e._v("In Nushell, environment variables can be any value and have any type (see the "),t("code",[e._v("type")]),e._v(" column).\nThe actual value of the env. variable used within Nushell is under the "),t("code",[e._v("value")]),e._v(" column.\nYou can query the value directly using the "),t("code",[e._v("$env")]),e._v(" variable, for example, "),t("code",[e._v("$env.PATH | length")]),e._v(".\nThe last "),t("code",[e._v("raw")]),e._v(" column shows the actual value that will be sent to external applications (see "),t("a",{attrs:{href:"#environment-variable-conversions"}},[e._v("Environment variable conversions")]),e._v(" for details).")]),e._v(" "),t("p",[e._v("The environment is initially created from the Nu "),t("RouterLink",{attrs:{to:"/book/configuration.html"}},[e._v("configuration file")]),e._v(" and from the environment that Nu is run inside of.")],1),e._v(" "),t("h2",{attrs:{id:"setting-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-environment-variables"}},[e._v("#")]),e._v(" Setting environment variables")]),e._v(" "),t("p",[e._v("There are several ways to set an environment variable:")]),e._v(" "),t("h3",{attrs:{id:"let-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-env"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[t("code",[e._v("let-env")])])],1),e._v(" "),t("p",[e._v("Using the "),t("code",[e._v("let-env")]),e._v(" command is the most straightforward method")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> let-env FOO = 'BAR'\n")])])]),t("p",[e._v("'let-env' is similar to the "),t("strong",[e._v("export")]),e._v(" command in bash.")]),e._v(" "),t("p",[e._v("So if you want to extend the "),t("code",[e._v("PATH")]),e._v(" variable for example, you could do that as follows.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env PATH = ($env.PATH | prepend '/path/you/want/to/add')\n")])])]),t("p",[e._v("Here we've prepended our folder to the existing folders in the PATH, so it will have the highest priority.\nIf you want to give it the lowest priority instead, you can use the "),t("code",[e._v("append")]),e._v(" command.")]),e._v(" "),t("h3",{attrs:{id:"load-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-env"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/book/commands/load-env.html"}},[t("code",[e._v("load-env")])])],1),e._v(" "),t("p",[e._v("If you have more than one environment variable you'd like to set, you can use "),t("code",[e._v("load-env")]),e._v(" to create a table of name/value pairs and load multiple variables at the same time:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> load-env { "BOB": "FOO", "JAY": "BAR" }\n')])])]),t("h3",{attrs:{id:"one-shot-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#one-shot-environment-variables"}},[e._v("#")]),e._v(" One-shot environment variables")]),e._v(" "),t("p",[e._v("These are defined to be active only temporarily for a duration of executing a code block.\nSee "),t("RouterLink",{attrs:{to:"/book/environment.html#single-use-environment-variables"}},[e._v("Single-use environment variables")]),e._v(" for details.")],1),e._v(" "),t("h3",{attrs:{id:"calling-a-command-defined-with-def-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calling-a-command-defined-with-def-env"}},[e._v("#")]),e._v(" Calling a command defined with "),t("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[t("code",[e._v("def-env")])])],1),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/book/environment.html#defining-environment-from-custom-commands"}},[e._v("Defining environment from custom commands")]),e._v(" for details.")],1),e._v(" "),t("h3",{attrs:{id:"using-module-s-exports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-module-s-exports"}},[e._v("#")]),e._v(" Using module's exports")]),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/book/modules.html"}},[e._v("Modules")]),e._v(" for details.")],1),e._v(" "),t("h2",{attrs:{id:"scoping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scoping"}},[e._v("#")]),e._v(" Scoping")]),e._v(" "),t("p",[e._v("When you set an environment variable, it will be available only in the current scope (the block you're in and any block inside of it).")]),e._v(" "),t("p",[e._v("Here is a small example to demonstrate the environment scoping:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('> let-env FOO = "BAR"\n> do {\n    let-env FOO = "BAZ"\n    $env.FOO == "BAZ"\n}\ntrue\n> $env.FOO == "BAR"\ntrue\n')])])]),t("h2",{attrs:{id:"changing-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-directory"}},[e._v("#")]),e._v(" Changing directory")]),e._v(" "),t("p",[e._v("Common task in a shell is to change directory with the "),t("RouterLink",{attrs:{to:"/book/commands/cd.html"}},[t("code",[e._v("cd")])]),e._v(" command.\nIn Nushell, calling "),t("code",[e._v("cd")]),e._v(" is equivalent to setting the "),t("code",[e._v("PWD")]),e._v(" environment variable.\nTherefore, it follows the same rules as other environment variables (for example, scoping).")],1),e._v(" "),t("h2",{attrs:{id:"single-use-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-use-environment-variables"}},[e._v("#")]),e._v(" Single-use environment variables")]),e._v(" "),t("p",[e._v("A common shorthand to set an environment variable once is available, inspired by Bash and others:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> FOO=BAR echo $env.FOO\nBAR\n")])])]),t("p",[e._v("You can also use "),t("RouterLink",{attrs:{to:"/book/commands/with-env.html"}},[t("code",[e._v("with-env")])]),e._v(" to do the same thing more explicitly:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> with-env { FOO: BAR } { echo $env.FOO }\nBAR\n")])])]),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/book/commands/with-env.html"}},[t("code",[e._v("with-env")])]),e._v(' command will temporarily set the environment variable to the value given (here: the variable "FOO" is given the value "BAR"). Once this is done, the '),t("RouterLink",{attrs:{to:"/book/types_of_data.html#blocks"}},[e._v("block")]),e._v(" will run with this new environment variable set.")],1),e._v(" "),t("h2",{attrs:{id:"permanent-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permanent-environment-variables"}},[e._v("#")]),e._v(" Permanent environment variables")]),e._v(" "),t("p",[e._v("You can also set environment variables at startup so they are available for the duration of Nushell running.\nTo do this, set an environment variable inside "),t("RouterLink",{attrs:{to:"/book/configuration.html"}},[e._v("the Nu configuration file")]),e._v(".\nFor example:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# In config.nu\nlet-env FOO = 'BAR'\n")])])]),t("h2",{attrs:{id:"defining-environment-from-custom-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-environment-from-custom-commands"}},[e._v("#")]),e._v(" Defining environment from custom commands")]),e._v(" "),t("p",[e._v("Due to the scoping rules, any environment variables defined inside a custom command will only exist inside the command's scope.\nHowever, a command defined as "),t("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[t("code",[e._v("def-env")])]),e._v(" instead of "),t("RouterLink",{attrs:{to:"/book/commands/def.html"}},[t("code",[e._v("def")])]),e._v(" (it applies also to "),t("code",[e._v("export def")]),e._v(", see "),t("RouterLink",{attrs:{to:"/book/modules.html"}},[e._v("Modules")]),e._v(") will preserve the environment on the caller's side:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> def-env foo [] {\n    let-env FOO = 'BAR'\n}\n\n> foo\n\n> $env.FOO\nBAR\n")])])]),t("h2",{attrs:{id:"environment-variable-conversions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment-variable-conversions"}},[e._v("#")]),e._v(" Environment variable conversions")]),e._v(" "),t("p",[e._v("You can set the "),t("code",[e._v("ENV_CONVERSIONS")]),e._v(" environment variable to convert other environment variables between a string and a value.\nFor example, the "),t("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("default environment config"),t("OutboundLink")],1),e._v(" includes conversion of PATH (and Path used on Windows) environment variables from a string to a list.\nAfter both "),t("code",[e._v("env.nu")]),e._v(" and "),t("code",[e._v("config.nu")]),e._v(" are loaded, any existing environment variable specified inside "),t("code",[e._v("ENV_CONVERSIONS")]),e._v(" will be translated according to its "),t("code",[e._v("from_string")]),e._v(" field into a value of any type.\nExternal tools require environment variables to be strings, therefore, any non-string environment variable needs to be converted first.\nThe conversion of value -> string is set by the "),t("code",[e._v("to_string")]),e._v(" field of "),t("code",[e._v("ENV_CONVERSIONS")]),e._v(" and is done every time an external command is run.")]),e._v(" "),t("p",[e._v("Let's illustrate the conversions with an example.\nPut the following in your config.nu:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let-env ENV_CONVERSIONS = {\n    # ... you might have Path and PATH already there, add:\n    FOO : {\n        from_string: { |s| $s | split row '-' }\n        to_string: { |v| $v | str collect '-' }\n    }\n}\n")])])]),t("p",[e._v("Now, within a Nushell instance:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> with-env { FOO : 'a-b-c' } { nu }  # runs Nushell with FOO env. var. set to 'a-b-c'\n\n> $env.FOO\n  0   a\n  1   b\n  2   c\n")])])]),t("p",[e._v("You can see the "),t("code",[e._v("$env.FOO")]),e._v(" is now a list in a new Nushell instance with the updated config.\nYou can also test the conversion manually by")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> do $env.ENV_CONVERSIONS.FOO.from_string 'a-b-c'\n")])])]),t("p",[e._v("Now, to test the conversion list -> string, run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> nu -c '$env.FOO'\na-b-c\n")])])]),t("p",[e._v("Because "),t("code",[e._v("nu")]),e._v(" is an external program, Nushell translated the "),t("code",[e._v("[ a b c ]")]),e._v(" list according to "),t("code",[e._v("ENV_CONVERSIONS.FOO.to_string")]),e._v(" and passed it to the "),t("code",[e._v("nu")]),e._v(" process.\nRunning commands with "),t("code",[e._v("nu -c")]),e._v(" does not load the config file, therefore the env conversion for "),t("code",[e._v("FOO")]),e._v(" is missing and it is displayed as a plain string -- this way we can verify the translation was successful.\nYou can also run this step manually by "),t("code",[e._v("do $env.ENV_CONVERSIONS.FOO.to_string [a b c]")])]),e._v(" "),t("p",[e._v("If we look back at the "),t("RouterLink",{attrs:{to:"/book/commands/env.html"}},[t("code",[e._v("env")])]),e._v(" command, the "),t("code",[e._v("raw")]),e._v(" column shows the value translated by "),t("code",[e._v("ENV_CONVERSIONS.<name>.to_string")]),e._v(" and the "),t("code",[e._v("value")]),e._v(" column shows the value used in Nushell (the result of "),t("code",[e._v("ENV_CONVERSIONS.<name>.from_string")]),e._v(" in the case of "),t("code",[e._v("FOO")]),e._v(").\nIf the value is not a string and does not have "),t("code",[e._v("to_string")]),e._v(" conversion, it is not passed to an external (see the "),t("code",[e._v("raw")]),e._v(" column of "),t("code",[e._v("PROMPT_COMMAND")]),e._v(").\nOne exception is "),t("code",[e._v("PATH")]),e._v(" ("),t("code",[e._v("Path")]),e._v(" on Windows): By default, it converts the string to a list on startup and from a list to a string when running externals if no manual conversions are specified.")],1),e._v(" "),t("p",[t("em",[e._v("(Important! The environment conversion string -> value happens "),t("strong",[e._v("after")]),e._v(" the env.nu and config.nu are evaluated. All environment variables in env.nu and config.nu are still strings unless you set them manually to some other values.)")])]),e._v(" "),t("h2",{attrs:{id:"removing-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removing-environment-variables"}},[e._v("#")]),e._v(" Removing environment variables")]),e._v(" "),t("p",[e._v("You can remove an environment variable only if it was set in the current scope via "),t("RouterLink",{attrs:{to:"/book/commands/hide.html"}},[t("code",[e._v("hide")])]),e._v(":")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> let-env FOO = 'BAR'\n...\n> hide FOO\n")])])]),t("p",[e._v("The hiding is also scoped which both allows you to remove an environment variable temporarily and prevents you from modifying a parent environment from within a child scope:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> let-env FOO = 'BAR'\n> do {\n    hide FOO\n    # $env.FOO does not exist\n  }\n> $env.FOO\nBAR\n")])])]),t("p",[e._v("You can check "),t("RouterLink",{attrs:{to:"/book/modules.html"}},[e._v("Modules")]),e._v(" for more details about hiding.")],1)])}),[],!1,null,null,null);n.default=o.exports}}]);