var an = Object.defineProperty;
var on = (a, e, n) => e in a ? an(a, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[e] = n;
var He = (a, e, n) => (on(a, typeof e != "symbol" ? e + "" : e, n), n), gt = (a, e, n) => {
  if (!e.has(a))
    throw TypeError("Cannot " + n);
};
var C = (a, e, n) => (gt(a, e, "read from private field"), n ? n.call(a) : e.get(a)), ue = (a, e, n) => {
  if (e.has(a))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(a) : e.set(a, n);
}, Se = (a, e, n, t) => (gt(a, e, "write to private field"), t ? t.call(a, n) : e.set(a, n), n), mt = (a, e, n, t) => ({
  set _(r) {
    Se(a, e, r, n);
  },
  get _() {
    return C(a, e, t);
  }
}), me = (a, e, n) => (gt(a, e, "access private method"), n);
import React$1, { useState, useEffect } from "react";
const PDFViewer$1 = "";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getAugmentedNamespace(a) {
  var e = a.default;
  if (typeof e == "function") {
    var n = function() {
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(a).forEach(function(t) {
    var r = Object.getOwnPropertyDescriptor(a, t);
    Object.defineProperty(n, t, r.get ? r : {
      enumerable: !0,
      get: function() {
        return a[t];
      }
    });
  }), n;
}
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var a = React$1, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, r = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(k, F, v) {
    var y, x = {}, m = null, _ = null;
    v !== void 0 && (m = "" + v), F.key !== void 0 && (m = "" + F.key), F.ref !== void 0 && (_ = F.ref);
    for (y in F)
      t.call(F, y) && !S.hasOwnProperty(y) && (x[y] = F[y]);
    if (k && k.defaultProps)
      for (y in F = k.defaultProps, F)
        x[y] === void 0 && (x[y] = F[y]);
    return { $$typeof: e, type: k, key: m, ref: _, props: x, _owner: r.current };
  }
  return reactJsxRuntime_production_min.Fragment = n, reactJsxRuntime_production_min.jsx = E, reactJsxRuntime_production_min.jsxs = E, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var a = React$1, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), k = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), u = Symbol.iterator, l = "@@iterator";
    function o(W) {
      if (W === null || typeof W != "object")
        return null;
      var ye = u && W[u] || W[l];
      return typeof ye == "function" ? ye : null;
    }
    var s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(W) {
      {
        for (var ye = arguments.length, Ee = new Array(ye > 1 ? ye - 1 : 0), ke = 1; ke < ye; ke++)
          Ee[ke - 1] = arguments[ke];
        h("error", W, Ee);
      }
    }
    function h(W, ye, Ee) {
      {
        var ke = s.ReactDebugCurrentFrame, Ue = ke.getStackAddendum();
        Ue !== "" && (ye += "%s", Ee = Ee.concat([Ue]));
        var Ve = Ee.map(function(Be) {
          return String(Be);
        });
        Ve.unshift("Warning: " + ye), Function.prototype.apply.call(console[W], console, Ve);
      }
    }
    var f = !1, i = !1, c = !1, A = !1, O = !1, U;
    U = Symbol.for("react.module.reference");
    function P(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === t || W === S || O || W === r || W === v || W === y || A || W === _ || f || i || c || typeof W == "object" && W !== null && (W.$$typeof === m || W.$$typeof === x || W.$$typeof === E || W.$$typeof === k || W.$$typeof === F || W.$$typeof === U || W.getModuleId !== void 0));
    }
    function L(W, ye, Ee) {
      var ke = W.displayName;
      if (ke)
        return ke;
      var Ue = ye.displayName || ye.name || "";
      return Ue !== "" ? Ee + "(" + Ue + ")" : Ee;
    }
    function Q(W) {
      return W.displayName || "Context";
    }
    function de(W) {
      if (W == null)
        return null;
      if (typeof W.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof W == "function")
        return W.displayName || W.name || null;
      if (typeof W == "string")
        return W;
      switch (W) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case S:
          return "Profiler";
        case r:
          return "StrictMode";
        case v:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof W == "object")
        switch (W.$$typeof) {
          case k:
            var ye = W;
            return Q(ye) + ".Consumer";
          case E:
            var Ee = W;
            return Q(Ee._context) + ".Provider";
          case F:
            return L(W, W.render, "ForwardRef");
          case x:
            var ke = W.displayName || null;
            return ke !== null ? ke : de(W.type) || "Memo";
          case m: {
            var Ue = W, Ve = Ue._payload, Be = Ue._init;
            try {
              return de(Be(Ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, Y = 0, G, J, ne, ae, _e, we, B;
    function b() {
    }
    b.__reactDisabledLog = !0;
    function g() {
      {
        if (Y === 0) {
          G = console.log, J = console.info, ne = console.warn, ae = console.error, _e = console.group, we = console.groupCollapsed, B = console.groupEnd;
          var W = {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          };
          Object.defineProperties(console, {
            info: W,
            log: W,
            warn: W,
            error: W,
            group: W,
            groupCollapsed: W,
            groupEnd: W
          });
        }
        Y++;
      }
    }
    function T() {
      {
        if (Y--, Y === 0) {
          var W = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, W, {
              value: G
            }),
            info: oe({}, W, {
              value: J
            }),
            warn: oe({}, W, {
              value: ne
            }),
            error: oe({}, W, {
              value: ae
            }),
            group: oe({}, W, {
              value: _e
            }),
            groupCollapsed: oe({}, W, {
              value: we
            }),
            groupEnd: oe({}, W, {
              value: B
            })
          });
        }
        Y < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = s.ReactCurrentDispatcher, j;
    function V(W, ye, Ee) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (Ue) {
            var ke = Ue.stack.trim().match(/\n( *(at )?)/);
            j = ke && ke[1] || "";
          }
        return `
` + j + W;
      }
    }
    var z = !1, $;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new fe();
    }
    function K(W, ye) {
      if (!W || z)
        return "";
      {
        var Ee = $.get(W);
        if (Ee !== void 0)
          return Ee;
      }
      var ke;
      z = !0;
      var Ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ve;
      Ve = N.current, N.current = null, g();
      try {
        if (ye) {
          var Be = function() {
            throw Error();
          };
          if (Object.defineProperty(Be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Be, []);
            } catch (st) {
              ke = st;
            }
            Reflect.construct(W, [], Be);
          } else {
            try {
              Be.call();
            } catch (st) {
              ke = st;
            }
            W.call(Be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (st) {
            ke = st;
          }
          W();
        }
      } catch (st) {
        if (st && ke && typeof st.stack == "string") {
          for (var je = st.stack.split(`
`), Ze = ke.stack.split(`
`), Xe = je.length - 1, $e = Ze.length - 1; Xe >= 1 && $e >= 0 && je[Xe] !== Ze[$e]; )
            $e--;
          for (; Xe >= 1 && $e >= 0; Xe--, $e--)
            if (je[Xe] !== Ze[$e]) {
              if (Xe !== 1 || $e !== 1)
                do
                  if (Xe--, $e--, $e < 0 || je[Xe] !== Ze[$e]) {
                    var tt = `
` + je[Xe].replace(" at new ", " at ");
                    return W.displayName && tt.includes("<anonymous>") && (tt = tt.replace("<anonymous>", W.displayName)), typeof W == "function" && $.set(W, tt), tt;
                  }
                while (Xe >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        z = !1, N.current = Ve, T(), Error.prepareStackTrace = Ue;
      }
      var at = W ? W.displayName || W.name : "", Dt = at ? V(at) : "";
      return typeof W == "function" && $.set(W, Dt), Dt;
    }
    function pe(W, ye, Ee) {
      return K(W, !1);
    }
    function ie(W) {
      var ye = W.prototype;
      return !!(ye && ye.isReactComponent);
    }
    function ge(W, ye, Ee) {
      if (W == null)
        return "";
      if (typeof W == "function")
        return K(W, ie(W));
      if (typeof W == "string")
        return V(W);
      switch (W) {
        case v:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof W == "object")
        switch (W.$$typeof) {
          case F:
            return pe(W.render);
          case x:
            return ge(W.type, ye, Ee);
          case m: {
            var ke = W, Ue = ke._payload, Ve = ke._init;
            try {
              return ge(Ve(Ue), ye, Ee);
            } catch {
            }
          }
        }
      return "";
    }
    var p = Object.prototype.hasOwnProperty, w = {}, D = s.ReactDebugCurrentFrame;
    function R(W) {
      if (W) {
        var ye = W._owner, Ee = ge(W.type, W._source, ye ? ye.type : null);
        D.setExtraStackFrame(Ee);
      } else
        D.setExtraStackFrame(null);
    }
    function M(W, ye, Ee, ke, Ue) {
      {
        var Ve = Function.call.bind(p);
        for (var Be in W)
          if (Ve(W, Be)) {
            var je = void 0;
            try {
              if (typeof W[Be] != "function") {
                var Ze = Error((ke || "React class") + ": " + Ee + " type `" + Be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof W[Be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ze.name = "Invariant Violation", Ze;
              }
              je = W[Be](ye, Be, ke, Ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xe) {
              je = Xe;
            }
            je && !(je instanceof Error) && (R(Ue), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", Ee, Be, typeof je), R(null)), je instanceof Error && !(je.message in w) && (w[je.message] = !0, R(Ue), d("Failed %s type: %s", Ee, je.message), R(null));
          }
      }
    }
    var X = Array.isArray;
    function ce(W) {
      return X(W);
    }
    function le(W) {
      {
        var ye = typeof Symbol == "function" && Symbol.toStringTag, Ee = ye && W[Symbol.toStringTag] || W.constructor.name || "Object";
        return Ee;
      }
    }
    function q(W) {
      try {
        return be(W), !1;
      } catch {
        return !0;
      }
    }
    function be(W) {
      return "" + W;
    }
    function te(W) {
      if (q(W))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", le(W)), be(W);
    }
    var se = s.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, re, Ae, Te;
    Te = {};
    function De(W) {
      if (p.call(W, "ref")) {
        var ye = Object.getOwnPropertyDescriptor(W, "ref").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return W.ref !== void 0;
    }
    function Oe(W) {
      if (p.call(W, "key")) {
        var ye = Object.getOwnPropertyDescriptor(W, "key").get;
        if (ye && ye.isReactWarning)
          return !1;
      }
      return W.key !== void 0;
    }
    function xe(W, ye) {
      if (typeof W.ref == "string" && se.current && ye && se.current.stateNode !== ye) {
        var Ee = de(se.current.type);
        Te[Ee] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(se.current.type), W.ref), Te[Ee] = !0);
      }
    }
    function he(W, ye) {
      {
        var Ee = function() {
          re || (re = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        Ee.isReactWarning = !0, Object.defineProperty(W, "key", {
          get: Ee,
          configurable: !0
        });
      }
    }
    function Z(W, ye) {
      {
        var Ee = function() {
          Ae || (Ae = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ye));
        };
        Ee.isReactWarning = !0, Object.defineProperty(W, "ref", {
          get: Ee,
          configurable: !0
        });
      }
    }
    var I = function(W, ye, Ee, ke, Ue, Ve, Be) {
      var je = {
        $$typeof: e,
        type: W,
        key: ye,
        ref: Ee,
        props: Be,
        _owner: Ve
      };
      return je._store = {}, Object.defineProperty(je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function ee(W, ye, Ee, ke, Ue) {
      {
        var Ve, Be = {}, je = null, Ze = null;
        Ee !== void 0 && (te(Ee), je = "" + Ee), Oe(ye) && (te(ye.key), je = "" + ye.key), De(ye) && (Ze = ye.ref, xe(ye, Ue));
        for (Ve in ye)
          p.call(ye, Ve) && !H.hasOwnProperty(Ve) && (Be[Ve] = ye[Ve]);
        if (W && W.defaultProps) {
          var Xe = W.defaultProps;
          for (Ve in Xe)
            Be[Ve] === void 0 && (Be[Ve] = Xe[Ve]);
        }
        if (je || Ze) {
          var $e = typeof W == "function" ? W.displayName || W.name || "Unknown" : W;
          je && he(Be, $e), Ze && Z(Be, $e);
        }
        return I(W, je, Ze, Ue, ke, se.current, Be);
      }
    }
    var ve = s.ReactCurrentOwner, Ce = s.ReactDebugCurrentFrame;
    function Pe(W) {
      if (W) {
        var ye = W._owner, Ee = ge(W.type, W._source, ye ? ye.type : null);
        Ce.setExtraStackFrame(Ee);
      } else
        Ce.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function Re(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function Fe() {
      {
        if (ve.current) {
          var W = de(ve.current.type);
          if (W)
            return `

Check the render method of \`` + W + "`.";
        }
        return "";
      }
    }
    function Me(W) {
      {
        if (W !== void 0) {
          var ye = W.fileName.replace(/^.*[\\\/]/, ""), Ee = W.lineNumber;
          return `

Check your code at ` + ye + ":" + Ee + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function qe(W) {
      {
        var ye = Fe();
        if (!ye) {
          var Ee = typeof W == "string" ? W : W.displayName || W.name;
          Ee && (ye = `

Check the top-level render call using <` + Ee + ">.");
        }
        return ye;
      }
    }
    function We(W, ye) {
      {
        if (!W._store || W._store.validated || W.key != null)
          return;
        W._store.validated = !0;
        var Ee = qe(ye);
        if (Ne[Ee])
          return;
        Ne[Ee] = !0;
        var ke = "";
        W && W._owner && W._owner !== ve.current && (ke = " It was passed a child from " + de(W._owner.type) + "."), Pe(W), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ee, ke), Pe(null);
      }
    }
    function Ie(W, ye) {
      {
        if (typeof W != "object")
          return;
        if (ce(W))
          for (var Ee = 0; Ee < W.length; Ee++) {
            var ke = W[Ee];
            Re(ke) && We(ke, ye);
          }
        else if (Re(W))
          W._store && (W._store.validated = !0);
        else if (W) {
          var Ue = o(W);
          if (typeof Ue == "function" && Ue !== W.entries)
            for (var Ve = Ue.call(W), Be; !(Be = Ve.next()).done; )
              Re(Be.value) && We(Be.value, ye);
        }
      }
    }
    function Ye(W) {
      {
        var ye = W.type;
        if (ye == null || typeof ye == "string")
          return;
        var Ee;
        if (typeof ye == "function")
          Ee = ye.propTypes;
        else if (typeof ye == "object" && (ye.$$typeof === F || ye.$$typeof === x))
          Ee = ye.propTypes;
        else
          return;
        if (Ee) {
          var ke = de(ye);
          M(Ee, W.props, "prop", ke, W);
        } else if (ye.PropTypes !== void 0 && !Le) {
          Le = !0;
          var Ue = de(ye);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ue || "Unknown");
        }
        typeof ye.getDefaultProps == "function" && !ye.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ke(W) {
      {
        for (var ye = Object.keys(W.props), Ee = 0; Ee < ye.length; Ee++) {
          var ke = ye[Ee];
          if (ke !== "children" && ke !== "key") {
            Pe(W), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), Pe(null);
            break;
          }
        }
        W.ref !== null && (Pe(W), d("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function Je(W, ye, Ee, ke, Ue, Ve) {
      {
        var Be = P(W);
        if (!Be) {
          var je = "";
          (W === void 0 || typeof W == "object" && W !== null && Object.keys(W).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = Me(Ue);
          Ze ? je += Ze : je += Fe();
          var Xe;
          W === null ? Xe = "null" : ce(W) ? Xe = "array" : W !== void 0 && W.$$typeof === e ? (Xe = "<" + (de(W.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : Xe = typeof W, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xe, je);
        }
        var $e = ee(W, ye, Ee, Ue, Ve);
        if ($e == null)
          return $e;
        if (Be) {
          var tt = ye.children;
          if (tt !== void 0)
            if (ke)
              if (ce(tt)) {
                for (var at = 0; at < tt.length; at++)
                  Ie(tt[at], W);
                Object.freeze && Object.freeze(tt);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(tt, W);
        }
        return W === t ? Ke($e) : Ye($e), $e;
      }
    }
    function Qe(W, ye, Ee) {
      return Je(W, ye, Ee, !0);
    }
    function Ge(W, ye, Ee) {
      return Je(W, ye, Ee, !1);
    }
    var ze = Ge, et = Qe;
    reactJsxRuntime_development.Fragment = t, reactJsxRuntime_development.jsx = ze, reactJsxRuntime_development.jsxs = et;
  }()), reactJsxRuntime_development;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = requireReactJsxRuntime_production_min() : a.exports = requireReactJsxRuntime_development();
})(jsxRuntime);
const jsx = jsxRuntime.exports.jsx, jsxs = jsxRuntime.exports.jsxs, matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/, stringToIcon = (a, e, n, t = "") => {
  const r = a.split(":");
  if (a.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    t = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const k = r.pop(), F = r.pop(), v = {
      provider: r.length > 0 ? r[0] : t,
      prefix: F,
      name: k
    };
    return e && !validateIconName(v) ? null : v;
  }
  const S = r[0], E = S.split("-");
  if (E.length > 1) {
    const k = {
      provider: t,
      prefix: E.shift(),
      name: E.join("-")
    };
    return e && !validateIconName(k) ? null : k;
  }
  if (n && t === "") {
    const k = {
      provider: t,
      prefix: "",
      name: S
    };
    return e && !validateIconName(k, n) ? null : k;
  }
  return null;
}, validateIconName = (a, e) => a ? !!((a.provider === "" || a.provider.match(matchIconName)) && (e && a.prefix === "" || a.prefix.match(matchIconName)) && a.name.match(matchIconName)) : !1, defaultIconDimensions = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
}), defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: !1
});
function mergeIconTransformations(a, e) {
  const n = {};
  !a.hFlip != !e.hFlip && (n.hFlip = !0), !a.vFlip != !e.vFlip && (n.vFlip = !0);
  const t = ((a.rotate || 0) + (e.rotate || 0)) % 4;
  return t && (n.rotate = t), n;
}
function mergeIconData(a, e) {
  const n = mergeIconTransformations(a, e);
  for (const t in defaultExtendedIconProps)
    t in defaultIconTransformations ? t in a && !(t in n) && (n[t] = defaultIconTransformations[t]) : t in e ? n[t] = e[t] : t in a && (n[t] = a[t]);
  return n;
}
function getIconsTree(a, e) {
  const n = a.icons, t = a.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function S(E) {
    if (n[E])
      return r[E] = [];
    if (!(E in r)) {
      r[E] = null;
      const k = t[E] && t[E].parent, F = k && S(k);
      F && (r[E] = [k].concat(F));
    }
    return r[E];
  }
  return (e || Object.keys(n).concat(Object.keys(t))).forEach(S), r;
}
function internalGetIconData(a, e, n) {
  const t = a.icons, r = a.aliases || /* @__PURE__ */ Object.create(null);
  let S = {};
  function E(k) {
    S = mergeIconData(t[k] || r[k], S);
  }
  return E(e), n.forEach(E), mergeIconData(a, S);
}
function parseIconSet(a, e) {
  const n = [];
  if (typeof a != "object" || typeof a.icons != "object")
    return n;
  a.not_found instanceof Array && a.not_found.forEach((r) => {
    e(r, null), n.push(r);
  });
  const t = getIconsTree(a);
  for (const r in t) {
    const S = t[r];
    S && (e(r, internalGetIconData(a, r, S)), n.push(r));
  }
  return n;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(a, e) {
  for (const n in e)
    if (n in a && typeof a[n] != typeof e[n])
      return !1;
  return !0;
}
function quicklyValidateIconSet(a) {
  if (typeof a != "object" || a === null)
    return null;
  const e = a;
  if (typeof e.prefix != "string" || !a.icons || typeof a.icons != "object" || !checkOptionalProps(a, optionalPropertyDefaults))
    return null;
  const n = e.icons;
  for (const r in n) {
    const S = n[r];
    if (!r.match(matchIconName) || typeof S.body != "string" || !checkOptionalProps(S, defaultExtendedIconProps))
      return null;
  }
  const t = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in t) {
    const S = t[r], E = S.parent;
    if (!r.match(matchIconName) || typeof E != "string" || !n[E] && !t[E] || !checkOptionalProps(S, defaultExtendedIconProps))
      return null;
  }
  return e;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(a, e) {
  return {
    provider: a,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(a, e) {
  const n = dataStorage[a] || (dataStorage[a] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = newStorage(a, e));
}
function addIconSet(a, e) {
  return quicklyValidateIconSet(e) ? parseIconSet(e, (n, t) => {
    t ? a.icons[n] = t : a.missing.add(n);
  }) : [];
}
function addIconToStorage(a, e, n) {
  try {
    if (typeof n.body == "string")
      return a.icons[e] = {
        ...n
      }, !0;
  } catch {
  }
  return !1;
}
let simpleNames = !1;
function allowSimpleNames(a) {
  return typeof a == "boolean" && (simpleNames = a), simpleNames;
}
function getIconData(a) {
  const e = typeof a == "string" ? stringToIcon(a, !0, simpleNames) : a;
  if (e) {
    const n = getStorage(e.provider, e.prefix), t = e.name;
    return n.icons[t] || (n.missing.has(t) ? null : void 0);
  }
}
function addIcon(a, e) {
  const n = stringToIcon(a, !0, simpleNames);
  if (!n)
    return !1;
  const t = getStorage(n.provider, n.prefix);
  return addIconToStorage(t, n.name, e);
}
function addCollection(a, e) {
  if (typeof a != "object")
    return !1;
  if (typeof e != "string" && (e = a.provider || ""), simpleNames && !e && !a.prefix) {
    let r = !1;
    return quicklyValidateIconSet(a) && (a.prefix = "", parseIconSet(a, (S, E) => {
      E && addIcon(S, E) && (r = !0);
    })), r;
  }
  const n = a.prefix;
  if (!validateIconName({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const t = getStorage(e, n);
  return !!addIconSet(t, a);
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
}), defaultIconCustomisations = Object.freeze({
  ...defaultIconSizeCustomisations,
  ...defaultIconTransformations
}), unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g, unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(a, e, n) {
  if (e === 1)
    return a;
  if (n = n || 100, typeof a == "number")
    return Math.ceil(a * e * n) / n;
  if (typeof a != "string")
    return a;
  const t = a.split(unitsSplit);
  if (t === null || !t.length)
    return a;
  const r = [];
  let S = t.shift(), E = unitsTest.test(S);
  for (; ; ) {
    if (E) {
      const k = parseFloat(S);
      isNaN(k) ? r.push(S) : r.push(Math.ceil(k * e * n) / n);
    } else
      r.push(S);
    if (S = t.shift(), S === void 0)
      return r.join("");
    E = !E;
  }
}
function iconToSVG(a, e) {
  const n = {
    ...defaultIconProps,
    ...a
  }, t = {
    ...defaultIconCustomisations,
    ...e
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let S = n.body;
  [n, t].forEach((_) => {
    const u = [], l = _.hFlip, o = _.vFlip;
    let s = _.rotate;
    l ? o ? s += 2 : (u.push("translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"), u.push("scale(-1 1)"), r.top = r.left = 0) : o && (u.push("translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"), u.push("scale(1 -1)"), r.top = r.left = 0);
    let d;
    switch (s < 0 && (s -= Math.floor(s / 4) * 4), s = s % 4, s) {
      case 1:
        d = r.height / 2 + r.top, u.unshift("rotate(90 " + d.toString() + " " + d.toString() + ")");
        break;
      case 2:
        u.unshift("rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")");
        break;
      case 3:
        d = r.width / 2 + r.left, u.unshift("rotate(-90 " + d.toString() + " " + d.toString() + ")");
        break;
    }
    s % 2 === 1 && (r.left !== r.top && (d = r.left, r.left = r.top, r.top = d), r.width !== r.height && (d = r.width, r.width = r.height, r.height = d)), u.length && (S = '<g transform="' + u.join(" ") + '">' + S + "</g>");
  });
  const E = t.width, k = t.height, F = r.width, v = r.height;
  let y, x;
  return E === null ? (x = k === null ? "1em" : k === "auto" ? v : k, y = calculateSize(x, F / v)) : (y = E === "auto" ? F : E, x = k === null ? calculateSize(y, v / F) : k === "auto" ? v : k), {
    attributes: {
      width: y.toString(),
      height: x.toString(),
      viewBox: r.left.toString() + " " + r.top.toString() + " " + F.toString() + " " + v.toString()
    },
    body: S
  };
}
const regex = /\sid="(\S+)"/g, randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(a, e = randomPrefix) {
  const n = [];
  let t;
  for (; t = regex.exec(a); )
    n.push(t[1]);
  return n.length && n.forEach((r) => {
    const S = typeof e == "function" ? e(r) : e + (counter++).toString(), E = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    a = a.replace(new RegExp('([#;"])(' + E + ')([")]|\\.[a-z])', "g"), "$1" + S + "$3");
  }), a;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(a, e) {
  storage[a] = e;
}
function getAPIModule(a) {
  return storage[a] || storage[""];
}
function createAPIConfig(a) {
  let e;
  if (typeof a.resources == "string")
    e = [a.resources];
  else if (e = a.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    resources: e,
    path: a.path || "/",
    maxURL: a.maxURL || 500,
    rotate: a.rotate || 750,
    timeout: a.timeout || 5e3,
    random: a.random === !0,
    index: a.index || 0,
    dataAfterTimeout: a.dataAfterTimeout !== !1
  };
}
const configStorage = /* @__PURE__ */ Object.create(null), fallBackAPISources = ["https://api.simplesvg.com", "https://api.unisvg.com"], fallBackAPI = [];
for (; fallBackAPISources.length > 0; )
  fallBackAPISources.length === 1 || Math.random() > 0.5 ? fallBackAPI.push(fallBackAPISources.shift()) : fallBackAPI.push(fallBackAPISources.pop());
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(a, e) {
  const n = createAPIConfig(e);
  return n === null ? !1 : (configStorage[a] = n, !0);
}
function getAPIConfig(a) {
  return configStorage[a];
}
const detectFetch = () => {
  let a;
  try {
    if (a = fetch, typeof a == "function")
      return a;
  } catch {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(a, e) {
  const n = getAPIConfig(a);
  if (!n)
    return 0;
  let t;
  if (!n.maxURL)
    t = 0;
  else {
    let r = 0;
    n.resources.forEach((E) => {
      r = Math.max(r, E.length);
    });
    const S = e + ".json?icons=";
    t = n.maxURL - r - n.path.length - S.length;
  }
  return t;
}
function shouldAbort(a) {
  return a === 404;
}
const prepare = (a, e, n) => {
  const t = [], r = calculateMaxLength(a, e), S = "icons";
  let E = {
    type: S,
    provider: a,
    prefix: e,
    icons: []
  }, k = 0;
  return n.forEach((F, v) => {
    k += F.length + 1, k >= r && v > 0 && (t.push(E), E = {
      type: S,
      provider: a,
      prefix: e,
      icons: []
    }, k = F.length), E.icons.push(F);
  }), t.push(E), t;
};
function getPath(a) {
  if (typeof a == "string") {
    const e = getAPIConfig(a);
    if (e)
      return e.path;
  }
  return "/";
}
const send = (a, e, n) => {
  if (!fetchModule) {
    n("abort", 424);
    return;
  }
  let t = getPath(e.provider);
  switch (e.type) {
    case "icons": {
      const S = e.prefix, k = e.icons.join(","), F = new URLSearchParams({
        icons: k
      });
      t += S + ".json?" + F.toString();
      break;
    }
    case "custom": {
      const S = e.uri;
      t += S.slice(0, 1) === "/" ? S.slice(1) : S;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let r = 503;
  fetchModule(a + t).then((S) => {
    const E = S.status;
    if (E !== 200) {
      setTimeout(() => {
        n(shouldAbort(E) ? "abort" : "next", E);
      });
      return;
    }
    return r = 501, S.json();
  }).then((S) => {
    if (typeof S != "object" || S === null) {
      setTimeout(() => {
        S === 404 ? n("abort", S) : n("next", r);
      });
      return;
    }
    setTimeout(() => {
      n("success", S);
    });
  }).catch(() => {
    n("next", r);
  });
}, fetchAPIModule = {
  prepare,
  send
};
function sortIcons(a) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  a.sort((r, S) => r.provider !== S.provider ? r.provider.localeCompare(S.provider) : r.prefix !== S.prefix ? r.prefix.localeCompare(S.prefix) : r.name.localeCompare(S.name));
  let t = {
    provider: "",
    prefix: "",
    name: ""
  };
  return a.forEach((r) => {
    if (t.name === r.name && t.prefix === r.prefix && t.provider === r.provider)
      return;
    t = r;
    const S = r.provider, E = r.prefix, k = r.name, F = n[S] || (n[S] = /* @__PURE__ */ Object.create(null)), v = F[E] || (F[E] = getStorage(S, E));
    let y;
    k in v.icons ? y = e.loaded : E === "" || v.missing.has(k) ? y = e.missing : y = e.pending;
    const x = {
      provider: S,
      prefix: E,
      name: k
    };
    y.push(x);
  }), e;
}
function removeCallback(a, e) {
  a.forEach((n) => {
    const t = n.loaderCallbacks;
    t && (n.loaderCallbacks = t.filter((r) => r.id !== e));
  });
}
function updateCallbacks(a) {
  a.pendingCallbacksFlag || (a.pendingCallbacksFlag = !0, setTimeout(() => {
    a.pendingCallbacksFlag = !1;
    const e = a.loaderCallbacks ? a.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const t = a.provider, r = a.prefix;
    e.forEach((S) => {
      const E = S.icons, k = E.pending.length;
      E.pending = E.pending.filter((F) => {
        if (F.prefix !== r)
          return !0;
        const v = F.name;
        if (a.icons[v])
          E.loaded.push({
            provider: t,
            prefix: r,
            name: v
          });
        else if (a.missing.has(v))
          E.missing.push({
            provider: t,
            prefix: r,
            name: v
          });
        else
          return n = !0, !0;
        return !1;
      }), E.pending.length !== k && (n || removeCallback([a], S.id), S.callback(E.loaded.slice(0), E.missing.slice(0), E.pending.slice(0), S.abort));
    });
  }));
}
let idCounter = 0;
function storeCallback(a, e, n) {
  const t = idCounter++, r = removeCallback.bind(null, n, t);
  if (!e.pending.length)
    return r;
  const S = {
    id: t,
    icons: e,
    callback: a,
    abort: r
  };
  return n.forEach((E) => {
    (E.loaderCallbacks || (E.loaderCallbacks = [])).push(S);
  }), r;
}
function listToIcons(a, e = !0, n = !1) {
  const t = [];
  return a.forEach((r) => {
    const S = typeof r == "string" ? stringToIcon(r, e, n) : r;
    S && t.push(S);
  }), t;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function sendQuery(a, e, n, t) {
  const r = a.resources.length, S = a.random ? Math.floor(Math.random() * r) : a.index;
  let E;
  if (a.random) {
    let c = a.resources.slice(0);
    for (E = []; c.length > 1; ) {
      const A = Math.floor(Math.random() * c.length);
      E.push(c[A]), c = c.slice(0, A).concat(c.slice(A + 1));
    }
    E = E.concat(c);
  } else
    E = a.resources.slice(S).concat(a.resources.slice(0, S));
  const k = Date.now();
  let F = "pending", v = 0, y, x = null, m = [], _ = [];
  typeof t == "function" && _.push(t);
  function u() {
    x && (clearTimeout(x), x = null);
  }
  function l() {
    F === "pending" && (F = "aborted"), u(), m.forEach((c) => {
      c.status === "pending" && (c.status = "aborted");
    }), m = [];
  }
  function o(c, A) {
    A && (_ = []), typeof c == "function" && _.push(c);
  }
  function s() {
    return {
      startTime: k,
      payload: e,
      status: F,
      queriesSent: v,
      queriesPending: m.length,
      subscribe: o,
      abort: l
    };
  }
  function d() {
    F = "failed", _.forEach((c) => {
      c(void 0, y);
    });
  }
  function h() {
    m.forEach((c) => {
      c.status === "pending" && (c.status = "aborted");
    }), m = [];
  }
  function f(c, A, O) {
    const U = A !== "success";
    switch (m = m.filter((P) => P !== c), F) {
      case "pending":
        break;
      case "failed":
        if (U || !a.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      y = O, d();
      return;
    }
    if (U) {
      y = O, m.length || (E.length ? i() : d());
      return;
    }
    if (u(), h(), !a.random) {
      const P = a.resources.indexOf(c.resource);
      P !== -1 && P !== a.index && (a.index = P);
    }
    F = "completed", _.forEach((P) => {
      P(O);
    });
  }
  function i() {
    if (F !== "pending")
      return;
    u();
    const c = E.shift();
    if (c === void 0) {
      if (m.length) {
        x = setTimeout(() => {
          u(), F === "pending" && (h(), d());
        }, a.timeout);
        return;
      }
      d();
      return;
    }
    const A = {
      status: "pending",
      resource: c,
      callback: (O, U) => {
        f(A, O, U);
      }
    };
    m.push(A), v++, x = setTimeout(i, a.rotate), n(c, e, A.callback);
  }
  return setTimeout(i), s;
}
function initRedundancy(a) {
  const e = {
    ...defaultConfig,
    ...a
  };
  let n = [];
  function t() {
    n = n.filter((k) => k().status === "pending");
  }
  function r(k, F, v) {
    const y = sendQuery(e, k, F, (x, m) => {
      t(), v && v(x, m);
    });
    return n.push(y), y;
  }
  function S(k) {
    return n.find((F) => k(F)) || null;
  }
  return {
    query: r,
    find: S,
    setIndex: (k) => {
      e.index = k;
    },
    getIndex: () => e.index,
    cleanup: t
  };
}
function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(a) {
  if (!redundancyCache[a]) {
    const e = getAPIConfig(a);
    if (!e)
      return;
    const n = initRedundancy(e), t = {
      config: e,
      redundancy: n
    };
    redundancyCache[a] = t;
  }
  return redundancyCache[a];
}
function sendAPIQuery(a, e, n) {
  let t, r;
  if (typeof a == "string") {
    const S = getAPIModule(a);
    if (!S)
      return n(void 0, 424), emptyCallback$1;
    r = S.send;
    const E = getRedundancyCache(a);
    E && (t = E.redundancy);
  } else {
    const S = createAPIConfig(a);
    if (S) {
      t = initRedundancy(S);
      const E = a.resources ? a.resources[0] : "", k = getAPIModule(E);
      k && (r = k.send);
    }
  }
  return !t || !r ? (n(void 0, 424), emptyCallback$1) : t.query(e, r, n)().abort;
}
const browserCacheVersion = "iconify2", browserCachePrefix = "iconify", browserCacheCountKey = browserCachePrefix + "-count", browserCacheVersionKey = browserCachePrefix + "-version", browserStorageHour = 36e5, browserStorageCacheExpiration = 168;
function getStoredItem(a, e) {
  try {
    return a.getItem(e);
  } catch {
  }
}
function setStoredItem(a, e, n) {
  try {
    return a.setItem(e, n), !0;
  } catch {
  }
}
function removeStoredItem(a, e) {
  try {
    a.removeItem(e);
  } catch {
  }
}
function setBrowserStorageItemsCount(a, e) {
  return setStoredItem(a, browserCacheCountKey, e.toString());
}
function getBrowserStorageItemsCount(a) {
  return parseInt(getStoredItem(a, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
  local: !0,
  session: !0
}, browserStorageEmptyItems = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = !1;
function setBrowserStorageStatus(a) {
  browserStorageStatus = a;
}
let _window = typeof window > "u" ? {} : window;
function getBrowserStorage(a) {
  const e = a + "Storage";
  try {
    if (_window && _window[e] && typeof _window[e].length == "number")
      return _window[e];
  } catch {
  }
  browserStorageConfig[a] = !1;
}
function iterateBrowserStorage(a, e) {
  const n = getBrowserStorage(a);
  if (!n)
    return;
  const t = getStoredItem(n, browserCacheVersionKey);
  if (t !== browserCacheVersion) {
    if (t) {
      const k = getBrowserStorageItemsCount(n);
      for (let F = 0; F < k; F++)
        removeStoredItem(n, browserCachePrefix + F.toString());
    }
    setStoredItem(n, browserCacheVersionKey, browserCacheVersion), setBrowserStorageItemsCount(n, 0);
    return;
  }
  const r = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration, S = (k) => {
    const F = browserCachePrefix + k.toString(), v = getStoredItem(n, F);
    if (typeof v == "string") {
      try {
        const y = JSON.parse(v);
        if (typeof y == "object" && typeof y.cached == "number" && y.cached > r && typeof y.provider == "string" && typeof y.data == "object" && typeof y.data.prefix == "string" && e(y, k))
          return !0;
      } catch {
      }
      removeStoredItem(n, F);
    }
  };
  let E = getBrowserStorageItemsCount(n);
  for (let k = E - 1; k >= 0; k--)
    S(k) || (k === E - 1 ? (E--, setBrowserStorageItemsCount(n, E)) : browserStorageEmptyItems[a].add(k));
}
function initBrowserStorage() {
  if (!browserStorageStatus) {
    setBrowserStorageStatus(!0);
    for (const a in browserStorageConfig)
      iterateBrowserStorage(a, (e) => {
        const n = e.data, t = e.provider, r = n.prefix, S = getStorage(t, r);
        if (!addIconSet(S, n).length)
          return !1;
        const E = n.lastModified || -1;
        return S.lastModifiedCached = S.lastModifiedCached ? Math.min(S.lastModifiedCached, E) : E, !0;
      });
  }
}
function updateLastModified(a, e) {
  const n = a.lastModifiedCached;
  if (n && n >= e)
    return n === e;
  if (a.lastModifiedCached = e, n)
    for (const t in browserStorageConfig)
      iterateBrowserStorage(t, (r) => {
        const S = r.data;
        return r.provider !== a.provider || S.prefix !== a.prefix || S.lastModified === e;
      });
  return !0;
}
function storeInBrowserStorage(a, e) {
  browserStorageStatus || initBrowserStorage();
  function n(t) {
    let r;
    if (!browserStorageConfig[t] || !(r = getBrowserStorage(t)))
      return;
    const S = browserStorageEmptyItems[t];
    let E;
    if (S.size)
      S.delete(E = Array.from(S).shift());
    else if (E = getBrowserStorageItemsCount(r), !setBrowserStorageItemsCount(r, E + 1))
      return;
    const k = {
      cached: Math.floor(Date.now() / browserStorageHour),
      provider: a.provider,
      data: e
    };
    return setStoredItem(r, browserCachePrefix + E.toString(), JSON.stringify(k));
  }
  e.lastModified && !updateLastModified(a, e.lastModified) || !Object.keys(e.icons).length || (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function emptyCallback() {
}
function loadedNewIcons(a) {
  a.iconsLoaderFlag || (a.iconsLoaderFlag = !0, setTimeout(() => {
    a.iconsLoaderFlag = !1, updateCallbacks(a);
  }));
}
function loadNewIcons(a, e) {
  a.iconsToLoad ? a.iconsToLoad = a.iconsToLoad.concat(e).sort() : a.iconsToLoad = e, a.iconsQueueFlag || (a.iconsQueueFlag = !0, setTimeout(() => {
    a.iconsQueueFlag = !1;
    const {
      provider: n,
      prefix: t
    } = a, r = a.iconsToLoad;
    delete a.iconsToLoad;
    let S;
    if (!r || !(S = getAPIModule(n)))
      return;
    S.prepare(n, t, r).forEach((k) => {
      sendAPIQuery(n, k, (F) => {
        if (typeof F != "object")
          k.icons.forEach((v) => {
            a.missing.add(v);
          });
        else
          try {
            const v = addIconSet(a, F);
            if (!v.length)
              return;
            const y = a.pendingIcons;
            y && v.forEach((x) => {
              y.delete(x);
            }), storeInBrowserStorage(a, F);
          } catch (v) {
            console.error(v);
          }
        loadedNewIcons(a);
      });
    });
  }));
}
const loadIcons = (a, e) => {
  const n = listToIcons(a, !0, allowSimpleNames()), t = sortIcons(n);
  if (!t.pending.length) {
    let F = !0;
    return e && setTimeout(() => {
      F && e(t.loaded, t.missing, t.pending, emptyCallback);
    }), () => {
      F = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), S = [];
  let E, k;
  return t.pending.forEach((F) => {
    const {
      provider: v,
      prefix: y
    } = F;
    if (y === k && v === E)
      return;
    E = v, k = y, S.push(getStorage(v, y));
    const x = r[v] || (r[v] = /* @__PURE__ */ Object.create(null));
    x[y] || (x[y] = []);
  }), t.pending.forEach((F) => {
    const {
      provider: v,
      prefix: y,
      name: x
    } = F, m = getStorage(v, y), _ = m.pendingIcons || (m.pendingIcons = /* @__PURE__ */ new Set());
    _.has(x) || (_.add(x), r[v][y].push(x));
  }), S.forEach((F) => {
    const {
      provider: v,
      prefix: y
    } = F;
    r[v][y].length && loadNewIcons(F, r[v][y]);
  }), e ? storeCallback(e, t, S) : emptyCallback;
};
function mergeCustomisations(a, e) {
  const n = {
    ...a
  };
  for (const t in e) {
    const r = e[t], S = typeof r;
    t in defaultIconSizeCustomisations ? (r === null || r && (S === "string" || S === "number")) && (n[t] = r) : S === typeof n[t] && (n[t] = t === "rotate" ? r % 4 : r);
  }
  return n;
}
const separator = /[\s,]+/;
function flipFromString(a, e) {
  e.split(separator).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        a.hFlip = !0;
        break;
      case "vertical":
        a.vFlip = !0;
        break;
    }
  });
}
function rotateFromString(a, e = 0) {
  const n = a.replace(/^-?[0-9.]*/, "");
  function t(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (n === "") {
    const r = parseInt(a);
    return isNaN(r) ? 0 : t(r);
  } else if (n !== a) {
    let r = 0;
    switch (n) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let S = parseFloat(a.slice(0, a.length - n.length));
      return isNaN(S) ? 0 : (S = S / r, S % 1 === 0 ? t(S) : 0);
    }
  }
  return e;
}
function iconToHTML(a, e) {
  let n = a.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const t in e)
    n += " " + t + '="' + e[t] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + a + "</svg>";
}
function encodeSVGforURL(a) {
  return a.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToURL(a) {
  return 'url("data:image/svg+xml,' + encodeSVGforURL(a) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: !1
}, svgDefaults = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, commonProps = {
  display: "inline-block"
}, monotoneProps = {
  backgroundColor: "currentColor"
}, coloredProps = {
  backgroundColor: "transparent"
}, propsToAdd = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, propsToAddTo = {
  webkitMask: monotoneProps,
  mask: monotoneProps,
  background: coloredProps
};
for (const a in propsToAddTo) {
  const e = propsToAddTo[a];
  for (const n in propsToAdd)
    e[a + n] = propsToAdd[n];
}
const inlineDefaults = {
  ...defaultExtendedIconCustomisations,
  inline: !0
};
function fixSize(a) {
  return a + (a.match(/^[-0-9.]+$/) ? "px" : "");
}
const render = (a, e, n, t) => {
  const r = n ? inlineDefaults : defaultExtendedIconCustomisations, S = mergeCustomisations(r, e), E = e.mode || "svg", k = {}, F = e.style || {}, v = {
    ...E === "svg" ? svgDefaults : {},
    ref: t
  };
  for (let s in e) {
    const d = e[s];
    if (d !== void 0)
      switch (s) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          S[s] = d === !0 || d === "true" || d === 1;
          break;
        case "flip":
          typeof d == "string" && flipFromString(S, d);
          break;
        case "color":
          k.color = d;
          break;
        case "rotate":
          typeof d == "string" ? S[s] = rotateFromString(d) : typeof d == "number" && (S[s] = d);
          break;
        case "ariaHidden":
        case "aria-hidden":
          d !== !0 && d !== "true" && delete v["aria-hidden"];
          break;
        default:
          r[s] === void 0 && (v[s] = d);
      }
  }
  const y = iconToSVG(a, S), x = y.attributes;
  if (S.inline && (k.verticalAlign = "-0.125em"), E === "svg") {
    v.style = {
      ...k,
      ...F
    }, Object.assign(v, x);
    let s = 0, d = e.id;
    return typeof d == "string" && (d = d.replace(/-/g, "_")), v.dangerouslySetInnerHTML = {
      __html: replaceIDs(y.body, d ? () => d + "ID" + s++ : "iconifyReact")
    }, /* @__PURE__ */ jsx("svg", {
      ...v
    });
  }
  const {
    body: m,
    width: _,
    height: u
  } = a, l = E === "mask" || (E === "bg" ? !1 : m.indexOf("currentColor") !== -1), o = iconToHTML(m, {
    ...x,
    width: _ + "",
    height: u + ""
  });
  return v.style = {
    ...k,
    "--svg": svgToURL(o),
    width: fixSize(x.width),
    height: fixSize(x.height),
    ...commonProps,
    ...l ? monotoneProps : coloredProps,
    ...F
  }, /* @__PURE__ */ jsx("span", {
    ...v
  });
};
allowSimpleNames(!0);
setAPIModule("", fetchAPIModule);
if (typeof document < "u" && typeof window < "u") {
  initBrowserStorage();
  const a = window;
  if (a.IconifyPreload !== void 0) {
    const e = a.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((t) => {
      try {
        (typeof t != "object" || t === null || t instanceof Array || typeof t.icons != "object" || typeof t.prefix != "string" || !addCollection(t)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (a.IconifyProviders !== void 0) {
    const e = a.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const t = "IconifyProviders[" + n + "] is invalid.";
        try {
          const r = e[n];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          addAPIProvider(n, r) || console.error(t);
        } catch {
          console.error(t);
        }
      }
  }
}
class IconComponent extends React$1.Component {
  constructor(e) {
    super(e), this.state = {
      icon: null
    };
  }
  _abortLoading() {
    this._loading && (this._loading.abort(), this._loading = null);
  }
  _setData(e) {
    this.state.icon !== e && this.setState({
      icon: e
    });
  }
  _checkIcon(e) {
    const n = this.state, t = this.props.icon;
    if (typeof t == "object" && t !== null && typeof t.body == "string") {
      this._icon = "", this._abortLoading(), (e || n.icon === null) && this._setData({
        data: t
      });
      return;
    }
    let r;
    if (typeof t != "string" || (r = stringToIcon(t, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const S = getIconData(r);
    if (!S) {
      (!this._loading || this._loading.name !== t) && (this._abortLoading(), this._icon = "", this._setData(null), S !== null && (this._loading = {
        name: t,
        abort: loadIcons([r], this._checkIcon.bind(this, !1))
      }));
      return;
    }
    if (this._icon !== t || n.icon === null) {
      this._abortLoading(), this._icon = t;
      const E = ["iconify"];
      r.prefix !== "" && E.push("iconify--" + r.prefix), r.provider !== "" && E.push("iconify--" + r.provider), this._setData({
        data: S,
        classes: E
      }), this.props.onLoad && this.props.onLoad(t);
    }
  }
  componentDidMount() {
    this._checkIcon(!1);
  }
  componentDidUpdate(e) {
    e.icon !== this.props.icon && this._checkIcon(!0);
  }
  componentWillUnmount() {
    this._abortLoading();
  }
  render() {
    const e = this.props, n = this.state.icon;
    if (n === null)
      return e.children ? e.children : /* @__PURE__ */ jsx("span", {});
    let t = e;
    return n.classes && (t = {
      ...e,
      className: (typeof e.className == "string" ? e.className + " " : "") + n.classes.join(" ")
    }), render({
      ...defaultIconProps,
      ...n.data
    }, t, e._inline, e._ref);
  }
}
const Icon = React$1.forwardRef(function(e, n) {
  const t = {
    ...e,
    _ref: n,
    _inline: !1
  };
  return /* @__PURE__ */ jsx(IconComponent, {
    ...t
  });
});
React$1.forwardRef(function(e, n) {
  const t = {
    ...e,
    _ref: n,
    _inline: !0
  };
  return /* @__PURE__ */ jsx(IconComponent, {
    ...t
  });
});
function commonjsRequire(a) {
  throw new Error('Could not dynamically require "' + a + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function(e, n) {
    module.exports = n();
  })(globalThis, () => (() => {
    var __webpack_modules__ = [
      ,
      (a, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.UNSUPPORTED_FEATURES = e.TextRenderingMode = e.StreamType = e.RenderingIntentFlag = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FontType = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationStateModelType = e.AnnotationReviewState = e.AnnotationReplyType = e.AnnotationMode = e.AnnotationMarkedState = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0, e.arrayByteLength = w, e.arraysToBytes = D, e.assert = b, e.bytesToString = ge, e.createPromiseCapability = xe, e.createValidAbsoluteUrl = T, e.getModificationDate = Oe, e.getVerbosityLevel = ae, e.info = _e, e.isArrayBuffer = Te, e.isArrayEqual = De, e.objectFromMap = X, e.objectSize = M, e.setVerbosityLevel = ne, e.shadow = N, e.string32 = R, e.stringToBytes = p, e.stringToPDFString = H, e.stringToUTF8String = re, e.unreachable = B, e.utf8StringToString = Ae, e.warn = we;
        const n = [1, 0, 0, 1, 0, 0];
        e.IDENTITY_MATRIX = n;
        const t = [1e-3, 0, 0, 1e-3, 0, 0];
        e.FONT_IDENTITY_MATRIX = t;
        const r = 1.35;
        e.LINE_FACTOR = r;
        const S = 0.35;
        e.LINE_DESCENT_FACTOR = S;
        const E = S / r;
        e.BASELINE_FACTOR = E;
        const k = {
          ANY: 1,
          DISPLAY: 2,
          PRINT: 4,
          SAVE: 8,
          ANNOTATIONS_FORMS: 16,
          ANNOTATIONS_STORAGE: 32,
          ANNOTATIONS_DISABLE: 64,
          OPLIST: 256
        };
        e.RenderingIntentFlag = k;
        const F = {
          DISABLE: 0,
          ENABLE: 1,
          ENABLE_FORMS: 2,
          ENABLE_STORAGE: 3
        };
        e.AnnotationMode = F;
        const v = "pdfjs_internal_editor_";
        e.AnnotationEditorPrefix = v;
        const y = {
          DISABLE: -1,
          NONE: 0,
          FREETEXT: 3,
          INK: 15
        };
        e.AnnotationEditorType = y;
        const x = {
          FREETEXT_SIZE: 1,
          FREETEXT_COLOR: 2,
          FREETEXT_OPACITY: 3,
          INK_COLOR: 11,
          INK_THICKNESS: 12,
          INK_OPACITY: 13
        };
        e.AnnotationEditorParamsType = x;
        const m = {
          PRINT: 4,
          MODIFY_CONTENTS: 8,
          COPY: 16,
          MODIFY_ANNOTATIONS: 32,
          FILL_INTERACTIVE_FORMS: 256,
          COPY_FOR_ACCESSIBILITY: 512,
          ASSEMBLE: 1024,
          PRINT_HIGH_QUALITY: 2048
        };
        e.PermissionFlag = m;
        const _ = {
          FILL: 0,
          STROKE: 1,
          FILL_STROKE: 2,
          INVISIBLE: 3,
          FILL_ADD_TO_PATH: 4,
          STROKE_ADD_TO_PATH: 5,
          FILL_STROKE_ADD_TO_PATH: 6,
          ADD_TO_PATH: 7,
          FILL_STROKE_MASK: 3,
          ADD_TO_PATH_FLAG: 4
        };
        e.TextRenderingMode = _;
        const u = {
          GRAYSCALE_1BPP: 1,
          RGB_24BPP: 2,
          RGBA_32BPP: 3
        };
        e.ImageKind = u;
        const l = {
          TEXT: 1,
          LINK: 2,
          FREETEXT: 3,
          LINE: 4,
          SQUARE: 5,
          CIRCLE: 6,
          POLYGON: 7,
          POLYLINE: 8,
          HIGHLIGHT: 9,
          UNDERLINE: 10,
          SQUIGGLY: 11,
          STRIKEOUT: 12,
          STAMP: 13,
          CARET: 14,
          INK: 15,
          POPUP: 16,
          FILEATTACHMENT: 17,
          SOUND: 18,
          MOVIE: 19,
          WIDGET: 20,
          SCREEN: 21,
          PRINTERMARK: 22,
          TRAPNET: 23,
          WATERMARK: 24,
          THREED: 25,
          REDACT: 26
        };
        e.AnnotationType = l;
        const o = {
          MARKED: "Marked",
          REVIEW: "Review"
        };
        e.AnnotationStateModelType = o;
        const s = {
          MARKED: "Marked",
          UNMARKED: "Unmarked"
        };
        e.AnnotationMarkedState = s;
        const d = {
          ACCEPTED: "Accepted",
          REJECTED: "Rejected",
          CANCELLED: "Cancelled",
          COMPLETED: "Completed",
          NONE: "None"
        };
        e.AnnotationReviewState = d;
        const h = {
          GROUP: "Group",
          REPLY: "R"
        };
        e.AnnotationReplyType = h;
        const f = {
          INVISIBLE: 1,
          HIDDEN: 2,
          PRINT: 4,
          NOZOOM: 8,
          NOROTATE: 16,
          NOVIEW: 32,
          READONLY: 64,
          LOCKED: 128,
          TOGGLENOVIEW: 256,
          LOCKEDCONTENTS: 512
        };
        e.AnnotationFlag = f;
        const i = {
          READONLY: 1,
          REQUIRED: 2,
          NOEXPORT: 4,
          MULTILINE: 4096,
          PASSWORD: 8192,
          NOTOGGLETOOFF: 16384,
          RADIO: 32768,
          PUSHBUTTON: 65536,
          COMBO: 131072,
          EDIT: 262144,
          SORT: 524288,
          FILESELECT: 1048576,
          MULTISELECT: 2097152,
          DONOTSPELLCHECK: 4194304,
          DONOTSCROLL: 8388608,
          COMB: 16777216,
          RICHTEXT: 33554432,
          RADIOSINUNISON: 33554432,
          COMMITONSELCHANGE: 67108864
        };
        e.AnnotationFieldFlag = i;
        const c = {
          SOLID: 1,
          DASHED: 2,
          BEVELED: 3,
          INSET: 4,
          UNDERLINE: 5
        };
        e.AnnotationBorderStyleType = c;
        const A = {
          E: "Mouse Enter",
          X: "Mouse Exit",
          D: "Mouse Down",
          U: "Mouse Up",
          Fo: "Focus",
          Bl: "Blur",
          PO: "PageOpen",
          PC: "PageClose",
          PV: "PageVisible",
          PI: "PageInvisible",
          K: "Keystroke",
          F: "Format",
          V: "Validate",
          C: "Calculate"
        };
        e.AnnotationActionEventType = A;
        const O = {
          WC: "WillClose",
          WS: "WillSave",
          DS: "DidSave",
          WP: "WillPrint",
          DP: "DidPrint"
        };
        e.DocumentActionEventType = O;
        const U = {
          O: "PageOpen",
          C: "PageClose"
        };
        e.PageActionEventType = U;
        const P = {
          UNKNOWN: "UNKNOWN",
          FLATE: "FLATE",
          LZW: "LZW",
          DCT: "DCT",
          JPX: "JPX",
          JBIG: "JBIG",
          A85: "A85",
          AHX: "AHX",
          CCF: "CCF",
          RLX: "RLX"
        };
        e.StreamType = P;
        const L = {
          UNKNOWN: "UNKNOWN",
          TYPE1: "TYPE1",
          TYPE1STANDARD: "TYPE1STANDARD",
          TYPE1C: "TYPE1C",
          CIDFONTTYPE0: "CIDFONTTYPE0",
          CIDFONTTYPE0C: "CIDFONTTYPE0C",
          TRUETYPE: "TRUETYPE",
          CIDFONTTYPE2: "CIDFONTTYPE2",
          TYPE3: "TYPE3",
          OPENTYPE: "OPENTYPE",
          TYPE0: "TYPE0",
          MMTYPE1: "MMTYPE1"
        };
        e.FontType = L;
        const Q = {
          ERRORS: 0,
          WARNINGS: 1,
          INFOS: 5
        };
        e.VerbosityLevel = Q;
        const de = {
          NONE: 0,
          BINARY: 1
        };
        e.CMapCompressionType = de;
        const oe = {
          dependency: 1,
          setLineWidth: 2,
          setLineCap: 3,
          setLineJoin: 4,
          setMiterLimit: 5,
          setDash: 6,
          setRenderingIntent: 7,
          setFlatness: 8,
          setGState: 9,
          save: 10,
          restore: 11,
          transform: 12,
          moveTo: 13,
          lineTo: 14,
          curveTo: 15,
          curveTo2: 16,
          curveTo3: 17,
          closePath: 18,
          rectangle: 19,
          stroke: 20,
          closeStroke: 21,
          fill: 22,
          eoFill: 23,
          fillStroke: 24,
          eoFillStroke: 25,
          closeFillStroke: 26,
          closeEOFillStroke: 27,
          endPath: 28,
          clip: 29,
          eoClip: 30,
          beginText: 31,
          endText: 32,
          setCharSpacing: 33,
          setWordSpacing: 34,
          setHScale: 35,
          setLeading: 36,
          setFont: 37,
          setTextRenderingMode: 38,
          setTextRise: 39,
          moveText: 40,
          setLeadingMoveText: 41,
          setTextMatrix: 42,
          nextLine: 43,
          showText: 44,
          showSpacedText: 45,
          nextLineShowText: 46,
          nextLineSetSpacingShowText: 47,
          setCharWidth: 48,
          setCharWidthAndBounds: 49,
          setStrokeColorSpace: 50,
          setFillColorSpace: 51,
          setStrokeColor: 52,
          setStrokeColorN: 53,
          setFillColor: 54,
          setFillColorN: 55,
          setStrokeGray: 56,
          setFillGray: 57,
          setStrokeRGBColor: 58,
          setFillRGBColor: 59,
          setStrokeCMYKColor: 60,
          setFillCMYKColor: 61,
          shadingFill: 62,
          beginInlineImage: 63,
          beginImageData: 64,
          endInlineImage: 65,
          paintXObject: 66,
          markPoint: 67,
          markPointProps: 68,
          beginMarkedContent: 69,
          beginMarkedContentProps: 70,
          endMarkedContent: 71,
          beginCompat: 72,
          endCompat: 73,
          paintFormXObjectBegin: 74,
          paintFormXObjectEnd: 75,
          beginGroup: 76,
          endGroup: 77,
          beginAnnotation: 80,
          endAnnotation: 81,
          paintImageMaskXObject: 83,
          paintImageMaskXObjectGroup: 84,
          paintImageXObject: 85,
          paintInlineImageXObject: 86,
          paintInlineImageXObjectGroup: 87,
          paintImageXObjectRepeat: 88,
          paintImageMaskXObjectRepeat: 89,
          paintSolidColorImageMask: 90,
          constructPath: 91
        };
        e.OPS = oe;
        const Y = {
          forms: "forms",
          javaScript: "javaScript",
          signatures: "signatures",
          smask: "smask",
          shadingPattern: "shadingPattern",
          errorTilingPattern: "errorTilingPattern",
          errorExtGState: "errorExtGState",
          errorXObject: "errorXObject",
          errorFontLoadType3: "errorFontLoadType3",
          errorFontState: "errorFontState",
          errorFontMissing: "errorFontMissing",
          errorFontTranslate: "errorFontTranslate",
          errorColorSpace: "errorColorSpace",
          errorOperatorList: "errorOperatorList",
          errorFontToUnicode: "errorFontToUnicode",
          errorFontLoadNative: "errorFontLoadNative",
          errorFontBuildPath: "errorFontBuildPath",
          errorFontGetPath: "errorFontGetPath",
          errorMarkedContent: "errorMarkedContent",
          errorContentSubStream: "errorContentSubStream"
        };
        e.UNSUPPORTED_FEATURES = Y;
        const G = {
          NEED_PASSWORD: 1,
          INCORRECT_PASSWORD: 2
        };
        e.PasswordResponses = G;
        let J = Q.WARNINGS;
        function ne(he) {
          Number.isInteger(he) && (J = he);
        }
        function ae() {
          return J;
        }
        function _e(he) {
          J >= Q.INFOS && console.log(`Info: ${he}`);
        }
        function we(he) {
          J >= Q.WARNINGS && console.log(`Warning: ${he}`);
        }
        function B(he) {
          throw new Error(he);
        }
        function b(he, Z) {
          he || B(Z);
        }
        function g(he) {
          if (!he)
            return !1;
          switch (he.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
              return !0;
            default:
              return !1;
          }
        }
        function T(he, Z = null, I = null) {
          if (!he)
            return null;
          try {
            if (I && typeof he == "string") {
              if (I.addDefaultProtocol && he.startsWith("www.")) {
                const ve = he.match(/\./g);
                ve && ve.length >= 2 && (he = `http://${he}`);
              }
              if (I.tryConvertEncoding)
                try {
                  he = re(he);
                } catch {
                }
            }
            const ee = Z ? new URL(he, Z) : new URL(he);
            if (g(ee))
              return ee;
          } catch {
          }
          return null;
        }
        function N(he, Z, I, ee = !1) {
          return Object.defineProperty(he, Z, {
            value: I,
            enumerable: !ee,
            configurable: !0,
            writable: !1
          }), I;
        }
        const j = function() {
          function Z(I, ee) {
            this.constructor === Z && B("Cannot initialize BaseException."), this.message = I, this.name = ee;
          }
          return Z.prototype = new Error(), Z.constructor = Z, Z;
        }();
        e.BaseException = j;
        class V extends j {
          constructor(Z, I) {
            super(Z, "PasswordException"), this.code = I;
          }
        }
        e.PasswordException = V;
        class z extends j {
          constructor(Z, I) {
            super(Z, "UnknownErrorException"), this.details = I;
          }
        }
        e.UnknownErrorException = z;
        class $ extends j {
          constructor(Z) {
            super(Z, "InvalidPDFException");
          }
        }
        e.InvalidPDFException = $;
        class fe extends j {
          constructor(Z) {
            super(Z, "MissingPDFException");
          }
        }
        e.MissingPDFException = fe;
        class K extends j {
          constructor(Z, I) {
            super(Z, "UnexpectedResponseException"), this.status = I;
          }
        }
        e.UnexpectedResponseException = K;
        class pe extends j {
          constructor(Z) {
            super(Z, "FormatError");
          }
        }
        e.FormatError = pe;
        class ie extends j {
          constructor(Z) {
            super(Z, "AbortException");
          }
        }
        e.AbortException = ie;
        function ge(he) {
          (typeof he != "object" || he === null || he.length === void 0) && B("Invalid argument for bytesToString");
          const Z = he.length, I = 8192;
          if (Z < I)
            return String.fromCharCode.apply(null, he);
          const ee = [];
          for (let ve = 0; ve < Z; ve += I) {
            const Ce = Math.min(ve + I, Z), Pe = he.subarray(ve, Ce);
            ee.push(String.fromCharCode.apply(null, Pe));
          }
          return ee.join("");
        }
        function p(he) {
          typeof he != "string" && B("Invalid argument for stringToBytes");
          const Z = he.length, I = new Uint8Array(Z);
          for (let ee = 0; ee < Z; ++ee)
            I[ee] = he.charCodeAt(ee) & 255;
          return I;
        }
        function w(he) {
          if (he.length !== void 0)
            return he.length;
          if (he.byteLength !== void 0)
            return he.byteLength;
          B("Invalid argument for arrayByteLength");
        }
        function D(he) {
          const Z = he.length;
          if (Z === 1 && he[0] instanceof Uint8Array)
            return he[0];
          let I = 0;
          for (let Ce = 0; Ce < Z; Ce++)
            I += w(he[Ce]);
          let ee = 0;
          const ve = new Uint8Array(I);
          for (let Ce = 0; Ce < Z; Ce++) {
            let Pe = he[Ce];
            Pe instanceof Uint8Array || (typeof Pe == "string" ? Pe = p(Pe) : Pe = new Uint8Array(Pe));
            const Le = Pe.byteLength;
            ve.set(Pe, ee), ee += Le;
          }
          return ve;
        }
        function R(he) {
          return String.fromCharCode(he >> 24 & 255, he >> 16 & 255, he >> 8 & 255, he & 255);
        }
        function M(he) {
          return Object.keys(he).length;
        }
        function X(he) {
          const Z = /* @__PURE__ */ Object.create(null);
          for (const [I, ee] of he)
            Z[I] = ee;
          return Z;
        }
        function ce() {
          const he = new Uint8Array(4);
          return he[0] = 1, new Uint32Array(he.buffer, 0, 1)[0] === 1;
        }
        function le() {
          try {
            return new Function(""), !0;
          } catch {
            return !1;
          }
        }
        class q {
          static get isLittleEndian() {
            return N(this, "isLittleEndian", ce());
          }
          static get isEvalSupported() {
            return N(this, "isEvalSupported", le());
          }
          static get isOffscreenCanvasSupported() {
            return N(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
          }
        }
        e.FeatureTest = q;
        const be = [...Array(256).keys()].map((he) => he.toString(16).padStart(2, "0"));
        class te {
          static makeHexColor(Z, I, ee) {
            return `#${be[Z]}${be[I]}${be[ee]}`;
          }
          static scaleMinMax(Z, I) {
            let ee;
            Z[0] ? (Z[0] < 0 && (ee = I[0], I[0] = I[1], I[1] = ee), I[0] *= Z[0], I[1] *= Z[0], Z[3] < 0 && (ee = I[2], I[2] = I[3], I[3] = ee), I[2] *= Z[3], I[3] *= Z[3]) : (ee = I[0], I[0] = I[2], I[2] = ee, ee = I[1], I[1] = I[3], I[3] = ee, Z[1] < 0 && (ee = I[2], I[2] = I[3], I[3] = ee), I[2] *= Z[1], I[3] *= Z[1], Z[2] < 0 && (ee = I[0], I[0] = I[1], I[1] = ee), I[0] *= Z[2], I[1] *= Z[2]), I[0] += Z[4], I[1] += Z[4], I[2] += Z[5], I[3] += Z[5];
          }
          static transform(Z, I) {
            return [Z[0] * I[0] + Z[2] * I[1], Z[1] * I[0] + Z[3] * I[1], Z[0] * I[2] + Z[2] * I[3], Z[1] * I[2] + Z[3] * I[3], Z[0] * I[4] + Z[2] * I[5] + Z[4], Z[1] * I[4] + Z[3] * I[5] + Z[5]];
          }
          static applyTransform(Z, I) {
            const ee = Z[0] * I[0] + Z[1] * I[2] + I[4], ve = Z[0] * I[1] + Z[1] * I[3] + I[5];
            return [ee, ve];
          }
          static applyInverseTransform(Z, I) {
            const ee = I[0] * I[3] - I[1] * I[2], ve = (Z[0] * I[3] - Z[1] * I[2] + I[2] * I[5] - I[4] * I[3]) / ee, Ce = (-Z[0] * I[1] + Z[1] * I[0] + I[4] * I[1] - I[5] * I[0]) / ee;
            return [ve, Ce];
          }
          static getAxialAlignedBoundingBox(Z, I) {
            const ee = te.applyTransform(Z, I), ve = te.applyTransform(Z.slice(2, 4), I), Ce = te.applyTransform([Z[0], Z[3]], I), Pe = te.applyTransform([Z[2], Z[1]], I);
            return [Math.min(ee[0], ve[0], Ce[0], Pe[0]), Math.min(ee[1], ve[1], Ce[1], Pe[1]), Math.max(ee[0], ve[0], Ce[0], Pe[0]), Math.max(ee[1], ve[1], Ce[1], Pe[1])];
          }
          static inverseTransform(Z) {
            const I = Z[0] * Z[3] - Z[1] * Z[2];
            return [Z[3] / I, -Z[1] / I, -Z[2] / I, Z[0] / I, (Z[2] * Z[5] - Z[4] * Z[3]) / I, (Z[4] * Z[1] - Z[5] * Z[0]) / I];
          }
          static singularValueDecompose2dScale(Z) {
            const I = [Z[0], Z[2], Z[1], Z[3]], ee = Z[0] * I[0] + Z[1] * I[2], ve = Z[0] * I[1] + Z[1] * I[3], Ce = Z[2] * I[0] + Z[3] * I[2], Pe = Z[2] * I[1] + Z[3] * I[3], Le = (ee + Pe) / 2, Re = Math.sqrt((ee + Pe) ** 2 - 4 * (ee * Pe - Ce * ve)) / 2, Fe = Le + Re || 1, Me = Le - Re || 1;
            return [Math.sqrt(Fe), Math.sqrt(Me)];
          }
          static normalizeRect(Z) {
            const I = Z.slice(0);
            return Z[0] > Z[2] && (I[0] = Z[2], I[2] = Z[0]), Z[1] > Z[3] && (I[1] = Z[3], I[3] = Z[1]), I;
          }
          static intersect(Z, I) {
            const ee = Math.max(Math.min(Z[0], Z[2]), Math.min(I[0], I[2])), ve = Math.min(Math.max(Z[0], Z[2]), Math.max(I[0], I[2]));
            if (ee > ve)
              return null;
            const Ce = Math.max(Math.min(Z[1], Z[3]), Math.min(I[1], I[3])), Pe = Math.min(Math.max(Z[1], Z[3]), Math.max(I[1], I[3]));
            return Ce > Pe ? null : [ee, Ce, ve, Pe];
          }
          static bezierBoundingBox(Z, I, ee, ve, Ce, Pe, Le, Re) {
            const Fe = [], Me = [[], []];
            let Ne, qe, We, Ie, Ye, Ke, Je, Qe;
            for (let W = 0; W < 2; ++W) {
              if (W === 0 ? (qe = 6 * Z - 12 * ee + 6 * Ce, Ne = -3 * Z + 9 * ee - 9 * Ce + 3 * Le, We = 3 * ee - 3 * Z) : (qe = 6 * I - 12 * ve + 6 * Pe, Ne = -3 * I + 9 * ve - 9 * Pe + 3 * Re, We = 3 * ve - 3 * I), Math.abs(Ne) < 1e-12) {
                if (Math.abs(qe) < 1e-12)
                  continue;
                Ie = -We / qe, 0 < Ie && Ie < 1 && Fe.push(Ie);
                continue;
              }
              Je = qe * qe - 4 * We * Ne, Qe = Math.sqrt(Je), !(Je < 0) && (Ye = (-qe + Qe) / (2 * Ne), 0 < Ye && Ye < 1 && Fe.push(Ye), Ke = (-qe - Qe) / (2 * Ne), 0 < Ke && Ke < 1 && Fe.push(Ke));
            }
            let Ge = Fe.length, ze;
            const et = Ge;
            for (; Ge--; )
              Ie = Fe[Ge], ze = 1 - Ie, Me[0][Ge] = ze * ze * ze * Z + 3 * ze * ze * Ie * ee + 3 * ze * Ie * Ie * Ce + Ie * Ie * Ie * Le, Me[1][Ge] = ze * ze * ze * I + 3 * ze * ze * Ie * ve + 3 * ze * Ie * Ie * Pe + Ie * Ie * Ie * Re;
            return Me[0][et] = Z, Me[1][et] = I, Me[0][et + 1] = Le, Me[1][et + 1] = Re, Me[0].length = Me[1].length = et + 2, [Math.min(...Me[0]), Math.min(...Me[1]), Math.max(...Me[0]), Math.max(...Me[1])];
          }
        }
        e.Util = te;
        const se = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
        function H(he) {
          if (he[0] >= "\xEF") {
            let I;
            if (he[0] === "\xFE" && he[1] === "\xFF" ? I = "utf-16be" : he[0] === "\xFF" && he[1] === "\xFE" ? I = "utf-16le" : he[0] === "\xEF" && he[1] === "\xBB" && he[2] === "\xBF" && (I = "utf-8"), I)
              try {
                const ee = new TextDecoder(I, {
                  fatal: !0
                }), ve = p(he);
                return ee.decode(ve);
              } catch (ee) {
                we(`stringToPDFString: "${ee}".`);
              }
          }
          const Z = [];
          for (let I = 0, ee = he.length; I < ee; I++) {
            const ve = se[he.charCodeAt(I)];
            Z.push(ve ? String.fromCharCode(ve) : he.charAt(I));
          }
          return Z.join("");
        }
        function re(he) {
          return decodeURIComponent(escape(he));
        }
        function Ae(he) {
          return unescape(encodeURIComponent(he));
        }
        function Te(he) {
          return typeof he == "object" && he !== null && he.byteLength !== void 0;
        }
        function De(he, Z) {
          if (he.length !== Z.length)
            return !1;
          for (let I = 0, ee = he.length; I < ee; I++)
            if (he[I] !== Z[I])
              return !1;
          return !0;
        }
        function Oe(he = new Date()) {
          return [he.getUTCFullYear().toString(), (he.getUTCMonth() + 1).toString().padStart(2, "0"), he.getUTCDate().toString().padStart(2, "0"), he.getUTCHours().toString().padStart(2, "0"), he.getUTCMinutes().toString().padStart(2, "0"), he.getUTCSeconds().toString().padStart(2, "0")].join("");
        }
        function xe() {
          const he = /* @__PURE__ */ Object.create(null);
          let Z = !1;
          return Object.defineProperty(he, "settled", {
            get() {
              return Z;
            }
          }), he.promise = new Promise(function(I, ee) {
            he.resolve = function(ve) {
              Z = !0, I(ve);
            }, he.reject = function(ve) {
              Z = !0, ee(ve);
            };
          }), he;
        }
      },
      (__unused_webpack_module, exports, __w_pdfjs_require__) => {
        var a, n, t, r, S, E, k, F, v, y, x, bt, _, u;
        Object.defineProperty(exports, "__esModule", {
          value: !0
        }), exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, exports.getDocument = getDocument, exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory, exports.version = void 0;
        var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(3), _display_utils = __w_pdfjs_require__(6), _font_loader = __w_pdfjs_require__(9), _canvas = __w_pdfjs_require__(10), _worker_options = __w_pdfjs_require__(14), _is_node = __w_pdfjs_require__(12), _message_handler = __w_pdfjs_require__(15), _metadata = __w_pdfjs_require__(16), _optional_content_config = __w_pdfjs_require__(17), _transport_stream = __w_pdfjs_require__(18), _xfa_text = __w_pdfjs_require__(19);
        const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100;
        let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
        exports.DefaultCanvasFactory = DefaultCanvasFactory;
        let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
        exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
        let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory;
        if (exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory, _is_node.isNodeJS) {
          const {
            NodeCanvasFactory: o,
            NodeCMapReaderFactory: s,
            NodeStandardFontDataFactory: d
          } = __w_pdfjs_require__(20);
          exports.DefaultCanvasFactory = DefaultCanvasFactory = o, exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = s, exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = d;
        }
        let createPDFNetworkStream;
        function setPDFNetworkStreamFactory(o) {
          createPDFNetworkStream = o;
        }
        function getDocument(o) {
          const s = new PDFDocumentLoadingTask();
          let d;
          if (typeof o == "string" || o instanceof URL)
            d = {
              url: o
            };
          else if ((0, _util.isArrayBuffer)(o))
            d = {
              data: o
            };
          else if (o instanceof PDFDataRangeTransport)
            d = {
              range: o
            };
          else {
            if (typeof o != "object")
              throw new Error("Invalid parameter in getDocument, need either string, URL, TypedArray, or parameter object.");
            if (!o.url && !o.data && !o.range)
              throw new Error("Invalid parameter object: need either .data, .range or .url");
            d = o;
          }
          const h = /* @__PURE__ */ Object.create(null);
          let f = null, i = null;
          for (const A in d) {
            const O = d[A];
            switch (A) {
              case "url":
                if (typeof window < "u")
                  try {
                    h[A] = new URL(O, window.location).href;
                    continue;
                  } catch (U) {
                    (0, _util.warn)(`Cannot create valid URL: "${U}".`);
                  }
                else if (typeof O == "string" || O instanceof URL) {
                  h[A] = O.toString();
                  continue;
                }
                throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
              case "range":
                f = O;
                continue;
              case "worker":
                i = O;
                continue;
              case "data":
                if (_is_node.isNodeJS && typeof Buffer < "u" && O instanceof Buffer)
                  h[A] = new Uint8Array(O);
                else {
                  if (O instanceof Uint8Array)
                    break;
                  if (typeof O == "string")
                    h[A] = (0, _util.stringToBytes)(O);
                  else if (typeof O == "object" && O !== null && !isNaN(O.length))
                    h[A] = new Uint8Array(O);
                  else if ((0, _util.isArrayBuffer)(O))
                    h[A] = new Uint8Array(O);
                  else
                    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
                }
                continue;
            }
            h[A] = O;
          }
          if (h.CMapReaderFactory = h.CMapReaderFactory || DefaultCMapReaderFactory, h.StandardFontDataFactory = h.StandardFontDataFactory || DefaultStandardFontDataFactory, h.ignoreErrors = h.stopAtErrors !== !0, h.fontExtraProperties = h.fontExtraProperties === !0, h.pdfBug = h.pdfBug === !0, h.enableXfa = h.enableXfa === !0, (!Number.isInteger(h.rangeChunkSize) || h.rangeChunkSize < 1) && (h.rangeChunkSize = DEFAULT_RANGE_CHUNK_SIZE), (typeof h.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(h.docBaseUrl)) && (h.docBaseUrl = null), (!Number.isInteger(h.maxImageSize) || h.maxImageSize < -1) && (h.maxImageSize = -1), typeof h.cMapUrl != "string" && (h.cMapUrl = null), typeof h.standardFontDataUrl != "string" && (h.standardFontDataUrl = null), typeof h.useWorkerFetch != "boolean" && (h.useWorkerFetch = h.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && h.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory), typeof h.isEvalSupported != "boolean" && (h.isEvalSupported = !0), typeof h.isOffscreenCanvasSupported != "boolean" && (h.isOffscreenCanvasSupported = !_is_node.isNodeJS), typeof h.disableFontFace != "boolean" && (h.disableFontFace = _is_node.isNodeJS), typeof h.useSystemFonts != "boolean" && (h.useSystemFonts = !_is_node.isNodeJS && !h.disableFontFace), (typeof h.ownerDocument != "object" || h.ownerDocument === null) && (h.ownerDocument = globalThis.document), typeof h.disableRange != "boolean" && (h.disableRange = !1), typeof h.disableStream != "boolean" && (h.disableStream = !1), typeof h.disableAutoFetch != "boolean" && (h.disableAutoFetch = !1), (0, _util.setVerbosityLevel)(h.verbosity), !i) {
            const A = {
              verbosity: h.verbosity,
              port: _worker_options.GlobalWorkerOptions.workerPort
            };
            i = A.port ? PDFWorker.fromPort(A) : new PDFWorker(A), s._worker = i;
          }
          const c = s.docId;
          return i.promise.then(function() {
            if (s.destroyed)
              throw new Error("Loading aborted");
            const A = _fetchDocument(i, h, f, c), O = new Promise(function(U) {
              let P;
              f ? P = new _transport_stream.PDFDataTransportStream({
                length: h.length,
                initialData: h.initialData,
                progressiveDone: h.progressiveDone,
                contentDispositionFilename: h.contentDispositionFilename,
                disableRange: h.disableRange,
                disableStream: h.disableStream
              }, f) : h.data || (P = createPDFNetworkStream({
                url: h.url,
                length: h.length,
                httpHeaders: h.httpHeaders,
                withCredentials: h.withCredentials,
                rangeChunkSize: h.rangeChunkSize,
                disableRange: h.disableRange,
                disableStream: h.disableStream
              })), U(P);
            });
            return Promise.all([A, O]).then(function([U, P]) {
              if (s.destroyed)
                throw new Error("Loading aborted");
              const L = new _message_handler.MessageHandler(c, U, i.port), Q = new WorkerTransport(L, s, P, h);
              s._transport = Q, L.send("Ready", null);
            });
          }).catch(s._capability.reject), s;
        }
        async function _fetchDocument(o, s, d, h) {
          if (o.destroyed)
            throw new Error("Worker was destroyed");
          d && (s.length = d.length, s.initialData = d.initialData, s.progressiveDone = d.progressiveDone, s.contentDispositionFilename = d.contentDispositionFilename);
          const f = await o.messageHandler.sendWithPromise("GetDocRequest", {
            docId: h,
            apiVersion: "3.1.81",
            data: s.data,
            password: s.password,
            disableAutoFetch: s.disableAutoFetch,
            rangeChunkSize: s.rangeChunkSize,
            length: s.length,
            docBaseUrl: s.docBaseUrl,
            enableXfa: s.enableXfa,
            evaluatorOptions: {
              maxImageSize: s.maxImageSize,
              disableFontFace: s.disableFontFace,
              ignoreErrors: s.ignoreErrors,
              isEvalSupported: s.isEvalSupported,
              isOffscreenCanvasSupported: s.isOffscreenCanvasSupported,
              fontExtraProperties: s.fontExtraProperties,
              useSystemFonts: s.useSystemFonts,
              cMapUrl: s.useWorkerFetch ? s.cMapUrl : null,
              standardFontDataUrl: s.useWorkerFetch ? s.standardFontDataUrl : null
            }
          });
          if (s.data && (s.data = null), o.destroyed)
            throw new Error("Worker was destroyed");
          return f;
        }
        const e = class {
          constructor() {
            this._capability = (0, _util.createPromiseCapability)(), this._transport = null, this._worker = null, this.docId = `d${mt(e, a)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null;
          }
          get promise() {
            return this._capability.promise;
          }
          async destroy() {
            var s;
            this.destroyed = !0, await ((s = this._transport) == null ? void 0 : s.destroy()), this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
          }
        };
        let PDFDocumentLoadingTask = e;
        a = new WeakMap(), ue(PDFDocumentLoadingTask, a, 0), exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
        class PDFDataRangeTransport {
          constructor(s, d, h = !1, f = null) {
            this.length = s, this.initialData = d, this.progressiveDone = h, this.contentDispositionFilename = f, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = (0, _util.createPromiseCapability)();
          }
          addRangeListener(s) {
            this._rangeListeners.push(s);
          }
          addProgressListener(s) {
            this._progressListeners.push(s);
          }
          addProgressiveReadListener(s) {
            this._progressiveReadListeners.push(s);
          }
          addProgressiveDoneListener(s) {
            this._progressiveDoneListeners.push(s);
          }
          onDataRange(s, d) {
            for (const h of this._rangeListeners)
              h(s, d);
          }
          onDataProgress(s, d) {
            this._readyCapability.promise.then(() => {
              for (const h of this._progressListeners)
                h(s, d);
            });
          }
          onDataProgressiveRead(s) {
            this._readyCapability.promise.then(() => {
              for (const d of this._progressiveReadListeners)
                d(s);
            });
          }
          onDataProgressiveDone() {
            this._readyCapability.promise.then(() => {
              for (const s of this._progressiveDoneListeners)
                s();
            });
          }
          transportReady() {
            this._readyCapability.resolve();
          }
          requestDataRange(s, d) {
            (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
          }
          abort() {
          }
        }
        exports.PDFDataRangeTransport = PDFDataRangeTransport;
        class PDFDocumentProxy {
          constructor(s, d) {
            this._pdfInfo = s, this._transport = d;
          }
          get annotationStorage() {
            return this._transport.annotationStorage;
          }
          get numPages() {
            return this._pdfInfo.numPages;
          }
          get fingerprints() {
            return this._pdfInfo.fingerprints;
          }
          get stats() {
            return this._transport.stats;
          }
          get isPureXfa() {
            return !!this._transport._htmlForXfa;
          }
          get allXfaHtml() {
            return this._transport._htmlForXfa;
          }
          getPage(s) {
            return this._transport.getPage(s);
          }
          getPageIndex(s) {
            return this._transport.getPageIndex(s);
          }
          getDestinations() {
            return this._transport.getDestinations();
          }
          getDestination(s) {
            return this._transport.getDestination(s);
          }
          getPageLabels() {
            return this._transport.getPageLabels();
          }
          getPageLayout() {
            return this._transport.getPageLayout();
          }
          getPageMode() {
            return this._transport.getPageMode();
          }
          getViewerPreferences() {
            return this._transport.getViewerPreferences();
          }
          getOpenAction() {
            return this._transport.getOpenAction();
          }
          getAttachments() {
            return this._transport.getAttachments();
          }
          getJavaScript() {
            return this._transport.getJavaScript();
          }
          getJSActions() {
            return this._transport.getDocJSActions();
          }
          getOutline() {
            return this._transport.getOutline();
          }
          getOptionalContentConfig() {
            return this._transport.getOptionalContentConfig();
          }
          getPermissions() {
            return this._transport.getPermissions();
          }
          getMetadata() {
            return this._transport.getMetadata();
          }
          getMarkInfo() {
            return this._transport.getMarkInfo();
          }
          getData() {
            return this._transport.getData();
          }
          saveDocument() {
            return this._transport.saveDocument();
          }
          getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise;
          }
          cleanup(s = !1) {
            return this._transport.startCleanup(s || this.isPureXfa);
          }
          destroy() {
            return this.loadingTask.destroy();
          }
          get loadingParams() {
            return this._transport.loadingParams;
          }
          get loadingTask() {
            return this._transport.loadingTask;
          }
          getFieldObjects() {
            return this._transport.getFieldObjects();
          }
          hasJSActions() {
            return this._transport.hasJSActions();
          }
          getCalculationOrderIds() {
            return this._transport.getCalculationOrderIds();
          }
        }
        exports.PDFDocumentProxy = PDFDocumentProxy;
        class PDFPageProxy {
          constructor(s, d, h, f, i = !1) {
            this._pageIndex = s, this._pageInfo = d, this._ownerDocument = f, this._transport = h, this._stats = i ? new _display_utils.StatTimer() : null, this._pdfBug = i, this.commonObjs = h.commonObjs, this.objs = new PDFObjects(), this._bitmaps = /* @__PURE__ */ new Set(), this.cleanupAfterRender = !1, this.pendingCleanup = !1, this._intentStates = /* @__PURE__ */ new Map(), this._annotationPromises = /* @__PURE__ */ new Map(), this.destroyed = !1;
          }
          get pageNumber() {
            return this._pageIndex + 1;
          }
          get rotate() {
            return this._pageInfo.rotate;
          }
          get ref() {
            return this._pageInfo.ref;
          }
          get userUnit() {
            return this._pageInfo.userUnit;
          }
          get view() {
            return this._pageInfo.view;
          }
          getViewport({
            scale: s,
            rotation: d = this.rotate,
            offsetX: h = 0,
            offsetY: f = 0,
            dontFlip: i = !1
          } = {}) {
            return new _display_utils.PageViewport({
              viewBox: this.view,
              scale: s,
              rotation: d,
              offsetX: h,
              offsetY: f,
              dontFlip: i
            });
          }
          getAnnotations({
            intent: s = "display"
          } = {}) {
            const d = this._transport.getRenderingIntent(s);
            let h = this._annotationPromises.get(d.cacheKey);
            return h || (h = this._transport.getAnnotations(this._pageIndex, d.renderingIntent), this._annotationPromises.set(d.cacheKey, h)), h;
          }
          getJSActions() {
            return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
          }
          async getXfa() {
            var s;
            return ((s = this._transport._htmlForXfa) == null ? void 0 : s.children[this._pageIndex]) || null;
          }
          render({
            canvasContext: s,
            viewport: d,
            intent: h = "display",
            annotationMode: f = _util.AnnotationMode.ENABLE,
            transform: i = null,
            canvasFactory: c = null,
            background: A = null,
            optionalContentConfigPromise: O = null,
            annotationCanvasMap: U = null,
            pageColors: P = null,
            printAnnotationStorage: L = null
          }) {
            var ae, _e;
            (ae = this._stats) == null || ae.time("Overall");
            const Q = this._transport.getRenderingIntent(h, f, L);
            this.pendingCleanup = !1, O || (O = this._transport.getOptionalContentConfig());
            let de = this._intentStates.get(Q.cacheKey);
            de || (de = /* @__PURE__ */ Object.create(null), this._intentStates.set(Q.cacheKey, de)), de.streamReaderCancelTimeout && (clearTimeout(de.streamReaderCancelTimeout), de.streamReaderCancelTimeout = null);
            const oe = c || new DefaultCanvasFactory({
              ownerDocument: this._ownerDocument
            }), Y = !!(Q.renderingIntent & _util.RenderingIntentFlag.PRINT);
            de.displayReadyCapability || (de.displayReadyCapability = (0, _util.createPromiseCapability)(), de.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: !1,
              separateAnnots: null
            }, (_e = this._stats) == null || _e.time("Page Request"), this._pumpOperatorList(Q));
            const G = (we) => {
              var B, b;
              de.renderTasks.delete(J), (this.cleanupAfterRender || Y) && (this.pendingCleanup = !0), this._tryCleanup(), we ? (J.capability.reject(we), this._abortOperatorList({
                intentState: de,
                reason: we instanceof Error ? we : new Error(we)
              })) : J.capability.resolve(), (B = this._stats) == null || B.timeEnd("Rendering"), (b = this._stats) == null || b.timeEnd("Overall");
            }, J = new InternalRenderTask({
              callback: G,
              params: {
                canvasContext: s,
                viewport: d,
                transform: i,
                background: A
              },
              objs: this.objs,
              commonObjs: this.commonObjs,
              annotationCanvasMap: U,
              operatorList: de.operatorList,
              pageIndex: this._pageIndex,
              canvasFactory: oe,
              useRequestAnimationFrame: !Y,
              pdfBug: this._pdfBug,
              pageColors: P
            });
            (de.renderTasks || (de.renderTasks = /* @__PURE__ */ new Set())).add(J);
            const ne = J.task;
            return Promise.all([de.displayReadyCapability.promise, O]).then(([we, B]) => {
              var b;
              if (this.pendingCleanup) {
                G();
                return;
              }
              (b = this._stats) == null || b.time("Rendering"), J.initializeGraphics({
                transparency: we,
                optionalContentConfig: B
              }), J.operatorListChanged();
            }).catch(G), ne;
          }
          getOperatorList({
            intent: s = "display",
            annotationMode: d = _util.AnnotationMode.ENABLE,
            printAnnotationStorage: h = null
          } = {}) {
            var O;
            function f() {
              c.operatorList.lastChunk && (c.opListReadCapability.resolve(c.operatorList), c.renderTasks.delete(A));
            }
            const i = this._transport.getRenderingIntent(s, d, h, !0);
            let c = this._intentStates.get(i.cacheKey);
            c || (c = /* @__PURE__ */ Object.create(null), this._intentStates.set(i.cacheKey, c));
            let A;
            return c.opListReadCapability || (A = /* @__PURE__ */ Object.create(null), A.operatorListChanged = f, c.opListReadCapability = (0, _util.createPromiseCapability)(), (c.renderTasks || (c.renderTasks = /* @__PURE__ */ new Set())).add(A), c.operatorList = {
              fnArray: [],
              argsArray: [],
              lastChunk: !1,
              separateAnnots: null
            }, (O = this._stats) == null || O.time("Page Request"), this._pumpOperatorList(i)), c.opListReadCapability.promise;
          }
          streamTextContent({
            disableCombineTextItems: s = !1,
            includeMarkedContent: d = !1
          } = {}) {
            return this._transport.messageHandler.sendWithStream("GetTextContent", {
              pageIndex: this._pageIndex,
              combineTextItems: s !== !0,
              includeMarkedContent: d === !0
            }, {
              highWaterMark: 100,
              size(f) {
                return f.items.length;
              }
            });
          }
          getTextContent(s = {}) {
            if (this._transport._htmlForXfa)
              return this.getXfa().then((h) => _xfa_text.XfaText.textContent(h));
            const d = this.streamTextContent(s);
            return new Promise(function(h, f) {
              function i() {
                c.read().then(function({
                  value: O,
                  done: U
                }) {
                  if (U) {
                    h(A);
                    return;
                  }
                  Object.assign(A.styles, O.styles), A.items.push(...O.items), i();
                }, f);
              }
              const c = d.getReader(), A = {
                items: [],
                styles: /* @__PURE__ */ Object.create(null)
              };
              i();
            });
          }
          getStructTree() {
            return this._structTreePromise || (this._structTreePromise = this._transport.getStructTree(this._pageIndex));
          }
          _destroy() {
            this.destroyed = !0;
            const s = [];
            for (const d of this._intentStates.values())
              if (this._abortOperatorList({
                intentState: d,
                reason: new Error("Page was destroyed."),
                force: !0
              }), !d.opListReadCapability)
                for (const h of d.renderTasks)
                  s.push(h.completed), h.cancel();
            this.objs.clear();
            for (const d of this._bitmaps)
              d.close();
            return this._bitmaps.clear(), this._annotationPromises.clear(), this._jsActionsPromise = null, this._structTreePromise = null, this.pendingCleanup = !1, Promise.all(s);
          }
          cleanup(s = !1) {
            return this.pendingCleanup = !0, this._tryCleanup(s);
          }
          _tryCleanup(s = !1) {
            if (!this.pendingCleanup)
              return !1;
            for (const {
              renderTasks: d,
              operatorList: h
            } of this._intentStates.values())
              if (d.size > 0 || !h.lastChunk)
                return !1;
            this._intentStates.clear(), this.objs.clear(), this._annotationPromises.clear(), this._jsActionsPromise = null, this._structTreePromise = null, s && this._stats && (this._stats = new _display_utils.StatTimer());
            for (const d of this._bitmaps)
              d.close();
            return this._bitmaps.clear(), this.pendingCleanup = !1, !0;
          }
          _startRenderPage(s, d) {
            var f, i;
            const h = this._intentStates.get(d);
            !h || ((f = this._stats) == null || f.timeEnd("Page Request"), (i = h.displayReadyCapability) == null || i.resolve(s));
          }
          _renderPageChunk(s, d) {
            for (let h = 0, f = s.length; h < f; h++)
              d.operatorList.fnArray.push(s.fnArray[h]), d.operatorList.argsArray.push(s.argsArray[h]);
            d.operatorList.lastChunk = s.lastChunk, d.operatorList.separateAnnots = s.separateAnnots;
            for (const h of d.renderTasks)
              h.operatorListChanged();
            s.lastChunk && this._tryCleanup();
          }
          _pumpOperatorList({
            renderingIntent: s,
            cacheKey: d,
            annotationStorageMap: h
          }) {
            const i = this._transport.messageHandler.sendWithStream("GetOperatorList", {
              pageIndex: this._pageIndex,
              intent: s,
              cacheKey: d,
              annotationStorage: h
            }).getReader(), c = this._intentStates.get(d);
            c.streamReader = i;
            const A = () => {
              i.read().then(({
                value: O,
                done: U
              }) => {
                if (U) {
                  c.streamReader = null;
                  return;
                }
                this._transport.destroyed || (this._renderPageChunk(O, c), A());
              }, (O) => {
                if (c.streamReader = null, !this._transport.destroyed) {
                  if (c.operatorList) {
                    c.operatorList.lastChunk = !0;
                    for (const U of c.renderTasks)
                      U.operatorListChanged();
                    this._tryCleanup();
                  }
                  if (c.displayReadyCapability)
                    c.displayReadyCapability.reject(O);
                  else if (c.opListReadCapability)
                    c.opListReadCapability.reject(O);
                  else
                    throw O;
                }
              });
            };
            A();
          }
          _abortOperatorList({
            intentState: s,
            reason: d,
            force: h = !1
          }) {
            if (!!s.streamReader) {
              if (!h) {
                if (s.renderTasks.size > 0)
                  return;
                if (d instanceof _display_utils.RenderingCancelledException) {
                  s.streamReaderCancelTimeout = setTimeout(() => {
                    this._abortOperatorList({
                      intentState: s,
                      reason: d,
                      force: !0
                    }), s.streamReaderCancelTimeout = null;
                  }, RENDERING_CANCELLED_TIMEOUT);
                  return;
                }
              }
              if (s.streamReader.cancel(new _util.AbortException(d.message)).catch(() => {
              }), s.streamReader = null, !this._transport.destroyed) {
                for (const [f, i] of this._intentStates)
                  if (i === s) {
                    this._intentStates.delete(f);
                    break;
                  }
                this.cleanup();
              }
            }
          }
          get stats() {
            return this._stats;
          }
        }
        exports.PDFPageProxy = PDFPageProxy;
        class LoopbackPort {
          constructor() {
            ue(this, n, []);
            ue(this, t, Promise.resolve());
          }
          postMessage(s, d) {
            const h = {
              data: structuredClone(s, d)
            };
            C(this, t).then(() => {
              for (const f of C(this, n))
                f.call(this, h);
            });
          }
          addEventListener(s, d) {
            C(this, n).push(d);
          }
          removeEventListener(s, d) {
            const h = C(this, n).indexOf(d);
            C(this, n).splice(h, 1);
          }
          terminate() {
            C(this, n).length = 0;
          }
        }
        n = new WeakMap(), t = new WeakMap(), exports.LoopbackPort = LoopbackPort;
        const PDFWorkerUtil = {
          isWorkerDisabled: !1,
          fallbackWorkerSrc: null,
          fakeWorkerId: 0
        };
        exports.PDFWorkerUtil = PDFWorkerUtil;
        {
          if (_is_node.isNodeJS && typeof commonjsRequire == "function")
            PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
          else if (typeof document == "object") {
            const o = (r = document == null ? void 0 : document.currentScript) == null ? void 0 : r.src;
            o && (PDFWorkerUtil.fallbackWorkerSrc = o.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
          }
          PDFWorkerUtil.isSameOrigin = function(o, s) {
            let d;
            try {
              if (d = new URL(o), !d.origin || d.origin === "null")
                return !1;
            } catch {
              return !1;
            }
            const h = new URL(s, d);
            return d.origin === h.origin;
          }, PDFWorkerUtil.createCDNWrapper = function(o) {
            const s = `importScripts("${o}");`;
            return URL.createObjectURL(new Blob([s]));
          };
        }
        const _PDFWorker = class {
          constructor({
            name: o = null,
            port: s = null,
            verbosity: d = (0, _util.getVerbosityLevel)()
          } = {}) {
            if (s && C(_PDFWorker, S).has(s))
              throw new Error("Cannot use more than one PDFWorker per port.");
            if (this.name = o, this.destroyed = !1, this.verbosity = d, this._readyCapability = (0, _util.createPromiseCapability)(), this._port = null, this._webWorker = null, this._messageHandler = null, s) {
              C(_PDFWorker, S).set(s, this), this._initializeFromPort(s);
              return;
            }
            this._initialize();
          }
          get promise() {
            return this._readyCapability.promise;
          }
          get port() {
            return this._port;
          }
          get messageHandler() {
            return this._messageHandler;
          }
          _initializeFromPort(o) {
            this._port = o, this._messageHandler = new _message_handler.MessageHandler("main", "worker", o), this._messageHandler.on("ready", function() {
            }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
              verbosity: this.verbosity
            });
          }
          _initialize() {
            if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
              let {
                workerSrc: o
              } = _PDFWorker;
              try {
                PDFWorkerUtil.isSameOrigin(window.location.href, o) || (o = PDFWorkerUtil.createCDNWrapper(new URL(o, window.location).href));
                const s = new Worker(o), d = new _message_handler.MessageHandler("main", "worker", s), h = () => {
                  s.removeEventListener("error", f), d.destroy(), s.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                }, f = () => {
                  this._webWorker || h();
                };
                s.addEventListener("error", f), d.on("test", (c) => {
                  if (s.removeEventListener("error", f), this.destroyed) {
                    h();
                    return;
                  }
                  c ? (this._messageHandler = d, this._port = s, this._webWorker = s, this._readyCapability.resolve(), d.send("configure", {
                    verbosity: this.verbosity
                  })) : (this._setupFakeWorker(), d.destroy(), s.terminate());
                }), d.on("ready", (c) => {
                  if (s.removeEventListener("error", f), this.destroyed) {
                    h();
                    return;
                  }
                  try {
                    i();
                  } catch {
                    this._setupFakeWorker();
                  }
                });
                const i = () => {
                  const c = new Uint8Array();
                  d.send("test", c, [c.buffer]);
                };
                i();
                return;
              } catch {
                (0, _util.info)("The worker has been disabled.");
              }
            }
            this._setupFakeWorker();
          }
          _setupFakeWorker() {
            PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((o) => {
              if (this.destroyed) {
                this._readyCapability.reject(new Error("Worker was destroyed"));
                return;
              }
              const s = new LoopbackPort();
              this._port = s;
              const d = `fake${PDFWorkerUtil.fakeWorkerId++}`, h = new _message_handler.MessageHandler(d + "_worker", d, s);
              o.setup(h, s);
              const f = new _message_handler.MessageHandler(d, d + "_worker", s);
              this._messageHandler = f, this._readyCapability.resolve(), f.send("configure", {
                verbosity: this.verbosity
              });
            }).catch((o) => {
              this._readyCapability.reject(new Error(`Setting up fake worker failed: "${o.message}".`));
            });
          }
          destroy() {
            this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), C(_PDFWorker, S).delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
          }
          static fromPort(o) {
            if (!(o != null && o.port))
              throw new Error("PDFWorker.fromPort - invalid method signature.");
            return C(this, S).has(o.port) ? C(this, S).get(o.port) : new _PDFWorker(o);
          }
          static get workerSrc() {
            if (_worker_options.GlobalWorkerOptions.workerSrc)
              return _worker_options.GlobalWorkerOptions.workerSrc;
            if (PDFWorkerUtil.fallbackWorkerSrc !== null)
              return _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
            throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
          }
          static get _mainThreadWorkerMessageHandler() {
            var o;
            try {
              return ((o = globalThis.pdfjsWorker) == null ? void 0 : o.WorkerMessageHandler) || null;
            } catch {
              return null;
            }
          }
          static get _setupFakeWorkerGlobal() {
            const loader = async () => {
              const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
              if (mainWorkerMessageHandler)
                return mainWorkerMessageHandler;
              if (_is_node.isNodeJS && typeof commonjsRequire == "function") {
                const worker = eval("require")(this.workerSrc);
                return worker.WorkerMessageHandler;
              }
              return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
            };
            return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
          }
        };
        let PDFWorker = _PDFWorker;
        S = new WeakMap(), ue(PDFWorker, S, /* @__PURE__ */ new WeakMap()), exports.PDFWorker = PDFWorker;
        class WorkerTransport {
          constructor(s, d, h, f) {
            ue(this, E, null);
            ue(this, k, /* @__PURE__ */ new Map());
            ue(this, F, /* @__PURE__ */ new Map());
            ue(this, v, null);
            this.messageHandler = s, this.loadingTask = d, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              ownerDocument: f.ownerDocument,
              styleElement: f.styleElement
            }), this._params = f, f.useWorkerFetch || (this.CMapReaderFactory = new f.CMapReaderFactory({
              baseUrl: f.cMapUrl,
              isCompressed: f.cMapPacked
            }), this.StandardFontDataFactory = new f.StandardFontDataFactory({
              baseUrl: f.standardFontDataUrl
            })), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = h, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = (0, _util.createPromiseCapability)(), this.setupMessageHandler();
          }
          get annotationStorage() {
            return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
          }
          get stats() {
            return C(this, E);
          }
          getRenderingIntent(s, d = _util.AnnotationMode.ENABLE, h = null, f = !1) {
            let i = _util.RenderingIntentFlag.DISPLAY, c = null;
            switch (s) {
              case "any":
                i = _util.RenderingIntentFlag.ANY;
                break;
              case "display":
                break;
              case "print":
                i = _util.RenderingIntentFlag.PRINT;
                break;
              default:
                (0, _util.warn)(`getRenderingIntent - invalid intent: ${s}`);
            }
            switch (d) {
              case _util.AnnotationMode.DISABLE:
                i += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                break;
              case _util.AnnotationMode.ENABLE:
                break;
              case _util.AnnotationMode.ENABLE_FORMS:
                i += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                break;
              case _util.AnnotationMode.ENABLE_STORAGE:
                i += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, c = (i & _util.RenderingIntentFlag.PRINT && h instanceof _annotation_storage.PrintAnnotationStorage ? h : this.annotationStorage).serializable;
                break;
              default:
                (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${d}`);
            }
            return f && (i += _util.RenderingIntentFlag.OPLIST), {
              renderingIntent: i,
              cacheKey: `${i}_${_annotation_storage.AnnotationStorage.getHash(c)}`,
              annotationStorageMap: c
            };
          }
          destroy() {
            if (this.destroyCapability)
              return this.destroyCapability.promise;
            this.destroyed = !0, this.destroyCapability = (0, _util.createPromiseCapability)(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
            const s = [];
            for (const h of C(this, k).values())
              s.push(h._destroy());
            C(this, k).clear(), C(this, F).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
            const d = this.messageHandler.sendWithPromise("Terminate", null);
            return s.push(d), Promise.all(s).then(() => {
              this.commonObjs.clear(), this.fontLoader.clear(), Se(this, v, null), this._getFieldObjectsPromise = null, this._hasJSActionsPromise = null, this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
            }, this.destroyCapability.reject), this.destroyCapability.promise;
          }
          setupMessageHandler() {
            const {
              messageHandler: s,
              loadingTask: d
            } = this;
            s.on("GetReader", (h, f) => {
              (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (i) => {
                this._lastProgress = {
                  loaded: i.loaded,
                  total: i.total
                };
              }, f.onPull = () => {
                this._fullReader.read().then(function({
                  value: i,
                  done: c
                }) {
                  if (c) {
                    f.close();
                    return;
                  }
                  (0, _util.assert)((0, _util.isArrayBuffer)(i), "GetReader - expected an ArrayBuffer."), f.enqueue(new Uint8Array(i), 1, [i]);
                }).catch((i) => {
                  f.error(i);
                });
              }, f.onCancel = (i) => {
                this._fullReader.cancel(i), f.ready.catch((c) => {
                  if (!this.destroyed)
                    throw c;
                });
              };
            }), s.on("ReaderHeadersReady", (h) => {
              const f = (0, _util.createPromiseCapability)(), i = this._fullReader;
              return i.headersReady.then(() => {
                var c;
                (!i.isStreamingSupported || !i.isRangeSupported) && (this._lastProgress && ((c = d.onProgress) == null || c.call(d, this._lastProgress)), i.onProgress = (A) => {
                  var O;
                  (O = d.onProgress) == null || O.call(d, {
                    loaded: A.loaded,
                    total: A.total
                  });
                }), f.resolve({
                  isStreamingSupported: i.isStreamingSupported,
                  isRangeSupported: i.isRangeSupported,
                  contentLength: i.contentLength
                });
              }, f.reject), f.promise;
            }), s.on("GetRangeReader", (h, f) => {
              (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
              const i = this._networkStream.getRangeReader(h.begin, h.end);
              if (!i) {
                f.close();
                return;
              }
              f.onPull = () => {
                i.read().then(function({
                  value: c,
                  done: A
                }) {
                  if (A) {
                    f.close();
                    return;
                  }
                  (0, _util.assert)((0, _util.isArrayBuffer)(c), "GetRangeReader - expected an ArrayBuffer."), f.enqueue(new Uint8Array(c), 1, [c]);
                }).catch((c) => {
                  f.error(c);
                });
              }, f.onCancel = (c) => {
                i.cancel(c), f.ready.catch((A) => {
                  if (!this.destroyed)
                    throw A;
                });
              };
            }), s.on("GetDoc", ({
              pdfInfo: h
            }) => {
              this._numPages = h.numPages, this._htmlForXfa = h.htmlForXfa, delete h.htmlForXfa, d._capability.resolve(new PDFDocumentProxy(h, this));
            }), s.on("DocException", function(h) {
              let f;
              switch (h.name) {
                case "PasswordException":
                  f = new _util.PasswordException(h.message, h.code);
                  break;
                case "InvalidPDFException":
                  f = new _util.InvalidPDFException(h.message);
                  break;
                case "MissingPDFException":
                  f = new _util.MissingPDFException(h.message);
                  break;
                case "UnexpectedResponseException":
                  f = new _util.UnexpectedResponseException(h.message, h.status);
                  break;
                case "UnknownErrorException":
                  f = new _util.UnknownErrorException(h.message, h.details);
                  break;
                default:
                  (0, _util.unreachable)("DocException - expected a valid Error.");
              }
              d._capability.reject(f);
            }), s.on("PasswordRequest", (h) => {
              if (this._passwordCapability = (0, _util.createPromiseCapability)(), d.onPassword) {
                const f = (i) => {
                  i instanceof Error ? this._passwordCapability.reject(i) : this._passwordCapability.resolve({
                    password: i
                  });
                };
                try {
                  d.onPassword(f, h.code);
                } catch (i) {
                  this._passwordCapability.reject(i);
                }
              } else
                this._passwordCapability.reject(new _util.PasswordException(h.message, h.code));
              return this._passwordCapability.promise;
            }), s.on("DataLoaded", (h) => {
              var f;
              (f = d.onProgress) == null || f.call(d, {
                loaded: h.length,
                total: h.length
              }), this.downloadInfoCapability.resolve(h);
            }), s.on("StartRenderPage", (h) => {
              if (this.destroyed)
                return;
              C(this, k).get(h.pageIndex)._startRenderPage(h.transparency, h.cacheKey);
            }), s.on("commonobj", ([h, f, i]) => {
              var c;
              if (!this.destroyed && !this.commonObjs.has(h))
                switch (f) {
                  case "Font":
                    const A = this._params;
                    if ("error" in i) {
                      const P = i.error;
                      (0, _util.warn)(`Error during font loading: ${P}`), this.commonObjs.resolve(h, P);
                      break;
                    }
                    let O = null;
                    A.pdfBug && ((c = globalThis.FontInspector) == null ? void 0 : c.enabled) && (O = {
                      registerFont(P, L) {
                        globalThis.FontInspector.fontAdded(P, L);
                      }
                    });
                    const U = new _font_loader.FontFaceObject(i, {
                      isEvalSupported: A.isEvalSupported,
                      disableFontFace: A.disableFontFace,
                      ignoreErrors: A.ignoreErrors,
                      onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                      fontRegistry: O
                    });
                    this.fontLoader.bind(U).catch((P) => s.sendWithPromise("FontFallback", {
                      id: h
                    })).finally(() => {
                      !A.fontExtraProperties && U.data && (U.data = null), this.commonObjs.resolve(h, U);
                    });
                    break;
                  case "FontPath":
                  case "Image":
                    this.commonObjs.resolve(h, i);
                    break;
                  default:
                    throw new Error(`Got unknown common object type ${f}`);
                }
            }), s.on("obj", ([h, f, i, c]) => {
              var O;
              if (this.destroyed)
                return;
              const A = C(this, k).get(f);
              if (!A.objs.has(h))
                switch (i) {
                  case "Image":
                    A.objs.resolve(h, c);
                    const U = 8e6;
                    if (c) {
                      let P;
                      if (c.bitmap) {
                        const {
                          bitmap: L,
                          width: Q,
                          height: de
                        } = c;
                        P = Q * de * 4, A._bitmaps.add(L);
                      } else
                        P = ((O = c.data) == null ? void 0 : O.length) || 0;
                      P > U && (A.cleanupAfterRender = !0);
                    }
                    break;
                  case "Pattern":
                    A.objs.resolve(h, c);
                    break;
                  default:
                    throw new Error(`Got unknown object type ${i}`);
                }
            }), s.on("DocProgress", (h) => {
              var f;
              this.destroyed || (f = d.onProgress) == null || f.call(d, {
                loaded: h.loaded,
                total: h.total
              });
            }), s.on("DocStats", (h) => {
              this.destroyed || Se(this, E, Object.freeze({
                streamTypes: Object.freeze(h.streamTypes),
                fontTypes: Object.freeze(h.fontTypes)
              }));
            }), s.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this)), s.on("FetchBuiltInCMap", (h) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.CMapReaderFactory ? this.CMapReaderFactory.fetch(h) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), s.on("FetchStandardFontData", (h) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.StandardFontDataFactory ? this.StandardFontDataFactory.fetch(h) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
          }
          _onUnsupportedFeature({
            featureId: s
          }) {
            var d, h;
            this.destroyed || (h = (d = this.loadingTask).onUnsupportedFeature) == null || h.call(d, s);
          }
          getData() {
            return this.messageHandler.sendWithPromise("GetData", null);
          }
          saveDocument() {
            var s, d;
            return this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead."), this.messageHandler.sendWithPromise("SaveDocument", {
              isPureXfa: !!this._htmlForXfa,
              numPages: this._numPages,
              annotationStorage: this.annotationStorage.serializable,
              filename: (d = (s = this._fullReader) == null ? void 0 : s.filename) != null ? d : null
            }).finally(() => {
              this.annotationStorage.resetModified();
            });
          }
          getPage(s) {
            if (!Number.isInteger(s) || s <= 0 || s > this._numPages)
              return Promise.reject(new Error("Invalid page request."));
            const d = s - 1, h = C(this, F).get(d);
            if (h)
              return h;
            const f = this.messageHandler.sendWithPromise("GetPage", {
              pageIndex: d
            }).then((i) => {
              if (this.destroyed)
                throw new Error("Transport destroyed");
              const c = new PDFPageProxy(d, i, this, this._params.ownerDocument, this._params.pdfBug);
              return C(this, k).set(d, c), c;
            });
            return C(this, F).set(d, f), f;
          }
          getPageIndex(s) {
            return typeof s != "object" || s === null || !Number.isInteger(s.num) || s.num < 0 || !Number.isInteger(s.gen) || s.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
              num: s.num,
              gen: s.gen
            });
          }
          getAnnotations(s, d) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
              pageIndex: s,
              intent: d
            });
          }
          getFieldObjects() {
            return this._getFieldObjectsPromise || (this._getFieldObjectsPromise = this.messageHandler.sendWithPromise("GetFieldObjects", null));
          }
          hasJSActions() {
            return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
          }
          getCalculationOrderIds() {
            return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
          }
          getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
          }
          getDestination(s) {
            return typeof s != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
              id: s
            });
          }
          getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
          }
          getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
          }
          getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
          }
          getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
          }
          getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
          }
          getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
          }
          getJavaScript() {
            return this.messageHandler.sendWithPromise("GetJavaScript", null);
          }
          getDocJSActions() {
            return this.messageHandler.sendWithPromise("GetDocJSActions", null);
          }
          getPageJSActions(s) {
            return this.messageHandler.sendWithPromise("GetPageJSActions", {
              pageIndex: s
            });
          }
          getStructTree(s) {
            return this.messageHandler.sendWithPromise("GetStructTree", {
              pageIndex: s
            });
          }
          getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
          }
          getOptionalContentConfig() {
            return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((s) => new _optional_content_config.OptionalContentConfig(s));
          }
          getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
          }
          getMetadata() {
            return C(this, v) || Se(this, v, this.messageHandler.sendWithPromise("GetMetadata", null).then((s) => {
              var d, h, f, i;
              return {
                info: s[0],
                metadata: s[1] ? new _metadata.Metadata(s[1]) : null,
                contentDispositionFilename: (h = (d = this._fullReader) == null ? void 0 : d.filename) != null ? h : null,
                contentLength: (i = (f = this._fullReader) == null ? void 0 : f.contentLength) != null ? i : null
              };
            }));
          }
          getMarkInfo() {
            return this.messageHandler.sendWithPromise("GetMarkInfo", null);
          }
          async startCleanup(s = !1) {
            if (!this.destroyed) {
              await this.messageHandler.sendWithPromise("Cleanup", null);
              for (const d of C(this, k).values())
                if (!d.cleanup())
                  throw new Error(`startCleanup: Page ${d.pageNumber} is currently rendering.`);
              this.commonObjs.clear(), s || this.fontLoader.clear(), Se(this, v, null), this._getFieldObjectsPromise = null, this._hasJSActionsPromise = null;
            }
          }
          get loadingParams() {
            const s = this._params;
            return (0, _util.shadow)(this, "loadingParams", {
              disableAutoFetch: s.disableAutoFetch,
              enableXfa: s.enableXfa
            });
          }
        }
        E = new WeakMap(), k = new WeakMap(), F = new WeakMap(), v = new WeakMap();
        class PDFObjects {
          constructor() {
            ue(this, x);
            ue(this, y, /* @__PURE__ */ Object.create(null));
          }
          get(s, d = null) {
            if (d) {
              const f = me(this, x, bt).call(this, s);
              return f.capability.promise.then(() => d(f.data)), null;
            }
            const h = C(this, y)[s];
            if (!(h != null && h.capability.settled))
              throw new Error(`Requesting object that isn't resolved yet ${s}.`);
            return h.data;
          }
          has(s) {
            const d = C(this, y)[s];
            return (d == null ? void 0 : d.capability.settled) || !1;
          }
          resolve(s, d = null) {
            const h = me(this, x, bt).call(this, s);
            h.data = d, h.capability.resolve();
          }
          clear() {
            Se(this, y, /* @__PURE__ */ Object.create(null));
          }
        }
        y = new WeakMap(), x = new WeakSet(), bt = function(s) {
          const d = C(this, y)[s];
          return d || (C(this, y)[s] = {
            capability: (0, _util.createPromiseCapability)(),
            data: null
          });
        };
        class RenderTask {
          constructor(s) {
            ue(this, _, null);
            Se(this, _, s), this.onContinue = null;
          }
          get promise() {
            return C(this, _).capability.promise;
          }
          cancel() {
            C(this, _).cancel();
          }
          get separateAnnots() {
            const {
              separateAnnots: s
            } = C(this, _).operatorList;
            if (!s)
              return !1;
            const {
              annotationCanvasMap: d
            } = C(this, _);
            return s.form || s.canvas && (d == null ? void 0 : d.size) > 0;
          }
        }
        _ = new WeakMap(), exports.RenderTask = RenderTask;
        const l = class {
          constructor({
            callback: s,
            params: d,
            objs: h,
            commonObjs: f,
            annotationCanvasMap: i,
            operatorList: c,
            pageIndex: A,
            canvasFactory: O,
            useRequestAnimationFrame: U = !1,
            pdfBug: P = !1,
            pageColors: L = null
          }) {
            this.callback = s, this.params = d, this.objs = h, this.commonObjs = f, this.annotationCanvasMap = i, this.operatorListIdx = null, this.operatorList = c, this._pageIndex = A, this.canvasFactory = O, this._pdfBug = P, this.pageColors = L, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = U === !0 && typeof window < "u", this.cancelled = !1, this.capability = (0, _util.createPromiseCapability)(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = d.canvasContext.canvas;
          }
          get completed() {
            return this.capability.promise.catch(function() {
            });
          }
          initializeGraphics({
            transparency: s = !1,
            optionalContentConfig: d
          }) {
            var A, O;
            if (this.cancelled)
              return;
            if (this._canvas) {
              if (C(l, u).has(this._canvas))
                throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
              C(l, u).add(this._canvas);
            }
            this._pdfBug && ((A = globalThis.StepperManager) == null ? void 0 : A.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
            const {
              canvasContext: h,
              viewport: f,
              transform: i,
              background: c
            } = this.params;
            this.gfx = new _canvas.CanvasGraphics(h, this.commonObjs, this.objs, this.canvasFactory, {
              optionalContentConfig: d
            }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
              transform: i,
              viewport: f,
              transparency: s,
              background: c
            }), this.operatorListIdx = 0, this.graphicsReady = !0, (O = this.graphicsReadyCallback) == null || O.call(this);
          }
          cancel(s = null) {
            var d;
            this.running = !1, this.cancelled = !0, (d = this.gfx) == null || d.endDrawing(), this._canvas && C(l, u).delete(this._canvas), this.callback(s || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"));
          }
          operatorListChanged() {
            var s;
            if (!this.graphicsReady) {
              this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
              return;
            }
            (s = this.stepper) == null || s.updateOperatorList(this.operatorList), !this.running && this._continue();
          }
          _continue() {
            this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
          }
          _scheduleNext() {
            this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
              this._nextBound().catch(this._cancelBound);
            }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
          }
          async _next() {
            this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this._canvas && C(l, u).delete(this._canvas), this.callback())));
          }
        };
        let InternalRenderTask = l;
        u = new WeakMap(), ue(InternalRenderTask, u, /* @__PURE__ */ new WeakSet());
        const version = "3.1.81";
        exports.version = version;
        const build = "0766898d5";
        exports.build = build;
      },
      (a, e, n) => {
        var F, v, y, Lt, m;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
        var t = n(1), r = n(4), S = n(8);
        class E {
          constructor() {
            ue(this, y);
            ue(this, F, !1);
            ue(this, v, /* @__PURE__ */ new Map());
            this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
          }
          getValue(u, l) {
            const o = C(this, v).get(u);
            return o === void 0 ? l : Object.assign(l, o);
          }
          getRawValue(u) {
            return C(this, v).get(u);
          }
          remove(u) {
            if (C(this, v).delete(u), C(this, v).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
              for (const l of C(this, v).values())
                if (l instanceof r.AnnotationEditor)
                  return;
              this.onAnnotationEditor(null);
            }
          }
          setValue(u, l) {
            const o = C(this, v).get(u);
            let s = !1;
            if (o !== void 0)
              for (const [d, h] of Object.entries(l))
                o[d] !== h && (s = !0, o[d] = h);
            else
              s = !0, C(this, v).set(u, l);
            s && me(this, y, Lt).call(this), l instanceof r.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(l.constructor._type);
          }
          has(u) {
            return C(this, v).has(u);
          }
          getAll() {
            return C(this, v).size > 0 ? (0, t.objectFromMap)(C(this, v)) : null;
          }
          get size() {
            return C(this, v).size;
          }
          resetModified() {
            C(this, F) && (Se(this, F, !1), typeof this.onResetModified == "function" && this.onResetModified());
          }
          get print() {
            return new k(this);
          }
          get serializable() {
            if (C(this, v).size === 0)
              return null;
            const u = /* @__PURE__ */ new Map();
            for (const [l, o] of C(this, v)) {
              const s = o instanceof r.AnnotationEditor ? o.serialize() : o;
              s && u.set(l, s);
            }
            return u;
          }
          static getHash(u) {
            if (!u)
              return "";
            const l = new S.MurmurHash3_64();
            for (const [o, s] of u)
              l.update(`${o}:${JSON.stringify(s)}`);
            return l.hexdigest();
          }
        }
        F = new WeakMap(), v = new WeakMap(), y = new WeakSet(), Lt = function() {
          C(this, F) || (Se(this, F, !0), typeof this.onSetModified == "function" && this.onSetModified());
        }, e.AnnotationStorage = E;
        class k extends E {
          constructor(l) {
            super();
            ue(this, m, null);
            Se(this, m, structuredClone(l.serializable));
          }
          get print() {
            (0, t.unreachable)("Should not call PrintAnnotationStorage.print");
          }
          get serializable() {
            return C(this, m);
          }
        }
        m = new WeakMap(), e.PrintAnnotationStorage = k;
      },
      (a, e, n) => {
        var E, k, F, v, y, x;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.AnnotationEditor = void 0;
        var t = n(5), r = n(1);
        const m = class {
          constructor(u) {
            ue(this, E, this.focusin.bind(this));
            ue(this, k, this.focusout.bind(this));
            ue(this, F, !1);
            ue(this, v, !1);
            ue(this, y, !1);
            ue(this, x, m._zIndex++);
            this.constructor === m && (0, r.unreachable)("Cannot initialize AnnotationEditor."), this.parent = u.parent, this.id = u.id, this.width = this.height = null, this.pageIndex = u.parent.pageIndex, this.name = u.name, this.div = null;
            const [l, o] = this.parent.viewportBaseDimensions;
            this.x = u.x / l, this.y = u.y / o, this.rotation = this.parent.viewport.rotation, this.isAttachedToDOM = !1;
          }
          static get _defaultLineColor() {
            return (0, r.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
          }
          setInBackground() {
            this.div.style.zIndex = 0;
          }
          setInForeground() {
            this.div.style.zIndex = C(this, x);
          }
          focusin(u) {
            C(this, F) ? Se(this, F, !1) : this.parent.setSelected(this);
          }
          focusout(u) {
            if (!this.isAttachedToDOM)
              return;
            const l = u.relatedTarget;
            l != null && l.closest(`#${this.id}`) || (u.preventDefault(), this.parent.isMultipleSelection || this.commitOrRemove());
          }
          commitOrRemove() {
            this.isEmpty() ? this.remove() : this.commit();
          }
          commit() {
            this.parent.addToAnnotationStorage(this);
          }
          dragstart(u) {
            const l = this.parent.div.getBoundingClientRect();
            this.startX = u.clientX - l.x, this.startY = u.clientY - l.y, u.dataTransfer.setData("text/plain", this.id), u.dataTransfer.effectAllowed = "move";
          }
          setAt(u, l, o, s) {
            const [d, h] = this.parent.viewportBaseDimensions;
            [o, s] = this.screenToPageTranslation(o, s), this.x = (u + o) / d, this.y = (l + s) / h, this.div.style.left = `${100 * this.x}%`, this.div.style.top = `${100 * this.y}%`;
          }
          translate(u, l) {
            const [o, s] = this.parent.viewportBaseDimensions;
            [u, l] = this.screenToPageTranslation(u, l), this.x += u / o, this.y += l / s, this.div.style.left = `${100 * this.x}%`, this.div.style.top = `${100 * this.y}%`;
          }
          screenToPageTranslation(u, l) {
            const {
              rotation: o
            } = this.parent.viewport;
            switch (o) {
              case 90:
                return [l, -u];
              case 180:
                return [-u, -l];
              case 270:
                return [-l, u];
              default:
                return [u, l];
            }
          }
          setDims(u, l) {
            const [o, s] = this.parent.viewportBaseDimensions;
            this.div.style.width = `${100 * u / o}%`, this.div.style.height = `${100 * l / s}%`;
          }
          fixDims() {
            const {
              style: u
            } = this.div, {
              height: l,
              width: o
            } = u, s = o.endsWith("%"), d = l.endsWith("%");
            if (s && d)
              return;
            const [h, f] = this.parent.viewportBaseDimensions;
            s || (u.width = `${100 * parseFloat(o) / h}%`), d || (u.height = `${100 * parseFloat(l) / f}%`);
          }
          getInitialTranslation() {
            return [0, 0];
          }
          render() {
            this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", C(this, E)), this.div.addEventListener("focusout", C(this, k));
            const [u, l] = this.getInitialTranslation();
            return this.translate(u, l), (0, t.bindEvents)(this, this.div, ["dragstart", "pointerdown"]), this.div;
          }
          pointerdown(u) {
            const l = t.KeyboardManager.platform.isMac;
            if (u.button !== 0 || u.ctrlKey && l) {
              u.preventDefault();
              return;
            }
            u.ctrlKey && !l || u.shiftKey || u.metaKey && l ? this.parent.toggleSelected(this) : this.parent.setSelected(this), Se(this, F, !0);
          }
          getRect(u, l) {
            const [o, s] = this.parent.viewportBaseDimensions, [d, h] = this.parent.pageDimensions, f = d * u / o, i = h * l / s, c = this.x * d, A = this.y * h, O = this.width * d, U = this.height * h;
            switch (this.rotation) {
              case 0:
                return [c + f, h - A - i - U, c + f + O, h - A - i];
              case 90:
                return [c + i, h - A + f, c + i + U, h - A + f + O];
              case 180:
                return [c - f - O, h - A + i, c - f, h - A + i + U];
              case 270:
                return [c - i - U, h - A - f - O, c - i, h - A - f];
              default:
                throw new Error("Invalid rotation");
            }
          }
          getRectInCurrentCoords(u, l) {
            const [o, s, d, h] = u, f = d - o, i = h - s;
            switch (this.rotation) {
              case 0:
                return [o, l - h, f, i];
              case 90:
                return [o, l - s, i, f];
              case 180:
                return [d, l - s, f, i];
              case 270:
                return [d, l - h, i, f];
              default:
                throw new Error("Invalid rotation");
            }
          }
          onceAdded() {
          }
          isEmpty() {
            return !1;
          }
          enableEditMode() {
            Se(this, y, !0);
          }
          disableEditMode() {
            Se(this, y, !1);
          }
          isInEditMode() {
            return C(this, y);
          }
          shouldGetKeyboardEvents() {
            return !1;
          }
          needsToBeRebuilt() {
            return this.div && !this.isAttachedToDOM;
          }
          rebuild() {
            var u;
            (u = this.div) == null || u.addEventListener("focusin", C(this, E));
          }
          serialize() {
            (0, r.unreachable)("An editor must be serializable");
          }
          static deserialize(u, l) {
            const o = new this.prototype.constructor({
              parent: l,
              id: l.getNextId()
            });
            o.rotation = u.rotation;
            const [s, d] = l.pageDimensions, [h, f, i, c] = o.getRectInCurrentCoords(u.rect, d);
            return o.x = h / s, o.y = f / d, o.width = i / s, o.height = c / d, o;
          }
          remove() {
            this.div.removeEventListener("focusin", C(this, E)), this.div.removeEventListener("focusout", C(this, k)), this.isEmpty() || this.commit(), this.parent.remove(this);
          }
          select() {
            var u;
            (u = this.div) == null || u.classList.add("selectedEditor");
          }
          unselect() {
            var u;
            (u = this.div) == null || u.classList.remove("selectedEditor");
          }
          updateParams(u, l) {
          }
          disableEditing() {
          }
          enableEditing() {
          }
          get propertiesToUpdate() {
            return {};
          }
          get contentDiv() {
            return this.div;
          }
          get isEditing() {
            return C(this, v);
          }
          set isEditing(u) {
            Se(this, v, u), u ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null);
          }
        };
        let S = m;
        E = new WeakMap(), k = new WeakMap(), F = new WeakMap(), v = new WeakMap(), y = new WeakMap(), x = new WeakMap(), He(S, "_colorManager", new t.ColorManager()), He(S, "_zIndex", 1), e.AnnotationEditor = S;
      },
      (a, e, n) => {
        var m, _, u, l, o, s, Nt, i, c, A, O, U, P, L, Q, de, oe, Y, G, J, ne, ae, _e, we, B, b, g, jt, N, vt, V, Ut, $, Bt, K, nt, ie, ct, p, Wt, D, Vt, M, _t, ce, ut, q, yt;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0, e.bindEvents = S, e.opacityToHex = E;
        var t = n(1), r = n(6);
        function S(se, H, re) {
          for (const Ae of re)
            H.addEventListener(Ae, se[Ae].bind(se));
        }
        function E(se) {
          return Math.round(Math.min(255, Math.max(1, 255 * se))).toString(16).padStart(2, "0");
        }
        class k {
          constructor() {
            ue(this, m, 0);
          }
          getId() {
            return `${t.AnnotationEditorPrefix}${mt(this, m)._++}`;
          }
        }
        m = new WeakMap();
        class F {
          constructor(H = 128) {
            ue(this, _, []);
            ue(this, u, !1);
            ue(this, l, void 0);
            ue(this, o, -1);
            Se(this, l, H);
          }
          add({
            cmd: H,
            undo: re,
            mustExec: Ae,
            type: Te = NaN,
            overwriteIfSameType: De = !1,
            keepUndo: Oe = !1
          }) {
            if (Ae && H(), C(this, u))
              return;
            const xe = {
              cmd: H,
              undo: re,
              type: Te
            };
            if (C(this, o) === -1) {
              C(this, _).length > 0 && (C(this, _).length = 0), Se(this, o, 0), C(this, _).push(xe);
              return;
            }
            if (De && C(this, _)[C(this, o)].type === Te) {
              Oe && (xe.undo = C(this, _)[C(this, o)].undo), C(this, _)[C(this, o)] = xe;
              return;
            }
            const he = C(this, o) + 1;
            he === C(this, l) ? C(this, _).splice(0, 1) : (Se(this, o, he), he < C(this, _).length && C(this, _).splice(he)), C(this, _).push(xe);
          }
          undo() {
            C(this, o) !== -1 && (Se(this, u, !0), C(this, _)[C(this, o)].undo(), Se(this, u, !1), Se(this, o, C(this, o) - 1));
          }
          redo() {
            C(this, o) < C(this, _).length - 1 && (Se(this, o, C(this, o) + 1), Se(this, u, !0), C(this, _)[C(this, o)].cmd(), Se(this, u, !1));
          }
          hasSomethingToUndo() {
            return C(this, o) !== -1;
          }
          hasSomethingToRedo() {
            return C(this, o) < C(this, _).length - 1;
          }
          destroy() {
            Se(this, _, null);
          }
        }
        _ = new WeakMap(), u = new WeakMap(), l = new WeakMap(), o = new WeakMap(), e.CommandManager = F;
        const h = class {
          constructor(H) {
            ue(this, s);
            this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
            const re = h.platform.isMac;
            for (const [Ae, Te] of H)
              for (const De of Ae) {
                const Oe = De.startsWith("mac+");
                re && Oe ? (this.callbacks.set(De.slice(4), Te), this.allKeys.add(De.split("+").at(-1))) : !re && !Oe && (this.callbacks.set(De, Te), this.allKeys.add(De.split("+").at(-1)));
              }
          }
          static get platform() {
            const H = typeof navigator < "u" ? navigator.platform : "";
            return (0, t.shadow)(this, "platform", {
              isWin: H.includes("Win"),
              isMac: H.includes("Mac")
            });
          }
          exec(H, re) {
            if (!this.allKeys.has(re.key))
              return;
            const Ae = this.callbacks.get(me(this, s, Nt).call(this, re));
            !Ae || (Ae.bind(H)(), re.stopPropagation(), re.preventDefault());
          }
        };
        let v = h;
        s = new WeakSet(), Nt = function(H) {
          H.altKey && this.buffer.push("alt"), H.ctrlKey && this.buffer.push("ctrl"), H.metaKey && this.buffer.push("meta"), H.shiftKey && this.buffer.push("shift"), this.buffer.push(H.key);
          const re = this.buffer.join("+");
          return this.buffer.length = 0, re;
        }, e.KeyboardManager = v;
        const f = class {
          get _colors() {
            const H = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
            return (0, r.getColorValues)(H), (0, t.shadow)(this, "_colors", H);
          }
          convert(H) {
            const re = (0, r.getRGB)(H);
            if (!window.matchMedia("(forced-colors: active)").matches)
              return re;
            for (const [Ae, Te] of this._colors)
              if (Te.every((De, Oe) => De === re[Oe]))
                return f._colorsMapping.get(Ae);
            return re;
          }
          getHexCode(H) {
            const re = this._colors.get(H);
            return re ? t.Util.makeHexColor(...re) : H;
          }
        };
        let y = f;
        He(y, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]])), e.ColorManager = y;
        const te = class {
          constructor(H, re) {
            ue(this, g);
            ue(this, N);
            ue(this, V);
            ue(this, $);
            ue(this, K);
            ue(this, ie);
            ue(this, p);
            ue(this, D);
            ue(this, M);
            ue(this, ce);
            ue(this, q);
            ue(this, i, null);
            ue(this, c, /* @__PURE__ */ new Map());
            ue(this, A, /* @__PURE__ */ new Map());
            ue(this, O, new F());
            ue(this, U, 0);
            ue(this, P, null);
            ue(this, L, null);
            ue(this, Q, new k());
            ue(this, de, !1);
            ue(this, oe, t.AnnotationEditorType.NONE);
            ue(this, Y, /* @__PURE__ */ new Set());
            ue(this, G, this.copy.bind(this));
            ue(this, J, this.cut.bind(this));
            ue(this, ne, this.paste.bind(this));
            ue(this, ae, this.keydown.bind(this));
            ue(this, _e, this.onEditingAction.bind(this));
            ue(this, we, this.onPageChanging.bind(this));
            ue(this, B, {
              isEditing: !1,
              isEmpty: !0,
              hasSomethingToUndo: !1,
              hasSomethingToRedo: !1,
              hasSelectedEditor: !1
            });
            ue(this, b, null);
            Se(this, b, H), Se(this, L, re), C(this, L)._on("editingaction", C(this, _e)), C(this, L)._on("pagechanging", C(this, we));
          }
          destroy() {
            me(this, N, vt).call(this), C(this, L)._off("editingaction", C(this, _e)), C(this, L)._off("pagechanging", C(this, we));
            for (const H of C(this, A).values())
              H.destroy();
            C(this, A).clear(), C(this, c).clear(), Se(this, i, null), C(this, Y).clear(), C(this, O).destroy();
          }
          onPageChanging({
            pageNumber: H
          }) {
            Se(this, U, H - 1);
          }
          focusMainContainer() {
            C(this, b).focus();
          }
          copy(H) {
            if (H.preventDefault(), C(this, i) && C(this, i).commitOrRemove(), !this.hasSelection)
              return;
            const re = [];
            for (const Ae of C(this, Y))
              Ae.isEmpty() || re.push(Ae.serialize());
            re.length !== 0 && H.clipboardData.setData("application/pdfjs", JSON.stringify(re));
          }
          cut(H) {
            this.copy(H), this.delete();
          }
          paste(H) {
            H.preventDefault();
            let re = H.clipboardData.getData("application/pdfjs");
            if (!re)
              return;
            try {
              re = JSON.parse(re);
            } catch (Te) {
              (0, t.warn)(`paste: "${Te.message}".`);
              return;
            }
            if (!Array.isArray(re))
              return;
            this.unselectAll();
            const Ae = C(this, A).get(C(this, U));
            try {
              const Te = [];
              for (const xe of re) {
                const he = Ae.deserialize(xe);
                if (!he)
                  return;
                Te.push(he);
              }
              const De = () => {
                for (const xe of Te)
                  me(this, M, _t).call(this, xe);
                me(this, q, yt).call(this, Te);
              }, Oe = () => {
                for (const xe of Te)
                  xe.remove();
              };
              this.addCommands({
                cmd: De,
                undo: Oe,
                mustExec: !0
              });
            } catch (Te) {
              (0, t.warn)(`paste: "${Te.message}".`);
            }
          }
          keydown(H) {
            var re;
            (re = this.getActive()) != null && re.shouldGetKeyboardEvents() || te._keyboardManager.exec(this, H);
          }
          onEditingAction(H) {
            ["undo", "redo", "delete", "selectAll"].includes(H.name) && this[H.name]();
          }
          setEditingState(H) {
            H ? (me(this, g, jt).call(this), me(this, V, Ut).call(this), me(this, K, nt).call(this, {
              isEditing: C(this, oe) !== t.AnnotationEditorType.NONE,
              isEmpty: me(this, ce, ut).call(this),
              hasSomethingToUndo: C(this, O).hasSomethingToUndo(),
              hasSomethingToRedo: C(this, O).hasSomethingToRedo(),
              hasSelectedEditor: !1
            })) : (me(this, N, vt).call(this), me(this, $, Bt).call(this), me(this, K, nt).call(this, {
              isEditing: !1
            }));
          }
          registerEditorTypes(H) {
            if (!C(this, P)) {
              Se(this, P, H);
              for (const re of C(this, P))
                me(this, ie, ct).call(this, re.defaultPropertiesToUpdate);
            }
          }
          getId() {
            return C(this, Q).getId();
          }
          addLayer(H) {
            C(this, A).set(H.pageIndex, H), C(this, de) ? H.enable() : H.disable();
          }
          removeLayer(H) {
            C(this, A).delete(H.pageIndex);
          }
          updateMode(H) {
            if (Se(this, oe, H), H === t.AnnotationEditorType.NONE)
              this.setEditingState(!1), me(this, D, Vt).call(this);
            else {
              this.setEditingState(!0), me(this, p, Wt).call(this);
              for (const re of C(this, A).values())
                re.updateMode(H);
            }
          }
          updateToolbar(H) {
            H !== C(this, oe) && C(this, L).dispatch("switchannotationeditormode", {
              source: this,
              mode: H
            });
          }
          updateParams(H, re) {
            if (!!C(this, P)) {
              for (const Ae of C(this, Y))
                Ae.updateParams(H, re);
              for (const Ae of C(this, P))
                Ae.updateDefaultParams(H, re);
            }
          }
          getEditors(H) {
            const re = [];
            for (const Ae of C(this, c).values())
              Ae.pageIndex === H && re.push(Ae);
            return re;
          }
          getEditor(H) {
            return C(this, c).get(H);
          }
          addEditor(H) {
            C(this, c).set(H.id, H);
          }
          removeEditor(H) {
            C(this, c).delete(H.id), this.unselect(H);
          }
          setActiveEditor(H) {
            C(this, i) !== H && (Se(this, i, H), H && me(this, ie, ct).call(this, H.propertiesToUpdate));
          }
          toggleSelected(H) {
            if (C(this, Y).has(H)) {
              C(this, Y).delete(H), H.unselect(), me(this, K, nt).call(this, {
                hasSelectedEditor: this.hasSelection
              });
              return;
            }
            C(this, Y).add(H), H.select(), me(this, ie, ct).call(this, H.propertiesToUpdate), me(this, K, nt).call(this, {
              hasSelectedEditor: !0
            });
          }
          setSelected(H) {
            for (const re of C(this, Y))
              re !== H && re.unselect();
            C(this, Y).clear(), C(this, Y).add(H), H.select(), me(this, ie, ct).call(this, H.propertiesToUpdate), me(this, K, nt).call(this, {
              hasSelectedEditor: !0
            });
          }
          isSelected(H) {
            return C(this, Y).has(H);
          }
          unselect(H) {
            H.unselect(), C(this, Y).delete(H), me(this, K, nt).call(this, {
              hasSelectedEditor: this.hasSelection
            });
          }
          get hasSelection() {
            return C(this, Y).size !== 0;
          }
          undo() {
            C(this, O).undo(), me(this, K, nt).call(this, {
              hasSomethingToUndo: C(this, O).hasSomethingToUndo(),
              hasSomethingToRedo: !0,
              isEmpty: me(this, ce, ut).call(this)
            });
          }
          redo() {
            C(this, O).redo(), me(this, K, nt).call(this, {
              hasSomethingToUndo: !0,
              hasSomethingToRedo: C(this, O).hasSomethingToRedo(),
              isEmpty: me(this, ce, ut).call(this)
            });
          }
          addCommands(H) {
            C(this, O).add(H), me(this, K, nt).call(this, {
              hasSomethingToUndo: !0,
              hasSomethingToRedo: !1,
              isEmpty: me(this, ce, ut).call(this)
            });
          }
          delete() {
            if (this.commitOrRemove(), !this.hasSelection)
              return;
            const H = [...C(this, Y)], re = () => {
              for (const Te of H)
                Te.remove();
            }, Ae = () => {
              for (const Te of H)
                me(this, M, _t).call(this, Te);
            };
            this.addCommands({
              cmd: re,
              undo: Ae,
              mustExec: !0
            });
          }
          commitOrRemove() {
            var H;
            (H = C(this, i)) == null || H.commitOrRemove();
          }
          selectAll() {
            for (const H of C(this, Y))
              H.commit();
            me(this, q, yt).call(this, C(this, c).values());
          }
          unselectAll() {
            if (C(this, i)) {
              C(this, i).commitOrRemove();
              return;
            }
            if (C(this, Y).size !== 0) {
              for (const H of C(this, Y))
                H.unselect();
              C(this, Y).clear(), me(this, K, nt).call(this, {
                hasSelectedEditor: !1
              });
            }
          }
          isActive(H) {
            return C(this, i) === H;
          }
          getActive() {
            return C(this, i);
          }
          getMode() {
            return C(this, oe);
          }
        };
        let x = te;
        i = new WeakMap(), c = new WeakMap(), A = new WeakMap(), O = new WeakMap(), U = new WeakMap(), P = new WeakMap(), L = new WeakMap(), Q = new WeakMap(), de = new WeakMap(), oe = new WeakMap(), Y = new WeakMap(), G = new WeakMap(), J = new WeakMap(), ne = new WeakMap(), ae = new WeakMap(), _e = new WeakMap(), we = new WeakMap(), B = new WeakMap(), b = new WeakMap(), g = new WeakSet(), jt = function() {
          C(this, b).addEventListener("keydown", C(this, ae));
        }, N = new WeakSet(), vt = function() {
          C(this, b).removeEventListener("keydown", C(this, ae));
        }, V = new WeakSet(), Ut = function() {
          document.addEventListener("copy", C(this, G)), document.addEventListener("cut", C(this, J)), document.addEventListener("paste", C(this, ne));
        }, $ = new WeakSet(), Bt = function() {
          document.removeEventListener("copy", C(this, G)), document.removeEventListener("cut", C(this, J)), document.removeEventListener("paste", C(this, ne));
        }, K = new WeakSet(), nt = function(H) {
          Object.entries(H).some(([Ae, Te]) => C(this, B)[Ae] !== Te) && C(this, L).dispatch("annotationeditorstateschanged", {
            source: this,
            details: Object.assign(C(this, B), H)
          });
        }, ie = new WeakSet(), ct = function(H) {
          C(this, L).dispatch("annotationeditorparamschanged", {
            source: this,
            details: H
          });
        }, p = new WeakSet(), Wt = function() {
          if (!C(this, de)) {
            Se(this, de, !0);
            for (const H of C(this, A).values())
              H.enable();
          }
        }, D = new WeakSet(), Vt = function() {
          if (this.unselectAll(), C(this, de)) {
            Se(this, de, !1);
            for (const H of C(this, A).values())
              H.disable();
          }
        }, M = new WeakSet(), _t = function(H) {
          const re = C(this, A).get(H.pageIndex);
          re ? re.addOrRebuild(H) : this.addEditor(H);
        }, ce = new WeakSet(), ut = function() {
          if (C(this, c).size === 0)
            return !0;
          if (C(this, c).size === 1)
            for (const H of C(this, c).values())
              return H.isEmpty();
          return !1;
        }, q = new WeakSet(), yt = function(H) {
          C(this, Y).clear();
          for (const re of H)
            re.isEmpty() || (C(this, Y).add(re), re.select());
          me(this, K, nt).call(this, {
            hasSelectedEditor: !0
          });
        }, He(x, "_keyboardManager", new v([[["ctrl+a", "mac+meta+a"], te.prototype.selectAll], [["ctrl+z", "mac+meta+z"], te.prototype.undo], [["ctrl+y", "ctrl+shift+Z", "mac+meta+shift+Z"], te.prototype.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete"], te.prototype.delete], [["Escape", "mac+Escape"], te.prototype.unselectAll]])), e.AnnotationEditorUIManager = x;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = e.AnnotationPrefix = void 0, e.deprecated = c, e.getColorValues = L, e.getCurrentTransform = Q, e.getCurrentTransformInverse = de, e.getFilenameFromUrl = s, e.getPdfFilenameFromUrl = d, e.getRGB = P, e.getXfaPageViewport = U, e.isDataScheme = l, e.isPdfFile = o, e.isValidFetchUrl = f, e.loadScript = i;
        var t = n(7), r = n(1);
        const S = "http://www.w3.org/2000/svg", E = "pdfjs_internal_id_";
        e.AnnotationPrefix = E;
        const oe = class {
        };
        let k = oe;
        He(k, "CSS", 96), He(k, "PDF", 72), He(k, "PDF_TO_CSS_UNITS", oe.CSS / oe.PDF), e.PixelsPerInch = k;
        class F extends t.BaseCanvasFactory {
          constructor({
            ownerDocument: G = globalThis.document
          } = {}) {
            super(), this._document = G;
          }
          _createCanvas(G, J) {
            const ne = this._document.createElement("canvas");
            return ne.width = G, ne.height = J, ne;
          }
        }
        e.DOMCanvasFactory = F;
        async function v(Y, G = !1) {
          if (f(Y, document.baseURI)) {
            const J = await fetch(Y);
            if (!J.ok)
              throw new Error(J.statusText);
            return G ? new Uint8Array(await J.arrayBuffer()) : (0, r.stringToBytes)(await J.text());
          }
          return new Promise((J, ne) => {
            const ae = new XMLHttpRequest();
            ae.open("GET", Y, !0), G && (ae.responseType = "arraybuffer"), ae.onreadystatechange = () => {
              if (ae.readyState === XMLHttpRequest.DONE) {
                if (ae.status === 200 || ae.status === 0) {
                  let _e;
                  if (G && ae.response ? _e = new Uint8Array(ae.response) : !G && ae.responseText && (_e = (0, r.stringToBytes)(ae.responseText)), _e) {
                    J(_e);
                    return;
                  }
                }
                ne(new Error(ae.statusText));
              }
            }, ae.send(null);
          });
        }
        class y extends t.BaseCMapReaderFactory {
          _fetchData(G, J) {
            return v(G, this.isCompressed).then((ne) => ({
              cMapData: ne,
              compressionType: J
            }));
          }
        }
        e.DOMCMapReaderFactory = y;
        class x extends t.BaseStandardFontDataFactory {
          _fetchData(G) {
            return v(G, !0);
          }
        }
        e.DOMStandardFontDataFactory = x;
        class m extends t.BaseSVGFactory {
          _createSVG(G) {
            return document.createElementNS(S, G);
          }
        }
        e.DOMSVGFactory = m;
        class _ {
          constructor({
            viewBox: G,
            scale: J,
            rotation: ne,
            offsetX: ae = 0,
            offsetY: _e = 0,
            dontFlip: we = !1
          }) {
            this.viewBox = G, this.scale = J, this.rotation = ne, this.offsetX = ae, this.offsetY = _e;
            const B = (G[2] + G[0]) / 2, b = (G[3] + G[1]) / 2;
            let g, T, N, j;
            switch (ne %= 360, ne < 0 && (ne += 360), ne) {
              case 180:
                g = -1, T = 0, N = 0, j = 1;
                break;
              case 90:
                g = 0, T = 1, N = 1, j = 0;
                break;
              case 270:
                g = 0, T = -1, N = -1, j = 0;
                break;
              case 0:
                g = 1, T = 0, N = 0, j = -1;
                break;
              default:
                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
            }
            we && (N = -N, j = -j);
            let V, z, $, fe;
            g === 0 ? (V = Math.abs(b - G[1]) * J + ae, z = Math.abs(B - G[0]) * J + _e, $ = Math.abs(G[3] - G[1]) * J, fe = Math.abs(G[2] - G[0]) * J) : (V = Math.abs(B - G[0]) * J + ae, z = Math.abs(b - G[1]) * J + _e, $ = Math.abs(G[2] - G[0]) * J, fe = Math.abs(G[3] - G[1]) * J), this.transform = [g * J, T * J, N * J, j * J, V - g * J * B - N * J * b, z - T * J * B - j * J * b], this.width = $, this.height = fe;
          }
          clone({
            scale: G = this.scale,
            rotation: J = this.rotation,
            offsetX: ne = this.offsetX,
            offsetY: ae = this.offsetY,
            dontFlip: _e = !1
          } = {}) {
            return new _({
              viewBox: this.viewBox.slice(),
              scale: G,
              rotation: J,
              offsetX: ne,
              offsetY: ae,
              dontFlip: _e
            });
          }
          convertToViewportPoint(G, J) {
            return r.Util.applyTransform([G, J], this.transform);
          }
          convertToViewportRectangle(G) {
            const J = r.Util.applyTransform([G[0], G[1]], this.transform), ne = r.Util.applyTransform([G[2], G[3]], this.transform);
            return [J[0], J[1], ne[0], ne[1]];
          }
          convertToPdfPoint(G, J) {
            return r.Util.applyInverseTransform([G, J], this.transform);
          }
        }
        e.PageViewport = _;
        class u extends r.BaseException {
          constructor(G, J) {
            super(G, "RenderingCancelledException"), this.type = J;
          }
        }
        e.RenderingCancelledException = u;
        function l(Y) {
          const G = Y.length;
          let J = 0;
          for (; J < G && Y[J].trim() === ""; )
            J++;
          return Y.substring(J, J + 5).toLowerCase() === "data:";
        }
        function o(Y) {
          return typeof Y == "string" && /\.pdf$/i.test(Y);
        }
        function s(Y, G = !1) {
          return G || ([Y] = Y.split(/[#?]/, 1)), Y.substring(Y.lastIndexOf("/") + 1);
        }
        function d(Y, G = "document.pdf") {
          if (typeof Y != "string")
            return G;
          if (l(Y))
            return (0, r.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), G;
          const J = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, ne = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, ae = J.exec(Y);
          let _e = ne.exec(ae[1]) || ne.exec(ae[2]) || ne.exec(ae[3]);
          if (_e && (_e = _e[0], _e.includes("%")))
            try {
              _e = ne.exec(decodeURIComponent(_e))[0];
            } catch {
            }
          return _e || G;
        }
        class h {
          constructor() {
            He(this, "started", /* @__PURE__ */ Object.create(null));
            He(this, "times", []);
          }
          time(G) {
            G in this.started && (0, r.warn)(`Timer is already running for ${G}`), this.started[G] = Date.now();
          }
          timeEnd(G) {
            G in this.started || (0, r.warn)(`Timer has not been started for ${G}`), this.times.push({
              name: G,
              start: this.started[G],
              end: Date.now()
            }), delete this.started[G];
          }
          toString() {
            const G = [];
            let J = 0;
            for (const {
              name: ne
            } of this.times)
              J = Math.max(ne.length, J);
            for (const {
              name: ne,
              start: ae,
              end: _e
            } of this.times)
              G.push(`${ne.padEnd(J)} ${_e - ae}ms
`);
            return G.join("");
          }
        }
        e.StatTimer = h;
        function f(Y, G) {
          try {
            const {
              protocol: J
            } = G ? new URL(Y, G) : new URL(Y);
            return J === "http:" || J === "https:";
          } catch {
            return !1;
          }
        }
        function i(Y, G = !1) {
          return new Promise((J, ne) => {
            const ae = document.createElement("script");
            ae.src = Y, ae.onload = function(_e) {
              G && ae.remove(), J(_e);
            }, ae.onerror = function() {
              ne(new Error(`Cannot load script at: ${ae.src}`));
            }, (document.head || document.documentElement).append(ae);
          });
        }
        function c(Y) {
          console.log("Deprecated API usage: " + Y);
        }
        let A;
        class O {
          static toDateObject(G) {
            if (!G || typeof G != "string")
              return null;
            A || (A = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
            const J = A.exec(G);
            if (!J)
              return null;
            const ne = parseInt(J[1], 10);
            let ae = parseInt(J[2], 10);
            ae = ae >= 1 && ae <= 12 ? ae - 1 : 0;
            let _e = parseInt(J[3], 10);
            _e = _e >= 1 && _e <= 31 ? _e : 1;
            let we = parseInt(J[4], 10);
            we = we >= 0 && we <= 23 ? we : 0;
            let B = parseInt(J[5], 10);
            B = B >= 0 && B <= 59 ? B : 0;
            let b = parseInt(J[6], 10);
            b = b >= 0 && b <= 59 ? b : 0;
            const g = J[7] || "Z";
            let T = parseInt(J[8], 10);
            T = T >= 0 && T <= 23 ? T : 0;
            let N = parseInt(J[9], 10) || 0;
            return N = N >= 0 && N <= 59 ? N : 0, g === "-" ? (we += T, B += N) : g === "+" && (we -= T, B -= N), new Date(Date.UTC(ne, ae, _e, we, B, b));
          }
        }
        e.PDFDateString = O;
        function U(Y, {
          scale: G = 1,
          rotation: J = 0
        }) {
          const {
            width: ne,
            height: ae
          } = Y.attributes.style, _e = [0, 0, parseInt(ne), parseInt(ae)];
          return new _({
            viewBox: _e,
            scale: G,
            rotation: J
          });
        }
        function P(Y) {
          if (Y.startsWith("#")) {
            const G = parseInt(Y.slice(1), 16);
            return [(G & 16711680) >> 16, (G & 65280) >> 8, G & 255];
          }
          return Y.startsWith("rgb(") ? Y.slice(4, -1).split(",").map((G) => parseInt(G)) : Y.startsWith("rgba(") ? Y.slice(5, -1).split(",").map((G) => parseInt(G)).slice(0, 3) : ((0, r.warn)(`Not a valid color format: "${Y}"`), [0, 0, 0]);
        }
        function L(Y) {
          const G = document.createElement("span");
          G.style.visibility = "hidden", document.body.append(G);
          for (const J of Y.keys()) {
            G.style.color = J;
            const ne = window.getComputedStyle(G).color;
            Y.set(J, P(ne));
          }
          G.remove();
        }
        function Q(Y) {
          const {
            a: G,
            b: J,
            c: ne,
            d: ae,
            e: _e,
            f: we
          } = Y.getTransform();
          return [G, J, ne, ae, _e, we];
        }
        function de(Y) {
          const {
            a: G,
            b: J,
            c: ne,
            d: ae,
            e: _e,
            f: we
          } = Y.getTransform().invertSelf();
          return [G, J, ne, ae, _e, we];
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
        var t = n(1);
        class r {
          constructor() {
            this.constructor === r && (0, t.unreachable)("Cannot initialize BaseCanvasFactory.");
          }
          create(v, y) {
            if (v <= 0 || y <= 0)
              throw new Error("Invalid canvas size");
            const x = this._createCanvas(v, y);
            return {
              canvas: x,
              context: x.getContext("2d")
            };
          }
          reset(v, y, x) {
            if (!v.canvas)
              throw new Error("Canvas is not specified");
            if (y <= 0 || x <= 0)
              throw new Error("Invalid canvas size");
            v.canvas.width = y, v.canvas.height = x;
          }
          destroy(v) {
            if (!v.canvas)
              throw new Error("Canvas is not specified");
            v.canvas.width = 0, v.canvas.height = 0, v.canvas = null, v.context = null;
          }
          _createCanvas(v, y) {
            (0, t.unreachable)("Abstract method `_createCanvas` called.");
          }
        }
        e.BaseCanvasFactory = r;
        class S {
          constructor({
            baseUrl: v = null,
            isCompressed: y = !1
          }) {
            this.constructor === S && (0, t.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = v, this.isCompressed = y;
          }
          async fetch({
            name: v
          }) {
            if (!this.baseUrl)
              throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
            if (!v)
              throw new Error("CMap name must be specified.");
            const y = this.baseUrl + v + (this.isCompressed ? ".bcmap" : ""), x = this.isCompressed ? t.CMapCompressionType.BINARY : t.CMapCompressionType.NONE;
            return this._fetchData(y, x).catch((m) => {
              throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${y}`);
            });
          }
          _fetchData(v, y) {
            (0, t.unreachable)("Abstract method `_fetchData` called.");
          }
        }
        e.BaseCMapReaderFactory = S;
        class E {
          constructor({
            baseUrl: v = null
          }) {
            this.constructor === E && (0, t.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = v;
          }
          async fetch({
            filename: v
          }) {
            if (!this.baseUrl)
              throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
            if (!v)
              throw new Error("Font filename must be specified.");
            const y = `${this.baseUrl}${v}`;
            return this._fetchData(y).catch((x) => {
              throw new Error(`Unable to load font data at: ${y}`);
            });
          }
          _fetchData(v) {
            (0, t.unreachable)("Abstract method `_fetchData` called.");
          }
        }
        e.BaseStandardFontDataFactory = E;
        class k {
          constructor() {
            this.constructor === k && (0, t.unreachable)("Cannot initialize BaseSVGFactory.");
          }
          create(v, y, x = !1) {
            if (v <= 0 || y <= 0)
              throw new Error("Invalid SVG dimensions");
            const m = this._createSVG("svg:svg");
            return m.setAttribute("version", "1.1"), x || (m.setAttribute("width", `${v}px`), m.setAttribute("height", `${y}px`)), m.setAttribute("preserveAspectRatio", "none"), m.setAttribute("viewBox", `0 0 ${v} ${y}`), m;
          }
          createElement(v) {
            if (typeof v != "string")
              throw new Error("Invalid SVG element type");
            return this._createSVG(v);
          }
          _createSVG(v) {
            (0, t.unreachable)("Abstract method `_createSVG` called.");
          }
        }
        e.BaseSVGFactory = k;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.MurmurHash3_64 = void 0;
        var t = n(1);
        const r = 3285377520, S = 4294901760, E = 65535;
        class k {
          constructor(v) {
            this.h1 = v ? v & 4294967295 : r, this.h2 = v ? v & 4294967295 : r;
          }
          update(v) {
            let y, x;
            if (typeof v == "string") {
              y = new Uint8Array(v.length * 2), x = 0;
              for (let A = 0, O = v.length; A < O; A++) {
                const U = v.charCodeAt(A);
                U <= 255 ? y[x++] = U : (y[x++] = U >>> 8, y[x++] = U & 255);
              }
            } else if ((0, t.isArrayBuffer)(v))
              y = v.slice(), x = y.byteLength;
            else
              throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
            const m = x >> 2, _ = x - m * 4, u = new Uint32Array(y.buffer, 0, m);
            let l = 0, o = 0, s = this.h1, d = this.h2;
            const h = 3432918353, f = 461845907, i = h & E, c = f & E;
            for (let A = 0; A < m; A++)
              A & 1 ? (l = u[A], l = l * h & S | l * i & E, l = l << 15 | l >>> 17, l = l * f & S | l * c & E, s ^= l, s = s << 13 | s >>> 19, s = s * 5 + 3864292196) : (o = u[A], o = o * h & S | o * i & E, o = o << 15 | o >>> 17, o = o * f & S | o * c & E, d ^= o, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
            switch (l = 0, _) {
              case 3:
                l ^= y[m * 4 + 2] << 16;
              case 2:
                l ^= y[m * 4 + 1] << 8;
              case 1:
                l ^= y[m * 4], l = l * h & S | l * i & E, l = l << 15 | l >>> 17, l = l * f & S | l * c & E, m & 1 ? s ^= l : d ^= l;
            }
            this.h1 = s, this.h2 = d;
          }
          hexdigest() {
            let v = this.h1, y = this.h2;
            return v ^= y >>> 1, v = v * 3981806797 & S | v * 36045 & E, y = y * 4283543511 & S | ((y << 16 | v >>> 16) * 2950163797 & S) >>> 16, v ^= y >>> 1, v = v * 444984403 & S | v * 60499 & E, y = y * 3301882366 & S | ((y << 16 | v >>> 16) * 3120437893 & S) >>> 16, v ^= y >>> 1, (v >>> 0).toString(16).padStart(8, "0") + (y >>> 0).toString(16).padStart(8, "0");
          }
        }
        e.MurmurHash3_64 = k;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.FontLoader = e.FontFaceObject = void 0;
        var t = n(1);
        class r {
          constructor({
            onUnsupportedFeature: k,
            ownerDocument: F = globalThis.document,
            styleElement: v = null
          }) {
            this._onUnsupportedFeature = k, this._document = F, this.nativeFontFaces = [], this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
          }
          addNativeFontFace(k) {
            this.nativeFontFaces.push(k), this._document.fonts.add(k);
          }
          insertRule(k) {
            this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
            const F = this.styleElement.sheet;
            F.insertRule(k, F.cssRules.length);
          }
          clear() {
            for (const k of this.nativeFontFaces)
              this._document.fonts.delete(k);
            this.nativeFontFaces.length = 0, this.styleElement && (this.styleElement.remove(), this.styleElement = null);
          }
          async bind(k) {
            if (k.attached || k.missingFile)
              return;
            if (k.attached = !0, this.isFontLoadingAPISupported) {
              const v = k.createNativeFontFace();
              if (v) {
                this.addNativeFontFace(v);
                try {
                  await v.loaded;
                } catch (y) {
                  throw this._onUnsupportedFeature({
                    featureId: t.UNSUPPORTED_FEATURES.errorFontLoadNative
                  }), (0, t.warn)(`Failed to load font '${v.family}': '${y}'.`), k.disableFontFace = !0, y;
                }
              }
              return;
            }
            const F = k.createFontFaceRule();
            if (F) {
              if (this.insertRule(F), this.isSyncFontLoadingSupported)
                return;
              await new Promise((v) => {
                const y = this._queueLoadingCallback(v);
                this._prepareFontLoadEvent(k, y);
              });
            }
          }
          get isFontLoadingAPISupported() {
            var F;
            const k = !!((F = this._document) != null && F.fonts);
            return (0, t.shadow)(this, "isFontLoadingAPISupported", k);
          }
          get isSyncFontLoadingSupported() {
            let k = !1;
            if (typeof navigator > "u")
              k = !0;
            else {
              const F = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
              (F == null ? void 0 : F[1]) >= 14 && (k = !0);
            }
            return (0, t.shadow)(this, "isSyncFontLoadingSupported", k);
          }
          _queueLoadingCallback(k) {
            function F() {
              for ((0, t.assert)(!y.done, "completeRequest() cannot be called twice."), y.done = !0; v.length > 0 && v[0].done; ) {
                const x = v.shift();
                setTimeout(x.callback, 0);
              }
            }
            const {
              loadingRequests: v
            } = this, y = {
              done: !1,
              complete: F,
              callback: k
            };
            return v.push(y), y;
          }
          get _loadTestFont() {
            const k = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
            return (0, t.shadow)(this, "_loadTestFont", k);
          }
          _prepareFontLoadEvent(k, F) {
            function v(P, L) {
              return P.charCodeAt(L) << 24 | P.charCodeAt(L + 1) << 16 | P.charCodeAt(L + 2) << 8 | P.charCodeAt(L + 3) & 255;
            }
            function y(P, L, Q, de) {
              const oe = P.substring(0, L), Y = P.substring(L + Q);
              return oe + de + Y;
            }
            let x, m;
            const _ = this._document.createElement("canvas");
            _.width = 1, _.height = 1;
            const u = _.getContext("2d");
            let l = 0;
            function o(P, L) {
              if (++l > 30) {
                (0, t.warn)("Load test font never loaded."), L();
                return;
              }
              if (u.font = "30px " + P, u.fillText(".", 0, 20), u.getImageData(0, 0, 1, 1).data[3] > 0) {
                L();
                return;
              }
              setTimeout(o.bind(null, P, L));
            }
            const s = `lt${Date.now()}${this.loadTestFontId++}`;
            let d = this._loadTestFont;
            d = y(d, 976, s.length, s);
            const f = 16, i = 1482184792;
            let c = v(d, f);
            for (x = 0, m = s.length - 3; x < m; x += 4)
              c = c - i + v(s, x) | 0;
            x < s.length && (c = c - i + v(s + "XXX", x) | 0), d = y(d, f, 4, (0, t.string32)(c));
            const A = `url(data:font/opentype;base64,${btoa(d)});`, O = `@font-face {font-family:"${s}";src:${A}}`;
            this.insertRule(O);
            const U = this._document.createElement("div");
            U.style.visibility = "hidden", U.style.width = U.style.height = "10px", U.style.position = "absolute", U.style.top = U.style.left = "0px";
            for (const P of [k.loadedName, s]) {
              const L = this._document.createElement("span");
              L.textContent = "Hi", L.style.fontFamily = P, U.append(L);
            }
            this._document.body.append(U), o(s, () => {
              U.remove(), F.complete();
            });
          }
        }
        e.FontLoader = r;
        class S {
          constructor(k, {
            isEvalSupported: F = !0,
            disableFontFace: v = !1,
            ignoreErrors: y = !1,
            onUnsupportedFeature: x,
            fontRegistry: m = null
          }) {
            this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
            for (const _ in k)
              this[_] = k[_];
            this.isEvalSupported = F !== !1, this.disableFontFace = v === !0, this.ignoreErrors = y === !0, this._onUnsupportedFeature = x, this.fontRegistry = m;
          }
          createNativeFontFace() {
            var F;
            if (!this.data || this.disableFontFace)
              return null;
            let k;
            if (!this.cssFontInfo)
              k = new FontFace(this.loadedName, this.data, {});
            else {
              const v = {
                weight: this.cssFontInfo.fontWeight
              };
              this.cssFontInfo.italicAngle && (v.style = `oblique ${this.cssFontInfo.italicAngle}deg`), k = new FontFace(this.cssFontInfo.fontFamily, this.data, v);
            }
            return (F = this.fontRegistry) == null || F.registerFont(this), k;
          }
          createFontFaceRule() {
            var y;
            if (!this.data || this.disableFontFace)
              return null;
            const k = (0, t.bytesToString)(this.data), F = `url(data:${this.mimetype};base64,${btoa(k)});`;
            let v;
            if (!this.cssFontInfo)
              v = `@font-face {font-family:"${this.loadedName}";src:${F}}`;
            else {
              let x = `font-weight: ${this.cssFontInfo.fontWeight};`;
              this.cssFontInfo.italicAngle && (x += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), v = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${x}src:${F}}`;
            }
            return (y = this.fontRegistry) == null || y.registerFont(this, F), v;
          }
          getPathGenerator(k, F) {
            if (this.compiledGlyphs[F] !== void 0)
              return this.compiledGlyphs[F];
            let v;
            try {
              v = k.get(this.loadedName + "_path_" + F);
            } catch (y) {
              if (!this.ignoreErrors)
                throw y;
              return this._onUnsupportedFeature({
                featureId: t.UNSUPPORTED_FEATURES.errorFontGetPath
              }), (0, t.warn)(`getPathGenerator - ignoring character: "${y}".`), this.compiledGlyphs[F] = function(x, m) {
              };
            }
            if (this.isEvalSupported && t.FeatureTest.isEvalSupported) {
              const y = [];
              for (const x of v) {
                const m = x.args !== void 0 ? x.args.join(",") : "";
                y.push("c.", x.cmd, "(", m, `);
`);
              }
              return this.compiledGlyphs[F] = new Function("c", "size", y.join(""));
            }
            return this.compiledGlyphs[F] = function(y, x) {
              for (const m of v)
                m.cmd === "scale" && (m.args = [x, -x]), y[m.cmd].apply(y, m.args);
            };
          }
        }
        e.FontFaceObject = S;
      },
      (a, e, n) => {
        var ae, At;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.CanvasGraphics = void 0;
        var t = n(1), r = n(6), S = n(11), E = n(13), k = n(12);
        const F = 16, v = 100, y = 4096, x = 15, m = 10, _ = k.isNodeJS && typeof Path2D > "u" ? -1 : 1e3, u = 16;
        function l(B, b) {
          if (B._removeMirroring)
            throw new Error("Context is already forwarding operations.");
          B.__originalSave = B.save, B.__originalRestore = B.restore, B.__originalRotate = B.rotate, B.__originalScale = B.scale, B.__originalTranslate = B.translate, B.__originalTransform = B.transform, B.__originalSetTransform = B.setTransform, B.__originalResetTransform = B.resetTransform, B.__originalClip = B.clip, B.__originalMoveTo = B.moveTo, B.__originalLineTo = B.lineTo, B.__originalBezierCurveTo = B.bezierCurveTo, B.__originalRect = B.rect, B.__originalClosePath = B.closePath, B.__originalBeginPath = B.beginPath, B._removeMirroring = () => {
            B.save = B.__originalSave, B.restore = B.__originalRestore, B.rotate = B.__originalRotate, B.scale = B.__originalScale, B.translate = B.__originalTranslate, B.transform = B.__originalTransform, B.setTransform = B.__originalSetTransform, B.resetTransform = B.__originalResetTransform, B.clip = B.__originalClip, B.moveTo = B.__originalMoveTo, B.lineTo = B.__originalLineTo, B.bezierCurveTo = B.__originalBezierCurveTo, B.rect = B.__originalRect, B.closePath = B.__originalClosePath, B.beginPath = B.__originalBeginPath, delete B._removeMirroring;
          }, B.save = function() {
            b.save(), this.__originalSave();
          }, B.restore = function() {
            b.restore(), this.__originalRestore();
          }, B.translate = function(T, N) {
            b.translate(T, N), this.__originalTranslate(T, N);
          }, B.scale = function(T, N) {
            b.scale(T, N), this.__originalScale(T, N);
          }, B.transform = function(T, N, j, V, z, $) {
            b.transform(T, N, j, V, z, $), this.__originalTransform(T, N, j, V, z, $);
          }, B.setTransform = function(T, N, j, V, z, $) {
            b.setTransform(T, N, j, V, z, $), this.__originalSetTransform(T, N, j, V, z, $);
          }, B.resetTransform = function() {
            b.resetTransform(), this.__originalResetTransform();
          }, B.rotate = function(T) {
            b.rotate(T), this.__originalRotate(T);
          }, B.clip = function(T) {
            b.clip(T), this.__originalClip(T);
          }, B.moveTo = function(g, T) {
            b.moveTo(g, T), this.__originalMoveTo(g, T);
          }, B.lineTo = function(g, T) {
            b.lineTo(g, T), this.__originalLineTo(g, T);
          }, B.bezierCurveTo = function(g, T, N, j, V, z) {
            b.bezierCurveTo(g, T, N, j, V, z), this.__originalBezierCurveTo(g, T, N, j, V, z);
          }, B.rect = function(g, T, N, j) {
            b.rect(g, T, N, j), this.__originalRect(g, T, N, j);
          }, B.closePath = function() {
            b.closePath(), this.__originalClosePath();
          }, B.beginPath = function() {
            b.beginPath(), this.__originalBeginPath();
          };
        }
        class o {
          constructor(b) {
            this.canvasFactory = b, this.cache = /* @__PURE__ */ Object.create(null);
          }
          getCanvas(b, g, T) {
            let N;
            return this.cache[b] !== void 0 ? (N = this.cache[b], this.canvasFactory.reset(N, g, T)) : (N = this.canvasFactory.create(g, T), this.cache[b] = N), N;
          }
          delete(b) {
            delete this.cache[b];
          }
          clear() {
            for (const b in this.cache) {
              const g = this.cache[b];
              this.canvasFactory.destroy(g), delete this.cache[b];
            }
          }
        }
        function s(B, b, g, T, N, j, V, z, $, fe) {
          const [K, pe, ie, ge, p, w] = (0, r.getCurrentTransform)(B);
          if (pe === 0 && ie === 0) {
            const M = V * K + p, X = Math.round(M), ce = z * ge + w, le = Math.round(ce), q = (V + $) * K + p, be = Math.abs(Math.round(q) - X) || 1, te = (z + fe) * ge + w, se = Math.abs(Math.round(te) - le) || 1;
            return B.setTransform(Math.sign(K), 0, 0, Math.sign(ge), X, le), B.drawImage(b, g, T, N, j, 0, 0, be, se), B.setTransform(K, pe, ie, ge, p, w), [be, se];
          }
          if (K === 0 && ge === 0) {
            const M = z * ie + p, X = Math.round(M), ce = V * pe + w, le = Math.round(ce), q = (z + fe) * ie + p, be = Math.abs(Math.round(q) - X) || 1, te = (V + $) * pe + w, se = Math.abs(Math.round(te) - le) || 1;
            return B.setTransform(0, Math.sign(pe), Math.sign(ie), 0, X, le), B.drawImage(b, g, T, N, j, 0, 0, se, be), B.setTransform(K, pe, ie, ge, p, w), [se, be];
          }
          B.drawImage(b, g, T, N, j, V, z, $, fe);
          const D = Math.hypot(K, pe), R = Math.hypot(ie, ge);
          return [D * $, R * fe];
        }
        function d(B) {
          const {
            width: b,
            height: g
          } = B;
          if (b > _ || g > _)
            return null;
          const T = 1e3, N = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), j = b + 1;
          let V = new Uint8Array(j * (g + 1)), z, $, fe;
          const K = b + 7 & -8;
          let pe = new Uint8Array(K * g), ie = 0;
          for (const R of B.data) {
            let M = 128;
            for (; M > 0; )
              pe[ie++] = R & M ? 0 : 255, M >>= 1;
          }
          let ge = 0;
          for (ie = 0, pe[ie] !== 0 && (V[0] = 1, ++ge), $ = 1; $ < b; $++)
            pe[ie] !== pe[ie + 1] && (V[$] = pe[ie] ? 2 : 1, ++ge), ie++;
          for (pe[ie] !== 0 && (V[$] = 2, ++ge), z = 1; z < g; z++) {
            ie = z * K, fe = z * j, pe[ie - K] !== pe[ie] && (V[fe] = pe[ie] ? 1 : 8, ++ge);
            let R = (pe[ie] ? 4 : 0) + (pe[ie - K] ? 8 : 0);
            for ($ = 1; $ < b; $++)
              R = (R >> 2) + (pe[ie + 1] ? 4 : 0) + (pe[ie - K + 1] ? 8 : 0), N[R] && (V[fe + $] = N[R], ++ge), ie++;
            if (pe[ie - K] !== pe[ie] && (V[fe + $] = pe[ie] ? 2 : 4, ++ge), ge > T)
              return null;
          }
          for (ie = K * (g - 1), fe = z * j, pe[ie] !== 0 && (V[fe] = 8, ++ge), $ = 1; $ < b; $++)
            pe[ie] !== pe[ie + 1] && (V[fe + $] = pe[ie] ? 4 : 8, ++ge), ie++;
          if (pe[ie] !== 0 && (V[fe + $] = 4, ++ge), ge > T)
            return null;
          const p = new Int32Array([0, j, -1, 0, -j, 0, 0, 0, 1]), w = new Path2D();
          for (z = 0; ge && z <= g; z++) {
            let R = z * j;
            const M = R + b;
            for (; R < M && !V[R]; )
              R++;
            if (R === M)
              continue;
            w.moveTo(R % j, z);
            const X = R;
            let ce = V[R];
            do {
              const le = p[ce];
              do
                R += le;
              while (!V[R]);
              const q = V[R];
              q !== 5 && q !== 10 ? (ce = q, V[R] = 0) : (ce = q & 51 * ce >> 4, V[R] &= ce >> 2 | ce << 2), w.lineTo(R % j, R / j | 0), V[R] || --ge;
            } while (X !== R);
            --z;
          }
          return pe = null, V = null, function(R) {
            R.save(), R.scale(1 / b, -1 / g), R.translate(0, -g), R.fill(w), R.beginPath(), R.restore();
          };
        }
        class h {
          constructor(b, g) {
            this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = t.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = t.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = t.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = null, this.startNewPathAndClipBox([0, 0, b, g]);
          }
          clone() {
            const b = Object.create(this);
            return b.clipBox = this.clipBox.slice(), b;
          }
          setCurrentPoint(b, g) {
            this.x = b, this.y = g;
          }
          updatePathMinMax(b, g, T) {
            [g, T] = t.Util.applyTransform([g, T], b), this.minX = Math.min(this.minX, g), this.minY = Math.min(this.minY, T), this.maxX = Math.max(this.maxX, g), this.maxY = Math.max(this.maxY, T);
          }
          updateRectMinMax(b, g) {
            const T = t.Util.applyTransform(g, b), N = t.Util.applyTransform(g.slice(2), b);
            this.minX = Math.min(this.minX, T[0], N[0]), this.minY = Math.min(this.minY, T[1], N[1]), this.maxX = Math.max(this.maxX, T[0], N[0]), this.maxY = Math.max(this.maxY, T[1], N[1]);
          }
          updateScalingPathMinMax(b, g) {
            t.Util.scaleMinMax(b, g), this.minX = Math.min(this.minX, g[0]), this.maxX = Math.max(this.maxX, g[1]), this.minY = Math.min(this.minY, g[2]), this.maxY = Math.max(this.maxY, g[3]);
          }
          updateCurvePathMinMax(b, g, T, N, j, V, z, $, fe, K) {
            const pe = t.Util.bezierBoundingBox(g, T, N, j, V, z, $, fe);
            if (K) {
              K[0] = Math.min(K[0], pe[0], pe[2]), K[1] = Math.max(K[1], pe[0], pe[2]), K[2] = Math.min(K[2], pe[1], pe[3]), K[3] = Math.max(K[3], pe[1], pe[3]);
              return;
            }
            this.updateRectMinMax(b, pe);
          }
          getPathBoundingBox(b = S.PathType.FILL, g = null) {
            const T = [this.minX, this.minY, this.maxX, this.maxY];
            if (b === S.PathType.STROKE) {
              g || (0, t.unreachable)("Stroke bounding box must include transform.");
              const N = t.Util.singularValueDecompose2dScale(g), j = N[0] * this.lineWidth / 2, V = N[1] * this.lineWidth / 2;
              T[0] -= j, T[1] -= V, T[2] += j, T[3] += V;
            }
            return T;
          }
          updateClipFromPath() {
            const b = t.Util.intersect(this.clipBox, this.getPathBoundingBox());
            this.startNewPathAndClipBox(b || [0, 0, 0, 0]);
          }
          isEmptyClip() {
            return this.minX === 1 / 0;
          }
          startNewPathAndClipBox(b) {
            this.clipBox = b, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
          }
          getClippedPathBoundingBox(b = S.PathType.FILL, g = null) {
            return t.Util.intersect(this.clipBox, this.getPathBoundingBox(b, g));
          }
        }
        function f(B, b, g = null) {
          if (typeof ImageData < "u" && b instanceof ImageData) {
            B.putImageData(b, 0, 0);
            return;
          }
          const T = b.height, N = b.width, j = T % u, V = (T - j) / u, z = j === 0 ? V : V + 1, $ = B.createImageData(N, u);
          let fe = 0, K;
          const pe = b.data, ie = $.data;
          let ge, p, w, D, R, M, X, ce;
          if (g)
            switch (g.length) {
              case 1:
                R = g[0], M = g[0], X = g[0], ce = g[0];
                break;
              case 4:
                R = g[0], M = g[1], X = g[2], ce = g[3];
                break;
            }
          if (b.kind === t.ImageKind.GRAYSCALE_1BPP) {
            const le = pe.byteLength, q = new Uint32Array(ie.buffer, 0, ie.byteLength >> 2), be = q.length, te = N + 7 >> 3;
            let se = 4294967295, H = t.FeatureTest.isLittleEndian ? 4278190080 : 255;
            for (ce && ce[0] === 255 && ce[255] === 0 && ([se, H] = [H, se]), ge = 0; ge < z; ge++) {
              for (w = ge < V ? u : j, K = 0, p = 0; p < w; p++) {
                const re = le - fe;
                let Ae = 0;
                const Te = re > te ? N : re * 8 - 7, De = Te & -8;
                let Oe = 0, xe = 0;
                for (; Ae < De; Ae += 8)
                  xe = pe[fe++], q[K++] = xe & 128 ? se : H, q[K++] = xe & 64 ? se : H, q[K++] = xe & 32 ? se : H, q[K++] = xe & 16 ? se : H, q[K++] = xe & 8 ? se : H, q[K++] = xe & 4 ? se : H, q[K++] = xe & 2 ? se : H, q[K++] = xe & 1 ? se : H;
                for (; Ae < Te; Ae++)
                  Oe === 0 && (xe = pe[fe++], Oe = 128), q[K++] = xe & Oe ? se : H, Oe >>= 1;
              }
              for (; K < be; )
                q[K++] = 0;
              B.putImageData($, 0, ge * u);
            }
          } else if (b.kind === t.ImageKind.RGBA_32BPP) {
            const le = !!(R || M || X);
            for (p = 0, D = N * u * 4, ge = 0; ge < V; ge++) {
              if (ie.set(pe.subarray(fe, fe + D)), fe += D, le)
                for (let q = 0; q < D; q += 4)
                  R && (ie[q + 0] = R[ie[q + 0]]), M && (ie[q + 1] = M[ie[q + 1]]), X && (ie[q + 2] = X[ie[q + 2]]);
              B.putImageData($, 0, p), p += u;
            }
            if (ge < z) {
              if (D = N * j * 4, ie.set(pe.subarray(fe, fe + D)), le)
                for (let q = 0; q < D; q += 4)
                  R && (ie[q + 0] = R[ie[q + 0]]), M && (ie[q + 1] = M[ie[q + 1]]), X && (ie[q + 2] = X[ie[q + 2]]);
              B.putImageData($, 0, p);
            }
          } else if (b.kind === t.ImageKind.RGB_24BPP) {
            const le = !!(R || M || X);
            for (w = u, D = N * w, ge = 0; ge < z; ge++) {
              for (ge >= V && (w = j, D = N * w), K = 0, p = D; p--; )
                ie[K++] = pe[fe++], ie[K++] = pe[fe++], ie[K++] = pe[fe++], ie[K++] = 255;
              if (le)
                for (let q = 0; q < K; q += 4)
                  R && (ie[q + 0] = R[ie[q + 0]]), M && (ie[q + 1] = M[ie[q + 1]]), X && (ie[q + 2] = X[ie[q + 2]]);
              B.putImageData($, 0, ge * u);
            }
          } else
            throw new Error(`bad image kind: ${b.kind}`);
        }
        function i(B, b) {
          if (b.bitmap) {
            B.drawImage(b.bitmap, 0, 0);
            return;
          }
          const g = b.height, T = b.width, N = g % u, j = (g - N) / u, V = N === 0 ? j : j + 1, z = B.createImageData(T, u);
          let $ = 0;
          const fe = b.data, K = z.data;
          for (let pe = 0; pe < V; pe++) {
            const ie = pe < j ? u : N;
            ({
              srcPos: $
            } = (0, E.applyMaskImageData)({
              src: fe,
              srcPos: $,
              dest: K,
              width: T,
              height: ie
            })), B.putImageData(z, 0, pe * u);
          }
        }
        function c(B, b) {
          const g = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
          for (const T of g)
            B[T] !== void 0 && (b[T] = B[T]);
          B.setLineDash !== void 0 && (b.setLineDash(B.getLineDash()), b.lineDashOffset = B.lineDashOffset);
        }
        function A(B, b) {
          B.strokeStyle = B.fillStyle = b || "#000000", B.fillRule = "nonzero", B.globalAlpha = 1, B.lineWidth = 1, B.lineCap = "butt", B.lineJoin = "miter", B.miterLimit = 10, B.globalCompositeOperation = "source-over", B.font = "10px sans-serif", B.setLineDash !== void 0 && (B.setLineDash([]), B.lineDashOffset = 0);
        }
        function O(B, b, g, T) {
          const N = B.length;
          for (let j = 3; j < N; j += 4) {
            const V = B[j];
            if (V === 0)
              B[j - 3] = b, B[j - 2] = g, B[j - 1] = T;
            else if (V < 255) {
              const z = 255 - V;
              B[j - 3] = B[j - 3] * V + b * z >> 8, B[j - 2] = B[j - 2] * V + g * z >> 8, B[j - 1] = B[j - 1] * V + T * z >> 8;
            }
          }
        }
        function U(B, b, g) {
          const T = B.length, N = 1 / 255;
          for (let j = 3; j < T; j += 4) {
            const V = g ? g[B[j]] : B[j];
            b[j] = b[j] * V * N | 0;
          }
        }
        function P(B, b, g) {
          const T = B.length;
          for (let N = 3; N < T; N += 4) {
            const j = B[N - 3] * 77 + B[N - 2] * 152 + B[N - 1] * 28;
            b[N] = g ? b[N] * g[j >> 8] >> 8 : b[N] * j >> 16;
          }
        }
        function L(B, b, g, T, N, j, V, z, $, fe, K) {
          const pe = !!j, ie = pe ? j[0] : 0, ge = pe ? j[1] : 0, p = pe ? j[2] : 0;
          let w;
          N === "Luminosity" ? w = P : w = U;
          const R = Math.min(T, Math.ceil(1048576 / g));
          for (let M = 0; M < T; M += R) {
            const X = Math.min(R, T - M), ce = B.getImageData(z - fe, M + ($ - K), g, X), le = b.getImageData(z, M + $, g, X);
            pe && O(ce.data, ie, ge, p), w(ce.data, le.data, V), b.putImageData(le, z, M + $);
          }
        }
        function Q(B, b, g, T) {
          const N = T[0], j = T[1], V = T[2] - N, z = T[3] - j;
          V === 0 || z === 0 || (L(b.context, g, V, z, b.subtype, b.backdrop, b.transferMap, N, j, b.offsetX, b.offsetY), B.save(), B.globalAlpha = 1, B.globalCompositeOperation = "source-over", B.setTransform(1, 0, 0, 1, 0, 0), B.drawImage(g.canvas, 0, 0), B.restore());
        }
        function de(B, b) {
          const g = t.Util.singularValueDecompose2dScale(B);
          g[0] = Math.fround(g[0]), g[1] = Math.fround(g[1]);
          const T = Math.fround((globalThis.devicePixelRatio || 1) * r.PixelsPerInch.PDF_TO_CSS_UNITS);
          return b !== void 0 ? b : g[0] <= T || g[1] <= T;
        }
        const oe = ["butt", "round", "square"], Y = ["miter", "round", "bevel"], G = {}, J = {}, we = class {
          constructor(b, g, T, N, {
            optionalContentConfig: j,
            markedContentStack: V = null
          }, z, $) {
            ue(this, ae);
            this.ctx = b, this.current = new h(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = g, this.objs = T, this.canvasFactory = N, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = V || [], this.optionalContentConfig = j, this.cachedCanvases = new o(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = z, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.backgroundColor = ($ == null ? void 0 : $.background) || null, this.foregroundColor = ($ == null ? void 0 : $.foreground) || null, this._cachedScaleForStroking = null, this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
          }
          getObject(b, g = null) {
            return typeof b == "string" ? b.startsWith("g_") ? this.commonObjs.get(b) : this.objs.get(b) : g;
          }
          beginDrawing({
            transform: b,
            viewport: g,
            transparency: T = !1,
            background: N = null
          }) {
            const j = this.ctx.canvas.width, V = this.ctx.canvas.height, z = N || "#ffffff";
            if (this.ctx.save(), this.foregroundColor && this.backgroundColor) {
              this.ctx.fillStyle = this.foregroundColor;
              const $ = this.foregroundColor = this.ctx.fillStyle;
              this.ctx.fillStyle = this.backgroundColor;
              const fe = this.backgroundColor = this.ctx.fillStyle;
              let K = !0, pe = z;
              if (this.ctx.fillStyle = z, pe = this.ctx.fillStyle, K = typeof pe == "string" && /^#[0-9A-Fa-f]{6}$/.test(pe), $ === "#000000" && fe === "#ffffff" || $ === fe || !K)
                this.foregroundColor = this.backgroundColor = null;
              else {
                const [ie, ge, p] = (0, r.getRGB)(pe), w = (R) => (R /= 255, R <= 0.03928 ? R / 12.92 : ((R + 0.055) / 1.055) ** 2.4), D = Math.round(0.2126 * w(ie) + 0.7152 * w(ge) + 0.0722 * w(p));
                this.selectColor = (R, M, X) => {
                  const ce = 0.2126 * w(R) + 0.7152 * w(M) + 0.0722 * w(X);
                  return Math.round(ce) === D ? fe : $;
                };
              }
            }
            if (this.ctx.fillStyle = this.backgroundColor || z, this.ctx.fillRect(0, 0, j, V), this.ctx.restore(), T) {
              const $ = this.cachedCanvases.getCanvas("transparent", j, V);
              this.compositeCtx = this.ctx, this.transparentCanvas = $.canvas, this.ctx = $.context, this.ctx.save(), this.ctx.transform(...(0, r.getCurrentTransform)(this.compositeCtx));
            }
            this.ctx.save(), A(this.ctx, this.foregroundColor), b && (this.ctx.transform(...b), this.outputScaleX = b[0], this.outputScaleY = b[0]), this.ctx.transform(...g.transform), this.viewportScale = g.scale, this.baseTransform = (0, r.getCurrentTransform)(this.ctx);
          }
          executeOperatorList(b, g, T, N) {
            const j = b.argsArray, V = b.fnArray;
            let z = g || 0;
            const $ = j.length;
            if ($ === z)
              return z;
            const fe = $ - z > m && typeof T == "function", K = fe ? Date.now() + x : 0;
            let pe = 0;
            const ie = this.commonObjs, ge = this.objs;
            let p;
            for (; ; ) {
              if (N !== void 0 && z === N.nextBreakPoint)
                return N.breakIt(z, T), z;
              if (p = V[z], p !== t.OPS.dependency)
                this[p].apply(this, j[z]);
              else
                for (const w of j[z]) {
                  const D = w.startsWith("g_") ? ie : ge;
                  if (!D.has(w))
                    return D.get(w, T), z;
                }
              if (z++, z === $)
                return z;
              if (fe && ++pe > m) {
                if (Date.now() > K)
                  return T(), z;
                pe = 0;
              }
            }
          }
          endDrawing() {
            me(this, ae, At).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
            for (const b of this._cachedBitmapsMap.values()) {
              for (const g of b.values())
                typeof HTMLCanvasElement < "u" && g instanceof HTMLCanvasElement && (g.width = g.height = 0);
              b.clear();
            }
            this._cachedBitmapsMap.clear();
          }
          _scaleImage(b, g) {
            const T = b.width, N = b.height;
            let j = Math.max(Math.hypot(g[0], g[1]), 1), V = Math.max(Math.hypot(g[2], g[3]), 1), z = T, $ = N, fe = "prescale1", K, pe;
            for (; j > 2 && z > 1 || V > 2 && $ > 1; ) {
              let ie = z, ge = $;
              j > 2 && z > 1 && (ie = Math.ceil(z / 2), j /= z / ie), V > 2 && $ > 1 && (ge = Math.ceil($ / 2), V /= $ / ge), K = this.cachedCanvases.getCanvas(fe, ie, ge), pe = K.context, pe.clearRect(0, 0, ie, ge), pe.drawImage(b, 0, 0, z, $, 0, 0, ie, ge), b = K.canvas, z = ie, $ = ge, fe = fe === "prescale1" ? "prescale2" : "prescale1";
            }
            return {
              img: b,
              paintWidth: z,
              paintHeight: $
            };
          }
          _createMaskCanvas(b) {
            const g = this.ctx, {
              width: T,
              height: N
            } = b, j = this.current.fillColor, V = this.current.patternFill, z = (0, r.getCurrentTransform)(g);
            let $, fe, K, pe;
            if ((b.bitmap || b.data) && b.count > 1) {
              const be = b.bitmap || b.data.buffer;
              fe = JSON.stringify(V ? z : [z.slice(0, 4), j]), $ = this._cachedBitmapsMap.get(be), $ || ($ = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(be, $));
              const te = $.get(fe);
              if (te && !V) {
                const se = Math.round(Math.min(z[0], z[2]) + z[4]), H = Math.round(Math.min(z[1], z[3]) + z[5]);
                return {
                  canvas: te,
                  offsetX: se,
                  offsetY: H
                };
              }
              K = te;
            }
            K || (pe = this.cachedCanvases.getCanvas("maskCanvas", T, N), i(pe.context, b));
            let ie = t.Util.transform(z, [1 / T, 0, 0, -1 / N, 0, 0]);
            ie = t.Util.transform(ie, [1, 0, 0, 1, 0, -N]);
            const ge = t.Util.applyTransform([0, 0], ie), p = t.Util.applyTransform([T, N], ie), w = t.Util.normalizeRect([ge[0], ge[1], p[0], p[1]]), D = Math.round(w[2] - w[0]) || 1, R = Math.round(w[3] - w[1]) || 1, M = this.cachedCanvases.getCanvas("fillCanvas", D, R), X = M.context, ce = Math.min(ge[0], p[0]), le = Math.min(ge[1], p[1]);
            X.translate(-ce, -le), X.transform(...ie), K || (K = this._scaleImage(pe.canvas, (0, r.getCurrentTransformInverse)(X)), K = K.img, $ && V && $.set(fe, K)), X.imageSmoothingEnabled = de((0, r.getCurrentTransform)(X), b.interpolate), s(X, K, 0, 0, K.width, K.height, 0, 0, T, N), X.globalCompositeOperation = "source-in";
            const q = t.Util.transform((0, r.getCurrentTransformInverse)(X), [1, 0, 0, 1, -ce, -le]);
            return X.fillStyle = V ? j.getPattern(g, this, q, S.PathType.FILL) : j, X.fillRect(0, 0, T, N), $ && !V && (this.cachedCanvases.delete("fillCanvas"), $.set(fe, M.canvas)), {
              canvas: M.canvas,
              offsetX: Math.round(ce),
              offsetY: Math.round(le)
            };
          }
          setLineWidth(b) {
            b !== this.current.lineWidth && (this._cachedScaleForStroking = null), this.current.lineWidth = b, this.ctx.lineWidth = b;
          }
          setLineCap(b) {
            this.ctx.lineCap = oe[b];
          }
          setLineJoin(b) {
            this.ctx.lineJoin = Y[b];
          }
          setMiterLimit(b) {
            this.ctx.miterLimit = b;
          }
          setDash(b, g) {
            const T = this.ctx;
            T.setLineDash !== void 0 && (T.setLineDash(b), T.lineDashOffset = g);
          }
          setRenderingIntent(b) {
          }
          setFlatness(b) {
          }
          setGState(b) {
            for (const [g, T] of b)
              switch (g) {
                case "LW":
                  this.setLineWidth(T);
                  break;
                case "LC":
                  this.setLineCap(T);
                  break;
                case "LJ":
                  this.setLineJoin(T);
                  break;
                case "ML":
                  this.setMiterLimit(T);
                  break;
                case "D":
                  this.setDash(T[0], T[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(T);
                  break;
                case "FL":
                  this.setFlatness(T);
                  break;
                case "Font":
                  this.setFont(T[0], T[1]);
                  break;
                case "CA":
                  this.current.strokeAlpha = T;
                  break;
                case "ca":
                  this.current.fillAlpha = T, this.ctx.globalAlpha = T;
                  break;
                case "BM":
                  this.ctx.globalCompositeOperation = T;
                  break;
                case "SMask":
                  this.current.activeSMask = T ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                  break;
                case "TR":
                  this.current.transferMaps = T;
              }
          }
          get inSMaskMode() {
            return !!this.suspendedCtx;
          }
          checkSMaskState() {
            const b = this.inSMaskMode;
            this.current.activeSMask && !b ? this.beginSMaskMode() : !this.current.activeSMask && b && this.endSMaskMode();
          }
          beginSMaskMode() {
            if (this.inSMaskMode)
              throw new Error("beginSMaskMode called while already in smask mode");
            const b = this.ctx.canvas.width, g = this.ctx.canvas.height, T = "smaskGroupAt" + this.groupLevel, N = this.cachedCanvases.getCanvas(T, b, g);
            this.suspendedCtx = this.ctx, this.ctx = N.context;
            const j = this.ctx;
            j.setTransform(...(0, r.getCurrentTransform)(this.suspendedCtx)), c(this.suspendedCtx, j), l(j, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
          }
          endSMaskMode() {
            if (!this.inSMaskMode)
              throw new Error("endSMaskMode called while not in smask mode");
            this.ctx._removeMirroring(), c(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
          }
          compose(b) {
            if (!this.current.activeSMask)
              return;
            b ? (b[0] = Math.floor(b[0]), b[1] = Math.floor(b[1]), b[2] = Math.ceil(b[2]), b[3] = Math.ceil(b[3])) : b = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
            const g = this.current.activeSMask, T = this.suspendedCtx;
            Q(T, g, this.ctx, b), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
          }
          save() {
            this.inSMaskMode ? (c(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
            const b = this.current;
            this.stateStack.push(b), this.current = b.clone();
          }
          restore() {
            this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), c(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking = null, this._cachedGetSinglePixelWidth = null);
          }
          transform(b, g, T, N, j, V) {
            this.ctx.transform(b, g, T, N, j, V), this._cachedScaleForStroking = null, this._cachedGetSinglePixelWidth = null;
          }
          constructPath(b, g, T) {
            const N = this.ctx, j = this.current;
            let V = j.x, z = j.y, $, fe;
            const K = (0, r.getCurrentTransform)(N), pe = K[0] === 0 && K[3] === 0 || K[1] === 0 && K[2] === 0, ie = pe ? T.slice(0) : null;
            for (let ge = 0, p = 0, w = b.length; ge < w; ge++)
              switch (b[ge] | 0) {
                case t.OPS.rectangle:
                  V = g[p++], z = g[p++];
                  const D = g[p++], R = g[p++], M = V + D, X = z + R;
                  N.moveTo(V, z), D === 0 || R === 0 ? N.lineTo(M, X) : (N.lineTo(M, z), N.lineTo(M, X), N.lineTo(V, X)), pe || j.updateRectMinMax(K, [V, z, M, X]), N.closePath();
                  break;
                case t.OPS.moveTo:
                  V = g[p++], z = g[p++], N.moveTo(V, z), pe || j.updatePathMinMax(K, V, z);
                  break;
                case t.OPS.lineTo:
                  V = g[p++], z = g[p++], N.lineTo(V, z), pe || j.updatePathMinMax(K, V, z);
                  break;
                case t.OPS.curveTo:
                  $ = V, fe = z, V = g[p + 4], z = g[p + 5], N.bezierCurveTo(g[p], g[p + 1], g[p + 2], g[p + 3], V, z), j.updateCurvePathMinMax(K, $, fe, g[p], g[p + 1], g[p + 2], g[p + 3], V, z, ie), p += 6;
                  break;
                case t.OPS.curveTo2:
                  $ = V, fe = z, N.bezierCurveTo(V, z, g[p], g[p + 1], g[p + 2], g[p + 3]), j.updateCurvePathMinMax(K, $, fe, V, z, g[p], g[p + 1], g[p + 2], g[p + 3], ie), V = g[p + 2], z = g[p + 3], p += 4;
                  break;
                case t.OPS.curveTo3:
                  $ = V, fe = z, V = g[p + 2], z = g[p + 3], N.bezierCurveTo(g[p], g[p + 1], V, z, V, z), j.updateCurvePathMinMax(K, $, fe, g[p], g[p + 1], V, z, V, z, ie), p += 4;
                  break;
                case t.OPS.closePath:
                  N.closePath();
                  break;
              }
            pe && j.updateScalingPathMinMax(K, ie), j.setCurrentPoint(V, z);
          }
          closePath() {
            this.ctx.closePath();
          }
          stroke(b) {
            b = typeof b < "u" ? b : !0;
            const g = this.ctx, T = this.current.strokeColor;
            g.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof T == "object" && (T == null ? void 0 : T.getPattern) ? (g.save(), g.strokeStyle = T.getPattern(g, this, (0, r.getCurrentTransformInverse)(g), S.PathType.STROKE), this.rescaleAndStroke(!1), g.restore()) : this.rescaleAndStroke(!0)), b && this.consumePath(this.current.getClippedPathBoundingBox()), g.globalAlpha = this.current.fillAlpha;
          }
          closeStroke() {
            this.closePath(), this.stroke();
          }
          fill(b) {
            b = typeof b < "u" ? b : !0;
            const g = this.ctx, T = this.current.fillColor, N = this.current.patternFill;
            let j = !1;
            N && (g.save(), g.fillStyle = T.getPattern(g, this, (0, r.getCurrentTransformInverse)(g), S.PathType.FILL), j = !0);
            const V = this.current.getClippedPathBoundingBox();
            this.contentVisible && V !== null && (this.pendingEOFill ? (g.fill("evenodd"), this.pendingEOFill = !1) : g.fill()), j && g.restore(), b && this.consumePath(V);
          }
          eoFill() {
            this.pendingEOFill = !0, this.fill();
          }
          fillStroke() {
            this.fill(!1), this.stroke(!1), this.consumePath();
          }
          eoFillStroke() {
            this.pendingEOFill = !0, this.fillStroke();
          }
          closeFillStroke() {
            this.closePath(), this.fillStroke();
          }
          closeEOFillStroke() {
            this.pendingEOFill = !0, this.closePath(), this.fillStroke();
          }
          endPath() {
            this.consumePath();
          }
          clip() {
            this.pendingClip = G;
          }
          eoClip() {
            this.pendingClip = J;
          }
          beginText() {
            this.current.textMatrix = t.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
          }
          endText() {
            const b = this.pendingTextPaths, g = this.ctx;
            if (b === void 0) {
              g.beginPath();
              return;
            }
            g.save(), g.beginPath();
            for (const T of b)
              g.setTransform(...T.transform), g.translate(T.x, T.y), T.addToPath(g, T.fontSize);
            g.restore(), g.clip(), g.beginPath(), delete this.pendingTextPaths;
          }
          setCharSpacing(b) {
            this.current.charSpacing = b;
          }
          setWordSpacing(b) {
            this.current.wordSpacing = b;
          }
          setHScale(b) {
            this.current.textHScale = b / 100;
          }
          setLeading(b) {
            this.current.leading = -b;
          }
          setFont(b, g) {
            const T = this.commonObjs.get(b), N = this.current;
            if (!T)
              throw new Error(`Can't find font for ${b}`);
            if (N.fontMatrix = T.fontMatrix || t.FONT_IDENTITY_MATRIX, (N.fontMatrix[0] === 0 || N.fontMatrix[3] === 0) && (0, t.warn)("Invalid font matrix for font " + b), g < 0 ? (g = -g, N.fontDirection = -1) : N.fontDirection = 1, this.current.font = T, this.current.fontSize = g, T.isType3Font)
              return;
            const j = T.loadedName || "sans-serif";
            let V = "normal";
            T.black ? V = "900" : T.bold && (V = "bold");
            const z = T.italic ? "italic" : "normal", $ = `"${j}", ${T.fallbackName}`;
            let fe = g;
            g < F ? fe = F : g > v && (fe = v), this.current.fontSizeScale = g / fe, this.ctx.font = `${z} ${V} ${fe}px ${$}`;
          }
          setTextRenderingMode(b) {
            this.current.textRenderingMode = b;
          }
          setTextRise(b) {
            this.current.textRise = b;
          }
          moveText(b, g) {
            this.current.x = this.current.lineX += b, this.current.y = this.current.lineY += g;
          }
          setLeadingMoveText(b, g) {
            this.setLeading(-g), this.moveText(b, g);
          }
          setTextMatrix(b, g, T, N, j, V) {
            this.current.textMatrix = [b, g, T, N, j, V], this.current.textMatrixScale = Math.hypot(b, g), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
          }
          nextLine() {
            this.moveText(0, this.current.leading);
          }
          paintChar(b, g, T, N) {
            const j = this.ctx, V = this.current, z = V.font, $ = V.textRenderingMode, fe = V.fontSize / V.fontSizeScale, K = $ & t.TextRenderingMode.FILL_STROKE_MASK, pe = !!($ & t.TextRenderingMode.ADD_TO_PATH_FLAG), ie = V.patternFill && !z.missingFile;
            let ge;
            (z.disableFontFace || pe || ie) && (ge = z.getPathGenerator(this.commonObjs, b)), z.disableFontFace || ie ? (j.save(), j.translate(g, T), j.beginPath(), ge(j, fe), N && j.setTransform(...N), (K === t.TextRenderingMode.FILL || K === t.TextRenderingMode.FILL_STROKE) && j.fill(), (K === t.TextRenderingMode.STROKE || K === t.TextRenderingMode.FILL_STROKE) && j.stroke(), j.restore()) : ((K === t.TextRenderingMode.FILL || K === t.TextRenderingMode.FILL_STROKE) && j.fillText(b, g, T), (K === t.TextRenderingMode.STROKE || K === t.TextRenderingMode.FILL_STROKE) && j.strokeText(b, g, T)), pe && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
              transform: (0, r.getCurrentTransform)(j),
              x: g,
              y: T,
              fontSize: fe,
              addToPath: ge
            });
          }
          get isFontSubpixelAAEnabled() {
            const {
              context: b
            } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
            b.scale(1.5, 1), b.fillText("I", 0, 10);
            const g = b.getImageData(0, 0, 10, 10).data;
            let T = !1;
            for (let N = 3; N < g.length; N += 4)
              if (g[N] > 0 && g[N] < 255) {
                T = !0;
                break;
              }
            return (0, t.shadow)(this, "isFontSubpixelAAEnabled", T);
          }
          showText(b) {
            const g = this.current, T = g.font;
            if (T.isType3Font)
              return this.showType3Text(b);
            const N = g.fontSize;
            if (N === 0)
              return;
            const j = this.ctx, V = g.fontSizeScale, z = g.charSpacing, $ = g.wordSpacing, fe = g.fontDirection, K = g.textHScale * fe, pe = b.length, ie = T.vertical, ge = ie ? 1 : -1, p = T.defaultVMetrics, w = N * g.fontMatrix[0], D = g.textRenderingMode === t.TextRenderingMode.FILL && !T.disableFontFace && !g.patternFill;
            j.save(), j.transform(...g.textMatrix), j.translate(g.x, g.y + g.textRise), fe > 0 ? j.scale(K, -1) : j.scale(K, 1);
            let R;
            if (g.patternFill) {
              j.save();
              const q = g.fillColor.getPattern(j, this, (0, r.getCurrentTransformInverse)(j), S.PathType.FILL);
              R = (0, r.getCurrentTransform)(j), j.restore(), j.fillStyle = q;
            }
            let M = g.lineWidth;
            const X = g.textMatrixScale;
            if (X === 0 || M === 0) {
              const q = g.textRenderingMode & t.TextRenderingMode.FILL_STROKE_MASK;
              (q === t.TextRenderingMode.STROKE || q === t.TextRenderingMode.FILL_STROKE) && (M = this.getSinglePixelWidth());
            } else
              M /= X;
            if (V !== 1 && (j.scale(V, V), M /= V), j.lineWidth = M, T.isInvalidPDFjsFont) {
              const q = [];
              let be = 0;
              for (const te of b)
                q.push(te.unicode), be += te.width;
              j.fillText(q.join(""), 0, 0), g.x += be * w * K, j.restore(), this.compose();
              return;
            }
            let ce = 0, le;
            for (le = 0; le < pe; ++le) {
              const q = b[le];
              if (typeof q == "number") {
                ce += ge * q * N / 1e3;
                continue;
              }
              let be = !1;
              const te = (q.isSpace ? $ : 0) + z, se = q.fontChar, H = q.accent;
              let re, Ae, Te = q.width;
              if (ie) {
                const Oe = q.vmetric || p, xe = -(q.vmetric ? Oe[1] : Te * 0.5) * w, he = Oe[2] * w;
                Te = Oe ? -Oe[0] : Te, re = xe / V, Ae = (ce + he) / V;
              } else
                re = ce / V, Ae = 0;
              if (T.remeasure && Te > 0) {
                const Oe = j.measureText(se).width * 1e3 / N * V;
                if (Te < Oe && this.isFontSubpixelAAEnabled) {
                  const xe = Te / Oe;
                  be = !0, j.save(), j.scale(xe, 1), re /= xe;
                } else
                  Te !== Oe && (re += (Te - Oe) / 2e3 * N / V);
              }
              if (this.contentVisible && (q.isInFont || T.missingFile)) {
                if (D && !H)
                  j.fillText(se, re, Ae);
                else if (this.paintChar(se, re, Ae, R), H) {
                  const Oe = re + N * H.offset.x / V, xe = Ae - N * H.offset.y / V;
                  this.paintChar(H.fontChar, Oe, xe, R);
                }
              }
              let De;
              ie ? De = Te * w - te * fe : De = Te * w + te * fe, ce += De, be && j.restore();
            }
            ie ? g.y -= ce : g.x += ce * K, j.restore(), this.compose();
          }
          showType3Text(b) {
            const g = this.ctx, T = this.current, N = T.font, j = T.fontSize, V = T.fontDirection, z = N.vertical ? 1 : -1, $ = T.charSpacing, fe = T.wordSpacing, K = T.textHScale * V, pe = T.fontMatrix || t.FONT_IDENTITY_MATRIX, ie = b.length, ge = T.textRenderingMode === t.TextRenderingMode.INVISIBLE;
            let p, w, D, R;
            if (!(ge || j === 0)) {
              for (this._cachedScaleForStroking = null, this._cachedGetSinglePixelWidth = null, g.save(), g.transform(...T.textMatrix), g.translate(T.x, T.y), g.scale(K, V), p = 0; p < ie; ++p) {
                if (w = b[p], typeof w == "number") {
                  R = z * w * j / 1e3, this.ctx.translate(R, 0), T.x += R * K;
                  continue;
                }
                const M = (w.isSpace ? fe : 0) + $, X = N.charProcOperatorList[w.operatorListId];
                if (!X) {
                  (0, t.warn)(`Type3 character "${w.operatorListId}" is not available.`);
                  continue;
                }
                this.contentVisible && (this.processingType3 = w, this.save(), g.scale(j, j), g.transform(...pe), this.executeOperatorList(X), this.restore()), D = t.Util.applyTransform([w.width, 0], pe)[0] * j + M, g.translate(D, 0), T.x += D * K;
              }
              g.restore(), this.processingType3 = null;
            }
          }
          setCharWidth(b, g) {
          }
          setCharWidthAndBounds(b, g, T, N, j, V) {
            this.ctx.rect(T, N, j - T, V - N), this.ctx.clip(), this.endPath();
          }
          getColorN_Pattern(b) {
            let g;
            if (b[0] === "TilingPattern") {
              const T = b[1], N = this.baseTransform || (0, r.getCurrentTransform)(this.ctx), j = {
                createCanvasGraphics: (V) => new we(V, this.commonObjs, this.objs, this.canvasFactory, {
                  optionalContentConfig: this.optionalContentConfig,
                  markedContentStack: this.markedContentStack
                })
              };
              g = new S.TilingPattern(b, T, this.ctx, j, N);
            } else
              g = this._getPattern(b[1], b[2]);
            return g;
          }
          setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          }
          setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
          }
          setStrokeRGBColor(b, g, T) {
            var j;
            const N = ((j = this.selectColor) == null ? void 0 : j.call(this, b, g, T)) || t.Util.makeHexColor(b, g, T);
            this.ctx.strokeStyle = N, this.current.strokeColor = N;
          }
          setFillRGBColor(b, g, T) {
            var j;
            const N = ((j = this.selectColor) == null ? void 0 : j.call(this, b, g, T)) || t.Util.makeHexColor(b, g, T);
            this.ctx.fillStyle = N, this.current.fillColor = N, this.current.patternFill = !1;
          }
          _getPattern(b, g = null) {
            let T;
            return this.cachedPatterns.has(b) ? T = this.cachedPatterns.get(b) : (T = (0, S.getShadingPattern)(this.objs.get(b)), this.cachedPatterns.set(b, T)), g && (T.matrix = g), T;
          }
          shadingFill(b) {
            if (!this.contentVisible)
              return;
            const g = this.ctx;
            this.save();
            const T = this._getPattern(b);
            g.fillStyle = T.getPattern(g, this, (0, r.getCurrentTransformInverse)(g), S.PathType.SHADING);
            const N = (0, r.getCurrentTransformInverse)(g);
            if (N) {
              const j = g.canvas, V = j.width, z = j.height, $ = t.Util.applyTransform([0, 0], N), fe = t.Util.applyTransform([0, z], N), K = t.Util.applyTransform([V, 0], N), pe = t.Util.applyTransform([V, z], N), ie = Math.min($[0], fe[0], K[0], pe[0]), ge = Math.min($[1], fe[1], K[1], pe[1]), p = Math.max($[0], fe[0], K[0], pe[0]), w = Math.max($[1], fe[1], K[1], pe[1]);
              this.ctx.fillRect(ie, ge, p - ie, w - ge);
            } else
              this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            this.compose(this.current.getClippedPathBoundingBox()), this.restore();
          }
          beginInlineImage() {
            (0, t.unreachable)("Should not call beginInlineImage");
          }
          beginImageData() {
            (0, t.unreachable)("Should not call beginImageData");
          }
          paintFormXObjectBegin(b, g) {
            if (!!this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(b) && b.length === 6 && this.transform(...b), this.baseTransform = (0, r.getCurrentTransform)(this.ctx), g)) {
              const T = g[2] - g[0], N = g[3] - g[1];
              this.ctx.rect(g[0], g[1], T, N), this.current.updateRectMinMax((0, r.getCurrentTransform)(this.ctx), g), this.clip(), this.endPath();
            }
          }
          paintFormXObjectEnd() {
            !this.contentVisible || (this.restore(), this.baseTransform = this.baseTransformStack.pop());
          }
          beginGroup(b) {
            if (!this.contentVisible)
              return;
            this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
            const g = this.ctx;
            b.isolated || (0, t.info)("TODO: Support non-isolated groups."), b.knockout && (0, t.warn)("Knockout groups not supported.");
            const T = (0, r.getCurrentTransform)(g);
            if (b.matrix && g.transform(...b.matrix), !b.bbox)
              throw new Error("Bounding box is required.");
            let N = t.Util.getAxialAlignedBoundingBox(b.bbox, (0, r.getCurrentTransform)(g));
            const j = [0, 0, g.canvas.width, g.canvas.height];
            N = t.Util.intersect(N, j) || [0, 0, 0, 0];
            const V = Math.floor(N[0]), z = Math.floor(N[1]);
            let $ = Math.max(Math.ceil(N[2]) - V, 1), fe = Math.max(Math.ceil(N[3]) - z, 1), K = 1, pe = 1;
            $ > y && (K = $ / y, $ = y), fe > y && (pe = fe / y, fe = y), this.current.startNewPathAndClipBox([0, 0, $, fe]);
            let ie = "groupAt" + this.groupLevel;
            b.smask && (ie += "_smask_" + this.smaskCounter++ % 2);
            const ge = this.cachedCanvases.getCanvas(ie, $, fe), p = ge.context;
            p.scale(1 / K, 1 / pe), p.translate(-V, -z), p.transform(...T), b.smask ? this.smaskStack.push({
              canvas: ge.canvas,
              context: p,
              offsetX: V,
              offsetY: z,
              scaleX: K,
              scaleY: pe,
              subtype: b.smask.subtype,
              backdrop: b.smask.backdrop,
              transferMap: b.smask.transferMap || null,
              startTransformInverse: null
            }) : (g.setTransform(1, 0, 0, 1, 0, 0), g.translate(V, z), g.scale(K, pe), g.save()), c(g, p), this.ctx = p, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(g), this.groupLevel++;
          }
          endGroup(b) {
            if (!this.contentVisible)
              return;
            this.groupLevel--;
            const g = this.ctx, T = this.groupStack.pop();
            if (this.ctx = T, this.ctx.imageSmoothingEnabled = !1, b.smask)
              this.tempSMask = this.smaskStack.pop(), this.restore();
            else {
              this.ctx.restore();
              const N = (0, r.getCurrentTransform)(this.ctx);
              this.restore(), this.ctx.save(), this.ctx.setTransform(...N);
              const j = t.Util.getAxialAlignedBoundingBox([0, 0, g.canvas.width, g.canvas.height], N);
              this.ctx.drawImage(g.canvas, 0, 0), this.ctx.restore(), this.compose(j);
            }
          }
          beginAnnotation(b, g, T, N, j) {
            if (me(this, ae, At).call(this), A(this.ctx, this.foregroundColor), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(g) && g.length === 4) {
              const V = g[2] - g[0], z = g[3] - g[1];
              if (j && this.annotationCanvasMap) {
                T = T.slice(), T[4] -= g[0], T[5] -= g[1], g = g.slice(), g[0] = g[1] = 0, g[2] = V, g[3] = z;
                const [$, fe] = t.Util.singularValueDecompose2dScale((0, r.getCurrentTransform)(this.ctx)), {
                  viewportScale: K
                } = this, pe = Math.ceil(V * this.outputScaleX * K), ie = Math.ceil(z * this.outputScaleY * K);
                this.annotationCanvas = this.canvasFactory.create(pe, ie);
                const {
                  canvas: ge,
                  context: p
                } = this.annotationCanvas;
                this.annotationCanvasMap.set(b, ge), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p, this.ctx.setTransform($, 0, 0, -fe, 0, z * fe), A(this.ctx, this.foregroundColor);
              } else
                A(this.ctx, this.foregroundColor), this.ctx.rect(g[0], g[1], V, z), this.ctx.clip(), this.endPath();
            }
            this.current = new h(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...T), this.transform(...N);
          }
          endAnnotation() {
            this.annotationCanvas && (this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
          }
          paintImageMaskXObject(b) {
            if (!this.contentVisible)
              return;
            const g = b.count;
            b = this.getObject(b.data, b), b.count = g;
            const T = this.ctx, N = this.processingType3;
            if (N && (N.compiled === void 0 && (N.compiled = d(b)), N.compiled)) {
              N.compiled(T);
              return;
            }
            const j = this._createMaskCanvas(b), V = j.canvas;
            T.save(), T.setTransform(1, 0, 0, 1, 0, 0), T.drawImage(V, j.offsetX, j.offsetY), T.restore(), this.compose();
          }
          paintImageMaskXObjectRepeat(b, g, T = 0, N = 0, j, V) {
            if (!this.contentVisible)
              return;
            b = this.getObject(b.data, b);
            const z = this.ctx;
            z.save();
            const $ = (0, r.getCurrentTransform)(z);
            z.transform(g, T, N, j, 0, 0);
            const fe = this._createMaskCanvas(b);
            z.setTransform(1, 0, 0, 1, fe.offsetX - $[4], fe.offsetY - $[5]);
            for (let K = 0, pe = V.length; K < pe; K += 2) {
              const ie = t.Util.transform($, [g, T, N, j, V[K], V[K + 1]]), [ge, p] = t.Util.applyTransform([0, 0], ie);
              z.drawImage(fe.canvas, ge, p);
            }
            z.restore(), this.compose();
          }
          paintImageMaskXObjectGroup(b) {
            if (!this.contentVisible)
              return;
            const g = this.ctx, T = this.current.fillColor, N = this.current.patternFill;
            for (const j of b) {
              const {
                data: V,
                width: z,
                height: $,
                transform: fe
              } = j, K = this.cachedCanvases.getCanvas("maskCanvas", z, $), pe = K.context;
              pe.save();
              const ie = this.getObject(V, j);
              i(pe, ie), pe.globalCompositeOperation = "source-in", pe.fillStyle = N ? T.getPattern(pe, this, (0, r.getCurrentTransformInverse)(g), S.PathType.FILL) : T, pe.fillRect(0, 0, z, $), pe.restore(), g.save(), g.transform(...fe), g.scale(1, -1), s(g, K.canvas, 0, 0, z, $, 0, -1, 1, 1), g.restore();
            }
            this.compose();
          }
          paintImageXObject(b) {
            if (!this.contentVisible)
              return;
            const g = this.getObject(b);
            if (!g) {
              (0, t.warn)("Dependent image isn't ready yet");
              return;
            }
            this.paintInlineImageXObject(g);
          }
          paintImageXObjectRepeat(b, g, T, N) {
            if (!this.contentVisible)
              return;
            const j = this.getObject(b);
            if (!j) {
              (0, t.warn)("Dependent image isn't ready yet");
              return;
            }
            const V = j.width, z = j.height, $ = [];
            for (let fe = 0, K = N.length; fe < K; fe += 2)
              $.push({
                transform: [g, 0, 0, T, N[fe], N[fe + 1]],
                x: 0,
                y: 0,
                w: V,
                h: z
              });
            this.paintInlineImageXObjectGroup(j, $);
          }
          paintInlineImageXObject(b) {
            if (!this.contentVisible)
              return;
            const g = b.width, T = b.height, N = this.ctx;
            this.save(), N.scale(1 / g, -1 / T);
            let j;
            if (typeof HTMLElement == "function" && b instanceof HTMLElement || !b.data)
              j = b;
            else {
              const z = this.cachedCanvases.getCanvas("inlineImage", g, T), $ = z.context;
              f($, b, this.current.transferMaps), j = z.canvas;
            }
            const V = this._scaleImage(j, (0, r.getCurrentTransformInverse)(N));
            N.imageSmoothingEnabled = de((0, r.getCurrentTransform)(N), b.interpolate), s(N, V.img, 0, 0, V.paintWidth, V.paintHeight, 0, -T, g, T), this.compose(), this.restore();
          }
          paintInlineImageXObjectGroup(b, g) {
            if (!this.contentVisible)
              return;
            const T = this.ctx, N = b.width, j = b.height, V = this.cachedCanvases.getCanvas("inlineImage", N, j), z = V.context;
            f(z, b, this.current.transferMaps);
            for (const $ of g)
              T.save(), T.transform(...$.transform), T.scale(1, -1), s(T, V.canvas, $.x, $.y, $.w, $.h, 0, -1, 1, 1), T.restore();
            this.compose();
          }
          paintSolidColorImageMask() {
            !this.contentVisible || (this.ctx.fillRect(0, 0, 1, 1), this.compose());
          }
          markPoint(b) {
          }
          markPointProps(b, g) {
          }
          beginMarkedContent(b) {
            this.markedContentStack.push({
              visible: !0
            });
          }
          beginMarkedContentProps(b, g) {
            b === "OC" ? this.markedContentStack.push({
              visible: this.optionalContentConfig.isVisible(g)
            }) : this.markedContentStack.push({
              visible: !0
            }), this.contentVisible = this.isContentVisible();
          }
          endMarkedContent() {
            this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
          }
          beginCompat() {
          }
          endCompat() {
          }
          consumePath(b) {
            const g = this.current.isEmptyClip();
            this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(b);
            const T = this.ctx;
            this.pendingClip && (g || (this.pendingClip === J ? T.clip("evenodd") : T.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), T.beginPath();
          }
          getSinglePixelWidth() {
            if (!this._cachedGetSinglePixelWidth) {
              const b = (0, r.getCurrentTransform)(this.ctx);
              if (b[1] === 0 && b[2] === 0)
                this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(b[0]), Math.abs(b[3]));
              else {
                const g = Math.abs(b[0] * b[3] - b[2] * b[1]), T = Math.hypot(b[0], b[2]), N = Math.hypot(b[1], b[3]);
                this._cachedGetSinglePixelWidth = Math.max(T, N) / g;
              }
            }
            return this._cachedGetSinglePixelWidth;
          }
          getScaleForStroking() {
            if (!this._cachedScaleForStroking) {
              const {
                lineWidth: b
              } = this.current, g = (0, r.getCurrentTransform)(this.ctx);
              let T, N;
              if (g[1] === 0 && g[2] === 0) {
                const j = Math.abs(g[0]), V = Math.abs(g[3]);
                if (b === 0)
                  T = 1 / j, N = 1 / V;
                else {
                  const z = j * b, $ = V * b;
                  T = z < 1 ? 1 / z : 1, N = $ < 1 ? 1 / $ : 1;
                }
              } else {
                const j = Math.abs(g[0] * g[3] - g[2] * g[1]), V = Math.hypot(g[0], g[1]), z = Math.hypot(g[2], g[3]);
                if (b === 0)
                  T = z / j, N = V / j;
                else {
                  const $ = b * j;
                  T = z > $ ? z / $ : 1, N = V > $ ? V / $ : 1;
                }
              }
              this._cachedScaleForStroking = [T, N];
            }
            return this._cachedScaleForStroking;
          }
          rescaleAndStroke(b) {
            const {
              ctx: g
            } = this, {
              lineWidth: T
            } = this.current, [N, j] = this.getScaleForStroking();
            if (g.lineWidth = T || 1, N === 1 && j === 1) {
              g.stroke();
              return;
            }
            let V, z, $;
            b && (V = (0, r.getCurrentTransform)(g), z = g.getLineDash().slice(), $ = g.lineDashOffset), g.scale(N, j);
            const fe = Math.max(N, j);
            g.setLineDash(g.getLineDash().map((K) => K / fe)), g.lineDashOffset /= fe, g.stroke(), b && (g.setTransform(...V), g.setLineDash(z), g.lineDashOffset = $);
          }
          isContentVisible() {
            for (let b = this.markedContentStack.length - 1; b >= 0; b--)
              if (!this.markedContentStack[b].visible)
                return !1;
            return !0;
          }
        };
        let ne = we;
        ae = new WeakSet(), At = function() {
          for (; this.stateStack.length || this.inSMaskMode; )
            this.restore();
          this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
        }, e.CanvasGraphics = ne;
        for (const B in t.OPS)
          ne.prototype[B] !== void 0 && (ne.prototype[t.OPS[B]] = ne.prototype[B]);
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.TilingPattern = e.PathType = void 0, e.getShadingPattern = u;
        var t = n(1), r = n(6), S = n(12);
        const E = {
          FILL: "Fill",
          STROKE: "Stroke",
          SHADING: "Shading"
        };
        e.PathType = E;
        function k(s, d) {
          if (!d || S.isNodeJS)
            return;
          const h = d[2] - d[0], f = d[3] - d[1], i = new Path2D();
          i.rect(d[0], d[1], h, f), s.clip(i);
        }
        class F {
          constructor() {
            this.constructor === F && (0, t.unreachable)("Cannot initialize BaseShadingPattern.");
          }
          getPattern() {
            (0, t.unreachable)("Abstract method `getPattern` called.");
          }
        }
        class v extends F {
          constructor(d) {
            super(), this._type = d[1], this._bbox = d[2], this._colorStops = d[3], this._p0 = d[4], this._p1 = d[5], this._r0 = d[6], this._r1 = d[7], this.matrix = null;
          }
          _createGradient(d) {
            let h;
            this._type === "axial" ? h = d.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (h = d.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
            for (const f of this._colorStops)
              h.addColorStop(f[0], f[1]);
            return h;
          }
          getPattern(d, h, f, i) {
            let c;
            if (i === E.STROKE || i === E.FILL) {
              const A = h.current.getClippedPathBoundingBox(i, (0, r.getCurrentTransform)(d)) || [0, 0, 0, 0], O = Math.ceil(A[2] - A[0]) || 1, U = Math.ceil(A[3] - A[1]) || 1, P = h.cachedCanvases.getCanvas("pattern", O, U, !0), L = P.context;
              L.clearRect(0, 0, L.canvas.width, L.canvas.height), L.beginPath(), L.rect(0, 0, L.canvas.width, L.canvas.height), L.translate(-A[0], -A[1]), f = t.Util.transform(f, [1, 0, 0, 1, A[0], A[1]]), L.transform(...h.baseTransform), this.matrix && L.transform(...this.matrix), k(L, this._bbox), L.fillStyle = this._createGradient(L), L.fill(), c = d.createPattern(P.canvas, "no-repeat");
              const Q = new DOMMatrix(f);
              c.setTransform(Q);
            } else
              k(d, this._bbox), c = this._createGradient(d);
            return c;
          }
        }
        function y(s, d, h, f, i, c, A, O) {
          const U = d.coords, P = d.colors, L = s.data, Q = s.width * 4;
          let de;
          U[h + 1] > U[f + 1] && (de = h, h = f, f = de, de = c, c = A, A = de), U[f + 1] > U[i + 1] && (de = f, f = i, i = de, de = A, A = O, O = de), U[h + 1] > U[f + 1] && (de = h, h = f, f = de, de = c, c = A, A = de);
          const oe = (U[h] + d.offsetX) * d.scaleX, Y = (U[h + 1] + d.offsetY) * d.scaleY, G = (U[f] + d.offsetX) * d.scaleX, J = (U[f + 1] + d.offsetY) * d.scaleY, ne = (U[i] + d.offsetX) * d.scaleX, ae = (U[i + 1] + d.offsetY) * d.scaleY;
          if (Y >= ae)
            return;
          const _e = P[c], we = P[c + 1], B = P[c + 2], b = P[A], g = P[A + 1], T = P[A + 2], N = P[O], j = P[O + 1], V = P[O + 2], z = Math.round(Y), $ = Math.round(ae);
          let fe, K, pe, ie, ge, p, w, D;
          for (let R = z; R <= $; R++) {
            if (R < J) {
              let q;
              R < Y ? q = 0 : q = (Y - R) / (Y - J), fe = oe - (oe - G) * q, K = _e - (_e - b) * q, pe = we - (we - g) * q, ie = B - (B - T) * q;
            } else {
              let q;
              R > ae ? q = 1 : J === ae ? q = 0 : q = (J - R) / (J - ae), fe = G - (G - ne) * q, K = b - (b - N) * q, pe = g - (g - j) * q, ie = T - (T - V) * q;
            }
            let M;
            R < Y ? M = 0 : R > ae ? M = 1 : M = (Y - R) / (Y - ae), ge = oe - (oe - ne) * M, p = _e - (_e - N) * M, w = we - (we - j) * M, D = B - (B - V) * M;
            const X = Math.round(Math.min(fe, ge)), ce = Math.round(Math.max(fe, ge));
            let le = Q * R + X * 4;
            for (let q = X; q <= ce; q++)
              M = (fe - q) / (fe - ge), M < 0 ? M = 0 : M > 1 && (M = 1), L[le++] = K - (K - p) * M | 0, L[le++] = pe - (pe - w) * M | 0, L[le++] = ie - (ie - D) * M | 0, L[le++] = 255;
          }
        }
        function x(s, d, h) {
          const f = d.coords, i = d.colors;
          let c, A;
          switch (d.type) {
            case "lattice":
              const O = d.verticesPerRow, U = Math.floor(f.length / O) - 1, P = O - 1;
              for (c = 0; c < U; c++) {
                let L = c * O;
                for (let Q = 0; Q < P; Q++, L++)
                  y(s, h, f[L], f[L + 1], f[L + O], i[L], i[L + 1], i[L + O]), y(s, h, f[L + O + 1], f[L + 1], f[L + O], i[L + O + 1], i[L + 1], i[L + O]);
              }
              break;
            case "triangles":
              for (c = 0, A = f.length; c < A; c += 3)
                y(s, h, f[c], f[c + 1], f[c + 2], i[c], i[c + 1], i[c + 2]);
              break;
            default:
              throw new Error("illegal figure");
          }
        }
        class m extends F {
          constructor(d) {
            super(), this._coords = d[2], this._colors = d[3], this._figures = d[4], this._bounds = d[5], this._bbox = d[7], this._background = d[8], this.matrix = null;
          }
          _createMeshCanvas(d, h, f) {
            const O = Math.floor(this._bounds[0]), U = Math.floor(this._bounds[1]), P = Math.ceil(this._bounds[2]) - O, L = Math.ceil(this._bounds[3]) - U, Q = Math.min(Math.ceil(Math.abs(P * d[0] * 1.1)), 3e3), de = Math.min(Math.ceil(Math.abs(L * d[1] * 1.1)), 3e3), oe = P / Q, Y = L / de, G = {
              coords: this._coords,
              colors: this._colors,
              offsetX: -O,
              offsetY: -U,
              scaleX: 1 / oe,
              scaleY: 1 / Y
            }, J = Q + 2 * 2, ne = de + 2 * 2, ae = f.getCanvas("mesh", J, ne, !1), _e = ae.context, we = _e.createImageData(Q, de);
            if (h) {
              const b = we.data;
              for (let g = 0, T = b.length; g < T; g += 4)
                b[g] = h[0], b[g + 1] = h[1], b[g + 2] = h[2], b[g + 3] = 255;
            }
            for (const b of this._figures)
              x(we, b, G);
            return _e.putImageData(we, 2, 2), {
              canvas: ae.canvas,
              offsetX: O - 2 * oe,
              offsetY: U - 2 * Y,
              scaleX: oe,
              scaleY: Y
            };
          }
          getPattern(d, h, f, i) {
            k(d, this._bbox);
            let c;
            if (i === E.SHADING)
              c = t.Util.singularValueDecompose2dScale((0, r.getCurrentTransform)(d));
            else if (c = t.Util.singularValueDecompose2dScale(h.baseTransform), this.matrix) {
              const O = t.Util.singularValueDecompose2dScale(this.matrix);
              c = [c[0] * O[0], c[1] * O[1]];
            }
            const A = this._createMeshCanvas(c, i === E.SHADING ? null : this._background, h.cachedCanvases);
            return i !== E.SHADING && (d.setTransform(...h.baseTransform), this.matrix && d.transform(...this.matrix)), d.translate(A.offsetX, A.offsetY), d.scale(A.scaleX, A.scaleY), d.createPattern(A.canvas, "no-repeat");
          }
        }
        class _ extends F {
          getPattern() {
            return "hotpink";
          }
        }
        function u(s) {
          switch (s[0]) {
            case "RadialAxial":
              return new v(s);
            case "Mesh":
              return new m(s);
            case "Dummy":
              return new _();
          }
          throw new Error(`Unknown IR type: ${s[0]}`);
        }
        const l = {
          COLORED: 1,
          UNCOLORED: 2
        };
        class o {
          static get MAX_PATTERN_SIZE() {
            return (0, t.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
          }
          constructor(d, h, f, i, c) {
            this.operatorList = d[2], this.matrix = d[3] || [1, 0, 0, 1, 0, 0], this.bbox = d[4], this.xstep = d[5], this.ystep = d[6], this.paintType = d[7], this.tilingType = d[8], this.color = h, this.ctx = f, this.canvasGraphicsFactory = i, this.baseTransform = c;
          }
          createPatternCanvas(d) {
            const h = this.operatorList, f = this.bbox, i = this.xstep, c = this.ystep, A = this.paintType, O = this.tilingType, U = this.color, P = this.canvasGraphicsFactory;
            (0, t.info)("TilingType: " + O);
            const L = f[0], Q = f[1], de = f[2], oe = f[3], Y = t.Util.singularValueDecompose2dScale(this.matrix), G = t.Util.singularValueDecompose2dScale(this.baseTransform), J = [Y[0] * G[0], Y[1] * G[1]], ne = this.getSizeAndScale(i, this.ctx.canvas.width, J[0]), ae = this.getSizeAndScale(c, this.ctx.canvas.height, J[1]), _e = d.cachedCanvases.getCanvas("pattern", ne.size, ae.size, !0), we = _e.context, B = P.createCanvasGraphics(we);
            B.groupLevel = d.groupLevel, this.setFillAndStrokeStyleToContext(B, A, U);
            let b = L, g = Q, T = de, N = oe;
            return L < 0 && (b = 0, T += Math.abs(L)), Q < 0 && (g = 0, N += Math.abs(Q)), we.translate(-(ne.scale * b), -(ae.scale * g)), B.transform(ne.scale, 0, 0, ae.scale, 0, 0), we.save(), this.clipBbox(B, b, g, T, N), B.baseTransform = (0, r.getCurrentTransform)(B.ctx), B.executeOperatorList(h), B.endDrawing(), {
              canvas: _e.canvas,
              scaleX: ne.scale,
              scaleY: ae.scale,
              offsetX: b,
              offsetY: g
            };
          }
          getSizeAndScale(d, h, f) {
            d = Math.abs(d);
            const i = Math.max(o.MAX_PATTERN_SIZE, h);
            let c = Math.ceil(d * f);
            return c >= i ? c = i : f = c / d, {
              scale: f,
              size: c
            };
          }
          clipBbox(d, h, f, i, c) {
            const A = i - h, O = c - f;
            d.ctx.rect(h, f, A, O), d.current.updateRectMinMax((0, r.getCurrentTransform)(d.ctx), [h, f, i, c]), d.clip(), d.endPath();
          }
          setFillAndStrokeStyleToContext(d, h, f) {
            const i = d.ctx, c = d.current;
            switch (h) {
              case l.COLORED:
                const A = this.ctx;
                i.fillStyle = A.fillStyle, i.strokeStyle = A.strokeStyle, c.fillColor = A.fillStyle, c.strokeColor = A.strokeStyle;
                break;
              case l.UNCOLORED:
                const O = t.Util.makeHexColor(f[0], f[1], f[2]);
                i.fillStyle = O, i.strokeStyle = O, c.fillColor = O, c.strokeColor = O;
                break;
              default:
                throw new t.FormatError(`Unsupported paint type: ${h}`);
            }
          }
          getPattern(d, h, f, i) {
            let c = f;
            i !== E.SHADING && (c = t.Util.transform(c, h.baseTransform), this.matrix && (c = t.Util.transform(c, this.matrix)));
            const A = this.createPatternCanvas(h);
            let O = new DOMMatrix(c);
            O = O.translate(A.offsetX, A.offsetY), O = O.scale(1 / A.scaleX, 1 / A.scaleY);
            const U = d.createPattern(A.canvas, "repeat");
            return U.setTransform(O), U;
          }
        }
        e.TilingPattern = o;
      },
      (a, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.isNodeJS = void 0;
        const n = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
        e.isNodeJS = n;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.applyMaskImageData = r;
        var t = n(1);
        function r({
          src: S,
          srcPos: E = 0,
          dest: k,
          destPos: F = 0,
          width: v,
          height: y,
          inverseDecode: x = !1
        }) {
          const m = t.FeatureTest.isLittleEndian ? 4278190080 : 255, [_, u] = x ? [0, m] : [m, 0], l = v >> 3, o = v & 7, s = S.length;
          k = new Uint32Array(k.buffer);
          for (let d = 0; d < y; d++) {
            for (const f = E + l; E < f; E++) {
              const i = E < s ? S[E] : 255;
              k[F++] = i & 128 ? u : _, k[F++] = i & 64 ? u : _, k[F++] = i & 32 ? u : _, k[F++] = i & 16 ? u : _, k[F++] = i & 8 ? u : _, k[F++] = i & 4 ? u : _, k[F++] = i & 2 ? u : _, k[F++] = i & 1 ? u : _;
            }
            if (o === 0)
              continue;
            const h = E < s ? S[E++] : 255;
            for (let f = 0; f < o; f++)
              k[F++] = h & 1 << 7 - f ? u : _;
          }
          return {
            srcPos: E,
            destPos: F
          };
        }
      },
      (a, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.GlobalWorkerOptions = void 0;
        const n = /* @__PURE__ */ Object.create(null);
        e.GlobalWorkerOptions = n, n.workerPort = n.workerPort === void 0 ? null : n.workerPort, n.workerSrc = n.workerSrc === void 0 ? "" : n.workerSrc;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.MessageHandler = void 0;
        var t = n(1);
        const r = {
          UNKNOWN: 0,
          DATA: 1,
          ERROR: 2
        }, S = {
          UNKNOWN: 0,
          CANCEL: 1,
          CANCEL_COMPLETE: 2,
          CLOSE: 3,
          ENQUEUE: 4,
          ERROR: 5,
          PULL: 6,
          PULL_COMPLETE: 7,
          START_COMPLETE: 8
        };
        function E(F) {
          switch (F instanceof Error || typeof F == "object" && F !== null || (0, t.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), F.name) {
            case "AbortException":
              return new t.AbortException(F.message);
            case "MissingPDFException":
              return new t.MissingPDFException(F.message);
            case "PasswordException":
              return new t.PasswordException(F.message, F.code);
            case "UnexpectedResponseException":
              return new t.UnexpectedResponseException(F.message, F.status);
            case "UnknownErrorException":
              return new t.UnknownErrorException(F.message, F.details);
            default:
              return new t.UnknownErrorException(F.message, F.toString());
          }
        }
        class k {
          constructor(v, y, x) {
            this.sourceName = v, this.targetName = y, this.comObj = x, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (m) => {
              const _ = m.data;
              if (_.targetName !== this.sourceName)
                return;
              if (_.stream) {
                this._processStreamMessage(_);
                return;
              }
              if (_.callback) {
                const l = _.callbackId, o = this.callbackCapabilities[l];
                if (!o)
                  throw new Error(`Cannot resolve callback ${l}`);
                if (delete this.callbackCapabilities[l], _.callback === r.DATA)
                  o.resolve(_.data);
                else if (_.callback === r.ERROR)
                  o.reject(E(_.reason));
                else
                  throw new Error("Unexpected callback case");
                return;
              }
              const u = this.actionHandler[_.action];
              if (!u)
                throw new Error(`Unknown action from worker: ${_.action}`);
              if (_.callbackId) {
                const l = this.sourceName, o = _.sourceName;
                new Promise(function(s) {
                  s(u(_.data));
                }).then(function(s) {
                  x.postMessage({
                    sourceName: l,
                    targetName: o,
                    callback: r.DATA,
                    callbackId: _.callbackId,
                    data: s
                  });
                }, function(s) {
                  x.postMessage({
                    sourceName: l,
                    targetName: o,
                    callback: r.ERROR,
                    callbackId: _.callbackId,
                    reason: E(s)
                  });
                });
                return;
              }
              if (_.streamId) {
                this._createStreamSink(_);
                return;
              }
              u(_.data);
            }, x.addEventListener("message", this._onComObjOnMessage);
          }
          on(v, y) {
            const x = this.actionHandler;
            if (x[v])
              throw new Error(`There is already an actionName called "${v}"`);
            x[v] = y;
          }
          send(v, y, x) {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: v,
              data: y
            }, x);
          }
          sendWithPromise(v, y, x) {
            const m = this.callbackId++, _ = (0, t.createPromiseCapability)();
            this.callbackCapabilities[m] = _;
            try {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: v,
                callbackId: m,
                data: y
              }, x);
            } catch (u) {
              _.reject(u);
            }
            return _.promise;
          }
          sendWithStream(v, y, x, m) {
            const _ = this.streamId++, u = this.sourceName, l = this.targetName, o = this.comObj;
            return new ReadableStream({
              start: (s) => {
                const d = (0, t.createPromiseCapability)();
                return this.streamControllers[_] = {
                  controller: s,
                  startCall: d,
                  pullCall: null,
                  cancelCall: null,
                  isClosed: !1
                }, o.postMessage({
                  sourceName: u,
                  targetName: l,
                  action: v,
                  streamId: _,
                  data: y,
                  desiredSize: s.desiredSize
                }, m), d.promise;
              },
              pull: (s) => {
                const d = (0, t.createPromiseCapability)();
                return this.streamControllers[_].pullCall = d, o.postMessage({
                  sourceName: u,
                  targetName: l,
                  stream: S.PULL,
                  streamId: _,
                  desiredSize: s.desiredSize
                }), d.promise;
              },
              cancel: (s) => {
                (0, t.assert)(s instanceof Error, "cancel must have a valid reason");
                const d = (0, t.createPromiseCapability)();
                return this.streamControllers[_].cancelCall = d, this.streamControllers[_].isClosed = !0, o.postMessage({
                  sourceName: u,
                  targetName: l,
                  stream: S.CANCEL,
                  streamId: _,
                  reason: E(s)
                }), d.promise;
              }
            }, x);
          }
          _createStreamSink(v) {
            const y = v.streamId, x = this.sourceName, m = v.sourceName, _ = this.comObj, u = this, l = this.actionHandler[v.action], o = {
              enqueue(s, d = 1, h) {
                if (this.isCancelled)
                  return;
                const f = this.desiredSize;
                this.desiredSize -= d, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = (0, t.createPromiseCapability)(), this.ready = this.sinkCapability.promise), _.postMessage({
                  sourceName: x,
                  targetName: m,
                  stream: S.ENQUEUE,
                  streamId: y,
                  chunk: s
                }, h);
              },
              close() {
                this.isCancelled || (this.isCancelled = !0, _.postMessage({
                  sourceName: x,
                  targetName: m,
                  stream: S.CLOSE,
                  streamId: y
                }), delete u.streamSinks[y]);
              },
              error(s) {
                (0, t.assert)(s instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, _.postMessage({
                  sourceName: x,
                  targetName: m,
                  stream: S.ERROR,
                  streamId: y,
                  reason: E(s)
                }));
              },
              sinkCapability: (0, t.createPromiseCapability)(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: v.desiredSize,
              ready: null
            };
            o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[y] = o, new Promise(function(s) {
              s(l(v.data, o));
            }).then(function() {
              _.postMessage({
                sourceName: x,
                targetName: m,
                stream: S.START_COMPLETE,
                streamId: y,
                success: !0
              });
            }, function(s) {
              _.postMessage({
                sourceName: x,
                targetName: m,
                stream: S.START_COMPLETE,
                streamId: y,
                reason: E(s)
              });
            });
          }
          _processStreamMessage(v) {
            const y = v.streamId, x = this.sourceName, m = v.sourceName, _ = this.comObj, u = this.streamControllers[y], l = this.streamSinks[y];
            switch (v.stream) {
              case S.START_COMPLETE:
                v.success ? u.startCall.resolve() : u.startCall.reject(E(v.reason));
                break;
              case S.PULL_COMPLETE:
                v.success ? u.pullCall.resolve() : u.pullCall.reject(E(v.reason));
                break;
              case S.PULL:
                if (!l) {
                  _.postMessage({
                    sourceName: x,
                    targetName: m,
                    stream: S.PULL_COMPLETE,
                    streamId: y,
                    success: !0
                  });
                  break;
                }
                l.desiredSize <= 0 && v.desiredSize > 0 && l.sinkCapability.resolve(), l.desiredSize = v.desiredSize, new Promise(function(o) {
                  o(l.onPull && l.onPull());
                }).then(function() {
                  _.postMessage({
                    sourceName: x,
                    targetName: m,
                    stream: S.PULL_COMPLETE,
                    streamId: y,
                    success: !0
                  });
                }, function(o) {
                  _.postMessage({
                    sourceName: x,
                    targetName: m,
                    stream: S.PULL_COMPLETE,
                    streamId: y,
                    reason: E(o)
                  });
                });
                break;
              case S.ENQUEUE:
                if ((0, t.assert)(u, "enqueue should have stream controller"), u.isClosed)
                  break;
                u.controller.enqueue(v.chunk);
                break;
              case S.CLOSE:
                if ((0, t.assert)(u, "close should have stream controller"), u.isClosed)
                  break;
                u.isClosed = !0, u.controller.close(), this._deleteStreamController(u, y);
                break;
              case S.ERROR:
                (0, t.assert)(u, "error should have stream controller"), u.controller.error(E(v.reason)), this._deleteStreamController(u, y);
                break;
              case S.CANCEL_COMPLETE:
                v.success ? u.cancelCall.resolve() : u.cancelCall.reject(E(v.reason)), this._deleteStreamController(u, y);
                break;
              case S.CANCEL:
                if (!l)
                  break;
                new Promise(function(o) {
                  o(l.onCancel && l.onCancel(E(v.reason)));
                }).then(function() {
                  _.postMessage({
                    sourceName: x,
                    targetName: m,
                    stream: S.CANCEL_COMPLETE,
                    streamId: y,
                    success: !0
                  });
                }, function(o) {
                  _.postMessage({
                    sourceName: x,
                    targetName: m,
                    stream: S.CANCEL_COMPLETE,
                    streamId: y,
                    reason: E(o)
                  });
                }), l.sinkCapability.reject(E(v.reason)), l.isCancelled = !0, delete this.streamSinks[y];
                break;
              default:
                throw new Error("Unexpected stream case");
            }
          }
          async _deleteStreamController(v, y) {
            await Promise.allSettled([v.startCall && v.startCall.promise, v.pullCall && v.pullCall.promise, v.cancelCall && v.cancelCall.promise]), delete this.streamControllers[y];
          }
          destroy() {
            this.comObj.removeEventListener("message", this._onComObjOnMessage);
          }
        }
        e.MessageHandler = k;
      },
      (a, e, n) => {
        var S, E;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.Metadata = void 0;
        var t = n(1);
        class r {
          constructor({
            parsedData: F,
            rawData: v
          }) {
            ue(this, S, void 0);
            ue(this, E, void 0);
            Se(this, S, F), Se(this, E, v);
          }
          getRaw() {
            return C(this, E);
          }
          get(F) {
            var v;
            return (v = C(this, S).get(F)) != null ? v : null;
          }
          getAll() {
            return (0, t.objectFromMap)(C(this, S));
          }
          has(F) {
            return C(this, S).has(F);
          }
        }
        S = new WeakMap(), E = new WeakMap(), e.Metadata = r;
      },
      (a, e, n) => {
        var F, v, y, x, m, _, St;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.OptionalContentConfig = void 0;
        var t = n(1), r = n(8);
        const S = Symbol("INTERNAL");
        class E {
          constructor(o, s) {
            ue(this, F, !0);
            this.name = o, this.intent = s;
          }
          get visible() {
            return C(this, F);
          }
          _setVisible(o, s) {
            o !== S && (0, t.unreachable)("Internal method `_setVisible` called."), Se(this, F, s);
          }
        }
        F = new WeakMap();
        class k {
          constructor(o) {
            ue(this, _);
            ue(this, v, null);
            ue(this, y, /* @__PURE__ */ new Map());
            ue(this, x, null);
            ue(this, m, null);
            if (this.name = null, this.creator = null, o !== null) {
              this.name = o.name, this.creator = o.creator, Se(this, m, o.order);
              for (const s of o.groups)
                C(this, y).set(s.id, new E(s.name, s.intent));
              if (o.baseState === "OFF")
                for (const s of C(this, y).values())
                  s._setVisible(S, !1);
              for (const s of o.on)
                C(this, y).get(s)._setVisible(S, !0);
              for (const s of o.off)
                C(this, y).get(s)._setVisible(S, !1);
              Se(this, x, this.getHash());
            }
          }
          isVisible(o) {
            if (C(this, y).size === 0)
              return !0;
            if (!o)
              return (0, t.warn)("Optional content group not defined."), !0;
            if (o.type === "OCG")
              return C(this, y).has(o.id) ? C(this, y).get(o.id).visible : ((0, t.warn)(`Optional content group not found: ${o.id}`), !0);
            if (o.type === "OCMD") {
              if (o.expression)
                return me(this, _, St).call(this, o.expression);
              if (!o.policy || o.policy === "AnyOn") {
                for (const s of o.ids) {
                  if (!C(this, y).has(s))
                    return (0, t.warn)(`Optional content group not found: ${s}`), !0;
                  if (C(this, y).get(s).visible)
                    return !0;
                }
                return !1;
              } else if (o.policy === "AllOn") {
                for (const s of o.ids) {
                  if (!C(this, y).has(s))
                    return (0, t.warn)(`Optional content group not found: ${s}`), !0;
                  if (!C(this, y).get(s).visible)
                    return !1;
                }
                return !0;
              } else if (o.policy === "AnyOff") {
                for (const s of o.ids) {
                  if (!C(this, y).has(s))
                    return (0, t.warn)(`Optional content group not found: ${s}`), !0;
                  if (!C(this, y).get(s).visible)
                    return !0;
                }
                return !1;
              } else if (o.policy === "AllOff") {
                for (const s of o.ids) {
                  if (!C(this, y).has(s))
                    return (0, t.warn)(`Optional content group not found: ${s}`), !0;
                  if (C(this, y).get(s).visible)
                    return !1;
                }
                return !0;
              }
              return (0, t.warn)(`Unknown optional content policy ${o.policy}.`), !0;
            }
            return (0, t.warn)(`Unknown group type ${o.type}.`), !0;
          }
          setVisibility(o, s = !0) {
            if (!C(this, y).has(o)) {
              (0, t.warn)(`Optional content group not found: ${o}`);
              return;
            }
            C(this, y).get(o)._setVisible(S, !!s), Se(this, v, null);
          }
          get hasInitialVisibility() {
            return this.getHash() === C(this, x);
          }
          getOrder() {
            return C(this, y).size ? C(this, m) ? C(this, m).slice() : [...C(this, y).keys()] : null;
          }
          getGroups() {
            return C(this, y).size > 0 ? (0, t.objectFromMap)(C(this, y)) : null;
          }
          getGroup(o) {
            return C(this, y).get(o) || null;
          }
          getHash() {
            if (C(this, v) !== null)
              return C(this, v);
            const o = new r.MurmurHash3_64();
            for (const [s, d] of C(this, y))
              o.update(`${s}:${d.visible}`);
            return Se(this, v, o.hexdigest());
          }
        }
        v = new WeakMap(), y = new WeakMap(), x = new WeakMap(), m = new WeakMap(), _ = new WeakSet(), St = function(o) {
          const s = o.length;
          if (s < 2)
            return !0;
          const d = o[0];
          for (let h = 1; h < s; h++) {
            const f = o[h];
            let i;
            if (Array.isArray(f))
              i = me(this, _, St).call(this, f);
            else if (C(this, y).has(f))
              i = C(this, y).get(f).visible;
            else
              return (0, t.warn)(`Optional content group not found: ${f}`), !0;
            switch (d) {
              case "And":
                if (!i)
                  return !1;
                break;
              case "Or":
                if (i)
                  return !0;
                break;
              case "Not":
                return !i;
              default:
                return !0;
            }
          }
          return d === "And";
        }, e.OptionalContentConfig = k;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.PDFDataTransportStream = void 0;
        var t = n(1), r = n(6);
        class S {
          constructor(v, y) {
            (0, t.assert)(y, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = v.progressiveDone || !1, this._contentDispositionFilename = v.contentDispositionFilename || null;
            const x = v.initialData;
            if ((x == null ? void 0 : x.length) > 0) {
              const m = new Uint8Array(x).buffer;
              this._queuedChunks.push(m);
            }
            this._pdfDataRangeTransport = y, this._isStreamingSupported = !v.disableStream, this._isRangeSupported = !v.disableRange, this._contentLength = v.length, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((m, _) => {
              this._onReceiveData({
                begin: m,
                chunk: _
              });
            }), this._pdfDataRangeTransport.addProgressListener((m, _) => {
              this._onProgress({
                loaded: m,
                total: _
              });
            }), this._pdfDataRangeTransport.addProgressiveReadListener((m) => {
              this._onReceiveData({
                chunk: m
              });
            }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
              this._onProgressiveDone();
            }), this._pdfDataRangeTransport.transportReady();
          }
          _onReceiveData(v) {
            const y = new Uint8Array(v.chunk).buffer;
            if (v.begin === void 0)
              this._fullRequestReader ? this._fullRequestReader._enqueue(y) : this._queuedChunks.push(y);
            else {
              const x = this._rangeReaders.some(function(m) {
                return m._begin !== v.begin ? !1 : (m._enqueue(y), !0);
              });
              (0, t.assert)(x, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
            }
          }
          get _progressiveDataLength() {
            var v, y;
            return (y = (v = this._fullRequestReader) == null ? void 0 : v._loaded) != null ? y : 0;
          }
          _onProgress(v) {
            var y, x, m, _;
            v.total === void 0 ? (x = (y = this._rangeReaders[0]) == null ? void 0 : y.onProgress) == null || x.call(y, {
              loaded: v.loaded
            }) : (_ = (m = this._fullRequestReader) == null ? void 0 : m.onProgress) == null || _.call(m, {
              loaded: v.loaded,
              total: v.total
            });
          }
          _onProgressiveDone() {
            var v;
            (v = this._fullRequestReader) == null || v.progressiveDone(), this._progressiveDone = !0;
          }
          _removeRangeReader(v) {
            const y = this._rangeReaders.indexOf(v);
            y >= 0 && this._rangeReaders.splice(y, 1);
          }
          getFullReader() {
            (0, t.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
            const v = this._queuedChunks;
            return this._queuedChunks = null, new E(this, v, this._progressiveDone, this._contentDispositionFilename);
          }
          getRangeReader(v, y) {
            if (y <= this._progressiveDataLength)
              return null;
            const x = new k(this, v, y);
            return this._pdfDataRangeTransport.requestDataRange(v, y), this._rangeReaders.push(x), x;
          }
          cancelAllRequests(v) {
            var y;
            (y = this._fullRequestReader) == null || y.cancel(v);
            for (const x of this._rangeReaders.slice(0))
              x.cancel(v);
            this._pdfDataRangeTransport.abort();
          }
        }
        e.PDFDataTransportStream = S;
        class E {
          constructor(v, y, x = !1, m = null) {
            this._stream = v, this._done = x || !1, this._filename = (0, r.isPdfFile)(m) ? m : null, this._queuedChunks = y || [], this._loaded = 0;
            for (const _ of this._queuedChunks)
              this._loaded += _.byteLength;
            this._requests = [], this._headersReady = Promise.resolve(), v._fullRequestReader = this, this.onProgress = null;
          }
          _enqueue(v) {
            this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
              value: v,
              done: !1
            }) : this._queuedChunks.push(v), this._loaded += v.byteLength);
          }
          get headersReady() {
            return this._headersReady;
          }
          get filename() {
            return this._filename;
          }
          get isRangeSupported() {
            return this._stream._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._stream._isStreamingSupported;
          }
          get contentLength() {
            return this._stream._contentLength;
          }
          async read() {
            if (this._queuedChunks.length > 0)
              return {
                value: this._queuedChunks.shift(),
                done: !1
              };
            if (this._done)
              return {
                value: void 0,
                done: !0
              };
            const v = (0, t.createPromiseCapability)();
            return this._requests.push(v), v.promise;
          }
          cancel(v) {
            this._done = !0;
            for (const y of this._requests)
              y.resolve({
                value: void 0,
                done: !0
              });
            this._requests.length = 0;
          }
          progressiveDone() {
            this._done || (this._done = !0);
          }
        }
        class k {
          constructor(v, y, x) {
            this._stream = v, this._begin = y, this._end = x, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
          }
          _enqueue(v) {
            if (!this._done) {
              if (this._requests.length === 0)
                this._queuedChunk = v;
              else {
                this._requests.shift().resolve({
                  value: v,
                  done: !1
                });
                for (const x of this._requests)
                  x.resolve({
                    value: void 0,
                    done: !0
                  });
                this._requests.length = 0;
              }
              this._done = !0, this._stream._removeRangeReader(this);
            }
          }
          get isStreamingSupported() {
            return !1;
          }
          async read() {
            if (this._queuedChunk) {
              const y = this._queuedChunk;
              return this._queuedChunk = null, {
                value: y,
                done: !1
              };
            }
            if (this._done)
              return {
                value: void 0,
                done: !0
              };
            const v = (0, t.createPromiseCapability)();
            return this._requests.push(v), v.promise;
          }
          cancel(v) {
            this._done = !0;
            for (const y of this._requests)
              y.resolve({
                value: void 0,
                done: !0
              });
            this._requests.length = 0, this._stream._removeRangeReader(this);
          }
        }
      },
      (a, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.XfaText = void 0;
        class n {
          static textContent(r) {
            const S = [], E = {
              items: S,
              styles: /* @__PURE__ */ Object.create(null)
            };
            function k(F) {
              var x;
              if (!F)
                return;
              let v = null;
              const y = F.name;
              if (y === "#text")
                v = F.value;
              else if (n.shouldBuildText(y))
                (x = F == null ? void 0 : F.attributes) != null && x.textContent ? v = F.attributes.textContent : F.value && (v = F.value);
              else
                return;
              if (v !== null && S.push({
                str: v
              }), !!F.children)
                for (const m of F.children)
                  k(m);
            }
            return k(r), E;
          }
          static shouldBuildText(r) {
            return !(r === "textarea" || r === "input" || r === "option" || r === "select");
          }
        }
        e.XfaText = n;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.NodeStandardFontDataFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
        var t = n(7);
        const r = function(F) {
          return new Promise((v, y) => {
            require$$5.readFile(F, (m, _) => {
              if (m || !_) {
                y(new Error(m));
                return;
              }
              v(new Uint8Array(_));
            });
          });
        };
        class S extends t.BaseCanvasFactory {
          _createCanvas(v, y) {
            return require$$5.createCanvas(v, y);
          }
        }
        e.NodeCanvasFactory = S;
        class E extends t.BaseCMapReaderFactory {
          _fetchData(v, y) {
            return r(v).then((x) => ({
              cMapData: x,
              compressionType: y
            }));
          }
        }
        e.NodeCMapReaderFactory = E;
        class k extends t.BaseStandardFontDataFactory {
          _fetchData(v) {
            return r(v);
          }
        }
        e.NodeStandardFontDataFactory = k;
      },
      (a, e, n) => {
        var F, v, y, x, m, _, u, l, o, wt, d, qt, f, Et, c, Ht;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.AnnotationEditorLayer = void 0;
        var t = n(5), r = n(1), S = n(22), E = n(23);
        const O = class {
          constructor(P) {
            ue(this, o);
            ue(this, d);
            ue(this, f);
            ue(this, c);
            ue(this, F, void 0);
            ue(this, v, !1);
            ue(this, y, this.pointerup.bind(this));
            ue(this, x, this.pointerdown.bind(this));
            ue(this, m, /* @__PURE__ */ new Map());
            ue(this, _, !1);
            ue(this, u, !1);
            ue(this, l, void 0);
            O._initialized || (O._initialized = !0, S.FreeTextEditor.initialize(P.l10n), E.InkEditor.initialize(P.l10n)), P.uiManager.registerEditorTypes([S.FreeTextEditor, E.InkEditor]), Se(this, l, P.uiManager), this.annotationStorage = P.annotationStorage, this.pageIndex = P.pageIndex, this.div = P.div, Se(this, F, P.accessibilityManager), C(this, l).addLayer(this);
          }
          updateToolbar(P) {
            C(this, l).updateToolbar(P);
          }
          updateMode(P = C(this, l).getMode()) {
            me(this, c, Ht).call(this), P === r.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), C(this, l).unselectAll(), this.div.classList.toggle("freeTextEditing", P === r.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", P === r.AnnotationEditorType.INK);
          }
          addInkEditorIfNeeded(P) {
            if (!P && C(this, l).getMode() !== r.AnnotationEditorType.INK)
              return;
            if (!P) {
              for (const Q of C(this, m).values())
                if (Q.isEmpty()) {
                  Q.setInBackground();
                  return;
                }
            }
            me(this, f, Et).call(this, {
              offsetX: 0,
              offsetY: 0
            }).setInBackground();
          }
          setEditingState(P) {
            C(this, l).setEditingState(P);
          }
          addCommands(P) {
            C(this, l).addCommands(P);
          }
          enable() {
            this.div.style.pointerEvents = "auto";
            for (const P of C(this, m).values())
              P.enableEditing();
          }
          disable() {
            this.div.style.pointerEvents = "none";
            for (const P of C(this, m).values())
              P.disableEditing();
          }
          setActiveEditor(P) {
            C(this, l).getActive() !== P && C(this, l).setActiveEditor(P);
          }
          enableClick() {
            this.div.addEventListener("pointerdown", C(this, x)), this.div.addEventListener("pointerup", C(this, y));
          }
          disableClick() {
            this.div.removeEventListener("pointerdown", C(this, x)), this.div.removeEventListener("pointerup", C(this, y));
          }
          attach(P) {
            C(this, m).set(P.id, P);
          }
          detach(P) {
            var L;
            C(this, m).delete(P.id), (L = C(this, F)) == null || L.removePointerInTextLayer(P.contentDiv);
          }
          remove(P) {
            C(this, l).removeEditor(P), this.detach(P), this.annotationStorage.remove(P.id), P.div.style.display = "none", setTimeout(() => {
              P.div.style.display = "", P.div.remove(), P.isAttachedToDOM = !1, document.activeElement === document.body && C(this, l).focusMainContainer();
            }, 0), C(this, u) || this.addInkEditorIfNeeded(!1);
          }
          add(P) {
            if (me(this, o, wt).call(this, P), C(this, l).addEditor(P), this.attach(P), !P.isAttachedToDOM) {
              const L = P.render();
              this.div.append(L), P.isAttachedToDOM = !0;
            }
            this.moveEditorInDOM(P), P.onceAdded(), this.addToAnnotationStorage(P);
          }
          moveEditorInDOM(P) {
            var L;
            (L = C(this, F)) == null || L.moveElementInDOM(this.div, P.div, P.contentDiv, !0);
          }
          addToAnnotationStorage(P) {
            !P.isEmpty() && !this.annotationStorage.has(P.id) && this.annotationStorage.setValue(P.id, P);
          }
          addOrRebuild(P) {
            P.needsToBeRebuilt() ? P.rebuild() : this.add(P);
          }
          addANewEditor(P) {
            const L = () => {
              this.addOrRebuild(P);
            }, Q = () => {
              P.remove();
            };
            this.addCommands({
              cmd: L,
              undo: Q,
              mustExec: !0
            });
          }
          addUndoableEditor(P) {
            const L = () => {
              this.addOrRebuild(P);
            }, Q = () => {
              P.remove();
            };
            this.addCommands({
              cmd: L,
              undo: Q,
              mustExec: !1
            });
          }
          getNextId() {
            return C(this, l).getId();
          }
          deserialize(P) {
            switch (P.annotationType) {
              case r.AnnotationEditorType.FREETEXT:
                return S.FreeTextEditor.deserialize(P, this);
              case r.AnnotationEditorType.INK:
                return E.InkEditor.deserialize(P, this);
            }
            return null;
          }
          setSelected(P) {
            C(this, l).setSelected(P);
          }
          toggleSelected(P) {
            C(this, l).toggleSelected(P);
          }
          isSelected(P) {
            return C(this, l).isSelected(P);
          }
          unselect(P) {
            C(this, l).unselect(P);
          }
          pointerup(P) {
            const L = t.KeyboardManager.platform.isMac;
            if (!(P.button !== 0 || P.ctrlKey && L) && P.target === this.div && !!C(this, _)) {
              if (Se(this, _, !1), !C(this, v)) {
                Se(this, v, !0);
                return;
              }
              me(this, f, Et).call(this, P);
            }
          }
          pointerdown(P) {
            const L = t.KeyboardManager.platform.isMac;
            if (P.button !== 0 || P.ctrlKey && L || P.target !== this.div)
              return;
            Se(this, _, !0);
            const Q = C(this, l).getActive();
            Se(this, v, !Q || Q.isEmpty());
          }
          drop(P) {
            const L = P.dataTransfer.getData("text/plain"), Q = C(this, l).getEditor(L);
            if (!Q)
              return;
            P.preventDefault(), P.dataTransfer.dropEffect = "move", me(this, o, wt).call(this, Q);
            const de = this.div.getBoundingClientRect(), oe = P.clientX - de.x, Y = P.clientY - de.y;
            Q.translate(oe - Q.startX, Y - Q.startY), this.moveEditorInDOM(Q), Q.div.focus();
          }
          dragover(P) {
            P.preventDefault();
          }
          destroy() {
            var P, L;
            ((P = C(this, l).getActive()) == null ? void 0 : P.parent) === this && C(this, l).setActiveEditor(null);
            for (const Q of C(this, m).values())
              (L = C(this, F)) == null || L.removePointerInTextLayer(Q.contentDiv), Q.isAttachedToDOM = !1, Q.div.remove(), Q.parent = null;
            this.div = null, C(this, m).clear(), C(this, l).removeLayer(this);
          }
          render(P) {
            this.viewport = P.viewport, (0, t.bindEvents)(this, this.div, ["dragover", "drop"]), this.setDimensions();
            for (const L of C(this, l).getEditors(this.pageIndex))
              this.add(L);
            this.updateMode();
          }
          update(P) {
            C(this, l).commitOrRemove(), this.viewport = P.viewport, this.setDimensions(), this.updateMode();
          }
          get scaleFactor() {
            return this.viewport.scale;
          }
          get pageDimensions() {
            const [P, L, Q, de] = this.viewport.viewBox, oe = Q - P, Y = de - L;
            return [oe, Y];
          }
          get viewportBaseDimensions() {
            const {
              width: P,
              height: L,
              rotation: Q
            } = this.viewport;
            return Q % 180 === 0 ? [P, L] : [L, P];
          }
          setDimensions() {
            const {
              width: P,
              height: L,
              rotation: Q
            } = this.viewport, de = Q % 180 !== 0, oe = Math.floor(P) + "px", Y = Math.floor(L) + "px";
            this.div.style.width = de ? Y : oe, this.div.style.height = de ? oe : Y, this.div.setAttribute("data-main-rotation", Q);
          }
        };
        let k = O;
        F = new WeakMap(), v = new WeakMap(), y = new WeakMap(), x = new WeakMap(), m = new WeakMap(), _ = new WeakMap(), u = new WeakMap(), l = new WeakMap(), o = new WeakSet(), wt = function(P) {
          var L;
          P.parent !== this && (this.attach(P), P.pageIndex = this.pageIndex, (L = P.parent) == null || L.detach(P), P.parent = this, P.div && P.isAttachedToDOM && (P.div.remove(), this.div.append(P.div)));
        }, d = new WeakSet(), qt = function(P) {
          switch (C(this, l).getMode()) {
            case r.AnnotationEditorType.FREETEXT:
              return new S.FreeTextEditor(P);
            case r.AnnotationEditorType.INK:
              return new E.InkEditor(P);
          }
          return null;
        }, f = new WeakSet(), Et = function(P) {
          const L = this.getNextId(), Q = me(this, d, qt).call(this, {
            parent: this,
            id: L,
            x: P.offsetX,
            y: P.offsetY
          });
          return Q && this.add(Q), Q;
        }, c = new WeakSet(), Ht = function() {
          Se(this, u, !0);
          for (const P of C(this, m).values())
            P.isEmpty() && P.remove();
          Se(this, u, !1);
        }, He(k, "_initialized", !1), e.AnnotationEditorLayer = k;
      },
      (a, e, n) => {
        var k, F, v, y, x, m, _, u, l, o, Gt, d, zt, f, Xt, c, Tt;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.FreeTextEditor = void 0;
        var t = n(1), r = n(5), S = n(4);
        const O = class extends S.AnnotationEditor {
          constructor(L) {
            super({
              ...L,
              name: "freeTextEditor"
            });
            ue(this, o);
            ue(this, d);
            ue(this, f);
            ue(this, c);
            ue(this, k, this.editorDivBlur.bind(this));
            ue(this, F, this.editorDivFocus.bind(this));
            ue(this, v, this.editorDivInput.bind(this));
            ue(this, y, this.editorDivKeydown.bind(this));
            ue(this, x, void 0);
            ue(this, m, "");
            ue(this, _, `${this.id}-editor`);
            ue(this, u, !1);
            ue(this, l, void 0);
            Se(this, x, L.color || O._defaultColor || S.AnnotationEditor._defaultLineColor), Se(this, l, L.fontSize || O._defaultFontSize);
          }
          static initialize(L) {
            this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map((de) => [de, L.get(de)]));
            const Q = getComputedStyle(document.documentElement);
            this._internalPadding = parseFloat(Q.getPropertyValue("--freetext-padding"));
          }
          static updateDefaultParams(L, Q) {
            switch (L) {
              case t.AnnotationEditorParamsType.FREETEXT_SIZE:
                O._defaultFontSize = Q;
                break;
              case t.AnnotationEditorParamsType.FREETEXT_COLOR:
                O._defaultColor = Q;
                break;
            }
          }
          updateParams(L, Q) {
            switch (L) {
              case t.AnnotationEditorParamsType.FREETEXT_SIZE:
                me(this, o, Gt).call(this, Q);
                break;
              case t.AnnotationEditorParamsType.FREETEXT_COLOR:
                me(this, d, zt).call(this, Q);
                break;
            }
          }
          static get defaultPropertiesToUpdate() {
            return [[t.AnnotationEditorParamsType.FREETEXT_SIZE, O._defaultFontSize], [t.AnnotationEditorParamsType.FREETEXT_COLOR, O._defaultColor || S.AnnotationEditor._defaultLineColor]];
          }
          get propertiesToUpdate() {
            return [[t.AnnotationEditorParamsType.FREETEXT_SIZE, C(this, l)], [t.AnnotationEditorParamsType.FREETEXT_COLOR, C(this, x)]];
          }
          getInitialTranslation() {
            return [-O._internalPadding * this.parent.scaleFactor, -(O._internalPadding + C(this, l)) * this.parent.scaleFactor];
          }
          rebuild() {
            super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this));
          }
          enableEditMode() {
            this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(t.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this.div.draggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", C(this, y)), this.editorDiv.addEventListener("focus", C(this, F)), this.editorDiv.addEventListener("blur", C(this, k)), this.editorDiv.addEventListener("input", C(this, v)));
          }
          disableEditMode() {
            !this.isInEditMode() || (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", C(this, _)), this.div.draggable = !0, this.editorDiv.removeEventListener("keydown", C(this, y)), this.editorDiv.removeEventListener("focus", C(this, F)), this.editorDiv.removeEventListener("blur", C(this, k)), this.editorDiv.removeEventListener("input", C(this, v)), this.div.focus(), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
          }
          focusin(L) {
            super.focusin(L), L.target !== this.editorDiv && this.editorDiv.focus();
          }
          onceAdded() {
            this.width || (this.enableEditMode(), this.editorDiv.focus());
          }
          isEmpty() {
            return !this.editorDiv || this.editorDiv.innerText.trim() === "";
          }
          remove() {
            this.isEditing = !1, this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing"), super.remove();
          }
          commit() {
            super.commit(), C(this, u) || (Se(this, u, !0), this.parent.addUndoableEditor(this)), this.disableEditMode(), Se(this, m, me(this, f, Xt).call(this).trimEnd()), me(this, c, Tt).call(this);
          }
          shouldGetKeyboardEvents() {
            return this.isInEditMode();
          }
          dblclick(L) {
            this.enableEditMode(), this.editorDiv.focus();
          }
          keydown(L) {
            L.target === this.div && L.key === "Enter" && (this.enableEditMode(), this.editorDiv.focus());
          }
          editorDivKeydown(L) {
            O._keyboardManager.exec(this, L);
          }
          editorDivFocus(L) {
            this.isEditing = !0;
          }
          editorDivBlur(L) {
            this.isEditing = !1;
          }
          editorDivInput(L) {
            this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
          }
          disableEditing() {
            this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
          }
          enableEditing() {
            this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
          }
          render() {
            if (this.div)
              return this.div;
            let L, Q;
            this.width && (L = this.x, Q = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", C(this, _)), this.enableEditing(), O._l10nPromise.get("editor_free_text2_aria_label").then((oe) => {
              var Y;
              return (Y = this.editorDiv) == null ? void 0 : Y.setAttribute("aria-label", oe);
            }), O._l10nPromise.get("free_text2_default_content").then((oe) => {
              var Y;
              return (Y = this.editorDiv) == null ? void 0 : Y.setAttribute("default-content", oe);
            }), this.editorDiv.contentEditable = !0;
            const {
              style: de
            } = this.editorDiv;
            if (de.fontSize = `calc(${C(this, l)}px * var(--scale-factor))`, de.color = C(this, x), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, r.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
              const [oe, Y] = this.parent.viewportBaseDimensions;
              this.setAt(L * oe, Q * Y, this.width * oe, this.height * Y);
              for (const G of C(this, m).split(`
`)) {
                const J = document.createElement("div");
                J.append(G ? document.createTextNode(G) : document.createElement("br")), this.editorDiv.append(J);
              }
              this.div.draggable = !0, this.editorDiv.contentEditable = !1;
            } else
              this.div.draggable = !1, this.editorDiv.contentEditable = !0;
            return this.div;
          }
          get contentDiv() {
            return this.editorDiv;
          }
          static deserialize(L, Q) {
            const de = super.deserialize(L, Q);
            return Se(de, l, L.fontSize), Se(de, x, t.Util.makeHexColor(...L.color)), Se(de, m, L.value), de;
          }
          serialize() {
            if (this.isEmpty())
              return null;
            const L = O._internalPadding * this.parent.scaleFactor, Q = this.getRect(L, L), de = S.AnnotationEditor._colorManager.convert(getComputedStyle(this.editorDiv).color);
            return {
              annotationType: t.AnnotationEditorType.FREETEXT,
              color: de,
              fontSize: C(this, l),
              value: C(this, m),
              pageIndex: this.parent.pageIndex,
              rect: Q,
              rotation: this.rotation
            };
          }
        };
        let E = O;
        k = new WeakMap(), F = new WeakMap(), v = new WeakMap(), y = new WeakMap(), x = new WeakMap(), m = new WeakMap(), _ = new WeakMap(), u = new WeakMap(), l = new WeakMap(), o = new WeakSet(), Gt = function(L) {
          const Q = (oe) => {
            this.editorDiv.style.fontSize = `calc(${oe}px * var(--scale-factor))`, this.translate(0, -(oe - C(this, l)) * this.parent.scaleFactor), Se(this, l, oe), me(this, c, Tt).call(this);
          }, de = C(this, l);
          this.parent.addCommands({
            cmd: () => {
              Q(L);
            },
            undo: () => {
              Q(de);
            },
            mustExec: !0,
            type: t.AnnotationEditorParamsType.FREETEXT_SIZE,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }, d = new WeakSet(), zt = function(L) {
          const Q = C(this, x);
          this.parent.addCommands({
            cmd: () => {
              Se(this, x, L), this.editorDiv.style.color = L;
            },
            undo: () => {
              Se(this, x, Q), this.editorDiv.style.color = Q;
            },
            mustExec: !0,
            type: t.AnnotationEditorParamsType.FREETEXT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }, f = new WeakSet(), Xt = function() {
          const L = this.editorDiv.getElementsByTagName("div");
          if (L.length === 0)
            return this.editorDiv.innerText;
          const Q = [];
          for (const de of L)
            Q.push(de.innerText.replace(/\r\n?|\n/, ""));
          return Q.join(`
`);
        }, c = new WeakSet(), Tt = function() {
          const [L, Q] = this.parent.viewportBaseDimensions, de = this.div.getBoundingClientRect();
          this.width = de.width / L, this.height = de.height / Q;
        }, He(E, "_freeTextDefaultContent", ""), He(E, "_l10nPromise"), He(E, "_internalPadding", 0), He(E, "_defaultColor", null), He(E, "_defaultFontSize", 10), He(E, "_keyboardManager", new r.KeyboardManager([[["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], O.prototype.commitOrRemove]])), He(E, "_type", "freetext"), e.FreeTextEditor = E;
      },
      (a, e, n) => {
        var y, x, m, _, u, l, o, s, d, h, f, i, c, A, O, $t, P, Yt, Q, Kt, oe, Jt, G, Ct, ne, Qt, _e, Zt, B, en, g, it, N, Pt, V, dt, $, ht, K, ot, ie, xt, p, ft, D, kt, M, tn, ce, nn, q, sn, te, Rt, H, pt, Ae, lt, De, It;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.InkEditor = void 0, Object.defineProperty(e, "fitCurve", {
          enumerable: !0,
          get: function() {
            return S.fitCurve;
          }
        });
        var t = n(1), r = n(4), S = n(24), E = n(5);
        const k = 16, F = 100, xe = class extends r.AnnotationEditor {
          constructor(I) {
            super({
              ...I,
              name: "inkEditor"
            });
            ue(this, O);
            ue(this, P);
            ue(this, Q);
            ue(this, oe);
            ue(this, G);
            ue(this, ne);
            ue(this, _e);
            ue(this, B);
            ue(this, g);
            ue(this, N);
            ue(this, V);
            ue(this, $);
            ue(this, K);
            ue(this, ie);
            ue(this, p);
            ue(this, M);
            ue(this, ce);
            ue(this, q);
            ue(this, te);
            ue(this, H);
            ue(this, Ae);
            ue(this, De);
            ue(this, y, 0);
            ue(this, x, 0);
            ue(this, m, 0);
            ue(this, _, this.canvasPointermove.bind(this));
            ue(this, u, this.canvasPointerleave.bind(this));
            ue(this, l, this.canvasPointerup.bind(this));
            ue(this, o, this.canvasPointerdown.bind(this));
            ue(this, s, !1);
            ue(this, d, !1);
            ue(this, h, null);
            ue(this, f, null);
            ue(this, i, 0);
            ue(this, c, 0);
            ue(this, A, null);
            this.color = I.color || null, this.thickness = I.thickness || null, this.opacity = I.opacity || null, this.paths = [], this.bezierPath2D = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0;
          }
          static initialize(I) {
            this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map((ee) => [ee, I.get(ee)]));
          }
          static updateDefaultParams(I, ee) {
            switch (I) {
              case t.AnnotationEditorParamsType.INK_THICKNESS:
                xe._defaultThickness = ee;
                break;
              case t.AnnotationEditorParamsType.INK_COLOR:
                xe._defaultColor = ee;
                break;
              case t.AnnotationEditorParamsType.INK_OPACITY:
                xe._defaultOpacity = ee / 100;
                break;
            }
          }
          updateParams(I, ee) {
            switch (I) {
              case t.AnnotationEditorParamsType.INK_THICKNESS:
                me(this, O, $t).call(this, ee);
                break;
              case t.AnnotationEditorParamsType.INK_COLOR:
                me(this, P, Yt).call(this, ee);
                break;
              case t.AnnotationEditorParamsType.INK_OPACITY:
                me(this, Q, Kt).call(this, ee);
                break;
            }
          }
          static get defaultPropertiesToUpdate() {
            return [[t.AnnotationEditorParamsType.INK_THICKNESS, xe._defaultThickness], [t.AnnotationEditorParamsType.INK_COLOR, xe._defaultColor || r.AnnotationEditor._defaultLineColor], [t.AnnotationEditorParamsType.INK_OPACITY, Math.round(xe._defaultOpacity * 100)]];
          }
          get propertiesToUpdate() {
            var I;
            return [[t.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || xe._defaultThickness], [t.AnnotationEditorParamsType.INK_COLOR, this.color || xe._defaultColor || r.AnnotationEditor._defaultLineColor], [t.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * ((I = this.opacity) != null ? I : xe._defaultOpacity))]];
          }
          rebuild() {
            super.rebuild(), this.div !== null && (this.canvas || (me(this, V, dt).call(this), me(this, $, ht).call(this)), this.isAttachedToDOM || (this.parent.add(this), me(this, K, ot).call(this)), me(this, Ae, lt).call(this));
          }
          remove() {
            this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, C(this, f).disconnect(), Se(this, f, null), super.remove());
          }
          enableEditMode() {
            C(this, s) || this.canvas === null || (super.enableEditMode(), this.div.draggable = !1, this.canvas.addEventListener("pointerdown", C(this, o)), this.canvas.addEventListener("pointerup", C(this, l)));
          }
          disableEditMode() {
            !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this.div.draggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", C(this, o)), this.canvas.removeEventListener("pointerup", C(this, l)));
          }
          onceAdded() {
            this.div.draggable = !this.isEmpty();
          }
          isEmpty() {
            return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
          }
          commit() {
            C(this, s) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), Se(this, s, !0), this.div.classList.add("disabled"), me(this, Ae, lt).call(this, !0), this.parent.addInkEditorIfNeeded(!0), this.parent.moveEditorInDOM(this), this.div.focus());
          }
          focusin(I) {
            super.focusin(I), this.enableEditMode();
          }
          canvasPointerdown(I) {
            I.button !== 0 || !this.isInEditMode() || C(this, s) || (this.setInForeground(), I.type !== "mouse" && this.div.focus(), I.stopPropagation(), this.canvas.addEventListener("pointerleave", C(this, u)), this.canvas.addEventListener("pointermove", C(this, _)), me(this, ne, Qt).call(this, I.offsetX, I.offsetY));
          }
          canvasPointermove(I) {
            I.stopPropagation(), me(this, _e, Zt).call(this, I.offsetX, I.offsetY);
          }
          canvasPointerup(I) {
            I.button === 0 && this.isInEditMode() && this.currentPath.length !== 0 && (I.stopPropagation(), me(this, N, Pt).call(this, I), this.setInBackground());
          }
          canvasPointerleave(I) {
            me(this, N, Pt).call(this, I), this.setInBackground();
          }
          render() {
            if (this.div)
              return this.div;
            let I, ee;
            this.width && (I = this.x, ee = this.y), super.render(), xe._l10nPromise.get("editor_ink2_aria_label").then((Re) => {
              var Fe;
              return (Fe = this.div) == null ? void 0 : Fe.setAttribute("aria-label", Re);
            });
            const [ve, Ce, Pe, Le] = me(this, oe, Jt).call(this);
            if (this.setAt(ve, Ce, 0, 0), this.setDims(Pe, Le), me(this, V, dt).call(this), this.width) {
              const [Re, Fe] = this.parent.viewportBaseDimensions;
              this.setAt(I * Re, ee * Fe, this.width * Re, this.height * Fe), Se(this, d, !0), me(this, K, ot).call(this), this.setDims(this.width * Re, this.height * Fe), me(this, g, it).call(this), me(this, De, It).call(this), this.div.classList.add("disabled");
            } else
              this.div.classList.add("editing"), this.enableEditMode();
            return me(this, $, ht).call(this), this.div;
          }
          setDimensions(I, ee) {
            const ve = Math.round(I), Ce = Math.round(ee);
            if (C(this, i) === ve && C(this, c) === Ce)
              return;
            Se(this, i, ve), Se(this, c, Ce), this.canvas.style.visibility = "hidden", C(this, y) && Math.abs(C(this, y) - I / ee) > 0.01 && (ee = Math.ceil(I / C(this, y)), this.setDims(I, ee));
            const [Pe, Le] = this.parent.viewportBaseDimensions;
            this.width = I / Pe, this.height = ee / Le, C(this, s) && me(this, ie, xt).call(this, I, ee), me(this, K, ot).call(this), me(this, g, it).call(this), this.canvas.style.visibility = "visible";
          }
          static deserialize(I, ee) {
            var qe, We;
            const ve = super.deserialize(I, ee);
            ve.thickness = I.thickness, ve.color = t.Util.makeHexColor(...I.color), ve.opacity = I.opacity;
            const [Ce, Pe] = ee.pageDimensions, Le = ve.width * Ce, Re = ve.height * Pe, Fe = ee.scaleFactor, Me = I.thickness / 2;
            Se(ve, y, Le / Re), Se(ve, s, !0), Se(ve, i, Math.round(Le)), Se(ve, c, Math.round(Re));
            for (const {
              bezier: Ie
            } of I.paths) {
              const Ye = [];
              ve.paths.push(Ye);
              let Ke = Fe * (Ie[0] - Me), Je = Fe * (Re - Ie[1] - Me);
              for (let Ge = 2, ze = Ie.length; Ge < ze; Ge += 6) {
                const et = Fe * (Ie[Ge] - Me), W = Fe * (Re - Ie[Ge + 1] - Me), ye = Fe * (Ie[Ge + 2] - Me), Ee = Fe * (Re - Ie[Ge + 3] - Me), ke = Fe * (Ie[Ge + 4] - Me), Ue = Fe * (Re - Ie[Ge + 5] - Me);
                Ye.push([[Ke, Je], [et, W], [ye, Ee], [ke, Ue]]), Ke = ke, Je = Ue;
              }
              const Qe = me(this, D, kt).call(this, Ye);
              ve.bezierPath2D.push(Qe);
            }
            const Ne = me(qe = ve, te, Rt).call(qe);
            return Se(ve, m, Math.max(k, Ne[2] - Ne[0])), Se(ve, x, Math.max(k, Ne[3] - Ne[1])), me(We = ve, ie, xt).call(We, Le, Re), ve;
          }
          serialize() {
            if (this.isEmpty())
              return null;
            const I = this.getRect(0, 0), ee = this.rotation % 180 === 0 ? I[3] - I[1] : I[2] - I[0], ve = r.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
            return {
              annotationType: t.AnnotationEditorType.INK,
              color: ve,
              thickness: this.thickness,
              opacity: this.opacity,
              paths: me(this, M, tn).call(this, this.scaleFactor / this.parent.scaleFactor, this.translationX, this.translationY, ee),
              pageIndex: this.parent.pageIndex,
              rect: I,
              rotation: this.rotation
            };
          }
        };
        let v = xe;
        y = new WeakMap(), x = new WeakMap(), m = new WeakMap(), _ = new WeakMap(), u = new WeakMap(), l = new WeakMap(), o = new WeakMap(), s = new WeakMap(), d = new WeakMap(), h = new WeakMap(), f = new WeakMap(), i = new WeakMap(), c = new WeakMap(), A = new WeakMap(), O = new WeakSet(), $t = function(I) {
          const ee = this.thickness;
          this.parent.addCommands({
            cmd: () => {
              this.thickness = I, me(this, Ae, lt).call(this);
            },
            undo: () => {
              this.thickness = ee, me(this, Ae, lt).call(this);
            },
            mustExec: !0,
            type: t.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }, P = new WeakSet(), Yt = function(I) {
          const ee = this.color;
          this.parent.addCommands({
            cmd: () => {
              this.color = I, me(this, g, it).call(this);
            },
            undo: () => {
              this.color = ee, me(this, g, it).call(this);
            },
            mustExec: !0,
            type: t.AnnotationEditorParamsType.INK_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }, Q = new WeakSet(), Kt = function(I) {
          I /= 100;
          const ee = this.opacity;
          this.parent.addCommands({
            cmd: () => {
              this.opacity = I, me(this, g, it).call(this);
            },
            undo: () => {
              this.opacity = ee, me(this, g, it).call(this);
            },
            mustExec: !0,
            type: t.AnnotationEditorParamsType.INK_OPACITY,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }, oe = new WeakSet(), Jt = function() {
          const {
            width: I,
            height: ee,
            rotation: ve
          } = this.parent.viewport;
          switch (ve) {
            case 90:
              return [0, I, I, ee];
            case 180:
              return [I, ee, I, ee];
            case 270:
              return [ee, 0, I, ee];
            default:
              return [0, 0, I, ee];
          }
        }, G = new WeakSet(), Ct = function() {
          this.ctx.lineWidth = this.thickness * this.parent.scaleFactor / this.scaleFactor, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.miterLimit = 10, this.ctx.strokeStyle = `${this.color}${(0, E.opacityToHex)(this.opacity)}`;
        }, ne = new WeakSet(), Qt = function(I, ee) {
          var ve;
          this.isEditing = !0, C(this, d) || (Se(this, d, !0), me(this, K, ot).call(this), this.thickness || (this.thickness = xe._defaultThickness), this.color || (this.color = xe._defaultColor || r.AnnotationEditor._defaultLineColor), (ve = this.opacity) != null || (this.opacity = xe._defaultOpacity)), this.currentPath.push([I, ee]), Se(this, h, null), me(this, G, Ct).call(this), this.ctx.beginPath(), this.ctx.moveTo(I, ee), Se(this, A, () => {
            !C(this, A) || (C(this, h) && (this.isEmpty() ? (this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)) : me(this, g, it).call(this), this.ctx.lineTo(...C(this, h)), Se(this, h, null), this.ctx.stroke()), window.requestAnimationFrame(C(this, A)));
          }), window.requestAnimationFrame(C(this, A));
        }, _e = new WeakSet(), Zt = function(I, ee) {
          const [ve, Ce] = this.currentPath.at(-1);
          I === ve && ee === Ce || (this.currentPath.push([I, ee]), Se(this, h, [I, ee]));
        }, B = new WeakSet(), en = function(I, ee) {
          var Me;
          this.ctx.closePath(), Se(this, A, null), I = Math.min(Math.max(I, 0), this.canvas.width), ee = Math.min(Math.max(ee, 0), this.canvas.height);
          const [ve, Ce] = this.currentPath.at(-1);
          (I !== ve || ee !== Ce) && this.currentPath.push([I, ee]);
          let Pe;
          if (this.currentPath.length !== 1)
            Pe = (0, S.fitCurve)(this.currentPath, 30, null);
          else {
            const Ne = [I, ee];
            Pe = [[Ne, Ne.slice(), Ne.slice(), Ne]];
          }
          const Le = me(Me = xe, D, kt).call(Me, Pe);
          this.currentPath.length = 0;
          const Re = () => {
            this.paths.push(Pe), this.bezierPath2D.push(Le), this.rebuild();
          }, Fe = () => {
            this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (me(this, V, dt).call(this), me(this, $, ht).call(this)), me(this, Ae, lt).call(this));
          };
          this.parent.addCommands({
            cmd: Re,
            undo: Fe,
            mustExec: !0
          });
        }, g = new WeakSet(), it = function() {
          if (this.isEmpty()) {
            me(this, p, ft).call(this);
            return;
          }
          me(this, G, Ct).call(this);
          const {
            canvas: I,
            ctx: ee
          } = this;
          ee.setTransform(1, 0, 0, 1, 0, 0), ee.clearRect(0, 0, I.width, I.height), me(this, p, ft).call(this);
          for (const ve of this.bezierPath2D)
            ee.stroke(ve);
        }, N = new WeakSet(), Pt = function(I) {
          me(this, B, en).call(this, I.offsetX, I.offsetY), this.canvas.removeEventListener("pointerleave", C(this, u)), this.canvas.removeEventListener("pointermove", C(this, _)), this.parent.addToAnnotationStorage(this);
        }, V = new WeakSet(), dt = function() {
          this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", xe._l10nPromise.get("editor_ink_canvas_aria_label").then((I) => {
            var ee;
            return (ee = this.canvas) == null ? void 0 : ee.setAttribute("aria-label", I);
          }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
        }, $ = new WeakSet(), ht = function() {
          let I = null;
          Se(this, f, new ResizeObserver((ee) => {
            const ve = ee[0].contentRect;
            ve.width && ve.height && (I !== null && clearTimeout(I), I = setTimeout(() => {
              this.fixDims(), I = null;
            }, F), this.setDimensions(ve.width, ve.height));
          })), C(this, f).observe(this.div);
        }, K = new WeakSet(), ot = function() {
          if (!C(this, d))
            return;
          const [I, ee] = this.parent.viewportBaseDimensions;
          this.canvas.width = Math.ceil(this.width * I), this.canvas.height = Math.ceil(this.height * ee), me(this, p, ft).call(this);
        }, ie = new WeakSet(), xt = function(I, ee) {
          const ve = me(this, H, pt).call(this), Ce = (I - ve) / C(this, m), Pe = (ee - ve) / C(this, x);
          this.scaleFactor = Math.min(Ce, Pe);
        }, p = new WeakSet(), ft = function() {
          const I = me(this, H, pt).call(this) / 2;
          this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + I, this.translationY * this.scaleFactor + I);
        }, D = new WeakSet(), kt = function(I) {
          const ee = new Path2D();
          for (let ve = 0, Ce = I.length; ve < Ce; ve++) {
            const [Pe, Le, Re, Fe] = I[ve];
            ve === 0 && ee.moveTo(...Pe), ee.bezierCurveTo(Le[0], Le[1], Re[0], Re[1], Fe[0], Fe[1]);
          }
          return ee;
        }, M = new WeakSet(), tn = function(I, ee, ve, Ce) {
          const Le = [], Re = this.thickness / 2;
          let Fe, Me;
          for (const Ne of this.paths) {
            Fe = [], Me = [];
            for (let qe = 0, We = Ne.length; qe < We; qe++) {
              const [Ie, Ye, Ke, Je] = Ne[qe], Qe = I * (Ie[0] + ee) + Re, Ge = Ce - I * (Ie[1] + ve) - Re, ze = I * (Ye[0] + ee) + Re, et = Ce - I * (Ye[1] + ve) - Re, W = I * (Ke[0] + ee) + Re, ye = Ce - I * (Ke[1] + ve) - Re, Ee = I * (Je[0] + ee) + Re, ke = Ce - I * (Je[1] + ve) - Re;
              qe === 0 && (Fe.push(Qe, Ge), Me.push(Qe, Ge)), Fe.push(ze, et, W, ye, Ee, ke), me(this, ce, nn).call(this, Qe, Ge, ze, et, W, ye, Ee, ke, 4, Me);
            }
            Le.push({
              bezier: Fe,
              points: Me
            });
          }
          return Le;
        }, ce = new WeakSet(), nn = function(I, ee, ve, Ce, Pe, Le, Re, Fe, Me, Ne) {
          if (me(this, q, sn).call(this, I, ee, ve, Ce, Pe, Le, Re, Fe)) {
            Ne.push(Re, Fe);
            return;
          }
          for (let qe = 1; qe < Me - 1; qe++) {
            const We = qe / Me, Ie = 1 - We;
            let Ye = We * I + Ie * ve, Ke = We * ee + Ie * Ce, Je = We * ve + Ie * Pe, Qe = We * Ce + Ie * Le;
            const Ge = We * Pe + Ie * Re, ze = We * Le + Ie * Fe;
            Ye = We * Ye + Ie * Je, Ke = We * Ke + Ie * Qe, Je = We * Je + Ie * Ge, Qe = We * Qe + Ie * ze, Ye = We * Ye + Ie * Je, Ke = We * Ke + Ie * Qe, Ne.push(Ye, Ke);
          }
          Ne.push(Re, Fe);
        }, q = new WeakSet(), sn = function(I, ee, ve, Ce, Pe, Le, Re, Fe) {
          const Ne = (3 * ve - 2 * I - Re) ** 2, qe = (3 * Ce - 2 * ee - Fe) ** 2, We = (3 * Pe - I - 2 * Re) ** 2, Ie = (3 * Le - ee - 2 * Fe) ** 2;
          return Math.max(Ne, We) + Math.max(qe, Ie) <= 10;
        }, te = new WeakSet(), Rt = function() {
          let I = 1 / 0, ee = -1 / 0, ve = 1 / 0, Ce = -1 / 0;
          for (const Pe of this.paths)
            for (const [Le, Re, Fe, Me] of Pe) {
              const Ne = t.Util.bezierBoundingBox(...Le, ...Re, ...Fe, ...Me);
              I = Math.min(I, Ne[0]), ve = Math.min(ve, Ne[1]), ee = Math.max(ee, Ne[2]), Ce = Math.max(Ce, Ne[3]);
            }
          return [I, ve, ee, Ce];
        }, H = new WeakSet(), pt = function() {
          return C(this, s) ? Math.ceil(this.thickness * this.parent.scaleFactor) : 0;
        }, Ae = new WeakSet(), lt = function(I = !1) {
          if (this.isEmpty())
            return;
          if (!C(this, s)) {
            me(this, g, it).call(this);
            return;
          }
          const ee = me(this, te, Rt).call(this), ve = me(this, H, pt).call(this);
          Se(this, m, Math.max(k, ee[2] - ee[0])), Se(this, x, Math.max(k, ee[3] - ee[1]));
          const Ce = Math.ceil(ve + C(this, m) * this.scaleFactor), Pe = Math.ceil(ve + C(this, x) * this.scaleFactor), [Le, Re] = this.parent.viewportBaseDimensions;
          this.width = Ce / Le, this.height = Pe / Re, Se(this, y, Ce / Pe), me(this, De, It).call(this);
          const Fe = this.translationX, Me = this.translationY;
          this.translationX = -ee[0], this.translationY = -ee[1], me(this, K, ot).call(this), me(this, g, it).call(this), Se(this, i, Ce), Se(this, c, Pe), this.setDims(Ce, Pe);
          const Ne = I ? ve / this.scaleFactor / 2 : 0;
          this.translate(Fe - this.translationX - Ne, Me - this.translationY - Ne);
        }, De = new WeakSet(), It = function() {
          const {
            style: I
          } = this.div;
          C(this, y) >= 1 ? (I.minHeight = `${k}px`, I.minWidth = `${Math.round(C(this, y) * k)}px`) : (I.minWidth = `${k}px`, I.minHeight = `${Math.round(k / C(this, y))}px`);
        }, ue(v, D), He(v, "_defaultColor", null), He(v, "_defaultOpacity", 1), He(v, "_defaultThickness", 1), He(v, "_l10nPromise"), He(v, "_type", "ink"), e.InkEditor = v;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.fitCurve = void 0;
        const t = n(25);
        e.fitCurve = t;
      },
      (a) => {
        function e(u, l, o) {
          if (!Array.isArray(u))
            throw new TypeError("First argument should be an array");
          if (u.forEach((f) => {
            if (!Array.isArray(f) || f.some((i) => typeof i != "number") || f.length !== u[0].length)
              throw Error("Each point should be an array of numbers. Each point should have the same amount of numbers.");
          }), u = u.filter((f, i) => i === 0 || !f.every((c, A) => c === u[i - 1][A])), u.length < 2)
            return [];
          const s = u.length, d = x(u[1], u[0]), h = x(u[s - 2], u[s - 1]);
          return n(u, d, h, l, o);
        }
        function n(u, l, o, s, d) {
          var f, i, c, A, O, U, P, L, Q, de, oe, Y, G;
          if (u.length === 2)
            return Y = m.vectorLen(m.subtract(u[0], u[1])) / 3, f = [u[0], m.addArrays(u[0], m.mulItems(l, Y)), m.addArrays(u[1], m.mulItems(o, Y)), u[1]], [f];
          if (i = k(u), [f, A, U] = t(u, i, i, l, o, d), A === 0 || A < s)
            return [f];
          if (A < s * s)
            for (c = i, O = A, P = U, G = 0; G < 20; G++) {
              if (c = S(f, u, c), [f, A, U] = t(u, i, c, l, o, d), A < s)
                return [f];
              if (U === P) {
                let J = A / O;
                if (J > 0.9999 && J < 1.0001)
                  break;
              }
              O = A, P = U;
            }
          return oe = [], L = m.subtract(u[U - 1], u[U + 1]), L.every((J) => J === 0) && (L = m.subtract(u[U - 1], u[U]), [L[0], L[1]] = [-L[1], L[0]]), Q = m.normalize(L), de = m.mulItems(Q, -1), oe = oe.concat(n(u.slice(0, U + 1), l, Q, s, d)), oe = oe.concat(n(u.slice(U), de, o, s, d)), oe;
        }
        function t(u, l, o, s, d, h) {
          var f, i, c;
          return f = r(u, o, s, d), [i, c] = F(u, f, l), h && h({
            bez: f,
            points: u,
            params: l,
            maxErr: i,
            maxPoint: c
          }), [f, i, c];
        }
        function r(u, l, o, s) {
          var d, h, f, i, c, A, O, U, P, L, Q, de, oe, Y, G, J, ne, ae = u[0], _e = u[u.length - 1];
          for (d = [ae, null, null, _e], h = m.zeros_Xx2x2(l.length), oe = 0, Y = l.length; oe < Y; oe++)
            J = l[oe], ne = 1 - J, f = h[oe], f[0] = m.mulItems(o, 3 * J * (ne * ne)), f[1] = m.mulItems(s, 3 * ne * (J * J));
          for (i = [[0, 0], [0, 0]], c = [0, 0], oe = 0, Y = u.length; oe < Y; oe++)
            J = l[oe], f = h[oe], i[0][0] += m.dot(f[0], f[0]), i[0][1] += m.dot(f[0], f[1]), i[1][0] += m.dot(f[0], f[1]), i[1][1] += m.dot(f[1], f[1]), G = m.subtract(u[oe], _.q([ae, ae, _e, _e], J)), c[0] += m.dot(f[0], G), c[1] += m.dot(f[1], G);
          return A = i[0][0] * i[1][1] - i[1][0] * i[0][1], O = i[0][0] * c[1] - i[1][0] * c[0], U = c[0] * i[1][1] - c[1] * i[0][1], P = A === 0 ? 0 : U / A, L = A === 0 ? 0 : O / A, de = m.vectorLen(m.subtract(ae, _e)), Q = 1e-6 * de, P < Q || L < Q ? (d[1] = m.addArrays(ae, m.mulItems(o, de / 3)), d[2] = m.addArrays(_e, m.mulItems(s, de / 3))) : (d[1] = m.addArrays(ae, m.mulItems(o, P)), d[2] = m.addArrays(_e, m.mulItems(s, L))), d;
        }
        function S(u, l, o) {
          return o.map((s, d) => E(u, l[d], s));
        }
        function E(u, l, o) {
          var s = m.subtract(_.q(u, o), l), d = _.qprime(u, o), h = m.mulMatrix(s, d), f = m.sum(m.squareItems(d)) + 2 * m.mulMatrix(s, _.qprimeprime(u, o));
          return f === 0 ? o : o - h / f;
        }
        function k(u) {
          var l = [], o, s, d;
          return u.forEach((h, f) => {
            o = f ? s + m.vectorLen(m.subtract(h, d)) : 0, l.push(o), s = o, d = h;
          }), l = l.map((h) => h / s), l;
        }
        function F(u, l, o) {
          var s, d, h, f, i, c, A, O;
          d = 0, h = Math.floor(u.length / 2);
          const U = v(l, 10);
          for (i = 0, c = u.length; i < c; i++)
            A = u[i], O = y(l, o[i], U, 10), f = m.subtract(_.q(l, O), A), s = f[0] * f[0] + f[1] * f[1], s > d && (d = s, h = i);
          return [d, h];
        }
        var v = function(u, l) {
          for (var o, s = [0], d = u[0], h = 0, f = 1; f <= l; f++)
            o = _.q(u, f / l), h += m.vectorLen(m.subtract(o, d)), s.push(h), d = o;
          return s = s.map((i) => i / h), s;
        };
        function y(u, l, o, s) {
          if (l < 0)
            return 0;
          if (l > 1)
            return 1;
          for (var d, h, f, i, c, A = 1; A <= s; A++)
            if (l <= o[A]) {
              i = (A - 1) / s, f = A / s, h = o[A - 1], d = o[A], c = (l - h) / (d - h) * (f - i) + i;
              break;
            }
          return c;
        }
        function x(u, l) {
          return m.normalize(m.subtract(u, l));
        }
        class m {
          static zeros_Xx2x2(l) {
            for (var o = []; l--; )
              o.push([0, 0]);
            return o;
          }
          static mulItems(l, o) {
            return l.map((s) => s * o);
          }
          static mulMatrix(l, o) {
            return l.reduce((s, d, h) => s + d * o[h], 0);
          }
          static subtract(l, o) {
            return l.map((s, d) => s - o[d]);
          }
          static addArrays(l, o) {
            return l.map((s, d) => s + o[d]);
          }
          static addItems(l, o) {
            return l.map((s) => s + o);
          }
          static sum(l) {
            return l.reduce((o, s) => o + s);
          }
          static dot(l, o) {
            return m.mulMatrix(l, o);
          }
          static vectorLen(l) {
            return Math.hypot(...l);
          }
          static divItems(l, o) {
            return l.map((s) => s / o);
          }
          static squareItems(l) {
            return l.map((o) => o * o);
          }
          static normalize(l) {
            return this.divItems(l, this.vectorLen(l));
          }
        }
        class _ {
          static q(l, o) {
            var s = 1 - o, d = m.mulItems(l[0], s * s * s), h = m.mulItems(l[1], 3 * s * s * o), f = m.mulItems(l[2], 3 * s * o * o), i = m.mulItems(l[3], o * o * o);
            return m.addArrays(m.addArrays(d, h), m.addArrays(f, i));
          }
          static qprime(l, o) {
            var s = 1 - o, d = m.mulItems(m.subtract(l[1], l[0]), 3 * s * s), h = m.mulItems(m.subtract(l[2], l[1]), 6 * s * o), f = m.mulItems(m.subtract(l[3], l[2]), 3 * o * o);
            return m.addArrays(m.addArrays(d, h), f);
          }
          static qprimeprime(l, o) {
            return m.addArrays(m.mulItems(m.addArrays(m.subtract(l[2], m.mulItems(l[1], 2)), l[0]), 6 * (1 - o)), m.mulItems(m.addArrays(m.subtract(l[3], m.mulItems(l[2], 2)), l[1]), 6 * o));
          }
        }
        a.exports = e, a.exports.fitCubic = n, a.exports.createTangent = x;
      },
      (a, e, n) => {
        var b, rt, T, rn, V, Ft, $, Ot, K, Mt;
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.AnnotationLayer = void 0;
        var t = n(1), r = n(6), S = n(3), E = n(27), k = n(28);
        const F = 1e3, v = 9, y = /* @__PURE__ */ new WeakSet();
        function x(ge) {
          return {
            width: ge[2] - ge[0],
            height: ge[3] - ge[1]
          };
        }
        class m {
          static create(p) {
            switch (p.data.annotationType) {
              case t.AnnotationType.LINK:
                return new u(p);
              case t.AnnotationType.TEXT:
                return new l(p);
              case t.AnnotationType.WIDGET:
                switch (p.data.fieldType) {
                  case "Tx":
                    return new s(p);
                  case "Btn":
                    return p.data.radioButton ? new h(p) : p.data.checkBox ? new d(p) : new f(p);
                  case "Ch":
                    return new i(p);
                }
                return new o(p);
              case t.AnnotationType.POPUP:
                return new c(p);
              case t.AnnotationType.FREETEXT:
                return new O(p);
              case t.AnnotationType.LINE:
                return new U(p);
              case t.AnnotationType.SQUARE:
                return new P(p);
              case t.AnnotationType.CIRCLE:
                return new L(p);
              case t.AnnotationType.POLYLINE:
                return new Q(p);
              case t.AnnotationType.CARET:
                return new oe(p);
              case t.AnnotationType.INK:
                return new Y(p);
              case t.AnnotationType.POLYGON:
                return new de(p);
              case t.AnnotationType.HIGHLIGHT:
                return new G(p);
              case t.AnnotationType.UNDERLINE:
                return new J(p);
              case t.AnnotationType.SQUIGGLY:
                return new ne(p);
              case t.AnnotationType.STRIKEOUT:
                return new ae(p);
              case t.AnnotationType.STAMP:
                return new _e(p);
              case t.AnnotationType.FILEATTACHMENT:
                return new we(p);
              default:
                return new _(p);
            }
          }
        }
        class _ {
          constructor(p, {
            isRenderable: w = !1,
            ignoreBorder: D = !1,
            createQuadrilaterals: R = !1
          } = {}) {
            this.isRenderable = w, this.data = p.data, this.layer = p.layer, this.page = p.page, this.viewport = p.viewport, this.linkService = p.linkService, this.downloadManager = p.downloadManager, this.imageResourcesPath = p.imageResourcesPath, this.renderForms = p.renderForms, this.svgFactory = p.svgFactory, this.annotationStorage = p.annotationStorage, this.enableScripting = p.enableScripting, this.hasJSActions = p.hasJSActions, this._fieldObjects = p.fieldObjects, this._mouseState = p.mouseState, w && (this.container = this._createContainer(D)), R && (this.quadrilaterals = this._createQuadrilaterals(D));
          }
          _createContainer(p = !1) {
            const w = this.data, D = this.page, R = this.viewport, M = document.createElement("section"), {
              width: X,
              height: ce
            } = x(w.rect), [le, q, be, te] = R.viewBox, se = be - le, H = te - q;
            M.setAttribute("data-annotation-id", w.id);
            const re = t.Util.normalizeRect([w.rect[0], D.view[3] - w.rect[1] + D.view[1], w.rect[2], D.view[3] - w.rect[3] + D.view[1]]);
            if (!p && w.borderStyle.width > 0) {
              M.style.borderWidth = `${w.borderStyle.width}px`;
              const Te = w.borderStyle.horizontalCornerRadius, De = w.borderStyle.verticalCornerRadius;
              if (Te > 0 || De > 0) {
                const xe = `calc(${Te}px * var(--scale-factor)) / calc(${De}px * var(--scale-factor))`;
                M.style.borderRadius = xe;
              } else if (this instanceof h) {
                const xe = `calc(${X}px * var(--scale-factor)) / calc(${ce}px * var(--scale-factor))`;
                M.style.borderRadius = xe;
              }
              switch (w.borderStyle.style) {
                case t.AnnotationBorderStyleType.SOLID:
                  M.style.borderStyle = "solid";
                  break;
                case t.AnnotationBorderStyleType.DASHED:
                  M.style.borderStyle = "dashed";
                  break;
                case t.AnnotationBorderStyleType.BEVELED:
                  (0, t.warn)("Unimplemented border style: beveled");
                  break;
                case t.AnnotationBorderStyleType.INSET:
                  (0, t.warn)("Unimplemented border style: inset");
                  break;
                case t.AnnotationBorderStyleType.UNDERLINE:
                  M.style.borderBottomStyle = "solid";
                  break;
              }
              const Oe = w.borderColor || null;
              Oe ? M.style.borderColor = t.Util.makeHexColor(Oe[0] | 0, Oe[1] | 0, Oe[2] | 0) : M.style.borderWidth = 0;
            }
            M.style.left = `${100 * (re[0] - le) / se}%`, M.style.top = `${100 * (re[1] - q) / H}%`;
            const {
              rotation: Ae
            } = w;
            return w.hasOwnCanvas || Ae === 0 ? (M.style.width = `${100 * X / se}%`, M.style.height = `${100 * ce / H}%`) : this.setRotation(Ae, M), M;
          }
          setRotation(p, w = this.container) {
            const [D, R, M, X] = this.viewport.viewBox, ce = M - D, le = X - R, {
              width: q,
              height: be
            } = x(this.data.rect);
            let te, se;
            p % 180 === 0 ? (te = 100 * q / ce, se = 100 * be / le) : (te = 100 * be / ce, se = 100 * q / le), w.style.width = `${te}%`, w.style.height = `${se}%`, w.setAttribute("data-main-rotation", (360 - p) % 360);
          }
          get _commonActions() {
            const p = (w, D, R) => {
              const M = R.detail[w];
              R.target.style[D] = E.ColorConverters[`${M[0]}_HTML`](M.slice(1));
            };
            return (0, t.shadow)(this, "_commonActions", {
              display: (w) => {
                const D = w.detail.display % 2 === 1;
                this.container.style.visibility = D ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                  hidden: D,
                  print: w.detail.display === 0 || w.detail.display === 3
                });
              },
              print: (w) => {
                this.annotationStorage.setValue(this.data.id, {
                  print: w.detail.print
                });
              },
              hidden: (w) => {
                this.container.style.visibility = w.detail.hidden ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                  hidden: w.detail.hidden
                });
              },
              focus: (w) => {
                setTimeout(() => w.target.focus({
                  preventScroll: !1
                }), 0);
              },
              userName: (w) => {
                w.target.title = w.detail.userName;
              },
              readonly: (w) => {
                w.detail.readonly ? w.target.setAttribute("readonly", "") : w.target.removeAttribute("readonly");
              },
              required: (w) => {
                this._setRequired(w.target, w.detail.required);
              },
              bgColor: (w) => {
                p("bgColor", "backgroundColor", w);
              },
              fillColor: (w) => {
                p("fillColor", "backgroundColor", w);
              },
              fgColor: (w) => {
                p("fgColor", "color", w);
              },
              textColor: (w) => {
                p("textColor", "color", w);
              },
              borderColor: (w) => {
                p("borderColor", "borderColor", w);
              },
              strokeColor: (w) => {
                p("strokeColor", "borderColor", w);
              },
              rotation: (w) => {
                const D = w.detail.rotation;
                this.setRotation(D), this.annotationStorage.setValue(this.data.id, {
                  rotation: D
                });
              }
            });
          }
          _dispatchEventFromSandbox(p, w) {
            const D = this._commonActions;
            for (const R of Object.keys(w.detail)) {
              const M = p[R] || D[R];
              M == null || M(w);
            }
          }
          _setDefaultPropertiesFromJS(p) {
            if (!this.enableScripting)
              return;
            const w = this.annotationStorage.getRawValue(this.data.id);
            if (!w)
              return;
            const D = this._commonActions;
            for (const [R, M] of Object.entries(w)) {
              const X = D[R];
              if (X) {
                const ce = {
                  detail: {
                    [R]: M
                  },
                  target: p
                };
                X(ce), delete w[R];
              }
            }
          }
          _createQuadrilaterals(p = !1) {
            if (!this.data.quadPoints)
              return null;
            const w = [], D = this.data.rect;
            for (const R of this.data.quadPoints)
              this.data.rect = [R[2].x, R[2].y, R[1].x, R[1].y], w.push(this._createContainer(p));
            return this.data.rect = D, w;
          }
          _createPopup(p, w) {
            let D = this.container;
            this.quadrilaterals && (p = p || this.quadrilaterals, D = this.quadrilaterals[0]), p || (p = document.createElement("div"), p.className = "popupTriggerArea", D.append(p));
            const M = new A({
              container: D,
              trigger: p,
              color: w.color,
              titleObj: w.titleObj,
              modificationDate: w.modificationDate,
              contentsObj: w.contentsObj,
              richText: w.richText,
              hideWrapper: !0
            }).render();
            M.style.left = "100%", D.append(M);
          }
          _renderQuadrilaterals(p) {
            for (const w of this.quadrilaterals)
              w.className = p;
            return this.quadrilaterals;
          }
          render() {
            (0, t.unreachable)("Abstract method `AnnotationElement.render` called");
          }
          _getElementsByName(p, w = null) {
            const D = [];
            if (this._fieldObjects) {
              const R = this._fieldObjects[p];
              if (R)
                for (const {
                  page: M,
                  id: X,
                  exportValues: ce
                } of R) {
                  if (M === -1 || X === w)
                    continue;
                  const le = typeof ce == "string" ? ce : null, q = document.querySelector(`[data-element-id="${X}"]`);
                  if (q && !y.has(q)) {
                    (0, t.warn)(`_getElementsByName - element not allowed: ${X}`);
                    continue;
                  }
                  D.push({
                    id: X,
                    exportValue: le,
                    domElement: q
                  });
                }
              return D;
            }
            for (const R of document.getElementsByName(p)) {
              const {
                exportValue: M
              } = R, X = R.getAttribute("data-element-id");
              X !== w && (!y.has(R) || D.push({
                id: X,
                exportValue: M,
                domElement: R
              }));
            }
            return D;
          }
          static get platform() {
            const p = typeof navigator < "u" ? navigator.platform : "";
            return (0, t.shadow)(this, "platform", {
              isWin: p.includes("Win"),
              isMac: p.includes("Mac")
            });
          }
        }
        class u extends _ {
          constructor(w, D = null) {
            super(w, {
              isRenderable: !0,
              ignoreBorder: !!(D != null && D.ignoreBorder),
              createQuadrilaterals: !0
            });
            ue(this, b);
            ue(this, T);
            this.isTooltipOnly = w.data.isTooltipOnly;
          }
          render() {
            const {
              data: w,
              linkService: D
            } = this, R = document.createElement("a");
            R.setAttribute("data-element-id", w.id);
            let M = !1;
            return w.url ? (D.addLinkAttributes(R, w.url, w.newWindow), M = !0) : w.action ? (this._bindNamedAction(R, w.action), M = !0) : w.attachment ? (this._bindAttachment(R, w.attachment), M = !0) : w.setOCGState ? (me(this, T, rn).call(this, R, w.setOCGState), M = !0) : w.dest ? (this._bindLink(R, w.dest), M = !0) : (w.actions && (w.actions.Action || w.actions["Mouse Up"] || w.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(R, w), M = !0), w.resetForm ? (this._bindResetFormAction(R, w.resetForm), M = !0) : this.isTooltipOnly && !M && (this._bindLink(R, ""), M = !0)), this.quadrilaterals ? this._renderQuadrilaterals("linkAnnotation").map((X, ce) => {
              const le = ce === 0 ? R : R.cloneNode();
              return X.append(le), X;
            }) : (this.container.className = "linkAnnotation", M && this.container.append(R), this.container);
          }
          _bindLink(w, D) {
            w.href = this.linkService.getDestinationHash(D), w.onclick = () => (D && this.linkService.goToDestination(D), !1), (D || D === "") && me(this, b, rt).call(this);
          }
          _bindNamedAction(w, D) {
            w.href = this.linkService.getAnchorUrl(""), w.onclick = () => (this.linkService.executeNamedAction(D), !1), me(this, b, rt).call(this);
          }
          _bindAttachment(w, D) {
            w.href = this.linkService.getAnchorUrl(""), w.onclick = () => {
              var R;
              return (R = this.downloadManager) == null || R.openOrDownloadData(this.container, D.content, D.filename), !1;
            }, me(this, b, rt).call(this);
          }
          _bindJSAction(w, D) {
            w.href = this.linkService.getAnchorUrl("");
            const R = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
            for (const M of Object.keys(D.actions)) {
              const X = R.get(M);
              !X || (w[X] = () => {
                var ce;
                return (ce = this.linkService.eventBus) == null || ce.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: D.id,
                    name: M
                  }
                }), !1;
              });
            }
            w.onclick || (w.onclick = () => !1), me(this, b, rt).call(this);
          }
          _bindResetFormAction(w, D) {
            const R = w.onclick;
            if (R || (w.href = this.linkService.getAnchorUrl("")), me(this, b, rt).call(this), !this._fieldObjects) {
              (0, t.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), R || (w.onclick = () => !1);
              return;
            }
            w.onclick = () => {
              var te;
              R == null || R();
              const {
                fields: M,
                refs: X,
                include: ce
              } = D, le = [];
              if (M.length !== 0 || X.length !== 0) {
                const se = new Set(X);
                for (const H of M) {
                  const re = this._fieldObjects[H] || [];
                  for (const {
                    id: Ae
                  } of re)
                    se.add(Ae);
                }
                for (const H of Object.values(this._fieldObjects))
                  for (const re of H)
                    se.has(re.id) === ce && le.push(re);
              } else
                for (const se of Object.values(this._fieldObjects))
                  le.push(...se);
              const q = this.annotationStorage, be = [];
              for (const se of le) {
                const {
                  id: H
                } = se;
                switch (be.push(H), se.type) {
                  case "text": {
                    const Ae = se.defaultValue || "";
                    q.setValue(H, {
                      value: Ae
                    });
                    break;
                  }
                  case "checkbox":
                  case "radiobutton": {
                    const Ae = se.defaultValue === se.exportValues;
                    q.setValue(H, {
                      value: Ae
                    });
                    break;
                  }
                  case "combobox":
                  case "listbox": {
                    const Ae = se.defaultValue || "";
                    q.setValue(H, {
                      value: Ae
                    });
                    break;
                  }
                  default:
                    continue;
                }
                const re = document.querySelector(`[data-element-id="${H}"]`);
                if (re) {
                  if (!y.has(re)) {
                    (0, t.warn)(`_bindResetFormAction - element not allowed: ${H}`);
                    continue;
                  }
                } else
                  continue;
                re.dispatchEvent(new Event("resetform"));
              }
              return this.enableScripting && ((te = this.linkService.eventBus) == null || te.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: "app",
                  ids: be,
                  name: "ResetForm"
                }
              })), !1;
            };
          }
        }
        b = new WeakSet(), rt = function() {
          this.container.setAttribute("data-internal-link", "");
        }, T = new WeakSet(), rn = function(w, D) {
          w.href = this.linkService.getAnchorUrl(""), w.onclick = () => (this.linkService.executeSetOCGState(D), !1), me(this, b, rt).call(this);
        };
        class l extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w
            });
          }
          render() {
            this.container.className = "textAnnotation";
            const p = document.createElement("img");
            return p.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", p.alt = "[{{type}} Annotation]", p.dataset.l10nId = "text_annotation_type", p.dataset.l10nArgs = JSON.stringify({
              type: this.data.name
            }), this.data.hasPopup || this._createPopup(p, this.data), this.container.append(p), this.container;
          }
        }
        class o extends _ {
          render() {
            return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
          }
          _getKeyModifier(p) {
            const {
              isWin: w,
              isMac: D
            } = _.platform;
            return w && p.ctrlKey || D && p.metaKey;
          }
          _setEventListener(p, w, D, R) {
            w.includes("mouse") ? p.addEventListener(w, (M) => {
              var X;
              (X = this.linkService.eventBus) == null || X.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: D,
                  value: R(M),
                  shift: M.shiftKey,
                  modifier: this._getKeyModifier(M)
                }
              });
            }) : p.addEventListener(w, (M) => {
              var X;
              (X = this.linkService.eventBus) == null || X.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: this.data.id,
                  name: D,
                  value: R(M)
                }
              });
            });
          }
          _setEventListeners(p, w, D) {
            var R;
            for (const [M, X] of w)
              (X === "Action" || ((R = this.data.actions) == null ? void 0 : R[X])) && this._setEventListener(p, M, X, D);
          }
          _setBackgroundColor(p) {
            const w = this.data.backgroundColor || null;
            p.style.backgroundColor = w === null ? "transparent" : t.Util.makeHexColor(w[0], w[1], w[2]);
          }
          _setTextStyle(p) {
            const w = ["left", "center", "right"], {
              fontColor: D
            } = this.data.defaultAppearanceData, R = this.data.defaultAppearanceData.fontSize || v, M = p.style;
            let X;
            const ce = 2, le = (q) => Math.round(10 * q) / 10;
            if (this.data.multiLine) {
              const q = Math.abs(this.data.rect[3] - this.data.rect[1] - ce), be = Math.round(q / (t.LINE_FACTOR * R)) || 1, te = q / be;
              X = Math.min(R, le(te / t.LINE_FACTOR));
            } else {
              const q = Math.abs(this.data.rect[3] - this.data.rect[1] - ce);
              X = Math.min(R, le(q / t.LINE_FACTOR));
            }
            M.fontSize = `calc(${X}px * var(--scale-factor))`, M.color = t.Util.makeHexColor(D[0], D[1], D[2]), this.data.textAlignment !== null && (M.textAlign = w[this.data.textAlignment]);
          }
          _setRequired(p, w) {
            w ? p.setAttribute("required", !0) : p.removeAttribute("required"), p.setAttribute("aria-required", w);
          }
        }
        class s extends o {
          constructor(p) {
            const w = p.renderForms || !p.data.hasAppearance && !!p.data.fieldValue;
            super(p, {
              isRenderable: w
            });
          }
          setPropertyOnSiblings(p, w, D, R) {
            const M = this.annotationStorage;
            for (const X of this._getElementsByName(p.name, p.id))
              X.domElement && (X.domElement[w] = D), M.setValue(X.id, {
                [R]: D
              });
          }
          render() {
            var R;
            const p = this.annotationStorage, w = this.data.id;
            this.container.className = "textWidgetAnnotation";
            let D = null;
            if (this.renderForms) {
              const M = p.getValue(w, {
                value: this.data.fieldValue
              });
              let X = M.formattedValue || M.value || "";
              const ce = p.getValue(w, {
                charLimit: this.data.maxLen
              }).charLimit;
              ce && X.length > ce && (X = X.slice(0, ce));
              const le = {
                userValue: X,
                formattedValue: null,
                valueOnFocus: ""
              };
              this.data.multiLine ? (D = document.createElement("textarea"), D.textContent = X, this.data.doNotScroll && (D.style.overflowY = "hidden")) : (D = document.createElement("input"), D.type = "text", D.setAttribute("value", X), this.data.doNotScroll && (D.style.overflowX = "hidden")), y.add(D), D.setAttribute("data-element-id", w), D.disabled = this.data.readOnly, D.name = this.data.fieldName, D.tabIndex = F, this._setRequired(D, this.data.required), ce && (D.maxLength = ce), D.addEventListener("input", (be) => {
                p.setValue(w, {
                  value: be.target.value
                }), this.setPropertyOnSiblings(D, "value", be.target.value, "value");
              }), D.addEventListener("resetform", (be) => {
                var se;
                const te = (se = this.data.defaultFieldValue) != null ? se : "";
                D.value = le.userValue = te, le.formattedValue = null;
              });
              let q = (be) => {
                const {
                  formattedValue: te
                } = le;
                te != null && (be.target.value = te), be.target.scrollLeft = 0;
              };
              if (this.enableScripting && this.hasJSActions) {
                D.addEventListener("focus", (te) => {
                  le.userValue && (te.target.value = le.userValue), le.valueOnFocus = te.target.value;
                }), D.addEventListener("updatefromsandbox", (te) => {
                  const se = {
                    value(H) {
                      var re;
                      le.userValue = (re = H.detail.value) != null ? re : "", p.setValue(w, {
                        value: le.userValue.toString()
                      }), H.target.value = le.userValue;
                    },
                    formattedValue(H) {
                      const {
                        formattedValue: re
                      } = H.detail;
                      le.formattedValue = re, re != null && H.target !== document.activeElement && (H.target.value = re), p.setValue(w, {
                        formattedValue: re
                      });
                    },
                    selRange(H) {
                      H.target.setSelectionRange(...H.detail.selRange);
                    },
                    charLimit: (H) => {
                      var De;
                      const {
                        charLimit: re
                      } = H.detail, {
                        target: Ae
                      } = H;
                      if (re === 0) {
                        Ae.removeAttribute("maxLength");
                        return;
                      }
                      Ae.setAttribute("maxLength", re);
                      let Te = le.userValue;
                      !Te || Te.length <= re || (Te = Te.slice(0, re), Ae.value = le.userValue = Te, p.setValue(w, {
                        value: Te
                      }), (De = this.linkService.eventBus) == null || De.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: w,
                          name: "Keystroke",
                          value: Te,
                          willCommit: !0,
                          commitKey: 1,
                          selStart: Ae.selectionStart,
                          selEnd: Ae.selectionEnd
                        }
                      }));
                    }
                  };
                  this._dispatchEventFromSandbox(se, te);
                }), D.addEventListener("keydown", (te) => {
                  var re;
                  let se = -1;
                  if (te.key === "Escape" ? se = 0 : te.key === "Enter" && !this.data.multiLine ? se = 2 : te.key === "Tab" && (se = 3), se === -1)
                    return;
                  const {
                    value: H
                  } = te.target;
                  le.valueOnFocus !== H && (le.userValue = H, (re = this.linkService.eventBus) == null || re.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: w,
                      name: "Keystroke",
                      value: H,
                      willCommit: !0,
                      commitKey: se,
                      selStart: te.target.selectionStart,
                      selEnd: te.target.selectionEnd
                    }
                  }));
                });
                const be = q;
                q = null, D.addEventListener("blur", (te) => {
                  var H;
                  const {
                    value: se
                  } = te.target;
                  le.userValue = se, this._mouseState.isDown && le.valueOnFocus !== se && ((H = this.linkService.eventBus) == null || H.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: w,
                      name: "Keystroke",
                      value: se,
                      willCommit: !0,
                      commitKey: 1,
                      selStart: te.target.selectionStart,
                      selEnd: te.target.selectionEnd
                    }
                  })), be(te);
                }), (R = this.data.actions) != null && R.Keystroke && D.addEventListener("beforeinput", (te) => {
                  var xe;
                  const {
                    data: se,
                    target: H
                  } = te, {
                    value: re,
                    selectionStart: Ae,
                    selectionEnd: Te
                  } = H;
                  let De = Ae, Oe = Te;
                  switch (te.inputType) {
                    case "deleteWordBackward": {
                      const he = re.substring(0, Ae).match(/\w*[^\w]*$/);
                      he && (De -= he[0].length);
                      break;
                    }
                    case "deleteWordForward": {
                      const he = re.substring(Ae).match(/^[^\w]*\w*/);
                      he && (Oe += he[0].length);
                      break;
                    }
                    case "deleteContentBackward":
                      Ae === Te && (De -= 1);
                      break;
                    case "deleteContentForward":
                      Ae === Te && (Oe += 1);
                      break;
                  }
                  te.preventDefault(), (xe = this.linkService.eventBus) == null || xe.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: w,
                      name: "Keystroke",
                      value: re,
                      change: se || "",
                      willCommit: !1,
                      selStart: De,
                      selEnd: Oe
                    }
                  });
                }), this._setEventListeners(D, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (te) => te.target.value);
              }
              if (q && D.addEventListener("blur", q), this.data.comb) {
                const te = (this.data.rect[2] - this.data.rect[0]) / ce;
                D.classList.add("comb"), D.style.letterSpacing = `calc(${te}px * var(--scale-factor) - 1ch)`;
              }
            } else
              D = document.createElement("div"), D.textContent = this.data.fieldValue, D.style.verticalAlign = "middle", D.style.display = "table-cell";
            return this._setTextStyle(D), this._setBackgroundColor(D), this._setDefaultPropertiesFromJS(D), this.container.append(D), this.container;
          }
        }
        class d extends o {
          constructor(p) {
            super(p, {
              isRenderable: p.renderForms
            });
          }
          render() {
            const p = this.annotationStorage, w = this.data, D = w.id;
            let R = p.getValue(D, {
              value: w.exportValue === w.fieldValue
            }).value;
            typeof R == "string" && (R = R !== "Off", p.setValue(D, {
              value: R
            })), this.container.className = "buttonWidgetAnnotation checkBox";
            const M = document.createElement("input");
            return y.add(M), M.setAttribute("data-element-id", D), M.disabled = w.readOnly, this._setRequired(M, this.data.required), M.type = "checkbox", M.name = w.fieldName, R && M.setAttribute("checked", !0), M.setAttribute("exportValue", w.exportValue), M.tabIndex = F, M.addEventListener("change", (X) => {
              const {
                name: ce,
                checked: le
              } = X.target;
              for (const q of this._getElementsByName(ce, D)) {
                const be = le && q.exportValue === w.exportValue;
                q.domElement && (q.domElement.checked = be), p.setValue(q.id, {
                  value: be
                });
              }
              p.setValue(D, {
                value: le
              });
            }), M.addEventListener("resetform", (X) => {
              const ce = w.defaultFieldValue || "Off";
              X.target.checked = ce === w.exportValue;
            }), this.enableScripting && this.hasJSActions && (M.addEventListener("updatefromsandbox", (X) => {
              const ce = {
                value(le) {
                  le.target.checked = le.detail.value !== "Off", p.setValue(D, {
                    value: le.target.checked
                  });
                }
              };
              this._dispatchEventFromSandbox(ce, X);
            }), this._setEventListeners(M, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (X) => X.target.checked)), this._setBackgroundColor(M), this._setDefaultPropertiesFromJS(M), this.container.append(M), this.container;
          }
        }
        class h extends o {
          constructor(p) {
            super(p, {
              isRenderable: p.renderForms
            });
          }
          render() {
            this.container.className = "buttonWidgetAnnotation radioButton";
            const p = this.annotationStorage, w = this.data, D = w.id;
            let R = p.getValue(D, {
              value: w.fieldValue === w.buttonValue
            }).value;
            typeof R == "string" && (R = R !== w.buttonValue, p.setValue(D, {
              value: R
            }));
            const M = document.createElement("input");
            if (y.add(M), M.setAttribute("data-element-id", D), M.disabled = w.readOnly, this._setRequired(M, this.data.required), M.type = "radio", M.name = w.fieldName, R && M.setAttribute("checked", !0), M.tabIndex = F, M.addEventListener("change", (X) => {
              const {
                name: ce,
                checked: le
              } = X.target;
              for (const q of this._getElementsByName(ce, D))
                p.setValue(q.id, {
                  value: !1
                });
              p.setValue(D, {
                value: le
              });
            }), M.addEventListener("resetform", (X) => {
              const ce = w.defaultFieldValue;
              X.target.checked = ce != null && ce === w.buttonValue;
            }), this.enableScripting && this.hasJSActions) {
              const X = w.buttonValue;
              M.addEventListener("updatefromsandbox", (ce) => {
                const le = {
                  value: (q) => {
                    const be = X === q.detail.value;
                    for (const te of this._getElementsByName(q.target.name)) {
                      const se = be && te.id === D;
                      te.domElement && (te.domElement.checked = se), p.setValue(te.id, {
                        value: se
                      });
                    }
                  }
                };
                this._dispatchEventFromSandbox(le, ce);
              }), this._setEventListeners(M, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (ce) => ce.target.checked);
            }
            return this._setBackgroundColor(M), this._setDefaultPropertiesFromJS(M), this.container.append(M), this.container;
          }
        }
        class f extends u {
          constructor(p) {
            super(p, {
              ignoreBorder: p.data.hasAppearance
            });
          }
          render() {
            const p = super.render();
            p.className = "buttonWidgetAnnotation pushButton", this.data.alternativeText && (p.title = this.data.alternativeText);
            const w = p.lastChild;
            return this.enableScripting && this.hasJSActions && w && (this._setDefaultPropertiesFromJS(w), w.addEventListener("updatefromsandbox", (D) => {
              this._dispatchEventFromSandbox({}, D);
            })), p;
          }
        }
        class i extends o {
          constructor(p) {
            super(p, {
              isRenderable: p.renderForms
            });
          }
          render() {
            this.container.className = "choiceWidgetAnnotation";
            const p = this.annotationStorage, w = this.data.id, D = p.getValue(w, {
              value: this.data.fieldValue
            }), R = document.createElement("select");
            y.add(R), R.setAttribute("data-element-id", w), R.disabled = this.data.readOnly, this._setRequired(R, this.data.required), R.name = this.data.fieldName, R.tabIndex = F;
            let M = this.data.combo && this.data.options.length > 0;
            this.data.combo || (R.size = this.data.options.length, this.data.multiSelect && (R.multiple = !0)), R.addEventListener("resetform", (q) => {
              const be = this.data.defaultFieldValue;
              for (const te of R.options)
                te.selected = te.value === be;
            });
            for (const q of this.data.options) {
              const be = document.createElement("option");
              be.textContent = q.displayValue, be.value = q.exportValue, D.value.includes(q.exportValue) && (be.setAttribute("selected", !0), M = !1), R.append(be);
            }
            let X = null;
            if (M) {
              const q = document.createElement("option");
              q.value = " ", q.setAttribute("hidden", !0), q.setAttribute("selected", !0), R.prepend(q), X = () => {
                q.remove(), R.removeEventListener("input", X), X = null;
              }, R.addEventListener("input", X);
            }
            const ce = (q, be) => {
              const te = be ? "value" : "textContent", se = q.target.options;
              return q.target.multiple ? Array.prototype.filter.call(se, (H) => H.selected).map((H) => H[te]) : se.selectedIndex === -1 ? null : se[se.selectedIndex][te];
            }, le = (q) => {
              const be = q.target.options;
              return Array.prototype.map.call(be, (te) => ({
                displayValue: te.textContent,
                exportValue: te.value
              }));
            };
            return this.enableScripting && this.hasJSActions ? (R.addEventListener("updatefromsandbox", (q) => {
              const be = {
                value(te) {
                  X == null || X();
                  const se = te.detail.value, H = new Set(Array.isArray(se) ? se : [se]);
                  for (const re of R.options)
                    re.selected = H.has(re.value);
                  p.setValue(w, {
                    value: ce(te, !0)
                  });
                },
                multipleSelection(te) {
                  R.multiple = !0;
                },
                remove(te) {
                  const se = R.options, H = te.detail.remove;
                  se[H].selected = !1, R.remove(H), se.length > 0 && Array.prototype.findIndex.call(se, (Ae) => Ae.selected) === -1 && (se[0].selected = !0), p.setValue(w, {
                    value: ce(te, !0),
                    items: le(te)
                  });
                },
                clear(te) {
                  for (; R.length !== 0; )
                    R.remove(0);
                  p.setValue(w, {
                    value: null,
                    items: []
                  });
                },
                insert(te) {
                  const {
                    index: se,
                    displayValue: H,
                    exportValue: re
                  } = te.detail.insert, Ae = R.children[se], Te = document.createElement("option");
                  Te.textContent = H, Te.value = re, Ae ? Ae.before(Te) : R.append(Te), p.setValue(w, {
                    value: ce(te, !0),
                    items: le(te)
                  });
                },
                items(te) {
                  const {
                    items: se
                  } = te.detail;
                  for (; R.length !== 0; )
                    R.remove(0);
                  for (const H of se) {
                    const {
                      displayValue: re,
                      exportValue: Ae
                    } = H, Te = document.createElement("option");
                    Te.textContent = re, Te.value = Ae, R.append(Te);
                  }
                  R.options.length > 0 && (R.options[0].selected = !0), p.setValue(w, {
                    value: ce(te, !0),
                    items: le(te)
                  });
                },
                indices(te) {
                  const se = new Set(te.detail.indices);
                  for (const H of te.target.options)
                    H.selected = se.has(H.index);
                  p.setValue(w, {
                    value: ce(te, !0)
                  });
                },
                editable(te) {
                  te.target.disabled = !te.detail.editable;
                }
              };
              this._dispatchEventFromSandbox(be, q);
            }), R.addEventListener("input", (q) => {
              var se;
              const be = ce(q, !0), te = ce(q, !1);
              p.setValue(w, {
                value: be
              }), (se = this.linkService.eventBus) == null || se.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: w,
                  name: "Keystroke",
                  value: te,
                  changeEx: be,
                  willCommit: !0,
                  commitKey: 1,
                  keyDown: !1
                }
              });
            }), this._setEventListeners(R, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], (q) => q.target.checked)) : R.addEventListener("input", function(q) {
              p.setValue(w, {
                value: ce(q, !0)
              });
            }), this.data.combo && this._setTextStyle(R), this._setBackgroundColor(R), this._setDefaultPropertiesFromJS(R), this.container.append(R), this.container;
          }
        }
        const j = class extends _ {
          constructor(p) {
            var R, M, X;
            const {
              data: w
            } = p, D = !j.IGNORE_TYPES.has(w.parentType) && !!(((R = w.titleObj) == null ? void 0 : R.str) || ((M = w.contentsObj) == null ? void 0 : M.str) || ((X = w.richText) == null ? void 0 : X.str));
            super(p, {
              isRenderable: D
            });
          }
          render() {
            this.container.className = "popupAnnotation";
            const p = this.layer.querySelectorAll(`[data-annotation-id="${this.data.parentId}"]`);
            if (p.length === 0)
              return this.container;
            const w = new A({
              container: this.container,
              trigger: Array.from(p),
              color: this.data.color,
              titleObj: this.data.titleObj,
              modificationDate: this.data.modificationDate,
              contentsObj: this.data.contentsObj,
              richText: this.data.richText
            }), D = this.page, R = t.Util.normalizeRect([this.data.parentRect[0], D.view[3] - this.data.parentRect[1] + D.view[1], this.data.parentRect[2], D.view[3] - this.data.parentRect[3] + D.view[1]]), M = R[0] + this.data.parentRect[2] - this.data.parentRect[0], X = R[1], [ce, le, q, be] = this.viewport.viewBox, te = q - ce, se = be - le;
            return this.container.style.left = `${100 * (M - ce) / te}%`, this.container.style.top = `${100 * (X - le) / se}%`, this.container.append(w.render()), this.container;
          }
        };
        let c = j;
        He(c, "IGNORE_TYPES", /* @__PURE__ */ new Set(["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"]));
        class A {
          constructor(p) {
            this.container = p.container, this.trigger = p.trigger, this.color = p.color, this.titleObj = p.titleObj, this.modificationDate = p.modificationDate, this.contentsObj = p.contentsObj, this.richText = p.richText, this.hideWrapper = p.hideWrapper || !1, this.pinned = !1;
          }
          render() {
            var ce, le;
            const w = document.createElement("div");
            w.className = "popupWrapper", this.hideElement = this.hideWrapper ? w : this.container, this.hideElement.hidden = !0;
            const D = document.createElement("div");
            D.className = "popup";
            const R = this.color;
            if (R) {
              const q = 0.7 * (255 - R[0]) + R[0], be = 0.7 * (255 - R[1]) + R[1], te = 0.7 * (255 - R[2]) + R[2];
              D.style.backgroundColor = t.Util.makeHexColor(q | 0, be | 0, te | 0);
            }
            const M = document.createElement("h1");
            M.dir = this.titleObj.dir, M.textContent = this.titleObj.str, D.append(M);
            const X = r.PDFDateString.toDateObject(this.modificationDate);
            if (X) {
              const q = document.createElement("span");
              q.className = "popupDate", q.textContent = "{{date}}, {{time}}", q.dataset.l10nId = "annotation_date_string", q.dataset.l10nArgs = JSON.stringify({
                date: X.toLocaleDateString(),
                time: X.toLocaleTimeString()
              }), D.append(q);
            }
            if (((ce = this.richText) == null ? void 0 : ce.str) && (!((le = this.contentsObj) != null && le.str) || this.contentsObj.str === this.richText.str))
              k.XfaLayer.render({
                xfaHtml: this.richText.html,
                intent: "richText",
                div: D
              }), D.lastChild.className = "richText popupContent";
            else {
              const q = this._formatContents(this.contentsObj);
              D.append(q);
            }
            Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
            for (const q of this.trigger)
              q.addEventListener("click", this._toggle.bind(this)), q.addEventListener("mouseover", this._show.bind(this, !1)), q.addEventListener("mouseout", this._hide.bind(this, !1));
            return D.addEventListener("click", this._hide.bind(this, !0)), w.append(D), w;
          }
          _formatContents({
            str: p,
            dir: w
          }) {
            const D = document.createElement("p");
            D.className = "popupContent", D.dir = w;
            const R = p.split(/(?:\r\n?|\n)/);
            for (let M = 0, X = R.length; M < X; ++M) {
              const ce = R[M];
              D.append(document.createTextNode(ce)), M < X - 1 && D.append(document.createElement("br"));
            }
            return D;
          }
          _toggle() {
            this.pinned ? this._hide(!0) : this._show(!0);
          }
          _show(p = !1) {
            p && (this.pinned = !0), this.hideElement.hidden && (this.hideElement.hidden = !1, this.container.style.zIndex = parseInt(this.container.style.zIndex) + 1e3);
          }
          _hide(p = !0) {
            p && (this.pinned = !1), !this.hideElement.hidden && !this.pinned && (this.hideElement.hidden = !0, this.container.style.zIndex = parseInt(this.container.style.zIndex) - 1e3);
          }
        }
        class O extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            }), this.textContent = p.data.textContent;
          }
          render() {
            if (this.container.className = "freeTextAnnotation", this.textContent) {
              const p = document.createElement("div");
              p.className = "annotationTextContent", p.setAttribute("role", "comment");
              for (const w of this.textContent) {
                const D = document.createElement("span");
                D.textContent = w, p.append(D);
              }
              this.container.append(p);
            }
            return this.data.hasPopup || this._createPopup(null, this.data), this.container;
          }
        }
        class U extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "lineAnnotation";
            const p = this.data, {
              width: w,
              height: D
            } = x(p.rect), R = this.svgFactory.create(w, D, !0), M = this.svgFactory.createElement("svg:line");
            return M.setAttribute("x1", p.rect[2] - p.lineCoordinates[0]), M.setAttribute("y1", p.rect[3] - p.lineCoordinates[1]), M.setAttribute("x2", p.rect[2] - p.lineCoordinates[2]), M.setAttribute("y2", p.rect[3] - p.lineCoordinates[3]), M.setAttribute("stroke-width", p.borderStyle.width || 1), M.setAttribute("stroke", "transparent"), M.setAttribute("fill", "transparent"), R.append(M), this.container.append(R), this._createPopup(M, p), this.container;
          }
        }
        class P extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "squareAnnotation";
            const p = this.data, {
              width: w,
              height: D
            } = x(p.rect), R = this.svgFactory.create(w, D, !0), M = p.borderStyle.width, X = this.svgFactory.createElement("svg:rect");
            return X.setAttribute("x", M / 2), X.setAttribute("y", M / 2), X.setAttribute("width", w - M), X.setAttribute("height", D - M), X.setAttribute("stroke-width", M || 1), X.setAttribute("stroke", "transparent"), X.setAttribute("fill", "transparent"), R.append(X), this.container.append(R), this._createPopup(X, p), this.container;
          }
        }
        class L extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            });
          }
          render() {
            this.container.className = "circleAnnotation";
            const p = this.data, {
              width: w,
              height: D
            } = x(p.rect), R = this.svgFactory.create(w, D, !0), M = p.borderStyle.width, X = this.svgFactory.createElement("svg:ellipse");
            return X.setAttribute("cx", w / 2), X.setAttribute("cy", D / 2), X.setAttribute("rx", w / 2 - M / 2), X.setAttribute("ry", D / 2 - M / 2), X.setAttribute("stroke-width", M || 1), X.setAttribute("stroke", "transparent"), X.setAttribute("fill", "transparent"), R.append(X), this.container.append(R), this._createPopup(X, p), this.container;
          }
        }
        class Q extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
          }
          render() {
            this.container.className = this.containerClassName;
            const p = this.data, {
              width: w,
              height: D
            } = x(p.rect), R = this.svgFactory.create(w, D, !0);
            let M = [];
            for (const ce of p.vertices) {
              const le = ce.x - p.rect[0], q = p.rect[3] - ce.y;
              M.push(le + "," + q);
            }
            M = M.join(" ");
            const X = this.svgFactory.createElement(this.svgElementName);
            return X.setAttribute("points", M), X.setAttribute("stroke-width", p.borderStyle.width || 1), X.setAttribute("stroke", "transparent"), X.setAttribute("fill", "transparent"), R.append(X), this.container.append(R), this._createPopup(X, p), this.container;
          }
        }
        class de extends Q {
          constructor(p) {
            super(p), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
          }
        }
        class oe extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            });
          }
          render() {
            return this.container.className = "caretAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
          }
        }
        class Y extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline";
          }
          render() {
            this.container.className = this.containerClassName;
            const p = this.data, {
              width: w,
              height: D
            } = x(p.rect), R = this.svgFactory.create(w, D, !0);
            for (const M of p.inkLists) {
              let X = [];
              for (const le of M) {
                const q = le.x - p.rect[0], be = p.rect[3] - le.y;
                X.push(`${q},${be}`);
              }
              X = X.join(" ");
              const ce = this.svgFactory.createElement(this.svgElementName);
              ce.setAttribute("points", X), ce.setAttribute("stroke-width", p.borderStyle.width || 1), ce.setAttribute("stroke", "transparent"), ce.setAttribute("fill", "transparent"), this._createPopup(ce, p), R.append(ce);
            }
            return this.container.append(R), this.container;
          }
        }
        class G extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("highlightAnnotation") : (this.container.className = "highlightAnnotation", this.container);
          }
        }
        class J extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("underlineAnnotation") : (this.container.className = "underlineAnnotation", this.container);
          }
        }
        class ne extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("squigglyAnnotation") : (this.container.className = "squigglyAnnotation", this.container);
          }
        }
        class ae extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0,
              createQuadrilaterals: !0
            });
          }
          render() {
            return this.data.hasPopup || this._createPopup(null, this.data), this.quadrilaterals ? this._renderQuadrilaterals("strikeoutAnnotation") : (this.container.className = "strikeoutAnnotation", this.container);
          }
        }
        class _e extends _ {
          constructor(p) {
            var D, R, M;
            const w = !!(p.data.hasPopup || ((D = p.data.titleObj) == null ? void 0 : D.str) || ((R = p.data.contentsObj) == null ? void 0 : R.str) || ((M = p.data.richText) == null ? void 0 : M.str));
            super(p, {
              isRenderable: w,
              ignoreBorder: !0
            });
          }
          render() {
            return this.container.className = "stampAnnotation", this.data.hasPopup || this._createPopup(null, this.data), this.container;
          }
        }
        class we extends _ {
          constructor(p) {
            var R;
            super(p, {
              isRenderable: !0
            });
            const {
              filename: w,
              content: D
            } = this.data.file;
            this.filename = (0, r.getFilenameFromUrl)(w, !0), this.content = D, (R = this.linkService.eventBus) == null || R.dispatch("fileattachmentannotation", {
              source: this,
              filename: w,
              content: D
            });
          }
          render() {
            var w, D;
            this.container.className = "fileAttachmentAnnotation";
            const p = document.createElement("div");
            return p.className = "popupTriggerArea", p.addEventListener("dblclick", this._download.bind(this)), !this.data.hasPopup && (((w = this.data.titleObj) == null ? void 0 : w.str) || ((D = this.data.contentsObj) == null ? void 0 : D.str) || this.data.richText) && this._createPopup(p, this.data), this.container.append(p), this.container;
          }
          _download() {
            var p;
            (p = this.downloadManager) == null || p.openOrDownloadData(this.container, this.content, this.filename);
          }
        }
        const ie = class {
          static render(p) {
            var ce, le;
            const {
              annotations: w,
              div: D,
              viewport: R,
              accessibilityManager: M
            } = p;
            me(this, $, Ot).call(this, D, R);
            let X = 0;
            for (const q of w) {
              if (q.annotationType !== t.AnnotationType.POPUP) {
                const {
                  width: te,
                  height: se
                } = x(q.rect);
                if (te <= 0 || se <= 0)
                  continue;
              }
              const be = m.create({
                data: q,
                layer: D,
                page: p.page,
                viewport: R,
                linkService: p.linkService,
                downloadManager: p.downloadManager,
                imageResourcesPath: p.imageResourcesPath || "",
                renderForms: p.renderForms !== !1,
                svgFactory: new r.DOMSVGFactory(),
                annotationStorage: p.annotationStorage || new S.AnnotationStorage(),
                enableScripting: p.enableScripting,
                hasJSActions: p.hasJSActions,
                fieldObjects: p.fieldObjects,
                mouseState: p.mouseState || {
                  isDown: !1
                }
              });
              if (be.isRenderable) {
                const te = be.render();
                if (q.hidden && (te.style.visibility = "hidden"), Array.isArray(te))
                  for (const se of te)
                    se.style.zIndex = X++, me(ce = ie, V, Ft).call(ce, se, q.id, D, M);
                else
                  te.style.zIndex = X++, be instanceof c ? D.prepend(te) : me(le = ie, V, Ft).call(le, te, q.id, D, M);
              }
            }
            me(this, K, Mt).call(this, D, p.annotationCanvasMap);
          }
          static update(p) {
            const {
              annotationCanvasMap: w,
              div: D,
              viewport: R
            } = p;
            me(this, $, Ot).call(this, D, R), me(this, K, Mt).call(this, D, w), D.hidden = !1;
          }
        };
        let B = ie;
        V = new WeakSet(), Ft = function(p, w, D, R) {
          const M = p.firstChild || p;
          M.id = `${r.AnnotationPrefix}${w}`, D.append(p), R == null || R.moveElementInDOM(D, p, M, !1);
        }, $ = new WeakSet(), Ot = function(p, {
          width: w,
          height: D,
          rotation: R
        }) {
          const {
            style: M
          } = p, X = R % 180 !== 0, ce = Math.floor(w) + "px", le = Math.floor(D) + "px";
          M.width = X ? le : ce, M.height = X ? ce : le, p.setAttribute("data-main-rotation", R);
        }, K = new WeakSet(), Mt = function(p, w) {
          if (!!w) {
            for (const [D, R] of w) {
              const M = p.querySelector(`[data-annotation-id="${D}"]`);
              if (!M)
                continue;
              const {
                firstChild: X
              } = M;
              X ? X.nodeName === "CANVAS" ? X.replaceWith(R) : X.before(R) : M.append(R);
            }
            w.clear();
          }
        }, ue(B, V), ue(B, $), ue(B, K), e.AnnotationLayer = B;
      },
      (a, e) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.ColorConverters = void 0;
        function n(r) {
          return Math.floor(Math.max(0, Math.min(1, r)) * 255).toString(16).padStart(2, "0");
        }
        class t {
          static CMYK_G([S, E, k, F]) {
            return ["G", 1 - Math.min(1, 0.3 * S + 0.59 * k + 0.11 * E + F)];
          }
          static G_CMYK([S]) {
            return ["CMYK", 0, 0, 0, 1 - S];
          }
          static G_RGB([S]) {
            return ["RGB", S, S, S];
          }
          static G_HTML([S]) {
            const E = n(S);
            return `#${E}${E}${E}`;
          }
          static RGB_G([S, E, k]) {
            return ["G", 0.3 * S + 0.59 * E + 0.11 * k];
          }
          static RGB_HTML([S, E, k]) {
            const F = n(S), v = n(E), y = n(k);
            return `#${F}${v}${y}`;
          }
          static T_HTML() {
            return "#00000000";
          }
          static CMYK_RGB([S, E, k, F]) {
            return ["RGB", 1 - Math.min(1, S + F), 1 - Math.min(1, k + F), 1 - Math.min(1, E + F)];
          }
          static CMYK_HTML(S) {
            const E = this.CMYK_RGB(S).slice(1);
            return this.RGB_HTML(E);
          }
          static RGB_CMYK([S, E, k]) {
            const F = 1 - S, v = 1 - E, y = 1 - k, x = Math.min(F, v, y);
            return ["CMYK", F, v, y, x];
          }
        }
        e.ColorConverters = t;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.XfaLayer = void 0;
        var t = n(19);
        class r {
          static setupStorage(E, k, F, v, y) {
            const x = v.getValue(k, {
              value: null
            });
            switch (F.name) {
              case "textarea":
                if (x.value !== null && (E.textContent = x.value), y === "print")
                  break;
                E.addEventListener("input", (m) => {
                  v.setValue(k, {
                    value: m.target.value
                  });
                });
                break;
              case "input":
                if (F.attributes.type === "radio" || F.attributes.type === "checkbox") {
                  if (x.value === F.attributes.xfaOn ? E.setAttribute("checked", !0) : x.value === F.attributes.xfaOff && E.removeAttribute("checked"), y === "print")
                    break;
                  E.addEventListener("change", (m) => {
                    v.setValue(k, {
                      value: m.target.checked ? m.target.getAttribute("xfaOn") : m.target.getAttribute("xfaOff")
                    });
                  });
                } else {
                  if (x.value !== null && E.setAttribute("value", x.value), y === "print")
                    break;
                  E.addEventListener("input", (m) => {
                    v.setValue(k, {
                      value: m.target.value
                    });
                  });
                }
                break;
              case "select":
                if (x.value !== null)
                  for (const m of F.children)
                    m.attributes.value === x.value && (m.attributes.selected = !0);
                E.addEventListener("input", (m) => {
                  const _ = m.target.options, u = _.selectedIndex === -1 ? "" : _[_.selectedIndex].value;
                  v.setValue(k, {
                    value: u
                  });
                });
                break;
            }
          }
          static setAttributes({
            html: E,
            element: k,
            storage: F = null,
            intent: v,
            linkService: y
          }) {
            const {
              attributes: x
            } = k, m = E instanceof HTMLAnchorElement;
            x.type === "radio" && (x.name = `${x.name}-${v}`);
            for (const [_, u] of Object.entries(x))
              if (u != null)
                switch (_) {
                  case "class":
                    u.length && E.setAttribute(_, u.join(" "));
                    break;
                  case "dataId":
                    break;
                  case "id":
                    E.setAttribute("data-element-id", u);
                    break;
                  case "style":
                    Object.assign(E.style, u);
                    break;
                  case "textContent":
                    E.textContent = u;
                    break;
                  default:
                    (!m || _ !== "href" && _ !== "newWindow") && E.setAttribute(_, u);
                }
            m && y.addLinkAttributes(E, x.href, x.newWindow), F && x.dataId && this.setupStorage(E, x.dataId, k, F);
          }
          static render(E) {
            var l;
            const k = E.annotationStorage, F = E.linkService, v = E.xfaHtml, y = E.intent || "display", x = document.createElement(v.name);
            v.attributes && this.setAttributes({
              html: x,
              element: v,
              intent: y,
              linkService: F
            });
            const m = [[v, -1, x]], _ = E.div;
            if (_.append(x), E.viewport) {
              const o = `matrix(${E.viewport.transform.join(",")})`;
              _.style.transform = o;
            }
            y !== "richText" && _.setAttribute("class", "xfaLayer xfaFont");
            const u = [];
            for (; m.length > 0; ) {
              const [o, s, d] = m.at(-1);
              if (s + 1 === o.children.length) {
                m.pop();
                continue;
              }
              const h = o.children[++m.at(-1)[1]];
              if (h === null)
                continue;
              const {
                name: f
              } = h;
              if (f === "#text") {
                const c = document.createTextNode(h.value);
                u.push(c), d.append(c);
                continue;
              }
              let i;
              if ((l = h == null ? void 0 : h.attributes) != null && l.xmlns ? i = document.createElementNS(h.attributes.xmlns, f) : i = document.createElement(f), d.append(i), h.attributes && this.setAttributes({
                html: i,
                element: h,
                storage: k,
                intent: y,
                linkService: F
              }), h.children && h.children.length > 0)
                m.push([h, -1, i]);
              else if (h.value) {
                const c = document.createTextNode(h.value);
                t.XfaText.shouldBuildText(f) && u.push(c), i.append(c);
              }
            }
            for (const o of _.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
              o.setAttribute("readOnly", !0);
            return {
              textDivs: u
            };
          }
          static update(E) {
            const k = `matrix(${E.viewport.transform.join(",")})`;
            E.div.style.transform = k, E.div.hidden = !1;
          }
        }
        e.XfaLayer = r;
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.TextLayerRenderTask = void 0, e.renderTextLayer = _;
        var t = n(1), r = n(6);
        const S = 1e5, E = 30, k = 0.8, F = /* @__PURE__ */ new Map();
        function v(u, l) {
          const o = F.get(u);
          if (o)
            return o;
          l.save(), l.font = `${E}px ${u}`;
          const s = l.measureText("");
          let d = s.fontBoundingBoxAscent, h = Math.abs(s.fontBoundingBoxDescent);
          if (d) {
            l.restore();
            const i = d / (d + h);
            return F.set(u, i), i;
          }
          l.strokeStyle = "red", l.clearRect(0, 0, E, E), l.strokeText("g", 0, 0);
          let f = l.getImageData(0, 0, E, E).data;
          h = 0;
          for (let i = f.length - 1 - 3; i >= 0; i -= 4)
            if (f[i] > 0) {
              h = Math.ceil(i / 4 / E);
              break;
            }
          l.clearRect(0, 0, E, E), l.strokeText("A", 0, E), f = l.getImageData(0, 0, E, E).data, d = 0;
          for (let i = 0, c = f.length; i < c; i += 4)
            if (f[i] > 0) {
              d = E - Math.floor(i / 4 / E);
              break;
            }
          if (l.restore(), d) {
            const i = d / (d + h);
            return F.set(u, i), i;
          }
          return F.set(u, k), k;
        }
        function y(u, l, o, s) {
          const d = document.createElement("span"), h = {
            angle: 0,
            canvasWidth: 0,
            hasText: l.str !== "",
            hasEOL: l.hasEOL,
            fontSize: 0
          };
          u._textDivs.push(d);
          const f = t.Util.transform(u._viewport.transform, l.transform);
          let i = Math.atan2(f[1], f[0]);
          const c = o[l.fontName];
          c.vertical && (i += Math.PI / 2);
          const A = Math.hypot(f[2], f[3]), O = A * v(c.fontFamily, s);
          let U, P;
          i === 0 ? (U = f[4], P = f[5] - O) : (U = f[4] + O * Math.sin(i), P = f[5] - O * Math.cos(i)), d.style.left = `${U}px`, d.style.top = `${P}px`, d.style.fontSize = `${A}px`, d.style.fontFamily = c.fontFamily, h.fontSize = A, d.setAttribute("role", "presentation"), d.textContent = l.str, d.dir = l.dir, u._fontInspectorEnabled && (d.dataset.fontName = l.fontName), i !== 0 && (h.angle = i * (180 / Math.PI));
          let L = !1;
          if (l.str.length > 1)
            L = !0;
          else if (l.str !== " " && l.transform[0] !== l.transform[3]) {
            const Q = Math.abs(l.transform[0]), de = Math.abs(l.transform[3]);
            Q !== de && Math.max(Q, de) / Math.min(Q, de) > 1.5 && (L = !0);
          }
          L && (c.vertical ? h.canvasWidth = l.height * u._viewport.scale : h.canvasWidth = l.width * u._viewport.scale), u._textDivProperties.set(d, h), u._textContentStream && u._layoutText(d);
        }
        function x(u) {
          if (u._canceled)
            return;
          const l = u._textDivs, o = u._capability;
          if (l.length > S) {
            u._renderingDone = !0, o.resolve();
            return;
          }
          if (!u._textContentStream)
            for (const d of l)
              u._layoutText(d);
          u._renderingDone = !0, o.resolve();
        }
        class m {
          constructor({
            textContent: l,
            textContentStream: o,
            container: s,
            viewport: d,
            textDivs: h,
            textContentItemsStr: f
          }) {
            var i;
            this._textContent = l, this._textContentStream = o, this._container = s, this._document = s.ownerDocument, this._viewport = d, this._textDivs = h || [], this._textContentItemsStr = f || [], this._fontInspectorEnabled = !!((i = globalThis.FontInspector) != null && i.enabled), this._reader = null, this._layoutTextLastFontSize = null, this._layoutTextLastFontFamily = null, this._layoutTextCtx = null, this._textDivProperties = /* @__PURE__ */ new WeakMap(), this._renderingDone = !1, this._canceled = !1, this._capability = (0, t.createPromiseCapability)(), this._renderTimer = null, this._devicePixelRatio = globalThis.devicePixelRatio || 1, this._capability.promise.finally(() => {
              this._textDivProperties = null, this._layoutTextCtx && (this._layoutTextCtx.canvas.width = 0, this._layoutTextCtx.canvas.height = 0, this._layoutTextCtx = null);
            }).catch(() => {
            });
          }
          get promise() {
            return this._capability.promise;
          }
          cancel() {
            this._canceled = !0, this._reader && (this._reader.cancel(new t.AbortException("TextLayer task cancelled.")).catch(() => {
            }), this._reader = null), this._renderTimer !== null && (clearTimeout(this._renderTimer), this._renderTimer = null), this._capability.reject(new Error("TextLayer task cancelled."));
          }
          _processItems(l, o) {
            for (const s of l) {
              if (s.str === void 0) {
                if (s.type === "beginMarkedContentProps" || s.type === "beginMarkedContent") {
                  const d = this._container;
                  this._container = document.createElement("span"), this._container.classList.add("markedContent"), s.id !== null && this._container.setAttribute("id", `${s.id}`), d.append(this._container);
                } else
                  s.type === "endMarkedContent" && (this._container = this._container.parentNode);
                continue;
              }
              this._textContentItemsStr.push(s.str), y(this, s, o, this._layoutTextCtx);
            }
          }
          _layoutText(l) {
            const o = this._textDivProperties.get(l);
            let s = "";
            if (o.canvasWidth !== 0 && o.hasText) {
              const {
                fontFamily: d
              } = l.style, {
                fontSize: h
              } = o;
              (h !== this._layoutTextLastFontSize || d !== this._layoutTextLastFontFamily) && (this._layoutTextCtx.font = `${h * this._devicePixelRatio}px ${d}`, this._layoutTextLastFontSize = h, this._layoutTextLastFontFamily = d);
              const {
                width: f
              } = this._layoutTextCtx.measureText(l.textContent);
              f > 0 && (s = `scaleX(${this._devicePixelRatio * o.canvasWidth / f})`);
            }
            if (o.angle !== 0 && (s = `rotate(${o.angle}deg) ${s}`), s.length > 0 && (l.style.transform = s), o.hasText && this._container.append(l), o.hasEOL) {
              const d = document.createElement("br");
              d.setAttribute("role", "presentation"), this._container.append(d);
            }
          }
          _render(l = 0) {
            const o = (0, t.createPromiseCapability)();
            let s = /* @__PURE__ */ Object.create(null);
            const d = this._document.createElement("canvas");
            if (d.height = d.width = E, this._layoutTextCtx = d.getContext("2d", {
              alpha: !1
            }), this._textContent) {
              const h = this._textContent.items, f = this._textContent.styles;
              this._processItems(h, f), o.resolve();
            } else if (this._textContentStream) {
              const h = () => {
                this._reader.read().then(({
                  value: f,
                  done: i
                }) => {
                  if (i) {
                    o.resolve();
                    return;
                  }
                  Object.assign(s, f.styles), this._processItems(f.items, s), h();
                }, o.reject);
              };
              this._reader = this._textContentStream.getReader(), h();
            } else
              throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
            o.promise.then(() => {
              s = null, l ? ((0, r.deprecated)("The TextLayerRender `timeout` parameter will be removed in the future, since streaming of textContent has made it obsolete."), this._renderTimer = setTimeout(() => {
                x(this), this._renderTimer = null;
              }, l)) : x(this);
            }, this._capability.reject);
          }
        }
        e.TextLayerRenderTask = m;
        function _(u) {
          const l = new m({
            textContent: u.textContent,
            textContentStream: u.textContentStream,
            container: u.container,
            viewport: u.viewport,
            textDivs: u.textDivs,
            textContentItemsStr: u.textContentItemsStr
          });
          return l._render(u.timeout), l;
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.SVGGraphics = void 0;
        var t = n(6), r = n(1), S = n(12);
        let E = class {
          constructor() {
            (0, r.unreachable)("Not implemented: SVGGraphics");
          }
        };
        e.SVGGraphics = E;
        {
          let l = function(i) {
            let c = [];
            const A = [];
            for (const O of i) {
              if (O.fn === "save") {
                c.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                }), A.push(c), c = c.at(-1).items;
                continue;
              }
              O.fn === "restore" ? c = A.pop() : c.push(O);
            }
            return c;
          }, o = function(i) {
            if (Number.isInteger(i))
              return i.toString();
            const c = i.toFixed(10);
            let A = c.length - 1;
            if (c[A] !== "0")
              return c;
            do
              A--;
            while (c[A] === "0");
            return c.substring(0, c[A] === "." ? A : A + 1);
          }, s = function(i) {
            if (i[4] === 0 && i[5] === 0) {
              if (i[1] === 0 && i[2] === 0)
                return i[0] === 1 && i[3] === 1 ? "" : `scale(${o(i[0])} ${o(i[3])})`;
              if (i[0] === i[3] && i[1] === -i[2]) {
                const c = Math.acos(i[0]) * 180 / Math.PI;
                return `rotate(${o(c)})`;
              }
            } else if (i[0] === 1 && i[1] === 0 && i[2] === 0 && i[3] === 1)
              return `translate(${o(i[4])} ${o(i[5])})`;
            return `matrix(${o(i[0])} ${o(i[1])} ${o(i[2])} ${o(i[3])} ${o(i[4])} ${o(i[5])})`;
          };
          const k = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          }, F = "http://www.w3.org/XML/1998/namespace", v = "http://www.w3.org/1999/xlink", y = ["butt", "round", "square"], x = ["miter", "round", "bevel"], m = function(i, c = "", A = !1) {
            if (URL.createObjectURL && typeof Blob < "u" && !A)
              return URL.createObjectURL(new Blob([i], {
                type: c
              }));
            const O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let U = `data:${c};base64,`;
            for (let P = 0, L = i.length; P < L; P += 3) {
              const Q = i[P] & 255, de = i[P + 1] & 255, oe = i[P + 2] & 255, Y = Q >> 2, G = (Q & 3) << 4 | de >> 4, J = P + 1 < L ? (de & 15) << 2 | oe >> 6 : 64, ne = P + 2 < L ? oe & 63 : 64;
              U += O[Y] + O[G] + O[J] + O[ne];
            }
            return U;
          }, _ = function() {
            const i = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), c = 12, A = new Int32Array(256);
            for (let oe = 0; oe < 256; oe++) {
              let Y = oe;
              for (let G = 0; G < 8; G++)
                Y & 1 ? Y = 3988292384 ^ Y >> 1 & 2147483647 : Y = Y >> 1 & 2147483647;
              A[oe] = Y;
            }
            function O(oe, Y, G) {
              let J = -1;
              for (let ne = Y; ne < G; ne++) {
                const ae = (J ^ oe[ne]) & 255, _e = A[ae];
                J = J >>> 8 ^ _e;
              }
              return J ^ -1;
            }
            function U(oe, Y, G, J) {
              let ne = J;
              const ae = Y.length;
              G[ne] = ae >> 24 & 255, G[ne + 1] = ae >> 16 & 255, G[ne + 2] = ae >> 8 & 255, G[ne + 3] = ae & 255, ne += 4, G[ne] = oe.charCodeAt(0) & 255, G[ne + 1] = oe.charCodeAt(1) & 255, G[ne + 2] = oe.charCodeAt(2) & 255, G[ne + 3] = oe.charCodeAt(3) & 255, ne += 4, G.set(Y, ne), ne += Y.length;
              const _e = O(G, J + 4, ne);
              G[ne] = _e >> 24 & 255, G[ne + 1] = _e >> 16 & 255, G[ne + 2] = _e >> 8 & 255, G[ne + 3] = _e & 255;
            }
            function P(oe, Y, G) {
              let J = 1, ne = 0;
              for (let ae = Y; ae < G; ++ae)
                J = (J + (oe[ae] & 255)) % 65521, ne = (ne + J) % 65521;
              return ne << 16 | J;
            }
            function L(oe) {
              if (!S.isNodeJS)
                return Q(oe);
              try {
                let Y;
                parseInt(process.versions.node) >= 8 ? Y = oe : Y = Buffer.from(oe);
                const G = require$$5.deflateSync(Y, {
                  level: 9
                });
                return G instanceof Uint8Array ? G : new Uint8Array(G);
              } catch (Y) {
                (0, r.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + Y);
              }
              return Q(oe);
            }
            function Q(oe) {
              let Y = oe.length;
              const G = 65535, J = Math.ceil(Y / G), ne = new Uint8Array(2 + Y + J * 5 + 4);
              let ae = 0;
              ne[ae++] = 120, ne[ae++] = 156;
              let _e = 0;
              for (; Y > G; )
                ne[ae++] = 0, ne[ae++] = 255, ne[ae++] = 255, ne[ae++] = 0, ne[ae++] = 0, ne.set(oe.subarray(_e, _e + G), ae), ae += G, _e += G, Y -= G;
              ne[ae++] = 1, ne[ae++] = Y & 255, ne[ae++] = Y >> 8 & 255, ne[ae++] = ~Y & 65535 & 255, ne[ae++] = (~Y & 65535) >> 8 & 255, ne.set(oe.subarray(_e), ae), ae += oe.length - _e;
              const we = P(oe, 0, oe.length);
              return ne[ae++] = we >> 24 & 255, ne[ae++] = we >> 16 & 255, ne[ae++] = we >> 8 & 255, ne[ae++] = we & 255, ne;
            }
            function de(oe, Y, G, J) {
              const ne = oe.width, ae = oe.height;
              let _e, we, B;
              const b = oe.data;
              switch (Y) {
                case r.ImageKind.GRAYSCALE_1BPP:
                  we = 0, _e = 1, B = ne + 7 >> 3;
                  break;
                case r.ImageKind.RGB_24BPP:
                  we = 2, _e = 8, B = ne * 3;
                  break;
                case r.ImageKind.RGBA_32BPP:
                  we = 6, _e = 8, B = ne * 4;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const g = new Uint8Array((1 + B) * ae);
              let T = 0, N = 0;
              for (let K = 0; K < ae; ++K)
                g[T++] = 0, g.set(b.subarray(N, N + B), T), N += B, T += B;
              if (Y === r.ImageKind.GRAYSCALE_1BPP && J) {
                T = 0;
                for (let K = 0; K < ae; K++) {
                  T++;
                  for (let pe = 0; pe < B; pe++)
                    g[T++] ^= 255;
                }
              }
              const j = new Uint8Array([ne >> 24 & 255, ne >> 16 & 255, ne >> 8 & 255, ne & 255, ae >> 24 & 255, ae >> 16 & 255, ae >> 8 & 255, ae & 255, _e, we, 0, 0, 0]), V = L(g), z = i.length + c * 3 + j.length + V.length, $ = new Uint8Array(z);
              let fe = 0;
              return $.set(i, fe), fe += i.length, U("IHDR", j, $, fe), fe += c + j.length, U("IDATA", V, $, fe), fe += c + V.length, U("IEND", new Uint8Array(0), $, fe), m($, "image/png", G);
            }
            return function(Y, G, J) {
              const ne = Y.kind === void 0 ? r.ImageKind.GRAYSCALE_1BPP : Y.kind;
              return de(Y, ne, G, J);
            };
          }();
          class u {
            constructor() {
              this.fontSizeScale = 1, this.fontWeight = k.fontWeight, this.fontSize = 0, this.textMatrix = r.IDENTITY_MATRIX, this.fontMatrix = r.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = r.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = k.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
            }
            clone() {
              return Object.create(this);
            }
            setCurrentPoint(c, A) {
              this.x = c, this.y = A;
            }
          }
          let d = 0, h = 0, f = 0;
          e.SVGGraphics = E = class {
            constructor(i, c, A = !1) {
              (0, t.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new t.DOMSVGFactory(), this.current = new u(), this.transformMatrix = r.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = i, this.objs = c, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!A, this._operatorIdMapping = [];
              for (const O in r.OPS)
                this._operatorIdMapping[r.OPS[O]] = O;
            }
            getObject(i, c = null) {
              return typeof i == "string" ? i.startsWith("g_") ? this.commonObjs.get(i) : this.objs.get(i) : c;
            }
            save() {
              this.transformStack.push(this.transformMatrix);
              const i = this.current;
              this.extraStack.push(i), this.current = i.clone();
            }
            restore() {
              this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
            }
            group(i) {
              this.save(), this.executeOpTree(i), this.restore();
            }
            loadDependencies(i) {
              const c = i.fnArray, A = i.argsArray;
              for (let O = 0, U = c.length; O < U; O++)
                if (c[O] === r.OPS.dependency)
                  for (const P of A[O]) {
                    const L = P.startsWith("g_") ? this.commonObjs : this.objs, Q = new Promise((de) => {
                      L.get(P, de);
                    });
                    this.current.dependencies.push(Q);
                  }
              return Promise.all(this.current.dependencies);
            }
            transform(i, c, A, O, U, P) {
              const L = [i, c, A, O, U, P];
              this.transformMatrix = r.Util.transform(this.transformMatrix, L), this.tgrp = null;
            }
            getSVG(i, c) {
              this.viewport = c;
              const A = this._initialize(c);
              return this.loadDependencies(i).then(() => (this.transformMatrix = r.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(i)), A));
            }
            convertOpList(i) {
              const c = this._operatorIdMapping, A = i.argsArray, O = i.fnArray, U = [];
              for (let P = 0, L = O.length; P < L; P++) {
                const Q = O[P];
                U.push({
                  fnId: Q,
                  fn: c[Q],
                  args: A[P]
                });
              }
              return l(U);
            }
            executeOpTree(i) {
              for (const c of i) {
                const A = c.fn, O = c.fnId, U = c.args;
                switch (O | 0) {
                  case r.OPS.beginText:
                    this.beginText();
                    break;
                  case r.OPS.dependency:
                    break;
                  case r.OPS.setLeading:
                    this.setLeading(U);
                    break;
                  case r.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(U[0], U[1]);
                    break;
                  case r.OPS.setFont:
                    this.setFont(U);
                    break;
                  case r.OPS.showText:
                    this.showText(U[0]);
                    break;
                  case r.OPS.showSpacedText:
                    this.showText(U[0]);
                    break;
                  case r.OPS.endText:
                    this.endText();
                    break;
                  case r.OPS.moveText:
                    this.moveText(U[0], U[1]);
                    break;
                  case r.OPS.setCharSpacing:
                    this.setCharSpacing(U[0]);
                    break;
                  case r.OPS.setWordSpacing:
                    this.setWordSpacing(U[0]);
                    break;
                  case r.OPS.setHScale:
                    this.setHScale(U[0]);
                    break;
                  case r.OPS.setTextMatrix:
                    this.setTextMatrix(U[0], U[1], U[2], U[3], U[4], U[5]);
                    break;
                  case r.OPS.setTextRise:
                    this.setTextRise(U[0]);
                    break;
                  case r.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(U[0]);
                    break;
                  case r.OPS.setLineWidth:
                    this.setLineWidth(U[0]);
                    break;
                  case r.OPS.setLineJoin:
                    this.setLineJoin(U[0]);
                    break;
                  case r.OPS.setLineCap:
                    this.setLineCap(U[0]);
                    break;
                  case r.OPS.setMiterLimit:
                    this.setMiterLimit(U[0]);
                    break;
                  case r.OPS.setFillRGBColor:
                    this.setFillRGBColor(U[0], U[1], U[2]);
                    break;
                  case r.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(U[0], U[1], U[2]);
                    break;
                  case r.OPS.setStrokeColorN:
                    this.setStrokeColorN(U);
                    break;
                  case r.OPS.setFillColorN:
                    this.setFillColorN(U);
                    break;
                  case r.OPS.shadingFill:
                    this.shadingFill(U[0]);
                    break;
                  case r.OPS.setDash:
                    this.setDash(U[0], U[1]);
                    break;
                  case r.OPS.setRenderingIntent:
                    this.setRenderingIntent(U[0]);
                    break;
                  case r.OPS.setFlatness:
                    this.setFlatness(U[0]);
                    break;
                  case r.OPS.setGState:
                    this.setGState(U[0]);
                    break;
                  case r.OPS.fill:
                    this.fill();
                    break;
                  case r.OPS.eoFill:
                    this.eoFill();
                    break;
                  case r.OPS.stroke:
                    this.stroke();
                    break;
                  case r.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case r.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case r.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case r.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case r.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case r.OPS.paintImageXObject:
                    this.paintImageXObject(U[0]);
                    break;
                  case r.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(U[0]);
                    break;
                  case r.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(U[0]);
                    break;
                  case r.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(U[0], U[1]);
                    break;
                  case r.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case r.OPS.closePath:
                    this.closePath();
                    break;
                  case r.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case r.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case r.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case r.OPS.nextLine:
                    this.nextLine();
                    break;
                  case r.OPS.transform:
                    this.transform(U[0], U[1], U[2], U[3], U[4], U[5]);
                    break;
                  case r.OPS.constructPath:
                    this.constructPath(U[0], U[1]);
                    break;
                  case r.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(c.items);
                    break;
                  default:
                    (0, r.warn)(`Unimplemented operator ${A}`);
                    break;
                }
              }
            }
            setWordSpacing(i) {
              this.current.wordSpacing = i;
            }
            setCharSpacing(i) {
              this.current.charSpacing = i;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            setTextMatrix(i, c, A, O, U, P) {
              const L = this.current;
              L.textMatrix = L.lineMatrix = [i, c, A, O, U, P], L.textMatrixScale = Math.hypot(i, c), L.x = L.lineX = 0, L.y = L.lineY = 0, L.xcoords = [], L.ycoords = [], L.tspan = this.svgFactory.createElement("svg:tspan"), L.tspan.setAttributeNS(null, "font-family", L.fontFamily), L.tspan.setAttributeNS(null, "font-size", `${o(L.fontSize)}px`), L.tspan.setAttributeNS(null, "y", o(-L.y)), L.txtElement = this.svgFactory.createElement("svg:text"), L.txtElement.append(L.tspan);
            }
            beginText() {
              const i = this.current;
              i.x = i.lineX = 0, i.y = i.lineY = 0, i.textMatrix = r.IDENTITY_MATRIX, i.lineMatrix = r.IDENTITY_MATRIX, i.textMatrixScale = 1, i.tspan = this.svgFactory.createElement("svg:tspan"), i.txtElement = this.svgFactory.createElement("svg:text"), i.txtgrp = this.svgFactory.createElement("svg:g"), i.xcoords = [], i.ycoords = [];
            }
            moveText(i, c) {
              const A = this.current;
              A.x = A.lineX += i, A.y = A.lineY += c, A.xcoords = [], A.ycoords = [], A.tspan = this.svgFactory.createElement("svg:tspan"), A.tspan.setAttributeNS(null, "font-family", A.fontFamily), A.tspan.setAttributeNS(null, "font-size", `${o(A.fontSize)}px`), A.tspan.setAttributeNS(null, "y", o(-A.y));
            }
            showText(i) {
              const c = this.current, A = c.font, O = c.fontSize;
              if (O === 0)
                return;
              const U = c.fontSizeScale, P = c.charSpacing, L = c.wordSpacing, Q = c.fontDirection, de = c.textHScale * Q, oe = A.vertical, Y = oe ? 1 : -1, G = A.defaultVMetrics, J = O * c.fontMatrix[0];
              let ne = 0;
              for (const we of i) {
                if (we === null) {
                  ne += Q * L;
                  continue;
                } else if (typeof we == "number") {
                  ne += Y * we * O / 1e3;
                  continue;
                }
                const B = (we.isSpace ? L : 0) + P, b = we.fontChar;
                let g, T, N = we.width;
                if (oe) {
                  let V;
                  const z = we.vmetric || G;
                  V = we.vmetric ? z[1] : N * 0.5, V = -V * J;
                  const $ = z[2] * J;
                  N = z ? -z[0] : N, g = V / U, T = (ne + $) / U;
                } else
                  g = ne / U, T = 0;
                (we.isInFont || A.missingFile) && (c.xcoords.push(c.x + g), oe && c.ycoords.push(-c.y + T), c.tspan.textContent += b);
                let j;
                oe ? j = N * J - B * Q : j = N * J + B * Q, ne += j;
              }
              c.tspan.setAttributeNS(null, "x", c.xcoords.map(o).join(" ")), oe ? c.tspan.setAttributeNS(null, "y", c.ycoords.map(o).join(" ")) : c.tspan.setAttributeNS(null, "y", o(-c.y)), oe ? c.y -= ne : c.x += ne * de, c.tspan.setAttributeNS(null, "font-family", c.fontFamily), c.tspan.setAttributeNS(null, "font-size", `${o(c.fontSize)}px`), c.fontStyle !== k.fontStyle && c.tspan.setAttributeNS(null, "font-style", c.fontStyle), c.fontWeight !== k.fontWeight && c.tspan.setAttributeNS(null, "font-weight", c.fontWeight);
              const ae = c.textRenderingMode & r.TextRenderingMode.FILL_STROKE_MASK;
              if (ae === r.TextRenderingMode.FILL || ae === r.TextRenderingMode.FILL_STROKE ? (c.fillColor !== k.fillColor && c.tspan.setAttributeNS(null, "fill", c.fillColor), c.fillAlpha < 1 && c.tspan.setAttributeNS(null, "fill-opacity", c.fillAlpha)) : c.textRenderingMode === r.TextRenderingMode.ADD_TO_PATH ? c.tspan.setAttributeNS(null, "fill", "transparent") : c.tspan.setAttributeNS(null, "fill", "none"), ae === r.TextRenderingMode.STROKE || ae === r.TextRenderingMode.FILL_STROKE) {
                const we = 1 / (c.textMatrixScale || 1);
                this._setStrokeAttributes(c.tspan, we);
              }
              let _e = c.textMatrix;
              c.textRise !== 0 && (_e = _e.slice(), _e[5] += c.textRise), c.txtElement.setAttributeNS(null, "transform", `${s(_e)} scale(${o(de)}, -1)`), c.txtElement.setAttributeNS(F, "xml:space", "preserve"), c.txtElement.append(c.tspan), c.txtgrp.append(c.txtElement), this._ensureTransformGroup().append(c.txtElement);
            }
            setLeadingMoveText(i, c) {
              this.setLeading(-c), this.moveText(i, c);
            }
            addFontStyle(i) {
              if (!i.data)
                throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
              this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
              const c = m(i.data, i.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += `@font-face { font-family: "${i.loadedName}"; src: url(${c}); }
`;
            }
            setFont(i) {
              const c = this.current, A = this.commonObjs.get(i[0]);
              let O = i[1];
              c.font = A, this.embedFonts && !A.missingFile && !this.embeddedFonts[A.loadedName] && (this.addFontStyle(A), this.embeddedFonts[A.loadedName] = A), c.fontMatrix = A.fontMatrix || r.FONT_IDENTITY_MATRIX;
              let U = "normal";
              A.black ? U = "900" : A.bold && (U = "bold");
              const P = A.italic ? "italic" : "normal";
              O < 0 ? (O = -O, c.fontDirection = -1) : c.fontDirection = 1, c.fontSize = O, c.fontFamily = A.loadedName, c.fontWeight = U, c.fontStyle = P, c.tspan = this.svgFactory.createElement("svg:tspan"), c.tspan.setAttributeNS(null, "y", o(-c.y)), c.xcoords = [], c.ycoords = [];
            }
            endText() {
              var c;
              const i = this.current;
              i.textRenderingMode & r.TextRenderingMode.ADD_TO_PATH_FLAG && ((c = i.txtElement) == null ? void 0 : c.hasChildNodes()) && (i.element = i.txtElement, this.clip("nonzero"), this.endPath());
            }
            setLineWidth(i) {
              i > 0 && (this.current.lineWidth = i);
            }
            setLineCap(i) {
              this.current.lineCap = y[i];
            }
            setLineJoin(i) {
              this.current.lineJoin = x[i];
            }
            setMiterLimit(i) {
              this.current.miterLimit = i;
            }
            setStrokeAlpha(i) {
              this.current.strokeAlpha = i;
            }
            setStrokeRGBColor(i, c, A) {
              this.current.strokeColor = r.Util.makeHexColor(i, c, A);
            }
            setFillAlpha(i) {
              this.current.fillAlpha = i;
            }
            setFillRGBColor(i, c, A) {
              this.current.fillColor = r.Util.makeHexColor(i, c, A), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
            }
            setStrokeColorN(i) {
              this.current.strokeColor = this._makeColorN_Pattern(i);
            }
            setFillColorN(i) {
              this.current.fillColor = this._makeColorN_Pattern(i);
            }
            shadingFill(i) {
              const c = this.viewport.width, A = this.viewport.height, O = r.Util.inverseTransform(this.transformMatrix), U = r.Util.applyTransform([0, 0], O), P = r.Util.applyTransform([0, A], O), L = r.Util.applyTransform([c, 0], O), Q = r.Util.applyTransform([c, A], O), de = Math.min(U[0], P[0], L[0], Q[0]), oe = Math.min(U[1], P[1], L[1], Q[1]), Y = Math.max(U[0], P[0], L[0], Q[0]), G = Math.max(U[1], P[1], L[1], Q[1]), J = this.svgFactory.createElement("svg:rect");
              J.setAttributeNS(null, "x", de), J.setAttributeNS(null, "y", oe), J.setAttributeNS(null, "width", Y - de), J.setAttributeNS(null, "height", G - oe), J.setAttributeNS(null, "fill", this._makeShadingPattern(i)), this.current.fillAlpha < 1 && J.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(J);
            }
            _makeColorN_Pattern(i) {
              return i[0] === "TilingPattern" ? this._makeTilingPattern(i) : this._makeShadingPattern(i);
            }
            _makeTilingPattern(i) {
              const c = i[1], A = i[2], O = i[3] || r.IDENTITY_MATRIX, [U, P, L, Q] = i[4], de = i[5], oe = i[6], Y = i[7], G = `shading${f++}`, [J, ne, ae, _e] = r.Util.normalizeRect([...r.Util.applyTransform([U, P], O), ...r.Util.applyTransform([L, Q], O)]), [we, B] = r.Util.singularValueDecompose2dScale(O), b = de * we, g = oe * B, T = this.svgFactory.createElement("svg:pattern");
              T.setAttributeNS(null, "id", G), T.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), T.setAttributeNS(null, "width", b), T.setAttributeNS(null, "height", g), T.setAttributeNS(null, "x", `${J}`), T.setAttributeNS(null, "y", `${ne}`);
              const N = this.svg, j = this.transformMatrix, V = this.current.fillColor, z = this.current.strokeColor, $ = this.svgFactory.create(ae - J, _e - ne);
              if (this.svg = $, this.transformMatrix = O, Y === 2) {
                const fe = r.Util.makeHexColor(...c);
                this.current.fillColor = fe, this.current.strokeColor = fe;
              }
              return this.executeOpTree(this.convertOpList(A)), this.svg = N, this.transformMatrix = j, this.current.fillColor = V, this.current.strokeColor = z, T.append($.childNodes[0]), this.defs.append(T), `url(#${G})`;
            }
            _makeShadingPattern(i) {
              switch (typeof i == "string" && (i = this.objs.get(i)), i[0]) {
                case "RadialAxial":
                  const c = `shading${f++}`, A = i[3];
                  let O;
                  switch (i[1]) {
                    case "axial":
                      const U = i[4], P = i[5];
                      O = this.svgFactory.createElement("svg:linearGradient"), O.setAttributeNS(null, "id", c), O.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), O.setAttributeNS(null, "x1", U[0]), O.setAttributeNS(null, "y1", U[1]), O.setAttributeNS(null, "x2", P[0]), O.setAttributeNS(null, "y2", P[1]);
                      break;
                    case "radial":
                      const L = i[4], Q = i[5], de = i[6], oe = i[7];
                      O = this.svgFactory.createElement("svg:radialGradient"), O.setAttributeNS(null, "id", c), O.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), O.setAttributeNS(null, "cx", Q[0]), O.setAttributeNS(null, "cy", Q[1]), O.setAttributeNS(null, "r", oe), O.setAttributeNS(null, "fx", L[0]), O.setAttributeNS(null, "fy", L[1]), O.setAttributeNS(null, "fr", de);
                      break;
                    default:
                      throw new Error(`Unknown RadialAxial type: ${i[1]}`);
                  }
                  for (const U of A) {
                    const P = this.svgFactory.createElement("svg:stop");
                    P.setAttributeNS(null, "offset", U[0]), P.setAttributeNS(null, "stop-color", U[1]), O.append(P);
                  }
                  return this.defs.append(O), `url(#${c})`;
                case "Mesh":
                  return (0, r.warn)("Unimplemented pattern Mesh"), null;
                case "Dummy":
                  return "hotpink";
                default:
                  throw new Error(`Unknown IR type: ${i[0]}`);
              }
            }
            setDash(i, c) {
              this.current.dashArray = i, this.current.dashPhase = c;
            }
            constructPath(i, c) {
              const A = this.current;
              let O = A.x, U = A.y, P = [], L = 0;
              for (const Q of i)
                switch (Q | 0) {
                  case r.OPS.rectangle:
                    O = c[L++], U = c[L++];
                    const de = c[L++], oe = c[L++], Y = O + de, G = U + oe;
                    P.push("M", o(O), o(U), "L", o(Y), o(U), "L", o(Y), o(G), "L", o(O), o(G), "Z");
                    break;
                  case r.OPS.moveTo:
                    O = c[L++], U = c[L++], P.push("M", o(O), o(U));
                    break;
                  case r.OPS.lineTo:
                    O = c[L++], U = c[L++], P.push("L", o(O), o(U));
                    break;
                  case r.OPS.curveTo:
                    O = c[L + 4], U = c[L + 5], P.push("C", o(c[L]), o(c[L + 1]), o(c[L + 2]), o(c[L + 3]), o(O), o(U)), L += 6;
                    break;
                  case r.OPS.curveTo2:
                    P.push("C", o(O), o(U), o(c[L]), o(c[L + 1]), o(c[L + 2]), o(c[L + 3])), O = c[L + 2], U = c[L + 3], L += 4;
                    break;
                  case r.OPS.curveTo3:
                    O = c[L + 2], U = c[L + 3], P.push("C", o(c[L]), o(c[L + 1]), o(O), o(U), o(O), o(U)), L += 4;
                    break;
                  case r.OPS.closePath:
                    P.push("Z");
                    break;
                }
              P = P.join(" "), A.path && i.length > 0 && i[0] !== r.OPS.rectangle && i[0] !== r.OPS.moveTo ? P = A.path.getAttributeNS(null, "d") + P : (A.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(A.path)), A.path.setAttributeNS(null, "d", P), A.path.setAttributeNS(null, "fill", "none"), A.element = A.path, A.setCurrentPoint(O, U);
            }
            endPath() {
              const i = this.current;
              if (i.path = null, !this.pendingClip)
                return;
              if (!i.element) {
                this.pendingClip = null;
                return;
              }
              const c = `clippath${d++}`, A = this.svgFactory.createElement("svg:clipPath");
              A.setAttributeNS(null, "id", c), A.setAttributeNS(null, "transform", s(this.transformMatrix));
              const O = i.element.cloneNode(!0);
              if (this.pendingClip === "evenodd" ? O.setAttributeNS(null, "clip-rule", "evenodd") : O.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, A.append(O), this.defs.append(A), i.activeClipUrl) {
                i.clipGroup = null;
                for (const U of this.extraStack)
                  U.clipGroup = null;
                A.setAttributeNS(null, "clip-path", i.activeClipUrl);
              }
              i.activeClipUrl = `url(#${c})`, this.tgrp = null;
            }
            clip(i) {
              this.pendingClip = i;
            }
            closePath() {
              const i = this.current;
              if (i.path) {
                const c = `${i.path.getAttributeNS(null, "d")}Z`;
                i.path.setAttributeNS(null, "d", c);
              }
            }
            setLeading(i) {
              this.current.leading = -i;
            }
            setTextRise(i) {
              this.current.textRise = i;
            }
            setTextRenderingMode(i) {
              this.current.textRenderingMode = i;
            }
            setHScale(i) {
              this.current.textHScale = i / 100;
            }
            setRenderingIntent(i) {
            }
            setFlatness(i) {
            }
            setGState(i) {
              for (const [c, A] of i)
                switch (c) {
                  case "LW":
                    this.setLineWidth(A);
                    break;
                  case "LC":
                    this.setLineCap(A);
                    break;
                  case "LJ":
                    this.setLineJoin(A);
                    break;
                  case "ML":
                    this.setMiterLimit(A);
                    break;
                  case "D":
                    this.setDash(A[0], A[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(A);
                    break;
                  case "FL":
                    this.setFlatness(A);
                    break;
                  case "Font":
                    this.setFont(A);
                    break;
                  case "CA":
                    this.setStrokeAlpha(A);
                    break;
                  case "ca":
                    this.setFillAlpha(A);
                    break;
                  default:
                    (0, r.warn)(`Unimplemented graphic state operator ${c}`);
                    break;
                }
            }
            fill() {
              const i = this.current;
              i.element && (i.element.setAttributeNS(null, "fill", i.fillColor), i.element.setAttributeNS(null, "fill-opacity", i.fillAlpha), this.endPath());
            }
            stroke() {
              const i = this.current;
              i.element && (this._setStrokeAttributes(i.element), i.element.setAttributeNS(null, "fill", "none"), this.endPath());
            }
            _setStrokeAttributes(i, c = 1) {
              const A = this.current;
              let O = A.dashArray;
              c !== 1 && O.length > 0 && (O = O.map(function(U) {
                return c * U;
              })), i.setAttributeNS(null, "stroke", A.strokeColor), i.setAttributeNS(null, "stroke-opacity", A.strokeAlpha), i.setAttributeNS(null, "stroke-miterlimit", o(A.miterLimit)), i.setAttributeNS(null, "stroke-linecap", A.lineCap), i.setAttributeNS(null, "stroke-linejoin", A.lineJoin), i.setAttributeNS(null, "stroke-width", o(c * A.lineWidth) + "px"), i.setAttributeNS(null, "stroke-dasharray", O.map(o).join(" ")), i.setAttributeNS(null, "stroke-dashoffset", o(c * A.dashPhase) + "px");
            }
            eoFill() {
              var i;
              (i = this.current.element) == null || i.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
            }
            fillStroke() {
              this.stroke(), this.fill();
            }
            eoFillStroke() {
              var i;
              (i = this.current.element) == null || i.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            closeFillStroke() {
              this.closePath(), this.fillStroke();
            }
            closeEOFillStroke() {
              this.closePath(), this.eoFillStroke();
            }
            paintSolidColorImageMask() {
              const i = this.svgFactory.createElement("svg:rect");
              i.setAttributeNS(null, "x", "0"), i.setAttributeNS(null, "y", "0"), i.setAttributeNS(null, "width", "1px"), i.setAttributeNS(null, "height", "1px"), i.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(i);
            }
            paintImageXObject(i) {
              const c = this.getObject(i);
              if (!c) {
                (0, r.warn)(`Dependent image with object ID ${i} is not ready yet`);
                return;
              }
              this.paintInlineImageXObject(c);
            }
            paintInlineImageXObject(i, c) {
              const A = i.width, O = i.height, U = _(i, this.forceDataSchema, !!c), P = this.svgFactory.createElement("svg:rect");
              P.setAttributeNS(null, "x", "0"), P.setAttributeNS(null, "y", "0"), P.setAttributeNS(null, "width", o(A)), P.setAttributeNS(null, "height", o(O)), this.current.element = P, this.clip("nonzero");
              const L = this.svgFactory.createElement("svg:image");
              L.setAttributeNS(v, "xlink:href", U), L.setAttributeNS(null, "x", "0"), L.setAttributeNS(null, "y", o(-O)), L.setAttributeNS(null, "width", o(A) + "px"), L.setAttributeNS(null, "height", o(O) + "px"), L.setAttributeNS(null, "transform", `scale(${o(1 / A)} ${o(-1 / O)})`), c ? c.append(L) : this._ensureTransformGroup().append(L);
            }
            paintImageMaskXObject(i) {
              const c = this.getObject(i.data, i);
              if (c.bitmap) {
                (0, r.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                return;
              }
              const A = this.current, O = c.width, U = c.height, P = A.fillColor;
              A.maskId = `mask${h++}`;
              const L = this.svgFactory.createElement("svg:mask");
              L.setAttributeNS(null, "id", A.maskId);
              const Q = this.svgFactory.createElement("svg:rect");
              Q.setAttributeNS(null, "x", "0"), Q.setAttributeNS(null, "y", "0"), Q.setAttributeNS(null, "width", o(O)), Q.setAttributeNS(null, "height", o(U)), Q.setAttributeNS(null, "fill", P), Q.setAttributeNS(null, "mask", `url(#${A.maskId})`), this.defs.append(L), this._ensureTransformGroup().append(Q), this.paintInlineImageXObject(c, L);
            }
            paintFormXObjectBegin(i, c) {
              if (Array.isArray(i) && i.length === 6 && this.transform(i[0], i[1], i[2], i[3], i[4], i[5]), c) {
                const A = c[2] - c[0], O = c[3] - c[1], U = this.svgFactory.createElement("svg:rect");
                U.setAttributeNS(null, "x", c[0]), U.setAttributeNS(null, "y", c[1]), U.setAttributeNS(null, "width", o(A)), U.setAttributeNS(null, "height", o(O)), this.current.element = U, this.clip("nonzero"), this.endPath();
              }
            }
            paintFormXObjectEnd() {
            }
            _initialize(i) {
              const c = this.svgFactory.create(i.width, i.height), A = this.svgFactory.createElement("svg:defs");
              c.append(A), this.defs = A;
              const O = this.svgFactory.createElement("svg:g");
              return O.setAttributeNS(null, "transform", s(i.transform)), c.append(O), this.svg = O, c;
            }
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const i = this.svgFactory.createElement("svg:g");
                i.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(i), this.current.clipGroup = i;
              }
              return this.current.clipGroup;
            }
            _ensureTransformGroup() {
              return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", s(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
            }
          };
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.PDFNodeStream = void 0;
        var t = n(1), r = n(32);
        const S = require$$5, E = require$$5, k = require$$5, F = require$$5, v = /^file:\/\/\/[a-zA-Z]:\//;
        function y(h) {
          const f = F.parse(h);
          return f.protocol === "file:" || f.host ? f : /^[a-z]:[/\\]/i.test(h) ? F.parse(`file:///${h}`) : (f.host || (f.protocol = "file:"), f);
        }
        class x {
          constructor(f) {
            this.source = f, this.url = y(f.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && f.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            var f, i;
            return (i = (f = this._fullRequestReader) == null ? void 0 : f._loaded) != null ? i : 0;
          }
          getFullReader() {
            return (0, t.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new s(this) : new l(this), this._fullRequestReader;
          }
          getRangeReader(f, i) {
            if (i <= this._progressiveDataLength)
              return null;
            const c = this.isFsUrl ? new d(this, f, i) : new o(this, f, i);
            return this._rangeRequestReaders.push(c), c;
          }
          cancelAllRequests(f) {
            var i;
            (i = this._fullRequestReader) == null || i.cancel(f);
            for (const c of this._rangeRequestReaders.slice(0))
              c.cancel(f);
          }
        }
        e.PDFNodeStream = x;
        class m {
          constructor(f) {
            this._url = f.url, this._done = !1, this._storedError = null, this.onProgress = null;
            const i = f.source;
            this._contentLength = i.length, this._loaded = 0, this._filename = null, this._disableRange = i.disableRange || !1, this._rangeChunkSize = i.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !i.disableStream, this._isRangeSupported = !i.disableRange, this._readableStream = null, this._readCapability = (0, t.createPromiseCapability)(), this._headersCapability = (0, t.createPromiseCapability)();
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var c;
            if (await this._readCapability.promise, this._done)
              return {
                value: void 0,
                done: !0
              };
            if (this._storedError)
              throw this._storedError;
            const f = this._readableStream.read();
            return f === null ? (this._readCapability = (0, t.createPromiseCapability)(), this.read()) : (this._loaded += f.length, (c = this.onProgress) == null || c.call(this, {
              loaded: this._loaded,
              total: this._contentLength
            }), {
              value: new Uint8Array(f).buffer,
              done: !1
            });
          }
          cancel(f) {
            if (!this._readableStream) {
              this._error(f);
              return;
            }
            this._readableStream.destroy(f);
          }
          _error(f) {
            this._storedError = f, this._readCapability.resolve();
          }
          _setReadableStream(f) {
            this._readableStream = f, f.on("readable", () => {
              this._readCapability.resolve();
            }), f.on("end", () => {
              f.destroy(), this._done = !0, this._readCapability.resolve();
            }), f.on("error", (i) => {
              this._error(i);
            }), !this._isStreamingSupported && this._isRangeSupported && this._error(new t.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
          }
        }
        class _ {
          constructor(f) {
            this._url = f.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = (0, t.createPromiseCapability)();
            const i = f.source;
            this._isStreamingSupported = !i.disableStream;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var c;
            if (await this._readCapability.promise, this._done)
              return {
                value: void 0,
                done: !0
              };
            if (this._storedError)
              throw this._storedError;
            const f = this._readableStream.read();
            return f === null ? (this._readCapability = (0, t.createPromiseCapability)(), this.read()) : (this._loaded += f.length, (c = this.onProgress) == null || c.call(this, {
              loaded: this._loaded
            }), {
              value: new Uint8Array(f).buffer,
              done: !1
            });
          }
          cancel(f) {
            if (!this._readableStream) {
              this._error(f);
              return;
            }
            this._readableStream.destroy(f);
          }
          _error(f) {
            this._storedError = f, this._readCapability.resolve();
          }
          _setReadableStream(f) {
            this._readableStream = f, f.on("readable", () => {
              this._readCapability.resolve();
            }), f.on("end", () => {
              f.destroy(), this._done = !0, this._readCapability.resolve();
            }), f.on("error", (i) => {
              this._error(i);
            }), this._storedError && this._readableStream.destroy(this._storedError);
          }
        }
        function u(h, f) {
          return {
            protocol: h.protocol,
            auth: h.auth,
            host: h.hostname,
            port: h.port,
            path: h.path,
            method: "GET",
            headers: f
          };
        }
        class l extends m {
          constructor(f) {
            super(f);
            const i = (c) => {
              if (c.statusCode === 404) {
                const P = new t.MissingPDFException(`Missing PDF "${this._url}".`);
                this._storedError = P, this._headersCapability.reject(P);
                return;
              }
              this._headersCapability.resolve(), this._setReadableStream(c);
              const A = (P) => this._readableStream.headers[P.toLowerCase()], {
                allowRangeRequests: O,
                suggestedLength: U
              } = (0, r.validateRangeRequestCapabilities)({
                getResponseHeader: A,
                isHttp: f.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              this._isRangeSupported = O, this._contentLength = U || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(A);
            };
            this._request = null, this._url.protocol === "http:" ? this._request = E.request(u(this._url, f.httpHeaders), i) : this._request = k.request(u(this._url, f.httpHeaders), i), this._request.on("error", (c) => {
              this._storedError = c, this._headersCapability.reject(c);
            }), this._request.end();
          }
        }
        class o extends _ {
          constructor(f, i, c) {
            super(f), this._httpHeaders = {};
            for (const O in f.httpHeaders) {
              const U = f.httpHeaders[O];
              typeof U > "u" || (this._httpHeaders[O] = U);
            }
            this._httpHeaders.Range = `bytes=${i}-${c - 1}`;
            const A = (O) => {
              if (O.statusCode === 404) {
                const U = new t.MissingPDFException(`Missing PDF "${this._url}".`);
                this._storedError = U;
                return;
              }
              this._setReadableStream(O);
            };
            this._request = null, this._url.protocol === "http:" ? this._request = E.request(u(this._url, this._httpHeaders), A) : this._request = k.request(u(this._url, this._httpHeaders), A), this._request.on("error", (O) => {
              this._storedError = O;
            }), this._request.end();
          }
        }
        class s extends m {
          constructor(f) {
            super(f);
            let i = decodeURIComponent(this._url.path);
            v.test(this._url.href) && (i = i.replace(/^\//, "")), S.lstat(i, (c, A) => {
              if (c) {
                c.code === "ENOENT" && (c = new t.MissingPDFException(`Missing PDF "${i}".`)), this._storedError = c, this._headersCapability.reject(c);
                return;
              }
              this._contentLength = A.size, this._setReadableStream(S.createReadStream(i)), this._headersCapability.resolve();
            });
          }
        }
        class d extends _ {
          constructor(f, i, c) {
            super(f);
            let A = decodeURIComponent(this._url.path);
            v.test(this._url.href) && (A = A.replace(/^\//, "")), this._setReadableStream(S.createReadStream(A, {
              start: i,
              end: c - 1
            }));
          }
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.createResponseStatusError = F, e.extractFilenameFromHeader = k, e.validateRangeRequestCapabilities = E, e.validateResponseStatus = v;
        var t = n(1), r = n(33), S = n(6);
        function E({
          getResponseHeader: y,
          isHttp: x,
          rangeChunkSize: m,
          disableRange: _
        }) {
          const u = {
            allowRangeRequests: !1,
            suggestedLength: void 0
          }, l = parseInt(y("Content-Length"), 10);
          return !Number.isInteger(l) || (u.suggestedLength = l, l <= 2 * m) || _ || !x || y("Accept-Ranges") !== "bytes" || (y("Content-Encoding") || "identity") !== "identity" || (u.allowRangeRequests = !0), u;
        }
        function k(y) {
          const x = y("Content-Disposition");
          if (x) {
            let m = (0, r.getFilenameFromContentDispositionHeader)(x);
            if (m.includes("%"))
              try {
                m = decodeURIComponent(m);
              } catch {
              }
            if ((0, S.isPdfFile)(m))
              return m;
          }
          return null;
        }
        function F(y, x) {
          return y === 404 || y === 0 && x.startsWith("file:") ? new t.MissingPDFException('Missing PDF "' + x + '".') : new t.UnexpectedResponseException(`Unexpected server response (${y}) while retrieving PDF "${x}".`, y);
        }
        function v(y) {
          return y === 200 || y === 206;
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.getFilenameFromContentDispositionHeader = r;
        var t = n(1);
        function r(S) {
          let E = !0, k = F("filename\\*", "i").exec(S);
          if (k) {
            k = k[1];
            let l = m(k);
            return l = unescape(l), l = _(l), l = u(l), y(l);
          }
          if (k = x(S), k) {
            const l = u(k);
            return y(l);
          }
          if (k = F("filename", "i").exec(S), k) {
            k = k[1];
            let l = m(k);
            return l = u(l), y(l);
          }
          function F(l, o) {
            return new RegExp("(?:^|;)\\s*" + l + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', o);
          }
          function v(l, o) {
            if (l) {
              if (!/^[\x00-\xFF]+$/.test(o))
                return o;
              try {
                const s = new TextDecoder(l, {
                  fatal: !0
                }), d = (0, t.stringToBytes)(o);
                o = s.decode(d), E = !1;
              } catch {
              }
            }
            return o;
          }
          function y(l) {
            return E && /[\x80-\xff]/.test(l) && (l = v("utf-8", l), E && (l = v("iso-8859-1", l))), l;
          }
          function x(l) {
            const o = [];
            let s;
            const d = F("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            for (; (s = d.exec(l)) !== null; ) {
              let [, f, i, c] = s;
              if (f = parseInt(f, 10), f in o) {
                if (f === 0)
                  break;
                continue;
              }
              o[f] = [i, c];
            }
            const h = [];
            for (let f = 0; f < o.length && f in o; ++f) {
              let [i, c] = o[f];
              c = m(c), i && (c = unescape(c), f === 0 && (c = _(c))), h.push(c);
            }
            return h.join("");
          }
          function m(l) {
            if (l.startsWith('"')) {
              const o = l.slice(1).split('\\"');
              for (let s = 0; s < o.length; ++s) {
                const d = o[s].indexOf('"');
                d !== -1 && (o[s] = o[s].slice(0, d), o.length = s + 1), o[s] = o[s].replace(/\\(.)/g, "$1");
              }
              l = o.join('"');
            }
            return l;
          }
          function _(l) {
            const o = l.indexOf("'");
            if (o === -1)
              return l;
            const s = l.slice(0, o), h = l.slice(o + 1).replace(/^[^']*'/, "");
            return v(s, h);
          }
          function u(l) {
            return !l.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(l) ? l : l.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(o, s, d, h) {
              if (d === "q" || d === "Q")
                return h = h.replace(/_/g, " "), h = h.replace(/=([0-9a-fA-F]{2})/g, function(f, i) {
                  return String.fromCharCode(parseInt(i, 16));
                }), v(s, h);
              try {
                h = atob(h);
              } catch {
              }
              return v(s, h);
            });
          }
          return "";
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.PDFNetworkStream = void 0;
        var t = n(1), r = n(32);
        const S = 200, E = 206;
        function k(m) {
          const _ = m.response;
          return typeof _ != "string" ? _ : (0, t.stringToBytes)(_).buffer;
        }
        class F {
          constructor(_, u = {}) {
            this.url = _, this.isHttp = /^https?:/i.test(_), this.httpHeaders = this.isHttp && u.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = u.withCredentials || !1, this.getXhr = u.getXhr || function() {
              return new XMLHttpRequest();
            }, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
          }
          requestRange(_, u, l) {
            const o = {
              begin: _,
              end: u
            };
            for (const s in l)
              o[s] = l[s];
            return this.request(o);
          }
          requestFull(_) {
            return this.request(_);
          }
          request(_) {
            const u = this.getXhr(), l = this.currXhrId++, o = this.pendingRequests[l] = {
              xhr: u
            };
            u.open("GET", this.url), u.withCredentials = this.withCredentials;
            for (const s in this.httpHeaders) {
              const d = this.httpHeaders[s];
              typeof d > "u" || u.setRequestHeader(s, d);
            }
            return this.isHttp && "begin" in _ && "end" in _ ? (u.setRequestHeader("Range", `bytes=${_.begin}-${_.end - 1}`), o.expectedStatus = E) : o.expectedStatus = S, u.responseType = "arraybuffer", _.onError && (u.onerror = function(s) {
              _.onError(u.status);
            }), u.onreadystatechange = this.onStateChange.bind(this, l), u.onprogress = this.onProgress.bind(this, l), o.onHeadersReceived = _.onHeadersReceived, o.onDone = _.onDone, o.onError = _.onError, o.onProgress = _.onProgress, u.send(null), l;
          }
          onProgress(_, u) {
            var o;
            const l = this.pendingRequests[_];
            !l || (o = l.onProgress) == null || o.call(l, u);
          }
          onStateChange(_, u) {
            var f, i, c;
            const l = this.pendingRequests[_];
            if (!l)
              return;
            const o = l.xhr;
            if (o.readyState >= 2 && l.onHeadersReceived && (l.onHeadersReceived(), delete l.onHeadersReceived), o.readyState !== 4 || !(_ in this.pendingRequests))
              return;
            if (delete this.pendingRequests[_], o.status === 0 && this.isHttp) {
              (f = l.onError) == null || f.call(l, o.status);
              return;
            }
            const s = o.status || S;
            if (!(s === S && l.expectedStatus === E) && s !== l.expectedStatus) {
              (i = l.onError) == null || i.call(l, o.status);
              return;
            }
            const h = k(o);
            if (s === E) {
              const A = o.getResponseHeader("Content-Range"), O = /bytes (\d+)-(\d+)\/(\d+)/.exec(A);
              l.onDone({
                begin: parseInt(O[1], 10),
                chunk: h
              });
            } else
              h ? l.onDone({
                begin: 0,
                chunk: h
              }) : (c = l.onError) == null || c.call(l, o.status);
          }
          getRequestXhr(_) {
            return this.pendingRequests[_].xhr;
          }
          isPendingRequest(_) {
            return _ in this.pendingRequests;
          }
          abortRequest(_) {
            const u = this.pendingRequests[_].xhr;
            delete this.pendingRequests[_], u.abort();
          }
        }
        class v {
          constructor(_) {
            this._source = _, this._manager = new F(_.url, {
              httpHeaders: _.httpHeaders,
              withCredentials: _.withCredentials
            }), this._rangeChunkSize = _.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
          }
          _onRangeRequestReaderClosed(_) {
            const u = this._rangeRequestReaders.indexOf(_);
            u >= 0 && this._rangeRequestReaders.splice(u, 1);
          }
          getFullReader() {
            return (0, t.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new y(this._manager, this._source), this._fullRequestReader;
          }
          getRangeReader(_, u) {
            const l = new x(this._manager, _, u);
            return l.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(l), l;
          }
          cancelAllRequests(_) {
            var u;
            (u = this._fullRequestReader) == null || u.cancel(_);
            for (const l of this._rangeRequestReaders.slice(0))
              l.cancel(_);
          }
        }
        e.PDFNetworkStream = v;
        class y {
          constructor(_, u) {
            this._manager = _;
            const l = {
              onHeadersReceived: this._onHeadersReceived.bind(this),
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = u.url, this._fullRequestId = _.requestFull(l), this._headersReceivedCapability = (0, t.createPromiseCapability)(), this._disableRange = u.disableRange || !1, this._contentLength = u.length, this._rangeChunkSize = u.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
          }
          _onHeadersReceived() {
            const _ = this._fullRequestId, u = this._manager.getRequestXhr(_), l = (d) => u.getResponseHeader(d), {
              allowRangeRequests: o,
              suggestedLength: s
            } = (0, r.validateRangeRequestCapabilities)({
              getResponseHeader: l,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            o && (this._isRangeSupported = !0), this._contentLength = s || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(l), this._isRangeSupported && this._manager.abortRequest(_), this._headersReceivedCapability.resolve();
          }
          _onDone(_) {
            if (_ && (this._requests.length > 0 ? this._requests.shift().resolve({
              value: _.chunk,
              done: !1
            }) : this._cachedChunks.push(_.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
              for (const u of this._requests)
                u.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0;
            }
          }
          _onError(_) {
            this._storedError = (0, r.createResponseStatusError)(_, this._url), this._headersReceivedCapability.reject(this._storedError);
            for (const u of this._requests)
              u.reject(this._storedError);
            this._requests.length = 0, this._cachedChunks.length = 0;
          }
          _onProgress(_) {
            var u;
            (u = this.onProgress) == null || u.call(this, {
              loaded: _.loaded,
              total: _.lengthComputable ? _.total : this._contentLength
            });
          }
          get filename() {
            return this._filename;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          get contentLength() {
            return this._contentLength;
          }
          get headersReady() {
            return this._headersReceivedCapability.promise;
          }
          async read() {
            if (this._storedError)
              throw this._storedError;
            if (this._cachedChunks.length > 0)
              return {
                value: this._cachedChunks.shift(),
                done: !1
              };
            if (this._done)
              return {
                value: void 0,
                done: !0
              };
            const _ = (0, t.createPromiseCapability)();
            return this._requests.push(_), _.promise;
          }
          cancel(_) {
            this._done = !0, this._headersReceivedCapability.reject(_);
            for (const u of this._requests)
              u.resolve({
                value: void 0,
                done: !0
              });
            this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
          }
        }
        class x {
          constructor(_, u, l) {
            this._manager = _;
            const o = {
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this)
            };
            this._url = _.url, this._requestId = _.requestRange(u, l, o), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
          }
          _close() {
            var _;
            (_ = this.onClosed) == null || _.call(this, this);
          }
          _onDone(_) {
            const u = _.chunk;
            this._requests.length > 0 ? this._requests.shift().resolve({
              value: u,
              done: !1
            }) : this._queuedChunk = u, this._done = !0;
            for (const l of this._requests)
              l.resolve({
                value: void 0,
                done: !0
              });
            this._requests.length = 0, this._close();
          }
          _onError(_) {
            this._storedError = (0, r.createResponseStatusError)(_, this._url);
            for (const u of this._requests)
              u.reject(this._storedError);
            this._requests.length = 0, this._queuedChunk = null;
          }
          _onProgress(_) {
            var u;
            this.isStreamingSupported || (u = this.onProgress) == null || u.call(this, {
              loaded: _.loaded
            });
          }
          get isStreamingSupported() {
            return !1;
          }
          async read() {
            if (this._storedError)
              throw this._storedError;
            if (this._queuedChunk !== null) {
              const u = this._queuedChunk;
              return this._queuedChunk = null, {
                value: u,
                done: !1
              };
            }
            if (this._done)
              return {
                value: void 0,
                done: !0
              };
            const _ = (0, t.createPromiseCapability)();
            return this._requests.push(_), _.promise;
          }
          cancel(_) {
            this._done = !0;
            for (const u of this._requests)
              u.resolve({
                value: void 0,
                done: !0
              });
            this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
          }
        }
      },
      (a, e, n) => {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.PDFFetchStream = void 0;
        var t = n(1), r = n(32);
        function S(y, x, m) {
          return {
            method: "GET",
            headers: y,
            signal: m.signal,
            mode: "cors",
            credentials: x ? "include" : "same-origin",
            redirect: "follow"
          };
        }
        function E(y) {
          const x = new Headers();
          for (const m in y) {
            const _ = y[m];
            typeof _ > "u" || x.append(m, _);
          }
          return x;
        }
        class k {
          constructor(x) {
            this.source = x, this.isHttp = /^https?:/i.test(x.url), this.httpHeaders = this.isHttp && x.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
          }
          get _progressiveDataLength() {
            var x, m;
            return (m = (x = this._fullRequestReader) == null ? void 0 : x._loaded) != null ? m : 0;
          }
          getFullReader() {
            return (0, t.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new F(this), this._fullRequestReader;
          }
          getRangeReader(x, m) {
            if (m <= this._progressiveDataLength)
              return null;
            const _ = new v(this, x, m);
            return this._rangeRequestReaders.push(_), _;
          }
          cancelAllRequests(x) {
            var m;
            (m = this._fullRequestReader) == null || m.cancel(x);
            for (const _ of this._rangeRequestReaders.slice(0))
              _.cancel(x);
          }
        }
        e.PDFFetchStream = k;
        class F {
          constructor(x) {
            this._stream = x, this._reader = null, this._loaded = 0, this._filename = null;
            const m = x.source;
            this._withCredentials = m.withCredentials || !1, this._contentLength = m.length, this._headersCapability = (0, t.createPromiseCapability)(), this._disableRange = m.disableRange || !1, this._rangeChunkSize = m.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !m.disableStream, this._isRangeSupported = !m.disableRange, this._headers = E(this._stream.httpHeaders);
            const _ = m.url;
            fetch(_, S(this._headers, this._withCredentials, this._abortController)).then((u) => {
              if (!(0, r.validateResponseStatus)(u.status))
                throw (0, r.createResponseStatusError)(u.status, _);
              this._reader = u.body.getReader(), this._headersCapability.resolve();
              const l = (d) => u.headers.get(d), {
                allowRangeRequests: o,
                suggestedLength: s
              } = (0, r.validateRangeRequestCapabilities)({
                getResponseHeader: l,
                isHttp: this._stream.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              this._isRangeSupported = o, this._contentLength = s || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(l), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new t.AbortException("Streaming is disabled."));
            }).catch(this._headersCapability.reject), this.onProgress = null;
          }
          get headersReady() {
            return this._headersCapability.promise;
          }
          get filename() {
            return this._filename;
          }
          get contentLength() {
            return this._contentLength;
          }
          get isRangeSupported() {
            return this._isRangeSupported;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var u;
            await this._headersCapability.promise;
            const {
              value: x,
              done: m
            } = await this._reader.read();
            return m ? {
              value: x,
              done: m
            } : (this._loaded += x.byteLength, (u = this.onProgress) == null || u.call(this, {
              loaded: this._loaded,
              total: this._contentLength
            }), {
              value: new Uint8Array(x).buffer,
              done: !1
            });
          }
          cancel(x) {
            var m;
            (m = this._reader) == null || m.cancel(x), this._abortController.abort();
          }
        }
        class v {
          constructor(x, m, _) {
            this._stream = x, this._reader = null, this._loaded = 0;
            const u = x.source;
            this._withCredentials = u.withCredentials || !1, this._readCapability = (0, t.createPromiseCapability)(), this._isStreamingSupported = !u.disableStream, this._abortController = new AbortController(), this._headers = E(this._stream.httpHeaders), this._headers.append("Range", `bytes=${m}-${_ - 1}`);
            const l = u.url;
            fetch(l, S(this._headers, this._withCredentials, this._abortController)).then((o) => {
              if (!(0, r.validateResponseStatus)(o.status))
                throw (0, r.createResponseStatusError)(o.status, l);
              this._readCapability.resolve(), this._reader = o.body.getReader();
            }).catch(this._readCapability.reject), this.onProgress = null;
          }
          get isStreamingSupported() {
            return this._isStreamingSupported;
          }
          async read() {
            var u;
            await this._readCapability.promise;
            const {
              value: x,
              done: m
            } = await this._reader.read();
            return m ? {
              value: x,
              done: m
            } : (this._loaded += x.byteLength, (u = this.onProgress) == null || u.call(this, {
              loaded: this._loaded
            }), {
              value: new Uint8Array(x).buffer,
              done: !1
            });
          }
          cancel(x) {
            var m;
            (m = this._reader) == null || m.cancel(x), this._abortController.abort();
          }
        }
      }
    ], __webpack_module_cache__ = {};
    function __w_pdfjs_require__(a) {
      var e = __webpack_module_cache__[a];
      if (e !== void 0)
        return e.exports;
      var n = __webpack_module_cache__[a] = {
        exports: {}
      };
      return __webpack_modules__[a](n, n.exports, __w_pdfjs_require__), n.exports;
    }
    var __webpack_exports__ = {};
    return (() => {
      var a = __webpack_exports__;
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), Object.defineProperty(a, "AnnotationEditorLayer", {
        enumerable: !0,
        get: function() {
          return r.AnnotationEditorLayer;
        }
      }), Object.defineProperty(a, "AnnotationEditorParamsType", {
        enumerable: !0,
        get: function() {
          return e.AnnotationEditorParamsType;
        }
      }), Object.defineProperty(a, "AnnotationEditorType", {
        enumerable: !0,
        get: function() {
          return e.AnnotationEditorType;
        }
      }), Object.defineProperty(a, "AnnotationEditorUIManager", {
        enumerable: !0,
        get: function() {
          return S.AnnotationEditorUIManager;
        }
      }), Object.defineProperty(a, "AnnotationLayer", {
        enumerable: !0,
        get: function() {
          return E.AnnotationLayer;
        }
      }), Object.defineProperty(a, "AnnotationMode", {
        enumerable: !0,
        get: function() {
          return e.AnnotationMode;
        }
      }), Object.defineProperty(a, "CMapCompressionType", {
        enumerable: !0,
        get: function() {
          return e.CMapCompressionType;
        }
      }), Object.defineProperty(a, "GlobalWorkerOptions", {
        enumerable: !0,
        get: function() {
          return k.GlobalWorkerOptions;
        }
      }), Object.defineProperty(a, "InvalidPDFException", {
        enumerable: !0,
        get: function() {
          return e.InvalidPDFException;
        }
      }), Object.defineProperty(a, "MissingPDFException", {
        enumerable: !0,
        get: function() {
          return e.MissingPDFException;
        }
      }), Object.defineProperty(a, "OPS", {
        enumerable: !0,
        get: function() {
          return e.OPS;
        }
      }), Object.defineProperty(a, "PDFDataRangeTransport", {
        enumerable: !0,
        get: function() {
          return n.PDFDataRangeTransport;
        }
      }), Object.defineProperty(a, "PDFDateString", {
        enumerable: !0,
        get: function() {
          return t.PDFDateString;
        }
      }), Object.defineProperty(a, "PDFWorker", {
        enumerable: !0,
        get: function() {
          return n.PDFWorker;
        }
      }), Object.defineProperty(a, "PasswordResponses", {
        enumerable: !0,
        get: function() {
          return e.PasswordResponses;
        }
      }), Object.defineProperty(a, "PermissionFlag", {
        enumerable: !0,
        get: function() {
          return e.PermissionFlag;
        }
      }), Object.defineProperty(a, "PixelsPerInch", {
        enumerable: !0,
        get: function() {
          return t.PixelsPerInch;
        }
      }), Object.defineProperty(a, "RenderingCancelledException", {
        enumerable: !0,
        get: function() {
          return t.RenderingCancelledException;
        }
      }), Object.defineProperty(a, "SVGGraphics", {
        enumerable: !0,
        get: function() {
          return y.SVGGraphics;
        }
      }), Object.defineProperty(a, "UNSUPPORTED_FEATURES", {
        enumerable: !0,
        get: function() {
          return e.UNSUPPORTED_FEATURES;
        }
      }), Object.defineProperty(a, "UnexpectedResponseException", {
        enumerable: !0,
        get: function() {
          return e.UnexpectedResponseException;
        }
      }), Object.defineProperty(a, "Util", {
        enumerable: !0,
        get: function() {
          return e.Util;
        }
      }), Object.defineProperty(a, "VerbosityLevel", {
        enumerable: !0,
        get: function() {
          return e.VerbosityLevel;
        }
      }), Object.defineProperty(a, "XfaLayer", {
        enumerable: !0,
        get: function() {
          return x.XfaLayer;
        }
      }), Object.defineProperty(a, "build", {
        enumerable: !0,
        get: function() {
          return n.build;
        }
      }), Object.defineProperty(a, "createPromiseCapability", {
        enumerable: !0,
        get: function() {
          return e.createPromiseCapability;
        }
      }), Object.defineProperty(a, "createValidAbsoluteUrl", {
        enumerable: !0,
        get: function() {
          return e.createValidAbsoluteUrl;
        }
      }), Object.defineProperty(a, "getDocument", {
        enumerable: !0,
        get: function() {
          return n.getDocument;
        }
      }), Object.defineProperty(a, "getFilenameFromUrl", {
        enumerable: !0,
        get: function() {
          return t.getFilenameFromUrl;
        }
      }), Object.defineProperty(a, "getPdfFilenameFromUrl", {
        enumerable: !0,
        get: function() {
          return t.getPdfFilenameFromUrl;
        }
      }), Object.defineProperty(a, "getXfaPageViewport", {
        enumerable: !0,
        get: function() {
          return t.getXfaPageViewport;
        }
      }), Object.defineProperty(a, "isPdfFile", {
        enumerable: !0,
        get: function() {
          return t.isPdfFile;
        }
      }), Object.defineProperty(a, "loadScript", {
        enumerable: !0,
        get: function() {
          return t.loadScript;
        }
      }), Object.defineProperty(a, "renderTextLayer", {
        enumerable: !0,
        get: function() {
          return v.renderTextLayer;
        }
      }), Object.defineProperty(a, "shadow", {
        enumerable: !0,
        get: function() {
          return e.shadow;
        }
      }), Object.defineProperty(a, "version", {
        enumerable: !0,
        get: function() {
          return n.version;
        }
      });
      var e = __w_pdfjs_require__(1), n = __w_pdfjs_require__(2), t = __w_pdfjs_require__(6), r = __w_pdfjs_require__(21), S = __w_pdfjs_require__(5), E = __w_pdfjs_require__(26), k = __w_pdfjs_require__(14), F = __w_pdfjs_require__(12), v = __w_pdfjs_require__(29), y = __w_pdfjs_require__(30), x = __w_pdfjs_require__(28);
      if (F.isNodeJS) {
        const {
          PDFNodeStream: m
        } = __w_pdfjs_require__(31);
        (0, n.setPDFNetworkStreamFactory)((_) => new m(_));
      } else {
        const {
          PDFNetworkStream: m
        } = __w_pdfjs_require__(34), {
          PDFFetchStream: _
        } = __w_pdfjs_require__(35);
        (0, n.setPDFNetworkStreamFactory)((u) => (0, t.isValidFetchUrl)(u.url) ? new _(u) : new m(u));
      }
    })(), __webpack_exports__;
  })());
})(pdf);
var lib = {}, uaParser_min = { exports: {} };
(function(a, e) {
  (function(n, t) {
    var r = "1.0.32", S = "", E = "?", k = "function", F = "undefined", v = "object", y = "string", x = "major", m = "model", _ = "name", u = "type", l = "vendor", o = "version", s = "architecture", d = "console", h = "mobile", f = "tablet", i = "smarttv", c = "wearable", A = "embedded", O = 350, U = "Amazon", P = "Apple", L = "ASUS", Q = "BlackBerry", de = "Browser", oe = "Chrome", Y = "Edge", G = "Firefox", J = "Google", ne = "Huawei", ae = "LG", _e = "Microsoft", we = "Motorola", B = "Opera", b = "Samsung", g = "Sharp", T = "Sony", N = "Xiaomi", j = "Zebra", V = "Facebook", z = function(le, q) {
      var be = {};
      for (var te in le)
        q[te] && q[te].length % 2 === 0 ? be[te] = q[te].concat(le[te]) : be[te] = le[te];
      return be;
    }, $ = function(le) {
      for (var q = {}, be = 0; be < le.length; be++)
        q[le[be].toUpperCase()] = le[be];
      return q;
    }, fe = function(le, q) {
      return typeof le === y ? K(q).indexOf(K(le)) !== -1 : !1;
    }, K = function(le) {
      return le.toLowerCase();
    }, pe = function(le) {
      return typeof le === y ? le.replace(/[^\d\.]/g, S).split(".")[0] : t;
    }, ie = function(le, q) {
      if (typeof le === y)
        return le = le.replace(/^\s\s*/, S).replace(/\s\s*$/, S), typeof q === F ? le : le.substring(0, O);
    }, ge = function(le, q) {
      for (var be = 0, te, se, H, re, Ae, Te; be < q.length && !Ae; ) {
        var De = q[be], Oe = q[be + 1];
        for (te = se = 0; te < De.length && !Ae; )
          if (Ae = De[te++].exec(le), Ae)
            for (H = 0; H < Oe.length; H++)
              Te = Ae[++se], re = Oe[H], typeof re === v && re.length > 0 ? re.length === 2 ? typeof re[1] == k ? this[re[0]] = re[1].call(this, Te) : this[re[0]] = re[1] : re.length === 3 ? typeof re[1] === k && !(re[1].exec && re[1].test) ? this[re[0]] = Te ? re[1].call(this, Te, re[2]) : t : this[re[0]] = Te ? Te.replace(re[1], re[2]) : t : re.length === 4 && (this[re[0]] = Te ? re[3].call(this, Te.replace(re[1], re[2])) : t) : this[re] = Te || t;
        be += 2;
      }
    }, p = function(le, q) {
      for (var be in q)
        if (typeof q[be] === v && q[be].length > 0) {
          for (var te = 0; te < q[be].length; te++)
            if (fe(q[be][te], le))
              return be === E ? t : be;
        } else if (fe(q[be], le))
          return be === E ? t : be;
      return le;
    }, w = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, D = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, R = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [o, [_, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [o, [_, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [_, o], [/opios[\/ ]+([\w\.]+)/i], [o, [_, B + " Mini"]], [/\bopr\/([\w\.]+)/i], [o, [_, B]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [_, o], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [o, [_, "UC" + de]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [o, [_, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [o, [_, "WeChat"]], [/konqueror\/([\w\.]+)/i], [o, [_, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [o, [_, "IE"]], [/yabrowser\/([\w\.]+)/i], [o, [_, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[_, /(.+)/, "$1 Secure " + de], o], [/\bfocus\/([\w\.]+)/i], [o, [_, G + " Focus"]], [/\bopt\/([\w\.]+)/i], [o, [_, B + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [o, [_, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [o, [_, "Dolphin"]], [/coast\/([\w\.]+)/i], [o, [_, B + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [o, [_, "MIUI " + de]], [/fxios\/([-\w\.]+)/i], [o, [_, G]], [/\bqihu|(qi?ho?o?|360)browser/i], [[_, "360 " + de]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[_, /(.+)/, "$1 " + de], o], [/(comodo_dragon)\/([\w\.]+)/i], [[_, /_/g, " "], o], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [_, o], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [_], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[_, V], o], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [_, o], [/\bgsa\/([\w\.]+) .*safari\//i], [o, [_, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [o, [_, oe + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[_, oe + " WebView"], o], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [o, [_, "Android " + de]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [_, o], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [o, [_, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [o, _], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [_, [o, p, w]], [/(webkit|khtml)\/([\w\.]+)/i], [_, o], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[_, "Netscape"], o], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [o, [_, G + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [_, o]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[s, "amd64"]], [/(ia32(?=;))/i], [[s, K]], [/((?:i[346]|x)86)[;\)]/i], [[s, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[s, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[s, "armhf"]], [/windows (ce|mobile); ppc;/i], [[s, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[s, /ower/, S, K]], [/(sun4\w)[;\)]/i], [[s, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[s, K]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [m, [l, b], [u, f]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [m, [l, b], [u, h]], [/\((ip(?:hone|od)[\w ]*);/i], [m, [l, P], [u, h]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [m, [l, P], [u, f]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [m, [l, ne], [u, f]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [m, [l, ne], [u, h]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[m, /_/g, " "], [l, N], [u, h]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[m, /_/g, " "], [l, N], [u, f]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [m, [l, "OPPO"], [u, h]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [m, [l, "Vivo"], [u, h]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [m, [l, "Realme"], [u, h]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [m, [l, we], [u, h]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [m, [l, we], [u, f]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [m, [l, ae], [u, f]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [m, [l, ae], [u, h]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [m, [l, "Lenovo"], [u, f]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[m, /_/g, " "], [l, "Nokia"], [u, h]], [/(pixel c)\b/i], [m, [l, J], [u, f]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [m, [l, J], [u, h]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [m, [l, T], [u, h]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[m, "Xperia Tablet"], [l, T], [u, f]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [m, [l, "OnePlus"], [u, h]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [m, [l, U], [u, f]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[m, /(.+)/g, "Fire Phone $1"], [l, U], [u, h]], [/(playbook);[-\w\),; ]+(rim)/i], [m, l, [u, f]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [m, [l, Q], [u, h]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [m, [l, L], [u, f]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [m, [l, L], [u, h]], [/(nexus 9)/i], [m, [l, "HTC"], [u, f]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i], [l, [m, /_/g, " "], [u, h]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [m, [l, "Acer"], [u, f]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [m, [l, "Meizu"], [u, h]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [m, [l, g], [u, h]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [l, m, [u, h]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [l, m, [u, f]], [/(surface duo)/i], [m, [l, _e], [u, f]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [m, [l, "Fairphone"], [u, h]], [/(u304aa)/i], [m, [l, "AT&T"], [u, h]], [/\bsie-(\w*)/i], [m, [l, "Siemens"], [u, h]], [/\b(rct\w+) b/i], [m, [l, "RCA"], [u, f]], [/\b(venue[\d ]{2,7}) b/i], [m, [l, "Dell"], [u, f]], [/\b(q(?:mv|ta)\w+) b/i], [m, [l, "Verizon"], [u, f]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [m, [l, "Barnes & Noble"], [u, f]], [/\b(tm\d{3}\w+) b/i], [m, [l, "NuVision"], [u, f]], [/\b(k88) b/i], [m, [l, "ZTE"], [u, f]], [/\b(nx\d{3}j) b/i], [m, [l, "ZTE"], [u, h]], [/\b(gen\d{3}) b.+49h/i], [m, [l, "Swiss"], [u, h]], [/\b(zur\d{3}) b/i], [m, [l, "Swiss"], [u, f]], [/\b((zeki)?tb.*\b) b/i], [m, [l, "Zeki"], [u, f]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[l, "Dragon Touch"], m, [u, f]], [/\b(ns-?\w{0,9}) b/i], [m, [l, "Insignia"], [u, f]], [/\b((nxa|next)-?\w{0,9}) b/i], [m, [l, "NextBook"], [u, f]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[l, "Voice"], m, [u, h]], [/\b(lvtel\-)?(v1[12]) b/i], [[l, "LvTel"], m, [u, h]], [/\b(ph-1) /i], [m, [l, "Essential"], [u, h]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [m, [l, "Envizen"], [u, f]], [/\b(trio[-\w\. ]+) b/i], [m, [l, "MachSpeed"], [u, f]], [/\btu_(1491) b/i], [m, [l, "Rotor"], [u, f]], [/(shield[\w ]+) b/i], [m, [l, "Nvidia"], [u, f]], [/(sprint) (\w+)/i], [l, m, [u, h]], [/(kin\.[onetw]{3})/i], [[m, /\./g, " "], [l, _e], [u, h]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [m, [l, j], [u, f]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [m, [l, j], [u, h]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [l, m, [u, d]], [/droid.+; (shield) bui/i], [m, [l, "Nvidia"], [u, d]], [/(playstation [345portablevi]+)/i], [m, [l, T], [u, d]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [m, [l, _e], [u, d]], [/smart-tv.+(samsung)/i], [l, [u, i]], [/hbbtv.+maple;(\d+)/i], [[m, /^/, "SmartTV"], [l, b], [u, i]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[l, ae], [u, i]], [/(apple) ?tv/i], [l, [m, P + " TV"], [u, i]], [/crkey/i], [[m, oe + "cast"], [l, J], [u, i]], [/droid.+aft(\w)( bui|\))/i], [m, [l, U], [u, i]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [m, [l, g], [u, i]], [/(bravia[\w ]+)( bui|\))/i], [m, [l, T], [u, i]], [/(mitv-\w{5}) bui/i], [m, [l, N], [u, i]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[l, ie], [m, ie], [u, i]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[u, i]], [/((pebble))app/i], [l, m, [u, c]], [/droid.+; (glass) \d/i], [m, [l, J], [u, c]], [/droid.+; (wt63?0{2,3})\)/i], [m, [l, j], [u, c]], [/(quest( 2)?)/i], [m, [l, V], [u, c]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [l, [u, A]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [m, [u, h]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [m, [u, f]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[u, f]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[u, h]], [/(android[-\w\. ]{0,9});.+buil/i], [m, [l, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [o, [_, Y + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [o, [_, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [_, o], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [o, _]], os: [[/microsoft (windows) (vista|xp)/i], [_, o], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [_, [o, p, D]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[_, "Windows"], [o, p, D]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[o, /_/g, "."], [_, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[_, "Mac OS"], [o, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [o, _], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [_, o], [/\(bb(10);/i], [o, [_, Q]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [o, [_, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [o, [_, G + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [o, [_, "webOS"]], [/crkey\/([\d\.]+)/i], [o, [_, oe + "cast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[_, "Chromium OS"], o], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [_, o], [/(sunos) ?([\w\.\d]*)/i], [[_, "Solaris"], o], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [_, o]] }, M = function(le, q) {
      if (typeof le === v && (q = le, le = t), !(this instanceof M))
        return new M(le, q).getResult();
      var be = le || (typeof n !== F && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : S), te = q ? z(R, q) : R;
      return this.getBrowser = function() {
        var se = {};
        return se[_] = t, se[o] = t, ge.call(se, be, te.browser), se.major = pe(se.version), se;
      }, this.getCPU = function() {
        var se = {};
        return se[s] = t, ge.call(se, be, te.cpu), se;
      }, this.getDevice = function() {
        var se = {};
        return se[l] = t, se[m] = t, se[u] = t, ge.call(se, be, te.device), se;
      }, this.getEngine = function() {
        var se = {};
        return se[_] = t, se[o] = t, ge.call(se, be, te.engine), se;
      }, this.getOS = function() {
        var se = {};
        return se[_] = t, se[o] = t, ge.call(se, be, te.os), se;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return be;
      }, this.setUA = function(se) {
        return be = typeof se === y && se.length > O ? ie(se, O) : se, this;
      }, this.setUA(be), this;
    };
    M.VERSION = r, M.BROWSER = $([_, o, x]), M.CPU = $([s]), M.DEVICE = $([m, l, u, d, h, i, f, c, A]), M.ENGINE = M.OS = $([_, o]), a.exports && (e = a.exports = M), e.UAParser = M;
    var X = typeof n !== F && (n.jQuery || n.Zepto);
    if (X && !X.ua) {
      var ce = new M();
      X.ua = ce.getResult(), X.ua.get = function() {
        return ce.getUA();
      }, X.ua.set = function(le) {
        ce.setUA(le);
        var q = ce.getResult();
        for (var be in q)
          X.ua[be] = q[be];
      };
    }
  })(typeof window == "object" ? window : commonjsGlobal);
})(uaParser_min, uaParser_min.exports);
Object.defineProperty(lib, "__esModule", {
  value: !0
});
function _interopDefault(a) {
  return a && typeof a == "object" && "default" in a ? a.default : a;
}
var React = React$1, React__default = _interopDefault(React), UAParser = uaParser_min.exports, ClientUAInstance = new UAParser(), browser = ClientUAInstance.getBrowser(), cpu = ClientUAInstance.getCPU(), device = ClientUAInstance.getDevice(), engine = ClientUAInstance.getEngine(), os = ClientUAInstance.getOS(), ua = ClientUAInstance.getUA(), setUa = function a(e) {
  return ClientUAInstance.setUA(e);
}, parseUserAgent = function a(e) {
  if (!e) {
    console.error("No userAgent string was provided");
    return;
  }
  var n = new UAParser(e);
  return {
    UA: n,
    browser: n.getBrowser(),
    cpu: n.getCPU(),
    device: n.getDevice(),
    engine: n.getEngine(),
    os: n.getOS(),
    ua: n.getUA(),
    setUserAgent: function(r) {
      return n.setUA(r);
    }
  };
}, UAHelper = /* @__PURE__ */ Object.freeze({
  ClientUAInstance,
  browser,
  cpu,
  device,
  engine,
  os,
  ua,
  setUa,
  parseUserAgent
});
function ownKeys(a, e) {
  var n = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(a);
    e && (t = t.filter(function(r) {
      return Object.getOwnPropertyDescriptor(a, r).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function _objectSpread2(a) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
      _defineProperty(a, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
      Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return a;
}
function _typeof(a) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(e) {
    return typeof e;
  } : _typeof = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, _typeof(a);
}
function _classCallCheck(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(a, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
  }
}
function _createClass(a, e, n) {
  return e && _defineProperties(a.prototype, e), n && _defineProperties(a, n), a;
}
function _defineProperty(a, e, n) {
  return e in a ? Object.defineProperty(a, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = n, a;
}
function _extends() {
  return _extends = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (a[t] = n[t]);
    }
    return a;
  }, _extends.apply(this, arguments);
}
function _inherits(a, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: a,
      writable: !0,
      configurable: !0
    }
  }), e && _setPrototypeOf(a, e);
}
function _getPrototypeOf(a) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, _getPrototypeOf(a);
}
function _setPrototypeOf(a, e) {
  return _setPrototypeOf = Object.setPrototypeOf || function(t, r) {
    return t.__proto__ = r, t;
  }, _setPrototypeOf(a, e);
}
function _objectWithoutPropertiesLoose(a, e) {
  if (a == null)
    return {};
  var n = {}, t = Object.keys(a), r, S;
  for (S = 0; S < t.length; S++)
    r = t[S], !(e.indexOf(r) >= 0) && (n[r] = a[r]);
  return n;
}
function _objectWithoutProperties(a, e) {
  if (a == null)
    return {};
  var n = _objectWithoutPropertiesLoose(a, e), t, r;
  if (Object.getOwnPropertySymbols) {
    var S = Object.getOwnPropertySymbols(a);
    for (r = 0; r < S.length; r++)
      t = S[r], !(e.indexOf(t) >= 0) && (!Object.prototype.propertyIsEnumerable.call(a, t) || (n[t] = a[t]));
  }
  return n;
}
function _assertThisInitialized(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function _possibleConstructorReturn(a, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(a);
}
function _slicedToArray(a, e) {
  return _arrayWithHoles(a) || _iterableToArrayLimit(a, e) || _unsupportedIterableToArray(a, e) || _nonIterableRest();
}
function _arrayWithHoles(a) {
  if (Array.isArray(a))
    return a;
}
function _iterableToArrayLimit(a, e) {
  var n = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (n != null) {
    var t = [], r = !0, S = !1, E, k;
    try {
      for (n = n.call(a); !(r = (E = n.next()).done) && (t.push(E.value), !(e && t.length === e)); r = !0)
        ;
    } catch (F) {
      S = !0, k = F;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (S)
          throw k;
      }
    }
    return t;
  }
}
function _unsupportedIterableToArray(a, e) {
  if (!!a) {
    if (typeof a == "string")
      return _arrayLikeToArray(a, e);
    var n = Object.prototype.toString.call(a).slice(8, -1);
    if (n === "Object" && a.constructor && (n = a.constructor.name), n === "Map" || n === "Set")
      return Array.from(a);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(a, e);
  }
}
function _arrayLikeToArray(a, e) {
  (e == null || e > a.length) && (e = a.length);
  for (var n = 0, t = new Array(e); n < e; n++)
    t[n] = a[n];
  return t;
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var DeviceTypes = {
  Mobile: "mobile",
  Tablet: "tablet",
  SmartTv: "smarttv",
  Console: "console",
  Wearable: "wearable",
  Embedded: "embedded",
  Browser: void 0
}, BrowserTypes = {
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: "IE",
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: "Samsung Browser"
}, OsTypes = {
  IOS: "iOS",
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MAC_OS: "Mac OS"
}, InitialDeviceTypes = {
  isMobile: !1,
  isTablet: !1,
  isBrowser: !1,
  isSmartTV: !1,
  isConsole: !1,
  isWearable: !1
}, checkDeviceType = function a(e) {
  switch (e) {
    case DeviceTypes.Mobile:
      return {
        isMobile: !0
      };
    case DeviceTypes.Tablet:
      return {
        isTablet: !0
      };
    case DeviceTypes.SmartTv:
      return {
        isSmartTV: !0
      };
    case DeviceTypes.Console:
      return {
        isConsole: !0
      };
    case DeviceTypes.Wearable:
      return {
        isWearable: !0
      };
    case DeviceTypes.Browser:
      return {
        isBrowser: !0
      };
    case DeviceTypes.Embedded:
      return {
        isEmbedded: !0
      };
    default:
      return InitialDeviceTypes;
  }
}, setUserAgent = function a(e) {
  return setUa(e);
}, setDefaults = function a(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
  return e || n;
}, getNavigatorInstance = function a() {
  return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1;
}, isIOS13Check = function a(e) {
  var n = getNavigatorInstance();
  return n && n.platform && (n.platform.indexOf(e) !== -1 || n.platform === "MacIntel" && n.maxTouchPoints > 1 && !window.MSStream);
}, browserPayload = function a(e, n, t, r, S) {
  return {
    isBrowser: e,
    browserMajorVersion: setDefaults(n.major),
    browserFullVersion: setDefaults(n.version),
    browserName: setDefaults(n.name),
    engineName: setDefaults(t.name),
    engineVersion: setDefaults(t.version),
    osName: setDefaults(r.name),
    osVersion: setDefaults(r.version),
    userAgent: setDefaults(S)
  };
}, mobilePayload = function a(e, n, t, r) {
  return _objectSpread2({}, e, {
    vendor: setDefaults(n.vendor),
    model: setDefaults(n.model),
    os: setDefaults(t.name),
    osVersion: setDefaults(t.version),
    ua: setDefaults(r)
  });
}, smartTvPayload = function a(e, n, t, r) {
  return {
    isSmartTV: e,
    engineName: setDefaults(n.name),
    engineVersion: setDefaults(n.version),
    osName: setDefaults(t.name),
    osVersion: setDefaults(t.version),
    userAgent: setDefaults(r)
  };
}, consolePayload = function a(e, n, t, r) {
  return {
    isConsole: e,
    engineName: setDefaults(n.name),
    engineVersion: setDefaults(n.version),
    osName: setDefaults(t.name),
    osVersion: setDefaults(t.version),
    userAgent: setDefaults(r)
  };
}, wearablePayload = function a(e, n, t, r) {
  return {
    isWearable: e,
    engineName: setDefaults(n.name),
    engineVersion: setDefaults(n.version),
    osName: setDefaults(t.name),
    osVersion: setDefaults(t.version),
    userAgent: setDefaults(r)
  };
}, embeddedPayload = function a(e, n, t, r, S) {
  return {
    isEmbedded: e,
    vendor: setDefaults(n.vendor),
    model: setDefaults(n.model),
    engineName: setDefaults(t.name),
    engineVersion: setDefaults(t.version),
    osName: setDefaults(r.name),
    osVersion: setDefaults(r.version),
    userAgent: setDefaults(S)
  };
};
function deviceDetect(a) {
  var e = a ? parseUserAgent(a) : UAHelper, n = e.device, t = e.browser, r = e.engine, S = e.os, E = e.ua, k = checkDeviceType(n.type), F = k.isBrowser, v = k.isMobile, y = k.isTablet, x = k.isSmartTV, m = k.isConsole, _ = k.isWearable, u = k.isEmbedded;
  if (F)
    return browserPayload(F, t, r, S, E);
  if (x)
    return smartTvPayload(x, r, S, E);
  if (m)
    return consolePayload(m, r, S, E);
  if (v || y)
    return mobilePayload(k, n, S, E);
  if (_)
    return wearablePayload(_, r, S, E);
  if (u)
    return embeddedPayload(u, n, r, S, E);
}
var isMobileType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Mobile;
}, isTabletType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Tablet;
}, isMobileAndTabletType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Mobile || n === DeviceTypes.Tablet;
}, isSmartTVType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.SmartTv;
}, isBrowserType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Browser;
}, isWearableType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Wearable;
}, isConsoleType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Console;
}, isEmbeddedType = function a(e) {
  var n = e.type;
  return n === DeviceTypes.Embedded;
}, getMobileVendor = function a(e) {
  var n = e.vendor;
  return setDefaults(n);
}, getMobileModel = function a(e) {
  var n = e.model;
  return setDefaults(n);
}, getDeviceType = function a(e) {
  var n = e.type;
  return setDefaults(n, "browser");
}, isAndroidType = function a(e) {
  var n = e.name;
  return n === OsTypes.Android;
}, isWindowsType = function a(e) {
  var n = e.name;
  return n === OsTypes.Windows;
}, isMacOsType = function a(e) {
  var n = e.name;
  return n === OsTypes.MAC_OS;
}, isWinPhoneType = function a(e) {
  var n = e.name;
  return n === OsTypes.WindowsPhone;
}, isIOSType = function a(e) {
  var n = e.name;
  return n === OsTypes.IOS;
}, getOsVersion = function a(e) {
  var n = e.version;
  return setDefaults(n);
}, getOsName = function a(e) {
  var n = e.name;
  return setDefaults(n);
}, isChromeType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Chrome;
}, isFirefoxType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Firefox;
}, isChromiumType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Chromium;
}, isEdgeType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Edge;
}, isYandexType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Yandex;
}, isSafariType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Safari || n === BrowserTypes.MobileSafari;
}, isMobileSafariType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.MobileSafari;
}, isOperaType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.Opera;
}, isIEType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.InternetExplorer || n === BrowserTypes.Ie;
}, isMIUIType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.MIUI;
}, isSamsungBrowserType = function a(e) {
  var n = e.name;
  return n === BrowserTypes.SamsungBrowser;
}, getBrowserFullVersion = function a(e) {
  var n = e.version;
  return setDefaults(n);
}, getBrowserVersion = function a(e) {
  var n = e.major;
  return setDefaults(n);
}, getBrowserName = function a(e) {
  var n = e.name;
  return setDefaults(n);
}, getEngineName = function a(e) {
  var n = e.name;
  return setDefaults(n);
}, getEngineVersion = function a(e) {
  var n = e.version;
  return setDefaults(n);
}, isElectronType = function a() {
  var e = getNavigatorInstance(), n = e && e.userAgent && e.userAgent.toLowerCase();
  return typeof n == "string" ? /electron/.test(n) : !1;
}, isEdgeChromiumType = function a(e) {
  return typeof e == "string" && e.indexOf("Edg/") !== -1;
}, getIOS13 = function a() {
  var e = getNavigatorInstance();
  return e && (/iPad|iPhone|iPod/.test(e.platform) || e.platform === "MacIntel" && e.maxTouchPoints > 1) && !window.MSStream;
}, getIPad13 = function a() {
  return isIOS13Check("iPad");
}, getIphone13 = function a() {
  return isIOS13Check("iPhone");
}, getIPod13 = function a() {
  return isIOS13Check("iPod");
}, getUseragent = function a(e) {
  return setDefaults(e);
};
function buildSelectorsObject(a) {
  var e = a || UAHelper, n = e.device, t = e.browser, r = e.os, S = e.engine, E = e.ua;
  return {
    isSmartTV: isSmartTVType(n),
    isConsole: isConsoleType(n),
    isWearable: isWearableType(n),
    isEmbedded: isEmbeddedType(n),
    isMobileSafari: isMobileSafariType(t) || getIPad13(),
    isChromium: isChromiumType(t),
    isMobile: isMobileAndTabletType(n) || getIPad13(),
    isMobileOnly: isMobileType(n),
    isTablet: isTabletType(n) || getIPad13(),
    isBrowser: isBrowserType(n),
    isDesktop: isBrowserType(n),
    isAndroid: isAndroidType(r),
    isWinPhone: isWinPhoneType(r),
    isIOS: isIOSType(r) || getIPad13(),
    isChrome: isChromeType(t),
    isFirefox: isFirefoxType(t),
    isSafari: isSafariType(t),
    isOpera: isOperaType(t),
    isIE: isIEType(t),
    osVersion: getOsVersion(r),
    osName: getOsName(r),
    fullBrowserVersion: getBrowserFullVersion(t),
    browserVersion: getBrowserVersion(t),
    browserName: getBrowserName(t),
    mobileVendor: getMobileVendor(n),
    mobileModel: getMobileModel(n),
    engineName: getEngineName(S),
    engineVersion: getEngineVersion(S),
    getUA: getUseragent(E),
    isEdge: isEdgeType(t) || isEdgeChromiumType(E),
    isYandex: isYandexType(t),
    deviceType: getDeviceType(n),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(E),
    isLegacyEdge: isEdgeType(t) && !isEdgeChromiumType(E),
    isWindows: isWindowsType(r),
    isMacOs: isMacOsType(r),
    isMIUI: isMIUIType(t),
    isSamsungBrowser: isSamsungBrowserType(t)
  };
}
var isSmartTV = isSmartTVType(device), isConsole = isConsoleType(device), isWearable = isWearableType(device), isEmbedded = isEmbeddedType(device), isMobileSafari = isMobileSafariType(browser) || getIPad13(), isChromium = isChromiumType(browser), isMobile = isMobileAndTabletType(device) || getIPad13(), isMobileOnly = isMobileType(device), isTablet = isTabletType(device) || getIPad13(), isBrowser = isBrowserType(device), isDesktop = isBrowserType(device), isAndroid = isAndroidType(os), isWinPhone = isWinPhoneType(os), isIOS = isIOSType(os) || getIPad13(), isChrome = isChromeType(browser), isFirefox = isFirefoxType(browser), isSafari = isSafariType(browser), isOpera = isOperaType(browser), isIE = isIEType(browser), osVersion = getOsVersion(os), osName = getOsName(os), fullBrowserVersion = getBrowserFullVersion(browser), browserVersion = getBrowserVersion(browser), browserName = getBrowserName(browser), mobileVendor = getMobileVendor(device), mobileModel = getMobileModel(device), engineName = getEngineName(engine), engineVersion = getEngineVersion(engine), getUA = getUseragent(ua), isEdge = isEdgeType(browser) || isEdgeChromiumType(ua), isYandex = isYandexType(browser), deviceType = getDeviceType(device), isIOS13 = getIOS13(), isIPad13 = getIPad13(), isIPhone13 = getIphone13(), isIPod13 = getIPod13(), isElectron = isElectronType(), isEdgeChromium = isEdgeChromiumType(ua), isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua), isWindows = isWindowsType(os), isMacOs = isMacOsType(os), isMIUI = isMIUIType(browser), isSamsungBrowser = isSamsungBrowserType(browser), getSelectorsByUserAgent = function a(e) {
  if (!e || typeof e != "string") {
    console.error("No valid user agent string was provided");
    return;
  }
  var n = parseUserAgent(e), t = n.device, r = n.browser, S = n.os, E = n.engine, k = n.ua;
  return buildSelectorsObject({
    device: t,
    browser: r,
    os: S,
    engine: E,
    ua: k
  });
}, AndroidView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isAndroid ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, BrowserView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isBrowser ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, IEView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isIE ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, IOSView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isIOS ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, MobileView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isMobile ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, TabletView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isTablet ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, WinPhoneView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isWinPhone ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, MobileOnlyView = function a(e) {
  var n = e.renderWithFragment, t = e.children;
  e.viewClassName, e.style;
  var r = _objectWithoutProperties(e, ["renderWithFragment", "children", "viewClassName", "style"]);
  return isMobileOnly ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, SmartTVView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isSmartTV ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, ConsoleView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isConsole ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, WearableView = function a(e) {
  var n = e.renderWithFragment, t = e.children, r = _objectWithoutProperties(e, ["renderWithFragment", "children"]);
  return isWearable ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", r, t) : null;
}, CustomView = function a(e) {
  var n = e.renderWithFragment, t = e.children;
  e.viewClassName, e.style;
  var r = e.condition, S = _objectWithoutProperties(e, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
  return r ? n ? React__default.createElement(React.Fragment, null, t) : React__default.createElement("div", S, t) : null;
};
function withOrientationChange(a) {
  return /* @__PURE__ */ function(e) {
    _inherits(n, e);
    function n(t) {
      var r;
      return _classCallCheck(this, n), r = _possibleConstructorReturn(this, _getPrototypeOf(n).call(this, t)), r.isEventListenerAdded = !1, r.handleOrientationChange = r.handleOrientationChange.bind(_assertThisInitialized(r)), r.onOrientationChange = r.onOrientationChange.bind(_assertThisInitialized(r)), r.onPageLoad = r.onPageLoad.bind(_assertThisInitialized(r)), r.state = {
        isLandscape: !1,
        isPortrait: !1
      }, r;
    }
    return _createClass(n, [{
      key: "handleOrientationChange",
      value: function() {
        this.isEventListenerAdded || (this.isEventListenerAdded = !0);
        var r = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: r === 0,
          isLandscape: r === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function() {
        (typeof window > "u" ? "undefined" : _typeof(window)) !== void 0 && isMobile && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("resize", this.onOrientationChange, !1);
      }
    }, {
      key: "render",
      value: function() {
        return React__default.createElement(a, _extends({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]), n;
  }(React__default.Component);
}
function useMobileOrientation() {
  var a = React.useState(function() {
    var S = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: S === 0,
      isLandscape: S === 90,
      orientation: S === 0 ? "portrait" : "landscape"
    };
  }), e = _slicedToArray(a, 2), n = e[0], t = e[1], r = React.useCallback(function() {
    var S = window.innerWidth > window.innerHeight ? 90 : 0, E = {
      isPortrait: S === 0,
      isLandscape: S === 90,
      orientation: S === 0 ? "portrait" : "landscape"
    };
    n.orientation !== E.orientation && t(E);
  }, [n.orientation]);
  return React.useEffect(function() {
    return (typeof window > "u" ? "undefined" : _typeof(window)) !== void 0 && isMobile && (r(), window.addEventListener("load", r, !1), window.addEventListener("resize", r, !1)), function() {
      window.removeEventListener("resize", r, !1), window.removeEventListener("load", r, !1);
    };
  }, [r]), n;
}
function useDeviceData(a) {
  var e = a || window.navigator.userAgent;
  return parseUserAgent(e);
}
function useDeviceSelectors(a) {
  var e = a || window.navigator.userAgent, n = useDeviceData(e), t = buildSelectorsObject(n);
  return [t, n];
}
lib.AndroidView = AndroidView;
lib.BrowserTypes = BrowserTypes;
lib.BrowserView = BrowserView;
lib.ConsoleView = ConsoleView;
lib.CustomView = CustomView;
lib.IEView = IEView;
lib.IOSView = IOSView;
lib.MobileOnlyView = MobileOnlyView;
lib.MobileView = MobileView;
lib.OsTypes = OsTypes;
lib.SmartTVView = SmartTVView;
lib.TabletView = TabletView;
lib.WearableView = WearableView;
lib.WinPhoneView = WinPhoneView;
lib.browserName = browserName;
lib.browserVersion = browserVersion;
lib.deviceDetect = deviceDetect;
lib.deviceType = deviceType;
lib.engineName = engineName;
lib.engineVersion = engineVersion;
lib.fullBrowserVersion = fullBrowserVersion;
lib.getSelectorsByUserAgent = getSelectorsByUserAgent;
lib.getUA = getUA;
lib.isAndroid = isAndroid;
lib.isBrowser = isBrowser;
lib.isChrome = isChrome;
lib.isChromium = isChromium;
lib.isConsole = isConsole;
lib.isDesktop = isDesktop;
lib.isEdge = isEdge;
lib.isEdgeChromium = isEdgeChromium;
lib.isElectron = isElectron;
lib.isEmbedded = isEmbedded;
lib.isFirefox = isFirefox;
lib.isIE = isIE;
lib.isIOS = isIOS;
lib.isIOS13 = isIOS13;
lib.isIPad13 = isIPad13;
lib.isIPhone13 = isIPhone13;
lib.isIPod13 = isIPod13;
lib.isLegacyEdge = isLegacyEdge;
lib.isMIUI = isMIUI;
lib.isMacOs = isMacOs;
var isMobile_1 = lib.isMobile = isMobile;
lib.isMobileOnly = isMobileOnly;
lib.isMobileSafari = isMobileSafari;
lib.isOpera = isOpera;
lib.isSafari = isSafari;
lib.isSamsungBrowser = isSamsungBrowser;
lib.isSmartTV = isSmartTV;
lib.isTablet = isTablet;
lib.isWearable = isWearable;
lib.isWinPhone = isWinPhone;
lib.isWindows = isWindows;
lib.isYandex = isYandex;
lib.mobileModel = mobileModel;
lib.mobileVendor = mobileVendor;
lib.osName = osName;
lib.osVersion = osVersion;
lib.parseUserAgent = parseUserAgent;
lib.setUserAgent = setUserAgent;
lib.useDeviceData = useDeviceData;
lib.useDeviceSelectors = useDeviceSelectors;
lib.useMobileOrientation = useMobileOrientation;
lib.withOrientationChange = withOrientationChange;
const TextLoader = ({
  loadingText: a,
  speed: e = 300
}) => {
  const [n, t] = useState(".");
  return useEffect(() => {
    const r = setInterval(() => {
      n.length < 3 ? t((S) => S + ".") : t(".");
    }, e);
    return () => clearInterval(r);
  }), /* @__PURE__ */ jsxs("p", {
    children: [a, n]
  });
}, PDF_INITIAL_SCALE = isMobile_1 ? 0.6 : 1, PDF_MAX_ZOOM = PDF_INITIAL_SCALE + 1, PDFViewer = ({
  pdfURL: a
}) => {
  const [e, n] = useState(0), [t, r] = useState(1), [S, E] = useState(!1), [k, F] = useState(PDF_INITIAL_SCALE);
  useEffect(() => (document.querySelector("html").style.overflow = "hidden", E(!0), pdf.exports.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.1.81/build/pdf.worker.js", pdf.exports.getDocument(a).promise.then((m) => {
    console.log("Tailwind PDFViewer: PDF loaded"), n(m.numPages), m.getPage(t).then((_) => {
      console.log("Tailwind PDFViewer: PDF page loaded");
      const u = k, l = _.getViewport({
        scale: u
      }), o = document.getElementById("the-canvas"), s = o.getContext("2d");
      o.height = l.height, o.width = l.width;
      const d = {
        canvasContext: s,
        viewport: l
      };
      _.render(d).promise.then(() => {
        console.log("Tailwind PDFViewer: PDF rendered"), E(!1);
      });
    });
  }, (m) => {
    console.error(m), console.error("Error rendering PDF");
  }), () => {
    document.querySelector("html").style.overflow = "auto";
  }), [t, a, k]);
  const v = (x) => {
    t <= 1 && x === "PREVIOUS_PAGE" || x === "NEXT_PAGE" && t >= e || (x === "PREVIOUS_PAGE" && r(t - 1), x === "NEXT_PAGE" && r(t + 1));
  }, y = (x) => {
    if (x == "ZOOM_IN") {
      if (k >= PDF_MAX_ZOOM)
        return;
      F(k + 0.2);
    }
    if (x == "ZOOM_OUT") {
      if (k <= PDF_INITIAL_SCALE)
        return;
      F(k - 0.2);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    id: "pdf-viewer",
    children: [S && k === PDF_INITIAL_SCALE && /* @__PURE__ */ jsx("div", {
      className: "bg-stone-400 m-auto p-3 pb-20 sm:pb-[7.5rem] overflow-auto w-full sm:h-[750px] h-[500px]",
      children: /* @__PURE__ */ jsx("div", {
        className: "font-bold text-white text-xl mt-4 text-center",
        children: /* @__PURE__ */ jsx(TextLoader, {
          loadingText: "Loading PDF"
        })
      })
    }), /* @__PURE__ */ jsx("div", {
      className: `bg-stone-400 m-auto p-3 pb-[14rem] overflow-auto w-full h-screen ${S && k === 0 ? "invisible" : "visible"}`,
      children: /* @__PURE__ */ jsx("canvas", {
        id: "the-canvas",
        className: "m-auto w-fit h-fit shadow-stone-800 shadow-xl"
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "fixed left-0 right-0 bottom-3 bg-stone-700 w-fit m-auto p-2 rounded-lg opacity-[0.9]",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex items-center",
        children: [/* @__PURE__ */ jsx("button", {
          disabled: t === 1,
          className: "p-2 rounded-lg ",
          onClick: () => v("PREVIOUS_PAGE"),
          children: /* @__PURE__ */ jsx("span", {
            className: `text-md ${t === 1 && "text-slate-400"} text-white`,
            children: "Back"
          })
        }), /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx("p", {
            className: "mx-4 text-md bg-white px-3 py-2 rounded-lg border-slate-400 border-2 h-fit",
            children: t
          })
        }), /* @__PURE__ */ jsx("button", {
          disabled: t === e,
          className: "p-2 rounded-lg ",
          onClick: () => v("NEXT_PAGE"),
          children: /* @__PURE__ */ jsx("span", {
            className: `text-md text-white ${t === e && "text-slate-400"}`,
            children: "Next"
          })
        }), /* @__PURE__ */ jsx("button", {
          type: "button",
          className: `text-white text-[2rem] px-3 ${k <= PDF_INITIAL_SCALE ? "text-[silver]" : "text-white"}`,
          onClick: () => y("ZOOM_OUT"),
          children: /* @__PURE__ */ jsx(Icon, {
            icon: "material-symbols:zoom-out"
          })
        }), /* @__PURE__ */ jsx("button", {
          type: "button",
          className: `text-[2rem] px-3 ${k >= PDF_MAX_ZOOM ? "text-[silver]" : "text-white"}`,
          onClick: () => y("ZOOM_IN"),
          children: /* @__PURE__ */ jsx(Icon, {
            icon: "material-symbols:zoom-in"
          })
        })]
      })
    })]
  });
};
export {
  PDFViewer as default
};
