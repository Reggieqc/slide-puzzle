!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=11)}([function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(r).concat([o]).join("\n")}var s,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&o[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},function(t,e,i){"use strict";e.a=i.p+"2ec93083e4e923fc906a399a8ad488c1.woff"},function(t,e,i){"use strict";e.a=i.p+"35fde9d25311158df02e6a38f5e0ece0.woff"},function(t,e,i){"use strict";e.a=i.p+"031c20f0d79e79d6eba28eae3619dd39.woff"},function(t,e,i){"use strict";e.a=i.p+"1b70152b188d5969e2390c509d548def.woff"},function(t,e,i){"use strict";e.a=i.p+"305ba829b44a80b50a85db717f44a9e0.jpg"},function(t,e,i){"use strict";e.a=i.p+"fa33c28a1c55e0fb19a9914cc229a50e.svg"},function(t,e,i){var n=i(9),o=i(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(o,r);t.exports=o.locals||{}},function(t,e,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),s=[];function a(t){for(var e=-1,i=0;i<s.length;i++)if(s[i].identifier===t){e=i;break}return e}function l(t,e){for(var i={},n=[],o=0;o<t.length;o++){var r=t[o],l=e.base?r[0]+e.base:r[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var u=a(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:g(f,e),references:1}),n.push(d)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function h(t,e,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,m=0;function g(t,e){var i,n,o;if(e.singleton){var r=m++;i=p||(p=c(e)),n=f.bind(null,i,r,!1),o=f.bind(null,i,r,!0)}else i=c(e),n=h.bind(null,i,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var i=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var o=a(i[n]);s[o].references--}for(var r=l(t,e),c=0;c<i.length;c++){var d=a(i[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=r}}}},function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n),r=i(0),s=i.n(r),a=i(2),l=i(3),c=i(4),d=i(5),u=i(6),f=i(7),h=o()(!1),p=s()(a.a),m=s()(l.a),g=s()(c.a),b=s()(d.a),y=s()(u.a),v=s()(f.a);h.push([t.i,"@font-face{font-family:'klavika-bold';src:url("+p+") format(\"woff\")}@font-face{font-family:'klavika-light';src:url("+m+") format(\"woff\")}@font-face{font-family:'klavika-regular';src:url("+g+") format(\"woff\")}@font-face{font-family:'klavika-medium';src:url("+b+') format("woff")}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}html *{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{overflow-x:hidden;background:url('+y+') no-repeat;background-size:contain;background-color:#1a1a1a;font-family:"klavika-regular";position:relative;min-height:100vh;padding:0 2em;padding-top:12em;background-attachment:fixed;padding-bottom:7em}body h1{background:url('+v+') no-repeat;background-size:contain;background-position:center center;width:7%;height:150px;filter:invert(1);text-indent:-10000000px;position:fixed;top:0;right:2em;z-index:2}body .h2-style{position:relative}body .h2-style h2{font-family:"klavika-bold";color:#fff;text-transform:uppercase;margin-top:1em;font-size:5em;letter-spacing:1px}body .info-container{width:50%;margin-top:4em;padding-left:5.3em}body .info-container h3{font-family:"klavika-regular";font-style:italic;color:#fff;letter-spacing:1px;font-size:2em;margin-bottom:0.5em}body .info-container p{color:#fff;font-size:1.1em;letter-spacing:0.6px;line-height:1.9;font-family:"klavika-light"}#puzzle-img{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:11em}#puzzle-img .title{display:flex;align-items:center;margin-top:1em;margin-bottom:2em}#puzzle-img .title img{width:45px;padding-left:19px}#puzzle-img .title h3{font-family:"klavika-bold";color:#fff;text-transform:uppercase;font-size:4em;letter-spacing:1px}#puzzle-img .dimensions label{color:#666;font-family:"klavika-light";font-size:1.1em;margin-right:0.8em}#puzzle-img .dimensions input{background:transparent;height:42px;border-radius:20px;color:#666;font-size:1.2em;text-align:center;border:0;border-bottom:1px solid;width:55px;height:1em}.overlay-shadow{position:absolute;top:50%;width:100%;height:100%;left:50%;border:1px solid var(--border-color);transform:translate(-50%, -50%);background:linear-gradient(to bottom, rgba(255,255,255,0) -9%, #08080e 30%);z-index:-1}.guidelines-decoration:after{content:"|";text-indent:-10000px;width:100vw;height:0.2px;bottom:-26px;position:absolute;left:-2em;top:unset;background:#353535}.guidelines-decoration.left:after{left:5em;z-index:0;top:0;height:100%;width:0.2px}.guidelines-decoration.right:after{right:5em;z-index:0;top:0;height:100%;width:0.2px}button{background:#1a1a1a;color:#666;border:0;height:80px;text-transform:uppercase;min-width:150px;letter-spacing:2px;cursor:pointer;margin:2em 0}footer{position:fixed;bottom:0;left:0;width:100%;height:200px;background:#000;color:#fff;z-index:-1}\n',""]),e.default=h},function(t,e,i){"use strict";i.r(e);class n{constructor(t,e){if(this.isEmpty=!1,this.index=e,this.puzzle=t,this.width=this.puzzle.width/this.puzzle.dimensions,this.height=this.puzzle.height/this.puzzle.dimensions,this.el=this.createBlock(),t.el.appendChild(this.el),this.index===this.puzzle.dimensions*this.puzzle.dimensions-1)return this.isEmpty=!0,this.el.style.backgroundImage="url(src/assets/images/monk.png)",this.el.style.backgroundSize="contain",this.el.style.backgroundRepeat="no-repeat",void(this.el.style.backgroundPosition="center center");this.setBackgroundBlock()}createBlock(){const t=document.createElement("div");return t.style.backgroundSize=`${this.puzzle.width}px ${this.puzzle.height}px`,t.style.position="absolute",t.style.width=this.width+"px",t.style.height=this.height+"px",t.style.border="1px solid #666",t.style.cursor="not-allowed",t.onmouseover=()=>{const e=this.puzzle.findBlockPosition(this.index),i=this.puzzle.findEmptyBlockPosition(),{x:n,y:o}=this.getCoordinatesXY(e),{x:r,y:s}=this.getCoordinatesXY(i);n!==r&&o!==s||1!==Math.abs(n-r)&&1!==Math.abs(o-s)||(t.style.cursor="pointer")},t.onclick=()=>{const t=this.puzzle.findBlockPosition(this.index),e=this.puzzle.findEmptyBlockPosition(),{x:i,y:n}=this.getCoordinatesXY(t),{x:o,y:r}=this.getCoordinatesXY(e);i!==o&&n!==r||1!==Math.abs(i-o)&&1!==Math.abs(n-r)||this.puzzle.swapBlocks(t,e)},t}setPosition(t){const{left:e,top:i}=this.getPositionFromIndex(t);this.el.style.left=e+"px",this.el.style.top=i+"px"}setBackgroundBlock(){const{x:t,y:e}=this.getCoordinatesXY(this.index),i=this.width*t,n=this.height*e;this.el.style.backgroundImage=`url(${this.puzzle.imgSrc})`,this.el.style.backgroundPosition=`-${i}px -${n}px`}getPositionFromIndex(t){const{x:e,y:i}=this.getCoordinatesXY(t);return{left:this.width*e,top:this.height*i}}getCoordinatesXY(t){return{x:t%this.puzzle.dimensions,y:Math.floor(t/this.puzzle.dimensions)}}}i(8);const o=document.getElementById("input"),r=document.getElementById("button");let s=4;const a=new class{constructor(t,e,i,n){this.dimensions=t,this.parentEl=e,this.width=n,this.imgSrc=i,this.blocks=[],this.initialiceWidthandHeightParent(),this.configContainerHeightAndImageSize()}createContainer(){const t=document.createElement("div");return t.style.position="relative",t.style.margin="0 auto",t}changeDimensions(t){this.dimensions=t,console.log(this.el),this.parentEl.removeChild(this.el),this.initialiceWidthandHeightParent(),this.configContainerHeightAndImageSize()}configContainerHeightAndImageSize(){const t=new Image;t.onload=()=>{this.height=t.height*this.width/t.width,this.el.style.width=this.width+"px",this.el.style.height=this.height+"px",this.config()},t.src=this.imgSrc}initialiceWidthandHeightParent(){this.el=this.createContainer(),this.parentEl.appendChild(this.el)}config(){this.blocks=[];for(let t=0;t<this.dimensions*this.dimensions;t++)this.blocks.push(new n(this,t));this.shuffle()}shuffle(){for(let t=this.blocks.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));this.swapBlocks(t,e)}return this.blocks}swapBlocks(t,e){[this.blocks[t],this.blocks[e]]=[this.blocks[e],this.blocks[t]],this.blocks[t].setPosition(t),this.blocks[e].setPosition(e),this.isAssambled()&&alert("You win")}isAssambled(){for(let t=0;t<this.blocks.length;t++)if(t!==this.blocks[t].index)return!1;return!0}findBlockPosition(t){return this.blocks.findIndex(e=>e.index===t)}findEmptyBlockPosition(){return this.blocks.findIndex(t=>t.isEmpty)}}(s,document.querySelector("#puzzle-img"),"src/assets/images/monks.jpg",600);o.addEventListener("change",(function(t){s=Number(t.target.value),a.changeDimensions(s)})),r.addEventListener("click",(function(){a.shuffle()}))}]);