!function(e){function r(r){for(var n,a,f=r[0],u=r[1],i=r[2],l=0,d=[];l<f.length;l++)a=f[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(p&&p(r);d.length;)d.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(n=!1)}n&&(c.splice(r--,1),e=f(f.s=t[0]))}return e}var n={},o={13:0},c=[];function a(e){return f.p+""+({3:"1762f3f0",4:"17896441",5:"45acc928",6:"4f804fbc",7:"7d9c92ed",8:"a532ccec",9:"b9310ccf",10:"e0454188",11:"f994fef5"}[e]||e)+"."+{1:"ff31f6a4",2:"2c5f2f18",3:"e9187345",4:"026a714a",5:"9cc5a6cf",6:"37cd582e",7:"e84f1aac",8:"68bd243a",9:"cd2f0799",10:"5c903ab3",11:"947a710e",14:"13bc0d0d"}[e]+".js"}function f(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var r=[],t=o[e];if(0!==t)if(t)r.push(t[2]);else{var n=new Promise((function(r,n){t=o[e]=[r,n]}));r.push(t[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,f.nc&&u.setAttribute("nonce",f.nc),u.src=a(e);var i=new Error;c=function(r){u.onerror=u.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",i.name="ChunkLoadError",i.type=n,i.request=c,t[1](i)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(r)},f.m=e,f.c=n,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,r){if(1&r&&(e=f(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)f.d(t,n,function(r){return e[r]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/TETRIS-FAQ/",f.gca=function(e){return a(e={17896441:"4","1762f3f0":"3","45acc928":"5","4f804fbc":"6","7d9c92ed":"7",a532ccec:"8",b9310ccf:"9",e0454188:"10",f994fef5:"11"}[e]||e)},f.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var p=i;t()}([]);