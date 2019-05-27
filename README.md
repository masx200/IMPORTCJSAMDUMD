# IMPORTCJSAMDUMD

https://masx200.github.io/IMPORTCJSAMDUMD/dist/IMPORTCJSAMDUMD.js

动态异步加载commonjs和umd和amd模块  ,包装cjs和amd和umd模块为异步加载promise方法

如果要动态异步加载es6模块,加载es6模块的方法:
```javascript

  import("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js").then(console.log)
```
动态异步加载cjs,amd,umd模块用法:
```javascript
  IMPORTCJSAMDUMD('https://cdn.staticfile.org/jquery/3.4.1/jquery.js').then((m)=>{console.log(m.default.fn.jquery)})
 
  var jquery=IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.jquery
 
   Promise.all([IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js")]).then(console.log)
 
  IMPORTCJSAMDUMD("https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js").then(console.log)
 
 
 
  IMPORTCJSAMDUMD("https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js","underscore").then(console.log).catch(console.error)
 
 
  IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js",).then(console.log).catch(console.error)
 
 var jquery= IMPORTCJSAMDUMD.REQUIREPACKAGE("jquery")
 
 
  var underscore=IMPORTCJSAMDUMD.REQUIREPACKAGE("underscore")
 
  Promise.all([IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js","jquery"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js","react"),IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js","vue")]).then(console.log)
 
 
 //检测到amd模块 (3) ["jquery", Array(0), ƒ]0: "jquery"1: []2: ƒ ()length: 3__proto__: Array(0)
// 检测到cjs模块 URL {href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js", origin: "https://cdn.bootcss.com", protocol: "https:", username: "", password: "", …}hash: ""host: "cdn.bootcss.com"hostname: "cdn.bootcss.com"href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js"origin: "https://cdn.bootcss.com"password: ""pathname: "/jquery/3.4.1/jquery.js"port: ""protocol: "https:"search: ""searchParams: URLSearchParams {}username: ""__proto__: URL
// GLOBALPACKAGESTORE [jquery: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ, …}vue: ƒ wn(e)length: 0__proto__: Array(0)
// 检测到cjs模块 URL {href: "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "", …}
// GLOBALPACKAGESTORE [jquery: ƒ, react: {…}]
// 检测到cjs模块 URL {href: "https://cdn.staticfile.org/vue/2.6.10/vue.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "", …}
// GLOBALPACKAGESTORE [jquery: ƒ, react: {…}, vue: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ, …}vue: ƒ wn(e)length: 0__proto__: Array(0)
//(3) [{…}, {…}, {…}]0: {name: "jquery", default: ƒ, url: URL}1: {name: "react", default: {…}, url: URL}2: {name: "vue", default: ƒ, url: URL}length: 3__proto__: Array(0)
 
 
```
