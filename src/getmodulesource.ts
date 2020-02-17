import { get } from "./coreload";
import { assertstring } from "./assertstring";
import { cachedurltotext } from "./cachedfetchtext";

export function getmodulesource(url: string): string | undefined {
    assertstring(url);
    return get(cachedurltotext, url);
}
