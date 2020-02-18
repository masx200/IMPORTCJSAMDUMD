export function 非空对象(o) {
    return !!(typeof o !== "object" ||
        Object.keys(o).length ||
        JSON.stringify(o) !== "{}");
}
//# sourceMappingURL=notemptyobj.js.map