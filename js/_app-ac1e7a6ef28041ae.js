(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], { 2010: function (t, n, r) { "use strict"; r.d(n, { F: function () { return y }, f: function () { return $ } }); var i = r(7294); let o = ["light", "dark"], u = "(prefers-color-scheme: dark)", c = "undefined" == typeof window, a = (0, i.createContext)(void 0), l = { setTheme: t => { }, themes: [] }, y = () => { var t; return null !== (t = (0, i.useContext)(a)) && void 0 !== t ? t : l }, $ = t => (0, i.useContext)(a) ? i.createElement(i.Fragment, null, t.children) : i.createElement(f, t), s = ["light", "dark"], f = ({ forcedTheme: t, disableTransitionOnChange: n = !1, enableSystem: r = !0, enableColorScheme: c = !0, storageKey: l = "theme", themes: m = s, defaultTheme: h = r ? "system" : "light", attribute: v = "data-theme", value: g, children: _, nonce: E }) => { let [w, x] = (0, i.useState)(() => S(l, h)), [k, C] = (0, i.useState)(() => S(l)), L = g ? Object.values(g) : m, z = (0, i.useCallback)(t => { let i = t; if (!i) return; "system" === t && r && (i = p()); let u = g ? g[i] : i, a = n ? b() : null, l = document.documentElement; if ("class" === v ? (l.classList.remove(...L), u && l.classList.add(u)) : u ? l.setAttribute(v, u) : l.removeAttribute(v), c) { let t = o.includes(h) ? h : null, n = o.includes(i) ? i : t; l.style.colorScheme = n } null == a || a() }, []), A = (0, i.useCallback)(t => { x(t); try { localStorage.setItem(l, t) } catch (t) { } }, [t]), j = (0, i.useCallback)(n => { let i = p(n); C(i), "system" === w && r && !t && z("system") }, [w, t]); (0, i.useEffect)(() => { let t = window.matchMedia(u); return t.addListener(j), j(t), () => t.removeListener(j) }, [j]), (0, i.useEffect)(() => { let e = t => { t.key === l && A(t.newValue || h) }; return window.addEventListener("storage", e), () => window.removeEventListener("storage", e) }, [A]), (0, i.useEffect)(() => { z(null != t ? t : w) }, [t, w]); let T = (0, i.useMemo)(() => ({ theme: w, setTheme: A, forcedTheme: t, resolvedTheme: "system" === w ? k : w, themes: r ? [...m, "system"] : m, systemTheme: r ? k : void 0 }), [w, A, t, k, r, m]); return i.createElement(a.Provider, { value: T }, i.createElement(d, { forcedTheme: t, disableTransitionOnChange: n, enableSystem: r, enableColorScheme: c, storageKey: l, themes: m, defaultTheme: h, attribute: v, value: g, children: _, attrs: L, nonce: E }), _) }, d = (0, i.memo)(({ forcedTheme: t, storageKey: n, attribute: r, enableSystem: c, enableColorScheme: a, defaultTheme: l, value: s, attrs: d, nonce: m }) => { let h = "system" === l, v = "class" === r ? `var d=document.documentElement,c=d.classList;c.remove(${d.map(t => `'${t}'`).join(",")});` : `var d=document.documentElement,n='${r}',s='setAttribute';`, g = a ? o.includes(l) && l ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", $ = (t, n = !1, i = !0) => { let u = s ? s[t] : t, c = n ? t + "|| ''" : `'${u}'`, l = ""; return a && i && !n && o.includes(t) && (l += `d.style.colorScheme = '${t}';`), "class" === r ? l += n || u ? `c.add(${c})` : "null" : u && (l += `d[s](n,${c})`), l }, _ = t ? `!function(){${v}${$(t)}}()` : c ? `!function(){try{${v}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${u}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${$(s ? "x[e]" : "e", !0)}}${h ? "" : "else{" + $(l, !1, !1) + "}"}${g}}catch(e){}}()` : `!function(){try{${v}var e=localStorage.getItem('${n}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${$(s ? "x[e]" : "e", !0)}}else{${$(l, !1, !1)};}${g}}catch(t){}}();`; return i.createElement("script", { nonce: m, dangerouslySetInnerHTML: { __html: _ } }) }, () => !0), S = (t, n) => { let r; if (!c) { try { r = localStorage.getItem(t) || void 0 } catch (t) { } return r || n } }, b = () => { let t = document.createElement("style"); return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => { window.getComputedStyle(document.body), setTimeout(() => { document.head.removeChild(t) }, 1) } }, p = t => (t || (t = window.matchMedia(u)), t.matches ? "dark" : "light") }, 6840: function (t, n, r) { (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () { return r(7440) }]) }, 7440: function (t, n, r) { "use strict"; r.r(n), r.d(n, { default: function () { return App } }); var i = r(5893); r(2352); var o = r(1376), u = r.n(o), c = r(7294), a = r(4588), l = r.n(a); function Layout(t) { let { children: n } = t, [r, o] = (0, c.useState)(!1); return (0, c.useEffect)(() => { let handleResize = () => { window.innerWidth < 768 ? o(!0) : o(!1) }; return window.addEventListener("resize", handleResize), handleResize(), () => { window.removeEventListener("resize", handleResize) } }, []), (0, i.jsxs)("main", { className: "h-screen overflow-hidden ".concat(u().className, " "), children: [!r && (0, i.jsx)(l(), { innerSize: 15, outerSize: 15, color: "74, 255, 145", outerAlpha: .4, innerScale: .7, outerScale: 5 }), n] }) } var s = r(2010); function ThemeProvider(t) { let { children: n, ...r } = t; return (0, i.jsx)(s.f, { ...r, children: n }) } function App(t) { let { Component: n, pageProps: r } = t; return (0, i.jsx)(ThemeProvider, { attribute: "class", themes: ["light", "dark"], defaultTheme: "dark", children: (0, i.jsxs)(Layout, { children: [(0, i.jsx)(n, { ...r }), (0, i.jsx)("footer", { className: "footer", children: (0, i.jsx)("div", { className: "footer-content", children: "Copyright \xa9 2025 - ACC Foundation - Gagster Agent. All rights reserved." }) })] }) }) } }, 2352: function () { }, 1376: function (t) { t.exports = { style: { fontFamily: "'__Orbitron_0f05b8', '__Orbitron_Fallback_0f05b8'", fontWeight: 400, fontStyle: "normal" }, className: "__className_0f05b8" } }, 4588: function (t, n, r) { t.exports = function (t, n) { "use strict"; var __assign = function () { return (__assign = Object.assign || function (t) { for (var n, r = 1, i = arguments.length; r < i; r++)for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]); return t }).apply(this, arguments) }; function useEventListener(t, r, i) { var o = n.useRef(r); n.useEffect(function () { o.current = r }), n.useEffect(function () { var n = void 0 === i ? window : i, internalListener = function (t) { return o.current(t) }; return null == n || n.addEventListener(t, internalListener), function () { null == n || n.removeEventListener(t, internalListener) } }, [t, i]) } var useDeviceInfo = function () { var t = n.useState({ info: "", Android: function () { return null }, BlackBerry: function () { return null }, IEMobile: function () { return null }, iOS: function () { return null }, iPad: function () { return null }, OperaMini: function () { return null }, any: function () { return !1 } }), r = t[0], i = t[1]; return n.useEffect(function () { if ("undefined" != typeof navigator) { var t = navigator.userAgent; i(function (n) { return __assign(__assign({}, n), { info: t, Android: function () { return t.match(/Android/i) }, BlackBerry: function () { return t.match(/BlackBerry/i) }, IEMobile: function () { return t.match(/IEMobile/i) }, iOS: function () { return t.match(/iPhone|iPad|iPod/i) }, iPad: function () { return !!(t.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) }, OperaMini: function () { return t.match(/Opera Mini/i) }, any: function () { var t, r, i, o, u; return !!((null === (t = n.Android()) || void 0 === t ? void 0 : t.length) || (null === (r = n.BlackBerry()) || void 0 === r ? void 0 : r.length) || (null === (i = n.iOS()) || void 0 === i ? void 0 : i.length) || n.iPad() || (null === (o = n.OperaMini()) || void 0 === o ? void 0 : o.length) || (null === (u = n.IEMobile()) || void 0 === u ? void 0 : u.length)) } }) }) } }, []), r }; function findInArray(t, n) { for (var r = [], i = 2; i < arguments.length; i++)r[i - 2] = arguments[i]; if ("function" != typeof n) throw TypeError("callback must be a function"); for (var o = Object(t), u = o.length >>> 0, c = r[2], a = 0; a < u; a++) { var l = o[a]; if (n.call(c, l, a, o)) return l } } function CursorCore(r) { var i = r.clickables, o = void 0 === i ? ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"] : i, u = r.children, c = r.color, a = void 0 === c ? "220, 90, 90" : c, l = r.innerScale, s = void 0 === l ? .6 : l, d = r.innerSize, m = void 0 === d ? 8 : d, h = r.innerStyle, v = r.outerAlpha, g = void 0 === v ? .4 : v, _ = r.outerScale, E = void 0 === _ ? 6 : _, w = r.outerSize, x = void 0 === w ? 8 : w, k = r.outerStyle, C = r.showSystemCursor, L = void 0 !== C && C, z = r.trailingSpeed, A = void 0 === z ? 8 : z, j = n.useMemo(function () { return { children: u, color: a, innerScale: s, innerSize: m, innerStyle: h, outerAlpha: g, outerScale: E, outerSize: x, outerStyle: k } }, [u, a, s, m, h, g, E, x, k]), T = n.useRef(null), O = n.useRef(null), I = n.useRef(null), M = n.useRef(null), N = n.useState({ x: 0, y: 0 }), P = N[0], R = N[1], F = n.useState(!1), B = F[0], q = F[1], K = n.useState(j), X = K[0], D = K[1], J = n.useState(!1), W = J[0], G = J[1], H = n.useState(!1), V = H[0], Y = H[1], Q = n.useRef(0), U = n.useRef(0), Z = n.useCallback(function (t) { var n = t.clientX, r = t.clientY; R({ x: n, y: r }), null !== O.current && (O.current.style.top = "".concat(r, "px"), O.current.style.left = "".concat(n, "px")), Q.current = n, U.current = r }, []), ee = n.useCallback(function (t) { void 0 !== M.current && (P.x += (Q.current - P.x) / A, P.y += (U.current - P.y) / A, null !== T.current && (T.current.style.top = "".concat(P.y, "px"), T.current.style.left = "".concat(P.x, "px"))), M.current = t, I.current = requestAnimationFrame(ee) }, [I]); n.useEffect(function () { return I.current = requestAnimationFrame(ee), function () { null !== I.current && cancelAnimationFrame(I.current) } }, [ee]); var getScaleAmount = function (t, n) { return "".concat(parseInt(String(t * n)), "px") }, et = n.useCallback(function (t, n, r) { t && (t.style.height = getScaleAmount(n, r), t.style.width = getScaleAmount(n, r)) }, []), en = n.useCallback(function () { return G(!0) }, []), er = n.useCallback(function () { return G(!1) }, []), ei = n.useCallback(function () { return q(!0) }, []), eo = n.useCallback(function () { return q(!1) }, []); useEventListener("mousemove", Z), useEventListener("mousedown", en), useEventListener("mouseup", er), useEventListener("mouseover", ei), useEventListener("mouseout", eo), n.useEffect(function () { W ? (et(O.current, X.innerSize, X.innerScale), et(T.current, X.outerSize, X.outerScale)) : (et(O.current, X.innerSize, 1), et(T.current, X.outerSize, 1)) }, [X.innerSize, X.innerScale, X.outerSize, X.outerScale, et, W]), n.useEffect(function () { V && (et(O.current, X.innerSize, 1.2 * X.innerScale), et(T.current, X.outerSize, 1.4 * X.outerScale)) }, [X.innerSize, X.innerScale, X.outerSize, X.outerScale, et, V]), n.useEffect(function () { null != O.current && null != T.current && (B ? (O.current.style.opacity = "1", T.current.style.opacity = "1") : (O.current.style.opacity = "0", T.current.style.opacity = "0")) }, [B]), n.useEffect(function () { var t = document.querySelectorAll(o.map(function (t) { return "object" == typeof t && (null == t ? void 0 : t.target) ? t.target : null != t ? t : "" }).join(",")); return t.forEach(function (t) { L || (t.style.cursor = "none"); var n = "object" == typeof o ? findInArray(o, function (n) { return "object" == typeof n && t.matches(n.target) }) : {}, r = __assign(__assign({}, j), n); t.addEventListener("mouseover", function () { G(!0), D(r) }), t.addEventListener("click", function () { G(!0), Y(!1) }), t.addEventListener("mousedown", function () { Y(!0) }), t.addEventListener("mouseup", function () { G(!0) }), t.addEventListener("mouseout", function () { G(!1), Y(!1), D(j) }) }), function () { t.forEach(function (t) { var n = "object" == typeof o ? findInArray(o, function (n) { return "object" == typeof n && t.matches(n.target) }) : {}, r = __assign(__assign({}, j), n); t.removeEventListener("mouseover", function () { G(!0), D(r) }), t.removeEventListener("click", function () { G(!0), Y(!1) }), t.removeEventListener("mousedown", function () { Y(!0) }), t.removeEventListener("mouseup", function () { G(!0) }), t.removeEventListener("mouseout", function () { G(!1), Y(!1), D(j) }) }) } }, [W, o, L, j]), n.useEffect(function () { "object" != typeof window || L || (document.body.style.cursor = "none") }, [L]); var eu = { zIndex: 999, display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", borderRadius: "50%", pointerEvents: "none", transform: "translate(-50%, -50%)", transition: "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out" }, ec = { cursorInner: __assign(__assign({ width: X.children ? "auto" : X.innerSize, height: X.children ? "auto" : X.innerSize, backgroundColor: X.children ? "transparent" : "rgba(".concat(X.color, ", 1)") }, eu), X.innerStyle && X.innerStyle), cursorOuter: __assign(__assign({ width: X.outerSize, height: X.outerSize, backgroundColor: "rgba(".concat(X.color, ", ").concat(X.outerAlpha, ")") }, eu), X.outerStyle && X.outerStyle) }; return t.jsxs(t.Fragment, { children: [t.jsx("div", { ref: T, style: ec.cursorOuter }), t.jsx("div", __assign({ ref: O, style: ec.cursorInner }, { children: t.jsx("div", __assign({ style: { opacity: X.children ? 1 : 0, transition: "opacity 0.3s ease-in-out" } }, { children: X.children })) }))] }) } return function (n) { var r = n.children, i = n.clickables, o = n.color, u = n.innerScale, c = n.innerSize, a = n.innerStyle, l = n.outerAlpha, s = n.outerScale, d = n.outerSize, m = n.outerStyle, h = n.showSystemCursor, v = n.trailingSpeed, g = useDeviceInfo(); return "undefined" != typeof navigator && g.any() ? t.jsx(t.Fragment, {}) : t.jsx(CursorCore, __assign({ clickables: i, color: o, innerScale: u, innerSize: c, innerStyle: a, outerAlpha: l, outerScale: s, outerSize: d, outerStyle: m, showSystemCursor: h, trailingSpeed: v }, { children: r })) } }(r(5893), r(7294)) } }, function (t) { var __webpack_exec__ = function (n) { return t(t.s = n) }; t.O(0, [774, 179], function () { return __webpack_exec__(6840), __webpack_exec__(9974) }), _N_E = t.O() }]);