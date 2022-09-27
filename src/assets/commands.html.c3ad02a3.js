import{_ as a,o as r,c as n,a as e,b as t,w as s,e as d,d as o,r as c}from"./app.433fb06f.js";const h={},p=d('<h2 id="\u5185\u7F6E\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u547D\u4EE4" aria-hidden="true">#</a> \u5185\u7F6E\u547D\u4EE4</h2><p>\u65E0\u8BBA\u60A8\u5B89\u88C5\u7684\u662Fmods\u8FD8\u662F games\uFF0C\u5185\u7F6E\u547D\u4EE4\u59CB\u7EC8\u53EF\u7528\u3002</p><h3 id="help-\u5E2E\u52A9\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#help-\u5E2E\u52A9\u547D\u4EE4" aria-hidden="true">#</a> <code>/help</code> \u5E2E\u52A9\u547D\u4EE4</h3><p>\u663E\u793A\u804A\u5929\u547D\u4EE4\u6216\u7279\u6743\u5217\u8868\u7684\u7B80\u77ED\u6587\u6863;\u5B83\u4E5F\u4F1A\u51FA\u73B0\u5728\u804A\u5929\u8BB0\u5F55\u4E2D,\u5982\u679C\u5E2E\u52A9\u6587\u6863\u592A\u957F,\u804A\u5929\u8BB0\u5F55\u4E2D\u663E\u793A\u4E0D\u5168,\u53EF\u4EE5\u6309<code>F10</code>\u952E\u6253\u5F00\u7EC8\u7AEF\u67E5\u770B.</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EF\u4EE5\u901A\u8FC7\u4E0A\u4E0B\u7BAD\u5934\u663E\u793A\u5386\u53F2\u547D\u4EE4</p></div><ul><li><code>/help</code>: \u6839\u636E\u670D\u52A1\u5668\u4E0A\u7684\u6743\u9650\u663E\u793A\u53EF\u7528\u547D\u4EE4\u7684\u5217\u8868</li><li><code>/help &lt;\u547D\u4EE4&gt;</code>: \u663E\u793A\u6709\u5173\u7ED9\u5B9A\u547D\u4EE4\u7684\u7B80\u77ED\u63CF\u8FF0\u3002 \u5373\u4F7F\u60A8\u6CA1\u6709\u6267\u884C\u547D\u4EE4\u7684\u6743\u9650\uFF0C\u4E5F\u53EF\u4EE5\u67E5\u770B\u547D\u4EE4\u7684\u5E2E\u52A9</li><li><code>/help all</code>: \u6839\u636E\u60A8\u7684\u6743\u9650\u5217\u51FA\u670D\u52A1\u5668\u4E0A\u53EF\u7528\u7684\u547D\u4EE4\uFF0C\u4EE5\u53CA\u6BCF\u4E2A\u547D\u4EE4\u7684\u7B80\u77ED\u63CF\u8FF0\u548C\u8BED\u6CD5\u53C2\u8003</li><li><code>/help privs</code>: \u5217\u51FA\u670D\u52A1\u5668\u4E0A\u53EF\u80FD\u6388\u4E88\u73A9\u5BB6\u7684\u6240\u6709\u7279\u6743\uFF0C\u5E76\u663E\u793A\u6709\u5173\u6BCF\u4E2A\u7279\u6743\u7684\u7B80\u77ED\u63CF\u8FF0</li></ul><h3 id="\u8D4B\u4E88-\u64A4\u9500\u6743\u9650\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u4E88-\u64A4\u9500\u6743\u9650\u547D\u4EE4" aria-hidden="true">#</a> \u8D4B\u4E88/\u64A4\u9500\u6743\u9650\u547D\u4EE4</h3><p>\u6240\u6709\u8FD9\u4E9B\u547D\u4EE4\u90FD\u8981\u6C42\u60A8\u5177\u6709\u201C<code>privs</code>\u201D\uFF08\u64CD\u7EB5\u6240\u6709\u6743\u9650\uFF09\u6216\u201C <code>basic_privs</code>\u201D\uFF08\u64CD\u7EB5\u201C<code>interact</code>\u201D\u548C\u201C<code>shout</code>\u201D\u6743\u9650\uFF09\u6743\u9650\u3002</p><ul><li><code>/grant &lt;player&gt; &lt;privilege&gt;</code> -\u5C06 <code>&lt;privilege&gt;</code> \u6388\u4E88<code>&lt;player&gt;</code></li><li><code>/grant &lt;player&gt; all</code> \u2014\u5C06\u6240\u6709\u53EF\u7528\u7279\u6743\u6388\u4E88<code>&lt;player&gt;</code></li><li><code>/grantme &lt;privilege&gt;</code> -\u7ED9\u81EA\u5DF1<code>&lt;privilege&gt;</code></li><li><code>/grantme all</code> \u2014\u8D4B\u4E88\u81EA\u5DF1\u6240\u6709\u7279\u6743</li><li><code>/revoke &lt;player&gt; &lt;privilege&gt;</code> \u2014\u4ECE\u79FB\u9664</li><li><code>/revoke &lt;player&gt; all</code> \u2014\u79FB\u9664<code>&lt;player&gt;</code>\u6240\u6709\u6743\u9650</li><li><code>/revokeme &lt;privilege&gt;</code> \u2014\u79FB\u9664\u81EA\u5DF1\u7684<code>&lt;privilege&gt;</code>\u6743\u9650</li><li><code>/revokeme all</code> \u2014\u79FB\u9664\u81EA\u5DF1\u7684\u6240\u6709\u6743\u9650</li></ul><h3 id="privs-\u67E5\u770B\u73A9\u5BB6\u7684\u6743\u9650\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#privs-\u67E5\u770B\u73A9\u5BB6\u7684\u6743\u9650\u547D\u4EE4" aria-hidden="true">#</a> <code>/privs</code> \u67E5\u770B\u73A9\u5BB6\u7684\u6743\u9650\u547D\u4EE4</h3><ul><li><code>/privs [&lt;player&gt;]</code>: \u663E\u793A\u73A9\u5BB6(<code>&lt;player&gt;</code>)\u7684\u6743\u9650\u5217\u8868\uFF0C\u5982\u679C\u672A\u6307\u5B9A\u73A9\u5BB6\uFF0C\u5219\u4E3A\u60A8\u81EA\u5DF1\u7684\u7279\u6743</li></ul><h3 id="haspriv-\u5217\u51FA\u5177\u6709\u6307\u5B9A\u6743\u9650\u7684\u5728\u7EBF\u73A9\u5BB6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#haspriv-\u5217\u51FA\u5177\u6709\u6307\u5B9A\u6743\u9650\u7684\u5728\u7EBF\u73A9\u5BB6\u547D\u4EE4" aria-hidden="true">#</a> <code>/haspriv</code> \u5217\u51FA\u5177\u6709\u6307\u5B9A\u6743\u9650\u7684\u5728\u7EBF\u73A9\u5BB6\u547D\u4EE4</h3><ul><li><code>/haspriv &lt;privilege&gt;</code>: \u5217\u51FA\u6240\u6709\u5177\u6709\u6307\u5B9A\u6743\u9650(<code>&lt;privilege&gt;</code>)\u7684\u5728\u7EBF\u73A9\u5BB6</li></ul><h3 id="last-login-\u4E0A\u6B21\u767B\u5F55\u6B64\u670D\u52A1\u5668\u7684\u65E5\u671F\u548C\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#last-login-\u4E0A\u6B21\u767B\u5F55\u6B64\u670D\u52A1\u5668\u7684\u65E5\u671F\u548C\u65F6\u95F4" aria-hidden="true">#</a> <code>/last-login</code> \u4E0A\u6B21\u767B\u5F55\u6B64\u670D\u52A1\u5668\u7684\u65E5\u671F\u548C\u65F6\u95F4</h3>',14),g=e("code",null,"/last-login [<player>]",-1),u=o(": \u663E\u793A\u73A9\u5BB6"),_=e("code",null,"<player>",-1),m=o("\u4E0A\u6B21\u767B\u5F55\u6B64\u670D\u52A1\u5668\u65F6\u533A\u7684\u65E5\u671F\u548C\u65F6\u95F4 ("),v={href:"https://en.wikipedia.org/wiki/Coordinated_Universal_Time",target:"_blank",rel:"noopener noreferrer"},f=o("UTC \u65F6\u533A"),y=o(", "),b={href:"https://en.wikipedia.org/wiki/ISO_8601",target:"_blank",rel:"noopener noreferrer"},k=o("ISO 8601"),x=o(" \u683C\u5F0F)\u3002\u5982\u679C\u672A\u6307\u5B9A\u73A9\u5BB6\uFF0C\u5219\u663E\u793A\u60A8\u81EA\u5DF1\u7684\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4"),w=d('<h3 id="\u804A\u5929" tabindex="-1"><a class="header-anchor" href="#\u804A\u5929" aria-hidden="true">#</a> \u804A\u5929</h3><p>\u8FD9\u4E9B\u547D\u4EE4\u9700\u8981\u201C<code>shout</code>\u201D\u7279\u6743\u624D\u80FD\u5DE5\u4F5C\u3002</p><h4 id="msg-\u79C1\u804A\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#msg-\u79C1\u804A\u547D\u4EE4" aria-hidden="true">#</a> <code>/msg</code> \u79C1\u804A\u547D\u4EE4</h4><ul><li><code>/msg &lt;player&gt; &lt;message&gt;</code>: \u5411\u6307\u5B9A\u73A9\u5BB6<code>&lt;player&gt;</code>\u53D1\u9001\u76F4\u63A5\u6D88\u606F<code>&lt;message&gt;</code>\uFF1B\u5176\u4ED6\u73A9\u5BB6\u770B\u4E0D\u5230\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BE5\u6D88\u606F\u5E76\u4E0D\u662F\u771F\u6B63\u7684\u79D8\u5BC6\u3002\u4EFB\u4F55\u4EBA\u62E6\u622A\u7F51\u7EDC\u6D41\u91CF\uFF0C\u670D\u52A1\u5668\u64CD\u4F5C\u5458\u539F\u5219\u4E0A\u4ECD\u53EF\u4EE5\u9605\u8BFB</p></div><h4 id="me-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#me-\u547D\u4EE4" aria-hidden="true">#</a> <code>/me</code> \u547D\u4EE4</h4><ul><li><code>/me &lt;action&gt;</code> \u2014\u4EE5\u201C<code>* &lt;\u60A8\u7684\u540D\u5B57&gt; &lt;\u52A8\u4F5C&gt;</code>\u201D\u7684\u683C\u5F0F\u5236\u4F5C\u6587\u672C\uFF0C\u51FA\u73B0\u5728\u804A\u5929\u8BB0\u5F55\u4E2D\u3002\u4F8B\u5982\u201C<code>/me eats pizza.</code>\u201D \u4F1A\u53D8\u6210 \u201C<code>* Alfred eats pizza.</code>\u201D (\u5982\u679C\u4F60\u7684\u73A9\u5BB6\u540D\u79F0\u662F \u201CAlfred\u201D)\uFF0C\u8FD9\u91CC\u4E3A\u4F60\u505A\u4E86\u4E00\u6B21\u8F6C\u6362.</li></ul><h3 id="\u7269\u54C1" tabindex="-1"><a class="header-anchor" href="#\u7269\u54C1" aria-hidden="true">#</a> \u7269\u54C1</h3><h4 id="give-\u548C-giveme-\u7ED9\u4E88\u7269\u54C1\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#give-\u548C-giveme-\u7ED9\u4E88\u7269\u54C1\u547D\u4EE4" aria-hidden="true">#</a> <code>/give</code> \u548C <code>/giveme</code> \u7ED9\u4E88\u7269\u54C1\u547D\u4EE4</h4><ul><li><code>/give &lt;player&gt; &lt;itemstring&gt; [&lt;count&gt; [&lt;wear&gt;]]</code>: \u7ED9\u4E88\u73A9\u5BB6<code>&lt;player&gt;</code>\u6307\u5B9A\u6570\u91CF<code>&lt;count&gt;</code>(\u9ED8\u8BA4\u662F1\u4E2A)\u7684\u7269\u54C1<code>&lt;itemstring&gt;</code>(\u53C2\u9605 <a href="./item-string">ItemStrings</a>). <code>&lt;wear&gt;</code> \u53C2\u6570\u662F\u6307\u5B9A\u5DE5\u5177\u7684\u635F\u574F\u5EA6(0-65535,\u503C\u8D8A\u5927\u635F\u574F\u8D8A\u5927,\u9ED8\u8BA4\u503C\u4E3A0),\u5982\u679C\u662F\u5176\u4ED6\u7269\u54C1\u8BE5\u503C\u65E0\u7528,\u9700\u8981\u201C\u6388\u4E88\u201D\u7279\u6743.</li><li><code>/giveme &lt;itemstring&gt; [&lt;count&gt; [&lt;wear&gt;]]</code>: \u7ED9\u81EA\u5DF1\u7684\u4E1C\u897F\u3002<code>&lt;count&gt;</code>\u548C<code>&lt;wear&gt;</code>\u7684\u542B\u4E49\u4E0E<code>/give</code>\u76F8\u540C\u3002\u9700\u8981\u201C\u6388\u4E88\u201D\u7279\u6743\u3002</li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6267\u884C\u8BE5\u547D\u4EE4\u9700\u8981 \u201Cgive\u201D \u6743\u9650(privilege)</p></div><p>\u793A\u4F8B</p><ul><li><code>/giveme default:torch</code>: \u7ED9\u4F60\u4E00\u4E2A\u706B\u70AC</li><li><code>/give Peter default:cobble 50</code>: \u7ED9\u73A9\u5BB6:<code>Peter</code> 50\u9E45\u5375\u77F3</li><li><code>/giveme default:pick_steel 1 16383</code>: \u4E3A\u60A8\u63D0\u4F9B\u5927\u7EA625\uFF05\u78E8\u635F\u7684\u94C1\u9550</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>&lt;count&gt;</code>\u548C<code>&lt;wear&gt;</code>\u7684\u8D1F\u6570\u5C06\u4ECE65536\u5F00\u59CB\u5012\u6570\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u4F7F\u7528-1\u4F5C\u4E3A65535\uFF08\u53EF\u80FD\u7684\u6700\u5927\u503C\uFF09\u7684\u7B80\u5199\u3002</p></div><h4 id="pulverize-\u9500\u6BC1\u6240\u6301\u7269\u54C1" tabindex="-1"><a class="header-anchor" href="#pulverize-\u9500\u6BC1\u6240\u6301\u7269\u54C1" aria-hidden="true">#</a> <code>/pulverize</code> \u9500\u6BC1\u6240\u6301\u7269\u54C1</h4><ul><li><code>/pulverize</code>: \u9500\u6BC1\u6240\u6301\u7269\u54C1\u3002\u53EF\u4EE5\u88AB\u4EFB\u4F55\u73A9\u5BB6\u4F7F\u7528</li></ul><h4 id="clearinv-\u9500\u6BC1\u5E93\u5B58\u4E2D\u7684\u6240\u6709\u7269\u54C1" tabindex="-1"><a class="header-anchor" href="#clearinv-\u9500\u6BC1\u5E93\u5B58\u4E2D\u7684\u6240\u6709\u7269\u54C1" aria-hidden="true">#</a> <code>/clearinv</code> \u9500\u6BC1\u5E93\u5B58\u4E2D\u7684\u6240\u6709\u7269\u54C1</h4><ul><li><code>/clearinv [&lt;name&gt;]</code>: \u9500\u6BC1\u5E93\u5B58\u4E2D\u7684\u6240\u6709\u9879\u76EE\uFF08\u672A\u63D0\u4F9B\u4EFB\u4F55\u53C2\u6570\uFF09\u6216\u5176\u4ED6\u4EBA\u7684\u5E93\u5B58\u4E2D\u7684\u6240\u6709\u9879\u76EE\uFF08<code>name</code> \u63D0\u4F9B\uFF09\u3002\u8981\u6E05\u9664\u5176\u4ED6\u4EBA\u7684\u5E93\u5B58\uFF0C\u60A8\u9700\u8981\u201C<code>Server</code>\u201D\u6743\u9650</li></ul><h3 id="\u4F20\u9001\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9001\u547D\u4EE4" aria-hidden="true">#</a> \u4F20\u9001\u547D\u4EE4</h3><p>\u4F20\u9001\u662F\u4EFB\u4F55\u73A9\u5BB6\u7ACB\u5373\u79FB\u52A8\u5230\u7ED9\u5B9A\u4F4D\u7F6E\u3002\u4EE5\u4E0B\u6240\u6709\u547D\u4EE4\u5747\u9700\u8981\u201C<code>teleport</code>\u201D\u7279\u6743</p>',20),z=e("code",null,"/teleport <x>,<y>,<z>",-1),I=o(": \u5C06\u81EA\u5DF1\u4F20\u9001\u5230\u7ED9\u5B9A\u7684"),L=o("\u5750\u6807"),P=d("<li><code>/teleport &lt;target_player&gt;</code>: \u5C06\u81EA\u5DF1\u4F20\u9001\u5230\u540D\u79F0\u4E3A<code>&lt;target_player&gt;</code>\u7684\u73A9\u5BB6</li><li><code>/teleport &lt;player&gt; &lt;x&gt;,&lt;y&gt;,&lt;z&gt;</code>: \u5C06<code>&lt;player&gt;</code>\u4F20\u9001\u5230\u7ED9\u5B9A\u7684\u5750\u6807\u3002\u8FD8\u9700\u8981\u201C<code>bring</code>\u201D\u7279\u6743</li><li><code>/teleport &lt;player1&gt; &lt;player2&gt;</code>: \u5C06\u73A9\u5BB6<code>&lt;player1&gt;</code>\u4F20\u9001\u5230<code>&lt;player2&gt;</code>\u3002\u8FD8\u9700\u8981\u201C<code>bring</code>\u201D\u7279\u6743</li>",3),S=d('<h3 id="kill-\u6740\u6B7B\u73A9\u5BB6\u6216\u81EA\u5DF1" tabindex="-1"><a class="header-anchor" href="#kill-\u6740\u6B7B\u73A9\u5BB6\u6216\u81EA\u5DF1" aria-hidden="true">#</a> <code>/kill</code> \u6740\u6B7B\u73A9\u5BB6\u6216\u81EA\u5DF1</h3><ul><li><code>/kill [&lt;name&gt;]</code> \uFF1A\u6740\u6B7B\u73A9\u5BB6\u6216\u81EA\u5DF1\u3002\u9700\u8981\u201C<code>server</code>\u201D\u7279\u6743</li></ul><h3 id="\u5BC6\u7801\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u7801\u64CD\u4F5C" aria-hidden="true">#</a> \u5BC6\u7801\u64CD\u4F5C</h3><p>\u8FD9\u4E9B\u547D\u4EE4\u5141\u8BB8\u8BBE\u7F6E\u548C\u91CD\u7F6E\u4EFB\u4F55\u73A9\u5BB6\u7684\u5BC6\u7801\uFF0C\u5E76\u4E14\u9700\u8981\u201C<code>password</code>\u201D\u7279\u6743\u624D\u80FD\u4F7F\u7528</p><ul><li><code>/setpassword &lt;player&gt; &lt;password&gt;</code>: \u5C06\u73A9\u5BB6<code>&lt;player&gt;</code>\u7684\u5BC6\u7801\u8BBE\u7F6E\u4E3A<code>&lt;password&gt;</code></li><li><code>/clearpassword &lt;player&gt;</code>: \u5C06\u73A9\u5BB6<code>&lt;player&gt;</code>\u7684\u5BC6\u7801\u8BBE\u7F6E\u4E3A\u7A7A</li></ul><h3 id="\u4ECE\u670D\u52A1\u5668\u5C01\u7981\u8E22\u6389\u73A9\u5BB6" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u670D\u52A1\u5668\u5C01\u7981\u8E22\u6389\u73A9\u5BB6" aria-hidden="true">#</a> \u4ECE\u670D\u52A1\u5668\u5C01\u7981\u8E22\u6389\u73A9\u5BB6</h3><p>\u8FD9\u4E9B\u547D\u4EE4\u5141\u8BB8\u7528\u6237\u8E22\uFF0C\u7981\u548C\u89E3\u7981\u73A9\u5BB6\u3002\u8E22\u4E00\u4E2A\u73A9\u5BB6\u610F\u5473\u7740\u4ECE\u670D\u52A1\u5668\u4E0A\u5220\u9664\u4E00\u4E2A\u8FDE\u63A5\u7684\u73A9\u5BB6\u3002\u8FD9\u9700\u8981\u201C<code>kick</code>\u201D\u7279\u6743\u3002\u7981\u6B62\u73A9\u5BB6\u53EF\u4EE5\u963B\u6B62\u4ED6/\u5979\u518D\u6B21\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u3002\u73A9\u5BB6\u6B64\u65F6\u4E0D\u9700\u8981\u8FDE\u63A5\u3002\u53D6\u6D88\u7981\u6B62\u662F\u6307\u53D6\u6D88\u73A9\u5BB6\u7684\u7981\u4EE4\uFF0C\u5141\u8BB8\u4ED6/\u5979\u518D\u6B21\u8FDE\u63A5\u5230\u670D\u52A1\u5668\u3002<code>ban</code>\u548C<code>unban</code>\u547D\u4EE4\u9700\u8981\u201C<code>ban</code>\u201D\u7279\u6743\u3002</p><ul><li><code>/kick &lt;player name&gt; [&lt;reason&gt;]</code>: \u8E22\u6389\u73A9\u5BB6<code>&lt;player name&gt;</code>\u3002\u53EF\u4EE5\u9009\u62E9\u4EE5\u6587\u672C\u5F62\u5F0F\u63D0\u4F9B\u89E3\u91CA\u539F\u56E0<code>&lt;reason&gt;</code>,\u6B64\u6587\u672C\u4E5F\u4F1A\u663E\u793A\u7ED9\u88AB\u8E22\u7684\u73A9\u5BB6\u3002</li><li><code>/ban</code>: \u663E\u793A\u88AB\u7981\u73A9\u5BB6\u540D\u5355</li><li><code>/ban &lt;player name&gt;</code>: Ban\u5C01\u7981\u73A9\u5BB6<code>&lt;player name&gt;</code>\u7684 IP</li><li><code>/unban &lt;player name&gt;</code>: \u89E3\u5C01\u73A9\u5BB6</li><li><code>/unban &lt;IP address&gt;</code>: \u89E3\u5C01\u88AB\u5C01\u7684\u73A9\u5BB6IP</li></ul><h3 id="\u670D\u52A1\u5668\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u4FE1\u606F" aria-hidden="true">#</a> \u670D\u52A1\u5668\u4FE1\u606F</h3><p>\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u4E00\u4E9B\u4FE1\u606F\uFF1B\u6765\u81EA\u670D\u52A1\u5668\u7684\u5E94\u7B54\u4FE1\u606F\u4E5F\u5C06\u88AB\u5199\u5165\u804A\u5929\u8BB0\u5F55\u4E2D\u3002</p><ul><li><code>/admin</code>: \u67E5\u770B\u60A8\u6240\u8FDE\u63A5\u670D\u52A1\u5668\u7684\u7BA1\u7406\u5458/\u670D\u52A1\u5668\u64CD\u4F5C\u5458\u7684\u73A9\u5BB6\u540D\u79F0\u3002</li><li><code>/status</code>: \u67E5\u770B\u670D\u52A1\u5668\u7684Minetest\u7248\u672C\uFF0C\u670D\u52A1\u5668\u8FD0\u884C\u7684\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\uFF08\u79F0\u4E3A\u201C\u6B63\u5E38\u8FD0\u884C\u65F6\u95F4\u201D\uFF09\uFF0C\u8FDE\u63A5\u7684\u73A9\u5BB6\u5217\u8868\u548C<code>[\u5F53\u5929]</code>\u7684<code>[\u6D88\u606F]</code>\uFF08\u5982\u679C\u5B58\u5728\uFF09\u3002</li><li><code>/mods</code>: \u67E5\u770B\u670D\u52A1\u5668\u4E0A\u5B89\u88C5\u7684mod\u5217\u8868\u3002</li><li><code>/days</code>: \u67E5\u770B\u5F53\u524D\u6E38\u620F\u65E5\u671F\uFF08\u4ECE0\u5F00\u59CB\u8BA1\u6570\uFF09</li><li><code>/time</code>: \u67E5\u770B\u5F53\u524D\u6E38\u620F\u65F6\u95F4\uFF0824\u5C0F\u65F6\u5236\uFF09</li></ul><h3 id="\u4E16\u754C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E16\u754C\u64CD\u4F5C" aria-hidden="true">#</a> \u4E16\u754C\u64CD\u4F5C</h3>',12),q=d("<li><code>/time &lt;hours&gt;:&lt;minutes&gt;</code>: \u4EE524\u5C0F\u65F6\u683C\u5F0F\uFF080\uFF1A00-23\uFF1A59\uFF09\u8BBE\u7F6E\u6E38\u620F\u4E2D\u7684&quot;\u4E00\u5929&quot;\u7684&quot;\u65F6\u95F4&quot;. \u9700\u8981\u201C<code>settime</code>\u201D\u7279\u6743</li><li><code>/time &lt;time_of_day&gt;</code>: \u5C06\u4E00\u5929\u4E2D\u7684\u65F6\u95F4\u8BBE\u7F6E\u4E3A0\u523024000\u4E4B\u95F4\u7684\u6570\u5B57\u3002\u9700\u8981\u201C<code>settime</code>\u201D\u7279\u6743</li><li><code>/set -n time_speed &lt;speed&gt;</code>: \u8BBE\u7F6E\u6E38\u620F\u4E16\u754C\u65F6\u95F4\u8FD0\u8F6C\u7684\u901F\u5EA6[\u663C/\u591C\u5468\u671F],\u8FD9\u91CC<code>&lt;speed&gt;</code> \u662F\u65F6\u95F4\u7684\u901F\u5EA6\uFF08\u201C<code>&lt;speed&gt;</code> \u65F6\u95F4\u6BD4\u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\u66F4\u5FEB\u201D\uFF09\u3002\u9ED8\u8BA4\u503C\u4E3A<code>72</code>\uFF0C\u8FD9\u610F\u5473\u7740\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u663C\u591C\u5FAA\u73AF\u6301\u7EED20\u5206\u949F\u3002\u9700\u8981\u201C<code>server</code>\u201D\u7279\u6743</li>",3),B=e("code",null,"/spawnentity <entity> [<X>,<Y>,<Z>]",-1),C=o(": \u751F\u6210\u4E00\u4E2A[\u5B9E\u4F53]\u578B"),N=e("code",null,"<entity>",-1),V=o("\u7684\u540D\u79F0\uFF08\u53C2\u89C1"),E={href:"https://wiki.minetest.net/List_of_entity_names",target:"_blank",rel:"noopener noreferrer"},T=o("\u5217\u8868\u5B9E\u4F53\u540D\u79F0"),A=o("\uFF09\u9644\u8FD1\u7684\u4F4D\u7F6E\u6216\u5728X\uFF0CY\uFF0CZ\u5750\u6807\uFF0C\u5982\u679C\u6307\u5B9A\u3002\u9700\u8981\u201Cgive\u201D\u548C\u201Cinteract\u201D\u6743\u9650"),O=d('<h3 id="killme-\u81EA\u6740\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#killme-\u81EA\u6740\u547D\u4EE4" aria-hidden="true">#</a> <code>/killme</code> \u81EA\u6740\u547D\u4EE4</h3><ul><li><code>/killme</code> \u81EA\u6740\u547D\u4EE4</li></ul><h3 id="\u8BBE\u7F6E-\u8FD4\u56DE\u5BB6-\u51FA\u751F\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-\u8FD4\u56DE\u5BB6-\u51FA\u751F\u70B9" aria-hidden="true">#</a> \u8BBE\u7F6E/\u8FD4\u56DE\u5BB6(\u51FA\u751F\u70B9)</h3><ul><li><code>/sethome</code> \u2014\u5C06\u5F53\u524D\u4F4D\u7F6E\u8BBE\u7F6E\u4E3A\u5BB6\u7684\u5730\u70B9(\u201C\u51FA\u751F\u70B9\u201D)\u3002\u9700\u8981\u201C<code>home</code>\u201D\u7279\u6743</li><li><code>/home</code> \u2014\u5C06\u81EA\u5DF1\u4F20\u9001\u5230\u201C\u5BB6\u201D\u7684\u4F4D\u7F6E\u3002\u5982\u679C\u5C1A\u672A\u8BBE\u7F6E\u5BB6\u7684\u5730\u70B9(home point)\uFF0C\u5219\u6B64\u547D\u4EE4\u4E0D\u8D77\u4F5C\u7528\uFF0C\u8BF7\u5148\u6267\u884C<code>/sethome</code>\u8BBE\u7F6E\u51FA\u751F\u70B9 \u3002\u9700\u8981\u201C<code>sethome</code>\u201D\u7279\u6743.</li></ul>',4);function R(U,X){const l=c("ExternalLinkIcon"),i=c("RouterLink");return r(),n("div",null,[p,e("ul",null,[e("li",null,[g,u,_,m,e("a",v,[f,t(l)]),y,e("a",b,[k,t(l)]),x])]),w,e("ul",null,[e("li",null,[z,I,t(i,{to:"/zh/guide/teacher/coordinates/"},{default:s(()=>[L]),_:1})]),P]),S,e("ul",null,[q,e("li",null,[B,C,N,V,e("a",E,[T,t(l)]),A])]),O])}var Z=a(h,[["render",R],["__file","commands.html.vue"]]);export{Z as default};
