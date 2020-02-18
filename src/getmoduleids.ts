import packagestore from "./cachestore";

export default function getmoduleids(): string[] {
    return Object.keys(packagestore);
}
