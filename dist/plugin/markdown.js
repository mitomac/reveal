!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.r(t);var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),o=(l.defaults,l.getDefaults,l.changeDefaults,/[&<>"']/),u=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,h=/[<>"']|&(?!#?\w+;)/g,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},g=function(e){return p[e]};var f=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function d(e){return e.replace(f,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var b=/(^|[^\[])\^/g;var k=/[^\w:]/g,m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var x={},y=/^[^:]+:\/*[^/]*$/,v=/^([^:]+:)[\s\S]*$/,w=/^([^:]+:\/*[^/]*)[\s\S]*$/;function _(e,t){x[" "+e]||(y.test(e)?x[" "+e]=e+"/":x[" "+e]=S(e,"/",!0));var n=-1===(e=x[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(v,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(w,"$1")+t:e+t}function S(e,t,n){var r=e.length;if(0===r)return"";for(var s=0;s<r;){var i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var A=function(e,t){if(t){if(o.test(e))return e.replace(u,g)}else if(c.test(e))return e.replace(h,g);return e},$=d,R=function(e,t,n){if(e){var r;try{r=decodeURIComponent(d(n)).replace(k,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!m.test(n)&&(n=_(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},z=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},T=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},E=S,O=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,s=0;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&--r<0)return s;return-1},L=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},q={exec:function(){}},P=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(b,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},C=z,I={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:q,table:q,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};I.def=P(I.def).replace("label",I._label).replace("title",I._title).getRegex(),I.bullet=/(?:[*+-]|\d{1,9}\.)/,I.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,I.item=P(I.item,"gm").replace(/bull/g,I.bullet).getRegex(),I.list=P(I.list).replace(/bull/g,I.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+I.def.source+")").getRegex(),I._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",I._comment=/<!--(?!-?>)[\s\S]*?-->/,I.html=P(I.html,"i").replace("comment",I._comment).replace("tag",I._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),I.paragraph=P(I._paragraph).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",I._tag).getRegex(),I.blockquote=P(I.blockquote).replace("paragraph",I.paragraph).getRegex(),I.normal=C({},I),I.gfm=C({},I.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),I.gfm.nptable=P(I.gfm.nptable).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",I._tag).getRegex(),I.gfm.table=P(I.gfm.table).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",I._tag).getRegex(),I.pedantic=C({},I.normal,{html:P("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",I._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:q,paragraph:P(I.normal._paragraph).replace("hr",I.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",I.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var Z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:q,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:q,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};Z.em=P(Z.em).replace(/punctuation/g,Z._punctuation).getRegex(),Z._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Z.autolink=P(Z.autolink).replace("scheme",Z._scheme).replace("email",Z._email).getRegex(),Z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Z.tag=P(Z.tag).replace("comment",I._comment).replace("attribute",Z._attribute).getRegex(),Z._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Z._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,Z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Z.link=P(Z.link).replace("label",Z._label).replace("href",Z._href).replace("title",Z._title).getRegex(),Z.reflink=P(Z.reflink).replace("label",Z._label).getRegex(),Z.normal=C({},Z),Z.pedantic=C({},Z.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:P(/^!?\[(label)\]\((.*?)\)/).replace("label",Z._label).getRegex(),reflink:P(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Z._label).getRegex()}),Z.gfm=C({},Z.normal,{escape:P(Z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),Z.gfm.url=P(Z.gfm.url,"i").replace("email",Z.gfm._extended_email).getRegex(),Z.breaks=C({},Z.gfm,{br:P(Z.br).replace("{2,}","*").getRegex(),text:P(Z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var j={block:I,inline:Z},M=l.defaults,N=j.block,D=j.inline,H=E,B=T,U=A,F=O,V=function(){function e(t){s(this,e),this.tokens=[],this.tokens.links=Object.create(null),this.options=t||M,this.rules={block:N.normal,inline:D.normal},this.options.pedantic?(this.rules.block=N.pedantic,this.rules.inline=D.pedantic):this.options.gfm&&(this.rules.block=N.gfm,this.options.breaks?this.rules.inline=D.breaks:this.rules.inline=D.gfm)}return a(e,[{key:"lex",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens),this.inline(this.tokens),this.tokens}},{key:"blockTokens",value:function(e,t){var n,r,s,i,a,l,o,u,c,h,p,g,f,d,b,k,m,x=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.block.newline.exec(e))&&(e=e.substring(s[0].length),m=s[0],s[0].length>1&&t.push({type:"space",raw:m})),s=this.rules.block.code.exec(e))b=t[t.length-1],e=e.substring(s[0].length),m=s[0],b&&"paragraph"===b.type?(b.text+="\n"+s[0].trimRight(),b.raw+="\n"+m):(s=s[0].replace(/^ {4}/gm,""),t.push({type:"code",raw:m,codeBlockStyle:"indented",text:this.options.pedantic?s:H(s,"\n")}));else if(s=this.rules.block.fences.exec(e))e=e.substring(s[0].length),m=s[0],t.push({type:"code",raw:m,lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.block.heading.exec(e))e=e.substring(s[0].length),m=s[0],t.push({type:"heading",raw:m,depth:s[1].length,text:s[2]});else if((s=this.rules.block.nptable.exec(e))&&(l={type:"table",header:B(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(s[0].length),m=s[0],l.raw=m,p=l.align.length,c=0;c<p;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(p=l.cells.length,c=0;c<p;c++)l.cells[c]=B(l.cells[c],l.header.length);t.push(l)}else if(s=this.rules.block.hr.exec(e))e=e.substring(s[0].length),m=s[0],t.push({type:"hr",raw:m});else if(s=this.rules.block.blockquote.exec(e))e=e.substring(s[0].length),m=s[0],s=s[0].replace(/^ *> ?/gm,""),t.push({type:"blockquote",raw:m,tokens:this.blockTokens(s,[],x)});else if(s=this.rules.block.list.exec(e))for(e=e.substring(s[0].length),o={type:"list",raw:m=s[0],ordered:g=(i=s[2]).length>1,start:g?+i:"",loose:!1,items:[]},t.push(o),n=!1,p=(s=s[0].match(this.rules.block.item)).length,c=0;c<p;c++)m=(l=s[c]).trim(),u=l.length,~(l=l.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(u-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+u+"}","gm"),"")),c!==p-1&&(a=N.bullet.exec(s[c+1])[0],(i.length>1?1===a.length:a.length>1||this.options.smartLists&&a!==i)&&(e=(k=s.slice(c+1).join("\n"))+e,o.raw=o.raw.substring(o.raw.length-k.length),c=p-1)),r=n||/\n\n(?!\s*$)/.test(l),c!==p-1&&(n="\n"===l.charAt(l.length-1),r||(r=n)),r&&(o.loose=!0),d=void 0,(f=/^\[[ xX]\] /.test(l))&&(d=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),o.items.push({raw:m,task:f,checked:d,loose:r,tokens:this.blockTokens(l,[],!1)});else if(s=this.rules.block.html.exec(e))e=e.substring(s[0].length),m=s[0],t.push({type:this.options.sanitize?"paragraph":"html",raw:m,pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):U(s[0]):s[0]});else if(x&&(s=this.rules.block.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),h=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[h]||(this.tokens.links[h]={href:s[2],title:s[3]});else if((s=this.rules.block.table.exec(e))&&(l={type:"table",header:B(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(s[0].length),l.raw=s[0],p=l.align.length,c=0;c<p;c++)/^ *-+: *$/.test(l.align[c])?l.align[c]="right":/^ *:-+: *$/.test(l.align[c])?l.align[c]="center":/^ *:-+ *$/.test(l.align[c])?l.align[c]="left":l.align[c]=null;for(p=l.cells.length,c=0;c<p;c++)l.cells[c]=B(l.cells[c].replace(/^ *\| *| *\| *$/g,""),l.header.length);t.push(l)}else if(s=this.rules.block.lheading.exec(e))e=e.substring(s[0].length),m=s[0],t.push({type:"heading",raw:m,depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(x&&(s=this.rules.block.paragraph.exec(e)))e=e.substring(s[0].length),m=s[0],t.push({type:"paragraph",raw:m,text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.block.text.exec(e))e=e.substring(s[0].length),m=s[0],t.push({type:"text",raw:m,text:s[0]});else if(e){var y="Infinite loop on byte: "+e.charCodeAt(0);if(!this.options.silent)throw new Error(y);console.error(y)}return t}},{key:"inline",value:function(e){var t,n,r,s,i,a,l=e.length;for(t=0;t<l;t++)switch((a=e[t]).type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},s=a.header.length,n=0;n<s;n++)a.tokens.header[n]=[],this.inlineTokens(a.header[n],a.tokens.header[n]);for(s=a.cells.length,n=0;n<s;n++)for(i=a.cells[n],a.tokens.cells[n]=[],r=0;r<i.length;r++)a.tokens.cells[n][r]=[],this.inlineTokens(i[r],a.tokens.cells[n][r]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(s=a.items.length,n=0;n<s;n++)this.inline(a.items[n].tokens)}return e}},{key:"inlineTokens",value:function(e,t){for(var n,r,s,i,a,l,o,u,c,h,p="";e;)if(l=this.rules.inline.escape.exec(e))e=e.substring(l[0].length),h=l[0],p+=r=U(l[1]),t.push({type:"escape",raw:h,text:r});else if(l=this.rules.inline.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.inRawBlock=!1),e=e.substring(l[0].length),h=l[0],r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):U(l[0]):l[0],t.push({type:this.options.sanitize?"text":"html",raw:h,text:r}),p+=r;else if(l=this.rules.inline.link.exec(e))(u=F(l[2],"()"))>-1&&(c=(0===l[0].indexOf("!")?5:4)+l[1].length+u,l[2]=l[2].substring(0,u),l[0]=l[0].substring(0,c).trim(),l[3]=""),e=e.substring(l[0].length),h=l[0],this.inLink=!0,i=l[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i))?(i=n[1],a=n[3]):a="":a=l[3]?l[3].slice(1,-1):"",i=i.trim().replace(/^<([\s\S]*)>$/,"$1"),p+=this.outputLink(l,{href:this.escapes(i),title:this.escapes(a)},t,h),this.inLink=!1;else if((l=this.rules.inline.reflink.exec(e))||(l=this.rules.inline.nolink.exec(e))){if(e=e.substring(l[0].length),h=l[0],n=(l[2]||l[1]).replace(/\s+/g," "),!(n=this.tokens.links[n.toLowerCase()])||!n.href){p+=r=l[0].charAt(0),t.push({type:"text",raw:r,text:r}),e=l[0].substring(1)+e;continue}this.inLink=!0,p+=this.outputLink(l,n,t,h),this.inLink=!1}else if(l=this.rules.inline.strong.exec(e))e=e.substring(l[0].length),h=l[0],s=t?[]:null,r=this.inlineTokens(l[4]||l[3]||l[2]||l[1],s),t.push({type:"strong",raw:h,text:r,tokens:s}),p+=r;else if(l=this.rules.inline.em.exec(e))e=e.substring(l[0].length),h=l[0],s=t?[]:null,r=this.inlineTokens(l[6]||l[5]||l[4]||l[3]||l[2]||l[1],s),t.push({type:"em",raw:h,text:r,tokens:s}),p+=r;else if(l=this.rules.inline.code.exec(e))e=e.substring(l[0].length),h=l[0],r=U(l[2].trim(),!0),t.push({type:"codespan",raw:h,text:r}),p+=r;else if(l=this.rules.inline.br.exec(e))e=e.substring(l[0].length),h=l[0],t.push({type:"br",raw:h}),p+="\n";else if(l=this.rules.inline.del.exec(e))e=e.substring(l[0].length),h=l[0],s=t?[]:null,r=this.inlineTokens(l[1],s),t.push({type:"del",raw:h,text:r,tokens:s}),p+=r;else if(l=this.rules.inline.autolink.exec(e))e=e.substring(l[0].length),h=l[0],i="@"===l[2]?"mailto:"+(r=U(this.options.mangle?this.mangle(l[1]):l[1])):r=U(l[1]),t.push({type:"link",raw:h,text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}),p+=r;else if(this.inLink||!(l=this.rules.inline.url.exec(e))){if(l=this.rules.inline.text.exec(e))e=e.substring(l[0].length),h=l[0],r=this.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):U(l[0]):l[0]:U(this.options.smartypants?this.smartypants(l[0]):l[0]),t.push({type:"text",raw:h,text:r}),p+=r;else if(e){var g="Infinite loop on byte: "+e.charCodeAt(0);if(!this.options.silent)throw new Error(g);console.error(g)}}else{if("@"===l[2])i="mailto:"+(r=U(this.options.mangle?this.mangle(l[0]):l[0]));else{do{o=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0]}while(o!==l[0]);r=U(l[0]),i="www."===l[1]?"http://"+r:r}e=e.substring(l[0].length),h=l[0],t.push({type:"link",raw:h,text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}),p+=r}return p}},{key:"escapes",value:function(e){return e?e.replace(D._escapes,"$1"):e}},{key:"outputLink",value:function(e,t,n,r){var s=t.href,i=t.title?U(t.title):null,a=n?[]:null;if("!"!==e[0].charAt(0)){var l=this.inlineTokens(e[1],a);return n.push({type:"link",raw:r,text:l,href:s,title:i,tokens:a}),l}var o=U(e[1]);return n.push({type:"image",raw:r,text:o,href:s,title:i}),o}},{key:"smartypants",value:function(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}},{key:"mangle",value:function(e){var t,n,r="",s=e.length;for(t=0;t<s;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}}],[{key:"lex",value:function(t,n){return new e(n).lex(t)}},{key:"rules",get:function(){return{block:N,inline:D}}}]),e}(),X=l.defaults,G=R,J=A,K=function(){function e(t){s(this,e),this.options=t||X}return a(e,[{key:"code",value:function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+J(r,!0)+'">'+(n?e:J(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:J(e,!0))+"</code></pre>"}},{key:"blockquote",value:function(e){return"<blockquote>\n"+e+"</blockquote>\n"}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}},{key:"hr",value:function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}},{key:"list",value:function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}},{key:"listitem",value:function(e){return"<li>"+e+"</li>\n"}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+"</p>\n"}},{key:"table",value:function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}},{key:"tablerow",value:function(e){return"<tr>\n"+e+"</tr>\n"}},{key:"tablecell",value:function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,t,n){if(null===(e=G(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+J(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"}},{key:"image",value:function(e,t,n){if(null===(e=G(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),e}(),Q=function(){function e(){s(this,e)}return a(e,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"html",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,t,n){return""+n}},{key:"image",value:function(e,t,n){return""+n}},{key:"br",value:function(){return""}}]),e}(),W=function(){function e(){s(this,e),this.seen={}}return a(e,[{key:"slug",value:function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}]),e}(),Y=l.defaults,ee=$,te=function(){function e(t){s(this,e),this.options=t||Y,this.options.renderer=this.options.renderer||new K,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Q,this.slugger=new W}return a(e,[{key:"parse",value:function(e){var t,n,r,s,i,a,l,o,u,c,h,p,g,f,d,b,k,m,x=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],y="",v=e.length;for(t=0;t<v;t++)switch((c=e[t]).type){case"space":continue;case"hr":y+=this.renderer.hr();continue;case"heading":y+=this.renderer.heading(this.parseInline(c.tokens),c.depth,ee(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":y+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(o="",l="",s=c.header.length,n=0;n<s;n++)l+=this.renderer.tablecell(this.parseInline(c.tokens.header[n]),{header:!0,align:c.align[n]});for(o+=this.renderer.tablerow(l),u="",s=c.cells.length,n=0;n<s;n++){for(l="",i=(a=c.tokens.cells[n]).length,r=0;r<i;r++)l+=this.renderer.tablecell(this.parseInline(a[r]),{header:!1,align:c.align[r]});u+=this.renderer.tablerow(l)}y+=this.renderer.table(o,u);continue;case"blockquote":u=this.parse(c.tokens),y+=this.renderer.blockquote(u);continue;case"list":for(h=c.ordered,p=c.start,g=c.loose,s=c.items.length,u="",n=0;n<s;n++)b=(d=c.items[n]).checked,k=d.task,f="",d.task&&(m=this.renderer.checkbox(b),g?"text"===d.tokens[0].type?(d.tokens[0].text=m+" "+d.tokens[0].text,d.tokens[0].tokens&&d.tokens[0].tokens.length>0&&"text"===d.tokens[0].tokens[0].type&&(d.tokens[0].tokens[0].text=m+" "+d.tokens[0].tokens[0].text)):d.tokens.unshift({type:"text",text:m}):f+=m),f+=this.parse(d.tokens,g),u+=this.renderer.listitem(f,k,b);y+=this.renderer.list(u,h,p);continue;case"html":y+=this.renderer.html(c.text);continue;case"paragraph":y+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(u=c.tokens?this.parseInline(c.tokens):c.text;t+1<v&&"text"===e[t+1].type;)u+="\n"+((c=e[++t]).tokens?this.parseInline(c.tokens):c.text);y+=x?this.renderer.paragraph(u):u;continue;default:var w='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}return y}},{key:"parseInline",value:function(e,t){t=t||this.renderer;var n,r,s="",i=e.length;for(n=0;n<i;n++)switch((r=e[n]).type){case"escape":s+=t.text(r.text);break;case"html":s+=t.html(r.text);break;case"link":s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":s+=t.image(r.href,r.title,r.text);break;case"strong":s+=t.strong(this.parseInline(r.tokens,t));break;case"em":s+=t.em(this.parseInline(r.tokens,t));break;case"codespan":s+=t.codespan(r.text);break;case"br":s+=t.br();break;case"del":s+=t.del(this.parseInline(r.tokens,t));break;case"text":s+=t.text(r.text);break;default:var a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}return s}}],[{key:"parse",value:function(t,n){return new e(n).parse(t)}}]),e}(),ne=z,re=L,se=A,ie=l.getDefaults,ae=l.changeDefaults,le=l.defaults;function oe(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){var s=function(){n||(n=t,t=null),t=ne({},oe.defaults,t||{}),re(t);var r,s,i=t.highlight,a=0;try{r=V.lex(e,t)}catch(e){return{v:n(e)}}s=r.length;var l=function(e){if(e)return t.highlight=i,n(e);var s;try{s=te.parse(r,t)}catch(t){e=t}return t.highlight=i,e?n(e):n(null,s)};if(!i||i.length<3)return{v:l()};if(delete t.highlight,!s)return{v:l()};for(;a<r.length;a++)!function(e){"code"!==e.type?--s||l():i(e.text,e.lang,(function(t,n){return t?l(t):null==n||n===e.text?--s||l():(e.text=n,e.escaped=!0,void(--s||l()))}))}(r[a]);return{v:void 0}}();if("object"===r(s))return s.v}try{return t=ne({},oe.defaults,t||{}),re(t),te.parse(V.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||oe.defaults).silent)return"<p>An error occurred:</p><pre>"+se(e.message+"",!0)+"</pre>";throw e}}oe.options=oe.setOptions=function(e){return ne(oe.defaults,e),ae(oe.defaults),oe},oe.getDefaults=ie,oe.defaults=le,oe.Parser=te,oe.parser=te.parse,oe.Renderer=K,oe.TextRenderer=Q,oe.Lexer=V,oe.lexer=V.lex,oe.Slugger=W,oe.parse=oe;var ue=oe,ce={id:"markdown",init:function(e){"undefined"!=typeof hljs&&ue.setOptions({highlight:function(e,t){return hljs.highlightAuto(e,[t]).value}});var t=e.getConfig().markdown;return t&&ue.setOptions(t),be(e.getRevealElement()).then(me)},processSlides:be,convertSlides:me,slidify:de,marked:ue};function he(e){var t=(e.querySelector("[data-template]")||e.querySelector("script")||e).textContent,n=(t=t.replace(new RegExp("__SCRIPT_END__","g"),"<\/script>")).match(/^\n?(\s*)/)[1].length,r=t.match(/^\n?(\t*)/)[1].length;return r>0?t=t.replace(new RegExp("\\n?\\t{"+r+"}","g"),"\n"):n>1&&(t=t.replace(new RegExp("\\n? {"+n+"}","g"),"\n")),t}function pe(e){for(var t=e.attributes,n=[],r=0,s=t.length;r<s;r++){var i=t[r].name,a=t[r].value;/data\-(markdown|separator|vertical|notes)/gi.test(i)||(a?n.push(i+'="'+a+'"'):n.push(i))}return n.join(" ")}function ge(e){return(e=e||{}).separator=e.separator||"^\r?\n---\r?\n$",e.notesSeparator=e.notesSeparator||"notes?:",e.attributes=e.attributes||"",e}function fe(e,t){t=ge(t);var n=e.split(new RegExp(t.notesSeparator,"mgi"));return 2===n.length&&(e=n[0]+'<aside class="notes">'+ue(n[1].trim())+"</aside>"),'<script type="text/template">'+(e=e.replace(/<\/script>/g,"__SCRIPT_END__"))+"<\/script>"}function de(e,t){t=ge(t);for(var n,r,s,i=new RegExp(t.separator+(t.verticalSeparator?"|"+t.verticalSeparator:""),"mg"),a=new RegExp(t.separator),l=0,o=!0,u=[];n=i.exec(e);){!(r=a.test(n[0]))&&o&&u.push([]),s=e.substring(l,n.index),r&&o?u.push(s):u[u.length-1].push(s),l=i.lastIndex,o=r}(o?u:u[u.length-1]).push(e.substring(l));for(var c="",h=0,p=u.length;h<p;h++)u[h]instanceof Array?(c+="<section "+t.attributes+">",u[h].forEach((function(e){c+="<section data-markdown>"+fe(e,t)+"</section>"})),c+="</section>"):c+="<section "+t.attributes+" data-markdown>"+fe(u[h],t)+"</section>";return c}function be(e){return new Promise((function(t){var n=[];[].slice.call(e.querySelectorAll("[data-markdown]:not([data-markdown-parsed])")).forEach((function(e,t){e.getAttribute("data-markdown").length?n.push(function(e){return new Promise((function(t,n){var r=new XMLHttpRequest,s=e.getAttribute("data-markdown");datacharset=e.getAttribute("data-charset"),null!=datacharset&&""!=datacharset&&r.overrideMimeType("text/html; charset="+datacharset),r.onreadystatechange=function(e,r){4===r.readyState&&(r.status>=200&&r.status<300||0===r.status?t(r,s):n(r,s))}.bind(this,e,r),r.open("GET",s,!0);try{r.send()}catch(e){alert("Failed to get the Markdown file "+s+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+e),t(r,s)}}))}(e).then((function(t,n){e.outerHTML=de(t.responseText,{separator:e.getAttribute("data-separator"),verticalSeparator:e.getAttribute("data-separator-vertical"),notesSeparator:e.getAttribute("data-separator-notes"),attributes:pe(e)})}),(function(t,n){e.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+n+" failed with HTTP status "+t.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"}))):e.getAttribute("data-separator")||e.getAttribute("data-separator-vertical")||e.getAttribute("data-separator-notes")?e.outerHTML=de(he(e),{separator:e.getAttribute("data-separator"),verticalSeparator:e.getAttribute("data-separator-vertical"),notesSeparator:e.getAttribute("data-separator-notes"),attributes:pe(e)}):e.innerHTML=fe(he(e))})),Promise.all(n).then(t)}))}function ke(e,t,n){var r,s,i=new RegExp(n,"mg"),a=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg"),l=e.nodeValue;if(r=i.exec(l)){var o=r[1];for(l=l.substring(0,r.index)+l.substring(i.lastIndex),e.nodeValue=l;s=a.exec(o);)s[2]?t.setAttribute(s[1],s[2]):t.setAttribute(s[3],"");return!0}return!1}function me(){var e=document.querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(e).forEach((function(e){e.setAttribute("data-markdown-parsed",!0);var t=e.querySelector("aside.notes"),n=he(e);e.innerHTML=ue(n),function e(t,n,r,s,i){if(null!=n&&null!=n.childNodes&&n.childNodes.length>0)for(var a=n,l=0;l<n.childNodes.length;l++){var o=n.childNodes[l];if(l>0)for(var u=l-1;u>=0;){var c=n.childNodes[u];if("function"==typeof c.setAttribute&&"BR"!=c.tagName){a=c;break}u-=1}var h=t;"section"==o.nodeName&&(h=o,a=o),"function"!=typeof o.setAttribute&&o.nodeType!=Node.COMMENT_NODE||e(h,o,a,s,i)}n.nodeType==Node.COMMENT_NODE&&0==ke(n,r,s)&&ke(n,t,i)}(e,e,null,e.getAttribute("data-element-attributes")||e.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",e.getAttribute("data-attributes")||e.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),t&&e.appendChild(t)})),Promise.resolve()}Reveal.registerPlugin(ce)}});