import { defineProperty, get } from "./coreload";
import { ismodule } from "./ismodule";
import { isplainobject } from "./isplainobject";

export function 定义default(
  target: Record<string, any>,
  def: { [x: string]: string; default: any } | Function
) {
  def = get(def, "default") ?? def;
  
  
  
  
  
  
  if (!ismodule(def) && !isplainobject(def)) {

    
    defineProperty(target, "default", {
      enumerable: true,
      get() {
        return def;
      }
    });
    
  }
}
