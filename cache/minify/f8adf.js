(function($) {
    "use strict";
    $.fn.apusCountDown = function(options) { return this.each(function() { new $.apusCountDown(this, options); }); }
    $.apusCountDown = function(obj, options) {
        this.options = $.extend({ autoStart: true, LeadingZero: true, DisplayFormat: "<div>%%D%% Days</div><div>%%H%% Hours</div><div>%%M%% Minutes</div><div>%%S%% Seconds</div>", FinishMessage: "Expired", CountActive: true, TargetDate: null }, options || {});
        if (this.options.TargetDate == null || this.options.TargetDate == '') { return; }
        this.timer = null;
        this.element = obj;
        this.CountStepper = -1;
        this.CountStepper = Math.ceil(this.CountStepper);
        this.SetTimeOutPeriod = (Math.abs(this.CountStepper) - 1) * 1000 + 990;
        var dthen = new Date(this.options.TargetDate);
        var dnow = new Date();
        if (this.CountStepper > 0) { var ddiff = new Date(dnow - dthen); } else { var ddiff = new Date(dthen - dnow); }
        var gsecs = Math.floor(ddiff.valueOf() / 1000);
        this.CountBack(gsecs, this);
    };
    $.apusCountDown.fn = $.apusCountDown.prototype;
    $.apusCountDown.fn.extend = $.apusCountDown.extend = $.extend;
    $.apusCountDown.fn.extend({
        calculateDate: function(secs, num1, num2) {
            var s = ((Math.floor(secs / num1)) % num2).toString();
            if (this.options.LeadingZero && s.length < 2) { s = "0" + s; }
            return "<span>" + s + "</span>";
        },
        CountBack: function(secs, self) {
            if (secs < 0) { self.element.innerHTML = '<div class="lof-labelexpired"> ' + self.options.FinishMessage + "</div>"; return; }
            clearInterval(self.timer);
            var DisplayStr = self.options.DisplayFormat.replace(/%%D%%/g, self.calculateDate(secs, 86400, 100000));
            DisplayStr = DisplayStr.replace(/%%H%%/g, self.calculateDate(secs, 3600, 24));
            DisplayStr = DisplayStr.replace(/%%M%%/g, self.calculateDate(secs, 60, 60));
            DisplayStr = DisplayStr.replace(/%%S%%/g, self.calculateDate(secs, 1, 60));
            self.element.innerHTML = DisplayStr;
            if (self.options.CountActive) {
                self.timer = null;
                self.timer = setTimeout(function() { self.CountBack((secs + self.CountStepper), self); }, (self.SetTimeOutPeriod));
            }
        }
    });
    jQuery(document).ready(function($) {
        $('[data-time="timmer"]').each(function(index, el) {
            var $this = $(this);
            var $date = $this.data('date').split("-");
            $this.apusCountDown({ TargetDate: $date[0] + "/" + $date[1] + "/" + $date[2] + " " + $date[3] + ":" + $date[4] + ":" + $date[5], DisplayFormat: "<div class=\"times\"><div class=\"day\">%%D%% " + yozi_countdown_opts.days + "</div><div class=\"hours\">%%H%% " + yozi_countdown_opts.hours + "</div><div class=\"minutes\">%%M%% " + yozi_countdown_opts.mins + "</div><div class=\"seconds\">%%S%% " + yozi_countdown_opts.secs + "</div></div>", FinishMessage: "", });
        });
    });
})(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) { b.ev.on(o + a + p, c) },
        x = function(b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
        y = function(c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
        z = function(c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn },
        A = function() { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function() { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = { marginRight: "" };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) },
        _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) },
        _hasScrollBar: function(a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) { if (void 0 === d || d === !1) return !0; if (e = c.split("_"), e.length > 1) { var f = b.find(p + "-" + e[0]); if (f.length > 0) { var g = e[1]; "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d) } } else b.find(p + "-" + c).html(d) })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() { E && (D.after(E.addClass(C)).detach(), E = null) };
    a.magnificPopup.registerModule(F, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function() { b.types.push(F), w(h + "." + F, function() { G() }) },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() { H && a(document.body).removeClass(H) },
        K = function() { J(), b.req && b.req.abort() };
    a.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function() { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = { data: d, xhr: f };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" };
    a.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function() { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) { L && clearInterval(L), L = setInterval(function() { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                    g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    a.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) { return a.is("img") ? a : a.find("img") } },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() { b.content.css("visibility", "visible") };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16)
                        }
                    }), w(h + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) })
                }
            },
            _allowZoom: function() { return "image" === b.currItem.type },
            _getItemToZoom: function() { return b.currItem.hasSize ? b.currItem.img : !1 },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
            initIframe: function() { b.types.push(P), w("BeforeChange", function(a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function() { R() }) },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a },
        T = function(a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
    a.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function(a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() { b.prev() }), f.click(function() { b.next() }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function() { d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null })) : !1
            },
            next: function() { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() },
            prev: function() { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() },
            goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: { replaceSrc: function(a) { return a.src.replace(/\.\w+$/, function(a) { return "@2x" + a }) }, ratio: 1 },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function(b, d) { d.src = a.replaceSrc(d, c) }))
                }
            }
        }
    }), A()
});;;
(function(root, factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof exports === 'object') { module.exports = factory(require('jquery')); } else { root.jquery_mmenu_js = factory(root.jQuery); } }(this, function(jQuery) {
    ! function(t) {
        function e() { t[n].glbl || (o = { $wndw: t(window), $docu: t(document), $html: t("html"), $body: t("body") }, s = {}, a = {}, r = {}, t.each([s, a, r], function(t, e) { e.add = function(t) { t = t.split(" "); for (var n = 0, i = t.length; n < i; n++) e[t[n]] = e.mm(t[n]) } }), s.mm = function(t) { return "mm-" + t }, s.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), s.umm = function(t) { return "mm-" == t.slice(0, 3) && (t = t.slice(3)), t }, a.mm = function(t) { return "mm-" + t }, a.add("parent child"), r.mm = function(t) { return t + ".mm" }, r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), t[n]._c = s, t[n]._d = a, t[n]._e = r, t[n].glbl = o) }
        var n = "mmenu",
            i = "6.1.0";
        if (!(t[n] && t[n].version > i)) {
            t[n] = function(t, e, n) { return this.$menu = t, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = e, this.conf = n, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this }, t[n].version = i, t[n].addons = {}, t[n].uniqueId = 0, t[n].defaults = { extensions: [], initMenu: function() {}, initPanels: function() {}, navbar: { add: !0, title: "Menu", titleLink: "parent" }, onClick: { setSelected: !0 }, slidingSubmenus: !0 }, t[n].configuration = { classNames: { divider: "Divider", inset: "Inset", nolistview: "NoListview", nopanel: "NoPanel", panel: "Panel", selected: "Selected", spacer: "Spacer", vertical: "Vertical" }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400 }, t[n].prototype = {
                getInstance: function() { return this },
                initPanels: function(t) { this._initPanels(t) },
                openPanel: function(e, i) {
                    if (this.trigger("openPanel:before", e), e && e.length && (e.is("." + s.panel) || (e = e.closest("." + s.panel)), e.is("." + s.panel))) {
                        var r = this;
                        if ("boolean" != typeof i && (i = !0), e.hasClass(s.vertical)) e.add(e.parents("." + s.vertical)).removeClass(s.hidden).parent("li").addClass(s.opened), this.openPanel(e.parents("." + s.panel).not("." + s.vertical).first()), this.trigger("openPanel:start", e), this.trigger("openPanel:finish", e);
                        else {
                            if (e.hasClass(s.opened)) return;
                            var o = this.$pnls.children("." + s.panel),
                                l = o.filter("." + s.opened);
                            if (!t[n].support.csstransitions) return l.addClass(s.hidden).removeClass(s.opened), e.removeClass(s.hidden).addClass(s.opened), this.trigger("openPanel:start", e), void this.trigger("openPanel:finish", e);
                            o.not(e).removeClass(s.subopened);
                            for (var d = e.data(a.parent); d;) d = d.closest("." + s.panel), d.is("." + s.vertical) || d.addClass(s.subopened), d = d.data(a.parent);
                            o.removeClass(s.highest).not(l).not(e).addClass(s.hidden), e.removeClass(s.hidden);
                            var c = function() { l.removeClass(s.opened), e.addClass(s.opened), e.hasClass(s.subopened) ? (l.addClass(s.highest), e.removeClass(s.subopened)) : (l.addClass(s.subopened), e.addClass(s.highest)), this.trigger("openPanel:start", e) },
                                h = function() { l.removeClass(s.highest).addClass(s.hidden), e.removeClass(s.highest), this.trigger("openPanel:finish", e) };
                            i && !e.hasClass(s.noanimation) ? setTimeout(function() { r.__transitionend(e, function() { h.call(r) }, r.conf.transitionDuration), c.call(r) }, this.conf.openingInterval) : (c.call(this), h.call(this))
                        }
                        this.trigger("openPanel:after", e)
                    }
                },
                closePanel: function(t) {
                    this.trigger("closePanel:before", t);
                    var e = t.parent();
                    e.hasClass(s.vertical) && (e.removeClass(s.opened), this.trigger("closePanel", t)), this.trigger("closePanel:after", t)
                },
                closeAllPanels: function() {
                    this.trigger("closeAllPanels:before"), this.$pnls.find("." + s.listview).children().removeClass(s.selected).filter("." + s.vertical).removeClass(s.opened);
                    var t = this.$pnls.children("." + s.panel),
                        e = t.first();
                    this.$pnls.children("." + s.panel).not(e).removeClass(s.subopened).removeClass(s.opened).removeClass(s.highest).addClass(s.hidden), this.openPanel(e), this.trigger("closeAllPanels:after")
                },
                togglePanel: function(t) {
                    var e = t.parent();
                    e.hasClass(s.vertical) && this[e.hasClass(s.opened) ? "closePanel" : "openPanel"](t)
                },
                setSelected: function(t) { this.trigger("setSelected:before", t), this.$menu.find("." + s.listview).children("." + s.selected).removeClass(s.selected), t.addClass(s.selected), this.trigger("setSelected:after", t) },
                bind: function(t, e) { this.cbck[t] = this.cbck[t] || [], this.cbck[t].push(e) },
                trigger: function() {
                    var t = this,
                        e = Array.prototype.slice.call(arguments),
                        n = e.shift();
                    if (this.cbck[n])
                        for (var i = 0, s = this.cbck[n].length; i < s; i++) this.cbck[n][i].apply(t, e)
                },
                matchMedia: function(t, e, n) {
                    var i = { yes: e, no: n };
                    this.mtch[t] = this.mtch[t] || [], this.mtch[t].push(i)
                },
                _initAddons: function() {
                    this.trigger("initAddons:before");
                    var e;
                    for (e in t[n].addons) t[n].addons[e].add.call(this), t[n].addons[e].add = function() {};
                    for (e in t[n].addons) t[n].addons[e].setup.call(this);
                    this.trigger("initAddons:after")
                },
                _initExtensions: function() {
                    this.trigger("initExtensions:before");
                    var t = this;
                    this.opts.extensions.constructor === Array && (this.opts.extensions = { all: this.opts.extensions });
                    for (var e in this.opts.extensions) this.opts.extensions[e] = this.opts.extensions[e].length ? "mm-" + this.opts.extensions[e].join(" mm-") : "", this.opts.extensions[e] && ! function(e) { t.matchMedia(e, function() { this.$menu.addClass(this.opts.extensions[e]) }, function() { this.$menu.removeClass(this.opts.extensions[e]) }) }(e);
                    this.trigger("initExtensions:after")
                },
                _initMenu: function() {
                    this.trigger("initMenu:before");
                    this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() { t(this).attr("id", s.mm(t(this).attr("id"))) })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = t('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
                    var e = [s.menu];
                    this.opts.slidingSubmenus || e.push(s.vertical), this.$menu.addClass(e.join(" ")).parent().addClass(s.wrapper), this.trigger("initMenu:after")
                },
                _initPanels: function(e) {
                    this.trigger("initPanels:before", e), e = e || this.$pnls.children(this.conf.panelNodetype);
                    var n = t(),
                        i = this,
                        a = function(e) {
                            e.filter(this.conf.panelNodetype).each(function() {
                                var e = i._initPanel(t(this));
                                if (e) {
                                    i._initNavbar(e), i._initListview(e), n = n.add(e);
                                    var r = e.children("." + s.listview).children("li").children(i.conf.panelNodeType).add(e.children("." + i.conf.classNames.panel));
                                    r.length && a.call(i, r)
                                }
                            })
                        };
                    a.call(this, e), this.opts.initPanels.call(this, n), this.trigger("initPanels:after", n)
                },
                _initPanel: function(t) {
                    this.trigger("initPanel:before", t);
                    if (this.__refactorClass(t, this.conf.classNames.panel, "panel"), this.__refactorClass(t, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(t, this.conf.classNames.vertical, "vertical"), this.__refactorClass(t, this.conf.classNames.inset, "inset"), t.filter("." + s.inset).addClass(s.nopanel), t.hasClass(s.nopanel)) return !1;
                    if (t.hasClass(s.panel)) return t;
                    var e = t.hasClass(s.vertical) || !this.opts.slidingSubmenus;
                    t.removeClass(s.vertical);
                    var n = t.attr("id") || this.__getUniqueId();
                    t.removeAttr("id"), t.is("ul, ol") && (t.wrap("<div />"), t = t.parent()), t.addClass(s.panel + " " + s.hidden).attr("id", n);
                    var i = t.parent("li");
                    return e ? t.add(i).addClass(s.vertical) : t.appendTo(this.$pnls), i.length && (i.data(a.child, t), t.data(a.parent, i)), this.trigger("initPanel:after", t), t
                },
                _initNavbar: function(e) {
                    if (this.trigger("initNavbar:before", e), !e.children("." + s.navbar).length) {
                        var i = e.data(a.parent),
                            r = t('<div class="' + s.navbar + '" />'),
                            o = t[n].i18n(this.opts.navbar.title),
                            l = "";
                        if (i && i.length) {
                            if (i.hasClass(s.vertical)) return;
                            if (i.parent().is("." + s.listview)) var d = i.children("a, span").not("." + s.next);
                            else var d = i.closest("." + s.panel).find('a[href="#' + e.attr("id") + '"]');
                            d = d.first(), i = d.closest("." + s.panel);
                            var c = i.attr("id");
                            switch (o = d.text(), this.opts.navbar.titleLink) {
                                case "anchor":
                                    l = d.attr("href");
                                    break;
                                case "parent":
                                    l = "#" + c
                            }
                            r.append('<a class="' + s.btn + " " + s.prev + '" href="#' + c + '" />')
                        } else if (!this.opts.navbar.title) return;
                        this.opts.navbar.add && e.addClass(s.hasnavbar), r.append('<a class="' + s.title + '"' + (l.length ? ' href="' + l + '"' : "") + ">" + o + "</a>").prependTo(e), this.trigger("initNavbar:after", e)
                    }
                },
                _initListview: function(e) {
                    this.trigger("initListview:before", e);
                    var n = this.__childAddBack(e, "ul, ol");
                    this.__refactorClass(n, this.conf.classNames.nolistview, "nolistview"), n.filter("." + this.conf.classNames.inset).addClass(s.nolistview);
                    var i = n.not("." + s.nolistview).addClass(s.listview).children();
                    this.__refactorClass(i, this.conf.classNames.selected, "selected"), this.__refactorClass(i, this.conf.classNames.divider, "divider"), this.__refactorClass(i, this.conf.classNames.spacer, "spacer");
                    var r = e.data(a.parent);
                    if (r && r.parent().is("." + s.listview) && !r.children("." + s.next).length) {
                        var o = r.children("a, span").first(),
                            l = t('<a class="' + s.next + '" href="#' + e.attr("id") + '" />').insertBefore(o);
                        o.is("span") && l.addClass(s.fullsubopen)
                    }
                    this.trigger("initListview:after", e)
                },
                _initOpened: function() {
                    this.trigger("initOpened:before");
                    var t = this.$pnls.find("." + s.listview).children("." + s.selected).removeClass(s.selected).last().addClass(s.selected),
                        e = t.length ? t.closest("." + s.panel) : this.$pnls.children("." + s.panel).first();
                    this.openPanel(e, !1), this.trigger("initOpened:after")
                },
                _initAnchors: function() {
                    var e = this;
                    o.$body.on(r.click + "-oncanvas", "a[href]", function(i) {
                        var a = t(this),
                            r = !1,
                            o = e.$menu.find(a).length;
                        for (var l in t[n].addons)
                            if (t[n].addons[l].clickAnchor.call(e, a, o)) { r = !0; break }
                        var d = a.attr("href");
                        if (!r && o && d.length > 1 && "#" == d.slice(0, 1)) try {
                            var c = t(d, e.$menu);
                            c.is("." + s.panel) && (r = !0, e[a.parent().hasClass(s.vertical) ? "togglePanel" : "openPanel"](c))
                        } catch (h) {}
                        if (r && i.preventDefault(), !r && o && a.is("." + s.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                            e.__valueOrFn(e.opts.onClick.setSelected, a) && e.setSelected(t(i.target).parent());
                            var f = e.__valueOrFn(e.opts.onClick.preventDefault, a, "#" == d.slice(0, 1));
                            f && i.preventDefault(), e.__valueOrFn(e.opts.onClick.close, a, f) && e.close()
                        }
                    })
                },
                _initMatchMedia: function() {
                    var t = this;
                    this._fireMatchMedia(), o.$wndw.on(r.resize, function(e) { t._fireMatchMedia() })
                },
                _fireMatchMedia: function() {
                    for (var t in this.mtch)
                        for (var e = window.matchMedia && window.matchMedia(t).matches ? "yes" : "no", n = 0; n < this.mtch[t].length; n++) this.mtch[t][n][e].call(this)
                },
                _getOriginalMenuId: function() { var t = this.$menu.attr("id"); return this.conf.clone && t && t.length && (t = s.umm(t)), t },
                __api: function() {
                    var e = this,
                        n = {};
                    return t.each(this._api, function(t) {
                        var i = this;
                        n[i] = function() { var t = e[i].apply(e, arguments); return "undefined" == typeof t ? n : t }
                    }), n
                },
                __valueOrFn: function(t, e, n) { return "function" == typeof t ? t.call(e[0]) : "undefined" == typeof t && "undefined" != typeof n ? n : t },
                __refactorClass: function(t, e, n) { return t.filter("." + e).removeClass(e).addClass(s[n]) },
                __findAddBack: function(t, e) { return t.find(e).add(t.filter(e)) },
                __childAddBack: function(t, e) { return t.children(e).add(t.filter(e)) },
                __filterListItems: function(t) { return t.not("." + s.divider).not("." + s.hidden) },
                __filterListItemAnchors: function(t) { return this.__filterListItems(t).children("a").not("." + s.next) },
                __transitionend: function(t, e, n) {
                    var i = !1,
                        s = function(n) { "undefined" != typeof n && n.target != t[0] || (i || (t.unbind(r.transitionend), t.unbind(r.webkitTransitionEnd), e.call(t[0])), i = !0) };
                    t.on(r.transitionend, s), t.on(r.webkitTransitionEnd, s), setTimeout(s, 1.1 * n)
                },
                __getUniqueId: function() { return s.mm(t[n].uniqueId++) }
            }, t.fn[n] = function(i, s) {
                e(), i = t.extend(!0, {}, t[n].defaults, i), s = t.extend(!0, {}, t[n].configuration, s);
                var a = t();
                return this.each(function() {
                    var e = t(this);
                    if (!e.data(n)) {
                        var r = new t[n](e, i, s);
                        r.$menu.data(n, r.__api()), a = a.add(r.$menu)
                    }
                }), a
            }, t[n].i18n = function() {
                var e = {};
                return function(n) {
                    switch (typeof n) {
                        case "object":
                            return t.extend(e, n), e;
                        case "string":
                            return e[n] || n;
                        case "undefined":
                        default:
                            return e
                    }
                }
            }(), t[n].support = { touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1, csstransitions: function() { return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransitions || Modernizr.csstransitions }(), csstransforms: function() { return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms || Modernizr.csstransforms }(), csstransforms3d: function() { return "undefined" == typeof Modernizr || "undefined" == typeof Modernizr.csstransforms3d || Modernizr.csstransforms3d }() };
            var s, a, r, o
        }
    }(jQuery),
    function(t) {
        var e = "mmenu",
            n = "offCanvas";
        t[e].addons[n] = {
            setup: function() {
                if (this.opts[n]) {
                    var s = this,
                        a = this.opts[n],
                        o = this.conf[n];
                    r = t[e].glbl, this._api = t.merge(this._api, ["open", "close", "setPage"]), "object" != typeof a && (a = {}), "top" != a.position && "bottom" != a.position || (a.zposition = "front"), a = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], a), "string" != typeof o.pageSelector && (o.pageSelector = "> " + o.pageNodetype), r.$allMenus = (r.$allMenus || t()).add(this.$menu), this.vars.opened = !1;
                    var l = [i.offcanvas];
                    "left" != a.position && l.push(i.mm(a.position)), "back" != a.zposition && l.push(i.mm(a.zposition)), t[e].support.csstransforms || l.push(i["no-csstransforms"]), t[e].support.csstransforms3d || l.push(i["no-csstransforms3d"]), this.bind("initMenu:after", function() {
                        this.setPage(r.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu.addClass(l.join(" ")).parent("." + i.wrapper).removeClass(i.wrapper), this.$menu[o.menuInsertMethod](o.menuInsertSelector);
                        var t = window.location.hash;
                        if (t) {
                            var e = this._getOriginalMenuId();
                            e && e == t.slice(1) && this.open()
                        }
                    }), this.bind("initExtensions:after", function() {
                        for (var t = [i.mm("widescreen"), i.mm("iconbar")], e = 0; e < t.length; e++)
                            for (var n in this.opts.extensions)
                                if (this.opts.extensions[n].indexOf(t[e]) > -1) {! function(e, n) { s.matchMedia(e, function() { r.$html.addClass(t[n]) }, function() { r.$html.removeClass(t[n]) }) }(n, e); break }
                    }), this.bind("open:start:sr-aria", function() { this.__sr_aria(this.$menu, "hidden", !1) }), this.bind("close:finish:sr-aria", function() { this.__sr_aria(this.$menu, "hidden", !0) }), this.bind("initMenu:after:sr-aria", function() { this.__sr_aria(this.$menu, "hidden", !0) })
                }
            },
            add: function() { i = t[e]._c, s = t[e]._d, a = t[e]._e, i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), s.add("style") },
            clickAnchor: function(t, e) { var s = this; if (this.opts[n]) { var a = this._getOriginalMenuId(); if (a && t.is('[href="#' + a + '"]')) { if (e) return !0; var o = t.closest("." + i.menu); if (o.length) { var l = o.data("mmenu"); if (l && l.close) return l.close(), s.__transitionend(o, function() { s.open() }, s.conf.transitionDuration), !0 } return this.open(), !0 } if (r.$page) return a = r.$page.first().attr("id"), a && t.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0 } }
        }, t[e].defaults[n] = { position: "left", zposition: "back", blockUI: !0, moveBackground: !0 }, t[e].configuration[n] = { pageNodetype: "div", pageSelector: null, noPageSelector: [], wrapPageIfNeeded: !0, menuInsertMethod: "prependTo", menuInsertSelector: "body" }, t[e].prototype.open = function() {
            if (this.trigger("open:before"), !this.vars.opened) {
                var t = this;
                this._openSetup(), setTimeout(function() { t._openFinish() }, this.conf.openingInterval), this.trigger("open:after")
            }
        }, t[e].prototype._openSetup = function() {
            var e = this,
                o = this.opts[n];
            this.closeAllOthers(), r.$page.each(function() { t(this).data(s.style, t(this).attr("style") || "") }), r.$wndw.trigger(a.resize + "-" + n, [!0]);
            var l = [i.opened];
            o.blockUI && l.push(i.blocking), "modal" == o.blockUI && l.push(i.modal), o.moveBackground && l.push(i.background), "left" != o.position && l.push(i.mm(this.opts[n].position)), "back" != o.zposition && l.push(i.mm(this.opts[n].zposition)), r.$html.addClass(l.join(" ")), setTimeout(function() { e.vars.opened = !0 }, this.conf.openingInterval), this.$menu.addClass(i.opened)
        }, t[e].prototype._openFinish = function() {
            var t = this;
            this.__transitionend(r.$page.first(), function() { t.trigger("open:finish") }, this.conf.transitionDuration), this.trigger("open:start"), r.$html.addClass(i.opening)
        }, t[e].prototype.close = function() {
            if (this.trigger("close:before"), this.vars.opened) {
                var e = this;
                this.__transitionend(r.$page.first(), function() {
                    e.$menu.removeClass(i.opened);
                    var a = [i.opened, i.blocking, i.modal, i.background, i.mm(e.opts[n].position), i.mm(e.opts[n].zposition)];
                    r.$html.removeClass(a.join(" ")), r.$page.each(function() { t(this).attr("style", t(this).data(s.style)) }), e.vars.opened = !1, e.trigger("close:finish")
                }, this.conf.transitionDuration), this.trigger("close:start"), r.$html.removeClass(i.opening), this.trigger("close:after")
            }
        }, t[e].prototype.closeAllOthers = function() {
            r.$allMenus.not(this.$menu).each(function() {
                var n = t(this).data(e);
                n && n.close && n.close()
            })
        }, t[e].prototype.setPage = function(e) {
            this.trigger("setPage:before", e);
            var s = this,
                a = this.conf[n];
            e && e.length || (e = r.$body.find(a.pageSelector), a.noPageSelector.length && (e = e.not(a.noPageSelector.join(", "))), e.length > 1 && a.wrapPageIfNeeded && (e = e.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), e.each(function() { t(this).attr("id", t(this).attr("id") || s.__getUniqueId()) }), e.addClass(i.page + " " + i.slideout), r.$page = e, this.trigger("setPage:after", e)
        }, t[e].prototype["_initWindow_" + n] = function() {
            r.$wndw.off(a.keydown + "-" + n).on(a.keydown + "-" + n, function(t) { if (r.$html.hasClass(i.opened) && 9 == t.keyCode) return t.preventDefault(), !1 });
            var t = 0;
            r.$wndw.off(a.resize + "-" + n).on(a.resize + "-" + n, function(e, n) {
                if (1 == r.$page.length && (n || r.$html.hasClass(i.opened))) {
                    var s = r.$wndw.height();
                    (n || s != t) && (t = s, r.$page.css("minHeight", s))
                }
            })
        }, t[e].prototype._initBlocker = function() {
            var e = this;
            this.opts[n].blockUI && (r.$blck || (r.$blck = t('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), r.$blck.appendTo(r.$body).off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n).on(a.touchstart + "-" + n + " " + a.touchmove + "-" + n, function(t) { t.preventDefault(), t.stopPropagation(), r.$blck.trigger(a.mousedown + "-" + n) }).off(a.mousedown + "-" + n).on(a.mousedown + "-" + n, function(t) { t.preventDefault(), r.$html.hasClass(i.modal) || (e.closeAllOthers(), e.close()) }))
        };
        var i, s, a, r
    }(jQuery),
    function(t) {
        var e = "mmenu",
            n = "scrollBugFix";
        t[e].addons[n] = {
            setup: function() {
                var s = this.opts[n];
                this.conf[n];
                r = t[e].glbl, t[e].support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof s && (s = { fix: s }), "object" != typeof s && (s = {}), s = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], s), s.fix && (this.bind("open:start", function() { this.$pnls.children("." + i.opened).scrollTop(0) }), this.bind("initMenu:after", function() { this["_initWindow_" + n]() })))
            },
            add: function() { i = t[e]._c, s = t[e]._d, a = t[e]._e },
            clickAnchor: function(t, e) {}
        }, t[e].defaults[n] = { fix: !0 }, t[e].prototype["_initWindow_" + n] = function() {
            var e = this;
            r.$docu.off(a.touchmove + "-" + n).on(a.touchmove + "-" + n, function(t) { r.$html.hasClass(i.opened) && t.preventDefault() });
            var s = !1;
            r.$body.off(a.touchstart + "-" + n).on(a.touchstart + "-" + n, "." + i.panels + "> ." + i.opened, function(t) { r.$html.hasClass(i.opened) && (s || (s = !0, 0 === t.currentTarget.scrollTop ? t.currentTarget.scrollTop = 1 : t.currentTarget.scrollHeight === t.currentTarget.scrollTop + t.currentTarget.offsetHeight && (t.currentTarget.scrollTop -= 1), s = !1)) }).off(a.touchmove + "-" + n).on(a.touchmove + "-" + n, "." + i.panels + "> ." + i.opened, function(e) { r.$html.hasClass(i.opened) && t(this)[0].scrollHeight > t(this).innerHeight() && e.stopPropagation() }), r.$wndw.off(a.orientationchange + "-" + n).on(a.orientationchange + "-" + n, function() { e.$pnls.children("." + i.opened).scrollTop(0).css({ "-webkit-overflow-scrolling": "auto" }).css({ "-webkit-overflow-scrolling": "touch" }) })
        };
        var i, s, a, r
    }(jQuery),
    function(t) {
        var e = "mmenu",
            n = "screenReader";
        t[e].addons[n] = {
            setup: function() {
                var a = this,
                    o = this.opts[n],
                    l = this.conf[n];
                r = t[e].glbl, "boolean" == typeof o && (o = { aria: o, text: o }), "object" != typeof o && (o = {}), o = this.opts[n] = t.extend(!0, {}, t[e].defaults[n], o), o.aria && (this.bind("initAddons:after", function() { this.bind("initMenu:after", function() { this.trigger("initMenu:after:sr-aria") }), this.bind("initNavbar:after", function() { this.trigger("initNavbar:after:sr-aria", arguments[0]) }), this.bind("openPanel:start", function() { this.trigger("openPanel:start:sr-aria", arguments[0]) }), this.bind("close:start", function() { this.trigger("close:start:sr-aria") }), this.bind("close:finish", function() { this.trigger("close:finish:sr-aria") }), this.bind("open:start", function() { this.trigger("open:start:sr-aria") }), this.bind("open:finish", function() { this.trigger("open:finish:sr-aria") }) }), this.bind("updateListview", function() { this.$pnls.find("." + i.listview).children().each(function() { a.__sr_aria(t(this), "hidden", t(this).is("." + i.hidden)) }) }), this.bind("openPanel:start", function(t) {
                    var e = this.$menu.find("." + i.panel).not(t).not(t.parents("." + i.panel)),
                        n = t.add(t.find("." + i.vertical + "." + i.opened).children("." + i.panel));
                    this.__sr_aria(e, "hidden", !0), this.__sr_aria(n, "hidden", !1)
                }), this.bind("closePanel", function(t) { this.__sr_aria(t, "hidden", !0) }), this.bind("initPanels:after", function(e) {
                    var n = e.find("." + i.prev + ", ." + i.next).each(function() { a.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", "")) });
                    this.__sr_aria(n, "haspopup", !0)
                }), this.bind("initNavbar:after", function(t) {
                    var e = t.children("." + i.navbar);
                    this.__sr_aria(e, "hidden", !t.hasClass(i.hasnavbar))
                }), o.text && (this.bind("initlistview:after", function(t) {
                    var e = t.find("." + i.listview).find("." + i.fullsubopen).parent().children("span");
                    this.__sr_aria(e, "hidden", !0)
                }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(t) {
                    var e = t.children("." + i.navbar),
                        n = !!e.children("." + i.prev).length;
                    this.__sr_aria(e.children("." + i.title), "hidden", n)
                }))), o.text && (this.bind("initAddons:after", function() { this.bind("setPage:after", function() { this.trigger("setPage:after:sr-text", arguments[0]) }) }), this.bind("initNavbar:after", function(n) {
                    var s = n.children("." + i.navbar),
                        a = s.children("." + i.title).text(),
                        r = t[e].i18n(l.text.closeSubmenu);
                    a && (r += " (" + a + ")"), s.children("." + i.prev).html(this.__sr_text(r))
                }), this.bind("initListview:after", function(n) {
                    var r = n.data(s.parent);
                    if (r && r.length) {
                        var o = r.children("." + i.next),
                            d = o.nextAll("span, a").first().text(),
                            c = t[e].i18n(l.text[o.parent().is("." + i.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                        d && (c += " (" + d + ")"), o.html(a.__sr_text(c))
                    }
                }))
            },
            add: function() { i = t[e]._c, s = t[e]._d, a = t[e]._e, i.add("sronly") },
            clickAnchor: function(t, e) {}
        }, t[e].defaults[n] = { aria: !0, text: !0 }, t[e].configuration[n] = { text: { closeMenu: "Close menu", closeSubmenu: "Close submenu", openSubmenu: "Open submenu", toggleSubmenu: "Toggle submenu" } }, t[e].prototype.__sr_aria = function(t, e, n) { t.prop("aria-" + e, n)[n ? "attr" : "removeAttr"]("aria-" + e, n) }, t[e].prototype.__sr_text = function(t) { return '<span class="' + i.sronly + '">' + t + "</span>" };
        var i, s, a, r
    }(jQuery);
    return true;
}));