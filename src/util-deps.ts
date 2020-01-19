/**
 * util-deps.js - The parser for dependencies
 * ref: tests/research/parse-dependencies/test.html
 * ref: https://github.com/seajs/crequire
 */
var REQUIRE_RE = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g;
var SLASH_RE = /\\\\/g;

function parseDependencies(code: string): string[] {
  var ret: string[] = [];

  code.replace(SLASH_RE, "").replace(REQUIRE_RE, function(m, m1, m2, ...args) {
    if (m2) {
      ret.push(m2);
    }
    return "";
  });

  return ret;
}
export { parseDependencies };
