const log = console.log;

console.log = function(...args) {
    log(...args);

    let p = document.createElement("p");
    p.innerText = JSON.stringify(
        args,
       ( k,a) => {
            if (typeof a === "function") return `function ${a.name||k}(){}`;
            else return a;
        },
        4
    );
    document.body.appendChild(p);
};

console.log("importcjsamdumd test");
import * as cjsamdumd from "../dist/index.min.js";
import {
    // cacheurltocjsfun,
    // cachedurltotext,
    importcjsamdumd,
    packagealias,
    // packagestore,
    requirepackage
} from "../dist/index.min.js";
Object.assign(packagealias, {
    react:
        "https://cdn.staticfile.org/react/16.10.2/umd/react.production.min.js",
    vue: "https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.js",
    jquery: "https://cdn.staticfile.org/jquery/3.4.1/jquery.js",
    bootstrap:
        "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js",
    hljs: "https://cdn.jsdelivr.net/npm/highlight.js@9.15.10/lib/highlight.js",
    md5:
        "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io/src/assetsjs/md5.js"
});
importcjsamdumd("./array.json").then(console.log);
importcjsamdumd(["./es1.js", "./es2.js"]).then(console.log);

importcjsamdumd(["./amd1.js", "./cjs1.js", "./cmd1.js", "./cmd2.js"]).then(
    console.log
);

importcjsamdumd(["./amd2.js", "./cjs2.js"]).then(console.log);

importcjsamdumd("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.js")
    .then(console.log)
    .then(() => {
        console.log("vue", requirepackage("vue"));
    });
importcjsamdumd(
    "https://cdn.staticfile.org/react/16.10.2/umd/react.production.min.js",
    "react"
)
    .then(console.log)
    .then(() => {
        console.log("react", requirepackage("react"));
    });

importcjsamdumd(
    "https://cdn.jsdelivr.net/npm/fast-xml-parser@3.14.0/src/parser.js"
).then(console.log);
importcjsamdumd("https://cdn.jsdelivr.net/npm/jquery@3.2.1/package.json").then(
    console.log
);
importcjsamdumd(["bootstrap", "jquery"])
    .then(console.log)
    .then(() => {
        console.log("jquery", requirepackage("jquery"));
        console.log("bootstrap", requirepackage("bootstrap"));
    });
importcjsamdumd(
    "https://cdn.jsdelivr.net/npm/highlight.js@9.15.10/lib/highlight.js",
    "hljs"
)
    .then(console.log)
    .then(() => {
        console.log("hljs", requirepackage("hljs"));
    });
importcjsamdumd(
    "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io/src/assetsjs/md5.js",
    "md5"
)
    .then(console.log)
    .then(() => {
        console.log("md5", requirepackage("md5"));
    });
importcjsamdumd([
    "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.js",
    "https://cdn.staticfile.org/big-integer/1.6.47/BigInteger.js",

    "https://cdn.staticfile.org/lodash.js/4.17.15/lodash.js"
]).then(console.log);
importcjsamdumd([
    "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/hieroglyphy.js",
    "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/jsfuck.js",

    "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/fast-xml-parser.js"
]).then(console.log);

/*console.log({
    importcjsamdumd,
    // packagestore,
    requirepackage,
    packagealias
    // cacheurltocjsfun,
    // cachedurltotext
});*/
importcjsamdumd("https://unpkg.com//core-js@3.6.4/modules/es.map.js").then(
    console.log
);
console.log(Object.assign({}, cjsamdumd));
