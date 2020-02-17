import { defineProperty } from "./coreload";
import { ismodule } from "./ismodule";
import { isplainobject } from "./isplainobject";

export function 定义default(target: Record<string, any>, def: any) {
    /* def可能为空? */
    // def = get(def, "default") ?? def;
    def = def?.default ?? def;
    if (!def) {
        return;
    }
    if (!ismodule(def) && !isplainobject(def)) {
        defineProperty(target, "default", {
            enumerable: true,
            get() {
                return def;
            }
        });
    }
}
