export function isArray(a: any): a is Array<any> {
  return (
    // typeof a === "object" &&
    Array.isArray(a) && {}.toString.call(a) === "[object Array]"
  );
}
