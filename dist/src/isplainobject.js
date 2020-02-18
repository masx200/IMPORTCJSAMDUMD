export function isplainobject(o) {
    return (typeof o === "object" &&
        {}.toString.call(o) === "[object Object]" &&
        o instanceof Object &&
        Reflect.getPrototypeOf(o) === Object.prototype);
}
//# sourceMappingURL=isplainobject.js.map