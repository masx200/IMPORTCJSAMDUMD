// import { MODULETYPE } from "./module";
import { get } from "./coreload";
import { cachemoduledeps } from "./cachemoduledeps";
import { assertstring } from "./assertstring";
// import { cachemoduletype } from "./cachemoduletype";

export function getmoduledeps(url: string): string[] | undefined {
    assertstring(url);
    const deps = get(cachemoduledeps, url);
    deps && Object.freeze(deps);
    return deps;
}
