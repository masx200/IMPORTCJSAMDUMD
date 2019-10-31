import { PlainObj } from "./oldimport";

export function isplainobject(o: any): o is PlainObj {
  return (
    typeof o === "object" &&
    {}.toString.call(o) === "[object Object]" &&
    o instanceof Object
    //&&
    //   o.__proto__ === Object.prototype
  );
}
