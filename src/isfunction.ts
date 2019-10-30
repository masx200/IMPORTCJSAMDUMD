export function isFunction(it: any): it is Function {
  const op = {}; // Object.prototype;
  const ostring = op.toString;
  return "function" === typeof it && ostring.call(it) === "[object Function]";
}
