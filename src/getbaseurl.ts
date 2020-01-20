export function getbaseurl(url: string): string {
  var objurl = new URL(url);
  /*  var a = objurl.pathname.split("/");
  a[a.length - 1] = "";
  var path = objurl.origin + a.join("/"); */
  let path = new URL(".", objurl.href).href;
  return path;
}
