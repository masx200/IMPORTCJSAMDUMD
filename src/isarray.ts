export function isArray(a: any): a is Array<any> {
  return (
    
    Array.isArray(a) && {}.toString.call(a) === "[object Array]"
  );
}
