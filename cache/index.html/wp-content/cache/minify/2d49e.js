/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.6.0",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return S.each(this, e) },
        map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) { return e === t && (l = !0), 0 },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) {
            H = {
                apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Q.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
        not: function(e) { return this.pushStack(j(this, e || [], !0)) },
        is: function(e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise()
                    },
                    promise: function(e) { return null != e ? S.extend(e, a) : a }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) }
    var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { Q.remove(this, e) }) }
    }), S.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument });
    var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() { return !0 }

    function Te() { return !1 }

    function Ce(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[S.expando] ? e : new S.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Se(this, e, Ce), !1 }, trigger: function() { return Se(this, e), !0 }, _default: function() { return !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({ on: function(e, t, n, r) { return Ee(this, e, t, n, r) }, one: function(e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() { S.event.remove(this, e, n, t) }) } });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({
        htmlPrefilter: function(e) { return e },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) { return Oe(this, e, !0) },
        remove: function(e) { return Oe(this, e) },
        text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return He(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return He(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return He(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Me = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = { position: "absolute", visibility: "hidden", display: "block" },
        Ge = { letterSpacing: "0", fontWeight: "400" };

    function Ye(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) { return new Ke.prototype.init(e, t, n, r, i) }
    S.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = X(t); return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() { return Je(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Ye) }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = Ke.propHooks[this.prop]; return e && e.get ? e.get(this) : Ke.propHooks._default.get(this) }, run: function(e) { var t, n = Ke.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick()) }

    function at() { return C.setTimeout(function() { Ze = void 0 }), Ze = Date.now() }

    function st(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] },
        tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) }
    }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) }
    }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { et || (et = !0, ot()) }, S.fx.stop = function() { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) { return (e.match(P) || []).join(" ") }

    function gt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, gt(this))) });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, gt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, gt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = vt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : ht(S.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) { e.stopPropagation() };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = { guid: Date.now() },
        Tt = /\?/;
    S.parseXML = function(e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) {} return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) { return e.textContent }).join("\n") : e)), t };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) { r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e) },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) { n = {}; while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return S.get(e, t, n, "json") },
        getScript: function(e, t) { return S.get(e, void 0, t, "script") }
    }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this }
    }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var Bt = { 0: 200, 1223: 204 },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zt.pop() || S.expando + "_" + wt.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) }
    }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) { if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) {
        S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Xt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function(e) { return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
jQuery.noConflict();; /*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function(e) { return t(e, window) }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window) }(function(s, n) {
        "use strict";

        function e(e) { return 0 <= function(e, t) { for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) { if (+o[i] < +n[i]) return 1; if (+n[i] < +o[i]) return -1 } return 0 }(s.fn.jquery, e) }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) { Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function() { return u(n), r }, set: function(e) { u(n), r = e } }) }

        function o(e, t, r, n) { e[t] = function() { return u(n), r.apply(this, arguments) } }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() { r = {}, s.migrateWarnings.length = 0 }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) { var t = Array.prototype.slice.call(arguments); return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t) }, s.fn.init.prototype = s.fn, s.find = function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try { n.document.querySelector(t) } catch (e) { t = t.replace(y, function(e, t, r, n) { return "[" + t + r + '"' + n + '"]' }); try { n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t } catch (e) { u("Attribute selector with '#' was not fixed: " + r[0]) } }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() { return this.length }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() { return JSON.parse.apply(null, arguments) }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) { return null == e ? "" : (e + "").replace(m, "") }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) { var t = typeof e; return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e)) }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { d["[object " + t + "]"] = t.toLowerCase() }), o(s, "type", function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e }, "jQuery.type is deprecated"), o(s, "isFunction", function(e) { return "function" == typeof e }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) { return null != e && e === e.window }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() { var e = a.apply(this, arguments); return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e }, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {!1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated") }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) { return e.replace(/-([a-z])/g, function(e, t) { return t.toUpperCase() }) }
        s.fn.removeAttr = function(e) { var r = this; return s.each(e.match(v), function(e, t) { s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1)) }), g.apply(this, arguments) };
        var Q, b = !(s.fn.toggleClass = function(t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() { var e; return b = !0, e = r.apply(this, arguments), b = !1, e })
        }), s.swap = function(e, t, r, n) { var o, i, a = {}; for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i]; for (i in o = r.apply(e, n || []), t) e.style[i] = a[i]; return o }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, { set: function() { return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments) } })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) { var r, n, o = this; return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) { s.fn.css.call(o, e, t) }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments)) };
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) { var n, o, i; if (t && "object" == typeof t && 2 === arguments.length) { for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i]; return N.call(this, e, o), t } return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments) }, s.fx && (S = s.Tween.prototype.run, M = function(e) { return e }, s.Tween.prototype.run = function() { 1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments) }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", { configurable: !0, enumerable: !0, get: function() { return n.document.hidden || u(k), A }, set: function(e) { u(k), A = e } }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) { u("jQuery.event.props are deprecated and removed: " + o.join()); while (o.length) s.event.addProp(o.pop()) }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function(e, t) { return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments) }, s.each(["load", "unload", "error"], function(e, t) { s.fn[t] = function() { var e = Array.prototype.slice.call(arguments, 0); return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this)) } }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) { s.fn[r] = function(e, t) { return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r) } }), s(function() { s(n.document).triggerHandler("ready") }), s.event.special.ready = { setup: function() { this === n.document && u("'ready' event is deprecated") } }, s.fn.extend({ bind: function(e, t, r) { return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r) }, unbind: function(e, t) { return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t) }, delegate: function(e, t, r, n) { return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n) }, undelegate: function(e, t, r) { return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r) }, hover: function(e, t) { return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e) } });

        function T(e) { var t = n.document.implementation.createHTMLDocument(""); return t.body.innerHTML = e, t.body && t.body.innerHTML }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() { s.htmlPrefilter = function(e) { return P(e), e.replace(O, "<$1></$2>") } }, s.htmlPrefilter = function(e) { return P(e), q(e) };
        var D, _ = s.fn.offset;
        s.fn.offset = function() { var e = this[0]; return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0) }, s.ajax && (D = s.param, s.param = function(e, t) { var r = s.ajaxSettings && s.ajaxSettings.traditional; return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t) });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() { return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments) }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function(e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });

;
! function(t) {
    var e = {};

    function n(r) { if (e[r]) return e[r].exports; var i = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports }
    n.m = t, n.c = e, n.d = function(t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) { return t[e] }.bind(null, i));
        return r
    }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 1)
}([function(t, e) { t.exports = jQuery }, function(t, e, n) { n(2), n(6), t.exports = n(4) }, function(t, e, n) {
    var r, i, u, s;
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
    s = function(t) {
        "use strict";
        var e = "left",
            n = "right",
            r = "up",
            i = "down",
            u = "none",
            s = "doubletap",
            o = "longtap",
            a = "horizontal",
            l = "vertical",
            h = "all",
            f = "move",
            D = "end",
            p = "cancel",
            c = "ontouchstart" in window,
            d = window.navigator.msPointerEnabled && !window.PointerEvent && !c,
            g = (window.PointerEvent || window.navigator.msPointerEnabled) && !c,
            _ = "TouchSwipe";

        function m(m, v) {
            v = t.extend({}, v);
            var y = c || g || !v.fallbackToMouseEvents,
                C = y ? g ? d ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                x = y ? g ? d ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                F = y ? g ? d ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                w = y ? g ? "mouseleave" : null : "mouseleave",
                E = g ? d ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                b = 0,
                T = null,
                A = null,
                M = 0,
                O = 0,
                S = 0,
                P = 1,
                B = 0,
                k = 0,
                L = null,
                N = t(m),
                R = "start",
                I = 0,
                z = {},
                Y = 0,
                X = 0,
                j = 0,
                V = 0,
                U = 0,
                W = null,
                q = null;
            try { N.on(C, G), N.on(E, K) } catch (m) { t.error("events not supported " + C + "," + E + " on jQuery.swipe") }

            function G(u) {
                if (!0 !== N.data(_ + "_intouch") && !(0 < t(u.target).closest(v.excludedElements, N).length)) {
                    var s = u.originalEvent ? u.originalEvent : u;
                    if (!s.pointerType || "mouse" != s.pointerType || 0 != v.fallbackToMouseEvents) {
                        var o, a, l = s.touches,
                            f = l ? l[0] : s;
                        return R = "start", l ? I = l.length : !1 !== v.preventDefaultEvents && u.preventDefault(), k = A = T = null, P = 1, B = S = O = M = b = 0, (a = {})[e] = yt(e), a[n] = yt(n), a.up = yt(r), a[i] = yt(i), L = a, ct(), _t(0, f), !l || I === v.fingers || v.fingers === h || st() ? (Y = wt(), 2 == I && (_t(1, l[1]), O = S = xt(z[0].start, z[1].start)), (v.swipeStatus || v.pinchStatus) && (o = tt(s, R))) : o = !1, !1 === o ? (tt(s, R = p), o) : (v.hold && (q = setTimeout(t.proxy((function() { N.trigger("hold", [s.target]), v.hold && (o = v.hold.call(N, s, s.target)) }), this), v.longTapThreshold)), gt(!0), null)
                    }
                }
            }

            function H(s) {
                var o = s.originalEvent ? s.originalEvent : s;
                if (R !== D && R !== p && !dt()) {
                    var c, d, g, _, m, y, C, x = o.touches,
                        F = mt(x ? x[0] : o);
                    if (X = wt(), x && (I = x.length), v.hold && clearTimeout(q), R = f, 2 == I && (0 == O ? (_t(1, x[1]), O = S = xt(z[0].start, z[1].start)) : (mt(x[1]), S = xt(z[0].end, z[1].end), z[0].end, z[1].end, k = P < 1 ? "out" : "in"), P = (S / O * 1).toFixed(2), B = Math.abs(O - S)), I === v.fingers || v.fingers === h || !x || st()) {
                        if (T = Ft(F.start, F.end), function(t, s) {
                                if (!1 !== v.preventDefaultEvents)
                                    if (v.allowPageScroll === u) t.preventDefault();
                                    else {
                                        var o = "auto" === v.allowPageScroll;
                                        switch (s) {
                                            case e:
                                                (v.swipeLeft && o || !o && v.allowPageScroll != a) && t.preventDefault();
                                                break;
                                            case n:
                                                (v.swipeRight && o || !o && v.allowPageScroll != a) && t.preventDefault();
                                                break;
                                            case r:
                                                (v.swipeUp && o || !o && v.allowPageScroll != l) && t.preventDefault();
                                                break;
                                            case i:
                                                (v.swipeDown && o || !o && v.allowPageScroll != l) && t.preventDefault()
                                        }
                                    }
                            }(s, A = Ft(F.last, F.end)), y = F.start, C = F.end, b = Math.round(Math.sqrt(Math.pow(C.x - y.x, 2) + Math.pow(C.y - y.y, 2))), M = Ct(), function(t, e) { t != u && (e = Math.max(e, vt(t)), L[t].distance = e) }(T, b), c = tt(o, R), !v.triggerOnTouchEnd || v.triggerOnTouchLeave) {
                            var w = !0;
                            v.triggerOnTouchLeave && (g = { left: (m = (_ = t(_ = this)).offset()).left, right: m.left + _.outerWidth(), top: m.top, bottom: m.top + _.outerHeight() }, w = (d = F.end).x > g.left && d.x < g.right && d.y > g.top && d.y < g.bottom), !v.triggerOnTouchEnd && w ? R = J(f) : v.triggerOnTouchLeave && !w && (R = J(D)), R != p && R != D || tt(o, R)
                        }
                    } else tt(o, R = p);
                    !1 === c && tt(o, R = p)
                }
            }

            function Q(t) {
                var e, n = t.originalEvent ? t.originalEvent : t,
                    r = n.touches;
                if (r) { if (r.length && !dt()) return e = n, j = wt(), V = e.touches.length + 1, !0; if (r.length && dt()) return !0 }
                return dt() && (I = V), X = wt(), M = Ct(), rt() || !nt() ? tt(n, R = p) : v.triggerOnTouchEnd || !1 === v.triggerOnTouchEnd && R === f ? (!1 !== v.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), tt(n, R = D)) : !v.triggerOnTouchEnd && ft() ? et(n, R = D, "tap") : R === f && tt(n, R = p), gt(!1), null
            }

            function K() { S = O = Y = X = I = 0, P = 1, ct(), gt(!1) }

            function Z(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                v.triggerOnTouchLeave && tt(e, R = J(D))
            }

            function $() { N.off(C, G), N.off(E, K), N.off(x, H), N.off(F, Q), w && N.off(w, Z), gt(!1) }

            function J(t) {
                var e = t,
                    n = it(),
                    r = nt(),
                    i = rt();
                return !n || i ? e = p : !r || t != f || v.triggerOnTouchEnd && !v.triggerOnTouchLeave ? !r && t == D && v.triggerOnTouchLeave && (e = p) : e = D, e
            }

            function tt(t, e) { var n, r = t.touches; return (ot() && at() || at()) && (n = et(t, e, "swipe")), (ut() && st() || st()) && !1 !== n && (n = et(t, e, "pinch")), pt() && Dt() && !1 !== n ? n = et(t, e, s) : M > v.longTapThreshold && b < 10 && v.longTap && !1 !== n ? n = et(t, e, o) : 1 !== I && c || !(isNaN(b) || b < v.threshold) || !ft() || !1 === n || (n = et(t, e, "tap")), e === p && K(), e === D && (r && r.length || K()), n }

            function et(u, a, l) {
                var h;
                if ("swipe" == l) {
                    if (N.trigger("swipeStatus", [a, T || null, b || 0, M || 0, I, z, A]), v.swipeStatus && !1 === (h = v.swipeStatus.call(N, u, a, T || null, b || 0, M || 0, I, z, A))) return !1;
                    if (a == D && ot()) {
                        if (clearTimeout(W), clearTimeout(q), N.trigger("swipe", [T, b, M, I, z, A]), v.swipe && !1 === (h = v.swipe.call(N, u, T, b, M, I, z, A))) return !1;
                        switch (T) {
                            case e:
                                N.trigger("swipeLeft", [T, b, M, I, z, A]), v.swipeLeft && (h = v.swipeLeft.call(N, u, T, b, M, I, z, A));
                                break;
                            case n:
                                N.trigger("swipeRight", [T, b, M, I, z, A]), v.swipeRight && (h = v.swipeRight.call(N, u, T, b, M, I, z, A));
                                break;
                            case r:
                                N.trigger("swipeUp", [T, b, M, I, z, A]), v.swipeUp && (h = v.swipeUp.call(N, u, T, b, M, I, z, A));
                                break;
                            case i:
                                N.trigger("swipeDown", [T, b, M, I, z, A]), v.swipeDown && (h = v.swipeDown.call(N, u, T, b, M, I, z, A))
                        }
                    }
                }
                if ("pinch" == l) {
                    if (N.trigger("pinchStatus", [a, k || null, B || 0, M || 0, I, P, z]), v.pinchStatus && !1 === (h = v.pinchStatus.call(N, u, a, k || null, B || 0, M || 0, I, P, z))) return !1;
                    if (a == D && ut()) switch (k) {
                        case "in":
                            N.trigger("pinchIn", [k || null, B || 0, M || 0, I, P, z]), v.pinchIn && (h = v.pinchIn.call(N, u, k || null, B || 0, M || 0, I, P, z));
                            break;
                        case "out":
                            N.trigger("pinchOut", [k || null, B || 0, M || 0, I, P, z]), v.pinchOut && (h = v.pinchOut.call(N, u, k || null, B || 0, M || 0, I, P, z))
                    }
                }
                return "tap" == l ? a !== p && a !== D || (clearTimeout(W), clearTimeout(q), Dt() && !pt() ? (U = wt(), W = setTimeout(t.proxy((function() { U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target)) }), this), v.doubleTapThreshold)) : (U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target)))) : l == s ? a !== p && a !== D || (clearTimeout(W), clearTimeout(q), U = null, N.trigger("doubletap", [u.target]), v.doubleTap && (h = v.doubleTap.call(N, u, u.target))) : l == o && (a !== p && a !== D || (clearTimeout(W), U = null, N.trigger("longtap", [u.target]), v.longTap && (h = v.longTap.call(N, u, u.target)))), h
            }

            function nt() { var t = !0; return null !== v.threshold && (t = b >= v.threshold), t }

            function rt() { var t = !1; return null !== v.cancelThreshold && null !== T && (t = vt(T) - b >= v.cancelThreshold), t }

            function it() { return !(v.maxTimeThreshold && M >= v.maxTimeThreshold) }

            function ut() {
                var t = lt(),
                    e = ht(),
                    n = null === v.pinchThreshold || B >= v.pinchThreshold;
                return t && e && n
            }

            function st() { return v.pinchStatus || v.pinchIn || v.pinchOut }

            function ot() {
                var t = it(),
                    e = nt(),
                    n = lt(),
                    r = ht();
                return !rt() && r && n && e && t
            }

            function at() { return v.swipe || v.swipeStatus || v.swipeLeft || v.swipeRight || v.swipeUp || v.swipeDown }

            function lt() { return I === v.fingers || v.fingers === h || !c }

            function ht() { return 0 !== z[0].end.x }

            function ft() { return v.tap }

            function Dt() { return !!v.doubleTap }

            function pt() { if (null == U) return !1; var t = wt(); return Dt() && t - U <= v.doubleTapThreshold }

            function ct() { V = j = 0 }

            function dt() { var t = !1; return j && wt() - j <= v.fingerReleaseThreshold && (t = !0), t }

            function gt(t) { N && (!0 === t ? (N.on(x, H), N.on(F, Q), w && N.on(w, Z)) : (N.off(x, H, !1), N.off(F, Q, !1), w && N.off(w, Z, !1)), N.data(_ + "_intouch", !0 === t)) }

            function _t(t, e) { var n = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } }; return n.start.x = n.last.x = n.end.x = e.pageX || e.clientX, n.start.y = n.last.y = n.end.y = e.pageY || e.clientY, z[t] = n }

            function mt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    n = z[e] || null;
                return null === n && (n = _t(e, t)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = t.pageX || t.clientX, n.end.y = t.pageY || t.clientY, n
            }

            function vt(t) { if (L[t]) return L[t].distance }

            function yt(t) { return { direction: t, distance: 0 } }

            function Ct() { return X - Y }

            function xt(t, e) {
                var n = Math.abs(t.x - e.x),
                    r = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }

            function Ft(t, s) { if (a = s, (o = t).x == a.x && o.y == a.y) return u; var o, a, l, h, f, D, p, c, d = (h = s, f = (l = t).x - h.x, D = h.y - l.y, p = Math.atan2(D, f), (c = Math.round(180 * p / Math.PI)) < 0 && (c = 360 - Math.abs(c)), c); return d <= 45 && 0 <= d || d <= 360 && 315 <= d ? e : 135 <= d && d <= 225 ? n : 45 < d && d < 135 ? i : r }

            function wt() { return (new Date).getTime() }
            this.enable = function() { return this.disable(), N.on(C, G), N.on(E, K), N }, this.disable = function() { return $(), N }, this.destroy = function() { $(), N.data(_, null), N = null }, this.option = function(e, n) {
                if ("object" == typeof e) v = t.extend(v, e);
                else if (void 0 !== v[e]) {
                    if (void 0 === n) return v[e];
                    v[e] = n
                } else {
                    if (!e) return v;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        t.fn.rsswipe = function(e) {
            var n = t(this),
                r = n.data(_);
            if (r && "string" == typeof e) {
                if (r[e]) return r[e].apply(r, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + e + " does not exist on jQuery.rsswipe")
            } else if (r && "object" == typeof e) r.option.apply(r, arguments);
            else if (!(r || "object" != typeof e && e)) return function(e) {
                return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = u), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e = e || {}, e = t.extend({}, t.fn.rsswipe.defaults, e), this.each((function() {
                    var n = t(this),
                        r = n.data(_);
                    r || (r = new m(this, e), n.data(_, r))
                }))
            }.apply(this, arguments);
            return n
        }, t.fn.rsswipe.version = "1.6.18", t.fn.rsswipe.defaults = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: ".noSwipe", preventDefaultEvents: !0 }, t.fn.rsswipe.phases = { PHASE_START: "start", PHASE_MOVE: f, PHASE_END: D, PHASE_CANCEL: p }, t.fn.rsswipe.directions = { LEFT: e, RIGHT: n, UP: r, DOWN: i, IN: "in", OUT: "out" }, t.fn.rsswipe.pageScroll = { NONE: u, HORIZONTAL: a, VERTICAL: l, AUTO: "auto" }, t.fn.rsswipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: h }
    }, n(3).jQuery ? (i = [n(0)], void 0 === (u = "function" == typeof(r = s) ? r.apply(e, i) : r) || (t.exports = u)) : t.exports ? s(n(0)) : s(jQuery)
}, function(t, e) {
    (function(e) { t.exports = e }).call(this, {})
}, function(t, e) {
    var n;
    (n = jQuery).waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"] }, n.expr.pseudos.uncached = function(t) { var e = document.createElement("img"); return e.src = t.src, n(t).is('img[src!=""]') && !e.complete }, n.fn.waitForImages = function(t, e, r) {
        if (n.isPlainObject(t) && (e = t.each, r = t.waitForAll, t = t.finished), t = t || n.noop, e = e || n.noop, r = !!r, !n.isFunction(t) || !n.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each((function() {
            var i = n(this),
                u = [];
            if (r) {
                var s = n.waitForImages.hasImageProperties || [],
                    o = /url\((['"]?)(.*?)\1\)/g;
                i.find("*").each((function() {
                    var t = n(this);
                    t.is("img:uncached") && u.push({ src: t.attr("src"), element: t[0] }), n.each(s, (function(e, n) { var r, i = t.css(n); if (!i) return !0; for (; r = o.exec(i);) u.push({ src: r[2], element: t[0] }) }))
                }))
            } else i.find("img:uncached").each((function() { u.push({ src: this.src, element: this }) }));
            var a = u.length,
                l = 0;
            0 == a && t.call(i[0]), n.each(u, (function(r, u) {
                var s = new Image;
                n(s).bind("load error", (function(n) { if (l++, e.call(u.element, l, a, "load" == n.type), l == a) return t.call(i[0]), !1 })), s.src = u.src
            }))
        }))
    }
}, , function(t, e, n) {
    "use strict";

    function r(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
    /*!
     * GSAP 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.r(e);
    var u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w, E, b, T, A, M, O, S, P = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
        B = { duration: .5, overwrite: !1, delay: 0 },
        k = 1e8,
        L = 2 * Math.PI,
        N = L / 4,
        R = 0,
        I = Math.sqrt,
        z = Math.cos,
        Y = Math.sin,
        X = function(t) { return "string" == typeof t },
        j = function(t) { return "function" == typeof t },
        V = function(t) { return "number" == typeof t },
        U = function(t) { return void 0 === t },
        W = function(t) { return "object" == typeof t },
        q = function(t) { return !1 !== t },
        G = function() { return "undefined" != typeof window },
        H = function(t) { return j(t) || X(t) },
        Q = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        K = Array.isArray,
        Z = /(?:-?\.?\d|\.)+/gi,
        $ = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        tt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        et = /[+-]=-?[\.\d]+/,
        nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        rt = {},
        it = {},
        ut = function(t) { return (it = St(t, rt)) && cn },
        st = function(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") },
        ot = function(t, e) { return !e && console.warn(t) },
        at = function(t, e) { return t && (rt[t] = e) && it && (it[t] = e) || rt },
        lt = function() { return 0 },
        ht = {},
        ft = [],
        Dt = {},
        pt = {},
        ct = {},
        dt = 30,
        gt = [],
        _t = "",
        mt = function(t) {
            var e, n, r = t[0];
            if (W(r) || j(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (n = gt.length; n-- && !gt[n].targetTest(r););
                e = gt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n], e))) || t.splice(n, 1);
            return t
        },
        vt = function(t) { return t._gsap || mt(ie(t))[0]._gsap },
        yt = function(t, e, n) { return (n = t[e]) && j(n) ? t[e]() : U(n) && t.getAttribute && t.getAttribute(e) || n },
        Ct = function(t, e) { return (t = t.split(",")).forEach(e) || t },
        xt = function(t) { return Math.round(1e5 * t) / 1e5 || 0 },
        Ft = function(t, e) { for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;); return r < n },
        wt = function(t, e, n) {
            var r, i = V(t[1]),
                u = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[u];
            if (i && (s.duration = t[1]), s.parent = n, e) {
                for (r = s; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = q(n.vars.inherit) && n.parent;
                s.immediateRender = q(r.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[u - 1]
            }
            return s
        },
        Et = function() {
            var t, e, n = ft.length,
                r = ft.slice(0);
            for (Dt = {}, ft.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        bt = function(t, e, n, r) { ft.length && Et(), t.render(e, n, r), ft.length && Et() },
        Tt = function(t) { var e = parseFloat(t); return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : X(t) ? t.trim() : t },
        At = function(t) { return t },
        Mt = function(t, e) { for (var n in e) n in t || (t[n] = e[n]); return t },
        Ot = function(t, e) { for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n]) },
        St = function(t, e) { for (var n in e) t[n] = e[n]; return t },
        Pt = function t(e, n) { for (var r in n) e[r] = W(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]; return e },
        Bt = function(t, e) { var n, r = {}; for (n in t) n in e || (r[n] = t[n]); return r },
        kt = function(t) {
            var e = t.parent || u,
                n = t.keyframes ? Ot : Mt;
            if (q(t.inherit))
                for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        Lt = function(t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
                u = e._next;
            i ? i._next = u : t[n] === e && (t[n] = u), u ? u._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        Nt = function(t, e) { t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0 },
        Rt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;) n._dirty = 1, n = n.parent;
            return t
        },
        It = function(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t },
        zt = function(t) { return t._repeat ? Yt(t._tTime, t = t.duration() + t._rDelay) * t : 0 },
        Yt = function(t, e) { return (t /= e) && ~~t === t ? ~~t - 1 : ~~t },
        Xt = function(t, e) { return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur) },
        jt = function(t) { return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)) },
        Vt = function(t, e) { var n = t._dp; return n && n.smoothChildTiming && t._ts && (t._start = xt(t._dp._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), jt(t), n._dirty || Rt(n, t)), t },
        Ut = function(t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = Xt(t.rawTime(), e), (!e._dur || Jt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Rt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        Wt = function(t, e, n, r) {
            return e.parent && Nt(e), e._start = xt(n + e._delay), e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, n, r, i) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var u, s = t[r];
                    if (i)
                        for (u = e[i]; s && s[i] > u;) s = s._prev;
                    s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Ut(t, e), t
        },
        qt = function(t, e) { return (rt.ScrollTrigger || st("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t) },
        Gt = function(t, e, n, r) { return We(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Ee.frame ? (ft.push(t), t._lazy = [e, r], 1) : void 0 : 1 },
        Ht = function(t, e, n, r) {
            var i = t._repeat,
                u = xt(e) || 0,
                s = t._tTime / t._tDur;
            return s && !r && (t._time *= u / t._dur), t._dur = u, t._tDur = i ? i < 0 ? 1e10 : xt(u * (i + 1) + t._rDelay * i) : u, s && !r ? Vt(t, t._tTime = t._tDur * s) : t.parent && jt(t), n || Rt(t.parent, t), t
        },
        Qt = function(t) { return t instanceof Ye ? Rt(t) : Ht(t, t._dur) },
        Kt = { _start: 0, endTime: lt },
        Zt = function t(e, n) {
            var r, i, u = e.labels,
                s = e._recent || Kt,
                o = e.duration() >= k ? s.endTime(!1) : e._dur;
            return X(n) && (isNaN(n) || n in u) ? "<" === (r = n.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (r = n.indexOf("=")) < 0 ? (n in u || (u[n] = o), u[n]) : (i = +(n.charAt(r - 1) + n.substr(r + 1)), r > 1 ? t(e, n.substr(0, r - 1)) + i : o + i) : null == n ? o : +n
        },
        $t = function(t, e) { return t || 0 === t ? e(t) : e },
        Jt = function(t, e, n) { return n < t ? t : n > e ? e : n },
        te = function(t) { return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : "" },
        ee = [].slice,
        ne = function(t, e) { return t && W(t) && "length" in t && (!e && !t.length || t.length - 1 in t && W(t[0])) && !t.nodeType && t !== s },
        re = function(t, e, n) { return void 0 === n && (n = []), t.forEach((function(t) { var r; return X(t) && !e || ne(t, 1) ? (r = n).push.apply(r, ie(t)) : n.push(t) })) || n },
        ie = function(t, e) { return !X(t) || e || !o && be() ? K(t) ? re(t, e) : ne(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call(a.querySelectorAll(t), 0) },
        ue = function(t) { return t.sort((function() { return .5 - Math.random() })) },
        se = function(t) {
            if (j(t)) return t;
            var e = W(t) ? t : { each: t },
                n = Be(e.ease),
                r = e.from || 0,
                i = parseFloat(e.base) || 0,
                u = {},
                s = r > 0 && r < 1,
                o = isNaN(r) || s,
                a = e.axis,
                l = r,
                h = r;
            return X(r) ? l = h = { center: .5, edges: .5, end: 1 }[r] || 0 : !s && o && (l = r[0], h = r[1]),
                function(t, s, f) {
                    var D, p, c, d, g, _, m, v, y, C = (f || e).length,
                        x = u[C];
                    if (!x) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, k])[1])) {
                            for (m = -k; m < (m = f[y++].getBoundingClientRect().left) && y < C;);
                            y--
                        }
                        for (x = u[C] = [], D = o ? Math.min(y, C) * l - .5 : r % y, p = o ? C * h / y - .5 : r / y | 0, m = 0, v = k, _ = 0; _ < C; _++) c = _ % y - D, d = p - (_ / y | 0), x[_] = g = a ? Math.abs("y" === a ? d : c) : I(c * c + d * d), g > m && (m = g), g < v && (v = g);
                        "random" === r && ue(x), x.max = m - v, x.min = v, x.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (y > C ? C - 1 : a ? "y" === a ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === r ? -1 : 1), x.b = C < 0 ? i - C : i, x.u = te(e.amount || e.each) || 0, n = n && C < 0 ? Se(n) : n
                    }
                    return C = (x[t] - x.min) / x.max || 0, xt(x.b + (n ? n(C) : C) * x.v) + x.u
                }
        },
        oe = function(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(n) { return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (V(n) ? 0 : te(n)) } },
        ae = function(t, e) { var n, r, i = K(t); return !i && W(t) && (n = i = t.radius || k, t.values ? (t = ie(t.values), (r = !V(t[0])) && (n *= n)) : t = oe(t.increment)), $t(e, i ? j(t) ? function(e) { return r = t(e), Math.abs(r - e) <= n ? r : e } : function(e) { for (var i, u, s = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), a = k, l = 0, h = t.length; h--;)(i = r ? (i = t[h].x - s) * i + (u = t[h].y - o) * u : Math.abs(t[h] - s)) < a && (a = i, l = h); return l = !n || a <= n ? t[l] : e, r || l === e || V(e) ? l : l + te(e) } : oe(t)) },
        le = function(t, e, n, r) { return $t(K(t) ? !e : !0 === n ? !!(n = 0) : !r, (function() { return K(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * r) / r })) },
        he = function(t, e, n) { return $t(n, (function(n) { return t[~~e(n)] })) },
        fe = function(t) { for (var e, n, r, i, u = 0, s = ""; ~(e = t.indexOf("random(", u));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? nt : Z), s += t.substr(u, e - u) + le(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), u = r + 1; return s + t.substr(u, t.length - u) },
        De = function(t, e, n, r, i) {
            var u = e - t,
                s = r - n;
            return $t(i, (function(e) { return n + ((e - t) / u * s || 0) }))
        },
        pe = function(t, e, n) {
            var r, i, u, s = t.labels,
                o = k;
            for (r in s)(i = s[r] - e) < 0 == !!n && i && o > (i = Math.abs(i)) && (u = r, o = i);
            return u
        },
        ce = function(t, e, n) {
            var r, i, u = t.vars,
                s = u[e];
            if (s) return r = u[e + "Params"], i = u.callbackScope || t, n && ft.length && Et(), r ? s.apply(i, r) : s.call(i)
        },
        de = function(t) { return Nt(t), t.progress() < 1 && ce(t, "onInterrupt"), t },
        ge = function(t) {
            var e = (t = !t.name && t.default || t).name,
                n = j(t),
                r = e && !n && t.init ? function() { this._props = [] } : t,
                i = { init: lt, render: un, add: Ve, kill: on, modifier: sn, rawVars: 0 },
                u = { targetTest: 0, get: 0, getSetter: tn, aliases: {}, register: 0 };
            if (be(), t !== r) {
                if (pt[e]) return;
                Mt(r, Mt(Bt(t, i), u)), St(r.prototype, St(i, Bt(t, u))), pt[r.prop = e] = r, t.targetTest && (gt.push(r), ht[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            at(e, r), t.register && t.register(cn, r, hn)
        },
        _e = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
        me = function(t, e, n) { return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
        ve = function(t, e, n) {
            var r, i, u, s, o, a, l, h, f, D, p = t ? V(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : _e.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t]) p = _e[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), i = t.charAt(2), u = t.charAt(3), t = "#" + r + r + i + i + u + u), p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3))
                    if (p = D = t.match(Z), e) { if (~t.indexOf("=")) return p = t.match($), n && p.length < 4 && (p[3] = 1), p } else s = +p[0] % 360 / 360, o = +p[1] / 100, r = 2 * (a = +p[2] / 100) - (i = a <= .5 ? a * (o + 1) : a + o - a * o), p.length > 3 && (p[3] *= 1), p[0] = me(s + 1 / 3, r, i), p[1] = me(s, r, i), p[2] = me(s - 1 / 3, r, i);
                else p = t.match(Z) || _e.transparent;
                p = p.map(Number)
            }
            return e && !D && (r = p[0] / 255, i = p[1] / 255, u = p[2] / 255, a = ((l = Math.max(r, i, u)) + (h = Math.min(r, i, u))) / 2, l === h ? s = o = 0 : (f = l - h, o = a > .5 ? f / (2 - l - h) : f / (l + h), s = l === r ? (i - u) / f + (i < u ? 6 : 0) : l === i ? (u - r) / f + 2 : (r - i) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * a + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        ye = function(t) {
            var e = [],
                n = [],
                r = -1;
            return t.split(xe).forEach((function(t) {
                var i = t.match(J) || [];
                e.push.apply(e, i), n.push(r += i.length + 1)
            })), e.c = n, e
        },
        Ce = function(t, e, n) {
            var r, i, u, s, o = "",
                a = (t + o).match(xe),
                l = e ? "hsla(" : "rgba(",
                h = 0;
            if (!a) return t;
            if (a = a.map((function(t) { return (t = ve(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")" })), n && (u = ye(t), (r = n.c).join(o) !== u.c.join(o)))
                for (s = (i = t.replace(xe, "1").split(J)).length - 1; h < s; h++) o += i[h] + (~r.indexOf(h) ? a.shift() || l + "0,0,0,0)" : (u.length ? u : a.length ? a : n).shift());
            if (!i)
                for (s = (i = t.split(xe)).length - 1; h < s; h++) o += i[h] + a[h];
            return o + i[s]
        },
        xe = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (t in _e) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
        Fe = /hsl[a]?\(/,
        we = function(t) { var e, n = t.join(" "); if (xe.lastIndex = 0, xe.test(n)) return e = Fe.test(n), t[1] = Ce(t[1], e), t[0] = Ce(t[0], e, ye(t[1])), !0 },
        Ee = (v = Date.now, y = 500, C = 33, x = v(), F = x, E = w = 1e3 / 240, T = function t(e) {
            var n, r, i, u, s = v() - F,
                o = !0 === e;
            if (s > y && (x += s - C), ((n = (i = (F += s) - x) - E) > 0 || o) && (u = ++g.frame, _ = i - 1e3 * g.time, g.time = i /= 1e3, E += n + (n >= w ? 4 : w - n), r = 1), o || (p = c(t)), r)
                for (m = 0; m < b.length; m++) b[m](i, _, u, e)
        }, g = {
            time: 0,
            frame: 0,
            tick: function() { T(!0) },
            deltaRatio: function(t) { return _ / (1e3 / (t || 60)) },
            wake: function() { l && (!o && G() && (s = o = window, a = s.document || {}, rt.gsap = cn, (s.gsapVersions || (s.gsapVersions = [])).push(cn.version), ut(it || s.GreenSockGlobals || !s.gsap && s || {}), d = s.requestAnimationFrame), p && g.sleep(), c = d || function(t) { return setTimeout(t, E - 1e3 * g.time + 1 | 0) }, D = 1, T(2)) },
            sleep: function() {
                (d ? s.cancelAnimationFrame : clearTimeout)(p), D = 0, c = lt
            },
            lagSmoothing: function(t, e) { y = t || 1 / 1e-8, C = Math.min(e, y, 0) },
            fps: function(t) { w = 1e3 / (t || 240), E = 1e3 * g.time + w },
            add: function(t) { b.indexOf(t) < 0 && b.push(t), be() },
            remove: function(t) { var e;~(e = b.indexOf(t)) && b.splice(e, 1) && m >= e && m-- },
            _listeners: b = []
        }),
        be = function() { return !D && Ee.wake() },
        Te = {},
        Ae = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        Oe = function(t) { for (var e, n, r, i = {}, u = t.substr(1, t.length - 3).split(":"), s = u[0], o = 1, a = u.length; o < a; o++) n = u[o], e = o !== a - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(Me, "").trim() : +r, s = n.substr(e + 1).trim(); return i },
        Se = function(t) { return function(e) { return 1 - t(1 - e) } },
        Pe = function t(e, n) { for (var r, i = e._first; i;) i instanceof Ye ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next },
        Be = function(t, e) {
            return t && (j(t) ? t : Te[t] || function(t) {
                var e, n, r, i, u = (t + "").split("("),
                    s = Te[u[0]];
                return s && u.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Oe(u[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Tt)) : Te._CE && Ae.test(t) ? Te._CE("", t) : s
            }(t)) || e
        },
        ke = function(t, e, n, r) { void 0 === n && (n = function(t) { return 1 - e(1 - t) }), void 0 === r && (r = function(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var i, u = { easeIn: e, easeOut: n, easeInOut: r }; return Ct(t, (function(t) { for (var e in Te[t] = rt[t] = u, Te[i = t.toLowerCase()] = n, u) Te[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Te[t + "." + e] = u[e] })), u },
        Le = function(t) { return function(e) { return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2 } },
        Ne = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
                u = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
                s = u / L * (Math.asin(1 / i) || 0),
                o = function(t) { return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Y((t - s) * u) + 1 },
                a = "out" === e ? o : "in" === e ? function(t) { return 1 - o(1 - t) } : Le(o);
            return u = L / u, a.config = function(n, r) { return t(e, n, r) }, a
        },
        Re = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function(t) { return t ? --t * t * ((n + 1) * t + n) + 1 : 0 },
                i = "out" === e ? r : "in" === e ? function(t) { return 1 - r(1 - t) } : Le(r);
            return i.config = function(n) { return t(e, n) }, i
        };
    Ct("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        ke(t + ",Power" + (n - 1), e ? function(t) { return Math.pow(t, n) } : function(t) { return t }, (function(t) { return 1 - Math.pow(1 - t, n) }), (function(t) { return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2 }))
    })), Te.Linear.easeNone = Te.none = Te.Linear.easeIn, ke("Elastic", Ne("in"), Ne("out"), Ne()), A = 7.5625, O = 1 / (M = 2.75), ke("Bounce", (function(t) { return 1 - S(1 - t) }), S = function(t) { return t < O ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / M, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / M) * t + .9375 : A * Math.pow(t - 2.625 / M, 2) + .984375 }), ke("Expo", (function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 })), ke("Circ", (function(t) { return -(I(1 - t * t) - 1) })), ke("Sine", (function(t) { return 1 === t ? 1 : 1 - z(t * N) })), ke("Back", Re("in"), Re("out"), Re()), Te.SteppedEase = Te.steps = rt.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) { return ((r * Jt(0, 1 - 1e-8, t) | 0) + i) * n }
        }
    }, B.ease = Te["quad.out"], Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) { return _t += t + "," + t + "Params," }));
    var Ie = function(t, e) { this.id = R++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : yt, this.set = e ? e.getSetter : tn },
        ze = function() {
            function t(t, e) {
                var n = t.parent || u;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ht(this, +t.duration, 1, 1), this.data = t.data, D || Ee.wake(), n && Wt(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function(t) { return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay }, e.duration = function(t) { return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur }, e.totalDuration = function(t) { return arguments.length ? (this._dirty = 0, Ht(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur }, e.totalTime = function(t, e) { if (be(), !arguments.length) return this._tTime; var n = this._dp; if (n && n.smoothChildTiming && this._ts) { for (Vt(this, t); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Wt(this._dp, this, this._start - this._delay) } return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), bt(this, t, e)), this }, e.time = function(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + zt(this)) % this._dur || (t ? this._dur : 0), e) : this._time }, e.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio }, e.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + zt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio }, e.iteration = function(t, e) { var n = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Yt(this._tTime, n) + 1 : 1 }, e.timeScale = function(t) { if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts; if (this._rts === t) return this; var e = this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime; return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, It(this.totalTime(Jt(-this._delay, this._tDur, e), !0)) }, e.paused = function(t) { return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (be(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps }, e.startTime = function(t) { if (arguments.length) { this._start = t; var e = this.parent || this._dp; return e && (e._sort || !this.parent) && Wt(e, this, t - this._delay), this } return this._start }, e.endTime = function(t) { return this._start + (q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts) }, e.rawTime = function(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xt(e.rawTime(t), this) : this._tTime : this._tTime }, e.globalTime = function(t) { for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp; return n }, e.repeat = function(t) { return arguments.length ? (this._repeat = t, Qt(this)) : this._repeat }, e.repeatDelay = function(t) { return arguments.length ? (this._rDelay = t, Qt(this)) : this._rDelay }, e.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, e.seek = function(t, e) { return this.totalTime(Zt(this, t), q(e)) }, e.restart = function(t, e) { return this.play().totalTime(t ? -this._delay : 0, q(e)) }, e.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, e.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, e.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, e.resume = function() { return this.paused(!1) }, e.reversed = function(t) { return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0 }, e.invalidate = function() { return this._initted = 0, this._zTime = -1e-8, this }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, n) { var r = this.vars; return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t] }, e.then = function(t) {
                var e = this;
                return new Promise((function(n) {
                    var r = j(t) ? t : At,
                        i = function() {
                            var t = e.then;
                            e.then = null, j(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function() { de(this) }, t
        }();
    Mt(ze.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
    var Ye = function(t) {
        function e(e, n) { var i; return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = q(e.sortChildren), i.parent && Ut(i.parent, r(i)), e.scrollTrigger && qt(r(i), e.scrollTrigger), i }
        i(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) { return new Qe(t, wt(arguments, 0, this), Zt(this, V(e) ? arguments[3] : n)), this }, n.from = function(t, e, n) { return new Qe(t, wt(arguments, 1, this), Zt(this, V(e) ? arguments[3] : n)), this }, n.fromTo = function(t, e, n, r) { return new Qe(t, wt(arguments, 2, this), Zt(this, V(e) ? arguments[4] : r)), this }, n.set = function(t, e, n) { return e.duration = 0, e.parent = this, kt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Qe(t, e, Zt(this, n), 1), this }, n.call = function(t, e, n) { return Wt(this, Qe.delayedCall(0, t, e), Zt(this, n)) }, n.staggerTo = function(t, e, n, r, i, u, s) { return n.duration = e, n.stagger = n.stagger || r, n.onComplete = u, n.onCompleteParams = s, n.parent = this, new Qe(t, n, Zt(this, i)), this }, n.staggerFrom = function(t, e, n, r, i, u, s) { return n.runBackwards = 1, kt(n).immediateRender = q(n.immediateRender), this.staggerTo(t, e, n, r, i, u, s) }, n.staggerFromTo = function(t, e, n, r, i, u, s, o) { return r.startAt = n, kt(r).immediateRender = q(r.immediateRender), this.staggerTo(t, e, r, i, u, s, o) }, n.render = function(t, e, n) {
            var r, i, s, o, a, l, h, f, D, p, c, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = this !== u && t > _ - 1e-8 && t >= 0 ? _ : t < 1e-8 ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (v !== this._tTime || n || y) {
                if (g !== this._time && m && (v += this._time - g, t += this._time - g), r = v, D = this._start, l = !(f = this._ts), y && (m || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat && (c = this._yoyo, a = m + this._rDelay, r = xt(v % a), v === _ ? (o = this._repeat, r = m) : ((o = ~~(v / a)) && o === v / a && (r = m, o--), r > m && (r = m)), p = Yt(this._tTime, a), !g && this._tTime && p !== o && (p = o), c && 1 & o && (r = m - r, d = 1), o !== p && !this._lock)) {
                    var C = c && 1 & p,
                        x = C === (c && 1 & o);
                    if (o < p && (C = !C), g = C ? 0 : m, this._lock = 1, this.render(g || (d ? 0 : xt(o * a)), e, !m)._lock = 0, !e && this.parent && ce(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), g !== this._time || l !== !this._ts) return this;
                    if (m = this._dur, _ = this._tDur, x && (this._lock = 2, g = C ? m : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                    Pe(this, d)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= n;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, xt(g), xt(r))) && (v -= r - (r = h._start)), this._tTime = v, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), !g && r && !e && ce(this, "onStart"), r >= g && t >= 0)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || r >= i._start) && i._ts && h !== i) { if (i.parent !== this) return this.render(t, e, n); if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) { h = 0, s && (v += this._zTime = -1e-8); break } }
                        i = s
                    } else {
                        i = this._last;
                        for (var F = t < 0 ? t : r; i;) {
                            if (s = i._prev, (i._act || F <= i._end) && i._ts && h !== i) { if (i.parent !== this) return this.render(t, e, n); if (i.render(i._ts > 0 ? (F - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (F - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) { h = 0, s && (v += this._zTime = F ? -1e-8 : 1e-8); break } }
                            i = s
                        }
                    }
                if (h && !e && (this.pause(), h.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = D, jt(this), this.render(t, e, n);
                this._onUpdate && !e && ce(this, "onUpdate", !0), (v === _ && _ >= this.totalDuration() || !v && g) && (D !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !m) && (v === _ && this._ts > 0 || !v && this._ts < 0) && Nt(this, 1), e || t < 0 && !g || !v && !g || (ce(this, v === _ ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < _ && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function(t, e) {
            var n = this;
            if (V(e) || (e = Zt(this, e)), !(t instanceof ze)) {
                if (K(t)) return t.forEach((function(t) { return n.add(t, e) })), this;
                if (X(t)) return this.addLabel(t, e);
                if (!j(t)) return this;
                t = Qe.delayedCall(0, t)
            }
            return this !== t ? Wt(this, t, e) : this
        }, n.getChildren = function(t, e, n, r) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -k); for (var i = [], u = this._first; u;) u._start >= r && (u instanceof Qe ? e && i.push(u) : (n && i.push(u), t && i.push.apply(i, u.getChildren(!0, e, n)))), u = u._next; return i }, n.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) { return X(t) ? this.removeLabel(t) : j(t) ? this.killTweensOf(t) : (Lt(this, t), t === this._recent && (this._recent = this._last), Rt(this)) }, n.totalTime = function(e, n) { return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(Ee.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime }, n.addLabel = function(t, e) { return this.labels[t] = Zt(this, e), this }, n.removeLabel = function(t) { return delete this.labels[t], this }, n.addPause = function(t, e, n) { var r = Qe.delayedCall(0, e || lt, n); return r.data = "isPause", this._hasPause = 1, Wt(this, r, Zt(this, t)) }, n.removePause = function(t) { var e = this._first; for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && Nt(e), e = e._next }, n.killTweensOf = function(t, e, n) { for (var r = this.getTweensOf(t, n), i = r.length; i--;) Xe !== r[i] && r[i].kill(t, e); return this }, n.getTweensOf = function(t, e) { for (var n, r = [], i = ie(t), u = this._first, s = V(e); u;) u instanceof Qe ? Ft(u._targets, i) && (s ? (!Xe || u._initted && u._ts) && u.globalTime(0) <= e && u.globalTime(u.totalDuration()) > e : !e || u.isActive()) && r.push(u) : (n = u.getTweensOf(i, e)).length && r.push.apply(r, n), u = u._next; return r }, n.tweenTo = function(t, e) {
            e = e || {};
            var n = this,
                r = Zt(n, t),
                i = e,
                u = i.startAt,
                s = i.onStart,
                o = i.onStartParams,
                a = Qe.to(n, Mt(e, {
                    ease: "none",
                    lazy: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (u && "time" in u ? u.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        n.pause();
                        var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                        a._dur !== t && Ht(a, t, 0, 1).render(a._time, !0, !0), s && s.apply(a, o || [])
                    }
                }));
            return a
        }, n.tweenFromTo = function(t, e, n) { return this.tweenTo(e, Mt({ startAt: { time: Zt(this, t) } }, n)) }, n.recent = function() { return this._recent }, n.nextLabel = function(t) { return void 0 === t && (t = this._time), pe(this, Zt(this, t)) }, n.previousLabel = function(t) { return void 0 === t && (t = this._time), pe(this, Zt(this, t), 1) }, n.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8) }, n.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, u = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (r in u) u[r] >= n && (u[r] += t);
            return Rt(this)
        }, n.invalidate = function() { var e = this._first; for (this._lock = 0; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, n.clear = function(t) { void 0 === t && (t = !0); for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e; return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), Rt(this) }, n.totalDuration = function(t) {
            var e, n, r, i = 0,
                s = this,
                o = s._last,
                a = k;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (r = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (n = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Wt(s, o, n - o._delay, 1)._lock = 0) : a = n, n < 0 && o._ts && (i -= n, (!r && !s._dp || r && r.smoothChildTiming) && (s._start += n / s._ts, s._time -= n, s._tTime -= n), s.shiftChildren(-n, !1, -Infinity), a = 0), o._end > i && o._ts && (i = o._end), o = e;
                Ht(s, s === u && s._time > i ? s._time : i, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, e.updateRoot = function(t) {
            if (u._ts && (bt(u, Xt(t, u)), h = Ee.frame), Ee.frame >= dt) {
                dt += P.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && P.autoSleep && Ee._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ee.sleep()
                }
            }
        }, e
    }(ze);
    Mt(Ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Xe, je = function(t, e, n, r, i, u, s) {
            var o, a, l, h, f, D, p, c, d = new hn(this._pt, t, e, 0, 1, rn, null, i),
                g = 0,
                _ = 0;
            for (d.b = n, d.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = fe(r)), u && (u(c = [n, r], t, e), n = c[0], r = c[1]), a = n.match(tt) || []; o = tt.exec(r);) h = o[0], f = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), h !== a[_++] && (D = parseFloat(a[_ - 1]) || 0, d._pt = { _next: d._pt, p: f || 1 === _ ? f : ",", s: D, c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - D, m: l && l < 4 ? Math.round : 0 }, g = tt.lastIndex);
            return d.c = g < r.length ? r.substring(g, r.length) : "", d.fp = s, (et.test(r) || p) && (d.e = 0), this._pt = d, d
        },
        Ve = function(t, e, n, r, i, u, s, o, a) {
            j(r) && (r = r(i || 0, t, u));
            var l, h = t[e],
                f = "get" !== n ? n : j(h) ? a ? t[e.indexOf("set") || !j(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](a) : t[e]() : h,
                D = j(h) ? a ? $e : Ze : Ke;
            if (X(r) && (~r.indexOf("random(") && (r = fe(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (te(f) || 0))), f !== r) return isNaN(f * r) ? (!h && !(e in t) && st(e, r), je.call(this, t, e, f, r, D, o || P.stringFilter, a)) : (l = new hn(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof h ? nn : en, 0, D), a && (l.fp = a), s && l.modifier(s, this, t), this._pt = l)
        },
        Ue = function(t, e, n, r, i, u) {
            var s, o, a, l;
            if (pt[t] && !1 !== (s = new pt[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) { if (j(t) && (t = qe(t, i, e, n, r)), !W(t) || t.style && t.nodeType || K(t) || Q(t)) return X(t) ? qe(t, i, e, n, r) : t; var u, s = {}; for (u in t) s[u] = qe(t[u], i, e, n, r); return s }(e[t], r, i, u, n), n, r, u) && (n._pt = o = new hn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== f))
                for (a = n._ptLookup[n._targets.indexOf(i)], l = s._props.length; l--;) a[s._props[l]] = o;
            return s
        },
        We = function t(e, n) {
            var r, i, s, o, a, l, h, f, D, p, c, d, g, _ = e.vars,
                m = _.ease,
                v = _.startAt,
                y = _.immediateRender,
                C = _.lazy,
                x = _.onUpdate,
                F = _.onUpdateParams,
                w = _.callbackScope,
                E = _.runBackwards,
                b = _.yoyoEase,
                T = _.keyframes,
                A = _.autoRevert,
                M = e._dur,
                O = e._startAt,
                S = e._targets,
                P = e.parent,
                k = P && "nested" === P.data ? P.parent._targets : S,
                L = "auto" === e._overwrite,
                N = e.timeline;
            if (N && (!T || !m) && (m = "none"), e._ease = Be(m, B.ease), e._yEase = b ? Se(Be(!0 === b ? m : b, B.ease)) : 0, b && e._yoyo && !e._repeat && (b = e._yEase, e._yEase = e._ease, e._ease = b), !N) {
                if (d = (f = S[0] ? vt(S[0]).harness : 0) && _[f.prop], r = Bt(_, ht), O && O.render(-1, !0).kill(), v) {
                    if (Nt(e._startAt = Qe.set(S, Mt({ data: "isStart", overwrite: !1, parent: P, immediateRender: !0, lazy: q(C), startAt: null, delay: 0, onUpdate: x, onUpdateParams: F, callbackScope: w, stagger: 0 }, v))), y)
                        if (n > 0) A || (e._startAt = 0);
                        else if (M && !(n < 0 && O)) return void(n && (e._zTime = n))
                } else if (E && M)
                    if (O) !A && (e._startAt = 0);
                    else if (n && (y = !1), s = Mt({ overwrite: !1, data: "isFromStart", lazy: y && q(C), immediateRender: y, stagger: 0, parent: P }, r), d && (s[f.prop] = d), Nt(e._startAt = Qe.set(S, s)), y) { if (!n) return } else t(e._startAt, 1e-8);
                for (e._pt = 0, C = M && q(C) || C && !M, i = 0; i < S.length; i++) {
                    if (h = (a = S[i])._gsap || mt(S)[i]._gsap, e._ptLookup[i] = p = {}, Dt[h.id] && ft.length && Et(), c = k === S ? i : k.indexOf(a), f && !1 !== (D = new f).init(a, d || r, e, c, k) && (e._pt = o = new hn(e._pt, a, D.name, 0, 1, D.render, D, 0, D.priority), D._props.forEach((function(t) { p[t] = o })), D.priority && (l = 1)), !f || d)
                        for (s in r) pt[s] && (D = Ue(s, r, e, c, a, k)) ? D.priority && (l = 1) : p[s] = o = Ve.call(e, a, s, "get", r[s], c, k, 0, _.stringFilter);
                    e._op && e._op[i] && e.kill(a, e._op[i]), L && e._pt && (Xe = e, u.killTweensOf(a, p, e.globalTime(0)), g = !e.parent, Xe = 0), e._pt && C && (Dt[h.id] = 1)
                }
                l && ln(e), e._onInit && e._onInit(e)
            }
            e._from = !N && !!_.runBackwards, e._onUpdate = x, e._initted = (!e._op || e._pt) && !g
        },
        qe = function(t, e, n, r, i) { return j(t) ? t.call(e, n, r, i) : X(t) && ~t.indexOf("random(") ? fe(t) : t },
        Ge = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        He = (Ge + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Qe = function(t) {
            function e(e, n, i, s) {
                var o;
                "number" == typeof n && (i.duration = n, n = i, i = null);
                var a, l, h, f, D, p, c, d, g = (o = t.call(this, s ? n : kt(n), i) || this).vars,
                    _ = g.duration,
                    m = g.delay,
                    v = g.immediateRender,
                    y = g.stagger,
                    C = g.overwrite,
                    x = g.keyframes,
                    F = g.defaults,
                    w = g.scrollTrigger,
                    E = g.yoyoEase,
                    b = o.parent,
                    T = (K(e) || Q(e) ? V(e[0]) : "length" in n) ? [e] : ie(e);
                if (o._targets = T.length ? mt(T) : ot("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = C, x || y || H(_) || H(m)) {
                    if (n = o.vars, (a = o.timeline = new Ye({ data: "nested", defaults: F || {} })).kill(), a.parent = r(o), x) Mt(a.vars.defaults, { ease: "none" }), x.forEach((function(t) { return a.to(T, t, ">") }));
                    else {
                        if (f = T.length, c = y ? se(y) : lt, W(y))
                            for (D in y) ~Ge.indexOf(D) && (d || (d = {}), d[D] = y[D]);
                        for (l = 0; l < f; l++) {
                            for (D in h = {}, n) He.indexOf(D) < 0 && (h[D] = n[D]);
                            h.stagger = 0, E && (h.yoyoEase = E), d && St(h, d), p = T[l], h.duration = +qe(_, r(o), l, p, T), h.delay = (+qe(m, r(o), l, p, T) || 0) - o._delay, !y && 1 === f && h.delay && (o._delay = m = h.delay, o._start += m, h.delay = 0), a.to(p, h, c(l, p, T))
                        }
                        a.duration() ? _ = m = 0 : o.timeline = 0
                    }
                    _ || o.duration(_ = a.duration())
                } else o.timeline = 0;
                return !0 === C && (Xe = r(o), u.killTweensOf(T), Xe = 0), b && Ut(b, r(o)), (v || !_ && !x && o._start === xt(b._time) && q(v) && function t(e) { return !e || e._ts && t(e.parent) }(r(o)) && "nested" !== b.data) && (o._tTime = -1e-8, o.render(Math.max(0, -m))), w && qt(r(o), w), o
            }
            i(e, t);
            var n = e.prototype;
            return n.render = function(t, e, n) {
                var r, i, u, s, o, a, l, h, f, D = this._time,
                    p = this._tDur,
                    c = this._dur,
                    d = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (c) {
                    if (d !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = d, h = this.timeline, this._repeat) {
                            if (s = c + this._rDelay, r = xt(d % s), d === p ? (u = this._repeat, r = c) : ((u = ~~(d / s)) && u === d / s && (r = c, u--), r > c && (r = c)), (a = this._yoyo && 1 & u) && (f = this._yEase, r = c - r), o = Yt(this._tTime, s), r === D && !n && this._initted) return this;
                            u !== o && (h && this._yEase && Pe(h, a), !this.vars.repeatRefresh || a || this._lock || (this._lock = n = 1, this.render(xt(s * u), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) { if (Gt(this, t < 0 ? t : r, n, e)) return this._tTime = 0, this; if (c !== this._dur) return this.render(t, e, n) }
                        for (this._tTime = d, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(r / c), this._from && (this.ratio = l = 1 - l), r && !D && !e && ce(this, "onStart"), i = this._pt; i;) i.r(l, i.d), i = i._next;
                        h && h.render(t < 0 ? t : !r && a ? -1e-8 : h._dur * l, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), ce(this, "onUpdate")), this._repeat && u !== o && this.vars.onRepeat && !e && this.parent && ce(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Nt(this, 1), e || t < 0 && !D || !d && !D || (ce(this, d === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < p && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(t, e, n, r) {
                    var i, u, s = t.ratio,
                        o = e < 0 || !e && s && !t._start && t._zTime > 1e-8 && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1,
                        a = t._rDelay,
                        l = 0;
                    if (a && t._repeat && (l = Jt(0, t._tDur, e), Yt(l, a) !== (u = Yt(t._tTime, a)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || r || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && Gt(t, e, r, n)) return;
                        for (u = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !u), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, n || ce(t, "onStart"), i = t._pt; i;) i.r(o, i.d), i = i._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && ce(t, "onUpdate"), l && t._repeat && !n && t.parent && ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Nt(t, 1), n || (ce(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, n);
                return this
            }, n.targets = function() { return this._targets }, n.invalidate = function() { return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this) }, n.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return de(this);
                if (this.timeline) { var n = this.timeline.totalDuration(); return this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || de(this), this.parent && n !== this.timeline.totalDuration() && Ht(this, this._dur * this.timeline._tDur / n, 0, 1), this }
                var r, i, u, s, o, a, l, h = this._targets,
                    f = t ? ie(t) : h,
                    D = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function(t, e) { for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];); return n < 0 }(h, f)) return "all" === e && (this._pt = 0), de(this);
                for (r = this._op = this._op || [], "all" !== e && (X(e) && (o = {}, Ct(e, (function(t) { return o[t] = 1 })), e = o), e = function(t, e) {
                        var n, r, i, u, s = t[0] ? vt(t[0]).harness : 0,
                            o = s && s.aliases;
                        if (!o) return e;
                        for (r in n = St({}, e), o)
                            if (r in n)
                                for (i = (u = o[r].split(",")).length; i--;) n[u[i]] = n[r];
                        return n
                    }(h, e)), l = h.length; l--;)
                    if (~f.indexOf(h[l]))
                        for (o in i = D[l], "all" === e ? (r[l] = e, s = i, u = {}) : (u = r[l] = r[l] || {}, s = e), s)(a = i && i[o]) && ("kill" in a.d && !0 !== a.d.kill(o) || Lt(this, a, "_pt"), delete i[o]), "all" !== u && (u[o] = 1);
                return this._initted && !this._pt && p && de(this), this
            }, e.to = function(t, n) { return new e(t, n, arguments[2]) }, e.from = function(t, n) { return new e(t, wt(arguments, 1)) }, e.delayedCall = function(t, n, r, i) { return new e(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: n, onReverseComplete: n, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i }) }, e.fromTo = function(t, n, r) { return new e(t, wt(arguments, 2)) }, e.set = function(t, n) { return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n) }, e.killTweensOf = function(t, e, n) { return u.killTweensOf(t, e, n) }, e
        }(ze);
    Mt(Qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Ct("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Qe[t] = function() {
            var e = new Ye,
                n = ee.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var Ke = function(t, e, n) { return t[e] = n },
        Ze = function(t, e, n) { return t[e](n) },
        $e = function(t, e, n, r) { return t[e](r.fp, n) },
        Je = function(t, e, n) { return t.setAttribute(e, n) },
        tn = function(t, e) { return j(t[e]) ? Ze : U(t[e]) && t.setAttribute ? Je : Ke },
        en = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e) },
        nn = function(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
        rn = function(t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        un = function(t, e) { for (var n = e._pt; n;) n.r(t, n.d), n = n._next },
        sn = function(t, e, n, r) { for (var i, u = this._pt; u;) i = u._next, u.p === r && u.modifier(t, e, n), u = i },
        on = function(t) { for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? Lt(this, r, "_pt") : r.dep || (e = 1), r = n; return !e },
        an = function(t, e, n, r) { r.mSet(t, e, r.m.call(r.tween, n, r.mt), r) },
        ln = function(t) {
            for (var e, n, r, i, u = t._pt; u;) {
                for (e = u._next, n = r; n && n.pr > u.pr;) n = n._next;
                (u._prev = n ? n._prev : i) ? u._prev._next = u: r = u, (u._next = n) ? n._prev = u : i = u, u = e
            }
            t._pt = r
        },
        hn = function() {
            function t(t, e, n, r, i, u, s, o, a) { this.t = e, this.s = r, this.c = i, this.p = n, this.r = u || en, this.d = s || this, this.set = o || Ke, this.pr = a || 0, this._next = t, t && (t._prev = this) }
            return t.prototype.modifier = function(t, e, n) { this.mSet = this.mSet || this.set, this.set = an, this.m = t, this.mt = n, this.tween = e }, t
        }();
    Ct(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) { return ht[t] = 1 })), rt.TweenMax = rt.TweenLite = Qe, rt.TimelineLite = rt.TimelineMax = Ye, u = new Ye({ sortChildren: !1, defaults: B, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 }), P.stringFilter = we;
    var fn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function(t) { return ge(t) }))
        },
        timeline: function(t) { return new Ye(t) },
        getTweensOf: function(t, e) { return u.getTweensOf(t, e) },
        getProperty: function(t, e, n, r) {
            X(t) && (t = ie(t)[0]);
            var i = vt(t || {}).get,
                u = n ? At : Tt;
            return "native" === n && (n = ""), t ? e ? u((pt[e] && pt[e].get || i)(t, e, n, r)) : function(e, n, r) { return u((pt[e] && pt[e].get || i)(t, e, n, r)) } : t
        },
        quickSetter: function(t, e, n) {
            if ((t = ie(t)).length > 1) {
                var r = t.map((function(t) { return cn.quickSetter(t, e, n) })),
                    i = r.length;
                return function(t) { for (var e = i; e--;) r[e](t) }
            }
            t = t[0] || {};
            var u = pt[e],
                s = vt(t),
                o = s.harness && (s.harness.aliases || {})[e] || e,
                a = u ? function(e) {
                    var r = new u;
                    f._pt = 0, r.init(t, n ? e + n : e, f, 0, [t]), r.render(1, r), f._pt && un(1, f)
                } : s.set(t, o);
            return u ? a : function(e) { return a(t, o, n ? e + n : e, s, 1) }
        },
        isTweening: function(t) { return u.getTweensOf(t, !0).length > 0 },
        defaults: function(t) { return t && t.ease && (t.ease = Be(t.ease, B.ease)), Pt(B, t || {}) },
        config: function(t) { return Pt(P, t || {}) },
        registerEffect: function(t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                u = t.extendTimeline;
            (r || "").split(",").forEach((function(t) { return t && !pt[t] && !rt[t] && ot(e + " effect requires " + t + " plugin.") })), ct[e] = function(t, e, r) { return n(ie(t), Mt(e || {}, i), r) }, u && (Ye.prototype[e] = function(t, n, r) { return this.add(ct[e](t, W(n) ? n : (r = n) && {}, this), r) })
        },
        registerEase: function(t, e) { Te[t] = Be(e) },
        parseEase: function(t, e) { return arguments.length ? Be(t, e) : Te },
        getById: function(t) { return u.getById(t) },
        exportRoot: function(t, e) { void 0 === t && (t = {}); var n, r, i = new Ye(t); for (i.smoothChildTiming = q(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, n = u._first; n;) r = n._next, !e && !n._dur && n instanceof Qe && n.vars.onComplete === n._targets[0] || Wt(i, n, n._start - n._delay), n = r; return Wt(u, i, 0), i },
        utils: {
            wrap: function t(e, n, r) { var i = n - e; return K(e) ? he(e, t(0, e.length), n) : $t(r, (function(t) { return (i + (t - e) % i) % i + e })) },
            wrapYoyo: function t(e, n, r) {
                var i = n - e,
                    u = 2 * i;
                return K(e) ? he(e, t(0, e.length - 1), n) : $t(r, (function(t) { return e + ((t = (u + (t - e) % u) % u || 0) > i ? u - t : t) }))
            },
            distribute: se,
            random: le,
            snap: ae,
            normalize: function(t, e, n) { return De(t, e, 0, 1, n) },
            getUnit: te,
            clamp: function(t, e, n) { return $t(n, (function(n) { return Jt(t, e, n) })) },
            splitColor: ve,
            toArray: ie,
            mapRange: De,
            pipe: function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return function(t) { return e.reduce((function(t, e) { return e(t) }), t) } },
            unitize: function(t, e) { return function(n) { return t(parseFloat(n)) + (e || te(n)) } },
            interpolate: function t(e, n, r, i) {
                var u = isNaN(e + n) ? 0 : function(t) { return (1 - t) * e + t * n };
                if (!u) {
                    var s, o, a, l, h, f = X(e),
                        D = {};
                    if (!0 === r && (i = 1) && (r = null), f) e = { p: e }, n = { p: n };
                    else if (K(e) && !K(n)) {
                        for (a = [], l = e.length, h = l - 2, o = 1; o < l; o++) a.push(t(e[o - 1], e[o]));
                        l--, u = function(t) { t *= l; var e = Math.min(h, ~~t); return a[e](t - e) }, r = n
                    } else i || (e = St(K(e) ? [] : {}, e));
                    if (!a) {
                        for (s in n) Ve.call(D, e, s, "get", n[s]);
                        u = function(t) { return un(t, D) || (f ? e.p : e) }
                    }
                }
                return $t(r, u)
            },
            shuffle: ue
        },
        install: ut,
        effects: ct,
        ticker: Ee,
        updateRoot: Ye.updateRoot,
        plugins: pt,
        globalTimeline: u,
        core: { PropTween: hn, globals: at, Tween: Qe, Timeline: Ye, Animation: ze, getCache: vt, _removeLinkedListItem: Lt }
    };
    Ct("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) { return fn[t] = Qe[t] })), Ee.add(Ye.updateRoot), f = fn.to({}, { duration: 0 });
    var Dn = function(t, e) { for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next; return n },
        pn = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, n, r) {
                    r._onInit = function(t) {
                        var r, i;
                        if (X(n) && (r = {}, Ct(n, (function(t) { return r[t] = 1 })), n = r), e) {
                            for (i in r = {}, n) r[i] = e(n[i]);
                            n = r
                        }! function(t, e) {
                            var n, r, i, u = t._targets;
                            for (n in e)
                                for (r = u.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Dn(i, n)), i && i.modifier && i.modifier(e[n], t, u[r], n))
                        }(t, n)
                    }
                }
            }
        },
        cn = fn.registerPlugin({ name: "attr", init: function(t, e, n, r, i) { var u, s; for (u in e)(s = this.add(t, "setAttribute", (t.getAttribute(u) || 0) + "", e[u], r, i, 0, 0, u)) && (s.op = u), this._props.push(u) } }, { name: "endArray", init: function(t, e) { for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n]) } }, pn("roundProps", oe), pn("modifiers"), pn("snap", ae)) || fn;
    Qe.version = Ye.version = cn.version = "3.5.1", l = 1, G() && be();
    Te.Power0, Te.Power1, Te.Power2, Te.Power3, Te.Power4, Te.Linear, Te.Quad, Te.Cubic, Te.Quart, Te.Quint, Te.Strong, Te.Elastic, Te.Back, Te.SteppedEase, Te.Bounce, Te.Sine, Te.Expo, Te.Circ;
    /*!
     * CSSPlugin 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var dn, gn, _n, mn, vn, yn, Cn, xn, Fn = {},
        wn = 180 / Math.PI,
        En = Math.PI / 180,
        bn = Math.atan2,
        Tn = /([A-Z])/g,
        An = /(?:left|right|width|margin|padding|x)/i,
        Mn = /[\s,\(]\S/,
        On = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
        Sn = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) },
        Pn = function(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e) },
        Bn = function(t, e) { return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e) },
        kn = function(t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        Ln = function(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) },
        Nn = function(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) },
        Rn = function(t, e, n) { return t.style[e] = n },
        In = function(t, e, n) { return t.style.setProperty(e, n) },
        zn = function(t, e, n) { return t._gsap[e] = n },
        Yn = function(t, e, n) { return t._gsap.scaleX = t._gsap.scaleY = n },
        Xn = function(t, e, n, r, i) {
            var u = t._gsap;
            u.scaleX = u.scaleY = n, u.renderTransform(i, u)
        },
        jn = function(t, e, n, r, i) {
            var u = t._gsap;
            u[e] = n, u.renderTransform(i, u)
        },
        Vn = "transform",
        Un = Vn + "Origin",
        Wn = function(t, e) { var n = gn.createElementNS ? gn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : gn.createElement(t); return n.style ? n : gn.createElement(t) },
        qn = function t(e, n, r) { var i = getComputedStyle(e); return i[n] || i.getPropertyValue(n.replace(Tn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Hn(n) || n, 1) || "" },
        Gn = "O,Moz,ms,Ms,Webkit".split(","),
        Hn = function(t, e, n) {
            var r = (e || vn).style,
                i = 5;
            if (t in r && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Gn[i] + t in r););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Gn[i] : "") + t
        },
        Qn = function() { "undefined" != typeof window && window.document && (dn = window, gn = dn.document, _n = gn.documentElement, vn = Wn("div") || { style: {} }, yn = Wn("div"), Vn = Hn(Vn), Un = Vn + "Origin", vn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", xn = !!Hn("perspective"), mn = 1) },
        Kn = function t(e) {
            var n, r = Wn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                u = this.nextSibling,
                s = this.style.cssText;
            if (_n.appendChild(r), r.appendChild(this), this.style.display = "block", e) try { n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return i && (u ? i.insertBefore(this, u) : i.appendChild(this)), _n.removeChild(r), this.style.cssText = s, n
        },
        Zn = function(t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        $n = function(t) { var e; try { e = t.getBBox() } catch (n) { e = Kn.call(t, !0) } return e && (e.width || e.height) || t.getBBox === Kn || (e = Kn.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +Zn(t, ["x", "cx", "x1"]) || 0, y: +Zn(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } },
        Jn = function(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !$n(t)) },
        tr = function(t, e) {
            if (e) {
                var n = t.style;
                e in Fn && e !== Un && (e = Vn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(Tn, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        er = function(t, e, n, r, i, u) { var s = new hn(t._pt, e, n, 0, 1, u ? Nn : Ln); return t._pt = s, s.b = r, s.e = i, t._props.push(n), s },
        nr = { deg: 1, rad: 1, turn: 1 },
        rr = function t(e, n, r, i) {
            var u, s, o, a, l = parseFloat(r) || 0,
                h = (r + "").trim().substr((l + "").length) || "px",
                f = vn.style,
                D = An.test(n),
                p = "svg" === e.tagName.toLowerCase(),
                c = (p ? "client" : "offset") + (D ? "Width" : "Height"),
                d = "px" === i,
                g = "%" === i;
            return i === h || !l || nr[i] || nr[h] ? l : ("px" !== h && !d && (l = t(e, n, r, "px")), a = e.getCTM && Jn(e), g && (Fn[n] || ~n.indexOf("adius")) ? xt(l / (a ? e.getBBox()[D ? "width" : "height"] : e[c]) * 100) : (f[D ? "width" : "height"] = 100 + (d ? h : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, a && (s = (e.ownerSVGElement || {}).parentNode), s && s !== gn && s.appendChild || (s = gn.body), (o = s._gsap) && g && o.width && D && o.time === Ee.time ? xt(l / o.width * 100) : ((g || "%" === h) && (f.position = qn(e, "position")), s === e && (f.position = "static"), s.appendChild(vn), u = vn[c], s.removeChild(vn), f.position = "absolute", D && g && ((o = vt(s)).time = Ee.time, o.width = s[c]), xt(d ? u * l / 100 : u && l ? 100 / u * l : 0))))
        },
        ir = function(t, e, n, r) { var i; return mn || Qn(), e in On && "transform" !== e && ~(e = On[e]).indexOf(",") && (e = e.split(",")[0]), Fn[e] && "transform" !== e ? (i = dr(t, r), i = "transformOrigin" !== e ? i[e] : gr(qn(t, Un)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = ar[e] && ar[e](t, e, n) || qn(t, e) || yt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").indexOf(" ") ? rr(t, e, i, n) + n : i },
        ur = function(t, e, n, r) {
            if (!n || "none" === n) {
                var i = Hn(e, t, 1),
                    u = i && qn(t, i, 1);
                u && u !== n ? (e = i, n = u) : "borderColor" === e && (n = qn(t, "borderTopColor"))
            }
            var s, o, a, l, h, f, D, p, c, d, g, _, m = new hn(this._pt, t.style, e, 0, 1, rn),
                v = 0,
                y = 0;
            if (m.b = n, m.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = qn(t, e) || r, t.style[e] = n), we(s = [n, r]), r = s[1], a = (n = s[0]).match(J) || [], (r.match(J) || []).length) {
                for (; o = J.exec(r);) D = o[0], c = r.substring(v, o.index), h ? h = (h + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (h = 1), D !== (f = a[y++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), (_ = "=" === D.charAt(1) ? +(D.charAt(0) + "1") : 0) && (D = D.substr(2)), p = parseFloat(D), d = D.substr((p + "").length), v = J.lastIndex - d.length, d || (d = d || P.units[e] || g, v === r.length && (r += d, m.e += d)), g !== d && (l = rr(t, e, f, d) || 0), m._pt = { _next: m._pt, p: c || 1 === y ? c : ",", s: l, c: _ ? _ * p : p - l, m: h && h < 4 ? Math.round : 0 });
                m.c = v < r.length ? r.substring(v, r.length) : ""
            } else m.r = "display" === e && "none" === r ? Nn : Ln;
            return et.test(r) && (m.e = 0), this._pt = m, m
        },
        sr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
        or = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, u = e.t,
                    s = u.style,
                    o = e.u,
                    a = u._gsap;
                if ("all" === o || !0 === o) s.cssText = "", r = 1;
                else
                    for (i = (o = o.split(",")).length; --i > -1;) n = o[i], Fn[n] && (r = 1, n = "transformOrigin" === n ? Un : Vn), tr(u, n);
                r && (tr(u, Vn), a && (a.svg && u.removeAttribute("transform"), dr(u, 1), a.uncache = 1))
            }
        },
        ar = { clearProps: function(t, e, n, r, i) { if ("isFromStart" !== i.data) { var u = t._pt = new hn(t._pt, e, n, 0, 0, or); return u.u = r, u.pr = -10, u.tween = i, t._props.push(n), 1 } } },
        lr = [1, 0, 0, 1, 0, 0],
        hr = {},
        fr = function(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t },
        Dr = function(t) { var e = qn(t, Vn); return fr(e) ? lr : e.substr(7).match($).map(xt) },
        pr = function(t, e) {
            var n, r, i, u, s = t._gsap || vt(t),
                o = t.style,
                a = Dr(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? lr : a : (a !== lr || t.offsetParent || t === _n || s.svg || (i = o.display, o.display = "block", (n = t.parentNode) && t.offsetParent || (u = 1, r = t.nextSibling, _n.appendChild(t)), a = Dr(t), i ? o.display = i : tr(t, "display"), u && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : _n.removeChild(t))), e && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
        },
        cr = function(t, e, n, r, i, u) {
            var s, o, a, l = t._gsap,
                h = i || pr(t, !0),
                f = l.xOrigin || 0,
                D = l.yOrigin || 0,
                p = l.xOffset || 0,
                c = l.yOffset || 0,
                d = h[0],
                g = h[1],
                _ = h[2],
                m = h[3],
                v = h[4],
                y = h[5],
                C = e.split(" "),
                x = parseFloat(C[0]) || 0,
                F = parseFloat(C[1]) || 0;
            n ? h !== lr && (o = d * m - g * _) && (a = x * (-g / o) + F * (d / o) - (d * y - g * v) / o, x = x * (m / o) + F * (-_ / o) + (_ * y - m * v) / o, F = a) : (x = (s = $n(t)).x + (~C[0].indexOf("%") ? x / 100 * s.width : x), F = s.y + (~(C[1] || C[0]).indexOf("%") ? F / 100 * s.height : F)), r || !1 !== r && l.smooth ? (v = x - f, y = F - D, l.xOffset = p + (v * d + y * _) - v, l.yOffset = c + (v * g + y * m) - y) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = F, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!n, t.style[Un] = "0px 0px", u && (er(u, l, "xOrigin", f, x), er(u, l, "yOrigin", D, F), er(u, l, "xOffset", p, l.xOffset), er(u, l, "yOffset", c, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + F)
        },
        dr = function(t, e) {
            var n = t._gsap || new Ie(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r, i, u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w, E, b, T, A, M, O, S, B, k, L, N = t.style,
                R = n.scaleX < 0,
                I = qn(t, Un) || "0";
            return r = i = u = a = l = h = f = D = p = 0, s = o = 1, n.svg = !(!t.getCTM || !Jn(t)), g = pr(t, n.svg), n.svg && (b = !n.uncache && t.getAttribute("data-svg-origin"), cr(t, b || I, !!b || n.originIsAbsolute, !1 !== n.smooth, g)), c = n.xOrigin || 0, d = n.yOrigin || 0, g !== lr && (y = g[0], C = g[1], x = g[2], F = g[3], r = w = g[4], i = E = g[5], 6 === g.length ? (s = Math.sqrt(y * y + C * C), o = Math.sqrt(F * F + x * x), a = y || C ? bn(C, y) * wn : 0, (f = x || F ? bn(x, F) * wn + a : 0) && (o *= Math.cos(f * En)), n.svg && (r -= c - (c * y + d * x), i -= d - (c * C + d * F))) : (L = g[6], B = g[7], M = g[8], O = g[9], S = g[10], k = g[11], r = g[12], i = g[13], u = g[14], l = (_ = bn(L, S)) * wn, _ && (b = w * (m = Math.cos(-_)) + M * (v = Math.sin(-_)), T = E * m + O * v, A = L * m + S * v, M = w * -v + M * m, O = E * -v + O * m, S = L * -v + S * m, k = B * -v + k * m, w = b, E = T, L = A), h = (_ = bn(-x, S)) * wn, _ && (m = Math.cos(-_), k = F * (v = Math.sin(-_)) + k * m, y = b = y * m - M * v, C = T = C * m - O * v, x = A = x * m - S * v), a = (_ = bn(C, y)) * wn, _ && (b = y * (m = Math.cos(_)) + C * (v = Math.sin(_)), T = w * m + E * v, C = C * m - y * v, E = E * m - w * v, y = b, w = T), l && Math.abs(l) + Math.abs(a) > 359.9 && (l = a = 0, h = 180 - h), s = xt(Math.sqrt(y * y + C * C + x * x)), o = xt(Math.sqrt(E * E + L * L)), _ = bn(w, E), f = Math.abs(_) > 2e-4 ? _ * wn : 0, p = k ? 1 / (k < 0 ? -k : k) : 0), n.svg && (b = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !fr(qn(t, Vn)), b && t.setAttribute("transform", b))), Math.abs(f) > 90 && Math.abs(f) < 270 && (R ? (s *= -1, f += a <= 0 ? 180 : -180, a += a <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), n.x = ((n.xPercent = r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", n.y = ((n.yPercent = i && Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", n.z = u + "px", n.scaleX = xt(s), n.scaleY = xt(o), n.rotation = xt(a) + "deg", n.rotationX = xt(l) + "deg", n.rotationY = xt(h) + "deg", n.skewX = f + "deg", n.skewY = D + "deg", n.transformPerspective = p + "px", (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (N[Un] = gr(I)), n.xOffset = n.yOffset = 0, n.force3D = P.force3D, n.renderTransform = n.svg ? yr : xn ? vr : mr, n.uncache = 0, n
        },
        gr = function(t) { return (t = t.split(" "))[0] + " " + t[1] },
        _r = function(t, e, n) { var r = te(e); return xt(parseFloat(e) + parseFloat(rr(t, "x", n + "px", r))) + r },
        mr = function(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, vr(t, e) },
        vr = function(t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                u = n.x,
                s = n.y,
                o = n.z,
                a = n.rotation,
                l = n.rotationY,
                h = n.rotationX,
                f = n.skewX,
                D = n.skewY,
                p = n.scaleX,
                c = n.scaleY,
                d = n.transformPerspective,
                g = n.force3D,
                _ = n.target,
                m = n.zOrigin,
                v = "",
                y = "auto" === g && t && 1 !== t || !0 === g;
            if (m && ("0deg" !== h || "0deg" !== l)) {
                var C, x = parseFloat(l) * En,
                    F = Math.sin(x),
                    w = Math.cos(x);
                x = parseFloat(h) * En, C = Math.cos(x), u = _r(_, u, F * C * -m), s = _r(_, s, -Math.sin(x) * -m), o = _r(_, o, w * C * -m + m)
            }
            "0px" !== d && (v += "perspective(" + d + ") "), (r || i) && (v += "translate(" + r + "%, " + i + "%) "), (y || "0px" !== u || "0px" !== s || "0px" !== o) && (v += "0px" !== o || y ? "translate3d(" + u + ", " + s + ", " + o + ") " : "translate(" + u + ", " + s + ") "), "0deg" !== a && (v += "rotate(" + a + ") "), "0deg" !== l && (v += "rotateY(" + l + ") "), "0deg" !== h && (v += "rotateX(" + h + ") "), "0deg" === f && "0deg" === D || (v += "skew(" + f + ", " + D + ") "), 1 === p && 1 === c || (v += "scale(" + p + ", " + c + ") "), _.style[Vn] = v || "translate(0, 0)"
        },
        yr = function(t, e) {
            var n, r, i, u, s, o = e || this,
                a = o.xPercent,
                l = o.yPercent,
                h = o.x,
                f = o.y,
                D = o.rotation,
                p = o.skewX,
                c = o.skewY,
                d = o.scaleX,
                g = o.scaleY,
                _ = o.target,
                m = o.xOrigin,
                v = o.yOrigin,
                y = o.xOffset,
                C = o.yOffset,
                x = o.forceCSS,
                F = parseFloat(h),
                w = parseFloat(f);
            D = parseFloat(D), p = parseFloat(p), (c = parseFloat(c)) && (p += c = parseFloat(c), D += c), D || p ? (D *= En, p *= En, n = Math.cos(D) * d, r = Math.sin(D) * d, i = Math.sin(D - p) * -g, u = Math.cos(D - p) * g, p && (c *= En, s = Math.tan(p - c), i *= s = Math.sqrt(1 + s * s), u *= s, c && (s = Math.tan(c), n *= s = Math.sqrt(1 + s * s), r *= s)), n = xt(n), r = xt(r), i = xt(i), u = xt(u)) : (n = d, u = g, r = i = 0), (F && !~(h + "").indexOf("px") || w && !~(f + "").indexOf("px")) && (F = rr(_, "x", h, "px"), w = rr(_, "y", f, "px")), (m || v || y || C) && (F = xt(F + m - (m * n + v * i) + y), w = xt(w + v - (m * r + v * u) + C)), (a || l) && (s = _.getBBox(), F = xt(F + a / 100 * s.width), w = xt(w + l / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + u + "," + F + "," + w + ")", _.setAttribute("transform", s), x && (_.style[Vn] = s)
        },
        Cr = function(t, e, n, r, i, u) {
            var s, o, a = X(i),
                l = parseFloat(i) * (a && ~i.indexOf("rad") ? wn : 1),
                h = u ? l * u : l - r,
                f = r + h + "deg";
            return a && ("short" === (s = i.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === s && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === s && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = o = new hn(t._pt, e, n, r, h, Pn), o.e = f, o.u = "deg", t._props.push(n), o
        },
        xr = function(t, e, n) {
            var r, i, u, s, o, a, l, h = yn.style,
                f = n._gsap;
            for (i in h.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", h[Vn] = e, gn.body.appendChild(yn), r = dr(yn, 1), Fn)(u = f[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = te(u) !== (l = te(s)) ? rr(n, i, u, l) : parseFloat(u), a = parseFloat(s), t._pt = new hn(t._pt, f, i, o, a - o, Sn), t._pt.u = l || 0, t._props.push(i));
            gn.body.removeChild(yn)
        };
    Ct("padding,margin,Width,Radius", (function(t, e) {
        var n = "Top",
            r = "Right",
            i = "Bottom",
            u = "Left",
            s = (e < 3 ? [n, r, i, u] : [n + u, n + r, i + r, i + u]).map((function(n) { return e < 2 ? t + n : "border" + n + t }));
        ar[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
            var u, o;
            if (arguments.length < 4) return u = s.map((function(e) { return ir(t, e, n) })), 5 === (o = u.join(" ")).split(u[0]).length ? u[0] : o;
            u = (r + "").split(" "), o = {}, s.forEach((function(t, e) { return o[t] = u[e] = u[e] || u[(e - 1) / 2 | 0] })), t.init(e, o, i)
        }
    }));
    var Fr, wr, Er = {
        name: "css",
        register: Qn,
        targetTest: function(t) { return t.style && t.nodeType },
        init: function(t, e, n, r, i) {
            var u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w = this._props,
                E = t.style;
            for (f in mn || Qn(), e)
                if ("autoRound" !== f && (s = e[f], !pt[f] || !Ue(f, e, n, r, t, i)))
                    if (l = typeof s, h = ar[f], "function" === l && (l = typeof(s = s.call(n, r, t, i))), "string" === l && ~s.indexOf("random(") && (s = fe(s)), h) h(this, t, f, s, n) && (v = 1);
                    else if ("--" === f.substr(0, 2)) this.add(E, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", r, i, 0, 0, f);
            else if ("undefined" !== l) {
                if (u = ir(t, f), a = parseFloat(u), (c = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in On && ("autoAlpha" === f && (1 === a && "hidden" === ir(t, "visibility") && o && (a = 0), er(this, E, "visibility", a ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = On[f]).indexOf(",") && (f = f.split(",")[0])), d = f in Fn)
                    if (g || ((_ = t._gsap).renderTransform || dr(t), m = !1 !== e.smoothOrigin && _.smooth, (g = this._pt = new hn(this._pt, E, Vn, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === f) this._pt = new hn(this._pt, _, "scaleY", _.scaleY, c ? c * o : o - _.scaleY), w.push("scaleY", f), f += "X";
                    else { if ("transformOrigin" === f) { C = void 0, x = void 0, F = void 0, C = (y = s).split(" "), x = C[0], F = C[1] || "50%", "top" !== x && "bottom" !== x && "left" !== F && "right" !== F || (y = x, x = F, F = y), C[0] = sr[x] || x, C[1] = sr[F] || F, s = C.join(" "), _.svg ? cr(t, s, 0, m, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== _.zOrigin && er(this, _, "zOrigin", _.zOrigin, p), er(this, E, f, gr(u), gr(s))); continue } if ("svgOrigin" === f) { cr(t, s, 1, m, 0, this); continue } if (f in hr) { Cr(this, _, f, a, s, c); continue } if ("smoothOrigin" === f) { er(this, _, "smooth", _.smooth, s); continue } if ("force3D" === f) { _[f] = s; continue } if ("transform" === f) { xr(this, s, t); continue } }
                else f in E || (f = Hn(f) || f);
                if (d || (o || 0 === o) && (a || 0 === a) && !Mn.test(s) && f in E) o || (o = 0), (D = (u + "").substr((a + "").length)) !== (p = te(s) || (f in P.units ? P.units[f] : D)) && (a = rr(t, f, u, p)), this._pt = new hn(this._pt, d ? _ : E, f, a, c ? c * o : o - a, "px" !== p || !1 === e.autoRound || d ? Sn : kn), this._pt.u = p || 0, D !== p && (this._pt.b = u, this._pt.r = Bn);
                else if (f in E) ur.call(this, t, f, u, s);
                else {
                    if (!(f in t)) { st(f, s); continue }
                    this.add(t, f, t[f], s, r, i)
                }
                w.push(f)
            }
            v && ln(this)
        },
        get: ir,
        aliases: On,
        getSetter: function(t, e, n) { var r = On[e]; return r && r.indexOf(",") < 0 && (e = r), e in Fn && e !== Un && (t._gsap.x || ir(t, "x")) ? n && Cn === n ? "scale" === e ? Yn : zn : (Cn = n || {}) && ("scale" === e ? Xn : jn) : t.style && !U(t.style[e]) ? Rn : ~e.indexOf("-") ? In : tn(t, e) },
        core: { _removeProperty: tr, _getMatrix: pr }
    };
    cn.utils.checkPrefix = Hn, wr = Ct("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Fr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) { Fn[t] = 1 })), Ct(Fr, (function(t) { P.units[t] = "deg", hr[t] = 1 })), On[wr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Fr, Ct("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        On[e[1]] = wr[e[0]]
    })), Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) { P.units[t] = "px" })), cn.registerPlugin(Er);
    var br, Tr, Ar, Mr = cn.registerPlugin(Er) || cn,
        Or = Mr.core.Tween,
        Sr = function() { return br || "undefined" != typeof window && (br = window.gsap) && br.registerPlugin && br },
        Pr = function(t) { br = Sr(), (Ar = br && br.parseEase("_CE")) ? (Tr = 1, br.parseEase("bounce").config = function(t) { return "object" == typeof t ? kr("", t) : kr("bounce(" + t + ")", { strength: +t }) }) : t && console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)") },
        Br = function(t) {
            var e, n = t.length,
                r = 1 / t[n - 2];
            for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * r * 1e3) / 1e3;
            t[n - 2] = 1
        },
        kr = function(t, e) {
            Tr || Pr(1), e = e || {};
            var n, r, i, u, s, o, a, l = Math.min(.999, e.strength || .7),
                h = l,
                f = (e.squash || 0) / 100,
                D = f,
                p = 1 / .03,
                c = .2,
                d = 1,
                g = .1,
                _ = [0, 0, .07, 0, .1, 1, .1, 1],
                m = [0, 0, 0, 0, .1, 0, .1, 0];
            for (s = 0; s < 200 && (o = g + (c *= h * ((h + 1) / 2)), u = 1 - (d *= l * l), r = (i = g + .49 * c) + .8 * (i - (n = g + d / p)), f && (g += f, n += f, i += f, r += f, o += f, a = f / D, m.push(g - f, 0, g - f, a, g - f / 2, a, g, a, g, 0, g, 0, g, -.6 * a, g + (o - g) / 6, 0, o, 0), _.push(g - f, 1, g, 1, g, 1), f *= l * l), _.push(g, 1, n, u, i, u, r, u, o, 1, o, 1), l *= .95, p = d / (o - r), g = o, !(u > .999)); s++);
            if (e.endAtStart && "false" !== e.endAtStart) {
                if (i = -.1, _.unshift(i, 1, i, 1, -.07, 0), D)
                    for (i -= f = 2.5 * D, _.unshift(i, 1, i, 1, i, 1), m.splice(0, 6), m.unshift(i, 0, i, 0, i, 1, i + f / 2, 1, i + f, 1, i + f, 0, i + f, 0, i + f, -.6, i + f + .033, 0), s = 0; s < m.length; s += 2) m[s] -= i;
                for (s = 0; s < _.length; s += 2) _[s] -= i, _[s + 1] = 1 - _[s + 1]
            }
            return f && (Br(m), m[2] = "C" + m[2], Ar(e.squashID || t + "-squash", "M" + m.join(","))), Br(_), _[2] = "C" + _[2], Ar(t, "M" + _.join(","))
        },
        Lr = function() {
            function t(t, e) { this.ease = kr(t, e) }
            return t.create = function(t, e) { return kr(t, e) }, t.register = function(t) { br = t, Pr() }, t
        }();
    /*!
     * CustomBounce 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Sr() && br.registerPlugin(Lr), Lr.version = "3.5.1";
    /*!
     * paths 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Nr = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Rr = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Ir = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        zr = /(^[#\.][a-z]|[a-y][a-z])/i,
        Yr = Math.PI / 180,
        Xr = 180 / Math.PI,
        jr = Math.sin,
        Vr = Math.cos,
        Ur = Math.abs,
        Wr = Math.sqrt,
        qr = Math.atan2,
        Gr = function(t) { return "string" == typeof t },
        Hr = function(t) { return "number" == typeof t },
        Qr = {},
        Kr = {},
        Zr = function(t) { return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1) },
        $r = function(t) { return Math.round(1e5 * t) / 1e5 || 0 },
        Jr = function(t, e, n, r) {
            var i = t[e],
                u = 1 === r ? 6 : hi(i, n, r);
            if (u && u + n + 2 < i.length) return t.splice(e, 0, i.slice(0, n + u + 2)), i.splice(0, n + u), 1
        },
        ti = function(t, e) { return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : e.totalPoints = t.totalPoints, e },
        ei = function(t, e) {
            var n = t.length,
                r = t[n - 1] || [],
                i = r.length;
            e[0] === r[i - 2] && e[1] === r[i - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e
        };

    function ni(t) { var e, n = (t = Gr(t) && zr.test(t) && document.querySelector(t) || t).getAttribute ? t : 0; return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = di(t)) : t ? Gr(t) ? di(t) : Hr(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string") }

    function ri(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2) e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var ii = { rect: "rx,ry,x,y,width,height", circle: "r,cx,cy", ellipse: "rx,ry,cx,cy", line: "x1,x2,y1,y2" };

    function ui(t, e) {
        var n, r, i, u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y, C, x, F, w = t.tagName.toLowerCase(),
            E = .552284749831;
        return "path" !== w && t.getBBox ? (o = function(t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                i = [].slice.call(t.attributes),
                u = i.length;
            for (e = "," + e + ","; --u > -1;) n = i[u].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[u].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), F = function(t, e) { for (var n = e ? e.split(",") : [], r = {}, i = n.length; --i > -1;) r[n[i]] = +t.getAttribute(n[i]) || 0; return r }(t, ii[w]), "rect" === w ? (u = F.rx, s = F.ry || u, r = F.x, i = F.y, f = F.width - 2 * u, D = F.height - 2 * s, n = u || s ? "M" + (_ = (d = (c = r + u) + f) + u) + "," + (v = i + s) + " V" + (y = v + D) + " C" + [_, C = y + s * E, g = d + u * E, x = y + s, d, x, d - (d - c) / 3, x, c + (d - c) / 3, x, c, x, p = r + u * (1 - E), x, r, C, r, y, r, y - (y - v) / 3, r, v + (y - v) / 3, r, v, r, m = i + s * (1 - E), p, i, c, i, c + (d - c) / 3, i, d - (d - c) / 3, i, d, i, g, i, _, m, _, v].join(",") + "z" : "M" + (r + f) + "," + i + " v" + D + " h" + -f + " v" + -D + " h" + f + "z") : "circle" === w || "ellipse" === w ? ("circle" === w ? l = (u = s = F.r) * E : (u = F.rx, l = (s = F.ry) * E), n = "M" + ((r = F.cx) + u) + "," + (i = F.cy) + " C" + [r + u, i + l, r + (a = u * E), i + s, r, i + s, r - a, i + s, r - u, i + l, r - u, i, r - u, i - l, r - a, i - s, r, i - s, r + a, i - s, r + u, i - l, r + u, i].join(",") + "z") : "line" === w ? n = "M" + F.x1 + "," + F.y1 + " L" + F.x2 + "," + F.y2 : "polyline" !== w && "polygon" !== w || (n = "M" + (r = (h = (t.getAttribute("points") + "").match(Rr) || []).shift()) + "," + (i = h.shift()) + " L" + h.join(","), "polygon" === w && (n += "," + r + "," + i + "z")), o.setAttribute("d", mi(o._gsRawPath = di(n))), e && t.parentNode && (t.parentNode.insertBefore(o, t), t.parentNode.removeChild(t)), o) : t
    }

    function si(t, e, n) {
        var r, i = t[e],
            u = t[e + 2],
            s = t[e + 4];
        return i += (u - i) * n, i += ((u += (s - u) * n) - i) * n, r = u + (s + (t[e + 6] - s) * n - u) * n - i, i = t[e + 1], i += ((u = t[e + 3]) - i) * n, i += ((u += ((s = t[e + 5]) - u) * n) - i) * n, $r(qr(u + (s + (t[e + 7] - s) * n - u) * n - i, r) * Xr)
    }

    function oi(t, e, n) {
        void 0 === n && (n = 1);
        var r = (e = e || 0) > n,
            i = Math.max(0, ~~(Ur(n - e) - 1e-8));
        if (r && (r = n, n = e, e = r, r = 1, i -= i ? 1 : 0), e < 0 || n < 0) {
            var u = 1 + ~~Math.min(e, n);
            e += u, n += u
        }
        var s, o, a, l, h, f, D, p = function(t) { for (var e = [], n = 0; n < t.length; n++) e[n] = ti(t[n], t[n].slice(0)); return ti(t, e) }(t.totalLength ? t : li(t)),
            c = n > 1,
            d = fi(p, e, Qr, !0),
            g = fi(p, n, Kr),
            _ = g.segment,
            m = d.segment,
            v = g.segIndex,
            y = d.segIndex,
            C = g.i,
            x = d.i,
            F = y === v,
            w = C === x && F,
            E = F && x > C || w && d.t > g.t;
        if (c || i) {
            if (Jr(p, y, x, d.t) && (s = 1, y++, w ? E ? g.t /= d.t : (g.t = (g.t - d.t) / (1 - d.t), v++, C = 0) : y <= v + 1 && !E && (v++, F && (C -= x))), g.t ? Jr(p, v, C, g.t) && (E && s && y++, r && v++) : (v--, r && y--), l = [], f = 1 + (h = p.length) * i, D = y, r)
                for (f += (h - (v = (v || h) - 1) + y) % h, a = 0; a < f; a++) ei(l, p[D]), D = (D || h) - 1;
            else
                for (f += (h - y + v) % h, a = 0; a < f; a++) ei(l, p[D++ % h]);
            p = l
        } else if (o = 1 === g.t ? 6 : hi(_, C, g.t), e !== n)
            for (s = hi(m, x, w ? d.t / g.t : d.t), F && (o += s), _.splice(C + o + 2), (s || x) && m.splice(0, x + s), a = p.length; a--;)(a < y || a > v) && p.splice(a, 1);
        else _.angle = si(_, C + o, 0), d = _[C += o], g = _[C + 1], _.length = _.totalLength = 0, _.totalPoints = p.totalPoints = 8, _.push(d, g, d, g, d, g, d, g);
        return r && function(t, e) { var n = t.length; for (e || t.reverse(); n--;) t[n].reversed || ri(t[n]) }(p, c || i), p.totalLength = 0, p
    }

    function ai(t, e, n) {
        e = e || 0, t.samples || (t.samples = [], t.lookup = []);
        var r, i, u, s, o, a, l, h, f, D, p, c, d, g, _, m, v, y = ~~t.resolution || 12,
            C = 1 / y,
            x = n ? e + 6 * n + 1 : t.length,
            F = t[e],
            w = t[e + 1],
            E = e ? e / 6 * y : 0,
            b = t.samples,
            T = t.lookup,
            A = (e ? t.minLength : 1e8) || 1e8,
            M = b[E + n * y - 1],
            O = e ? b[E - 1] : 0;
        for (b.length = T.length = 0, i = e + 2; i < x; i += 6) {
            if (u = t[i + 4] - F, s = t[i + 2] - F, o = t[i] - F, h = t[i + 5] - w, f = t[i + 3] - w, D = t[i + 1] - w, a = l = p = c = 0, Ur(u) < 1e-5 && Ur(h) < 1e-5 && Ur(o) + Ur(D) < 1e-5) t.length > 8 && (t.splice(i, 6), i -= 6, x -= 6);
            else
                for (r = 1; r <= y; r++) a = l - (l = ((g = C * r) * g * u + 3 * (d = 1 - g) * (g * s + d * o)) * g), p = c - (c = (g * g * h + 3 * d * (g * f + d * D)) * g), (m = Wr(p * p + a * a)) < A && (A = m), O += m, b[E++] = O;
            F += u, w += h
        }
        if (M)
            for (M -= O; E < b.length; E++) b[E] += M;
        if (b.length && A)
            for (t.totalLength = v = b[b.length - 1] || 0, t.minLength = A, m = _ = 0, r = 0; r < v; r += A) T[m++] = b[_] < r ? ++_ : _;
        else t.totalLength = b[0] = 0;
        return e ? O - b[e / 2 - 1] : O
    }

    function li(t, e) { var n, r, i; for (i = n = r = 0; i < t.length; i++) t[i].resolution = ~~e || 12, r += t[i].length, n += ai(t[i]); return t.totalPoints = r, t.totalLength = n, t }

    function hi(t, e, n) {
        if (n <= 0 || n >= 1) return 0;
        var r = t[e],
            i = t[e + 1],
            u = t[e + 2],
            s = t[e + 3],
            o = t[e + 4],
            a = t[e + 5],
            l = r + (u - r) * n,
            h = u + (o - u) * n,
            f = i + (s - i) * n,
            D = s + (a - s) * n,
            p = l + (h - l) * n,
            c = f + (D - f) * n,
            d = o + (t[e + 6] - o) * n,
            g = a + (t[e + 7] - a) * n;
        return h += (d - h) * n, D += (g - D) * n, t.splice(e + 2, 4, $r(l), $r(f), $r(p), $r(c), $r(p + (h - p) * n), $r(c + (D - c) * n), $r(h), $r(D), $r(d), $r(g)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
    }

    function fi(t, e, n, r) {
        n = n || {}, t.totalLength || li(t), (e < 0 || e > 1) && (e = Zr(e));
        var i, u, s, o, a, l, h, f = 0,
            D = t[0];
        if (t.length > 1) {
            for (s = t.totalLength * e, a = l = 0;
                (a += t[l++].totalLength) < s;) f = l;
            e = (s - (o = a - (D = t[f]).totalLength)) / (a - o) || 0
        }
        return i = D.samples, u = D.resolution, s = D.totalLength * e, o = (l = D.lookup[~~(s / D.minLength)] || 0) ? i[l - 1] : 0, (a = i[l]) < s && (o = a, a = i[++l]), h = 1 / u * ((s - o) / (a - o) + l % u), l = 6 * ~~(l / u), r && 1 === h && (l + 6 < D.length ? (l += 6, h = 0) : f + 1 < t.length && (l = h = 0, D = t[++f])), n.t = h, n.i = l, n.path = t, n.segment = D, n.segIndex = f, n
    }

    function Di(t, e, n, r) {
        var i, u, s, o, a, l, h, f, D, p = t[0],
            c = r || {};
        if ((e < 0 || e > 1) && (e = Zr(e)), t.length > 1) {
            for (s = t.totalLength * e, a = l = 0;
                (a += t[l++].totalLength) < s;) p = t[l];
            e = (s - (o = a - p.totalLength)) / (a - o) || 0
        }
        return i = p.samples, u = p.resolution, s = p.totalLength * e, o = (l = p.lookup[~~(s / p.minLength)] || 0) ? i[l - 1] : 0, (a = i[l]) < s && (o = a, a = i[++l]), D = 1 - (h = 1 / u * ((s - o) / (a - o) + l % u) || 0), f = p[l = 6 * ~~(l / u)], c.x = $r((h * h * (p[l + 6] - f) + 3 * D * (h * (p[l + 4] - f) + D * (p[l + 2] - f))) * h + f), c.y = $r((h * h * (p[l + 7] - (f = p[l + 1])) + 3 * D * (h * (p[l + 5] - f) + D * (p[l + 3] - f))) * h + f), n && (c.angle = p.totalLength ? si(p, l, h >= 1 ? 1 - 1e-9 : h || 1e-9) : p.angle || 0), c
    }

    function pi(t, e, n, r, i, u, s) {
        for (var o, a, l, h, f, D = t.length; --D > -1;)
            for (a = (o = t[D]).length, l = 0; l < a; l += 2) h = o[l], f = o[l + 1], o[l] = h * e + f * r + u, o[l + 1] = h * n + f * i + s;
        return t._dirty = 1, t
    }

    function ci(t, e, n, r, i, u, s, o, a) {
        if (t !== o || e !== a) {
            n = Ur(n), r = Ur(r);
            var l = i % 360 * Yr,
                h = Vr(l),
                f = jr(l),
                D = Math.PI,
                p = 2 * D,
                c = (t - o) / 2,
                d = (e - a) / 2,
                g = h * c + f * d,
                _ = -f * c + h * d,
                m = g * g,
                v = _ * _,
                y = m / (n * n) + v / (r * r);
            y > 1 && (n = Wr(y) * n, r = Wr(y) * r);
            var C = n * n,
                x = r * r,
                F = (C * x - C * v - x * m) / (C * v + x * m);
            F < 0 && (F = 0);
            var w = (u === s ? -1 : 1) * Wr(F),
                E = w * (n * _ / r),
                b = w * (-r * g / n),
                T = (t + o) / 2 + (h * E - f * b),
                A = (e + a) / 2 + (f * E + h * b),
                M = (g - E) / n,
                O = (_ - b) / r,
                S = (-g - E) / n,
                P = (-_ - b) / r,
                B = M * M + O * O,
                k = (O < 0 ? -1 : 1) * Math.acos(M / Wr(B)),
                L = (M * P - O * S < 0 ? -1 : 1) * Math.acos((M * S + O * P) / Wr(B * (S * S + P * P)));
            isNaN(L) && (L = D), !s && L > 0 ? L -= p : s && L < 0 && (L += p), k %= p, L %= p;
            var N, R = Math.ceil(Ur(L) / (p / 4)),
                I = [],
                z = L / R,
                Y = 4 / 3 * jr(z / 2) / (1 + Vr(z / 2)),
                X = h * n,
                j = f * n,
                V = f * -r,
                U = h * r;
            for (N = 0; N < R; N++) g = Vr(i = k + N * z), _ = jr(i), M = Vr(i += z), O = jr(i), I.push(g - Y * _, _ + Y * g, M + Y * O, O - Y * M, M, O);
            for (N = 0; N < I.length; N += 2) g = I[N], _ = I[N + 1], I[N] = g * X + _ * V + T, I[N + 1] = g * j + _ * U + A;
            return I[N - 2] = o, I[N - 1] = a, I
        }
    }

    function di(t) {
        var e, n, r, i, u, s, o, a, l, h, f, D, p, c, d, g = (t + "").replace(Ir, (function(t) { var e = +t; return e < 1e-4 && e > -1e-4 ? 0 : e })).match(Nr) || [],
            _ = [],
            m = 0,
            v = 0,
            y = g.length,
            C = 0,
            x = "ERROR: malformed path: " + t,
            F = function(t, e, n, r) { h = (n - t) / 3, f = (r - e) / 3, o.push(t + h, e + f, n - h, r - f, n, r) };
        if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), _;
        for (e = 0; e < y; e++)
            if (p = u, isNaN(g[e]) ? s = (u = g[e].toUpperCase()) !== g[e] : e--, r = +g[e + 1], i = +g[e + 2], s && (r += m, i += v), e || (a = r, l = i), "M" === u) o && (o.length < 8 ? _.length -= 1 : C += o.length), m = a = r, v = l = i, o = [r, i], _.push(o), e += 2, u = "L";
            else if ("C" === u) o || (o = [0, 0]), s || (m = v = 0), o.push(r, i, m + 1 * g[e + 3], v + 1 * g[e + 4], m += 1 * g[e + 5], v += 1 * g[e + 6]), e += 6;
        else if ("S" === u) h = m, f = v, "C" !== p && "S" !== p || (h += m - o[o.length - 4], f += v - o[o.length - 3]), s || (m = v = 0), o.push(h, f, r, i, m += 1 * g[e + 3], v += 1 * g[e + 4]), e += 4;
        else if ("Q" === u) h = m + 2 / 3 * (r - m), f = v + 2 / 3 * (i - v), s || (m = v = 0), m += 1 * g[e + 3], v += 1 * g[e + 4], o.push(h, f, m + 2 / 3 * (r - m), v + 2 / 3 * (i - v), m, v), e += 4;
        else if ("T" === u) h = m - o[o.length - 4], f = v - o[o.length - 3], o.push(m + h, v + f, r + 2 / 3 * (m + 1.5 * h - r), i + 2 / 3 * (v + 1.5 * f - i), m = r, v = i), e += 2;
        else if ("H" === u) F(m, v, m = r, v), e += 1;
        else if ("V" === u) F(m, v, m, v = r + (s ? v - m : 0)), e += 1;
        else if ("L" === u || "Z" === u) "Z" === u && (r = a, i = l, o.closed = !0), ("L" === u || Ur(m - r) > .5 || Ur(v - i) > .5) && (F(m, v, r, i), "L" === u && (e += 2)), m = r, v = i;
        else if ("A" === u) {
            if (c = g[e + 4], d = g[e + 5], h = g[e + 6], f = g[e + 7], n = 7, c.length > 1 && (c.length < 3 ? (f = h, h = d, n--) : (f = d, h = c.substr(2), n -= 2), d = c.charAt(1), c = c.charAt(0)), D = ci(m, v, +g[e + 1], +g[e + 2], +g[e + 3], +c, +d, (s ? m : 0) + 1 * h, (s ? v : 0) + 1 * f), e += n, D)
                for (n = 0; n < D.length; n++) o.push(D[n]);
            m = o[o.length - 2], v = o[o.length - 1]
        } else console.log(x);
        return (e = o.length) < 6 ? (_.pop(), e = 0) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), _.totalPoints = C + e, _
    }

    function gi(t, e) { void 0 === e && (e = 1); for (var n = t[0], r = 0, i = [n, r], u = 2; u < t.length; u += 2) i.push(n, r, t[u], r = (t[u] - n) * e / 2, n = t[u], -r); return i }

    function _i(t, e, n) {
        var r, i, u, s, o, a, l, h, f, D, p, c, d, g, _ = t.length - 2,
            m = +t[0],
            v = +t[1],
            y = +t[2],
            C = +t[3],
            x = [m, v, m, v],
            F = y - m,
            w = C - v,
            E = Math.abs(t[_] - m) < .001 && Math.abs(t[_ + 1] - v) < .001;
        for (isNaN(n) && (n = Math.PI / 10), E && (t.push(y, C), y = m, C = v, m = t[_ - 2], v = t[_ - 1], t.unshift(m, v), _ += 4), e = e || 0 === e ? +e : 1, o = 2; o < _; o += 2) r = m, i = v, m = y, v = C, c = (a = F) * a + (h = w) * h, d = (F = (y = +t[o + 2]) - m) * F + (w = (C = +t[o + 3]) - v) * w, g = (l = y - r) * l + (f = C - i) * f, p = (u = Math.acos((c + d - g) / Wr(4 * c * d))) / Math.PI * e, D = Wr(c) * p, p *= Wr(d), m === r && v === i || (u > n ? (s = qr(f, l), x.push($r(m - Vr(s) * D), $r(v - jr(s) * D), $r(m), $r(v), $r(m + Vr(s) * p), $r(v + jr(s) * p))) : (s = qr(h, a), x.push($r(m - Vr(s) * D), $r(v - jr(s) * D)), s = qr(w, F), x.push($r(m), $r(v), $r(m + Vr(s) * p), $r(v + jr(s) * p))));
        return x.push($r(y), $r(C), $r(y), $r(C)), E && (x.splice(0, 6), x.length = x.length - 6), x
    }

    function mi(t) {
        Hr(t[0]) && (t = [t]);
        var e, n, r, i, u = "",
            s = t.length;
        for (n = 0; n < s; n++) {
            for (i = t[n], u += "M" + $r(i[0]) + "," + $r(i[1]) + " C", e = i.length, r = 2; r < e; r++) u += $r(i[r++]) + "," + $r(i[r++]) + " " + $r(i[r++]) + "," + $r(i[r++]) + " " + $r(i[r++]) + "," + $r(i[r]) + " ";
            i.closed && (u += "z")
        }
        return u
    }
    /*!
     * CustomEase 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var vi, yi, Ci = function() { return vi || "undefined" != typeof window && (vi = window.gsap) && vi.registerPlugin && vi },
        xi = function() {
            (vi = Ci()) ? (vi.registerEase("_CE", Ti.create), yi = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        Fi = function(t) { return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3 },
        wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        Ei = /[cLlsSaAhHvVtTqQ]/g,
        bi = function t(e, n, r, i, u, s, o, a, l, h, f) {
            var D, p = (e + r) / 2,
                c = (n + i) / 2,
                d = (r + u) / 2,
                g = (i + s) / 2,
                _ = (u + o) / 2,
                m = (s + a) / 2,
                v = (p + d) / 2,
                y = (c + g) / 2,
                C = (d + _) / 2,
                x = (g + m) / 2,
                F = (v + C) / 2,
                w = (y + x) / 2,
                E = o - e,
                b = a - n,
                T = Math.abs((r - o) * b - (i - a) * E),
                A = Math.abs((u - o) * b - (s - a) * E);
            return h || (h = [{ x: e, y: n }, { x: o, y: a }], f = 1), h.splice(f || h.length - 1, 0, { x: F, y: w }), (T + A) * (T + A) > l * (E * E + b * b) && (D = h.length, t(e, n, p, c, v, y, F, w, l, h, f), t(F, w, C, x, _, m, o, a, l, h, f + 1 + (h.length - D))), h
        },
        Ti = function() {
            function t(t, e, n) { yi || xi(), this.id = t, this.setData(e, n) }
            var e = t.prototype;
            return e.setData = function(t, e) {
                e = e || {};
                var n, r, i, u, s, o, a, l, h, f = (t = t || "0,0,1,1").match(wi),
                    D = 1,
                    p = [],
                    c = [],
                    d = e.precision || 1,
                    g = d <= 1;
                if (this.data = t, (Ei.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (f = di(t)[0]), 4 === (n = f.length)) f.unshift(0, 0), f.push(1, 1), n = 8;
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (0 == +f[0] && 1 == +f[n - 2] || function(t, e, n) {
                        n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                        var r, i = -1 * +t[0],
                            u = -n,
                            s = t.length,
                            o = 1 / (+t[s - 2] + i),
                            a = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function(t) {
                                var e, n = t.length,
                                    r = 1e20;
                                for (e = 1; e < n; e += 6) + t[e] < r && (r = +t[e]);
                                return r
                            }(t) + u : +t[s - 1] + u);
                        for (a = a ? 1 / a : -o, r = 0; r < s; r += 2) t[r] = (+t[r] + i) * o, t[r + 1] = (+t[r + 1] + u) * a
                    }(f, e.height, e.originY), this.segment = f, u = 2; u < n; u += 6) r = { x: +f[u - 2], y: +f[u - 1] }, i = { x: +f[u + 4], y: +f[u + 5] }, p.push(r, i), bi(r.x, r.y, +f[u], +f[u + 1], +f[u + 2], +f[u + 3], i.x, i.y, 1 / (2e5 * d), p, p.length - 1);
                for (n = p.length, u = 0; u < n; u++) a = p[u], l = p[u - 1] || a, (a.x > l.x || l.y !== a.y && l.x === a.x || a === l) && a.x <= 1 ? (l.cx = a.x - l.x, l.cy = a.y - l.y, l.n = a, l.nx = a.x, g && u > 1 && Math.abs(l.cy / l.cx - p[u - 2].cy / p[u - 2].cx) > 2 && (g = 0), l.cx < D && (l.cx ? D = l.cx : (l.cx = .001, u === n - 1 && (l.x -= .001, D = Math.min(D, .001), g = 0)))) : (p.splice(u--, 1), n--);
                if (s = 1 / (n = 1 / D + 1 | 0), o = 0, a = p[0], g) {
                    for (u = 0; u < n; u++) h = u * s, a.nx < h && (a = p[++o]), r = a.y + (h - a.x) / a.cx * a.cy, c[u] = { x: h, cx: s, y: r, cy: 0, nx: 9 }, u && (c[u - 1].cy = r - c[u - 1].y);
                    c[n - 1].cy = p[p.length - 1].y - r
                } else {
                    for (u = 0; u < n; u++) a.nx < u * s && (a = p[++o]), c[u] = a;
                    o < p.length - 1 && (c[u - 1] = p[p.length - 2])
                }
                return this.ease = function(t) { var e = c[t * n | 0] || c[n - 1]; return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy }, this.ease.custom = this, this.id && vi.registerEase(this.id, this.ease), this
            }, e.getSVGData = function(e) { return t.getSVGData(this, e) }, t.create = function(e, n, r) { return new t(e, n, r).ease }, t.register = function(t) { vi = t, xi() }, t.get = function(t) { return vi.parseEase(t) }, t.getSVGData = function(e, n) {
                var r, i, u, s, o, a, l, h, f, D, p = (n = n || {}).width || 100,
                    c = n.height || 100,
                    d = n.x || 0,
                    g = (n.y || 0) + c,
                    _ = vi.utils.toArray(n.path)[0];
                if (n.invert && (c = -c, g = 0), "string" == typeof e && (e = vi.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = mi(pi([e.segment], p, 0, 0, -c, d, g));
                else {
                    for (r = [d, g], s = 1 / (l = Math.max(5, 200 * (n.precision || 1))), h = 5 / (l += 2), f = Fi(d + s * p), i = ((D = Fi(g + e(s) * -c)) - g) / (f - d), u = 2; u < l; u++) o = Fi(d + u * s * p), a = Fi(g + e(u * s) * -c), (Math.abs((a - D) / (o - f) - i) > h || u === l - 1) && (r.push(f, D), i = (a - D) / (o - f)), f = o, D = a;
                    r = "M" + r.join(",")
                }
                return _ && _.setAttribute("d", r), r
            }, t
        }();
    Ci() && vi.registerPlugin(Ti), Ti.version = "3.5.1";
    /*!
     * CustomWiggle 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ai, Mi, Oi, Si = function() { return Ai || "undefined" != typeof window && (Ai = window.gsap) && Ai.registerPlugin && Ai },
        Pi = { easeOut: "M0,1,C0.7,1,0.6,0,1,0", easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0", anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1", uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0" },
        Bi = function(t) { return t },
        ki = function(t) {
            if (!Mi)
                if (Ai = Si(), Oi = Ai && Ai.parseEase("_CE")) {
                    for (var e in Pi) Pi[e] = Oi("", Pi[e]);
                    Mi = 1, Ni("wiggle").config = function(t) { return "object" == typeof t ? Ni("", t) : Ni("wiggle(" + t + ")", { wiggles: +t }) }
                } else t && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
        },
        Li = function(t, e) { return "function" != typeof t && (t = Ai.parseEase(t) || Oi("", t)), t.custom || !e ? t : function(e) { return 1 - t(e) } },
        Ni = function(t, e) {
            Mi || ki(1);
            var n, r, i, u, s, o, a, l, h, f = 0 | ((e = e || {}).wiggles || 10),
                D = 1 / f,
                p = D / 2,
                c = "anticipate" === e.type,
                d = Pi[e.type] || Pi.easeOut,
                g = Bi;
            if (c && (g = d, d = Pi.easeOut), e.timingEase && (g = Li(e.timingEase)), e.amplitudeEase && (d = Li(e.amplitudeEase, !0)), l = [0, 0, (o = g(p)) / 4, 0, o / 2, a = c ? -d(p) : d(p), o, a], "random" === e.type) {
                for (l.length = 4, n = g(D), r = 2 * Math.random() - 1, h = 2; h < f; h++) p = n, a = r, n = g(D * h), r = 2 * Math.random() - 1, i = Math.atan2(r - l[l.length - 3], n - l[l.length - 4]), u = Math.cos(i) * D, s = Math.sin(i) * D, l.push(p - u, a - s, p, a, p + u, a + s);
                l.push(n, 0, 1, 0)
            } else {
                for (h = 1; h < f; h++) l.push(g(p + D / 2), a), p += D, a = (a > 0 ? -1 : 1) * d(h * D), o = g(p), l.push(g(p - D / 2), a, o, a);
                l.push(g(p + D / 4), a, g(p + D / 4), 0, 1, 0)
            }
            for (h = l.length; --h > -1;) l[h] = ~~(1e3 * l[h]) / 1e3;
            return l[2] = "C" + l[2], Oi(t, "M" + l.join(","))
        },
        Ri = function() {
            function t(t, e) { this.ease = Ni(t, e) }
            return t.create = function(t, e) { return Ni(t, e) }, t.register = function(t) { Ai = t, ki() }, t
        }();
    Si() && Ai.registerPlugin(Ri), Ri.version = "3.5.1";
    /*!
     * DrawSVGPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ii, zi, Yi, Xi, ji, Vi = function() { return "undefined" != typeof window },
        Ui = function() { return Ii || Vi() && (Ii = window.gsap) && Ii.registerPlugin && Ii },
        Wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        qi = { rect: ["width", "height"], circle: ["r", "r"], ellipse: ["rx", "ry"], line: ["x2", "y2"] },
        Gi = function(t) { return Math.round(1e4 * t) / 1e4 },
        Hi = function(t) { return parseFloat(t || 0) },
        Qi = function(t, e) { return Hi(t.getAttribute(e)) },
        Ki = Math.sqrt,
        Zi = function(t, e, n, r, i, u) { return Ki(Math.pow((Hi(n) - Hi(t)) * i, 2) + Math.pow((Hi(r) - Hi(e)) * u, 2)) },
        $i = function(t) { return console.warn(t) },
        Ji = function(t) { return "non-scaling-stroke" === t.getAttribute("vector-effect") },
        tu = function(t) {
            if (!(t = zi(t)[0])) return 0;
            var e, n, r, i, u, s, o, a = t.tagName.toLowerCase(),
                l = t.style,
                h = 1,
                f = 1;
            Ji(t) && (f = t.getScreenCTM(), h = Ki(f.a * f.a + f.b * f.b), f = Ki(f.d * f.d + f.c * f.c));
            try { n = t.getBBox() } catch (t) { $i("Some browsers won't measure invisible elements (like display:none or masks inside defs).") }
            var D = n || { x: 0, y: 0, width: 0, height: 0 },
                p = D.x,
                c = D.y,
                d = D.width,
                g = D.height;
            if (n && (d || g) || !qi[a] || (d = Qi(t, qi[a][0]), g = Qi(t, qi[a][1]), "rect" !== a && "line" !== a && (d *= 2, g *= 2), "line" === a && (p = Qi(t, "x1"), c = Qi(t, "y1"), d = Math.abs(d - p), g = Math.abs(g - c))), "path" === a) i = l.strokeDasharray, l.strokeDasharray = "none", e = t.getTotalLength() || 0, h !== f && $i("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (h + f) / 2, l.strokeDasharray = i;
            else if ("rect" === a) e = 2 * d * h + 2 * g * f;
            else if ("line" === a) e = Zi(p, c, p + d, c + g, h, f);
            else if ("polyline" === a || "polygon" === a)
                for (r = t.getAttribute("points").match(Wi) || [], "polygon" === a && r.push(r[0], r[1]), e = 0, u = 2; u < r.length; u += 2) e += Zi(r[u - 2], r[u - 1], r[u], r[u + 1], h, f) || 0;
            else "circle" !== a && "ellipse" !== a || (s = d / 2 * h, o = g / 2 * f, e = Math.PI * (3 * (s + o) - Ki((3 * s + o) * (s + 3 * o))));
            return e || 0
        },
        eu = function(t, e) {
            if (!(t = zi(t)[0])) return [0, 0];
            e || (e = tu(t) + 1);
            var n = Yi.getComputedStyle(t),
                r = n.strokeDasharray || "",
                i = Hi(n.strokeDashoffset),
                u = r.indexOf(",");
            return u < 0 && (u = r.indexOf(" ")), (r = u < 0 ? e : Hi(r.substr(0, u)) || 1e-5) > e && (r = e), [Math.max(0, -i), Math.max(0, r - i)]
        },
        nu = function() { Vi() && (document, Yi = window, ji = Ii = Ui(), zi = Ii.utils.toArray, Xi = -1 !== ((Yi.navigator || {}).userAgent || "").indexOf("Edge")) },
        ru = {
            version: "3.5.1",
            name: "drawSVG",
            register: function(t) { Ii = t, nu() },
            init: function(t, e, n, r, i) {
                if (!t.getBBox) return !1;
                ji || nu();
                var u, s, o, a, l = tu(t) + 1;
                return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", s = function(t, e, n) { var r, i, u = t.indexOf(" "); return u < 0 ? (r = void 0 !== n ? n + "" : t, i = t) : (r = t.substr(0, u), i = t.substr(u + 1)), (r = ~r.indexOf("%") ? Hi(r) / 100 * e : Hi(r)) > (i = ~i.indexOf("%") ? Hi(i) / 100 * e : Hi(i)) ? [i, r] : [r, i] }(e, l, (u = eu(t, l))[0]), this._length = Gi(l + 10), 0 === u[0] && 0 === s[0] ? (o = Math.max(1e-5, s[1] - l), this._dash = Gi(l + o), this._offset = Gi(l - u[1] + o), this._offsetPT = this.add(this, "_offset", this._offset, Gi(l - s[1] + o))) : (this._dash = Gi(u[1] - u[0]) || 1e-6, this._offset = Gi(-u[0]), this._dashPT = this.add(this, "_dash", this._dash, Gi(s[1] - s[0]) || 1e-5), this._offsetPT = this.add(this, "_offset", this._offset, Gi(-s[0]))), Xi && (a = Yi.getComputedStyle(t)).strokeLinecap !== a.strokeLinejoin && (s = Hi(a.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", s, s + .01)), this._live = Ji(t) || ~(e + "").indexOf("live"), this._props.push("drawSVG"), 1
            },
            render: function(t, e) {
                var n, r, i, u, s = e._pt,
                    o = e._style;
                if (s) {
                    for (e._live && (n = tu(e._target) + 11) !== e._length && (r = n / e._length, e._length = n, e._offsetPT.s *= r, e._offsetPT.c *= r, e._dashPT ? (e._dashPT.s *= r, e._dashPT.c *= r) : e._dash *= r); s;) s.r(t, s.d), s = s._next;
                    i = e._dash, u = e._offset, n = e._length, o.strokeDashoffset = e._offset, 1 !== t && t ? o.strokeDasharray = i + "px," + n + "px" : (i - u < .001 && n - i <= 10 && (o.strokeDashoffset = u + 1), o.strokeDasharray = u < .001 && n - i <= 10 ? "none" : u === i ? "0px, 999999px" : i + "px," + n + "px")
                }
            },
            getLength: tu,
            getPosition: eu
        };
    Ui() && Ii.registerPlugin(ru);
    /*!
     * matrix 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var iu, uu, su, ou, au, lu, hu, fu, Du = "transform",
        pu = Du + "Origin",
        cu = function(t) {
            var e = t.ownerDocument || t;
            !(Du in t.style) && "msTransform" in t.style && (pu = (Du = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (uu = window, hu = new Cu, e) {
                iu = e, su = e.documentElement, ou = e.body;
                var n = e.createElement("div"),
                    r = e.createElement("div");
                ou.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[Du] = "translate3d(0,0,1px)", fu = r.offsetParent !== n, ou.removeChild(n)
            }
            return e
        },
        du = [],
        gu = [],
        _u = function(t) { return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null) },
        mu = function t(e, n) {
            if (e.parentNode && (iu || cu(e))) {
                var r = _u(e),
                    i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    u = r ? n ? "rect" : "g" : "div",
                    s = 2 !== n ? 0 : 100,
                    o = 3 === n ? 100 : 0,
                    a = "position:absolute;display:block;pointer-events:none;",
                    l = iu.createElementNS ? iu.createElementNS(i.replace(/^https/, "http"), u) : iu.createElement(u);
                return n && (r ? (lu || (lu = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), lu.appendChild(l)) : (au || ((au = t(e)).style.cssText = a), l.style.cssText = a + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", au.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        vu = function(t, e) {
            var n, r, i, u, s, o = _u(t),
                a = t === o,
                l = o ? du : gu;
            if (t === uu) return t;
            if (l.length || l.push(mu(t, 1), mu(t, 2), mu(t, 3)), n = o ? lu : au, o) i = a ? { x: 0, y: 0 } : t.getBBox(), (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (u = (r = r.numberOfItems > 1 ? function(t) { for (var e = new Cu, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix); return e }(r) : r.getItem(0).matrix).a * i.x + r.c * i.y, s = r.b * i.x + r.d * i.y) : (r = hu, u = i.x, s = i.y), e && "g" === t.tagName.toLowerCase() && (u = s = 0), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + u) + "," + (r.f + s) + ")"), (a ? o : t.parentNode).appendChild(n);
            else {
                if (u = s = 0, fu)
                    for (r = t.offsetParent, i = t; i && (i = i.parentNode) && i !== r && i.parentNode;)(uu.getComputedStyle(i)[Du] + "").length > 4 && (u = i.offsetLeft, s = i.offsetTop, i = 0);
                (i = n.style).top = t.offsetTop - s + "px", i.left = t.offsetLeft - u + "px", r = uu.getComputedStyle(t), i[Du] = r[Du], i[pu] = r[pu], i.border = r.border, i.borderLeftStyle = r.borderLeftStyle, i.borderTopStyle = r.borderTopStyle, i.borderLeftWidth = r.borderLeftWidth, i.borderTopWidth = r.borderTopWidth, i.position = "fixed" === r.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        yu = function(t, e, n, r, i, u, s) { return t.a = e, t.b = n, t.c = r, t.d = i, t.e = u, t.f = s, t },
        Cu = function() {
            function t(t, e, n, r, i, u) { void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === u && (u = 0), yu(this, t, e, n, r, i, u) }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    r = this.d,
                    i = this.e,
                    u = this.f,
                    s = t * r - e * n || 1e-10;
                return yu(this, r / s, -e / s, -n / s, t / s, (n * u - r * i) / s, -(t * u - e * i) / s)
            }, e.multiply = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f,
                    o = t.a,
                    a = t.c,
                    l = t.b,
                    h = t.d,
                    f = t.e,
                    D = t.f;
                return yu(this, o * e + l * r, o * n + l * i, a * e + h * r, a * n + h * i, u + f * e + D * r, s + f * n + D * i)
            }, e.clone = function() { return new t(this.a, this.b, this.c, this.d, this.e, this.f) }, e.equals = function(t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && u === t.e && s === t.f
            }, e.apply = function(t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    r = t.y,
                    i = this.a,
                    u = this.b,
                    s = this.c,
                    o = this.d,
                    a = this.e,
                    l = this.f;
                return e.x = n * i + r * s + a || 0, e.y = n * u + r * o + l || 0, e
            }, t
        }();

    function xu(t, e, n) {
        if (!t || !t.parentNode || (iu || cu(t)).documentElement === t) return new Cu;
        var r = function(t) { for (var e, n; t && t !== ou;)(n = t._gsap) && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode; return e }(t.parentNode),
            i = _u(t) ? du : gu,
            u = vu(t, n),
            s = i[0].getBoundingClientRect(),
            o = i[1].getBoundingClientRect(),
            a = i[2].getBoundingClientRect(),
            l = u.parentNode,
            h = function t(e) { return "fixed" === uu.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0) }(t),
            f = new Cu((o.left - s.left) / 100, (o.top - s.top) / 100, (a.left - s.left) / 100, (a.top - s.top) / 100, s.left + (h ? 0 : uu.pageXOffset || iu.scrollLeft || su.scrollLeft || ou.scrollLeft || 0), s.top + (h ? 0 : uu.pageYOffset || iu.scrollTop || su.scrollTop || ou.scrollTop || 0));
        if (l.removeChild(u), r)
            for (s = r.length; s--;)(o = r[s]).scaleX = o.scaleY = 0, o.renderTransform(1, o);
        return e ? f.inverse() : f
    }
    /*!
     * MotionPathPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Fu, wu, Eu, bu, Tu = ["x", "translateX", "left", "marginLeft"],
        Au = ["y", "translateY", "top", "marginTop"],
        Mu = Math.PI / 180,
        Ou = function(t, e, n, r) { for (var i = e.length, u = 2 === r ? 0 : r, s = 0; s < i; s++) t[u] = parseFloat(e[s][n]), 2 === r && (t[u + 1] = 0), u += 2; return t },
        Su = function(t, e, n) { return parseFloat(t._gsap.get(t, e, n || "px")) || 0 },
        Pu = function(t) {
            var e, n = t[0],
                r = t[1];
            for (e = 2; e < t.length; e += 2) n = t[e] += n, r = t[e + 1] += r
        },
        Bu = function(t, e, n, r, i, u, s) { "cubic" === s.type ? e = [e] : (e.unshift(Su(n, r, s.unitX), i ? Su(n, i, s.unitY) : 0), s.relative && Pu(e), e = [(i ? _i : gi)(e, s.curviness)]); return e = u(Iu(e, n, s)), zu(t, n, r, e, "x", s.unitX), i && zu(t, n, i, e, "y", s.unitY), li(e, s.resolution || (0 === s.curviness ? 20 : 12)) },
        ku = function(t) { return t },
        Lu = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
        Nu = function(t, e, n) { var r, i, u, s = xu(t); return "svg" === (t.tagName + "").toLowerCase() ? (i = (r = t.viewBox.baseVal).x, u = r.y, r.width || (r = { width: +t.getAttribute("width"), height: +t.getAttribute("height") })) : (r = e && t.getBBox && t.getBBox(), i = u = 0), e && "auto" !== e && (i += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, u += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(i || u ? s.apply({ x: i, y: u }) : { x: s.e, y: s.f }) },
        Ru = function(t, e, n, r) {
            var i, u = xu(t.parentNode, !0, !0),
                s = u.clone().multiply(xu(e)),
                o = Nu(t, n, u),
                a = Nu(e, r, u),
                l = a.x,
                h = a.y;
            return s.e = s.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(Lu) || [], l += (i = s.apply({ x: +i[0], y: +i[1] })).x, h += i.y), (i || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (l -= (i = s.apply(e.getBBox())).x, h -= i.y), s.e = l - o.x, s.f = h - o.y, s
        },
        Iu = function(t, e, n) {
            var r, i, u, s = n.align,
                o = n.matrix,
                a = n.offsetX,
                l = n.offsetY,
                h = n.alignOrigin,
                f = t[0][0],
                D = t[0][1],
                p = Su(e, "x"),
                c = Su(e, "y");
            return t && t.length ? (s && ("self" === s || (r = bu(s)[0] || e) === e ? pi(t, 1, 0, 0, 1, p - f, c - D) : (h && !1 !== h[2] ? Fu.set(e, { transformOrigin: 100 * h[0] + "% " + 100 * h[1] + "%" }) : h = [Su(e, "xPercent") / -100, Su(e, "yPercent") / -100], u = (i = Ru(e, r, h, "auto")).apply({ x: f, y: D }), pi(t, i.a, i.b, i.c, i.d, p + i.e - (u.x - i.e), c + i.f - (u.y - i.f)))), o ? pi(t, o.a, o.b, o.c, o.d, o.e, o.f) : (a || l) && pi(t, 1, 0, 0, 1, a || 0, l || 0), t) : ni("M0,0L0,0")
        },
        zu = function(t, e, n, r, i, u) {
            var s = e._gsap,
                o = s.harness,
                a = o && o.aliases && o.aliases[n],
                l = a && a.indexOf(",") < 0 ? a : n,
                h = t._pt = new wu(t._pt, e, l, 0, 0, ku, 0, s.set(e, l, t));
            h.u = Eu(s.get(e, l, u)) || 0, h.path = r, h.pp = i, t._props.push(l)
        },
        Yu = {
            version: "3.5.1",
            name: "motionPath",
            register: function(t, e, n) { Eu = (Fu = t).utils.getUnit, bu = Fu.utils.toArray, wu = n },
            init: function(t, e) {
                if (!Fu) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                "object" == typeof e && !e.style && e.path || (e = { path: e });
                var n, r, i, u, s, o, a = [],
                    l = e.path,
                    h = l[0],
                    f = e.autoRotate,
                    D = (s = e.start, o = "end" in e ? e.end : 1, function(t) { return s || 1 !== o ? oi(t, s, o) : t });
                if (this.rawPaths = a, this.target = t, (this.rotate = f || 0 === f) && (this.rOffset = parseFloat(f) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = Eu(t._gsap.get(t, this.rProp)) || 0), Array.isArray(l) && !("closed" in l) && "number" != typeof h) { for (r in h) ~Tu.indexOf(r) ? i = r : ~Au.indexOf(r) && (u = r); for (r in i && u ? a.push(Bu(this, Ou(Ou([], l, i, 0), l, u, 1), t, e.x || i, e.y || u, D, e)) : i = u = 0, h) r !== i && r !== u && a.push(Bu(this, Ou([], l, r, 2), t, r, 0, D, e)) } else li(n = D(Iu(ni(e.path), t, e)), e.resolution), a.push(n), zu(this, t, e.x || "x", n, "x", e.unitX || "px"), zu(this, t, e.y || "y", n, "y", e.unitY || "px")
            },
            render: function(t, e) {
                var n = e.rawPaths,
                    r = n.length,
                    i = e._pt;
                for (t > 1 ? t = 1 : t < 0 && (t = 0); r--;) Di(n[r], t, !r && e.rotate, n[r]);
                for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), i = i._next;
                e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? Mu : 1) + e.rOffset + e.ru, e, t)
            },
            getLength: function(t) { return li(ni(t)).totalLength },
            sliceRawPath: oi,
            getRawPath: ni,
            pointsToSegment: _i,
            stringToRawPath: di,
            rawPathToString: mi,
            transformRawPath: pi,
            getGlobalMatrix: xu,
            getPositionOnPath: Di,
            cacheRawPathMeasurements: li,
            convertToPath: function(t, e) { return bu(t).map((function(t) { return ui(t, !1 !== e) })) },
            convertCoordinates: function(t, e, n) { var r = xu(e, !0, !0).multiply(xu(t)); return n ? r.apply(n) : r },
            getAlignMatrix: Ru,
            getRelativePosition: function(t, e, n, r) { var i = Ru(t, e, n, r); return { x: i.e, y: i.f } },
            arrayToRawPath: function(t, e) { var n = Ou(Ou([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1); return e.relative && Pu(n), ["cubic" === e.type ? n : _i(n, e.curviness)] }
        };
    (Fu || "undefined" != typeof window && (Fu = window.gsap) && Fu.registerPlugin && Fu) && Fu.registerPlugin(Yu);
    /*!
     * ScrollToPlugin 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Xu, ju, Vu, Uu, Wu, qu, Gu, Hu = function() { return "undefined" != typeof window },
        Qu = function() { return Xu || Hu() && (Xu = window.gsap) && Xu.registerPlugin && Xu },
        Ku = function(t) { return "string" == typeof t },
        Zu = function(t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return t === Vu || t === Uu || t === Wu ? Math.max(Uu[r], Wu[r]) - (Vu["inner" + n] || Uu[i] || Wu[i]) : t[r] - t["offset" + n]
        },
        $u = function(t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === Vu && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != Uu[n] ? Uu : Wu),
                function() { return t[n] }
        },
        Ju = function(t, e) {
            var n = qu(t)[0].getBoundingClientRect(),
                r = !e || e === Vu || e === Wu,
                i = r ? { top: Uu.clientTop - (Vu.pageYOffset || Uu.scrollTop || Wu.scrollTop || 0), left: Uu.clientLeft - (Vu.pageXOffset || Uu.scrollLeft || Wu.scrollLeft || 0) } : e.getBoundingClientRect(),
                u = { x: n.left - i.left, y: n.top - i.top };
            return !r && e && (u.x += $u(e, "x")(), u.y += $u(e, "y")()), u
        },
        ts = function(t, e, n, r, i) { return isNaN(t) || "object" == typeof t ? Ku(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? Zu(e, n) - i : Math.min(Zu(e, n), Ju(t, e)[n] - i) : parseFloat(t) - i },
        es = function() { Xu = Qu(), Hu() && Xu && document.body && (Vu = window, Wu = document.body, Uu = document.documentElement, qu = Xu.utils.toArray, Xu.config({ autoKillThreshold: 7 }), Gu = Xu.config(), ju = 1) },
        ns = {
            version: "3.5.1",
            name: "scrollTo",
            rawVars: 1,
            register: function(t) { Xu = t, es() },
            init: function(t, e, n, r, i) {
                ju || es();
                this.isWin = t === Vu, this.target = t, this.tween = n, "object" != typeof e ? Ku((e = { y: e }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = { y: e, x: e }), this.vars = e, this.autoKill = !!e.autoKill, this.getX = $u(t, "x"), this.getY = $u(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this.add(this, "x", this.x, ts(e.x, t, "x", this.x, e.offsetX || 0), r, i, Math.round), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, ts(e.y, t, "y", this.y, e.offsetY || 0), r, i, Math.round), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function(t, e) {
                for (var n, r, i, u, s, o = e._pt, a = e.target, l = e.tween, h = e.autoKill, f = e.xPrev, D = e.yPrev, p = e.isWin; o;) o.r(t, o.d), o = o._next;
                n = p || !e.skipX ? e.getX() : f, i = (r = p || !e.skipY ? e.getY() : D) - D, u = n - f, s = Gu.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), h && (!e.skipX && (u > s || u < -s) && n < Zu(a, "x") && (e.skipX = 1), !e.skipY && (i > s || i < -s) && r < Zu(a, "y") && (e.skipY = 1), e.skipX && e.skipY && (l.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))), p ? Vu.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (a.scrollTop = e.y), e.skipX || (a.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y
            },
            kill: function(t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    ns.max = Zu, ns.getOffset = Ju, ns.buildGetter = $u, Qu() && Xu.registerPlugin(ns);
    /*!
     * strings: 3.5.1
     * https://greensock.com
     *
     * Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var rs = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var is, us, ss, os, as = /(?:\r|\n|\t\t)/g,
        ls = /(?:\s\s+)/g,
        hs = function(t) { return us.getComputedStyle(t) },
        fs = Array.isArray,
        Ds = [].slice,
        ps = function(t, e) { var n; return fs(t) ? t : "string" == (n = typeof t) && !e && t ? Ds.call(is.querySelectorAll(t), 0) : t && "object" === n && "length" in t ? Ds.call(t, 0) : t ? [t] : [] },
        cs = function(t) { return "absolute" === t.position || !0 === t.absolute },
        ds = function(t, e) {
            for (var n, r = e.length; --r > -1;)
                if (n = e[r], t.substr(0, n.length) === n) return n.length
        },
        gs = function(t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++"),
                r = 1;
            return n && (t = t.split("++").join("")),
                function() { return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">") }
        },
        _s = function t(e, n, r) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
            else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(n).join(r))
        },
        ms = function(t, e) { for (var n = e.length; --n > -1;) t.push(e[n]) },
        vs = function(t, e, n) {
            for (var r; t && t !== e;) {
                if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === n;
                t = t.parentNode || t._parent
            }
        },
        ys = function t(e) {
            var n, r, i = ps(e.childNodes),
                u = i.length;
            for (n = 0; n < u; n++)(r = i[n])._isSplit ? t(r) : (n && 3 === r.previousSibling.nodeType ? r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue : 3 !== r.nodeType && e.insertBefore(r.firstChild, r), e.removeChild(r))
        },
        Cs = function(t, e) { return parseFloat(e[t]) || 0 },
        xs = function(t, e, n, r, i, u, s) {
            var o, a, l, h, f, D, p, c, d, g, _, m, v = hs(t),
                y = Cs("paddingLeft", v),
                C = -999,
                x = Cs("borderBottomWidth", v) + Cs("borderTopWidth", v),
                F = Cs("borderLeftWidth", v) + Cs("borderRightWidth", v),
                w = Cs("paddingTop", v) + Cs("paddingBottom", v),
                E = Cs("paddingLeft", v) + Cs("paddingRight", v),
                b = Cs("fontSize", v) * (e.lineThreshold || .2),
                T = v.textAlign,
                A = [],
                M = [],
                O = [],
                S = e.wordDelimiter || " ",
                P = e.tag ? e.tag : e.span ? "span" : "div",
                B = e.type || e.split || "chars,words,lines",
                k = i && ~B.indexOf("lines") ? [] : null,
                L = ~B.indexOf("words"),
                N = ~B.indexOf("chars"),
                R = cs(e),
                I = e.linesClass,
                z = ~(I || "").indexOf("++"),
                Y = [];
            for (z && (I = I.split("++").join("")), l = (a = t.getElementsByTagName("*")).length, f = [], o = 0; o < l; o++) f[o] = a[o];
            if (k || R)
                for (o = 0; o < l; o++)((D = (h = f[o]).parentNode === t) || R || N && !L) && (m = h.offsetTop, k && D && Math.abs(m - C) > b && ("BR" !== h.nodeName || 0 === o) && (p = [], k.push(p), C = m), R && (h._x = h.offsetLeft, h._y = m, h._w = h.offsetWidth, h._h = h.offsetHeight), k && ((h._isSplit && D || !N && D || L && D || !L && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (p.push(h), h._x -= y, vs(h, t, S) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === o) && k.push([])));
            for (o = 0; o < l; o++) D = (h = f[o]).parentNode === t, "BR" !== h.nodeName ? (R && (d = h.style, L || D || (h._x += h.parentNode._x, h._y += h.parentNode._y), d.left = h._x + "px", d.top = h._y + "px", d.position = "absolute", d.display = "block", d.width = h._w + 1 + "px", d.height = h._h + "px"), !L && N ? h._isSplit ? (h._next = h.nextSibling, h.parentNode.appendChild(h)) : h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && Y.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), f.splice(o--, 1), l--) : D || (m = !h.nextSibling && vs(h.parentNode, t, S), h.parentNode._parent && h.parentNode._parent.appendChild(h), m && h.parentNode.appendChild(is.createTextNode(" ")), "span" === P && (h.style.display = "inline"), A.push(h)) : h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? M.push(h) : N && !h._isSplit && ("span" === P && (h.style.display = "inline"), A.push(h))) : k || R ? (h.parentNode && h.parentNode.removeChild(h), f.splice(o--, 1), l--) : L || t.appendChild(h);
            for (o = Y.length; --o > -1;) Y[o].parentNode.removeChild(Y[o]);
            if (k) {
                for (R && (g = is.createElement(P), t.appendChild(g), _ = g.offsetWidth + "px", m = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), d = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (c = " " === S && (!R || !L && !N), o = 0; o < k.length; o++) {
                    for (p = k[o], (g = is.createElement(P)).style.cssText = "display:block;text-align:" + T + ";position:" + (R ? "absolute;" : "relative;"), I && (g.className = I + (z ? o + 1 : "")), O.push(g), l = p.length, a = 0; a < l; a++) "BR" !== p[a].nodeName && (h = p[a], g.appendChild(h), c && h._wordEnd && g.appendChild(is.createTextNode(" ")), R && (0 === a && (g.style.top = h._y + "px", g.style.left = y + m + "px"), h.style.top = "0px", m && (h.style.left = h._x - m + "px")));
                    0 === l ? g.innerHTML = "&nbsp;" : L || N || (ys(g), _s(g, String.fromCharCode(160), " ")), R && (g.style.width = _, g.style.height = h._h + "px"), t.appendChild(g)
                }
                t.style.cssText = d
            }
            R && (s > t.clientHeight && (t.style.height = s - w + "px", t.clientHeight < s && (t.style.height = s + x + "px")), u > t.clientWidth && (t.style.width = u - E + "px", t.clientWidth < u && (t.style.width = u + F + "px"))), ms(n, A), L && ms(r, M), ms(i, O)
        },
        Fs = function(t, e, n, r) {
            var i, u, s, o, a, l, h, f, D = e.tag ? e.tag : e.span ? "span" : "div",
                p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                c = cs(e),
                d = e.wordDelimiter || " ",
                g = " " !== d ? "" : c ? "&#173; " : " ",
                _ = "</" + D + ">",
                m = 1,
                v = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : ds : null,
                y = is.createElement("div"),
                C = t.parentNode;
            for (C.insertBefore(y, t), y.textContent = t.nodeValue, C.removeChild(t), h = -1 !== (i = function t(e) {
                    var n = e.nodeType,
                        r = "";
                    if (1 === n || 9 === n || 11 === n) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) r += t(e) } else if (3 === n || 4 === n) return e.nodeValue;
                    return r
                }(t = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (i = i.replace(ls, " ").replace(as, "")), h && (i = i.split("<").join("{{LT}}")), a = i.length, u = (" " === i.charAt(0) ? g : "") + n(), s = 0; s < a; s++)
                if (l = i.charAt(s), v && (f = v(i.substr(s), e.specialChars))) l = i.substr(s, f || 1), u += p && " " !== l ? r() + l + "</" + D + ">" : l, s += f - 1;
                else if (l === d && i.charAt(s - 1) !== d && s) {
                for (u += m ? _ : "", m = 0; i.charAt(s + 1) === d;) u += g, s++;
                s === a - 1 ? u += g : ")" !== i.charAt(s + 1) && (u += g + n(), m = 1)
            } else "{" === l && "{{LT}}" === i.substr(s, 6) ? (u += p ? r() + "{{LT}}</" + D + ">" : "{{LT}}", s += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039 ? (o = ((i.substr(s, 12).split(rs) || [])[1] || "").length || 2, u += p && " " !== l ? r() + i.substr(s, o) + "</" + D + ">" : i.substr(s, o), s += o - 1) : u += p && " " !== l ? r() + l + "</" + D + ">" : l;
            t.outerHTML = u + (m ? _ : ""), h && _s(C, "{{LT}}", "<")
        },
        ws = function t(e, n, r, i) {
            var u, s, o = ps(e.childNodes),
                a = o.length,
                l = cs(n);
            if (3 !== e.nodeType || a > 1) { for (n.absolute = !1, u = 0; u < a; u++)(3 !== (s = o[u]).nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === hs(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, t(s, n, r, i)); return n.absolute = l, void(e._isSplit = !0) }
            Fs(e, n, r, i)
        },
        Es = function() {
            function t(t, e) { ss || (is = document, us = window, ss = 1), this.elements = ps(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e) }
            var e = t.prototype;
            return e.split = function(t) { this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0; for (var e, n, r, i = this.elements.length, u = t.tag ? t.tag : t.span ? "span" : "div", s = gs(t.wordsClass, u), o = gs(t.charsClass, u); --i > -1;) r = this.elements[i], this._originals[i] = r.innerHTML, e = r.clientHeight, n = r.clientWidth, ws(r, t, s, o), xs(r, t, this.chars, this.words, this.lines, n, e); return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, e.revert = function() { var t = this._originals; if (!t) throw "revert() call wasn't scoped properly."; return this.elements.forEach((function(e, n) { return e.innerHTML = t[n] })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, t.create = function(e, n) { return new t(e, n) }, t
        }();
    Es.version = "3.5.1", Mr.registerPlugin(Qe, Or, Ye, Ye, Lr, Ti, Ri, ru, Yu, ns, Er);
    var bs = os = window.punchgs = window.tpGS = {};
    for (var Ts in bs.gsap = Mr, bs.TweenLite = Qe, bs.TweenMax = Or, bs.TimelineLite = Ye, bs.TimelineMax = Ye, bs.CustomBounce = Lr, bs.CustomEase = Ti, bs.CustomWiggle = Ri, bs.DrawSVGPlugin = ru, bs.MotionPathPlugin = Yu, bs.ScrollToPlugin = ns, bs.CSSPlugin = Er,
            /*! Map SplitText to tpGS TPGSSPLITTEXT */
            bs.SplitText = Es, bs.RAD2DEG = 180 / Math.PI, bs.DEG2RAD = Math.PI / 180,
            /*! REGISTER MOTION PATH (BEZIER) */
            bs.gsap.registerPlugin(bs.MotionPathPlugin), bs.gsap.config({ nullTargetWarn: !1 }),
            /*!FallBack for old and new Eases*/
            bs.eases = bs.gsap.parseEase(), bs.eases) bs.eases.hasOwnProperty(Ts) && void 0 === bs[Ts] && (bs[Ts] = bs.eases[Ts])
        /*! FallBack for Essential Grid */
    ;
    void 0 !== os && void 0 !== os.TweenLite && void 0 === os.TweenLite.lagSmoothing && (os.TweenLite.lagSmoothing = function() {});
    var As = [];

    function Ms(t, e, n) {
        var r = document.createElement("canvas"),
            i = r.getContext("2d");
        if (r.width = 100, r.height = 200, 0 === t.length) i.fillStyle = n;
        else {
            for (var u = i.createLinearGradient(0, 0, 100, 0), s = 0; s < t.length; s++) u.addColorStop(t[s].stop / 100, t[s].color);
            i.fillStyle = u
        }
        i.fillRect(0, 0, 100, 200);
        var o = i.getImageData(0, 0, 100, 2).data,
            a = "";
        for (s = 0; s < e.length; s++) {
            var l = Math.ceil(e[s]),
                h = 4 * (0 !== l ? l - 1 : l);
            a += "rgba(" + o[h] + "," + o[h + 1] + "," + o[h + 2] + "," + o[h + 3] / 255 + ")", a += " " + l + (e.length - 1 === s ? "%" : "%,")
        }
        return r.remove(), a
    }

    function Os(t, e, n, r) {
        for (var i = "", u = bs.gsap.utils.mapRange(0, r.length - 1, 0, t.length - 1), s = 0; s < r.length; s++) {
            var o = Math.round(u(s));
            i += t[o].color, i += " " + t[o].stop + (r.length - 1 === s ? "%" : "%,")
        }
        return i
    }

    function Ss(t) {
        var e = /rgb([\s\S]*?)%/g,
            n = [],
            r = [],
            i = [];
        do {
            (s = e.exec(t)) && n.push(s[0])
        } while (s);
        for (var u = 0; u < n.length; u++) {
            var s = n[u],
                o = (t = /rgb([\s\S]*?)\)/.exec(s), /\)([\s\S]*?)%/.exec(s));
            t[0] && (t = t[0]), o[1] && (o = o[1]), i.push(parseFloat(o)), r.push({ color: t, stop: parseFloat(o) })
        }
        return 0 === r.length && (r.push({ color: t, stop: 0 }), i.push(0), r.push({ color: t, stop: 100 }), i.push(100)), { points: r, stops: i }
    }
    bs.getSSGColors = function(t, e, n) {
        if (n = void 0 === n ? "fading" : n, -1 === t.indexOf("gradient") && -1 === e.indexOf("gradient")) return { from: t, to: e };
        for (var r = { from: t, to: e }, i = 0; i < As.length; i++) { if (As[i].from === t && As[i].to === e && As[i].type === n) return { from: As[i].rFrom, to: As[i].rTo }; if (As[i].from === e && As[i].to === t && As[i].type === n) return { from: As[i].rTo, to: As[i].rFrom } }
        var u = Ss(t),
            s = Ss(e);
        if (u.stops.length === s.stops.length && -1 !== t.indexOf("gradient") && -1 !== e.indexOf("gradient")) return { from: t, to: e };
        var o, a, l = u.stops;
        for (i = 0; i < s.stops.length; i++) - 1 === l.indexOf(s.stops[i]) && l.push(s.stops[i]);
        if (l.sort((function(t, e) { return t - e })), -1 !== t.indexOf("gradient(")) {
            var h = -1 !== t.indexOf("deg,") ? t.indexOf("deg,") + 4 : -1 !== t.indexOf("at center,") ? t.indexOf("at center,") + 10 : t.indexOf("gradient(") + 9;
            o = t.substring(0, h), -1 === e.indexOf("gradient(") && (a = t.substring(0, h))
        }
        if (-1 !== e.indexOf("gradient(")) {
            h = -1 !== e.indexOf("deg,") ? e.indexOf("deg,") + 4 : -1 !== e.indexOf("at center,") ? e.indexOf("at center,") + 10 : e.indexOf("gradient(") + 9;
            a = e.substring(0, h), -1 === t.indexOf("gradient(") && (o = e.substring(0, h))
        }
        return "fading" === n ? (u.stops.length, s.stops.length, o += Ms(u.points, l, t), a += Ms(s.points, l, e)) : "sliding" === n && (u.stops.length > s.stops.length ? a += Os(s.points, l, e, u.points) : o += Os(u.points, l, t, s.points)), o += ")", a += ")", "sliding" === n && (u.stops.length > s.stops.length ? o = t : a = e), r.rFrom = o, r.rTo = a, r.tyep = n, As.push(r), { from: o, to: a }
    }
}]);;
/*!

  - Slider Revolution 6.4.10 JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

				VERSION: 6.4.10
			   DATE: 2021-04-28
    @author: Krisztian Horvath, ThemePunch OHG.


UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
			
GET LICENSE AT: 
https://www.themepunch.com/links/slider_revolution_wordpress_regular_license

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://www.themepunch.com/links/slider_revolution_wordpress_regular_license (Regular / Extended)

*/
! function(e, t) {
    "use strict";
    var i;
    window.RSANYID = window.RSANYID === t ? [] : window.RSANYID, window.RSANYID_sliderID = window.RSANYID_sliderID === t ? [] : window.RSANYID_sliderID, e.fn.extend({
        revolution: function(s) {
            return this.each(function() {
                i = e.fn.revolution;
                for (var n = document.getElementsByClassName("rs-p-wp-fix"); n[0];) n[0].parentNode.removeChild(n[0]);
                this.id !== t ? (i[d] = { anyid: [] }, this.id = i.revCheckIDS(d, this, !0)) : this.id = "rs_module_" + Math.round(1e7 * Math.random());
                var d = this.id,
                    l = i.clone(s);
                i[d] = G(s), i[d].ignoreHeightChange = a && "fullscreen" === i[d].sliderLayout && i[d].ignoreHeightChange, i[d].option_export = l, i[d].anyid = [], i[d]._Lshortcuts = {}, i[d].computedStyle = {}, i[d].c = e(this), i[d].cpar = i[d].c.parent(), i[d].canvas = i[d].c.find("rs-slides"), i[d].caches = { calcResponsiveLayersList: [], contWidthManager: {} }, i[d].sbgs = {}, window.RSBrowser = window.RSBrowser === t ? i.get_browser() : window.RSBrowser, i.setIsIOS(), i.setIsChrome8889(), i[d].noDetach = i[d].BUG_ie_clipPath = "Edge" === window.RSBrowser || "IE" === window.RSBrowser, i.getByTag = r(), i[d].indexhelper = 0, i[d].fullScreenOffsetResult = 0, i[d].level = 0, i[d].rtl = e("body").hasClass("rtl"), i[d]._L = i[d]._L === t ? {} : i[d]._L, i[d].emptyObject = "{}", i[d].dimensionReCheck = {}, i.globalListener === t && i.pageHandler(d), i[d].stopAfterLoops != t && i[d].stopAfterLoops > -1 ? i[d].looptogo = i[d].stopAfterLoops : i[d].looptogo = "disabled", window.T = i[d], i[d].BUG_safari_clipPath = "Safari" === i.get_browser() && i.get_browser_version() > "12", i[d].minHeight = "fullwidth" === i[d].sliderLayout ? 0 : i[d].minHeight != t && "" !== i[d].minHeight ? parseInt(i[d].minHeight, 0) : 0, i[d].minHeight = i[d].minHeight === t ? 0 : i[d].minHeight, i[d].isEdge = "Edge" === i.get_browser(), o(d), i.updateVisibleArea(d), D(d), i.mesuredScrollBarDone || i.mesureScrollBar(), window.requestAnimationFrame(function() {
                    if ("fullscreen" === i[d].sliderLayout) {
                        var e = i.getFullscreenOffsets(d);
                        0 !== e && i[d].cpar.height(i.getWinH(d) - e)
                    }
                    i[d].cpar[0].style.visibility = "visible"
                }), "hero" == i[d].sliderType && i[d].c.find("rs-slide").each(function(t) { t > 0 && e(this).remove() }), i[d].navigation.use = "hero" !== i[d].sliderType && ("carousel" == i[d].sliderType || i[d].navigation.keyboardNavigation || "on" == i[d].navigation.mouseScrollNavigation || "carousel" == i[d].navigation.mouseScrollNavigation || i[d].navigation.touch.touchenabled || i[d].navigation.arrows.enable || i[d].navigation.bullets.enable || i[d].navigation.thumbnails.enable || i[d].navigation.tabs.enable), i[d].c.find("rs-bgvideo").each(function() { "RS-BGVIDEO" !== this.tagName || this.id !== t && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random())) }), tpGS.force3D = "auto", !0 === i[d].modal.useAsModal && -1 === i.RS_prioList.indexOf(d) && (i.RS_toInit[d] = !1, i.RS_prioList.push(d)), i.RS_killedlist !== t && -1 !== i.RS_killedlist.indexOf(d) && (i.RS_toInit[d] = !1, i.RS_prioList.push(d)), !0 === i.RS_prioListFirstInit && !0 !== i[d].modal.useAsModal && -1 === i.RS_prioList.indexOf(d) && (i.RS_toInit[d] = !1, i.RS_prioList.push(d)), i.initNextRevslider(d)
            })
        },
        getRSJASONOptions: function(e) { console.log(JSON.stringify(i[e].option_export)) },
        getRSVersion: function(e) {
            var t, i, a = window.SliderRevolutionVersion;
            if (!e) {
                for (var r in t = i = "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n" + i, a) a.hasOwnProperty(r) && (t += a[r].alias + ": " + a[r].ver + "\n");
                t += i
            }
            return e ? a : t
        },
        revremoveslide: function(t) {
            return this.each(function() {
                var a = this.id;
                if (!(t < 0 || t > i[a].slideamount) && i[a] && i[a].slides.length > 0 && (t > 0 || t <= i[a].slides.length)) {
                    var r = i.gA(i[a].slides[t], "key");
                    i[a].slideamount = i[a].slideamount - 1, i[a].realslideamount = i[a].realslideamount - 1, n("rs-bullet", r, a), n("rs-tab", r, a), n("rs-thumb", r, a), e(i[a].slides[t]).remove(), i[a].thumbs = s(i[a].thumbs, t), i.updateNavIndexes && i.updateNavIndexes(a), t <= i[a].pr_active_key && (i[a].pr_active_key = i[a].pr_active_key - 1)
                }
            })
        },
        revaddcallback: function(e) { return this.each(function() { i[this.id] && (i[this.id].callBackArray === t && (i[this.id].callBackArray = []), i[this.id].callBackArray.push(e)) }) },
        revgetparallaxproc: function() { if (i[this[0].id]) return i[this[0].id].scrollproc },
        revdebugmode: function() {},
        revscroll: function(t) {
            return this.each(function() {
                var i = e(this);
                e("body,html").animate({ scrollTop: i.offset().top + i.height() - t + "px" }, { duration: 400 })
            })
        },
        revredraw: function() { return this.each(function() { m(this.id, t, !0) }) },
        revkill: function() {
            return this.each(function() {
                var a = this.id;
                i[a].c.data("conthover", 1), i[a].c.data("conthoverchanged", 1), i[a].c.trigger("revolution.slide.onpause"), i[a].tonpause = !0, i[a].c.trigger("stoptimer"), i[a].sliderisrunning = !1;
                var r = "updateContainerSizes." + i[a].c.attr("id");
                i.window.unbind(r), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"), i[a].c.find("*").each(function() {
                    var i = e(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("pztl") != t && i.data("pztl").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].progressC.remove();
                try { i[a].c.closest(".rev_slider_wrapper").detach() } catch (e) {}
                try { i[a].c.closest("rs-fullwidth-wrap").remove() } catch (e) {}
                try { i[a].c.closest("rs-module-wrap").remove() } catch (e) {}
                try { i[a].c.remove() } catch (e) {}
                i[a].cpar.detach(), i[a].c.html(""), i[a].c = null, delete i[a], i.RS_prioList.splice(i.RS_prioList.indexOf(a), 1), i.RS_toInit[a] = !1, i.RS_killedlist = i.RS_killedlist === t ? [] : i.RS_killedlist, -1 === i.RS_killedlist.indexOf(a) && i.RS_killedlist.push(a)
            })
        },
        revpause: function() {
            return this.each(function() {
                var a = e(this);
                a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onpause"), i[this.id].tonpause = !0, a.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                if (i[this.id] !== t) {
                    var a = e(this);
                    a.data("conthover", 0), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onresume"), i[this.id].tonpause = !1, a.trigger("starttimer")
                }
            })
        },
        revmodal: function(a) {
            var r = this instanceof e ? this[0] : this,
                o = r.id;
            i[r.id] !== t && i.revModal(o, a)
        },
        revstart: function() { var a = this instanceof e ? this[0] : this; return i[a.id] === t ? (console.log("Slider is Not Existing"), !1) : i[a.id].sliderisrunning || !0 === i[a.id].initEnded ? (console.log("Slider Is Running Already"), !1) : (i[a.id].c = e(a), i[a.id].canvas = i[a.id].c.find("rs-slides"), u(a.id), !0) },
        revnext: function() { return this.each(function() { i[this.id] !== t && i.callingNewSlide(this.id, 1, "carousel" === i[this.id].sliderType) }) },
        revprev: function() { return this.each(function() { i[this.id] !== t && i.callingNewSlide(this.id, -1, "carousel" === i[this.id].sliderType) }) },
        revmaxslide: function() { return e(this).find("rs-slide").length },
        revcurrentslide: function() { if (i[e(this)[0].id] !== t) return parseInt(i[e(this)[0].id].pr_active_key, 0) + 1 },
        revlastslide: function() { return e(this).find("rs-slide").length },
        revshowslide: function(e) { return this.each(function() { i[this.id] !== t && e !== t && i.callingNewSlide(this.id, "to" + (e - 1)) }) },
        revcallslidewithid: function(e) { return this.each(function() { i[this.id] !== t && i.callingNewSlide(this.id, e, "carousel" === i[this.id].sliderType) }) }
    }), i = e.fn.revolution, e.extend(!0, i, {
        isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
        trim: function(e) { return e !== t && null !== e && "string" == typeof e ? e.trim() : e },
        setCookie: function(e, t, i) {
            var a = new Date;
            a.setTime(a.getTime() + 60 * i * 60 * 1e3);
            var r = "expires=" + a.toUTCString();
            document.cookie = e + "=" + t + ";" + r + ";path=/"
        },
        getCookie: function(e) {
            for (var t = e + "=", i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                for (var r = i[a];
                    " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
            }
            return ""
        },
        mesureScrollBar: function() {
            i.mesuredScrollBarDone = !0, requestAnimationFrame(function() {
                var e = document.createElement("div");
                e.className = "RSscrollbar-measure", document.body.appendChild(e), i.mesuredScrollbarWidth = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            })
        },
        pageHandler: function(r) {
            i.globalListener = !0, i.window = e(window), i.document = e(document), i.RS_toInit = {}, i.RS_prioList = [], i.RS_swapping = [], i.RS_swapList = {}, window.isSafari11 === t && (window.isSafari11 = i.isSafari11()), a ? window.addEventListener("orientationchange", function() { i.getWindowDimension(!1, !0), setTimeout(function() { i.getWindowDimension(!0, !0) }, 400) }) : window.addEventListener("resize", i.getWindowDimension), i.getWindowDimension(!1), i.stickySupported = !1, "IE" !== window.RSBrowser && (i.stickySupported = !0), i.checkParrentOverflows(r);
            var o = i.getByTag(document, "RS-MODULE");
            for (var s in o) o.hasOwnProperty(s) && (i.RS_toInit[o[s].id] = !1, i.RS_prioList.push(o[s].id));
            i.nextSlider = r, i.RS_prioListFirstInit = !0, i.hasNavClickListener === t && (i.document.on(i.is_mobile() ? "touchstart" : "mouseenter", ".tparrows, .tp-bullets, .tp-bullet, .tp-tab, .tp-thumb, .tp-thumbs, .tp-tabs, .tp-rightarrow, .tp-leftarrow", function(e) { this.classList.add("rs-touchhover") }), i.document.on(i.is_mobile() ? "touchend" : "mouseleave", ".tparrows, .tp-bullets, .tp-bullet, .tp-tab, .tp-thumb, .tp-tabs,  .tp-rightarrow, .tp-leftarrow", function(e) {
                var t = this;
                requestAnimationFrame(function() { t.classList.remove("rs-touchhover") })
            }), i.hasNavClickListener = !0), window.addEventListener("unload", function(e) {
                for (var t in i.RS_toInit)
                    if (i.hasOwnProperty(t)) {
                        for (var a in i[t].sbgs)
                            if (i[r].sbgs.hasOwnProperty(a)) {
                                var o = i[r].sbgs[a];
                                i.destroyCanvas(o.canvas), i.destroyCanvas(o.shadowCanvas), o.three && i.destroyCanvas(o.three.canvas), i.destroyCanvas(o.patternImageCanvas), i.destroyCanvas(o.fmShadow), i.destroyCanvas(o.help_canvas)
                            }
                        i.destroyCanvas(i[t].createPattern)
                    }
                var s = document.querySelectorAll("canvas");
                for (var t in s) s.hasOwnProperty(t) && i.destroyCanvas(s[t])
            })
        },
        destroyCanvas: function(e) { e && (e.width = e.height = 0, e.remove(), e = null) },
        checkParrentOverflows: function(e) {
            window.requestAnimationFrame(function() {
                for (var t = i[e].cpar[0]; t.parentNode && !1 !== i.stickySupported;) {
                    if ("RS-MODULE-WRAP" !== t.tagName && "RS-FULLWIDTH-WRAP" !== t.tagName && "RS-MODULE-WRAP" !== t.tagName && -1 === t.className.indexOf("wp-block-themepunch-revslider")) {
                        var a = window.getComputedStyle(t);
                        i.stickySupported = "hidden" !== a.overflow && "hidden" !== a.overflowX && "hidden" !== a.overflowY
                    }
                    t = t.parentNode
                }
            })
        },
        initNextRevslider: function(e) { i.RS_prioList[0] === e && !1 === i.RS_toInit[e] ? (i.RS_toInit[e] = "waiting", c(e), setTimeout(function() { i.initNextRevslider(e) }, 19)) : i.RS_prioList[0] === e && "waiting" === i.RS_toInit[e] ? setTimeout(function() { i.initNextRevslider(e) }, 19) : i.RS_prioList[0] === e && !0 === i.RS_toInit[e] ? (i.RS_prioList.shift(), 0 !== i.RS_prioList.length && setTimeout(function() { i.initNextRevslider(e) }, 19)) : i.RS_prioList[0] !== e && !1 === i.RS_toInit[e] ? setTimeout(function() { i.initNextRevslider(e) }, 19) : 0 === i.RS_prioList.length && !0 === i.RS_toInit[e] && c(e) },
        scrollTicker: function(e) { 1 != i.scrollTickerAdded && (i.slidersToScroll = [], i.scrollTickerAdded = !0, a ? (tpGS.gsap.ticker.fps(150), tpGS.gsap.ticker.add(function() { i.generalObserver() })) : document.addEventListener("scroll", function(e) { i.scrollRaF === t && (i.scrollRaF = requestAnimationFrame(i.generalObserver.bind(this, !0))) }, { passive: !0 })), i.slidersToScroll.push(e), i.generalObserver(a) },
        generalObserver: function(e, a) { for (var r in i.scrollRaF && (i.scrollRaF = cancelAnimationFrame(i.scrollRaF)), i.lastwindowheight = i.lastwindowheight || i.winH, i.scrollY = window.scrollY, i.slidersToScroll) i.slidersToScroll.hasOwnProperty(r) && i.scrollHandling(i.slidersToScroll[r], e, t, a) },
        wrapObserver: {
            targets: [],
            init: function(e) {
                var t = 1,
                    a = 0,
                    r = 0,
                    o = s.bind(i.wrapObserver);

                function s() {
                    if (r++, requestAnimationFrame(o), !(r - a < 30 / t))
                        for (var s in a = r, i.wrapObserver.targets)
                            if (i.wrapObserver.targets.hasOwnProperty(s)) {
                                var n = i.wrapObserver.targets[s],
                                    d = n.elem.getBoundingClientRect();
                                n.lw === d.width && n.lh === d.height || 0 === d.width || (n.callback && (n.callback.pause(), n.callback.kill(), n.callback = null), n.callback = tpGS.gsap.to({}, { duration: .2, onComplete: e.bind(window, n.elem, n.id) })), n.lw = d.width, n.lh = d.height
                            }
                }
                s()
            },
            observe: function(e, t) {
                if ("" !== (e = e.getBoundingClientRect ? e : e[0].getBoundingClientRect ? e[0] : "")) {
                    var a = e.getBoundingClientRect();
                    i.wrapObserver.targets.push({ elem: e, id: t, lw: a.width, lh: a.height })
                }
            }
        },
        enterViewPort: function(a, r) {!0 !== i[a].started ? (i[a].started = !0, i[a].c.trigger("revolution.slide.firstrun"), setTimeout(function() { k(a), "hero" !== i[a].sliderType && i.manageNavigation && i[a].navigation.use && !0 === i[a].navigation.createNavigationDone && i.manageNavigation(a), i[a].slideamount > 1 && C(a), setTimeout(function() { i[a] !== t && (i[a].revolutionSlideOnLoaded = !0, i[a].c.trigger("revolution.slide.onloaded")) }, 50) }, i[a].startDelay), i[a].startDelay = 0, window.requestAnimationFrame(function() { h(a) })) : (i[a].waitForCountDown && (C(a), i[a].waitForCountDown = !1), "playing" != i[a].sliderlaststatus && i[a].sliderlaststatus != t || i[a].c.trigger("starttimer"), i[a].lastplayedvideos != t && i[a].lastplayedvideos.length > 0 && e.each(i[a].lastplayedvideos, function(e, t) { i.playVideo(t, a) })) },
        leaveViewPort: function(a) { i[a].sliderlaststatus = i[a].sliderstatus, i[a].c.trigger("stoptimer"), i[a].playingvideos != t && i[a].playingvideos.length > 0 && (i[a].lastplayedvideos = e.extend(!0, [], i[a].playingvideos), i[a].playingvideos && e.each(i[a].playingvideos, function(e, t) { i[a].leaveViewPortBasedStop = !0, i.stopVideo && i.stopVideo(t, a) })) },
        scrollHandling: function(e, a, r, o) {
            if (i[e] !== t) {
                var s = i[e].topc !== t ? i[e].topc[0].getBoundingClientRect() : 0 === i[e].canv.height ? i[e].cpar[0].getBoundingClientRect() : i[e].c[0].getBoundingClientRect();
                s.hheight = 0 === s.height ? 0 === i[e].canv.height ? i[e].module.height : i[e].canv.height : s.height, i[e].scrollproc = s.top < 0 || s.hheight > i.lastwindowheight && s.top < i.lastwindowheight ? s.top / s.hheight : s.bottom > i.lastwindowheight ? (s.bottom - i.lastwindowheight) / s.hheight : 0;
                var n = Math.max(0, 1 - Math.abs(i[e].scrollproc));
                i[e].viewPort.enable && ("%" === i[e].viewPort.vaType[i[e].level] && (i[e].viewPort.visible_area[i[e].level] <= n || n >= 0 && n <= 1 && i[e].sbtimeline.fixed) || "px" === i[e].viewPort.vaType[i[e].level] && (s.top <= 0 && s.bottom >= i.lastwindowheight || s.top >= 0 && s.bottom <= i.lastwindowheight || s.top >= 0 && s.top < i.lastwindowheight - i[e].viewPort.visible_area[i[e].level] || s.bottom >= i[e].viewPort.visible_area[i[e].level] && s.bottom < i.lastwindowheight) ? i[e].inviewport || (i[e].inviewport = !0, i.enterViewPort(e, !0), i[e].c.trigger("enterviewport")) : i[e].inviewport && (i[e].inviewport = !1, i.leaveViewPort(e), i[e].c.trigger("leftviewport"))), i[e].inviewport && (i.callBackHandling && i.callBackHandling(e, "parallax", "start"), requestAnimationFrame(function() { "fullscreen" === i[e].sliderLayout && i.getFullscreenOffsets(e) }), i.parallaxProcesses(e, s, o, r), i.callBackHandling && i.callBackHandling(e, "parallax", "end"))
            }
        },
        clone: function(e, i) { if (i === t && e === t) return {}; return function e(i, a) { var r = Array.isArray(i) ? [] : {}; for (var o in i) i.hasOwnProperty(o) && (i[o] !== t && "object" == typeof i[o] && a ? r[o] = e(i[o], !0) : i[o] !== t && (r[o] = i[o])); return r }(e, i) },
        closest: function(e, t) { return e && (t(e) ? e : i.closest(e.parentNode, t)) },
        closestNode: function(e, t) { return i.closest(e, function(e) { return e.nodeName === t }) },
        closestClass: function(e, t) { return i.closest(e, function(e) { return (" " + e.className + " ").indexOf(" " + t + " ") >= 0 }) },
        getWinH: function(e) { return i[e].ignoreHeightChange ? i.mobileWinH : i.winH },
        getWindowDimension: function(e, r) {!1 === e ? (i.rAfScrollbar = "skip", i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, a ? (i.zoom = r ? 1 : i.winWSbar / i.winWAll, i.winW = 1 !== i.zoom ? i.winWSbar * i.zoom : Math.min(i.winWAll, i.winWSbar), i.winH = 1 !== i.zoom ? window.innerHeight * i.zoom : window.innerHeight, r && window.visualViewport && (i.winH *= window.visualViewport.scale, i.winWAll *= window.visualViewport.scale), i.scrollBarWidth = 0) : (i.isModalOpen && i.openModalId !== t && i[i.openModalId] !== t && i[i.openModalId].canv.height > i.winH ? i.scrollBarWidth = i.mesuredScrollbarWidth : i.scrollBarWidth = i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight), a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH)) : clearTimeout(i.windowDimenstionDelay), i.windowDimenstionDelay = setTimeout(function() { i.rAfScrollbar = t, i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, a ? (i.zoom = r ? 1 : i.winWSbar / i.winWAll, i.RS_px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth, i.winW = 1 !== i.zoom ? i.winWSbar * i.zoom : Math.min(i.winWAll, i.winWSbar), i.winH = 1 !== i.zoom ? window.innerHeight * i.zoom : window.innerHeight, r && window.visualViewport && (i.winH *= window.visualViewport.scale, i.winWAll *= window.visualViewport.scale), i.scrollBarWidth = 0, r && tpGS.gsap.delayedCall(.1, function() { i.getWindowDimension() })) : (i.isModalOpen && i.openModalId !== t && i[i.openModalId] !== t && i[i.openModalId].canv.height > i.winH ? i.scrollBarWidth = i.mesuredScrollbarWidth : i.scrollBarWidth = i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight), a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH), !1 !== e && i.document.trigger("updateContainerSizes") }, 100) },
        aC: function(t, i) { t && (t.classList && t.classList.add ? t.classList.add("" + i) : e(t).addClass(i)) },
        rC: function(t, i) { t && (t.classList && t.classList.remove ? t.classList.remove("" + i) : e(t).removeClass(i)) },
        sA: function(e, t, i) { e && e.setAttribute && e.setAttribute("data-" + t, i) },
        gA: function(e, i, a) { return e === t ? t : e.hasAttribute && e.hasAttribute("data-" + i) && e.getAttribute("data-" + i) !== t && null !== e.getAttribute("data-" + i) ? e.getAttribute("data-" + i) : a !== t ? a : t },
        rA: function(e, t) { e && e.removeAttribute && e.removeAttribute("data-" + t) },
        iWA: function(e, a) { return i[e].justifyCarousel ? "static" === a ? i[e].carousel.wrapwidth : i[e].carousel.slide_widths[a !== t ? a : i[e].carousel.focused] : i[e].gridwidth[i[e].level] },
        iHE: function(e, t) { return i[e].useFullScreenHeight ? i[e].canv.height : Math.max(i[e].currentRowsHeight, i[e].gridheight[i[e].level]) },
        updateFixedScrollTimes: function(e) {!0 === i[e].sbtimeline.set && !0 === i[e].sbtimeline.fixed && "auto" !== i[e].sliderLayout && (i[e].sbtimeline.rest = i[e].duration - i[e].sbtimeline.fixEnd, i[e].sbtimeline.time = i[e].duration - (i[e].sbtimeline.fixStart + i[e].sbtimeline.rest), i[e].sbtimeline.extended = i[e].sbtimeline.time / 10) },
        addSafariFix: function(e) {!0 === window.isSafari11 && !0 !== i[e].safari3dFix && (i[e].safari3dFix = !0, i[e].c[0].className += " safarifix") },
        openModalAPI: function(i, a, r) {
            if (window.RS_60_MODALS === t || -1 == e.inArray(i, window.RS_60_MODALS)) {
                var o = { action: "revslider_ajax_call_front", client_action: "get_slider_html", alias: i, usage: "modal" };
                e.ajax({ type: "post", url: r, dataType: "json", data: o, success: function(t, r, o) { 1 == t.success && (e("body").append(t.data), setTimeout(function() { e.fn.revolution.document.trigger("RS_OPENMODAL_" + i, a) }, 49)) }, error: function(e) { console.log("Modal Can not be Loaded"), console.log(e) } })
            } else e.inArray(i, window.RS_60_MODALS) >= 0 && e.fn.revolution.document.trigger("RS_OPENMODAL_" + i, a)
        },
        showModalCover: function(a, r, o) {
            switch (o) {
                case "show":
                    var s;
                    if (r.spin !== t && "off" !== r.spin && (s = i.buildSpinner(a, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== t && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg) {
                        var n = e('<rs-modal-cover data-alias="' + r.alias + '" data-rid="' + a + '" id="' + a + '_modal_bg" style="display:none;opacity:0;background:' + r.bg + '"></rs-modal-cover>');
                        e("body").append(n), r.speed = parseFloat(r.speed), r.speed = r.speed > 200 ? r.speed / 1e3 : r.speed, r.speed = Math.max(Math.min(3, r.speed), .3), tpGS.gsap.to(n, r.speed, { display: "block", opacity: 1, ease: "power3.inOut" }), i.isModalOpen = !0, s !== t && n.append(s)
                    } else s !== t && i[a].c.append(s);
                    break;
                case "hide":
                    (n = e('rs-modal-cover[data-alias="' + r.alias + '"] .modalspinner')) !== t && n.length > 0 ? n.remove() : a !== t && i[a].c.find(".modalspinner").remove()
            }
        },
        revModal: function(a, r) {
            if (a !== t && i[a] !== t && "clicked" !== i[a].modal.closeProtection) {
                if (!0 === i[a].modal.closeProtection) return i[a].modal.closeProtection, void setTimeout(function() { i[a].modal.closeProtection = !1, i.revModal(a, r) }, 750);
                switch (r.mode) {
                    case "show":
                        if (!0 === i[a].modal.isLive) return;
                        if (!0 === i.anyModalclosing) return;
                        i[a].modal.isLive = !0, r.slide = r.slide === t ? "to0" : r.slide, i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.add(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, i[a].modal.coverSpeed, { display: "block", opacity: 1, ease: "power3.inOut" }), tpGS.gsap.set(i[a].modal.c, { display: "auto" === i[a].sliderLayout ? "inline-block" : "block", opacity: 0 }), i[a].cpar.removeClass("hideallscrollbars"), tpGS.gsap.set(i[a].cpar, { display: "block", opacity: 1 });
                        var o = { a: 0 };
                        i.isModalOpen = !0, i[a].clearModalBG = !0, tpGS.gsap.fromTo(o, i[a].modal.coverSpeed / 5, { a: 0 }, { a: 10, ease: "power3.inOut", onComplete: function() { i.openModalId = a, i[a].sliderisrunning ? i.callingNewSlide(a, r.slide) : ("to0" !== r.slide && (i[a].startWithSlideKey = r.slide), u(a)) } }), tpGS.gsap.fromTo([i[a].modal.c], .01, { opacity: 0 }, { opacity: 1, delay: i[a].modal.coverSpeed / 4, ease: "power3.inOut", onComplete: function() {} }), window.overscrollhistory = document.body.style.overflow, setTimeout(function() { document.body.style.overflow = "hidden" }, 250), i.getWindowDimension();
                        break;
                    case "close":
                        if (!0 === i.anyModalclosing) return;
                        i.anyModalclosing = !0, i.openModalId = t, x(a), document.body.style.overflow = window.overscrollhistory, i[a].cpar.addClass("hideallscrollbars"), i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.remove(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, i[a].modal.coverSpeed, { display: "none", opacity: 0, ease: "power3.inOut" }), tpGS.gsap.to(i[a].modal.c, i[a].modal.coverSpeed / 6.5, { display: "none", delay: i[a].modal.coverSpeed / 4, opacity: 0, onComplete: function() { tpGS.gsap.set(i[a].cpar, { display: "none", opacity: 0 }), i.document.trigger("revolution.all.resize"), i.getWindowDimension(), i.isModalOpen = !1 } }), i[a].modal.closeProtection = !0, clearTimeout(i[a].modal.closeTimer), i[a].modal.closeTimer = setTimeout(function() { i.anyModalclosing = !1, i[a].modal.isLive = !1, i[a].modal.closeProtection = !1 }, Math.max(750, 1020 * i[a].modal.coverSpeed));
                        break;
                    case "init":
                        if (window.RS_60_MODALS = window.RS_60_MODALS === t ? [] : window.RS_60_MODALS, -1 === e.inArray(i[a].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(i[a].modal.alias), i[a].modal.listener === t && (i[a].modal.c = e("#" + a + "_modal"), !1 !== i[a].modal.cover && "false" !== i[a].modal.cover || (i[a].modal.coverColor = "transparent"), i[a].modal.bg = e('rs-modal-cover[data-alias="' + r.alias + '"]'), i[a].modal.bg === t || 0 === i[a].modal.bg.length ? (i[a].modal.bg = e('<rs-modal-cover style="display:none;opacity:0;background:' + i[a].modal.coverColor + '" data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), "auto" === i[a].sliderLayout && i[a].modal.cover ? e("body").append(i[a].modal.bg) : i[a].modal.c.append(i[a].modal.bg)) : i[a].modal.bg.attr("data-rid", a), i[a].modal.c[0].className += "rs-modal-" + i[a].sliderLayout, i[a].modal.calibration = { left: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "50%" : "left" === i[a].modal.horizontal ? "0px" : "auto" : "0px", right: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "auto" : "left" === i[a].modal.horizontal ? "auto" : "0px" : "0px", top: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "50%" : "top" === i[a].modal.vertical ? "0px" : "auto" : "0px", bottom: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "auto" : "top" === i[a].modal.vertical ? "auto" : "0px" : "0px", y: ("auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout) && "middle" === i[a].modal.vertical ? "-50%" : 0, x: "auto" === i[a].sliderLayout && "center" === i[a].modal.horizontal ? "-50%" : 0 }, "-50%" === i[a].modal.calibration.y && (i[a].modal.calibration.filter = "blur(0px)"), tpGS.gsap.set(i[a].modal.c, "auto" === i[a].sliderLayout || "fullscreen" === i[a].sliderLayout ? e.extend(!0, i[a].modal.calibration, { opacity: 0, display: "none" }) : { opacity: 0, display: "none" }), "fullwidth" === i[a].sliderLayout && tpGS.gsap.set(i[a].modal.c.find("rs-module-wrap"), i[a].modal.calibration), i.document.on("RS_OPENMODAL_" + i[a].modal.alias, function(e, t) { i.revModal(a, { mode: "show", slide: t }) }), i.document.on("click", "rs-modal-cover", function() { i.revModal(i.gA(this, "rid"), { mode: "close" }) }), i[a].modal.listener = !0, i[a].modal.trigger !== t)) {
                            var s, n = i[a].modal.trigger.split(";");
                            for (o in i[a].modal.trigger = {}, n)
                                if (n.hasOwnProperty(o)) switch ((s = n[o].split(":"))[0]) {
                                    case "t":
                                        i[a].modal.trigger.time = parseInt(s[1], 0);
                                        break;
                                    case "s":
                                        i[a].modal.trigger.scroll = s[1];
                                        break;
                                    case "so":
                                        i[a].modal.trigger.scrollo = parseInt(s[1], 0);
                                        break;
                                    case "e":
                                        i[a].modal.trigger.event = s[1];
                                        break;
                                    case "ha":
                                        i[a].modal.trigger.hash = s[1];
                                        break;
                                    case "co":
                                        i[a].modal.trigger.cookie = s[1]
                                }
                            var d = !0;
                            if (i[a].modal.trigger.cookie !== t ? d = "true" !== i.getCookie(i[a].modal.alias + "_modal_one_time") : "true" == i.getCookie(i[a].modal.alias + "_modal_one_time") && i.setCookie(i[a].modal.alias + "_modal_one_time", !1, 10), d && (i[a].modal.trigger.time !== t && 0 !== i[a].modal.trigger.time && (i[a].modal.trigger.cookie !== t && i.setCookie(i[a].modal.alias + "_modal_one_time", !0, i[a].modal.trigger.cookie), setTimeout(function() { i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias) }, i[a].modal.trigger.time)), i[a].modal.trigger.scrollo !== t || i[a].modal.trigger.scroll !== t)) {
                                i[a].modal.trigger.scroll !== t && e(i[a].modal.trigger.scroll)[0] !== t && (i[a].modal.trigger.scroll = e(i[a].modal.trigger.scroll)[0]);
                                var l = function() {
                                    if (i[a].modal.trigger.scroll !== t) var e = i[a].modal.trigger.scroll.getBoundingClientRect();
                                    (i[a].modal.trigger.scroll !== t && Math.abs(e.top + (e.bottom - e.top) / 2 - i.getWinH(a) / 2) < 50 || i[a].modal.trigger.scrollo !== t && Math.abs(i[a].modal.trigger.scrollo - (i.scrollY !== t ? i.scrollY : window.scrollY)) < 100) && (i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias), i[a].modal.trigger.cookie !== t && i.setCookie(i[a].modal.alias + "_modal_one_time", !0, i[a].modal.trigger.cookie), document.removeEventListener("scroll", l))
                                };
                                document.addEventListener("scroll", l, { id: a, passive: !0 })
                            }
                            i[a].modal.trigger.event !== t && i.document.on(i[a].modal.trigger.event, function() { i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias) }), "t" == i[a].modal.trigger.hash && window.location.hash.substring(1) == i[a].modal.alias && i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
                        }
                }
            }
        },
        smartConvertDivs: function(e) {
            var t = "";
            if ("string" == typeof e && e.indexOf("#") >= 0) {
                var i = e.split(","),
                    a = i.length - 1;
                for (var r in i) t = "string" == typeof i[r] && "#" === i[r][0] ? t + i[r][1] / i[r][3] * 100 + "%" + (r < a ? "," : "") : t + i[r] + (r < a ? "," : "")
            } else t = e;
            return t
        },
        revToResp: function(e, i, a, r) { if ((e = e === t ? a : e) !== t) { if (r = r === t ? "," : r, "boolean" != typeof e && ("object" != typeof e || Array.isArray(e))) { try { e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r) } catch (e) {} for (e = Array.isArray(e) ? e : [e]; e.length < i;) e[e.length] = e[e.length - 1] } return e } },
        loadImages: function(a, r, o, s) {
            if (a !== t && 0 !== a.length) {
                var n = [];
                if (Array.isArray(a))
                    for (var d in a) a.hasOwnProperty(d) && a[d] !== t && n.push(a[d]);
                else n.push(a);
                for (var l in n)
                    if (n.hasOwnProperty(l)) {
                        var c = n[l].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (var d in c)
                            if (c.hasOwnProperty(d)) {
                                var p = g(c[d], t, r),
                                    u = p !== t ? p : i.gA(c[d], "svg_src") != t ? i.gA(c[d], "svg_src") : c[d].src === t ? e(c[d]).data("src") : c[d].src,
                                    h = i.gA(c[d], "svg_src") != t ? "svg" : "img";
                                u !== t && i[r].loadqueue !== t && 0 == i[r].loadqueue.filter(function(e) { return e.src === u }).length && i[r].loadqueue.push({ src: u, index: d, starttoload: e.now(), type: h || "img", prio: o, progress: c[d].complete && u === c[d].src ? "loaded" : "prepared", static: s, width: c[d].complete && u === c[d].src ? c[d].width : t, height: c[d].complete && u === c[d].src ? c[d].height : t })
                            }
                    }
                w(r)
            }
        },
        waitForCurrentImages: function(r, o, s) {
            if (r !== t && 0 !== r.length && i[o] !== t) {
                var n = !1,
                    d = [];
                if (Array.isArray(r))
                    for (var l in r) r.hasOwnProperty(l) && r[l] !== t && d.push(r[l]);
                else d.push(r);
                for (var c in d)
                    if (d.hasOwnProperty(c)) {
                        var p = d[c].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (l in p)
                            if (p.hasOwnProperty(l) && "length" !== l && !(p[l].className.indexOf("rs-pzimg") >= 0)) {
                                var u = e(p[l]).data(),
                                    h = g(p[l], t, o),
                                    m = h !== t ? h : i.gA(p[l], "svg_src") != t ? i.gA(p[l], "svg_src") : p[l].src === t ? u.src : p[l].src,
                                    v = i.getLoadObj(o, m);
                                if (i.sA(p[l], "src-rs-ref", m), u.loaded === t && v !== t && v.progress && "loaded" == v.progress) {
                                    if (p[l].src = v.src, "img" == v.type) {
                                        if (u.slidebgimage) {
                                            -1 == v.src.indexOf("images/transparent.png") && -1 == v.src.indexOf("assets/transparent.png") || u.bgcolor === t || u.bgcolor !== t && "transparent" !== u.bgcolor && (v.bgColor = !0, v.useBGColor = !0), i.sA(d[c], "owidth", v.width), i.sA(d[c], "oheight", v.height);
                                            var f = i.getByTag(d[c], "RS-SBG-WRAP"),
                                                y = i.gA(d[c], "key");
                                            if (i[o].sbgs[y].loadobj = v, f.length > 0 && (i.sA(f[0], "owidth", v.width), i.sA(f[0], "oheight", v.height)), "carousel" === i[o].sliderType) {
                                                var b = e(f),
                                                    w = i.getSlideIndex(o, y);
                                                (i[o].carousel.justify && i[o].carousel.slide_widths === t || i[o].carousel.slide_width === t) && i.setCarouselDefaults(o, !0), b.data("panzoom") === t || i[o].panzoomTLs !== t && i[o].panzoomTLs[w] !== t || i.startPanZoom(b, o, 0, w, "prepare", y), i[o].sbgs[y].isHTML5 && !i[o].sbgs[y].videoisplaying && (i[o].sbgs[y].video = i[o].sbgs[y].loadobj.img), d[c].getAttribute("data-iratio") !== t && !d[c].getAttribute("data-iratio") && v.img && v.img.naturalWidth && (d[c].setAttribute("data-iratio", v.img.naturalWidth / v.img.naturalHeight), i.setCarouselDefaults(o, "redraw"), !0 === i[o].carousel.ocfirsttun && i.organiseCarousel(o, "right", !0, !1, !1)), i.updateSlideBGs(o, y, i[o].sbgs[y])
                                            }
                                        }
                                    } else "svg" == v.type && "loaded" == v.progress && (p[l].innerHTML = v.innerHTML);
                                    u.loaded = !0
                                }
                                v && v.progress && v.progress.match(/inprogress|inload|prepared/g) && (!v.error && e.now() - v.starttoload < 15e3 ? n = !0 : (v.progress = "failed", v.reported_img || (v.reported_img = !0, console.log(m + "  Could not be loaded !")))), 1 != i[o].youtubeapineeded || window.YT && YT.Player != t || (n = S("youtube", o)), 1 != i[o].vimeoapineeded || window.Vimeo || (n = S("vimeo", o))
                            }
                    }!a && i[o].audioqueue && i[o].audioqueue.length > 0 && e.each(i[o].audioqueue, function(t, i) { i.status && "prepared" === i.status && e.now() - i.start < i.waittime && (n = !0) }), e.each(i[o].loadqueue, function(t, i) {!0 === i.static && ("loaded" != i.progress && "done" !== i.progress || "failed" === i.progress) && ("failed" != i.progress || i.reported ? !i.error && e.now() - i.starttoload < 5e3 ? n = !0 : i.reported || (i.reported = _(i.src, i.error)) : i.reported = _(i.src, i.error)) }), n ? tpGS.gsap.delayedCall(.02, i.waitForCurrentImages, [r, o, s]) : s !== t && tpGS.gsap.delayedCall(1e-4, s)
            }
        },
        updateVisibleArea: function(e) { for (var a in i[e].viewPort.visible_area = i.revToResp(i[e].viewPort.visible_area, i[e].rle, "0px"), i[e].viewPort.vaType = new Array(4), i[e].viewPort.visible_area) i[e].viewPort.visible_area.hasOwnProperty(a) && (i.isNumeric(i[e].viewPort.visible_area[a]) && (i[e].viewPort.visible_area[a] += "%"), i[e].viewPort.visible_area[a] !== t && (i[e].viewPort.vaType[a] = i[e].viewPort.visible_area[a].indexOf("%") >= 0 ? "%" : "px"), i[e].viewPort.visible_area[a] = parseInt(i[e].viewPort.visible_area[a], 0), i[e].viewPort.visible_area[a] = "%" == i[e].viewPort.vaType[a] ? i[e].viewPort.visible_area[a] / 100 : i[e].viewPort.visible_area[a]) },
        observeFonts: function(e, a, r) { r = r === t ? 0 : r, i.fonts === t && (i.fonts = {}, i.monoWidth = d("monospace"), i.sansWidth = d("sans-serif"), i.serifWidth = d("serif")), r++; var o = i.fonts[e];!0 !== i.fonts[e] && (i.fonts[e] = i.monoWidth !== d(e + ",monospace") || i.sansWidth !== d(e + ",sans-serif") || i.serifWidth !== d(e + ",serif")), 100 === r || (!1 === o || o === t) && !0 === i.fonts[e] ? (d(e + ",monospace", !0), d(e + ",sans-serif", !0), d(e + ",serif", !0), a()) : setTimeout(function() { i.observeFonts(e, a, r) }, 19) },
        getversion: function() { return "Slider Revolution 6.4.9" },
        currentSlideIndex: function(e) { return i[e].pr_active_key },
        iOSVersion: function() { return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i) },
        setIsIOS: function() { i.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && void 0 !== navigator.standalone },
        setIsChrome8889: function() { i.isChrome8889 = i.isChrome8889 === t ? navigator.userAgent.indexOf("Chrome/88") >= 0 || navigator.userAgent.indexOf("Chrome/89") >= 0 : i.isChrome8889 },
        isIE: function() {
            if (i.isIERes === t) {
                var a = e('<div style="display:none;"/>').appendTo(e("body"));
                a.html("\x3c!--[if IE 8]><a>&nbsp;</a><![endif]--\x3e"), i.isIERes = a.find("a").length, a.remove()
            }
            return i.isIERes
        },
        is_mobile: function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                i = !1;
            if (window.orientation !== t) i = !0;
            else
                for (var a in e) e.hasOwnProperty(a) && (i = !!(i || navigator.userAgent.split(e[a]).length > 1) || i);
            return i && document.body && -1 === document.body.className.indexOf("rs-ISM") && (document.body.className += " rs-ISM"), i
        },
        is_android: function() {
            var e = ["android", "Android"],
                t = !1;
            for (var i in e) e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
            return t
        },
        callBackHandling: function(t, a, r) { i[t].callBackArray && e.each(i[t].callBackArray, function(e, t) { t && t.inmodule && t.inmodule === a && t.atposition && t.atposition === r && t.callback && t.callback.call() }) },
        get_browser: function() {
            var e, t = navigator.userAgent,
                i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i[0])
        },
        get_browser_version: function() {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1]
        },
        isFaceBook: function() { return i.isFaceBookApp == t && (i.isFaceBookApp = navigator.userAgent || navigator.vendor || window.opera, i.isFaceBookApp = i.isFaceBookApp.indexOf("FBAN") > -1 || i.isFaceBookApp.indexOf("FBAV") > -1), i.isFaceBookApp },
        isFirefox: function(e) { return i[e].isFirefox = i[e].isFirefox === t ? "Firefox" === i.get_browser() : i[e].isFirefox, i[e].isFirefox },
        isSafari11: function() { return "safari" === i.trim(i.get_browser().toLowerCase()) && parseFloat(i.get_browser_version()) >= 11 },
        isWebkit: function() { var e = /(webkit)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase()); return e && e[1] && "webkit" === e[1] },
        isIE11: function() { return i.IE11 = i.IE11 === t ? !!navigator.userAgent.match(/Trident.*rv\:11\./) : i.IE11, i.IE11 },
        deepLink: function(e, a) {
            if (a !== t) {
                var r = parseInt(a.toString().replace(/^slide/, "").replace("-", ""), 10);
                if (isNaN(r))
                    for (var o in i[e].slides)
                        if (i[e].slides.hasOwnProperty(o) && i.gA(i[e].slides[o], "deeplink") === a) { r = parseInt(i.gA(i[e].slides[o], "originalindex"), 10); break }
                return isNaN(r) || r < 1 || r > i[e].realslideamount ? void 0 : r
            }
        },
        getHorizontalOffset: function(e, t) {
            var i = l(e, ".outer-left"),
                a = l(e, ".outer-right");
            return "left" == t ? i : "right" == t ? a : "all" == t ? { left: i, right: a, both: i + a, inuse: i + a != 0 } : i + a
        },
        getComingSlide: function(e, a) {
            var r = i[e].pr_next_key !== t ? i[e].pr_next_key : i[e].pr_processing_key !== t ? i[e].pr_processing_key : i[e].pr_active_key,
                o = 0;
            if (o = 0, i[e].pr_active_slide !== t && "true" == i.gA(i[e].pr_active_slide[0], "not_in_nav") && (r = i[e].pr_lastshown_key), a !== t && i.isNumeric(a) || a !== t && a.match(/to/g)) o = 1 === a || -1 === a ? parseInt(r, 0) + a < 0 ? i[e].slideamount - 1 : parseInt(r, 0) + a >= i[e].slideamount ? 0 : parseInt(r, 0) + a : (a = i.isNumeric(a) ? a : parseInt(a.split("to")[1], 0)) < 0 ? 0 : a > i[e].slideamount - 1 ? i[e].slideamount - 1 : a;
            else if (a)
                for (var s in i[e].slides) i[e].slides.hasOwnProperty(s) && (o = i[e].slides && i[e].slides[s] && i.gA(i[e].slides[s], "key") === a ? s : o);
            return { nindex: o, aindex: r }
        },
        callingNewSlide: function(e, a, r) {
            var o = i.getComingSlide(e, a);
            i[e].pr_next_key = o.nindex, i[e].sdir = i[e].pr_next_key < i[e].pr_active_key ? 1 : 0, r && i[e].carousel !== t && (i[e].carousel.focused = i[e].pr_next_key), i[e].ctNavElement ? i[e].ctNavElement = !1 : i[e].c.trigger("revolution.nextslide.waiting"), (i[e].started && o.aindex === i[e].pr_next_key && o.aindex === i[e].pr_lastshown_key || i[e].pr_next_key !== o.aindex && -1 != i[e].pr_next_key && i[e].pr_lastshown_key !== t) && k(e, r)
        },
        getLoadObj: function(e, a) { var r = i[e].loadqueue !== t && i[e].loadqueue.filter(function(e) { return e.src === a })[0]; return r === t ? { src: a } : r },
        getResponsiveLevel: function(e) {
            var t = 9999,
                a = 0,
                r = 0,
                o = 0;
            if (i[e].responsiveLevels && i[e].responsiveLevels.length)
                for (var s in i[e].responsiveLevels) i[e].responsiveLevels.hasOwnProperty(s) && (i.winWAll < i[e].responsiveLevels[s] && (0 == a || a > parseInt(i[e].responsiveLevels[s])) && (t = parseInt(i[e].responsiveLevels[s]), o = parseInt(s), a = parseInt(i[e].responsiveLevels[s])), i.winWAll > i[e].responsiveLevels[s] && a < i[e].responsiveLevels[s] && (a = parseInt(i[e].responsiveLevels[s]), r = parseInt(s)));
            return a < t ? r : o
        },
        getSizeMultpilicator: function(e, t, a) { var r = { h: 0, w: 0 }; return i[e].justifyCarousel ? r.h = r.w = 1 : (r.w = a.width / i[e].gridwidth[i[e].level], r.h = a.height / i[e].gridheight[i[e].level], r.w = isNaN(r.w) ? 1 : r.w, r.h = isNaN(r.h) ? 1 : r.h, 1 == i[e].enableUpscaling ? r.h = r.w : (r.h > r.w ? r.h = r.w : r.w = r.h, (r.h > 1 || r.w > 1) && (r.w = 1, r.h = 1))), r },
        updateDims: function(e, a) {
            var r = i[e].pr_processing_key || i[e].pr_active_key || 0,
                o = i[e].pr_active_key || 0,
                s = i[e].modal !== t && i[e].modal.useAsModal,
                n = s ? i.winWAll : i.winW,
                d = !1;
            if (i[e].lastScrollBarWidth = i.scrollBarWidth, i[e].redraw = i[e].redraw === t ? {} : i[e].redraw, i[e].module = i[e].module === t ? {} : i[e].module, i[e].canv = i[e].canv === t ? {} : i[e].canv, i[e].content = i[e].content === t ? {} : i[e].content, i[e].drawUpdates = { c: {}, cpar: {}, canv: {} }, "carousel" == i[e].sliderType ? i[e].module.margins = { top: parseInt(i[e].carousel.padding_top || 0, 0), bottom: parseInt(i[e].carousel.padding_bottom || 0, 0) } : i[e].module.margins = { top: 0, bottom: 0 }, i[e].module.paddings === t && (i[e].module.paddings = { top: parseInt(i[e].cpar.css("paddingTop"), 0) || 0, bottom: parseInt(i[e].cpar.css("paddingBottom"), 0) || 0 }), i[e].blockSpacing !== t ? (i[e].block = { bottom: i[e].blockSpacing.bottom !== t ? parseInt(i[e].blockSpacing.bottom[i[e].level], 0) : 0, top: i[e].blockSpacing.top !== t ? parseInt(i[e].blockSpacing.top[i[e].level], 0) : 0, left: i[e].blockSpacing.left !== t ? parseInt(i[e].blockSpacing.left[i[e].level], 0) : 0, right: i[e].blockSpacing.right !== t ? parseInt(i[e].blockSpacing.right[i[e].level], 0) : 0 }, i[e].block.hor = i[e].block.left + i[e].block.right, i[e].block.ver = i[e].block.top + i[e].block.bottom) : i[e].block === t && (i[e].block = { top: 0, left: 0, right: 0, bottom: 0, hor: 0, ver: 0 }), i[e].blockSpacing !== t) {
                var l = { paddingLeft: i[e].block.left, paddingRight: i[e].block.right, marginTop: i[e].block.top, marginBottom: i[e].block.bottom },
                    c = JSON.stringify(l);
                l !== i[e].emptyObject && c !== i[e].caches.setsizeBLOCKOBJ && (tpGS.gsap.set(i[e].blockSpacing.block, l), i[e].caches.setsizeBLOCKOBJ = c, d = !0)
            }
            if (i[e].levelForced = i[e].level = i.getResponsiveLevel(e), i[e].rowHeights = i.getRowHeights(e), i[e].aratio = i[e].gridheight[i[e].level] / i[e].gridwidth[i[e].level], i[e].module.width = "auto" === i[e].sliderLayout || 1 == i[e].disableForceFullWidth ? i[e].cpar.width() : n - i[e].block.hor, i[e].outNavDims = i.getOuterNavDimension(e), i[e].canv.width = i[e].module.width - i[e].outNavDims.horizontal - (s ? i.scrollBarWidth : 0), s && "auto" === i[e].sliderLayout && (i[e].canv.width = Math.min(i[e].gridwidth[i[e].level], n)), "fullscreen" === i[e].sliderLayout || i[e].infullscreenmode) {
                var p = i.getWinH(e) - i.getFullscreenOffsets(e);
                i[e].canv.height = Math.max(i[e].rowHeights.cur, Math.max(p - i[e].outNavDims.vertical, i[e].minHeight)), o !== r && (i[e].currentSlideHeight = Math.max(i[e].rowHeights.last, Math.max(p - i[e].outNavDims.vertical, i[e].minHeight)), i[e].redraw.maxHeightOld = !0), i[e].drawUpdates.c.height = "100%"
            } else i[e].canv.height = i[e].keepBPHeight ? i[e].gridheight[i[e].level] : Math.round(i[e].canv.width * i[e].aratio), i[e].canv.height = i[e].autoHeight ? i[e].canv.height : Math.min(i[e].canv.height, i[e].gridheight[i[e].level]), i[e].canv.height = Math.max(Math.max(i[e].rowHeights.cur, i[e].canv.height), i[e].minHeight), i[e].drawUpdates.c.height = i[e].canv.height;
            i[e].module.height = i[e].canv.height, "fullwidth" != i[e].sliderLayout || i[e].fixedOnTop || (i[e].drawUpdates.c.maxHeight = 0 != i[e].maxHeight ? Math.min(i[e].canv.height, i[e].maxHeight) : i[e].canv.height), i[e].CM = i.getSizeMultpilicator(e, i[e].enableUpscaling, { width: i[e].canv.width, height: i[e].canv.height }), i[e].content.width = i[e].gridwidth[i[e].level] * i[e].CM.w, i[e].content.height = Math.round(Math.max(i[e].rowHeights.cur, i[e].gridheight[i[e].level] * i[e].CM.h));
            var g = i[e].module.margins.top + i[e].module.margins.bottom + ("fullscreen" === i[e].sliderLayout ? 0 : i[e].outNavDims.vertical) + i[e].canv.height + i[e].module.paddings.top + i[e].module.paddings.bottom;
            i[e].drawUpdates.cpar.height = g, i[e].drawUpdates.cpar.width = "auto" === i[e].sliderLayout ? "auto" : i[e].module.width, "auto" === i[e].sliderLayout || "fullscreen" === i[e].sliderLayout && !0 === i[e].disableForceFullWidth || i[e].rsFullWidthWrap === t ? "fullscreen" == i[e].sliderLayout && 1 == i[e].disableForceFullWidth && (i[e].drawUpdates.cpar.left = 0) : i[e].drawUpdates.cpar.left = 0 - Math.ceil(i[e].rsFullWidthWrap.offset().left - (i[e].outNavDims.left + i[e].block.left)), i[e].sbtimeline.set && i[e].sbtimeline.fixed ? (i[e].sbtimeline.extended === t && i.updateFixedScrollTimes(e), i[e].forcerHeight = 2 * g + i[e].sbtimeline.extended) : i[e].forcerHeight = g, i[e].forcerHeight !== i[e].caches.setsizeForcerHeight && i[e].forcer !== t && (i[e].caches.setsizeForcerHeight = i[e].forcerHeight, d = !0, i[e].redraw.forcer = !0), i[e].drawUpdates.c.width = i[e].canv.width, "auto" === i[e].sliderLayout && (i[e].drawUpdates.c.left = i[e].outNavDims.left), i[e].drawUpdates.c !== i[e].emptyObject && JSON.stringify(i[e].drawUpdates.c) !== i[e].caches.setsizeCOBJ && (i[e].caches.setsizeCOBJ = JSON.stringify(i[e].drawUpdates.c), d = !0, i[e].redraw.c = !0), i[e].drawUpdates.cpar !== i[e].emptyObject && JSON.stringify(i[e].drawUpdates.cpar) !== i[e].caches.setsizeCPAROBJ && (i[e].caches.setsizeCPAROBJ = JSON.stringify(i[e].drawUpdates.cpar), d = !0, i[e].redraw.cpar = !0), s && "auto" === i[e].sliderLayout && i[e].caches.canWidth !== i[e].canv.width && (i[e].caches.canWidth = i[e].canv.width, d = !0, i[e].redraw.modalcanvas = !0), i[e].slayers && i[e].slayers.length > 0 && i[e].outNavDims.left !== i[e].caches.outNavDimsLeft && "fullwidth" != i[e].sliderLayout && "fullscreen" != i[e].sliderLayout && (i[e].caches.outNavDimsLeft = i[e].outNavDims.left, i[e].redraw.slayers = !0), s && i[e].modal.calibration !== t && "middle" === i[e].modal.vertical && (i[e].modal.calibration.top = i.getWinH(e) < g ? "0%" : "50%", i[e].modal.calibration.y = i.getWinH(e) < g ? "0px" : "-50%", "fullwidth" === i[e].sliderLayout && (d = !0, i[e].redraw.modulewrap = !0)), i[e].gridOffsetWidth = (i[e].module.width - i[e].gridwidth[i[e].level]) / 2, i[e].gridOffsetHeight = (i[e].module.height - i[e].content.height) / 2, i[e].caches.curRowsHeight = i[e].currentRowsHeight = i[e].rowHeights.cur, i[e].caches.moduleWidth = i[e].width = i[e].module.width, i[e].caches.moduleHeight = i[e].height = i[e].module.height, i[e].caches.canWidth = i[e].conw = i[e].canv.width, i[e].caches.canHeight = i[e].conh = i[e].canv.height, i[e].bw = i[e].CM.w, i[e].bh = i[e].CM.h, i[e].caches.outNavDimsLeft = i[e].outNavDims.left, window.requestAnimationFrame(function() { i[e].redraw.forcer && tpGS.gsap.set(i[e].forcer, { height: i[e].forcerHeight }), i[e].redraw.c && tpGS.gsap.set(i[e].c, i[e].drawUpdates.c), i[e].redraw.cpar && tpGS.gsap.set(i[e].cpar, i[e].drawUpdates.cpar), i[e].redraw.modalcanvas && tpGS.gsap.set([i[e].modal.c, i[e].canvas], { width: i[e].canv.width }), i[e].redraw.maxHeightOld && (i[e].slides[o].style.maxHeight = i[e].currentSlideHeight !== i[e].canv.height ? i[e].currentSlideHeight + "px" : "none"), i[e].redraw.slayers && tpGS.gsap.set(i[e].slayers, { left: i[e].outNavDims.left }), i[e].redraw.modulewrap && tpGS.gsap.set(i[e].modal.c.find("rs-module-wrap"), i[e].modal.calibration), !0 !== i[e].navigation.initialised && "prepared" === a && ("hero" !== i[e].sliderType && i.createNavigation && i[e].navigation.use && !0 !== i[e].navigation.createNavigationDone && i.createNavigation(e), i.resizeThumbsTabs && i.resizeThumbsTabs && i[e].navigation.use && i.resizeThumbsTabs(e)), i[e].rebuildProgressBar && O(e), i[e].redraw = {} });
            var u = i[e].inviewport && (i[e].heightInLayers !== t && i[e].module.height !== i[e].heightInLayers || i[e].widthInLayers !== t && i[e].module.width !== i[e].widthInLayers);
            return "ignore" !== a && u && (i[e].heightInLayers = t, i[e].widthInLayers = t, "carousel" !== i[e].sliderType && (i[e].pr_next_key !== t ? i.animateTheLayers({ slide: i[e].pr_next_key, id: e, mode: "rebuild", caller: "swapSlideProgress_1" }) : i[e].pr_processing_key !== t ? i.animateTheLayers({ slide: i[e].pr_processing_key, id: e, mode: "rebuild", caller: "swapSlideProgress_2" }) : i[e].pr_active_key !== t && i.animateTheLayers({ slide: i[e].pr_active_key, id: e, mode: "rebuild", caller: "swapSlideProgress_3" })), d = !0), d && "ignore" !== a && i.requestLayerUpdates(e, "enterstage"), i[e].module.height !== i[e].module.lastHeight && (i[e].module.lastHeight = i[e].module.height, window.requestAnimationFrame(function() { window.innerHeight !== screen.height && Math.round(window.innerHeight * window.devicePixelRatio) !== screen.height && m(e, t, !1) })), tpGS.gsap.delayedCall(.1, function() { i[e].lastScrollBarWidth !== i.scrollBarWidth ? (i.updateDims(e, "ignore"), m(e)) : i.isModalOpen || i.scrollBarWidth === window.innerWidth - document.documentElement.clientWidth || i.rAfScrollbar === t && (i.rAfScrollbar = requestAnimationFrame(function() { i.rAfScrollbar = t, i.getWindowDimension(e, !1) })) }), d
        },
        getSlideIndex: function(e, t) {
            var a = !1;
            for (var r in i[e].slides) {
                if (!i[e].slides.hasOwnProperty(r) || !1 !== a) continue;
                a = i.gA(i[e].slides[r], "key") === t ? r : a
            }
            return !1 === a ? 0 : a
        },
        loadUpcomingContent: function(e) {
            if ("smart" == i[e].lazyType) {
                var t = [],
                    a = parseInt(i.getSlideIndex(e, i.gA(i[e].pr_next_slide[0], "key")), 0),
                    r = a - 1 < 0 ? i[e].realslideamount - 1 : a - 1,
                    o = a + 1 == i[e].realslideamount ? 0 : a + 1;
                r !== a && t.push(i[e].slides[r]), o !== a && t.push(i[e].slides[o]), t.length > 0 && (i.loadImages(t, e, 2), i.waitForCurrentImages(t, e, function() {}))
            }
        },
        getFullscreenOffsets: function(a) { var r = 0; if (i[a].fullScreenOffsetContainer != t) { var o = ("" + i[a].fullScreenOffsetContainer).split(","); for (var s in o) o.hasOwnProperty(s) && (r += e(o[s]).outerHeight(!0) || 0) } return i[a].fullScreenOffset != t && (!i.isNumeric(i[a].fullScreenOffset) && i[a].fullScreenOffset.split("%").length > 1 ? r += i.getWinH(a) * parseInt(i[a].fullScreenOffset, 0) / 100 : i.isNumeric(parseInt(i[a].fullScreenOffset, 0)) && (r += parseInt(i[a].fullScreenOffset, 0) || 0)), i[a].fullScreenOffsetResult = r, r },
        unToggleState: function(e) {
            if (e !== t)
                for (var i = 0; i < e.length; i++) try { document.getElementById(e[i]).classList.remove("rs-tc-active") } catch (e) {}
        },
        toggleState: function(e) {
            if (e !== t)
                for (var i = 0; i < e.length; i++) try { document.getElementById(e[i]).classList.add("rs-tc-active") } catch (e) {}
        },
        swaptoggleState: function(e) {
            if (e != t && e.length > 0)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    if (i.gA(r, "toggletimestamp") !== t && (new Date).getTime() - i.gA(r, "toggletimestamp") < 250) return;
                    i.sA(r, "toggletimestamp", (new Date).getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"))
                }
        },
        lastToggleState: function(e) {
            var i;
            if (e !== t)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    i = !0 === i || null !== r && r.className.indexOf("rs-tc-active") >= 0 || i
                }
            return i
        },
        revCheckIDS: function(a, r) {
            if (i.gA(r, "idcheck") === t) {
                var o = r.id,
                    s = e.inArray(r.id, window.RSANYID),
                    n = -1; - 1 !== s && (n = e.inArray(r.id, i[a].anyid), window.RSANYID_sliderID[s] === a && -1 === n || (r.id = r.id + "_" + Math.round(9999 * Math.random()), console.log("Warning - ID:" + o + " exists already. New Runtime ID:" + r.id), s = n = -1)), -1 === n && i[a].anyid.push(r.id), -1 === s && (window.RSANYID.push(r.id), window.RSANYID_sliderID.push(a))
            }
            return i.sA(r, "idcheck", !0), r.id
        },
        buildSpinner: function(i, a, r, o) {
            var s;
            if ("off" !== a) {
                o = o === t ? "" : o, r = r === t ? "#ffffff" : r;
                var n = parseInt(a.replace("spinner", ""), 10);
                if (isNaN(n) || n < 6) {
                    var d = 'style="background-color:' + r + '"',
                        l = o === t || 3 !== n && 4 != n ? "" : d;
                    s = e("<rs-loader " + (o === t || 1 !== n && 2 != n ? "" : d) + ' class="' + a + " " + o + '"><div ' + l + ' class="dot1"></div><div ' + l + ' class="dot2"></div><div ' + l + ' class="bounce1"></div><div ' + l + ' class="bounce2"></div><div ' + l + ' class="bounce3"></div></rs-loader>')
                } else {
                    var c, p = '<div class="rs-spinner-inner"';
                    if (7 === n) - 1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"');
                    else 12 === n && (p += ' style="background:' + r + '"');
                    p += ">";
                    for (var g = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], u = 0; u < g; u++) u > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
                    s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>")
                }
                return s
            }
        },
        addStaticLayerTo: function(e, t, a) {
            if (i[e].slayers.length < 2) {
                var r = document.createElement("rs-static-layers");
                r.className = "rs-stl-" + t, r.appendChild(a[0]), i[e].c[0].appendChild(r), i[e].slayers.push(r)
            } else i[e].slayers[1].appendChild(a[0])
        }
    });
    var a = i.is_mobile(),
        r = (i.is_android(), function() { return i.isIE11() ? function(e, t) { return e.querySelectorAll(t) } : function(e, t) { return e.getElementsByTagName(t) } }),
        o = function(e) { i[e].responsiveLevels = i.revToResp(i[e].responsiveLevels, i[e].rle), i[e].visibilityLevels = i.revToResp(i[e].visibilityLevels, i[e].rle), i[e].responsiveLevels[0] = 9999, i[e].rle = i[e].responsiveLevels.length || 1, i[e].gridwidth = i.revToResp(i[e].gridwidth, i[e].rle), i[e].gridheight = i.revToResp(i[e].gridheight, i[e].rle), i[e].editorheight !== t && (i[e].editorheight = i.revToResp(i[e].editorheight, i[e].rle)), i.updateDims(e) },
        s = function(t, i) { var a = []; return e.each(t, function(e, t) { e != i && a.push(t) }), a },
        n = function(t, a, r) {
            i[r].c.find(t).each(function() {
                var t = e(this);
                t.data("key") === a && t.remove()
            })
        },
        d = function(e, a) {
            if (i["rsfont_" + e] == t && (i["rsfont_" + e] = document.createElement("span"), i["rsfont_" + e].innerHTML = Array(100).join("wi"), i["rsfont_" + e].style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;"), i["rsfont_" + e].style.fontFamily = e, document.body.appendChild(i["rsfont_" + e])), a === t) return i["rsfont_" + e].clientWidth;
            document.body.removeChild(i["rsfont_" + e])
        },
        l = function(t, i) { var a = 0; return t.find(i).each(function() { var t = e(this);!t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth()) }), a },
        c = function(r) {
            if (r === t || i[r] === t || i[r].c === t) return !1;
            if (i[r].cpar !== t && i[r].cpar.data("aimg") != t && ("enabled" == i[r].cpar.data("aie8") && i.isIE(8) || "enabled" == i[r].cpar.data("amobile") && a)) i[r].c.html('<img class="tp-slider-alternative-image" src="' + i[r].cpar.data("aimg") + '">');
            else {
                window._rs_firefox13 = !1, window._rs_firefox = i.isFirefox(), window._rs_ie = window._rs_ie === t ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === t ? 9 == document.documentMode : window._rs_ie9;
                var o = e.fn.jquery.split("."),
                    s = parseFloat(o[0]),
                    n = parseFloat(o[1]);
                1 == s && n < 7 && i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + o + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), s > 1 && (window._rs_ie = !1), i[r].realslideamount = i[r].slideamount = 0;
                var d = i.getByTag(i[r].canvas[0], "RS-SLIDE"),
                    l = [];
                for (var c in i[r].notInNav = [], i[r].slides = [], d) d.hasOwnProperty(c) && ("on" == i.gA(d[c], "hsom") && a ? l.push(d[c]) : (i.gA(d[c], "invisible") || 1 == i.gA(d[c], "invisible") ? i[r].notInNav.push(d[c]) : (i[r].slides.push(d[c]), i[r].slideamount++), i[r].realslideamount++, i.sA(d[c], "originalindex", i[r].realslideamount), i.sA(d[c], "origindex", i[r].realslideamount - 1)));
                for (c in l) l.hasOwnProperty(c) && l[c].remove();
                for (c in i[r].notInNav) i[r].notInNav.hasOwnProperty(c) && (i.sA(i[r].notInNav[c], "not_in_nav", !0), i[r].canvas[0].appendChild(i[r].notInNav[c]));
                if (i[r].canvas.css({ visibility: "visible" }), i[r].slayers = i[r].c.find("rs-static-layers"), i[r].slayers.length > 0 && i.sA(i[r].slayers[0], "key", "staticlayers"), !0 === i[r].modal.useAsModal && (i[r].cpar.wrap('<rs-modal id="' + i[r].c[0].id + '_modal"></rs-modal>'), i[r].modal.c = e(i.closestNode(i[r].cpar[0], "RS-MODAL")), i[r].modal.c.appendTo(e("body")), i[r].modal !== t && i[r].modal.alias !== t && i.revModal(r, { mode: "init" })), 1 == i[r].waitForInit || 1 == i[r].modal.useAsModal) return i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].c.trigger("revolution.slide.waitingforinit"), void(i[r].waitingForInit = !0);
                window.requestAnimationFrame(function() { u(r) }), i[r].initEnded = !0
            }
        },
        p = function() { e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() { i.window.trigger("resize") }, 200) },
        g = function(e, a, r) { return i.gA(e, "lazyload") !== t ? i.gA(e, "lazyload") : i[r].lazyloaddata !== t && i[r].lazyloaddata.length > 0 && i.gA(e, i[r].lazyloaddata) !== t ? i.gA(e, i[r].lazyloaddata) : i.gA(e, "lazy-src") !== t ? i.gA(e, "lazy-src") : i.gA(e, "lazy-wpfc-original-src") !== t ? i.gA(e, "lazy-wpfc-original-src") : i.gA(e, "lazy") !== t ? i.gA(e, "lazy") : a },
        u = function(r) {
            if (i[r] !== t) {
                if (i[r].sliderisrunning = !0, !0 !== i[r].noDetach && i[r].c.detach(), i[r].shuffle) {
                    for (var o = i[r].canvas.find("rs-slide:first-child"), s = i.gA(o[0], "firstanim"), n = 0; n < i[r].slideamount; n++) i[r].canvas.find("rs-slide:eq(" + Math.round(Math.random() * i[r].slideamount) + ")").prependTo(i[r].canvas);
                    i.sA(i[r].canvas.find("rs-slide:first-child")[0], "firstanim", s)
                }
                i[r].slides = i.getByTag(i[r].canvas[0], "RS-SLIDE"), i[r].thumbs = new Array(i[r].slides.length), i[r].slots = 1, i[r].firststart = 1, i[r].loadqueue = [], i[r].syncload = 0;
                var d = 0,
                    l = "carousel" === i[r].sliderType && i[r].carousel.border_radius !== t ? parseInt(i[r].carousel.border_radius, 0) : 0;
                for (var c in i[r].slides)
                    if (i[r].slides.hasOwnProperty(c) && "length" !== c) {
                        var u = i[r].slides[c],
                            h = i.getByTag(u, "IMG")[0];
                        i.gA(u, "key") === t && i.sA(u, "key", "rs-" + Math.round(999999 * Math.random()));
                        var v = { params: Array(12), id: i.gA(u, "key"), src: i.gA(u, "thumb") !== t ? i.gA(u, "thumb") : g(h, h !== t ? h.src : t, r) };
                        i.gA(u, "title") === t && i.sA(u, "title", ""), i.gA(u, "description") === t && i.sA(u, "description", ""), v.params[0] = { from: RegExp("\\{\\{title\\}\\}", "g"), to: i.gA(u, "title") }, v.params[1] = { from: RegExp("\\{\\{description\\}\\}", "g"), to: i.gA(u, "description") };
                        for (var y = 1; y <= 10; y++) i.gA(u, "p" + y) !== t ? v.params[y + 1] = { from: RegExp("\\{\\{param" + y + "\\}\\}", "g"), to: i.gA(u, "p" + y) } : v.params[y + 1] = { from: RegExp("\\{\\{param" + y + "\\}\\}", "g"), to: "" };
                        if (i[r].thumbs[d] = e.extend({}, !0, v), l > 0 && tpGS.gsap.set(u, { borderRadius: l + "px" }), i.gA(u, "link") != t || i.gA(u, "linktoslide") !== t) {
                            var b = i.gA(u, "link") !== t ? i.gA(u, "link") : "slide",
                                w = "slide" != b ? "no" : i.gA(u, "linktoslide"),
                                _ = i.gA(u, "seoz");
                            if (w != t && "no" != w && "next" != w && "prev" != w)
                                for (var S in i[r].slides) i[r].slides.hasOwnProperty(S) && parseInt(i.gA(i[r].slides[S], "origindex"), 0) + 1 == i.gA(u, "linktoslide") && (w = i.gA(i[r].slides[S], "key"));
                            e(u).prepend('<rs-layer class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" data-zindex="' + ("back" === _ ? 0 : "front" === _ ? 95 : _ !== t ? parseInt(_, 0) : 100) + '" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == w ? "slide" == b || a ? "" : "  data-actions='o:click;a:simplelink;target:" + (i.gA(u, "target") || "_self") + ";url:" + b + ";'" : "  data-actions='" + ("scroll_under" === w ? "o:click;a:scrollbelow;offset:100px;" : "prev" === w ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === w ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + w + ";d:0.2;") + "'") + " data-frame_1='e:power3.inOut;st:100;sp:100' data-frame_999='e:power3.inOut;o:0;st:w;sp:100'>" + (a ? "<a " + ("slide" != b ? ("_blank" === i.gA(u, "target") ? 'rel="noopener" ' : "") + 'target="' + (i.gA(u, "target") || "_self") + '" href="' + b + '"' : "") + "><span></span></a>" : "") + "</rs-layer>")
                        }
                        d++
                    }
                if (i[r].simplifyAll && (i.isIE(8) || i.iOSVersion()) && (i[r].c.find(".rs-layer").each(function() {
                        var t = e(this);
                        t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                    }), i[r].c.find("rs-slide").each(function() {
                        var t = e(this);
                        t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("panzoom", null)
                    })), window._rs_desktop = window._rs_desktop === t ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, i[r].autoHeight = "fullscreen" == i[r].sliderLayout || i[r].autoHeight, "fullwidth" != i[r].sliderLayout || i[r].autoHeight || i[r].c.css({ maxHeight: i[r].gridheight[i[r].level] + "px" }), "auto" == i[r].sliderLayout || null !== i.closestNode(i[r].c[0], "RS-FULLWIDTH-WRAP") || "fullscreen" === i[r].sliderLayout && 1 == i[r].disableForceFullWidth) i[r].topc = i[r].cpar;
                else {
                    var x = i[r].cpar[0].style.marginTop,
                        k = i[r].cpar[0].style.marginBottom;
                    x = x === t || "" === x ? "" : "margin-top:" + x + ";", k = k === t || "" === k ? "" : "margin-bottom:" + k + ";", i[r].rsFullWidthWrap = i[r].topc = e('<rs-fullwidth-wrap id="' + i[r].c[0].id + '_forcefullwidth" style="' + x + k + '"></rs-fullwidth-wrap>'), i[r].forcer = e('<rs-fw-forcer style="height:' + (i[r].forcerHeight === t ? i[r].cpar.height() : i[r].forcerHeight) + 'px"></rs-fw-forcer>'), i[r].topc.append(i[r].forcer), i[r].topc.insertBefore(i[r].cpar), i[r].cpar.detach(), i[r].cpar.css({ marginTop: "0px", marginBottom: "0px", position: "absolute" }), i[r].cpar.prependTo(i[r].topc)
                }
                if (i[r].forceOverflow && i[r].topc[0].classList.add("rs-forceoverflow"), "carousel" === i[r].sliderType && !0 !== i[r].overflowHidden && i[r].c.css({ overflow: "visible" }), 0 !== i[r].maxHeight && tpGS.gsap.set([i[r].cpar, i[r].c, i[r].topc], { maxHeight: i[r].maxHeight + "px" }), i[r].fixedOnTop && tpGS.gsap.set(i[r].blockSpacing !== t && i[r].blockSpacing.block !== t ? i[r].blockSpacing.block : i[r].topc, { position: "fixed", top: "0px", left: "0px", pointerEvents: "none", zIndex: 5e3 }), i[r].shadow !== t && i[r].shadow > 0 && i[r].cpar.addClass("tp-shadow" + i[r].shadow).append('<div class="tp-shadowcover" style="background-color:' + i[r].cpar.css("backgroundColor") + ";background-image:" + i[r].cpar.css("backgroundImage") + '"></div>'), i.updateDims(r, "prepared"), i.observeWraps === t && (i.observeWraps = new i.wrapObserver.init(function(e, i) { m(i, t, !0) })), !i[r].c.hasClass("revslider-initialised")) {
                    i[r].c[0].classList.add("revslider-initialised"), i[r].c[0].id = i[r].c[0].id === t ? "revslider-" + Math.round(1e3 * Math.random() + 5) : i[r].c[0].id, i.revCheckIDS(r, i[r].c[0]), i[r].origcd = parseInt(i[r].duration, 0), i[r].scrolleffect._L = [], i[r].sbas = i[r].sbas === t ? {} : i[r].sbas, i[r].layers = i[r].layers || {}, i[r].sortedLayers = i[r].sortedLayers || {};
                    var L = i[r].c[0].querySelectorAll("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer");
                    for (var R in L)
                        if (L.hasOwnProperty(R)) {
                            var O, I, T = e(L[R]),
                                C = T.data();
                            if (C.startclasses = L[R].className, C.startclasses = C.startclasses === t || null === C.startclasses ? "" : C.startclasses, C.animationonscroll = !!i[r].sbtimeline.set && i[r].sbtimeline.layers, C.animationonscroll = !0 === C.animationonscroll || "true" == C.animationonscroll, C.filteronscroll = !!i[r].scrolleffect.set && i[r].scrolleffect.layers, C.pxundermask = C.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== i[r].parallax.type && C.startclasses.indexOf("rs-pxl-") >= 0, C.noPevents = C.startclasses.indexOf("rs-noevents") >= 0, C.sba)
                                for (var y in O = C.sba.split(";")) O.hasOwnProperty(y) && ("t" == (I = O[y].split(":"))[0] && (C.animationonscroll = I[1], "false" == I[1] && (C.animOnScrollForceDisable = !0)), "e" == I[0] && (C.filteronscroll = I[1]), "so" == I[0] && (C.scrollBasedOffset = parseInt(I[1]) / 1e3));
                            if ("true" != C.animationonscroll && 1 != C.animationonscroll || (C.startclasses += " rs-sba", T[0].className += " rs-sba"), C.startclasses.indexOf("rs-layer-static") >= 0 && i.handleStaticLayers && i.handleStaticLayers(T, r), "RS-BGVIDEO" !== T[0].tagName) {
                                if (T[0].classList.add("rs-layer"), "column" === C.type && (C.columnwidth = "33.33%", C.verticalalign = "top", C.column !== t))
                                    for (var A in O = C.column.split(";")) O.hasOwnProperty(A) && ("w" === (I = O[A].split(":"))[0] && (C.columnwidth = I[1]), "a" === I[0] && (C.verticalalign = I[1]));
                                var M = C.startclasses.indexOf("slidelink") >= 0 ? "z-index:" + C.zindex + ";width:100% !important;height:100% !important;" : "",
                                    D = "column" !== C.type ? "" : C.verticalalign === t ? " vertical-align:top;" : " vertical-align:" + C.verticalalign + ";",
                                    z = "row" === C.type || "column" === C.type ? "position:relative;" : "position:absolute;",
                                    G = "",
                                    N = "row" === C.type ? "rs-row-wrap" : "column" === C.type ? "rs-column-wrap" : "group" === C.type ? "rs-group-wrap" : "rs-layer-wrap",
                                    H = "",
                                    j = "",
                                    F = (C.noPevents, ";pointer-events:none");
                                "row" === C.type || "column" === C.type || "group" === C.type ? (T[0].classList.remove("tp-resizeme"), "column" === C.type && (C.width = "auto", T[0].group = "row", tpGS.gsap.set(T, { width: "auto" }), C.filteronscroll = !1)) : (H = "display:" + ("inline-block" === T[0].style.display ? "inline-block" : "block") + ";", null !== i.closestNode(T[0], "RS-COLUMN") ? (T[0].group = "column", C.filteronscroll = !1) : null !== i.closestNode(T[0], "RS-GROUP-WRAP") && (T[0].group = "group", C.filteronscroll = !1)), C.wrpcls !== t && (G = G + " " + C.wrpcls), C.wrpid !== t && (j = 'id="' + C.wrpid + '"'), T.wrap("<" + N + " " + j + ' class="rs-parallax-wrap ' + G + '" style="' + D + " " + M + z + H + F + '"><rs-loop-wrap style="' + M + z + H + '"><rs-mask-wrap style="' + M + z + H + '">' + (C.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + "</rs-mask-wrap></rs-loop-wrap></" + N + ">"), !0 !== C.filteronscroll && "true" != C.filteronscroll || i[r].scrolleffect._L.push(T.parent()), T[0].id = T[0].id === t ? "layer-" + Math.round(999999999 * Math.random()) : T[0].id, i.revCheckIDS(r, T[0]), C.pxundermask ? i[r]._Lshortcuts[T[0].id] = { p: e(T[0].parentNode.parentNode.parentNode.parentNode), lp: e(T[0].parentNode.parentNode.parentNode), m: e(T[0].parentNode.parentNode) } : i[r]._Lshortcuts[T[0].id] = { p: e(T[0].parentNode.parentNode.parentNode), lp: e(T[0].parentNode.parentNode), m: e(T[0].parentNode) }, "column" === C.type && i[r]._Lshortcuts[T[0].id].p.append('<rs-cbg-mask-wrap><rs-column-bg id="' + T[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), "text" === C.type && i.getByTag(T[0], "IFRAME").length > 0 && (i[r].slideHasIframe = !0, T[0].classList.add("rs-ii-o")), i[r].BUG_safari_clipPath && "true" != C.animationonscroll && 1 != C.animationonscroll && T[0].classList.add("rs-pelock"), T[0].dataset.staticz !== t && "row" !== C.type && "row" !== T[0].group && "column" !== T[0].group && i.addStaticLayerTo(r, T[0].dataset.staticz, i[r]._Lshortcuts[T[0].id].p)
                            }
                            i.gA(T[0], "actions") && i.checkActions && i.checkActions(T, r, i[r]), !i.checkVideoApis || window.rs_addedvim && window.rs_addedyt || i[r].youtubeapineeded && i[r].vimeoapineeded || i.checkVideoApis(T, r)
                        }
                    i.checkActions && i.checkActions(t, r), i[r].c[0].addEventListener("mousedown", function() {
                        if (!0 !== i[r].onceClicked && (i[r].onceClicked = !0, !0 !== i[r].onceVideoPlayed && i[r].activeRSSlide !== t && i[r].slides !== t && i[r].slides[i[r].activeRSSlide] !== t)) {
                            var a = e(i[r].slides[i[r].activeRSSlide]).find("rs-bgvideo");
                            a !== t && null !== a && a.length > 0 && i.playVideo(a, r)
                        }
                    }), i[r].c[0].addEventListener("mouseenter", function() { i[r].c.trigger("tp-mouseenter"), i[r].overcontainer = !0 }, { passive: !0 }), i[r].c[0].addEventListener("mouseover", function() { i[r].c.trigger("tp-mouseover"), i[r].overcontainer = !0 }, { passive: !0 }), i[r].c[0].addEventListener("mouseleave", function() { i[r].c.trigger("tp-mouseleft"), i[r].overcontainer = !1 }, { passive: !0 }), i[r].c.find(".rs-layer video").each(function(t) {
                        var i = e(this);
                        i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({ display: "none" })
                    }), i[r].rs_static_layer = i.getByTag(i[r].c[0], "RS-STATIC-LAYERS"), i.preLoadAudio && i[r].rs_static_layer.length > 0 && i.preLoadAudio(e(i[r].rs_static_layer), r, 1), i[r].rs_static_layer.length > 0 && (i.loadImages(i[r].rs_static_layer[0], r, 0, !0), i.waitForCurrentImages(i[r].rs_static_layer[0], r, function() { i[r] !== t && i[r].c.find("rs-static-layers img").each(function() { this.src = i.getLoadObj(r, i.gA(this, "src") != t ? i.gA(this, "src") : this.src).src }) })), i[r].rowzones = [], i[r].rowzonesHeights = [], i[r].middleZones = [];
                    var W = i.deepLink(r, B("#")[0]);
                    W !== t && (i[r].startWithSlide = W, i[r].deepLinkListener = !0, window.addEventListener("hashchange", function() {
                        if (!0 !== i[r].ignoreDeeplinkChange) {
                            var e = i.deepLink(r, B("#")[0]);
                            e !== t && i.callingNewSlide(r, e, !0)
                        }
                        i[r].ignoreDeeplinkChange = !1
                    })), i[r].loader = i.buildSpinner(r, i[r].spinner, i[r].spinnerclr), i[r].loaderVisible = !0, i[r].c.append(i[r].loader), f(r), ("off" !== i[r].parallax.type || i[r].scrolleffect.set || i[r].sbtimeline.set) && i.checkForParallax && i.checkForParallax(r), i[r].fallbacks.disableFocusListener || "true" == i[r].fallbacks.disableFocusListener || !0 === i[r].fallbacks.disableFocusListener || (i[r].c.addClass("rev_redraw_on_blurfocus"), P());
                    var V = i[r].viewPort;
                    for (var y in "on" === i[r].navigation.mouseScrollNavigation && (V.enable = !0), i[r].slides)
                        if (i[r].slides.hasOwnProperty(y)) {
                            var E = e(i[r].slides[y]);
                            i[r].rowzones[y] = [], i[r].rowzonesHeights[y] = [], i[r].middleZones[y] = [], E.find("rs-zone").each(function() { i[r].rowzones[y].push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].middleZones[y].push(this) }), (V.enable && i[r].inviewport || !V.enable) && "all" == i[r].lazyType && (i.loadImages(E[0], r, y), i.waitForCurrentImages(E[0], r, function() {}))
                        }
                    i[r].srowzones = [], i[r].smiddleZones = [], i[r].slayers && i[r].slayers.find("rs-zone").each(function() { i[r].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].smiddleZones.push(this) }), "carousel" === i[r].sliderType && tpGS.gsap.set(i[r].canvas, { scale: 1, perspective: 1200, transformStyle: "flat", opacity: 0 }), i[r].c.prependTo(i[r].cpar), e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, { passive: !0 }), window.addEventListener("mozfullscreenchange", p, { passive: !0 }), window.addEventListener("webkitfullscreenchange", p, { passive: !0 }), i.document.on("updateContainerSizes." + i[r].c.attr("id"), function() { if (i[r] !== t) return i[r].c != t && void(i.updateDims(r, "ignore") && window.requestAnimationFrame(function() { i.updateDims(r, "ignore"), i[r].fullScreenMode = i.checkfullscreenEnabled(r), i.lastwindowheight = i.getWinH(r), m(r) })) }), V.presize && (i[r].pr_next_slide = e(i[r].slides[0]), i.loadImages(i[r].pr_next_slide[0], r, 0, !0), i.waitForCurrentImages(i[r].pr_next_slide.find(".tp-layers"), r, function() { i.animateTheLayers && i.animateTheLayers({ slide: i[r].pr_next_key, id: r, mode: "preset", caller: "runSlider" }) })), ("off" != i[r].parallax.type || i[r].sbtimeline.set || !0 === V.enable) && i.scrollTicker(r), !0 !== V.enable && (i[r].inviewport = !0, i.enterViewPort(r)), i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].observeWrap && i.observeWraps && i.wrapObserver.observe(i[r].rsFullWidthWrap !== t ? i[r].rsFullWidthWrap[0] : i[r].cpar[0], r)
                }
            }
        },
        h = function(e, a) { i.winW < i[e].hideSliderAtLimit ? (i[e].c.trigger("stoptimer"), !0 !== i[e].sliderIsHidden && (i.sA(i[e].cpar[0], "displaycache", "none" != i[e].cpar.css("display") ? i[e].cpar.css("display") : i.gA(i[e].cpar[0], "displaycache")), i[e].cpar.css({ display: "none" }), i[e].sliderIsHidden = !0)) : (!0 === i[e].sliderIsHidden || i[e].sliderIsHidden === t && i[e].c.is(":hidden")) && a && (i[e].cpar[0].style.display = i.gA(i[e].cpar[0], "displaycache") != t && "none" != i.gA(i[e].cpar[0], "displaycache") ? i.gA(i[e].cpar[0], "displaycache") : "block", i[e].sliderIsHidden = !1, i[e].c.trigger("restarttimer"), window.requestAnimationFrame(function() { m(e, !0) })), i.hideUnHideNav && i[e].navigation.use && i.hideUnHideNav(e) },
        m = function(e, r, o) {
            if (i[e].c === t) return !1;
            if (i[e].dimensionReCheck = {}, i[e].c.trigger("revolution.slide.beforeredraw"), 1 == i[e].infullscreenmode && (i[e].minHeight = i.getWinH(e)), a && (i[e].lastMobileHeight = i.getWinH(e)), o && i.updateDims(e), !i.resizeThumbsTabs || !0 === i.resizeThumbsTabs(e)) {
                if (window.requestAnimationFrame(function() { h(e, !0 !== r), O(e) }), i[e].started) {
                    if ("carousel" == i[e].sliderType)
                        for (var s in i.prepareCarousel(e), i[e].sbgs) i[e].sbgs.hasOwnProperty(s) && i[e].sbgs[s].mDIM !== t && i.updateSlideBGs(e, i[e].sbgs[s].key, i[e].sbgs[s]);
                    else i.updateSlideBGs(e);
                    if ("carousel" === i[e].sliderType && i[e].carCheckconW != i[e].canv.width) {
                        for (var n in clearTimeout(i[e].pcartimer), i[e].sbgs) i[e].sbgs[n].loadobj !== t && i.updateSlideBGs(e, i[e].sbgs[n].key, i[e].sbgs[n]);
                        i[e].pcartimer = setTimeout(function() { i.prepareCarousel(e), i.animateTheLayers({ slide: "individual", id: e, mode: "rebuild", caller: "containerResized_1" }), i[e].carCheckconW = i[e].canv.width }, 100), i[e].lastconw = i[e].canv.width
                    }
                    if (i[e].pr_processing_key !== t ? i.animateTheLayers({ slide: i[e].pr_processing_key, id: e, mode: "rebuild", caller: "containerResized_2" }) : i[e].pr_active_key !== t && i.animateTheLayers({ slide: i[e].pr_active_key, id: e, mode: "rebuild", caller: "containerResized_3" }), "carousel" === i[e].sliderType) {
                        for (var n in i[e].panzoomTLs)
                            if (i[e].panzoomTLs.hasOwnProperty(n)) {
                                var d = i.gA(i[e].panzoomBGs[n][0], "key");
                                i.startPanZoom(i[e].panzoomBGs[n], e, i[e].panzoomTLs[n].progress(), n, i[e].panzoomTLs[n].isActive() ? "play" : "reset", d)
                            }
                    } else i[e].pr_active_bg !== t && i[e].pr_active_bg[0] !== t && v(e, i[e].pr_active_bg, i[e].pr_active_bg[0].dataset.key), i[e].pr_next_bg !== t && i[e].pr_next_bg[0] !== t && v(e, i[e].pr_next_bg, i[e].pr_next_bg[0].dataset.key);
                    clearTimeout(i[e].mNavigTimeout), i.manageNavigation && (i[e].mNavigTimeout = setTimeout(function() { i.manageNavigation(e) }, 20))
                }
                i.prepareCoveredVideo(e)
            }
            i[e].c.trigger("revolution.slide.afterdraw", [{ id: e }])
        },
        v = function(e, a, r) {
            if (i[e].panzoomTLs !== t) {
                var o = i.getSlideIndex(e, r);
                i.startPanZoom(a, e, i[e].panzoomTLs[o] !== t ? i[e].panzoomTLs[o].progress() : 0, o, "play", r)
            }
        },
        f = function(a) {
            !0 !== i[a].noDetach && i[a].canvas.detach();
            var r = i.isFaceBook() ? "visible" : "hidden";
            if (i[a].autoHeight && tpGS.gsap.set([i[a].c, i[a].cpar], { maxHeight: "none" }), tpGS.gsap.set(i[a].canvas, i[a].modal !== t && i[a].modal.useAsModal ? { overflow: r, width: "100%", height: "100%" } : { overflow: r, width: "100%", height: "100%", maxHeight: i[a].autoHeight ? "none" : i[a].cpar.css("maxHeight") }), "carousel" === i[a].sliderType) {
                var o = "margin-top:" + parseInt(i[a].carousel.padding_top || 0, 0) + "px;";
                i[a].canvas.css({ overflow: "visible" }).wrap('<rs-carousel-wrap style="' + o + '"></rs-carousel-wrap>'), i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), i.defineCarouselElements(a)
            }
            i[a].startWithSlide = i[a].startWithSlide === t ? t : Math.max(1, (i[a].sliderType, parseInt(i[a].startWithSlide))), i[a].cpar.css({ overflow: "visible" }), i[a].scrolleffect.bgs = [];
            for (var s = 0; s < i[a].slides.length; s++) {
                var n = e(i[a].slides[s]),
                    d = i.gA(n[0], "key"),
                    l = n.find(".rev-slidebg") || n.find(">img"),
                    c = i[a].sbgs[d] = y(l.data(), a),
                    p = n.data("mediafilter");
                if (c.skeyindex = i.getSlideIndex(a, d), c.bgvid = n.find("rs-bgvideo"), l.detach(), c.bgvid.detach(), (i[a].startWithSlide != t && i.gA(i[a].slides[s], "originalindex") == i[a].startWithSlide || i[a].startWithSlide === t && 0 == s) && (i[a].pr_next_key = n.index()), tpGS.gsap.set(n, { width: "100%", height: "100%", overflow: r }), l.wrap('<rs-sbg-px><rs-sbg-wrap data-key="' + d + '"></rs-sbg-wrap></rs-sbg-px>'), c.wrap = e(i.closestNode(l[0], "RS-SBG-WRAP")), c.src = l[0].src, c.lazyload = c.lazyload = g(l[0], t, a), c.slidebgimage = !0, c.loadobj = c.loadobj === t ? {} : c.loadobj, c.mediafilter = p = "none" === p || p === t ? "" : p, c.sbg = document.createElement("rs-sbg"), i[a].overlay !== t && "none" != i[a].overlay.type && i[a].overlay.type != t) {
                    var u = i.createOverlay(a, i[a].overlay.type, i[a].overlay.size, { 0: i[a].overlay.colora, 1: i[a].overlay.colorb });
                    c.wrap.append('<rs-dotted style="background-image:' + u + '"></rs-dotted>')
                }
                l.data("mediafilter", p), c.canvas = document.createElement("canvas"), c.sbg.appendChild(c.canvas), c.canvas.style.width = "100%", c.canvas.style.height = "100%", c.ctx = c.canvas.getContext("2d"), c.lazyload !== t && (c.sbg.dataset.lazyload = c.lazyload), c.sbg.className = p, c.sbg.src = c.src, c.sbg.dataset.bgcolor = c.bgcolor, c.sbg.style.width = "100%", c.sbg.style.height = "100%", c.key = d, c.wrap[0].dataset.key = d, e(c.sbg).data(c), c.wrap.data(c), c.wrap[0].appendChild(c.sbg);
                var h = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + l.get(0).outerHTML);
                l.replaceWith(h), i.gA(n[0], "sba") === t && i.sA(n[0], "sba", "");
                var m = {},
                    v = i.gA(n[0], "sba").split(";");
                for (var f in v)
                    if (v.hasOwnProperty(f)) {
                        var b = v[f].split(":");
                        switch (b[0]) {
                            case "f":
                                m.f = b[1];
                                break;
                            case "b":
                                m.b = b[1];
                                break;
                            case "g":
                                m.g = b[1];
                                break;
                            case "t":
                                m.s = b[1]
                        }
                    }
                i.sA(n[0], "scroll-based", !!i[a].sbtimeline.set && (m.s !== t && m.s)), c.bgvid.length > 0 && (c.bgvidid = c.bgvid[0].id, c.animateDirection = "idle", c.bgvid.addClass("defaultvid").css({ zIndex: 30 }), p !== t && "" !== p && "none" !== p && c.bgvid.addClass(p), c.bgvid.appendTo(c.wrap), c.parallax != t && (c.bgvid.data("parallax", c.parallax), c.bgvid.data("showcoveronpause", "on"), c.bgvid.data("mediafilter", p)), c.poster = !1, (c.src !== t && -1 == c.src.indexOf("assets/dummy.png") && -1 == c.src.indexOf("assets/transparent.png") || c.lazyload !== t && -1 == c.lazyload.indexOf("assets/transparent.png") && -1 == c.lazyload.indexOf("assets/dummy.png")) && (c.poster = !0), c.bgvid.data("bgvideo", 1), c.bgvid[0].dataset.key = d, 0 == c.bgvid.find(".rs-fullvideo-cover").length && c.bgvid.append('<div class="rs-fullvideo-cover"></div>')), i[a].scrolleffect.set ? (i[a].scrolleffect.bgs.push({ fade: m.f !== t ? m.f : !!i[a].scrolleffect.slide && i[a].scrolleffect.fade, blur: m.b !== t ? m.b : !!i[a].scrolleffect.slide && i[a].scrolleffect.blur, grayscale: m.g !== t ? m.g : !!i[a].scrolleffect.slide && i[a].scrolleffect.grayscale, c: c.wrap.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent() }), n.prepend(c.wrap.parent().parent())) : n.prepend(c.wrap.parent())
            }
            "carousel" === i[a].sliderType ? (tpGS.gsap.set(i[a].carousel.wrap, { opacity: 0 }), i[a].c[0].appendChild(i[a].carousel.wrap[0])) : i[a].c[0].appendChild(i[a].canvas[0])
        },
        y = function(r, o) {
            r.bg = r.bg === t ? "" : r.bg;
            var s = r.bg.split(";"),
                n = { bgposition: "50% 50%", bgfit: "cover", bgrepeat: "no-repeat", bgcolor: "transparent" };
            for (var d in s)
                if (s.hasOwnProperty(d)) {
                    var l = s[d].split(":"),
                        c = l[0],
                        p = l[1],
                        g = "";
                    switch (c) {
                        case "p":
                            g = "bgposition";
                            break;
                        case "f":
                            g = "bgfit";
                            break;
                        case "r":
                            g = "bgrepeat";
                            break;
                        case "c":
                            g = "bgcolor"
                    }
                    g !== t && (n[g] = p)
                }
            return i[o].fallbacks.panZoomDisableOnMobile && a && (n.panzoom = t, n.bgfit = "cover"), e.extend(!0, r, n)
        },
        b = function(e, a, r) {
            if (i[a] !== t) {
                i[a].syncload--;
                var o = i.gA(e, "reference");
                for (var s in i[a].loadqueue) i[a].loadqueue.hasOwnProperty(s) && "loaded" !== i[a].loadqueue[s].progress && o == i[a].loadqueue[s].src && (i[a].loadqueue[s].img = e, i[a].loadqueue[s].progress = r, i[a].loadqueue[s].width = e.width, i[a].loadqueue[s].height = e.height);
                w(a)
            }
        },
        w = function(a) {
            4 != i[a].syncload && i[a].loadqueue && e.each(i[a].loadqueue, function(r, o) {
                if ("prepared" == o.progress && i[a].syncload <= 4) {
                    if (i[a].syncload++, "img" == o.type) {
                        var s = new Image;
                        i.sA(s, "reference", o.src), /^([\w]+\:)?\/\//.test(o.src) && -1 === o.src.indexOf(location.host) && "" !== i[a].imgCrossOrigin && i[a].imgCrossOrigin !== t && (s.crossOrigin = i[a].imgCrossOrigin), s.onload = function() { b(this, a, "loaded"), o.error = !1 }, s.onerror = function() { b(this, a, "failed"), o.error = !0 }, s.src = o.src, o.starttoload = e.now()
                    } else e.get(o.src, function(e) { o.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), o.progress = "loaded", i[a].syncload--, w(a) }).fail(function() { o.progress = "failed", i[a].syncload--, w(a) });
                    o.progress = "inload"
                }
            })
        },
        _ = function(e, t) { return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + t), !0 },
        S = function(t, a) { if (e.now() - i[a][t + "starttime"] > 5e3 && 1 != i[a][t + "warning"]) { i[a][t + "warning"] = !0; var r = t + " Api Could not be loaded !"; "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>") } return !0 },
        x = function(a) { i[a] !== t && (i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_processing_key]), i[a].pr_active_bg = i[a].pr_active_slide.find("rs-sbg-wrap"), i[a].pr_next_bg = i[a].pr_next_slide.find("rs-sbg-wrap"), i[a].pr_active_bg !== t && i[a].pr_active_bg.length > 0 && tpGS.gsap.to(i[a].pr_active_bg, .5, { opacity: 0 }), i[a].pr_next_bg !== t && i[a].pr_next_bg.length > 0 && tpGS.gsap.to(i[a].pr_next_bg, .5, { opacity: 0 }), tpGS.gsap.set(i[a].pr_active_slide, { zIndex: 18 }), i[a].pr_next_slide !== t && i[a].pr_next_slide.length > 0 && tpGS.gsap.set(i[a].pr_next_slide, { autoAlpha: 0, zIndex: 20 }), i[a].tonpause = !1, i[a].pr_active_key !== t && i.removeTheLayers(i[a].pr_active_slide, a, !0), i[a].firststart = 1, setTimeout(function() { delete i[a].pr_active_key, delete i[a].pr_processing_key }, 200)) },
        k = function(a, r) {
            if (i[a] !== t)
                if (clearTimeout(i[a].waitWithSwapSlide), i[a].pr_processing_key === t || !0 !== i[a].firstSlideShown) {
                    if (clearTimeout(i[a].waitWithSwapSlide), i[a].startWithSlideKey !== t && (i[a].pr_next_key = i.getComingSlide(a, i[a].startWithSlideKey).nindex, delete i[a].startWithSlideKey), i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_next_key]), i[a].pr_next_key == i[a].pr_active_key) return delete i[a].pr_next_key;
                    var o = i.gA(i[a].pr_next_slide[0], "key");
                    i[a].sbgs[o].bgvid && i[a].sbgs[o].bgvid.length > 0 && (i[a].videos == t || i[a].videos[i[a].sbgs[o].bgvid[0].id] === t) && i.manageVideoLayer(i[a].sbgs[o].bgvid, a, o), i[a].pr_processing_key = i[a].pr_next_key, i[a].pr_cache_pr_next_key = i[a].pr_next_key, delete i[a].pr_next_key, i[a].pr_next_slide !== t && i[a].pr_next_slide[0] !== t && i.gA(i[a].pr_next_slide[0], "hal") !== t && i.sA(i[a].pr_next_slide[0], "sofacounter", i.gA(i[a].pr_next_slide[0], "sofacounter") === t ? 1 : parseInt(i.gA(i[a].pr_next_slide[0], "sofacounter"), 0) + 1), i[a].stopLoop && i[a].pr_processing_key == i[a].lastslidetoshow - 1 && (i[a].progressC.css({ visibility: "hidden" }), i[a].c.trigger("revolution.slide.onstop"), i[a].noloopanymore = 1), i[a].pr_next_slide.index() === i[a].slideamount - 1 && i[a].looptogo > 0 && "disabled" !== i[a].looptogo && (i[a].looptogo--, i[a].looptogo <= 0 && (i[a].stopLoop = !0)), i[a].tonpause = !0, i[a].slideInSwapTimer = !0, i[a].c.trigger("stoptimer"), "off" === i[a].spinner ? i[a].loader !== t && !0 === i[a].loaderVisible && (i[a].loader.css({ display: "none" }), i[a].loaderVisible = !1) : i[a].loadertimer = setTimeout(function() { i[a].loader !== t && !0 !== i[a].loaderVisible && (i[a].loader.css({ display: "block" }), i[a].loaderVisible = !0) }, 100);
                    var s = "carousel" === i[a].sliderType && "all" !== i[a].lazyType ? i.loadVisibleCarouselItems(a) : i[a].pr_next_slide[0];
                    i.loadImages(s, a, 1), i.preLoadAudio && i.preLoadAudio(i[a].pr_next_slide, a, 1), i.waitForCurrentImages(s, a, function() { i[a].firstSlideShown = !0, i[a].pr_next_slide.find("rs-bgvideo").each(function() { i.prepareCoveredVideo(a) }), i.loadUpcomingContent(a), window.requestAnimationFrame(function() { L(i[a].pr_next_slide.find("rs-sbg"), a, r) }) })
                } else i[a].waitWithSwapSlide = setTimeout(function() { k(a, r) }, 18)
        },
        L = function(a, r, o) {
            if (i[r] !== t) {
                if (O(r), i[r].pr_active_slide = e(i[r].slides[i[r].pr_active_key]), i[r].pr_next_slide = e(i[r].slides[i[r].pr_processing_key]), i[r].pr_active_bg = i[r].pr_active_slide.find("rs-sbg-wrap"), i[r].pr_next_bg = i[r].pr_next_slide.find("rs-sbg-wrap"), i[r].tonpause = !1, clearTimeout(i[r].loadertimer), i[r].loader !== t && !0 === i[r].loaderVisible && (window.requestAnimationFrame(function() { i[r].loader.css({ display: "none" }) }), i[r].loaderVisible = !1), i[r].onBeforeSwap = { slider: r, slideIndex: parseInt(i[r].pr_active_key, 0) + 1, slideLIIndex: i[r].pr_active_key, nextSlideIndex: parseInt(i[r].pr_processing_key, 0) + 1, nextSlideLIIndex: i[r].pr_processing_key, nextslide: i[r].pr_next_slide, slide: i[r].pr_active_slide, currentslide: i[r].pr_active_slide, prevslide: i[r].pr_lastshown_key !== t ? i[r].slides[i[r].pr_lastshown_key] : "" }, i[r].c.trigger("revolution.slide.onbeforeswap", i[r].onBeforeSwap), i[r].transition = 1, i[r].stopByVideo = !1, i[r].pr_next_slide[0] !== t && i.gA(i[r].pr_next_slide[0], "duration") != t && "" != i.gA(i[r].pr_next_slide[0], "duration") ? i[r].duration = parseInt(i.gA(i[r].pr_next_slide[0], "duration"), 0) : i[r].duration = i[r].origcd, i[r].pr_next_slide[0] === t || "true" != i.gA(i[r].pr_next_slide[0], "ssop") && !0 !== i.gA(i[r].pr_next_slide[0], "ssop") ? i[r].ssop = !1 : i[r].ssop = !0, i[r].sbtimeline.set && i[r].sbtimeline.fixed && i.updateFixedScrollTimes(r), i[r].c.trigger("nulltimer"), i[r].sdir = i[r].pr_processing_key < i[r].pr_active_key ? 1 : 0, "arrow" == i[r].sc_indicator && (0 == i[r].pr_active_key && i[r].pr_processing_key == i[r].slideamount - 1 && (i[r].sdir = 1), i[r].pr_active_key == i[r].slideamount - 1 && 0 == i[r].pr_processing_key && (i[r].sdir = 0)), i[r].lsdir = i[r].sdir, i[r].pr_active_key != i[r].pr_processing_key && 1 != i[r].firststart && "carousel" !== i[r].sliderType && i.removeTheLayers && i.removeTheLayers(i[r].pr_active_slide, r), 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeronce") && 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeralways") ? i[r].c.trigger("restarttimer") : (i[r].stopByVideo = !0, i.unToggleState(i[r].slidertoggledby)), i.sA(i[r].pr_next_slide[0], "rspausetimeronce", 0), i[r].pr_next_slide[0] !== t && i.sA(i[r].c[0], "slideactive", i.gA(i[r].pr_next_slide[0], "key")), "carousel" == i[r].sliderType) {
                    if (i[r].mtl = tpGS.gsap.timeline(), i.prepareCarousel(r), R(r), i.updateSlideBGs(r), !0 !== i[r].carousel.checkFVideo) {
                        var s = i.gA(i[r].pr_next_slide[0], "key");
                        i[r].sbgs[s] !== t && i[r].sbgs[s].bgvid !== t && 0 !== i[r].sbgs[s].bgvid.length && i.playBGVideo(r, s), i[r].carousel.checkFVideo = !0
                    }
                    i[r].transition = 0
                } else {
                    i[r].pr_lastshown_key = i[r].pr_lastshown_key === t ? i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key !== t ? i[r].pr_active_key : i[r].pr_lastshown_key : i[r].pr_lastshown_key, i[r].mtl = tpGS.gsap.timeline({ paused: !0, onComplete: function() { R(r) } }), i[r].pr_next_key !== t ? i.animateTheLayers({ slide: i[r].pr_next_key, id: r, mode: "preset", caller: "swapSlideProgress_1" }) : i[r].pr_processing_key !== t ? i.animateTheLayers({ slide: i[r].pr_processing_key, id: r, mode: "preset", caller: "swapSlideProgress_2" }) : i[r].pr_active_key !== t && i.animateTheLayers({ slide: i[r].pr_active_key, id: r, mode: "preset", caller: "swapSlideProgress_3" }), 1 == i[r].firststart && (i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, { autoAlpha: 0 }), i[r].firststart = 0), i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, { zIndex: 18 }), i[r].pr_next_slide[0] !== t && tpGS.gsap.set(i[r].pr_next_slide, { autoAlpha: 0, zIndex: 20 });
                    s = i.gA(i[r].pr_next_slide[0], "key");
                    i[r].sbgs[s].alt === t && (i[r].sbgs[s].alt = i.gA(i[r].pr_next_slide[0], "alttrans") || !1, i[r].sbgs[s].alt = !1 !== i[r].sbgs[s].alt && i[r].sbgs[s].alt.split(","), i[r].sbgs[s].altIndex = 0, i[r].sbgs[s].altLen = !1 !== i[r].sbgs[s].alt ? i[r].sbgs[s].alt.length : 0);
                    i[r].firstSlideAnimDone === t && i[r].fanim !== t && !1 !== i[r].fanim || (i[r].sbgs[s].slideanimation === t || i[r].sbgs[s].slideanimationRebuild || (i[r].sbgs[s].random !== t && i.SLTR !== t || i[r].sbgs[s].altLen > 0 && i.SLTR));
                    i[r].sbgs[s].slideanimation = i[r].firstSlideAnimDone === t && i[r].fanim !== t && !1 !== i[r].fanim ? i.convertSlideAnimVals(e.extend(!0, {}, i.getSlideAnim_EmptyObject(), i[r].fanim)) : i[r].sbgs[s].slideanimation === t || i[r].sbgs[s].slideanimationRebuild ? i.getSlideAnimationObj(r, { anim: i.gA(i[r].pr_next_slide[0], "anim"), filter: i.gA(i[r].pr_next_slide[0], "filter"), in: i.gA(i[r].pr_next_slide[0], "in"), out: i.gA(i[r].pr_next_slide[0], "out"), d3: i.gA(i[r].pr_next_slide[0], "d3") }, s) : i[r].sbgs[s].random !== t && i.SLTR !== t ? i.convertSlideAnimVals(e.extend(!0, {}, i.getSlideAnim_EmptyObject(), i.getAnimObjectByKey(i.getRandomSlideTrans(i[r].sbgs[s].random.rndmain, i[r].sbgs[s].random.rndgrp, i.SLTR), i.SLTR))) : i[r].sbgs[s].altLen > 0 && i.SLTR !== t ? i.convertSlideAnimVals(e.extend(!0, { altAnim: i[r].sbgs[s].alt[i[r].sbgs[s].altIndex] }, i.getSlideAnim_EmptyObject(), i.getAnimObjectByKey(i[r].sbgs[s].alt[i[r].sbgs[s].altIndex], i.SLTR))) : i[r].sbgs[s].slideanimation, i[r].sbgs[s].altLen > 0 && (i[r].sbgs[s].firstSlideAnimDone !== t ? (i[r].sbgs[s].altIndex++, i[r].sbgs[s].altIndex = i[r].sbgs[s].altIndex >= i[r].sbgs[s].altLen ? 0 : i[r].sbgs[s].altIndex) : (i[r].sbgs[s].firstSlideAnimDone = !0, i.SLTR === t && i.SLTR_loading === t && i.loadSlideAnimLibrary(r))), i[r].sbgs[s].currentState = "animating", i.animateSlide(r, i[r].sbgs[s].slideanimation), i[r].firstSlideAnimDone === t && i[r].fanim !== t && !1 !== i[r].fanim && (i[r].sbgs[s].slideanimationRebuild = !0), i[r].firstSlideAnimDone = !0, i[r].pr_next_bg.data("panzoom") !== t && requestAnimationFrame(function() {
                        var e = i.gA(i[r].pr_next_slide[0], "key");
                        i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, e), "first", e)
                    }), i[r].mtl.pause()
                }
                i.animateTheLayers ? "carousel" === i[r].sliderType ? (!1 !== i[r].carousel.showLayersAllTime && (i[r].carousel.allLayersStarted ? i.animateTheLayers({ slide: "individual", id: r, mode: "rebuild", caller: "swapSlideProgress_5" }) : i.animateTheLayers({ slide: "individual", id: r, mode: "start", caller: "swapSlideProgress_4" }), i[r].carousel.allLayersStarted = !0), 0 !== i[r].firststart ? i.animateTheLayers({ slide: 0, id: r, mode: "start", caller: "swapSlideProgress_6" }) : !0 !== o && i.animateTheLayers({ slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, id: r, mode: "start", caller: "swapSlideProgress_7" }), i[r].firststart = 0) : i.animateTheLayers({ slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, id: r, mode: "start", caller: "swapSlideProgress_8" }) : i[r].mtl != t && setTimeout(function() { i[r].mtl.resume() }, 18), "carousel" !== i[r].sliderType && tpGS.gsap.to(i[r].pr_next_slide, .001, { autoAlpha: 1 })
            }
        },
        R = function(r) {
            if (i[r] !== t) {
                if ("done" !== i.RS_swapList[r]) {
                    i.RS_swapList[r] = "done";
                    var o = e.inArray(r, i.RS_swapping);
                    i.RS_swapping.splice(o, 1)
                }
                if (i[r].firstSlideAvailable === t && (i[r].firstSlideAvailable = !0, window.requestAnimationFrame(function() { "hero" !== i[r].sliderType && i.createNavigation && i[r].navigation.use && !0 !== i[r].navigation.createNavigationDone && i.createNavigation(r) })), "carousel" === i[r].sliderType && tpGS.gsap.to(i[r].carousel.wrap, 1, { opacity: 1 }), i[r].pr_active_key = i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, delete i[r].pr_processing_key, "scroll" != i[r].parallax.type && "scroll+mouse" != i[r].parallax.type && "mouse+scroll" != i[r].parallax.type || (i[r].lastscrolltop = -999, i.generalObserver(a)), i[r].mtldiff = i[r].mtl.time(), delete i[r].mtl, i[r].pr_active_key !== t) {
                    i.gA(i[r].slides[i[r].pr_active_key], "sloop") !== t && function(e) {
                        if (i[e] !== t) {
                            i[e].sloops = i[e].sloops === t ? {} : i[e].sloops;
                            var a = i.gA(i[e].slides[i[e].pr_active_key], "key"),
                                r = i[e].sloops[a];
                            if (r === t) {
                                r = { s: 2500, e: 4500, r: "unlimited" };
                                var o = i.gA(i[e].slides[i[e].pr_active_key], "sloop").split(";");
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var n = o[s].split(":");
                                        switch (n[0]) {
                                            case "s":
                                                r.s = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "e":
                                                r.e = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "r":
                                                r.r = n[1]
                                        }
                                    }
                                r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), i[e].sloops[a] = r, r.key = a
                            }
                            r.ct = { time: r.s }, r.tl = tpGS.gsap.timeline({}), r.timer = tpGS.gsap.fromTo(r.ct, r.e - r.s, { time: r.s }, {
                                time: r.e,
                                ease: "none",
                                onRepeat: function() {
                                    for (var a in i[e].layers[r.key]) i[e].layers[r.key].hasOwnProperty(a) && i[e]._L[a].timeline.play(r.s);
                                    var o = i[e].progressC;
                                    o !== t && o[0] !== t && o[0].tween !== t && o[0].tween.time(r.s)
                                },
                                onUpdate: function() {},
                                onComplete: function() {}
                            }).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(i[e].mtldiff)
                        }
                    }(r), i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !1), i[r].activeRSSlide = i[r].pr_active_key, i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !0);
                    var s = i.gA(i[r].slides[i[r].pr_active_key], "key"),
                        n = i.gA(i[r].slides[i[r].pr_lastshown_key], "key");
                    i.sA(i[r].c[0], "slideactive", s), n !== t && i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, n)] !== t && ("carousel" === i[r].sliderType ? (i[r].panzoomTLs[i.getSlideIndex(r, n)].timeScale(3), i[r].panzoomTLs[i.getSlideIndex(r, n)].reverse()) : i[r].panzoomTLs[i.getSlideIndex(r, n)].pause()), i[r].pr_next_bg.data("panzoom") !== t && (i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, s)] !== t ? (i[r].panzoomTLs[i.getSlideIndex(r, s)].timeScale(1), i[r].panzoomTLs[i.getSlideIndex(r, s)].play()) : i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, s), "play", s));
                    var d = { slider: r, slideIndex: parseInt(i[r].pr_active_key, 0) + 1, slideLIIndex: i[r].pr_active_key, slide: i[r].pr_next_slide, currentslide: i[r].pr_next_slide, prevSlideIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0) + 1, prevSlideLIIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0), prevSlide: i[r].pr_lastshown_key !== t && i[r].slides[i[r].pr_lastshown_key] };
                    if (i[r].c.trigger("revolution.slide.onchange", d), i[r].c.trigger("revolution.slide.onafterswap", d), i[r].deepLinkListener || i[r].enableDeeplinkHash) {
                        var l = i.gA(i[r].slides[i[r].pr_active_key], "deeplink");
                        l !== t && l.length > 0 && (i[r].ignoreDeeplinkChange = !0, window.location.hash = i.gA(i[r].slides[i[r].pr_active_key], "deeplink"))
                    }
                    i[r].pr_lastshown_key = i[r].pr_active_key, i[r].startWithSlide !== t && "done" !== i[r].startWithSlide && "carousel" === i[r].sliderType && (i[r].firststart = 0), i[r].duringslidechange = !1, i[r].pr_active_slide.length > 0 && 0 != i.gA(i[r].pr_active_slide[0], "hal") && i.gA(i[r].pr_active_slide[0], "hal") <= i.gA(i[r].pr_active_slide[0], "sofacounter") && i[r].c.revremoveslide(i[r].pr_active_slide.index());
                    var c = i[r].pr_processing_key || i[r].pr_active_key || 0;
                    i[r].rowzones != t && (c = c > i[r].rowzones.length ? i[r].rowzones.length : c), (i[r].rowzones != t && i[r].rowzones.length > 0 && i[r].rowzones[c] != t && c >= 0 && c <= i[r].rowzones.length && i[r].rowzones[c].length > 0 || i.winH < i[r].module.height) && i.updateDims(r), delete i[r].sc_indicator, delete i[r].sc_indicator_dir, i[r].firstLetItFree === t && (i.generalObserver(a), i[r].firstLetItFree = !0)
                }
            }
        },
        O = function(a) {
            var r = i[a].progressBar;
            if (i[a].progressC === t || 0 == i[a].progressC.length)
                if (i[a].progressC = e('<rs-progress style="visibility:hidden;"></rs-progress>'), "horizontal" === r.style || "vertical" === r.style) {
                    if ("module" === r.basedon) {
                        for (var o = "", s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bar></rs-progress-bar>";
                        o += "<rs-progress-bgs>";
                        for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bg></rs-progress-bg>";
                        if (o += "</rs-progress-bgs>", "nogap" !== r.gaptype)
                            for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-gap></rs-progress-gap>";
                        i[a].progressC[0].innerHTML = o, !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarBGS = i.getByTag(i[a].progressC[0], "RS-PROGRESS-BG"), i[a].progressCBarGAPS = i.getByTag(i[a].progressC[0], "RS-PROGRESS-GAP"), "nogap" !== r.gaptype && tpGS.gsap.set(i[a].progressCBarGAPS, { backgroundColor: r.gapcolor, zIndex: "gapbg" === r.gaptype ? 17 : 27 }), tpGS.gsap.set(i[a].progressCBarBGS, { backgroundColor: r.bgcolor })
                    } else i[a].progressC[0].innerHTML = "<rs-progress-bar></rs-progress-bar>", !0 === i[a].noDetach && i[a].c.append(i[a].progressC);
                    i[a].progressCBarInner = i.getByTag(i[a].progressC[0], "RS-PROGRESS-BAR"), tpGS.gsap.set(i[a].progressCBarInner, { background: r.color })
                } else i[a].progressC[0].innerHTML = '<canvas width="' + 2 * r.radius + '" height="' + 2 * r.radius + '" style="position:absolute" class="rs-progress-bar"></canvas>', !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarInner = i[a].progressC[0].getElementsByClassName("rs-progress-bar")[0], i[a].progressBCanvas = i[a].progressCBarInner.getContext("2d"), i[a].progressBar.degree = "cw" === i[a].progressBar.style ? 360 : 0, I(a);
            if (!0 !== i[a].noDetach && i[a].progressC.detach(), i[a].progressBar.visibility[i[a].level] && 1 != i[a].progressBar.disableProgressBar)
                if ("horizontal" === r.style || "vertical" === r.style) {
                    var n, d, l = i[a].slideamount - 1;
                    if ("horizontal" === r.style) {
                        var c = "grid" === r.alignby ? i[a].gridwidth[i[a].level] : i[a].module.width;
                        n = Math.ceil(c / i[a].slideamount), d = Math.ceil((c - l * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, { visibility: "visible", top: "top" === r.vertical ? r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto", bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0), left: "left" === r.horizontal && "grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : "auto", right: "right" === r.horizontal && "grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : "auto", y: "center" === r.vertical ? r.y : 0, height: r.size, backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor, marginTop: "bottom" === r.vertical ? 0 : "top" === r.vertical ? 0 : parseInt(r.size, 0) / 2, width: "grid" === r.alignby ? i[a].gridwidth[i[a].level] : "100%" }), tpGS.gsap.set(i[a].progressCBarInner, { x: "module" === r.basedon ? r.gap ? function(e) { return ("right" === r.horizontal ? l - e : e) * (d + r.gapsize) } : function(e) { return ("right" === r.horizontal ? l - e : e) * n } : 0, width: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%" }), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, { x: "module" === r.basedon ? r.gap ? function(e) { return e * (d + r.gapsize) } : function(e) { return e * n } : 0, width: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%" }), tpGS.gsap.set(i[a].progressCBarGAPS, { width: r.gap ? r.gapsize + "px" : 0, x: r.gap ? function(e) { return (e + 1) * d + parseInt(r.gapsize, 0) * e } : 0 }))
                    } else if ("vertical" === r.style) {
                        c = "grid" === r.alignby ? i[a].gridheight[i[a].level] : i[a].module.height;
                        n = Math.ceil(c / i[a].slideamount), d = Math.ceil((c - l * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, { visibility: "visible", left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto", right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0), x: "center" === r.horizontal ? r.x : 0, top: "top" === r.vertical && "grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(i[a].gridOffsetHeight, 0) : "auto", bottom: "bottom" === r.vertical && "grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(i[a].gridOffsetHeight, 0) : "auto", width: r.size, marginLeft: "left" === r.horizontal ? 0 : "right" === r.horizontal ? 0 : parseInt(r.size, 0) / 2, backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor, height: "grid" === r.alignby ? i[a].gridheight[i[a].level] : "100%" }), tpGS.gsap.set(i[a].progressCBarInner, { y: "module" === r.basedon ? r.gap ? function(e) { return ("bottom" === r.vertical ? l - e : e) * (d + r.gapsize) } : function(e) { return ("bottom" === r.vertical ? l - e : e) * n } : 0, height: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%" }), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, { y: "module" === r.basedon ? r.gap ? function(e) { return e * (d + r.gapsize) } : function(e) { return e * n } : 0, height: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%" }), tpGS.gsap.set(i[a].progressCBarGAPS, { height: r.gap ? r.gapsize + "px" : 0, y: r.gap ? function(e) { return (e + 1) * d + parseInt(r.gapsize, 0) * e } : 0 }))
                    }
                } else tpGS.gsap.set(i[a].progressC, { top: "top" === r.vertical ? r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto", bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0), left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto", right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0), y: "center" === r.vertical ? r.y : 0, x: "center" === r.horizontal ? r.x : 0, width: 2 * r.radius, height: 2 * r.radius, marginTop: "center" === r.vertical ? 0 - r.radius : 0, marginLeft: "center" === r.horizontal ? 0 - r.radius : 0, backgroundColor: "transparent", visibility: "visible" });
            else i[a].progressC[0].style.visibility = "hidden";
            !0 !== i[a].noDetach && i[a].c.append(i[a].progressC), i[a].gridOffsetWidth === t && "grid" === r.alignby ? i[a].rebuildProgressBar = !0 : i[a].rebuildProgressBar = !1
        },
        I = function(e) {
            var t = i[e].progressBar;
            t.radius - parseInt(t.size, 0) <= 0 && (t.size = t.radius / 4);
            var a = parseInt(t.radius),
                r = parseInt(t.radius);
            i[e].progressBCanvas.lineCap = "round", i[e].progressBCanvas.clearRect(0, 0, 2 * t.radius, 2 * t.radius), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * 630), i[e].progressBCanvas.strokeStyle = t.bgcolor, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0) - 1, i[e].progressBCanvas.stroke(), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.strokeStyle = t.color, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * (270 + i[e].progressBar.degree), "cw" !== t.style), i[e].progressBCanvas.stroke()
        },
        T = function(a) {
            var r = function() {
                    a !== t && i !== t && i[a] !== t && (0 == e("body").find(i[a].c).length || null === i[a] || null === i[a].c || i[a].c === t || 0 === i[a].length ? (! function(t) {
                        i[t].c.children().each(function() { try { e(this).die("click") } catch (e) {} try { e(this).die("mouseenter") } catch (e) {} try { e(this).die("mouseleave") } catch (e) {} try { e(this).unbind("hover") } catch (e) {} });
                        try { i[t].c.die("click", "mouseenter", "mouseleave") } catch (e) {}
                        clearInterval(i[t].cdint), i[t].c = null
                    }(a), clearInterval(i[a].cdint)) : (i[a].c.trigger("revolution.slide.slideatend"), 1 == i[a].c.data("conthoverchanged") && (i[a].conthover = i[a].c.data("conthover"), i[a].c.data("conthoverchanged", 0)), i.callingNewSlide(a, 1, !0)))
                },
                o = tpGS.gsap.timeline({ paused: !0 }),
                s = "reset" === i[a].progressBar.reset || i[a].progressBar.notnew === t ? 0 : .2,
                n = "slide" === i[a].progressBar.basedon ? 0 : i[a].pr_processing_key !== t ? i[a].pr_processing_key : i[a].pr_active_key;
            if (n = n === t ? 0 : n, "horizontal" === i[a].progressBar.style) {
                if (o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, { scaleX: 0, transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%" })), o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, { transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%", force3D: "auto", scaleX: 1, onComplete: r, delay: .5, ease: i[a].progressBar.ease })), "module" === i[a].progressBar.basedon)
                    for (var d = 0; d < i[a].slideamount; d++) d !== n && o.add(tpGS.gsap.set(i[a].progressCBarInner[d], { scaleX: d < n ? 1 : 0, transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%" }), 0)
            } else if ("vertical" === i[a].progressBar.style) {
                if (i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, { scaleY: 0, transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%" })), i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, { transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%", force3D: "auto", scaleY: 1, onComplete: r, delay: .5, ease: i[a].progressBar.ease })), "module" === i[a].progressBar.basedon)
                    for (d = 0; d < i[a].slideamount; d++) d !== n && i[a].progressCBarInner[d] !== t && o.add(tpGS.gsap.set(i[a].progressCBarInner[d], { scaleY: d < n ? 1 : 0, transformOrigin: "botton" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%" }), 0)
            } else {
                var l = "slide" === i[a].progressBar.basedon ? 0 : Math.max(0, 360 / i[a].slideamount * n),
                    c = "slide" === i[a].progressBar.basedon ? 360 : 360 / i[a].slideamount * (n + 1);
                "ccw" === i[a].progressBar.style && "slide" !== i[a].progressBar.basedon && (l = 360 - c, c = 360 - 360 / i[a].slideamount * n), o.add(tpGS.gsap.to(i[a].progressBar, s, { degree: "cw" === i[a].progressBar.style ? l : c, onUpdate: function() { I(a) } })), o.add(tpGS.gsap.to(i[a].progressBar, i[a].duration / 1e3, { degree: "cw" === i[a].progressBar.style ? c : l, onUpdate: function() { I(a) }, onComplete: r, delay: .5, ease: i[a].progressBar.ease }))
            }
            return i[a].progressBar.notnew = !0, o
        },
        C = function(e) {
            i[e].progressC == t && O(e), i[e].loop = 0, i[e].stopAtSlide != t && i[e].stopAtSlide > -1 ? i[e].lastslidetoshow = i[e].stopAtSlide : i[e].lastslidetoshow = 999, i[e].stopLoop = !1, 0 == i[e].looptogo && (i[e].stopLoop = !0), i[e].c.on("stoptimer", function() { i[e].progressC != t && (i[e].progressC[0].tween.pause(), i[e].progressBar.disableProgressBar && (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused", i[e].slideInSwapTimer || i.unToggleState(i[e].slidertoggledby), i[e].slideInSwapTimer = !1) }), i[e].c.on("starttimer", function() { i[e].progressC != t && (i[e].forcepaused || (1 != i[e].conthover && 1 != i[e].stopByVideo && i[e].module.width > i[e].hideSliderAtLimit && 1 != i[e].tonpause && 1 != i[e].overnav && 1 != i[e].ssop && (1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween.resume(), i[e].sliderstatus = "playing")), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i.toggleState(i[e].slidertoggledby))) }), i[e].c.on("restarttimer", function() {
                if (i[e].progressC != t && !i[e].forcepaused) {
                    if (i[e].mouseoncontainer && "on" == i[e].navigation.onHoverStop && !a) return !1;
                    1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || 1 == i[e].ssop ? i.unToggleState(i[e].slidertoggledby) : (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = T(e), i[e].progressC[0].tween.play(), i[e].sliderstatus = "playing", i.toggleState(i[e].slidertoggledby)), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].mouseoncontainer && 1 == i[e].navigation.onHoverStop && !a && (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
                }
            }), i[e].c.on("nulltimer", function() { i[e].progressC != t && i[e].progressC[0] !== t && (i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = T(e), i[e].progressC[0].tween.pause(0), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused") }), i[e].progressC !== t && (i[e].progressC[0].tween = T(e)), i[e].slideamount > 1 && (0 != i[e].stopAfterLoops || 1 != i[e].stopAtSlide) ? i[e].c.trigger("starttimer") : (i[e].noloopanymore = 1, i[e].c.trigger("nulltimer")), i[e].c.on("tp-mouseenter", function() { i[e].mouseoncontainer = !0, 1 != i[e].navigation.onHoverStop || a || (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause")) }), i[e].c.on("tp-mouseleft", function() { i[e].mouseoncontainer = !1, 1 != i[e].c.data("conthover") && 1 == i[e].navigation.onHoverStop && (1 == i[e].viewPort.enable && i[e].inviewport || 0 == i[e].viewPort.enable) && (i[e].c.trigger("revolution.slide.onresume"), i[e].c.trigger("starttimer")) })
        },
        A = function() {
            e(".rev_redraw_on_blurfocus").each(function() {
                var e = this.id;
                if (i[e] == t || i[e].c == t || 0 === i[e].c.length) return !1;
                1 != i[e].windowfocused && (i[e].windowfocused = !0, tpGS.gsap.delayedCall(.1, function() { i[e].fallbacks.nextSlideOnWindowFocus && i[e].c.revnext(), i[e].c.revredraw(), "playing" == i[e].lastsliderstatus && i[e].c.revresume(), i[e].c.trigger("revolution.slide.tabfocused") }))
            })
        },
        M = function() {
            document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function(e) {
                var t = this.id;
                i[t].windowfocused = !1, i[t].lastsliderstatus = i[t].sliderstatus, i[t].c.revpause(), i[t].c.trigger("revolution.slide.tabblured")
            })
        },
        P = function() {
            var e = document.documentMode === t,
                a = window.chrome;
            1 !== i.revslider_focus_blur_listener && (i.revslider_focus_blur_listener = 1, e && !a ? i.window.on("focusin", function() {!0 !== i.windowIsFocused && A(), i.windowIsFocused = !0 }).on("focusout", function() {!0 !== i.windowIsFocused && i.windowIsFocused !== t || M(), i.windowIsFocused = !1 }) : window.addEventListener ? (window.addEventListener("focus", function(e) {!0 !== i.windowIsFocused && A(), i.windowIsFocused = !0 }, { capture: !1, passive: !0 }), window.addEventListener("blur", function(e) {!0 !== i.windowIsFocused && i.windowIsFocused !== t || M(), i.windowIsFocused = !1 }, { capture: !1, passive: !0 })) : (window.attachEvent("focus", function(e) {!0 !== i.windowIsFocused && A(), i.windowIsFocused = !0 }), window.attachEvent("blur", function(e) {!0 !== i.windowIsFocused && i.windowIsFocused !== t || M(), i.windowIsFocused = !1 })))
        },
        B = function(e) { for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) a[r] = a[r].replace("%3D", "="), t = a[r].split("="), i.push(t[0]), i[t[0]] = t[1]; return i },
        D = function(a) {
            if (i[a].blockSpacing !== t) {
                var r = i[a].blockSpacing.split(";");
                for (var o in i[a].blockSpacing = {}, r)
                    if (r.hasOwnProperty(o)) {
                        var s = r[o].split(":");
                        switch (s[0]) {
                            case "t":
                                i[a].blockSpacing.top = i.revToResp(s[1], 4, 0);
                                break;
                            case "b":
                                i[a].blockSpacing.bottom = i.revToResp(s[1], 4, 0);
                                break;
                            case "l":
                                i[a].blockSpacing.left = i.revToResp(s[1], 4, 0);
                                break;
                            case "r":
                                i[a].blockSpacing.right = i.revToResp(s[1], 4, 0)
                        }
                    }
                i[a].blockSpacing.block = e(i.closestClass(i[a].c[0], "wp-block-themepunch-revslider")), i[a].level !== t && i[a].blockSpacing !== t && tpGS.gsap.set(i[a].blockSpacing.block, { paddingLeft: i[a].blockSpacing.left[i[a].level], paddingRight: i[a].blockSpacing.right[i[a].level], marginTop: i[a].blockSpacing.top[i[a].level], marginBottom: i[a].blockSpacing.bottom[i[a].level] })
            }
        },
        z = function(e) { return e.charAt(0).toUpperCase() + e.slice(1) },
        G = function(r) {
            return function(e) {
                for (var r in e.minHeight = e.minHeight !== t ? "none" === e.minHeight || "0" === e.minHeight || "0px" === e.minHeight || "" == e.minHeight || " " == e.minHeight ? 0 : parseInt(e.minHeight, 0) : 0, e.maxHeight = "none" === e.maxHeight || "0" === e.maxHeight ? 0 : parseInt(e.maxHeight, 0), e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%", e.carousel.space = parseInt(e.carousel.space, 0), e.carousel.maxOpacity = parseInt(e.carousel.maxOpacity, 0), e.carousel.maxOpacity = e.carousel.maxOpacity > 1 ? e.carousel.maxOpacity / 100 : e.carousel.maxOpacity, e.carousel.showLayersAllTime = "true" === e.carousel.showLayersAllTime || !0 === e.carousel.showLayersAllTime ? "all" : e.carousel.showLayersAllTime, e.carousel.maxRotation = parseInt(e.carousel.maxRotation, 0), e.carousel.minScale = parseInt(e.carousel.minScale, 0), e.carousel.minScale = e.carousel.minScale > .9 ? e.carousel.minScale / 100 : e.carousel.minScale, e.carousel.speed = parseInt(e.carousel.speed, 0), e.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], e.perspective = parseInt(e.perspective, 0), e.navigation.maintypes) e.navigation.maintypes.hasOwnProperty(r) && e.navigation[e.navigation.maintypes[r]] !== t && (e.navigation[e.navigation.maintypes[r]].animDelay = e.navigation[e.navigation.maintypes[r]].animDelay === t ? 1e3 : e.navigation[e.navigation.maintypes[r]].animDelay, e.navigation[e.navigation.maintypes[r]].animSpeed = e.navigation[e.navigation.maintypes[r]].animSpeed === t ? 1e3 : e.navigation[e.navigation.maintypes[r]].animSpeed, e.navigation[e.navigation.maintypes[r]].animDelay = parseInt(e.navigation[e.navigation.maintypes[r]].animDelay, 0) / 1e3, e.navigation[e.navigation.maintypes[r]].animSpeed = parseInt(e.navigation[e.navigation.maintypes[r]].animSpeed, 0) / 1e3);
                if (i.isNumeric(e.scrolleffect.tilt) || -1 !== e.scrolleffect.tilt.indexOf("%") && (e.scrolleffect.tilt = parseInt(e.scrolleffect.tilt)), e.scrolleffect.tilt = e.scrolleffect.tilt / 100, e.navigation.thumbnails.position = "outer-horizontal" == e.navigation.thumbnails.position ? "bottom" == e.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.thumbnails.position ? "left" == e.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : e.navigation.thumbnails.position, e.navigation.tabs.position = "outer-horizontal" == e.navigation.tabs.position ? "bottom" == e.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.tabs.position ? "left" == e.navigation.tabs.h_align ? "outer-left" : "outer-right" : e.navigation.tabs.position, e.sbtimeline.speed = parseInt(e.sbtimeline.speed, 0) / 1e3 || .5, !0 === e.sbtimeline.set && !0 === e.sbtimeline.fixed && "auto" !== e.sliderLayout ? (e.sbtimeline.fixStart = parseInt(e.sbtimeline.fixStart), e.sbtimeline.fixEnd = parseInt(e.sbtimeline.fixEnd)) : e.sbtimeline.fixed = !1, e.progressBar === t || "true" != e.progressBar.disableProgressBar && 1 != e.progressBar.disableProgressBar || (e.progressBar.disableProgressBar = !0), e.startDelay = parseInt(e.startDelay, 0) || 0, e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_under != t && (e.navigation.arrows.hide_under = parseInt(e.navigation.arrows.hide_under)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_under != t && (e.navigation.bullets.hide_under = parseInt(e.navigation.bullets.hide_under)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_under != t && (e.navigation.thumbnails.hide_under = parseInt(e.navigation.thumbnails.hide_under)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_under != t && (e.navigation.tabs.hide_under = parseInt(e.navigation.tabs.hide_under)), e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_over != t && (e.navigation.arrows.hide_over = parseInt(e.navigation.arrows.hide_over)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_over != t && (e.navigation.bullets.hide_over = parseInt(e.navigation.bullets.hide_over)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_over != t && (e.navigation.thumbnails.hide_over = parseInt(e.navigation.thumbnails.hide_over)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_over != t && (e.navigation.tabs.hide_over = parseInt(e.navigation.tabs.hide_over)), e.lazyloaddata !== t && e.lazyloaddata.length > 0 && e.lazyloaddata.indexOf("-") > 0) { var o = e.lazyloaddata.split("-"); for (e.lazyloaddata = o[0], r = 1; r < o.length; r++) e.lazyloaddata += z(o[r]) }
                return e.duration = parseInt(e.duration), "single" === e.lazyType && "carousel" === e.sliderType && (e.lazyType = "smart"), "carousel" === e.sliderType && e.carousel.justify && (e.justifyCarousel = !0, e.keepBPHeight = !0), e.enableUpscaling = 1 == e.enableUpscaling && "carousel" !== e.sliderType && "fullwidth" === e.sliderLayout, e.useFullScreenHeight = "carousel" === e.sliderType && "fullscreen" === e.sliderLayout && !0 === e.useFullScreenHeight, e.progressBar.y = parseInt(e.progressBar.y, 0), e.progressBar.x = parseInt(e.progressBar.x, 0),
                    /*! Custom Eases */
                    "IE" !== window.RSBrowser && e.customEases !== t && (!e.customEases.SFXBounceLite && "true" != e.customEases.SFXBounceLite || tpGS.SFXBounceLite !== t || (tpGS.SFXBounceLite = tpGS.CustomBounce.create("SFXBounceLite", { strength: .3, squash: 1, squashID: "SFXBounceLite-squash" })), !e.customEases.SFXBounceSolid && "true" != e.customEases.SFXBounceSolid || tpGS.SFXBounceSolid !== t || (tpGS.SFXBounceSolid = tpGS.CustomBounce.create("SFXBounceSolid", { strength: .5, squash: 2, squashID: "SFXBounceSolid-squash" })), !e.customEases.SFXBounceStrong && "true" != e.customEases.SFXBounceStrong || tpGS.SFXBounceStrong !== t || (tpGS.SFXBounceStrong = tpGS.CustomBounce.create("SFXBounceStrong", { strength: .7, squash: 3, squashID: "SFXBounceStrong-squash" })), !e.customEases.SFXBounceExtrem && "true" != e.customEases.SFXBounceExtrem || tpGS.SFXBounceExtrem !== t || (tpGS.SFXBounceExtrem = tpGS.CustomBounce.create("SFXBounceExtrem", { strength: .9, squash: 4, squashID: "SFXBounceExtrem-squash" })), !e.customEases.BounceLite && "true" != e.customEases.BounceLite || tpGS.BounceLite !== t || (tpGS.BounceLite = tpGS.CustomBounce.create("BounceLite", { strength: .3 })), !e.customEases.BounceSolid && "true" != e.customEases.BounceSolid || tpGS.BounceSolid !== t || (tpGS.BounceSolid = tpGS.CustomBounce.create("BounceSolid", { strength: .5 })), !e.customEases.BounceStrong && "true" != e.customEases.BounceStrong || tpGS.BounceStrong !== t || (tpGS.BounceStrong = tpGS.CustomBounce.create("BounceStrong", { strength: .7 })), !e.customEases.BounceExtrem && "true" != e.customEases.BounceExtrem || tpGS.BounceExtrem !== t || (tpGS.BounceExtrem = tpGS.CustomBounce.create("BounceExtrem", { strength: .9 }))), e.modal.coverSpeed = parseFloat(e.modal.coverSpeed), e.modal.coverSpeed = e.modal.coverSpeed > 200 ? e.modal.coverSpeed / 1e3 : e.modal.coverSpeed, e.modal.coverSpeed = Math.max(Math.min(3, e.modal.coverSpeed), .3), e.navigation.wheelViewPort = e.navigation.wheelViewPort === t ? .5 : e.navigation.wheelViewPort / 100, e.navigation.wheelCallDelay = e.navigation.wheelCallDelay === t ? 1e3 : parseInt(e.navigation.wheelCallDelay), e.autoDPR = "string" == typeof e.DPR && -1 !== e.DPR.indexOf("ax"), e.DPR = e.DPR.replace("ax", ""), e.DPR = parseInt(e.DPR.replace("x", "")), e.DPR = isNaN(e.DPR) ? window.devicePixelRatio : e.autoDPR ? Math.min(window.devicePixelRatio, e.DPR) : e.DPR, e.DPR = 1 != e.onedpronmobile && "true" != e.onedpronmobile || !a ? e.DPR : 1, e
            }(e.extend(!0, { DPR: "dpr", sliderType: "standard", sliderLayout: "auto", overlay: { type: "none", size: 1, colora: "transparent", colorb: "#000000" }, duration: 9e3, imgCrossOrigin: "", modal: { useAsModal: !1, cover: !0, coverColor: "rgba(0,0,0,0.5)", horizontal: "center", vertical: "middle", coverSpeed: 1 }, navigation: { keyboardNavigation: !1, keyboard_direction: "horizontal", mouseScrollNavigation: "off", wheelViewPort: 50, wheelCallDelay: "1000ms", onHoverStop: !0, mouseScrollReverse: "default", touch: { touchenabled: !1, touchOnDesktop: !1, swipe_treshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1, mobileCarousel: !0, desktopCarousel: !0 }, arrows: { style: "", enable: !1, hide_onmobile: !1, hide_under: 0, hide_onleave: !1, hide_delay: 200, hide_delay_mobile: 1200, hide_over: 9999, tmp: "", rtl: !1, left: { h_align: "left", v_align: "center", h_offset: 20, v_offset: 0, container: "slider" }, right: { h_align: "right", v_align: "center", h_offset: 20, v_offset: 0, container: "slider" } }, bullets: { enable: !1, hide_onmobile: !1, hide_onleave: !1, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", h_align: "center", v_align: "bottom", space: 5, h_offset: 0, v_offset: 20, tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', container: "slider", rtl: !1, style: "" }, thumbnails: { container: "slider", rtl: !1, style: "", enable: !1, width: 100, height: 50, min_width: 100, wrapper_padding: 2, wrapper_color: "transparent", tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !1, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, position: "inner", space: 2, h_align: "center", v_align: "bottom", h_offset: 0, v_offset: 20, mhoff: 0, mvoff: 0 }, tabs: { container: "slider", rtl: !1, style: "", enable: !1, width: 100, min_width: 100, height: 50, wrapper_padding: 10, wrapper_color: "transparent", tmp: '<span class="tp-tab-image"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !1, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, space: 0, position: "inner", h_align: "center", v_align: "bottom", h_offset: 0, v_offset: 20, mhoff: 0, mvoff: 0 } }, responsiveLevels: 4064, visibilityLevels: [2048, 1024, 778, 480], gridwidth: 960, gridheight: 500, minHeight: 0, maxHeight: 0, keepBPHeight: !1, useFullScreenHeight: !0, overflowHidden: !1, forceOverflow: !1, fixedOnTop: !1, autoHeight: !1, gridEQModule: !1, disableForceFullWidth: !1, fullScreenOffsetContainer: "", fullScreenOffset: "0", hideLayerAtLimit: 0, hideAllLayerAtLimit: 0, hideSliderAtLimit: 0, progressBar: { disableProgressBar: !1, style: "horizontal", size: "5px", radius: 10, vertical: "bottom", horizontal: "left", x: 0, y: 0, color: "rgba(255,255,255,0.5)", bgcolor: "transparent", basedon: "slide", gapsize: 0, reset: "reset", gaptype: "gapboth", gapcolor: "rgba(255,255,255,0.5)", ease: "none", visibility: { 0: !0, 1: !0, 2: !0, 3: !0 } }, stopAtSlide: -1, stopAfterLoops: 0, shadow: 0, startDelay: 0, lazyType: "none", spinner: "off", shuffle: !1, perspective: "600px", perspectiveType: "local", viewPort: { enable: !1, outof: "wait", visible_area: "200px", presize: !1 }, fallbacks: { isJoomla: !1, panZoomDisableOnMobile: !1, simplifyAll: !0, nextSlideOnWindowFocus: !1, disableFocusListener: !1, allowHTML5AutoPlayOnAndroid: !0 }, fanim: !1, parallax: { type: "off", levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85], origo: "enterpoint", disable_onmobile: !1, ddd_shadow: !1, ddd_bgfreeze: !1, ddd_overflow: "visible", ddd_layer_overflow: "visible", ddd_z_correction: 65, speed: 400, speedbg: 0, speedls: 0 }, scrolleffect: { set: !1, fade: !1, blur: !1, scale: !1, grayscale: !1, maxblur: 10, layers: !1, slide: !1, direction: "both", multiplicator: 1.35, multiplicator_layers: .5, tilt: 30, disable_onmobile: !1 }, sbtimeline: { set: !1, fixed: !1, fixStart: 0, fixEnd: 0, layers: !1, slide: !1, ease: "none", speed: 500 }, carousel: { easing: "power3.inOut", speed: 800, showLayersAllTime: !1, horizontal_align: "center", vertical_align: "center", infinity: !1, space: 0, maxVisibleItems: 3, stretch: !1, fadeout: !0, maxRotation: 0, maxOpacity: 100, minScale: 0, offsetScale: !1, vary_fade: !1, vary_rotation: !1, vary_scale: !1, border_radius: "0px", padding_top: 0, padding_bottom: 0 }, observeWrap: !1, extensions: "extensions/", extensions_suffix: ".min.js", stopLoop: !1, waitForInit: !1, ignoreHeightChange: !0, onedpronmobile: !1 }, r))
        }
}(jQuery),
function($, undefined) {
    "use strict";
    var _R = jQuery.fn.revolution,
        _ISM = _R.is_mobile();
    jQuery.extend(!0, _R, {
        checkActions: function(e, t) { e === undefined ? moduleEnterLeaveActions(t) : checkActions_intern(e, t) },
        delayer: function(e, t, i) {
            _R[e].timeStamps = _R[e].timeStamps === undefined ? {} : _R[e].timeStamps;
            var a = (new Date).getTime(),
                r = _R[e].timeStamps[i] === undefined ? parseInt(t) + 100 : a - _R[e].timeStamps[i],
                o = parseInt(r) > t;
            return o && (_R[e].timeStamps[i] = a), o
        },
        getURLDetails: function(e) {
            (e = e === undefined ? {} : e).url = e.url === undefined ? window.location.href : e.url, e.url = e.url.replace("www", ""), e.protocol = 0 === e.url.indexOf("http://") ? "http://" : 0 === e.url.indexOf("https://") ? "https://" : 0 === e.url.indexOf("//") ? "//" : "relative";
            var t = e.url.replace("https://", "");
            t = t.replace("http://", ""), "relative" === e.protocol && (t = t.replace("//", "")), t = t.split("#"), e.anchor = (e.anchor === undefined || "" == e.anchor || 0 == e.anchor.length) && t.length > 1 ? t[1] : e.anchor === undefined ? "" : e.anchor.replace("#", ""), e.anchor = e.anchor.split("?"), e.queries = t[0].split("?"), e.queries = e.queries.length > 1 ? e.queries[1] : "", e.queries = e.queries.length > 1 ? e.queries[1] : e.anchor.length > 1 ? e.anchor[1] : e.queries, e.anchor = e.anchor[0];
            (t = t[0]).split("/");
            var i = t.split("/");
            return e.host = i[0], i.splice(0, 1), e.path = "/" + i.join("/"), "/" == e.path[e.path.length - 1] && (e.path = e.path.slice(0, -1)), e.origin = "relative" !== e.protocol ? e.protocol + e.host : window.location.origin.replace("www", "") + window.location.pathname, e.hash = ("" !== e.queries && e.queries !== undefined ? "?" + e.queries : "") + ("" !== e.anchor && e.anchor !== undefined ? "#" + e.anchor : ""), e
        },
        scrollToId: function(e) {
            var t = "scrollbelow" === e.action ? (getOffContH(_R[e.id].fullScreenOffsetContainer) || 0) - (parseInt(e.offset, 0) || 0) || 0 : 0 - (parseInt(e.offset, 0) || 0),
                i = "scrollbelow" === e.action ? _R[e.id].c : jQuery("#" + e.anchor),
                a = i.length > 0 ? i.offset().top : 0,
                r = { _y: _R[e.id].modal.useAsModal ? _R[e.id].cpar[0].scrollTop : window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset };
            a += "scrollbelow" === e.action ? _R[e.id].sbtimeline.fixed ? _R[e.id].cpar.parent().height() + _R[e.id].fullScreenOffsetResult : jQuery(_R[e.id].slides[0]).height() : 0, tpGS.gsap.to(r, e.speed / 1e3, { _y: a - t, ease: e.ease, onUpdate: function() { _R[e.id].modal.useAsModal ? _R[e.id].cpar.scrollTop(r._y) : _R.document.scrollTop(r._y) }, onComplete: function() { e.hash !== undefined && (window.location.hash = e.hash) } })
        }
    });
    var moduleEnterLeaveActions = function(e) {
            !_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function() {
                _R[e].mouseoncontainer = !0;
                var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== i && i !== undefined) {
                    if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
                        for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({ layer: jQuery(_R[e].layers[i][t]), frame: "frame_1", mode: "trigger", id: e });
                    for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({ layer: jQuery(_R[e].layers.static[t]), frame: "frame_1", mode: "trigger", id: e })
                }
            }), _R[e].c.on("tp-mouseleft", function() {
                _R[e].mouseoncontainer = !0;
                var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== i && i !== undefined) {
                    if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
                        for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({ layer: jQuery(_R[e].layers[i][t]), frame: "frame_999", mode: "trigger", id: e });
                    for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({ layer: jQuery(_R[e].layers.static[t]), frame: "frame_999", mode: "trigger", id: e })
                }
            })), _R[e].moduleActionsPrepared = !0
        },
        checkActions_intern = function(layer, id) {
            var actions = _R.gA(layer[0], "actions"),
                _L = layer.data();
            for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, _R[id].lastMouseDown = {}, actions)
                if (actions.hasOwnProperty(ei)) {
                    var event = getEventParams(actions[ei].split(";"));
                    _L.events.push(event), "click" === event.on && layer[0].classList.add("rs-wclickaction"), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (_R.document.keyup(function(e) { 27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on) }), _R[id].fullscreen_esclistener = !0);
                    var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);
                    switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
                        case "togglevideo":
                            jQuery.each(targetlayer, function() { updateToggleByList(jQuery(this), "videotoggledby", layer[0].id) });
                            break;
                        case "togglelayer":
                            jQuery.each(targetlayer, function() { updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate) });
                            break;
                        case "toggle_global_mute_video":
                        case "toggle_mute_video":
                            jQuery.each(targetlayer, function() { updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id) });
                            break;
                        case "toggleslider":
                            _R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
                            break;
                        case "togglefullscreen":
                            _R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id)
                    }
                }
            _R[id].actionsPrepared = !0, layer.on("mousedown", function(e) { e.touches && (e = e.touches[0]), _R[id].lastMouseDown.pageX = e.pageX, _R[id].lastMouseDown.pageY = e.pageY }), layer.on("click mouseenter mouseleave", function(e) {
                if ("click" === e.type) { var evt = e.touches ? e.touches[0] : e; if (Math.abs(evt.pageX - _R[id].lastMouseDown.pageX) > 5 || Math.abs(evt.pageY - _R[id].lastMouseDown.pageY) > 5) return }
                for (var i in _L.events)
                    if (_L.events.hasOwnProperty(i) && _L.events[i].on === e.type) {
                        var event = _L.events[i];
                        if (!(event.repeat !== undefined && event.repeat > 0) || _R.delayer(id, 1e3 * event.repeat, _L.c[0].id + "_" + event.action)) {
                            if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
                            var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
                                tex = targetlayer.length > 0;
                            switch (event.action) {
                                case "menulink":
                                    var linkto = _R.getURLDetails({ url: event.url, anchor: event.anchor }),
                                        linkfrom = _R.getURLDetails();
                                    linkto.host == linkfrom.host && linkto.path == linkfrom.path && "_self" === event.target ? _R.scrollToId({ id: id, offset: event.offset, action: event.action, anchor: event.anchor, hash: linkto.hash, speed: event.speed, ease: event.ease }) : "_self" === event.target ? window.location = linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "") : window.open(linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "")), e.preventDefault();
                                    break;
                                case "nextframe":
                                case "prevframe":
                                case "gotoframe":
                                case "togglelayer":
                                case "toggleframes":
                                case "startlayer":
                                case "stoplayer":
                                    if (targetlayer[0] === undefined) continue;
                                    var _ = _R[id]._L[targetlayer[0].id],
                                        frame = event.frame,
                                        tou = "triggerdelay";
                                    if ("click" === e.type && _.clicked_time_stamp !== undefined && (new Date).getTime() - _.clicked_time_stamp < 300) return;
                                    if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && (new Date).getTime() - _.mouseentered_time_stamp < 300) return;
                                    if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = (new Date).getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = (new Date).getTime()), "mouseleave" === e.type && (_.mouseentered_time_stamp = undefined), "nextframe" === event.action || "prevframe" === event.action) {
                                        _.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
                                        var inx = jQuery.inArray(_.currentframe, _.ford);
                                        for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--;
                                            "skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
                                        frame = _.ford[inx]
                                    }
                                    jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, "togglelayer" === event.action && !0 === _.triggeredstate && _.currentframe !== undefined && "frame_999" !== _.currentframe && (_.triggeredstate = !1), frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
                                    var pars = { layer: targetlayer, frame: frame, mode: "trigger", id: id };
                                    !0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function(e) { _R.renderLayerAnimation(e) }, 1e3 * event.delay, pars));
                                    break;
                                case "playvideo":
                                    tex && _R.playVideo(targetlayer, id);
                                    break;
                                case "stopvideo":
                                    tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
                                    break;
                                case "togglevideo":
                                    tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
                                    break;
                                case "mutevideo":
                                    tex && _R.Mute(targetlayer, id, !0);
                                    break;
                                case "unmutevideo":
                                    tex && _R.Mute && _R.Mute(targetlayer, id, !1);
                                    break;
                                case "toggle_mute_video":
                                    tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
                                    break;
                                case "toggle_global_mute_video":
                                    var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
                                    pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function(e, t) { _R.Mute && _R.Mute(t, id, !1) }) : jQuery.each(_R[id].playingvideos, function(e, t) { _R.Mute && _R.Mute(t, id, !0) })), _R[id].globalmute = !_R[id].globalmute;
                                    break;
                                default:
                                    tpGS.gsap.delayedCall(event.delay, function(targetlayer, id, event, layer) {
                                        switch (event.action) {
                                            case "openmodal":
                                                if (event.modalslide = event.modalslide === undefined ? 0 : event.modalslide, window.RS_60_MODALS === undefined || -1 == jQuery.inArray(event.modal, window.RS_60_MODALS)) {
                                                    _R.showModalCover(id, event, "show");
                                                    var data = { action: "revslider_ajax_call_front", client_action: "get_slider_html", alias: event.modal, usage: "modal" };
                                                    jQuery.ajax({ type: "post", url: _R[id].ajaxUrl, dataType: "json", data: data, success: function(e, t, i) { 1 == e.success ? (jQuery("body").append(e.data), setTimeout(function() { _R.showModalCover(id, event, "hide"), _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide) }, 49)) : _R.showModalCover(id, event, "hide") }, error: function(e) { _R.showModalCover(id, event, "hide"), console.log("Modal Can not be Loaded"), console.log(e) } })
                                                } else _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide);
                                                break;
                                            case "closemodal":
                                                _R.revModal(id, { mode: "close" });
                                                break;
                                            case "callback":
                                                eval(event.callback);
                                                break;
                                            case "simplelink":
                                                window.open(event.url, event.target);
                                                break;
                                            case "simulateclick":
                                                targetlayer.length > 0 && targetlayer.trigger("click");
                                                break;
                                            case "toggleclass":
                                                targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
                                                break;
                                            case "scrollbelow":
                                            case "scrollto":
                                                "scrollbelow" === event.action && layer.addClass("tp-scrollbelowslider"), _R.scrollToId({ id: id, offset: event.offset, action: event.action, anchor: event.id, speed: event.speed, ease: event.ease });
                                                break;
                                            case "jumptoslide":
                                                switch (event.slide.toLowerCase()) {
                                                    case "rs-random":
                                                        var ts = Math.min(Math.max(0, Math.ceil(Math.random() * _R[id].realslideamount) - 1));
                                                        ts = _R[id].activeRSSlide == ts ? ts > 0 ? ts - 1 : ts + 1 : ts, _R.callingNewSlide(id, _R[id].slides[ts].dataset.key, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "+1":
                                                    case "next":
                                                    case "rs-next":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "rs-previous":
                                                    case "rs-prev":
                                                    case "previous":
                                                    case "prev":
                                                    case "-1":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "first":
                                                    case "rs-first":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "last":
                                                    case "rs-last":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    default:
                                                        var ts = _R.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;
                                                        _R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType)
                                                }
                                                break;
                                            case "toggleslider":
                                                _R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
                                                break;
                                            case "pauseslider":
                                                _R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
                                                break;
                                            case "playslider":
                                                _R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
                                                break;
                                            case "gofullscreen":
                                            case "exitfullscreen":
                                            case "togglefullscreen":
                                                var gf;
                                                jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = _R.getWinH(id), _R[id].infullscreenmode = !0, jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby), _R[id].c.revredraw());
                                                break;
                                            default:
                                                _R[id].c.trigger("layeraction", [event.action, layer, event])
                                        }
                                    }, [targetlayer, id, event, layer])
                            }
                        }
                    }
            })
        };

    function getFordWithAction(e) { var t = []; for (var i in e.ford) e.frames[e.ford[i]].timeline.waitoncall ? t.push(e.ford[i]) : t.push("skip"); return t }

    function updateToggleByList(e, t, i) {
        var a = e.data(t);
        a === undefined && (a = []), a.push(i), e.data(t, a)
    }

    function getEventParams(e) {
        var t = { on: "click", delay: 0, ease: "power2.out", speed: 400 };
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var a = e[i].split(":");
                switch (a.length > 2 && "call" === a[0] && (a[1] = a.join(":").replace(a[0] + ":", "")), a[0]) {
                    case "modal":
                        t.modal = a[1];
                        break;
                    case "ms":
                        t.modalslide = a[1];
                        break;
                    case "m":
                        t.frameM = a[1];
                        break;
                    case "n":
                        t.frameN = a[1];
                        break;
                    case "o":
                        t.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
                        break;
                    case "d":
                        t.delay = parseInt(a[1], 0) / 1e3, t.delay = "NaN" === t.delay || isNaN(t.delay) ? 0 : t.delay;
                        break;
                    case "rd":
                        t.repeat = parseInt(a[1], 0) / 1e3, t.repeat = "NaN" === t.repeat || isNaN(t.repeat) ? 0 : t.repeat;
                        break;
                    case "a":
                        t.action = a[1];
                        break;
                    case "f":
                        t.frame = a[1];
                        break;
                    case "slide":
                        t.slide = a[1];
                        break;
                    case "layer":
                        t.layer = a[1];
                        break;
                    case "sp":
                        t.speed = parseInt(a[1], 0);
                        break;
                    case "e":
                        t.ease = a[1];
                        break;
                    case "ls":
                        t.togglestate = a[1];
                        break;
                    case "offset":
                        t.offset = a[1];
                        break;
                    case "call":
                        t.callback = a[1];
                        break;
                    case "url":
                        t.url = "";
                        for (var r = 1; r < a.length; r++) t.url += a[r] + (r === a.length - 1 ? "" : ":");
                        break;
                    case "target":
                        t.target = a[1];
                        break;
                    case "class":
                        t.classname = a[1];
                        break;
                    case "ch":
                        t.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
                        break;
                    default:
                        a[0].length > 0 && "" !== a[0] && (t[a[0]] = a[1])
                }
            }
        return t
    }
    var getOffContH = function(e) {
        if (e == undefined) return 0;
        if (e.split(",").length > 1) {
            var t = e.split(","),
                i = 0;
            return t && jQuery.each(t, function(e, t) { jQuery(t).length > 0 && (i += jQuery(t).outerHeight(!0)) }), i
        }
        return jQuery(e).height()
    }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution;
    t.is_mobile();
    jQuery.extend(!0, t, {
        prepareCarousel: function(e, i, a) {
            if (void 0 !== e) {
                var o = t[e].carousel;
                o.slidepositions = void 0 === o.slidepositions ? [] : o.slidepositions, o.slideFakePositions = void 0 === o.slideFakePositions ? [] : o.slideFakePositions, i = o.lastdirection = r(i, o.lastdirection), t.setCarouselDefaults(e), void 0 === o.slidepositions[0] && (o.slideAnims = [], t.organiseCarousel(e, "right", !0, !1, !1), o.focused = 0, o.keepFocusedFirst = !0), o.slide_offset = void 0 !== o.slide_offset && t.isNumeric(o.slide_offset) ? o.slide_offset : 0, o.swipeTo = o.slide_offset + s(e), o.swipeToDistance = Math.abs(o.slide_offset) + Math.abs(s(e)), void 0 !== o.swipeTo && t.isNumeric(o.swipeTo) ? void 0 !== a ? t.swipeAnimate({ id: e, to: o.swipeTo, distance: o.swipeToDistance, direction: i, fix: !0, speed: a }) : t.swipeAnimate({ id: e, to: o.swipeTo, distance: o.swipeToDistance, direction: i, fix: !0 }) : t.swipeAnimate({ id: e, to: 0, direction: i, speed: 0 })
            }
        },
        carouselToEvalPosition: function(e, a, o) {
            var s = t[e].carousel;
            if (s.justify) s.focused = void 0 === s.focused ? 0 : s.focused, s.slidepositions[s.focused] = void 0 === s.slidepositions[s.focused] ? 0 : s.slidepositions[s.focused], s.slide_offset_target = i(e, s.focused);
            else {
                a = s.lastdirection = r(a, s.lastdirection);
                var n = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width,
                    d = n % t[e].slideamount,
                    l = d - Math.floor(d),
                    c = -1 * (Math.ceil(d) - d),
                    p = -1 * (Math.floor(d) - d),
                    g = l * s.slide_width,
                    u = g >= 20 && "left" === a ? 1 : g >= s.slide_width - 20 && "right" === a ? 2 : g < 20 && "left" === a ? 3 : g < s.slide_width - 20 && "right" === a ? 4 : 5,
                    h = 1 === u || 2 === u ? c : 3 === u || 4 === u ? p : 0;
                s.slide_offset_target = (s.infinity ? h : d < 0 ? d : n > t[e].slideamount - 1 ? n - (t[e].slideamount - 1) : h) * s.slide_width
            }
            return s.slide_offset_target !== s.slide_offset_targetCACHE && !0 !== o && (0 !== Math.abs(s.slide_offset_target) ? t.animateCarousel(e, a, !0) : t.organiseCarousel(e, a), s.slide_offset_targetCACHE = s.slide_offset_target), s.slide_offset_target
        },
        loadVisibleCarouselItems: function(e, i) {
            var a = [];
            t[e].carousel.focused = parseInt(t[e].carousel.focused, 0), t[e].carousel.focused = t.isNumeric(t[e].carousel.focused) ? t[e].carousel.focused : 0;
            for (var r = 0; r < Math.ceil(t[e].carousel.maxVisibleItems / 2); r++) {
                var o = "right" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : t[e].carousel.focused + r,
                    s = "center" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : "left" === t[e].carousel.horizontal_align ? t[e].carousel.maxVisibleItems + o - 1 : o - t[e].carousel.maxVisibleItems + 1;
                o = o >= t[e].slideamount ? o - t[e].slideamount + 0 : o, s = s >= t[e].slideamount ? s - t[e].slideamount + 0 : s, o = o < 0 ? t[e].slideamount + o : o, s = s < 0 ? t[e].slideamount + s : s, a.push(t[e].slides[o]), o !== s && a.push(t[e].slides[s])
            }
            return i && (t.loadImages(a, e, 1), t.waitForCurrentImages(a, e)), a
        },
        organiseCarousel: function(e, i, a, r, o) {
            Math.round(1e5 * Math.random());
            var s = t[e].carousel,
                n = "center" === s.horizontal_align ? 2 : 1,
                d = Math.ceil(s.maxVisibleItems / n),
                l = "center" === s.horizontal_align ? s.wrapwidth / 2 + s.maxwidth / 2 : s.maxwidth - s.slide_width,
                c = "center" === s.horizontal_align ? s.wrapwidth / 2 - s.maxwidth / 2 : 0 - s.slide_width,
                p = 0,
                g = 0,
                u = 0;
            if (s.ocfirsttun = !0, i = s.slide_offset < s.cached_slide_offset ? "left" : "right", s.cached_slide_offset = s.slide_offset, !0 !== s.justify && "center" === s.horizontal_align) {
                var h = 2 * (s.windhalf - s.wrapoffset) + s.slide_width;
                h >= s.maxwidth && ("left" === i && (l = 2 * s.windhalf, c = 0 - (s.slide_width - (h - s.maxwidth))), "right" === i && (l = 2 * s.windhalf - (h - s.maxwidth), c = 0 - s.slide_width))
            }
            for (var m = 2 * s.windhalf, v = 0, f = -1, y = 0; y < s.len; y++) !0 === s.justify ? (p += y > 0 ? s.slide_widths[y - 1] + s.space : s.slide_offset, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align && (s.slideFakePositions[y] = p - s.slide_offset), c = 0 - s.slide_widths[y], l = s.maxwidth - s.slide_widths[y], s.inneroffset = 0) : (p = y * s.slide_width + s.slide_offset, s.wrapwidth >= s.maxwidth && "left" === s.horizontal_align && (s.slideFakePositions[y] = y * s.slide_width), s.wrapwidth >= s.maxwidth && "right" === s.horizontal_align && (s.slideFakePositions[y] = s.wrapwidth - (y + 1) * s.slide_width)), u = g = p, s.infinity && (g = g >= l - s.inneroffset ? g - s.maxwidth : g <= c - s.inneroffset ? g + s.maxwidth : g), m > g && (m = g, y), v < g && (v = g, f = y), s.slidepositions[y] = u > s.maxwidth + l ? g - s.maxwidth : u < c - s.maxwidth ? g + s.maxwidth : g;
            s.infinity && m > 0 && v > s.wrapwidth && (s.slidepositions[f] -= s.maxwidth);
            var b = 999,
                w = 0,
                _ = (t[e].module.width, !1),
                S = "right" === s.horizontal_align ? 0 : s.wrapwidth;
            if (t[e].slides)
                for (y = 0; y < t[e].slides.length; y++) {
                    var x = { left: (g = s.slidepositions[y]) + s.inneroffset, width: !0 === s.justify ? s.slide_widths[y] : s.slide_width, x: 0 },
                        k = 0;
                    if (void 0 === s.slideAnims[y] && (x.transformOrigin = "50% " + s.vertical_align, x.scale = 1, x.force3D = !0, x.transformStyle = "3D" != t[e].parallax.type && "3d" != t[e].parallax.type ? "flat" : "preserve-3d"), s.justify) x.autoAlpha = 1, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align || ("center" === s.horizontal_align && s.slidepositions[y] < s.windhalf && s.slidepositions[y] + s.slide_widths[y] > s.windhalf ? s.focused = y : "left" === s.horizontal_align && s.slidepositions[y] >= -25 && s.slidepositions[y] < s.windhalf && (!_ || s.slidepositions[y] < S) ? (s.focused = y, _ = !0, S = s.slidepositions[y]) : "right" === s.horizontal_align && s.slidepositions[y] + s.slide_widths[y] <= s.wrapwidth + 25 && (s.slide_widths[y] < s.windhalf && s.slidepositions[y] > s.windhalf || s.slidepositions[y] > s.wrapwidth - s.slide_widths[y]) && (!_ || s.slidepositions[y] > S) && (s.focused = y, _ = !0, S = s.slidepositions[y]), s.focused = s.focused >= s.len ? s.infinity ? 0 : s.len - 1 : s.focused < 0 ? s.infinity ? s.len - 1 : 0 : s.focused);
                    else {
                        k = "center" === s.horizontal_align ? (Math.abs(s.wrapwidth / 2) - (x.left + s.slide_width / 2)) / s.slide_width : (s.inneroffset - x.left) / s.slide_width, (Math.abs(k) < b || 0 === k) && (b = Math.abs(k), s.focused = y), void 0 !== s.minScale && s.minScale > 0 && (s.vary_scale ? x.scale = 1 - Math.abs((1 - s.minScale) / d * k) : x.scale = k >= 1 || k <= -1 ? s.minScale : s.minScale + (1 - s.minScale) * (1 - Math.abs(k)), w = k * (x.width - x.width * x.scale) / 2), s.fadeout && (s.vary_fade ? x.autoAlpha = 1 - Math.abs(s.maxOpacity / d * k) : x.autoAlpha = k >= 1 || k <= -1 ? s.maxOpacity : s.maxOpacity + (1 - s.maxOpacity) * (1 - Math.abs(k)));
                        var L = Math.ceil(s.maxVisibleItems / n) - Math.abs(k);
                        x.autoAlpha = void 0 === x.autoAlpha ? 1 : x.autoAlpha, x.autoAlpha = Math.max(0, Math.min(L, x.autoAlpha)), void 0 !== s.maxRotation && 0 != Math.abs(s.maxRotation) && (s.vary_rotation ? (x.rotationY = Math.abs(s.maxRotation) - Math.abs((1 - Math.abs(1 / d * k)) * s.maxRotation), x.autoAlpha = Math.abs(x.rotationY) > 90 ? 0 : x.autoAlpha) : x.rotationY = k >= 1 || k <= -1 ? s.maxRotation : Math.abs(k) * s.maxRotation, x.rotationY = k < 0 ? -1 * x.rotationY : x.rotationY, t.isSafari11() && (x.z = 0 !== k ? 0 - Math.abs(x.rotationY) : 0)), x.x = Math.floor(-1 * s.space * k * (s.offsetScale ? x.scale : 1)), void 0 !== x.scale && (x.x = x.x + w)
                    }
                    x.x += s.wrapwidth >= s.maxwidth && ("left" === s.horizontal_align || "right" === s.horizontal_align) ? s.slideFakePositions[y] : Math.floor(x.left), delete x.left, x.zIndex = s.justify ? 95 : Math.round(100 - Math.abs(5 * k)), !0 !== o && (void 0 !== s.slideAnims[y] && (x.width === s.slideAnims[y].width && delete x.width, x.x === s.slideAnims[y].x && delete x.x, x.autoAlpha === s.slideAnims[y].autoAlpha && delete x.autoAlpha, x.scale === s.slideAnims[y].scale && delete x.scale, x.zIndex === s.slideAnims[y].zIndex && delete x.zIndex, x.rotationY === s.slideAnims[y].rotationY && delete x.rotationY), tpGS.gsap.set(t[e].slides[y], x), s.slideAnims[y] = jQuery.extend(!0, s.slideAnims[y], x))
                }
            if (t.loadVisibleCarouselItems(e, !0), r && !0 !== o) {
                if (s.focused = void 0 === s.focused ? 0 : s.focused, s.oldfocused = void 0 === s.oldfocused ? 0 : s.oldfocused, t[e].pr_next_key = s.focused, s.focused !== s.oldfocused)
                    for (var R in void 0 !== s.oldfocused && t.removeTheLayers(jQuery(t[e].slides[s.oldfocused]), e), t.animateTheLayers({ slide: s.focused, id: e, mode: "start" }), t.animateTheLayers({ slide: "individual", id: e, mode: t[e].carousel.allLayersStarted ? "rebuild" : "start" }), t[e].sbgs) t[e].sbgs.hasOwnProperty(R) && void 0 !== t[e].sbgs[R].bgvid && 0 !== t[e].sbgs[R].bgvid.length && ("" + t[e].sbgs[R].skeyindex == "" + s.focused ? t.playBGVideo(e, t.gA(t[e].pr_next_slide[0], "key")) : t.stopBGVideo(e, t[e].sbgs[R].key));
                s.oldfocused = s.focused, t[e].c.trigger("revolution.nextslide.waiting")
            }
        },
        swipeAnimate: function(e) {
            var i = t[e.id].carousel,
                r = { from: i.slide_offset, to: e.to },
                o = void 0 === e.speed ? .5 : e.speed;
            if (i.distance = void 0 !== e.distance ? e.distance : e.to, void 0 !== i.positionanim && i.positionanim.pause(), e.fix) {
                if (!1 !== i.snap) {
                    var s = i.slide_offset,
                        n = "end" === e.phase ? i.focusedBeforeSwipe : i.focused;
                    i.slide_offset = e.to, t.organiseCarousel(e.id, e.direction, !0, !1, !1), Math.abs(i.swipeDistance) > 40 && n == i.focused && (i.focused = "right" === e.direction ? i.focused - 1 : i.focused + 1, i.focused = i.focused >= i.len ? i.infinity ? 0 : i.len - 1 : i.focused < 0 ? i.infinity ? i.len - 1 : 0 : i.focused), r.to += t.carouselToEvalPosition(e.id, e.direction, !0), i.slide_offset = s, t.organiseCarousel(e.id, e.direction, !0, !1, !1), i.keepFocusedFirst && (i.keepFocusedFirst = !1, i.focused = 0)
                } else !0 !== i.infinity ? (r.to > 0 && (r.to = 0), r.to < i.wrapwidth - i.maxwidth && (r.to = i.wrapwidth - i.maxwidth)) : "end" === e.phase ? i.dragModeJustEnded = !0 : !0 !== i.dragModeJustEnded ? r.to += t.carouselToEvalPosition(e.id, e.direction, !0) : i.dragModeJustEnded = !1;
                0 !== (o = i.speed / 1e3 * a(Math.abs(Math.abs(r.from) - Math.abs(i.distance)) / i.wrapwidth)) && o < .1 && Math.abs(r.to) > 25 && (o = .3)
            }
            i.swipeDistance = 0, o = !0 !== i.firstSwipedDone ? 0 : o, i.firstSwipedDone = !0, i.positionanim = tpGS.gsap.to(r, o, { from: r.to, onUpdate: function() { i.slide_offset = r.from % i.maxwidth, t.organiseCarousel(e.id, e.direction, !0 !== e.fix, !0 !== e.fix), i.slide_offset = r.from }, onComplete: function() { i.slide_offset = r.from % i.maxwidth, "carousel" !== t[e.id].sliderType || i.fadein || (tpGS.gsap.to(t[e.id].canvas, 1, { scale: 1, opacity: 1 }), i.fadein = !0), i.lastNotSimplifedSlideOffset = i.slide_offset, i.justDragged = !1, e.fix && (i.focusedAfterAnimation = i.focused, e.newSlide && i.focusedBeforeSwipe !== i.focused && t.callingNewSlide(e.id, jQuery(t[e.id].slides[i.focused]).data("key"), !0), t.organiseCarousel(e.id, e.direction, !0, !0), t[e.id].c.trigger("revolution.slide.carouselchange", { slider: e.id, slideIndex: parseInt(t[e.id].pr_active_key, 0) + 1, slideLIIndex: t[e.id].pr_active_key, slide: t[e.id].pr_next_slide, currentslide: t[e.id].pr_next_slide, prevSlideIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0) + 1, prevSlideLIIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0), prevSlide: void 0 !== t[e.id].pr_lastshown_key && t[e.id].slides[t[e.id].pr_lastshown_key] })) }, ease: e.easing ? e.easing : i.easing })
        },
        defineCarouselElements: function(e) {
            var i = t[e].carousel;
            i.infbackup = i.infinity, i.maxVisiblebackup = i.maxVisibleItems, i.slide_offset = "none", i.slide_offset = 0, i.cached_slide_offset = 0, i.wrap = jQuery(t[e].canvas[0].parentNode), 0 !== i.maxRotation && ("3D" !== t[e].parallax.type && "3d" !== t[e].parallax.type || tpGS.gsap.set(i.wrap, { perspective: "1600px", transformStyle: "preserve-3d" }))
        },
        setCarouselDefaults: function(e, i) {
            var a = t[e].carousel;
            if (a.slide_width = !0 !== a.stretch ? t[e].gridwidth[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.width, a.slide_height = !0 !== a.stretch ? t[e].infullscreenmode ? t.getWinH(e) - t.getFullscreenOffsets(e) : t[e].gridheight[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.height, a.ratio = a.slide_width / a.slide_height, a.len = t[e].slides.length, a.maxwidth = t[e].slideamount * a.slide_width, 1 != a.justify && a.maxVisiblebackup > a.len && (a.maxVisibleItems = a.len % 2 ? a.len : a.len + 1), a.wrapwidth = a.maxVisibleItems * a.slide_width + (a.maxVisibleItems - 1) * a.space, a.wrapwidth = "auto" != t[e].sliderLayout ? a.wrapwidth > t[e].canv.width ? t[e].canv.width : a.wrapwidth : a.wrapwidth > t[e].module.width ? t[e].module.width : a.wrapwidth, !0 === a.justify) {
                a.slide_height = "fullscreen" === t[e].sliderLayout ? t[e].module.height : t[e].gridheight[t[e].level], a.slide_widths = [], a.slide_widthsCache = void 0 === a.slide_widthsCache ? [] : a.slide_widthsCache, a.maxwidth = 0;
                for (var r = 0; r < a.len; r++)
                    if (t[e].slides.hasOwnProperty(r)) {
                        var o = t.gA(t[e].slides[r], "iratio");
                        o = void 0 === o || 0 === o || null === o ? a.ratio : o, a.slide_widths[r] = Math.round(a.slide_height * o), !1 !== a.justifyMaxWidth && (a.slide_widths[r] = Math.min(a.wrapwidth, a.slide_widths[r])), a.slide_widths[r] !== a.slide_widthsCache[r] && (a.slide_widthsCache[r] = a.slide_widths[r], !0 !== i && tpGS.gsap.set(t[e].slides[r], { width: a.slide_widths[r] })), a.maxwidth += a.slide_widths[r] + a.space
                    }
            }
            if (a.infinity = !(a.wrapwidth >= a.maxwidth) && a.infbackup, !0 !== a.quickmode) {
                a.wrapoffset = "center" === a.horizontal_align ? (t[e].canv.width - t[e].outNavDims.right - t[e].outNavDims.left - a.wrapwidth) / 2 : 0, a.wrapoffset = "auto" != t[e].sliderLayout && t[e].outernav ? 0 : a.wrapoffset < t[e].outNavDims.left ? t[e].outNavDims.left : a.wrapoffset;
                var s = "3D" == t[e].parallax.type || "3d" == t[e].parallax.type ? "visible" : "hidden",
                    n = "right" === a.horizontal_align ? { left: "auto", right: a.wrapoffset + "px", width: a.wrapwidth, overflow: s } : "left" === a.horizontal_align || a.wrapwidth < t.winW ? { right: "auto", left: a.wrapoffset + "px", width: a.wrapwidth, overflow: s } : { right: "auto", left: "auto", width: "100%", overflow: s };
                void 0 !== a.cacheWrapObj && n.left === a.cacheWrapObj.left && n.right === a.cacheWrapObj.right && n.width === a.cacheWrapObj.width || (window.requestAnimationFrame(function() { tpGS.gsap.set(a.wrap, n), t[e].carousel.wrapoffset > 0 && tpGS.gsap.set(t[e].canvas, { left: 0 }) }), a.cacheWrapObj = jQuery.extend(!0, {}, n)), a.inneroffset = "right" === a.horizontal_align ? a.wrapwidth - a.slide_width : 0, a.windhalf = "auto" === t[e].sliderLayout ? t[e].module.width / 2 : t.winW / 2
            }
        }
    });
    var i = function(e, i) { var a = t[e].carousel; return "center" === a.horizontal_align ? a.windhalf - a.slide_widths[i] / 2 - a.slidepositions[i] : "left" === a.horizontal_align ? 0 - a.slidepositions[i] : a.wrapwidth - a.slide_widths[i] - a.slidepositions[i] },
        a = function(e) { return e < 1 ? Math.sqrt(1 - (e -= 1) * e) : Math.sqrt(e) },
        r = function(e, t) { return null === e || jQuery.isEmptyObject(e) ? t : void 0 === e ? "right" : e },
        o = function(e, t) { return Math.abs(e) > Math.abs(t) ? e > 0 ? e - Math.abs(Math.floor(e / t) * t) : e + Math.abs(Math.floor(e / t) * t) : e },
        s = function(e) {
            var i, a, r, s, n, d = 0,
                l = t[e].carousel;
            if (void 0 !== l.positionanim && l.positionanim.pause(), l.justify) "center" === l.horizontal_align ? d = l.windhalf - l.slide_widths[l.focused] / 2 - l.slidepositions[l.focused] : "left" === l.horizontal_align ? d = 0 - l.slidepositions[l.focused] : "right" === l.horizontal_align && (d = l.wrapwidth - l.slide_widths[l.focused] - l.slidepositions[l.focused]), d = d > l.maxwidth / 2 ? l.maxwidth - d : d < 0 - l.maxwidth / 2 ? d + l.maxwidth : d;
            else {
                var c = t[e].pr_processing_key >= 0 ? t[e].pr_processing_key : t[e].pr_active_key >= 0 ? t[e].pr_active_key : 0,
                    p = ("center" === l.horizontal_align ? (l.wrapwidth / 2 - l.slide_width / 2 - l.slide_offset) / l.slide_width : (0 - l.slide_offset) / l.slide_width) % t[e].slideamount;
                d = (l.infinity ? (i = p, a = c, r = t[e].slideamount, n = a - r - i, s = o(s = a - i, r), n = o(n, r), -(Math.abs(s) > Math.abs(n) ? n : s)) : p - c) * l.slide_width
            }
            return !1 === l.snap && l.justDragged && (d = 0), l.justDragged = !1, d
        }
}(jQuery),
function(e) {
    "use strict";
    var t = ["chars", "words", "lines"],
        i = ["Top", "Right", "Bottom", "Left"],
        a = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
        r = ["top", "right", "bottom", "left"],
        o = jQuery.fn.revolution,
        s = o.is_mobile();
    o.is_android();
    jQuery.extend(!0, o, {
        checkLayerDimensions: function(e) {
            var t = !1;
            for (var i in o[e.id].layers[e.skey])
                if (o[e.id].layers[e.skey].hasOwnProperty(i)) {
                    var a = o[e.id].layers[e.skey][i],
                        r = o[e.id]._L[a.id];
                    r.eow !== a.offsetWidth && "true" !== o.gA(a, "vary-layer-dims") && (t = !0), r.lastknownwidth = r.eow, r.lastknownheight = r.eoh, r._slidelink || o[e.id].caches.calcResponsiveLayersList.push({ a: o[e.id]._L[a.id].c, b: e.id, c: 0, d: r.rsp_bd, e: e.slideIndex })
                }
            return t
        },
        requestLayerUpdates: function(e, t, i, a) {
            var r, s, n, d;
            if (void 0 !== i) r = i, o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (void 0 === o[e]._L[r]._ligid || !0 !== o[e]._L[o[e]._L[r]._ligid].childrenAtStartNotVisible ? (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, d = ("row" === o[e]._L[r].type || "column" === o[e]._L[r].type || "group" === o[e]._L[r].type) && void 0 !== o[e]._L[r].frames && void 0 !== o[e]._L[r].frames.frame_999 && void 0 !== o[e]._L[r].frames.frame_999.transform && "" + o[e]._L[r].frames.frame_999.transform.opacity != "0", n = 1 === o[e]._L[r].pVisRequest ? "remove" : d ? n : "add", s = 1 === o[e]._L[r].pVisRequest ? "remove" : d ? "add" : s) : (n = "add", s = "remove"), void 0 !== s && o[e]._L[r].p[0].classList[s]("rs-forceuntouchable"), void 0 !== n && o[e]._L[r].p[0].classList[n]("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], { pointerEvents: o[e]._L[r].pPointerStatus, visibility: 1 === o[e]._L[r].pVisStatus ? "visible" : 0 === o[e]._L[r].pVisStatus ? "hidden" : o[e]._L[r].pVisStatus })), void 0 !== a && "ignore" !== a && 0 !== a && (a++, "enterstage" === t || "leavestage" === t || "framestarted" === t ? o.isFirefox(e) ? -1 === o[e]._L[r].p[0].style.transform.indexOf("perspective") && (o[e]._L[r].p[0].style.transform += (0 === o[e]._L[r].p[0].style.transform.length ? " " : "") + "perspective(" + a + "px)") : (!window.isSafari11 && !0 !== o[e]._L[r].maskHasPerspective && 0 === o[e]._L[r].p[0].style.perspective.length || "none" == o[e]._L[r].p[0].style.perspective) && (o[e]._L[r].p[0].style.perspective = a + "px") : "frameended" === t && (o.isFirefox(e) ? o[e]._L[r].p[0].style.transform = o[e]._L[r].p[0].style.transform.replace("perspective(" + a + "px)", "") : window.isSafari11 || (o[e]._L[r].p[0].style.perspective = o[e]._L[r].p[0].style.perspective.replace(a - 1 + "px", ""))));
            else
                for (r in o[e]._L) o[e]._L.hasOwnProperty(r) && (o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], { pointerEvents: o[e]._L[r].pPointerStatus, visibility: o[e]._L[r].pVisStatus })));
            "enterstage" === t && void 0 !== i && void 0 !== o[e]._L[i].esginside && o[e]._L[i].esginside.length > 0 && void 0 !== o[e]._L[i].esginside.esredraw && o[e]._L[i].esginside.esredraw()
        },
        updateMiddleZonesAndESG: function(e) {
            var t, i = o[e].pr_processing_key || o[e].pr_active_key || 0;
            if (o[e].middleZones && o[e].middleZones.length > 0 && void 0 !== o[e].middleZones[i])
                for (t = 0; t < o[e].middleZones[i].length; t++) tpGS.gsap.set(o[e].middleZones[i][t], { y: Math.round(o[e].module.height / 2 - o[e].middleZones[i][t].offsetHeight / 2) + "px" });
            if (o[e].smiddleZones && o[e].smiddleZones.length > 0)
                for (t = 0; t < o[e].smiddleZones.length; t++) tpGS.gsap.set(o[e].smiddleZones[t], { y: Math.round(o[e].module.height / 2 - o[e].smiddleZones[t].offsetHeight / 2) + "px" })
        },
        getRowHeights: function(e) {
            var t = 0,
                i = 0,
                a = 0,
                r = o[e].pr_processing_key || o[e].pr_active_key || 0,
                s = o[e].pr_active_key || 0;
            if (o[e].rowzones && o[e].rowzones.length > 0) {
                if (void 0 !== o[e].rowzones[r])
                    for (var n = 0; n < o[e].rowzones[r].length; n++) o[e].rowzonesHeights[r][n] = o[e].rowzones[r][n][0].offsetHeight, t += o[e].rowzonesHeights[r][n];
                if (s !== r)
                    for (n = 0; n < o[e].rowzones[s].length; n++) o[e].rowzonesHeights[s][n] = o[e].rowzones[s][n][0].offsetHeight, i += o[e].rowzonesHeights[s][n]
            }
            if (o[e].srowzones && o[e].srowzones.length > 0)
                for (n = 0; n < o[e].srowzones.length; n++) a += o[e].srowzones[n][0].offsetHeight;
            return { cur: t = t < a ? a : t, last: i }
        },
        getGridOffset: function(e, t, i, a) {
            var r = "grid" === i ? o[e].canv.width : "carousel" !== o[e].sliderType || a ? o[e].canv.width : o[e].carousel.slide_width,
                s = o[e].useFullScreenHeight ? o[e].module.height : "grid" === i ? o[e].content.height : "carousel" !== o[e].sliderType || a ? o[e].module.height : o[e].canv.height,
                n = "slide" === i ? 0 : Math.max(0, "fullscreen" == o[e].sliderLayout ? o[e].module.height / 2 - o.iHE(e) * (o[e].keepBPHeight ? 1 : o[e].CM.h) / 2 : o[e].autoHeight || null != o[e].minHeight && o[e].minHeight > 0 || o[e].keepBPHeight ? o[e].canv.height / 2 - o.iHE(e) * o[e].CM.h / 2 : 0),
                d = "slide" === i ? 0 : Math.max(0, "carousel" === o[e].sliderType ? 0 : o[e].canv.width / 2 - o.iWA(e, t) * o[e].CM.w / 2);
            return "slide" !== i && "carousel" === o[e].sliderType && a && void 0 !== o[e].carousel && void 0 !== o[e].carousel.horizontal_align && (d = Math.max(0, "center" === o[e].carousel.horizontal_align ? 0 + (o[e].module.width - o.iWA(e, "static") * o[e].CM.w) / 2 : "right" === o[e].carousel.horizontal_align ? o[e].module.width - o[e].gridwidth[o[e].level] * o[e].CM.w : d)), [r, s, d, n]
        },
        initLayer: function(e) {
            var t, i, a, r = e.id,
                s = e.skey;
            for (var n in o[r].layers[e.skey])
                if (o[r].layers[e.skey].hasOwnProperty(n)) {
                    var d = o[r].layers[e.skey][n],
                        l = jQuery(d),
                        c = o.gA(d, "initialised"),
                        p = c ? o[r]._L[d.id] : l.data();
                    if ("individual" === e.skey && (p.slideKey = void 0 === p.slideKey ? o.gA(l.closest("rs-slide")[0], "key") : p.slideKey, p.slideIndex = void 0 === p.slideIndex ? o.getSlideIndex(r, p.slideKey) : p.slideIndex, e.slideIndex = p.slideIndex, s = p.slideKey), void 0 === c) {
                        if (o.revCheckIDS(r, d), o[r]._L[d.id] = p, p.ford = void 0 === p.ford ? "frame_0;frame_1;frame_999" : p.ford, p.ford = ";" == p.ford[p.ford.length - 1] ? p.ford.substring(0, p.ford.length - 1) : p.ford, p.ford = p.ford.split(";"), void 0 !== p.clip)
                            for (t in p.clipPath = { use: !1, origin: "l", type: "rectangle" }, p.clip = p.clip.split(";"), p.clip) p.clip.hasOwnProperty(t) && ("u" == (i = p.clip[t].split(":"))[0] && (p.clipPath.use = "true" == i[1]), "o" == i[0] && (p.clipPath.origin = i[1]), "t" == i[0] && (p.clipPath.type = i[1]));
                        if (p.frames = L(p, r), p.caches = {}, p.OBJUPD = {}, p.c = l, p.p = o[r]._Lshortcuts[d.id].p, p.lp = o[r]._Lshortcuts[d.id].lp, p.m = o[r]._Lshortcuts[d.id].m, p.triggercache = void 0 === p.triggercache ? "reset" : p.triggercache, p.rsp_bd = void 0 === p.rsp_bd ? "column" === p.type || "row" === p.type ? "off" : "on" : p.rsp_bd, p.rsp_o = void 0 === p.rsp_o ? "on" : p.rsp_o, p.basealign = void 0 === p.basealign ? "grid" : p.basealign, p.group = "group" !== p.type && null !== o.closestNode(l[0], "RS-GROUP-WRAP") ? "group" : "column" !== p.type && null !== o.closestNode(l[0], "RS-COLUMN") ? "column" : "row" !== p.type && null !== o.closestNode(l[0], "RS-ROW") ? "row" : void 0, p._lig = "group" === p.group ? jQuery(o.closestNode(l[0], "RS-GROUP")) : "column" === p.group ? jQuery(o.closestNode(l[0], "RS-COLUMN")) : "row" === p.group ? jQuery(o.closestNode(l[0], "RS-ROW")) : void 0, p._ligid = void 0 !== p._lig ? p._lig[0].id : void 0, p._column = "RS-COLUMN" === l[0].tagName ? jQuery(o.closestNode(l[0], "RS-COLUMN-WRAP")) : "none", p._row = "RS-COLUMN" === l[0].tagName && jQuery(o.closestNode(l[0], "RS-ROW")), p._ingroup = "group" === p.group, p._incolumn = "column" === p.group, p._inrow = "row" === p.group, (p._ingroup || p._incolumn) && p._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== p.animationonscroll || void 0 === p.frames.loop) && !0 !== p.animOnScrollForceDisable && (p.animationonscroll = !0, l[0].className += " rs-sba", o[r].sbas[s][d.id] = l[0]), p.animOnScrollRepeats = 0, p._isgroup = "RS-GROUP" === l[0].tagName, p.type = p.type || "none", "row" === p.type && void 0 === p.cbreak && (p.cbreak = 2), p.esginside = jQuery(l[0].getElementsByClassName("esg-grid")[0]), p._isnotext = -1 !== jQuery.inArray(p.type, ["video", "image", "audio", "shape", "row", "group"]), p._mediatag = "html5" == p.audio ? "audio" : "video", p.img = l.find("img"), p.deepiframe = o.getByTag(l[0], "iframe"), p.deepmedia = o.getByTag(l[0], p._mediatag), p.layertype = "image" === p.type ? "image" : l[0].className.indexOf("rs-layer-video") >= 0 || l[0].className.indexOf("rs-layer-audio") >= 0 || p.deepiframe.length > 0 && (p.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || p.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || p.deepmedia.length > 0 ? "video" : "html", p.deepiframe.length > 0 && o.sA(p.deepiframe[0], "layertype", p.layertype), "column" === p.type && (p.cbg = jQuery(o.getByTag(p.p[0], "RS-COLUMN-BG")[0]), p.cbgmask = jQuery(o.getByTag(p.p[0], "RS-CBG-MASK-WRAP")[0])), p._slidelink = l[0].className.indexOf("slidelink") >= 0, p._isstatic = l[0].className.indexOf("rs-layer-static") >= 0, p.slidekey = p._isstatic ? "staticlayers" : s, p._togglelisteners = l[0].getElementsByClassName("rs-toggled-content").length > 0, p.bgcol = void 0 === p.bgcol ? l[0].style.background.indexOf("gradient") >= 0 ? l[0].style.background : l[0].style.backgroundColor : p.bgcol, p.bgcol = "" === p.bgcol ? "rgba(0, 0, 0, 0)" : p.bgcol, p.bgcol = 0 === p.bgcol.indexOf("rgba(0, 0, 0, 0)") && p.bgcol.length > 18 ? p.bgcol.replace("rgba(0, 0, 0, 0)", "") : p.bgcol, p.zindex = void 0 === p.zindex ? l[0].style.zIndex : p.zindex, p._isgroup && (p.frames.frame_1.timeline.waitoncall && (p.childrenAtStartNotVisible = !0), p.pVisRequest = 0), p._togglelisteners && l.on("click", function() { o.swaptoggleState([this.id]) }), void 0 !== p.border)
                            for (t in p.border = p.border.split(";"), p.bordercolor = "transparent", p.border)
                                if (p.border.hasOwnProperty(t)) switch ((i = p.border[t].split(":"))[0]) {
                                    case "boc":
                                        p.bordercolor = i[1];
                                        break;
                                    case "bow":
                                        p.borderwidth = o.revToResp(i[1], 4, 0);
                                        break;
                                    case "bos":
                                        p.borderstyle = o.revToResp(i[1], 4, 0);
                                        break;
                                    case "bor":
                                        p.borderradius = o.revToResp(i[1], 4, 0)
                                }
                        if ("svg" === p.type && (p.svg = l.find("svg"), p.svgI = y(p.svgi, r), p.svgPath = p.svg.find(p.svgI.svgAll ? "path, circle, ellipse, line, polygon, polyline, rect" : "path"), p.svgH = void 0 !== p.svgi && -1 === p.svgi.indexOf("oc:t") ? y(p.svgh, r) : {}), void 0 !== p.btrans) {
                            var g = p.btrans;
                            for (t in p.btrans = { rX: 0, rY: 0, rZ: 0, o: 1 }, g = g.split(";"))
                                if (g.hasOwnProperty(t)) switch ((i = g[t].split(":"))[0]) {
                                    case "rX":
                                        p.btrans.rX = i[1];
                                        break;
                                    case "rY":
                                        p.btrans.rY = i[1];
                                        break;
                                    case "rZ":
                                        p.btrans.rZ = i[1];
                                        break;
                                    case "o":
                                        p.btrans.o = i[1]
                                }
                        }
                        if (void 0 !== p.tsh)
                            for (t in p.tshadow = { c: "rgba(0,0,0,0.25)", v: 0, h: 0, b: 0 }, p.tsh = p.tsh.split(";"), p.tsh)
                                if (p.tsh.hasOwnProperty(t)) switch ((i = p.tsh[t].split(":"))[0]) {
                                    case "c":
                                        p.tshadow.c = i[1];
                                        break;
                                    case "h":
                                        p.tshadow.h = i[1];
                                        break;
                                    case "v":
                                        p.tshadow.v = i[1];
                                        break;
                                    case "b":
                                        p.tshadow.b = i[1]
                                }
                        if (void 0 !== p.tst)
                            for (t in p.tstroke = { c: "rgba(0,0,0,0.25)", w: 1 }, p.tst = p.tst.split(";"), p.tst)
                                if (p.tst.hasOwnProperty(t)) switch ((i = p.tst[t].split(":"))[0]) {
                                    case "c":
                                        p.tstroke.c = i[1];
                                        break;
                                    case "w":
                                        p.tstroke.w = i[1]
                                }
                        if (void 0 !== p.bsh)
                            for (t in p.bshadow = { e: "c", c: "rgba(0,0,0,0.25)", v: 0, h: 0, b: 0, s: 0 }, p.bsh = p.bsh.split(";"), p.bsh)
                                if (p.bsh.hasOwnProperty(t)) switch ((i = p.bsh[t].split(":"))[0]) {
                                    case "c":
                                        p.bshadow.c = i[1];
                                        break;
                                    case "h":
                                        p.bshadow.h = i[1];
                                        break;
                                    case "v":
                                        p.bshadow.v = i[1];
                                        break;
                                    case "b":
                                        p.bshadow.b = i[1];
                                        break;
                                    case "s":
                                        p.bshadow.s = i[1];
                                        break;
                                    case "e":
                                        p.bshadow.e = i[1]
                                }
                        if (void 0 !== p.dim)
                            for (t in p.dim = p.dim.split(";"), p.dim)
                                if (p.dim.hasOwnProperty(t)) switch ((i = p.dim[t].split(":"))[0]) {
                                    case "w":
                                        p.width = i[1];
                                        break;
                                    case "h":
                                        p.height = i[1];
                                        break;
                                    case "maxw":
                                        p.maxwidth = i[1];
                                        break;
                                    case "maxh":
                                        p.maxheight = i[1];
                                        break;
                                    case "minw":
                                        p.minwidth = i[1];
                                        break;
                                    case "minh":
                                        p.minheight = i[1]
                                }
                        if (void 0 !== p.xy)
                            for (t in p.xy = p.xy.split(";"), p.xy)
                                if (p.xy.hasOwnProperty(t)) switch ((i = p.xy[t].split(":"))[0]) {
                                    case "x":
                                        p.x = i[1].replace("px", "");
                                        break;
                                    case "y":
                                        p.y = i[1].replace("px", "");
                                        break;
                                    case "xo":
                                        p.hoffset = i[1].replace("px", "");
                                        break;
                                    case "yo":
                                        p.voffset = i[1].replace("px", "")
                                }
                        if (!p._isnotext && void 0 !== p.text)
                            for (t in p.text = p.text.split(";"), p.text)
                                if (p.text.hasOwnProperty(t)) switch ((i = p.text[t].split(":"))[0]) {
                                    case "w":
                                        p.whitespace = i[1];
                                        break;
                                    case "td":
                                        p.textDecoration = i[1];
                                        break;
                                    case "c":
                                        p.clear = i[1];
                                        break;
                                    case "f":
                                        p.float = i[1];
                                        break;
                                    case "s":
                                        p.fontsize = i[1];
                                        break;
                                    case "l":
                                        p.lineheight = i[1];
                                        break;
                                    case "ls":
                                        p.letterspacing = i[1];
                                        break;
                                    case "fw":
                                        p.fontweight = i[1];
                                        break;
                                    case "a":
                                        p.textalign = i[1]
                                }
                        if ("column" === p.type && void 0 !== p.textDecoration && delete p.textDecoration, void 0 !== p.flcr)
                            for (t in p.flcr = p.flcr.split(";"), p.flcr)
                                if (p.flcr.hasOwnProperty(t)) switch ((i = p.flcr[t].split(":"))[0]) {
                                    case "c":
                                        p.clear = i[1];
                                        break;
                                    case "f":
                                        p.float = i[1]
                                }
                        if (void 0 !== p.padding)
                            for (t in p.padding = p.padding.split(";"), p.padding)
                                if (p.padding.hasOwnProperty(t)) switch ((i = p.padding[t].split(":"))[0]) {
                                    case "t":
                                        p.paddingtop = i[1];
                                        break;
                                    case "b":
                                        p.paddingbottom = i[1];
                                        break;
                                    case "l":
                                        p.paddingleft = i[1];
                                        break;
                                    case "r":
                                        p.paddingright = i[1]
                                }
                        if (void 0 !== p.margin)
                            for (t in p.margin = p.margin.split(";"), p.margin)
                                if (p.margin.hasOwnProperty(t)) switch ((i = p.margin[t].split(":"))[0]) {
                                    case "t":
                                        p.margintop = i[1];
                                        break;
                                    case "b":
                                        p.marginbottom = i[1];
                                        break;
                                    case "l":
                                        p.marginleft = i[1];
                                        break;
                                    case "r":
                                        p.marginright = i[1]
                                }
                        if (void 0 !== p.spike && (p.spike = G(p.spike)), void 0 !== p.corners)
                            for (t in a = p.corners.split(";"), p.corners = {}, a) a.hasOwnProperty(t) && a[t].length > 0 && (p.corners[a[t]] = jQuery("<" + a[t] + "></" + a[t] + ">"), p.c.append(p.corners[a[t]]));
                        p.textalign = b(p.textalign), p.vbility = o.revToResp(p.vbility, o[r].rle, !0), p.hoffset = o.revToResp(p.hoffset, o[r].rle, 0), p.voffset = o.revToResp(p.voffset, o[r].rle, 0), p.x = o.revToResp(p.x, o[r].rle, "l"), p.y = o.revToResp(p.y, o[r].rle, "t"), M(l, 0, r), o.sA(d, "initialised", !0), o[r].c.trigger("layerinitialised", { layer: l[0].id, slider: r })
                    }
                    var u = p.x[o[r].level],
                        h = p.y[o[r].level],
                        m = o.getGridOffset(r, e.slideIndex, p.basealign, p._isstatic),
                        v = m[0],
                        f = m[1],
                        w = m[2],
                        _ = m[3];
                    if (p.slideIndex = e.slideIndex, "updateposition" !== e.mode) {
                        if (0 == p.vbility[o[r].levelForced] || "f" == p.vbility[o[r].levelForced] || v < o[r].hideLayerAtLimit && "on" == p.layeronlimit || v < o[r].hideAllLayerAtLimit ? (!0 !== p.layerIsHidden && p.p[0].classList.add("rs-layer-hidden"), p.layerIsHidden = !0) : (p.layerIsHidden && p.p[0].classList.remove("rs-layer-hidden"), p.layerIsHidden = !1), p.poster = null == p.poster && void 0 !== p.thumbimage ? p.thumbimage : p.poster, "image" === p.layertype)
                            if (p.imgOBJ = {}, "cover-proportional" === p.img.data("c")) {
                                o.sA(p.img[0], "owidth", o.gA(p.img[0], "owidth", p.img[0].width)), o.sA(p.img[0], "oheight", o.gA(p.img[0], "oheight", p.img[0].height));
                                var S = o.gA(p.img[0], "owidth") / o.gA(p.img[0], "oheight"),
                                    x = v / f;
                                p.imgOBJ = S > x && S <= 1 || S < x && S > 1 ? { width: "100%", height: "auto", left: "c" === u || "center" === u ? "50%" : "left" === u || "l" === u ? "0" : "auto", right: "r" === u || "right" === u ? "0" : "auto", top: "c" === h || "center" === h ? "50%" : "top" === h || "t" === h ? "0" : "auto", bottom: "b" === h || "bottom" === h ? "0" : "auto", x: "c" === u || "center" === u ? "-50%" : "0", y: "c" === h || "center" === u ? "-50%" : "0" } : { height: "100%", width: "auto", left: "c" === u || "center" === u ? "50%" : "left" === u || "l" === u ? "0" : "auto", right: "r" === u || "right" === u ? "0" : "auto", top: "c" === h || "center" === h ? "50%" : "top" === h || "t" === h ? "0" : "auto", bottom: "b" === h || "bottom" === h ? "0" : "auto", x: "c" === u || "center" === u ? "-50%" : "0", y: "c" === h || "center" === u ? "-50%" : "0" }
                            } else void 0 === p.group && "auto" === p.width[o[r].level] && "auto" === p.height[o[r].level] && (p.width[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].width), p.height[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].height)), p.imgOBJ = { width: "auto" !== p.width[o[r].level] || isNaN(p.width[o[r].level]) && p.width[o[r].level].indexOf("%") >= 0 ? "100%" : "auto", height: "auto" !== p.height[o[r].level] || isNaN(p.height[o[r].level]) && p.height[o[r].level].indexOf("%") >= 0 ? "100%" : "auto" };
                        else if ("video" === p.layertype) {
                            o.manageVideoLayer(l, r, s), "rebuild" !== e.mode && o.resetVideo(l, r, e.mode), null != p.aspectratio && p.aspectratio.split(":").length > 1 && 1 == p.bgvideo && o.prepareCoveredVideo(r, l), p.media = void 0 === p.media ? p.deepiframe.length > 0 ? jQuery(p.deepiframe[0]) : jQuery(p.deepmedia[0]) : p.media, p.html5vid = void 0 === p.html5vid ? !(p.deepiframe.length > 0) : p.html5vid, p.mediaOBJ = { display: "block" };
                            var k = p.width[o[r].level],
                                R = p.height[o[r].level];
                            if (k = "auto" === k ? k : !o.isNumeric(k) && k.indexOf("%") > 0 ? p._incolumn || p._ingroup ? "100%" : "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : v : "off" !== p.rsp_bd ? parseFloat(k) * o[r].CM.w + "px" : parseFloat(k) + "px", R = "auto" === R ? R : !o.isNumeric(R) && R.indexOf("%") > 0 ? "grid" === p.basealign ? o.iHE(r) * o[r].CM.w : f : "off" !== p.rsp_bd ? parseFloat(R) * o[r].CM.h + "px" : parseFloat(R) + "px", p.vd = void 0 === p.vd ? o[r].videos[l[0].id].ratio.split(":").length > 1 ? o[r].videos[l[0].id].ratio.split(":")[0] / o[r].videos[l[0].id].ratio.split(":")[1] : 1 : p.vd, !p._incolumn || "100%" !== k && "auto" !== R || void 0 === p.ytid) - 1 == l[0].className.indexOf("rs-fsv") ? (R = "auto" === R && void 0 !== p.vd && "auto" !== k ? "100%" === k ? l.width() / p.vd : k / p.vd : R, p.vidOBJ = { width: k, height: R }) : ("grid" !== p.basealign && (w = 0, _ = 0), p.x = o.revToResp(0, o[r].rle, 0), p.y = o.revToResp(0, o[r].rle, 0), p.vidOBJ = { width: k, height: o[r].autoHeight ? o[r].canv.height : R }), 0 != p.html5vid && l.hasClass("rs-fsv") || (p.mediaOBJ = { width: k, height: R, display: "block" }), p._ingroup && null !== p.vidOBJ.width && void 0 !== p.vidOBJ.width && !o.isNumeric(p.vidOBJ.width) && p.vidOBJ.width.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ = { minWidth: k });
                            else {
                                var O = l.width(),
                                    I = "auto" === R ? O / p.vd : R;
                                p.vidOBJ = { width: "auto", height: I }, p.heightSetByVideo = !0
                            }
                        }
                        p._slidelink || o[r].caches.calcResponsiveLayersList.push({ a: l, b: r, c: 0, d: p.rsp_bd, e: e.slideIndex }), "on" === p.rsp_ch && "row" !== p.type && "column" !== p.type && "group" !== p.type && "image" !== p.type && "video" !== p.type && "shape" !== p.type && l.find("*").each(function() { var t = jQuery(this); "true" !== o.gA(this, "stylerecorder") && !0 !== o.gA(this, "stylerecorder") && M(t, "rekursive", r), o[r].caches.calcResponsiveLayersList.push({ a: t, b: r, c: "rekursive", d: p.rsp_bd, e: e.slideIndex, RSL: l }) })
                    }
                    if ("preset" !== e.mode) {
                        if (p.oldeow = p.eow, p.oldeoh = p.eoh, p.eow = l.outerWidth(!0), p.eoh = l.outerHeight(!0), p.imgInFirefox = "image" == p.type && "auto" == p.width[o[r].level] && "100%" == p.height[o[r].level] && o.isFirefox(r), p.imgInFirefox) {
                            var T = p.img.width();
                            p.eow = 0 !== T ? T : p.eow
                        }
                        if (p.eow <= 0 && void 0 !== p.lastknownwidth && (p.eow = p.lastknownwidth), p.eoh <= 0 && void 0 !== p.lastknownheight && (p.eoh = p.lastknownheight), void 0 !== p.corners && ("text" === p.type || "button" === p.type || "shape" === p.type)) {
                            for (a in p.corners)
                                if (p.corners.hasOwnProperty(a)) {
                                    p.corners[a].css("borderWidth", p.eoh + "px");
                                    var C = "rs-fcrt" === a || "rs-fcr" === a;
                                    p.corners[a].css("border" + (C ? "Right" : "Left"), "0px solid transparent"), p.corners[a].css("border" + ("rs-fcrt" == a || "rs-bcr" == a ? "Bottom" : "Top") + "Color", p.bgcol)
                                }
                            p.eow = l.outerWidth(!0)
                        }
                        0 == p.eow && 0 == p.eoh && (p.eow = "grid" === p.basealign ? o[r].content.width : o[r].module.width, p.eoh = "grid" === p.basealign ? o[r].content.height : o[r].module.height), p.basealign = o[r].justifyCarousel ? "grid" : p.basealign;
                        var A = "on" === p.rsp_o ? parseInt(p.voffset[o[r].level], 0) * o[r].CM.w : parseInt(p.voffset[o[r].level], 0),
                            P = "on" === p.rsp_o ? parseInt(p.hoffset[o[r].level], 0) * o[r].CM.w : parseInt(p.hoffset[o[r].level], 0),
                            B = "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : v,
                            D = "grid" === p.basealign ? o.iHE(r) * (o[r].keepBPHeight || o[r].currentRowsHeight > o[r].gridheight[o[r].level] ? 1 : o[r].CM.h) : f;
                        (1 == o[r].gridEQModule || void 0 !== p._lig && "row" !== p.type && "column" !== p.type && "group" !== p.type) && (B = void 0 !== p._lig ? p._lig.width() : o[r].module.width, D = void 0 !== p._lig ? p._lig.height() : o[r].module.height, w = 0, _ = 0), "video" === p.type && null != p.vidOBJ && (p.vidOBJ.height >= 0 && 0 === p.eoh && (p.eoh = p.vidOBJ.height), p.vidOBJ.width >= 0 && 0 === p.eow && (p.eow = p.vidOBJ.width)), u = "c" === u || "m" === u || "center" === u || "middle" === u ? B / 2 - p.eow / 2 + P : "l" === u || "left" === u ? P : "r" === u || "right" === u ? B - p.eow - P : "off" !== p.rsp_o ? u * o[r].CM.w : u, h = "m" === h || "c" === h || "center" === h || "middle" === h ? D / 2 - p.eoh / 2 + A : "t" === h || "top" == h ? A : "b" === h || "bottom" == h ? D - p.eoh - A : "off" !== p.rsp_o ? h * o[r].CM.w : h, u = p._slidelink ? 0 : o[r].rtl && -1 == ("" + p.width[o[r].level]).indexOf("%") ? parseInt(u) + p.eow : u, p.calcx = parseInt(u, 0) + w, p.calcy = parseInt(h, 0) + _, "row" !== p.type && "column" !== p.type ? p.OBJUPD.POBJ = { zIndex: p.zindex, top: p.calcy, left: p.calcx, overwrite: "auto" } : "row" !== p.type ? p.OBJUPD.POBJ = { zIndex: p.zindex, width: p.columnwidth, top: 0, left: 0, overwrite: "auto" } : "row" === p.type && (p.OBJUPD.POBJ = { zIndex: p.zindex, width: "grid" === p.basealign ? B + "px" : "100%", top: 0, left: o[r].rtl ? -1 * w : w, overwrite: "auto" }, p.cbreak <= o[r].level ? -1 === l[0].className.indexOf("rev_break_columns") && l[0].classList.add("rev_break_columns") : l[0].className.indexOf("rev_break_columns") > 0 && l[0].classList.remove("rev_break_columns"), p.rowcalcx = p.OBJUPD.POBJ.left, p.pow = p.p.outerWidth(!0)), void 0 !== p.blendmode && (p.OBJUPD.POBJ.mixBlendMode = p.blendmode), (void 0 !== p.frames.loop || p.imgInFirefox) && (p.OBJUPD.LPOBJ = { width: p.eow, height: p.eoh }), p._ingroup && (void 0 !== p._groupw && !o.isNumeric(p._groupw) && p._groupw.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minWidth = p._groupw), void 0 !== p._grouph && !o.isNumeric(p._grouph) && p._grouph.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minHeight = p._grouph)), "updateposition" === e.mode && (p.caches.POBJ_LEFT === p.OBJUPD.POBJ.left && p.caches.POBJ_TOP === p.OBJUPD.POBJ.top || (tpGS.gsap.set(p.p, p.OBJUPD.POBJ), p.caches.POBJ_LEFT = p.OBJUPD.POBJ.left, p.caches.POBJ_TOP = p.OBJUPD.POBJ.top)), e.animcompleted && o.animcompleted(l, r)
                    }
                }
        },
        hoverReverseDone: function(e) { o[e.id]._L[e.L[0].id].textDecoration && tpGS.gsap.set(o[e.id]._L[e.L[0].id].c, { textDecoration: o[e.id]._L[e.L[0].id].textDecoration }) },
        animcompleted: function(e, t, i) {
            if (void 0 !== o[t].videos) {
                var a = o[t].videos[e[0].id];
                null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? (("carousel" !== o[t].sliderType || e.closest("rs-slide").index() == o[t].carousel.focused || e.closest("rs-slide").index() == o[t].activeRSSlide && o[t].carousel.oldfocused == o[t].carousel.focused || i) && o.playVideo(e, t), o.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), o.unToggleState(e.data("videotoggledby"))))
            }
        },
        handleStaticLayers: function(e, t) {
            var i = 0,
                a = o[t].realslideamount + 1;
            if (void 0 !== o.gA(e[0], "onslides")) {
                var r = o.gA(e[0], "onslides").split(";");
                for (var s in r)
                    if (r.hasOwnProperty(s)) { var n = r[s].split(":"); "s" === n[0] && (i = parseInt(n[1], 0)), "e" === n[0] && (a = parseInt(n[1], 0)) }
            }
            i = Math.max(0, i), a = Math.min(o[t].realslideamount, a < 0 ? o[t].realslideamount : a), a = 1 !== i && 0 !== i || a !== o[t].realslideamount ? a : o[t].realslideamount + 1, e.data("startslide", i), e.data("endslide", a), o.sA(e[0], "startslide", i), o.sA(e[0], "endslide", a)
        },
        updateLayersOnFullStage: function(e) { if (o[e].caches.calcResponsiveLayersList.length > 0) {!0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].carousel.wrap.detach() : o[e].canvas.detach()); for (var t = 0; t < o[e].caches.calcResponsiveLayersList.length; t++) void 0 !== o[e].caches.calcResponsiveLayersList[t] && z(o[e].caches.calcResponsiveLayersList[t]);!0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].c[0].appendChild(o[e].carousel.wrap[0]) : o[e].c[0].appendChild(o[e].canvas[0])) } },
        animateTheLayers: function(e) {
            if (void 0 === e.slide) return !1;
            var t = e.id;
            if (void 0 === o[t].slides[e.slide] && "individual" !== e.slide) return !1;
            if ("carousel" === o[t].sliderType) {
                if ("start" === e.mode && "start" === o[t].lastATLmode) {
                    if (e.slide === o[t].lastATLslide && (new Date).getTime() - o[t].lastATLtime < 1500) return;
                    o[t].lastATLtime = (new Date).getTime()
                }
                o[t].lastATLmode = e.mode, o[t].lastATLslide = e.slide
            }
            var i = "individual" !== e.slide ? o.gA(o[t].slides[e.slide], "key") : "individual",
                a = o[t].pr_processing_key || o[t].pr_active_key || 0;
            o[t].caches.calcResponsiveLayersList = [], o[t].layers = o[t].layers || {}, "individual" === i ? o[t].layers.individual = void 0 === o[t].layers.individual ? "all" === o[t].carousel.showLayersAllTime ? C(jQuery(o[t].c), "rs-layer", "rs-layer-static") : C(jQuery(o[t].c), "rs-on-car") : o[t].layers.individual : (o[t].layers[i] = void 0 === o[t].layers[i] ? "all" === o[t].carousel.showLayersAllTime ? [] : C(jQuery(o[t].slides[e.slide]), "rs-layer", "carousel" === o[t].sliderType ? "rs-on-car" : void 0) : o[t].layers[i], o[t].layers.static = void 0 === o[t].layers.static ? C(jQuery(o[t].c.find("rs-static-layers")), "rs-layer", "rs-on-car") : o[t].layers.static, o[t].sbas[i] = void 0 === o[t].sbas[i] ? C(jQuery(o[t].slides[e.slide]), "rs-sba") : o[t].sbas[i]);
            var r = "rebuild" === e.mode && "carousel" === o[t].sliderType && "individual" === i;
            void 0 !== i && o[t].layers[i] && o.initLayer({ id: t, slideIndex: e.slide, skey: i, mode: e.mode, animcompleted: r }), o[t].layers.static && o.initLayer({ id: t, skey: "static", slideIndex: "static", mode: e.mode, animcompleted: r }), o.updateLayersOnFullStage(t), "preset" !== e.mode || void 0 !== o[t].slidePresets && void 0 !== o[t].slidePresets[e.slide] || (o[t].slidePresets = void 0 === o[t].slidePresets ? {} : o[t].slidePresets, o[t].slidePresets[e.slide] = !0, o[t].c.trigger("revolution.slideprepared", { slide: e.slide, key: i })), o[t].heightInLayers = o[t].module.height, o[t].widthInLayers = o[t].module.width, o[t].levelInLayers = o[t].level;
            var s = { id: t, skey: i, slide: e.slide, key: i, mode: e.mode, index: a };
            window.requestAnimationFrame(function() {
                if (void 0 === o[t].dimensionReCheck[i] ? (o.updateLayerDimensions(s), !0 !== o[t].doubleDimensionCheck ? setTimeout(function() { o.updateLayerDimensions(s), o.updateRowZones(s) }, 150) : o.updateRowZones(s), o[t].doubleDimensionCheck = !0, o[t].dimensionReCheck[i] = !0) : o.updateRowZones(s), void 0 !== i && o[t].layers[i])
                    for (var a in o[t].layers[i]) o[t].layers[i].hasOwnProperty(a) && o.renderLayerAnimation({ layer: jQuery(o[t].layers[i][a]), id: t, mode: e.mode, caller: e.caller });
                if (o[t].layers.static)
                    for (var a in o[t].layers.static) o[t].layers.static.hasOwnProperty(a) && o.renderLayerAnimation({ layer: jQuery(o[t].layers.static[a]), id: t, mode: e.mode, caller: e.caller });
                null != o[t].mtl && o[t].mtl.resume()
            })
        },
        updateRowZones: function(e) {
            (void 0 !== o[e.id].rowzones && o[e.id].rowzones.length > 0 && e.index >= 0 && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)] && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)].length > 0 || void 0 !== o[e.id].srowzones && o[e.id].srowzones.length > 0 || void 0 !== o[e.id].smiddleZones && o[e.id].smiddleZones.length > 0) && (o.updateDims(e.id), o.initLayer({ id: e.id, skey: e.key, slideIndex: e.slide, mode: "updateposition" }), o.initLayer({ id: e.id, skey: "static", slideIndex: "static", mode: "updateposition" }), "start" !== e.mode && "preset" !== e.mode || o.manageNavigation(e.id))
        },
        updateLayerDimensions: function(e) {
            var t = !1;
            o[e.id].caches.calcResponsiveLayersList = [], void 0 === e.key || "individual" != e.key && void 0 === o[e.id].layers[e.key] || !o.checkLayerDimensions({ id: e.id, skey: e.key, slideIndex: e.slide }) || (t = !0), o.initLayer({ id: e.id, skey: e.key, slideIndex: e.slide, mode: "updateAndResize" }), o[e.id].layers.static && o.checkLayerDimensions({ id: e.id, skey: "static", slideIndex: "static" }) && (t = !0, o.initLayer({ id: e.id, skey: "static", slideIndex: "static", mode: "updateAndResize" })), t && o.updateLayersOnFullStage(e.id)
        },
        updateAnimatingLayerPositions: function(e) { o.initLayer({ id: e.id, skey: e.key, slideIndex: e.slide, mode: "updateposition" }) },
        removeTheLayers: function(e, t, i) { var a = o.gA(e[0], "key"); for (var r in o[t].sloops && o[t].sloops[a] && o[t].sloops[a].tl && o[t].sloops[a].tl.pause(), o[t].layers[a]) o[t].layers[a].hasOwnProperty(r) && o.renderLayerAnimation({ layer: jQuery(o[t].layers[a][r]), frame: "frame_999", mode: "continue", remove: !0, id: t, allforce: i }); for (var r in o[t].layers.static) o[t].layers.static.hasOwnProperty(r) && o.renderLayerAnimation({ layer: jQuery(o[t].layers.static[r]), frame: "frame_999", mode: "continue", remove: !0, id: t, allforce: i }) },
        renderLayerAnimation: function(e) {
            var i, a = e.layer,
                r = e.id,
                s = o[r].level,
                h = o[r]._L[a[0].id],
                v = void 0 !== h.timeline ? h.timeline.time() : void 0,
                f = !1,
                y = !1,
                b = "none";
            if (("containerResized_2" !== e.caller && "swapSlideProgress_2" !== e.caller || !0 === h.animationRendered) && (h.animationRendered = !0, "preset" !== e.mode || !0 === h.frames.frame_1.timeline.waitoncall || void 0 !== h.scrollBasedOffset)) {
                if ("trigger" == e.mode && (h.triggeredFrame = e.frame), h._isstatic) {
                    var S = "carousel" === o[r].sliderType && void 0 !== o[r].carousel.oldfocused ? o[r].carousel.oldfocused : void 0 === o[r].pr_lastshown_key ? 1 : parseInt(o[r].pr_lastshown_key, 0) + 1,
                        k = "carousel" === o[r].sliderType ? void 0 === o[r].pr_next_key ? 0 === S ? 1 : S : parseInt(o[r].pr_next_key, 0) + 1 : void 0 === o[r].pr_processing_key ? S : parseInt(o[r].pr_processing_key, 0) + 1,
                        L = S >= h.startslide && S <= h.endslide,
                        R = k >= h.startslide && k <= h.endslide;
                    if (b = S === h.endslide && "continue" === e.mode || ("continue" === e.mode || S === h.endslide) && "none", !0 === e.allforce || !0 === b) { if ("continue" === e.mode && "frame_999" === e.frame && (R || void 0 === h.lastRequestedMainFrame)) return } else { if ("preset" === e.mode && (h.elementHovered || !R)) return; if ("rebuild" === e.mode && !L && !R) return; if ("start" === e.mode && R && "frame_1" === h.lastRequestedMainFrame) return; if (("start" === e.mode || "preset" === e.mode) && "frame_999" === h.lastRequestedMainFrame && !0 !== h.leftstage) return; if ("continue" === e.mode && "frame_999" === e.frame && (R || void 0 === h.lastRequestedMainFrame)) return; if ("start" === e.mode && !R) return }
                } else "start" === e.mode && "keep" !== h.triggercache && (h.triggeredFrame = void 0);
                for (var O in "start" === e.mode && (void 0 !== h.layerLoop && (h.layerLoop.count = 0), e.frame = void 0 === h.triggeredFrame ? 0 : h.triggeredFrame), "continue" === e.mode || "trigger" === e.mode || void 0 === h.timeline || h._isstatic && !0 === h.leftstage || h.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === h.timeline || h.timeline.pause(), h.timeline = tpGS.gsap.timeline({ paused: !0 }), "text" !== h.type && "button" !== h.type || void 0 !== h.splitText && (void 0 !== h.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (w({ layer: a, id: r }), "start" === e.mode && (h.splitTextFix = !0)), h.ford)
                    if (h.ford.hasOwnProperty(O)) {
                        var I = h.ford[O],
                            T = !1;
                        if ("frame_0" !== I && "frame_hover" !== I && "loop" !== I) {
                            if ("frame_999" === I && !h.frames[I].timeline.waitoncall && h.frames[I].timeline.start >= o[r].duration && !0 !== e.remove && (h.frames[I].timeline.waitoncall = !0), "start" === e.mode && "keep" !== h.triggercache && (h.frames[I].timeline.callstate = h.frames[I].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && h.frames[I].timeline.waitoncall && (I === e.frame ? (h.frames[I].timeline.triggered = !0, h.frames[I].timeline.callstate = "called") : h.frames[I].timeline.triggered = !1), "rebuild" === e.mode || h.frames[I].timeline.triggered || (h.frames[I].timeline.callstate = h.frames[I].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
                                if (("continue" === e.mode || "trigger" === e.mode) && !1 === y && I !== e.frame) continue;
                                if (("rebuild" === e.mode || "preset" === e.mode) && !1 === y && void 0 !== h.triggeredFrame && I !== h.triggeredFrame) continue;
                                (I === e.frame || "rebuild" === e.mode && I === h.triggeredFrame) && (y = !0)
                            } else I === e.frame && (y = !0);
                            if (I !== e.frame && h.frames[I].timeline.waitoncall && "called" !== h.frames[I].timeline.callstate && (f = !0), I !== e.frame && y && (f = !0 === f && h.frames[I].timeline.waitoncall ? "skiprest" : !0 !== f && f), void 0 === h.hideonfirststart && "frame_1" === I && h.frames[I].timeline.waitoncall && (h.hideonfirststart = !0), f && "waiting" === h.frames[I].timeline.callstate && "preset" === e.mode && 1 != h.firstTimeRendered) {
                                if (h._isstatic && void 0 === h.currentframe) continue;
                                T = !0, h.firstTimeRendered = !0
                            } else if ("skiprest" === f || "called" !== h.frames[I].timeline.callstate && f && e.toframe !== I) continue;
                            if ("frame_999" !== I || !1 !== b || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
                                h.fff = "frame_1" === I && ("trigger" !== e.mode || "frame_999" === h.currentframe || "frame_0" === h.currentframe || void 0 === h.currentframe), "trigger" === e.mode && "frame_1" === e.frame && !1 === h.leftstage && (h.fff = !1), T || (h.frames[I].timeline.callstate = "called", h.currentframe = I);
                                var C = h.frames[I],
                                    A = h.fff ? h.frames.frame_0 : void 0,
                                    M = tpGS.gsap.timeline(),
                                    P = tpGS.gsap.timeline(),
                                    B = h.c,
                                    D = void 0 !== C.sfx && _(C.sfx.effect, h.m, C.timeline.ease),
                                    z = C.timeline.speed / 1e3,
                                    G = 0,
                                    N = x({ id: r, frame: C, layer: a, ease: C.timeline.ease, splitAmount: B.length, target: I, forcefilter: void 0 !== h.frames.frame_hover && void 0 !== h.frames.frame_hover.filter }),
                                    H = h.fff ? x({ id: r, frame: A, layer: a, ease: C.timeline.ease, splitAmount: B.length, target: "frame_0" }) : void 0,
                                    j = void 0 !== C.mask ? x({ id: r, frame: { transform: { x: C.mask.x, y: C.mask.y } }, layer: a, ease: N.ease, target: "mask" }) : void 0,
                                    F = void 0 !== j && h.fff ? x({ id: r, frame: { transform: { x: A.mask.x, y: A.mask.y } }, layer: a, ease: N.ease, target: "frommask" }) : void 0,
                                    W = N.ease;
                                if (N.force3D = !0, "block" === D.type && (D.ft[0].background = C.sfx.fxc, D.ft[0].visibility = "visible", D.ft[1].visibility = "visible", M.add(tpGS.gsap.fromTo(D.bmask_in, z / 2, D.ft[0], D.ft[1], 0)), M.add(tpGS.gsap.fromTo(D.bmask_in, z / 2, D.ft[1], D.t, z / 2)), "frame_0" !== I && "frame_1" !== I || (H.opacity = 0)), void 0 !== C.color ? N.color = C.color : void 0 !== h.color && "npc" !== h.color[s] && (N.color = h.color[s]), void 0 !== A && void 0 !== A.color ? H.color = A.color : void 0 !== A && void 0 !== h.color && "npc" !== h.color[s] && (H.color = h.color[s]), void 0 !== C.bgcolor ? C.bgcolor.indexOf("gradient") >= 0 ? N.background = C.bgcolor : N.backgroundColor = C.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? N.background = h.bgcol : N.backgroundColor = h.bgcol), void 0 !== A && (void 0 !== A.bgcolor ? A.bgcolor.indexOf("gradient") >= 0 ? H.background = A.bgcolor : H.backgroundColor = A.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? H.background = h.bgcol : H.backgroundColor = h.bgcol)), void 0 !== h.splitText && !1 !== h.splitText)
                                    for (var V in t)
                                        if (void 0 !== C[t[V]] && !h.quickRendering) {
                                            var E = h.splitText[t[V]],
                                                X = x({ id: r, frame: C, source: t[V], ease: W, layer: a, splitAmount: E.length, target: I + "_" + t[V] }),
                                                Y = h.fff ? x({ id: r, frame: A, ease: X.ease, source: t[V], layer: a, splitAmount: E.length, target: "frame_0_" + t[V] }) : void 0,
                                                Q = h.frames[I].dosplit ? void 0 === C[t[V]].delay ? .05 : C[t[V]].delay / 100 : 0;
                                            h.color[s] === N.color && "frame_1" === I || (X.color = N.color), void 0 !== H && h.color[s] !== H.color && (Y.color = H.color), void 0 !== Y && Y.color !== N.color && (X.color = N.color);
                                            var J = o.clone(X),
                                                q = h.fff ? o.clone(Y) : void 0,
                                                U = C[t[V]].dir;
                                            delete J.dir, J.data = { splitted: !0 }, J.stagger = "center" === U || "edge" === U ? c({ each: Q, offset: Q / 2, from: U }) : { each: Q, from: U }, J.duration = z, void 0 !== q && delete q.dir, h.fff ? M.add(P.fromTo(E, q, J), 0) : M.add(P.to(E, J), 0), G = Math.max(G, E.length * Q)
                                        }
                                if (z += G, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType ? void 0 !== N.transformPerspective ? N.transformPerspective : h.fff && void 0 !== H.transfromPerspective ? H.transfromPerspective : o[r].perspective : o[r].perspective), h.knowTransformPerspective = i, h.pxundermask || void 0 !== j && (void 0 !== A && "hidden" === A.mask.overflow || "hidden" === C.mask.overflow)) M.add(tpGS.gsap.to(h.m, .001, { overflow: "hidden" }), 0), "column" === h.type && M.add(tpGS.gsap.to(h.cbgmask, .001, { overflow: "hidden" }), 0), h.btrans && (F && (F.rotationX = h.btrans.rX, F.rotationY = h.btrans.rY, F.rotationZ = h.btrans.rZ, F.opacity = h.btrans.o), j.rotationX = h.btrans.rX, j.rotationY = h.btrans.rY, j.rotationZ = h.btrans.rZ, j.opacity = h.btrans.o), h.fff ? M.add(tpGS.gsap.fromTo([h.m, h.cbgmask], z, o.clone(F), o.clone(j)), .001) : M.add(tpGS.gsap.to([h.m, h.cbgmask], z, o.clone(j)), .001);
                                else if (void 0 !== h.btrans) {
                                    var Z = { x: 0, y: 0, filter: "none", opacity: h.btrans.o, rotationX: h.btrans.rX, rotationY: h.btrans.rY, rotationZ: h.btrans.rZ, overflow: "visible" };
                                    0 === h.btrans.rX && 0 == h.btrans.rY || (h.maskHasPerspective = !0, Z.transformPerspective = i), M.add(tpGS.gsap.to(h.m, .001, Z), 0)
                                } else M.add(tpGS.gsap.to(h.m, .001, { clearProps: "transform", overflow: "visible" }), 0);
                                N.force3D = "auto", h.fff ? (N.visibility = "visible", void 0 !== h.cbg && M.fromTo(h.cbg, z, H, N, 0), o[r].BUG_safari_clipPath && (H.clipPath || N.clipPath || h.spike) && (H.z && parseInt(H.z, 10) || (H.z = -1e-4), N.z && parseInt(N.z, 10) || (N.z = 0)), void 0 !== h.cbg && "column" === h.type ? M.fromTo(B, z, n(H), n(N), 0) : M.fromTo(B, z, H, N, 0), M.invalidate()) : ("frame_999" !== h.frame && (N.visibility = "visible"), void 0 !== h.cbg && M.to(h.cbg, z, N, 0), !o[r].BUG_safari_clipPath || !N.clipPath && !h.spike || N.z && parseInt(N.z, 10) || (N.z = 0 - .01 * Math.random()), void 0 !== h.cbg && "column" === h.type ? M.to(B, z, n(N), 0) : M.to(B, z, N, 0)), void 0 !== W && "object" != typeof W && "function" != typeof W && W.indexOf("SFXBounce") >= 0 && M.to(B, z, { scaleY: .5, scaleX: 1.3, ease: N.ease + "-squash", transformOrigin: "bottom" }, 1e-4);
                                var K = "trigger" !== e.mode && (!0 !== f && "skiprest" !== f || "rebuild" !== e.mode) || e.frame === I || void 0 === C.timeline.start || !o.isNumeric(C.timeline.start) ? "+=0" === C.timeline.start || void 0 === C.timeline.start ? "+=0.05" : parseInt(C.timeline.start, 0) / 1e3 : "+=" + parseInt(C.timeline.startRelative, 0) / 1e3;
                                h.timeline.addLabel(I, K), h.timeline.add(M, K), h.timeline.addLabel(I + "_end", "+=0.01"), M.eventCallback("onStart", p, [{ id: r, frame: I, L: a, tPE: i }]), "true" == h.animationonscroll || 1 == h.animationonscroll ? (M.eventCallback("onUpdate", g, [{ id: r, frame: I, L: a }]), M.smoothChildTiming = !0) : M.eventCallback("onUpdate", g, [{ id: r, frame: I, L: a }]), M.eventCallback("onComplete", u, [{ id: r, frame: I, L: a, tPE: i }])
                            }
                        }
                    }
                if (void 0 !== h.frames.loop) {
                    var $ = parseInt(h.frames.loop.timeline.speed, 0) / 1e3,
                        ee = parseInt(h.frames.loop.timeline.start) / 1e3 || 0,
                        te = "trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame ? .2 : 0,
                        ie = ee + te;
                    h.loop = { root: tpGS.gsap.timeline({}), preset: tpGS.gsap.timeline({}), move: tpGS.gsap.timeline({ repeat: -1, yoyo: h.frames.loop.timeline.yoyo_move }), rotate: tpGS.gsap.timeline({ repeat: -1, yoyo: h.frames.loop.timeline.yoyo_rotate }), scale: tpGS.gsap.timeline({ repeat: -1, yoyo: h.frames.loop.timeline.yoyo_scale }), filter: tpGS.gsap.timeline({ repeat: -1, yoyo: h.frames.loop.timeline.yoyo_filter }) };
                    var ae = h.frames.loop.frame_0,
                        re = h.frames.loop.frame_999,
                        oe = "blur(" + parseInt(ae.blur || 0, 0) + "px) grayscale(" + parseInt(ae.grayscale || 0, 0) + "%) brightness(" + parseInt(ae.brightness || 100, 0) + "%)",
                        se = "blur(" + (re.blur || 0) + "px) grayscale(" + (re.grayscale || 0) + "%) brightness(" + (re.brightness || 100) + "%)";
                    if (h.loop.root.add(h.loop.preset, 0), h.loop.root.add(h.loop.move, te), h.loop.root.add(h.loop.rotate, te), h.loop.root.add(h.loop.scale, te), h.loop.root.add(h.loop.filter, te), "blur(0px) grayscale(0%) brightness(100%)" === oe && "blur(0px) grayscale(0%) brightness(100%)" === se && (oe = "none", se = "none"), re.originX = ae.originX, re.originY = ae.originY, re.originZ = ae.originZ, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType && void 0 !== N ? void 0 !== N.transformPerspective ? N.transformPerspective : h.fff && void 0 !== H.transfromPerspective ? H.transfromPerspective : o[r].perspective : o[r].perspective), h.frames.loop.timeline.curved) {
                        var ne = parseInt(h.frames.loop.timeline.radiusAngle, 0) || 0,
                            de = [{ x: (ae.x - ae.xr) * o[r].CM.w, y: 0, z: (ae.z - ae.zr) * o[r].CM.w }, { x: 0, y: (ae.y + ae.yr) * o[r].CM.w, z: 0 }, { x: (re.x + re.xr) * o[r].CM.w, y: 0, z: (re.z + re.zr) * o[r].CM.w }, { x: 0, y: (re.y - re.yr) * o[r].CM.w, z: 0 }],
                            le = { type: "thru", curviness: h.frames.loop.timeline.curviness, path: [], autoRotate: h.frames.loop.timeline.autoRotate };
                        for (var ce in de) de.hasOwnProperty(ce) && (le.path[ce] = de[ne], ne = ++ne == de.length ? 0 : ne);
                        ("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, te, { "-webkit-filter": oe, filter: oe, x: 0, y: 0, z: 0, minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow, minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, rotationX: 0, rotationY: 0, rotationZ: 0, transformPerspective: i, transformOrigin: re.originX + " " + re.originY + " " + re.originZ, opacity: 1 }, l({ x: le.path[3].x, y: le.path[3].y, z: le.path[3].z, scaleX: ae.scaleX, skewX: ae.skewX, skewY: ae.skewY, scaleY: ae.scaleY, rotationX: ae.rotationX, rotationY: ae.rotationY, rotationZ: ae.rotationZ, "-webkit-filter": oe, filter: oe, ease: "sine.inOut", opacity: ae.opacity }), 0), d(le) && h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? $ / 2 : $, { motionPath: le, ease: h.frames.loop.timeline.ease })
                    } else("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, te, { "-webkit-filter": oe, filter: oe, x: 0, y: 0, z: 0, minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow, minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, rotationX: 0, rotationY: 0, rotationZ: 0, transformPerspective: i, transformOrigin: re.originX + " " + re.originY + " " + re.originZ, opacity: 1 }, l({ x: ae.x * o[r].CM.w, y: ae.y * o[r].CM.w, z: ae.z * o[r].CM.w, scaleX: ae.scaleX, skewX: ae.skewX, skewY: ae.skewY, scaleY: ae.scaleY, rotationX: ae.rotationX, rotationY: ae.rotationY, rotationZ: ae.rotationZ, ease: "sine.out", opacity: ae.opacity, "-webkit-filter": oe, filter: oe }), 0), h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? $ / 2 : $, { x: re.x * o[r].CM.w, y: re.y * o[r].CM.w, z: re.z * o[r].CM.w, ease: h.frames.loop.timeline.ease });
                    h.loop.rotate.to(h.lp, h.frames.loop.timeline.yoyo_rotate ? $ / 2 : $, { rotationX: re.rotationX, rotationY: re.rotationY, rotationZ: re.rotationZ, ease: h.frames.loop.timeline.ease }), h.loop.scale.to(h.lp, h.frames.loop.timeline.yoyo_scale ? $ / 2 : $, l({ scaleX: re.scaleX, scaleY: re.scaleY, skewX: re.skewX, skewY: re.skewY, ease: h.frames.loop.timeline.ease }));
                    var pe = { opacity: re.opacity || 1, ease: h.frames.loop.timeline.ease, "-webkit-filter": se, filter: se };
                    h.loop.filter.to(h.lp, h.frames.loop.timeline.yoyo_filter ? $ / 2 : $, pe), h.timeline.add(h.loop.root, ie)
                }
                if (void 0 !== h.frames.frame_hover && ("start" === e.mode || void 0 === h.hoverframeadded)) {
                    h.hoverframeadded = !0;
                    var ge = h.frames.frame_hover.timeline.speed / 1e3;
                    ge = 0 === ge ? 1e-5 : ge, h.hoverlistener || (h.hoverlistener = !0, o.document.on("mouseenter mousemove", ("column" === h.type ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function(e) {
                        if ("mousemove" !== e.type || !0 !== h.ignoremousemove) {
                            if (h.animationonscroll || h.readyForHover) {
                                if (h.elementHovered = !0, h.hovertimeline || (h.hovertimeline = tpGS.gsap.timeline({ paused: !0 })), 0 == h.hovertimeline.progress() && (void 0 === h.lastHoveredTimeStamp || (new Date).getTime() - h.lastHoveredTimeStamp > 150) && (h.ignoremousemove = !0, h.hovertimeline.to([h.m, h.cbgmask], ge, { overflow: h.frames.frame_hover.mask ? "hidden" : "visible" }, 0), "column" === h.type && h.hovertimeline.to(h.cbg, ge, o.clone(m(h.frames.frame_hover, h.cbg, { bgCol: h.bgcol, bg: h.styleProps.background })), 0), "text" !== h.type && "button" !== h.type || void 0 === h.splitText || !1 === h.splitText || h.hovertimeline.to([h.splitText.lines, h.splitText.words, h.splitText.chars], ge, { color: h.frames.frame_hover.color, ease: h.frames.frame_hover.transform.ease }, 0), "column" === h.type ? h.hovertimeline.to(h.c, ge, n(o.clone(m(h.frames.frame_hover, h.c, { bgCol: h.bgcol, bg: h.styleProps.background }))), 0) : h.hovertimeline.to(h.c, ge, o.clone(m(h.frames.frame_hover, h.c, { bgCol: h.bgcol, bg: h.styleProps.background })), 0), "svg" === h.type)) {
                                    h.svgHTemp = o.clone(h.svgH);
                                    var t = Array.isArray(h.svgHTemp.fill) ? h.svgHTemp.fill[o[r].level] : h.svgHTemp.fill;
                                    h.svgHTemp.fill = t, h.hovertimeline.to(h.svg, ge, h.svgHTemp, 0), h.hovertimeline.to(h.svgPath, ge, { fill: t }, 0)
                                }
                                h.hovertimeline.play()
                            }
                            h.lastHoveredTimeStamp = (new Date).getTime()
                        }
                    }), o.document.on("mouseleave", ("column" === h.type ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function() { h.elementHovered = !1, (h.animationonscroll || h.readyForHover) && void 0 !== h.hovertimeline && (h.hovertimeline.reverse(), h.hovertimeline.eventCallback("onReverseComplete", o.hoverReverseDone, [{ id: r, L: a }])) }))
                }
                if (T || (h.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? void 0 === e.frame ? h.currentframe : e.frame : h.lastRequestedMainFrame), void 0 !== e.totime ? h.tSTART = e.totime : void 0 !== v && void 0 === e.frame ? h.tSTART = v : void 0 !== e.frame ? h.tSTART = e.frame : h.tSTART = 0, 0 === h.tSTART && void 0 === h.startedAnimOnce && void 0 === h.leftstage && void 0 === h.startedAnimOnce && !0 === h.hideonfirststart && "preset" === e.mode && (o[r]._L[a[0].id].pVisRequest = 0, h.hideonfirststart = !1), "frame_999" !== h.tSTART && "frame_999" !== h.triggeredFrame || !h.leftstage && void 0 !== h.startedAnimOnce) {
                    if ("true" != h.animationonscroll && 1 != h.animationonscroll ? h.timeline.play(h.tSTART) : h.timeline.time(h.tSTART), jQuery.inArray(h.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
                        if (void 0 === h.childrenJS)
                            for (var V in h.childrenJS = {}, o[r]._L) void 0 !== o[r]._L[V]._lig && void 0 !== o[r]._L[V]._lig[0] && o[r]._L[V]._lig[0].id === a[0].id && o[r]._L[V]._lig[0].id !== o[r]._L[V].c[0].id && (h.childrenJS[o[r]._L[V].c[0].id] = o[r]._L[V].c);
                        e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
                        var ue = void 0 === e.totime ? void 0 !== h.frames[e.frame].timeline.startAbsolute ? parseInt(h.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== h.frames[e.frame].timeline.start ? o.isNumeric(h.frames[e.frame].timeline.start) ? parseInt(h.frames[e.frame].timeline.start, 0) / 1e3 : 0 : .001 : e.totime;
                        if (!0 === e.updateChildren)
                            for (var V in h.childrenJS) h.childrenJS.hasOwnProperty(V) && o.renderLayerAnimation({ layer: h.childrenJS[V], fastforward: !1, id: r, mode: "continue", updateChildren: !0, totime: ue });
                        else
                            for (var V in h.childrenJS) h.childrenJS.hasOwnProperty(V) && o[r]._L[V].pausedTrueParrent && (o.renderLayerAnimation({ layer: h.childrenJS[V], fastforward: !1, id: r, mode: "continue", updateChildren: !0, totime: ue }), o[r]._L[V].pausedTrueParrent = !1)
                    }
                } else;
            }
        }
    });
    var n = function(e) { var t = o.clone(e); return delete t.backgroundColor, delete t.background, delete t.backgroundImage, delete t.borderSize, delete t.borderStyle, delete t["backdrop-filter"], t },
        d = function(e) {
            if (void 0 !== e && void 0 !== e.path && Array.isArray(e.path)) {
                var t = 0,
                    i = 0;
                for (var a in e.path) !e.path.hasOwnProperty(a) || t > 0 || i > 0 || (t += e.path[a].x, i += e.path[a].y);
                return 0 != t || 0 != i
            }
        },
        l = function(e) { return void 0 === e.skewX && delete e.skewX, void 0 === e.skewY && delete e.skewY, e },
        c = function(e) { e.from = "edge" === e.from ? "edges" : e.from; var t = tpGS.gsap.utils.distribute(e); return function(i, a, r) { return t(i, a, r) + (i <= r.length / 2 ? 0 : e.offset || 0) } },
        p = function(e) {
            o[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (o[e.id]._L[e.L[0].id]._ingroup || o[e.id]._L[e.L[0].id]._incolumn || o[e.id]._L[e.L[0].id]._inrow) && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid] && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline && (o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === o[e.id]._L[e.L[0].id] || void 0 === o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone || o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== o[e.id]._L[e.L[0].id].animOnScrollForceDisable && (o[e.id]._L[e.L[0].id].pausedTrueParrent = !0, o[e.id]._L[e.L[0].id].timeline.pause()));
            var t = o[e.id]._L[e.L[0].id],
                i = t.hovertimeline;
            i && i.time() > 0 && (i.pause(), i.time(0), i.kill(), delete t.hovertimeline), delete o[e.id]._L[e.L[0].id].childrenAtStartNotVisible, o[e.id]._L[e.L[0].id].pVisRequest = 1;
            var a = { layer: e.L };
            o[e.id]._L[e.L[0].id].ignoremousemove = !1, o[e.id]._L[e.L[0].id].leftstage = !1, o[e.id]._L[e.L[0].id].readyForHover = !1, void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.from === e.frame && o[e.id]._L[e.L[0].id].layerLoop.count++, "frame_1" === e.frame && "Safari" === window.RSBrowser && void 0 === o[e.id]._L[e.L[0].id].safariRenderIssue && (tpGS.gsap.set([o[e.id]._L[e.L[0].id].c], { opacity: 1 }), o[e.id]._L[e.L[0].id].safariRenderIssue = !0), "frame_999" !== e.frame && (o[e.id]._L[e.L[0].id].startedAnimOnce = !0, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto"), a.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", window.requestAnimationFrame(function() { o[e.id]._L[e.L[0].id]._ingroup && !0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].frames.frame_1.timeline.waitoncall && (o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].pVisRequest = 1), o.requestLayerUpdates(e.id, a.eventtype, e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective ? e.tPE : "ignore") }), a.id = e.id, a.layerid = e.L[0].id, a.layertype = o[e.id]._L[e.L[0].id].type, a.frame_index = e.frame, a.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [a]), "enterstage" === a.eventtype && o.toggleState(o[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && o.animcompleted(e.L, e.id)
        },
        g = function(e) { "frame_999" === e.frame && (o[e.id]._L[e.L[0].id].pVisRequest = 1, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto", o[e.id]._L[e.L[0].id].leftstage = !1, window.requestAnimationFrame(function() { o.requestLayerUpdates(e.id, "update", e.L[0].id) })) },
        u = function(e) {
            var t = !0;
            if ("column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type) {
                var i = o[e.id]._L[e.L[0].id].timeline.currentLabel(),
                    a = jQuery.inArray(i, o[e.id]._L[e.L[0].id].ford);
                a++, a = o[e.id]._L[e.L[0].id].ford.length > a ? o[e.id]._L[e.L[0].id].ford[a] : i, void 0 !== o[e.id]._L[e.L[0].id].frames[a] && void 0 !== o[e.id]._L[e.L[0].id].frames[i] && (o[e.id]._L[e.L[0].id].timezone = { from: parseInt(o[e.id]._L[e.L[0].id].frames[i].timeline.startAbsolute, 0), to: parseInt(o[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0) })
            }
            if ("frame_999" !== e.frame && o[e.id].isEdge && "shape" === o[e.id]._L[e.L[0].id].type) {
                var r = o[e.id]._L[e.L[0].id].c[0].style.opacity;
                o[e.id]._L[e.L[0].id].c[0].style.opacity = r - 1e-4, tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], { opacity: r - .001, delay: .05 }), tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], { opacity: r, delay: .1 })
            }
            var s = {};
            s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", o[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = o[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype ? (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", t = !1, window.requestAnimationFrame(function() { o.requestLayerUpdates(e.id, "leftstage", e.L[0].id) })) : (e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective && window.requestAnimationFrame(function() { o.requestLayerUpdates(e.id, "frameended", e.L[0].id, e.tPE) })), "leftstage" === s.eventtype && void 0 !== o[e.id].videos && void 0 !== o[e.id].videos[e.L[0].id] && o.stopVideo && o.stopVideo(e.L, e.id), "column" === o[e.id]._L[e.L[0].id].type && tpGS.gsap.to(o[e.id]._L[e.L[0].id].cbg, .01, { visibility: "visible" }), "leftstage" === s.eventtype && (o.unToggleState(e.layertoggledby), "video" === o[e.id]._L[e.L[0].id].type && o.resetVideo && setTimeout(function() { o.resetVideo(e.L, e.id) }, 100)), o[e.id].BUG_safari_clipPath && !t && e.L[0].classList.add("rs-pelock"), void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == o[e.id]._L[e.L[0].id].layerLoop.repeat || o[e.id]._L[e.L[0].id].layerLoop.repeat > o[e.id]._L[e.L[0].id].layerLoop.count) && o.renderLayerAnimation({ layer: o[e.id]._L[e.L[0].id].c, frame: o[e.id]._L[e.L[0].id].layerLoop.from, updateChildren: o[e.id]._L[e.L[0].id].layerLoop.children, mode: "continue", fastforward: !0 === o[e.id]._L[e.L[0].id].layerLoop.keep, id: e.id })
        },
        h = function(e) { if (void 0 === e) return ""; var t = ""; return o.isChrome8889 && 0 === e.blur && (e.blur = .05), t = void 0 !== e.blur ? "blur(" + (e.blur || 0) + "px)" : "", t += void 0 !== e.grayscale ? (t.length > 0 ? " " : "") + "grayscale(" + (e.grayscale || 0) + "%)" : "", "" === (t += void 0 !== e.brightness ? (t.length > 0 ? " " : "") + "brightness(" + (e.brightness || 100) + "%)" : "") ? "none" : t },
        m = function(e, t, i) {
            var a, r = o.clone(e.transform);
            if ((r.originX || r.originY || r.originZ) && (r.transformOrigin = (void 0 === r.originX ? "50%" : r.originX) + " " + (void 0 === r.originY ? "50%" : r.originY) + " " + (void 0 === r.originZ ? "50%" : r.originZ), delete r.originX, delete r.originY, delete r.originZ), void 0 !== e && void 0 !== e.filter && (r.filter = h(e.filter), r["-webkit-filter"] = r.filter), r.color = void 0 === r.color ? "rgba(255,255,255,1)" : r.color, r.force3D = "auto", void 0 !== r.borderRadius && ((a = r.borderRadius.split(" ")).length, r.borderTopLeftRadius = a[0], r.borderTopRightRadius = a[1], r.borderBottomRightRadius = a[2], r.borderBottomLeftRadius = a[3], delete r.borderRadius), void 0 !== r.borderWidth && ((a = r.borderWidth.split(" ")).length, r.borderTopWidth = a[0], r.borderRightWidth = a[1], r.borderBottomWidth = a[2], r.borderLeftWidth = a[3], delete r.borderWidth), void 0 === i.bg || -1 === i.bg.indexOf("url")) {
                var s = -1 !== i.bgCol.search("gradient"),
                    n = r.backgroundImage && "string" == typeof r.backgroundImage && -1 !== r.backgroundImage.search("gradient");
                n && s ? (180 !== f(i.bgCol) && 180 == f(r.backgroundImage) && (r.backgroundImage = v(r.backgroundImage, 180)), r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to) : n && !s ? r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to : !n && s && (r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundColor, void 0 === r.gs ? "fading" : r.gs).to)
            }
            return delete r.gs, r
        },
        v = function(e, t) { var i = (e = e.split("("))[0]; return e.shift(), i + "(" + t + "deg, " + e.join("(") },
        f = function(e) { if (-1 !== e.search("deg,")) { var t = e.split("deg,")[0]; if (-1 !== t.search(/\(/)) return parseInt(t.split("(")[1], 10) } return 180 },
        y = function(e, t) {
            if (void 0 !== e && e.indexOf("oc:t") >= 0) return {};
            e = void 0 === e ? "" : e.split(";");
            var i = { fill: o.revToResp("#ffffff", o[t].rle), stroke: "transparent", "stroke-width": "0px", "stroke-dasharray": "0", "stroke-dashoffset": "0" };
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = e[a].split(":");
                    switch (r[0]) {
                        case "c":
                            i.fill = o.revToResp(r[1], o[t].rle, void 0, "||");
                            break;
                        case "sw":
                            i["stroke-width"] = r[1];
                            break;
                        case "sc":
                            i.stroke = r[1];
                            break;
                        case "so":
                            i["stroke-dashoffset"] = r[1];
                            break;
                        case "sa":
                            i["stroke-dasharray"] = r[1];
                            break;
                        case "sall":
                            i.svgAll = r[1]
                    }
                }
            return i
        },
        b = function(e) { return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e },
        w = function(e) {
            var t = o[e.id]._L[e.layer[0].id],
                i = !1;
            if (t.splitText && !1 !== t.splitText && t.splitText.revert(), "text" === t.type || "button" === t.type) {
                for (var a in t.frames)
                    if (void 0 !== t.frames[a].chars || void 0 !== t.frames[a].words || void 0 !== t.frames[a].lines) { i = !0; break }
                t.splitText = !!i && new tpGS.SplitText(t.c, { type: "lines,words,chars", wordsClass: "rs_splitted_words", linesClass: "rs_splitted_lines", charsClass: "rs_splitted_chars" })
            } else t.splitText = !1
        },
        _ = function(e, t, i) {
            if (void 0 !== e && e.indexOf("block") >= 0) {
                var a = {};
                switch (0 === t[0].getElementsByClassName("tp-blockmask_in").length && (t.append('<div class="tp-blockmask_in"></div>'), t.append('<div class="tp-blockmask_out"></div>')), i = void 0 === i ? "power3.inOut" : i, a.ft = [{ scaleY: 1, scaleX: 0, transformOrigin: "0% 50%" }, { scaleY: 1, scaleX: 1, ease: i, immediateRender: !1 }], a.t = { scaleY: 1, scaleX: 0, transformOrigin: "100% 50%", ease: i, immediateRender: !1 }, a.bmask_in = t.find(".tp-blockmask_in"), a.bmask_out = t.find(".tp-blockmask_out"), a.type = "block", e) {
                    case "blocktoleft":
                    case "blockfromright":
                        a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
                        break;
                    case "blockfromtop":
                    case "blocktobottom":
                        a.ft = [{ scaleX: 1, scaleY: 0, transformOrigin: "50% 0%" }, { scaleX: 1, scaleY: 1, ease: i, immediateRender: !1 }], a.t = { scaleX: 1, scaleY: 0, transformOrigin: "50% 100%", ease: i, immediateRender: !1 };
                        break;
                    case "blocktotop":
                    case "blockfrombottom":
                        a.ft = [{ scaleX: 1, scaleY: 0, transformOrigin: "50% 100%" }, { scaleX: 1, scaleY: 1, ease: i, immediateRender: !1 }], a.t = { scaleX: 1, scaleY: 0, transformOrigin: "50% 0%", ease: i, immediateRender: !1 }
                }
                return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a
            }
            return !1
        },
        S = function(e, t, i, a, r) { return 0 === o[r].sdir || void 0 === t ? e : ("mask" === i ? a = "x" === a ? "mX" : "y" === a ? "mY" : a : "chars" === i ? a = "x" === a ? "cX" : "y" === a ? "cY" : "dir" === a ? "cD" : a : "words" === i ? a = "x" === a ? "wX" : "y" === a ? "wY" : "dir" === a ? "wD" : a : "lines" === i && (a = "x" === a ? "lX" : "y" === a ? "lY" : "dir" === a ? "lD" : a), void 0 === t[a] || !1 === t[a] ? e : void 0 !== t && !0 === t[a] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * e : void 0) },
        x = function(e) {
            var t, i = o[e.id]._L[e.layer[0].id],
                a = void 0 === e.source ? o.clone(e.frame.transform) : o.clone(e.frame[e.source]),
                r = { originX: "50%", originY: "50%", originZ: "0" },
                s = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eow : o[e.id].conw,
                n = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eoh : o[e.id].conh;
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    if (a[d] = "object" == typeof a[d] ? a[d][o[e.id].level] : a[d], "inherit" === a[d] || "delay" === d || "direction" === d || "use" === d) delete a[d];
                    else if ("originX" === d || "originY" === d || "originZ" === d) r[d] = a[d], delete a[d];
                    else if (o.isNumeric(a[d], 0)) a[d] = S(a[d], e.frame.reverse, e.target, d, e.id, e.id);
                    else if ("r" === a[d][0] && "a" === a[d][1] && "(" === a[d][3]) a[d] = a[d].replace("ran", "random");
                    else if (a[d].indexOf("cyc(") >= 0) {
                        var l = a[d].replace("cyc(", "").replace(")", "").replace("[", "").replace("]", "").split("|");
                        a[d] = new function(e) { return tpGS.gsap.utils.wrap(l, void 0) }
                    } else if (a[d].indexOf("%") >= 0 && o.isNumeric(t = parseInt(a[d], 0))) a[d] = "x" === d ? S((i.eow || 0) * t / 100, e.frame.reverse, e.target, d, e.id) : "y" === d ? S((i.eoh || 0) * t / 100, e.frame.reverse, e.target, d, e.id) : a[d];
                    else switch (a[d] = a[d].replace("[", "").replace("]", ""), a[d] = S(a[d], e.frame.reverse, e.target, d, e.id, e.id), a[d]) {
                        case "t":
                        case "top":
                            a[d] = 0 - (i.eoh || 0) - ("column" === i.type ? 0 : i.calcy || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "v") - ("row" === i.type && void 0 !== i.marginTop ? i.marginTop[o[e.id].level] : 0);
                            break;
                        case "b":
                        case "bottom":
                            a[d] = n - ("column" === i.type ? 0 : i.calcy || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "v");
                            break;
                        case "l":
                        case "left":
                            a[d] = 0 - ("row" === i.type ? i.pow : i.eow || 0) - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
                            break;
                        case "r":
                        case "right":
                            a[d] = s - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
                            break;
                        case "m":
                        case "c":
                        case "middle":
                        case "center":
                            a[d] = "x" === d ? S(s / 2 - ("column" === i.type ? 0 : i.calcx || 0) - (i.eow || 0) / 2, e.frame.reverse, e.target, d, e.id) : "y" === d ? S(n / 2 - ("column" === i.type ? 0 : i.calcy || 0) - (i.eoh || 0) / 2, e.frame.reverse, e.target, d, e.id) : a[d]
                    }
                    "skewX" === d && void 0 !== a[d] && (a.scaleY = void 0 === a.scaleY ? 1 : parseFloat(a.scaleY), a.scaleY *= Math.cos(parseFloat(a[d]) * tpGS.DEG2RAD)), "skewY" === d && void 0 !== a[d] && (a.scaleX = void 0 === a.scaleX ? 1 : parseFloat(a.scaleX), a.scaleX *= Math.cos(parseFloat(a[d]) * tpGS.DEG2RAD))
                }
            if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !o[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== i.clipPath && i.clipPath.use) {
                var c = "rectangle" == i.clipPath.type,
                    p = parseInt(a.clip, 0),
                    g = 100 - parseInt(a.clipB, 0),
                    u = Math.round(p / 2);
                switch (i.clipPath.origin) {
                    case "invh":
                        a.clipPath = "polygon(0% 0%, 0% 100%, " + p + "% 100%, " + p + "% 0%, 100% 0%, 100% 100%, " + g + "% 100%, " + g + "% 0%, 0% 0%)";
                        break;
                    case "invv":
                        a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + p + "%, 100% " + p + "%, 100% 100%, 0% 100%, 0% " + g + "%, 100% " + g + "%, 100% 0%)";
                        break;
                    case "cv":
                        a.clipPath = c ? "polygon(" + (50 - u) + "% 0%, " + (50 + u) + "% 0%, " + (50 + u) + "% 100%, " + (50 - u) + "% 100%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "ch":
                        a.clipPath = c ? "polygon(0% " + (50 - u) + "%, 0% " + (50 + u) + "%, 100% " + (50 + u) + "%, 100% " + (50 - u) + "%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "l":
                        a.clipPath = c ? "polygon(0% 0%, " + p + "% 0%, " + p + "% 100%, 0% 100%)" : "circle(" + p + "% at 0% 50%)";
                        break;
                    case "r":
                        a.clipPath = c ? "polygon(" + (100 - p) + "% 0%, 100% 0%, 100% 100%, " + (100 - p) + "% 100%)" : "circle(" + p + "% at 100% 50%)";
                        break;
                    case "t":
                        a.clipPath = c ? "polygon(0% 0%, 100% 0%, 100% " + p + "%, 0% " + p + "%)" : "circle(" + p + "% at 50% 0%)";
                        break;
                    case "b":
                        a.clipPath = c ? "polygon(0% 100%, 100% 100%, 100% " + (100 - p) + "%, 0% " + (100 - p) + "%)" : "circle(" + p + "% at 50% 100%)";
                        break;
                    case "lt":
                        a.clipPath = c ? "polygon(0% 0%," + 2 * p + "% 0%, 0% " + 2 * p + "%)" : "circle(" + p + "% at 0% 0%)";
                        break;
                    case "lb":
                        a.clipPath = c ? "polygon(0% " + (100 - 2 * p) + "%, 0% 100%," + 2 * p + "% 100%)" : "circle(" + p + "% at 0% 100%)";
                        break;
                    case "rt":
                        a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 0%, 100% 0%, 100% " + 2 * p + "%)" : "circle(" + p + "% at 100% 0%)";
                        break;
                    case "rb":
                        a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 100%, 100% 100%, 100% " + (100 - 2 * p) + "%)" : "circle(" + p + "% at 100% 100%)";
                        break;
                    case "clr":
                        a.clipPath = c ? "polygon(0% 0%, 0% " + p + "%, " + (100 - p) + "% 100%, 100% 100%, 100% " + (100 - p) + "%, " + p + "% 0%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "crl":
                        a.clipPath = c ? "polygon(0% " + (100 - p) + "%, 0% 100%, " + p + "% 100%, 100% " + p + "%, 100% 0%, " + (100 - p) + "% 0%)" : "circle(" + p + "% at 50% 50%)"
                }!0 !== o.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip, delete a.clipB
            } else delete a.clip;
            return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a.filter = h(e.frame.filter), a["-webkit-filter"] = a.filter, a["backdrop-filter"] = function(e) { if (void 0 === e) return ""; var t = ""; return o.isChrome8889 && 0 === e.b_blur && (e.b_blur = .05), t = void 0 !== e.b_blur ? "blur(" + (e.b_blur || 0) + "px)" : "", t += void 0 !== e.b_grayscale ? (t.length > 0 ? " " : "") + "grayscale(" + (e.b_grayscale || 0) + "%)" : "", t += void 0 !== e.b_sepia ? (t.length > 0 ? " " : "") + "sepia(" + (e.b_sepia || 0) + "%)" : "", t += void 0 !== e.b_invert ? (t.length > 0 ? " " : "") + "invert(" + (e.b_invert || 0) + "%)" : "", "" == (t += void 0 !== e.b_brightness ? (t.length > 0 ? " " : "") + "brightness(" + (e.b_brightness || 100) + "%)" : "") ? "none" : t }(e.frame.filter), window.isSafari11 && (a["-webkit-backdrop-filter"] = a["backdrop-filter"]), window.isSafari11 && void 0 !== a.filter && void 0 === a.z && void 0 !== e.frame.filter && void 0 !== e.frame.filter.blur && (a.z = 1e-4)), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a.filter = h(e.frame[e.source]), a["-webkit-filter"] = a.filter), delete a.grayscale, delete a.blur, delete a.brightness), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? "power3.inOut" : a.ease, a
        },
        k = function(e, t, i, a, r) {
            var s, n, d = {},
                l = {},
                c = {};
            for (var p in a = void 0 === a ? "transform" : a, "loop" === r ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "none", c.speed = 1e3, c.st = 0, d.x = 0, d.y = 0, d.z = 0, d.xr = 0, d.yr = 0, d.zr = 0, d.scaleX = 1, d.scaleY = 1, d.originX = "50%", d.originY = "50%", d.originZ = "0", d.rotationX = "0deg", d.rotationY = "0deg", d.rotationZ = "0deg") : (c.speed = 300, i ? c.ease = "default" : d.ease = "default"), "sfx" === r && (d.fxc = "#ffffff"), e = e.split(";"))
                if (e.hasOwnProperty(p)) {
                    var g = e[p].split(":");
                    switch (g[0]) {
                        case "u":
                            d.use = "true" === g[1] || "t" === g[1] || fasle;
                            break;
                        case "c":
                            s = g[1];
                            break;
                        case "fxc":
                            d.fxc = g[1];
                            break;
                        case "bgc":
                            n = g[1];
                            break;
                        case "auto":
                            d.auto = "t" === g[1] || void 0 === g[1] || "true" === g[1];
                            break;
                        case "o":
                            d.opacity = g[1];
                            break;
                        case "oX":
                            d.originX = g[1];
                            break;
                        case "oY":
                            d.originY = g[1];
                            break;
                        case "oZ":
                            d.originZ = g[1];
                            break;
                        case "sX":
                            d.scaleX = g[1];
                            break;
                        case "sY":
                            d.scaleY = g[1];
                            break;
                        case "skX":
                            d.skewX = g[1];
                            break;
                        case "skY":
                            d.skewY = g[1];
                            break;
                        case "rX":
                            d.rotationX = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
                            break;
                        case "rY":
                            d.rotationY = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
                            break;
                        case "rZ":
                            d.rotationZ = g[1];
                            break;
                        case "sc":
                            d.color = g[1];
                            break;
                        case "se":
                            d.effect = g[1];
                            break;
                        case "bos":
                            d.borderStyle = g[1];
                            break;
                        case "boc":
                            d.borderColor = g[1];
                            break;
                        case "td":
                            d.textDecoration = g[1];
                            break;
                        case "zI":
                            d.zIndex = g[1];
                            break;
                        case "tp":
                            d.transformPerspective = "isometric" === o[t].perspectiveType ? 0 : "global" === o[t].perspectiveType ? o[t].perspective : g[1];
                            break;
                        case "cp":
                            d.clip = parseInt(g[1], 0);
                            break;
                        case "cpb":
                            d.clipB = parseInt(g[1], 0);
                            break;
                        case "aR":
                            c.autoRotate = "t" == g[1];
                            break;
                        case "rA":
                            c.radiusAngle = g[1];
                            break;
                        case "yyf":
                            c.yoyo_filter = "t" == g[1];
                            break;
                        case "yym":
                            c.yoyo_move = "t" == g[1];
                            break;
                        case "yyr":
                            c.yoyo_rotate = "t" == g[1];
                            break;
                        case "yys":
                            c.yoyo_scale = "t" == g[1];
                            break;
                        case "crd":
                            c.curved = "t" == g[1];
                            break;
                        case "x":
                            d.x = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
                            break;
                        case "y":
                            d.y = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
                            break;
                        case "z":
                            d.z = "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle), 0 != g[1] && o.addSafariFix(t);
                            break;
                        case "bow":
                            d.borderWidth = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "bor":
                            d.borderRadius = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "m":
                            d.mask = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "iC":
                            d.instantClick = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "xR":
                            d.xr = parseInt(g[1], 0), o.addSafariFix(t);
                            break;
                        case "yR":
                            d.yr = parseInt(g[1], 0), o.addSafariFix(t);
                            break;
                        case "zR":
                            d.zr = parseInt(g[1], 0);
                            break;
                        case "blu":
                            "loop" === r ? d.blur = parseInt(g[1], 0) : l.blur = parseInt(g[1], 0);
                            break;
                        case "gra":
                            "loop" === r ? d.grayscale = parseInt(g[1], 0) : l.grayscale = parseInt(g[1], 0);
                            break;
                        case "bri":
                            "loop" === r ? d.brightness = parseInt(g[1], 0) : l.brightness = parseInt(g[1], 0);
                            break;
                        case "bB":
                            l.b_blur = parseInt(g[1], 0);
                            break;
                        case "bG":
                            l.b_grayscale = parseInt(g[1], 0);
                            break;
                        case "bR":
                            l.b_brightness = parseInt(g[1], 0);
                            break;
                        case "bI":
                            l.b_invert = parseInt(g[1], 0);
                            break;
                        case "bS":
                            l.b_sepia = parseInt(g[1], 0);
                            break;
                        case "sp":
                            c.speed = parseInt(g[1], 0);
                            break;
                        case "d":
                            d.delay = parseInt(g[1], 0);
                            break;
                        case "crns":
                            c.curviness = parseInt(g[1], 0);
                            break;
                        case "st":
                            c.start = "w" === g[1] || "a" === g[1] ? "+=0" : g[1], c.waitoncall = "w" === g[1] || "a" === g[1];
                            break;
                        case "sA":
                            c.startAbsolute = g[1];
                            break;
                        case "sR":
                            c.startRelative = g[1];
                            break;
                        case "e":
                            i ? c.ease = g[1] : d.ease = g[1];
                            break;
                        default:
                            g[0].length > 0 && (d[g[0]] = "t" === g[1] || "f" !== g[1] && g[1])
                    }
                }
            var u = { timeline: c };
            return jQuery.isEmptyObject(l) || ("split" === r ? d = jQuery.extend(!0, d, l) : u.filter = l), "split" === r && (d.dir = void 0 === d.dir ? "start" : "backward" === d.dir ? "end" : "middletoedge" === d.dir ? "center" : "edgetomiddle" === d.dir ? "edge" : d.dir), jQuery.isEmptyObject(s) || (u.color = s), jQuery.isEmptyObject(n) || (u.bgcolor = n), u[a] = d, u
        },
        L = function(e, t) {
            var i = {},
                a = 0;
            if (void 0 === window.rdF0) {
                var r = k("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", t).transform;
                window.rdF0 = window.rdF1 = { transform: k("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", t, !0).transform, mask: k("x:0;y:0", t, !0).transform, chars: jQuery.extend(!0, { blur: 0, grayscale: 0, brightness: 100 }, r), words: jQuery.extend(!0, { blur: 0, grayscale: 0, brightness: 100 }, r), lines: jQuery.extend(!0, { blur: 0, grayscale: 0, brightness: 100 }, r) }, window.rdF1.transform.opacity = window.rdF1.chars.opacity = window.rdF1.words.opacity = window.rdF1.lines.opacity = window.rdF1.transform.scaleX = window.rdF1.chars.scaleX = window.rdF1.words.scaleX = window.rdF1.lines.scaleX = window.rdF1.transform.scaleY = window.rdF1.chars.scaleY = window.rdF1.words.scaleY = window.rdF1.lines.scaleY = 1
            }
            for (var a in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.dddNeeded = !1, e.ford)
                if (e.ford.hasOwnProperty(a)) {
                    var n = e.ford[a];
                    if (e[n]) {
                        if (i[n] = k(e[n], t, !0), void 0 !== i[n].bgcolor && (e.bgcolinuse = !0), o[t].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== i[n].transform.clip) {
                            var d = "rectangle" === e.clipPath.type ? 100 - parseInt(i[n].transform.clip) : 100 - Math.min(100, 2 * parseInt(i[n].transform.clip));
                            switch (e.clipPath.origin) {
                                case "clr":
                                case "rb":
                                case "rt":
                                case "r":
                                    e[n + "_mask"] = "u:t;x:" + d + "%;y:0px;", i[n].transform.x = o.revToResp("-" + d + "%", o[t].rle);
                                    break;
                                case "crl":
                                case "lb":
                                case "lt":
                                case "cv":
                                case "l":
                                    e[n + "_mask"] = "u:t;x:-" + d + "%;y:0px;", i[n].transform.x = o.revToResp(d + "%", o[t].rle);
                                    break;
                                case "ch":
                                case "t":
                                    e[n + "_mask"] = "u:t;y:-" + d + "%;y:0px;", i[n].transform.y = o.revToResp(d + "%", o[t].rle);
                                    break;
                                case "b":
                                    e[n + "_mask"] = "u:t;y:" + d + "%;y:0px;", i[n].transform.y = o.revToResp("-" + d + "%", o[t].rle)
                            }
                            delete i[n].transform.clip, delete i[n].transform.clipB
                        }
                        e[n + "_mask"] && (i[n].mask = k(e[n + "_mask"], t).transform), null != i[n].mask && i[n].mask.use ? (i[n].mask.x = void 0 === i[n].mask.x ? 0 : i[n].mask.x, i[n].mask.y = void 0 === i[n].mask.y ? 0 : i[n].mask.y, delete i[n].mask.use, i[n].mask.overflow = "hidden") : i[n].mask = { ease: "default", overflow: "visible" }, e[n + "_chars"] && (i[n].chars = k(e[n + "_chars"], t, void 0, void 0, "split").transform), e[n + "_words"] && (i[n].words = k(e[n + "_words"], t, void 0, void 0, "split").transform), e[n + "_lines"] && (i[n].lines = k(e[n + "_lines"], t, void 0, void 0, "split").transform), (e[n + "_chars"] || e[n + "_words"] || e[n + "_lines"]) && (i[n].dosplit = !0), i.frame_0 = void 0 === i.frame_0 ? { transform: {} } : i.frame_0, i[n].transform.auto && (i[n].transform = o.clone(i.frame_0.transform), i[n].transform.opacity = void 0 === i[n].transform.opacity ? 0 : i[n].transform.opacity, void 0 !== i.frame_0.filter && (i[n].filter = o.clone(i.frame_0.filter)), void 0 !== i.frame_0.mask && (i[n].mask = o.clone(i.frame_0.mask)), void 0 !== i.frame_0.chars && (i[n].chars = o.clone(i.frame_0.chars)), void 0 !== i.frame_0.words && (i[n].words = o.clone(i.frame_0.words)), void 0 !== i.frame_0.lines && (i[n].lines = o.clone(i.frame_0.lines)), void 0 === i.frame_0.chars && void 0 === i.frame_0.words && void 0 === i.frame_0.lines || (i[n].dosplit = !0)), e[n + "_sfx"] && (i[n].sfx = k(e[n + "_sfx"], t, !1, void 0, "sfx").transform), e[n + "_reverse"] && (i[n].reverse = k(e[n + "_reverse"], t, !1, void 0, "reverse").transform)
                    }
                }
            if (i.frame_0.dosplit && (i.frame_1.dosplit = !0), void 0 === e.frame_hover && void 0 === e.svgh || (i.frame_hover = k(void 0 === e.frame_hover ? "" : e.frame_hover, t), !s || "true" != i.frame_hover.transform.instantClick && 1 != i.frame_hover.transform.instantClick ? (delete i.frame_hover.transform.instantClick, i.frame_hover.transform.color = i.frame_hover.color, void 0 === i.frame_hover.transform.color && delete i.frame_hover.transform.color, void 0 !== i.frame_hover.bgcolor && i.frame_hover.bgcolor.indexOf("gradient") >= 0 ? i.frame_hover.transform.backgroundImage = i.frame_hover.bgcolor : void 0 !== i.frame_hover.bgcolor && (i.frame_hover.transform.backgroundColor = i.frame_hover.bgcolor), void 0 !== i.frame_hover.bgcolor && (e.bgcolinuse = !0), i.frame_hover.transform.opacity = void 0 === i.frame_hover.transform.opacity ? 1 : i.frame_hover.transform.opacity, i.frame_hover.mask = void 0 !== i.frame_hover.transform.mask && i.frame_hover.transform.mask, delete i.frame_hover.transform.mask, void 0 !== i.frame_hover.transform && ((i.frame_hover.transform.borderWidth || i.frame_hover.transform.borderStyle) && (i.frame_hover.transform.borderColor = void 0 === i.frame_hover.transform.borderColor ? "transparent" : i.frame_hover.transform.borderColor), "none" !== i.frame_hover.transform.borderStyle && void 0 === i.frame_hover.transform.borderWidth && (i.frame_hover.transform.borderWidth = o.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== i.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== i.frame_hover.transform.borderWidth && (e.borderwidth = o.revToResp(i.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== i.frame_hover.transform.borderStyle && (e.borderstyle = o.revToResp(i.frame_hover.transform.borderStyle, 4, 0)))) : delete i.frame_hover), void 0 !== e.tloop) {
                e.layerLoop = { from: "frame_1", to: "frame_999", repeat: -1, keep: !0, children: !0 };
                var l = e.tloop.split(";");
                for (var a in l)
                    if (l.hasOwnProperty(a)) {
                        var c = l[a].split(":");
                        switch (c[0]) {
                            case "f":
                                e.layerLoop.from = c[1];
                                break;
                            case "t":
                                e.layerLoop.to = c[1];
                                break;
                            case "k":
                                e.layerLoop.keep = c[1];
                                break;
                            case "r":
                                e.layerLoop.repeat = parseInt(c[1], 0);
                                break;
                            case "c":
                                e.layerLoop.children = c[1]
                        }
                    }
                e.layerLoop.count = 0
            }
            for (var a in (e.loop_0 || e.loop_999) && (i.loop = k(e.loop_999, t, !0, "frame_999", "loop"), i.loop.frame_0 = k(e.loop_0 || "", t, !1, void 0, "loop").transform), i.frame_0.transform.opacity = void 0 === i.frame_0.transform.opacity ? 0 : i.frame_0.transform.opacity, i.frame_1.transform.opacity = void 0 === i.frame_1.transform.opacity ? 1 : i.frame_1.transform.opacity, i.frame_999.transform.opacity = void 0 === i.frame_999.transform.opacity ? "inherit" : i.frame_999.transform.opacity, e.clipPath && e.clipPath.use && (i.frame_0.transform.clip = void 0 === i.frame_0.transform.clip ? 100 : parseInt(i.frame_0.transform.clip), i.frame_1.transform.clip = void 0 === i.frame_1.transform.clip ? 100 : parseInt(i.frame_1.transform.clip)), e.resetfilter = !1, e.useFilter = { blur: !1, grayscale: !1, brightness: !1, b_blur: !1, b_grayscale: !1, b_brightness: !1, b_invert: !1, b_sepia: !1 }, i) void 0 !== i[a].filter && (e.resetfilter = !0, e.useFilter = O(e.useFilter, i[a].filter));
            if (!0 !== e.resetFilter && void 0 !== i.frame_hover && (e.useFilter = O(e.useFilter, i.frame_hover)), e.resetfilter)
                for (var a in i.frame_0.filter = o.clone(i.frame_0.filter), i.frame_0.filter = R(e.useFilter, o.clone(i.frame_0.filter)), i) void 0 !== i[a].filter && "frame_1" !== a && "frame_0" !== a && (i[a].filter = o.clone(i[a].filter), i[a].filter = R(e.useFilter, o.clone(i[a].filter)));
            return void 0 !== i.frame_0.filter && (i.frame_1.filter = o.clone(i.frame_1.filter), void 0 !== i.frame_0.filter.blur && 0 !== i.frame_1.filter.blur && (i.frame_1.filter.blur = void 0 === i.frame_1.filter.blur ? 0 : i.frame_1.filter.blur), void 0 !== i.frame_0.filter.brightness && 100 !== i.frame_1.filter.brightness && (i.frame_1.filter.brightness = void 0 === i.frame_1.filter.brightness ? 100 : i.frame_1.filter.brightness), void 0 !== i.frame_0.filter.grayscale && 0 !== i.frame_1.filter.grayscale && (i.frame_1.filter.grayscale = void 0 === i.frame_1.filter.grayscale ? 0 : i.frame_1.filter.grayscale), void 0 !== i.frame_0.filter.b_blur && 0 !== i.frame_1.filter.b_blur && (i.frame_1.filter.b_blur = void 0 === i.frame_1.filter.b_blur ? 0 : i.frame_1.filter.b_blur), void 0 !== i.frame_0.filter.b_brightness && 100 !== i.frame_1.filter.b_brightness && (i.frame_1.filter.b_brightness = void 0 === i.frame_1.filter.b_brightness ? 100 : i.frame_1.filter.b_brightness), void 0 !== i.frame_0.filter.b_grayscale && 0 !== i.frame_1.filter.b_grayscale && (i.frame_1.filter.b_grayscale = void 0 === i.frame_1.filter.b_grayscale ? 0 : i.frame_1.filter.b_grayscale), void 0 !== i.frame_0.filter.b_invert && 0 !== i.frame_1.filter.b_invert && (i.frame_1.filter.b_invert = void 0 === i.frame_1.filter.b_invert ? 0 : i.frame_1.filter.b_invert), void 0 !== i.frame_0.filter.b_sepia && 0 !== i.frame_1.filter.b_sepia && (i.frame_1.filter.b_sepia = void 0 === i.frame_1.filter.b_sepia ? 0 : i.frame_1.filter.b_sepia)), T(i, t, e)
        },
        R = function(e, t) { return e.blur ? t.blur = void 0 === t.blur ? 0 : t.blur : delete t.blur, e.brightness ? t.brightness = void 0 === t.brightness ? 100 : t.brightness : delete t.brightness, e.grayscale ? t.grayscale = void 0 === t.grayscale ? 0 : t.grayscale : delete t.grayscale, e.b_blur ? t.b_blur = void 0 === t.b_blur ? 0 : t.b_blur : delete t.b_blur, e.b_brightness ? t.b_brightness = void 0 === t.b_brightness ? 100 : t.b_brightness : delete t.b_brightness, e.b_grayscale ? t.b_grayscale = void 0 === t.b_grayscale ? 0 : t.b_grayscale : delete t.b_grayscale, e.b_invert ? t.b_invert = void 0 === t.b_invert ? 0 : t.b_invert : delete t.b_invert, e.b_sepia ? t.b_sepia = void 0 === t.b_sepia ? 0 : t.b_sepia : delete t.b_sepia, t },
        O = function(e, t) { return e.blur = !0 === e.blur || void 0 !== t.blur && 0 !== t.blur && "0px" !== t.blur, e.grayscale = !0 === e.grayscale || void 0 !== t.grayscale && 0 !== t.grayscale && "0%" !== t.grayscale, e.brightness = !0 === e.brightness || void 0 !== t.brightness && 100 !== t.brightness && "100%" !== t.brightness, e.b_blur = !0 === e.b_blur || void 0 !== t.b_blur && 0 !== t.b_blur && "0px" !== t.b_blur, e.b_grayscale = !0 === e.b_grayscale || void 0 !== t.b_grayscale && 0 !== t.b_grayscale && "0%" !== t.b_grayscale, e.b_brightness = !0 === e.b_brightness || void 0 !== t.b_brightness && 100 !== t.b_brightness && "100%" !== t.b_brightness, e.b_invert = !0 === e.b_invert || void 0 !== t.b_invert && 0 !== t.b_invert && "0%" !== t.b_invert, e.b_sepia = !0 === e.b_sepia || void 0 !== t.b_sepia && 0 !== t.b_sepia && "0%" !== t.b_sepia, e },
        I = function(e) { return void 0 !== e && (void 0 !== e.rotationY || void 0 !== e.rotationX || void 0 !== e.z) },
        T = function(e, t, i) {
            var a, r = {},
                s = ["transform", "words", "chars", "lines", "mask"],
                n = "global" == o[t].perspectiveType ? o[t].perspective : 0,
                d = !0,
                l = !1;
            for (var c in e) "loop" !== c && "frame_hover" !== c && (r = jQuery.extend(!0, r, e[c]));
            for (var c in e)
                if (e.hasOwnProperty(c) && (void 0 !== e[c].timeline && (e[c].timeline.usePerspective = !1), "loop" !== c && "frame_hover" !== c)) {
                    for (a in r.transform) r.transform.hasOwnProperty(a) && (r.transform[a] = void 0 === e[c].transform[a] ? "frame_0" === c ? window.rdF0.transform[a] : "frame_1" === c ? window.rdF1.transform[a] : r.transform[a] : e[c].transform[a], e[c].transform[a] = void 0 === e[c].transform[a] ? r.transform[a] : e[c].transform[a]);
                    for (var p = 1; p <= 4; p++)
                        for (a in r[s[p]]) r[s[p]].hasOwnProperty(a) && (e[c][s[p]] = void 0 === e[c][s[p]] ? {} : e[c][s[p]], r[s[p]][a] = void 0 === e[c][s[p]][a] ? "frame_0" === c ? window.rdF0[s[p]][a] : "frame_1" === c ? window.rdF1[s[p]][a] : r[s[p]][a] : e[c][s[p]][a], e[c][s[p]][a] = void 0 === e[c][s[p]][a] ? r[s[p]][a] : e[c][s[p]][a]);
                    void 0 !== e[c].timeline && !1 === e[c].timeline.usePerspective && void 0 !== e[c].transform && (void 0 !== e[c].transform.rotationY || void 0 !== e[c].transform.rotationX || void 0 !== e[c].transform.z || I(e[c].chars) || I(e[c].words) || I(e[c].lines)) && (n = "local" == o[t].perspectiveType ? void 0 === e[c].transform.transformPerspective ? 600 : e[c].transform.transformPerspective : n, e[c].timeline.usePerspective = !0, (I(e[c].chars) || I(e[c].words) || I(e[c].lines)) && !o.isFirefox(t) && (l = !0), d = !1)
                }
            if (l && requestAnimationFrame(function() { tpGS.gsap.set(i.c, { transformStyle: "preserve-3d" }) }), void 0 !== e.frame_0.timeline && e.frame_0.timeline.usePerspective && (e.frame_0.transform.transformPerspective = "local" === o[t].perspectiveType ? void 0 === e.frame_0.transform.transformPerspective ? n : e.frame_0.transform.transformPerspective : "isometric" === o[t].perspectiveType ? 0 : o[t].perspective), d)
                for (var c in e) {
                    if (!e.hasOwnProperty(c) || void 0 === e[c].transform) continue;
                    delete e[c].transform.transformPerspective
                }
            return e
        },
        C = function(e, t, i) {
            if (0 === e.length) return {};
            for (var a = e[0].getElementsByClassName(t), r = {}, o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
            if (void 0 !== e[1])
                for (a = e[1].getElementsByClassName(t), o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
            return r
        },
        A = function(e) { return "thin" === (e = o.isNumeric(e) ? e : e.toLowerCase()) ? "00" : "extra light" === e ? 200 : "light" === e ? 300 : "normal" === e ? 400 : "medium" === e ? 500 : "semi bold" === e ? 600 : "bold" === e ? 700 : "extra bold" === e ? 800 : "ultra bold" === e ? 900 : "black" === e ? 900 : e },
        M = function(e, t, s) {
            var n;
            if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != typeof e[0].className && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
            o.sA(e[0], "stylerecorder", !0), void 0 === e[0].id && (e[0].id = "rs-layer-sub-" + Math.round(1e6 * Math.random())), o[s].computedStyle[e[0].id] = window.getComputedStyle(e[0], null);
            var d = void 0 !== e[0].id && void 0 !== o[s]._L[e[0].id] ? o[s]._L[e[0].id] : e.data(),
                l = "rekursive" === t ? jQuery(o.closestClass(e[0], "rs-layer")) : void 0;
            void 0 !== l && (o[s].computedStyle[l[0].id] = void 0 === o[s].computedStyle[l[0].id] ? window.getComputedStyle(l[0], null) : o[s].computedStyle[l[0].id]);
            var c = void 0 !== l && o[s].computedStyle[e[0].id].fontSize == o[s].computedStyle[l[0].id].fontSize && A(o[s].computedStyle[e[0].id].fontWeight) == A(o[s].computedStyle[l[0].id].fontWeight) && o[s].computedStyle[e[0].id].lineHeight == o[s].computedStyle[l[0].id].lineHeight,
                p = c ? void 0 !== l[0].id && void 0 !== o[s]._L[l[0].id] ? o[s]._L[l[0].id] : l.data() : void 0,
                g = 0;
            for (d.basealign = void 0 === d.basealign ? "grid" : d.basealign, d._isnotext || (d.fontSize = o.revToResp(c ? void 0 === p.fontsize ? parseInt(o[s].computedStyle[l[0].id].fontSize, 0) || 20 : p.fontsize : void 0 === d.fontsize ? "rekursive" !== t ? 20 : "inherit" : d.fontsize, o[s].rle), d.fontWeight = o.revToResp(c ? void 0 === p.fontweight ? o[s].computedStyle[l[0].id].fontWeight || "inherit" : p.fontweight : void 0 === d.fontweight ? o[s].computedStyle[e[0].id].fontWeight || "inherit" : d.fontweight, o[s].rle), d.whiteSpace = o.revToResp(c ? void 0 === p.whitespace ? "nowrap" : p.whitespace : void 0 === d.whitespace ? "nowrap" : d.whitespace, o[s].rle), d.textAlign = o.revToResp(c ? void 0 === p.textalign ? "left" : p.textalign : void 0 === d.textalign ? "left" : d.textalign, o[s].rle), d.letterSpacing = o.revToResp(c ? void 0 === p.letterspacing ? parseInt(o[s].computedStyle[l[0].id].letterSpacing, 0) || "inherit" : p.letterspacing : void 0 === d.letterspacing ? parseInt("normal" === o[s].computedStyle[e[0].id].letterSpacing ? 0 : o[s].computedStyle[e[0].id].letterSpacing, 0) || "inherit" : d.letterspacing, o[s].rle), d.textDecoration = c ? void 0 === p.textDecoration ? "none" : p.textDecoration : void 0 === d.textDecoration ? "none" : d.textDecoration, g = 25, g = void 0 !== l && "I" === e[0].tagName ? "inherit" : g, void 0 !== d.tshadow && (d.tshadow.b = o.revToResp(d.tshadow.b, o[s].rle), d.tshadow.h = o.revToResp(d.tshadow.h, o[s].rle), d.tshadow.v = o.revToResp(d.tshadow.v, o[s].rle))), void 0 !== d.bshadow && (d.bshadow.b = o.revToResp(d.bshadow.b, o[s].rle), d.bshadow.h = o.revToResp(d.bshadow.h, o[s].rle), d.bshadow.v = o.revToResp(d.bshadow.v, o[s].rle), d.bshadow.s = o.revToResp(d.bshadow.s, o[s].rle)), void 0 !== d.tstroke && (d.tstroke.w = o.revToResp(d.tstroke.w, o[s].rle)), d.display = c ? void 0 === p.display ? o[s].computedStyle[l[0].id].display : p.display : void 0 === d.display ? o[s].computedStyle[e[0].id].display : d.display, d.float = o.revToResp(c ? void 0 === p.float ? o[s].computedStyle[l[0].id].float || "none" : p.float : void 0 === d.float ? "none" : d.float, o[s].rle), d.clear = o.revToResp(c ? void 0 === p.clear ? o[s].computedStyle[l[0].id].clear || "none" : p.clear : void 0 === d.clear ? "none" : d.clear, o[s].rle), d.lineHeight = o.revToResp(e.is("img") || -1 != jQuery.inArray(d.layertype, ["video", "image", "audio"]) ? g : c ? void 0 === p.lineheight ? parseInt(o[s].computedStyle[l[0].id].lineHeight, 0) || g : p.lineheight : void 0 === d.lineheight ? g : d.lineheight, o[s].rle), d.zIndex = c ? void 0 === p.zindex ? parseInt(o[s].computedStyle[l[0].id].zIndex, 0) || "inherit" : p.zindex : void 0 === d.zindex ? parseInt(o[s].computedStyle[e[0].id].zIndex, 0) || "inherit" : d.zindex, n = 0; n < 4; n++) d["padding" + i[n]] = o.revToResp(void 0 === d["padding" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["padding" + i[n]], 0) || 0 : d["padding" + r[n]], o[s].rle), d["margin" + i[n]] = o.revToResp(void 0 === d["margin" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["margin" + i[n]], 0) || 0 : d["margin" + r[n]], o[s].rle), d["border" + i[n] + "Width"] = void 0 === d.borderwidth ? parseInt(o[s].computedStyle[e[0].id]["border" + i[n] + "Width"], 0) || 0 : d.borderwidth[n], d["border" + i[n] + "Color"] = void 0 === d.bordercolor ? o[s].computedStyle[e[0].id]["border-" + r[n] + "-color"] : d.bordercolor, d["border" + a[n] + "Radius"] = o.revToResp(void 0 === d.borderradius ? o[s].computedStyle[e[0].id]["border" + a[n] + "Radius"] || 0 : d.borderradius[n], o[s].rle);
            for (d.borderStyle = o.revToResp(void 0 === d.borderstyle ? o[s].computedStyle[e[0].id].borderStyle || 0 : d.borderstyle, o[s].rle), "rekursive" !== t ? (d.color = o.revToResp(void 0 === d.color ? "#ffffff" : d.color, o[s].rle, void 0, "||"), d.minWidth = o.revToResp(void 0 === d.minwidth ? parseInt(o[s].computedStyle[e[0].id].minWidth, 0) || 0 : d.minwidth, o[s].rle), d.minHeight = o.revToResp(void 0 === d.minheight ? parseInt(o[s].computedStyle[e[0].id].minHeight, 0) || 0 : d.minheight, o[s].rle), d.width = o.revToResp(void 0 === d.width ? "auto" : o.smartConvertDivs(d.width), o[s].rle), d.height = o.revToResp(void 0 === d.height ? "auto" : o.smartConvertDivs(d.height), o[s].rle), d.maxWidth = o.revToResp(void 0 === d.maxwidth ? parseInt(o[s].computedStyle[e[0].id].maxWidth, 0) || "none" : d.maxwidth, o[s].rle), d.maxHeight = o.revToResp(-1 !== jQuery.inArray(d.type, ["column", "row"]) ? "none" : void 0 !== d.maxheight ? parseInt(o[s].computedStyle[e[0].id].maxHeight, 0) || "none" : d.maxheight, o[s].rle)) : "html" === d.layertype && (d.width = o.revToResp(e[0].width, o[s].rle), d.height = o.revToResp(e[0].height, o[s].rle)), d.styleProps = { background: e[0].style.background, "background-color": e[0].style["background-color"], color: e[0].style.color, cursor: e[0].style.cursor, "font-style": e[0].style["font-style"] }, null == d.bshadow && (d.styleProps.boxShadow = e[0].style.boxShadow), "" !== d.styleProps.background && void 0 !== d.styleProps.background && d.styleProps.background !== d.styleProps["background-color"] || delete d.styleProps.background, "" == d.styleProps.color && (d.styleProps.color = o[s].computedStyle[e[0].id].color), n = 0; n < 4; n++) P(d["padding" + i[n]], 0) && delete d["padding" + i[n]], P(d["margin" + i[n]], 0) && delete d["margin" + i[n]], P(d["border" + a[n] + "Radius"], "0px") ? delete d["border" + a[n] + "Radius"] : P(d["border" + a[n] + "Radius"], "0") && delete d["border" + a[n] + "Radius"];
            if (P(d.borderStyle, "none"))
                for (delete d.borderStyle, n = 0; n < 4; n++) delete d["border" + i[n] + "Width"], delete d["border" + i[n] + "Color"]
        },
        P = function(e, t) { return t === e[0] && t === e[1] && t === e[2] && t === e[3] },
        B = function(e, t, i, a, r) { var s = o.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : ""; return e = o.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = o.isNumeric(e) ? e * t + s : e) ? a : "auto" === e || "none" === e ? i : e) ? r : e },
        D = function(e) { return null != e && 0 !== parseInt(e, 0) },
        z = function(e) {
            var t, s, n, d, l, c, p, g, u, h, m = e.a,
                v = e.b,
                f = e.c,
                y = e.d,
                b = e.e,
                w = {},
                _ = {},
                S = o[v]._L[m[0].id],
                x = m[0].className;
            if (S = void 0 === S ? {} : S, "object" == typeof x && (x = ""), void 0 !== m && void 0 !== m[0] && (x.indexOf("rs_splitted") >= 0 || "BR" == m[0].nodeName || "br" == m[0].tagName || m[0].tagName.indexOf("FCR") > 0 || m[0].tagName.indexOf("BCR") > 0)) return !1;
            b = "individual" === b ? S.slideIndex : b;
            e = function(e, t, r) {
                if (void 0 !== e) {
                    if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
                    var s, n = o[t].level,
                        d = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== o[t]._L[e[0].id] ? o[t]._L[e[0].id] : e.data();
                    void 0 === (d = void 0 === d.basealign ? r.data() : d)._isnotext && (d._isnotext = void 0 !== r && void 0 !== r[0] && r[0].length > 0 ? o.gA(r[0], "_isnotext") : d._isnotext);
                    var l = { basealign: void 0 === d.basealign ? "grid" : d.basealign, lineHeight: void 0 === d.basealign ? "inherit" : parseInt(d.lineHeight[n]), color: void 0 === d.color ? void 0 : d.color[n], width: void 0 === d.width ? void 0 : "a" === d.width[n] ? "auto" : d.width[n], height: void 0 === d.height ? void 0 : "a" === d.height[n] ? "auto" : d.height[n], minWidth: void 0 === d.minWidth ? void 0 : "n" === d.minWidth[n] ? "none" : d.minWidth[n], minHeight: void 0 === d.minHeight ? void 0 : "n" == d.minHeight[n] ? "none" : d.minHeight[n], maxWidth: void 0 === d.maxWidth ? void 0 : "n" == d.maxWidth[n] ? "none" : d.maxWidth[n], maxHeight: void 0 === d.maxHeight ? void 0 : "n" == d.maxHeight[n] ? "none" : d.maxHeight[n], float: d.float[n], clear: d.clear[n] };
                    for (d.borderStyle && (l.borderStyle = d.borderStyle[n]), s = 0; s < 4; s++) d["padding" + i[s]] && (l["padding" + i[s]] = d["padding" + i[s]][n]), d["margin" + i[s]] && (l["margin" + i[s]] = parseInt(d["margin" + i[s]][n])), d["border" + a[s] + "Radius"] && (l["border" + a[s] + "Radius"] = d["border" + a[s] + "Radius"][n]), d["border" + i[s] + "Color"] && (l["border" + i[s] + "Color"] = d["border" + i[s] + "Color"]), d["border" + i[s] + "Width"] && (l["border" + i[s] + "Width"] = parseInt(d["border" + i[s] + "Width"]));
                    return d._isnotext || (l.textDecoration = d.textDecoration, l.fontSize = parseInt(d.fontSize[n]), l.fontWeight = parseInt(d.fontWeight[n]), l.letterSpacing = parseInt(d.letterSpacing[n]) || 0, l.textAlign = d.textAlign[n], l.whiteSpace = d.whiteSpace[n], l.whiteSpace = "normal" === l.whiteSpace && "auto" === l.width && !0 !== d._incolumn ? "nowrap" : l.whiteSpace, l.display = d.display, void 0 !== d.tshadow && (l.textShadow = parseInt(d.tshadow.h[n], 0) + "px " + parseInt(d.tshadow.v[n], 0) + "px " + d.tshadow.b[n] + " " + d.tshadow.c), void 0 !== d.tstroke && (l.textStroke = parseInt(d.tstroke.w[n], 0) + "px " + d.tstroke.c)), void 0 !== d.bshadow && (l.boxShadow = parseInt(d.bshadow.h[n], 0) + "px " + parseInt(d.bshadow.v[n], 0) + "px " + parseInt(d.bshadow.b[n], 0) + "px " + parseInt(d.bshadow.s[n], 0) + "px " + d.bshadow.c), l
                }
            }(m, v, e.RSL);
            var k, L = "off" === y ? 1 : o[v].CM.w;
            if (void 0 === S._isnotext && (S._isnotext = void 0 !== e.RSL && void 0 !== e.RSL[0] && e.RSL[0].length > 0 ? o.gA(e.RSL[0], "_isnotext") : S._isnotext), S.OBJUPD = null == S.OBJUPD ? {} : S.OBJUPD, S.caches = null == S.caches ? {} : S.caches, "column" === S.type) {
                for (s = {}, k = {}, t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (s["padding" + i[t]] = Math.round(e["margin" + i[t]] * L) + "px", k["margin" + i[t]] = e["margin" + i[t]], delete e["margin" + i[t]]);
                jQuery.isEmptyObject(s) || tpGS.gsap.set(S._column, s)
            }
            var R = o.clone(S.OBJUPD.POBJ),
                O = o.clone(S.OBJUPD.LPOBJ);
            if (-1 === x.indexOf("rs_splitted_")) {
                for (s = { overwrite: "auto" }, t = 0; t < 4; t++) void 0 !== e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]), void 0 !== e["padding" + i[t]] && (s["padding" + i[t]] = Math.round(e["padding" + i[t]] * L) + "px"), void 0 === e["margin" + i[t]] || S._incolumn || (s["margin" + i[t]] = "row" === S.type ? 0 : Math.round(e["margin" + i[t]] * L) + "px");
                if (void 0 !== S.spike && (s["clip-path"] = s["-webkit-clip-path"] = S.spike), e.boxShadow && (s.boxShadow = e.boxShadow), "column" !== S.type && (void 0 !== e.borderStyle && "none" !== e.borderStyle && (0 !== e.borderTopWidth || e.borderBottomWidth > 0 || e.borderLeftWidth > 0 || e.borderRightWidth > 0) ? (s.borderTopWidth = Math.round(e.borderTopWidth * L) + "px", s.borderBottomWidth = Math.round(e.borderBottomWidth * L) + "px", s.borderLeftWidth = Math.round(e.borderLeftWidth * L) + "px", s.borderRightWidth = Math.round(e.borderRightWidth * L) + "px", s.borderStyle = e.borderStyle, s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor) : ("none" === e.borderStyle && (s.borderStyle = "none"), s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor)), "shape" !== S.type && "image" !== S.type || !(D(e.borderTopLeftRadius) || D(e.borderTopRightRadius) || D(e.borderBottomLeftRadius) || D(e.borderBottomRightRadius)) || (s.overflow = "hidden"), S._isnotext || ("column" !== S.type && (s.fontSize = Math.round(e.fontSize * L) + "px", s.fontWeight = e.fontWeight, s.letterSpacing = e.letterSpacing * L + "px", e.textShadow && (s.textShadow = e.textShadow), e.textStroke && (s["-webkit-text-stroke"] = e.textStroke)), s.lineHeight = Math.round(e.lineHeight * L) + "px", s.textAlign = e.textAlign), "column" === S.type && (void 0 === S.cbg_set && (S.cbg_set = S.styleProps["background-color"], S.cbg_set = "" == S.cbg_set || void 0 === S.cbg_set || 0 == S.cbg_set.length ? "transparent" : S.cbg_set, S.cbg_img = m.css("backgroundImage"), "" !== S.cbg_img && void 0 !== S.cbg_img && "none" !== S.cbg_img && (S.cbg_img_r = m.css("backgroundRepeat"), S.cbg_img_p = m.css("backgroundPosition"), S.cbg_img_s = m.css("backgroundSize")), S.cbg_o = S.bgopacity ? 1 : S.bgopacity, w.backgroundColor = "transparent", w.backgroundImage = ""), s.backgroundColor = "transparent", s.backgroundImage = "none"), S._isstatic && S.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform)
                    for (g in s) s.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete s[g];
                if ("IFRAME" == m[0].nodeName && "html" === o.gA(m[0], "layertype") && (u = "slide" == e.basealign ? o[v].module.width : o.iWA(v, b), h = "slide" == e.basealign ? o[v].module.height : o.iHE(v), s.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : B(e.width, L, "auto", u, "auto"), s.height = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.height : h * parseInt(e.height, 0) / 100 : B(e.height, L, "auto", u, "auto")), w = jQuery.extend(!0, w, s), "rekursive" != f) {
                    u = "slide" == e.basealign ? o[v].module.width : o.iWA(v, b), h = "slide" == e.basealign ? o[v].module.height : o.iHE(v);
                    var I = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : B(e.width, L, "auto", u, "auto"),
                        T = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !S._isstatic || S._incolumn || S._ingroup ? e.height : h * parseInt(e.height, 0) / 100 : B(e.height, L, "auto", u, "auto"),
                        C = { maxWidth: B(e.maxWidth, L, "none", u, "none"), maxHeight: B(e.maxHeight, L, "none", h, "none"), minWidth: B(e.minWidth, L, "0px", u, 0), minHeight: B(e.minHeight, L, "0px", h, 0), height: T, width: I, overwrite: "auto" };
                    1 == S.heightSetByVideo && (C.height = S.vidOBJ.height);
                    var A = !1;
                    if (S._incolumn) {
                        for (R = jQuery.extend(!0, R, { minWidth: I, maxWidth: I, float: e.float, clear: e.clear }), t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (R["margin" + i[t]] = e["margin" + i[t]] * L + "px");
                        O.width = "100%", void 0 !== e.display && "inline-block" !== e.display || (_ = { width: "100%" }), C.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? "100%" : I, "image" === S.type && tpGS.gsap.set(S.img, { width: "100%" })
                    } else !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 && (R.minWidth = "slide" === S.basealign || !0 === S._ingroup ? I : o.iWA(v, b) * o[v].CM.w * parseInt(I) / 100 + "px", O.width = "100%", _.width = "100%");
                    if (!o.isNumeric(e.height) && e.height.indexOf("%") >= 0 && (R.minHeight = "slide" === S.basealign || !0 === S._ingroup ? T : o.iHE(v) * (o[v].currentRowsHeight > o[v].gridheight[o[v].level] ? 1 : o[v].CM.w) * parseInt(T) / 100 + "px", O.height = "100%", _.height = "100%", A = !0), S._isnotext || (C.whiteSpace = e.whiteSpace, C.textAlign = e.textAlign, C.textDecoration = e.textDecoration), "npc" != e.color && void 0 !== e.color && (C.color = e.color), S._ingroup && (S._groupw = C.minWidth, S._grouph = C.minHeight), "row" === S.type && (o.isNumeric(C.minHeight) || C.minHeight.indexOf("px") >= 0) && "0px" !== C.minHeight && 0 !== C.minHeight && "0" !== C.minHeight && "none" !== C.minHeight ? C.height = C.minHeight : "row" === S.type && (C.height = "auto"), S._isstatic && S.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform)
                        for (g in C) C.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete C[g];
                    "group" !== S.type && "row" !== S.type && "column" !== S.type && (!o.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), !o.isNumeric(C.height) && C.height.indexOf("%") >= 0 && (C.height = "100%")), S._isgroup && (!o.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), R.height = A ? "100%" : C.height), w = jQuery.extend(!0, w, C), null != S.svg_src && void 0 !== S.svgI && ("string" == typeof S.svgI.fill && (S.svgI.fill = [S.svgI.fill]), S.svgTemp = o.clone(S.svgI), void 0 !== S.svgTemp.fill && (S.svgTemp.fill = S.svgTemp.fill[o[v].level], tpGS.gsap.set(S.svgPath, { fill: S.svgI.fill[o[v].level] })), tpGS.gsap.set(S.svg, S.svgTemp))
                }
                if ("row" === S.type)
                    for (t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (R["padding" + i[t]] = e["margin" + i[t]] * L + "px");
                if ("column" === S.type && S.cbg && S.cbg.length > 0) {
                    for (void 0 !== S.cbg_img_s && (S.cbg[0].style.backgroundSize = S.cbg_img_s), s = {}, "" !== S.styleProps.cursor && (s.cursor = S.styleProps.cursor), "" !== S.cbg_set && "transparent" !== S.cbg_set && (s.backgroundColor = S.cbg_set), "" !== S.cbg_img && "none" !== S.cbg_img && (s.backgroundImage = S.cbg_img, "" !== S.cbg_img_r && (s.backgroundRepeat = S.cbg_img_r), "" !== S.cbg_img_p && (s.backgroundPosition = S.cbg_img_p)), "" !== S.cbg_o && void 0 !== S.cbg_o && (s.opacity = S.cbg_o), t = 0; t < 4; t++) void 0 !== e.borderStyle && "none" !== e.borderStyle && (void 0 !== e["border" + i[t] + "Width"] && (s["border" + i[t] + "Width"] = Math.round(parseInt(e["border" + i[t] + "Width"]) * L) + "px"), void 0 !== e["border" + i[t] + "Color"] && (s["border" + i[t] + "Color"] = e["border" + i[t] + "Color"])), e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]);
                    for (void 0 !== e.borderStyle && "none" !== e.borderStyle && (s.borderStyle = e.borderStyle), (n = JSON.stringify(s)) !== o[v].emptyObject && n !== S.caches.cbgS && tpGS.gsap.set(S.cbg, s), S.caches.cbgS = n, s = {}, t = 0; t < 4; t++) k["margin" + i[t]] && (s[r[t]] = k["margin" + i[t]] * L + "px");
                    (n = JSON.stringify(s)) !== o[v].emptyObject && n !== S.caches.cbgmaskS && (tpGS.gsap.set(S.cbgmask, s), S.caches.cbgmaskS = n)
                }
                "auto" === R.maxWidth && (R.maxWidth = "inherit"), "auto" === R.maxHeight && (R.maxHeight = "inherit"), "auto" === _.maxWidth && (_.maxWidth = "inherit"), "auto" === _.maxHeight && (_.maxHeight = "inherit"), "auto" === O.maxWidth && (O.maxWidth = "inherit"), "auto" === O.maxHeight && (O.maxHeight = "inherit"), void 0 !== S.vidOBJ && (w.width = S.vidOBJ.width, w.height = S.vidOBJ.height), void 0 !== S.OBJUPD.lppmOBJ && (void 0 !== S.OBJUPD.lppmOBJ.minWidth && (O.minWidth = S.OBJUPD.lppmOBJ.minWidth, _.minWidth = S.OBJUPD.lppmOBJ.minWidth, R.minWidth = S.OBJUPD.lppmOBJ.minWidth), void 0 !== S.OBJUPD.lppmOBJ.minHeight && (O.minHeight = S.OBJUPD.lppmOBJ.minHeight, _.minHeight = S.OBJUPD.lppmOBJ.minHeight, R.minHeight = S.OBJUPD.lppmOBJ.minHeight)), n = JSON.stringify(w), d = JSON.stringify(O), l = JSON.stringify(_), c = JSON.stringify(R), void 0 === S.imgOBJ || void 0 !== S.caches.imgOBJ && S.caches.imgOBJ.width === S.imgOBJ.width && S.caches.imgOBJ.height === S.imgOBJ.height && S.caches.imgOBJ.left === S.imgOBJ.left && S.caches.imgOBJ.right === S.imgOBJ.right && S.caches.imgOBJ.top === S.imgOBJ.top && S.caches.imgOBJ.bottom === S.imgOBJ.bottom || (S.caches.imgOBJ = o.clone(S.imgOBJ), S.imgOBJ.position = "relative", tpGS.gsap.set(S.img, S.imgOBJ)), void 0 === S.mediaOBJ || void 0 !== S.caches.mediaOBJ && S.caches.mediaOBJ.width === S.mediaOBJ.width && S.caches.mediaOBJ.height === S.mediaOBJ.height && S.caches.mediaOBJ.display === S.mediaOBJ.display || (S.caches.mediaOBJ = o.clone(S.mediaOBJ), S.media.css(S.mediaOBJ)), n != o[v].emptyObject && n != S.caches.LOBJ && (tpGS.gsap.set(m, w), S.caches.LOBJ = n), d != o[v].emptyObject && d != S.caches.LPOBJ && (tpGS.gsap.set(S.lp, O), S.caches.LPOBJ = d), l != o[v].emptyObject && l != S.caches.MOBJ && (tpGS.gsap.set(S.m, _), S.caches.MOBJ = l), c != o[v].emptyObject && c != S.caches.POBJ && (tpGS.gsap.set(S.p, R), S.caches.POBJ = c, S.caches.POBJ_LEFT = R.left, S.caches.POBJ_TOP = R.top)
            }
        },
        G = function(e) {
            var t = { l: "none", lw: 10, r: "none", rw: 10 };
            for (var i in e = e.split(";"))
                if (e.hasOwnProperty(i)) {
                    var a = e[i].split(":");
                    switch (a[0]) {
                        case "l":
                            t.l = a[1];
                            break;
                        case "r":
                            t.r = a[1];
                            break;
                        case "lw":
                            t.lw = a[1];
                            break;
                        case "rw":
                            t.rw = a[1]
                    }
                }
            return "polygon(" + N(t.l, 0, parseFloat(t.lw)) + "," + N(t.r, 100, 100 - parseFloat(t.rw), !0) + ")"
        },
        N = function(e, t, i, a) {
            var r;
            switch (e) {
                case "none":
                    r = t + "% 100%," + t + "% 0%";
                    break;
                case "top":
                    r = i + "% 100%," + t + "% 0%";
                    break;
                case "middle":
                    r = i + "% 100%," + t + "% 50%," + i + "% 0%";
                    break;
                case "bottom":
                    r = t + "% 100%," + i + "% 0%";
                    break;
                case "two":
                    r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
                    break;
                case "three":
                    r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
                    break;
                case "four":
                    r = t + "% 100%," + i + "% 87.5%," + t + "% 75%," + i + "% 62.5%," + t + "% 50%," + i + "% 37.5%," + t + "% 25%," + i + "% 12.5%," + t + "% 0%";
                    break;
                case "five":
                    r = t + "% 100%," + i + "% 90%," + t + "% 80%," + i + "% 70%," + t + "% 60%," + i + "% 50%," + t + "% 40%," + i + "% 30%," + t + "% 20%," + i + "% 10%," + t + "% 0%"
            }
            if (a) { var o = r.split(","); for (var i in r = "", o) o.hasOwnProperty(i) && (r += o[o.length - 1 - i] + (i < o.length - 1 ? "," : "")) }
            return r
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();

    function a(e, i) { var a = new Object({ single: ".tp-" + i, c: t[e].cpar.find(".tp-" + i + "s") }); return a.mask = a.c.find(".tp-" + i + "-mask"), a.wrap = a.c.find(".tp-" + i + "s-inner-wrapper"), a }
    jQuery.extend(!0, t, {
        hideUnHideNav: function(e) {
            window.requestAnimationFrame(function() {
                var i = !1;
                p(t[e].navigation.arrows) && (i = x(t[e].navigation.arrows, e, i)), p(t[e].navigation.bullets) && (i = x(t[e].navigation.bullets, e, i)), p(t[e].navigation.thumbnails) && (i = x(t[e].navigation.thumbnails, e, i)), p(t[e].navigation.tabs) && (i = x(t[e].navigation.tabs, e, i)), i && t.manageNavigation(e)
            })
        },
        getOuterNavDimension: function(e) { t[e].navigation.scaler = Math.max(0, Math.min(1, (t.winW - 480) / 500)); var i = { left: 0, right: 0, horizontal: 0, vertical: 0, top: 0, bottom: 0 }; return t[e].navigation.thumbnails && t[e].navigation.thumbnails.enable && (t[e].navigation.thumbnails.isVisible = t[e].navigation.thumbnails.hide_under < t[e].module.width && t[e].navigation.thumbnails.hide_over > t[e].module.width, t[e].navigation.thumbnails.cw = Math.max(Math.round(t[e].navigation.thumbnails.width * t[e].navigation.scaler), t[e].navigation.thumbnails.min_width), t[e].navigation.thumbnails.ch = Math.round(t[e].navigation.thumbnails.cw / t[e].navigation.thumbnails.width * t[e].navigation.thumbnails.height), t[e].navigation.thumbnails.isVisible && "outer-left" === t[e].navigation.thumbnails.position ? i.left = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-right" === t[e].navigation.thumbnails.position ? i.right = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-top" === t[e].navigation.thumbnails.position ? i.top = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-bottom" === t[e].navigation.thumbnails.position && (i.bottom = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding)), t[e].navigation.tabs && t[e].navigation.tabs.enable && (t[e].navigation.tabs.isVisible = t[e].navigation.tabs.hide_under < t[e].module.width && t[e].navigation.tabs.hide_over > t[e].module.width, t[e].navigation.tabs.cw = Math.max(Math.round(t[e].navigation.tabs.width * t[e].navigation.scaler), t[e].navigation.tabs.min_width), t[e].navigation.tabs.ch = Math.round(t[e].navigation.tabs.cw / t[e].navigation.tabs.width * t[e].navigation.tabs.height), t[e].navigation.tabs.isVisible && "outer-left" === t[e].navigation.tabs.position ? i.left += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-right" === t[e].navigation.tabs.position ? i.right += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-top" === t[e].navigation.tabs.position ? i.top += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-bottom" === t[e].navigation.tabs.position && (i.bottom += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding)), { left: i.left, right: i.right, horizontal: i.left + i.right, vertical: i.top + i.bottom, top: i.top, bottom: i.bottom } },
        resizeThumbsTabs: function(e, i) {
            if (void 0 !== t[e] && t[e].navigation.use && (t[e].navigation && t[e].navigation.bullets.enable || t[e].navigation && t[e].navigation.tabs.enable || t[e].navigation && t[e].navigation.thumbnails.enable)) {
                var a = tpGS.gsap.timeline(),
                    r = t[e].navigation.tabs,
                    s = t[e].navigation.thumbnails,
                    n = t[e].navigation.bullets;
                if (a.pause(), p(r) && (i || r.width > r.min_width) && o(e, a, t[e].c, r, t[e].slideamount, "tab"), p(s) && (i || s.width > s.min_width) && o(e, a, t[e].c, s, t[e].slideamount, "thumb", e), p(n) && i) {
                    var d = t[e].c.find(".tp-bullets");
                    d.find(".tp-bullet").each(function(e) {
                        var t = jQuery(this),
                            i = e + 1,
                            a = t.outerWidth() + parseInt(void 0 === n.space ? 0 : n.space, 0),
                            r = t.outerHeight() + parseInt(void 0 === n.space ? 0 : n.space, 0);
                        "vertical" === n.direction ? (t.css({ top: (i - 1) * r + "px", left: "0px" }), d.css({ height: (i - 1) * r + t.outerHeight(), width: t.outerWidth() })) : (t.css({ left: (i - 1) * a + "px", top: "0px" }), d.css({ width: (i - 1) * a + t.outerWidth(), height: t.outerHeight() }))
                    })
                }
                a.play()
            }
            return !0
        },
        updateNavIndexes: function(e) {
            var i = t[e].c;

            function a(e) { i.find(e).lenght > 0 && i.find(e).each(function(e) { jQuery(this).data("liindex", e) }) }
            a("rs-tab"), a("rs-bullet"), a("rs-thumb"), t.resizeThumbsTabs(e, !0), t.manageNavigation(e)
        },
        manageNavigation: function(e, i) { t[e].navigation.use && (p(t[e].navigation.bullets) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.bullets.h_offset_old = void 0 === t[e].navigation.bullets.h_offset_old ? parseInt(t[e].navigation.bullets.h_offset, 0) : t[e].navigation.bullets.h_offset_old, t[e].navigation.bullets.h_offset = "center" === t[e].navigation.bullets.h_align ? t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left / 2 - t[e].outNavDims.right / 2 : t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left), w(t[e].navigation.bullets.c, t[e].navigation.bullets, e)), p(t[e].navigation.thumbnails) && w(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && w(t[e].navigation.tabs, e), p(t[e].navigation.arrows) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.arrows.left.h_offset_old = void 0 === t[e].navigation.arrows.left.h_offset_old ? parseInt(t[e].navigation.arrows.left.h_offset, 0) : t[e].navigation.arrows.left.h_offset_old, t[e].navigation.arrows.left.h_offset = (t[e].navigation.arrows.left.h_align, t[e].navigation.arrows.left.h_offset_old), t[e].navigation.arrows.right.h_offset_old = void 0 === t[e].navigation.arrows.right.h_offset_old ? parseInt(t[e].navigation.arrows.right.h_offset, 0) : t[e].navigation.arrows.right.h_offset_old, t[e].navigation.arrows.right.h_offset = (t[e].navigation.arrows.right.h_align, t[e].navigation.arrows.right.h_offset_old)), w(t[e].navigation.arrows.left, e), w(t[e].navigation.arrows.right, e)), !1 !== i && (p(t[e].navigation.thumbnails) && r(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && r(t[e].navigation.tabs, e))) },
        showFirstTime: function(e) { u(e), t.hideUnHideNav(e) },
        selectNavElement: function(e, i, a, r) { for (var o = t[e].cpar[0].getElementsByClassName(a), s = 0; s < o.length; s++) t.gA(o[s], "key") === i ? (o[s].classList.add("selected"), void 0 !== r && r()) : o[s].classList.remove("selected") },
        transferParams: function(e, t) {
            if (void 0 !== t)
                for (var i in t.params) e = e.replace(t.params[i].from, t.params[i].to);
            return e
        },
        updateNavElementContent: function(e, i, a, o, s) {
            if (void 0 !== t[e].pr_next_key || void 0 !== t[e].pr_active_key) {
                var n = void 0 === t[e].pr_next_key ? void 0 === t[e].pr_cache_pr_next_key ? t[e].pr_active_key : t[e].pr_cache_pr_next_key : t[e].pr_next_key,
                    d = t.gA(t[e].slides[n], "key"),
                    l = 0,
                    c = !1;
                for (var p in a.enable && t.selectNavElement(e, d, "tp-bullet"), o.enable && t.selectNavElement(e, d, "tp-thumb", function() { r(o, e) }), s.enable && t.selectNavElement(e, d, "tp-tab", function() { r(s, e) }), t[e].thumbs) l = !0 === c ? l : p, c = t[e].thumbs[p].id === d || p == d || c;
                var g = (l = parseInt(l, 0)) > 0 ? l - 1 : t[e].slideamount - 1,
                    u = l + 1 == t[e].slideamount ? 0 : l + 1;
                if (!0 === i.enable && i.pi !== g && i.ni !== u) {
                    if (i.pi = g, i.ni = u, i.left.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[g]), u > t[e].slideamount) return;
                    i.right.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[u]), i.right.iholder = i.right.c.find(".tp-arr-imgholder"), i.left.iholder = i.left.c.find(".tp-arr-imgholder"), i.rtl ? (void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, { backgroundImage: "url(" + t[e].thumbs[u].src + ")" }), void 0 !== t[e].thumbs[g] && void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, { backgroundImage: "url(" + t[e].thumbs[g].src + ")" })) : (void 0 !== t[e].thumbs[g] && void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, { backgroundImage: "url(" + t[e].thumbs[g].src + ")" }), void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, { backgroundImage: "url(" + t[e].thumbs[u].src + ")" }))
                }
            }
        },
        createNavigation: function(e) {
            var r = t[e].navigation.arrows,
                o = t[e].navigation.bullets,
                d = t[e].navigation.thumbnails,
                h = t[e].navigation.tabs,
                v = p(r),
                y = p(o),
                b = p(d),
                x = p(h);
            for (var k in s(e), n(e), v && (f(r, e), r.c = t[e].cpar.find(".tparrows")), t[e].slides)
                if (t[e].slides.hasOwnProperty(k) && "true" != t.gA(t[e].slides[k], "not_in_nav")) {
                    var L = jQuery(t[e].slides[t[e].slides.length - 1 - k]),
                        R = jQuery(t[e].slides[k]);
                    y && (t[e].navigation.bullets.rtl ? _(t[e].c, o, L, e) : _(t[e].c, o, R, e)), b && (t[e].navigation.thumbnails.rtl ? S(t[e].c, d, L, "tp-thumb", e) : S(t[e].c, d, R, "tp-thumb", e)), x && (t[e].navigation.tabs.rtl ? S(t[e].c, h, L, "tp-tab", e) : S(t[e].c, h, R, "tp-tab", e))
                }
            y && w(o, e), b && w(d, e), x && w(h, e), (b || x) && t.updateDims(e), t[e].navigation.createNavigationDone = !0, b && jQuery.extend(!0, d, a(e, "thumb")), x && jQuery.extend(!0, h, a(e, "tab")), t[e].c.on("revolution.slide.onafterswap revolution.nextslide.waiting", function() { t.updateNavElementContent(e, r, o, d, h) }), c(r), c(o), c(d), c(h), t[e].cpar.on("mouseenter mousemove", function(a) { void 0 !== a.target && void 0 !== a.target.className && "string" == typeof a.target.className && a.target.className.indexOf("rs-waction") >= 0 || !0 !== t[e].tpMouseOver && t[e].firstSlideAvailable && (t[e].tpMouseOver = !0, u(e), i && !0 !== t[e].someNavIsDragged && (g(t[e].hideAllNavElementTimer), t[e].hideAllNavElementTimer = setTimeout(function() { t[e].tpMouseOver = !1, m(e) }, 150))) }), t[e].cpar.on("mouseleave ", function() { t[e].tpMouseOver = !1, m(e) }), (b || x || "carousel" === t[e].sliderType || t[e].navigation.touch.touchOnDesktop || t[e].navigation.touch.touchenabled && i) && l(e), t[e].navigation.initialised = !0, t.updateNavElementContent(e, r, o, d, h), t.showFirstTime(e)
        }
    });
    var r = function(e, i) {
            if (void 0 !== e && null != e.mask) {
                var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
                    r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    o = e.mask.find(e.single + ".selected").data("liindex");
                o = (o = void 0 === (o = e.rtl ? t[i].slideamount - o : o) ? 0 : o) > 0 && 1 === t[i].sdir && e.visibleAmount > 1 ? o - 1 : o;
                var s = r / a,
                    n = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    d = 0 - o * a,
                    l = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(),
                    c = d < 0 - (l - n) ? 0 - (l - n) : d,
                    p = t.gA(e.wrap[0], "offset");
                p = void 0 === p ? 0 : p, s > 2 && (c = d - (p + a) <= 0 ? d - (p + a) < 0 - a ? p : c + a : c, c = d - a + p + r < a && d + (Math.round(s) - 2) * a < p ? d + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (l - n) ? 0 - (l - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, { top: c + "px", ease: "power3.inOut" })) : e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, { left: c + "px", ease: "power3.inOut" })), e.wrap.data("offset", c))
            }
        },
        o = function(e, i, a, r, o, s) {
            var n = a.parent().find(".tp-" + s + "s"),
                d = n.find(".tp-" + s + "s-inner-wrapper"),
                l = n.find(".tp-" + s + "-mask"),
                c = "vertical" === r.direction ? r.cw : r.cw * o + parseFloat(r.space) * (o - 1),
                p = "vertical" === r.direction ? r.ch * o + parseInt(r.space) * (o - 1) : r.ch,
                g = "vertical" === r.direction ? { width: r.cw + "px" } : { height: r.ch + "px" };
            if (i.add(tpGS.gsap.set(n, g)), i.add(tpGS.gsap.set(d, { width: c + "px", height: p + "px" })), "horizontal" === r.direction) {
                var u = Math.min(c, r.cw * r.visibleAmount + parseFloat(r.space) * (r.visibleAmount - 1));
                i.add(tpGS.gsap.set(l, { width: u + "px", height: p + "px" }))
            } else {
                var h = Math.min(p, r.ch * r.visibleAmount + parseFloat(r.space) * (r.visibleAmount - 1));
                i.add(tpGS.gsap.set(l, { width: c + "px", height: h + "px" }))
            }
            null !== d.outerWidth() && (t[e].thumbResized = !0);
            var m = d.find(".tp-" + s);
            return m && jQuery.each(m, function(e, t) { "vertical" === r.direction ? i.add(tpGS.gsap.set(t, { top: e * (r.ch + parseInt(void 0 === r.space ? 0 : r.space, 0)), width: r.cw + "px", height: r.ch + "px" })) : "horizontal" === r.direction && i.add(tpGS.gsap.set(t, { left: e * (r.cw + parseInt(void 0 === r.space ? 0 : r.space, 0)), width: r.cw + "px", height: r.ch + "px" })) }), i
        },
        s = function(e) {
            !0 === t[e].navigation.keyboardNavigation && t.document.on("keydown", function(i) {
                if ("horizontal" == t[e].navigation.keyboard_direction && 39 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 40 == i.keyCode) {
                    if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
                    t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType)
                }
                if ("horizontal" == t[e].navigation.keyboard_direction && 37 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 38 == i.keyCode) {
                    if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
                    t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType)
                }
                t[e].keydown_time_stamp = (new Date).getTime()
            })
        },
        n = function(e) {
            !0 !== t[e].navigation.mouseScrollNavigation && "on" !== t[e].navigation.mouseScrollNavigation && "carousel" !== t[e].navigation.mouseScrollNavigation || t[e].c.on("wheel mousewheel DOMMouseScroll", function(i) {
                var a = function(e) { var t = 0; return "deltaY" in e || "deltaX" in e ? t = 0 != e.deltaY && -0 != e.deltaY || !(e.deltaX < 0 || e.deltaX > 0) ? e.deltaY : e.deltaX : ("detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120)), ((t = navigator.userAgent.match(/mozilla/i) ? 10 * t : t) > 300 || t < -300) && (t /= 10), t }(i.originalEvent),
                    r = !1,
                    o = 0 == t[e].pr_active_key || 0 == t[e].pr_processing_key,
                    s = t[e].pr_active_key == t[e].slideamount - 1 || t[e].pr_processing_key == t[e].slideamount - 1,
                    n = void 0 !== t[e].topc ? t[e].topc[0].getBoundingClientRect() : 0 === t[e].canv.height ? t[e].cpar[0].getBoundingClientRect() : t[e].c[0].getBoundingClientRect();
                if ((n.top > 0 && n.bottom < t.winH ? 1 : n.top >= 0 && n.bottom >= t.winH ? (t.winH - n.top) / n.height : n.top <= 0 && n.bottom <= t.winH ? n.bottom / n.height : 1) >= t[e].navigation.wheelViewPort) {
                    if ("reverse" == t[e].navigation.mouseScrollReverse) {
                        var d = s;
                        s = o, o = d
                    }
                    if ("carousel" === t[e].sliderType && !1 === t[e].carousel.snap) t.swipeAnimate({ id: e, to: t[e].carousel.slide_offset + 5 * a, direction: a < 0 ? "left" : "right", easing: "power2.out", phase: "move" });
                    else {
                        var l = a < 0 ? -1 : 1;
                        t[e].sc_indicator_dir = "reverse" === t[e].navigation.mouseScrollReverse && l < 0 || "reverse" !== t[e].navigation.mouseScrollReverse && l > 0 ? 0 : 1, "carousel" == t[e].navigation.mouseScrollNavigation || 0 === t[e].sc_indicator_dir && !s || 1 === t[e].sc_indicator_dir && !o ? void 0 === t[e].pr_processing_key && !0 !== t[e].justmouseScrolled ? (t[e].sc_indicator = "arrow", "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 0 === t[e].sc_indicator_dir ? 1 : -1, "carousel" === t[e].sliderType), t[e].justmouseScrolled = !0, setTimeout(function() { t[e].justmouseScrolled = !1 }, t[e].navigation.wheelCallDelay)) : delete t[e].sc_indicator_dir : !0 !== t[e].justmouseScrolled && (r = !0)
                    }
                    return !!r || (i.preventDefault(i), !1)
                }
            })
        },
        d = function(e, t) {
            var a = !1;
            for (var r in (void 0 === t.path || i) && (a = function(e, t) {
                    for (; e && e !== document; e = e.parentNode)
                        if (e.tagName === t) return e;
                    return !1
                }(t.target, e)), t.path) t.path.hasOwnProperty(r) && t.path[r].tagName === e && (a = !0);
            return a
        },
        l = function(e) {
            var a = t[e].carousel,
                r = t.is_android();
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), t[e].navigation.touch = void 0 === t[e].navigation.touch ? {} : t[e].navigation.touch, t[e].navigation.touch.swipe_direction = void 0 === t[e].navigation.touch.swipe_direction ? "horizontal" : t[e].navigation.touch.swipe_direction, jQuery(".rs-nav-element").rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: t[e].navigation.touch.swipe_treshold,
                fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
                excludedElements: "button, input, select, textarea, .noSwipe, .rs-waction",
                tap: function(e, t) {
                    if (void 0 !== t) var i = jQuery(t).closest("rs-thumb");
                    void 0 !== i && i.length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-tab")).length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-bullet")).length > 0 && i.trigger("click")
                },
                swipeStatus: function(i, o, s, n, l, c, p) {
                    if ("start" !== o && "move" !== o && "end" !== o && "cancel" != o) return !0;
                    var u = d("RS-THUMB", i),
                        m = d("RS-TAB", i);
                    !1 === u && !1 === m && !0 !== (u = "RS-THUMBS-WRAP" === i.target.tagName || "RS-THUMBS" === i.target.tagName || i.target.className.indexOf("tp-thumb-mask") >= 0) && (m = "RS-TABS-WRAP" === i.target.tagName || "RS-TABS" === i.target.tagName || i.target.className.indexOf("tp-tab-mask") >= 0);
                    var v = "start" === o ? 0 : r ? p[0].end.x - p[0].start.x : i.pageX - a.screenX,
                        f = "start" === o ? 0 : r ? p[0].end.y - p[0].start.y : i.pageY - a.screenY,
                        y = u ? ".tp-thumbs" : ".tp-tabs",
                        b = u ? ".tp-thumb-mask" : ".tp-tab-mask",
                        w = u ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                        _ = u ? ".tp-thumb" : ".tp-tab",
                        S = u ? t[e].navigation.thumbnails : t[e].navigation.tabs,
                        x = t[e].cpar.find(b),
                        k = x.find(w),
                        L = S.direction,
                        R = "vertical" === L ? k.height() : k.width(),
                        O = "vertical" === L ? x.height() : x.width(),
                        I = "vertical" === L ? x.find(_).first().outerHeight(!0) + parseFloat(S.space) : x.find(_).first().outerWidth(!0) + parseFloat(S.space),
                        T = void 0 === k.data("offset") ? 0 : parseInt(k.data("offset"), 0),
                        C = 0;
                    switch (o) {
                        case "start":
                            "vertical" === L && i.preventDefault(), a.screenX = r ? p[0].end.x : i.pageX, a.screenY = r ? p[0].end.y : i.pageY, t[e].cpar.find(y).addClass("dragged"), T = "vertical" === L ? k.position().top : k.position().left, k.data("offset", T), k.data("tmmove") && k.data("tmmove").pause(), t[e].someNavIsDragged = !0, h(e);
                            break;
                        case "move":
                            if (R <= O) return !1;
                            C = (C = T + ("vertical" === L ? f : v)) > 0 ? "horizontal" === L ? C - k.width() * (C / k.width() * C / k.width()) : C - k.height() * (C / k.height() * C / k.height()) : C;
                            var A = "vertical" === L ? 0 - (k.height() - x.height()) : 0 - (k.width() - x.width());
                            C = C < A ? "horizontal" === L ? C + k.width() * (C - A) / k.width() * (C - A) / k.width() : C + k.height() * (C - A) / k.height() * (C - A) / k.height() : C, "vertical" === L ? tpGS.gsap.set(k, { top: C + "px" }) : tpGS.gsap.set(k, { left: C + "px" }), g(t[e].hideAllNavElementTimer);
                            break;
                        case "end":
                        case "cancel":
                            return C = T + ("vertical" === L ? f : v), C = (C = "vertical" === L ? C < 0 - (k.height() - x.height()) ? 0 - (k.height() - x.height()) : C : C < 0 - (k.width() - x.width()) ? 0 - (k.width() - x.width()) : C) > 0 ? 0 : C, C = Math.abs(n) > I / 10 ? n <= 0 ? Math.floor(C / I) * I : Math.ceil(C / I) * I : n < 0 ? Math.ceil(C / I) * I : Math.floor(C / I) * I, C = (C = "vertical" === L ? C < 0 - (k.height() - x.height()) ? 0 - (k.height() - x.height()) : C : C < 0 - (k.width() - x.width()) ? 0 - (k.width() - x.width()) : C) > 0 ? 0 : C, "vertical" === L ? tpGS.gsap.to(k, .5, { top: C + "px", ease: "power3.out" }) : tpGS.gsap.to(k, .5, { left: C + "px", ease: "power3.out" }), C = C || ("vertical" === L ? k.position().top : k.position().left), k.data("offset", C), k.data("distance", n), t[e].cpar.find(y).removeClass("dragged"), t[e].someNavIsDragged = !1, !0
                    }
                }
            }), ("carousel" !== t[e].sliderType && (i && t[e].navigation.touch.touchenabled || !0 !== i && t[e].navigation.touch.touchOnDesktop) || "carousel" === t[e].sliderType && (i && t[e].navigation.touch.mobileCarousel || !0 !== i && t[e].navigation.touch.desktopCarousel)) && (t[e].preventClicks = !1, t[e].c.on("click", function(i) { t[e].preventClicks && i.preventDefault() }), t[e].c.rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: t[e].navigation.touch.swipe_treshold,
                fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
                excludedElements: "label, button, input, select, textarea, .noSwipe, .rs-nav-element",
                swipeStatus: function(o, s, n, d, l, c, p) {
                    t[e].preventClicks = !0;
                    var g = "start" === s ? 0 : r ? p[0].end.x - p[0].start.x : o.pageX - a.screenX,
                        u = "start" === s ? 0 : r ? p[0].end.x - p[0].start.y : o.pageY - a.screenY;
                    if (!("carousel" === t[e].sliderType && t[e].carousel.wrapwidth > t[e].carousel.maxwidth && "center" !== t[e].carousel.horizontal_align)) {
                        if ("carousel" !== t[e].sliderType) { if ("end" == s) { if (t[e].sc_indicator = "arrow", "horizontal" == t[e].navigation.touch.swipe_direction && "left" == n || "vertical" == t[e].navigation.touch.swipe_direction && "up" == n) return t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1), !1; if ("horizontal" == t[e].navigation.touch.swipe_direction && "right" == n || "vertical" == t[e].navigation.touch.swipe_direction && "down" == n) return t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1), !1 } return !0 }
                        switch ((a.preventSwipe || i && ("left" === n || "right" === n)) && o.preventDefault(), void 0 !== a.positionanim && a.positionanim.pause(), a.carouselAutomatic = !1, s) {
                            case "start":
                                clearTimeout(a.swipeMainTimer), a.beforeSwipeOffet = a.slide_offset, a.focusedBeforeSwipe = a.focused, a.beforeDragStatus = t[e].sliderstatus, t[e].c.trigger("stoptimer"), a.swipeStartPos = r ? p[0].start.x : o.pageX, a.swipeStartTime = (new Date).getTime(), a.screenX = r ? p[0].end.x : o.pageX, a.screenY = r ? p[0].end.y : o.pageY, void 0 !== a.positionanim && (a.positionanim.pause(), a.carouselAutomatic = !1), a.overpull = "none", a.wrap.addClass("dragged");
                                break;
                            case "move":
                                if ("left" !== n && "right" !== n || (a.preventSwipe = !0), a.justDragged = !0, Math.abs(g) >= 10 || t[e].carousel.isDragged) {
                                    if (t[e].carousel.isDragged = !0, t[e].c.find(".rs-waction").addClass("tp-temporarydisabled"), a.CACHE_slide_offset = a.beforeSwipeOffet + g, !a.infinity) { var h = "center" === a.horizontal_align ? (a.wrapwidth / 2 - a.slide_width / 2 - a.CACHE_slide_offset) / a.slide_width : (0 - a.CACHE_slide_offset) / a.slide_width; "none" !== a.overpull && 0 !== a.overpull || !(h < 0 || h > t[e].slideamount - 1) ? h >= 0 && h <= t[e].slideamount - 1 && (h >= 0 && g > a.overpull || h <= t[e].slideamount - 1 && g < a.overpull) && (a.overpull = 0) : a.overpull = g, a.CACHE_slide_offset = h < 0 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 + Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : h > t[e].slideamount - 1 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 - Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : a.CACHE_slide_offset }
                                    t.swipeAnimate({ id: e, to: a.CACHE_slide_offset, direction: n, easing: "power2.out", phase: "move" })
                                }
                                break;
                            case "end":
                            case "cancel":
                                if (clearTimeout(a.swipeMainTimer), a.swipeMainTimer = setTimeout(function() { a.preventSwipe = !1 }, 500), t[e].carousel.isDragged = !1, a.wrap.removeClass("dragged"), a.swipeEndPos = r ? p[0].end.x : o.pageX, a.swipeEndTime = (new Date).getTime(), a.swipeDuration = a.swipeEndTime - a.swipeStartTime, a.swipeDistance = i ? a.swipeEndPos - a.swipeStartPos : (a.swipeEndPos - a.swipeStartPos) / 1.5, a.swipePower = a.swipeDistance / a.swipeDuration, a.CACHE_slide_offset = a.slide_offset + a.swipeDistance * Math.abs(a.swipePower), Math.abs(g) < 5 && Math.abs(u) < 5) break;
                                t.swipeAnimate({ id: e, to: a.CACHE_slide_offset, direction: n, fix: !0, newSlide: !0, easing: "power2.out", phase: "end" }), "playing" === a.beforeDragStatus && t[e].c.trigger("restarttimer"), setTimeout(function() { t[e].c.find(".rs-waction").removeClass("tp-temporarydisabled") }, 19)
                        }
                    }
                },
                tap: function() { t[e].preventClicks = !1 }
            })), "carousel" === t[e].sliderType && (i && 0 == t[e].navigation.touch.mobileCarousel || !0 !== i && !1 === t[e].navigation.touch.desktopCarousel) && a.wrap.addClass("noswipe"), t[e].navigation.touch.drag_block_vertical && t[e].c.addClass("disableVerticalScroll")
        },
        c = function(e) { e.hide_delay = t.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = t.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2 },
        p = function(e) { return e && e.enable },
        g = function(e) { clearTimeout(e) },
        u = function(e) { var i = t[e].navigation.maintypes; for (var a in i) i.hasOwnProperty(a) && p(t[e].navigation[i[a]]) && void 0 !== t[e].navigation[i[a]].c && (g(t[e].navigation[i[a]].showCall), t[e].navigation[i[a]].showCall = setTimeout(function(i) { g(i.hideCall), i.hide_onleave && !0 !== t[e].tpMouseOver || (void 0 === i.tween ? i.tween = v(i) : i.tween.play()) }, t[e].navigation[i[a]].hide_onleave && !0 !== t[e].tpMouseOver ? 0 : parseInt(t[e].navigation[i[a]].animDelay), t[e].navigation[i[a]])) },
        h = function(e) { var i = t[e].navigation.maintypes; for (var a in i) i.hasOwnProperty(a) && void 0 !== t[e].navigation[i[a]] && t[e].navigation[i[a]].hide_onleave && p(t[e].navigation[i[a]]) && g(t[e].navigation[i[a]].hideCall) },
        m = function(e, a) { var r = t[e].navigation.maintypes; for (var o in r) r.hasOwnProperty(o) && void 0 !== t[e].navigation[r[o]] && t[e].navigation[r[o]].hide_onleave && p(t[e].navigation[r[o]]) && (g(t[e].navigation[r[o]].hideCall), t[e].navigation[r[o]].hideCall = setTimeout(function(e) { g(e.showCall), e.tween && e.tween.reverse() }, i ? parseInt(t[e].navigation[r[o]].hide_delay_mobile, 0) : parseInt(t[e].navigation[r[o]].hide_delay, 0), t[e].navigation[r[o]])) },
        v = function(e) {
            e.speed = void 0 === e.speed ? .5 : e.speed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
            var t = tpGS.gsap.timeline();
            for (var i in t.add(tpGS.gsap.to(e.c, e.speed, { opacity: 1, ease: "power3.inOut" }), 0), e.anims)
                if (e.anims.hasOwnProperty(i)) switch (e.anims[i]) {
                    case "left":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, { marginLeft: -50 }, { marginLeft: 0, ease: "power3.inOut" }), 0);
                        break;
                    case "right":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, { marginLeft: 50 }, { marginLeft: 0, ease: "power3.inOut" }), 0);
                        break;
                    case "top":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, { marginTop: -50 }, { marginTop: 0, ease: "power3.inOut" }), 0);
                        break;
                    case "bottom":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, { marginTop: 50 }, { marginTop: 0, ease: "power3.inOut" }), 0);
                        break;
                    case "zoomin":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, { scale: .5 }, { scale: 1, ease: "power3.inOut" }), 0);
                        break;
                    case "zoomout":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, { scale: 1.2 }, { scale: 1, ease: "power3.inOut" }), 0)
                }
            return t.play(), t
        },
        f = function(e, i) { e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, void 0 === e.left.c && (e.left.c = jQuery('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.left.c)), void 0 === e.right.c && (e.right.c = jQuery('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.right.c)), e[e.rtl ? "left" : "right"].c.on("click", function() { "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext() }), e[e.rtl ? "right" : "left"].c.on("click", function() { "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev() }), e.padding_top = parseInt(t[i].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(t[i].carousel.padding_bottom || 0, 0), w(e.left, i), w(e.right, i), "outer-left" != e.position && "outer-right" != e.position || (t[i].outernav = !0) },
        y = function(e, i, a, r) {
            r = void 0 === r ? e.outerHeight(!0) : r;
            var o = null == t[a] ? 0 : 0 == t[a].canv.height ? t[a].module.height : t[a].canv.height,
                s = "layergrid" == i.container ? "fullscreen" == t[a].sliderLayout ? t[a].module.height / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : t[a].autoHeight || null != t[a].minHeight && t[a].minHeight > 0 ? o / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : 0 : 0,
                n = "top" === i.v_align ? { top: "0px", y: Math.round(i.v_offset + s) + "px" } : "center" === i.v_align ? { top: "50%", y: Math.round(0 - r / 2 + i.v_offset) + "px" } : { top: "100%", y: Math.round(0 - (r + i.v_offset + s)) + "px" };
            e.hasClass("outer-bottom") || tpGS.gsap.set(e, n)
        },
        b = function(e, i, a, r) {
            r = void 0 === r ? e.outerWidth() : r;
            var o = "layergrid" === i.container ? t[a].module.width / 2 - t[a].gridwidth[t[a].level] * t[a].CM.w / 2 : 0,
                s = "left" === i.h_align ? { left: "0px", x: Math.round(i.h_offset + o) + "px" } : "center" === i.h_align ? { left: "50%", x: Math.round(0 - r / 2 + i.h_offset) + "px" } : { left: "100%", x: Math.round(0 - (r + i.h_offset + o)) + "px" };
            tpGS.gsap.set(e, s)
        },
        w = function(e, i) {
            if (null != e && void 0 !== e.c) {
                var a = "fullwidth" == t[i].sliderLayout || "fullscreen" == t[i].sliderLayout ? t[i].module.width : t[i].canv.width,
                    r = e.c.outerWidth(),
                    o = e.c.outerHeight();
                if (!(r <= 0 || o <= 0) && (y(e.c, e, i, o), b(e.c, e, i, r), "outer-left" === e.position ? tpGS.gsap.set(e.c, { left: 0 - r + "px", x: e.h_offset + "px" }) : "outer-right" === e.position && tpGS.gsap.set(e.c, { right: 0 - r + "px", x: e.h_offset + "px" }), "tp-thumb" === e.type || "tp-tab" === e.type)) {
                    var s = parseInt(e.padding_top || 0, 0),
                        n = parseInt(e.padding_bottom || 0, 0),
                        d = {},
                        l = {};
                    e.maxw > a && "outer-left" !== e.position && "outer-right" !== e.position ? (d.left = "0px", d.x = 0, d.maxWidth = a - 2 * e.wpad + "px", l.maxWidth = a - 2 * e.wpad + "px") : (d.maxWidth = e.maxw, l.maxWidth = a + "px"), e.maxh + 2 * e.wpad > t[i].conh && "outer-bottom" !== e.position && "outer-top" !== e.position ? (d.top = "0px", d.y = 0, d.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", l.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px") : (d.maxHeight = e.maxh + "px", l.maxHeight = e.maxh + "px"), e.mask = void 0 === e.mask ? e.c.find("rs-navmask") : e.mask, (e.mhoff > 0 || e.mvoff > 0) && (l.padding = e.mvoff + "px " + e.mhoff + "px"), e.span ? ("layergrid" == e.container && "outer-left" !== e.position && "outer-right" !== e.position && (s = n = 0), "vertical" === e.direction ? (d.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", d.height = s + n + (t[i].conh - 2 * e.wpad) + "px", d.top = 0, d.y = 0, l.maxHeight = s + n + Math.min(e.maxh, t[i].conh - 2 * e.wpad) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l), y(e.mask, e, i)) : "horizontal" === e.direction && (d.maxWidth = "100%", d.width = a - 2 * e.wpad + "px", d.left = 0, d.x = 0, l.maxWidth = e.maxw >= a ? "100%" : Math.min(e.maxw, a) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l), b(e.mask, e, i))) : (tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l))
                }
            }
        },
        _ = function(e, i, a, r) {
            0 === e.find(".tp-bullets").length && (i.style = void 0 === i.style ? "" : i.style, i.c = jQuery('<rs-bullets style="opacity:0"  class="tp-bullets ' + i.style + " " + i.direction + " nav-pos-hor-" + i.h_align + " nav-pos-ver-" + i.v_align + " nav-dir-" + i.direction + '"></rs-bullets>'));
            var o = a.data("key"),
                s = i.tmp;
            void 0 !== t[r].thumbs[a.index()] && jQuery.each(t[r].thumbs[a.index()].params, function(e, t) { s = s.replace(t.from, t.to) });
            var n = jQuery('<rs-bullet data-key="' + o + '" class="tp-bullet">' + s + "</rs-bullet>");
            void 0 !== t[r].thumbs[a.index()] && n.find(".tp-bullet-image").css({ backgroundImage: "url(" + t[r].thumbs[a.index()].src + ")" }), i.c.append(n), e.append(i.c);
            var d = i.c.find(".tp-bullet").length,
                l = n.outerWidth(),
                c = n.outerHeight(),
                p = l + parseInt(void 0 === i.space ? 0 : i.space, 0),
                g = c + parseInt(void 0 === i.space ? 0 : i.space, 0);
            "vertical" === i.direction ? (n.css({ top: (d - 1) * g + "px", left: "0px" }), i.c.css({ height: (d - 1) * g + c, width: l })) : (n.css({ left: (d - 1) * p + "px", top: "0px" }), i.c.css({ width: (d - 1) * p + l, height: c })), n.on("click", function() { "carousel" === t[r].sliderType && (t[r].ctNavElement = !0), t[r].sc_indicator = "bullet", e.revcallslidewithid(o), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected") }), i.padding_top = parseInt(t[r].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[r].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[r].outernav = !0)
        },
        S = function(e, i, a, r, o) {
            var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs",
                n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
                d = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                l = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab",
                c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
                p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
            i.type = r, i.visibleAmount = i.visibleAmount > t[o].slideamount ? t[o].slideamount : i.visibleAmount, i.sliderLayout = t[o].sliderLayout, void 0 === i.c && (i.wpad = i.wrapper_padding, i.c = jQuery("<" + p + 's style="opacity:0" class="nav-dir-' + i.direction + " nav-pos-ver-" + i.v_align + " nav-pos-hor-" + i.h_align + " rs-nav-element " + r + "s " + (!0 === i.span ? "tp-span-wrapper" : "") + " " + i.position + " " + (void 0 === i.style ? "" : i.style) + '"><rs-navmask class="' + r + '-mask" style="overflow:hidden;position:relative"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>"), i.c.css({ overflow: "visible", position: "outer-top" === i.position || "outer-bottom" === i.position ? "relative" : "absolute", background: i.wrapper_color, padding: i.wpad + "px", boxSizing: "contet-box" }), "outer-top" === i.position ? e.parent().prepend(i.c) : "outer-bottom" === i.position ? e.after(i.c) : e.append(i.c), "outer-left" !== i.position && "outer-right" !== i.position || tpGS.gsap.set(t[o].c, { overflow: "visible" }), i.padding_top = parseInt(t[o].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[o].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[o].outernav = !0));
            var g = a.data("key"),
                u = i.c.find(n),
                h = u.find(d),
                m = i.tmp;
            i.space = parseFloat(i.space) || 0, i.maxw = "horizontal" === i.direction ? i.width * i.visibleAmount + i.space * (i.visibleAmount - 1) : i.width, i.maxh = "horizontal" === i.direction ? i.height : i.height * i.visibleAmount + i.space * (i.visibleAmount - 1), i.maxw += 2 * i.mhoff, i.maxh += 2 * i.mvoff, void 0 !== t[o].thumbs[a.index()] && jQuery.each(t[o].thumbs[a.index()].params, function(e, t) { m = m.replace(t.from, t.to) });
            var v = jQuery("<" + p + ' data-liindex="' + a.index() + '" data-key="' + g + '" class="' + r + '" style="width:' + i.width + "px;height:" + i.height + 'px;">' + m + "<" + p + ">");
            void 0 !== t[o].thumbs[a.index()] && v.find(c).css({ backgroundImage: "url(" + t[o].thumbs[a.index()].src + ")" }), h.append(v);
            var f = i.c.find(l).length,
                y = v.outerWidth(),
                b = v.outerHeight(),
                w = y + parseInt(void 0 === i.space ? 0 : i.space, 0),
                _ = b + parseInt(void 0 === i.space ? 0 : i.space, 0);
            "vertical" === i.direction ? (v.css({ top: (f - 1) * _ + "px", left: "0px" }), h.css({ height: (f - 1) * _ + b, width: y })) : (v.css({ left: (f - 1) * w + "px", top: "0px" }), h.css({ width: (f - 1) * w + y, height: b })), u.css({ maxWidth: i.maxw + "px", maxHeight: i.maxh + "px" }), i.c.css({ maxWidth: i.maxw + "px", maxHeight: i.maxh + "px" }), v.on("click", function() {
                t[o].sc_indicator = "bullet", "carousel" === t[o].sliderType && (t[o].ctNavElement = !0);
                var i = e.parent().find(d).data("distance");
                i = void 0 === i ? 0 : i, Math.abs(i) < 10 && (e.revcallslidewithid(g), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
            })
        },
        x = function(e, i, a) { return null == e || void 0 === e.c ? a : (e.hide_under > t[i].canv.width || t[i].canv.width > e.hide_over ? (!0 !== e.tpForceNotVisible && (e.c.addClass("tp-forcenotvisible"), e.isVisible = !1, a = !0), e.tpForceNotVisible = !0) : (!1 !== e.tpForceNotVisible && (e.c.removeClass("tp-forcenotvisible"), e.isVisible = !0, a = !0), e.tpForceNotVisible = !1), a) }
}(jQuery),
function(e) {
    "use strict";
    window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1;
    var t = _R_is_Editor ? RVS._R : jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        bgW: function(e, i) { return _R_is_Editor ? RVS.RMD.width : "carousel" === t[e].sliderType ? t[e].justifyCarousel ? t[e].carousel.slide_widths[void 0 !== i ? i : t[e].carousel.focused] : t[e].carousel.slide_width : t[e].module.width },
        bgH: function(e, i) { return _R_is_Editor ? RVS.RMD.height : "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].module.height },
        getPZSides: function(e, t, i, a, r, o, s) {
            var n = e * i,
                d = t * i,
                l = Math.abs(a - n),
                c = Math.abs(r - d),
                p = new Object;
            return p.l = (0 - o) * l, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + d, p.h = o, p.v = s, p
        },
        getPZCorners: function(e, i, a, r) {
            var o = e.bgposition.split(" ") || "center center",
                s = "center" == o[0] ? "50%" : "left" == o[0] || "left" == o[1] ? "0%" : "right" == o[0] || "right" == o[1] ? "100%" : o[0],
                n = "center" == o[1] ? "50%" : "top" == o[0] || "top" == o[1] ? "0%" : "bottom" == o[0] || "bottom" == o[1] ? "100%" : o[1];
            s = parseInt(s, 0) / 100 || 0, n = parseInt(n, 0) / 100 || 0;
            var d = new Object;
            return d.start = t.getPZSides(r.start.width, r.start.height, r.start.scale, i, a, s, n), d.end = t.getPZSides(r.start.width, r.start.height, r.end.scale, i, a, s, n), d
        },
        getPZValues: function(e) {
            var t = e.panzoom.split(";"),
                i = { duration: 10, ease: "none", scalestart: 1, scaleend: 1, rotatestart: .01, rotateend: 0, blurstart: 0, blurend: 0, offsetstart: "0/0", offsetend: "0/0" };
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var r = t[a].split(":"),
                        o = r[0],
                        s = r[1];
                    switch (o) {
                        case "d":
                            i.duration = parseInt(s, 0) / 1e3;
                            break;
                        case "e":
                            i.ease = s;
                            break;
                        case "ss":
                            i.scalestart = parseInt(s, 0) / 100;
                            break;
                        case "se":
                            i.scaleend = parseInt(s, 0) / 100;
                            break;
                        case "rs":
                            i.rotatestart = parseInt(s, 0);
                            break;
                        case "re":
                            i.rotateend = parseInt(s, 0);
                            break;
                        case "bs":
                            i.blurstart = parseInt(s, 0);
                            break;
                        case "be":
                            i.blurend = parseInt(s, 0);
                            break;
                        case "os":
                            i.offsetstart = s;
                            break;
                        case "oe":
                            i.offsetend = s
                    }
                }
            return i.offsetstart = i.offsetstart.split("/") || [0, 0], i.offsetend = i.offsetend.split("/") || [0, 0], i.rotatestart = 0 === i.rotatestart ? .01 : i.rotatestart, e.panvalues = i, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, i
        },
        pzCalcL: function(e, i, a) {
            var r, o, s, n, d, l, c = void 0 === a.panvalues ? jQuery.extend(!0, {}, t.getPZValues(a)) : jQuery.extend(!0, {}, a.panvalues),
                p = c.offsetstart,
                g = c.offsetend,
                u = { start: { width: e, height: _R_is_Editor ? e / a.loadobj.width * a.loadobj.height : e / a.owidth * a.oheight, rotation: c.rotatestart, scale: c.scalestart, transformOrigin: "0% 0%" }, end: { rotation: c.rotateend, scale: c.scaleend } };
            c.scalestart, a.owidth, a.oheight, c.scaleend, a.owidth, a.oheight;
            return u.start.height < i && (l = i / u.start.height, u.start.height = i, u.start.width = u.start.width * l), .01 === c.rotatestart && 0 === c.rotateend && (delete u.start.rotation, delete u.end.rotation), r = t.getPZCorners(a, e, i, u), p[0] = parseFloat(p[0]) + r.start.l, g[0] = parseFloat(g[0]) + r.end.l, p[1] = parseFloat(p[1]) + r.start.t, g[1] = parseFloat(g[1]) + r.end.t, o = r.start.r - r.start.l, s = r.start.b - r.start.t, n = r.end.r - r.end.l, d = r.end.b - r.end.t, p[0] = p[0] > 0 ? 0 : o + p[0] < e ? e - o : p[0], g[0] = g[0] > 0 ? 0 : n + g[0] < e ? e - n : g[0], p[1] = p[1] > 0 ? 0 : s + p[1] < i ? i - s : p[1], g[1] = g[1] > 0 ? 0 : d + g[1] < i ? i - d : g[1], u.start.x = p[0], u.start.y = p[1], u.end.x = g[0], u.end.y = g[1], u.end.ease = c.ease, u
        },
        pzDrawShadow: function(e, i, a) {
            var r = a.start.width * a.start.scale,
                o = a.start.height * a.start.scale;
            i.shadowCTX.clearRect(0, 0, i.shadowCanvas.width, i.shadowCanvas.height), i.shadowCTX.save(), i.shadowCTX.translate(a.start.x, a.start.y), void 0 !== a.start.rotation && i.shadowCTX.rotate(a.start.rotation * Math.PI / 180), i.shadowCTX.drawImage(i.loadobj.img, 0, 0, r, o), i.shadowCTX.restore(), "animating" !== i.currentState ? (t.updateSlideBGs(e, a.slidekey, i, !0), void 0 !== a.start.blur && (i.canvas.style.filter = 0 === a.start.blur ? "none" : "blur(" + a.start.blur + "px)")) : void 0 !== a.start.blur && i.canvasFilter ? i.canvasFilterBlur = a.start.blur : i.canvas.style.filter = 0 === a.start.blur ? "none" : "blur(" + a.start.blur + "px)"
        },
        startPanZoom: function(e, i, a, r, o, s) {
            var n = _R_is_Editor ? e : e.data();
            if (void 0 !== n.panzoom && null !== n.panzoom) {
                var d = _R_is_Editor ? n : t[i].sbgs[s];
                _R_is_Editor || "carousel" !== t[i].sliderType || (t[i].carousel.justify && void 0 === t[i].carousel.slide_widths && t.setCarouselDefaults(i, !0), t[i].carousel.justify || (void 0 === t[i].carousel.slide_width && (t[i].carousel.slide_width = !0 !== t[i].carousel.stretch ? t[i].gridwidth[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.width), void 0 === t[i].carousel.slide_height && (t[i].carousel.slide_height = !0 !== t[i].carousel.stretch ? t[i].gridheight[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.height)));
                var l, c = t.getmDim(i, r, d),
                    p = t.pzCalcL(c.width, c.height, n);
                _R_is_Editor || (t[i].panzoomTLs = void 0 === t[i].panzoomTLs ? {} : t[i].panzoomTLs, t[i].panzoomBGs = void 0 === t[i].panzoomBGs ? {} : t[i].panzoomBGs, void 0 === t[i].panzoomBGs[r] && (t[i].panzoomBGs[r] = e), l = t[i].panzoomTLs[r]), a = a || 0, void 0 !== l && (l.pause(), l.kill(), l = void 0), l = tpGS.gsap.timeline({ paused: !0 }), n.panvalues.duration = NaN === n.panvalues.duration || void 0 === n.panvalues.duration ? 10 : n.panvalues.duration, _R_is_Editor || void 0 === n || void 0 === d || (d.panvalues = n.panvalues), void 0 !== d && (void 0 === d.shadowCanvas && (d.shadowCanvas = document.createElement("canvas"), d.shadowCTX = d.shadowCanvas.getContext("2d"), d.shadowCanvas.style.background = "transparent", d.shadowCanvas.style.opacity = 1), d.shadowCanvas.width = c.width, d.shadowCanvas.height = c.height, p.slideindex = r, p.slidekey = _R_is_Editor ? void 0 : s, t.pzDrawShadow(i, d, p), p.end.onUpdate = function() { t.pzDrawShadow(i, d, p) }, d.panStart = jQuery.extend(!0, {}, p.start), void 0 === n.panvalues.blurstart || void 0 === n.panvalues.blurend || 0 === n.panvalues.blurstart && 0 === n.panvalues.blurend || (p.start.blur = n.panvalues.blurstart, p.end.blur = n.panvalues.blurend), l.add(tpGS.gsap.to(p.start, n.panvalues.duration, p.end), 0), l.progress(a), "play" !== o && "first" !== o || l.play(), _R_is_Editor ? RVS.TL[RVS.S.slideId].panzoom = l : t[i].panzoomTLs[r] = l)
            }
        }
    })
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();
    jQuery.extend(!0, t, {
        checkForParallax: function(e) {
            var o = t[e].parallax;
            if (!o.done) {
                if (o.done = !0, i && o.disable_onmobile) return !1;
                if ("3D" == o.type || "3d" == o.type) {
                    if (t.addSafariFix(e), tpGS.gsap.set(t[e].c, { overflow: o.ddd_overflow }), tpGS.gsap.set(t[e].canvas, { overflow: o.ddd_overflow }), "carousel" != t[e].sliderType && o.ddd_shadow) {
                        var s = jQuery('<div class="dddwrappershadow"></div>');
                        tpGS.gsap.set(s, { force3D: "auto", transformPerspective: 1600, transformOrigin: "50% 50%", width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 0 }), t[e].c.prepend(s)
                    }
                    for (var n in t[e].slides) t[e].slides.hasOwnProperty(n) && a(jQuery(t[e].slides[n]), e);
                    t[e].c.find("rs-static-layers").length > 0 && (tpGS.gsap.set(t[e].c.find("rs-static-layers"), { top: 0, left: 0, width: "100%", height: "100%" }), a(t[e].c.find("rs-static-layers"), e))
                }
                o.pcontainers = {}, o.bgcontainers = [], o.bgcontainer_depths = [], o.speed = void 0 === o.speed ? 0 : parseInt(o.speed, 0), o.speedbg = void 0 === o.speedbg ? 0 : parseInt(o.speedbg, 0), o.speedls = void 0 === o.speedls ? 0 : parseInt(o.speedls, 0), t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function() {
                    var i = jQuery(this),
                        a = i.data("parallax");
                    window.isSafari11 || (t[e].parZ = 1), void 0 !== (a = "on" == a || !0 === a ? 1 : a) && "off" !== a && !1 !== a && (o.bgcontainers.push(i.closest("rs-sbg-px")), o.bgcontainer_depths.push(t[e].parallax.levels[parseInt(a, 0) - 1] / 100))
                });
                for (n = 1; n <= o.levels.length; n++) {
                    for (var d in t[e].slides)
                        if (t[e].slides.hasOwnProperty(d)) {
                            var l = (p = t[e].slides[d]).dataset.key;
                            void 0 === o.pcontainers[l] && (o.pcontainers[l] = {}), r(n, o, p, o.pcontainers[l])
                        }
                    l = "static";
                    void 0 === o.pcontainers[l] && (o.pcontainers[l] = {}), r(n, o, t[e].slayers[0], o.pcontainers[l]), JSON.stringify(o.pcontainers[l]) == JSON.stringify({}) && delete o.pcontainers[l]
                }
                if ("mouse" == o.type || "mousescroll" == o.type || "3D" == o.type || "3d" == o.type) {
                    var c = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
                    for (var d in "carousel" === t[e].sliderType && (c = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), o.sctors = {}, t[e].slides)
                        if (t[e].slides.hasOwnProperty(d)) {
                            var p;
                            l = (p = t[e].slides[d]).dataset.key;
                            o.sctors[l] = p.querySelectorAll(c)
                        }
                    t[e].slayers[0] && (o.sctors.static = t[e].slayers[0].querySelectorAll(c)), o.mouseEntered = !1, t[e].c.on("mouseenter", function(i) {
                        var a = t[e].c.offset().top,
                            r = t[e].c.offset().left;
                        o.mouseEnterX = i.pageX - r, o.mouseEnterY = i.pageY - a, o.mouseEntered = !0
                    });
                    var g = this.updateParallax.bind(this, e, o);
                    t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(e) { o.eventData = e, void 0 !== o.frame && "mouseleave" !== e.type || (o.frame = window.requestAnimationFrame(g)) }), i && window.addEventListener("deviceorientation", function(e) { o.eventData = e, void 0 === o.frame && (o.frame = window.requestAnimationFrame(g)) })
                }
                var u = t[e].scrolleffect;
                u.set && (u.multiplicator_layers = parseFloat(u.multiplicator_layers), u.multiplicator = parseFloat(u.multiplicator)), void 0 !== u._L && 0 === u._L.length && (u._L = !1), void 0 !== u.bgs && 0 === u.bgs.length && (u.bgs = !1)
            }
        },
        getLayerParallaxOffset: function(e, i, a) { return void 0 !== t[e].parallax && void 0 !== t[e].parallax.pcontainers && void 0 !== t[e].parallax.pcontainers[t[e]._L[i].slidekey] && void 0 !== t[e].parallax.pcontainers[t[e]._L[i].slidekey][i] ? Math.abs(t[e].parallax.pcontainers[t[e]._L[i].slidekey][i]["offs" + a]) : 0 },
        updateParallax: function(e, i) {
            i.frame && (i.frame = window.cancelAnimationFrame(i.frame));
            var a, r, o = i.eventData,
                s = t[e].c.offset().left,
                n = t[e].c.offset().top,
                d = t[e].canv.width,
                l = t[e].canv.height,
                c = i.speed / 1e3 || 3;
            if ("enterpoint" == i.origo && "deviceorientation" !== o.type ? (!1 === i.mouseEntered && (i.mouseEnterX = o.pageX - s, i.mouseEnterY = o.pageY - n, i.mouseEntered = !0), a = i.mouseEnterX - (o.pageX - s), r = i.mouseEnterY - (o.pageY - n), c = i.speed / 1e3 || .4) : "deviceorientation" !== o.type && (a = d / 2 - (o.pageX - s), r = l / 2 - (o.pageY - n)), "deviceorientation" == o.type) {
                var p, g, u;
                p = o.beta - 60, g = o.gamma, u = p;
                var h = Math.abs(i.orientationX - g) > 1 || Math.abs(i.orientationY - u) > 1;
                if (i.orientationX = g, i.orientationY = u, !h) return;
                if (t.winW > t.getWinH(e)) {
                    var m = g;
                    g = u, u = m
                }
                a = 360 / d * (g *= 1.5), r = 180 / l * (u *= 1.5)
            }
            for (var v in o.type, "mouseout" === o.type && (a = 0, r = 0, i.mouseEntered = !1), i.pcontainers)
                if (i.pcontainers.hasOwnProperty(v) && (void 0 === t[e].activeRSSlide || "static" === v || t[e].slides[t[e].activeRSSlide].dataset.key === v))
                    for (var f in i.pcontainers[v])
                        if (i.pcontainers[v].hasOwnProperty(f)) {
                            var y = i.pcontainers[v][f];
                            y.pl = "3D" == i.type || "3d" == i.type ? y.depth / 200 : y.depth / 100, y.offsh = a * y.pl, y.offsv = r * y.pl, "mousescroll" == i.type ? tpGS.gsap.to(y.tpw, c, { force3D: "auto", x: y.offsh, ease: "power3.out", overwrite: "all" }) : tpGS.gsap.to(y.tpw, c, { force3D: "auto", x: y.offsh, y: y.offsv, ease: "power3.out", overwrite: "all" })
                        }
            if ("3D" == i.type || "3d" == i.type)
                for (var v in i.sctors)
                    if (i.sctors.hasOwnProperty(v) && (void 0 === t[e].activeRSSlide || "static" === v || t[e].slides[t[e].activeRSSlide].dataset.key === v))
                        for (var f in i.sctors[v])
                            if (i.sctors[v].hasOwnProperty(f)) {
                                n = jQuery(i.sctors[v][f]);
                                var b = t.isFirefox() ? Math.min(25, i.levels[i.levels.length - 1]) / 200 : i.levels[i.levels.length - 1] / 200,
                                    w = a * b,
                                    _ = r * b,
                                    S = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * b * 100) || 0,
                                    x = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * b * 100) || 0,
                                    k = n.closest("rs-slide"),
                                    L = 0,
                                    R = !1;
                                "deviceorientation" === o.type && (w = a * (b = i.levels[i.levels.length - 1] / 200), _ = r * b * 3, S = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * b * 500) || 0, x = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * b * 700) || 0), n.hasClass("dddwrapper-layer") && (L = i.ddd_z_correction || 65, R = !0), n.hasClass("dddwrapper-layer") && (w = 0, _ = 0), k.index() === t[e].pr_active_key || "carousel" != t[e].sliderType ? !i.ddd_bgfreeze || R ? tpGS.gsap.to(n, c, { rotationX: x, rotationY: -S, x: w, z: L, y: _, ease: "power3.out", overwrite: "all" }) : tpGS.gsap.to(n, .5, { force3D: "auto", rotationY: 0, rotationX: 0, z: 0, ease: "power3.out", overwrite: "all" }) : tpGS.gsap.to(n, .5, { force3D: "auto", rotationY: 0, x: 0, y: 0, rotationX: 0, z: 0, ease: "power3.out", overwrite: "all" }), "mouseleave" != o.type && "mouseout" !== o.type || tpGS.gsap.to(this, 3.8, { z: 0, ease: "power3.out" })
                            }
        },
        parallaxProcesses: function(e, a, r, o) {
            var s = t[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / t.lastwindowheight)) : Math.min(1, Math.max(0, (0 - (a.top - t.lastwindowheight)) / (a.hheight + t.lastwindowheight))),
                n = (a.top >= 0 && a.top <= t.lastwindowheight || a.top <= 0 && a.bottom >= 0 || a.top <= 0 && a.bottom, t[e].slides[void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key]);
            if (t[e].scrollProg = s, t[e].scrollProgBasics = { top: a.top, height: a.hheight, bottom: a.bottom }, t[e].sbtimeline.fixed ? (!1 === t[e].fixedScrollOnState || !t.stickySupported || 0 != t[e].fullScreenOffsetResult && null != t[e].fullScreenOffsetResult ? t.stickySupported = !1 : (t[e].topc.addClass("rs-stickyscrollon"), t[e].fixedScrollOnState = !0), void 0 === t[e].sbtimeline.rest && t.updateFixedScrollTimes(e), a.top >= t[e].fullScreenOffsetResult && a.top <= t.lastwindowheight ? (s = t[e].sbtimeline.fixStart * (1 - a.top / t.lastwindowheight) / 1e3, !0 !== t.stickySupported && !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, { top: 0, y: 0 }), t[e].fixedScrollOnState = !1)) : a.top <= t[e].fullScreenOffsetResult && a.bottom >= t[e].module.height ? (!0 !== t.stickySupported && !0 !== t[e].fixedScrollOnState && (t[e].fixedScrollOnState = !0, t[e].topc.addClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, { top: 0, y: t[e].fullScreenOffsetResult })), s = (t[e].sbtimeline.fixStart + t[e].sbtimeline.time * (Math.abs(a.top) / (a.hheight - t[e].module.height))) / 1e3) : (!0 !== t.stickySupported && (tpGS.gsap.set(t[e].cpar, { top: t[e].scrollproc >= 0 ? 0 : a.height - t[e].module.height }), !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), t[e].fixedScrollOnState = !1)), s = a.top > t.lastwindowheight ? 0 : (t[e].sbtimeline.fixEnd + t[e].sbtimeline.rest * (1 - a.bottom / t[e].module.height)) / 1e3)) : s = t[e].duration * s / 1e3, void 0 !== n && void 0 !== t.gA(n, "key") && !0 !== r) {
                for (var d in t[e].sbas[t.gA(n, "key")])
                    if (void 0 !== t[e]._L[d] && void 0 !== t[e]._L[d].timeline && (1 == t[e]._L[d].animationonscroll || "true" == t[e]._L[d].animationonscroll)) {
                        var l = void 0 !== t[e]._L[d].scrollBasedOffset ? s + t[e]._L[d].scrollBasedOffset : s;
                        l = l <= 0 ? 0 : l < .1 ? .1 : l, t[e]._L[d].animteToTime !== l && (t[e]._L[d].animteToTime = l, tpGS.gsap.to(t[e]._L[d].timeline, t[e].sbtimeline.speed, { time: l, ease: t[e].sbtimeline.ease }))
                    }
                t[e].c.trigger("timeline_scroll_processed", { id: e, mproc: s, speed: t[e].sbtimeline.speed })
            }
            if (i && t[e].parallax.disable_onmobile) return !1;
            var c = t[e].parallax;
            if ("3d" != c.type && "3D" != c.type) {
                if ("scroll" == c.type || "mousescroll" == c.type)
                    for (var p in c.pcontainers)
                        if (c.pcontainers.hasOwnProperty(p) && void 0 === t[e].activeRSSlide || "static" === p || t[e].slides[t[e].activeRSSlide].dataset.key === p)
                            for (var g in c.pcontainers[p])
                                if (c.pcontainers[p].hasOwnProperty(g)) {
                                    var u = c.pcontainers[p][g],
                                        h = void 0 !== o ? o : c.speedls / 1e3 || 0;
                                    u.pl = u.depth / 100, u.offsv = Math.round(t[e].scrollproc * (-u.pl * t[e].canv.height) * 10) / 10 || 0, tpGS.gsap.to(u.tpw, h, { overwrite: "auto", force3D: "auto", y: u.offsv })
                                }
                if (c.bgcontainers)
                    for (g = 0; g < c.bgcontainers.length; g++) {
                        var m = c.bgcontainers[g],
                            v = c.bgcontainer_depths[g],
                            f = t[e].scrollproc * (-v * t[e].canv.height) || 0;
                        h = void 0 !== o ? o : c.speedbg / 1e3 || .015;
                        h = void 0 !== t[e].parallax.lastBGY && 0 === h && Math.abs(f - t[e].parallax.lastBGY) > 50 ? .15 : h, tpGS.gsap.to(m, h, { position: "absolute", top: "0px", left: "0px", backfaceVisibility: "hidden", force3D: "true", y: f + "px" }), t[e].parallax.lastBGY = f
                    }
            }
            var y = t[e].scrolleffect;
            if (y.set && (!i || !1 === y.disable_onmobile)) {
                var b = Math.abs(t[e].scrollproc) - y.tilt / 100;
                if (b = b < 0 ? 0 : b, !1 !== y._L) {
                    var w = 1 - b * y.multiplicator_layers,
                        _ = { force3D: "true" };
                    if ("top" == y.direction && t[e].scrollproc >= 0 && (w = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (w = 1), w = w > 1 ? 1 : w < 0 ? 0 : w, y.fade && (_.opacity = w), y.scale) {
                        var S = w;
                        _.scale = 1 - S + 1
                    }
                    if (y.blur) L = (L = (1 - w) * y.maxblur) <= .03 ? 0 : L, _["-webkit-filter"] = "blur(" + L + "px)", _.filter = "blur(" + L + "px)";
                    if (y.grayscale) {
                        var x = "grayscale(" + 100 * (1 - w) + "%)";
                        _["-webkit-filter"] = void 0 === _["-webkit-filter"] ? x : _["-webkit-filter"] + " " + x, _.filter = void 0 === _.filter ? x : _.filter + " " + x
                    }
                    tpGS.gsap.set(y._L, _)
                }
                if (!1 !== y.bgs) {
                    w = 1 - b * y.multiplicator, _ = { backfaceVisibility: "hidden", force3D: "true" };
                    for (var k in "top" == y.direction && t[e].scrollproc >= 0 && (w = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (w = 1), w = w > 1 ? 1 : w < 0 ? 0 : w, y.bgs)
                        if (y.bgs.hasOwnProperty(k)) {
                            if (y.bgs[k].fade && (_.opacity = w), y.bgs[k].blur) {
                                var L = (1 - w) * y.maxblur;
                                _["-webkit-filter"] = "blur(" + L + "px)", _.filter = "blur(" + L + "px)"
                            }
                            if (y.bgs[k].grayscale) {
                                x = "grayscale(" + 100 * (1 - w) + "%)";
                                _["-webkit-filter"] = void 0 === _["-webkit-filter"] ? x : _["-webkit-filter"] + " " + x, _.filter = void 0 === _.filter ? x : _.filter + " " + x
                            }
                            tpGS.gsap.set(y.bgs[k].c, _)
                        }
                }
            }
        }
    });
    var a = function(e, i) {
        var a = t[i].parallax;
        e.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>');
        var r = e[0].querySelectorAll(".rs-parallax-wrap"),
            o = document.createElement("div");
        o.className = "dddwrapper-layer", o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.zIndex = 5, o.style.overflow = a.ddd_layer_overflow;
        for (var s = 0; s < r.length; s++) r.hasOwnProperty(s) && null === t.closestNode(r[s], "RS-GROUP") && null === t.closestNode(r[s], "RS-ROW") && o.appendChild(r[s]);
        e[0].appendChild(o), e.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
        var n = e.find(".dddwrapper"),
            d = e.find(".dddwrapper-layer");
        e.find(".dddwrapper-layertobggroup").appendTo(n), "carousel" == t[i].sliderType && (a.ddd_shadow && n.addClass("dddwrappershadow"), tpGS.gsap.set(n, { borderRadius: t[i].carousel.border_radius })), tpGS.gsap.set(e, { overflow: "visible", transformStyle: "preserve-3d", perspective: 1600 }), tpGS.gsap.set(n, { force3D: "auto", transformOrigin: "50% 50%", transformStyle: "preserve-3d", transformPerspective: 1600 }), tpGS.gsap.set(d, { force3D: "auto", transformOrigin: "50% 50%", zIndex: 5, transformStyle: "flat", transformPerspective: 1600 }), tpGS.gsap.set(t[i].canvas, { transformStyle: "preserve-3d", transformPerspective: 1600 })
    };

    function r(i, a, r, o) {
        e(r).find(".rs-pxl-" + i).each(function() {
            var e = this.className.indexOf("rs-pxmask") >= 0,
                r = e ? t.closestNode(this, "RS-PX-MASK") : t.closestClass(this, "rs-parallax-wrap");
            r && (e && !window.isSafari11 && (tpGS.gsap.set(r, { z: 1 }), tpGS.gsap.set(t.closestNode(r, "RS-BG-ELEM"), { z: 1 })), r.dataset.parallaxlevel = a.levels[i - 1], r.classList.add("tp-parallax-container"), o[this.id] = { tpw: r, depth: a.levels[i - 1], offsv: 0, offsh: 0 })
        })
    }
}(jQuery),
function(e) {
    "use strict";
    window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1;
    var t = _R_is_Editor ? RVS._R : jQuery.fn.revolution,
        i = !_R_is_Editor && t.is_mobile();
    _R_is_Editor && (RVS._R.isNumeric = RVS.F.isNumeric), jQuery.extend(!0, t, {
        getSlideAnimationObj: function(e, i, a) {
            var r, o = {};
            for (var s in void 0 === i.anim && null == i.in && (i.in = "o:0"), i)
                if (i.hasOwnProperty(s) && void 0 !== i[s]) { var n = i[s].split(";"); for (var d in n) n.hasOwnProperty(d) && void 0 !== (r = n[d].split(":"))[0] && void 0 !== r[1] && (o[s] = void 0 === o[s] ? {} : o[s], o[s][r[0]] = "d3" === s && "c" === r[0] ? r[1] : r[1].split(",")[0]) }
            return o.in = void 0 === o.in ? {} : o.in, o.anim = void 0 === o.anim ? { e: "basic" } : o.anim, _R_is_Editor || void 0 === o.in || void 0 === o.in.prst || t.loadSlideAnimLibrary(e, { key: a, prst: o.in.prst }), t[e].sbgs[a].slideanimationRebuild = !1, o
        },
        loadSlideAnimLibrary: function(e, i) { void 0 === t.SLTR && !0 !== t.SLTR_loading ? (t.SLTR_loading = !0, jQuery.ajax({ type: "post", url: t[e].ajaxUrl, dataType: "json", data: { action: "revslider_ajax_call_front", client_action: "get_transitions" }, success: function(a, r, o) { 1 == a.success && (t.SLTR = a.transitions, void 0 !== i && t.setRandomDefaults(e, i.key, i.prst)) }, error: function(e) { console.log("Transition Table can not be loaded"), console.log(e) } })) : void 0 !== i && void 0 !== t.SLTR && t.setRandomDefaults(e, i.key, i.prst) },
        convertSlideAnimVals: function(e) { return { anim: { eng: e.eng, ms: parseInt(e.speed, 0), o: e.o, e: e.e, f: e.f, p: e.p, d: parseInt(e.d, 0) }, d3: { f: e.d3.f, d: e.d3.d, z: e.d3.z, t: e.d3.t, c: e.d3.c, e: e.d3.e, fdi: e.d3.fdi, fdo: e.d3.fdo, fz: e.d3.fz, su: e.d3.su, smi: e.d3.smi, sma: e.d3.sma, sc: e.d3.sc, sl: e.d3.sl }, in: { eng: e.in.eng, o: _R_is_Editor && void 0 !== e.preset && 0 === e.preset.indexOf("rnd") ? 0 : t.valBeau(e.in.o), x: t.valBeau(e.in.x), y: t.valBeau(e.in.y), r: t.valBeau(e.in.r), sx: t.valBeau(e.in.sx), sy: t.valBeau(e.in.sy), m: e.in.m, e: e.in.e, row: e.in.row, col: e.in.col, mo: "false" !== e.in.mou && !1 !== e.in.mou ? t.valBeau(e.in.mo) : 0, moo: "false" !== e.in.mou && !1 !== e.in.mou ? t.valBeau(e.in.moo) : "none", mou: e.in.mou }, out: void 0 === e.out.a || "true" == e.out.a || !0 === e.out.a ? void 0 : { a: l(e.out.a), o: t.valBeau(e.out.o), x: t.valBeau(e.out.x), y: t.valBeau(e.out.y), r: t.valBeau(e.out.r), sx: t.valBeau(e.out.sx), sy: t.valBeau(e.out.sy), m: e.out.m, e: e.out.e, row: t.valBeau(e.out.row), col: t.valBeau(e.out.col) }, filter: { u: e.filter.u, e: e.filter.e, b: e.filter.b, g: e.filter.g, h: e.filter.h, s: e.filter.s, c: e.filter.c, i: e.filter.i }, addOns: e.addOns } },
        setRandomDefaults: function(e, i, a) { t[e].sbgs[i].random = t.getAnimObjectByKey(a, t.SLTR) },
        getSlideAnim_AddonDefaults: function() { var e = {}; for (var i in t.enabledSlideAnimAddons) e = jQuery.extend(!0, e, t[t.enabledSlideAnimAddons[i]].defaults()); return e },
        getSlideAnim_EmptyObject: function() { return { speed: 1e3, o: "inout", e: "basic", f: "start", p: "none", d: 15, eng: "animateCore", d3: { f: "none", d: "horizontal", z: 300, t: 0, c: "#ccc", e: "power2.inOut", fdi: 1.5, fdo: 2, fz: 0, su: !1, smi: 0, sma: .5, sc: "#000", sl: 1 }, filter: { u: !1, e: "default", b: 0, g: 0, h: 100, s: 0, c: 100, i: 0 }, in: { o: 1, x: 0, y: 0, r: 0, sx: 1, sy: 1, m: !1, e: "power2.inOut", row: 1, col: 1, mo: 80, mou: !1 }, out: { a: "true", o: 1, x: 0, y: 0, r: 0, sx: 1, sy: 1, m: !1, e: "power2.inOut", row: 1, col: 1 }, addOns: t.getSlideAnim_AddonDefaults() } },
        getAnimObjectByKey: function(e, i) {
            if (t.getAnimObjectCacheKey === e) return t.getAnimObjectCache;
            var a;
            for (var r in t.getAnimObjectCacheKey = e, i)
                if (i.hasOwnProperty(r) && void 0 === a)
                    for (var o in i[r])
                        if (i[r].hasOwnProperty(o) && void 0 === a)
                            if (e === o && 0 === e.indexOf("rnd"))(a = i[r][o]).main = r, a.group = o;
                            else
                                for (var s in i[r][o]) i[r][o].hasOwnProperty(s) && void 0 === a && s === e && ((a = i[r][o][s]).main = r, a.group = o);
            return t.getAnimObjectCache = jQuery.extend(!0, {}, a), a
        },
        getRandomSlideTrans: function(e, i, a) {
            if (void 0 !== t.randomSlideAnimCache && void 0 !== t.randomSlideAnimCache[e] && void 0 !== t.randomSlideAnimCache[e][i]) return t.randomSlideAnimCache[e][i][Math.floor(Math.random() * t.randomSlideAnimCache[e][i].length)];
            for (var r in t.randomSlideAnimCache = void 0 === t.randomSlideAnimCache ? {} : t.randomSlideAnimCache, t.randomSlideAnimCache[e] = void 0 === t.randomSlideAnimCache[e] ? {} : t.randomSlideAnimCache[e], t.randomSlideAnimCache[e][i] = void 0 === t.randomSlideAnimCache[e][i] ? [] : t.randomSlideAnimCache[e][i], a)
                if (a.hasOwnProperty(r) && "random" !== r && "custom" !== r && ("all" == e || r == e))
                    for (var o in a[r])
                        if (a[r].hasOwnProperty(o) && "icon" !== o && ("" + i == "undefined" || i.indexOf(o) >= 0))
                            for (var s in a[r][o]) a[r][o].hasOwnProperty(s) && -1 == jQuery.inArray(a[r][o][s].title, ["*north*", "*south*", "*east*", "*west*"]) && t.randomSlideAnimCache[e][i].push(s);
            return t.randomSlideAnimCache[e][i][Math.floor(Math.random() * t.randomSlideAnimCache[e][i].length)]
        },
        cbgW: function(e, i) { return _R_is_Editor ? RVS.RMD.width : "carousel" === t[e].sliderType ? t[e].justifyCarousel ? t[e].carousel.slide_widths[void 0 !== i ? i : t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width },
        cbgH: function(e, i) { return _R_is_Editor ? RVS.RMD.height : "carousel" === t[e].sliderType ? t[e].carousel.slide_height : void 0 !== t[e].maxHeight && t[e].maxHeight > 0 && !t[e].fixedOnTop ? Math.min(t[e].canv.height, t[e].maxHeight) : t[e].canv.height },
        valBeau: function(e) { return e = ("" + (e = ("" + (e = ("" + (e = ("" + (e = ("" + e).split(",").join("|"))).replace("{", "ran("))).replace("}", ")"))).replace("[", "cyc("))).replace("]", ")") },
        animateSlide: function(e, t) { return _R_is_Editor && RVS.F.resetSlideTL(), void 0 === tpGS.eases.late && (tpGS.CustomEase.create("late", "M0,0,C0,0,0.474,0.078,0.724,0.26,0.969,0.438,1,1,1,1"), tpGS.CustomEase.create("late2", "M0,0 C0,0 0.738,-0.06 0.868,0.22 1,0.506 1,1 1,1 "), tpGS.CustomEase.create("late3", "M0,0,C0,0,0.682,0.157,0.812,0.438,0.944,0.724,1,1,1,1")), s(e, t) },
        getBasic: function(e) { return jQuery.extend(!0, { attr: null == e || void 0 === e.attr ? ["o", "r", "sx", "sy", "x", "y", "m", "e", "row", "col", "mo", "moo"] : e.attr, in: { f: "start", m: !1, o: 1, r: 0, sx: 1, sy: 1, x: 0, y: 0, row: 1, col: 1, e: "power2.inOut", ms: 1e3, mo: 0, moo: "none" }, out: { f: "start", m: !1, o: 1, r: 0, sx: 1, sy: 1, x: 0, y: 0, row: 1, col: 1, e: "power2.inOut", ms: 1e3 } }, e) },
        playBGVideo: function(e, i, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
                a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a
            }
            void 0 !== a.bgvid && a.bgvid.length > 0 && (p(e, {}, a, "in"), t.resetVideo(a.bgvid, e), t.playVideo(a.bgvid, e, !0), tpGS.gsap.to(a.bgvid[0], .2, { zIndex: 30, display: "block", autoAlpha: 1, delay: .075, overwrite: "all" }))
        },
        stopBGVideo: function(e, i, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
                a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a
            }
            void 0 !== a.bgvid && a.bgvid.length > 0 && (a.drawVideoCanvasImagesRecall = !1, t.stopVideo(a.bgvid, e), tpGS.gsap.to(a.bgvid[0], .2, { autoAlpha: 0, zIndex: 0, display: "none" }))
        },
        SATools: {
            getOffset: function(e, i, a, r) { var o = ("" + e).indexOf("%") >= 0; return 0 == (e = t.SATools.getSpecialValue(e, r, a)) || void 0 === e ? 0 : o ? i * (parseInt(e) / 100) : parseInt(e) },
            getSpecialValue: function(e, i, a, r) {
                if (t.isNumeric(parseFloat(e, 0))) return parseFloat(e, 0);
                var o = ("" + e).split("ran(").length > 1 ? "random" : ("" + e).split("cyc(").length > 1 ? "wrap" : ("" + e).split("(").length > 1 ? "dir" : "unknown",
                    s = ("random" === o ? e.slice(4, -1) : "wrap" === o ? e.slice(4, -1) : e.slice(1, -1)).split("|");
                if ("random" === o) return tpGS.gsap.utils.random(parseFloat(s[0]), parseFloat(s.length > 1 ? s[1] : 0 - s[0]));
                if ("wrap" === o) { var n = tpGS.gsap.utils.wrap(s, i); return ("" + n).split("(").length > 1 ? parseFloat(n.slice(1, -1)) * a + (r ? "%" : "") : n }
                return "dir" === o ? parseFloat(s[0]) * a + (r ? "%" : "") : void 0
            }
        },
        getmDim: function(e, i, a) {
            var r = t.cbgW(e, i),
                o = t.cbgH(e, i);
            return a.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[e].DPR, t.maxDimCheck(a, r, o)
        },
        maxDimCheck: function(e, t, a) {
            var r, o;
            void 0 !== e.video && ("img" === e.video.tagName || null == e.video.videoWidth || e.video.videoWidth);
            if ("animating" !== e.currentState && null == e.panzoom)
                if (e.DPR > 1 && i && a > 1024) e.DPR = 1, r = t, o = a;
                else {
                    var s = { w: null == e.video || e.isVidImg ? e.loadobj.width : 0 == e.video.videoWidth ? e.loadobj.width : e.video.videoWidth, h: null == e.video || e.isVidImg ? e.loadobj.height : 0 == e.video.videoHeight ? e.loadobj.height : e.video.videoHeight },
                        n = a / s.w,
                        d = t / s.h,
                        l = Math.max(n, d);
                    if (l > e.DPR || n >= 1 && d >= 1 ? e.DPR = 1 : e.DPR > l && (e.DPR = Math.min(e.DPR, e.DPR / l)), r = t * e.DPR, o = a * e.DPR, e.DPR > 1) {
                        var c = t / a;
                        s.w > s.h && s.w < r ? (o = (r = Math.max(t, s.w)) / c, e.DPR = 1) : s.h > s.w && s.h < o && (r = (o = Math.max(a, s.h)) * c, e.DPR = 1)
                    }
                }
            else e.DPR = 1, r = t, o = a;
            return { width: Math.round(r), height: Math.round(o), w: t, h: a }
        },
        updateSlideBGs: function(e, i, a, r) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
                a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a
            }(r = void 0 !== a.mDIM && r) || (a.mDIM = t.getmDim(e, a.skeyindex, a)), void 0 !== a.video ? ("IMG" !== a.video.tagName && (a.isVidImg = ""), a.cDIMS = t.getBGCanvasDetails(e, a), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0)) : (a.cDIMS = t.getBGCanvasDetails(e, a, r), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, "panzoom" === a.currentState || "animating" === a.currentState || void 0 === a.currentState && !_R_is_Editor && "carousel" != t[e].sliderType || (a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0))), "animating" === a.currentState && "carousel" !== t[e].sliderType && t.animatedCanvasUpdate(e, a)
        },
        addCanvas: function() { var e = document.createElement("canvas"); return x = e.getContext("2d"), e.style.background = "transparent", e.style.opacity = 1, x },
        updateVideoFrames: function(e, a, r) {
            if (a.now = Date.now(), a.then = void 0 === a.then ? a.now - 500 : a.then, a.elapsed = a.now - a.then, a.fps = "animating" === a.currentState && window._rs_firefox ? 50 : 33, a.elapsed > a.fps) {
                a.then = a.now - a.elapsed % a.fps;
                var o = "img" === a.video.tagName || null == a.video.videoWidth || 0 == a.video.videoWidth;
                void 0 !== a.video && !a.video.BGrendered && void 0 !== a.loadobj && void 0 !== a.loadobj.img || i && t.isFirefox(e) ? (a.mDIM = t.getmDim(e, a.skeyindex, a), a.pDIMS = n(a.mDIM, a, { width: a.mDIM.width, height: a.mDIM.height, x: 0, y: 0, contw: a.loadobj.width, conth: a.loadobj.height }), a.shadowCanvas.width = a.mDIM.width, a.shadowCanvas.height = a.mDIM.height, a.shadowCTX.drawImage(a.loadobj.img, a.pDIMS.x, a.pDIMS.y, a.pDIMS.width, a.pDIMS.height)) : ((r || void 0 === a.sDIMS || o !== a.isVidImg || 0 === a.sDIMS.width || 0 === a.sDIMS.height) && (a.isVidImg = o, a.mDIM = t.getmDim(e, a.skeyindex, a), a.sDIMS = n(a.mDIM, a, { width: a.mDIM.width, height: a.mDIM.height, x: 0, y: 0, contw: a.isVidImg ? a.loadobj.width : a.video.videoWidth, conth: a.isVidImg ? a.loadobj.height : a.video.videoHeight })), void 0 !== a.sDIMS && 0 !== a.sDIMS.width && 0 !== a.sDIMS.height && ("animating" === a.currentState ? (a.shadowCanvas.width = a.sDIMS.width, a.shadowCanvas.height = a.sDIMS.height, a.shadowCTX.drawImage(a.video, a.sDIMS.x, a.sDIMS.y, a.sDIMS.width, a.sDIMS.height)) : void 0 === a.animateDirection && (a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, a.ctx.drawImage(a.video, a.sDIMS.x, a.sDIMS.y, a.sDIMS.width, a.sDIMS.height)), a.shadowCanvas_Drawn = !0))
            }(r || a.drawVideoCanvasImagesRecall && "animating" === a.currentState || "animating" === a.currentState && void 0 === a.shadowCanvas_Drawn) && window.requestAnimationFrame(function() { t.updateVideoFrames(e, a) })
        },
        createOverlay: function(e, i, a, r) {
            if ("none" === i) return "none";
            a = void 0 === a ? 1 : a;
            r = void 0 === r ? { 0: "rgba(0, 0, 0, 0)", 1: "rgba(0, 0, 0, 1)" } : r;
            var o = {
                    none: [
                        [0]
                    ],
                    1: [
                        [1, 0],
                        [0, 0]
                    ],
                    2: [
                        [1, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ],
                    3: [
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    4: [
                        [1],
                        [0]
                    ],
                    5: [
                        [1],
                        [0],
                        [0]
                    ],
                    6: [
                        [1],
                        [0],
                        [0],
                        [0]
                    ],
                    7: [
                        [1, 0]
                    ],
                    8: [
                        [1, 0, 0]
                    ],
                    9: [
                        [1, 0, 0, 0]
                    ],
                    10: [
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 1]
                    ],
                    11: [
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 0, 1, 0, 0]
                    ],
                    12: [
                        [1, 0, 0],
                        [0, 1, 0],
                        [0, 0, 1]
                    ],
                    13: [
                        [0, 0, 1],
                        [0, 1, 0],
                        [1, 0, 0]
                    ],
                    14: [
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 1, 0],
                        [0, 0, 0, 0, 0]
                    ],
                    15: [
                        [0, 0, 0, 0, 1],
                        [0, 0, 0, 1, 0],
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 0]
                    ],
                    16: [
                        [1, 0, 0, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1]
                    ]
                },
                s = void 0 === o[i = void 0 === i ? 1 : i] ? o[2] : o[i];
            _R_is_Editor && (t[e] = void 0 === t[e] ? {} : t[e]), t[e].patternCanvas = document.createElement("canvas"), t[e].patternCtx = t[e].patternCanvas.getContext("2d"), t[e].patternCanvas.width = s[0].length * a, t[e].patternCanvas.height = s.length * a;
            for (var n = 0; n < s.length; n++)
                for (var d = 0; d < s[n].length; d++) "transparent" != r[s[n][d]] && (t[e].patternCtx.fillStyle = r[s[n][d]], t[e].patternCtx.fillRect(d * a, n * a, a, a));
            return "url(" + t[e].patternCanvas.toDataURL() + ")"
        },
        getBGCanvasDetails: function(e, i, a) { var r; return a || (i.mDIM = t.getmDim(e, i.skeyindex, i)), i.usepattern = ("auto" === i.bgfit || i.bgfit.indexOf("%") >= 0) && (void 0 === i.loadobj || !0 !== i.loadobj.useBGColor), _R_is_Editor && void 0 === i.panzoom && delete i.shadowCanvas, void 0 === i.shadowCanvas && (i.shadowCanvas = document.createElement("canvas"), i.shadowCTX = i.shadowCanvas.getContext("2d"), i.shadowCanvas.style.background = "transparent", i.shadowCanvas.style.opacity = 1), !0 === i.replaceShadowCanvas || !0 === i.loadobj.bgColor || !0 === i.usebgColor || void 0 !== i.panzoom || null != i.isHTML5 && 1 != i.poster || i.usepattern ? (r = { width: i.mDIM.width, height: i.mDIM.height, x: 0, y: 0 }, i.usepattern && void 0 !== i.loadobj && void 0 !== i.loadobj.img ? t.getCanvasPattern(e, i, { ratio: i.loadobj.height / i.loadobj.width }) : (i.loadobj.bgColor || i.usebgColor) && (i.shadowCanvas.width = i.mDIM.width, i.shadowCanvas.height = i.mDIM.height, t.getCanvasGradients(e, i))) : (r = n(i.mDIM, i, { width: i.mDIM.width, height: i.mDIM.height, x: 0, y: 0, contw: i.loadobj.width, conth: i.loadobj.height }), i.shadowCanvas.width = i.mDIM.width, i.shadowCanvas.height = i.mDIM.height, void 0 !== i.loadobj && void 0 !== i.loadobj.img && i.shadowCTX.drawImage(i.loadobj.img, r.x, r.y, r.width, r.height), r = { width: i.mDIM.width, height: i.mDIM.height, x: 0, y: 0 }), r },
        getCanvasPattern: function(e, i, a) {
            void 0 === i.patternImageCanvas && (i.patternImageCanvas = document.createElement("canvas"), i.patternImageCTX = i.patternImageCanvas.getContext("2d"));
            var r = i.bgfit.split(" ");
            1 === r.length && (r[1] = r[0]), a.width = "auto" === r[0] ? i.loadobj.width : i.loadobj.width * (parseInt(r[0], 0) / 100), a.height = "auto" === r[1] ? i.loadobj.height : a.width * a.ratio, i.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[e].DPR, a.width = a.width * i.DPR, a.height = a.height * i.DPR, i.patternImageCanvas.width = a.width, i.patternImageCanvas.height = a.height, i.patternImageCTX.drawImage(i.loadobj.img, 0, 0, a.width, a.height), i.shadowCanvas.width = i.mDIM.width, i.shadowCanvas.height = i.mDIM.height, i.pattern = i.shadowCTX.createPattern(i.patternImageCanvas, i.bgrepeat), i.shadowCTX.fillStyle = i.pattern, i.shadowShifts = { h: i.bgposition.split(" ")[0], v: i.bgposition.split(" ")[1] }, i.shadowShifts.hperc = t.isNumeric(parseInt(i.shadowShifts.h)) ? parseInt(i.shadowShifts.h) / 100 * i.mDIM.width : 0, i.shadowShifts.vperc = t.isNumeric(parseInt(i.shadowShifts.v)) ? parseInt(i.shadowShifts.v) / 100 * i.mDIM.height : 0, i.shadowShifts.x = "left" === i.shadowShifts.h ? 0 : "center" === i.shadowShifts.h || "50%" == i.shadowShifts.h ? "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? i.mDIM.width / 2 - a.width / 2 - Math.ceil(i.mDIM.width / 2 / a.width) * a.width : i.mDIM.width / 2 - a.width / 2 : "right" === i.shadowShifts.h ? "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? -(a.width - i.mDIM.width % a.width) : i.mDIM.width - a.width : "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? -(a.width - i.shadowShifts.hperc % a.width) : i.shadowShifts.hperc, i.shadowShifts.y = "top" === i.shadowShifts.v ? 0 : "center" === i.shadowShifts.v || "50%" == i.shadowShifts.v ? "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? i.mDIM.height / 2 - a.height / 2 - Math.ceil(i.mDIM.height / 2 / a.height) * a.height : i.mDIM.height / 2 - a.height / 2 : "bottom" === i.shadowShifts.v ? "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? -(a.height - i.mDIM.height % a.height) : i.mDIM.height - a.height : "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? -(a.height - i.shadowShifts.vperc % a.height) : i.shadowShifts.vperc, i.shadowCTX.translate(i.shadowShifts.x, i.shadowShifts.y), i.shadowCTX.fillRect(0, 0, i.mDIM.width - i.shadowShifts.x, i.mDIM.height - i.shadowShifts.y)
        },
        getCanvasGradients: function(e, i) {
            if (i.bgcolor.indexOf("gradient") >= 0) {
                i.gradient = null == i.gradient || _R_is_Editor ? t.getGradients(i.bgcolor) : i.gradient, i.shadowGrd = "radialGradient" === i.gradient.Type ? i.shadowCTX.createRadialGradient(i.mDIM.width / 2, i.mDIM.height / 2, 0, i.mDIM.width / 2, i.mDIM.height / 2, Math.max(i.mDIM.width / 2, i.mDIM.height / 2)) : t.calcLinearGradient(i.shadowCTX, i.shadowCanvas.width, i.shadowCanvas.height, i.gradient.deg);
                for (var a = 0; a < i.gradient.stops.length; a += 2) i.shadowGrd.addColorStop(i.gradient.stops[a + 1], i.gradient.stops[a]);
                i.shadowCTX.clearRect(0, 0, i.mDIM.width, i.mDIM.height), i.shadowCTX.fillStyle = i.shadowGrd, i.shadowCTX.fillRect(0, 0, i.mDIM.width, i.mDIM.height)
            } else i.shadowCTX.fillStyle = i.bgcolor, i.shadowCTX.fillRect(0, 0, i.mDIM.width, i.mDIM.height)
        },
        cNS: function(e) { var t; for (t in e.n = document.createElementNS("http://www.w3.org/2000/svg", e.n), e.v) e.n.setAttributeNS(null, t.replace(/[A-Z]/g, function(e, t, i, a) { return "-" + e.toLowerCase() }), e.v[t]); for (t in void 0 !== e.c && e.n.setAttribute("class", e.c), void 0 !== e.id && (e.n.id = e.id), void 0 !== e.t && (e.n.textContent = e.t), e.s) e.s.hasOwnProperty(t) && (e.n.style[t] = e.s[t]); return e.n },
        rgbToHex: function(e) { return "#" + c(e[0]) + c(e[1]) + c(e[2]) },
        getSVGGradient: function(e) {
            if (void 0 === e) return e;
            if (_R_is_Editor && (e = RSColor.convert(e)), -1 == e.indexOf("gradient")) return e;
            var i = t.getGradients(e);
            void 0 === t.gradSVG && (t.gradSVG = t.cNS({ n: "svg", id: "tp_svg_gradients", s: { width: "100%", height: "100%", opacity: 0, pointerEvents: "none" } }), t.gradSVG.setAttribute("viewBox", "0 0 1 1"), t.gradSVG.setAttribute("preserveAspectRatio", "none"), document.body.appendChild(t.gradSVG), t.svgGradients = []);
            for (var a = !1, r = JSON.stringify(e), o = 0; o < t.svgGradients.length; o++) a || t.svgGradients[o].src == r && (a = !0, e = t.svgGradients[o].url);
            if (!a) {
                var s, n, d, l = "radialGradient" === i.type ? 0 : i.deg * (Math.PI / 180),
                    c = "radialGradient" === i.type ? 0 : { x1: Math.round(50 + 50 * Math.sin(l)) + "%", y1: Math.round(50 + 50 * Math.cos(l)) + "%", x2: Math.round(50 + 50 * Math.sin(l + Math.PI)) + "%", y2: Math.round(50 + 50 * Math.cos(l + Math.PI)) + "%" };
                d = t.cNS({ n: i.type, id: "tp_svg_gradient_" + t.svgGradients.length, v: "radialGradient" === i.type ? void 0 : { gradientUnits: "userSpaceOnUse", x1: c.x1, y1: c.y1, x2: c.x2, y2: c.y2 } });
                for (var p = 0; p <= i.stops.length / 2; p += 2) n = tpGS.gsap.utils.splitColor(i.stops[p]), s = t.cNS({ n: "stop", v: { offset: 100 * i.stops[p + 1] + "%", stopColor: t.rgbToHex(n), stopOpacity: n.length > 3 ? n[3] : 1 } }), d.appendChild(s);
                t.gradSVG.appendChild(d), e = "url(#tp_svg_gradient_" + t.svgGradients.length + ")", t.svgGradients.push({ url: e, src: r, g: d })
            }
            return e
        },
        getGradients: function(e) { return e.indexOf("radial-gradient") >= 0 ? { stops: t.getGradientColorStopPoints(e.split("radial-gradient(ellipse at center, ")[1]), type: "radialGradient", deg: 0 } : -1 !== e.indexOf("gradient") ? t.getLinearGradientStops(e) : e },
        getLinearGradientStops: function(e) {
            var t = e.split("linear-gradient(")[1];
            _R_is_Editor && (t = (t = t.split(", ").join(",")).split(",rgba").join(", rgba"));
            var i = t.split("deg, ");
            for (var a in t = (i.length > 1 ? i[1] : i[0]).split(" "), i = i.length > 1 ? i[0] : 180, t) t.hasOwnProperty(a) && t[a].indexOf("%") >= 0 && (t[a] = "" + Math.round(100 * parseFloat(t[a].split("%,")[0].split("%)")[0])) / 1e4);
            return { stops: t, deg: i, type: "linearGradient" }
        },
        getGradientColorStopPoints: function(e) {
            var t = /rgb([\s\S]*?)%/g,
                i = [],
                a = [];
            do {
                (o = t.exec(e)) && i.push(o[0])
            } while (o);
            for (var r = 0; r < i.length; r++) {
                var o = i[r],
                    s = (e = /rgb([\s\S]*?)\)/.exec(o), /\)([\s\S]*?)%/.exec(o));
                e[0] && (e = e[0]), s[1] && (s = s[1]), a.push(e), a.push(parseFloat(s) / 100)
            }
            return a
        },
        calcLinearGradient: function(e, t, i, a) {
            a = a * Math.PI / 180 + Math.PI / 2;
            for (var r, o, s, n, d = t / 2, l = i / 2, c = Math.sqrt(d * d + l * l), p = { x1: Math.cos(a) * c + d, y1: Math.sin(a) * c + l, x2: d, y2: l }, m = [u({ x: 0, y: 0 }, a), u({ x: t, y: 0 }, a), u({ x: t, y: i }, a), u({ x: 0, y: i }, a)], v = [], f = 0; f < m.length; f++) v.push(h(m[f], p));
            if (g(d, l, v[0].x, v[0].y) > g(d, l, v[1].x, v[1].y) ? (r = v[0].x, o = v[0].y) : (r = v[1].x, o = v[1].y), g(d, l, v[2].x, v[2].y) > g(d, l, v[3].x, v[3].y) ? (s = v[2].x, n = v[2].y) : (s = v[3].x, n = v[3].y), Math.round(100 * Math.atan2(l - o, d - r)) / 100 === Math.round(a % (2 * Math.PI) * 100) / 100) {
                var y = r,
                    b = o;
                r = s, o = n, s = y, n = b
            }
            return e.createLinearGradient(Math.round(r), Math.round(o), Math.round(s), Math.round(n))
        },
        transitions: {
            filter: {
                update: function(e, t, i) {
                    if (void 0 !== e && void 0 !== e.tl) {
                        var a = void 0 !== i || void 0 !== e.tl.blur ? " blur(" + (void 0 !== i ? i : 0 + e.tl.blur !== void 0 ? e.tl.blur : 0) + "px)" : "";
                        t.canvas.style.filter = void 0 === e.tl.filter ? "" + a : e.tl.filter + a
                    }
                },
                extendTimeLine: function(e, t, i) {
                    if (null != t) {
                        var a = void 0 !== t.g && "0%" !== t.g && 0 !== t.g ? ("" === a ? "" : " ") + "grayscale(_g_%)" : "";
                        a += void 0 !== t.h && "100%" !== t.h && 100 !== t.h ? ("" === a ? "" : " ") + "brightness(_h_%)" : "", a += void 0 !== t.s && "0px" !== t.s && 0 !== t.s ? ("" === a ? "" : " ") + "sepia(_s_%)" : "", a += void 0 !== t.c && 100 !== t.c ? ("" === a ? "" : " ") + "contrast(_c_%)" : "", "" !== (a += void 0 !== t.i && 0 !== t.i ? ("" === a ? "" : " ") + "invert(_i_%)" : "") && (t.tl = { filter: a.replace("_g_", parseFloat(t.g)).replace("_h_", parseFloat(t.h)).replace("_s_", parseFloat(t.s)).replace("_c_", parseFloat(t.c)).replace("_i_", parseFloat(t.i)) }), void 0 !== t.b && "0px" !== t.b && 0 !== t.b && (void 0 === t.tl ? t.tl = { blur: parseFloat(t.b) } : t.tl.blur = parseFloat(t.b)), void 0 !== t.tl && (e.add(tpGS.gsap.to(t.tl, t.ms / t.sec, void 0 === t.tl.filter ? { blur: 0 } : void 0 === t.tl.blur ? { filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0), ease: t.e } : { blur: 0, filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0), ease: t.e }), 0), i.canvasFilter = !0)
                    }
                }
            },
            slidingoverlay: {
                getBasic: function() { return t.getBasic({ attr: ["x", "y"], in: { m: !0, o: -1, _xy: 20, _gxys: 10, _gxye: -10, zIndex: 20, e: "power1.inOut" }, out: { m: !0, reversed: !1, _xy: -100, o: 0, zIndex: 10, e: "power1.inOut" } }) },
                updateAnim: function(e, i, a) {
                    var r = void 0 !== i.in.x && 0 !== i.in.x && "0%" !== i.in.x ? "x" : "y";
                    i.in["g" + r + "s"] = t.SATools.getOffset(i.in[r], i.in._gxys, a, 1) + "%", i.in["g" + r + "e"] = t.SATools.getOffset(i.in[r], i.in._gxye, a, 1) + "%", i.out[r] = t.SATools.getOffset(i.in[r], i.out._xy, a, 1) + "%", i.in[r] = t.SATools.getOffset(i.in[r], i.in._xy, a, 1) + "%";
                    var o = parseInt(i.in[r]) >= 0;
                    return i.in.d = "x" === r ? o ? "left" : "right" : o ? "up" : "down", i
                },
                beforeDraw: function(e, t, i, a) { void 0 !== i.d && (i._dxs = "right" === i.d ? 0 + i.mw : "left" === i.d ? 0 - i.mw : 0, i._dys = "down" === i.d ? 0 + i.mh : "up" === i.d ? 0 - i.mh : 0, i._xs = "left" === i.d ? 0 - i.mw : 0, i._ys = "up" === i.d ? 0 - i.mh : 0, i._xe = "right" === i.d ? a.SLOT.OW + i.mw : "left" === i.d ? a.SLOT.OW - i.mw : a.SLOT.OW, i._ye = "down" === i.d ? a.SLOT.OH + i.mh : "up" === i.d ? a.SLOT.OH - i.mh : a.SLOT.OH, t.beginPath(), t.rect("left" === i.d ? Math.max(0, i._xs) : "right" === i.d ? Math.min(0, i._xs) : 0, "up" === i.d ? Math.max(0, i._ys) : "down" === i.d ? Math.min(0, i._ys) : 0, "left" === i.d ? Math.max(a.SLOT.OW, i._xe) : "right" === i.d ? Math.min(a.SLOT.OW, i._xe) : i._xe, "up" === i.d ? Math.max(a.SLOT.OH, i._ye) : "down" === i.d ? Math.min(a.SLOT.OH, i._ye) : i._ye), t.clip()) },
                afterDraw: function(e, t, i, a, r) { void 0 !== i.d && (t.save(), t.beginPath(), t.rect(Math.max(0, i._dxs), Math.max(0, i._dys), i._xe, i._ye), t.clip(), t.save(), t.transform(r.csx, r.ssx, r.ssy, r.csy, .5 * a.SLOT.OW + i.x + i.sgx, .5 * a.SLOT.OH + i.y + i.sgy), t.drawImage(void 0 !== a.shadowCanvas ? a.shadowCanvas : a.loadobj.img, 0, 0, a.SLOT.OW, a.SLOT.OH, i.sgx - a.SLOT.OW / 2, i.sgy - a.SLOT.OH / 2, a.SLOT.OW, a.SLOT.OH), t.restore(), t.fillStyle = "rgba(0,0,0,0.6)", t.fillRect(i.gx, i.gy, a.SLOT.OW, a.SLOT.OH), t.restore()) },
                extendTimeLine: function(e, i, a, r, o, s) { "in" !== o.direction || void 0 === r.gxe && void 0 === r.gye || (jQuery.extend(!0, a[0], { d: r.d, gx: void 0 === r.gxs ? 0 : 2 * t.SATools.getOffset(r.gxs, s.width, o.sdir, 0), gy: void 0 === r.gys ? 0 : 2 * t.SATools.getOffset(r.gys, s.height, o.sdir, 0), sgx: void 0 === r.gxs ? 0 : t.SATools.getOffset(r.gxs, s.width, o.sdir, 0), sgy: void 0 === r.gys ? 0 : t.SATools.getOffset(r.gys, s.height, o.sdir, 0), mw: 0 - s.width, mh: 0 - s.height }), i.add(tpGS.gsap.to(a, r.ms / r.sec, { gx: void 0 === r.gxe ? 0 : 2 * t.SATools.getOffset(r.gxe, s.width, o.sdir, 0), gy: void 0 === r.gye ? 0 : 2 * t.SATools.getOffset(r.gye, s.height, o.sdir, 0), sgx: void 0 === r.gxe ? 0 : 2 * t.SATools.getOffset(r.gxe, s.width, o.sdir, 0), sgy: void 0 === r.gye ? 0 : 2 * t.SATools.getOffset(r.gye, s.height, o.sdir, 0), mw: s.width, mh: s.height, ease: r.e }), 0)) }
            },
            motionFilter: { init: function(e, t) { return void 0 !== t && parseFloat(t) > 0 ? (t = parseFloat(t), e.fmExists = !0, e.fmShadow = void 0 === e.fmShadow ? document.createElement("canvas") : e.fmShadow, e.fmCtx = e.fmShadow.getContext("2d"), e.fmShadow.width = e.ctx.canvas.width, e.fmShadow.height = e.ctx.canvas.height, e.fmCtx.globalAlpha = tpGS.gsap.utils.mapRange(100, 0, 40, 0, t) / 100, e.fmCtx.clearRect(0, 0, e.ctx.canvas.width, e.ctx.canvas.height)) : e.fmExists = !1, t }, render: function(e, t) { "partial" === t && (e.fmCtx.globalCompositeOperation = "source-over"), e.fmCtx.drawImage(e.canvas, 0, 0, e.canvas.width, e.canvas.height), e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.ctx.drawImage(e.fmCtx.canvas, 0, 0, e.canvas.width, e.canvas.height), "partial" === t && (e.fmCtx.globalCompositeOperation = "source-atop"), "partial" !== t && "full" !== t || (e.fmCtx.fillStyle = "rgba(255, 255, 255, 0.1)", e.fmCtx.fillRect(0, 0, e.canvas.width, e.canvas.height)) }, clearFull: function(e, t) { e.fmExists && void 0 !== e.fmCtx && (e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fmCtx.clearRect(0, 0, e.canvas.width, e.canvas.height), void 0 !== t && t.render(t.time(), !0, !0)) }, complete: function(e) { e.fmShadow && e.fmShadow.remove() } },
            d3: {
                ticker: function(e, t, i) {
                    if (void 0 !== e.helper) {
                        var a = e.smi * ("in" === i ? e.helper.oo : e.helper.o),
                            r = e.sma * ("in" === i ? e.helper.oo : e.helper.o);
                        if (e.gradient = "vertical" === e.d ? "in" === i ? t.ctx.createLinearGradient(0, 0, 0, t.canvas.height) : t.ctx.createLinearGradient(0, t.canvas.height, 0, 0) : "in" === i ? t.ctx.createLinearGradient(0, 0, t.canvas.width, 0) : t.ctx.createLinearGradient(t.canvas.width, 0, 0, 0), e.gradient.addColorStop(0, "rgba(" + e.sc + "," + a + ")"), e.gradient.addColorStop(e.sl, "rgba(" + e.sc + "," + r + ")"), t.ctx.fillStyle = e.gradient, t.ctx.fillRect(0, 0, t.canvas.width, t.canvas.height), void 0 !== t.cube && t.cube.ctx) {
                            var o = void 0 !== e.roomhelper && !1 !== e.roomhelper && (90 - e.roomhelper.r) / 90;
                            a = !1 !== o ? o : e.smi * e.helper.o, r = !1 !== o ? o : e.sma * e.helper.o, t.cube.ctx.clearRect(0, 0, t.cube.ctx.canvas.width, t.cube.ctx.canvas.height), e.gradientW = !1 !== o ? "vertical" === e.d ? e.t < 0 && 1 === e.sdir || e.t > 0 && -1 === e.sdir ? t.ctx.createRadialGradient(0, t.cube.ctx.canvas.width / 2, 0, 0, 0, 2 * t.cube.ctx.canvas.width) : t.ctx.createRadialGradient(t.cube.ctx.canvas.width, 0, 0, 0, 0, 2 * t.cube.ctx.canvas.width) : e.t > 0 && 1 === e.sdir || e.t < 0 && -1 === e.sdir ? t.ctx.createRadialGradient(t.cube.ctx.canvas.width / 2, t.cube.ctx.canvas.height, 0, t.cube.ctx.canvas.width / 2, t.cube.ctx.canvas.height, t.cube.ctx.canvas.width) : t.ctx.createRadialGradient(t.cube.ctx.canvas.width / 2, .2 * t.cube.ctx.canvas.height, 0, t.cube.ctx.canvas.width / 2, .2 * t.cube.ctx.canvas.height, t.cube.ctx.canvas.width) : "vertical" === e.d ? t.ctx.createLinearGradient(0, 0, 0, t.cube.ctx.canvas.height) : t.ctx.createLinearGradient(0, 0, t.cube.ctx.canvas.width, 0), e.gradientW.addColorStop(0, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? r : 0 : "a" === e.DIR ? 0 : r) + ")"), e.gradientW.addColorStop(1, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? 0 : r : "a" === e.DIR ? r : 0) + ")"), t.cube.ctx.fillStyle = e.gradientW, t.cube.ctx.fillRect(0, 0, t.cube.ctx.canvas.width, t.cube.ctx.canvas.height)
                        }
                    }
                },
                setWall: function(e, t, i, a, r, o) { return e.TL = tpGS.gsap.timeline(), e.TL.add(tpGS.gsap.to(e.c, .2, { display: "block" }), 0), "rotationX" === i ? (e.ctx.canvas.width = a.w, e.ctx.canvas.height = a.w, e.TL.add(tpGS.gsap.set(e.w, { backgroundColor: r, width: a.w, height: a.w, transformOrigin: "50% 50% -" + a.w / 2 + "px", x: 0, y: t > 0 ? -(a.w - a.h) : 0, rotationX: t > 0 ? -90 : 90, rotationY: 0 }), 0)) : (e.ctx.canvas.width = o ? a.w : a.h, e.ctx.canvas.height = a.h, e.TL.add(tpGS.gsap.set(e.w, { backgroundColor: r, width: o ? a.w : a.h, height: a.h, transformOrigin: "50% 50% -" + (o ? a.w : a.h) / 2 + "px", x: t < 0 ? a.w - a.h : 0, y: 0, rotationX: 0, rotationY: t > 0 ? -90 : 90 }), 0)), e.TL },
                buildCube: function(e) { e.cube = { c: document.createElement("div"), w: document.createElement("canvas") }, e.cube.ctx = e.cube.w.getContext("2d"), e.cube.c.className = "rs_fake_cube", e.cube.w.className = "rs_fake_cube_wall", tpGS.gsap.set(e.cube.c, { width: e.mDIM.w, height: e.mDIM.h }), tpGS.gsap.set(e.cube.w, { width: e.mDIM.w, height: e.mDIM.h, backgroundColor: "#ccc" }), e.cube.c.appendChild(e.cube.w), e.sbg.appendChild(e.cube.c) },
                cubeTL: function(e, i, a, r) {
                    if ("none" !== i.f && void 0 !== i.f) {
                        a.sbg.style.transformStyle = "preserve-3d";
                        var o = tpGS.gsap.timeline(),
                            s = "incube" === i.f ? 1 : -1,
                            n = "incube" === i.f || "cube" === i.f,
                            d = "fly" === i.f ? -30 : 90,
                            l = "turn" !== i.f && !1 !== i.t && (_R_is_Editor || !0 === t[e].firstSlideAnimDone),
                            c = -1 * i.z,
                            p = {},
                            g = { z: l ? 0 : c, ease: "power1.inOut" },
                            u = { ease: i.e },
                            h = [a.canvas],
                            m = n ? "50% 50% " : "20% 20% ",
                            v = "rotationX",
                            f = "rotationY",
                            y = "y",
                            b = "height",
                            w = i.fd;
                        if ("vertical" !== i.d ? (v = "rotationY", f = "rotationX", y = "x", b = "width", i.DIR = 1 === i.sdir ? "b" : "a") : i.DIR = 1 === i.sdir ? "a" : "b", b = "width" === b ? "w" : "height" === b ? "h" : b, "turn" === i.f ? (d = "vertical" === i.d ? -120 : 120, m = "vertical" === i.d ? 1 === i.sdir ? "in" === r ? "0% 0% 0%" : "0% 100% 0%" : "in" === r ? "0% 100% 0%" : "0% 0% 0%" : 1 === i.sdir ? "in" === r ? "0% 0% 0%" : "100% 0% 0%" : "in" === r ? "100% 0% 0%" : "0% 0% 0%", g.z = 0, u.ease = "out" === r ? "power3.out" : u.ease, w = "out" === r ? w / 2 : w) : m += s * a.mDIM[b] / 2 + "px", u[v] = 0, u[y] = 0, "in" === r ? p[v] = d * i.sdir : u[v] = -d * i.sdir, "fly" === i.f) { var _ = void 0 === i.fz ? 20 * Math.random() - 10 : parseInt(i.fz); "in" === r ? (p[y] = a.mDIM[b] * (void 0 === i.fdi ? 1.5 : parseFloat(i.fdi)) * i.sdir, p.rotateZ = i.sdir * _, u.rotateZ = 0) : (u[y] = a.mDIM[b] * (void 0 === i.fdo ? 2 : parseFloat(i.fdo)) * i.sdir * -1, u.rotateZ = i.sdir * _ * -1) }
                        if (a.sbg.style.perspective = l ? "2500px" : "1500px", l) {
                            var S = { z: c * ("fly" === i.f ? 1.5 : 3), ease: "power1.inOut" },
                                x = { z: 0, ease: "power1.inOut" };
                            S[f] = -1 * i.t, x[f] = 0, i.roomhelper = { r: 0 }, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], { perspective: 1200, transformStyle: "preserve-3d", transformOrigin: m }), 0), o.add(tpGS.gsap.to(a.sbg, 3 * i.md, S), 0), o.add(tpGS.gsap.to(a.sbg, 3 * i.md, x), w - i.md), o.add(tpGS.gsap.to(i.roomhelper, 3 * i.md, { r: Math.abs(i.t) }), 0), o.add(tpGS.gsap.to(i.roomhelper, 3 * i.md, { r: 0 }), w - i.md), "in" === r && 1 !== s && n && (void 0 === a.cube && t.transitions.d3.buildCube(a), o.add(t.transitions.d3.setWall(a.cube, S[f], f, a.mDIM, i.c), 0), h.push(a.cube.c))
                        } else i.roomhelper = !1, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], { perspective: "none", transformStyle: "none", transformOrigin: "50% 50%" }), 0), !_R_is_Editor && !0 !== t[e].firstSlideAnimDone && n && (void 0 === a.cube && t.transitions.d3.buildCube(a), o.add(t.transitions.d3.setWall(a.cube, p[v], v, a.mDIM, i.c, !0), 0), o.add(tpGS.gsap.fromTo(a.cube.w, 4 * i.md, { opacity: 0 }, { opacity: 1 }), 0), h.push(a.cube.c));
                        return i.helper = { o: 0, oo: 1 }, o.add(tpGS.gsap.to(i.helper, w, { o: 1, oo: 0, ease: i.e }), i.md + 0), o.add(tpGS.gsap.set(h, jQuery.extend(!0, {}, p, { force3D: !0, transformOrigin: m })), 0), "turn" !== i.f && o.add(tpGS.gsap.to(h, 3 * i.md, g), 0), o.add(tpGS.gsap.to(h, w, u), i.md + 0), "turn" !== i.f && o.add(tpGS.gsap.to(h, 3 * i.md, { z: 0, ease: "power1.inOut" }), w - i.md), "out" === r && 1 !== s && o.add(tpGS.gsap.to(h, 2 * i.md, { opacity: 0 }), i.dur - 2 * i.md), o
                    }
                }
            }
        },
        animatedCanvasUpdate: function(e, i) { i.cDIMS = t.getBGCanvasDetails(e, i), i.canvas.style.backgroundColor = "transparent", i.canvas.style.opacity = 1, i.canvas.width !== i.mDIM.width && (i.canvas.width = i.mDIM.width), i.canvas.height !== i.mDIM.height && (i.canvas.height = i.mDIM.height), _R_is_Editor || !0 !== t[e].clearModalBG || (i.ctx.clearRect(0, 0, i.canvas.width, i.canvas.height), t[e].clearModalBG = !1, i.sbg.parentNode.style.opacity = 1), i.col = i.col || 1, i.row = i.row || 1, i.SLOT = jQuery.extend(!0, { s: {}, c: {} }, r(e, i.col, i.row, i.mDIM, "OW", "OH")), i.SLOT.DX = 0 - i.SLOT.OW / 2, i.SLOT.DY = 0 - i.SLOT.OH / 2, i.row = Math.ceil(i.mDIM.height / i.SLOT.OH) || 1, void 0 !== i.callFromAnimatedCanvasUpdate && i.callFromAnimatedCanvasUpdate() },
        slideAnimFinished: function(e, i, a, r) { void 0 !== i && (void 0 !== i.bgvid && i.bgvid.length > 0 && "out" === a.direction && (i.drawVideoCanvasImagesRecall = !1, t.stopVideo(i.bgvid, e), i.bgvid[0].style.display = "none", i.bgvid[0].style.zIndex = 0), "in" === a.direction && (t.transitions.motionFilter.complete(i), i.ctx.canvas.style.filter = "none", tpGS.gsap.set(a.slide, { zIndex: 20 }), delete i.animateDirection, i.bgvid.length > 0 && (i.isHTML5 || (t.resetVideo(i.bgvid, e), t.playVideo(i.bgvid, e, !0)), tpGS.gsap.to(i.bgvid[0], .001, { zIndex: 30, display: "block", opacity: 1 }))), "out" === a.direction ? (tpGS.gsap.set(a.slide, { zIndex: 10 }), tpGS.gsap.set(i.canvas, { rotationX: 0, rotationY: 0, rotationZ: 0, x: 0, y: 0, z: 0, opacity: 1 }), i.currentState = void 0) : i.currentState = "idle", void 0 !== i.cube && (i.cube.c.style.display = "none"), "in" === a.direction && (t.updateSlideBGs(e, i.skeyindex, i), void 0 === i.panzoom || _R_is_Editor || t.startPanZoom(t[e].pr_next_bg, e, void 0 !== t[e].panzoomTLs[i.skeyindex] ? t[e].panzoomTLs[i.skeyindex].progress() : 0, i.skeyindex, "play", i.key), void 0 !== a.BG && !0 !== r && a.BG.ctx.clearRect(0, 0, 2 * i.canvas.width, 2 * i.canvas.height))) },
        animateCore: function(e, i, a, r) {
            var o, s, n, d, l = i.canvas,
                c = i.ctx,
                p = 0;
            if (i.col = a.col, i.row = a.row, _R_is_Editor && i.three) {
                for (i.canvas.style.display = "block"; i.three.scene.children.length > 0;) i.three.scene.remove(i.three.scene.children[0]);
                i.three.canvas.parentNode.removeChild(i.three.canvas), i.three = void 0
            }
            t.animatedCanvasUpdate(e, i), a.row = i.row, i.animateDirection = r.direction, r.delay = void 0 === r.delay ? 0 : r.delay, n = a.col * a.row, d = Array(n), void 0 === i.help_canvas && "out" === r.direction && void 0 !== r.bgColor && (i.help_canvas = document.createElement("canvas"), i.help_ctx = i.help_canvas.getContext("2d")), "out" === r.direction && void 0 !== r.bgColor && (i.help_canvas.width = i.mDIM.width, i.help_canvas.height = i.mDIM.height, i.help_ctx.fillStyle = r.bgColor, i.help_ctx.fillRect(0, 0, i.mDIM.width, i.mDIM.height)), a.mo = t.transitions.motionFilter.init(i, a.mo), a.dur = a.ms / a.sec, void 0 !== r.d3 && (r.d3.dur = a.dur, r.d3.fd = .7 * a.dur, r.d3.md = .15 * a.dur, r.d3.sdir = r.sdir), i.SLOT.c = { ws: 0, hs: 0, wd: 0, hd: 0 }, a.mo > 0 && _R_is_Editor && c.clearRect(0, 0, l.width, l.height);
            var g = tpGS.gsap.timeline({
                onUpdate: function() {
                    if (p = 0, a.mo > 0 ? t.transitions.motionFilter.render(i, a.moo) : c.clearRect(0, 0, l.width, l.height), i.help_canvas && "out" === r.direction && c.drawImage(i.help_canvas, 0, 0), (r.filter && r.filter.u || !_R_is_Editor) && t.transitions.filter.update(r.filter, c, i.canvasFilterBlur), _R_is_Editor && 0 !== a.zIndex && void 0 !== a.zIndex && tpGS.gsap.set(r.slide, { zIndex: a.zIndex }), void 0 !== i.shadowCanvas)
                        for (o = 0; o < a.col; o++)
                            for (i.SLOT.SX = i.SLOT.OW * o, i.SLOT.tw = i.SLOT.OW * (o + .5), i.SLOT.c.wd = i.mDIM.width - (i.SLOT.tw + i.SLOT.DX + i.SLOT.OW), i.SLOT.c.wd = i.SLOT.c.wd < 0 ? i.SLOT.c.wd : 0, i.SLOT.DW = i.SLOT.SW = i.SLOT.OW + i.SLOT.c.wd, s = 0; s < a.row; s++) {
                                c.save();
                                var n = -Math.PI / 180 * d[p].r,
                                    g = 0 !== a.r ? Math.cos(n) * d[p].sx : d[p].sx,
                                    u = 0 !== a.r ? Math.cos(n) * d[p].sy : d[p].sy,
                                    h = 0 !== a.r ? Math.sin(n) * d[p].sx : 0,
                                    m = 0 !== a.r ? Math.sin(n) * -d[p].sy : 0;
                                i.SLOT.SY = i.SLOT.OH * s, i.SLOT.th = i.SLOT.OH * (s + .5), t.transitions[r.effect] && t.transitions[r.effect].beforeDraw && t.transitions[r.effect].beforeDraw(e, c, d[p], i), a.m && (c.beginPath(), c.rect(i.SLOT.OW * o, i.SLOT.OH * s, i.SLOT.OW, i.SLOT.OH), c.clip()), c.transform(g, h, m, u, i.SLOT.tw + d[p].x, i.SLOT.th + d[p].y), c.globalAlpha = Math.max(0, d[p].o), i.SLOT.c.hd = i.mDIM.height - (i.SLOT.th + i.SLOT.DY + i.SLOT.OH), i.SLOT.c.hd = i.SLOT.c.hd < 0 ? i.SLOT.c.hd : 0, i.SLOT.DH = i.SLOT.SH = i.SLOT.OH + i.SLOT.c.hd, i.SLOT.SW > 1 && i.SLOT.SH > 1 && c.drawImage(i.shadowCanvas, i.SLOT.SX, i.SLOT.SY, i.SLOT.SW, i.SLOT.SH, i.SLOT.DX, i.SLOT.DY, i.SLOT.DW, i.SLOT.DH), c.restore(), t.transitions[r.effect] && t.transitions[r.effect].afterDraw && t.transitions[r.effect].afterDraw(e, c, d[p], i, { csx: g, csy: u, ssx: h, ssy: m }), p++
                            }
                    void 0 !== r.d3 && r.d3.su && t.transitions.d3.ticker(r.d3, i, r.direction), i.currentState = "animating"
                },
                onComplete: function() { t.slideAnimFinished(e, i, r) }
            });
            if (a.col * a.row < 2 && (a.f = "start"), 0 !== a.zIndex && void 0 !== a.zIndex && g.add(tpGS.gsap.set(r.slide, { zIndex: parseInt(a.zIndex, 0) }), 0), a.m = "false" != a.m && !1 !== a.m, "in" === r.direction) {
                for (o = 0; o < n; o++) d[o] = { x: t.SATools.getOffset(a.x, a.m ? i.SLOT.OW : i.mDIM.width, r.sdir, o), y: t.SATools.getOffset(a.y, a.m ? i.SLOT.OH : i.mDIM.height, r.sdir, o), o: t.SATools.getSpecialValue(a.o, o, r.sdir), sx: t.SATools.getSpecialValue(a.sx, o, r.sdir), sy: t.SATools.getSpecialValue(a.sy, o, r.sdir), r: 0 !== a.r ? t.SATools.getSpecialValue(a.r, o, r.sdir) : 0 };
                g.add(tpGS.gsap.to(d, a.dur, { o: 1, sx: 1, sy: 1, r: 0, x: 0, y: 0, ease: a.e, stagger: { amount: "nodelay" === a.f ? 0 : a.ms / a.stasec, grid: [a.col, a.row], from: "nodelay" === a.f ? "start" : a.f } }), r.delay), void 0 !== r.d3 && g.add(t.transitions.d3.cubeTL(e, r.d3, i, "in"), 0), t.transitions.filter.extendTimeLine(g, r.filter, i)
            } else {
                for (o = 0; o < n; o++) d[o] = { x: 0, y: 0, o: 1, sx: 1, sy: 1, r: 0 };
                g.add(tpGS.gsap.to(d, a.dur, { o: function(e) { return t.SATools.getSpecialValue(a.o, e, r.sdir) }, sx: function(e) { return t.SATools.getSpecialValue(a.sx, e, r.sdir) }, sy: function(e) { return t.SATools.getSpecialValue(a.sy, e, r.sdir) }, r: 0 !== a.r && void 0 !== a.r ? function(e) { return t.SATools.getSpecialValue(a.r, e, r.sdir) } : 0, x: function(e) { return t.SATools.getOffset(a.x, a.m ? i.SLOT.OW : i.mDIM.width, r.sdir, e) * (a.reversed ? -1 : 1) }, y: function(e) { return t.SATools.getOffset(a.y, a.m ? i.SLOT.OH : i.mDIM.height, r.sdir, e) * (a.reversed ? -1 : 1) }, ease: a.e, stagger: { amount: "nodelay" === a.f ? 0 : a.ms / a.stasec, grid: [a.col, a.row], from: "nodelay" === a.f ? "start" : a.f } }), r.delay + (void 0 !== a.outdelay ? a.outdelay : 0)), void 0 !== r.d3 && g.add(t.transitions.d3.cubeTL(e, r.d3, i, "out"), 0)
            }
            t.transitions[r.effect] && t.transitions[r.effect].extendTimeLine && t.transitions[r.effect].extendTimeLine(e, g, d, a, r, i.mDIM), _R_is_Editor ? RVS.TL[RVS.S.slideId].slide.add(g, 0) : t[e].mtl.add(g, r.delay)
        }
    });
    var a = function(e, i) { return void 0 !== i && t.isNumeric(i) ? parseFloat(i, 0) : null == i || "default" === i || "d" === i ? e : i },
        r = function(e, t, i, a, r, o) { var s = {}; return s[r] = Math.ceil(a.width / t), s[o] = (_R_is_Editor, Math.ceil(a.height / i)), s },
        o = function(e) { return null == e || 0 === e || NaN === e ? 1 : e },
        s = function(e, r) {
            _R_is_Editor || (t[e].duringslidechange = !0);
            var s, n = _R_is_Editor ? -1 : "arrow" == t[e].sc_indicator ? void 0 === t[e].sc_indicator_dir ? t[e].sdir : t[e].sc_indicator_dir : t[e].sdir,
                l = !!_R_is_Editor || void 0 !== t[e].pr_next_bg && t[e].pr_next_bg.length > 0 && void 0 !== t[e].pr_next_bg[0],
                c = !!_R_is_Editor || void 0 !== t[e].pr_active_bg && t[e].pr_active_bg.length > 0 && void 0 !== t[e].pr_active_bg[0],
                g = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n : l ? t[e].sbgs[t[e].pr_next_bg[0].dataset.key] : void 0,
                u = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c : c ? t[e].sbgs[t[e].pr_active_bg[0].dataset.key] : void 0;
            n = 1 === n ? -1 : 1, s = jQuery.extend(!0, {}, function(e, i, r) {
                var s = void 0 !== t.transitions[i.anim.e] && void 0 !== t.transitions[i.anim.e].getBasic ? t.transitions[i.anim.e].getBasic() : t.getBasic(),
                    n = "";
                s.out = null == s.out ? {} : s.out, s.out.reversed = void 0 === i.out && (void 0 === s.out.reversed || s.out.reversed);
                void 0 !== i.iw && parseInt(i.iw, 0), void 0 !== i.ow && parseInt(i.ow, 0);
                for (var d in s.attr) n = s.attr[d], s.in[n] = a(s.in[n], i.in[n]), s.out[n] = s.out.reversed ? s.in[n] : void 0 === i.out ? s.out[n] : a(s.out[n], i.out[n]);
                return s.filter = void 0 !== i.filter ? jQuery.extend(!0, i.filter, i.filter) : s.filter, t.transitions[i.anim.e] && t.transitions[i.anim.e].updateAnim && (s = t.transitions[i.anim.e].updateAnim(e, s, r)), s.e = i.anim.e, void 0 !== s.in && (s.in.col = "random" === s.in.col ? tpGS.gsap.utils.random(1, 10, 1) : o(s.in.col), s.in.row = "random" === s.in.row ? tpGS.gsap.utils.random(1, 10, 1) : o(s.in.row)), void 0 !== s.out && (s.out.col = "random" === s.out.col ? tpGS.gsap.utils.random(1, 10, 1) : o(s.out.col), s.out.row = "random" === s.out.row ? tpGS.gsap.utils.random(1, 10, 1) : o(s.out.row)), s
            }(e, r, n)), void 0 !== g.random && void 0 !== t.SLTR && void 0 !== u && (delete u.help_canvas, delete u.help_ctx), s.ms = a(void 0, void 0 === r.anim.ms ? 1e3 : r.anim.ms), s.f = a(void 0, r.anim.f), s.p = a(void 0, r.anim.p), s.d = a(void 0, r.anim.d), s.o = r.anim.o, void 0 !== r.d3 && (r.d3.t = void 0 !== r.d3.t && 0 !== r.d3.t && r.d3.t, r.d3.su = "true" == r.d3.su || 1 == r.d3.su, r.d3.su && (r.d3.smi = void 0 === r.d3.smi ? 0 : parseFloat(r.d3.smi), r.d3.sl = void 0 === r.d3.sl ? 1 : parseFloat(r.d3.sl), r.d3.sma = void 0 === r.d3.sma ? .5 : parseFloat(r.d3.sma), r.d3.sc = void 0 === r.d3.sc ? "0,0,0" : tpGS.gsap.utils.splitColor(r.d3.sc).join(",")), s.p = "none", void 0 !== s.in.row && void 0 !== s.in.col && s.in.row * s.in.col > 200 && (s.filter = void 0)), s.in.sec = void 0 === s.in.sec ? 1e3 : s.in.sec, s.in.stasec = void 0 === s.in.stasec ? void 0 === s.d ? 1500 : 100 * s.d : s.in.stasec, s.in.ms = "default" === s.ms || "d" === s.ms ? s.in.ms : "random" === s.ms ? Math.round(1e3 * Math.random() + 300) : null != s.ms ? parseInt(s.ms, 0) : s.in.ms, s.out.ms = s.in.ms, void 0 !== s.filter && (s.filter.ms = s.in.ms, s.filter.sec = s.in.sec, s.filter.e = void 0 === s.filter.e || "default" === s.filter.e ? s.in.e : s.filter.e), s.in.f = void 0 === s.f || "default" === s.f || "d" === s.f ? s.in.f : s.f, s.in.f = "slidebased" === s.in.f ? 1 == n ? "start" : "end" : "oppslidebased" === s.in.f ? 1 === n ? "end" : "start" : s.in.f, s.out.f = s.in.f, s.out = jQuery.extend(!0, {}, s.in, s.out), s.in.eng = s.out.eng = r.anim.eng, void 0 !== s.p && "none" !== s.p && (s.in.bg = "dark" === s.p ? "#000" : "light" === s.p ? "#fff" : "transparent", s.out.delay = "none" !== s.p ? function(e, t) { return e / 2.5 } : 0, 1 === s.out.o && 0 === s.out.x && 0 === s.out.y && (s.out.o = 0)), "forceinout" === s.o ? (s.in.zIndex = 20, s.out.zIndex = 10) : "outin" !== s.o && (1 !== s.in.o || 0 !== s.in.x || 0 !== s.in.y || void 0 === r.out || 1 === s.out.o && 0 === s.out.x && 0 === s.out.y) || (s.in.zIndex = 10, s.out.zIndex = 20), g.bgvid.length > 0 && (s.in = p(e, s.in, g, "in")), c && void 0 !== u.bgvid && u.bgvid.length > 0 && (s.out = p(e, s.out, u, "out")), void 0 !== s.out && (s.out.simplify || s.in.simplify) && (s.out = d(s.out)), s.in.simplify && (s.in = d(s.in)), _R_is_Editor || requestAnimationFrame(function() { t.generalObserver(i, !0) }), s.in.eng = void 0 === s.in.eng ? "animateCore" : s.in.eng, s.out.eng = void 0 === s.out.eng ? "animateCore" : s.out.eng, c && !0 !== s.out.skip && t[s.out.eng](e, u, s.out, { effect: s.e, slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : t[e].pr_active_slide, direction: "out", delay: 0, bgColor: s.in.bg, sdir: n, filter: void 0, d3: r.d3, addOns: _R_is_Editor ? r.addOns : void 0 }), !0 !== s.in.skip && t[s.in.eng](e, g, s.in, { effect: s.e, slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n.sbg : t[e].pr_next_slide, direction: "in", delay: c ? "function" == typeof s.out.delay ? s.out.delay(s.in.ms / 1e3, s.out.row * s.out.col) : s.out.delay : s.in.delay, BG: u, outslide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : t[e].pr_active_slide, sdir: n, filter: s.filter, d3: r.d3, addOns: _R_is_Editor ? r.addOns : void 0 })
        },
        n = function(e, i, a) {
            var r = e.height / e.width;
            if (a.ratio = a.conth / a.contw, a.ratio < r && "contain" === i.bgfit || a.ratio > r && "cover" === i.bgfit) a.height = e.width * a.ratio;
            else if (a.ratio > r && "contain" === i.bgfit || a.ratio < r && "cover" === i.bgfit) a.width = e.width * r / a.ratio;
            else if (a.ratio !== r || "contain" !== i.bgfit && "cover" !== i.bgfit) {
                var o = i.bgfit.split(" ");
                1 === o.length && (o[1] = o[0]), a.width = "auto" === o[0] ? a.contw : e.width * (parseInt(o[0], 0) / 100), a.height = "auto" === o[1] ? a.conth : a.width * a.ratio, i.usepattern = !0
            } else a.width = e.width;
            var s = function(e, i, a) { return 1 === (a = a.split(" ")).length && (a[1] = a[0]), { x: "center" === a[0] || "50%" === a[0] ? (e.width - i.width) / 2 : "left" === a[0] ? 0 : "right" === a[0] ? e.width - i.width : t.isNumeric(a[0]) ? 0 : a[0].indexOf("%") >= 0 ? parseInt(a[0], 0) / 100 * e.width - parseInt(a[0], 0) / 100 * i.width : parseInt(a[0], 0), y: "center" === a[1] || "50%" === a[1] ? (e.height - i.height) / 2 : "top" === a[1] ? 0 : "bottom" === a[1] ? e.height - i.height : t.isNumeric(a[1]) ? 0 : a[1].indexOf("%") >= 0 ? parseInt(a[1], 0) / 100 * e.height - parseInt(a[1], 0) / 100 * i.height : parseInt(a[1], 0) } }(e, a, i.bgposition);
            return a.x = s.x, a.y = s.y, a
        },
        d = function(e) { return e.o = 0, e.r = 0, e.row = 1, e.col = 1, e.x = 0, e.y = 0, e.sx = 1, e.sy = 1, e },
        l = function(e) { return e = "false" !== e && !1 !== e && "off" !== e && void 0 !== e && 0 !== e && -1 !== e },
        c = function(e) { var t = e.toString(16); return 1 == t.length ? "0" + t : t },
        p = function(e, i, a, r) { return i.skip = !1, "in" === r ? a.isHTML5 ? (a.bgvid[0].style.display = "none", t.resetVideo(a.bgvid, e), a.animateDirection = "in", a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, t.updateVideoFrames(e, a, !0), t.playVideo(a.bgvid, e)) : (t[e].videos[a.bgvid[0].id].pauseCalled = !1, i.waitToSlideTrans = t[e].videos[a.bgvid[0].id].waitToSlideTrans, !0 !== a.poster ? (t.resetVideo(a.bgvid, e), t[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, !0 !== i.waitToSlideTrans && t.playVideo(a.bgvid, e, !0), tpGS.gsap.fromTo(a.bgvid, i.ms / i.sec, { zIndex: 30, display: "block", opacity: 0 }, { opacity: 1, zIndex: 30, display: "block" }), a.loadobj.bgColor = !0, a.bgcolor = "#000", i.simplify = !0) : (t[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, t.resetVideo(a.bgvid, e), t.playVideo(a.bgvid, e), a.bgvid[0].style.display = "none", a.bgvid[0].style.zIndex = 0, a.bgvid[0].style.opacity = 0)) : "out" === r && (a.isHTML5 ? (a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, t.updateVideoFrames(e, a, !0), window.requestAnimationFrame(function() { tpGS.gsap.to(a.bgvid, .1, { zIndex: 0, display: "none" }) })) : (t.stopVideo(a.bgvid, e, !0), !0 !== a.poster && (a.loadobj.bgColor = !0, a.bgcolor = "#000"))), i },
        g = function(e, t, i, a) { return Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - a, 2)) },
        u = function(e, t) { var i = t + Math.PI / 2; return { x1: e.x, y1: e.y, x2: e.x + 100 * Math.cos(i), y2: e.y + 100 * Math.sin(i) } },
        h = function(e, t) {
            var i = e.y2 - e.y1,
                a = e.x1 - e.x2,
                r = i * e.x1 + a * e.y1,
                o = t.y2 - t.y1,
                s = t.x1 - t.x2,
                n = o * t.x1 + s * t.y1,
                d = i * s - o * a;
            return 0 !== d && { x: Math.round((s * r - a * n) / d * 100) / 100, y: Math.round((i * n - o * r) / d * 100) / 100 }
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();
    t.is_android();

    function a(e) { return null == e ? -1 : t.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e }
    jQuery.extend(!0, t, {
        preLoadAudio: function(e, i) {
            t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, e.find(".rs-layer-audio").each(function() {
                var a = jQuery(this),
                    r = t[i].videos[a[0].id] = void 0 === t[i].videos[a[0].id] ? y(a.data(), "audio", t.gA(e[0], "key")) : t[i].videos[a[0].id],
                    o = {};
                0 === a.find("audio").length && (o.src = null != r.mp4 ? r.mp4 : "", o.pre = r.pload || "", this.id = void 0 === this.id || "" === this.id ? a.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, o.id = this.id, o.status = "prepared", o.start = jQuery.now(), o.waittime = void 0 !== r.ploadwait ? 1e3 * r.ploadwait : 5e3, "auto" != o.pre && "canplaythrough" != o.pre && "canplay" != o.pre && "progress" != o.pre || (void 0 === t[i].audioqueue && (t[i].audioqueue = []), t[i].audioqueue.push(o), t.manageVideoLayer(a, i, t.gA(e[0], "key"), !0)))
            })
        },
        preLoadAudioDone: function(e, i, a) {
            var r = t[i].videos[e[0].id];
            t[i].audioqueue && t[i].audioqueue.length > 0 && jQuery.each(t[i].audioqueue, function(e, t) { r.mp4 !== t.src || t.pre !== a && "auto" !== t.pre || (t.status = "loaded") })
        },
        checkfullscreenEnabled: function(e) { if (void 0 !== window.fullScreen) return window.fullScreen; if (void 0 !== document.fullscreen) return document.fullscreen; if (void 0 !== document.mozFullScreen) return document.mozFullScreen; if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen; var i = t.isWebkit() && /Apple Computer/.test(navigator.vendor) ? 42 : 5; return screen.width == t.winW && Math.abs(screen.height - t.getWinH(e)) < i },
        showVideo: function(e) { tpGS.gsap.to(e, .3, { opacity: 1, display: "block", ease: "power3.inOut" }) },
        resetVideo: function(e, a, r) {
            if ("updateAndResize" !== r) {
                var o = t[a].videos[e[0].id];
                if ("resetVideo" !== o.cRS) switch (o.cRS = "resetVideo", o.type) {
                    case "youtube":
                        o.rwd && null != o.player && void 0 !== o.player.seekTo && (o.player.seekTo(-1 == o.ssec ? 0 : o.ssec), o.player.pauseVideo()), o.bgvideo || "preset" === r || 0 != o.jsposter.length || t.showVideo(e.find("iframe"));
                        break;
                    case "vimeo":
                        void 0 !== o.vimeoplayer && o.rwd && (0 !== o.ssec && -1 !== o.ssec || o.bgvideo || o.jsposter.length > 0) && (o.vimeoplayer.setCurrentTime(-1 == o.ssec ? 0 : o.ssec), o.vimeoplayer.pause()), 0 != o.jsposter.length || o.bgvideo || "preset" === r || t.showVideo(e.find("iframe"));
                        break;
                    case "html5":
                        if (i && o.notonmobile) return !1;
                        o.bgvideo || t.showVideo(o.jvideo), o.rwd && "playing" !== o.cSS && !isNaN(o.video.duration) && (o.justReseted = !0, o.video.currentTime = -1 == o.ssec ? 0 : o.ssec), ("mute" == o.volume || t.lastToggleState(e.videomutetoggledby) || !0 === t[a].globalmute) && (o.video.muted = !0)
                }
            }
        },
        Mute: function(e, i, a) {
            var r = !1,
                o = t[i].videos[e[0].id];
            switch (o.type) {
                case "youtube":
                    o.player && (!0 === a && o.player.mute(), !1 === a && d(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
                    break;
                case "vimeo":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && n(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
                    break;
                case "html5":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r
            }
            if (void 0 === a) return r
        },
        stopVideo: function(e, a, r) {
            if (void 0 !== t[a] && void 0 !== t[a]) {
                var o = t[a].videos[e[0].id];
                if (void 0 !== o && ("stopVideo" !== o.cRS || "paused" !== o.cSS)) switch (o.cRS = "stopVideo", t[a].leaveViewPortBasedStop || (t[a].lastplayedvideos = []), t[a].leaveViewPortBasedStop = !1, o.type) {
                    case "youtube":
                        void 0 !== o.player && 2 !== o.player.getPlayerState() && 5 !== o.player.getPlayerState() && (o.player.pauseVideo(), void 0 !== r && g(a, o, "hide"));
                        break;
                    case "vimeo":
                        void 0 !== o.vimeoplayer && (o.vimeoplayer.pause(), void 0 !== r && g(a, o, "hide"));
                        break;
                    case "html5":
                        o.video && (o.video.pause(), i && _(o, 1))
                }
            }
        },
        playVideo: function(e, i, a) {
            var o = t[i].videos[e[0].id];
            if (clearTimeout(o.videoplaywait), "playVideo" !== o.cRS || "playing" !== o.cSS) switch (o.cRS = "playVideo", o.type) {
                case "youtube":
                    if (0 == e.find("iframe").length) e.append(o.videomarkup), h(e, i, !0);
                    else if (void 0 !== o.player && null != o.player.playVideo) {
                        var s = o.player.getCurrentTime();
                        o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.player.seekTo(o.ssec), p(o)
                    } else o.videoplaywait = setTimeout(function() { t.playVideo(e, i) }, 50);
                    break;
                case "vimeo":
                    if (0 == e.find("iframe").length) delete o.vimeoplayer, e.append(o.videomarkup), h(e, i, !0);
                    else if (e.hasClass("rs-apiready"))
                        if (o.vimeoplayer = null == o.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : o.vimeoplayer, o.vimeoplayer.getPaused()) {
                            s = void 0 === o.currenttime ? 0 : o.currenttime;
                            o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.vimeoplayer.setCurrentTime(o.ssec), ("mute" == o.volume || 0 === o.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute) && (o.volumetoken = !0, o.vimeoplayer.setVolume(0)), c(o)
                        } else o.videoplaywait = setTimeout(function() { t.playVideo(e, i) }, 50);
                    else o.videoplaywait = setTimeout(function() { t.playVideo(e, i) }, 50);
                    break;
                case "html5":
                    if (o.metaloaded) {
                        if (("" + o.video.duration == "NaN" || o.video.readyState < 4) && !a) return o.loadRequested || (o.video.load(), o.loadRequested = !0), void setTimeout(function() { t.playVideo(e, i) }, 50);
                        s = o.video.currentTime;
                        o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.ssec < o.video.duration && (o.video.currentTime = o.ssec), l(o)
                    } else r(o.video, "loadedmetadata", function(e) { t.playVideo(e, i) }(e))
            }
        },
        isVideoPlaying: function(e, i) { var a = !1; return null != t[i].playingvideos && jQuery.each(t[i].playingvideos, function(t, i) { e.attr("id") == i.attr("id") && (a = !0) }), a },
        removeMediaFromList: function(e, t) { w(e, t) },
        prepareCoveredVideo: function(e) {
            clearTimeout(t[e].resizePrepareCoverVideolistener);
            var i = "carousel" === t[e].sliderType ? t[e].carousel.justify ? void 0 === t[e].carousel.slide_widths ? void 0 : t[e].carousel.slide_widths[t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width,
                a = "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].canv.height;
            if (0 !== i && 0 !== a && void 0 !== i && void 0 !== a)
                for (var r in t[e].videos) {
                    var o = t[e].videos[r];
                    if (void 0 !== o.jvideo && ((o.bgvideo || o.jvideo.parent().hasClass("rs-fsv") || t.closestNode(o.video, "RS-LAYER") && t.closestNode(o.video, "RS-LAYER").classList.contains("rs-fsv")) && ("html5" === o.type && void 0 !== o.jvideo && tpGS.gsap.set(o.jvideo, { width: i }), void 0 === t[e].activeRSSlide || o.slideid === t.gA(t[e].slides[t[e].activeRSSlide], "key") || void 0 === t[e].pr_next_slide || o.slideid === t.gA(t[e].pr_next_slide[0], "key")))) {
                        o.vd = o.ratio.split(":").length > 1 ? o.ratio.split(":")[0] / o.ratio.split(":")[1] : 1;
                        var s, n = i / a,
                            d = o.vd * n * 100,
                            l = o.vd / n * 100;
                        s = "Edge" === t.get_browser() || "IE" === t.get_browser() ? n > o.vd ? { minWidth: "100%", height: d + "%", x: "-50%", y: "-50%", top: "50%", left: "50%", position: "absolute" } : { minHeight: "100%", width: l + "%", x: "-50%", y: "-50%", top: "50%", left: "50%", position: "absolute" } : n > o.vd ? { height: (o.fitCover ? 100 : d) + "%", width: "100%", top: o.fitCover ? 0 : -(d - 100) / 2 + "%", left: "0px", position: "absolute" } : { width: (o.fitCover ? 100 : l) + "%", height: "100%", left: o.fitCover ? 0 : -(l - 100) / 2 + "%", top: "0px", position: "absolute" }, void 0 === o.vimeoid && void 0 === o.ytid || (s.maxWidth = "none", s.maxHeight = "none"), tpGS.gsap.set(o.jvideo, s)
                    }
                } else t[e].resizePrepareCoverVideolistener = setTimeout(function() { t.prepareCoveredVideo(e) }, 100)
        },
        checkVideoApis: function(e, i) {
            location.protocol;
            if (!t[i].youtubeapineeded && ((null != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t[i].youtubeapineeded = !0), t[i].youtubeapineeded && !window.rs_addedyt)) {
                t[i].youtubestarttime = jQuery.now(), window.rs_addedyt = !0;
                var a = document.createElement("script"),
                    r = t.getByTag(document, "script")[0],
                    o = !0;
                a.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function() { "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1) }), o && r.parentNode.insertBefore(a, r)
            }
            if (!t[i].vimeoapineeded && ((null != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t[i].vimeoapineeded = !0), t[i].vimeoapineeded && !window.rs_addedvim)) {
                t[i].vimeostarttime = jQuery.now(), window.rs_addedvim = !0;
                var s = document.createElement("script");
                r = t.getByTag(document, "script")[0], o = !0;
                s.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function() { "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (o = !1) }), o && r.parentNode.insertBefore(s, r)
            }
        },
        manageVideoLayer: function(e, a, o, s) {
            if (t[a].videos = void 0 === t[a].videos ? {} : t[a].videos, void 0 === t[a].videos[e[0].id] || !0 === s) {
                var n = t[a].videos[e[0].id] = void 0 === t[a].videos[e[0].id] ? y(e.data(), void 0, o) : t[a].videos[e[0].id];
                if (n.audio = void 0 !== n.audio && n.audio, i && n.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + n.poster + ');"></rs-poster>');
                else {
                    n.jsposter = e.find("rs-poster"), n.id = e[0].id, n.pload = "auto" === n.pload || "canplay" === n.pload || "canplaythrough" === n.pload || "progress" === n.pload ? "auto" : n.pload, n.type = null != n.mp4 || null != n.webm ? "html5" : null != n.ytid && String(n.ytid).length > 1 ? "youtube" : null != n.vimeoid && String(n.vimeoid).length > 1 ? "vimeo" : "none", n.newtype = "html5" == n.type && 0 == e.find(n.audio ? "audio" : "video").length ? "html5" : "youtube" == n.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == n.type && 0 == e.find("iframe").length ? "vimeo" : "none", n.extras = "", n.posterMarkup = void 0 === n.posterMarkup ? "" : n.posterMarkup, !n.audio && "1sttime" == n.aplay && n.pausetimer && n.bgvideo && t.sA(e.closest("rs-slide")[0], "rspausetimeronce", 1), n.audio || !n.bgvideo || !n.pausetimer || 1 != n.aplay && "true" != n.aplay && "no1sttime" != n.aplay || t.sA(e.closest("rs-slide")[0], "rspausetimeralways", 1), n.noInt && e.addClass("rs-nointeraction"), !(null != n.poster && n.poster.length > 2) || i && n.npom || 0 == n.jsposter.length && (n.posterMarkup += '<rs-poster class="noSwipe" style="background-image:url(' + n.poster + ');"></rs-poster>');
                    var d = !0;
                    switch (n.cSS = "created", n.cRS = "created", n.newtype) {
                        case "html5":
                            1 == window.isSafari11 && (t[a].slideHasIframe = !0), n.audio && e.addClass("rs-audio"), n.tag = n.audio ? "audio" : "video";
                            var l = "video" === n.tag && (t.is_mobile() || t.isSafari11()) ? n.aplay || "true" === n.aplay ? "muted playsinline autoplay" : n.inline ? " playsinline" : "" : "",
                                c = '<div class="html5vid rs_html5vidbasicstyles ' + (!1 === n.afs ? "hidefullscreen" : "") + '">';
                            c += "<" + n.tag + " " + l + " " + (n.controls && "none" !== n.controls ? " controls" : "") + (n.bgvideo && -1 == l.indexOf("autoplay") ? " autoplay" : "") + (n.bgvideo && -1 == l.indexOf("muted") ? " muted" : "") + ' style="' + ("Edge" !== t.get_browser() ? (n.fitCover ? "object-fit:cover;background-size:cover;" : "") + "opacity:0;width:100%; height:100%" : "") + '" class="" ' + (n.loop ? "loop" : "") + ' preload="' + n.pload + '">', "video" === n.tag && null != n.webm && "firefox" == t.get_browser().toLowerCase() && (c = c + '<source src="' + n.webm + '" type="video/webm" />'), null != n.mp4 && (c = c + '<source src="' + n.mp4 + '" type="' + ("video" === n.tag ? "video/mp4" : n.mp4.toLowerCase().indexOf("m4a") > 0 ? "audio/x-m4a" : "audio/mpeg") + '" />'), null != n.ogv && (c = c + '<source src="' + n.mp4 + '" type="' + n.tag + '/ogg" />'), c += "</" + n.tag + "></div>", c += n.posterMarkup, n.controls && !n.audio && void 0 === n.poster || n.bgvideo || (c += '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), n.videomarkup = c, d = !1, i && n.notonmobile || t.isIE(8) || e.append(c), n.jvideo = e.find(n.tag), n.video = n.jvideo[0], n.html5vid = n.jvideo.parent(), r(n.video, "canplay", function(e) { v(e, a), t.resetVideo(e, a) }(e));
                            break;
                        case "youtube":
                            t[a].slideHasIframe = !0, n.controls && "none" !== n.controls || (n.vatr = n.vatr.replace("controls=1", "controls=0"), -1 == n.vatr.toLowerCase().indexOf("controls") && (n.vatr = n.vatr + "&controls=0")), (n.inline || "RS-BGVIDEO" === e[0].tagName) && (n.vatr = n.vatr + "&playsinline=1"), -1 != n.ssec && (n.vatr += "&start=" + n.ssec), -1 != n.esec && (n.vatr += "&end=" + n.esec);
                            var p = n.vatr.split("origin=https://");
                            n.vatrnew = p.length > 1 ? p[0] + "origin=https://" + (self.location.href.match(/www/gi) && !p[1].match(/www/gi) ? "www." + p[1] : p[1]) : n.vatr, n.videomarkup = '<iframe allow="autoplay; ' + (!0 === n.afs ? "fullscreen" : "") + '" type="text/html" src="https://www.youtube-nocookie.com/embed/' + n.ytid + "?" + n.vatrnew + '" ' + (!0 === n.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
                            break;
                        case "vimeo":
                            t[a].slideHasIframe = !0, n.controls && "none" !== n.controls ? (n.vatr = n.vatr.replace("background=0", "background=1"), -1 == n.vatr.toLowerCase().indexOf("background") && (n.vatr = n.vatr + "&background=1")) : (n.vatr = n.vatr.replace("background=1", "background=0"), -1 == n.vatr.toLowerCase().indexOf("background") && (n.vatr = n.vatr + "&background=0")), n.vatr = "autoplay=" + (!0 === n.aplay ? 1 : 0) + "&" + n.vatr, n.bgvideo && (n.prePlayForaWhile = !0), i && !0 === n.aplay && (n.vatr = "muted=1&" + n.vatr), n.loop && (n.vatr = "loop=1&" + n.vatr), n.videomarkup = '<iframe  allow="autoplay; ' + (!0 === n.afs ? "fullscreen" : "") + '" src="https://player.vimeo.com/video/' + n.vimeoid + "?" + n.vatr + '" ' + (!0 === n.afs ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>'
                    }
                    if (!(null != n.poster && n.poster.length > 2) || i && n.npom) {
                        if (i && n.notonmobile) return !1;
                        0 != e.find("iframe").length || "youtube" != n.type && "vimeo" != n.type || (delete n.vimeoplayer, e.append(n.videomarkup), h(e, a, !("vimeo" !== n.newtype || !n.bgvideo), !0))
                    } else d && 0 == e.find("rs-poster").length && e.append(n.posterMarkup), 0 == e.find("iframe").length && (n.jsposter = e.find("rs-poster"), n.jsposter.on("click", function() {
                        if (t.playVideo(e, a, !0), i) {
                            if (n.notonmobile) return !1;
                            tpGS.gsap.to(n.jsposter, .3, { opacity: 0, visibility: "hidden", force3D: "auto", ease: "power3.inOut" }), t.showVideo(e.find("iframe"))
                        }
                    }));
                    if ("none" !== n.doverlay && void 0 !== n.doverlay) {
                        var g = t.createOverlay(a, n.doverlay, n.doverlaysize, { 0: n.doverlaycolora, 1: n.doverlaycolorb });
                        n.bgvideo && 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length ? e.closest("rs-sbg-wrap").append('<rs-dotted style="background-image:' + g + '"></rs-dotted>') : n.bgvideo || 1 == e.find("rs-dotted").length || e.append('<rs-dotted style="background-image:' + g + '"></rs-dotted>')
                    }
                    n.bgvideo && (e[0].style.display = "none", e[0].style.zIndex = 0, tpGS.gsap.set(e.find("video, iframe"), { opacity: 0 }))
                }
            }
        }
    });
    var r = function(e, t, i) { e.addEventListener ? e.addEventListener(t, i, { capture: !1, passive: !0 }) : e.attachEvent(t, i, { capture: !1, passive: !0 }) },
        o = function(e, t, i) { var a = {}; return a.video = e, a.type = t, a.settings = i, a },
        s = function(e, i) {
            var a = t[e].videos[i[0].id];
            (a.bgvideo || i.hasClass("rs-fsv")) && ((void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), requestAnimationFrame(function() { t.prepareCoveredVideo(e) }))
        },
        n = function(e, t) {
            var a = e.vimeoplayer;
            a.getPaused().then(function(r) {
                e.volumetoken = !0;
                var o = !r,
                    s = a.setVolume(t);
                void 0 !== s && s.then(function(t) { a.getPaused().then(function(t) { o === t && (e.volume = "mute", e.volumetoken = !0, a.setVolume(0), a.play()) }).catch(function(e) { console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise") }) }).catch(function(t) { o && (e.volume = "mute", e.volumetoken = !0, a.setVolume(0), a.play()), i && _(e, 0) })
            }).catch(function() { console.log("Get Paused Function Failed for Vimeo Volume Changes") })
        },
        d = function(e, t) { var i = e.player.getPlayerState(); "mute" === t ? e.player.mute() : (e.player.unMute(), e.player.setVolume(t)), setTimeout(function() { 1 === i && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo()) }, 39) },
        l = function(e, t) {
            if ("playVideo" === e.cRS) {
                var a = e.video.play();
                void 0 !== a && a.then(function(e) {}).catch(function(i) { e.video.pause(), !0 !== t && l(e, !0) }), i && _(e, 0)
            }
        },
        c = function(e) {
            if ("playVideo" === e.cRS) {
                var t = e.vimeoplayer.play();
                void 0 !== t && t.then(function(e) {}).catch(function(t) { e.vimeoplayer.volumetoken = !0, e.vimeoplayer.setVolume(0), e.vimeoplayer.play() })
            }
        },
        p = function(e) { "playVideo" === e.cRS && e.player.playVideo() },
        g = function(e, i, a, r) { clearTimeout(i.repeatedPosterCalls), i.repeatedPosterCalls = setTimeout(function() { "show" === a || "playing" === i.cSS && !0 !== i.VideoIsVisible ? (void 0 !== i.showhideposter && i.showhideposter.pause(), i.showhideposter = tpGS.gsap.timeline(), i.jsposter.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jsposter, .3, { zIndex: 5, autoAlpha: 0, force3D: "auto", ease: "power3.inOut" }), 0), i.jvideo.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jvideo, void 0 !== r ? r : .001, { opacity: 1, display: "block", ease: i.jsposter.length > 0 ? "power3.inOut" : "power3.out" }), 0), i.VideoIsVisible = !0) : ("hide" === a || "paused" === i.cSS && 1 != t.checkfullscreenEnabled(e) && i.jsposter.length > 0 && !1 !== i.VideoIsVisible && !0 !== i.seeking) && (void 0 !== i.showhideposter && i.showhideposter.pause(), i.showhideposter = tpGS.gsap.timeline(), i.jsposter.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jsposter, .3, { zIndex: 5, autoAlpha: 1, force3D: "auto", ease: "power3.inOut" }), 0), i.jvideo.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jvideo, void 0 !== r ? r : .001, { opacity: 0, ease: i.jsposter.length > 0 ? "power3.inOut" : "power3.out" }), .3), i.bgvideo && void 0 !== i.nBG && void 0 !== i.nBG.loadobj && (i.nBG.video = i.nBG.loadobj.img), i.VideoIsVisible = !1) }, void 0 !== a ? 0 : 100) },
        u = function(e, i, a) { e.cSS = "playing", e.vimeostarted = !0, e.nextslidecalled = !1, e.jsposter = void 0 === e.jsposter || 0 === e.jsposter.length ? i.find("rs-poster") : e.jsposter, e.jvideo = i.find("iframe"), t[a].c.trigger("revolution.slide.onvideoplay", o(e.vimeoplayer, "vimeo", e)), t[a].stopByVideo = e.pausetimer, b(i, a), "mute" == e.volume || 0 === e.volume || t.lastToggleState(i.data("videomutetoggledby")) || !0 === t[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setVolume(0)) : n(e, parseInt(e.volcache, 0) / 100 || .75), t.toggleState(e.videotoggledby) },
        h = function(e, a, r, n) {
            var l = t[a].videos[e[0].id],
                c = "iframe" + Math.round(1e5 * Math.random() + 1);
            if (l.jvideo = e.find("iframe"), s(a, e), l.jvideo.attr("id", c), l.startvideonow = r, l.videolistenerexist) {
                if (r) switch (l.type) {
                    case "youtube":
                        t.playVideo(e, a), -1 != l.ssec && l.player.seekTo(l.ssec);
                        break;
                    case "vimeo":
                        t.playVideo(e, a), -1 != l.ssec && l.vimeoplayer.seekTo(l.ssec)
                }
            } else switch (l.type) {
                case "youtube":
                    if ("undefined" == typeof YT || void 0 === YT.Player) return t.checkVideoApis(e, a), void setTimeout(function() { h(e, a, r, n) }, 50);
                    l.player = new YT.Player(c, {
                        events: {
                            onStateChange: function(i) { i.data == YT.PlayerState.PLAYING ? (l.cSS = "playing", t[a].onceVideoPlayed = !0, "mute" == l.volume || 0 === l.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[a].globalmute ? l.player.mute() : d(l, parseInt(l.volcache, 0) || 75), t[a].stopByVideo = !0, b(e, a), l.pausetimer ? t[a].c.trigger("stoptimer") : t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideoplay", o(l.player, "youtube", l)), t.toggleState(l.videotoggledby)) : (l.cSS = "paused", 0 == i.data && l.loop && (-1 != l.ssec && l.player.seekTo(l.ssec), t.playVideo(e, a), t.toggleState(l.videotoggledby)), -1 != i.data && 3 != i.data && (t[a].stopByVideo = !1, t[a].tonpause = !1, w(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.player, "youtube", l)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby)), 0 == i.data && l.nse ? (m(), l.nseTriggered = !0, t[a].c.revnext(), w(e, a)) : (w(e, a), t[a].stopByVideo = !1, 3 !== i.data && (-1 != l.lasteventdata && 3 != l.lasteventdata && void 0 !== l.lasteventdata || -1 != i.data && 3 != i.data) && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.player, "youtube", l)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby))), clearTimeout(l.postOrVideoTimer), 3 !== i.data && (l.postOrVideoTimer = setTimeout(function() { g(a, l) }, 1 === l.lasteventdata && 2 === i.data || 2 === l.lasteventdata && 3 !== i.data ? 1e3 : 0), l.lasteventdata = i.data) },
                            onReady: function(i) {
                                var r, o = t.is_mobile(),
                                    s = e.hasClass("rs-layer-video");
                                l.ready = !0, !o && (!t.isSafari11() || o && s) || "RS-BGVIDEO" !== e[0].tagName && (!s || !0 !== l.aplay && "true" !== l.aplay) || (r = !0, l.player.setVolume(0), l.volume = "mute", l.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== l.player.getPlayerState() && -1 !== l.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function() { t.playVideo(e, a) }, 500))), r || "mute" != l.volume || (l.player.setVolume(0), l.player.mute()), e.addClass("rs-apiready"), null == l.speed && 1 === l.speed || i.target.setPlaybackRate(parseFloat(l.speed)), l.jsposter.unbind("click"), l.jsposter.on("click", function() { t.playVideo(e, a, !0) }), l.startvideonow ? (t.playVideo(e, a), -1 != l.ssec && l.player.seekTo(l.ssec)) : n && g(a, l, "show", .2), l.videolistenerexist = !0
                            }
                        }
                    });
                    break;
                case "vimeo":
                    if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) return t.checkVideoApis(e, a), void setTimeout(function() { h(e, a, r, n) }, 50);
                    for (var p, v = l.jvideo.attr("src"), f = {}, y = v, _ = /([^&=]+)=([^&]*)/g; p = _.exec(y);) f[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
                    v = (v = null != f.player_id ? v.replace(f.player_id, c) : v + "&player_id=" + c).replace(/&api=0|&api=1/g, "");
                    var S, x = t.is_mobile() || t.isSafari11(),
                        k = "RS-BGVIDEO" === e[0].tagName;
                    if (x && k && (v += "&background=1"), l.jvideo.attr("src", v), l.vimeoplayer = void 0 === l.vimeoplayer || !1 === l.vimeoplayer ? new Vimeo.Player(c) : l.vimeoplayer, x) k ? S = !0 : (l.aplay || "true" === l.aplay) && (S = !0), S && (l.volumetoken = !0, l.vimeoplayer.setVolume(0), l.volume = "mute");
                    l.vimeoplayer.on("play", function(i) { t[a].onceVideoPlayed = !0, l.cSS = "playing", l.vimeostarted || u(l, e, a) }), l.vimeoplayer.on("loaded", function(i) {
                        var r = {};
                        l.vimeoplayer.getVideoWidth().then(function(t) { r.width = t, void 0 !== r.width && void 0 !== r.height && (l.ratio = r.width + ":" + r.height, l.vimeoplayerloaded = !0, s(a, e)) }), l.vimeoplayer.getVideoHeight().then(function(t) { r.height = t, void 0 !== r.width && void 0 !== r.height && (l.ratio = r.width + ":" + r.height, l.vimeoplayerloaded = !0, s(a, e)) }), l.startvideonow ? ("mute" === l.volume && (l.volumetoken = !0, l.vimeoplayer.setVolume(0)), t.playVideo(e, a), -1 != l.ssec && l.vimeoplayer.setCurrentTime(l.ssec)) : n && g(a, l, "show", .2)
                    }), e.addClass("rs-apiready"), l.vimeoplayer.on("volumechange", function(e) { l.volumetoken && (l.volume = e.volume), l.volumetoken = !1 }), l.vimeoplayer.on("timeupdate", function(i) { g(a, l), l.vimeostarted || 0 === i.percent || void 0 !== t[a].activeRSSlide && l.slideid !== t.gA(t[a].slides[t[a].activeRSSlide], "key") || u(l, e, a), l.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), l.currenttime = i.seconds, 0 != l.esec && -1 !== l.esec && l.esec < i.seconds && !0 !== l.nextslidecalled && (l.loop ? (t.playVideo(e, a), l.vimeoplayer.setCurrentTime(-1 !== l.ssec ? l.ssec : 0)) : (l.nse && (l.nseTriggered = !0, l.nextslidecalled = !0, t[a].c.revnext()), l.vimeoplayer.pause())), l.prePlayForaWhile && l.vimeoplayer.pause() }), l.vimeoplayer.on("ended", function(i) { l.cSS = "paused", g(a, l), l.vimeostarted = !1, w(e, a), t[a].stopByVideo = !1, t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.vimeoplayer, "vimeo", l)), l.nse && (l.nseTriggered = !0, t[a].c.revnext()), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby) }), l.vimeoplayer.on("pause", function(i) { l.vimeostarted = !1, l.cSS = "paused", g(a, l), t[a].stopByVideo = !1, t[a].tonpause = !1, w(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.vimeoplayer, "vimeo", l)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby) }), l.jsposter.unbind("click"), l.jsposter.on("click", function() { if (!i) return t.playVideo(e, a, !0), !1 }), l.videolistenerexist = !0
            }
        },
        m = function() { document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen() },
        v = function(e, a, s) {
            var n = t[a].videos[e[0].id];
            if (i && n.notonmobile) return !1;
            if (n.metaloaded = !0, "html5" === n.newtype && n.bgvideo && (n.nBG = t[a].sbgs[e[0].dataset.key], void 0 === n.nBG.shadowCanvas && (n.nBG.shadowCanvas = document.createElement("canvas"), n.nBG.shadowCTX = n.nBG.shadowCanvas.getContext("2d"), n.nBG.shadowCanvas.style.background = "transparent", n.nBG.shadowCanvas.style.opacity = 1), n.nBG.isHTML5 = !0, n.nBG.video = void 0 !== n.nBG.loadobj && void 0 !== n.nBG.loadobj.img ? n.nBG.loadobj.img : n.video, n.nBG.drawVideoCanvasImagesRecall = !1), !n.controls || n.audio || void 0 !== n.poster) {
                0 != e.find(".tp-video-play-button").length || i || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>');
                var d = "video, rs-poster, .tp-video-play-button";
                void 0 !== n.poster && n.controls && (d = ".tp-video-play-button"), e.find(d).on("click", function() {!1 === n.loop && n.esec > 0 && n.esec <= n.video.currentTime || (e.hasClass("videoisplaying") ? t.stopVideo(e, a) : t.playVideo(e, a, !0)) })
            }(e.hasClass("rs-fsv") || n.bgvideo) && (n.bgvideo || e.hasClass("rs-fsv") ? (n.html5vid.addClass("fullcoveredvideo"), void 0 !== n.ratio && 1 != n.ratio.split(":").length || (n.ratio = "16:9"), t.prepareCoveredVideo(a)) : n.html5vid.addClass("rs-fsv")), r(n.video, "canplaythrough", function() { t.preLoadAudioDone(e, a, "canplaythrough") }), r(n.video, "canplay", function() { t.preLoadAudioDone(e, a, "canplay") }), r(n.video, "progress", function() { t.preLoadAudioDone(e, a, "progress") }), r(n.video, "pause", function() { i && _(n, 1) }), r(n.video, "timeupdate", function(e) { this.BGrendered = !0, g(a, n), -1 === n.esec && n.loop && 1 == window.isSafari11 && (n.esec = n.video.duration - .075), void 0 !== n.lastCurrentTime ? n.fps = n.video.currentTime - n.lastCurrentTime : n.fps = .1, n.lastCurrentTime = n.video.currentTime, 0 != n.esec && -1 != n.esec && n.esec < n.video.currentTime && !n.nextslidecalled && (n.loop ? (l(n), n.video.currentTime = -1 === n.ssec ? .5 : n.ssec) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].jcnah = !0, t[a].c.revnext(), setTimeout(function() { t[a].jcnah = !1 }, 1e3)), n.video.pause())) }), r(n.video, "play", function() { n.cSS = "playing", g(a, n), n.bgvideo && (n.nBG.drawVideoCanvasImagesRecall = !0, n.nBG.videoisplaying = !0, n.nBG.video = n.video, t.updateVideoFrames(a, n.nBG)), t[a].onceVideoPlayed = !0, n.nextslidecalled = !1, n.volume = null != n.volume && "mute" != n.volume ? parseFloat(n.volcache) : n.volume, n.volcache = null != n.volcache && "mute" != n.volcache ? parseFloat(n.volcache) : n.volcache, t.is_mobile() || t.isSafari11() || (!0 === t[a].globalmute ? n.video.muted = !0 : n.video.muted = "mute" == n.volume, n.volcache = t.isNumeric(n.volcache) && n.volcache > 1 ? n.volcache / 100 : n.volcache, "mute" == n.volume ? n.video.muted = !0 : null != n.volcache && (n.video.volume = n.volcache)), e.addClass("videoisplaying"), b(e, a), clearTimeout(n.showCoverSoon), !0 !== n.pausetimer || "audio" == n.tag ? (t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n))) : (t[a].stopByVideo = !0, t[a].c.trigger("revolution.slide.onvideoplay", o(n.video, "html5", n))), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), t.toggleState(n.videotoggledby) }), r(n.video, "seeked", function() { n.seeking = !1 }), r(n.video, "seeking", function() { n.seeking = !0 }), r(n.video, "pause", function(i) { n.cSS = "paused", g(a, n), e.removeClass("videoisplaying"), n.bgvideo && (n.nBG.drawVideoCanvasImagesRecall = !1, n.nBG.videoisplaying = !1), t[a].stopByVideo = !1, w(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby) }), r(n.video, "ended", function() { n.cSS = "paused", m(), g(a, n), w(e, a), t[a].stopByVideo = !1, w(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", e.data())), n.nse && n.video.currentTime > 0 && (1 == !t[a].jcnah && (n.nseTriggered = !0, t[a].c.revnext(), t[a].jcnah = !0), setTimeout(function() { t[a].jcnah = !1 }, 1500)), e.removeClass("videoisplaying"), n.bgvideo && (n.nBG.drawVideoCanvasImagesRecall = !1, n.nBG.videoisplaying = !1), !0 !== t[a].inviewport && void 0 !== t[a].inviewport || (t[a].lastplayedvideos = []) })
        },
        f = function(e) { return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e },
        y = function(e, t, i) {
            e.audio = "audio" === t;
            var r = void 0 === e.video ? [] : e.video.split(";"),
                o = { volume: e.audio ? 1 : "mute", pload: "auto", ratio: "16:9", loop: !0, aplay: "true", fitCover: !0, afs: !0, controls: !1, nse: !0, npom: !1, opom: !1, inline: !0, notonmobile: !1, start: -1, end: -1, doverlay: "none", doverlaysize: 1, doverlaycolora: "transparent", doverlaycolorb: "#000000", scop: !1, rwd: !0, speed: 1, ploadwait: 5, stopAV: 1 !== e.bgvideo, noInt: !1, volcache: 75 };
            for (var s in r)
                if (r.hasOwnProperty(s)) {
                    var n = r[s].split(":");
                    switch (n[0]) {
                        case "v":
                            o.volume = n[1];
                            break;
                        case "vd":
                            o.volcache = n[1];
                            break;
                        case "p":
                            o.pload = n[1];
                            break;
                        case "ar":
                            o.ratio = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "ap":
                            o.aplay = f(n[1]);
                            break;
                        case "vfc":
                            o.fitCover = f(n[1]);
                            break;
                        case "afs":
                            o.afs = f(n[1]);
                            break;
                        case "vc":
                            o.controls = n[1];
                            break;
                        case "nse":
                            o.nse = f(n[1]);
                            break;
                        case "npom":
                            o.npom = f(n[1]);
                            break;
                        case "opom":
                            o.opom = f(n[1]);
                            break;
                        case "t":
                            o.vtype = n[1];
                            break;
                        case "inl":
                            o.inline = f(n[1]);
                            break;
                        case "nomo":
                            o.notonmobile = f(n[1]);
                            break;
                        case "sta":
                            o.start = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "end":
                            o.end = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "do":
                            o.doverlay = n[1];
                            break;
                        case "dos":
                            o.doverlaysize = n[1];
                            break;
                        case "doca":
                            o.doverlaycolora = n[1];
                            break;
                        case "docb":
                            o.doverlaycolorb = n[1];
                            break;
                        case "scop":
                            o.scop = f(n[1]);
                            break;
                        case "rwd":
                            o.rwd = f(n[1]);
                            break;
                        case "sp":
                            o.speed = n[1];
                            break;
                        case "vw":
                            o.ploadwait = parseInt(n[1], 0) || 5;
                            break;
                        case "sav":
                            o.stopAV = f(n[1]);
                            break;
                        case "noint":
                            o.noInt = f(n[1]);
                            break;
                        case "l":
                            o.loopcache = n[1], o.loop = "loop" === n[1] || "loopandnoslidestop" === n[1] || "none" !== n[1] && f(n[1]);
                            break;
                        case "ptimer":
                            o.pausetimer = f(n[1]);
                            break;
                        case "sat":
                            o.waitToSlideTrans = f(n[1])
                    }
                }
            return null == e.mp4 && null == e.webm && (o.fitCover = !1), void 0 !== e.bgvideo && (o.bgvideo = e.bgvideo), o.noInt && (o.controls = !1), void 0 !== e.mp4 && (o.mp4 = e.mp4), void 0 !== e.videomp4 && (o.mp4 = e.videomp4), void 0 !== e.ytid && (o.ytid = e.ytid), void 0 !== e.ogv && (o.ogv = e.ogv), void 0 !== e.webm && (o.webm = e.webm), void 0 !== e.vimeoid && (o.vimeoid = e.vimeoid), void 0 !== e.vatr && (o.vatr = e.vatr), void 0 !== e.videoattributes && (o.vatr = e.videoattributes), void 0 !== e.poster && (o.poster = e.poster), o.slideid = i, o.aplay = "true" === o.aplay || o.aplay, 1 === o.bgvideo && (o.volume = "mute"), o.ssec = a(o.start), o.esec = a(o.end), o.pausetimer = void 0 === o.pausetimer ? "loopandnoslidestop" !== o.loopcache : o.pausetimer, o.inColumn = e._incolumn, o.audio = e.audio, !0 !== o.loop && "true" !== o.loop || !0 !== o.nse && "true" !== o.nse || (o.loop = !1), o
        },
        b = function(e, i) {
            if (t[i].playingvideos = void 0 === t[i].playingvideos ? new Array : t[i].playingvideos, t[i].videos[e[0].id].stopAV && void 0 !== t[i].playingvideos && t[i].playingvideos.length > 0)
                for (var a in t[i].lastplayedvideos = jQuery.extend(!0, [], t[i].playingvideos), t[i].playingvideos) t[i].playingvideos.hasOwnProperty(a) && t.stopVideo(t[i].playingvideos[a], i);
            t[i].playingvideos.push(e), t[i].videoIsPlaying = e
        },
        w = function(e, i) { void 0 !== t[i] && void 0 !== t[i] && null != t[i].playingvideos && jQuery.inArray(e, t[i].playingvideos) >= 0 && t[i].playingvideos.splice(jQuery.inArray(e, t[i].playingvideos), 1) },
        _ = function(e, a) {
            if (void 0 !== e && (void 0 === a && (a = 0), i && !e.bgvideo)) {
                e.playPauseBtnTween && e.playPauseBtnTween.kill && e.playPauseBtnTween.kill();
                var r = t.closestNode(e.video, "RS-LAYER"),
                    o = e.controls ? 1 : 0,
                    s = e.controls ? 0 : .3;
                e.controls && e.poster && 0 === a && (s = 0, o = 0), r && (e.playPauseBtnTween = tpGS.gsap.to(r.querySelector(".tp-video-play-button"), { duration: s, delay: o, opacity: a }))
            }
        }
}(jQuery);;
jQuery(document).ready(function($) {
    if ($('.wfg-popup, .wfg-overlay').length) {
        setTimeout(function() { $('.wfg-popup, .wfg-overlay').fadeIn(1300); }, 700);
        $('.wfg-no-thanks').click(function(e) {
            e.preventDefault();
            $('.wfg-popup, .wfg-overlay').fadeOut(500, function() { $(this).remove(); });
        });
        $('.wfg-add-gifts').click(function(e) {
            e.preventDefault();
            var form = $(this).closest('form');
            $.ajax({ type: 'POST', url: form.attr('action'), data: form.serialize(), success: function(response) { window.location.reload(); } });
        });
        var wfgCheckboxes = $('.wfg-checkbox');
        wfgCheckboxes.click(function() {
            if (WFG_SPECIFIC.gifts_allowed <= 0) { return; }
            if ($('.wfg-checkbox:checked').length >= WFG_SPECIFIC.gifts_allowed) { wfgCheckboxes.not('.wfg-checkbox:checked').attr('disabled', 'disabled').parent().addClass("opaque"); } else { wfgCheckboxes.removeAttr('disabled').parent().removeClass("opaque"); }
        })
    }
    $('.wfg-fixed-notice-remove').click(function() { $(this).closest('.wfg-fixed-notice').fadeOut(1000); });
});
jQuery(window).resize(wfgAdjustLayout);
jQuery(document).ready(function() { wfgAdjustLayout(); })

function wfgAdjustLayout() { jQuery('.wfg-popup').css({ position: 'fixed', left: (jQuery(window).width() - jQuery('.wfg-popup').outerWidth()) / 2, top: (jQuery(window).height() - jQuery('.wfg-popup').outerHeight()) / 2 }); };
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
    "use strict";

    function e(p) {
        p.fn._fadeIn = p.fn.fadeIn;
        var b = p.noop || function() {},
            h = /MSIE/.test(navigator.userAgent),
            k = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            y = (document.documentMode, "function" == typeof document.createElement("div").style.setExpression && document.createElement("div").style.setExpression);
        p.blockUI = function(e) { o(window, e) }, p.unblockUI = function(e) { v(window, e) }, p.growlUI = function(e, t, o, n) {
            var i = p('<div class="growlUI"></div>');
            e && i.append("<h1>" + e + "</h1>"), t && i.append("<h2>" + t + "</h2>"), o === undefined && (o = 3e3);
            var s = function(e) { p.blockUI({ message: i, fadeIn: "undefined" != typeof(e = e || {}).fadeIn ? e.fadeIn : 700, fadeOut: "undefined" != typeof e.fadeOut ? e.fadeOut : 1e3, timeout: "undefined" != typeof e.timeout ? e.timeout : o, centerY: !1, showOverlay: !1, onUnblock: n, css: p.blockUI.defaults.growlCSS }) };
            s();
            i.css("opacity");
            i.on("mouseover", function() {
                s({ fadeIn: 0, timeout: 3e4 });
                var e = p(".blockMsg");
                e.stop(), e.fadeTo(300, 1)
            }).on("mouseout", function() { p(".blockMsg").fadeOut(1e3) })
        }, p.fn.block = function(e) {
            if (this[0] === window) return p.blockUI(e), this;
            var t = p.extend({}, p.blockUI.defaults, e || {});
            return this.each(function() {
                var e = p(this);
                t.ignoreIfBlocked && e.data("blockUI.isBlocked") || e.unblock({ fadeOut: 0 })
            }), this.each(function() { "static" == p.css(this, "position") && (this.style.position = "relative", p(this).data("blockUI.static", !0)), this.style.zoom = 1, o(this, e) })
        }, p.fn.unblock = function(e) { return this[0] === window ? (p.unblockUI(e), this) : this.each(function() { v(this, e) }) }, p.blockUI.version = 2.7, p.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 };
        var m = null,
            g = [];

        function o(e, o) {
            var t, n, i, s, l, d, a, c, r, u = e == window,
                f = o && o.message !== undefined ? o.message : undefined;
            (o = p.extend({}, p.blockUI.defaults, o || {})).ignoreIfBlocked && p(e).data("blockUI.isBlocked") || (o.overlayCSS = p.extend({}, p.blockUI.defaults.overlayCSS, o.overlayCSS || {}), i = p.extend({}, p.blockUI.defaults.css, o.css || {}), o.onOverlayClick && (o.overlayCSS.cursor = "pointer"), s = p.extend({}, p.blockUI.defaults.themedCSS, o.themedCSS || {}), f = f === undefined ? o.message : f, u && m && v(window, { fadeOut: 0 }), f && "string" != typeof f && (f.parentNode || f.jquery) && (a = f.jquery ? f[0] : f, t = {}, p(e).data("blockUI.history", t), t.el = a, t.parent = a.parentNode, t.display = a.style.display, t.position = a.style.position, t.parent && t.parent.removeChild(a)), p(e).data("blockUI.onUnblock", o.onUnblock), r = o.baseZ, a = h || o.forceIframe ? p('<iframe class="blockUI" style="z-index:' + r++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + o.iframeSrc + '"></iframe>') : p('<div class="blockUI" style="display:none"></div>'), t = o.theme ? p('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + r++ + ';display:none"></div>') : p('<div class="blockUI blockOverlay" style="z-index:' + r++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), o.theme && u ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (r + 10) + ';display:none;position:fixed">', o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"), c += '<div class="ui-widget-content ui-dialog-content"></div>', c += "</div>") : o.theme ? (c = '<div class="blockUI ' + o.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (r + 10) + ';display:none;position:absolute">', o.title && (c += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>"), c += '<div class="ui-widget-content ui-dialog-content"></div>', c += "</div>") : c = u ? '<div class="blockUI ' + o.blockMsgClass + ' blockPage" style="z-index:' + (r + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + o.blockMsgClass + ' blockElement" style="z-index:' + (r + 10) + ';display:none;position:absolute"></div>', r = p(c), f && (o.theme ? (r.css(s), r.addClass("ui-widget-content")) : r.css(i)), o.theme || t.css(o.overlayCSS), t.css("position", u ? "fixed" : "absolute"), (h || o.forceIframe) && a.css("opacity", 0), c = [a, t, r], n = p(u ? "body" : e), p.each(c, function() { this.appendTo(n) }), o.theme && o.draggable && p.fn.draggable && r.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" }), s = y && (!p.support.boxModel || 0 < p("object,embed", u ? null : e).length), (k || s) && (u && o.allowBodyStretch && p.support.boxModel && p("html,body").css("height", "100%"), !k && p.support.boxModel || u || (i = U(e, "borderTopWidth"), s = U(e, "borderLeftWidth"), l = i ? "(0 - " + i + ")" : 0, d = s ? "(0 - " + s + ")" : 0), p.each(c, function(e, t) {
                t = t[0].style;
                t.position = "absolute", e < 2 ? (u ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + o.quirksmodeOffsetHack + ') + "px"') : t.setExpression("height", 'this.parentNode.offsetHeight + "px"'), u ? t.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : t.setExpression("width", 'this.parentNode.offsetWidth + "px"'), d && t.setExpression("left", d), l && t.setExpression("top", l)) : o.centerY ? (u && t.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), t.marginTop = 0) : !o.centerY && u && (e = o.css && o.css.top ? parseInt(o.css.top, 10) : 0, t.setExpression("top", "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + e + ') + "px"'))
            })), f && ((o.theme ? r.find(".ui-widget-content") : r).append(f), (f.jquery || f.nodeType) && p(f).show()), (h || o.forceIframe) && o.showOverlay && a.show(), o.fadeIn ? (c = o.onBlock || b, a = o.showOverlay && !f ? c : b, c = f ? c : b, o.showOverlay && t._fadeIn(o.fadeIn, a), f && r._fadeIn(o.fadeIn, c)) : (o.showOverlay && t.show(), f && r.show(), o.onBlock && o.onBlock.bind(r)()), I(1, e, o), u ? (m = r[0], g = p(o.focusableElements, m), o.focusInput && setTimeout(w, 20)) : function(e, t, o) {
                var n = e.parentNode,
                    i = e.style,
                    s = (n.offsetWidth - e.offsetWidth) / 2 - U(n, "borderLeftWidth"),
                    n = (n.offsetHeight - e.offsetHeight) / 2 - U(n, "borderTopWidth");
                t && (i.left = 0 < s ? s + "px" : "0");
                o && (i.top = 0 < n ? n + "px" : "0")
            }(r[0], o.centerX, o.centerY), o.timeout && (r = setTimeout(function() { u ? p.unblockUI(o) : p(e).unblock(o) }, o.timeout), p(e).data("blockUI.timeout", r)))
        }

        function v(e, t) {
            var o, n, i = e == window,
                s = p(e),
                l = s.data("blockUI.history"),
                d = s.data("blockUI.timeout");
            d && (clearTimeout(d), s.removeData("blockUI.timeout")), t = p.extend({}, p.blockUI.defaults, t || {}), I(0, e, t), null === t.onUnblock && (t.onUnblock = s.data("blockUI.onUnblock"), s.removeData("blockUI.onUnblock")), n = i ? p(document.body).children().filter(".blockUI").add("body > .blockUI") : s.find(">.blockUI"), t.cursorReset && (1 < n.length && (n[1].style.cursor = t.cursorReset), 2 < n.length && (n[2].style.cursor = t.cursorReset)), i && (m = g = null), t.fadeOut ? (o = n.length, n.stop().fadeOut(t.fadeOut, function() { 0 == --o && a(n, l, t, e) })) : a(n, l, t, e)
        }

        function a(e, t, o, n) {
            var i = p(n);
            i.data("blockUI.isBlocked") || (e.each(function(e, t) { this.parentNode && this.parentNode.removeChild(this) }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.el.style.cursor = "default", t.parent && t.parent.appendChild(t.el), i.removeData("blockUI.history")), i.data("blockUI.static") && i.css("position", "static"), "function" == typeof o.onUnblock && o.onUnblock(n, o), n = (i = p(document.body)).width(), o = i[0].style.width, i.width(n - 1).width(n), i[0].style.width = o)
        }

        function I(e, t, o) {
            var n = t == window,
                t = p(t);
            !e && (n && !m || !n && !t.data("blockUI.isBlocked")) || (t.data("blockUI.isBlocked", e), n && o.bindEvents && (!e || o.showOverlay) && (n = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove", e ? p(document).on(n, o, i) : p(document).off(n, i)))
        }

        function i(e) {
            if ("keydown" === e.type && e.keyCode && 9 == e.keyCode && m && e.data.constrainTabKey) {
                var t = g,
                    o = !e.shiftKey && e.target === t[t.length - 1],
                    n = e.shiftKey && e.target === t[0];
                if (o || n) return setTimeout(function() { w(n) }, 10), !1
            }
            t = e.data, o = p(e.target);
            return o.hasClass("blockOverlay") && t.onOverlayClick && t.onOverlayClick(e), 0 < o.parents("div." + t.blockMsgClass).length || 0 === o.parents().children().filter("div.blockUI").length
        }

        function w(e) {!g || (e = g[!0 === e ? g.length - 1 : 0]) && e.trigger("focus") }

        function U(e, t) { return parseInt(p.css(e, t), 10) || 0 }
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();