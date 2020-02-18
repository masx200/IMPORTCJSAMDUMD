import { isArray } from "./isarray";
function define(name, deps, callback) {
    "use strict";
    if (typeof name !== "string") {
        callback = deps;
        deps = name;
        name = null;
    }
    if (!isArray(deps)) {
        callback = deps;
        deps = null;
    }
    if (!deps) {
        deps = [];
    }
    const defineglobalDefQueue = [name, deps, callback];
    return defineglobalDefQueue;
}
export { define };
//# sourceMappingURL=definequeue.js.map