# IMPORTCJSAMDUMD

## 动态异步加载" commonjs "和 "umd "和 "amd"和"ES" 模块四合一

[查看源代码 ](https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/src/index.js)

<!-- [ES 模块](https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/dist/index.esm.js)

[cjs 模块](https://github.com/masx200/IMPORTCJSAMDUMD/blob/master/dist/index.cjs.js) -->

## 获取已压缩模块

### ES 模块

https://masx200.github.io/IMPORTCJSAMDUMD/dist/index.esm.min.js

<!-- ### cjs 模块

https://masx200.github.io/IMPORTCJSAMDUMD/dist/index.esm.min.js -->

# 更新！可以使用相对路径加载同类型的模块！

可以在 commonjs 模块中使用相对路径加载 commonjs 模块了！

可以在 ES 模块中使用相对路径加载 ES 模块了！

甚至可以在 commonjs 模块中加载 ES 模块了!

## 动态异步加载" commonjs "和 "umd "和 "amd"和"ES" 模块四合一

包装" cjs "和 "amd "和 "umd" 和"ES" 模块为异步加载" promise" 方法,使用" fetch "方法来获取指定的模块包源代码
，
可以把模块放入模块仓库中，

并且解决了包之间的依赖关系，如果依赖包当中的 "require" 函数需要，则在模块仓库中引入需要的模块包

定义了模块包的" define "方法，"require "方法，"module.exports "对象和 "exports "对象

"IMPORTCJSAMDUMD" 的函数功能类似于["systemjs"](https://github.com/systemjs/systemjs)的 "system.import" 函数，

"IMPORTCJSAMDUMD "的定义的"define"函数基于["requirejs"](https://github.com/requirejs/requirejs)的 "define"函数

把未命名的模块以 (url)命名存入模块仓库中

# 相比 systemjs 和 requirejs 的优势:

1.跟 systemjs 的 import 函数的全局运行模块的代码,会修改全局变量,相比,

IMPORTCJSAMDUMD 中所有模块的代码全部放在函数闭包中执行,

2.systemjs 不支持在模块代码中的 require 函数来加载依赖包,也不支持识别 amd 模块中的 define 函数的定义模块的名称的功能,导致这些有依赖关系的模块都会到全局变量中寻找需要的模块,否则加载失败,

IMPORTCJSAMDUMD 支持在模块内部使用 require 函数和 define 函数定义依赖关系,并在模块仓库中查找需要的模块

比如说 jquery 和 jquery-ui 都是 amd 模块定义方式,jquery-ui 依赖于 jquery

比如说 bootstrap 是 umd 模块定义方式,bootstrap 依赖于 jquery 和 popper.js

3.requriejs 不支持 cjs 和 umd 模块的定义方式,使用比较麻烦,

# 安装模块

```bash
npm install --save https://github.com/masx200/IMPORTCJSAMDUMD.git
```

或者

```shell
yarn add https://github.com/masx200/IMPORTCJSAMDUMD.git

```

# 更新:乱序加载有依赖关系的模块包

导入模块

```javascript
import IMPORTCJSAMDUMD from "importcjsamdumd";
```

# 默认在模块加载时开启了严格模式!

`"use strict"`

# 函数参数第一项可以是字符串网址，或者数组，或者对象

```javascript
IMPORTCJSAMDUMD({
  名称1: "网址1",
  名称2: "网址2"
});
```

如果第一个参数是网址，则第二个参数名称可以省略，默认以网址作为名称

```javascript
IMPORTCJSAMDUMD("网址1", "名称1");
```

### 新版用法:

全面升级支持

传参一个 `object`参数,返回`promise`内含一个 `object`

键名为模块的名称，键值为网址

```javascript
IMPORTCJSAMDUMD({
  bootstrap:
    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js",
  jquery: "https://cdn.staticfile.org/jquery/3.4.1/jquery.js"
}).then(console.log);

IMPORTCJSAMDUMD({
  react:
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.development.js",
  "react-dom":
    "https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/umd/react-dom.development.js",
  vue: "https://cdn.staticfile.org/vue/2.6.10/vue.js"
}).then(console.log);
```

```javascript
(async () => {
  let {
    react: { default: React },
    "react-dom": { default: ReactDOM }
  } = await IMPORTCJSAMDUMD({
    react:
      "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.development.js",
    "react-dom":
      "https://cdn.staticfile.org/react-dom/16.9.0-alpha.0/umd/react-dom.development.js"
  });

  console.log(React, ReactDOM);
})();
```

1.可以在一句 IMPORTCJSAMDUMD 语句中,传入多个模块的 url 的 name 了,返回一个数组,相当于 promise.all 的语法糖,

2.可以尝试乱序加载有依赖关系的模块包了,加载之前,先把模块的 url 和 name 信息存入模块配置列表,如果依赖的包还没有加载完成,则多次尝试加载,最终可以加载完成

甚至是这么变态的依赖关系,这么乱序加载,都可以!

### 旧版用法:

传参 多个`Array`参数,返回`promise`内含一个 `Array`

```javascript
IMPORTCJSAMDUMD(
  [
    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js",
    "bootstrap"
  ],
  ["https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js", "jquery"],
  ["https://cdn.staticfile.org/mui/3.7.1/js/mui.min.js", "mui"],
  [
    "https://cdn.staticfile.org/clipboard.js/2.0.4/clipboard.min.js",
    "clipboard"
  ],
  [
    "https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js",
    "popper.js"
  ],
  [
    "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
    "react-dom"
  ],
  [
    "https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.min.js",
    "react-router-dom"
  ],
  [
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
    "react"
  ]
)
  .then(console.log)
  .catch(console.warn);
```

## 旧版用法:加载有依赖关系的模块包的方法

```javascript
import IMPORTCJSAMDUMD from "../IMPORTCJSAMDUMD";
(async () => {
  const react = await IMPORTCJSAMDUMD(
    "https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.production.min.js",
    "react"
  );
  const [reactdom, reactrouterdom] = await Promise.all([
    IMPORTCJSAMDUMD(
      "https://cdn.staticfile.org/react-dom/16.8.6/umd/react-dom.production.min.js",
      "react-dom"
    ),
    IMPORTCJSAMDUMD(
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
  //............................
}
```

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

### 如果要动态异步加载 ES 模块,加载 es6 模块的方法:

```javascript
IMPORTCJSAMDUMD(url).then(console.log);
```

基于 ["es-module-shims"](https://github.com/guybedford/es-module-shims)

先当成 `umd` 模块运行,监测到报错之后,当成 `es` 模块运行

<!-- 如果要兼容旧的浏览器，可以使用["es-module-shims"](https://github.com/guybedford/es-module-shims)的"importShim"函数替换"import"函数 -->

<!-- ```javascript
importShim("/path/to/module.js").then(x => console.log(x));
``` -->

## IMPORTCJSAMDUMD

Dynamically asynchronously load commonjs and umd and amd modules, wrap cjs and amd and umd modules to load the promise method asynchronously, use the fetch method to get the specified module package source code, and put the module into the module repository.

And solve the dependencies between the packages, if the "require" function in the dependent package needs, then introduce the required module package in the module repository

Defines the "define" method of the module package, the "require" method, the "module.exports" object, and the "exports" object

The function of IMPORTCJSAMDUMD is similar to the "system.import" function of "systemjs".

The "define" function defined by IMPORTCJSAMDUMD is based on the "define" function of requirejs.

## 动态异步加载 cjs,amd,umd 模块用法:

主函数,IMPORTCJSAMDUMD,返回一个 promise 对象,参数 url 和 name 都是字符串，把通过 url 加载的依赖包放入模块仓库中，命名为 name，promise 之后的.then 函数的回调函数的参数是 module，module.default 的模块的默认输出

```javascript
IMPORTCJSAMDUMD(url, name);

IMPORTCJSAMDUMD(url).then(m => console.log(m.default));
```

次对象,IMPORTCJSAMDUMD.PACKAGESTORE,是所有加载过的模块的存储仓库对象

```javascript
IMPORTCJSAMDUMD.PACKAGESTORE[name];
```

次函数,IMPORTCJSAMDUMD.REQUIREPACKAGE,返回模块仓库中的模块,参数 name 是字符串

```javascript
IMPORTCJSAMDUMD.REQUIREPACKAGE(name);
```

IMPORTCJSAMDUMD.PACKAGESTORE[name].default 和 IMPORTCJSAMDUMD.REQUIREPACKAGE(name)是相等的

## 示例

```javascript
IMPORTCJSAMDUMD("https://cdn.staticfile.org/jquery/3.4.1/jquery.js").then(m => {
  console.log(m.default.fn.jquery);
});

var jquery = IMPORTCJSAMDUMD.PACKAGESTORE.jquery.default;

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

//加载es6模块的方法

IMPORTCJSAMDUMD(
  "https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.min.js"
).then(console.log);
```

# 推荐几个优秀的前端开源项目库 CDN 加速服务加速网站

https://www.jsdelivr.com/

http://staticfile.org/

https://www.bootcdn.cn/

https://cdnjs.com/

https://unpkg.com/

# 模块打包输出,并压缩

## 使用 webpack 打包模块输出

```shell
webpack --output-library-target=commonjs2 -p  -o ./dist/index.cjs.js  --verbose ./src/index.js
```

## 使用 rollup 打包模块输出

```shell
rollup -f esm -i ./src/index.js -o ./dist/index.esm.js
```

```bash
rollup -f cjs -i ./src/index.js -o ./dist/index.cjs.js
```

## 使用 terser 压缩模块

```bash
terser   -c -m -o ./dist/index.esm.min.js --verbose  ./dist/index.esm.js  --toplevel
```

```bash
terser   -c -m -o ./dist/index.cjs.min.js --verbose  ./dist/index.cjs.js  --toplevel
```

### 使用 terser 删除所有 console 的函数调用

`terser --compress drop_console=true -m -o ./dist/index.esm.min.js --verbose ./dist/index.esm.js --toplevel`

`terser --compress drop_console=true -m -o ./dist/index.cjs.min.js --verbose ./dist/index.cjs.js --toplevel`
