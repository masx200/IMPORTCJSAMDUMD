import packagestore from "./cachestore";

export function getallmodules(): [string, Record<any, any>][] {
    return Object.entries(packagestore);
}
