export function 格式化url(baseurl, urlorname) {
    if (String(urlorname).startsWith("./") ||
        String(urlorname).startsWith("../")) {
        if (!(String(urlorname).endsWith(".js") ||
            urlorname.endsWith(".mjs") ||
            urlorname.endsWith(".json") ||
            urlorname.endsWith(".css") ||
            urlorname.endsWith(".html"))) {
            urlorname += ".js";
        }
        urlorname = new URL(baseurl + urlorname).href;
    }
    return urlorname;
}
//# sourceMappingURL=formaturl.js.map