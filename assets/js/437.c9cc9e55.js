(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{798:function(e,t,n){"use strict";n.r(t);var a=n(27),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"branches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#branches"}},[e._v("#")]),e._v(" Branches")]),e._v(" "),n("p",[e._v('The repository has multiple branches in order to separate multiple versions, and allow fixing bugs in both the older releases and the current release, rather than only putting bug fixes in the new release and telling people to "wait" until it reaches its release date.')]),e._v(" "),n("p",[e._v("Currently, Intersect has 3 separate branches for different versions.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"right"}},[e._v("Name")]),e._v(" "),n("th",[e._v("Current Version")]),e._v(" "),n("th",[e._v("Notes")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("master")]),e._v(" "),n("td",[e._v("0.6.1")]),e._v(" "),n("td",[e._v("Receives only critical bug fixes, intended to not change often.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("prerelease")]),e._v(" "),n("td",[e._v("0.6.2")]),e._v(" "),n("td",[e._v("Receives all bug fixes with relatively minor solutions, as well as features with minor impact to the code. "),n("br"),n("br"),e._v(" "),n("strong",[e._v("Only critical database schema changes are made in this branch.")])])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("development")]),e._v(" "),n("td",[e._v("0.7.0")]),e._v(" "),n("td",[e._v("Volatile. Can have major changes to both the codebase and database structure.")])])])]),e._v(" "),n("p",[e._v("When new versions are released, the "),n("strong",[e._v("prerelease")]),e._v(" branch replaces the "),n("strong",[e._v("master")]),e._v(" branch.")]),e._v(" "),n("p",[e._v("Milestone releases (Beta 6, Beta 7, Beta 8, 1.0) will remain in "),n("strong",[e._v("development")]),e._v(" until they are ready for the general public to begin user testing them.")]),e._v(" "),n("p",[e._v("When milestone releases reach "),n("strong",[e._v("prerelease")]),e._v(", "),n("strong",[e._v("development")]),e._v(" will become the next milestone release. "),n("strong",[e._v("prerelease")]),e._v(' is essentially an active "release candidate" branch.')]),e._v(" "),n("p",[e._v("When milestone releases reach "),n("strong",[e._v("master")]),e._v(", "),n("strong",[e._v("prerelease")]),e._v(" will be the next patch version, and "),n("strong",[e._v("development")]),e._v(" will be the next milestone release.")]),e._v(" "),n("p",[e._v("For betas, milestone release versions will follow this pattern: "),n("code",[e._v("0.<beta number>.<patch number>")]),e._v(".\nFor releases post-1.0, milestone version numbers will fit this pattern: "),n("code",[e._v("<major>.<minor>.<patch/hotfix>")]),e._v(".")]),e._v(" "),n("p",[e._v("You can create and switch branches using the GitHub desktop app by clicking the branch dropdown:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/7cb30357ee4dd2a55bc24b20eeb63d78.png",alt:"GitHub desktop app branch dropdown"}})]),e._v(" "),n("p",[e._v("When branching off you should always fetch the latest changes for that branch. When fixing a bug, you create a new branch based on the lowest version number branch that is affected by the bug.")]),e._v(" "),n("p",[e._v("One benefit to the commit and branching system is that we can merge changes into master, and then merge master's changes into prerelease, and then prerelease into development. That way we are not independently fixing the bug on each branch from scratch, and instead we only have to resolve conflicts due to changes between the versions if there are any.")]),e._v(" "),n("p",[e._v("Branches to fix bugs are usually named with the following convention:")]),e._v(" "),n("p",[n("code",[e._v("fix-<issue number>-<bug name>")])]),e._v(" "),n("p",[e._v("Branches to implement new features are usually named with the following convention:")]),e._v(" "),n("p",[n("code",[e._v("feature-<issue number>-<feature name>")])])])}),[],!1,null,null,null);t.default=r.exports}}]);