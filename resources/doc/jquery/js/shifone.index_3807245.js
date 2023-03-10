"use strict";
!function (window) {
    function Waterfall() {
        this.$element = $("#col-list"), this.options = defaults, this.colHeightArray = [], this.styleQueue = [], this._init()
    }

    var $window = $(window), defaults = {
        itemCls: "col-item",
        prefix: "waterfall",
        fitWidth: !0,
        colWidth: 210,
        gutterWidth: 3,
        gutterHeight: 3,
        align: "left",
        minCol: 1,
        maxCol: void 0,
        resizable: !0
    };
    window.Waterfall = Waterfall, Waterfall.prototype = {
        constructor: Waterfall, _init: function (a) {
            {
                var e = this.options;
                e.path
            }
            this._setColumns(), this._resetColumnsHeightArray(), this.reLayout(a), e.resizable && this._doResize()
        }, _getColumns: function () {
            var a = this.options, e = a.fitWidth ? this.$element.parent() : this.$element,
                t = "BODY" === e[0].tagName ? e.width() - 20 : e.width(), l = a.colWidth, u = a.gutterWidth,
                d = a.minCol, r = a.maxCol, i = Math.floor(t / (l + u)), s = Math.max(i, d);
            return r && s > r ? r : s
        }, _setColumns: function () {
            this.cols = this._getColumns()
        }, _getItems: function (a) {
            var e = a.filter("." + this.options.itemCls).css({position: "absolute"});
            return e
        }, _resetColumnsHeightArray: function () {
            var a, e = this.cols;
            for (this.colHeightArray.length = e, a = 0; e > a; a++) this.colHeightArray[a] = 0
        }, layout: function (a, e) {
            var t, l, u, d, r, i, s = this.options, n = this._getItems(a), o = "css", v = s.animationOptions,
                c = s.colWidth, p = s.gutterWidth, h = this.colHeightArray.length, y = s.align;
            for (this.$element.append(n), "center" === y ? (t = (this.$element.width() - c * h - p * (h - 1)) / 2, t = t > 0 ? t : 0) : "left" === y ? t = 0 : "right" === y && (t = this.$element.width() - c * h - p * (h - 1)), u = 0, r = n.length; r > u; u++) this._placeItems(n[u], t);
            for (d = 0, i = this.styleQueue.length; i > d; d++) l = this.styleQueue[d], l.$el[o](l.style, v);
            this.$element.height(Math.max.apply({}, this.colHeightArray)), this.styleQueue = [], e && e.call(n), $("#main-loading").delay(500).fadeOut("normal", function () {
                $("html,body").removeClass("loading-process")
            })
        }, reLayout: function (a) {
            var e = this.$element.find("." + this.options.itemCls);
            this._resetColumnsHeightArray(), this.layout(e, a)
        }, _placeItems: function (a, e) {
            var t, l, u = $(a), d = this.options, r = d.colWidth, i = d.gutterWidth, s = d.gutterHeight,
                n = this.colHeightArray, o = (n.length, Math.min.apply({}, n)), v = $.inArray(o, n);
            t = v, l = {left: (r + i) * t + e, top: n[t]}, this.styleQueue.push({
                $el: u,
                style: l
            }), n[t] += u.outerHeight() + s
        }, append: function (a, e) {
            this.$element.append(a), this.reLayout(e)
        }, option: function (a, e) {
            $.isPlainObject(a) && (this.options = $.extend(!0, this.options, a), "function" == typeof e && e(), this._init())
        }, _resize: function () {
            var a = this.cols, e = this._getColumns();
            (e !== a || "left" !== this.options.align) && (this.cols = e, this.reLayout())
        }, _doResize: function () {
            var a, e = this;
            $window.bind("resize", function () {
                a && clearTimeout(a), a = setTimeout(function () {
                    e._resize()
                }, 100)
            })
        }
    }, $("#left-panel").mCustomScrollbar({theme: "rounded"});
    var $main_menu = $("#main-menu > li"), $sub_menu = $(".sub-menu");
    $main_menu.click(function () {
        var a = $(this);
        a.hasClass("active") ? (a.find(".sub-menu").slideUp(), a.removeClass("active")) : ($sub_menu.slideUp(), $main_menu.removeClass("active"), a.find(".sub-menu").slideDown(), a.addClass("active"))
    }), $sub_menu.find("a").click(function () {
        {
            var a = $(this);
            a.data("target")
        }
        $sub_menu.find("li").removeClass("active"), a.parent().addClass("active")
    }), $("#toggle-menu").click(function () {
        $("#left-panel").toggleClass("left-panel-hide")
    });
    var data = [{value: "all", data: "all"}, {value: "attr", data: "attr"}, {
        value: ":animated",
        data: "animated"
    }, {value: "addClass", data: "addClass"}, {value: "add", data: "add"}, {
        value: "andSelf",
        data: "andSelf"
    }, {value: "addBack", data: "addBack"}, {value: "append", data: "append"}, {
        value: "appendTo",
        data: "appendTo"
    }, {value: "after", data: "after"}, {value: "animate", data: "animate"}, {
        value: "ajaxComplete",
        data: "ajaxComplete"
    }, {value: "ajaxError", data: "ajaxError"}, {value: "ajaxSend", data: "ajaxSend"}, {
        value: "ajaxStart",
        data: "ajaxStart"
    }, {value: "ajaxStop", data: "ajaxStop"}, {value: "ajaxSuccess", data: "ajaxSuccess"}, {
        value: "attributeHas",
        data: "attributeHas"
    }, {value: "attributeEquals", data: "attributeEquals"}, {
        value: "attributeNotEqual",
        data: "attributeNotEqual"
    }, {value: "attributeStartsWith", data: "attributeStartsWith"}, {
        value: "attributeEndsWith",
        data: "attributeEndsWith"
    }, {value: "attributeContains", data: "attributeContains"}, {
        value: "attributeMultiple",
        data: "attributeMultiple"
    }, {value: "about", data: "about"}, {value: "bind", data: "bind"}, {value: "blur", data: "blur"}, {
        value: ":button",
        data: "button"
    }, {value: "before", data: "before"}, {value: "bugandUpdate", data: "bugandUpdate"}, {
        value: "css",
        data: "css"
    }, {value: "click", data: "click"}, {value: "class", data: "class"}, {
        value: "children",
        data: "children"
    }, {value: "closest", data: "closest"}, {value: "contents", data: "contents"}, {
        value: "clone",
        data: "clone"
    }, {value: "context", data: "context"}, {value: "child", data: "child"}, {
        value: ":checkbox",
        data: "checkbox"
    }, {value: ":contains", data: "contains"}, {value: "change", data: "change"}, {
        value: ":checked",
        data: "checked_1"
    }, {value: "clearQueue", data: "clearQueue"}, {
        value: "callbacks.add",
        data: "callbacks.add"
    }, {value: "callbacks.disable", data: "callbacks.disable"}, {
        value: "callbacks.empty",
        data: "callbacks.empty"
    }, {value: "callbacks.fire", data: "callbacks.fire"}, {
        value: "callbacks.fired",
        data: "callbacks.fired"
    }, {value: "callbacks.fireWith", data: "callbacks.fireWith"}, {
        value: "callbacks.has",
        data: "callbacks.has"
    }, {value: "callbacks.lock", data: "callbacks.lock"}, {
        value: "callbacks.locked",
        data: "callbacks.locked"
    }, {value: "callbacks.remove", data: "callbacks.remove"}, {value: "data", data: "data"}, {
        value: "dequeue",
        data: "dequeue"
    }, {value: "descendant", data: "descendant"}, {value: ":disabled", data: "disabled_1"}, {
        value: "detach",
        data: "detach"
    }, {value: "die", data: "die"}, {value: "delegate", data: "delegate"}, {
        value: "dblclick",
        data: "dblclick_1"
    }, {value: "delay", data: "delay"}, {value: "deferred.done", data: "deferred.done"}, {
        value: "deferred.fail",
        data: "deferred.fail"
    }, {value: "deferred.isRejected", data: "deferred.isRejected"}, {
        value: "deferred.isResolved",
        data: "deferred.isResolved"
    }, {value: "deferred.reject", data: "deferred.reject"}, {
        value: "deferred.rejectWith",
        data: "deferred.rejectWith"
    }, {value: "deferred.resolve", data: "deferred.resolve"}, {
        value: "deferred.resolveWith",
        data: "deferred.resolveWith"
    }, {value: "deferred.then", data: "deferred.then"}, {
        value: "deferred.promise",
        data: "deferred.promise"
    }, {value: "deferred.pipe", data: "deferred.pipe"}, {
        value: "deferred.always",
        data: "deferred.always"
    }, {value: "deferred.notify", data: "deferred.notify"}, {
        value: "deferred.notifyWith",
        data: "deferred.notifyWith"
    }, {value: "deferred.progress", data: "deferred.progress"}, {
        value: "deferred.state",
        data: "deferred.state"
    }, {value: "each", data: "each"}, {value: "element", data: "element"}, {
        value: ":even",
        data: "even"
    }, {value: ":enabled", data: ":enabled_1"}, {value: "eq", data: "eq"}, {value: "end", data: "end"}, {
        value: "empty",
        data: "empty"
    }, {value: "error", data: "error"}, {
        value: "event.currentTarget",
        data: "event.currentTarget"
    }, {value: "event.data", data: "event.data"}, {
        value: "event.delegateTarget",
        data: "event.delegateTarget"
    }, {
        value: "event.isDefaultPrevented",
        data: "event.isDefaultPrevented"
    }, {
        value: "event.isImmediatePropagationStopped",
        data: "event.isImmediatePropagationStopped"
    }, {value: "event.isPropagationStopped", data: "event.isPropagationStopped"}, {
        value: "event.namespace",
        data: "event.namespace"
    }, {value: "event.pageX", data: "event.pageX"}, {
        value: "event.pageY",
        data: "event.pageY"
    }, {value: "event.preventDefault", data: "event.preventDefault"}, {
        value: "event.relatedTarget",
        data: "event.relatedTarget"
    }, {value: "event.result", data: "event.result"}, {
        value: "event.stopImmediatePropagation",
        data: "event.stopImmediatePropagation"
    }, {value: "event.stopPropagation", data: "event.stopPropagation"}, {
        value: "event.target",
        data: "event.target"
    }, {value: "event.timeStamp", data: "event.timeStamp"}, {
        value: "event.type",
        data: "event.type"
    }, {value: "event.which", data: "event.which"}, {value: ":eq", data: "eq_1"}, {
        value: ":empty",
        data: "empty_1"
    }, {value: "find", data: "find"}, {value: ":file", data: "file_1"}, {
        value: "first",
        data: "first"
    }, {value: ":first", data: "first_1"}, {value: "filter", data: "filter"}, {
        value: "focus",
        data: "focus"
    }, {value: ":focus", data: "focus_1"}, {value: "fadeIn", data: "fadeIn"}, {
        value: "fadeOut",
        data: "fadeOut"
    }, {value: "fadeTo", data: "fadeTo"}, {value: "fadeToggle", data: "fadeToggle"}, {
        value: "focusin",
        data: "focusin"
    }, {value: "focusout", data: "focusout"}, {value: ":first-child", data: "firstChild"}, {
        value: "finish",
        data: "finish"
    }, {value: ":first-of-type", data: "firstOfType"}, {value: ":gt", data: "gt"}, {
        value: "get",
        data: "get"
    }, {value: "height", data: "height"}, {value: "hover", data: "hover"}, {
        value: "html",
        data: "html"
    }, {value: ":header", data: "header"}, {value: ":hidden", data: "hidden_1"}, {
        value: "has",
        data: "has"
    }, {value: ":has", data: "has_1"}, {value: "hasClass", data: "hasClass"}, {
        value: "hide",
        data: "hide"
    }, {value: "html5", data: "html5"}, {value: "id", data: "id"}, {value: "is", data: "is"}, {
        value: ":input",
        data: "input"
    }, {value: ":image", data: "image"}, {value: "index", data: "index_1"}, {
        value: "insertAfter",
        data: "insertAfter"
    }, {value: "insertBefore", data: "insertBefore"}, {value: "innerHeight", data: "innerHeight"}, {
        value: "innerWidth",
        data: "innerWidth"
    }, {value: "jquery", data: "jquery"}, {value: "jQuery.cssHooks", data: "jQuery.cssHooks"}, {
        value: "jQuery.ajax",
        data: "jQuery.Ajax"
    }, {value: "jQuery.get", data: "jQuery.get"}, {
        value: "jQuery.getJSON",
        data: "jQuery.getJSON"
    }, {value: "jQuery.getScript", data: "jQuery.getScript"}, {
        value: "jQuery.post",
        data: "jQuery.post"
    }, {value: "jQuery.ajaxSetup", data: "jQuery.ajaxSetup"}, {
        value: "jQuery.parseXML",
        data: "jQuery.parseXML"
    }, {value: "jQuery.support", data: "jQuery.support"}, {
        value: "jQuery.browser",
        data: "jQuery.browser"
    }, {value: "jQuery.browser.version", data: "jQuery.browser.version"}, {
        value: "jQuery.boxModel",
        data: "jQuery.boxModel"
    }, {value: "jQuery.each", data: "jQuery.each"}, {
        value: "jQuery.extend",
        data: "jQuery.extend"
    }, {value: "jQuery.grep", data: "jQuery.grep"}, {value: "jQuery.sub", data: "jQuery.sub"}, {
        value: "jQuery.when",
        data: "jQuery.when"
    }, {value: "jQuery.makeArray", data: "jQuery.makeArray"}, {
        value: "jQuery.map",
        data: "jQuery.map"
    }, {value: "jQuery.inArray", data: "jQuery.inArray"}, {
        value: "jQuery.toArray",
        data: "jQuery.toArray"
    }, {value: "jQuery.merge", data: "jQuery.merge"}, {
        value: "jQuery.unique",
        data: "jQuery.unique"
    }, {value: "jQuery.uniqueSort", data: "jQuery.uniqueSort"}, {
        value: "jQuery.parseJSON",
        data: "jQuery.parseJSON"
    }, {value: "jQuery.noop", data: "jQuery.noop"}, {
        value: "jQuery.proxy",
        data: "jQuery.proxy"
    }, {value: "jQuery.contains", data: "jQuery.contains"}, {
        value: "jQuery.isArray",
        data: "jQuery.isArray"
    }, {value: "jQuery.isFunction", data: "jQuery.isFunction"}, {
        value: "jQuery.isEmptyObject",
        data: "jQuery.isEmptyObject"
    }, {value: "jQuery.isPlainObject", data: "jQuery.isPlainObject"}, {
        value: "jQuery.isWindow",
        data: "jQuery.isWindow"
    }, {value: "jQuery.isNumeric", data: "jQuery.isNumeric"}, {
        value: "jQuery.type",
        data: "jQuery.type"
    }, {value: "jQuery.trim", data: "jQuery.trim"}, {
        value: "jQuery.param",
        data: "jQuery.param"
    }, {value: "jQuery.error", data: "jQuery.error"}, {
        value: "jQuery.callbacks",
        data: "jQuery.callbacks"
    }, {value: "jQuery.fn.extend", data: "jQuery.fn.extend"}, {
        value: "jQuery.extend_object",
        data: "jQuery.extend_object"
    }, {value: "jQuery.noConflict", data: "jQuery.noConflict"}, {
        value: "jQuery.data",
        data: "jQuery.data"
    }, {value: "jQuery.fx.off", data: "jQuery.fx.off"}, {
        value: "jQuery.fx.interval",
        data: "jQuery.fx.interval"
    }, {value: "jQuery_callback", data: "jQuery_callback"}, {
        value: "jQuery.holdReady",
        data: "jQuery.holdReady"
    }, {value: "jQuery.readyException", data: "jQuery_readyException"}, {
        value: "jQuery_selector_context",
        data: "jQuery_selector_context"
    }, {value: "jQuery_html_ownerDocument", data: "jQuery_html_ownerDocument"}, {
        value: "keydown",
        data: "keydown"
    }, {value: "keypress", data: "keypress"}, {value: "keyup", data: "keyup"}, {
        value: "length",
        data: "length"
    }, {value: "live", data: "live"}, {value: "load", data: "load"}, {value: ":lt", data: "lt"}, {
        value: "last",
        data: "last"
    }, {value: ":last", data: "last_1"}, {value: ":lang", data: "lang"}, {
        value: ":last-child",
        data: "lastChild"
    }, {value: ":last-of-type", data: "lastOfType"}, {value: "map", data: "map"}, {
        value: "multiple",
        data: "multiple"
    }, {value: "mousedown", data: "mousedown"}, {value: "mouseenter", data: "mouseenter"}, {
        value: "mouseleave",
        data: "mouseleave"
    }, {value: "mousemove", data: "mousemove"}, {value: "mouseout", data: "mouseout"}, {
        value: "mouseover",
        data: "mouseover"
    }, {value: "mouseup", data: "mouseup"}, {value: "not", data: "not"}, {value: ":not", data: "not_1"}, {
        value: "next",
        data: "next"
    }, {value: "next_1", data: "next_1"}, {value: "nextAll", data: "nextAll"}, {
        value: "nextUntil",
        data: "nextUntil"
    }, {value: ":nth-child", data: "nthChild"}, {
        value: ":nth-last-child",
        data: "nthLastChild"
    }, {value: ":nth-last-of-type", data: "nthLastOfType"}, {value: ":nth-of-type", data: "nthOfType"}, {
        value: "on",
        data: "on"
    }, {value: "off", data: "off"}, {value: "one", data: "one"}, {value: ":odd", data: "odd"}, {
        value: ":only-child",
        data: "onlyChild"
    }, {value: ":only-of-type", data: "onlyOfType"}, {value: "offset", data: "offset"}, {
        value: "offsetParent",
        data: "offsetParent"
    }, {value: "outerHeight", data: "outerHeight"}, {value: "outerWidth", data: "outerWidth"}, {
        value: ":parent",
        data: "parent_1"
    }, {value: ":password", data: "password"}, {value: "prop", data: "prop"}, {
        value: "parent",
        data: "parent"
    }, {value: "parents", data: "parents"}, {value: "parentsUntil", data: "parentsUntil"}, {
        value: "prev",
        data: "prev"
    }, {value: "prevAll", data: "prevAll"}, {value: "prevUntil", data: "prevUntil"}, {
        value: "prepend",
        data: "prepend"
    }, {value: "prependTo", data: "prependTo"}, {value: "position", data: "position"}, {
        value: "queue",
        data: "queue"
    }, {value: ":radio", data: "radio"}, {value: ":reset", data: "reset"}, {
        value: "removeAttr",
        data: "removeAttr"
    }, {value: "removeData", data: "removeData"}, {value: "removeClass", data: "removeClass"}, {
        value: "replaceWith",
        data: "replaceWith"
    }, {value: "replaceAll", data: "replaceAll"}, {value: "removeProp", data: "removeProp"}, {
        value: "remove",
        data: "remove"
    }, {value: "ready", data: "ready"}, {value: "resize", data: "resize"}, {
        value: "regexp",
        data: "regexp"
    }, {value: ":root", data: "root"}, {value: "show", data: "show"}, {value: "size", data: "size"}, {
        value: "stop",
        data: "stop"
    }, {value: "selector", data: "selector"}, {value: "siblings_1", data: "siblings_1"}, {
        value: ":submit",
        data: "submit_1"
    }, {value: ":selected", data: "selected_1"}, {
        value: "jQuery.escapeSelector",
        data: "jQuery.escapeSelector"
    }, {value: "slice", data: "slice"}, {value: "siblings", data: "siblings"}, {
        value: "scrollTop",
        data: "scrollTop"
    }, {value: "scrollLeft", data: "scrollLeft"}, {value: "scroll", data: "scroll"}, {
        value: "select",
        data: "select"
    }, {value: "submit", data: "submit"}, {value: "slideDown", data: "slideDown"}, {
        value: "slideUp",
        data: "slideUp"
    }, {value: "slideToggle", data: "slideToggle"}, {value: "serialize", data: "serialize"}, {
        value: "serializeArray",
        data: "serializeArray"
    }, {value: ":target", data: "target"}, {value: "text", data: "text"}, {
        value: ":text",
        data: "text_1"
    }, {value: "trigger", data: "trigger"}, {value: "toggle", data: "toggle"}, {
        value: "toggleClass",
        data: "toggleClass"
    }, {value: "triggerHandler", data: "triggerHandler"}, {value: "unwrap", data: "unwrap"}, {
        value: "unbind",
        data: "unbind"
    }, {value: "undelegate", data: "undelegate"}, {value: "unload", data: "unload"}, {
        value: "val",
        data: "val"
    }, {value: ":visible", data: "visible"}, {value: "width", data: "width"}, {
        value: "wrap",
        data: "wrap"
    }, {value: "wrapAll", data: "wrapAll"}, {value: "wrapInner", data: "wrapInner"}];
    if (window.Waterfall) {
        new Waterfall()
    }
    ;
    $("#menu-home").addClass("active"), $("#autoquery").autocomplete({
        width: 210,
        lookup: data,
        autoSelectFirst: !0,
        onSelect: function (a) {
            window.location.href = a.data + ".html"
        }
    }), $("#top-swiper .swiper-slide").length > 1 && new Swiper("#top-swiper", {autoplay: 1e4, speed: 500, loop: !0});
}(window);