# IMPORTCJSAMDUMD

[源代码 ](https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/src/IMPORTCJSAMDUMD.js)

[发布版本](https://masx200.github.io/IMPORTCJSAMDUMD/dist/IMPORTCJSAMDUMD.js)

动态异步加载 commonjs 和 umd 和 amd 模块 ,包装 cjs 和 amd 和 umd 模块为异步加载 promise 方法,使用 fetch 方法来获取指定的模块包源代码
，
可以把模块放入模块仓库中，

并且解决了包之间的依赖关系，如果依赖包当中的 require 函数需要，则在模块仓库中引入需要的模块包

定义了模块包的 define 方法，require 方法，module.exports 对象和 exports 对象

## 加载有依赖关系的模块包的方法
```javascript
(async () => {
  const [jquery, popper] = await Promise.all([
    IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js", "jquery"),
    IMPORTCJSAMDUMD(
      "https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js",
      "popper.js"
    )
  ]);
  const bootstrap = await IMPORTCJSAMDUMD(
    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.js",
    "bootstrap"
  );
  console.log(jquery, popper, bootstrap);
})();
```

### 如果要动态异步加载 es6 模块,加载 es6 模块的方法:

```javascript
import(url).then(console.log);
```

## 动态异步加载 cjs,amd,umd 模块用法:

主函数,IMPORTCJSAMDUMD,返回一个 promise 对象,参数 url 和 name 都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为 name，promise 之后的.then 函数的回调函数的参数是 module，module.default 的模块的默认输出

```javascript
IMPORTCJSAMDUMD(url, name);

IMPORTCJSAMDUMD(url).then(m => console.log(m.default));
```

次对象,IMPORTCJSAMDUMD.GLOBALPACKAGESTORE,是所有加载过的模块的存储仓库对象

```javascript
IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name];
```

次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数 name 是字符串

```javascript
IMPORTCJSAMDUMD.REQUIREPACKAGE(name);
```

IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[name]和 IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的

## 示例

```javascript
IMPORTCJSAMDUMD("https://cdn.staticfile.org/jquery/3.4.1/jquery.js").then(m => {
  console.log(m.default.fn.jquery);
});

var jquery = IMPORTCJSAMDUMD.GLOBALPACKAGESTORE.jquery;

Promise.all([
  IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js"),
  IMPORTCJSAMDUMD(
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"
  ),
  IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js")
]).then(console.log);

IMPORTCJSAMDUMD(
  "https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js"
).then(console.log);

IMPORTCJSAMDUMD(
  "https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js",
  "underscore"
)
  .then(console.log)
  .catch(console.error);

IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
  .then(console.log)
  .catch(console.error);

var jquery = IMPORTCJSAMDUMD.REQUIREPACKAGE("jquery");

var underscore = IMPORTCJSAMDUMD.REQUIREPACKAGE("underscore");

Promise.all([
  IMPORTCJSAMDUMD("https://cdn.bootcss.com/jquery/3.4.1/jquery.js", "jquery"),
  IMPORTCJSAMDUMD(
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
    "react"
  ),
  IMPORTCJSAMDUMD("https://cdn.staticfile.org/vue/2.6.10/vue.min.js", "vue")
]).then(console.log);

//检测到amd模块 (3) ["jquery", Array(0), ƒ]0: "jquery"1: []2: ƒ ()length: 3__proto__: Array(0)
// 检测到cjs模块 URL {href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js", origin: "https://cdn.bootcss.com", protocol: "https:", username: "", password: "", …}hash: ""host: "cdn.bootcss.com"hostname: "cdn.bootcss.com"href: "https://cdn.bootcss.com/jquery/3.4.1/jquery.js"origin: "https://cdn.bootcss.com"password: ""pathname: "/jquery/3.4.1/jquery.js"port: ""protocol: "https:"search: ""searchParams: URLSearchParams {}username: ""__proto__: URL
// GLOBALPACKAGESTORE [jquery: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ, …}vue: ƒ wn(e)length: 0__proto__: Array(0)
// 检测到cjs模块 URL {href: "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "", …}
// GLOBALPACKAGESTORE [jquery: ƒ, react: {…}]
// 检测到cjs模块 URL {href: "https://cdn.staticfile.org/vue/2.6.10/vue.min.js", origin: "https://cdn.staticfile.org", protocol: "https:", username: "", password: "", …}
// GLOBALPACKAGESTORE [jquery: ƒ, react: {…}, vue: ƒ]jquery: ƒ ( selector, context )react: {Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ, …}vue: ƒ wn(e)length: 0__proto__: Array(0)
//(3) [{…}, {…}, {…}]0: {name: "jquery", default: ƒ, url: URL}1: {name: "react", default: {…}, url: URL}2: {name: "vue", default: ƒ, url: URL}length: 3__proto__: Array(0)

//加载es6模块的方法

import("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js").then(
  console.log
);
```
