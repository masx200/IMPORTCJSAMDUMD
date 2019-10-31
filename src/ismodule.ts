export function ismodule(a: any): boolean {
  return {}.toString.call(a) === "[object Module]";
}
