export function isobject(a: any): a is Record<any, any> {
    return !!(a && typeof a === "object");
}
