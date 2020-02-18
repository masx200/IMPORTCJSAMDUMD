export function isFunction(it) {
    const op = {};
    const ostring = op.toString;
    const tag = ostring.call(it);
    return (("function" === typeof it && tag === "[object Function]") ||
        tag === "[object AsyncFunction]");
}
//# sourceMappingURL=isfunction.js.map