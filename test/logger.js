const log = console.log;
function anticircle() {
    const objset = new WeakSet();
    const replacer = (k, a) => {
        const tag = Object.prototype.toString.call(a);
        const type = tag.replace("[object ", "").replace("]", "");
        const tostringkey = Symbol.toStringTag.toString();
        const objtype = { [tostringkey]: type };
        if ((a && typeof a === "object") || typeof a === "function") {
            if (objset.has(a)) {
                return `[object circular ${type}]`;
            } else {
                objset.add(a);
            }
            const objsym = Object.fromEntries(
                Object.getOwnPropertySymbols(a).map(key => [
                    String(key),
                    a[key]
                ])
            );
            if (Array.isArray(a)) {
                return a;
            }
            if (typeof a === "function") {
                let keys = Object.keys(a);
                if (keys.length) {
                    return Object.assign(objsym, objtype, a);
                } else {
                    return `function ${a.name || k}(){}`;
                }
            } else if (a && typeof a === "object") {
                return Object.assign(objsym, objtype, a);
            }
        } else {
            return a;
        }
    };
    return replacer;
}
export default async function(...args) {
    log(...args);
    log(JSON.stringify(args, anticircle(), 4));
}
