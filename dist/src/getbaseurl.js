export function getbaseurl(url) {
    var objurl = new URL(url);
    let path = new URL(".", objurl.href).href;
    return path;
}
//# sourceMappingURL=getbaseurl.js.map