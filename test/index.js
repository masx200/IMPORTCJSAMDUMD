import logger from "./logger.js";
logger("importcjsamdumd test");
import * as cjsamdumd from "../dist/index.min.js";
import {
    getmoduletype,
    getmoduledeps,
    getmodulesource,
    getmodulewrapper,
    getallmodules,
    getmoduleids,
    importcjsamdumd,
    packagealias,
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
const allpro = Promise.all([
    importcjsamdumd("./array.json").then(logger),
    importcjsamdumd(["./es1.js", "./es2.js"]).then(logger),
    importcjsamdumd(["./amd1.js", "./cjs1.js", "./cmd1.js", "./cmd2.js"]).then(
        logger
    ),
    importcjsamdumd(["./amd2.js", "./cjs2.js"]).then(logger),
    importcjsamdumd("https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.js")
        .then(logger)
        .then(() => {
            logger("vue", requirepackage("vue"));
        }),
    importcjsamdumd(
        "https://cdn.staticfile.org/react/16.10.2/umd/react.production.min.js",
        "react"
    )
        .then(logger)
        .then(() => {
            logger("react", requirepackage("react"));
        }),
    importcjsamdumd(
        "https://cdn.jsdelivr.net/npm/fast-xml-parser@3.14.0/src/parser.js"
    ).then(logger),
    importcjsamdumd(
        "https://cdn.jsdelivr.net/npm/jquery@3.2.1/package.json"
    ).then(logger),
    importcjsamdumd(["bootstrap", "jquery"])
        .then(logger)
        .then(() => {
            logger("jquery", requirepackage("jquery")),
                logger("bootstrap", requirepackage("bootstrap"));
        }),
    importcjsamdumd(
        "https://cdn.jsdelivr.net/npm/highlight.js@9.15.10/lib/highlight.js",
        "hljs"
    )
        .then(logger)
        .then(() => {
            logger("hljs", requirepackage("hljs"));
        }),
    importcjsamdumd(
        "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io/src/assetsjs/md5.js",
        "md5"
    )
        .then(logger)
        .then(() => {
            logger("md5", requirepackage("md5"));
        }),
    importcjsamdumd([
        "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.js",
        "https://cdn.staticfile.org/big-integer/1.6.47/BigInteger.js",
        "https://cdn.staticfile.org/lodash.js/4.17.15/lodash.js"
    ]).then(logger),
    importcjsamdumd([
        "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/hieroglyphy.js",
        "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/jsfuck.js",
        "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/fast-xml-parser.js"
    ]).then(logger),
    importcjsamdumd("https://unpkg.com/core-js@3.6.4/modules/es.map.js").then(
        logger
    )
]);
logger(Object.assign({}, cjsamdumd));
allpro.then(() => {
    const allids = getmoduleids();
    logger(allids);

    logger(
        allids.map(id => {
            return [id, getmoduledeps(id)];
        })
    );
    logger(
        allids.map(id => {
            return [id, getmodulesource(id)];
        })
    );
    logger(
        allids.map(id => {
            return [id, getmodulewrapper(id)];
        })
    );
    const allmodule = getallmodules();
    console.info(allmodule);
    allmodule.forEach(v => {
        try {
            logger(v);
        } catch (error) {
            console.error(error);
        }
    });
    logger(
        allids.map(id => {
            return [id, getmoduletype(id)];
        })
    );
});
window.addEventListener("unhandledrejection", e => {
    // throw e;
    console.error(e);
});
window.addEventListener("error", e => {
    console.error(e);
});
