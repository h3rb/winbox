/**
 * WinBox.js v0.0.7 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function(){'use strict';var f,h=document.createElement("style");h.innerHTML="@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.wb-header,.wb-title{width:100%;height:35px;vertical-align:middle}.winbox{position:fixed;left:0;top:0;background:#0050ff;overflow:hidden;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:strict;z-index:10}.wb-body,.wb-header{position:absolute;left:0;right:0}.wb-header{display:table;table-layout:fixed;top:0;color:#fff}.wb-body{top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:scroll-position;background:#fff;margin-top:0!important;box-sizing:border-box}.wb-title{display:table-cell;font-size:14px;text-align:left;padding-left:10px;cursor:move}.wb-n,.wb-nw,.wb-s{height:5px;left:0}.wb-title span{display:block;width:calc(100% - 120px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.winbox.min .wb-title span{width:calc(100% - 65px)}.wb-e,.wb-nw,.wb-w{position:absolute;width:5px;top:0}.wb-n{position:absolute;top:0;right:0;cursor:n-resize}.wb-e,.wb-s{right:0;bottom:0;cursor:w-resize}.wb-s{position:absolute;cursor:n-resize}.wb-w{left:0;bottom:0;cursor:w-resize}.wb-nw{cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize;width:5px;height:5px;position:absolute}.wb-ne{top:0;right:0}.wb-sw{bottom:0;left:0}.wb-icon,.wb-se{position:absolute;bottom:0;right:0}.wb-se{width:5px;height:5px;cursor:nw-resize}.wb-icon{top:0;padding-right:2px}.wb-icon span{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer}.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}span.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-position:center bottom 5px;background-size:14px 14px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:18px 18px}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px 15px}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:17px 17px}.winbox.max .wb-title,.winbox.max>div,.winbox.min .wb-title,.winbox.min>div,.winbox.modal .wb-title,.winbox.modal>div{cursor:default}.winbox iframe{position:absolute;width:100%;height:100%;border:0}.winbox.modal:after,.winbox.modal:before{content:'';position:fixed}.winbox.modal{overflow:visible;contain:layout size style}.winbox.modal:before{top:0;left:0;right:0;bottom:0;background:inherit}.winbox.modal:after{top:-50%;left:-50%;right:-50%;bottom:-50%;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}";
var n=document.getElementsByTagName("head")[0];n.firstChild?n.insertBefore(h,n.firstChild):n.appendChild(h);var p=document.createElement("div");p.className="winbox";p.innerHTML="<div class=wb-header><div class=wb-title><span> </span></div><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function r(a,b,c){a.addEventListener(b,c)}function t(a,b,c){a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)}function u(a){a.preventDefault();a.stopImmediatePropagation()};var y=[],z=0,B=0,C,I,J,K;
function L(a,b){if(!(this instanceof L))return new L(a);if(!z){var c=document.body;c[J="requestFullscreen"]||c[J="msRequestFullscreen"]||c[J="webkitRequestFullscreen"]||c[J="mozRequestFullscreen"]||(J="");K=J&&J.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit")}this.g=p.cloneNode(!0);this.body=this.g.getElementsByClassName("wb-body")[0];var g,v;if(a){if(b){var e=a;a=b}if("string"===typeof a)e=a;else{if(v=a.modal){var k=g="center";this.g.classList.add("modal")}var D=a.id;
var d=a.root;e=e||a.title;var E=a.mount;var w=a.html;var x=a.url;var l=a.width;var q=a.height;k=a.x||k;g=a.y||g;var F=a.max;var m=a.top;var A=a.left;var G=a.bottom;var H=a.right;var S=a.onclose;var T=a.onfocus;var U=a.onblur;var V=a.onmove;var W=a.onresize;b=a.background;c=a.border;a=a["class"];b&&this.setBackground(b);c&&t(this.body,"margin",c+"px");a&&this.g.classList.add(a)}}M(this).setTitle(e||"");e=this.i;a=this.h;m=m?N(m,a):0;G=G?N(G,a):0;A=A?N(A,e):0;H=H?N(H,e):0;e-=A+H;a-=m+G;l=l?N(l,e):e/
2;q=q?N(q,a):a/2;k=k?N(k,e,l):A;g=g?N(g,a,q):m;this.g.id=this.id=D||"winbox-"+ ++B;this.x=k;this.y=g;this.width=l;this.height=q;this.top=m;this.right=H;this.bottom=G;this.left=A;this.max=this.min=!1;this.m=S;this.o=T;this.l=U;this.u=V;this.s=W;F?this.maximize().focus():this.move().resize().focus();E?this.mount(E):w?this.body.innerHTML=w:x&&this.setUrl(x);O(this,v);(d||document.body).appendChild(this.g)}L["new"]=function(a){return new L(a)};
function N(a,b,c){"center"===a?a=(b-c)/2:"string"===typeof a&&(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c:c);return a}
function O(a,b){b||(P(a,"title"),P(a,"n"),P(a,"s"),P(a,"w"),P(a,"e"),P(a,"nw"),P(a,"ne"),P(a,"se"),P(a,"sw"),r(a.g.getElementsByClassName("wb-min")[0],"click",function(c){M(a).minimize();u(c)}),r(a.g.getElementsByClassName("wb-max")[0],"click",function(c){M(a).maximize();u(c)}),J?r(a.g.getElementsByClassName("wb-full")[0],"click",function(c){a.fullscreen();u(c)}):t(a.g.getElementsByClassName("wb-full")[0],"display","none"),r(a.g,"mousedown",function(){a.focus()}));r(a.g.getElementsByClassName("wb-close")[0],
"click",function(c){a.close();a=null;u(c)})}function Q(a){y.splice(y.indexOf(a),1);R(a);a.g.classList.remove("min");a.min=!1;a.g.title=""}function R(a){for(var b=Math.min(a.i/y.length,250),c=0;c<y.length;c++)y[c].resize(b,35,!0).move(a.left+c*b,a.h-a.bottom-35,!0)}
function P(a,b){function c(d){u(d);a.min?(Q(a),a.resize().move()):(d.touches&&(d=d.touches[0]||d),a.min||a.max||(t(a.g,"transition","none"),window.addEventListener("mousemove",g),window.addEventListener("mouseup",v),window.addEventListener("touchmove",g),window.addEventListener("touchend",v),k=d.pageX,D=d.pageY,M(a).focus()))}function g(d){d.touches?d=d.touches[0]||d:u(d);var E=d.pageX;d=d.pageY;var w=E-k,x=d-D,l;if("title"===b){a.x+=w;a.y+=x;var q=l=1}else{if("e"===b||"se"===b||"ne"===b){a.width+=
w;var F=1}else if("w"===b||"sw"===b||"nw"===b)a.x+=w,a.width-=w,q=F=1;if("s"===b||"se"===b||"sw"===b){a.height+=x;var m=1}else if("n"===b||"ne"===b||"nw"===b)a.y+=x,a.height-=x,l=m=1}if(F||m)F&&(a.width=Math.max(Math.min(a.width,a.i-a.x-a.right),250)),m&&(a.height=Math.max(Math.min(a.height,a.h-a.y-a.bottom-1),35)),a.resize();if(q||l)q&&(a.x=Math.max(Math.min(a.x,a.i-a.width-a.right),a.left)),l&&(a.y=Math.max(Math.min(a.y,a.h-a.height-a.bottom-1),a.top)),a.move();k=E;D=d}function v(d){t(a.g,"transition",
"");window.removeEventListener("mousemove",g);window.removeEventListener("mouseup",v);window.removeEventListener("touchmove",g);window.removeEventListener("touchend",v);u(d)}var e=a.g.getElementsByClassName("wb-"+b)[0],k,D;e.addEventListener("mousedown",c);e.addEventListener("touchstart",c)}function M(a){var b=document.documentElement;a.i=b.clientWidth;a.h=b.clientHeight;return a}f=L.prototype;f.mount=function(a){a.j||(a.j=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};
f.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.j;c&&c.appendChild(b);b.j=a}return this};f.setTitle=function(a){var b=this.g.getElementsByClassName("wb-title")[0].firstChild;a=this.title=a;b.v!==a&&(b.firstChild.nodeValue=a,b.v=a);return this};f.setBackground=function(a){t(this.g,"background",a);return this};f.setUrl=function(a){this.body.innerHTML='<iframe src="'+a+'"></iframe>';return this};
f.focus=function(){I!==this&&(t(this.g,"z-index",++z),I&&I.l&&I.l(),I=this,this.o&&this.o());return this};f.minimize=function(a){C&&X();!a&&this.min?(Q(this),this.resize().move()):!1===a||this.min||(y.push(this),this.g.classList.add("min"),R(this),this.g.title=this.title,this.min=!0);this.max&&(this.g.classList.remove("max"),this.max=!1);return this};
f.maximize=function(a){if("undefined"===typeof a||a!==this.max)this.min&&Q(this),(this.max=!this.max)?(this.g.classList.add("max"),this.resize(this.i-this.left-this.right,this.h-this.top-this.bottom-1,!0).move(this.left,this.top,!0)):(this.resize().move(),this.g.classList.remove("max"));return this};f.fullscreen=function(a){if("undefined"===typeof a||a!==C)this.min&&(this.resize().move(),Q(this)),C&&X()||(this.body[J](),C=!0);return this};
function X(){C=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[K](),!0}f.close=function(){this.min&&Q(this);this.m&&this.m();this.unmount();this.g.parentNode.removeChild(this.g);I===this&&(I=null)};
f.move=function(a,b,c){"undefined"===typeof a?(a=this.x,b=this.y):c||(this.x=a?a=N(a,this.i-this.left-this.right,this.width):0,this.y=b?b=N(b,this.h-this.top-this.bottom,this.height):0);t(this.g,"transform","translate("+a+"px,"+b+"px)");this.u&&this.u(a,b);return this};
f.resize=function(a,b,c){"undefined"===typeof a?(a=this.width,b=this.height):c||(this.width=a?a=N(a,this.i-this.left-this.right):0,this.height=b?b=N(b,this.h-this.top-this.bottom):0);t(this.g,"width",a+"px");t(this.g,"height",b+"px");this.s&&this.s(a,b);return this};window.WinBox=L;}).call(this);
