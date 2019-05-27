# IMPORTCJSAMDUMD
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
 
```
