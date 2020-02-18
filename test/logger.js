const log = console.log;
// let count = 0;
function anticircle() {
    const objset = new WeakSet();
    /**
     * @param {string} k
     * @param {any} a
     */
    const replacer = (k, a) => {
        // count++;
        // console.info(count);
        if ((a && typeof a === "object") || typeof a === "function") {
            if (objset.has(a)) {
                const tag=Object.prototype.toString.call(a)
                return "[object circular]"+" "+tag;
            } else {
                objset.add(a);
            }
        }

        if (typeof a === "function") {
            let keys = Object.keys(a);
            if (keys.length) {
                return Object.assign({}, a);
            } else {
                return `function ${a.name || k}(){} `;
            }
        } else {
            return a;
        }
    };
    return replacer;
}

/**
 * @param {any[]} args
 */
export default async function(...args) {
    log(...args);
    log(JSON.stringify(args, anticircle(), 4));
    // let p = document.createElement("p");
    // p.innerText = JSON.stringify(args, anticircle(), 4);
    // document.body.appendChild(p);
    // let hr = document.createElement("hr");
    // document.body.appendChild(hr);
}
