(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{876:function(e,t,a){"use strict";a.r(t);var o=a(27),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"auto-updater"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-updater"}},[e._v("#")]),e._v(" Auto Updater")]),e._v(" "),a("p",[e._v("File storage and bandwidth costs! We do not have the capacity or funding to host your game data and updates for you. You will need to purchase a web hosting plan of your choice in order to distribute your game updates to your players.")]),e._v(" "),a("p",[e._v("Static site hosts like Amazon S3 and GitHub pages will work well, but a webhost with the ability to run php is preferred for "),a("a",{attrs:{href:"#advancedconfiguration"}},[e._v("faster updates and other benefits")]),e._v(" that you might want to learn about later on.")]),e._v(" "),a("h2",{attrs:{id:"creating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating"}},[e._v("#")]),e._v(" Creating")]),e._v(" "),a("p",[e._v("Creating an update is as simple as opening your editor and clicking the "),a("code",[e._v("Tools > Package Update")]),e._v(" button. You will be prompted to select an empty folder, and after some processing the update files will appear within.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/04a7eded08d3e90c55ca21e8e5fabedd.png",alt:"Package"}})]),e._v(" "),a("h2",{attrs:{id:"uploading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uploading"}},[e._v("#")]),e._v(" Uploading")]),e._v(" "),a("p",[e._v("Use FTP or your file transfer program of choice to upload the contents in your update folder to your web host.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" If you are using FileZilla you need to make sure you are using binary uploads. Go to "),a("code",[e._v("Edit > Settings > File transfer settings > ASCII/Binary")]),e._v(". "),a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/ff040970742cd777a2c5a0b546fd7231.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Set it to always binary"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"configuring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring"}},[e._v("#")]),e._v(" Configuring")]),e._v(" "),a("p",[e._v("After you have uploaded your update to your web host open up your web browser of choice and browse to the update.json file to make sure it's online, if you are able to view your update.json file in your web browser then you are ready to proceed.")]),e._v(" "),a("p",[e._v("Copy the url of that file into "),a("code",[e._v("Client and Editor/resources/config.json")]),e._v(" for the "),a("code",[e._v("UpdateUrl")]),e._v(" field.")]),e._v(" "),a("p",[e._v("You are able to change the graphics and fonts on the update screen, those can be found in the "),a("code",[e._v("Client and Editor/Resources/Updater")]),e._v(" directory.")]),e._v(" "),a("h2",{attrs:{id:"future-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-updates"}},[e._v("#")]),e._v(" Future Updates")]),e._v(" "),a("p",[e._v("To package updates going forward use the "),a("code",[e._v("Tools > Package Update")]),e._v(" button within the editor and upload the new update to your webhost overwriting any existing files. Any new graphics or Intersect versions will be included and distributed to your players the next time they launch their game..")]),e._v(" "),a("h2",{attrs:{id:"advanced-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration"}},[e._v("#")]),e._v(" Advanced Configuration")]),e._v(" "),a("p",[e._v("The following advanced configuration options are completely optional. If you don't know exactly why you'd want to use these then ignore them! Both of these options requires that your webhost can serve php pages and execute php scripts.")]),e._v(" "),a("h3",{attrs:{id:"dynamically-generate-metadata-optional-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamically-generate-metadata-optional-beta"}},[e._v("#")]),e._v(" Dynamically Generate Metadata  (Optional, Beta)")]),e._v(" "),a("p",[e._v("Instead of using the "),a("code",[e._v("Editor -> Tools -> Package Update")]),e._v(" function to generate your update.json metadata for you, you can instead use this "),a("code",[e._v("update.php")]),e._v(" script. The script will scan your webhost for files and automatically generate the update configuration on the fly. This is useful if you want to allow others on your team to drag -> drop assets or updates onto your webserver without needing to use the editor to package a massive update for each small change.")]),e._v(" "),a("p",[e._v("The downside to this script is that checking for updates will take a bit longer, so this should be used for convenience during development. When you launch your game you should use the static update.json files because they will be quicker and less demanding on your server.")]),e._v(" "),a("p",[e._v("After placing your script into your update folder on your webhost modify your "),a("code",[e._v("UpdateUrl")]),e._v(" in the "),a("code",[e._v("Client and Editor/Resources/Config.json")]),e._v(" file to point to "),a("code",[e._v("update.php")]),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/1c6fa0679887918ed6d54b6609afd1ca.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Here"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"streaming-downloads-optional-beta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streaming-downloads-optional-beta"}},[e._v("#")]),e._v(" Streaming Downloads  (Optional, Beta)")]),e._v(" "),a("p",[e._v("Instead of having the client open up hundreds or thousands of HTTP file downloads from your web server you can have your client request a list of files all at once and then have them send back in a single connection through a continuous stream. If you are using the "),a("code",[e._v("update.php")]),e._v(" script above simply place this "),a("code",[e._v("stream.php")]),e._v(" script into your update folder as well and you'll be good to go.")]),e._v(" "),a("p",[e._v("If you want to use this script with static update.json files you will need to modify your "),a("code",[e._v("update.json")]),e._v(" file to include the following line below the "),a("code",[e._v("TrustCache")]),e._v(" line.")]),e._v(" "),a("p",[a("code",[e._v("'StreamingUrl': 'https://<path to stream.php>',")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/972d4c5a35cc8a7c4930029b41b30360.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Here"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);