import{_ as c,o as p,c as u,a as n,b as a,w as l,e,d as s,r as i}from"./app.768b15af.js";var d="/assets/quiz-start.d599e9a6.jpg",r="/assets/quiz-error.8a5b9bdb.jpg",m="/assets/quiz-award.e6262d40.jpg",k="/assets/quiz-cmd.a2e31f1b.jpg",v="/assets/quizzes.efd64154.jpg",_="/assets/quiz-edit.64ddd0f5.jpg",h="/assets/quiz-select.7444a166.jpg",b="/assets/awards.866d1f30.jpg",g="/assets/award.2444fffb.jpg",y="/assets/config.d0147230.jpg";const f={},q=e('<p>\u5728\u6E38\u620F\u5185\u5BF9\u6E38\u620F\u65F6\u95F4\u7BA1\u7406\u4EE5\u53CA\u5728\u6E38\u73A9\u7684\u95F4\u9699\u7A7F\u63D2\u7EC3\u4E60\u7684\u6A21\u7EC4.</p><p>\u5F53\u89C4\u5B9A\u7684<code>\u6E38\u620F\u65F6\u95F4(\u5206\u949F)</code>\u5230\u4E86\u540E,\u6E38\u620F\u4E2D\u7684\u73A9\u5BB6\u4F1A\u88AB\u8E22\u51FA\u6E38\u620F,\u53EA\u6709<code>\u4F11\u606F\u65F6\u95F4(\u5206\u949F)</code>\u5230\u4E86\u540E\u624D\u80FD\u7EE7\u7EED\u6E38\u620F. \u5728\u6E38\u620F\u4E2D\u6BCF\u5230<code>\u51FA\u9898\u95F4\u9694(\u5206\u949F)</code>\u65F6\u95F4\u5C31\u4F1A\u51FA\u9898,\u73A9\u5BB6\u5FC5\u987B\u56DE\u7B54\u6B63\u786E\u624D\u80FD\u7EE7\u7EED\u6E38\u620F,\u56DE\u7B54\u6B63\u786E\u73A9\u5BB6\u4F1A\u5F97\u5230\u5956\u52B1\u7269\u54C1.</p><p>\u8981\u60F3\u4F7F\u7528\u8BE5\u529F\u80FD\u8BF7\u786E\u4FDD\u5728\u6E38\u620F\u4E16\u754C(\u8BFE\u7A0B)\u4E0A\u5DF2\u7ECF\u542F\u7528<code>quiz</code>\u548C<code>quiz_ui</code>\u6A21\u7EC4.</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u914D\u7F6E\u7BA1\u7406Quiz\u6A21\u7EC4\u9700\u8981<code>quiz</code>\u6743\u9650,\u8BE5\u6743\u9650\u53EF\u4EE5\u901A\u8FC7\u804A\u5929\u547D\u4EE4\u8D4B\u4E88\u81EA\u5DF1<code>quiz</code>\u6743\u9650: <code>/grantme quiz</code>. \u7136\u540E\u6267\u884C<code>/quiz</code>\u804A\u5929\u547D\u4EE4\u5373\u53EF\u8FDB\u5165\u7BA1\u7406\u754C\u9762(\u6CE8\u610F\u8BE5\u8BFE\u7A0B\u5FC5\u987B\u540C\u65F6\u542F\u7528<code>quiz_ui</code>\u6A21\u7EC4).</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u53EF\u4EE5\u5BF9\u6307\u5B9A\u73A9\u5BB6\u4F7F\u7528<code>noquiz</code>\u6743\u9650,\u4ECE\u800C\u4F7F\u5F97\u8BE5\u73A9\u5BB6\u4E0D\u7528\u7B54\u9898: <code>/grant &lt;player&gt; noquiz</code>.</li><li>\u64A4\u9500\u73A9\u5BB6\u7684\u4E0D\u7528\u7B54\u9898<code>noquiz</code>\u6743\u9650: <code>/revoke &lt;player&gt; noquiz</code></li></ul></div>',5),z={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),x=s("\u5982\u4F55\u53D1\u9001\u804A\u5929\u547D\u4EE4,\u8BF7\u53C2\u9605\u300A"),E=s("\u6E38\u620F\u5185\u7BA1\u7406:\u53D1\u9001\u547D\u4EE4"),B=s("\u300B."),j=e('<h2 id="quiz-\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u73A9\u5BB6\u7B54\u9898" tabindex="-1"><a class="header-anchor" href="#quiz-\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u73A9\u5BB6\u7B54\u9898" aria-hidden="true">#</a> Quiz \u6E38\u620F\u6311\u6218\u6A21\u7EC4\u73A9\u5BB6\u7B54\u9898</h2><p><img src="'+d+'" alt="Quiz Start"></p><p>\u5982\u679C\u7B54\u9898\u9519\u8BEF,\u5C4F\u5E55\u53F3\u4E0A\u89D2\u5C31\u4F1A\u63D0\u793A:</p><p><img src="'+r+'" alt="Quiz Error"></p><p>\u5982\u679C\u7B54\u9898\u6B63\u786E,\u5C31\u4F1A\u5F97\u5230\u5956\u54C1:</p><p><img src="'+m+'" alt="quiz-award"></p><h2 id="quiz-\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#quiz-\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u7BA1\u7406" aria-hidden="true">#</a> Quiz \u6E38\u620F\u6311\u6218\u6A21\u7EC4\u7BA1\u7406</h2><p>\u7136\u540E\u5C31\u53EF\u4EE5\u8F93\u5165\u804A\u5929\u547D\u4EE4<code>/quiz</code>:</p><p><img src="'+k+'" alt="type quiz cmd"></p><p>\u6253\u5F00\u7BA1\u7406\u754C\u9762,\u53EF\u4EE5\u770B\u5230\u67094\u4E2A\u6807\u7B7E\u9875\u9762</p><p>\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\u9762\u662F<code>\u6311\u6218\u95EE\u9898\u5217\u8868</code>:</p><h3 id="\u6311\u6218\u95EE\u9898\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6311\u6218\u95EE\u9898\u5217\u8868" aria-hidden="true">#</a> \u6311\u6218\u95EE\u9898\u5217\u8868</h3><p><img src="'+v+'" alt="Quizzes"></p><p>\u5728\u8FD9\u91CC\u53EF\u4EE5\u5BF9\u6D4B\u8BD5\u7684\u95EE\u9898\u8FDB\u884C\u7BA1\u7406</p><ul><li>\u65B0\u5EFA: \u6DFB\u52A0\u4E00\u4E2A\u6D4B\u8BD5</li><li>\u7F16\u8F91: \u7F16\u8F91\u73B0\u6709\u7684\u6D4B\u8BD5(\u9700\u8981\u5148\u9009\u62E9\u4E00\u4E2A\u6D4B\u8BD5\u95EE\u9898)</li><li>\u5220\u9664: \u5220\u9664\u9009\u4E2D\u7684\u6D4B\u8BD5</li></ul>',15),A={class:"custom-container warning"},Q=n("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),L=n("strong",null,"\u5DF2\u77E5\u95EE\u9898",-1),N=s(": \u5728"),I=s("minetest-5.6.1-edu-2d4c67fd6(2022-10-15)"),W=s("\u4EE5\u524D\u53D1\u5E03\u7684\u7248\u672C\u5728Windows\u7CFB\u7EDF\u4E0A\u8F93\u5165\u6587\u5B57,\u53EA\u80FD\u4F7F\u7528\u7EAF\u82F1\u6587\u8F93\u5165\u6CD5,\u4E0D\u80FD\u4F7F\u7528\u4EFB\u4F55"),T=n("strong",null,"\u4E2D\u6587\u8F93\u5165\u6CD5",-1),C=s("\u8F93\u5165,\u5426\u5219\u4EFB\u4F55\u6587\u5B57\u90FD\u8F93\u5165\u4E0D\u4E0A\u53BB\u4E86. \u5FC5\u987B\u5B89\u88C5\u6700\u65B0\u7248\u672C("),S=s("minetest-5.6.1-edu-2d4c67fd6(2022-10-15)"),V=s("\u4EE5\u540E\u53D1\u5E03\u7684\u7248\u672C)\u65B9\u53EF\u4F7F\u7528"),Y=n("strong",null,"\u4E2D\u6587\u8F93\u5165\u6CD5",-1),D=s("."),M=n("li",null,"\u5982\u679C\u5076\u5C14\u51FA\u73B0\u65E0\u6CD5\u547C\u51FA\u4E2D\u6587\u8F93\u5165\u6CD5\u7684\u60C5\u51B5,\u8BF7\u5148\u70B9\u51FB\u8F93\u5165\u6846\u5916\u9762\u7684\u7A97\u4F53(\u8BA9\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9),\u518D\u5207\u6362\u56DE\u8F93\u5165\u6846(\u518D\u6B21\u70B9\u51FB\u8F93\u5165\u6846)",-1),P=n("li",null,[s("BTW:\u5728"),n("code",null,"Android"),s("\u4EE5\u53CA"),n("code",null,"Linux"),s("("),n("code",null,"Ubuntu"),s(")\u4E0B\u8F93\u5165\u4E2D\u6587\u6B63\u5E38\u3002")],-1),R=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,"\u5982\u679C\u5728Windows\u7CFB\u7EDF\u4E0B\u8BF7\u76F4\u63A5\u7F16\u8F91Quiz\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u7684\u914D\u7F6E\u6587\u4EF6\u3002")],-1),U=n("p",null,[n("img",{src:_,alt:"Quiz"})],-1),$=n("p",null,"\u95EE\u9898\u7C7B\u578B\u6709:",-1),F=e("<li>\u56DB\u5219\u8FD0\u7B97: \u968F\u673A\u56DB\u5219\u8FD0\u7B97,\u89C4\u5219\u5728\u7B54\u6848\u91CC <ul><li>\u6807\u9898: <code>$calc</code> \u4F1A\u88AB\u66FF\u6362\u4E3A\u51FA\u7684\u56DB\u5219\u8FD0\u7B97\u9898\u76EE</li><li>\u7B54\u6848: \u4E3A\u51FA\u9898\u7684\u89C4\u5219,\u89C4\u5219\u5B9A\u4E49\u5982\u4E0B: <ul><li><code>n</code>: \u5C0F\u5199n\u8868\u793A \u968F\u673A\u4E00\u4F4D\u6570\u5B57(0-9)</li><li><code>N</code>: \u5927\u5199N\u8868\u793A \u968F\u673A\u975E\u96F6\u7684\u4E00\u4F4D\u6570\u5B57(1-9)</li><li><code>[1-3]</code>: \u968F\u673A\u6307\u5B9A\u4E86\u6570\u5B57\u8303\u56F4\u7684\u4E00\u4F4D\u6570\u5B57</li><li><code>[+-]</code>: \u968F\u673A\u6307\u5B9A\u4E00\u4E2A\u7B97\u672F\u64CD\u4F5C\u7B26</li><li><code>\u6CE8\u610F</code>,\u9664\u6CD5\u53EA\u80FD\u662F\u6700\u540E\u4E00\u4E2A\u64CD\u4F5C. \u4F59\u6570\u7528\u81F3\u5C11\u4E09\u4E2A\u70B9<code>...</code>\u4E0E\u5546\u5206\u9694.</li></ul></li><li>\u5F3A\u5236\u6574\u6570(forceInt): \u9488\u5BF9\u9664\u6CD5,\u662F\u5426\u5F3A\u5236\u7ED3\u679C\u662F\u6574\u6570.</li></ul></li>",1),G=s("\u6587\u5B57: \u7B54\u6848\u662F\u6587\u5B57\u7C7B\u578B\u7684\u9898\u76EE "),H=s("\u7B54\u6848\u652F\u6301 "),J={href:"https://www.lua.org/pil/20.2.html",target:"_blank",rel:"noopener noreferrer"},K=s("Lua \u5B57\u7B26\u6A21\u5F0F\u5339\u914D"),O=s(" ,\u5982\u679C\u7B54\u6848\u662F"),X=n("code",null,"\u6A21\u5F0F\u5339\u914D",-1),Z=s("\u5B57\u7B26\u4E32,\u90A3\u4E48\u7B54\u6848\u5FC5\u987B\u7528\u4E24\u4E2A"),nn=n("code",null,"/",-1),sn=s("\u5305\u88F9."),an=n("li",null,"\u6570\u503C: \u7B54\u6848\u662F\u6570\u503C\u7C7B\u578B\u7684\u9898\u76EE",-1),en=n("li",null,[s("\u662F/\u5426: \u7B54\u6848\u662F"),n("code",null,"true"),s("/"),n("code",null,"false"),s("\u7684\u9898\u76EE")],-1),tn=n("li",null,[s("\u9009\u62E9\u9898: "),n("ul",null,[n("li",null,"\u9009\u9879: \u6BCF\u4E00\u884C\u4E3A\u4E00\u4E2A\u9009\u9879"),n("li",null,"\u7B54\u6848: \u4E3A\u9009\u9879\u7684\u5E8F\u53F7(\u4ECE1\u5F00\u59CB),\u5982\u679C\u662F\u591A\u9879\u9009\u62E9,\u5E8F\u53F7\u4E4B\u95F4\u7528\u9017\u53F7\u5206\u9694,\u4E2D\u95F4\u4E0D\u8981\u7A7A\u683C.")])],-1),ln=e('<p><img src="'+h+'" alt="quiz-select"></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8BB0\u4F4F,\u6700\u540E\u5FC5\u987B\u70B9\u51FB<code>\u786E\u8BA4</code>\u6309\u94AE\u4FDD\u5B58.\u70B9\u51FB<code>\u53D6\u6D88</code>\u5219\u653E\u5F03\u4FEE\u6539,\u4E0D\u4F1A\u4FDD\u5B58\u5230\u6587\u4EF6.</p></div><p>\u7B2C\u4E8C\u4E2A\u6807\u7B7E\u9875\u9762\u662F<code>\u5956\u54C1\u5217\u8868</code>:</p><h3 id="\u5956\u54C1\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5956\u54C1\u5217\u8868" aria-hidden="true">#</a> \u5956\u54C1\u5217\u8868</h3><p><img src="'+b+'" alt="awards"></p><p>\u5728\u8FD9\u91CC\u53EF\u4EE5\u5BF9\u56DE\u7B54\u6B63\u786E\u540E\u7684\u5956\u54C1\u8FDB\u884C\u7BA1\u7406,\u6BCF\u4E00\u6B21\u56DE\u7B54\u6B63\u786E\u540E\u4F1A\u5BF9\u5217\u8868\u4E2D\u5956\u54C1\u4F5C\u968F\u673A\u62BD\u53D6.</p><ul><li>\u65B0\u5EFA: \u6DFB\u52A0\u4E00\u4E2A\u5956\u54C1</li><li>\u7F16\u8F91: \u7F16\u8F91\u73B0\u6709\u7684\u5956\u54C1(\u9700\u8981\u5148\u9009\u62E9\u4E00\u4E2A)</li><li>\u5220\u9664: \u5220\u9664\u9009\u4E2D\u7684\u5956\u54C1</li></ul><p><img src="'+g+'" alt="award"></p><p>\u7B2C\u4E09\u4E2A\u6807\u7B7E\u9875\u9762\u662F<code>\u9AD8\u7EA7\u914D\u7F6E</code>:</p><h3 id="\u9AD8\u7EA7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u914D\u7F6E" aria-hidden="true">#</a> \u9AD8\u7EA7\u914D\u7F6E</h3><p><img src="'+y+'" alt="config"></p><ul><li>\u6E38\u620F\u65F6\u95F4(\u5206\u949F): \u5355\u6B21\u6700\u957F\u6E38\u620F\u65F6\u95F4</li><li>\u4F11\u606F\u65F6\u95F4(\u5206\u949F): \u5F3A\u5236\u81F3\u5C11\u4F11\u606F\u8BE5\u5206\u949F\u6570\u540E\u624D\u5141\u8BB8\u8FDB\u5165\u6E38\u620F</li><li>\u51FA\u9898\u95F4\u9694(\u5206\u949F): \u5728\u6E38\u620F\u4E2D\u6BCF\u73A9\u591A\u5C11\u5206\u949F\u540E\u5C31\u5FC5\u987B\u7B54\u9898</li><li>\u68C0\u67E5\u95F4\u9694(\u79D2): \u5185\u90E8\u68C0\u67E5\u7B54\u6848\u7684\u95F4\u9694,\u56DE\u7B54\u9519\u8BEF\u5C31\u91CD\u65B0\u5F39\u51FA\u7B54\u9898\u5BF9\u8BDD\u6846</li><li>\u8FDB\u5165\u540E\u7ACB\u5373\u4F5C\u7B54: \u662F\u5426\u8FDB\u5165\u6E38\u620F\u540E\u9A6C\u4E0A\u7B54\u9898</li><li>\u5F3A\u5236\u7BA1\u7406\u5458\u4F11\u606F: \u662F\u5426\u7BA1\u7406\u5458\u4E5F\u8981\u9075\u5FAA\u6E38\u620F\u65F6\u95F4\u548C\u4F11\u606F\u65F6\u95F4</li></ul><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>Quiz\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u7684\u6240\u6709\u53C2\u6570\u914D\u7F6E\u4FE1\u606F\u90FD\u4FDD\u5B58\u5728\u5B83\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u3002</p>',14),on={class:"custom-container tip"},cn=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),pn=s("\u914D\u7F6E\u6587\u4EF6\u662F"),un={href:"https://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"},dn=s("YAML\u683C\u5F0F"),rn=s("\u7684\u7EAF\u6587\u672C\u3002 \u53EF\u4EE5\u7528\u8BB0\u4E8B\u672C\u76F4\u63A5\u6253\u5F00\u3002"),mn=n("h3",{id:"\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E")],-1),kn=n("p",null,[s("Quiz\u6E38\u620F\u6311\u6218\u6A21\u7EC4\u7684\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E\u5728\u6A21\u7EC4\u76EE\u5F55\u4E0B\u7684"),n("code",null,"mods/quiz/config.yml"),s("\u4E2D\uFF0C")],-1),vn=n("p",null,[s("\u5F53\u4F60\u5728\u6E38\u620F\u4E2D\u4FDD\u5B58\u7B54\u9898\u914D\u7F6E\u65F6\u5019\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6E38\u620F\u4E16\u754C(\u8BFE\u7A0B)\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u5B58\u653E\u5728\u4E16\u754C\uFF08\u8BFE\u7A0B\uFF09\u76EE\u5F55\u4E0B\u7684"),n("code",null,"quiz_config.yml"),s("\u6587\u4EF6\u4E2D\uFF0C\u8BE5\u914D\u7F6E\u6587\u4EF6\u53EA\u5BF9\u8BE5\u6E38\u620F\u8BFE\u7A0B(\u4E16\u754C)\u6709\u6548\u3002")],-1),_n={class:"custom-container tip"},hn=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),bn=s("\u4E16\u754C\uFF08\u8BFE\u7A0B\uFF09\u76EE\u5F55\u4F4D\u7F6E\u8BF7\u53C2\u9605: "),gn=s("\u5E94\u7528\u76EE\u5F55\u7B80\u4ECB"),yn=e(`<h3 id="\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B\u53CA\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B\u53CA\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u793A\u4F8B\u53CA\u8BF4\u660E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># quiz_config.yml \u6587\u4EF6</span>

<span class="token comment"># \u5F53\u6210\u529F\u4F5C\u7B54\u540E\u8D4B\u4E88\u73A9\u5BB6\u7684\u6743\u9650\uFF0C\u9ED8\u8BA4\u662F &quot;interact,shout&quot;</span>
<span class="token key atrule">grant</span><span class="token punctuation">:</span> interact<span class="token punctuation">,</span>shout
<span class="token comment"># \u6700\u957F\u6E38\u620F\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u5206\u949F\uFF0C0\u8868\u793A\u7981\u7528</span>
<span class="token key atrule">totalPlayTime</span><span class="token punctuation">:</span> <span class="token number">30</span>
<span class="token comment"># \u6E38\u620F\u540E\u7684\u81F3\u5C11\u4F11\u606F\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u5206\u949F\uFF0C0\u8868\u793A\u7981\u7528</span>
<span class="token key atrule">restTime</span><span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token comment"># \u662F\u5426\u8DF3\u8FC7\u5DF2\u7ECF\u56DE\u7B54\u6B63\u786E\u7684\u95EE\u9898</span>
<span class="token comment"># \u6570\u5B57\u8868\u793A\u56DE\u7B54\u6B63\u786E\u7684\u6B21\u6570\uFF0C0 \u8868\u793A\u7981\u7528</span>
<span class="token key atrule">skipAnswered</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token comment"># \u68C0\u67E5\u95F4\u9694\uFF0C\u5355\u4F4D\u662F\u79D2</span>
<span class="token key atrule">checkInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token comment"># \u4F5C\u7B54\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u5206\u949F</span>
<span class="token key atrule">idleInterval</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token comment"># \u6E38\u620F\u65F6\u95F4\u5230\u8E22\u51FA\u73A9\u5BB6\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2</span>
<span class="token key atrule">kickDelay</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment"># \u56DE\u7B54\u6B63\u786E\uFF0C\u7ED9\u51FA\u7684\u968F\u673A\u5956\u54C1</span>
<span class="token key atrule">awards</span><span class="token punctuation">:</span>
  <span class="token comment"># the item name to give</span>
  <span class="token comment"># \u540D\u79F0\u8BF7\u89C1\uFF1A minetest_game/mods/default/nodes.lua</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> coalblock
    <span class="token comment"># optional, for translation</span>
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Coal Block
    <span class="token comment"># optional, the defaults to default mod</span>
    <span class="token key atrule">mod</span><span class="token punctuation">:</span> default
    <span class="token comment"># the item count, optional the defaults to 1</span>
    <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> wood
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Apple Wood Planks
    <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> stone
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Stone
    <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> torch
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Torch
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> steel_ingot
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Steel Ingot
    <span class="token key atrule">count</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token comment"># \u95EE\u9898\u5217\u8868</span>
<span class="token key atrule">quiz</span><span class="token punctuation">:</span>
  <span class="token comment"># \u5982\u679C\u6CA1\u6709\u95EE\u9898\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u7C7B\u578B\u662F\u201C\u6587\u5B57\u201D</span>
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> favorColor
    <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;What&#39;s my favor color?&quot;</span>
    <span class="token key atrule">answer</span><span class="token punctuation">:</span> red
  <span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> theYear
    <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;What&#39;s the year?&quot;</span>
    <span class="token key atrule">answer</span><span class="token punctuation">:</span> <span class="token number">2021</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;18/7=?&quot;</span>
    <span class="token comment"># LUA\u5B57\u7B26\u4E32\u6A21\u5F0F\u5339\u914D\u65B9\u5F0F</span>
    <span class="token key atrule">answer</span><span class="token punctuation">:</span> <span class="token string">&quot;/^2%.%.%.+4/&quot;</span> <span class="token comment"># the lua string pattern: 2...4 (three dots and more)</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;$calc=?&quot;</span>
    <span class="token comment"># \u56DB\u5219\u8FD0\u7B97\u7C7B\u578B</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> calc
    <span class="token comment"># \u5F3A\u5236\u9664\u6CD5\u8FD0\u7B97\u7684\u7ED3\u679C\u6CA1\u6709\u4F59\u6570\uFF0C\u662F\u6574\u6570</span>
    <span class="token key atrule">forceInt</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">answer</span><span class="token punctuation">:</span> <span class="token string">&quot;(Nn*n+n)/(Nn-n)&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;What is the part of the plant that uses light to make food?&quot;</span>
    <span class="token comment"># \u9009\u62E9\u9898</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;select&quot;</span>
    <span class="token key atrule">options</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> leaves
      <span class="token punctuation">-</span> roots
      <span class="token punctuation">-</span> stem
      <span class="token punctuation">-</span> flowers
    <span class="token comment"># \u5E8F\u53F7\u4ECE1\u5F00\u59CB\uFF0C\u5982\u679C\u662F\u591A\u9879\u9009\u62E9,\u5E8F\u53F7\u4E4B\u95F4\u7528\u9017\u53F7\u5206\u9694,\u4E2D\u95F4\u4E0D\u8981\u7A7A\u683C</span>
    <span class="token key atrule">answer</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),fn={class:"custom-container warning"},qn=n("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),zn={href:"https://www.ruanyifeng.com/blog/2016/07/yaml.html",target:"_blank",rel:"noopener noreferrer"},wn=s("YAML\u683C\u5F0F"),xn=s("\u7528\u7F29\u8FDB\u8868\u793A\u5C42\u7EA7\u5173\u7CFB\uFF0C\u6CE8\u610F\u7F29\u8FDB\u5BF9\u9F50\u3002"),En=n("li",null,[s("\u5FC5\u987B\u662F\u7528"),n("code",null,"\u7A7A\u683C"),s("\u6765\u7F29\u8FDB\uFF0C\u4E0D\u80FD\u7528"),n("code",null,"tab"),s("\u952E")],-1);function Bn(jn,An){const t=i("RouterLink"),o=i("ExternalLinkIcon");return p(),u("div",null,[q,n("div",z,[w,n("p",null,[x,a(t,{to:"/zh/guide/teacher/ingame-man/"},{default:l(()=>[E]),_:1}),B])]),j,n("div",A,[Q,n("ul",null,[n("li",null,[L,N,a(t,{to:"/zh/download/"},{default:l(()=>[I]),_:1}),W,T,C,a(t,{to:"/zh/download/"},{default:l(()=>[S]),_:1}),V,Y,D]),M,P])]),R,U,$,n("ul",null,[F,n("li",null,[G,n("ul",null,[n("li",null,[H,n("a",J,[K,a(o)]),O,X,Z,nn,sn])])]),an,en,tn]),ln,n("div",on,[cn,n("p",null,[pn,n("a",un,[dn,a(o)]),rn])]),mn,kn,vn,n("div",_n,[hn,n("p",null,[bn,a(t,{to:"/zh/guide/teacher/#%E5%BA%94%E7%94%A8%E7%9B%AE%E5%BD%95%E7%AE%80%E4%BB%8B"},{default:l(()=>[gn]),_:1})])]),yn,n("div",fn,[qn,n("ul",null,[n("li",null,[n("a",zn,[wn,a(o)]),xn]),En])])])}var Ln=c(f,[["render",Bn],["__file","index.html.vue"]]);export{Ln as default};
