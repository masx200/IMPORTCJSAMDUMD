console.log("importcjsamdumd test");
import {
cacheurltocjsfun,cachedurltotext,
  importcjsamdumd,
  packagealias,
  PACKAGESTORE,
  REQUIREPACKAGE
} from "../dist/index.min.js";
Object.assign(packagealias, {
vue:"https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.js",
  jquery: "https://cdn.staticfile.org/jquery/3.4.1/jquery.js",
  bootstrap:
    "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js"
});
console.log([importcjsamdumd, PACKAGESTORE, REQUIREPACKAGE, packagealias,cacheurltocjsfun,cachedurltotext]);
importcjsamdumd(["./es1.js", "./es2.js"]).then(console.log);



importcjsamdumd(["./amd1.js", "./cjs1.js",
"./cmd1.js","./cmd2.js"
]).then(console.log);


importcjsamdumd(["./amd2.js", "./cjs2.js",

]).then(console.log);



importcjsamdumd(
  "https://cdn.staticfile.org/vue/2.6.10/vue.esm.browser.js"
).then(console.log);
importcjsamdumd(
  "https://cdn.staticfile.org/react/16.10.2/umd/react.production.min.js"
).then(console.log);

importcjsamdumd(
  "https://cdn.jsdelivr.net/npm/fast-xml-parser@3.14.0/src/parser.js"
).then(console.log);
importcjsamdumd("https://cdn.jsdelivr.net/npm/jquery@3.2.1/package.json").then(
  console.log
);
importcjsamdumd(["jquery", "bootstrap"]).then(console.log);
importcjsamdumd(
  "https://cdn.jsdelivr.net/npm/highlight.js@9.15.10/lib/highlight.js"
).then(console.log);
importcjsamdumd(
  "https://cdn.jsdelivr.net/gh/masx200/masx200.github.io/src/assetsjs/md5.js"
).then(console.log);
importcjsamdumd([
  "https://cdn.staticfile.org/decimal.js/10.2.0/decimal.js",
  "https://cdn.staticfile.org/big-integer/1.6.47/BigInteger.js",
  
  "https://cdn.staticfile.org/lodash.js/4.17.15/lodash.js"
]).then(console.log);
importcjsamdumd(
[
"https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/hieroglyphy.js",
"https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/jsfuck.js",



"https://cdn.jsdelivr.net/gh/masx200/masx200.github.io@4.4.1/src/assetsjs/fast-xml-parser.js"]



).then(console.log);
