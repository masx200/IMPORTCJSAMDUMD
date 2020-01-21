# importcjsamdumd

此代码库仅供学习使用

## 动态异步加载" commonjs "和 "umd "和 "amd","cmd"和"ES"和'json' 模块 6 合一

非常简洁小巧的工具，基于 Promise

基于 fetch，加载的模块如果不同域，则必须支持跨域请求

使用 http 响应 headers 中的"content-type"属性来判断是 json 还是 JavaScript 模块

## 兼容的浏览器

兼容`ECMASCRIPT2017`以上

EDGE,CHROME,FIREFOX,SAFARI

## 获取已压缩模块

### ES 模块

从 cdn 获取

https://cdn.jsdelivr.net/gh/masx200/importcjsamdumd@latest/dist/index.esm.min.js

# 更新 支持 amd ，cmd 模块中新增支持 define 传入 async 函数了 ，支持返回 promise

# 更新 commonjs 模块中支持 顶层 await 了，自动把 commonjs 模块包装成 async 函数

# 更新！可以使用相对路径加载同类型的模块！

还包含了动态加载 `es`模块的`import()`的 `polyfill`

可以在 `commonjs` 模块中使用相对路径加载 `commonjs` 模块了！

可以在 `ES` 模块中使用相对路径加载 `ES` 模块了！

甚至可以在 `commonjs` 模块中加载 ES 模块了!

还顺便支持了加载 `json` 模块!

## 动态异步加载" commonjs "和 "umd "和 "amd"和"ES" 模块四合一,和`json`模块支持

包装" cjs "和 "amd "和 "umd" 和"ES" 模块为异步加载" promise" 方法,使用" fetch "方法来获取指定的模块包源代码
，
可以把模块放入模块仓库中，

并且解决了包之间的依赖关系，如果依赖包当中的 "require" 函数需要，则在模块仓库中引入需要的模块包

定义了模块包的" define "方法，"require "方法，"module.exports "对象和 "exports "对象

"importcjsamdumd" 的函数功能类似于["systemjs"](https://github.com/systemjs/systemjs)的 "system.import" 函数，

"importcjsamdumd "的定义的"define"函数基于["requirejs"](https://github.com/requirejs/requirejs)的 "define"函数

把未命名的模块以 (url)命名存入模块仓库中

# 相比 systemjs 和 requirejs 的优势:

1.跟 systemjs 的 import 函数的全局运行模块的代码,会修改全局变量,相比,

importcjsamdumd 中所有模块的代码全部放在函数闭包中执行,

2.systemjs 不支持在模块代码中的 require 函数来加载依赖包,也不支持识别 amd 模块中的 define 函数的定义模块的名称的功能,导致这些有依赖关系的模块都会到全局变量中寻找需要的模块,否则加载失败,

importcjsamdumd 支持在模块内部使用 require 函数和 define 函数定义依赖关系,并在模块仓库中查找需要的模块

比如说 jquery 和 jquery-ui 都是 amd 模块定义方式,jquery-ui 依赖于 jquery

比如说 bootstrap 是 umd 模块定义方式,bootstrap 依赖于 jquery 和 popper.js

3.requriejs 不支持 cjs 和 umd 模块的定义方式,使用比较麻烦,

# 安装模块

```bash
npm install --save https://github.com/masx200/importcjsamdumd.git
```

或者

```shell
yarn add https://github.com/masx200/importcjsamdumd.git

```

导入模块

```javascript
import {
  importcjsamdumd,
  packagealias,
  PACKAGESTORE,
  REQUIREPACKAGE
} from "@masx200/importcjsamdumd";
```

# importcjsamdumd

# API

主函数,importcjsamdumd,返回一个 promise 对象

PACKAGESTORE,是所有加载过的模块的存储仓库对象,模块的 id 为 URL 地址

REQUIREPACKAGE,返回模块仓库中的模块,参数 name 是字符串

packagealias 是保存模块别名的对象，存放 key 是别名，value 是 URL

```ts
declare function importcjsamdumd(url: string[]): Promise<MODULE[]>;
declare function importcjsamdumd(
  url: string,
  packagename?: string
): Promise<MODULE>;
declare const PACKAGESTORE: Record<string, Record<string | symbol, any>>;

declare function REQUIREPACKAGE(
  packagename: string
): Record<string | symbol, any>;
declare const packagealias: Record<string, string>;
type Module = Record<any, any>;
```

## 动态异步加载 cjs,amd,umd 模块用法:

使用前设置模块别名

```js
Object.assign(packagealias, {
  jquery: "https://cdn.staticfile.org/jquery/3.4.1/jquery.js",
  bootstrap:
    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js"
});
```

# 更新:乱序加载有依赖关系的模块包

# 默认在模块加载时开启了严格模式!

`"use strict"`

# 函数参数第一项可以是字符串网址，或者数组

如果第一个参数是网址，则第二个参数名称可以省略，默认以网址作为名称

```javascript
importcjsamdumd("网址1", "名称1");
```

函数返回值为 promise 对象

```js
importcjsamdumd("https://masx200.github.io/importcjsamdumd/package.json").then(
  console.log
);
```

主函数,importcjsamdumd,返回一个 promise 对象,参数 url 和 name 都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为 name，promise 之后的.then 函数的回调函数的参数是 module， 模块的默认输出

```javascript
importcjsamdumd(url, name);

importcjsamdumd(url).then(m => console.log(m));
```

### 新版用法:

全面升级支持

1.可以在一句 importcjsamdumd 语句中,传入多个模块的 url 的 name 了,返回一个数组,相当于 promise.all 的语法糖,

2.可以尝试乱序加载有依赖关系的模块包了,加载之前,先把模块的 url 和 name 信息存入模块配置列表,如果依赖的包还没有加载完成,则多次尝试加载,最终可以加载完成

甚至是这么复杂的依赖关系,乱序加载!

### 加载多个未命名的模块用法:

传参 一个或多个`Array`参数,返回`promise`内含一个 `Array`

```javascript
importcjsamdumd([
  "https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js",
  "https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js",

  "https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js",
  "https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js",
  "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"
])
  .then(console.log)
  .catch(console.warn);
```

## 旧版用法:加载有依赖关系的模块包的方法

```javascript
(async () => {
  const react = await importcjsamdumd(
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
    "react"
  );
  const [reactdom, reactrouterdom] = await Promise.all([
    importcjsamdumd(
      "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
      "react-dom"
    ),
    importcjsamdumd(
      "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
      "react-router-dom"
    )
  ]);

  var reactmodulearray = [react, reactdom, reactrouterdom];
  myonloadfunc(reactmodulearray);
})();
function myonloadfunc(reactmodulearray) {
  console.log(reactmodulearray);
  const React = reactmodulearray[0].default;
  const ReactDOM = reactmodulearray[1].default;
  const ReactRouterDOM = reactmodulearray[2].default;
}
```

```javascript
(async () => {
  const [jquery, popper] = await Promise.all([
    importcjsamdumd("https://cdn.bootcss.com/jquery/3.4.1/jquery.js", "jquery"),
    importcjsamdumd(
      "https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js",
      "popper.js"
    )
  ]);
  const bootstrap = await importcjsamdumd(
    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.js",
    "bootstrap"
  );
  console.log(jquery, popper, bootstrap);
})();
```

### 如果要动态异步加载 ES 模块,加载 es6 模块的方法:

```javascript
importcjsamdumd(url).then(console.log);
```

基于 ["es-module-shims"](https://github.com/guybedford/es-module-shims)

先当成 `umd` 模块运行,监测到报错之后,当成 `es` 模块运行

## 示例

```javascript
importcjsamdumd("https://cdn.staticfile.org/jquery/3.4.1/jquery.js").then(m => {
  console.log(m.default);
});

Promise.all([
  importcjsamdumd("https://cdn.bootcss.com/jquery/3.4.1/jquery.js"),
  importcjsamdumd(
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js"
  ),
  importcjsamdumd("https://cdn.staticfile.org/vue/2.6.10/vue.min.js")
]).then(console.log);

importcjsamdumd(
  "https://cdn.bootcss.com/Chart.js/2.8.0-rc.1/Chart.bundle.js"
).then(console.log);

importcjsamdumd(
  "https://cdn.bootcss.com/underscore.js/1.9.1/underscore-min.js",
  "underscore"
)
  .then(console.log)
  .catch(console.error);

importcjsamdumd("https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
  .then(console.log)
  .catch(console.error);

Promise.all([
  importcjsamdumd("https://cdn.bootcss.com/jquery/3.4.1/jquery.js", "jquery"),
  importcjsamdumd(
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
    "react"
  ),
  importcjsamdumd("https://cdn.staticfile.org/vue/2.6.10/vue.min.js", "vue")
]).then(console.log);

//加载es6模块的方法

importcjsamdumd(
  "https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js"
).then(console.log);
```

# commonjs 提前加载依赖

commonjs 模块依赖收集,基于 seajs

https://github.com/seajs/seajs/blob/master/src/util-deps.js

# 模块规范示例

## commonjs

http://wiki.commonjs.org/wiki/Modules/1.1

```js
var a = require("./a.js");
console.log(a);
module.exports = { a: 1, b: function() {} };
```

```js
exports.c = function() {
  return "commonjs";
};
var add = require("math").add;
exports.increment = function(val) {
  return add(val, 1);
};
```

## amd Asynchronous Module Definition

https://requirejs.org/docs/api.html

```js
define("foo/title", ["my/cart", "my/inventory"], function(cart, inventory) {
  console.log(cart, inventory);
  return { a: "amd", foo: "bar", doSomething: function() {} };
});
```

```js
define(["./cart", "./inventory"], function(cart, inventory) {
  return {
    color: "blue",
    size: "large",
    addToCart: function() {
      inventory.decrement(this);
      cart.add(this);
    }
  };
});
```

```js
define(function(require, exports, module) {
  var a = require("a"),
    b = require("b");

  return function() {};
});
```

```js
define(function(require, exports, module) {
  var a = require("a");

  exports.foo = function() {
    return a.bar();
  };
});
```

```js
define({
  color: "black",
  size: "unisize"
});
```

## cmd Common Module Definition

https://github.com/seajs/seajs/issues/242

```js
define(function(require, exports, module) {
  var a = require("./a");

  a.doSomething();
  exports.foo = "bar";

  exports.Something = function() {};
});
```

```js
define(function(require, exports, module) {
  var a = require("./a");

  a.doSomething();

  return { c: "cmd", foo1: "bar", doSomething: function() {} };
});
```

```js
define("hello", ["jquery"], function(require, exports, module) {
  var jquery = require("jquery");

  module.exports = {
    foo: "bar",
    doSomething: function() {}
  };
});
```

```js
define({
  foo: "bar",
  doSomething: function() {}
});
```

## es module ES2015 Module

```js
import foo, { a, b } from "./foo.js";

console.log(foo, a, b);

function dosomething() {}

let bar = "es";
export { dosomething, bar };
export default function() {}
```

```js
export { fn1, fn2 };

function fn1() {
  console.log("fn1");
}
function fn2() {
  console.log("fn2");
}
```

```js
import { fn1, fn2 } from "./myModule.js";
fn1();
fn2();
```

## umd Universal Module Definition

```js
((root, factory) => {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object" && typeof module === "object") {
    var $ = requie("jquery");

    module.exports = factory($);
  } else {
    root.testModule = factory(root.jQuery);
  }
})(this, $ => {
  console.log($);
  return { dosomething() {} };
});
```

# 推荐几个优秀的前端开源项目库 CDN 加速服务加速网站

https://www.jsdelivr.com/

http://staticfile.org/

https://www.bootcdn.cn/

https://cdnjs.com/

https://unpkg.com/
