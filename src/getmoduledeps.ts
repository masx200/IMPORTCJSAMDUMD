// import { MODULETYPE } from "./module";
import { get } from "./coreload";
import { cachemoduledeps } from "./cachemoduledeps";
import { assertstring } from "./assertstring";
// import { cachemoduletype } from "./cachemoduletype";

export function getmoduledeps(url: string): string[] | undefined {
    assertstring(url);
    const deps = get(cachemoduledeps, url);
    // deps && Object.seal(deps);
    // return deps;
    if (deps) {
        return [...deps];
    }
    return;
}
