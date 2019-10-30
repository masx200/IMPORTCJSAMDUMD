export function getbaseurl(url: string) {
  var objurl = new URL(url);
  var a = objurl.pathname.split("/");
  a[a.length - 1] = "";
  var path = objurl.origin + a.join("/");
  return path;
}
