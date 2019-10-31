import { defineProperty, get } from "./coreload";
import { ismodule } from "./ismodule";
import { isplainobject } from "./isplainobject";

export function 定义default(
  target: Record<string, any>,
  def: { [x: string]: string; default: any } | Function
) {
  def = get(def, "default") ? get(def, "default") : def;
  // /*   if (
  //     get(def, Symbol.toStringTag) === /* def[Symbol.toStringTag] */ "Module" &&
  //     def.default
  //   ) {
  //     def = def.default;
  //   } */
  if (!ismodule(def) && !isplainobject(def)) {
    /* 如果是个module或者plainobject则,不定义default */
    // try {
    defineProperty(target, "default", {
      enumerable: true,
      get() {
        return def;
      }
    });
    //   } catch (error) {}
  }
}
