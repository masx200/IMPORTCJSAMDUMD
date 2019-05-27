# IMPORTCJSAMDUMD



[源代码 ](https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/src/IMPORTCJSAMDUMD.js)

[发布版本](https://masx200.github.io/IMPORTCJSAMDUMD/dist/IMPORTCJSAMDUMD.js)

动态异步加载commonjs和umd和amd模块  ,包装cjs和amd和umd模块为异步加载promise方法
，
可以把模块放入模块仓库中，

并且解决了包之间的依赖关系，如果依赖包当中的require函数需要，则在模块仓库中引入需要的模块包


如果要动态异步加载es6模块,加载es6模块的方法:
```javascript

  import("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js").then(console.log)
```
## 动态异步加载cjs,amd,umd模块用法:

主函数,IMPORTCJSAMDUMD,返回一个promise对象,参数url和name都是字符串，把通过url加载的依赖包放入模块仓库中，命名为name，promise之后的.then函数的回调函数的参数是module，module.default的模块的默认输出
```javascript
IMPORTCJSAMDUMD(url,name)


IMPORTCJSAMDUMD(url).then(m=>console.log(m.default))
```
次对象,IMPORTCJSAMDUMD.GLOBALPACKAGESTORE,是所有加载过的模块的存储仓库对象
```javascript
IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name]
```
次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数name是字符串
```javascript
IMPORTCJSAMDUMD.REQUIREPACKAGE(name)
```
IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name]和IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的

## 示例
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
