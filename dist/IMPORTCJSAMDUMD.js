parcelRequire = (function(e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    KA2S: [
      function(require, module, exports) {
        var global = arguments[3];
        var t = arguments[3];
        !(function(t) {
          "use strict";
          var r,
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag",
            u = "object" == typeof module,
            h = t.regeneratorRuntime;
          if (h) u && (module.exports = h);
          else {
            (h = t.regeneratorRuntime = u ? module.exports : {}).wrap = w;
            var f = "suspendedStart",
              s = "suspendedYield",
              l = "executing",
              p = "completed",
              y = {},
              v = {};
            v[i] = function() {
              return this;
            };
            var d = Object.getPrototypeOf,
              g = d && d(d(P([])));
            g && g !== e && n.call(g, i) && (v = g);
            var m = (b.prototype = x.prototype = Object.create(v));
            (E.prototype = m.constructor = b),
              (b.constructor = E),
              (b[c] = E.displayName = "GeneratorFunction"),
              (h.isGeneratorFunction = function(t) {
                var r = "function" == typeof t && t.constructor;
                return (
                  !!r &&
                  (r === E || "GeneratorFunction" === (r.displayName || r.name))
                );
              }),
              (h.mark = function(t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, b)
                    : ((t.__proto__ = b),
                      c in t || (t[c] = "GeneratorFunction")),
                  (t.prototype = Object.create(m)),
                  t
                );
              }),
              (h.awrap = function(t) {
                return { __await: t };
              }),
              _(j.prototype),
              (j.prototype[a] = function() {
                return this;
              }),
              (h.AsyncIterator = j),
              (h.async = function(t, r, e, n) {
                var o = new j(w(t, r, e, n));
                return h.isGeneratorFunction(r)
                  ? o
                  : o.next().then(function(t) {
                      return t.done ? t.value : o.next();
                    });
              }),
              _(m),
              (m[c] = "Generator"),
              (m[i] = function() {
                return this;
              }),
              (m.toString = function() {
                return "[object Generator]";
              }),
              (h.keys = function(t) {
                var r = [];
                for (var e in t) r.push(e);
                return (
                  r.reverse(),
                  function e() {
                    for (; r.length; ) {
                      var n = r.pop();
                      if (n in t) return (e.value = n), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                  }
                );
              }),
              (h.values = P),
              (N.prototype = {
                constructor: N,
                reset: function(t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = r),
                    this.tryEntries.forEach(G),
                    !t)
                  )
                    for (var e in this)
                      "t" === e.charAt(0) &&
                        n.call(this, e) &&
                        !isNaN(+e.slice(1)) &&
                        (this[e] = r);
                },
                stop: function() {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function(t) {
                  if (this.done) throw t;
                  var e = this;
                  function o(n, o) {
                    return (
                      (c.type = "throw"),
                      (c.arg = t),
                      (e.next = n),
                      o && ((e.method = "next"), (e.arg = r)),
                      !!o
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                      var u = n.call(a, "catchLoc"),
                        h = n.call(a, "finallyLoc");
                      if (u && h) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      } else {
                        if (!h)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function(t, r) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var o = this.tryEntries[e];
                    if (
                      o.tryLoc <= this.prev &&
                      n.call(o, "finallyLoc") &&
                      this.prev < o.finallyLoc
                    ) {
                      var i = o;
                      break;
                    }
                  }
                  i &&
                    ("break" === t || "continue" === t) &&
                    i.tryLoc <= r &&
                    r <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = t),
                    (a.arg = r),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                      : this.complete(a)
                  );
                },
                complete: function(t, r) {
                  if ("throw" === t.type) throw t.arg;
                  return (
                    "break" === t.type || "continue" === t.type
                      ? (this.next = t.arg)
                      : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && r && (this.next = r),
                    y
                  );
                },
                finish: function(t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t)
                      return this.complete(e.completion, e.afterLoc), G(e), y;
                  }
                },
                catch: function(t) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                      var n = e.completion;
                      if ("throw" === n.type) {
                        var o = n.arg;
                        G(e);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                  return (
                    (this.delegate = {
                      iterator: P(t),
                      resultName: e,
                      nextLoc: n
                    }),
                    "next" === this.method && (this.arg = r),
                    y
                  );
                }
              });
          }
          function w(t, r, e, n) {
            var o = r && r.prototype instanceof x ? r : x,
              i = Object.create(o.prototype),
              a = new N(n || []);
            return (
              (i._invoke = (function(t, r, e) {
                var n = f;
                return function(o, i) {
                  if (n === l) throw new Error("Generator is already running");
                  if (n === p) {
                    if ("throw" === o) throw i;
                    return F();
                  }
                  for (e.method = o, e.arg = i; ; ) {
                    var a = e.delegate;
                    if (a) {
                      var c = O(a, e);
                      if (c) {
                        if (c === y) continue;
                        return c;
                      }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                      if (n === f) throw ((n = p), e.arg);
                      e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    n = l;
                    var u = L(t, r, e);
                    if ("normal" === u.type) {
                      if (((n = e.done ? p : s), u.arg === y)) continue;
                      return { value: u.arg, done: e.done };
                    }
                    "throw" === u.type &&
                      ((n = p), (e.method = "throw"), (e.arg = u.arg));
                  }
                };
              })(t, e, a)),
              i
            );
          }
          function L(t, r, e) {
            try {
              return { type: "normal", arg: t.call(r, e) };
            } catch (n) {
              return { type: "throw", arg: n };
            }
          }
          function x() {}
          function E() {}
          function b() {}
          function _(t) {
            ["next", "throw", "return"].forEach(function(r) {
              t[r] = function(t) {
                return this._invoke(r, t);
              };
            });
          }
          function j(t) {
            var r;
            this._invoke = function(e, o) {
              function i() {
                return new Promise(function(r, i) {
                  !(function r(e, o, i, a) {
                    var c = L(t[e], t, o);
                    if ("throw" !== c.type) {
                      var u = c.arg,
                        h = u.value;
                      return h && "object" == typeof h && n.call(h, "__await")
                        ? Promise.resolve(h.__await).then(
                            function(t) {
                              r("next", t, i, a);
                            },
                            function(t) {
                              r("throw", t, i, a);
                            }
                          )
                        : Promise.resolve(h).then(
                            function(t) {
                              (u.value = t), i(u);
                            },
                            function(t) {
                              return r("throw", t, i, a);
                            }
                          );
                    }
                    a(c.arg);
                  })(e, o, r, i);
                });
              }
              return (r = r ? r.then(i, i) : i());
            };
          }
          function O(t, e) {
            var n = t.iterator[e.method];
            if (n === r) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = r),
                  O(t, e),
                  "throw" === e.method)
                )
                  return y;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return y;
            }
            var o = L(n, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                  (e.delegate = null),
                  y)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                y);
          }
          function k(t) {
            var r = { tryLoc: t[0] };
            1 in t && (r.catchLoc = t[1]),
              2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
              this.tryEntries.push(r);
          }
          function G(t) {
            var r = t.completion || {};
            (r.type = "normal"), delete r.arg, (t.completion = r);
          }
          function N(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(k, this),
              this.reset(!0);
          }
          function P(t) {
            if (t) {
              var e = t[i];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return (e.value = t[o]), (e.done = !1), e;
                    return (e.value = r), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            return { next: F };
          }
          function F() {
            return { value: r, done: !0 };
          }
        })(
          (function() {
            return this || ("object" == typeof self && self);
          })() || Function("return this")()
        );
      },
      {}
    ],
    GCZq: [
      function(require, module, exports) {
        var e =
            (function() {
              return this || ("object" == typeof self && self);
            })() || Function("return this")(),
          r =
            e.regeneratorRuntime &&
            Object.getOwnPropertyNames(e).indexOf("regeneratorRuntime") >= 0,
          t = r && e.regeneratorRuntime;
        if (
          ((e.regeneratorRuntime = void 0),
          (module.exports = require("./runtime")),
          r)
        )
          e.regeneratorRuntime = t;
        else
          try {
            delete e.regeneratorRuntime;
          } catch (n) {
            e.regeneratorRuntime = void 0;
          }
      },
      { "./runtime": "KA2S" }
    ],
    Xu0A: [
      function(require, module, exports) {
        var global = arguments[3];
        var define;
        var e,
          r = arguments[3],
          t = n(require("regenerator-runtime"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          return i(e) || a(e) || u();
        }
        function u() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }
        function a(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        }
        function i(e) {
          if (Array.isArray(e)) {
            for (var r = 0, t = new Array(e.length); r < e.length; r++)
              t[r] = e[r];
            return t;
          }
        }
        function c(e, r, t, n, o, u, a) {
          try {
            var i = e[u](a),
              c = i.value;
          } catch (l) {
            return void t(l);
          }
          i.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function l(e) {
          return function() {
            var r = this,
              t = arguments;
            return new Promise(function(n, o) {
              var u = e.apply(r, t);
              function a(e) {
                c(u, n, o, a, i, "next", e);
              }
              function i(e) {
                c(u, n, o, a, i, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function f(e) {
          return (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        !(function(e) {
          "use strict";
          var r = u;
          function n() {
            var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : void 0,
              t = e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[r];
            if (t)
              return console.log("在模块仓库中找到了", r, t.url), t.default;
            throw new Error(
              "Cannot find module in packagestore, 模块仓库中没有找到,  " + r
            );
          }
          function u(e) {
            return a.apply(this, arguments);
          }
          function a() {
            return (a = l(
              t.default.mark(function u(a) {
                var i,
                  c,
                  l,
                  s,
                  d,
                  p,
                  A,
                  v,
                  y,
                  M,
                  O,
                  b,
                  m = arguments;
                return t.default.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((i =
                              m.length > 1 && void 0 !== m[1] ? m[1] : void 0),
                            "object" !== f(a) && "object" !== f(i))
                          ) {
                            t.next = 47;
                            break;
                          }
                          for (
                            c = 0,
                              l = !0,
                              s = !1,
                              d = void 0,
                              t.prev = 6,
                              p = Array.apply(void 0, m)[Symbol.iterator]();
                            !(l = (A = p.next()).done);
                            l = !0
                          )
                            (v = A.value),
                              (y = v[1]),
                              (M = v[0]),
                              void 0 !==
                                e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[y] &&
                                void 0 !==
                                  e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[y]
                                    .default &&
                                e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[y].url ===
                                  M &&
                                c++;
                          t.next = 14;
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(6)),
                            (s = !0),
                            (d = t.t0);
                        case 14:
                          (t.prev = 14),
                            (t.prev = 15),
                            l || null == p.return || p.return();
                        case 17:
                          if (((t.prev = 17), !s)) {
                            t.next = 20;
                            break;
                          }
                          throw d;
                        case 20:
                          return t.finish(17);
                        case 21:
                          return t.finish(14);
                        case 22:
                          if (!(c >= Array.apply(void 0, m).length)) {
                            t.next = 26;
                            break;
                          }
                          return (
                            (t.next = 25),
                            Promise.all(
                              Array.apply(void 0, m).map(function(r) {
                                var t = r[1];
                                return new Promise(function(r) {
                                  r(e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[t]);
                                });
                              })
                            )
                          );
                        case 25:
                          return t.abrupt("return", t.sent);
                        case 26:
                          return (
                            Array.apply(void 0, m).forEach(function(e) {
                              var r = e[0],
                                t = e[1];
                              if (void 0 === r || "" === r || "" === t)
                                throw new Error(
                                  "输入的类型错误,输入的字符串不能为空,url不能为undefined"
                                );
                              void 0 === t && (t = new URL(r).href);
                            }),
                            (t.prev = 27),
                            (t.next = 30),
                            Promise.all(
                              Array.apply(void 0, m).map(function(e) {
                                return r(e[0], e[1]);
                              })
                            )
                          );
                        case 30:
                          (O = t.sent), (t.next = 39);
                          break;
                        case 33:
                          return (
                            (t.prev = 33),
                            (t.t1 = t.catch(27)),
                            console.warn(t.t1),
                            (t.next = 38),
                            Promise.all(
                              Array.apply(void 0, m).map(function(e) {
                                return r(e[0], e[1]);
                              })
                            )
                          );
                        case 38:
                          O = t.sent;
                        case 39:
                          return (
                            (t.prev = 39),
                            (t.next = 42),
                            Promise.all(
                              Array.apply(void 0, m).map(function(e) {
                                return r(e[0], e[1]);
                              })
                            )
                          );
                        case 42:
                          return (O = t.sent), t.abrupt("return", O);
                        case 45:
                          t.next = 67;
                          break;
                        case 47:
                          if ("string" != typeof a && "string" != typeof i) {
                            t.next = 66;
                            break;
                          }
                          if (
                            ((b = function e(r, t, u) {
                              var a;
                              (e.amd = !0), (e.globalDefQueue = []);
                              var c,
                                l,
                                f = Object.prototype.toString;
                              "string" != typeof r &&
                                ((u = t), (t = r), (r = null)),
                                (l = t),
                                "[object Array]" !== f.call(l) &&
                                  ((u = t), (t = null)),
                                !t &&
                                  (function(e) {
                                    return "[object Function]" === f.call(e);
                                  })(u) &&
                                  ((t = []),
                                  u.length &&
                                    (u
                                      .toString()
                                      .replace(commentRegExp, commentReplace)
                                      .replace(cjsRequireRegExp, function(
                                        e,
                                        r
                                      ) {
                                        t.push(r);
                                      }),
                                    (t = (1 === u.length
                                      ? ["require"]
                                      : ["require", "exports", "module"]
                                    ).concat(t)))),
                                c
                                  ? (c.defQueue.push([r, t, u]),
                                    (c.defQueueMap[r] = !0))
                                  : e.globalDefQueue.push([r, t, u]),
                                console.log(
                                  "检测到amd模块",
                                  e.globalDefQueue[0]
                                ),
                                "string" == typeof e.globalDefQueue[0][0] &&
                                  void 0 === i &&
                                  (i = e.globalDefQueue[0][0]);
                              var s = e.globalDefQueue[0][1].map(function(e) {
                                return n(e);
                              });
                              e.exports = (a = e.globalDefQueue[0])[2].apply(
                                a,
                                o(s)
                              );
                            }),
                            void 0 !== a && "" !== a && "" !== i)
                          ) {
                            t.next = 51;
                            break;
                          }
                          throw new Error(
                            "输入的类型错误,输入的字符串不能为空,url不能为undefined"
                          );
                        case 51:
                          if (
                            (void 0 === i && (i = new URL(a).href),
                            (a = (a = new URL(a)).href),
                            (b.amd = !0),
                            void 0 ===
                              e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[i] ||
                              void 0 ===
                                e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[i]
                                  .default ||
                              e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[i].url !== a)
                          ) {
                            t.next = 61;
                            break;
                          }
                          return (
                            (t.next = 58),
                            new Promise(function(r) {
                              r(e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[i]);
                            })
                          );
                        case 58:
                          return t.abrupt("return", t.sent);
                        case 61:
                          return (
                            (t.next = 63),
                            new Promise(function(r, t) {
                              try {
                                !(function() {
                                  var o;
                                  try {
                                    try {
                                      o = fetch(a).then(function(e) {
                                        if (!e.ok)
                                          throw new Error("fetch failed " + a);
                                        return e.text();
                                      });
                                    } catch (u) {
                                      return console.error(u), void t(u);
                                    }
                                    try {
                                      o.then(function(o) {
                                        b.exports = {};
                                        var c = [{}, {}, {}];
                                        try {
                                          c = (function(e, r, t, n, o) {
                                            return Function(
                                              "require",
                                              "define",
                                              "module",
                                              "exports",
                                              "/* "
                                                .concat(
                                                  a,
                                                  " */;\n                          \n\n                          "
                                                )
                                                .concat(
                                                  o,
                                                  ";\n                          \n\n                          /* "
                                                )
                                                .concat(
                                                  a,
                                                  " */;\n                          \n                          return [exports, module.exports, define.exports]; "
                                                )
                                            )(e, r, t, n);
                                          })(n, b, { exports: {} }, {}, o);
                                        } catch (u) {
                                          return console.warn(u), void t(u);
                                        }
                                        var l = {
                                          name: void 0,
                                          default: void 0,
                                          url: void 0
                                        };
                                        if (void 0 === c) c = [{}, {}, {}];
                                        if (
                                          (void 0 === b.exports &&
                                            (b.exports = {}),
                                          "object" !== f(c[0]) ||
                                            Object.keys(c[0]).length ||
                                            "{}" !== JSON.stringify(c[0]))
                                        )
                                          console.log("检测到umd模块", a, i),
                                            (l.default = c[0]);
                                        else if (
                                          "object" !== f(c[1]) ||
                                          Object.keys(c[1]).length ||
                                          "{}" !== JSON.stringify(c[1])
                                        )
                                          console.log("检测到cjs模块", a, i),
                                            (l.default = c[1]);
                                        else {
                                          if (
                                            "object" === f(c[2]) &&
                                            !Object.keys(c[2]).length &&
                                            "{}" === JSON.stringify(c[2])
                                          )
                                            return (
                                              console.warn(
                                                "加载的模块没有输出",
                                                a,
                                                i
                                              ),
                                              void r(l)
                                            );
                                          console.log("检测到amd模块", a, i),
                                            (l.default = c[2]);
                                        }
                                        if (
                                          ("undefined" != typeof Symbol &&
                                            Symbol.toStringTag &&
                                            Object.defineProperty(
                                              l,
                                              Symbol.toStringTag,
                                              { value: "Module" }
                                            ),
                                          void 0 !== l.default &&
                                            (void 0 !== i
                                              ? ((l.name = i),
                                                (e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[
                                                  i
                                                ] = l))
                                              : ((i = a),
                                                (e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE[
                                                  i
                                                ] = l))),
                                          (l.url = a),
                                          void 0 === l.default)
                                        )
                                          return (
                                            console.warn(
                                              "加载的模块没有输出",
                                              i,
                                              a
                                            ),
                                            void r(l)
                                          );
                                        l.name, r(l);
                                      });
                                    } catch (u) {
                                      return console.error(u), void t(u);
                                    }
                                  } catch (u) {
                                    return console.error(u), void t(u);
                                  }
                                })();
                              } catch (o) {
                                return console.error(o), void t(o);
                              }
                            })
                          );
                        case 63:
                          return t.abrupt("return", t.sent);
                        case 64:
                          t.next = 67;
                          break;
                        case 66:
                          throw new Error(
                            "输入的类型错误,输入的类型必须是字符串或者数组"
                          );
                        case 67:
                        case "end":
                          return t.stop();
                      }
                  },
                  u,
                  null,
                  [[6, 10, 14, 22], [15, , 17, 21], [27, 33, 39, 45]]
                );
              })
            )).apply(this, arguments);
          }
          "object" ==
            ("undefined" == typeof exports ? "undefined" : f(exports)) &&
            "undefined" != typeof module &&
            (module.exports = u),
            (e.IMPORTCJSAMDUMD = e.IMPORTCJSAMDUMD || u),
            (e.IMPORTCJSAMDUMD.REQUIREPACKAGE =
              e.IMPORTCJSAMDUMD.REQUIREPACKAGE || n),
            (e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE =
              e.IMPORTCJSAMDUMD.GLOBALPACKAGESTORE || {});
        })(
          ("undefined" != typeof window && window) ||
            ("undefined" != typeof WorkerGlobalScope && WorkerGlobalScope) ||
            this
        );
      },
      { "regenerator-runtime": "GCZq" }
    ]
  },
  {},
  ["Xu0A"],
  null
);
