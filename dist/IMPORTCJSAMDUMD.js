parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Xu0A":[function(require,module,exports) {
var global = arguments[3];
var define;
var e,o=arguments[3];function r(e){return i(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function t(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var o=0,r=new Array(e.length);o<e.length;o++)r[o]=e[o];return r}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){"use strict";function o(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[o];if(r)return console.log("在模块仓库中找到了",o),r.default;throw new Error("Cannot find module in packagestore, 模块仓库中没有找到,  "+o)}function n(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(console.log("输入的参数为",Array.apply(void 0,arguments)),"object"!==l(n)&&"object"!==l(t)){if("string"==typeof n||"string"==typeof t){var i=function e(n,i,l){var u;e.amd=!0,e.globalDefQueue=[];var a,c,f=Object.prototype.toString;"string"!=typeof n&&(l=i,i=n,n=null),c=i,"[object Array]"!==f.call(c)&&(l=i,i=null),!i&&function(e){return"[object Function]"===f.call(e)}(l)&&(i=[],l.length&&(l.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,o){i.push(o)}),i=(1===l.length?["require"]:["require","exports","module"]).concat(i))),a?(a.defQueue.push([n,i,l]),a.defQueueMap[n]=!0):e.globalDefQueue.push([n,i,l]),console.log("检测到amd模块",e.globalDefQueue[0]),"string"==typeof e.globalDefQueue[0][0]&&void 0===t&&(t=e.globalDefQueue[0][0]);var d=e.globalDefQueue[0][1].map(function(e){return o(e)});e.exports=(u=e.globalDefQueue[0])[2].apply(u,r(d))};if(void 0===n||""===n||""===t)throw new Error("输入的类型错误,输入的字符串不能为空,url不能为undefined");return void 0===t&&(t=new URL(n).href),n=(n=new URL(n)).href,i.amd=!0,void 0!==e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t]&&void 0!==e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t].default&&e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t].url===n?(console.log("模块仓库中已经存在模块,不会重新加载",t),new Promise(function(o){o(e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t])})):new Promise(function(r,u){try{!function(){var a;try{try{a=fetch(n).then(function(e){if(!e.ok)throw new Error("fetch failed "+n);return e.text()})}catch(c){return console.error(c),void u(c)}try{a.then(function(a){i.exports={};var f=[{},{},{}];try{f=function(e,o,r,t,i){return Function("require","define","module","exports","/* ".concat(n," */;\n                          \n\n                          ").concat(i,";\n                          \n\n                          /* ").concat(n," */;\n                          \n                          return [exports, module.exports, define.exports]; "))(e,o,r,t)}(o,i,{exports:{}},{},a)}catch(c){return console.error(c),void u(c)}var d={name:void 0,default:void 0,url:void 0};if(void 0===f)f=[{},{},{}];if(void 0===i.exports&&(i.exports={}),console.log("模块的输出为",[f[0],f[1],f[2]]),"object"!==l(f[0])||Object.keys(f[0]).length||"{}"!==JSON.stringify(f[0]))console.log("检测到umd模块",n,t),d.default=f[0];else if("object"!==l(f[1])||Object.keys(f[1]).length||"{}"!==JSON.stringify(f[1]))console.log("检测到cjs模块",n,t),d.default=f[1];else{if("object"===l(f[2])&&!Object.keys(f[2]).length&&"{}"===JSON.stringify(f[2]))return console.warn("加载的模块没有输出",n,t),void r(d);console.log("检测到amd模块",n,t),d.default=f[2]}if("undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),void 0!==d.default&&(void 0!==t?(d.name=t,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t]=d):(t=n,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t]=d)),d.url=n,void 0===d.default)return console.warn("加载的模块没有输出",n),void r(d);void 0!==d.name&&console.log("IMPORTCJSAMDUMD.GLOBALPACKAGESTORE",e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE),r(d)})}catch(c){return console.error(c),void u(c)}}catch(c){return console.error(c),void u(c)}}()}catch(a){return console.error(a),void u(a)}})}throw new Error("输入的类型错误,输入的类型必须是字符串或者数组")}var u=0,a=!0,c=!1,f=void 0;try{for(var d,A=Array.apply(void 0,arguments)[Symbol.iterator]();!(a=(d=A.next()).done);a=!0){var p=d.value,y=p[1],s=p[0];void 0!==e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[y]&&void 0!==e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[y].default&&e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[y].url===s&&(console.log("模块仓库中已经存在模块,不会重新加载",s,y),u++)}}catch(M){c=!0,f=M}finally{try{a||null==A.return||A.return()}finally{if(c)throw f}}if(u>=Array.apply(void 0,arguments).length)return console.log("输入的所有模块都已经加载过了,不会再次加载"),Promise.all(Array.apply(void 0,arguments).map(function(o){var r=o[1];return new Promise(function(o){o(e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[r])})}));Array.apply(void 0,arguments).forEach(function(e){var o=e[0],r=e[1];if(void 0===o||""===o||""===r)throw new Error("输入的类型错误,输入的字符串不能为空,url不能为undefined");void 0===r&&(r=new URL(o).href)});try{Promise.all(Array.apply(void 0,arguments).map(function(e){return IMPORTCJSAMDUMD(e[0],e[1])}))}catch(O){console.error(O)}finally{return Promise.all(Array.apply(void 0,arguments).map(function(e){return IMPORTCJSAMDUMD(e[0],e[1])}))}}"object"==("undefined"==typeof exports?"undefined":l(exports))&&"undefined"!=typeof module&&(module.exports=n),e.IMPORTCJSAMDUMD=e.IMPORTCJSAMDUMD||n,e.IMPORTCJSAMDUMD.REQUIREPACKAGE=e.IMPORTCJSAMDUMD.REQUIREPACKAGE||o,e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE=e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE||{}}("undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||this);
},{}]},{},["Xu0A"], null)
//# sourceMappingURL=/IMPORTCJSAMDUMD.js.map