import{_ as h}from"./three-dot.1d230159.js";import{a as m,_ as u}from"./chat.3a40b527.js";import{_ as p,o as g,c as v,a as e,b as a,w as l,e as o,d as t,r as n}from"./app.c326bdd7.js";const y={},f=o('<p>In-game via chat commands:</p><ul><li>Can manage players and player permissions;</li><li>Many mods can also be managed in-game by providing new chat commands and new permissions</li></ul><p>To use chat commands for management, you must first obtain the corresponding permissions</p><h2 id="chat-command" tabindex="-1"><a class="header-anchor" href="#chat-command" aria-hidden="true">#</a> Chat command</h2><p>In-game management is carried out through <code>chat commands</code> (also known as <code>server commands</code>). As the name implies, <code>chat commands</code> are entered in the chat window, for example, you can use the <code>/privs</code> command to view your own permissions.</p><p>Unless otherwise noted, the commands in this article assume that no privileges are required.</p><h3 id="send-command" tabindex="-1"><a class="header-anchor" href="#send-command" aria-hidden="true">#</a> Send command</h3><p>To send commands in the game, you only need to open the chat window and type commands like other chat messages. Any player can enter commands through chat to perform certain operations.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Some commands only work if you have granted the user <code>privileges</code> on the server.</p></div>',9),w={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"How to open the chat form",-1),b=e("ul",null,[e("li",null,[t("Press "),e("code",null,"T"),t(" : Open the chat window, finish typing, press "),e("code",null,"Enter"),t(" key to send, "),e("code",null,"ESC"),t(" to cancel.")]),e("li",null,[t("Press "),e("code",null,"/"),t(" : Open the chat window, where the "),e("code",null,"/"),t(" character has been typed for you, you can directly enter the chat command, press the "),e("code",null,"Enter"),t(" key to send, "),e("code",null,"ESC"),t(" to cancel.")])],-1),q=e("ul",null,[e("li",null,[t("Click on the "),e("strong",null,"Function Menu"),t(" on the left (three vertical dots) "),e("img",{src:h,alt:"three dot"}),t(": "),e("ul",null,[e("li",null,[t("Click on the "),e("code",null,"Chat Bubble"),t(" icon "),e("img",{src:m,alt:"chat"}),t(" - open the chat window, then when finished typing, press "),e("code",null,"Enter"),t(" to send.")])])])],-1),k=e("p",null,[e("img",{src:u,alt:"minetest_android"})],-1),x=o('<p>All commands start with &quot;<code>/</code>&quot;. After that, a word (command) follows, followed by parameters. The number of parameters depends on the specific command, but there are conventions: the parameters in <code>&lt;&gt;</code> indicate necessary parameters, and the parameters in <code>[]</code> indicate that they can be omitted.</p><div class="custom-container warning"><p class="custom-container-title">All commands start with &quot;`/`&quot; character</p><p>So normal chat messages cannot start with &quot;<code>/</code>&quot;, they will be interpreted as commands even if such commands don&#39;t exist.</p><p>You can tell whether the command was successful by the server&#39;s response. If you see <code>Invalid command: /blargh</code> in chat, you may have misspelled the command. If the command is executed successfully, the command will return the result in the chat history or display the form.</p></div><p>As an administrator, you also have no special permissions at the beginning, but you can obtain all permissions at any time by executing the <code>/grantme all</code> command to facilitate subsequent operations.</p><h2 id="built-in-privileges" tabindex="-1"><a class="header-anchor" href="#built-in-privileges" aria-hidden="true">#</a> built-in privileges</h2><div class="custom-container tip"><p class="custom-container-title">show all privileges</p><p>All privileges (including those added by the mod) can be obtained through the chat command <code>/help privs</code></p></div><p>Listed below is the <code>Minetest_Game</code> sub-game, the list of built-in permissions</p>',6),T=e("thead",null,[e("tr",null,[e("th",null,"Permissions"),e("th",null,"Description")])],-1),A=e("tr",null,[e("td",null,[e("code",null,"interact")]),e("td",null,"Whether to allow interaction with game items (digging, placing, opening/closing...), the default is allowed")],-1),C=e("tr",null,[e("td",null,[e("code",null,"shout")]),e("td",null,"Whether to allow to chat with other people, the default is to allow")],-1),z=e("tr",null,[e("td",null,[e("code",null,"fly")]),e("td",null,"Whether to allow the player to activate airplane mode")],-1),P=e("tr",null,[e("td",null,[e("code",null,"fast")]),e("td",null,"Whether to allow players to activate fast mode")],-1),I=e("tr",null,[e("td",null,[e("code",null,"noclip")]),e("td",null,"Whether to allow the player to activate the wall mode")],-1),S=e("tr",null,[e("td",null,[e("code",null,"settime")]),e("td",null,"Whether to allow the player to set the time in the game world")],-1),W=e("tr",null,[e("td",null,[e("code",null,"home")]),e("td",null,"Whether to allow the player to set a home location")],-1),G=e("tr",null,[e("td",null,[e("code",null,"settime")]),e("td",null,"Whether to allow the player to change the time")],-1),N=e("td",null,[e("code",null,"teleport")],-1),E=t("You can use the "),R=e("code",null,"/teleport",-1),B=t(" command to teleport yourself to the specified "),M=t("coordinates"),V=t(" or to another player"),L=e("tr",null,[e("td",null,[e("code",null,"bring")]),e("td",null,[t("When enabled together with the "),e("code",null,"teleport"),t(" permission, it is possible to use the "),e("code",null,"/teleport"),t(" command to teleport any player to a specific coordinate or to another player")])],-1),Q=e("tr",null,[e("td",null,[e("code",null,"give")]),e("td",null,"Whether to allow to get items, the default is allowed in creative mode, and the default is not allowed in survival mode")],-1),j=e("tr",null,[e("td",null,[e("code",null,"protection_bypass")]),e("td",null,"Whether to allow bypassing the block's protection (e.g. can open locked chests or doors for everyone)")],-1),D=e("tr",null,[e("td",null,[e("code",null,"privs")]),e("td",null,[e("code",null,"admin permissions"),t(", if allowed you can use "),e("code",null,"/grant"),t(" and "),e("code",null,"/revoke"),t(" to set any privileges for the player")])],-1),U=e("tr",null,[e("td",null,[e("code",null,"basic_privs")]),e("td",null,[e("code",null,"Administrative Privileges"),t(", whether "),e("code",null,"/grant"),t(" and "),e("code",null,"/revoke"),t(" are allowed to set the list of basic privileges defined in the "),e("code",null,"minetest.conf"),t(' configuration file (default: "'),e("code",null,"interact"),t('" and "'),e("code",null,"shout "),t('" permissions)')])],-1),F=e("tr",null,[e("td",null,[e("code",null,"kick")]),e("td",null,[e("code",null,"administrative authority"),t(", is it allowed to kick players")])],-1),O=e("tr",null,[e("td",null,[e("code",null,"ban")]),e("td",null,[e("code",null,"administrative authority"),t(", whether to allow banning/unblocking players or IPs")])],-1),Y=e("tr",null,[e("td",null,[e("code",null,"password")]),e("td",null,[e("code",null,"Admin Authority"),t(", whether to allow modifying or resetting player passwords")])],-1),H=e("tr",null,[e("td",null,[e("code",null,"server")]),e("td",null,[e("code",null,"administrative authority"),t(", perform a series of server maintenance operations")])],-1),K=o('<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>If there is no special description in the list, the default is not allowed</p></div><h2 id="mod-privileges-and-commands" tabindex="-1"><a class="header-anchor" href="#mod-privileges-and-commands" aria-hidden="true">#</a> Mod privileges and Commands</h2><p>Each module will add privileges and commands according to its own functions</p><h3 id="quiz-mod" tabindex="-1"><a class="header-anchor" href="#quiz-mod" aria-hidden="true">#</a> Quiz Mod</h3><p>The game time management and interspersed practice in the game are also realized through the function module [Quiz player challenge] (../mods/quiz).</p><p><a href="../mods/quiz">Quiz player challenge mod</a> permissions (the following permissions exist when the <code>quiz</code> module is enabled)</p><ul><li><code>quiz</code>: Whether to allow quiz management: add, delete, modify questions</li><li><code>noquiz</code>: whether to allow no quiz</li></ul><p>For more detailed management instructions, please read the mod description: <a href="../mods/quiz">Quiz Player Challenge Mod</a></p><h2 id="internal-commands" tabindex="-1"><a class="header-anchor" href="#internal-commands" aria-hidden="true">#</a> Internal Commands</h2>',9),$=t("Common commands are as follows, for a more complete list of commands, please refer to: "),J=t("Chat (Server) Command List"),X=o('<h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> <code>/help</code></h3><ul><li><code>/help</code>: Display a list of available commands according to permissions on the server</li></ul><div class="custom-container tip"><p class="custom-container-title">Commands added by the mod will also appear in this list</p></div><h3 id="grant-revoke-privileges-command" tabindex="-1"><a class="header-anchor" href="#grant-revoke-privileges-command" aria-hidden="true">#</a> Grant/revoke privileges command</h3><p>All of these commands require you to have &quot;<code>privs</code>&quot; (manipulate all privileges) or &quot;<code>basic_privs</code>&quot; (manipulate &quot;<code>interact</code>&quot; and &quot;<code>shout</code>&quot; privileges) privileges.</p><ul><li><code>/grant &lt;player&gt; &lt;privilege&gt;</code> - grant <code>&lt;privilege&gt;</code> to <code>&lt;player&gt;</code></li><li><code>/grant &lt;player&gt; all</code> \u2014 grant all available privileges to <code>&lt;player&gt;</code></li><li><code>/grantme &lt;privilege&gt;</code> - Grant yourself <code>&lt;privilege&gt;</code></li><li><code>/grantme all</code> \u2014 Grant all privileges to yourself</li><li><code>/revoke &lt;player&gt; &lt;privilege&gt;</code> \u2014 remove from</li><li><code>/revoke &lt;player&gt; all</code> - remove all permissions from <code>&lt;player&gt;</code></li><li><code>/revokeme &lt;privilege&gt;</code> - remove own <code>&lt;privilege&gt;</code> permission</li><li><code>/revokeme all</code> - remove all permissions from self</li></ul><h3 id="privs-view-player-privileges-command" tabindex="-1"><a class="header-anchor" href="#privs-view-player-privileges-command" aria-hidden="true">#</a> <code>/privs</code> View player privileges command</h3><ul><li><code>/privs [&lt;player&gt;]</code>: Displays a list of privileges for a player (<code>&lt;player&gt;</code>), or your own if no player is specified</li></ul><h3 id="chat" tabindex="-1"><a class="header-anchor" href="#chat" aria-hidden="true">#</a> Chat</h3><p>These commands require the &quot;<code>shout</code>&quot; privilege to work.</p><h4 id="msg-private-chat-command" tabindex="-1"><a class="header-anchor" href="#msg-private-chat-command" aria-hidden="true">#</a> <code>/msg</code> private chat command</h4><ul><li><code>/msg &lt;player&gt; &lt;message&gt;</code>: Send a direct message <code>&lt;message&gt;</code> to the specified player <code>&lt;player&gt;</code>; other players cannot see it.</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The message sent by <code>/msg</code> isn&#39;t really a secret. Anyone intercepting network traffic, server operators can in principle still read</p></div><h3 id="items" tabindex="-1"><a class="header-anchor" href="#items" aria-hidden="true">#</a> Items</h3><h4 id="give-\u548C-giveme-give-item-command" tabindex="-1"><a class="header-anchor" href="#give-\u548C-giveme-give-item-command" aria-hidden="true">#</a> <code>/give</code> \u548C <code>/giveme</code> give item command</h4><ul><li><code>/give &lt;player&gt; &lt;itemstring&gt; [&lt;count&gt; [&lt;wear&gt;]]</code>: Give the player <code>&lt;player&gt;</code> the specified number of <code>&lt;count&gt;</code> (default is 1) items <code>&lt;itemstring&gt;</code>( Refer to <a href="./item-string">ItemStrings</a>). The <code>&lt;wear&gt;</code> parameter is the damage degree of the specified tool (0-65535, the larger the value, the greater the damage, the default value is 0), if it is other items, this value is useless , requires the &quot;give&quot; privilege.</li><li><code>/giveme &lt;itemstring&gt; [&lt;count&gt; [&lt;wear&gt;]]</code>: Give me something. <code>&lt;count&gt;</code> and <code>&lt;wear&gt;</code> have the same meaning as <code>/give</code>. The &quot;give&quot; privilege is required.</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Executing this command requires the &quot;<code>give</code>&quot; privilege</p></div><p>example</p><ul><li><code>/giveme default:torch</code>: give you a torch</li><li><code>/give Peter default:cobble 50</code>: Give player: <code>Peter</code> 50 cobblestones</li><li><code>/giveme default:pick_steel 1 16383</code>: Gives you an iron pickaxe with about 25% wear</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Negative numbers for <code>&lt;count&gt;</code> and <code>&lt;wear&gt;</code> will count down from 65536, so you can use -1 as a shorthand for 65535 (the maximum possible value).</p></div><h3 id="teleport-command" tabindex="-1"><a class="header-anchor" href="#teleport-command" aria-hidden="true">#</a> Teleport command</h3><p>Teleportation is the immediate movement of any player to a given location. All of the following commands require the &quot;<code>teleport</code>&quot; privilege</p>',22),Z=e("code",null,"/teleport <x>,<y>,<z>",-1),ee=t(": Teleport yourself to the given "),te=t("coordinates"),oe=o("<li><code>/teleport &lt;target_player&gt;</code>: Teleport yourself to the player named <code>&lt;target_player&gt;</code></li><li><code>/teleport &lt;player&gt; &lt;x&gt;,&lt;y&gt;,&lt;z&gt;</code>: Teleport <code>&lt;player&gt;</code> to the given coordinates. Also requires the &quot;<code>bring</code>&quot; privilege</li><li><code>/teleport &lt;player1&gt; &lt;player2&gt;</code>: Teleport player <code>&lt;player1&gt;</code> to <code>&lt;player2&gt;</code>. Also requires the &quot;<code>bring</code>&quot; privilege</li>",3),le=o('<h3 id="kill-kill-player-or-self" tabindex="-1"><a class="header-anchor" href="#kill-kill-player-or-self" aria-hidden="true">#</a> <code>/kill</code> kill player or self</h3><ul><li><code>/kill [&lt;name&gt;]</code> : kill player or self. Requires &quot;<code>server</code>&quot; privilege</li></ul><h3 id="password" tabindex="-1"><a class="header-anchor" href="#password" aria-hidden="true">#</a> Password</h3><p>These commands allow setting and resetting any player&#39;s password and require the &quot;<code>password</code>&quot; privilege to use</p><ul><li><code>/setpassword &lt;player&gt; &lt;password&gt;</code>: set the password of the player <code>&lt;player&gt;</code> to <code>&lt;password&gt;</code></li><li><code>/clearpassword &lt;player&gt;</code>: set the password of the player <code>&lt;player&gt;</code> to empty</li></ul><h3 id="banned-or-kicked-player-from-server" tabindex="-1"><a class="header-anchor" href="#banned-or-kicked-player-from-server" aria-hidden="true">#</a> Banned or kicked player from server</h3><p>These commands allow the user to kick, ban and unban players. Kicking a player means removing a connected player from the server. This requires the &quot;<code>kick</code>&quot; privilege. Banning a player prevents him/her from connecting to the server again. Players do not need to connect at this time. Unban means to unban a player, allowing him/her to connect to the server again. The <code>ban</code> and <code>unban</code> commands require the &quot;<code>ban</code>&quot; privilege.</p><ul><li><code>/kick &lt;player name&gt; [&lt;reason&gt;]</code>: kick player <code>&lt;player name&gt;</code>. The reason <code>&lt;reason&gt;</code> can optionally be provided in text form, this text will also be displayed to the kicked player.</li><li><code>/ban</code>: show list of banned players</li><li><code>/ban &lt;player name&gt;</code>: Ban bans the IP of the player <code>&lt;player name&gt;</code></li><li><code>/unban &lt;player name&gt;</code>: unban player</li><li><code>/unban &lt;IP address&gt;</code>: Unban the player IP</li></ul><h3 id="game-world-date-and-time" tabindex="-1"><a class="header-anchor" href="#game-world-date-and-time" aria-hidden="true">#</a> Game world date and time</h3><ul><li><code>/days</code>: View the number of days of the current game (counting from 0)</li><li><code>/time</code>: View the current game time (24-hour format)</li></ul><h3 id="adjust-the-time-and-speed-of-the-game-world" tabindex="-1"><a class="header-anchor" href="#adjust-the-time-and-speed-of-the-game-world" aria-hidden="true">#</a> Adjust the time and speed of the game world</h3><ul><li><code>/time &lt;hours&gt;:&lt;minutes&gt;</code>: Set the &quot;time&quot; of the &quot;day&quot; in the game in 24-hour format (0:00-23:59). Requires &quot;<code>settime</code>&quot; privilege</li><li><code>/set -n time_speed &lt;speed&gt;</code>: Set the speed of the game world time running [day/night cycle], where <code>&lt;speed&gt;</code> is the speed multiple of time (<code>&lt;speed&gt;</code> time is faster than in real life quick). The default value is <code>72</code>, which means that by default, the world time in the game is 72 times faster than the real time, that is, 20 minutes is a day (24 hours). Requires &quot;<code>server</code>&quot; privilege</li></ul><h3 id="killme-kill-command" tabindex="-1"><a class="header-anchor" href="#killme-kill-command" aria-hidden="true">#</a> <code>/killme</code> kill command</h3><ul><li><code>/killme</code> kill command</li></ul><h3 id="set-return-home-spawn-point" tabindex="-1"><a class="header-anchor" href="#set-return-home-spawn-point" aria-hidden="true">#</a> Set / return home (spawn point)</h3><ul><li><code>/sethome</code> : Set current location as home location (&quot;spawn&quot;). Requires &quot;<code>home</code>&quot; privilege</li><li><code>/home</code> : Teleport yourself to the &quot;home&quot; location. If the home point has not been set, this command will not work, please execute <code>/sethome</code> to set the birth point first. Requires &quot;<code>sethome</code>&quot; privilege.</li></ul>',16);function ae(ie,ne){const d=n("Tabs"),i=n("RouterLink");return g(),v("div",null,[f,e("div",w,[_,a(d,{data:[{title:"PC/Computer",value:"pc"},{title:"Android Phone/Tablet",value:"mobile"}],"tab-id":"operator"},{tab0:l(({title:r,value:s,isActive:c})=>[b]),tab1:l(({title:r,value:s,isActive:c})=>[q,k]),_:1})]),x,e("table",null,[T,e("tbody",null,[A,C,z,P,I,S,W,G,e("tr",null,[N,e("td",null,[E,R,B,a(i,{to:"/en/guide/teacher/coordinates.html"},{default:l(()=>[M]),_:1}),V])]),L,Q,j,D,U,F,O,Y,H])]),K,e("p",null,[$,a(i,{to:"/en/guide/teacher/commands.html"},{default:l(()=>[J]),_:1})]),X,e("ul",null,[e("li",null,[Z,ee,a(i,{to:"/en/guide/teacher/coordinates/"},{default:l(()=>[te]),_:1})]),oe]),le])}var ce=p(y,[["render",ae],["__file","ingame-man.html.vue"]]);export{ce as default};
