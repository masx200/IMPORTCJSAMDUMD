module.exports=function(e,r){"use strict";var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return function(e){e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r=Object.prototype.hasOwnProperty,e.d=function(e,t,o){r.call(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})};var r}(o),o(140)}({140:function(e,r,t){"use strict";let o;t.r(r);try{o=Function("u","return import(u)")}catch(e){o=async function(e){return await new Promise((r,t)=>{e=new URL(e).href;const o=e=>{console.warn(e),t(e.error),document.head.removeChild(i),window.removeEventListener("error",o)};window.addEventListener("error",o);const n=function(e){return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}(`import*as m from'${e}';\nwindow[Symbol.for('${"import-"+e}')]=m`),i=document.createElement("script");i.type="module",i.src=n,document.head.appendChild(i),i.onload=()=>{r(window[Symbol.for("import-"+e)]),Reflect.deleteProperty(window,Symbol.for("import-"+e)),document.head.removeChild(i),window.removeEventListener("error",o)},i.onerror=e=>{console.warn(e),t(e),document.head.removeChild(i),window.removeEventListener("error",o)}})}}var n=o;const i="加载的模块没有输出";var a=(()=>{function e(e,r){"Module"===r[Symbol.toStringTag]&&r.default&&(r=r.default),Object.defineProperty(e,"default",{enumerable:!0,get:()=>r})}const r=Symbol.for("name"),t=Symbol.for("url"),o=Symbol.for("source"),a="PACKAGESTORE",c=async function(){return await s(...arguments).catch(e=>(console.warn(e),s(...arguments)))};function l(e){if(""===e)throw new TypeError("字符串不能为空");if("string"!=typeof e)throw new TypeError("参数必须为字符串");const r=c[a][e];if(r)return r.default;throw new Error("Cannot find module in packagestore, 模块仓库中没有找到, "+e)}function u(e){return Array.isArray(e)&&"object"==typeof e&&"[object Array]"===Object.prototype.toString.call(e)}function f(e,r,t){f.exports={},f.amd=!0;const o=[],n=Object.prototype.toString;var i;"string"!=typeof e&&(t=r,r=e,e=null),u(r)||(t=r,r=null),r||(i=t,"[object Function]"!==n.call(i))||(r=[]),o.push([e,r,t]);const a=o[0][1].map(e=>l(e));f.exports=o[0][2](...a)}async function s(s,d){async function p(e){return await Promise.all(Array.from(e).map(e=>c(e[0],e[1])))}if("object"==typeof(y=s)&&"[object Object]"===Object.prototype.toString.call(y)&&y.__proto__===Object.prototype){s=function(e){if("object"!=typeof e)throw new TypeError("传入的参数必须是个object!");return JSON.parse(JSON.stringify(e))}(s);const e=Object.keys(s).map(e=>{return[s[e],e]});let t=[];try{t=await p(e)}catch(r){console.warn(r),t=await p(e)}finally{t=await p(e)}let o={};return t.forEach(e=>{o[e[r]]=e}),o}if(u(s)&&"object"==typeof s||"object"==typeof d){Array(...arguments).forEach(e=>{const r=e[0];let t=e[1];if(void 0===r||""===r||""===t)throw new Error("输入的类型错误,输入的字符串不能为空,url不能为undefined");void 0===t&&(t=new URL(r).href)});let e=[];const r=Array(...arguments);try{e=await p(r)}catch(t){console.warn(t),e=await p(r)}finally{e=await p(r)}return e}if("string"==typeof s||"string"==typeof d){if(void 0===s||""===s||""===d)throw new Error("输入的类型错误,输入的字符串不能为空,url不能为undefined");return void 0===d&&(d=new URL(s).href),s=new URL(s).href,void 0!==c[a][d]&&void 0!==c[a][d].default&&c[a][d][t]===s?c[a][d]:void 0!==c[a][s]&&void 0!==c[a][s].default&&c[a][s][t]===s?(c[a][d]=c[a][s],c[a][d][r]=d,c[a][s]):await new Promise((u,p)=>{(async()=>{try{await(async()=>{let y;try{try{y=await fetch(s).then(e=>{if(!e.ok)throw new Error("fetch failed "+s);return e.text()})}catch(e){return console.error(e),void p(e)}try{await(async y=>{const w={exports:{[Symbol.toStringTag]:"Module"}},m={exports:{}};var b;f.exports={};const v={default:void 0};try{!function(e,r,t,o,n){const i=Function("require","define","module","exports",`"use strict";\n/* ${s} */;\n${n};\n/* ${s} */;\n`);b=i,i.call(t.exports,e,r,t,o.exports)}(l,f,m,w,y),function(r){void 0===r&&(r=[{},{},{}]);void 0===f.exports&&(f.exports={});function t(e){return"object"!=typeof e||Object.keys(e).length||"{}"!==JSON.stringify(e)}if(t(r[0])){const t=r[0];e(v,t)}else if(t(r[1])){const t=r[1];e(v,t)}else{if(!t(r[2]))return console.warn(i,s,d),void p(Error(i+" "+d+" "+s));{const t=r[2];e(v,t)}}}([w.exports?w.exports:{},m.exports?m.exports:{},f.exports?f.exports:{}])}catch(r){if(!(r instanceof SyntaxError))return console.warn(r),void p(r);{const r=s;b=r;try{const t=await n(r);e(v,t.default?t.default:t)}catch(e){return console.warn(e),void p(e)}}}if(Object.defineProperties(v,{[r]:{value:d,configurable:!0,writable:!0,enumerable:!1},[t]:{value:s,configurable:!0,writable:!0,enumerable:!1},[o]:{value:b,enumerable:!1}}),"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}),void 0!==v.default&&void 0!==d&&(c[a][d]=v),void 0===v.default)return console.warn(i,d,s),void p(Error(i+d+s));c[a][s]=c[a][d],Object.keys(v.default).filter(e=>"default"!==e).forEach(e=>{Object.defineProperty(v,e,{enumerable:!0,get:()=>v.default[e]})}),u(v)})(y)}catch(e){return console.error(e),void p(e)}}catch(e){return console.error(e),void p(e)}})()}catch(e){return console.error(e),void p(e)}})()})}throw new Error("输入的类型错误,输入的类型必须是字符串或者数组或对象");var y}return c.REQUIREPACKAGE=function(e){if(""===e)throw new TypeError("字符串不能为空");if("string"!=typeof e)throw new TypeError("参数必须为字符串");const r=c[a][e];if(r)return new Proxy(r,{set:()=>!1,deleteProperty:()=>!1});throw new Error("Cannot find module in packagestore, 模块仓库中没有找到, "+e)},c[a]=c[a]||{},f.exports={},f.amd=!0,c})();t.d(r,"default",function(){return c});var c=a}});