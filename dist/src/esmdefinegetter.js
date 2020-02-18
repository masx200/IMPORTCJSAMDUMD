import { defineProperty, get } from "./coreload";
import { isFunction } from "./isfunction";
export function esmdefinegetter(moduleexport, exportdefault) {
    if (exportdefault &&
        (isFunction(exportdefault) || typeof exportdefault === "object")) {
        Object.keys(exportdefault).forEach(key => {
            try {
                defineProperty(moduleexport, key, {
                    enumerable: true,
                    get() {
                        return get(exportdefault, key);
                    }
                });
            }
            catch (error) { }
        });
    }
}
//# sourceMappingURL=esmdefinegetter.js.map