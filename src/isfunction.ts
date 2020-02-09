export function isFunction(it: any): it is Function {
    const op = {}; // Object.prototype;
    const ostring = op.toString;
    const tag = ostring.call(it);
    return (
        ("function" === typeof it && tag === "[object Function]") ||
        tag === "[object AsyncFunction]"
    );
}
