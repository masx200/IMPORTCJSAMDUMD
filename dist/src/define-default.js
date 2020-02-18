import { defineProperty } from "./coreload";
import { ismodule } from "./ismodule";
import { isplainobject } from "./isplainobject";
export function 定义default(target, def) {
    var _a, _b;
    def = (_b = (_a = def) === null || _a === void 0 ? void 0 : _a.default, (_b !== null && _b !== void 0 ? _b : def));
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
//# sourceMappingURL=define-default.js.map