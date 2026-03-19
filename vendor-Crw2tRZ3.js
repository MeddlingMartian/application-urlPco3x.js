//identity/.../assets/vendor-Crw2tRZ3.js
function Sy(n, r) {
    for (var o = 0; o < r.length; o++) {
        const l = r[o];
        if (typeof l != "string" && !Array.isArray(l)) {
            for (const u in l)
                if (u !== "default" && !(u in n)) {
                    const f = Object.getOwnPropertyDescriptor(l, u);
                    f && Object.defineProperty(n, u, f.get ? f : {
                        enumerable: !0,
                        get: () => l[u]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
function vo(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
function Cy(n) {
    if (Object.prototype.hasOwnProperty.call(n, "__esModule"))
        return n;
    var r = n.default;
    if (typeof r == "function") {
        var o = function l() {
            var u = !1;
            try {
                u = this instanceof l
            } catch {}
            return u ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments)
        };
        o.prototype = r.prototype
    } else
        o = {};
    return Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    Object.keys(n).forEach(function(l) {
        var u = Object.getOwnPropertyDescriptor(n, l);
        Object.defineProperty(o, l, u.get ? u : {
            enumerable: !0,
            get: function() {
                return n[l]
            }
        })
    }),
    o
}
var ou = {
    exports: {}
}
  , io = {}
  , su = {
    exports: {}
}
  , Ee = {};
var sp;
function Ey() {
    if (sp)
        return Ee;
    sp = 1;
    var n = Symbol.for("react.element")
      , r = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , l = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.provider")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , v = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , g = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function w(O) {
        return O === null || typeof O != "object" ? null : (O = y && O[y] || O["@@iterator"],
        typeof O == "function" ? O : null)
    }
    var b = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , E = Object.assign
      , x = {};
    function M(O, $, ee) {
        this.props = O,
        this.context = $,
        this.refs = x,
        this.updater = ee || b
    }
    M.prototype.isReactComponent = {},
    M.prototype.setState = function(O, $) {
        if (typeof O != "object" && typeof O != "function" && O != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, O, $, "setState")
    }
    ,
    M.prototype.forceUpdate = function(O) {
        this.updater.enqueueForceUpdate(this, O, "forceUpdate")
    }
    ;
    function A() {}
    A.prototype = M.prototype;
    function z(O, $, ee) {
        this.props = O,
        this.context = $,
        this.refs = x,
        this.updater = ee || b
    }
    var B = z.prototype = new A;
    B.constructor = z,
    E(B, M.prototype),
    B.isPureReactComponent = !0;
    var W = Array.isArray
      , Z = Object.prototype.hasOwnProperty
      , te = {
        current: null
    }
      , J = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function re(O, $, ee) {
        var ae, ue = {}, me = null, xe = null;
        if ($ != null)
            for (ae in $.ref !== void 0 && (xe = $.ref),
            $.key !== void 0 && (me = "" + $.key),
            $)
                Z.call($, ae) && !J.hasOwnProperty(ae) && (ue[ae] = $[ae]);
        var ke = arguments.length - 2;
        if (ke === 1)
            ue.children = ee;
        else if (1 < ke) {
            for (var Ne = Array(ke), Be = 0; Be < ke; Be++)
                Ne[Be] = arguments[Be + 2];
            ue.children = Ne
        }
        if (O && O.defaultProps)
            for (ae in ke = O.defaultProps,
            ke)
                ue[ae] === void 0 && (ue[ae] = ke[ae]);
        return {
            $$typeof: n,
            type: O,
            key: me,
            ref: xe,
            props: ue,
            _owner: te.current
        }
    }
    function he(O, $) {
        return {
            $$typeof: n,
            type: O.type,
            key: $,
            ref: O.ref,
            props: O.props,
            _owner: O._owner
        }
    }
    function Y(O) {
        return typeof O == "object" && O !== null && O.$$typeof === n
    }
    function K(O) {
        var $ = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + O.replace(/[=:]/g, function(ee) {
            return $[ee]
        })
    }
    var V = /\/+/g;
    function ne(O, $) {
        return typeof O == "object" && O !== null && O.key != null ? K("" + O.key) : $.toString(36)
    }
    function T(O, $, ee, ae, ue) {
        var me = typeof O;
        (me === "undefined" || me === "boolean") && (O = null);
        var xe = !1;
        if (O === null)
            xe = !0;
        else
            switch (me) {
            case "string":
            case "number":
                xe = !0;
                break;
            case "object":
                switch (O.$$typeof) {
                case n:
                case r:
                    xe = !0
                }
            }
        if (xe)
            return xe = O,
            ue = ue(xe),
            O = ae === "" ? "." + ne(xe, 0) : ae,
            W(ue) ? (ee = "",
            O != null && (ee = O.replace(V, "$&/") + "/"),
            T(ue, $, ee, "", function(Be) {
                return Be
            })) : ue != null && (Y(ue) && (ue = he(ue, ee + (!ue.key || xe && xe.key === ue.key ? "" : ("" + ue.key).replace(V, "$&/") + "/") + O)),
            $.push(ue)),
            1;
        if (xe = 0,
        ae = ae === "" ? "." : ae + ":",
        W(O))
            for (var ke = 0; ke < O.length; ke++) {
                me = O[ke];
                var Ne = ae + ne(me, ke);
                xe += T(me, $, ee, Ne, ue)
            }
        else if (Ne = w(O),
        typeof Ne == "function")
            for (O = Ne.call(O),
            ke = 0; !(me = O.next()).done; )
                me = me.value,
                Ne = ae + ne(me, ke++),
                xe += T(me, $, ee, Ne, ue);
        else if (me === "object")
            throw $ = String(O),
            Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
        return xe
    }
    function L(O, $, ee) {
        if (O == null)
            return O;
        var ae = []
          , ue = 0;
        return T(O, ae, "", "", function(me) {
            return $.call(ee, me, ue++)
        }),
        ae
    }
    function G(O) {
        if (O._status === -1) {
            var $ = O._result;
            $ = $(),
            $.then(function(ee) {
                (O._status === 0 || O._status === -1) && (O._status = 1,
                O._result = ee)
            }, function(ee) {
                (O._status === 0 || O._status === -1) && (O._status = 2,
                O._result = ee)
            }),
            O._status === -1 && (O._status = 0,
            O._result = $)
        }
        if (O._status === 1)
            return O._result.default;
        throw O._result
    }
    var N = {
        current: null
    }
      , C = {
        transition: null
    }
      , U = {
        ReactCurrentDispatcher: N,
        ReactCurrentBatchConfig: C,
        ReactCurrentOwner: te
    };
    function j() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Ee.Children = {
        map: L,
        forEach: function(O, $, ee) {
            L(O, function() {
                $.apply(this, arguments)
            }, ee)
        },
        count: function(O) {
            var $ = 0;
            return L(O, function() {
                $++
            }),
            $
        },
        toArray: function(O) {
            return L(O, function($) {
                return $
            }) || []
        },
        only: function(O) {
            if (!Y(O))
                throw Error("React.Children.only expected to receive a single React element child.");
            return O
        }
    },
    Ee.Component = M,
    Ee.Fragment = o,
    Ee.Profiler = u,
    Ee.PureComponent = z,
    Ee.StrictMode = l,
    Ee.Suspense = v,
    Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U,
    Ee.act = j,
    Ee.cloneElement = function(O, $, ee) {
        if (O == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
        var ae = E({}, O.props)
          , ue = O.key
          , me = O.ref
          , xe = O._owner;
        if ($ != null) {
            if ($.ref !== void 0 && (me = $.ref,
            xe = te.current),
            $.key !== void 0 && (ue = "" + $.key),
            O.type && O.type.defaultProps)
                var ke = O.type.defaultProps;
            for (Ne in $)
                Z.call($, Ne) && !J.hasOwnProperty(Ne) && (ae[Ne] = $[Ne] === void 0 && ke !== void 0 ? ke[Ne] : $[Ne])
        }
        var Ne = arguments.length - 2;
        if (Ne === 1)
            ae.children = ee;
        else if (1 < Ne) {
            ke = Array(Ne);
            for (var Be = 0; Be < Ne; Be++)
                ke[Be] = arguments[Be + 2];
            ae.children = ke
        }
        return {
            $$typeof: n,
            type: O.type,
            key: ue,
            ref: me,
            props: ae,
            _owner: xe
        }
    }
    ,
    Ee.createContext = function(O) {
        return O = {
            $$typeof: d,
            _currentValue: O,
            _currentValue2: O,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        O.Provider = {
            $$typeof: f,
            _context: O
        },
        O.Consumer = O
    }
    ,
    Ee.createElement = re,
    Ee.createFactory = function(O) {
        var $ = re.bind(null, O);
        return $.type = O,
        $
    }
    ,
    Ee.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Ee.forwardRef = function(O) {
        return {
            $$typeof: p,
            render: O
        }
    }
    ,
    Ee.isValidElement = Y,
    Ee.lazy = function(O) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: O
            },
            _init: G
        }
    }
    ,
    Ee.memo = function(O, $) {
        return {
            $$typeof: m,
            type: O,
            compare: $ === void 0 ? null : $
        }
    }
    ,
    Ee.startTransition = function(O) {
        var $ = C.transition;
        C.transition = {};
        try {
            O()
        } finally {
            C.transition = $
        }
    }
    ,
    Ee.unstable_act = j,
    Ee.useCallback = function(O, $) {
        return N.current.useCallback(O, $)
    }
    ,
    Ee.useContext = function(O) {
        return N.current.useContext(O)
    }
    ,
    Ee.useDebugValue = function() {}
    ,
    Ee.useDeferredValue = function(O) {
        return N.current.useDeferredValue(O)
    }
    ,
    Ee.useEffect = function(O, $) {
        return N.current.useEffect(O, $)
    }
    ,
    Ee.useId = function() {
        return N.current.useId()
    }
    ,
    Ee.useImperativeHandle = function(O, $, ee) {
        return N.current.useImperativeHandle(O, $, ee)
    }
    ,
    Ee.useInsertionEffect = function(O, $) {
        return N.current.useInsertionEffect(O, $)
    }
    ,
    Ee.useLayoutEffect = function(O, $) {
        return N.current.useLayoutEffect(O, $)
    }
    ,
    Ee.useMemo = function(O, $) {
        return N.current.useMemo(O, $)
    }
    ,
    Ee.useReducer = function(O, $, ee) {
        return N.current.useReducer(O, $, ee)
    }
    ,
    Ee.useRef = function(O) {
        return N.current.useRef(O)
    }
    ,
    Ee.useState = function(O) {
        return N.current.useState(O)
    }
    ,
    Ee.useSyncExternalStore = function(O, $, ee) {
        return N.current.useSyncExternalStore(O, $, ee)
    }
    ,
    Ee.useTransition = function() {
        return N.current.useTransition()
    }
    ,
    Ee.version = "18.3.1",
    Ee
}
var lp;
function go() {
    return lp || (lp = 1,
    su.exports = Ey()),
    su.exports
}
var ap;
function _y() {
    if (ap)
        return io;
    ap = 1;
    var n = go()
      , r = Symbol.for("react.element")
      , o = Symbol.for("react.fragment")
      , l = Object.prototype.hasOwnProperty
      , u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , f = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function d(p, v, m) {
        var g, y = {}, w = null, b = null;
        m !== void 0 && (w = "" + m),
        v.key !== void 0 && (w = "" + v.key),
        v.ref !== void 0 && (b = v.ref);
        for (g in v)
            l.call(v, g) && !f.hasOwnProperty(g) && (y[g] = v[g]);
        if (p && p.defaultProps)
            for (g in v = p.defaultProps,
            v)
                y[g] === void 0 && (y[g] = v[g]);
        return {
            $$typeof: r,
            type: p,
            key: w,
            ref: b,
            props: y,
            _owner: u.current
        }
    }
    return io.Fragment = o,
    io.jsx = d,
    io.jsxs = d,
    io
}
var up;
function ky() {
    return up || (up = 1,
    ou.exports = _y()),
    ou.exports
}
var k = ky()
  , lu = {
    exports: {}
};
var cp;
function Ry() {
    return cp || (cp = 1,
    (function(n) {
        (function() {
            var r = {}.hasOwnProperty;
            function o() {
                for (var l = [], u = 0; u < arguments.length; u++) {
                    var f = arguments[u];
                    if (f) {
                        var d = typeof f;
                        if (d === "string" || d === "number")
                            l.push(f);
                        else if (Array.isArray(f)) {
                            if (f.length) {
                                var p = o.apply(null, f);
                                p && l.push(p)
                            }
                        } else if (d === "object") {
                            if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) {
                                l.push(f.toString());
                                continue
                            }
                            for (var v in f)
                                r.call(f, v) && f[v] && l.push(v)
                        }
                    }
                }
                return l.join(" ")
            }
            n.exports ? (o.default = o,
            n.exports = o) : window.classNames = o
        }
        )()
    }
    )(lu)),
    lu.exports
}
var Oy = Ry();
const pe = vo(Oy);
var _ = go();
const Ny = vo(_)
  , jh = Sy({
    __proto__: null,
    default: Ny
}, [_])
  , au = {}
  , Py = (n="@@__bc-element_@@") => {
    au[n] || (au[n] = 0);
    const r = ++au[n];
    return n === "@@__bc-element_@@" ? `${r}` : `${n}${r}`
}
  , gi = ({customId: n, prefix: r="bc-element_"}) => _.useMemo( () => n || Py(r), [r, n])
  , Ty = "bc-accordion_"
  , Ju = _.createContext({})
  , My = ({children: n, ...r}) => {
    const {accordionId: o, onAccordionToggle: l, expanded: u} = _.useContext(Ju);
    return k.jsx("a", {
        href: `#${o}`,
        role: "tab",
        "aria-controls": o,
        "aria-owns": o,
        "aria-expanded": u,
        "aria-selected": u,
        className: "bc-accordion__title",
        onClick: f => {
            f.preventDefault(),
            l?.(f)
        }
        ,
        ...r,
        children: n
    })
}
  , Ly = ({children: n, ...r}) => {
    const {accordionId: o, expanded: l} = _.useContext(Ju);
    return k.jsx("div", {
        id: o,
        "aria-hidden": !l,
        className: "bc-accordion__main",
        ...r,
        children: l && n
    })
}
  , zh = ({id: n, expanded: r, onAccordionToggle: o, defaultExpanded: l=!1, children: u, ...f}) => {
    const d = r !== void 0
      , p = gi({
        customId: n,
        prefix: Ty
    })
      , [v,m] = _.useState(l)
      , g = _.useCallback( () => m(x => !x), [m])
      , y = d ? r : v
      , w = d ? o : g
      , b = _.useMemo( () => ({
        accordionId: p,
        expanded: y,
        onAccordionToggle: w
    }), [p, y, w])
      , E = pe("bc-panel", "bc-accordion", {
        "bc-accordion--open": y
    });
    return k.jsx(Ju.Provider, {
        value: b,
        children: k.jsx("div", {
            className: E,
            ...f,
            children: u
        })
    })
}
  , Ar = ({allowMultipleOpen: n=!0, openOnLoad: r, children: o}) => {
    const [l,u] = _.useState(r ? [0] : [])
      , f = m => u(g => n ? [...g, m] : [m])
      , d = m => {
        u(g => g.filter(y => y != m))
    }
      , p = m => l.includes(m)
      , v = m => p(m) ? d(m) : f(m);
    return k.jsx("ul", {
        className: "bc-accordions",
        role: "tablist",
        children: _.Children.map(o, (m, g) => {
            if (!_.isValidElement(m))
                return null;
            if (m.type === zh) {
                const y = m.props;
                return k.jsx("li", {
                    children: _.cloneElement(m, {
                        expanded: p(g),
                        onAccordionToggle: () => v(g),
                        id: y.id
                    })
                })
            }
            return m
        }
        )
    })
}
;
Ar.Item = zh;
Ar.Header = My;
Ar.Content = Ly;
Ar.displayName = "BcAccordion";
Ar.Item.displayName = "BcAccordion.Item";
Ar.Header.displayName = "BcAccordion.Header";
Ar.Content.displayName = "BcAccordion.Content";
const Bh = Object.freeze({
    xs: "xs",
    sm: "sm",
    lg: "lg",
    xl: "xl"
})
  , Iy = ({className: n, groupedChild: r, inline: o, size: l, square: u, accentBorder: f}) => {
    const d = l ? Bh[l] : void 0;
    return pe("bc-avatar", {
        "bc-avatar--accent-border": !!f
    }, {
        "bc-avatar--inline": o
    }, {
        "bc-avatar--square": u
    }, {
        "bc-avatar--grouped-child": r
    }, {
        [`bc-avatar--${d}`]: d
    }, n)
}
  , fo = ({alt: n, accentBorder: r, background: o, className: l, groupedChild: u, inline: f, size: d, square: p, src: v, style: m, ...g}) => {
    const y = Iy({
        className: l,
        inline: f,
        groupedChild: u,
        size: d,
        square: p,
        accentBorder: r
    })
      , w = r ? {
        borderColor: `${r}`
    } : {};
    return o ? k.jsx("div", {
        className: y,
        style: {
            backgroundImage: `url(${v})`,
            ...w,
            ...m
        },
        ...g
    }) : k.jsx("img", {
        className: y,
        src: v,
        alt: n,
        style: {
            ...w,
            ...m
        },
        ...g
    })
}
  , Dy = ({inline: n, className: r, size: o}) => {
    const l = o ? Bh[o] : void 0;
    return pe("bc-avatar bc-avatar--grouped", {
        "bc-avatar--inline": n
    }, {
        [`bc-avatar--${l}`]: l
    }, r)
}
  , Fy = ({className: n, inline: r, size: o, children: l, ...u}) => k.jsx("div", {
    className: Dy({
        inline: r,
        size: o,
        className: n
    }),
    ...u,
    children: l
});
fo.Group = Fy;
fo.displayName = "BcAvatar";
fo.Group.displayName = "BcAvatar.Group";
const fp = Object.freeze({
    activityFeed: "activity-feed-icon",
    agriculture: "agriculture-icon",
    aiChat: "ai-chat-icon",
    aiConnect: "ai-connect-icon",
    alertSign: "alert-sign-icon",
    android: "android-icon",
    announcement: "announcement-icon",
    api: "api-icon",
    archive: "archive-icon",
    arrowDown: "arrow-down-icon",
    arrowLeft: "arrow-left-icon",
    arrowRight: "arrow-right-icon",
    arrowUp: "arrow-up-icon",
    assets: "assets-icon",
    attach: "attach-icon",
    automotive: "automotive-icon",
    azureBoards: "azure-boards-icon",
    banking: "banking-icon",
    biotech: "biotech-icon",
    blockerCreated: "blocker-created-icon",
    blockerResolved: "blocker-resolved-icon",
    blockerInfo: "blocker-info-icon",
    bookmark: "bookmark-icon",
    bookmarkAdded: "bookmark-added-icon",
    brief: "brief-icon",
    bug: "bug-icon",
    bugcrowd: "bugcrowd-icon",
    bugcrowdUnfilled: "bugcrowd-unfilled-icon",
    businessManagement: "business-management-icon",
    calendar: "calendar-icon",
    camera: "camera-icon",
    cancel: "cancel-icon",
    card: "card-icon",
    chartBar: "chart-bar-icon",
    chartLine: "chart-line-icon",
    chartDonut: "chart-donut-icon",
    chartScatterPlot: "chart-scatter-plot-icon",
    checkmark: "checkmark-icon",
    chevronDown: "chevron-down-icon",
    chevronLeft: "chevron-left-icon",
    chevronRight: "chevron-right-icon",
    chevronUp: "chevron-up-icon",
    circle: "circle-icon",
    clipboard: "clipboard-icon",
    clock: "clock-icon",
    cloudCheck: "cloud-check-icon",
    cloudCross: "cloud-cross-icon",
    cloud: "cloud-icon",
    cloudflare: "cloudflare-icon",
    cloudOutline: "cloud-outline-icon",
    collapseTop: "collapse-top-icon",
    comment: "comment-icon",
    computerHardware: "computer-hardware-icon",
    computerSoftware: "computer-software-icon",
    construction: "construction-icon",
    dataTable: "data-table-icon",
    date: "date-icon",
    delete: "delete-icon",
    disclose: "disclose-icon",
    disclosePartial: "disclose-partial-icon",
    domain: "domain-icon",
    download: "download-icon",
    downtrend: "downtrend-icon",
    duplicate: "duplicate-icon",
    eCommerce: "e-commerce-icon",
    edit: "edit-icon",
    education: "education-icon",
    electronics: "electronics-icon",
    emailIntake: "email-intake-icon",
    email: "email-icon",
    engagementAsm: "engagement-asm-icon",
    engagementBla: "engagement-bla-icon",
    engagementBugBash: "engagement-bug-bash-icon",
    engagementBugBounty: "engagement-bug-bounty-icon",
    engagementBugBountyPrivate: "engagement-bug-bounty-private-icon",
    engagementNgpt: "engagement-ngpt-icon",
    engagementOnDemand: "engagement-on-demand-icon",
    engagementOngoing: "engagement-ongoing-icon",
    engagementPaymentOnly: "engagement-payment-only-icon",
    engagementPenTest: "engagement-pen-test-icon",
    engagementRecon: "engagement-recon-icon",
    engagementRedTeam: "engagement-red-team-icon",
    engagementSast: "engagement-sast-icon",
    engagementVdp: "engagement-vdp-icon",
    entertainment: "entertainment-icon",
    error: "error-icon",
    eyedropper: "eyedropper-icon",
    experiment: "experiment-icon",
    experimentOff: "experiment-off-icon",
    facebook: "facebook-icon",
    fileImage: "file-image-icon",
    fileOther: "file-other-icon",
    fileUpload: "file-upload-icon",
    fileVideo: "file-video-icon",
    filter: "filter-icon",
    finance: "finance-icon",
    fix: "fix-icon",
    flag: "flag-icon",
    folderNew: "folder-new-icon",
    folders: "folders-icon",
    follow: "follow-icon",
    forestry: "forestry-icon",
    formatBold: "format-bold-icon",
    formatCode: "format-code-icon",
    formatItalic: "format-italic-icon",
    formatLink: "format-link-icon",
    formatListBulleted: "format-list-bulleted-icon",
    formatListNumbered: "format-list-numbered-icon",
    formatQuote: "format-quote-icon",
    fullscreen: "fullscreen-icon",
    fullscreenExit: "fullscreen-exit-icon",
    games: "games-icon",
    github: "github-icon",
    government: "government-icon",
    healthcare: "healthcare-icon",
    help: "help-icon",
    hide: "hide-icon",
    history: "history-icon",
    hospitality: "hospitality-icon",
    huntingAnimalWelfare: "hunting-animal-welfare-icon",
    ibmSecurity: "ibm-security-icon",
    info: "info-icon",
    informer: "informer-icon",
    ios: "ios-icon",
    iot: "iot-icon",
    ipAddress: "ip-address-icon",
    jira: "jira-icon",
    linkedIn: "linked-in-icon",
    location: "location-icon",
    lock: "lock-icon",
    lockFilled: "lock-filled-icon",
    magnifyCheck: "magnify-check-icon",
    maritime: "maritime-icon",
    markdown: "markdown-icon",
    maxBonus: "max-bonus-icon",
    menu: "menu-icon",
    microsoftTeams: "microsoft-teams-icon",
    military: "military-icon",
    minus: "minus-icon",
    more: "more-icon",
    netblock: "netblock-icon",
    network: "network-icon",
    newTab: "new-tab-icon",
    nonProfit: "non-profit-icon",
    notification: "notification-icon",
    notificationActive: "notification-active-icon",
    notificationOff: "notification-off-icon",
    oilGas: "oil-gas-icon",
    outgoingWebhooks: "outgoing-webhooks-icon",
    paymentMethod: "payment-method-icon",
    pentesterlab: "pentesterlab-icon",
    pin: "pin-icon",
    plus: "plus-icon",
    preview: "preview-icon",
    print: "print-icon",
    processing: "processing-icon",
    public: "public-icon",
    qualys: "qualys-icon",
    radar: "radar-icon",
    realEstate: "real-estate-icon",
    rearrange: "rearrange-icon",
    recycle: "recycle-icon",
    requirement: "requirement-icon",
    retail: "retail-icon",
    retest: "retest-icon",
    reveal: "reveal-icon",
    review: "review-icon",
    reward: "reward-icon",
    science: "science-icon",
    search: "search-icon",
    send: "send-icon",
    sensor: "sensor-icon",
    serviceNow: "service-now-icon",
    settings: "settings-icon",
    share: "share-icon",
    shieldAlert: "shield-alert-icon",
    sidebar: "sidebar-icon",
    slack: "slack-icon",
    sort: "sort-icon",
    splitContent: "split-content-icon",
    sso: "sso-icon",
    stackexchange: "stackexchange-icon",
    stackoverflow: "stackoverflow-icon",
    stop: "stop-icon",
    subdirectory: "subdirectory-icon",
    subdomain: "subdomain-icon",
    success: "success-icon",
    support: "support-icon",
    target: "target-icon",
    taskList: "task-list-icon",
    technology: "technology-icon",
    thumbsdown: "thumbsdown-icon",
    thumbsup: "thumbsup-icon",
    thumbsupdown: "thumbsupdown-icon",
    tourism: "tourism-icon",
    trafficControl: "traffic-control-icon",
    transportation: "transportation-icon",
    trello: "trello-icon",
    triageExpedited: "triage-expedited-icon",
    triagePriority: "triage-priority-icon",
    triageSelfManaged: "triage-self-managed-icon",
    triage24h7: "triage24h7-icon",
    trophy: "trophy-icon",
    twitter: "twitter-icon",
    unarchive: "unarchive-icon",
    uncollapseTop: "uncollapse-top-icon",
    undo: "undo-icon",
    unfoldHorizontalLess: "unfold-horizontal-less-icon",
    unfoldHorizontalMore: "unfold-horizontal-more-icon",
    unfoldVerticalLess: "unfold-vertical-less-icon",
    unfoldVerticalMore: "unfold-vertical-more-icon",
    unfollow: "unfollow-icon",
    unpin: "unpin-icon",
    upload: "upload-icon",
    uptrend: "uptrend-icon",
    user: "user-icon",
    userAdd: "user-add-icon",
    userAlert: "user-alert-icon",
    userGroup: "user-group-icon",
    userSettings: "user-settings-icon",
    userTool: "user-tool-icon",
    utilities: "utilities-icon",
    warning: "warning-icon",
    website: "website-icon"
})
  , Ay = Object.freeze({
    sm: "bc-icons--sm",
    lg: "bc-icons--lg",
    xl: "bc-icons--xl",
    xxl: "bc-icons--xxl",
    "size-xxs": "bc-icons--size-xxs",
    "size-xs": "bc-icons--size-xs",
    "size-sm": "bc-icons--size-sm",
    "size-md": "bc-icons--size-md",
    "size-lg": "bc-icons--size-lg",
    "size-xl": "bc-icons--size-xl",
    "size-xxl": "bc-icons--size-xxl",
    "size-xxxl": "bc-icons--size-xxxl",
    "size-xxxxl": "bc-icons--size-xxxxl"
})
  , yi = ({name: n="bugcrowd", isParentColor: r=!1, isInlined: o=!1, size: l, className: u}) => k.jsx("span", {
    "data-testid": "bc-icons",
    className: pe("bc-icons", {
        [`bc-icons--${fp[n]}`]: n
    }, r && "bc-icons--parent-color", o && "bc-icons--inlined", l && Ay[l], u),
    children: k.jsx("svg", {
        className: "bc-icons__svg",
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        focusable: "false",
        "aria-hidden": "true",
        children: k.jsx("use", {
            href: `#${fp[n]}`
        })
    })
});
yi.displayName = "BcIcons";
const jy = Object.freeze({
    info: "bc-banner--info",
    warning: "bc-banner--warning",
    error: "bc-banner--error"
})
  , jr = ({variant: n, className: r, children: o, ...l}) => {
    const u = n === "error" || n === "warning"
      , f = [];
    let d = null;
    return _.Children.forEach(o, p => {
        if (!_.isValidElement(p))
            return null;
        switch (p.type) {
        case $h:
        case Uh:
            f.push(p);
            break;
        case Wh:
            d = p;
            break;
        default:
            return
        }
    }
    ),
    k.jsxs("div", {
        className: pe("bc-banner", n && jy[n], r),
        ...l,
        ...u && {
            role: "alert",
            "aria-live": "assertive"
        },
        children: [n && k.jsx("span", {
            className: "bc-banner__icon",
            children: k.jsx(yi, {
                name: n,
                isInlined: !0,
                size: "lg",
                isParentColor: !0
            })
        }), k.jsxs("div", {
            className: "bc-banner__message",
            children: [k.jsx("div", {
                children: f
            }), d]
        })]
    })
}
  , $h = ({children: n}) => k.jsx("div", {
    className: "bc-banner__title",
    children: n
})
  , Uh = ({children: n}) => k.jsx("div", {
    className: "bc-banner__description",
    children: n
})
  , Wh = ({children: n, className: r}) => k.jsx("div", {
    className: pe("bc-banner__actions", r),
    children: n
});
jr.Title = $h;
jr.Description = Uh;
jr.Actions = Wh;
jr.displayName = "BcBanner";
jr.Title.displayName = "BcBanner.Title";
jr.Description.displayName = "BcBanner.Description";
jr.Actions.displayName = "BcBanner.Actions";
const zy = Object.freeze({
    noBackground: "bc-blank-state--nobg"
})
  , By = Object.freeze({
    sm: "bc-blank-state--sm",
    lg: "bc-blank-state--lg"
})
  , $y = ({children: n}) => k.jsx("div", {
    className: "bc-blank-state__title",
    children: n
})
  , Uy = ({children: n}) => k.jsx("div", {
    className: "bc-blank-state__description",
    children: n
})
  , yo = ({variant: n, size: r, children: o, className: l, ...u}) => k.jsx("div", {
    className: pe("bc-blank-state", l, n && zy[n], r && By[r]),
    ...u,
    children: o
});
yo.Title = $y;
yo.Description = Uy;
yo.displayName = "BcBlankState";
yo.Title.displayName = "BcBlankState.Title";
yo.Description.displayName = "BcBlankState.Description";
const Hh = Object.freeze({
    sm: "bc-btn--small",
    lg: "bc-btn--large"
})
  , Vh = Object.freeze({
    brand: "bc-btn--brand",
    link: "bc-btn--link",
    negative: "bc-btn--negative",
    positive: "bc-btn--positive",
    secondary: "bc-btn--secondary",
    tertiary: "bc-btn--tertiary"
})
  , Ir = _.forwardRef( ({isFullWidth: n=!1, children: r, className: o, disabled: l=!1, variant: u, type: f="button", size: d, ...p}, v) => k.jsx("button", {
    ref: v,
    className: pe("bc-btn", l && "bc-btn--disabled", n && "bc-btn--block", u && Vh[u], u !== "link" && d && Hh[d], o),
    disabled: l,
    type: f,
    ...p,
    children: r
}));
Ir.displayName = "BcButton";
const Wy = Object.freeze({
    left: "bc-button-group--left",
    center: "bc-button-group--center",
    right: "bc-button-group--right"
})
  , Hy = Object.freeze({
    default: "bc-button-group--default",
    compact: "bc-button-group--compact",
    spacious: "bc-button-group--spacious"
})
  , Vy = ({className: n, spacing: r, aligning: o, children: l, ...u}) => k.jsx("div", {
    className: pe("bc-button-group", r && Hy[r], o && Wy[o], n),
    ...u,
    children: l
});
Vy.displayName = "BcButtonGroup";
const Qy = ["checkbox", "radio"]
  , qy = ({className: n, defaultChecked: r, checked: o, inputProps: l, isDisabled: u, isInvalid: f, label: d, name: p, onChange: v, type: m="checkbox", value: g, variant: y, indeterminate: w=!1, ...b}) => {
    const E = _.useRef(null);
    return _.useEffect( () => {
        E.current && (E.current.indeterminate = w)
    }
    , [w]),
    Qy.includes(m) ? k.jsxs("label", {
        className: pe("bc-control-input", f && "bc-control-input--invalid", y === "card" && "bc-control-input--card", n),
        ...b,
        children: [k.jsx("input", {
            ...l,
            "aria-invalid": f,
            checked: o,
            className: pe("bc-control-input__input", l?.className),
            defaultChecked: r,
            disabled: u,
            name: p,
            onChange: v,
            type: m,
            value: g,
            "data-indeterminate": w ? "true" : void 0,
            ...w && {
                "aria-checked": "mixed"
            },
            ref: E
        }), k.jsx("span", {
            className: "bc-control-input__label-text",
            children: d
        })]
    }) : null
}
;
qy.displayName = "BcControlInput";
const Ky = Object.freeze({
    compact: "bc-description-list--compact",
    spacious: "bc-description-list--spacious"
})
  , zr = ({children: n, isHorizontal: r, useSubgrid: o, isLined: l, spacing: u, className: f, ...d}) => k.jsx("dl", {
    className: pe("bc-description-list", u && Ky[u], {
        "bc-description-list--horizontal": r,
        "bc-description-list--subgrid": r && o,
        "bc-description-list--lined": l
    }, f),
    ...d,
    children: n
})
  , Gy = ({children: n}) => k.jsx("dt", {
    children: n
})
  , Yy = ({children: n}) => k.jsx("dd", {
    children: n
})
  , Xy = ({children: n}) => k.jsx("div", {
    className: "bc-description-list__group",
    children: n
});
zr.Term = Gy;
zr.Description = Yy;
zr.Group = Xy;
zr.displayName = "BcDescriptionList";
zr.Term.displayName = "BcDescriptionList.Term";
zr.Description.displayName = "BcDescriptionList.Description";
zr.Group.displayName = "BcDescriptionList.Group";
const Jy = _.createContext(null)
  , uu = {
    didCatch: !1,
    error: null
};
class Zy extends _.Component {
    constructor(r) {
        super(r),
        this.resetErrorBoundary = this.resetErrorBoundary.bind(this),
        this.state = uu
    }
    static getDerivedStateFromError(r) {
        return {
            didCatch: !0,
            error: r
        }
    }
    resetErrorBoundary() {
        const {error: r} = this.state;
        if (r !== null) {
            for (var o, l, u = arguments.length, f = new Array(u), d = 0; d < u; d++)
                f[d] = arguments[d];
            (o = (l = this.props).onReset) === null || o === void 0 || o.call(l, {
                args: f,
                reason: "imperative-api"
            }),
            this.setState(uu)
        }
    }
    componentDidCatch(r, o) {
        var l, u;
        (l = (u = this.props).onError) === null || l === void 0 || l.call(u, r, o)
    }
    componentDidUpdate(r, o) {
        const {didCatch: l} = this.state
          , {resetKeys: u} = this.props;
        if (l && o.error !== null && e0(r.resetKeys, u)) {
            var f, d;
            (f = (d = this.props).onReset) === null || f === void 0 || f.call(d, {
                next: u,
                prev: r.resetKeys,
                reason: "keys"
            }),
            this.setState(uu)
        }
    }
    render() {
        const {children: r, fallbackRender: o, FallbackComponent: l, fallback: u} = this.props
          , {didCatch: f, error: d} = this.state;
        let p = r;
        if (f) {
            const v = {
                error: d,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if (typeof o == "function")
                p = o(v);
            else if (l)
                p = _.createElement(l, v);
            else if (u !== void 0)
                p = u;
            else
                throw d
        }
        return _.createElement(Jy.Provider, {
            value: {
                didCatch: f,
                error: d,
                resetErrorBoundary: this.resetErrorBoundary
            }
        }, p)
    }
}
function e0() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
      , r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return n.length !== r.length || n.some( (o, l) => !Object.is(o, r[l]))
}
const dp = Object.freeze({
    span: "span",
    div: "div",
    p: "p"
})
  , Zu = ({as: n="span", className: r, children: o, ...l}) => {
    const u = dp[n] || dp.span;
    return u ? k.jsx(u, {
        className: pe("bc-hint", r),
        ...l,
        children: o
    }) : null
}
;
Zu.displayName = "BcHint";
const Qh = ({className: n, onReport: r, resetErrorBoundary: o}) => k.jsxs("div", {
    className: pe("bc-error-boundary", n),
    children: [k.jsx(yi, {
        size: "lg",
        name: "error"
    }), k.jsx("p", {
        className: "bc-h6 bc-mt-2",
        children: "We’re sorry. That’s our bad."
    }), k.jsx(Zu, {
        as: "p",
        children: "We are not sure what happened exactly, but it was an error on our end."
    }), k.jsxs("div", {
        className: "bc-error-boundary__footer bc-helper-gap",
        children: [k.jsx(Ir, {
            size: "sm",
            onClick: o,
            variant: "secondary",
            children: "Retry"
        }), k.jsx(Ir, {
            onClick: r,
            size: "sm",
            variant: "tertiary",
            children: "Report it"
        })]
    })]
})
  , ec = ({children: n, fallbackRender: r, onError: o, onReport: l, onReset: u}) => {
    const f = r || Qh;
    return k.jsx(Zy, {
        onError: o,
        onReset: u,
        fallbackRender: d => k.jsx(f, {
            ...d,
            onReport: l
        }),
        children: n
    })
}
;
ec.Fallback = Qh;
ec.displayName = "BcErrorBoundary";
ec.Fallback.displayName = "BcErrorBoundary.Fallback";
const t0 = ({children: n}) => k.jsx("legend", {
    className: "bc-fieldset__legend",
    children: n
})
  , qh = ({legendContent: n, children: r, showLegend: o=!1, unbordered: l=!1, className: u, ...f}) => k.jsxs("fieldset", {
    className: pe("bc-fieldset", o && "bc-fieldset--visible", l && "bc-fieldset--unbordered", u),
    ...f,
    children: [k.jsx(t0, {
        children: n
    }), r]
});
qh.displayName = "BcFieldset";
const n0 = _.forwardRef( ({variant: n, disabled: r=!1, label: o, buttonSize: l, isFullWidth: u=!1, className: f, ...d}, p) => k.jsxs("label", {
    className: pe("bc-file-input", f),
    "data-testid": "file-input-label",
    children: [k.jsx("input", {
        ref: p,
        className: "bc-file-input__input",
        disabled: r,
        ...d,
        type: "file"
    }), k.jsxs("span", {
        className: pe("bc-btn", r && "bc-btn--disabled", u && "bc-btn--block", n && Vh[n], l && Hh[l]),
        children: [k.jsx(yi, {
            name: "attach",
            isParentColor: !0
        }), o && k.jsx("span", {
            children: o
        })]
    })]
}));
n0.displayName = "BcFileInput";
function cl() {
    return typeof window < "u"
}
function fr(n) {
    return tc(n) ? (n.nodeName || "").toLowerCase() : "#document"
}
function Pt(n) {
    var r;
    return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window
}
function gn(n) {
    var r;
    return (r = (tc(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement
}
function tc(n) {
    return cl() ? n instanceof Node || n instanceof Pt(n).Node : !1
}
function Ge(n) {
    return cl() ? n instanceof Element || n instanceof Pt(n).Element : !1
}
function Xe(n) {
    return cl() ? n instanceof HTMLElement || n instanceof Pt(n).HTMLElement : !1
}
function Lu(n) {
    return !cl() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Pt(n).ShadowRoot
}
const r0 = new Set(["inline", "contents"]);
function wo(n) {
    const {overflow: r, overflowX: o, overflowY: l, display: u} = Tt(n);
    return /auto|scroll|overlay|hidden|clip/.test(r + l + o) && !r0.has(u)
}
const i0 = new Set(["table", "td", "th"]);
function o0(n) {
    return i0.has(fr(n))
}
const s0 = [":popover-open", ":modal"];
function fl(n) {
    return s0.some(r => {
        try {
            return n.matches(r)
        } catch {
            return !1
        }
    }
    )
}
const l0 = ["transform", "translate", "scale", "rotate", "perspective"]
  , a0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , u0 = ["paint", "layout", "strict", "content"];
function nc(n) {
    const r = dl()
      , o = Ge(n) ? Tt(n) : n;
    return l0.some(l => o[l] ? o[l] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !r && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !r && (o.filter ? o.filter !== "none" : !1) || a0.some(l => (o.willChange || "").includes(l)) || u0.some(l => (o.contain || "").includes(l))
}
function c0(n) {
    let r = Mn(n);
    for (; Xe(r) && !Pn(r); ) {
        if (nc(r))
            return r;
        if (fl(r))
            return null;
        r = Mn(r)
    }
    return null
}
function dl() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const f0 = new Set(["html", "body", "#document"]);
function Pn(n) {
    return f0.has(fr(n))
}
function Tt(n) {
    return Pt(n).getComputedStyle(n)
}
function pl(n) {
    return Ge(n) ? {
        scrollLeft: n.scrollLeft,
        scrollTop: n.scrollTop
    } : {
        scrollLeft: n.scrollX,
        scrollTop: n.scrollY
    }
}
function Mn(n) {
    if (fr(n) === "html")
        return n;
    const r = n.assignedSlot || n.parentNode || Lu(n) && n.host || gn(n);
    return Lu(r) ? r.host : r
}
function Kh(n) {
    const r = Mn(n);
    return Pn(r) ? n.ownerDocument ? n.ownerDocument.body : n.body : Xe(r) && wo(r) ? r : Kh(r)
}
function ur(n, r, o) {
    var l;
    r === void 0 && (r = []),
    o === void 0 && (o = !0);
    const u = Kh(n)
      , f = u === ((l = n.ownerDocument) == null ? void 0 : l.body)
      , d = Pt(u);
    if (f) {
        const p = Iu(d);
        return r.concat(d, d.visualViewport || [], wo(u) ? u : [], p && o ? ur(p) : [])
    }
    return r.concat(u, ur(u, [], o))
}
function Iu(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null
}
const d0 = ["top", "right", "bottom", "left"]
  , pp = ["start", "end"]
  , hp = d0.reduce( (n, r) => n.concat(r, r + "-" + pp[0], r + "-" + pp[1]), [])
  , mi = Math.min
  , Tr = Math.max
  , el = Math.round
  , di = Math.floor
  , mn = n => ({
    x: n,
    y: n
})
  , p0 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , h0 = {
    start: "end",
    end: "start"
};
function Du(n, r, o) {
    return Tr(n, mi(r, o))
}
function wi(n, r) {
    return typeof n == "function" ? n(r) : n
}
function Ln(n) {
    return n.split("-")[0]
}
function vn(n) {
    return n.split("-")[1]
}
function Gh(n) {
    return n === "x" ? "y" : "x"
}
function rc(n) {
    return n === "y" ? "height" : "width"
}
const m0 = new Set(["top", "bottom"]);
function lr(n) {
    return m0.has(Ln(n)) ? "y" : "x"
}
function ic(n) {
    return Gh(lr(n))
}
function Yh(n, r, o) {
    o === void 0 && (o = !1);
    const l = vn(n)
      , u = ic(n)
      , f = rc(u);
    let d = u === "x" ? l === (o ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
    return r.reference[f] > r.floating[f] && (d = nl(d)),
    [d, nl(d)]
}
function v0(n) {
    const r = nl(n);
    return [tl(n), r, tl(r)]
}
function tl(n) {
    return n.replace(/start|end/g, r => h0[r])
}
const mp = ["left", "right"]
  , vp = ["right", "left"]
  , g0 = ["top", "bottom"]
  , y0 = ["bottom", "top"];
function w0(n, r, o) {
    switch (n) {
    case "top":
    case "bottom":
        return o ? r ? vp : mp : r ? mp : vp;
    case "left":
    case "right":
        return r ? g0 : y0;
    default:
        return []
    }
}
function b0(n, r, o, l) {
    const u = vn(n);
    let f = w0(Ln(n), o === "start", l);
    return u && (f = f.map(d => d + "-" + u),
    r && (f = f.concat(f.map(tl)))),
    f
}
function nl(n) {
    return n.replace(/left|right|bottom|top/g, r => p0[r])
}
function x0(n) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...n
    }
}
function Xh(n) {
    return typeof n != "number" ? x0(n) : {
        top: n,
        right: n,
        bottom: n,
        left: n
    }
}
function rl(n) {
    const {x: r, y: o, width: l, height: u} = n;
    return {
        width: l,
        height: u,
        top: o,
        left: r,
        right: r + l,
        bottom: o + u,
        x: r,
        y: o
    }
}
var S0 = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
  , il = S0.join(",")
  , Jh = typeof Element > "u"
  , vi = Jh ? function() {}
: Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  , ol = !Jh && Element.prototype.getRootNode ? function(n) {
    var r;
    return n == null || (r = n.getRootNode) === null || r === void 0 ? void 0 : r.call(n)
}
: function(n) {
    return n?.ownerDocument
}
  , sl = function n(r, o) {
    var l;
    o === void 0 && (o = !0);
    var u = r == null || (l = r.getAttribute) === null || l === void 0 ? void 0 : l.call(r, "inert")
      , f = u === "" || u === "true"
      , d = f || o && r && n(r.parentNode);
    return d
}
  , C0 = function(r) {
    var o, l = r == null || (o = r.getAttribute) === null || o === void 0 ? void 0 : o.call(r, "contenteditable");
    return l === "" || l === "true"
}
  , Zh = function(r, o, l) {
    if (sl(r))
        return [];
    var u = Array.prototype.slice.apply(r.querySelectorAll(il));
    return o && vi.call(r, il) && u.unshift(r),
    u = u.filter(l),
    u
}
  , em = function n(r, o, l) {
    for (var u = [], f = Array.from(r); f.length; ) {
        var d = f.shift();
        if (!sl(d, !1))
            if (d.tagName === "SLOT") {
                var p = d.assignedElements()
                  , v = p.length ? p : d.children
                  , m = n(v, !0, l);
                l.flatten ? u.push.apply(u, m) : u.push({
                    scopeParent: d,
                    candidates: m
                })
            } else {
                var g = vi.call(d, il);
                g && l.filter(d) && (o || !r.includes(d)) && u.push(d);
                var y = d.shadowRoot || typeof l.getShadowRoot == "function" && l.getShadowRoot(d)
                  , w = !sl(y, !1) && (!l.shadowRootFilter || l.shadowRootFilter(d));
                if (y && w) {
                    var b = n(y === !0 ? d.children : y.children, !0, l);
                    l.flatten ? u.push.apply(u, b) : u.push({
                        scopeParent: d,
                        candidates: b
                    })
                } else
                    f.unshift.apply(f, d.children)
            }
    }
    return u
}
  , tm = function(r) {
    return !isNaN(parseInt(r.getAttribute("tabindex"), 10))
}
  , nm = function(r) {
    if (!r)
        throw new Error("No node provided");
    return r.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(r.tagName) || C0(r)) && !tm(r) ? 0 : r.tabIndex
}
  , E0 = function(r, o) {
    var l = nm(r);
    return l < 0 && o && !tm(r) ? 0 : l
}
  , _0 = function(r, o) {
    return r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex
}
  , rm = function(r) {
    return r.tagName === "INPUT"
}
  , k0 = function(r) {
    return rm(r) && r.type === "hidden"
}
  , R0 = function(r) {
    var o = r.tagName === "DETAILS" && Array.prototype.slice.apply(r.children).some(function(l) {
        return l.tagName === "SUMMARY"
    });
    return o
}
  , O0 = function(r, o) {
    for (var l = 0; l < r.length; l++)
        if (r[l].checked && r[l].form === o)
            return r[l]
}
  , N0 = function(r) {
    if (!r.name)
        return !0;
    var o = r.form || ol(r), l = function(p) {
        return o.querySelectorAll('input[type="radio"][name="' + p + '"]')
    }, u;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        u = l(window.CSS.escape(r.name));
    else
        try {
            u = l(r.name)
        } catch (d) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", d.message),
            !1
        }
    var f = O0(u, r.form);
    return !f || f === r
}
  , P0 = function(r) {
    return rm(r) && r.type === "radio"
}
  , T0 = function(r) {
    return P0(r) && !N0(r)
}
  , M0 = function(r) {
    var o, l = r && ol(r), u = (o = l) === null || o === void 0 ? void 0 : o.host, f = !1;
    if (l && l !== r) {
        var d, p, v;
        for (f = !!((d = u) !== null && d !== void 0 && (p = d.ownerDocument) !== null && p !== void 0 && p.contains(u) || r != null && (v = r.ownerDocument) !== null && v !== void 0 && v.contains(r)); !f && u; ) {
            var m, g, y;
            l = ol(u),
            u = (m = l) === null || m === void 0 ? void 0 : m.host,
            f = !!((g = u) !== null && g !== void 0 && (y = g.ownerDocument) !== null && y !== void 0 && y.contains(u))
        }
    }
    return f
}
  , gp = function(r) {
    var o = r.getBoundingClientRect()
      , l = o.width
      , u = o.height;
    return l === 0 && u === 0
}
  , L0 = function(r, o) {
    var l = o.displayCheck
      , u = o.getShadowRoot;
    if (getComputedStyle(r).visibility === "hidden")
        return !0;
    var f = vi.call(r, "details>summary:first-of-type")
      , d = f ? r.parentElement : r;
    if (vi.call(d, "details:not([open]) *"))
        return !0;
    if (!l || l === "full" || l === "legacy-full") {
        if (typeof u == "function") {
            for (var p = r; r; ) {
                var v = r.parentElement
                  , m = ol(r);
                if (v && !v.shadowRoot && u(v) === !0)
                    return gp(r);
                r.assignedSlot ? r = r.assignedSlot : !v && m !== r.ownerDocument ? r = m.host : r = v
            }
            r = p
        }
        if (M0(r))
            return !r.getClientRects().length;
        if (l !== "legacy-full")
            return !0
    } else if (l === "non-zero-area")
        return gp(r);
    return !1
}
  , I0 = function(r) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(r.tagName))
        for (var o = r.parentElement; o; ) {
            if (o.tagName === "FIELDSET" && o.disabled) {
                for (var l = 0; l < o.children.length; l++) {
                    var u = o.children.item(l);
                    if (u.tagName === "LEGEND")
                        return vi.call(o, "fieldset[disabled] *") ? !0 : !u.contains(r)
                }
                return !0
            }
            o = o.parentElement
        }
    return !1
}
  , Fu = function(r, o) {
    return !(o.disabled || sl(o) || k0(o) || L0(o, r) || R0(o) || I0(o))
}
  , Au = function(r, o) {
    return !(T0(o) || nm(o) < 0 || !Fu(r, o))
}
  , D0 = function(r) {
    var o = parseInt(r.getAttribute("tabindex"), 10);
    return !!(isNaN(o) || o >= 0)
}
  , F0 = function n(r) {
    var o = []
      , l = [];
    return r.forEach(function(u, f) {
        var d = !!u.scopeParent
          , p = d ? u.scopeParent : u
          , v = E0(p, d)
          , m = d ? n(u.candidates) : p;
        v === 0 ? d ? o.push.apply(o, m) : o.push(p) : l.push({
            documentOrder: f,
            tabIndex: v,
            item: u,
            isScope: d,
            content: m
        })
    }),
    l.sort(_0).reduce(function(u, f) {
        return f.isScope ? u.push.apply(u, f.content) : u.push(f.content),
        u
    }, []).concat(o)
}
  , hl = function(r, o) {
    o = o || {};
    var l;
    return o.getShadowRoot ? l = em([r], o.includeContainer, {
        filter: Au.bind(null, o),
        flatten: !1,
        getShadowRoot: o.getShadowRoot,
        shadowRootFilter: D0
    }) : l = Zh(r, o.includeContainer, Au.bind(null, o)),
    F0(l)
}
  , A0 = function(r, o) {
    o = o || {};
    var l;
    return o.getShadowRoot ? l = em([r], o.includeContainer, {
        filter: Fu.bind(null, o),
        flatten: !0,
        getShadowRoot: o.getShadowRoot
    }) : l = Zh(r, o.includeContainer, Fu.bind(null, o)),
    l
}
  , im = function(r, o) {
    if (o = o || {},
    !r)
        throw new Error("No node provided");
    return vi.call(r, il) === !1 ? !1 : Au(o, r)
};
function om() {
    const n = navigator.userAgentData;
    return n != null && n.platform ? n.platform : navigator.platform
}
function sm() {
    const n = navigator.userAgentData;
    return n && Array.isArray(n.brands) ? n.brands.map(r => {
        let {brand: o, version: l} = r;
        return o + "/" + l
    }
    ).join(" ") : navigator.userAgent
}
function j0() {
    return /apple/i.test(navigator.vendor)
}
function ju() {
    const n = /android/i;
    return n.test(om()) || n.test(sm())
}
function z0() {
    return sm().includes("jsdom/")
}
const yp = "data-floating-ui-focusable"
  , B0 = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"
  , cu = "ArrowLeft"
  , fu = "ArrowRight"
  , $0 = "ArrowUp"
  , U0 = "ArrowDown";
function or(n) {
    let r = n.activeElement;
    for (; ((o = r) == null || (o = o.shadowRoot) == null ? void 0 : o.activeElement) != null; ) {
        var o;
        r = r.shadowRoot.activeElement
    }
    return r
}
function Et(n, r) {
    if (!n || !r)
        return !1;
    const o = r.getRootNode == null ? void 0 : r.getRootNode();
    if (n.contains(r))
        return !0;
    if (o && Lu(o)) {
        let l = r;
        for (; l; ) {
            if (n === l)
                return !0;
            l = l.parentNode || l.host
        }
    }
    return !1
}
function sr(n) {
    return "composedPath"in n ? n.composedPath()[0] : n.target
}
function du(n, r) {
    if (r == null)
        return !1;
    if ("composedPath"in n)
        return n.composedPath().includes(r);
    const o = n;
    return o.target != null && r.contains(o.target)
}
function W0(n) {
    return n.matches("html,body")
}
function $t(n) {
    return n?.ownerDocument || document
}
function lm(n) {
    return Xe(n) && n.matches(B0)
}
function zu(n) {
    return n ? n.getAttribute("role") === "combobox" && lm(n) : !1
}
function Bu(n) {
    return n ? n.hasAttribute(yp) ? n : n.querySelector("[" + yp + "]") || n : null
}
function Mr(n, r, o) {
    return o === void 0 && (o = !0),
    n.filter(u => {
        var f;
        return u.parentId === r && (!o || ((f = u.context) == null ? void 0 : f.open))
    }
    ).flatMap(u => [u, ...Mr(n, u.id, o)])
}
function H0(n, r) {
    let o, l = -1;
    function u(f, d) {
        d > l && (o = f,
        l = d),
        Mr(n, f).forEach(v => {
            u(v.id, d + 1)
        }
        )
    }
    return u(r, 0),
    n.find(f => f.id === o)
}
function wp(n, r) {
    var o;
    let l = []
      , u = (o = n.find(f => f.id === r)) == null ? void 0 : o.parentId;
    for (; u; ) {
        const f = n.find(d => d.id === u);
        u = f?.parentId,
        f && (l = l.concat(f))
    }
    return l
}
function at(n) {
    n.preventDefault(),
    n.stopPropagation()
}
function V0(n) {
    return "nativeEvent"in n
}
function am(n) {
    return n.mozInputSource === 0 && n.isTrusted ? !0 : ju() && n.pointerType ? n.type === "click" && n.buttons === 1 : n.detail === 0 && !n.pointerType
}
function um(n) {
    return z0() ? !1 : !ju() && n.width === 0 && n.height === 0 || ju() && n.width === 1 && n.height === 1 && n.pressure === 0 && n.detail === 0 && n.pointerType === "mouse" || n.width < 1 && n.height < 1 && n.pressure === 0 && n.detail === 0 && n.pointerType === "touch"
}
function bp(n, r) {
    return ["mouse", "pen"].includes(n)
}
var Q0 = typeof document < "u"
  , q0 = function() {}
  , We = Q0 ? _.useLayoutEffect : q0;
const K0 = {
    ...jh
};
function hn(n) {
    const r = _.useRef(n);
    return We( () => {
        r.current = n
    }
    ),
    r
}
const G0 = K0.useInsertionEffect
  , Y0 = G0 || (n => n());
function ct(n) {
    const r = _.useRef( () => {}
    );
    return Y0( () => {
        r.current = n
    }
    ),
    _.useCallback(function() {
        for (var o = arguments.length, l = new Array(o), u = 0; u < o; u++)
            l[u] = arguments[u];
        return r.current == null ? void 0 : r.current(...l)
    }, [])
}
function Bs(n, r, o) {
    return Math.floor(n / r) !== o
}
function ao(n, r) {
    return r < 0 || r >= n.current.length
}
function pu(n, r) {
    return mt(n, {
        disabledIndices: r
    })
}
function xp(n, r) {
    return mt(n, {
        decrement: !0,
        startingIndex: n.current.length,
        disabledIndices: r
    })
}
function mt(n, r) {
    let {startingIndex: o=-1, decrement: l=!1, disabledIndices: u, amount: f=1} = r === void 0 ? {} : r
      , d = o;
    do
        d += l ? -f : f;
    while (d >= 0 && d <= n.current.length - 1 && Js(n, d, u));
    return d
}
function X0(n, r) {
    let {event: o, orientation: l, loop: u, rtl: f, cols: d, disabledIndices: p, minIndex: v, maxIndex: m, prevIndex: g, stopEvent: y=!1} = r
      , w = g;
    if (o.key === $0) {
        if (y && at(o),
        g === -1)
            w = m;
        else if (w = mt(n, {
            startingIndex: w,
            amount: d,
            decrement: !0,
            disabledIndices: p
        }),
        u && (g - d < v || w < 0)) {
            const b = g % d
              , E = m % d
              , x = m - (E - b);
            E === b ? w = m : w = E > b ? x : x - d
        }
        ao(n, w) && (w = g)
    }
    if (o.key === U0 && (y && at(o),
    g === -1 ? w = v : (w = mt(n, {
        startingIndex: g,
        amount: d,
        disabledIndices: p
    }),
    u && g + d > m && (w = mt(n, {
        startingIndex: g % d - d,
        amount: d,
        disabledIndices: p
    }))),
    ao(n, w) && (w = g)),
    l === "both") {
        const b = di(g / d);
        o.key === (f ? cu : fu) && (y && at(o),
        g % d !== d - 1 ? (w = mt(n, {
            startingIndex: g,
            disabledIndices: p
        }),
        u && Bs(w, d, b) && (w = mt(n, {
            startingIndex: g - g % d - 1,
            disabledIndices: p
        }))) : u && (w = mt(n, {
            startingIndex: g - g % d - 1,
            disabledIndices: p
        })),
        Bs(w, d, b) && (w = g)),
        o.key === (f ? fu : cu) && (y && at(o),
        g % d !== 0 ? (w = mt(n, {
            startingIndex: g,
            decrement: !0,
            disabledIndices: p
        }),
        u && Bs(w, d, b) && (w = mt(n, {
            startingIndex: g + (d - g % d),
            decrement: !0,
            disabledIndices: p
        }))) : u && (w = mt(n, {
            startingIndex: g + (d - g % d),
            decrement: !0,
            disabledIndices: p
        })),
        Bs(w, d, b) && (w = g));
        const E = di(m / d) === b;
        ao(n, w) && (u && E ? w = o.key === (f ? fu : cu) ? m : mt(n, {
            startingIndex: g - g % d - 1,
            disabledIndices: p
        }) : w = g)
    }
    return w
}
function J0(n, r, o) {
    const l = [];
    let u = 0;
    return n.forEach( (f, d) => {
        let {width: p, height: v} = f
          , m = !1;
        for (o && (u = 0); !m; ) {
            const g = [];
            for (let y = 0; y < p; y++)
                for (let w = 0; w < v; w++)
                    g.push(u + y + w * r);
            u % r + p <= r && g.every(y => l[y] == null) ? (g.forEach(y => {
                l[y] = d
            }
            ),
            m = !0) : u++
        }
    }
    ),
    [...l]
}
function Z0(n, r, o, l, u) {
    if (n === -1)
        return -1;
    const f = o.indexOf(n)
      , d = r[n];
    switch (u) {
    case "tl":
        return f;
    case "tr":
        return d ? f + d.width - 1 : f;
    case "bl":
        return d ? f + (d.height - 1) * l : f;
    case "br":
        return o.lastIndexOf(n)
    }
}
function ew(n, r) {
    return r.flatMap( (o, l) => n.includes(o) ? [l] : [])
}
function Js(n, r, o) {
    if (typeof o == "function")
        return o(r);
    if (o)
        return o.includes(r);
    const l = n.current[r];
    return l == null || l.hasAttribute("disabled") || l.getAttribute("aria-disabled") === "true"
}
const bo = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function cm(n, r) {
    const o = hl(n, bo())
      , l = o.length;
    if (l === 0)
        return;
    const u = or($t(n))
      , f = o.indexOf(u)
      , d = f === -1 ? r === 1 ? 0 : l - 1 : f + r;
    return o[d]
}
function fm(n) {
    return cm($t(n).body, 1) || n
}
function dm(n) {
    return cm($t(n).body, -1) || n
}
function uo(n, r) {
    const o = r || n.currentTarget
      , l = n.relatedTarget;
    return !l || !Et(o, l)
}
function tw(n) {
    hl(n, bo()).forEach(o => {
        o.dataset.tabindex = o.getAttribute("tabindex") || "",
        o.setAttribute("tabindex", "-1")
    }
    )
}
function Sp(n) {
    n.querySelectorAll("[data-tabindex]").forEach(o => {
        const l = o.dataset.tabindex;
        delete o.dataset.tabindex,
        l ? o.setAttribute("tabindex", l) : o.removeAttribute("tabindex")
    }
    )
}
var hu = {
    exports: {}
}
  , Ct = {}
  , mu = {
    exports: {}
}
  , vu = {};
var Cp;
function nw() {
    return Cp || (Cp = 1,
    (function(n) {
        function r(C, U) {
            var j = C.length;
            C.push(U);
            e: for (; 0 < j; ) {
                var O = j - 1 >>> 1
                  , $ = C[O];
                if (0 < u($, U))
                    C[O] = U,
                    C[j] = $,
                    j = O;
                else
                    break e
            }
        }
        function o(C) {
            return C.length === 0 ? null : C[0]
        }
        function l(C) {
            if (C.length === 0)
                return null;
            var U = C[0]
              , j = C.pop();
            if (j !== U) {
                C[0] = j;
                e: for (var O = 0, $ = C.length, ee = $ >>> 1; O < ee; ) {
                    var ae = 2 * (O + 1) - 1
                      , ue = C[ae]
                      , me = ae + 1
                      , xe = C[me];
                    if (0 > u(ue, j))
                        me < $ && 0 > u(xe, ue) ? (C[O] = xe,
                        C[me] = j,
                        O = me) : (C[O] = ue,
                        C[ae] = j,
                        O = ae);
                    else if (me < $ && 0 > u(xe, j))
                        C[O] = xe,
                        C[me] = j,
                        O = me;
                    else
                        break e
                }
            }
            return U
        }
        function u(C, U) {
            var j = C.sortIndex - U.sortIndex;
            return j !== 0 ? j : C.id - U.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , p = d.now();
            n.unstable_now = function() {
                return d.now() - p
            }
        }
        var v = []
          , m = []
          , g = 1
          , y = null
          , w = 3
          , b = !1
          , E = !1
          , x = !1
          , M = typeof setTimeout == "function" ? setTimeout : null
          , A = typeof clearTimeout == "function" ? clearTimeout : null
          , z = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(C) {
            for (var U = o(m); U !== null; ) {
                if (U.callback === null)
                    l(m);
                else if (U.startTime <= C)
                    l(m),
                    U.sortIndex = U.expirationTime,
                    r(v, U);
                else
                    break;
                U = o(m)
            }
        }
        function W(C) {
            if (x = !1,
            B(C),
            !E)
                if (o(v) !== null)
                    E = !0,
                    G(Z);
                else {
                    var U = o(m);
                    U !== null && N(W, U.startTime - C)
                }
        }
        function Z(C, U) {
            E = !1,
            x && (x = !1,
            A(re),
            re = -1),
            b = !0;
            var j = w;
            try {
                for (B(U),
                y = o(v); y !== null && (!(y.expirationTime > U) || C && !K()); ) {
                    var O = y.callback;
                    if (typeof O == "function") {
                        y.callback = null,
                        w = y.priorityLevel;
                        var $ = O(y.expirationTime <= U);
                        U = n.unstable_now(),
                        typeof $ == "function" ? y.callback = $ : y === o(v) && l(v),
                        B(U)
                    } else
                        l(v);
                    y = o(v)
                }
                if (y !== null)
                    var ee = !0;
                else {
                    var ae = o(m);
                    ae !== null && N(W, ae.startTime - U),
                    ee = !1
                }
                return ee
            } finally {
                y = null,
                w = j,
                b = !1
            }
        }
        var te = !1
          , J = null
          , re = -1
          , he = 5
          , Y = -1;
        function K() {
            return !(n.unstable_now() - Y < he)
        }
        function V() {
            if (J !== null) {
                var C = n.unstable_now();
                Y = C;
                var U = !0;
                try {
                    U = J(!0, C)
                } finally {
                    U ? ne() : (te = !1,
                    J = null)
                }
            } else
                te = !1
        }
        var ne;
        if (typeof z == "function")
            ne = function() {
                z(V)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var T = new MessageChannel
              , L = T.port2;
            T.port1.onmessage = V,
            ne = function() {
                L.postMessage(null)
            }
        } else
            ne = function() {
                M(V, 0)
            }
            ;
        function G(C) {
            J = C,
            te || (te = !0,
            ne())
        }
        function N(C, U) {
            re = M(function() {
                C(n.unstable_now())
            }, U)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(C) {
            C.callback = null
        }
        ,
        n.unstable_continueExecution = function() {
            E || b || (E = !0,
            G(Z))
        }
        ,
        n.unstable_forceFrameRate = function(C) {
            0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < C ? Math.floor(1e3 / C) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        n.unstable_getFirstCallbackNode = function() {
            return o(v)
        }
        ,
        n.unstable_next = function(C) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var U = 3;
                break;
            default:
                U = w
            }
            var j = w;
            w = U;
            try {
                return C()
            } finally {
                w = j
            }
        }
        ,
        n.unstable_pauseExecution = function() {}
        ,
        n.unstable_requestPaint = function() {}
        ,
        n.unstable_runWithPriority = function(C, U) {
            switch (C) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                C = 3
            }
            var j = w;
            w = C;
            try {
                return U()
            } finally {
                w = j
            }
        }
        ,
        n.unstable_scheduleCallback = function(C, U, j) {
            var O = n.unstable_now();
            switch (typeof j == "object" && j !== null ? (j = j.delay,
            j = typeof j == "number" && 0 < j ? O + j : O) : j = O,
            C) {
            case 1:
                var $ = -1;
                break;
            case 2:
                $ = 250;
                break;
            case 5:
                $ = 1073741823;
                break;
            case 4:
                $ = 1e4;
                break;
            default:
                $ = 5e3
            }
            return $ = j + $,
            C = {
                id: g++,
                callback: U,
                priorityLevel: C,
                startTime: j,
                expirationTime: $,
                sortIndex: -1
            },
            j > O ? (C.sortIndex = j,
            r(m, C),
            o(v) === null && C === o(m) && (x ? (A(re),
            re = -1) : x = !0,
            N(W, j - O))) : (C.sortIndex = $,
            r(v, C),
            E || b || (E = !0,
            G(Z))),
            C
        }
        ,
        n.unstable_shouldYield = K,
        n.unstable_wrapCallback = function(C) {
            var U = w;
            return function() {
                var j = w;
                w = U;
                try {
                    return C.apply(this, arguments)
                } finally {
                    w = j
                }
            }
        }
    }
    )(vu)),
    vu
}
var Ep;
function rw() {
    return Ep || (Ep = 1,
    mu.exports = nw()),
    mu.exports
}
var _p;
function iw() {
    if (_p)
        return Ct;
    _p = 1;
    var n = go()
      , r = rw();
    function o(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)
            t += "&args[]=" + encodeURIComponent(arguments[i]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var l = new Set
      , u = {};
    function f(e, t) {
        d(e, t),
        d(e + "Capture", t)
    }
    function d(e, t) {
        for (u[e] = t,
        e = 0; e < t.length; e++)
            l.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , v = Object.prototype.hasOwnProperty
      , m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , g = {}
      , y = {};
    function w(e) {
        return v.call(y, e) ? !0 : v.call(g, e) ? !1 : m.test(e) ? y[e] = !0 : (g[e] = !0,
        !1)
    }
    function b(e, t, i, s) {
        if (i !== null && i.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return s ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function E(e, t, i, s) {
        if (t === null || typeof t > "u" || b(e, t, i, s))
            return !0;
        if (s)
            return !1;
        if (i !== null)
            switch (i.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function x(e, t, i, s, a, c, h) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = s,
        this.attributeNamespace = a,
        this.mustUseProperty = i,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = c,
        this.removeEmptyString = h
    }
    var M = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        M[e] = new x(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        M[t] = new x(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        M[e] = new x(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        M[e] = new x(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        M[e] = new x(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        M[e] = new x(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        M[e] = new x(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        M[e] = new x(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        M[e] = new x(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var A = /[\-:]([a-z])/g;
    function z(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(A, z);
        M[t] = new x(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(A, z);
        M[t] = new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(A, z);
        M[t] = new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        M[e] = new x(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    M.xlinkHref = new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        M[e] = new x(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function B(e, t, i, s) {
        var a = M.hasOwnProperty(t) ? M[t] : null;
        (a !== null ? a.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (E(t, i, a, s) && (i = null),
        s || a === null ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : a.mustUseProperty ? e[a.propertyName] = i === null ? a.type === 3 ? !1 : "" : i : (t = a.attributeName,
        s = a.attributeNamespace,
        i === null ? e.removeAttribute(t) : (a = a.type,
        i = a === 3 || a === 4 && i === !0 ? "" : "" + i,
        s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))))
    }
    var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , Z = Symbol.for("react.element")
      , te = Symbol.for("react.portal")
      , J = Symbol.for("react.fragment")
      , re = Symbol.for("react.strict_mode")
      , he = Symbol.for("react.profiler")
      , Y = Symbol.for("react.provider")
      , K = Symbol.for("react.context")
      , V = Symbol.for("react.forward_ref")
      , ne = Symbol.for("react.suspense")
      , T = Symbol.for("react.suspense_list")
      , L = Symbol.for("react.memo")
      , G = Symbol.for("react.lazy")
      , N = Symbol.for("react.offscreen")
      , C = Symbol.iterator;
    function U(e) {
        return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var j = Object.assign, O;
    function $(e) {
        if (O === void 0)
            try {
                throw Error()
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                O = t && t[1] || ""
            }
        return `
` + O + e
    }
    var ee = !1;
    function ae(e, t) {
        if (!e || ee)
            return "";
        ee = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (F) {
                        var s = F
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (F) {
                        s = F
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (F) {
                    s = F
                }
                e()
            }
        } catch (F) {
            if (F && s && typeof F.stack == "string") {
                for (var a = F.stack.split(`
`), c = s.stack.split(`
`), h = a.length - 1, S = c.length - 1; 1 <= h && 0 <= S && a[h] !== c[S]; )
                    S--;
                for (; 1 <= h && 0 <= S; h--,
                S--)
                    if (a[h] !== c[S]) {
                        if (h !== 1 || S !== 1)
                            do
                                if (h--,
                                S--,
                                0 > S || a[h] !== c[S]) {
                                    var R = `
` + a[h].replace(" at new ", " at ");
                                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)),
                                    R
                                }
                            while (1 <= h && 0 <= S);
                        break
                    }
            }
        } finally {
            ee = !1,
            Error.prepareStackTrace = i
        }
        return (e = e ? e.displayName || e.name : "") ? $(e) : ""
    }
    function ue(e) {
        switch (e.tag) {
        case 5:
            return $(e.type);
        case 16:
            return $("Lazy");
        case 13:
            return $("Suspense");
        case 19:
            return $("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ae(e.type, !1),
            e;
        case 11:
            return e = ae(e.type.render, !1),
            e;
        case 1:
            return e = ae(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function me(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case J:
            return "Fragment";
        case te:
            return "Portal";
        case he:
            return "Profiler";
        case re:
            return "StrictMode";
        case ne:
            return "Suspense";
        case T:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case K:
                return (e.displayName || "Context") + ".Consumer";
            case Y:
                return (e._context.displayName || "Context") + ".Provider";
            case V:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case L:
                return t = e.displayName || null,
                t !== null ? t : me(e.type) || "Memo";
            case G:
                t = e._payload,
                e = e._init;
                try {
                    return me(e(t))
                } catch {}
            }
        return null
    }
    function xe(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return me(t);
        case 8:
            return t === re ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function ke(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ne(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Be(e) {
        var t = Ne(e) ? "checked" : "value"
          , i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , s = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var a = i.get
              , c = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return a.call(this)
                },
                set: function(h) {
                    s = "" + h,
                    c.call(this, h)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: i.enumerable
            }),
            {
                getValue: function() {
                    return s
                },
                setValue: function(h) {
                    s = "" + h
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Wt(e) {
        e._valueTracker || (e._valueTracker = Be(e))
    }
    function we(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var i = t.getValue()
          , s = "";
        return e && (s = Ne(e) ? e.checked ? "true" : "false" : e.value),
        e = s,
        e !== i ? (t.setValue(e),
        !0) : !1
    }
    function Ce(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function be(e, t) {
        var i = t.checked;
        return j({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ?? e._wrapperState.initialChecked
        })
    }
    function Me(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue
          , s = t.checked != null ? t.checked : t.defaultChecked;
        i = ke(t.value != null ? t.value : i),
        e._wrapperState = {
            initialChecked: s,
            initialValue: i,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function Ae(e, t) {
        t = t.checked,
        t != null && B(e, "checked", t, !1)
    }
    function _e(e, t) {
        Ae(e, t);
        var i = ke(t.value)
          , s = t.type;
        if (i != null)
            s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
        else if (s === "submit" || s === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Qe(e, t.type, i) : t.hasOwnProperty("defaultValue") && Qe(e, t.type, ke(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function et(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var s = t.type;
            if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            i || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = e.name,
        i !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        i !== "" && (e.name = i)
    }
    function Qe(e, t, i) {
        (t !== "number" || Ce(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
    }
    var He = Array.isArray;
    function ot(e, t, i, s) {
        if (e = e.options,
        t) {
            t = {};
            for (var a = 0; a < i.length; a++)
                t["$" + i[a]] = !0;
            for (i = 0; i < e.length; i++)
                a = t.hasOwnProperty("$" + e[i].value),
                e[i].selected !== a && (e[i].selected = a),
                a && s && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + ke(i),
            t = null,
            a = 0; a < e.length; a++) {
                if (e[a].value === i) {
                    e[a].selected = !0,
                    s && (e[a].defaultSelected = !0);
                    return
                }
                t !== null || e[a].disabled || (t = e[a])
            }
            t !== null && (t.selected = !0)
        }
    }
    function ce(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(o(91));
        return j({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function Se(e, t) {
        var i = t.value;
        if (i == null) {
            if (i = t.children,
            t = t.defaultValue,
            i != null) {
                if (t != null)
                    throw Error(o(92));
                if (He(i)) {
                    if (1 < i.length)
                        throw Error(o(93));
                    i = i[0]
                }
                t = i
            }
            t == null && (t = ""),
            i = t
        }
        e._wrapperState = {
            initialValue: ke(i)
        }
    }
    function fe(e, t) {
        var i = ke(t.value)
          , s = ke(t.defaultValue);
        i != null && (i = "" + i,
        i !== e.value && (e.value = i),
        t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
        s != null && (e.defaultValue = "" + s)
    }
    function Pe(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function Le(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function je(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Le(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var rn, dr = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, s, a) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, i, s, a)
            })
        }
        : e
    }
    )(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (rn = rn || document.createElement("div"),
            rn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = rn.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Ht(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var tt = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }
      , yn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(tt).forEach(function(e) {
        yn.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            tt[t] = tt[e]
        })
    });
    function pr(e, t, i) {
        return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || tt.hasOwnProperty(e) && tt[e] ? ("" + t).trim() : t + "px"
    }
    function bi(e, t) {
        e = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var s = i.indexOf("--") === 0
                  , a = pr(i, t[i], s);
                i === "float" && (i = "cssFloat"),
                s ? e.setProperty(i, a) : e[i] = a
            }
    }
    var Mo = j({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function An(e, t) {
        if (t) {
            if (Mo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(o(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(o(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(o(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(o(62))
        }
    }
    function Mt(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var jn = null;
    function xi(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var $r = null
      , wn = null
      , Ur = null;
    function Sc(e) {
        if (e = Wi(e)) {
            if (typeof $r != "function")
                throw Error(o(280));
            var t = e.stateNode;
            t && (t = ts(t),
            $r(e.stateNode, e.type, t))
        }
    }
    function Cc(e) {
        wn ? Ur ? Ur.push(e) : Ur = [e] : wn = e
    }
    function Ec() {
        if (wn) {
            var e = wn
              , t = Ur;
            if (Ur = wn = null,
            Sc(e),
            t)
                for (e = 0; e < t.length; e++)
                    Sc(t[e])
        }
    }
    function _c(e, t) {
        return e(t)
    }
    function kc() {}
    var Sl = !1;
    function Rc(e, t, i) {
        if (Sl)
            return e(t, i);
        Sl = !0;
        try {
            return _c(e, t, i)
        } finally {
            Sl = !1,
            (wn !== null || Ur !== null) && (kc(),
            Ec())
        }
    }
    function Si(e, t) {
        var i = e.stateNode;
        if (i === null)
            return null;
        var s = ts(i);
        if (s === null)
            return null;
        i = s[t];
        e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (s = !s.disabled) || (e = e.type,
            s = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !s;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (i && typeof i != "function")
            throw Error(o(231, t, typeof i));
        return i
    }
    var Cl = !1;
    if (p)
        try {
            var Ci = {};
            Object.defineProperty(Ci, "passive", {
                get: function() {
                    Cl = !0
                }
            }),
            window.addEventListener("test", Ci, Ci),
            window.removeEventListener("test", Ci, Ci)
        } catch {
            Cl = !1
        }
    function Ov(e, t, i, s, a, c, h, S, R) {
        var F = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, F)
        } catch (Q) {
            this.onError(Q)
        }
    }
    var Ei = !1
      , Lo = null
      , Io = !1
      , El = null
      , Nv = {
        onError: function(e) {
            Ei = !0,
            Lo = e
        }
    };
    function Pv(e, t, i, s, a, c, h, S, R) {
        Ei = !1,
        Lo = null,
        Ov.apply(Nv, arguments)
    }
    function Tv(e, t, i, s, a, c, h, S, R) {
        if (Pv.apply(this, arguments),
        Ei) {
            if (Ei) {
                var F = Lo;
                Ei = !1,
                Lo = null
            } else
                throw Error(o(198));
            Io || (Io = !0,
            El = F)
        }
    }
    function hr(e) {
        var t = e
          , i = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (i = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? i : null
    }
    function Oc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Nc(e) {
        if (hr(e) !== e)
            throw Error(o(188))
    }
    function Mv(e) {
        var t = e.alternate;
        if (!t) {
            if (t = hr(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var i = e, s = t; ; ) {
            var a = i.return;
            if (a === null)
                break;
            var c = a.alternate;
            if (c === null) {
                if (s = a.return,
                s !== null) {
                    i = s;
                    continue
                }
                break
            }
            if (a.child === c.child) {
                for (c = a.child; c; ) {
                    if (c === i)
                        return Nc(a),
                        e;
                    if (c === s)
                        return Nc(a),
                        t;
                    c = c.sibling
                }
                throw Error(o(188))
            }
            if (i.return !== s.return)
                i = a,
                s = c;
            else {
                for (var h = !1, S = a.child; S; ) {
                    if (S === i) {
                        h = !0,
                        i = a,
                        s = c;
                        break
                    }
                    if (S === s) {
                        h = !0,
                        s = a,
                        i = c;
                        break
                    }
                    S = S.sibling
                }
                if (!h) {
                    for (S = c.child; S; ) {
                        if (S === i) {
                            h = !0,
                            i = c,
                            s = a;
                            break
                        }
                        if (S === s) {
                            h = !0,
                            s = c,
                            i = a;
                            break
                        }
                        S = S.sibling
                    }
                    if (!h)
                        throw Error(o(189))
                }
            }
            if (i.alternate !== s)
                throw Error(o(190))
        }
        if (i.tag !== 3)
            throw Error(o(188));
        return i.stateNode.current === i ? e : t
    }
    function Pc(e) {
        return e = Mv(e),
        e !== null ? Tc(e) : null
    }
    function Tc(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Tc(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Mc = r.unstable_scheduleCallback
      , Lc = r.unstable_cancelCallback
      , Lv = r.unstable_shouldYield
      , Iv = r.unstable_requestPaint
      , qe = r.unstable_now
      , Dv = r.unstable_getCurrentPriorityLevel
      , _l = r.unstable_ImmediatePriority
      , Ic = r.unstable_UserBlockingPriority
      , Do = r.unstable_NormalPriority
      , Fv = r.unstable_LowPriority
      , Dc = r.unstable_IdlePriority
      , Fo = null
      , on = null;
    function Av(e) {
        if (on && typeof on.onCommitFiberRoot == "function")
            try {
                on.onCommitFiberRoot(Fo, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Vt = Math.clz32 ? Math.clz32 : Bv
      , jv = Math.log
      , zv = Math.LN2;
    function Bv(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (jv(e) / zv | 0) | 0
    }
    var Ao = 64
      , jo = 4194304;
    function _i(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function zo(e, t) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var s = 0
          , a = e.suspendedLanes
          , c = e.pingedLanes
          , h = i & 268435455;
        if (h !== 0) {
            var S = h & ~a;
            S !== 0 ? s = _i(S) : (c &= h,
            c !== 0 && (s = _i(c)))
        } else
            h = i & ~a,
            h !== 0 ? s = _i(h) : c !== 0 && (s = _i(c));
        if (s === 0)
            return 0;
        if (t !== 0 && t !== s && (t & a) === 0 && (a = s & -s,
        c = t & -t,
        a >= c || a === 16 && (c & 4194240) !== 0))
            return t;
        if ((s & 4) !== 0 && (s |= i & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= s; 0 < t; )
                i = 31 - Vt(t),
                a = 1 << i,
                s |= e[i],
                t &= ~a;
        return s
    }
    function $v(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Uv(e, t) {
        for (var i = e.suspendedLanes, s = e.pingedLanes, a = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
            var h = 31 - Vt(c)
              , S = 1 << h
              , R = a[h];
            R === -1 ? ((S & i) === 0 || (S & s) !== 0) && (a[h] = $v(S, t)) : R <= t && (e.expiredLanes |= S),
            c &= ~S
        }
    }
    function kl(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Fc() {
        var e = Ao;
        return Ao <<= 1,
        (Ao & 4194240) === 0 && (Ao = 64),
        e
    }
    function Rl(e) {
        for (var t = [], i = 0; 31 > i; i++)
            t.push(e);
        return t
    }
    function ki(e, t, i) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Vt(t),
        e[t] = i
    }
    function Wv(e, t) {
        var i = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var s = e.eventTimes;
        for (e = e.expirationTimes; 0 < i; ) {
            var a = 31 - Vt(i)
              , c = 1 << a;
            t[a] = 0,
            s[a] = -1,
            e[a] = -1,
            i &= ~c
        }
    }
    function Ol(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i; ) {
            var s = 31 - Vt(i)
              , a = 1 << s;
            a & t | e[s] & t && (e[s] |= t),
            i &= ~a
        }
    }
    var Te = 0;
    function Ac(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var jc, Nl, zc, Bc, $c, Pl = !1, Bo = [], zn = null, Bn = null, $n = null, Ri = new Map, Oi = new Map, Un = [], Hv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Uc(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            zn = null;
            break;
        case "dragenter":
        case "dragleave":
            Bn = null;
            break;
        case "mouseover":
        case "mouseout":
            $n = null;
            break;
        case "pointerover":
        case "pointerout":
            Ri.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Oi.delete(t.pointerId)
        }
    }
    function Ni(e, t, i, s, a, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: s,
            nativeEvent: c,
            targetContainers: [a]
        },
        t !== null && (t = Wi(t),
        t !== null && Nl(t)),
        e) : (e.eventSystemFlags |= s,
        t = e.targetContainers,
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e)
    }
    function Vv(e, t, i, s, a) {
        switch (t) {
        case "focusin":
            return zn = Ni(zn, e, t, i, s, a),
            !0;
        case "dragenter":
            return Bn = Ni(Bn, e, t, i, s, a),
            !0;
        case "mouseover":
            return $n = Ni($n, e, t, i, s, a),
            !0;
        case "pointerover":
            var c = a.pointerId;
            return Ri.set(c, Ni(Ri.get(c) || null, e, t, i, s, a)),
            !0;
        case "gotpointercapture":
            return c = a.pointerId,
            Oi.set(c, Ni(Oi.get(c) || null, e, t, i, s, a)),
            !0
        }
        return !1
    }
    function Wc(e) {
        var t = mr(e.target);
        if (t !== null) {
            var i = hr(t);
            if (i !== null) {
                if (t = i.tag,
                t === 13) {
                    if (t = Oc(i),
                    t !== null) {
                        e.blockedOn = t,
                        $c(e.priority, function() {
                            zc(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function $o(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var i = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var s = new i.constructor(i.type,i);
                jn = s,
                i.target.dispatchEvent(s),
                jn = null
            } else
                return t = Wi(i),
                t !== null && Nl(t),
                e.blockedOn = i,
                !1;
            t.shift()
        }
        return !0
    }
    function Hc(e, t, i) {
        $o(e) && i.delete(t)
    }
    function Qv() {
        Pl = !1,
        zn !== null && $o(zn) && (zn = null),
        Bn !== null && $o(Bn) && (Bn = null),
        $n !== null && $o($n) && ($n = null),
        Ri.forEach(Hc),
        Oi.forEach(Hc)
    }
    function Pi(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Pl || (Pl = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Qv)))
    }
    function Ti(e) {
        function t(a) {
            return Pi(a, e)
        }
        if (0 < Bo.length) {
            Pi(Bo[0], e);
            for (var i = 1; i < Bo.length; i++) {
                var s = Bo[i];
                s.blockedOn === e && (s.blockedOn = null)
            }
        }
        for (zn !== null && Pi(zn, e),
        Bn !== null && Pi(Bn, e),
        $n !== null && Pi($n, e),
        Ri.forEach(t),
        Oi.forEach(t),
        i = 0; i < Un.length; i++)
            s = Un[i],
            s.blockedOn === e && (s.blockedOn = null);
        for (; 0 < Un.length && (i = Un[0],
        i.blockedOn === null); )
            Wc(i),
            i.blockedOn === null && Un.shift()
    }
    var Wr = W.ReactCurrentBatchConfig
      , Uo = !0;
    function qv(e, t, i, s) {
        var a = Te
          , c = Wr.transition;
        Wr.transition = null;
        try {
            Te = 1,
            Tl(e, t, i, s)
        } finally {
            Te = a,
            Wr.transition = c
        }
    }
    function Kv(e, t, i, s) {
        var a = Te
          , c = Wr.transition;
        Wr.transition = null;
        try {
            Te = 4,
            Tl(e, t, i, s)
        } finally {
            Te = a,
            Wr.transition = c
        }
    }
    function Tl(e, t, i, s) {
        if (Uo) {
            var a = Ml(e, t, i, s);
            if (a === null)
                Gl(e, t, s, Wo, i),
                Uc(e, s);
            else if (Vv(a, e, t, i, s))
                s.stopPropagation();
            else if (Uc(e, s),
            t & 4 && -1 < Hv.indexOf(e)) {
                for (; a !== null; ) {
                    var c = Wi(a);
                    if (c !== null && jc(c),
                    c = Ml(e, t, i, s),
                    c === null && Gl(e, t, s, Wo, i),
                    c === a)
                        break;
                    a = c
                }
                a !== null && s.stopPropagation()
            } else
                Gl(e, t, s, null, i)
        }
    }
    var Wo = null;
    function Ml(e, t, i, s) {
        if (Wo = null,
        e = xi(s),
        e = mr(e),
        e !== null)
            if (t = hr(e),
            t === null)
                e = null;
            else if (i = t.tag,
            i === 13) {
                if (e = Oc(t),
                e !== null)
                    return e;
                e = null
            } else if (i === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return Wo = e,
        null
    }
    function Vc(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Dv()) {
            case _l:
                return 1;
            case Ic:
                return 4;
            case Do:
            case Fv:
                return 16;
            case Dc:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Wn = null
      , Ll = null
      , Ho = null;
    function Qc() {
        if (Ho)
            return Ho;
        var e, t = Ll, i = t.length, s, a = "value"in Wn ? Wn.value : Wn.textContent, c = a.length;
        for (e = 0; e < i && t[e] === a[e]; e++)
            ;
        var h = i - e;
        for (s = 1; s <= h && t[i - s] === a[c - s]; s++)
            ;
        return Ho = a.slice(e, 1 < s ? 1 - s : void 0)
    }
    function Vo(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Qo() {
        return !0
    }
    function qc() {
        return !1
    }
    function kt(e) {
        function t(i, s, a, c, h) {
            this._reactName = i,
            this._targetInst = a,
            this.type = s,
            this.nativeEvent = c,
            this.target = h,
            this.currentTarget = null;
            for (var S in e)
                e.hasOwnProperty(S) && (i = e[S],
                this[S] = i ? i(c) : c[S]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Qo : qc,
            this.isPropagationStopped = qc,
            this
        }
        return j(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
                this.isDefaultPrevented = Qo)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
                this.isPropagationStopped = Qo)
            },
            persist: function() {},
            isPersistent: Qo
        }),
        t
    }
    var Hr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Il = kt(Hr), Mi = j({}, Hr, {
        view: 0,
        detail: 0
    }), Gv = kt(Mi), Dl, Fl, Li, qo = j({}, Mi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: jl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Li && (Li && e.type === "mousemove" ? (Dl = e.screenX - Li.screenX,
            Fl = e.screenY - Li.screenY) : Fl = Dl = 0,
            Li = e),
            Dl)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Fl
        }
    }), Kc = kt(qo), Yv = j({}, qo, {
        dataTransfer: 0
    }), Xv = kt(Yv), Jv = j({}, Mi, {
        relatedTarget: 0
    }), Al = kt(Jv), Zv = j({}, Hr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), eg = kt(Zv), tg = j({}, Hr, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), ng = kt(tg), rg = j({}, Hr, {
        data: 0
    }), Gc = kt(rg), ig = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, og = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, sg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function lg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = sg[e]) ? !!t[e] : !1
    }
    function jl() {
        return lg
    }
    var ag = j({}, Mi, {
        key: function(e) {
            if (e.key) {
                var t = ig[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Vo(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? og[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: jl,
        charCode: function(e) {
            return e.type === "keypress" ? Vo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , ug = kt(ag)
      , cg = j({}, qo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Yc = kt(cg)
      , fg = j({}, Mi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: jl
    })
      , dg = kt(fg)
      , pg = j({}, Hr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , hg = kt(pg)
      , mg = j({}, qo, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , vg = kt(mg)
      , gg = [9, 13, 27, 32]
      , zl = p && "CompositionEvent"in window
      , Ii = null;
    p && "documentMode"in document && (Ii = document.documentMode);
    var yg = p && "TextEvent"in window && !Ii
      , Xc = p && (!zl || Ii && 8 < Ii && 11 >= Ii)
      , Jc = " "
      , Zc = !1;
    function ef(e, t) {
        switch (e) {
        case "keyup":
            return gg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function tf(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Vr = !1;
    function wg(e, t) {
        switch (e) {
        case "compositionend":
            return tf(t);
        case "keypress":
            return t.which !== 32 ? null : (Zc = !0,
            Jc);
        case "textInput":
            return e = t.data,
            e === Jc && Zc ? null : e;
        default:
            return null
        }
    }
    function bg(e, t) {
        if (Vr)
            return e === "compositionend" || !zl && ef(e, t) ? (e = Qc(),
            Ho = Ll = Wn = null,
            Vr = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Xc && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var xg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function nf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!xg[e.type] : t === "textarea"
    }
    function rf(e, t, i, s) {
        Cc(s),
        t = Jo(t, "onChange"),
        0 < t.length && (i = new Il("onChange","change",null,i,s),
        e.push({
            event: i,
            listeners: t
        }))
    }
    var Di = null
      , Fi = null;
    function Sg(e) {
        Sf(e, 0)
    }
    function Ko(e) {
        var t = Yr(e);
        if (we(t))
            return e
    }
    function Cg(e, t) {
        if (e === "change")
            return t
    }
    var of = !1;
    if (p) {
        var Bl;
        if (p) {
            var $l = "oninput"in document;
            if (!$l) {
                var sf = document.createElement("div");
                sf.setAttribute("oninput", "return;"),
                $l = typeof sf.oninput == "function"
            }
            Bl = $l
        } else
            Bl = !1;
        of = Bl && (!document.documentMode || 9 < document.documentMode)
    }
    function lf() {
        Di && (Di.detachEvent("onpropertychange", af),
        Fi = Di = null)
    }
    function af(e) {
        if (e.propertyName === "value" && Ko(Fi)) {
            var t = [];
            rf(t, Fi, e, xi(e)),
            Rc(Sg, t)
        }
    }
    function Eg(e, t, i) {
        e === "focusin" ? (lf(),
        Di = t,
        Fi = i,
        Di.attachEvent("onpropertychange", af)) : e === "focusout" && lf()
    }
    function _g(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ko(Fi)
    }
    function kg(e, t) {
        if (e === "click")
            return Ko(t)
    }
    function Rg(e, t) {
        if (e === "input" || e === "change")
            return Ko(t)
    }
    function Og(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Qt = typeof Object.is == "function" ? Object.is : Og;
    function Ai(e, t) {
        if (Qt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var i = Object.keys(e)
          , s = Object.keys(t);
        if (i.length !== s.length)
            return !1;
        for (s = 0; s < i.length; s++) {
            var a = i[s];
            if (!v.call(t, a) || !Qt(e[a], t[a]))
                return !1
        }
        return !0
    }
    function uf(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function cf(e, t) {
        var i = uf(e);
        e = 0;
        for (var s; i; ) {
            if (i.nodeType === 3) {
                if (s = e + i.textContent.length,
                e <= t && s >= t)
                    return {
                        node: i,
                        offset: t - e
                    };
                e = s
            }
            e: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = uf(i)
        }
    }
    function ff(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ff(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function df() {
        for (var e = window, t = Ce(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i)
                e = t.contentWindow;
            else
                break;
            t = Ce(e.document)
        }
        return t
    }
    function Ul(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function Ng(e) {
        var t = df()
          , i = e.focusedElem
          , s = e.selectionRange;
        if (t !== i && i && i.ownerDocument && ff(i.ownerDocument.documentElement, i)) {
            if (s !== null && Ul(i)) {
                if (t = s.start,
                e = s.end,
                e === void 0 && (e = t),
                "selectionStart"in i)
                    i.selectionStart = t,
                    i.selectionEnd = Math.min(e, i.value.length);
                else if (e = (t = i.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var a = i.textContent.length
                      , c = Math.min(s.start, a);
                    s = s.end === void 0 ? c : Math.min(s.end, a),
                    !e.extend && c > s && (a = s,
                    s = c,
                    c = a),
                    a = cf(i, c);
                    var h = cf(i, s);
                    a && h && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== h.node || e.focusOffset !== h.offset) && (t = t.createRange(),
                    t.setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    c > s ? (e.addRange(t),
                    e.extend(h.node, h.offset)) : (t.setEnd(h.node, h.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = i; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof i.focus == "function" && i.focus(),
            i = 0; i < t.length; i++)
                e = t[i],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Pg = p && "documentMode"in document && 11 >= document.documentMode
      , Qr = null
      , Wl = null
      , ji = null
      , Hl = !1;
    function pf(e, t, i) {
        var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Hl || Qr == null || Qr !== Ce(s) || (s = Qr,
        "selectionStart"in s && Ul(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
        s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }),
        ji && Ai(ji, s) || (ji = s,
        s = Jo(Wl, "onSelect"),
        0 < s.length && (t = new Il("onSelect","select",null,t,i),
        e.push({
            event: t,
            listeners: s
        }),
        t.target = Qr)))
    }
    function Go(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(),
        i["Webkit" + e] = "webkit" + t,
        i["Moz" + e] = "moz" + t,
        i
    }
    var qr = {
        animationend: Go("Animation", "AnimationEnd"),
        animationiteration: Go("Animation", "AnimationIteration"),
        animationstart: Go("Animation", "AnimationStart"),
        transitionend: Go("Transition", "TransitionEnd")
    }
      , Vl = {}
      , hf = {};
    p && (hf = document.createElement("div").style,
    "AnimationEvent"in window || (delete qr.animationend.animation,
    delete qr.animationiteration.animation,
    delete qr.animationstart.animation),
    "TransitionEvent"in window || delete qr.transitionend.transition);
    function Yo(e) {
        if (Vl[e])
            return Vl[e];
        if (!qr[e])
            return e;
        var t = qr[e], i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in hf)
                return Vl[e] = t[i];
        return e
    }
    var mf = Yo("animationend")
      , vf = Yo("animationiteration")
      , gf = Yo("animationstart")
      , yf = Yo("transitionend")
      , wf = new Map
      , bf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Hn(e, t) {
        wf.set(e, t),
        f(t, [e])
    }
    for (var Ql = 0; Ql < bf.length; Ql++) {
        var ql = bf[Ql]
          , Tg = ql.toLowerCase()
          , Mg = ql[0].toUpperCase() + ql.slice(1);
        Hn(Tg, "on" + Mg)
    }
    Hn(mf, "onAnimationEnd"),
    Hn(vf, "onAnimationIteration"),
    Hn(gf, "onAnimationStart"),
    Hn("dblclick", "onDoubleClick"),
    Hn("focusin", "onFocus"),
    Hn("focusout", "onBlur"),
    Hn(yf, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var zi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Lg = new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));
    function xf(e, t, i) {
        var s = e.type || "unknown-event";
        e.currentTarget = i,
        Tv(s, t, void 0, e),
        e.currentTarget = null
    }
    function Sf(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var s = e[i]
              , a = s.event;
            s = s.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var h = s.length - 1; 0 <= h; h--) {
                        var S = s[h]
                          , R = S.instance
                          , F = S.currentTarget;
                        if (S = S.listener,
                        R !== c && a.isPropagationStopped())
                            break e;
                        xf(a, S, F),
                        c = R
                    }
                else
                    for (h = 0; h < s.length; h++) {
                        if (S = s[h],
                        R = S.instance,
                        F = S.currentTarget,
                        S = S.listener,
                        R !== c && a.isPropagationStopped())
                            break e;
                        xf(a, S, F),
                        c = R
                    }
            }
        }
        if (Io)
            throw e = El,
            Io = !1,
            El = null,
            e
    }
    function De(e, t) {
        var i = t[ta];
        i === void 0 && (i = t[ta] = new Set);
        var s = e + "__bubble";
        i.has(s) || (Cf(t, e, 2, !1),
        i.add(s))
    }
    function Kl(e, t, i) {
        var s = 0;
        t && (s |= 4),
        Cf(i, e, s, t)
    }
    var Xo = "_reactListening" + Math.random().toString(36).slice(2);
    function Bi(e) {
        if (!e[Xo]) {
            e[Xo] = !0,
            l.forEach(function(i) {
                i !== "selectionchange" && (Lg.has(i) || Kl(i, !1, e),
                Kl(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Xo] || (t[Xo] = !0,
            Kl("selectionchange", !1, t))
        }
    }
    function Cf(e, t, i, s) {
        switch (Vc(t)) {
        case 1:
            var a = qv;
            break;
        case 4:
            a = Kv;
            break;
        default:
            a = Tl
        }
        i = a.bind(null, t, i, e),
        a = void 0,
        !Cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0),
        s ? a !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, i, !0) : a !== void 0 ? e.addEventListener(t, i, {
            passive: a
        }) : e.addEventListener(t, i, !1)
    }
    function Gl(e, t, i, s, a) {
        var c = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
            e: for (; ; ) {
                if (s === null)
                    return;
                var h = s.tag;
                if (h === 3 || h === 4) {
                    var S = s.stateNode.containerInfo;
                    if (S === a || S.nodeType === 8 && S.parentNode === a)
                        break;
                    if (h === 4)
                        for (h = s.return; h !== null; ) {
                            var R = h.tag;
                            if ((R === 3 || R === 4) && (R = h.stateNode.containerInfo,
                            R === a || R.nodeType === 8 && R.parentNode === a))
                                return;
                            h = h.return
                        }
                    for (; S !== null; ) {
                        if (h = mr(S),
                        h === null)
                            return;
                        if (R = h.tag,
                        R === 5 || R === 6) {
                            s = c = h;
                            continue e
                        }
                        S = S.parentNode
                    }
                }
                s = s.return
            }
        Rc(function() {
            var F = c
              , Q = xi(i)
              , q = [];
            e: {
                var H = wf.get(e);
                if (H !== void 0) {
                    var ie = Il
                      , se = e;
                    switch (e) {
                    case "keypress":
                        if (Vo(i) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        ie = ug;
                        break;
                    case "focusin":
                        se = "focus",
                        ie = Al;
                        break;
                    case "focusout":
                        se = "blur",
                        ie = Al;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        ie = Al;
                        break;
                    case "click":
                        if (i.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        ie = Kc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        ie = Xv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        ie = dg;
                        break;
                    case mf:
                    case vf:
                    case gf:
                        ie = eg;
                        break;
                    case yf:
                        ie = hg;
                        break;
                    case "scroll":
                        ie = Gv;
                        break;
                    case "wheel":
                        ie = vg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        ie = ng;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        ie = Yc
                    }
                    var le = (t & 4) !== 0
                      , Ke = !le && e === "scroll"
                      , I = le ? H !== null ? H + "Capture" : null : H;
                    le = [];
                    for (var P = F, D; P !== null; ) {
                        D = P;
                        var X = D.stateNode;
                        if (D.tag === 5 && X !== null && (D = X,
                        I !== null && (X = Si(P, I),
                        X != null && le.push($i(P, X, D)))),
                        Ke)
                            break;
                        P = P.return
                    }
                    0 < le.length && (H = new ie(H,se,null,i,Q),
                    q.push({
                        event: H,
                        listeners: le
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (H = e === "mouseover" || e === "pointerover",
                    ie = e === "mouseout" || e === "pointerout",
                    H && i !== jn && (se = i.relatedTarget || i.fromElement) && (mr(se) || se[bn]))
                        break e;
                    if ((ie || H) && (H = Q.window === Q ? Q : (H = Q.ownerDocument) ? H.defaultView || H.parentWindow : window,
                    ie ? (se = i.relatedTarget || i.toElement,
                    ie = F,
                    se = se ? mr(se) : null,
                    se !== null && (Ke = hr(se),
                    se !== Ke || se.tag !== 5 && se.tag !== 6) && (se = null)) : (ie = null,
                    se = F),
                    ie !== se)) {
                        if (le = Kc,
                        X = "onMouseLeave",
                        I = "onMouseEnter",
                        P = "mouse",
                        (e === "pointerout" || e === "pointerover") && (le = Yc,
                        X = "onPointerLeave",
                        I = "onPointerEnter",
                        P = "pointer"),
                        Ke = ie == null ? H : Yr(ie),
                        D = se == null ? H : Yr(se),
                        H = new le(X,P + "leave",ie,i,Q),
                        H.target = Ke,
                        H.relatedTarget = D,
                        X = null,
                        mr(Q) === F && (le = new le(I,P + "enter",se,i,Q),
                        le.target = D,
                        le.relatedTarget = Ke,
                        X = le),
                        Ke = X,
                        ie && se)
                            t: {
                                for (le = ie,
                                I = se,
                                P = 0,
                                D = le; D; D = Kr(D))
                                    P++;
                                for (D = 0,
                                X = I; X; X = Kr(X))
                                    D++;
                                for (; 0 < P - D; )
                                    le = Kr(le),
                                    P--;
                                for (; 0 < D - P; )
                                    I = Kr(I),
                                    D--;
                                for (; P--; ) {
                                    if (le === I || I !== null && le === I.alternate)
                                        break t;
                                    le = Kr(le),
                                    I = Kr(I)
                                }
                                le = null
                            }
                        else
                            le = null;
                        ie !== null && Ef(q, H, ie, le, !1),
                        se !== null && Ke !== null && Ef(q, Ke, se, le, !0)
                    }
                }
                e: {
                    if (H = F ? Yr(F) : window,
                    ie = H.nodeName && H.nodeName.toLowerCase(),
                    ie === "select" || ie === "input" && H.type === "file")
                        var de = Cg;
                    else if (nf(H))
                        if (of)
                            de = Rg;
                        else {
                            de = _g;
                            var ve = Eg
                        }
                    else
                        (ie = H.nodeName) && ie.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (de = kg);
                    if (de && (de = de(e, F))) {
                        rf(q, de, i, Q);
                        break e
                    }
                    ve && ve(e, H, F),
                    e === "focusout" && (ve = H._wrapperState) && ve.controlled && H.type === "number" && Qe(H, "number", H.value)
                }
                switch (ve = F ? Yr(F) : window,
                e) {
                case "focusin":
                    (nf(ve) || ve.contentEditable === "true") && (Qr = ve,
                    Wl = F,
                    ji = null);
                    break;
                case "focusout":
                    ji = Wl = Qr = null;
                    break;
                case "mousedown":
                    Hl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Hl = !1,
                    pf(q, i, Q);
                    break;
                case "selectionchange":
                    if (Pg)
                        break;
                case "keydown":
                case "keyup":
                    pf(q, i, Q)
                }
                var ge;
                if (zl)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ye = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ye = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ye = "onCompositionUpdate";
                            break e
                        }
                        ye = void 0
                    }
                else
                    Vr ? ef(e, i) && (ye = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ye = "onCompositionStart");
                ye && (Xc && i.locale !== "ko" && (Vr || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Vr && (ge = Qc()) : (Wn = Q,
                Ll = "value"in Wn ? Wn.value : Wn.textContent,
                Vr = !0)),
                ve = Jo(F, ye),
                0 < ve.length && (ye = new Gc(ye,e,null,i,Q),
                q.push({
                    event: ye,
                    listeners: ve
                }),
                ge ? ye.data = ge : (ge = tf(i),
                ge !== null && (ye.data = ge)))),
                (ge = yg ? wg(e, i) : bg(e, i)) && (F = Jo(F, "onBeforeInput"),
                0 < F.length && (Q = new Gc("onBeforeInput","beforeinput",null,i,Q),
                q.push({
                    event: Q,
                    listeners: F
                }),
                Q.data = ge))
            }
            Sf(q, t)
        })
    }
    function $i(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }
    function Jo(e, t) {
        for (var i = t + "Capture", s = []; e !== null; ) {
            var a = e
              , c = a.stateNode;
            a.tag === 5 && c !== null && (a = c,
            c = Si(e, i),
            c != null && s.unshift($i(e, c, a)),
            c = Si(e, t),
            c != null && s.push($i(e, c, a))),
            e = e.return
        }
        return s
    }
    function Kr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Ef(e, t, i, s, a) {
        for (var c = t._reactName, h = []; i !== null && i !== s; ) {
            var S = i
              , R = S.alternate
              , F = S.stateNode;
            if (R !== null && R === s)
                break;
            S.tag === 5 && F !== null && (S = F,
            a ? (R = Si(i, c),
            R != null && h.unshift($i(i, R, S))) : a || (R = Si(i, c),
            R != null && h.push($i(i, R, S)))),
            i = i.return
        }
        h.length !== 0 && e.push({
            event: t,
            listeners: h
        })
    }
    var Ig = /\r\n?/g
      , Dg = /\u0000|\uFFFD/g;
    function _f(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ig, `
`).replace(Dg, "")
    }
    function Zo(e, t, i) {
        if (t = _f(t),
        _f(e) !== t && i)
            throw Error(o(425))
    }
    function es() {}
    var Yl = null
      , Xl = null;
    function Jl(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Zl = typeof setTimeout == "function" ? setTimeout : void 0
      , Fg = typeof clearTimeout == "function" ? clearTimeout : void 0
      , kf = typeof Promise == "function" ? Promise : void 0
      , Ag = typeof queueMicrotask == "function" ? queueMicrotask : typeof kf < "u" ? function(e) {
        return kf.resolve(null).then(e).catch(jg)
    }
    : Zl;
    function jg(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ea(e, t) {
        var i = t
          , s = 0;
        do {
            var a = i.nextSibling;
            if (e.removeChild(i),
            a && a.nodeType === 8)
                if (i = a.data,
                i === "/$") {
                    if (s === 0) {
                        e.removeChild(a),
                        Ti(t);
                        return
                    }
                    s--
                } else
                    i !== "$" && i !== "$?" && i !== "$!" || s++;
            i = a
        } while (i);
        Ti(t)
    }
    function Vn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function Rf(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    i === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Gr = Math.random().toString(36).slice(2)
      , sn = "__reactFiber$" + Gr
      , Ui = "__reactProps$" + Gr
      , bn = "__reactContainer$" + Gr
      , ta = "__reactEvents$" + Gr
      , zg = "__reactListeners$" + Gr
      , Bg = "__reactHandles$" + Gr;
    function mr(e) {
        var t = e[sn];
        if (t)
            return t;
        for (var i = e.parentNode; i; ) {
            if (t = i[bn] || i[sn]) {
                if (i = t.alternate,
                t.child !== null || i !== null && i.child !== null)
                    for (e = Rf(e); e !== null; ) {
                        if (i = e[sn])
                            return i;
                        e = Rf(e)
                    }
                return t
            }
            e = i,
            i = e.parentNode
        }
        return null
    }
    function Wi(e) {
        return e = e[sn] || e[bn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function Yr(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function ts(e) {
        return e[Ui] || null
    }
    var na = []
      , Xr = -1;
    function Qn(e) {
        return {
            current: e
        }
    }
    function Fe(e) {
        0 > Xr || (e.current = na[Xr],
        na[Xr] = null,
        Xr--)
    }
    function Ie(e, t) {
        Xr++,
        na[Xr] = e.current,
        e.current = t
    }
    var qn = {}
      , ft = Qn(qn)
      , yt = Qn(!1)
      , vr = qn;
    function Jr(e, t) {
        var i = e.type.contextTypes;
        if (!i)
            return qn;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
            return s.__reactInternalMemoizedMaskedChildContext;
        var a = {}, c;
        for (c in i)
            a[c] = t[c];
        return s && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = a),
        a
    }
    function wt(e) {
        return e = e.childContextTypes,
        e != null
    }
    function ns() {
        Fe(yt),
        Fe(ft)
    }
    function Of(e, t, i) {
        if (ft.current !== qn)
            throw Error(o(168));
        Ie(ft, t),
        Ie(yt, i)
    }
    function Nf(e, t, i) {
        var s = e.stateNode;
        if (t = t.childContextTypes,
        typeof s.getChildContext != "function")
            return i;
        s = s.getChildContext();
        for (var a in s)
            if (!(a in t))
                throw Error(o(108, xe(e) || "Unknown", a));
        return j({}, i, s)
    }
    function rs(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qn,
        vr = ft.current,
        Ie(ft, e),
        Ie(yt, yt.current),
        !0
    }
    function Pf(e, t, i) {
        var s = e.stateNode;
        if (!s)
            throw Error(o(169));
        i ? (e = Nf(e, t, vr),
        s.__reactInternalMemoizedMergedChildContext = e,
        Fe(yt),
        Fe(ft),
        Ie(ft, e)) : Fe(yt),
        Ie(yt, i)
    }
    var xn = null
      , is = !1
      , ra = !1;
    function Tf(e) {
        xn === null ? xn = [e] : xn.push(e)
    }
    function $g(e) {
        is = !0,
        Tf(e)
    }
    function Kn() {
        if (!ra && xn !== null) {
            ra = !0;
            var e = 0
              , t = Te;
            try {
                var i = xn;
                for (Te = 1; e < i.length; e++) {
                    var s = i[e];
                    do
                        s = s(!0);
                    while (s !== null)
                }
                xn = null,
                is = !1
            } catch (a) {
                throw xn !== null && (xn = xn.slice(e + 1)),
                Mc(_l, Kn),
                a
            } finally {
                Te = t,
                ra = !1
            }
        }
        return null
    }
    var Zr = []
      , ei = 0
      , os = null
      , ss = 0
      , Lt = []
      , It = 0
      , gr = null
      , Sn = 1
      , Cn = "";
    function yr(e, t) {
        Zr[ei++] = ss,
        Zr[ei++] = os,
        os = e,
        ss = t
    }
    function Mf(e, t, i) {
        Lt[It++] = Sn,
        Lt[It++] = Cn,
        Lt[It++] = gr,
        gr = e;
        var s = Sn;
        e = Cn;
        var a = 32 - Vt(s) - 1;
        s &= ~(1 << a),
        i += 1;
        var c = 32 - Vt(t) + a;
        if (30 < c) {
            var h = a - a % 5;
            c = (s & (1 << h) - 1).toString(32),
            s >>= h,
            a -= h,
            Sn = 1 << 32 - Vt(t) + a | i << a | s,
            Cn = c + e
        } else
            Sn = 1 << c | i << a | s,
            Cn = e
    }
    function ia(e) {
        e.return !== null && (yr(e, 1),
        Mf(e, 1, 0))
    }
    function oa(e) {
        for (; e === os; )
            os = Zr[--ei],
            Zr[ei] = null,
            ss = Zr[--ei],
            Zr[ei] = null;
        for (; e === gr; )
            gr = Lt[--It],
            Lt[It] = null,
            Cn = Lt[--It],
            Lt[It] = null,
            Sn = Lt[--It],
            Lt[It] = null
    }
    var Rt = null
      , Ot = null
      , ze = !1
      , qt = null;
    function Lf(e, t) {
        var i = jt(5, null, null, 0);
        i.elementType = "DELETED",
        i.stateNode = t,
        i.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [i],
        e.flags |= 16) : t.push(i)
    }
    function If(e, t) {
        switch (e.tag) {
        case 5:
            var i = e.type;
            return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            Rt = e,
            Ot = Vn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            Rt = e,
            Ot = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (i = gr !== null ? {
                id: Sn,
                overflow: Cn
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: i,
                retryLane: 1073741824
            },
            i = jt(18, null, null, 0),
            i.stateNode = t,
            i.return = e,
            e.child = i,
            Rt = e,
            Ot = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function sa(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function la(e) {
        if (ze) {
            var t = Ot;
            if (t) {
                var i = t;
                if (!If(e, t)) {
                    if (sa(e))
                        throw Error(o(418));
                    t = Vn(i.nextSibling);
                    var s = Rt;
                    t && If(e, t) ? Lf(s, i) : (e.flags = e.flags & -4097 | 2,
                    ze = !1,
                    Rt = e)
                }
            } else {
                if (sa(e))
                    throw Error(o(418));
                e.flags = e.flags & -4097 | 2,
                ze = !1,
                Rt = e
            }
        }
    }
    function Df(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        Rt = e
    }
    function ls(e) {
        if (e !== Rt)
            return !1;
        if (!ze)
            return Df(e),
            ze = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Jl(e.type, e.memoizedProps)),
        t && (t = Ot)) {
            if (sa(e))
                throw Ff(),
                Error(o(418));
            for (; t; )
                Lf(e, t),
                t = Vn(t.nextSibling)
        }
        if (Df(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                Ot = Vn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            i !== "$" && i !== "$!" && i !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Ot = null
            }
        } else
            Ot = Rt ? Vn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ff() {
        for (var e = Ot; e; )
            e = Vn(e.nextSibling)
    }
    function ti() {
        Ot = Rt = null,
        ze = !1
    }
    function aa(e) {
        qt === null ? qt = [e] : qt.push(e)
    }
    var Ug = W.ReactCurrentBatchConfig;
    function Hi(e, t, i) {
        if (e = i.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (i._owner) {
                if (i = i._owner,
                i) {
                    if (i.tag !== 1)
                        throw Error(o(309));
                    var s = i.stateNode
                }
                if (!s)
                    throw Error(o(147, e));
                var a = s
                  , c = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(h) {
                    var S = a.refs;
                    h === null ? delete S[c] : S[c] = h
                }
                ,
                t._stringRef = c,
                t)
            }
            if (typeof e != "string")
                throw Error(o(284));
            if (!i._owner)
                throw Error(o(290, e))
        }
        return e
    }
    function as(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function Af(e) {
        var t = e._init;
        return t(e._payload)
    }
    function jf(e) {
        function t(I, P) {
            if (e) {
                var D = I.deletions;
                D === null ? (I.deletions = [P],
                I.flags |= 16) : D.push(P)
            }
        }
        function i(I, P) {
            if (!e)
                return null;
            for (; P !== null; )
                t(I, P),
                P = P.sibling;
            return null
        }
        function s(I, P) {
            for (I = new Map; P !== null; )
                P.key !== null ? I.set(P.key, P) : I.set(P.index, P),
                P = P.sibling;
            return I
        }
        function a(I, P) {
            return I = nr(I, P),
            I.index = 0,
            I.sibling = null,
            I
        }
        function c(I, P, D) {
            return I.index = D,
            e ? (D = I.alternate,
            D !== null ? (D = D.index,
            D < P ? (I.flags |= 2,
            P) : D) : (I.flags |= 2,
            P)) : (I.flags |= 1048576,
            P)
        }
        function h(I) {
            return e && I.alternate === null && (I.flags |= 2),
            I
        }
        function S(I, P, D, X) {
            return P === null || P.tag !== 6 ? (P = Za(D, I.mode, X),
            P.return = I,
            P) : (P = a(P, D),
            P.return = I,
            P)
        }
        function R(I, P, D, X) {
            var de = D.type;
            return de === J ? Q(I, P, D.props.children, X, D.key) : P !== null && (P.elementType === de || typeof de == "object" && de !== null && de.$$typeof === G && Af(de) === P.type) ? (X = a(P, D.props),
            X.ref = Hi(I, P, D),
            X.return = I,
            X) : (X = Ms(D.type, D.key, D.props, null, I.mode, X),
            X.ref = Hi(I, P, D),
            X.return = I,
            X)
        }
        function F(I, P, D, X) {
            return P === null || P.tag !== 4 || P.stateNode.containerInfo !== D.containerInfo || P.stateNode.implementation !== D.implementation ? (P = eu(D, I.mode, X),
            P.return = I,
            P) : (P = a(P, D.children || []),
            P.return = I,
            P)
        }
        function Q(I, P, D, X, de) {
            return P === null || P.tag !== 7 ? (P = kr(D, I.mode, X, de),
            P.return = I,
            P) : (P = a(P, D),
            P.return = I,
            P)
        }
        function q(I, P, D) {
            if (typeof P == "string" && P !== "" || typeof P == "number")
                return P = Za("" + P, I.mode, D),
                P.return = I,
                P;
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case Z:
                    return D = Ms(P.type, P.key, P.props, null, I.mode, D),
                    D.ref = Hi(I, null, P),
                    D.return = I,
                    D;
                case te:
                    return P = eu(P, I.mode, D),
                    P.return = I,
                    P;
                case G:
                    var X = P._init;
                    return q(I, X(P._payload), D)
                }
                if (He(P) || U(P))
                    return P = kr(P, I.mode, D, null),
                    P.return = I,
                    P;
                as(I, P)
            }
            return null
        }
        function H(I, P, D, X) {
            var de = P !== null ? P.key : null;
            if (typeof D == "string" && D !== "" || typeof D == "number")
                return de !== null ? null : S(I, P, "" + D, X);
            if (typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case Z:
                    return D.key === de ? R(I, P, D, X) : null;
                case te:
                    return D.key === de ? F(I, P, D, X) : null;
                case G:
                    return de = D._init,
                    H(I, P, de(D._payload), X)
                }
                if (He(D) || U(D))
                    return de !== null ? null : Q(I, P, D, X, null);
                as(I, D)
            }
            return null
        }
        function ie(I, P, D, X, de) {
            if (typeof X == "string" && X !== "" || typeof X == "number")
                return I = I.get(D) || null,
                S(P, I, "" + X, de);
            if (typeof X == "object" && X !== null) {
                switch (X.$$typeof) {
                case Z:
                    return I = I.get(X.key === null ? D : X.key) || null,
                    R(P, I, X, de);
                case te:
                    return I = I.get(X.key === null ? D : X.key) || null,
                    F(P, I, X, de);
                case G:
                    var ve = X._init;
                    return ie(I, P, D, ve(X._payload), de)
                }
                if (He(X) || U(X))
                    return I = I.get(D) || null,
                    Q(P, I, X, de, null);
                as(P, X)
            }
            return null
        }
        function se(I, P, D, X) {
            for (var de = null, ve = null, ge = P, ye = P = 0, it = null; ge !== null && ye < D.length; ye++) {
                ge.index > ye ? (it = ge,
                ge = null) : it = ge.sibling;
                var Oe = H(I, ge, D[ye], X);
                if (Oe === null) {
                    ge === null && (ge = it);
                    break
                }
                e && ge && Oe.alternate === null && t(I, ge),
                P = c(Oe, P, ye),
                ve === null ? de = Oe : ve.sibling = Oe,
                ve = Oe,
                ge = it
            }
            if (ye === D.length)
                return i(I, ge),
                ze && yr(I, ye),
                de;
            if (ge === null) {
                for (; ye < D.length; ye++)
                    ge = q(I, D[ye], X),
                    ge !== null && (P = c(ge, P, ye),
                    ve === null ? de = ge : ve.sibling = ge,
                    ve = ge);
                return ze && yr(I, ye),
                de
            }
            for (ge = s(I, ge); ye < D.length; ye++)
                it = ie(ge, I, ye, D[ye], X),
                it !== null && (e && it.alternate !== null && ge.delete(it.key === null ? ye : it.key),
                P = c(it, P, ye),
                ve === null ? de = it : ve.sibling = it,
                ve = it);
            return e && ge.forEach(function(rr) {
                return t(I, rr)
            }),
            ze && yr(I, ye),
            de
        }
        function le(I, P, D, X) {
            var de = U(D);
            if (typeof de != "function")
                throw Error(o(150));
            if (D = de.call(D),
            D == null)
                throw Error(o(151));
            for (var ve = de = null, ge = P, ye = P = 0, it = null, Oe = D.next(); ge !== null && !Oe.done; ye++,
            Oe = D.next()) {
                ge.index > ye ? (it = ge,
                ge = null) : it = ge.sibling;
                var rr = H(I, ge, Oe.value, X);
                if (rr === null) {
                    ge === null && (ge = it);
                    break
                }
                e && ge && rr.alternate === null && t(I, ge),
                P = c(rr, P, ye),
                ve === null ? de = rr : ve.sibling = rr,
                ve = rr,
                ge = it
            }
            if (Oe.done)
                return i(I, ge),
                ze && yr(I, ye),
                de;
            if (ge === null) {
                for (; !Oe.done; ye++,
                Oe = D.next())
                    Oe = q(I, Oe.value, X),
                    Oe !== null && (P = c(Oe, P, ye),
                    ve === null ? de = Oe : ve.sibling = Oe,
                    ve = Oe);
                return ze && yr(I, ye),
                de
            }
            for (ge = s(I, ge); !Oe.done; ye++,
            Oe = D.next())
                Oe = ie(ge, I, ye, Oe.value, X),
                Oe !== null && (e && Oe.alternate !== null && ge.delete(Oe.key === null ? ye : Oe.key),
                P = c(Oe, P, ye),
                ve === null ? de = Oe : ve.sibling = Oe,
                ve = Oe);
            return e && ge.forEach(function(xy) {
                return t(I, xy)
            }),
            ze && yr(I, ye),
            de
        }
        function Ke(I, P, D, X) {
            if (typeof D == "object" && D !== null && D.type === J && D.key === null && (D = D.props.children),
            typeof D == "object" && D !== null) {
                switch (D.$$typeof) {
                case Z:
                    e: {
                        for (var de = D.key, ve = P; ve !== null; ) {
                            if (ve.key === de) {
                                if (de = D.type,
                                de === J) {
                                    if (ve.tag === 7) {
                                        i(I, ve.sibling),
                                        P = a(ve, D.props.children),
                                        P.return = I,
                                        I = P;
                                        break e
                                    }
                                } else if (ve.elementType === de || typeof de == "object" && de !== null && de.$$typeof === G && Af(de) === ve.type) {
                                    i(I, ve.sibling),
                                    P = a(ve, D.props),
                                    P.ref = Hi(I, ve, D),
                                    P.return = I,
                                    I = P;
                                    break e
                                }
                                i(I, ve);
                                break
                            } else
                                t(I, ve);
                            ve = ve.sibling
                        }
                        D.type === J ? (P = kr(D.props.children, I.mode, X, D.key),
                        P.return = I,
                        I = P) : (X = Ms(D.type, D.key, D.props, null, I.mode, X),
                        X.ref = Hi(I, P, D),
                        X.return = I,
                        I = X)
                    }
                    return h(I);
                case te:
                    e: {
                        for (ve = D.key; P !== null; ) {
                            if (P.key === ve)
                                if (P.tag === 4 && P.stateNode.containerInfo === D.containerInfo && P.stateNode.implementation === D.implementation) {
                                    i(I, P.sibling),
                                    P = a(P, D.children || []),
                                    P.return = I,
                                    I = P;
                                    break e
                                } else {
                                    i(I, P);
                                    break
                                }
                            else
                                t(I, P);
                            P = P.sibling
                        }
                        P = eu(D, I.mode, X),
                        P.return = I,
                        I = P
                    }
                    return h(I);
                case G:
                    return ve = D._init,
                    Ke(I, P, ve(D._payload), X)
                }
                if (He(D))
                    return se(I, P, D, X);
                if (U(D))
                    return le(I, P, D, X);
                as(I, D)
            }
            return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D,
            P !== null && P.tag === 6 ? (i(I, P.sibling),
            P = a(P, D),
            P.return = I,
            I = P) : (i(I, P),
            P = Za(D, I.mode, X),
            P.return = I,
            I = P),
            h(I)) : i(I, P)
        }
        return Ke
    }
    var ni = jf(!0)
      , zf = jf(!1)
      , us = Qn(null)
      , cs = null
      , ri = null
      , ua = null;
    function ca() {
        ua = ri = cs = null
    }
    function fa(e) {
        var t = us.current;
        Fe(us),
        e._currentValue = t
    }
    function da(e, t, i) {
        for (; e !== null; ) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
            e === i)
                break;
            e = e.return
        }
    }
    function ii(e, t) {
        cs = e,
        ua = ri = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (bt = !0),
        e.firstContext = null)
    }
    function Dt(e) {
        var t = e._currentValue;
        if (ua !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            ri === null) {
                if (cs === null)
                    throw Error(o(308));
                ri = e,
                cs.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                ri = ri.next = e;
        return t
    }
    var wr = null;
    function pa(e) {
        wr === null ? wr = [e] : wr.push(e)
    }
    function Bf(e, t, i, s) {
        var a = t.interleaved;
        return a === null ? (i.next = i,
        pa(t)) : (i.next = a.next,
        a.next = i),
        t.interleaved = i,
        En(e, s)
    }
    function En(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t),
        i = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            i = e.alternate,
            i !== null && (i.childLanes |= t),
            i = e,
            e = e.return;
        return i.tag === 3 ? i.stateNode : null
    }
    var Gn = !1;
    function ha(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function $f(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function _n(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Yn(e, t, i) {
        var s = e.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
        (Re & 2) !== 0) {
            var a = s.pending;
            return a === null ? t.next = t : (t.next = a.next,
            a.next = t),
            s.pending = t,
            En(e, i)
        }
        return a = s.interleaved,
        a === null ? (t.next = t,
        pa(s)) : (t.next = a.next,
        a.next = t),
        s.interleaved = t,
        En(e, i)
    }
    function fs(e, t, i) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (i & 4194240) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes,
            i |= s,
            t.lanes = i,
            Ol(e, i)
        }
    }
    function Uf(e, t) {
        var i = e.updateQueue
          , s = e.alternate;
        if (s !== null && (s = s.updateQueue,
        i === s)) {
            var a = null
              , c = null;
            if (i = i.firstBaseUpdate,
            i !== null) {
                do {
                    var h = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    };
                    c === null ? a = c = h : c = c.next = h,
                    i = i.next
                } while (i !== null);
                c === null ? a = c = t : c = c.next = t
            } else
                a = c = t;
            i = {
                baseState: s.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: c,
                shared: s.shared,
                effects: s.effects
            },
            e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate,
        e === null ? i.firstBaseUpdate = t : e.next = t,
        i.lastBaseUpdate = t
    }
    function ds(e, t, i, s) {
        var a = e.updateQueue;
        Gn = !1;
        var c = a.firstBaseUpdate
          , h = a.lastBaseUpdate
          , S = a.shared.pending;
        if (S !== null) {
            a.shared.pending = null;
            var R = S
              , F = R.next;
            R.next = null,
            h === null ? c = F : h.next = F,
            h = R;
            var Q = e.alternate;
            Q !== null && (Q = Q.updateQueue,
            S = Q.lastBaseUpdate,
            S !== h && (S === null ? Q.firstBaseUpdate = F : S.next = F,
            Q.lastBaseUpdate = R))
        }
        if (c !== null) {
            var q = a.baseState;
            h = 0,
            Q = F = R = null,
            S = c;
            do {
                var H = S.lane
                  , ie = S.eventTime;
                if ((s & H) === H) {
                    Q !== null && (Q = Q.next = {
                        eventTime: ie,
                        lane: 0,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null
                    });
                    e: {
                        var se = e
                          , le = S;
                        switch (H = t,
                        ie = i,
                        le.tag) {
                        case 1:
                            if (se = le.payload,
                            typeof se == "function") {
                                q = se.call(ie, q, H);
                                break e
                            }
                            q = se;
                            break e;
                        case 3:
                            se.flags = se.flags & -65537 | 128;
                        case 0:
                            if (se = le.payload,
                            H = typeof se == "function" ? se.call(ie, q, H) : se,
                            H == null)
                                break e;
                            q = j({}, q, H);
                            break e;
                        case 2:
                            Gn = !0
                        }
                    }
                    S.callback !== null && S.lane !== 0 && (e.flags |= 64,
                    H = a.effects,
                    H === null ? a.effects = [S] : H.push(S))
                } else
                    ie = {
                        eventTime: ie,
                        lane: H,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null
                    },
                    Q === null ? (F = Q = ie,
                    R = q) : Q = Q.next = ie,
                    h |= H;
                if (S = S.next,
                S === null) {
                    if (S = a.shared.pending,
                    S === null)
                        break;
                    H = S,
                    S = H.next,
                    H.next = null,
                    a.lastBaseUpdate = H,
                    a.shared.pending = null
                }
            } while (!0);
            if (Q === null && (R = q),
            a.baseState = R,
            a.firstBaseUpdate = F,
            a.lastBaseUpdate = Q,
            t = a.shared.interleaved,
            t !== null) {
                a = t;
                do
                    h |= a.lane,
                    a = a.next;
                while (a !== t)
            } else
                c === null && (a.shared.lanes = 0);
            Sr |= h,
            e.lanes = h,
            e.memoizedState = q
        }
    }
    function Wf(e, t, i) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var s = e[t]
                  , a = s.callback;
                if (a !== null) {
                    if (s.callback = null,
                    s = i,
                    typeof a != "function")
                        throw Error(o(191, a));
                    a.call(s)
                }
            }
    }
    var Vi = {}
      , ln = Qn(Vi)
      , Qi = Qn(Vi)
      , qi = Qn(Vi);
    function br(e) {
        if (e === Vi)
            throw Error(o(174));
        return e
    }
    function ma(e, t) {
        switch (Ie(qi, t),
        Ie(Qi, e),
        Ie(ln, Vi),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : je(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = je(t, e)
        }
        Fe(ln),
        Ie(ln, t)
    }
    function oi() {
        Fe(ln),
        Fe(Qi),
        Fe(qi)
    }
    function Hf(e) {
        br(qi.current);
        var t = br(ln.current)
          , i = je(t, e.type);
        t !== i && (Ie(Qi, e),
        Ie(ln, i))
    }
    function va(e) {
        Qi.current === e && (Fe(ln),
        Fe(Qi))
    }
    var $e = Qn(0);
    function ps(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated,
                i === null || i.data === "$?" || i.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var ga = [];
    function ya() {
        for (var e = 0; e < ga.length; e++)
            ga[e]._workInProgressVersionPrimary = null;
        ga.length = 0
    }
    var hs = W.ReactCurrentDispatcher
      , wa = W.ReactCurrentBatchConfig
      , xr = 0
      , Ue = null
      , Je = null
      , nt = null
      , ms = !1
      , Ki = !1
      , Gi = 0
      , Wg = 0;
    function dt() {
        throw Error(o(321))
    }
    function ba(e, t) {
        if (t === null)
            return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Qt(e[i], t[i]))
                return !1;
        return !0
    }
    function xa(e, t, i, s, a, c) {
        if (xr = c,
        Ue = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        hs.current = e === null || e.memoizedState === null ? qg : Kg,
        e = i(s, a),
        Ki) {
            c = 0;
            do {
                if (Ki = !1,
                Gi = 0,
                25 <= c)
                    throw Error(o(301));
                c += 1,
                nt = Je = null,
                t.updateQueue = null,
                hs.current = Gg,
                e = i(s, a)
            } while (Ki)
        }
        if (hs.current = ys,
        t = Je !== null && Je.next !== null,
        xr = 0,
        nt = Je = Ue = null,
        ms = !1,
        t)
            throw Error(o(300));
        return e
    }
    function Sa() {
        var e = Gi !== 0;
        return Gi = 0,
        e
    }
    function an() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return nt === null ? Ue.memoizedState = nt = e : nt = nt.next = e,
        nt
    }
    function Ft() {
        if (Je === null) {
            var e = Ue.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Je.next;
        var t = nt === null ? Ue.memoizedState : nt.next;
        if (t !== null)
            nt = t,
            Je = e;
        else {
            if (e === null)
                throw Error(o(310));
            Je = e,
            e = {
                memoizedState: Je.memoizedState,
                baseState: Je.baseState,
                baseQueue: Je.baseQueue,
                queue: Je.queue,
                next: null
            },
            nt === null ? Ue.memoizedState = nt = e : nt = nt.next = e
        }
        return nt
    }
    function Yi(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function Ca(e) {
        var t = Ft()
          , i = t.queue;
        if (i === null)
            throw Error(o(311));
        i.lastRenderedReducer = e;
        var s = Je
          , a = s.baseQueue
          , c = i.pending;
        if (c !== null) {
            if (a !== null) {
                var h = a.next;
                a.next = c.next,
                c.next = h
            }
            s.baseQueue = a = c,
            i.pending = null
        }
        if (a !== null) {
            c = a.next,
            s = s.baseState;
            var S = h = null
              , R = null
              , F = c;
            do {
                var Q = F.lane;
                if ((xr & Q) === Q)
                    R !== null && (R = R.next = {
                        lane: 0,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    }),
                    s = F.hasEagerState ? F.eagerState : e(s, F.action);
                else {
                    var q = {
                        lane: Q,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null
                    };
                    R === null ? (S = R = q,
                    h = s) : R = R.next = q,
                    Ue.lanes |= Q,
                    Sr |= Q
                }
                F = F.next
            } while (F !== null && F !== c);
            R === null ? h = s : R.next = S,
            Qt(s, t.memoizedState) || (bt = !0),
            t.memoizedState = s,
            t.baseState = h,
            t.baseQueue = R,
            i.lastRenderedState = s
        }
        if (e = i.interleaved,
        e !== null) {
            a = e;
            do
                c = a.lane,
                Ue.lanes |= c,
                Sr |= c,
                a = a.next;
            while (a !== e)
        } else
            a === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch]
    }
    function Ea(e) {
        var t = Ft()
          , i = t.queue;
        if (i === null)
            throw Error(o(311));
        i.lastRenderedReducer = e;
        var s = i.dispatch
          , a = i.pending
          , c = t.memoizedState;
        if (a !== null) {
            i.pending = null;
            var h = a = a.next;
            do
                c = e(c, h.action),
                h = h.next;
            while (h !== a);
            Qt(c, t.memoizedState) || (bt = !0),
            t.memoizedState = c,
            t.baseQueue === null && (t.baseState = c),
            i.lastRenderedState = c
        }
        return [c, s]
    }
    function Vf() {}
    function Qf(e, t) {
        var i = Ue
          , s = Ft()
          , a = t()
          , c = !Qt(s.memoizedState, a);
        if (c && (s.memoizedState = a,
        bt = !0),
        s = s.queue,
        _a(Gf.bind(null, i, s, e), [e]),
        s.getSnapshot !== t || c || nt !== null && nt.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Xi(9, Kf.bind(null, i, s, a, t), void 0, null),
            rt === null)
                throw Error(o(349));
            (xr & 30) !== 0 || qf(i, t, a)
        }
        return a
    }
    function qf(e, t, i) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: i
        },
        t = Ue.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Ue.updateQueue = t,
        t.stores = [e]) : (i = t.stores,
        i === null ? t.stores = [e] : i.push(e))
    }
    function Kf(e, t, i, s) {
        t.value = i,
        t.getSnapshot = s,
        Yf(t) && Xf(e)
    }
    function Gf(e, t, i) {
        return i(function() {
            Yf(t) && Xf(e)
        })
    }
    function Yf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Qt(e, i)
        } catch {
            return !0
        }
    }
    function Xf(e) {
        var t = En(e, 1);
        t !== null && Xt(t, e, 1, -1)
    }
    function Jf(e) {
        var t = an();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Yi,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = Qg.bind(null, Ue, e),
        [t.memoizedState, e]
    }
    function Xi(e, t, i, s) {
        return e = {
            tag: e,
            create: t,
            destroy: i,
            deps: s,
            next: null
        },
        t = Ue.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        Ue.updateQueue = t,
        t.lastEffect = e.next = e) : (i = t.lastEffect,
        i === null ? t.lastEffect = e.next = e : (s = i.next,
        i.next = e,
        e.next = s,
        t.lastEffect = e)),
        e
    }
    function Zf() {
        return Ft().memoizedState
    }
    function vs(e, t, i, s) {
        var a = an();
        Ue.flags |= e,
        a.memoizedState = Xi(1 | t, i, void 0, s === void 0 ? null : s)
    }
    function gs(e, t, i, s) {
        var a = Ft();
        s = s === void 0 ? null : s;
        var c = void 0;
        if (Je !== null) {
            var h = Je.memoizedState;
            if (c = h.destroy,
            s !== null && ba(s, h.deps)) {
                a.memoizedState = Xi(t, i, c, s);
                return
            }
        }
        Ue.flags |= e,
        a.memoizedState = Xi(1 | t, i, c, s)
    }
    function ed(e, t) {
        return vs(8390656, 8, e, t)
    }
    function _a(e, t) {
        return gs(2048, 8, e, t)
    }
    function td(e, t) {
        return gs(4, 2, e, t)
    }
    function nd(e, t) {
        return gs(4, 4, e, t)
    }
    function rd(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function id(e, t, i) {
        return i = i != null ? i.concat([e]) : null,
        gs(4, 4, rd.bind(null, t, e), i)
    }
    function ka() {}
    function od(e, t) {
        var i = Ft();
        t = t === void 0 ? null : t;
        var s = i.memoizedState;
        return s !== null && t !== null && ba(t, s[1]) ? s[0] : (i.memoizedState = [e, t],
        e)
    }
    function sd(e, t) {
        var i = Ft();
        t = t === void 0 ? null : t;
        var s = i.memoizedState;
        return s !== null && t !== null && ba(t, s[1]) ? s[0] : (e = e(),
        i.memoizedState = [e, t],
        e)
    }
    function ld(e, t, i) {
        return (xr & 21) === 0 ? (e.baseState && (e.baseState = !1,
        bt = !0),
        e.memoizedState = i) : (Qt(i, t) || (i = Fc(),
        Ue.lanes |= i,
        Sr |= i,
        e.baseState = !0),
        t)
    }
    function Hg(e, t) {
        var i = Te;
        Te = i !== 0 && 4 > i ? i : 4,
        e(!0);
        var s = wa.transition;
        wa.transition = {};
        try {
            e(!1),
            t()
        } finally {
            Te = i,
            wa.transition = s
        }
    }
    function ad() {
        return Ft().memoizedState
    }
    function Vg(e, t, i) {
        var s = er(e);
        if (i = {
            lane: s,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ud(e))
            cd(t, i);
        else if (i = Bf(e, t, i, s),
        i !== null) {
            var a = gt();
            Xt(i, e, s, a),
            fd(i, t, s)
        }
    }
    function Qg(e, t, i) {
        var s = er(e)
          , a = {
            lane: s,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ud(e))
            cd(t, a);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer,
            c !== null))
                try {
                    var h = t.lastRenderedState
                      , S = c(h, i);
                    if (a.hasEagerState = !0,
                    a.eagerState = S,
                    Qt(S, h)) {
                        var R = t.interleaved;
                        R === null ? (a.next = a,
                        pa(t)) : (a.next = R.next,
                        R.next = a),
                        t.interleaved = a;
                        return
                    }
                } catch {}
            i = Bf(e, t, a, s),
            i !== null && (a = gt(),
            Xt(i, e, s, a),
            fd(i, t, s))
        }
    }
    function ud(e) {
        var t = e.alternate;
        return e === Ue || t !== null && t === Ue
    }
    function cd(e, t) {
        Ki = ms = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        e.pending = t
    }
    function fd(e, t, i) {
        if ((i & 4194240) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes,
            i |= s,
            t.lanes = i,
            Ol(e, i)
        }
    }
    var ys = {
        readContext: Dt,
        useCallback: dt,
        useContext: dt,
        useEffect: dt,
        useImperativeHandle: dt,
        useInsertionEffect: dt,
        useLayoutEffect: dt,
        useMemo: dt,
        useReducer: dt,
        useRef: dt,
        useState: dt,
        useDebugValue: dt,
        useDeferredValue: dt,
        useTransition: dt,
        useMutableSource: dt,
        useSyncExternalStore: dt,
        useId: dt,
        unstable_isNewReconciler: !1
    }
      , qg = {
        readContext: Dt,
        useCallback: function(e, t) {
            return an().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Dt,
        useEffect: ed,
        useImperativeHandle: function(e, t, i) {
            return i = i != null ? i.concat([e]) : null,
            vs(4194308, 4, rd.bind(null, t, e), i)
        },
        useLayoutEffect: function(e, t) {
            return vs(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return vs(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var i = an();
            return t = t === void 0 ? null : t,
            e = e(),
            i.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, i) {
            var s = an();
            return t = i !== void 0 ? i(t) : t,
            s.memoizedState = s.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            s.queue = e,
            e = e.dispatch = Vg.bind(null, Ue, e),
            [s.memoizedState, e]
        },
        useRef: function(e) {
            var t = an();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: Jf,
        useDebugValue: ka,
        useDeferredValue: function(e) {
            return an().memoizedState = e
        },
        useTransition: function() {
            var e = Jf(!1)
              , t = e[0];
            return e = Hg.bind(null, e[1]),
            an().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, i) {
            var s = Ue
              , a = an();
            if (ze) {
                if (i === void 0)
                    throw Error(o(407));
                i = i()
            } else {
                if (i = t(),
                rt === null)
                    throw Error(o(349));
                (xr & 30) !== 0 || qf(s, t, i)
            }
            a.memoizedState = i;
            var c = {
                value: i,
                getSnapshot: t
            };
            return a.queue = c,
            ed(Gf.bind(null, s, c, e), [e]),
            s.flags |= 2048,
            Xi(9, Kf.bind(null, s, c, i, t), void 0, null),
            i
        },
        useId: function() {
            var e = an()
              , t = rt.identifierPrefix;
            if (ze) {
                var i = Cn
                  , s = Sn;
                i = (s & ~(1 << 32 - Vt(s) - 1)).toString(32) + i,
                t = ":" + t + "R" + i,
                i = Gi++,
                0 < i && (t += "H" + i.toString(32)),
                t += ":"
            } else
                i = Wg++,
                t = ":" + t + "r" + i.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , Kg = {
        readContext: Dt,
        useCallback: od,
        useContext: Dt,
        useEffect: _a,
        useImperativeHandle: id,
        useInsertionEffect: td,
        useLayoutEffect: nd,
        useMemo: sd,
        useReducer: Ca,
        useRef: Zf,
        useState: function() {
            return Ca(Yi)
        },
        useDebugValue: ka,
        useDeferredValue: function(e) {
            var t = Ft();
            return ld(t, Je.memoizedState, e)
        },
        useTransition: function() {
            var e = Ca(Yi)[0]
              , t = Ft().memoizedState;
            return [e, t]
        },
        useMutableSource: Vf,
        useSyncExternalStore: Qf,
        useId: ad,
        unstable_isNewReconciler: !1
    }
      , Gg = {
        readContext: Dt,
        useCallback: od,
        useContext: Dt,
        useEffect: _a,
        useImperativeHandle: id,
        useInsertionEffect: td,
        useLayoutEffect: nd,
        useMemo: sd,
        useReducer: Ea,
        useRef: Zf,
        useState: function() {
            return Ea(Yi)
        },
        useDebugValue: ka,
        useDeferredValue: function(e) {
            var t = Ft();
            return Je === null ? t.memoizedState = e : ld(t, Je.memoizedState, e)
        },
        useTransition: function() {
            var e = Ea(Yi)[0]
              , t = Ft().memoizedState;
            return [e, t]
        },
        useMutableSource: Vf,
        useSyncExternalStore: Qf,
        useId: ad,
        unstable_isNewReconciler: !1
    };
    function Kt(e, t) {
        if (e && e.defaultProps) {
            t = j({}, t),
            e = e.defaultProps;
            for (var i in e)
                t[i] === void 0 && (t[i] = e[i]);
            return t
        }
        return t
    }
    function Ra(e, t, i, s) {
        t = e.memoizedState,
        i = i(s, t),
        i = i == null ? t : j({}, t, i),
        e.memoizedState = i,
        e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var ws = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? hr(e) === e : !1
        },
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var s = gt()
              , a = er(e)
              , c = _n(s, a);
            c.payload = t,
            i != null && (c.callback = i),
            t = Yn(e, c, a),
            t !== null && (Xt(t, e, a, s),
            fs(t, e, a))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var s = gt()
              , a = er(e)
              , c = _n(s, a);
            c.tag = 1,
            c.payload = t,
            i != null && (c.callback = i),
            t = Yn(e, c, a),
            t !== null && (Xt(t, e, a, s),
            fs(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = gt()
              , s = er(e)
              , a = _n(i, s);
            a.tag = 2,
            t != null && (a.callback = t),
            t = Yn(e, a, s),
            t !== null && (Xt(t, e, s, i),
            fs(t, e, s))
        }
    };
    function dd(e, t, i, s, a, c, h) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, c, h) : t.prototype && t.prototype.isPureReactComponent ? !Ai(i, s) || !Ai(a, c) : !0
    }
    function pd(e, t, i) {
        var s = !1
          , a = qn
          , c = t.contextType;
        return typeof c == "object" && c !== null ? c = Dt(c) : (a = wt(t) ? vr : ft.current,
        s = t.contextTypes,
        c = (s = s != null) ? Jr(e, a) : qn),
        t = new t(i,c),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = ws,
        e.stateNode = t,
        t._reactInternals = e,
        s && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = a,
        e.__reactInternalMemoizedMaskedChildContext = c),
        t
    }
    function hd(e, t, i, s) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s),
        t.state !== e && ws.enqueueReplaceState(t, t.state, null)
    }
    function Oa(e, t, i, s) {
        var a = e.stateNode;
        a.props = i,
        a.state = e.memoizedState,
        a.refs = {},
        ha(e);
        var c = t.contextType;
        typeof c == "object" && c !== null ? a.context = Dt(c) : (c = wt(t) ? vr : ft.current,
        a.context = Jr(e, c)),
        a.state = e.memoizedState,
        c = t.getDerivedStateFromProps,
        typeof c == "function" && (Ra(e, t, c, i),
        a.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state,
        typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
        t !== a.state && ws.enqueueReplaceState(a, a.state, null),
        ds(e, i, a, s),
        a.state = e.memoizedState),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function si(e, t) {
        try {
            var i = ""
              , s = t;
            do
                i += ue(s),
                s = s.return;
            while (s);
            var a = i
        } catch (c) {
            a = `
Error generating stack: ` + c.message + `
` + c.stack
        }
        return {
            value: e,
            source: t,
            stack: a,
            digest: null
        }
    }
    function Na(e, t, i) {
        return {
            value: e,
            source: null,
            stack: i ?? null,
            digest: t ?? null
        }
    }
    function Pa(e, t) {
        try {
            console.error(t.value)
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    var Yg = typeof WeakMap == "function" ? WeakMap : Map;
    function md(e, t, i) {
        i = _n(-1, i),
        i.tag = 3,
        i.payload = {
            element: null
        };
        var s = t.value;
        return i.callback = function() {
            ks || (ks = !0,
            Va = s),
            Pa(e, t)
        }
        ,
        i
    }
    function vd(e, t, i) {
        i = _n(-1, i),
        i.tag = 3;
        var s = e.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var a = t.value;
            i.payload = function() {
                return s(a)
            }
            ,
            i.callback = function() {
                Pa(e, t)
            }
        }
        var c = e.stateNode;
        return c !== null && typeof c.componentDidCatch == "function" && (i.callback = function() {
            Pa(e, t),
            typeof s != "function" && (Jn === null ? Jn = new Set([this]) : Jn.add(this));
            var h = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: h !== null ? h : ""
            })
        }
        ),
        i
    }
    function gd(e, t, i) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new Yg;
            var a = new Set;
            s.set(t, a)
        } else
            a = s.get(t),
            a === void 0 && (a = new Set,
            s.set(t, a));
        a.has(i) || (a.add(i),
        e = cy.bind(null, e, t, i),
        t.then(e, e))
    }
    function yd(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function wd(e, t, i, s, a) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        i.flags |= 131072,
        i.flags &= -52805,
        i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = _n(-1, 1),
        t.tag = 2,
        Yn(i, t, 1))),
        i.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = a,
        e)
    }
    var Xg = W.ReactCurrentOwner
      , bt = !1;
    function vt(e, t, i, s) {
        t.child = e === null ? zf(t, null, i, s) : ni(t, e.child, i, s)
    }
    function bd(e, t, i, s, a) {
        i = i.render;
        var c = t.ref;
        return ii(t, a),
        s = xa(e, t, i, s, c, a),
        i = Sa(),
        e !== null && !bt ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a,
        kn(e, t, a)) : (ze && i && ia(t),
        t.flags |= 1,
        vt(e, t, s, a),
        t.child)
    }
    function xd(e, t, i, s, a) {
        if (e === null) {
            var c = i.type;
            return typeof c == "function" && !Ja(c) && c.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15,
            t.type = c,
            Sd(e, t, c, s, a)) : (e = Ms(i.type, null, s, t, t.mode, a),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (c = e.child,
        (e.lanes & a) === 0) {
            var h = c.memoizedProps;
            if (i = i.compare,
            i = i !== null ? i : Ai,
            i(h, s) && e.ref === t.ref)
                return kn(e, t, a)
        }
        return t.flags |= 1,
        e = nr(c, s),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Sd(e, t, i, s, a) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Ai(c, s) && e.ref === t.ref)
                if (bt = !1,
                t.pendingProps = s = c,
                (e.lanes & a) !== 0)
                    (e.flags & 131072) !== 0 && (bt = !0);
                else
                    return t.lanes = e.lanes,
                    kn(e, t, a)
        }
        return Ta(e, t, i, s, a)
    }
    function Cd(e, t, i) {
        var s = t.pendingProps
          , a = s.children
          , c = e !== null ? e.memoizedState : null;
        if (s.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ie(ai, Nt),
                Nt |= i;
            else {
                if ((i & 1073741824) === 0)
                    return e = c !== null ? c.baseLanes | i : i,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Ie(ai, Nt),
                    Nt |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                s = c !== null ? c.baseLanes : i,
                Ie(ai, Nt),
                Nt |= s
            }
        else
            c !== null ? (s = c.baseLanes | i,
            t.memoizedState = null) : s = i,
            Ie(ai, Nt),
            Nt |= s;
        return vt(e, t, a, i),
        t.child
    }
    function Ed(e, t) {
        var i = t.ref;
        (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function Ta(e, t, i, s, a) {
        var c = wt(i) ? vr : ft.current;
        return c = Jr(t, c),
        ii(t, a),
        i = xa(e, t, i, s, c, a),
        s = Sa(),
        e !== null && !bt ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~a,
        kn(e, t, a)) : (ze && s && ia(t),
        t.flags |= 1,
        vt(e, t, i, a),
        t.child)
    }
    function _d(e, t, i, s, a) {
        if (wt(i)) {
            var c = !0;
            rs(t)
        } else
            c = !1;
        if (ii(t, a),
        t.stateNode === null)
            xs(e, t),
            pd(t, i, s),
            Oa(t, i, s, a),
            s = !0;
        else if (e === null) {
            var h = t.stateNode
              , S = t.memoizedProps;
            h.props = S;
            var R = h.context
              , F = i.contextType;
            typeof F == "object" && F !== null ? F = Dt(F) : (F = wt(i) ? vr : ft.current,
            F = Jr(t, F));
            var Q = i.getDerivedStateFromProps
              , q = typeof Q == "function" || typeof h.getSnapshotBeforeUpdate == "function";
            q || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== s || R !== F) && hd(t, h, s, F),
            Gn = !1;
            var H = t.memoizedState;
            h.state = H,
            ds(t, s, h, a),
            R = t.memoizedState,
            S !== s || H !== R || yt.current || Gn ? (typeof Q == "function" && (Ra(t, i, Q, s),
            R = t.memoizedState),
            (S = Gn || dd(t, i, S, s, H, R, F)) ? (q || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(),
            typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()),
            typeof h.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = s,
            t.memoizedState = R),
            h.props = s,
            h.state = R,
            h.context = F,
            s = S) : (typeof h.componentDidMount == "function" && (t.flags |= 4194308),
            s = !1)
        } else {
            h = t.stateNode,
            $f(e, t),
            S = t.memoizedProps,
            F = t.type === t.elementType ? S : Kt(t.type, S),
            h.props = F,
            q = t.pendingProps,
            H = h.context,
            R = i.contextType,
            typeof R == "object" && R !== null ? R = Dt(R) : (R = wt(i) ? vr : ft.current,
            R = Jr(t, R));
            var ie = i.getDerivedStateFromProps;
            (Q = typeof ie == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== q || H !== R) && hd(t, h, s, R),
            Gn = !1,
            H = t.memoizedState,
            h.state = H,
            ds(t, s, h, a);
            var se = t.memoizedState;
            S !== q || H !== se || yt.current || Gn ? (typeof ie == "function" && (Ra(t, i, ie, s),
            se = t.memoizedState),
            (F = Gn || dd(t, i, F, s, H, se, R) || !1) ? (Q || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(s, se, R),
            typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(s, se, R)),
            typeof h.componentDidUpdate == "function" && (t.flags |= 4),
            typeof h.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && H === e.memoizedState || (t.flags |= 4),
            typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = s,
            t.memoizedState = se),
            h.props = s,
            h.state = se,
            h.context = R,
            s = F) : (typeof h.componentDidUpdate != "function" || S === e.memoizedProps && H === e.memoizedState || (t.flags |= 4),
            typeof h.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024),
            s = !1)
        }
        return Ma(e, t, i, s, c, a)
    }
    function Ma(e, t, i, s, a, c) {
        Ed(e, t);
        var h = (t.flags & 128) !== 0;
        if (!s && !h)
            return a && Pf(t, i, !1),
            kn(e, t, c);
        s = t.stateNode,
        Xg.current = t;
        var S = h && typeof i.getDerivedStateFromError != "function" ? null : s.render();
        return t.flags |= 1,
        e !== null && h ? (t.child = ni(t, e.child, null, c),
        t.child = ni(t, null, S, c)) : vt(e, t, S, c),
        t.memoizedState = s.state,
        a && Pf(t, i, !0),
        t.child
    }
    function kd(e) {
        var t = e.stateNode;
        t.pendingContext ? Of(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Of(e, t.context, !1),
        ma(e, t.containerInfo)
    }
    function Rd(e, t, i, s, a) {
        return ti(),
        aa(a),
        t.flags |= 256,
        vt(e, t, i, s),
        t.child
    }
    var La = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ia(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Od(e, t, i) {
        var s = t.pendingProps, a = $e.current, c = !1, h = (t.flags & 128) !== 0, S;
        if ((S = h) || (S = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        S ? (c = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1),
        Ie($e, a & 1),
        e === null)
            return la(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (h = s.children,
            e = s.fallback,
            c ? (s = t.mode,
            c = t.child,
            h = {
                mode: "hidden",
                children: h
            },
            (s & 1) === 0 && c !== null ? (c.childLanes = 0,
            c.pendingProps = h) : c = Ls(h, s, 0, null),
            e = kr(e, s, i, null),
            c.return = t,
            e.return = t,
            c.sibling = e,
            t.child = c,
            t.child.memoizedState = Ia(i),
            t.memoizedState = La,
            e) : Da(t, h));
        if (a = e.memoizedState,
        a !== null && (S = a.dehydrated,
        S !== null))
            return Jg(e, t, h, s, S, a, i);
        if (c) {
            c = s.fallback,
            h = t.mode,
            a = e.child,
            S = a.sibling;
            var R = {
                mode: "hidden",
                children: s.children
            };
            return (h & 1) === 0 && t.child !== a ? (s = t.child,
            s.childLanes = 0,
            s.pendingProps = R,
            t.deletions = null) : (s = nr(a, R),
            s.subtreeFlags = a.subtreeFlags & 14680064),
            S !== null ? c = nr(S, c) : (c = kr(c, h, i, null),
            c.flags |= 2),
            c.return = t,
            s.return = t,
            s.sibling = c,
            t.child = s,
            s = c,
            c = t.child,
            h = e.child.memoizedState,
            h = h === null ? Ia(i) : {
                baseLanes: h.baseLanes | i,
                cachePool: null,
                transitions: h.transitions
            },
            c.memoizedState = h,
            c.childLanes = e.childLanes & ~i,
            t.memoizedState = La,
            s
        }
        return c = e.child,
        e = c.sibling,
        s = nr(c, {
            mode: "visible",
            children: s.children
        }),
        (t.mode & 1) === 0 && (s.lanes = i),
        s.return = t,
        s.sibling = null,
        e !== null && (i = t.deletions,
        i === null ? (t.deletions = [e],
        t.flags |= 16) : i.push(e)),
        t.child = s,
        t.memoizedState = null,
        s
    }
    function Da(e, t) {
        return t = Ls({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function bs(e, t, i, s) {
        return s !== null && aa(s),
        ni(t, e.child, null, i),
        e = Da(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Jg(e, t, i, s, a, c, h) {
        if (i)
            return t.flags & 256 ? (t.flags &= -257,
            s = Na(Error(o(422))),
            bs(e, t, h, s)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (c = s.fallback,
            a = t.mode,
            s = Ls({
                mode: "visible",
                children: s.children
            }, a, 0, null),
            c = kr(c, a, h, null),
            c.flags |= 2,
            s.return = t,
            c.return = t,
            s.sibling = c,
            t.child = s,
            (t.mode & 1) !== 0 && ni(t, e.child, null, h),
            t.child.memoizedState = Ia(h),
            t.memoizedState = La,
            c);
        if ((t.mode & 1) === 0)
            return bs(e, t, h, null);
        if (a.data === "$!") {
            if (s = a.nextSibling && a.nextSibling.dataset,
            s)
                var S = s.dgst;
            return s = S,
            c = Error(o(419)),
            s = Na(c, s, void 0),
            bs(e, t, h, s)
        }
        if (S = (h & e.childLanes) !== 0,
        bt || S) {
            if (s = rt,
            s !== null) {
                switch (h & -h) {
                case 4:
                    a = 2;
                    break;
                case 16:
                    a = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    a = 32;
                    break;
                case 536870912:
                    a = 268435456;
                    break;
                default:
                    a = 0
                }
                a = (a & (s.suspendedLanes | h)) !== 0 ? 0 : a,
                a !== 0 && a !== c.retryLane && (c.retryLane = a,
                En(e, a),
                Xt(s, e, a, -1))
            }
            return Xa(),
            s = Na(Error(o(421))),
            bs(e, t, h, s)
        }
        return a.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = fy.bind(null, e),
        a._reactRetry = t,
        null) : (e = c.treeContext,
        Ot = Vn(a.nextSibling),
        Rt = t,
        ze = !0,
        qt = null,
        e !== null && (Lt[It++] = Sn,
        Lt[It++] = Cn,
        Lt[It++] = gr,
        Sn = e.id,
        Cn = e.overflow,
        gr = t),
        t = Da(t, s.children),
        t.flags |= 4096,
        t)
    }
    function Nd(e, t, i) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t),
        da(e.return, t, i)
    }
    function Fa(e, t, i, s, a) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: i,
            tailMode: a
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = s,
        c.tail = i,
        c.tailMode = a)
    }
    function Pd(e, t, i) {
        var s = t.pendingProps
          , a = s.revealOrder
          , c = s.tail;
        if (vt(e, t, s.children, i),
        s = $e.current,
        (s & 2) !== 0)
            s = s & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Nd(e, i, t);
                    else if (e.tag === 19)
                        Nd(e, i, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            s &= 1
        }
        if (Ie($e, s),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (a) {
            case "forwards":
                for (i = t.child,
                a = null; i !== null; )
                    e = i.alternate,
                    e !== null && ps(e) === null && (a = i),
                    i = i.sibling;
                i = a,
                i === null ? (a = t.child,
                t.child = null) : (a = i.sibling,
                i.sibling = null),
                Fa(t, !1, a, i, c);
                break;
            case "backwards":
                for (i = null,
                a = t.child,
                t.child = null; a !== null; ) {
                    if (e = a.alternate,
                    e !== null && ps(e) === null) {
                        t.child = a;
                        break
                    }
                    e = a.sibling,
                    a.sibling = i,
                    i = a,
                    a = e
                }
                Fa(t, !0, i, null, c);
                break;
            case "together":
                Fa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function xs(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function kn(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies),
        Sr |= t.lanes,
        (i & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            i = nr(e, e.pendingProps),
            t.child = i,
            i.return = t; e.sibling !== null; )
                e = e.sibling,
                i = i.sibling = nr(e, e.pendingProps),
                i.return = t;
            i.sibling = null
        }
        return t.child
    }
    function Zg(e, t, i) {
        switch (t.tag) {
        case 3:
            kd(t),
            ti();
            break;
        case 5:
            Hf(t);
            break;
        case 1:
            wt(t.type) && rs(t);
            break;
        case 4:
            ma(t, t.stateNode.containerInfo);
            break;
        case 10:
            var s = t.type._context
              , a = t.memoizedProps.value;
            Ie(us, s._currentValue),
            s._currentValue = a;
            break;
        case 13:
            if (s = t.memoizedState,
            s !== null)
                return s.dehydrated !== null ? (Ie($e, $e.current & 1),
                t.flags |= 128,
                null) : (i & t.child.childLanes) !== 0 ? Od(e, t, i) : (Ie($e, $e.current & 1),
                e = kn(e, t, i),
                e !== null ? e.sibling : null);
            Ie($e, $e.current & 1);
            break;
        case 19:
            if (s = (i & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (s)
                    return Pd(e, t, i);
                t.flags |= 128
            }
            if (a = t.memoizedState,
            a !== null && (a.rendering = null,
            a.tail = null,
            a.lastEffect = null),
            Ie($e, $e.current),
            s)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            Cd(e, t, i)
        }
        return kn(e, t, i)
    }
    var Td, Aa, Md, Ld;
    Td = function(e, t) {
        for (var i = t.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6)
                e.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.child !== null) {
                i.child.return = i,
                i = i.child;
                continue
            }
            if (i === t)
                break;
            for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                    return;
                i = i.return
            }
            i.sibling.return = i.return,
            i = i.sibling
        }
    }
    ,
    Aa = function() {}
    ,
    Md = function(e, t, i, s) {
        var a = e.memoizedProps;
        if (a !== s) {
            e = t.stateNode,
            br(ln.current);
            var c = null;
            switch (i) {
            case "input":
                a = be(e, a),
                s = be(e, s),
                c = [];
                break;
            case "select":
                a = j({}, a, {
                    value: void 0
                }),
                s = j({}, s, {
                    value: void 0
                }),
                c = [];
                break;
            case "textarea":
                a = ce(e, a),
                s = ce(e, s),
                c = [];
                break;
            default:
                typeof a.onClick != "function" && typeof s.onClick == "function" && (e.onclick = es)
            }
            An(i, s);
            var h;
            i = null;
            for (F in a)
                if (!s.hasOwnProperty(F) && a.hasOwnProperty(F) && a[F] != null)
                    if (F === "style") {
                        var S = a[F];
                        for (h in S)
                            S.hasOwnProperty(h) && (i || (i = {}),
                            i[h] = "")
                    } else
                        F !== "dangerouslySetInnerHTML" && F !== "children" && F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && F !== "autoFocus" && (u.hasOwnProperty(F) ? c || (c = []) : (c = c || []).push(F, null));
            for (F in s) {
                var R = s[F];
                if (S = a?.[F],
                s.hasOwnProperty(F) && R !== S && (R != null || S != null))
                    if (F === "style")
                        if (S) {
                            for (h in S)
                                !S.hasOwnProperty(h) || R && R.hasOwnProperty(h) || (i || (i = {}),
                                i[h] = "");
                            for (h in R)
                                R.hasOwnProperty(h) && S[h] !== R[h] && (i || (i = {}),
                                i[h] = R[h])
                        } else
                            i || (c || (c = []),
                            c.push(F, i)),
                            i = R;
                    else
                        F === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0,
                        S = S ? S.__html : void 0,
                        R != null && S !== R && (c = c || []).push(F, R)) : F === "children" ? typeof R != "string" && typeof R != "number" || (c = c || []).push(F, "" + R) : F !== "suppressContentEditableWarning" && F !== "suppressHydrationWarning" && (u.hasOwnProperty(F) ? (R != null && F === "onScroll" && De("scroll", e),
                        c || S === R || (c = [])) : (c = c || []).push(F, R))
            }
            i && (c = c || []).push("style", i);
            var F = c;
            (t.updateQueue = F) && (t.flags |= 4)
        }
    }
    ,
    Ld = function(e, t, i, s) {
        i !== s && (t.flags |= 4)
    }
    ;
    function Ji(e, t) {
        if (!ze)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null; )
                    t.alternate !== null && (i = t),
                    t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var s = null; i !== null; )
                    i.alternate !== null && (s = i),
                    i = i.sibling;
                s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
            }
    }
    function pt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , i = 0
          , s = 0;
        if (t)
            for (var a = e.child; a !== null; )
                i |= a.lanes | a.childLanes,
                s |= a.subtreeFlags & 14680064,
                s |= a.flags & 14680064,
                a.return = e,
                a = a.sibling;
        else
            for (a = e.child; a !== null; )
                i |= a.lanes | a.childLanes,
                s |= a.subtreeFlags,
                s |= a.flags,
                a.return = e,
                a = a.sibling;
        return e.subtreeFlags |= s,
        e.childLanes = i,
        t
    }
    function ey(e, t, i) {
        var s = t.pendingProps;
        switch (oa(t),
        t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return pt(t),
            null;
        case 1:
            return wt(t.type) && ns(),
            pt(t),
            null;
        case 3:
            return s = t.stateNode,
            oi(),
            Fe(yt),
            Fe(ft),
            ya(),
            s.pendingContext && (s.context = s.pendingContext,
            s.pendingContext = null),
            (e === null || e.child === null) && (ls(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            qt !== null && (Ka(qt),
            qt = null))),
            Aa(e, t),
            pt(t),
            null;
        case 5:
            va(t);
            var a = br(qi.current);
            if (i = t.type,
            e !== null && t.stateNode != null)
                Md(e, t, i, s, a),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!s) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return pt(t),
                    null
                }
                if (e = br(ln.current),
                ls(t)) {
                    s = t.stateNode,
                    i = t.type;
                    var c = t.memoizedProps;
                    switch (s[sn] = t,
                    s[Ui] = c,
                    e = (t.mode & 1) !== 0,
                    i) {
                    case "dialog":
                        De("cancel", s),
                        De("close", s);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        De("load", s);
                        break;
                    case "video":
                    case "audio":
                        for (a = 0; a < zi.length; a++)
                            De(zi[a], s);
                        break;
                    case "source":
                        De("error", s);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        De("error", s),
                        De("load", s);
                        break;
                    case "details":
                        De("toggle", s);
                        break;
                    case "input":
                        Me(s, c),
                        De("invalid", s);
                        break;
                    case "select":
                        s._wrapperState = {
                            wasMultiple: !!c.multiple
                        },
                        De("invalid", s);
                        break;
                    case "textarea":
                        Se(s, c),
                        De("invalid", s)
                    }
                    An(i, c),
                    a = null;
                    for (var h in c)
                        if (c.hasOwnProperty(h)) {
                            var S = c[h];
                            h === "children" ? typeof S == "string" ? s.textContent !== S && (c.suppressHydrationWarning !== !0 && Zo(s.textContent, S, e),
                            a = ["children", S]) : typeof S == "number" && s.textContent !== "" + S && (c.suppressHydrationWarning !== !0 && Zo(s.textContent, S, e),
                            a = ["children", "" + S]) : u.hasOwnProperty(h) && S != null && h === "onScroll" && De("scroll", s)
                        }
                    switch (i) {
                    case "input":
                        Wt(s),
                        et(s, c, !0);
                        break;
                    case "textarea":
                        Wt(s),
                        Pe(s);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof c.onClick == "function" && (s.onclick = es)
                    }
                    s = a,
                    t.updateQueue = s,
                    s !== null && (t.flags |= 4)
                } else {
                    h = a.nodeType === 9 ? a : a.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = Le(i)),
                    e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = h.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = h.createElement(i, {
                        is: s.is
                    }) : (e = h.createElement(i),
                    i === "select" && (h = e,
                    s.multiple ? h.multiple = !0 : s.size && (h.size = s.size))) : e = h.createElementNS(e, i),
                    e[sn] = t,
                    e[Ui] = s,
                    Td(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (h = Mt(i, s),
                        i) {
                        case "dialog":
                            De("cancel", e),
                            De("close", e),
                            a = s;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            De("load", e),
                            a = s;
                            break;
                        case "video":
                        case "audio":
                            for (a = 0; a < zi.length; a++)
                                De(zi[a], e);
                            a = s;
                            break;
                        case "source":
                            De("error", e),
                            a = s;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            De("error", e),
                            De("load", e),
                            a = s;
                            break;
                        case "details":
                            De("toggle", e),
                            a = s;
                            break;
                        case "input":
                            Me(e, s),
                            a = be(e, s),
                            De("invalid", e);
                            break;
                        case "option":
                            a = s;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!s.multiple
                            },
                            a = j({}, s, {
                                value: void 0
                            }),
                            De("invalid", e);
                            break;
                        case "textarea":
                            Se(e, s),
                            a = ce(e, s),
                            De("invalid", e);
                            break;
                        default:
                            a = s
                        }
                        An(i, a),
                        S = a;
                        for (c in S)
                            if (S.hasOwnProperty(c)) {
                                var R = S[c];
                                c === "style" ? bi(e, R) : c === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0,
                                R != null && dr(e, R)) : c === "children" ? typeof R == "string" ? (i !== "textarea" || R !== "") && Ht(e, R) : typeof R == "number" && Ht(e, "" + R) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (u.hasOwnProperty(c) ? R != null && c === "onScroll" && De("scroll", e) : R != null && B(e, c, R, h))
                            }
                        switch (i) {
                        case "input":
                            Wt(e),
                            et(e, s, !1);
                            break;
                        case "textarea":
                            Wt(e),
                            Pe(e);
                            break;
                        case "option":
                            s.value != null && e.setAttribute("value", "" + ke(s.value));
                            break;
                        case "select":
                            e.multiple = !!s.multiple,
                            c = s.value,
                            c != null ? ot(e, !!s.multiple, c, !1) : s.defaultValue != null && ot(e, !!s.multiple, s.defaultValue, !0);
                            break;
                        default:
                            typeof a.onClick == "function" && (e.onclick = es)
                        }
                        switch (i) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            s = !!s.autoFocus;
                            break e;
                        case "img":
                            s = !0;
                            break e;
                        default:
                            s = !1
                        }
                    }
                    s && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return pt(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                Ld(e, t, e.memoizedProps, s);
            else {
                if (typeof s != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (i = br(qi.current),
                br(ln.current),
                ls(t)) {
                    if (s = t.stateNode,
                    i = t.memoizedProps,
                    s[sn] = t,
                    (c = s.nodeValue !== i) && (e = Rt,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            Zo(s.nodeValue, i, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Zo(s.nodeValue, i, (e.mode & 1) !== 0)
                        }
                    c && (t.flags |= 4)
                } else
                    s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s),
                    s[sn] = t,
                    t.stateNode = s
            }
            return pt(t),
            null;
        case 13:
            if (Fe($e),
            s = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ze && Ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Ff(),
                    ti(),
                    t.flags |= 98560,
                    c = !1;
                else if (c = ls(t),
                s !== null && s.dehydrated !== null) {
                    if (e === null) {
                        if (!c)
                            throw Error(o(318));
                        if (c = t.memoizedState,
                        c = c !== null ? c.dehydrated : null,
                        !c)
                            throw Error(o(317));
                        c[sn] = t
                    } else
                        ti(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    pt(t),
                    c = !1
                } else
                    qt !== null && (Ka(qt),
                    qt = null),
                    c = !0;
                if (!c)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = i,
            t) : (s = s !== null,
            s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || ($e.current & 1) !== 0 ? Ze === 0 && (Ze = 3) : Xa())),
            t.updateQueue !== null && (t.flags |= 4),
            pt(t),
            null);
        case 4:
            return oi(),
            Aa(e, t),
            e === null && Bi(t.stateNode.containerInfo),
            pt(t),
            null;
        case 10:
            return fa(t.type._context),
            pt(t),
            null;
        case 17:
            return wt(t.type) && ns(),
            pt(t),
            null;
        case 19:
            if (Fe($e),
            c = t.memoizedState,
            c === null)
                return pt(t),
                null;
            if (s = (t.flags & 128) !== 0,
            h = c.rendering,
            h === null)
                if (s)
                    Ji(c, !1);
                else {
                    if (Ze !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (h = ps(e),
                            h !== null) {
                                for (t.flags |= 128,
                                Ji(c, !1),
                                s = h.updateQueue,
                                s !== null && (t.updateQueue = s,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                s = i,
                                i = t.child; i !== null; )
                                    c = i,
                                    e = s,
                                    c.flags &= 14680066,
                                    h = c.alternate,
                                    h === null ? (c.childLanes = 0,
                                    c.lanes = e,
                                    c.child = null,
                                    c.subtreeFlags = 0,
                                    c.memoizedProps = null,
                                    c.memoizedState = null,
                                    c.updateQueue = null,
                                    c.dependencies = null,
                                    c.stateNode = null) : (c.childLanes = h.childLanes,
                                    c.lanes = h.lanes,
                                    c.child = h.child,
                                    c.subtreeFlags = 0,
                                    c.deletions = null,
                                    c.memoizedProps = h.memoizedProps,
                                    c.memoizedState = h.memoizedState,
                                    c.updateQueue = h.updateQueue,
                                    c.type = h.type,
                                    e = h.dependencies,
                                    c.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    i = i.sibling;
                                return Ie($e, $e.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    c.tail !== null && qe() > ui && (t.flags |= 128,
                    s = !0,
                    Ji(c, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!s)
                    if (e = ps(h),
                    e !== null) {
                        if (t.flags |= 128,
                        s = !0,
                        i = e.updateQueue,
                        i !== null && (t.updateQueue = i,
                        t.flags |= 4),
                        Ji(c, !0),
                        c.tail === null && c.tailMode === "hidden" && !h.alternate && !ze)
                            return pt(t),
                            null
                    } else
                        2 * qe() - c.renderingStartTime > ui && i !== 1073741824 && (t.flags |= 128,
                        s = !0,
                        Ji(c, !1),
                        t.lanes = 4194304);
                c.isBackwards ? (h.sibling = t.child,
                t.child = h) : (i = c.last,
                i !== null ? i.sibling = h : t.child = h,
                c.last = h)
            }
            return c.tail !== null ? (t = c.tail,
            c.rendering = t,
            c.tail = t.sibling,
            c.renderingStartTime = qe(),
            t.sibling = null,
            i = $e.current,
            Ie($e, s ? i & 1 | 2 : i & 1),
            t) : (pt(t),
            null);
        case 22:
        case 23:
            return Ya(),
            s = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== s && (t.flags |= 8192),
            s && (t.mode & 1) !== 0 ? (Nt & 1073741824) !== 0 && (pt(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : pt(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function ty(e, t) {
        switch (oa(t),
        t.tag) {
        case 1:
            return wt(t.type) && ns(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return oi(),
            Fe(yt),
            Fe(ft),
            ya(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return va(t),
            null;
        case 13:
            if (Fe($e),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                ti()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Fe($e),
            null;
        case 4:
            return oi(),
            null;
        case 10:
            return fa(t.type._context),
            null;
        case 22:
        case 23:
            return Ya(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ss = !1
      , ht = !1
      , ny = typeof WeakSet == "function" ? WeakSet : Set
      , oe = null;
    function li(e, t) {
        var i = e.ref;
        if (i !== null)
            if (typeof i == "function")
                try {
                    i(null)
                } catch (s) {
                    Ve(e, t, s)
                }
            else
                i.current = null
    }
    function ja(e, t, i) {
        try {
            i()
        } catch (s) {
            Ve(e, t, s)
        }
    }
    var Id = !1;
    function ry(e, t) {
        if (Yl = Uo,
        e = df(),
        Ul(e)) {
            if ("selectionStart"in e)
                var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var s = i.getSelection && i.getSelection();
                    if (s && s.rangeCount !== 0) {
                        i = s.anchorNode;
                        var a = s.anchorOffset
                          , c = s.focusNode;
                        s = s.focusOffset;
                        try {
                            i.nodeType,
                            c.nodeType
                        } catch {
                            i = null;
                            break e
                        }
                        var h = 0
                          , S = -1
                          , R = -1
                          , F = 0
                          , Q = 0
                          , q = e
                          , H = null;
                        t: for (; ; ) {
                            for (var ie; q !== i || a !== 0 && q.nodeType !== 3 || (S = h + a),
                            q !== c || s !== 0 && q.nodeType !== 3 || (R = h + s),
                            q.nodeType === 3 && (h += q.nodeValue.length),
                            (ie = q.firstChild) !== null; )
                                H = q,
                                q = ie;
                            for (; ; ) {
                                if (q === e)
                                    break t;
                                if (H === i && ++F === a && (S = h),
                                H === c && ++Q === s && (R = h),
                                (ie = q.nextSibling) !== null)
                                    break;
                                q = H,
                                H = q.parentNode
                            }
                            q = ie
                        }
                        i = S === -1 || R === -1 ? null : {
                            start: S,
                            end: R
                        }
                    } else
                        i = null
                }
            i = i || {
                start: 0,
                end: 0
            }
        } else
            i = null;
        for (Xl = {
            focusedElem: e,
            selectionRange: i
        },
        Uo = !1,
        oe = t; oe !== null; )
            if (t = oe,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                oe = e;
            else
                for (; oe !== null; ) {
                    t = oe;
                    try {
                        var se = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (se !== null) {
                                    var le = se.memoizedProps
                                      , Ke = se.memoizedState
                                      , I = t.stateNode
                                      , P = I.getSnapshotBeforeUpdate(t.elementType === t.type ? le : Kt(t.type, le), Ke);
                                    I.__reactInternalSnapshotBeforeUpdate = P
                                }
                                break;
                            case 3:
                                var D = t.stateNode.containerInfo;
                                D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(o(163))
                            }
                    } catch (X) {
                        Ve(t, t.return, X)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        oe = e;
                        break
                    }
                    oe = t.return
                }
        return se = Id,
        Id = !1,
        se
    }
    function Zi(e, t, i) {
        var s = t.updateQueue;
        if (s = s !== null ? s.lastEffect : null,
        s !== null) {
            var a = s = s.next;
            do {
                if ((a.tag & e) === e) {
                    var c = a.destroy;
                    a.destroy = void 0,
                    c !== void 0 && ja(t, i, c)
                }
                a = a.next
            } while (a !== s)
        }
    }
    function Cs(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var i = t = t.next;
            do {
                if ((i.tag & e) === e) {
                    var s = i.create;
                    i.destroy = s()
                }
                i = i.next
            } while (i !== t)
        }
    }
    function za(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            e.tag,
            e = i,
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Dd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Dd(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[sn],
        delete t[Ui],
        delete t[ta],
        delete t[zg],
        delete t[Bg])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Fd(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Ad(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Fd(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Ba(e, t, i) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode,
            t.insertBefore(e, i)) : (t = i,
            t.appendChild(e)),
            i = i._reactRootContainer,
            i != null || t.onclick !== null || (t.onclick = es));
        else if (s !== 4 && (e = e.child,
        e !== null))
            for (Ba(e, t, i),
            e = e.sibling; e !== null; )
                Ba(e, t, i),
                e = e.sibling
    }
    function $a(e, t, i) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
            t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (s !== 4 && (e = e.child,
        e !== null))
            for ($a(e, t, i),
            e = e.sibling; e !== null; )
                $a(e, t, i),
                e = e.sibling
    }
    var st = null
      , Gt = !1;
    function Xn(e, t, i) {
        for (i = i.child; i !== null; )
            jd(e, t, i),
            i = i.sibling
    }
    function jd(e, t, i) {
        if (on && typeof on.onCommitFiberUnmount == "function")
            try {
                on.onCommitFiberUnmount(Fo, i)
            } catch {}
        switch (i.tag) {
        case 5:
            ht || li(i, t);
        case 6:
            var s = st
              , a = Gt;
            st = null,
            Xn(e, t, i),
            st = s,
            Gt = a,
            st !== null && (Gt ? (e = st,
            i = i.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : st.removeChild(i.stateNode));
            break;
        case 18:
            st !== null && (Gt ? (e = st,
            i = i.stateNode,
            e.nodeType === 8 ? ea(e.parentNode, i) : e.nodeType === 1 && ea(e, i),
            Ti(e)) : ea(st, i.stateNode));
            break;
        case 4:
            s = st,
            a = Gt,
            st = i.stateNode.containerInfo,
            Gt = !0,
            Xn(e, t, i),
            st = s,
            Gt = a;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ht && (s = i.updateQueue,
            s !== null && (s = s.lastEffect,
            s !== null))) {
                a = s = s.next;
                do {
                    var c = a
                      , h = c.destroy;
                    c = c.tag,
                    h !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && ja(i, t, h),
                    a = a.next
                } while (a !== s)
            }
            Xn(e, t, i);
            break;
        case 1:
            if (!ht && (li(i, t),
            s = i.stateNode,
            typeof s.componentWillUnmount == "function"))
                try {
                    s.props = i.memoizedProps,
                    s.state = i.memoizedState,
                    s.componentWillUnmount()
                } catch (S) {
                    Ve(i, t, S)
                }
            Xn(e, t, i);
            break;
        case 21:
            Xn(e, t, i);
            break;
        case 22:
            i.mode & 1 ? (ht = (s = ht) || i.memoizedState !== null,
            Xn(e, t, i),
            ht = s) : Xn(e, t, i);
            break;
        default:
            Xn(e, t, i)
        }
    }
    function zd(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            i === null && (i = e.stateNode = new ny),
            t.forEach(function(s) {
                var a = dy.bind(null, e, s);
                i.has(s) || (i.add(s),
                s.then(a, a))
            })
        }
    }
    function Yt(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var s = 0; s < i.length; s++) {
                var a = i[s];
                try {
                    var c = e
                      , h = t
                      , S = h;
                    e: for (; S !== null; ) {
                        switch (S.tag) {
                        case 5:
                            st = S.stateNode,
                            Gt = !1;
                            break e;
                        case 3:
                            st = S.stateNode.containerInfo,
                            Gt = !0;
                            break e;
                        case 4:
                            st = S.stateNode.containerInfo,
                            Gt = !0;
                            break e
                        }
                        S = S.return
                    }
                    if (st === null)
                        throw Error(o(160));
                    jd(c, h, a),
                    st = null,
                    Gt = !1;
                    var R = a.alternate;
                    R !== null && (R.return = null),
                    a.return = null
                } catch (F) {
                    Ve(a, t, F)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                Bd(t, e),
                t = t.sibling
    }
    function Bd(e, t) {
        var i = e.alternate
          , s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Yt(t, e),
            un(e),
            s & 4) {
                try {
                    Zi(3, e, e.return),
                    Cs(3, e)
                } catch (le) {
                    Ve(e, e.return, le)
                }
                try {
                    Zi(5, e, e.return)
                } catch (le) {
                    Ve(e, e.return, le)
                }
            }
            break;
        case 1:
            Yt(t, e),
            un(e),
            s & 512 && i !== null && li(i, i.return);
            break;
        case 5:
            if (Yt(t, e),
            un(e),
            s & 512 && i !== null && li(i, i.return),
            e.flags & 32) {
                var a = e.stateNode;
                try {
                    Ht(a, "")
                } catch (le) {
                    Ve(e, e.return, le)
                }
            }
            if (s & 4 && (a = e.stateNode,
            a != null)) {
                var c = e.memoizedProps
                  , h = i !== null ? i.memoizedProps : c
                  , S = e.type
                  , R = e.updateQueue;
                if (e.updateQueue = null,
                R !== null)
                    try {
                        S === "input" && c.type === "radio" && c.name != null && Ae(a, c),
                        Mt(S, h);
                        var F = Mt(S, c);
                        for (h = 0; h < R.length; h += 2) {
                            var Q = R[h]
                              , q = R[h + 1];
                            Q === "style" ? bi(a, q) : Q === "dangerouslySetInnerHTML" ? dr(a, q) : Q === "children" ? Ht(a, q) : B(a, Q, q, F)
                        }
                        switch (S) {
                        case "input":
                            _e(a, c);
                            break;
                        case "textarea":
                            fe(a, c);
                            break;
                        case "select":
                            var H = a._wrapperState.wasMultiple;
                            a._wrapperState.wasMultiple = !!c.multiple;
                            var ie = c.value;
                            ie != null ? ot(a, !!c.multiple, ie, !1) : H !== !!c.multiple && (c.defaultValue != null ? ot(a, !!c.multiple, c.defaultValue, !0) : ot(a, !!c.multiple, c.multiple ? [] : "", !1))
                        }
                        a[Ui] = c
                    } catch (le) {
                        Ve(e, e.return, le)
                    }
            }
            break;
        case 6:
            if (Yt(t, e),
            un(e),
            s & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                a = e.stateNode,
                c = e.memoizedProps;
                try {
                    a.nodeValue = c
                } catch (le) {
                    Ve(e, e.return, le)
                }
            }
            break;
        case 3:
            if (Yt(t, e),
            un(e),
            s & 4 && i !== null && i.memoizedState.isDehydrated)
                try {
                    Ti(t.containerInfo)
                } catch (le) {
                    Ve(e, e.return, le)
                }
            break;
        case 4:
            Yt(t, e),
            un(e);
            break;
        case 13:
            Yt(t, e),
            un(e),
            a = e.child,
            a.flags & 8192 && (c = a.memoizedState !== null,
            a.stateNode.isHidden = c,
            !c || a.alternate !== null && a.alternate.memoizedState !== null || (Ha = qe())),
            s & 4 && zd(e);
            break;
        case 22:
            if (Q = i !== null && i.memoizedState !== null,
            e.mode & 1 ? (ht = (F = ht) || Q,
            Yt(t, e),
            ht = F) : Yt(t, e),
            un(e),
            s & 8192) {
                if (F = e.memoizedState !== null,
                (e.stateNode.isHidden = F) && !Q && (e.mode & 1) !== 0)
                    for (oe = e,
                    Q = e.child; Q !== null; ) {
                        for (q = oe = Q; oe !== null; ) {
                            switch (H = oe,
                            ie = H.child,
                            H.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Zi(4, H, H.return);
                                break;
                            case 1:
                                li(H, H.return);
                                var se = H.stateNode;
                                if (typeof se.componentWillUnmount == "function") {
                                    s = H,
                                    i = H.return;
                                    try {
                                        t = s,
                                        se.props = t.memoizedProps,
                                        se.state = t.memoizedState,
                                        se.componentWillUnmount()
                                    } catch (le) {
                                        Ve(s, i, le)
                                    }
                                }
                                break;
                            case 5:
                                li(H, H.return);
                                break;
                            case 22:
                                if (H.memoizedState !== null) {
                                    Wd(q);
                                    continue
                                }
                            }
                            ie !== null ? (ie.return = H,
                            oe = ie) : Wd(q)
                        }
                        Q = Q.sibling
                    }
                e: for (Q = null,
                q = e; ; ) {
                    if (q.tag === 5) {
                        if (Q === null) {
                            Q = q;
                            try {
                                a = q.stateNode,
                                F ? (c = a.style,
                                typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (S = q.stateNode,
                                R = q.memoizedProps.style,
                                h = R != null && R.hasOwnProperty("display") ? R.display : null,
                                S.style.display = pr("display", h))
                            } catch (le) {
                                Ve(e, e.return, le)
                            }
                        }
                    } else if (q.tag === 6) {
                        if (Q === null)
                            try {
                                q.stateNode.nodeValue = F ? "" : q.memoizedProps
                            } catch (le) {
                                Ve(e, e.return, le)
                            }
                    } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
                        q.child.return = q,
                        q = q.child;
                        continue
                    }
                    if (q === e)
                        break e;
                    for (; q.sibling === null; ) {
                        if (q.return === null || q.return === e)
                            break e;
                        Q === q && (Q = null),
                        q = q.return
                    }
                    Q === q && (Q = null),
                    q.sibling.return = q.return,
                    q = q.sibling
                }
            }
            break;
        case 19:
            Yt(t, e),
            un(e),
            s & 4 && zd(e);
            break;
        case 21:
            break;
        default:
            Yt(t, e),
            un(e)
        }
    }
    function un(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var i = e.return; i !== null; ) {
                        if (Fd(i)) {
                            var s = i;
                            break e
                        }
                        i = i.return
                    }
                    throw Error(o(160))
                }
                switch (s.tag) {
                case 5:
                    var a = s.stateNode;
                    s.flags & 32 && (Ht(a, ""),
                    s.flags &= -33);
                    var c = Ad(e);
                    $a(e, c, a);
                    break;
                case 3:
                case 4:
                    var h = s.stateNode.containerInfo
                      , S = Ad(e);
                    Ba(e, S, h);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (R) {
                Ve(e, e.return, R)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function iy(e, t, i) {
        oe = e,
        $d(e)
    }
    function $d(e, t, i) {
        for (var s = (e.mode & 1) !== 0; oe !== null; ) {
            var a = oe
              , c = a.child;
            if (a.tag === 22 && s) {
                var h = a.memoizedState !== null || Ss;
                if (!h) {
                    var S = a.alternate
                      , R = S !== null && S.memoizedState !== null || ht;
                    S = Ss;
                    var F = ht;
                    if (Ss = h,
                    (ht = R) && !F)
                        for (oe = a; oe !== null; )
                            h = oe,
                            R = h.child,
                            h.tag === 22 && h.memoizedState !== null ? Hd(a) : R !== null ? (R.return = h,
                            oe = R) : Hd(a);
                    for (; c !== null; )
                        oe = c,
                        $d(c),
                        c = c.sibling;
                    oe = a,
                    Ss = S,
                    ht = F
                }
                Ud(e)
            } else
                (a.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = a,
                oe = c) : Ud(e)
        }
    }
    function Ud(e) {
        for (; oe !== null; ) {
            var t = oe;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ht || Cs(5, t);
                            break;
                        case 1:
                            var s = t.stateNode;
                            if (t.flags & 4 && !ht)
                                if (i === null)
                                    s.componentDidMount();
                                else {
                                    var a = t.elementType === t.type ? i.memoizedProps : Kt(t.type, i.memoizedProps);
                                    s.componentDidUpdate(a, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate)
                                }
                            var c = t.updateQueue;
                            c !== null && Wf(t, c, s);
                            break;
                        case 3:
                            var h = t.updateQueue;
                            if (h !== null) {
                                if (i = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        i = t.child.stateNode;
                                        break;
                                    case 1:
                                        i = t.child.stateNode
                                    }
                                Wf(t, h, i)
                            }
                            break;
                        case 5:
                            var S = t.stateNode;
                            if (i === null && t.flags & 4) {
                                i = S;
                                var R = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    R.autoFocus && i.focus();
                                    break;
                                case "img":
                                    R.src && (i.src = R.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var F = t.alternate;
                                if (F !== null) {
                                    var Q = F.memoizedState;
                                    if (Q !== null) {
                                        var q = Q.dehydrated;
                                        q !== null && Ti(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(o(163))
                        }
                    ht || t.flags & 512 && za(t)
                } catch (H) {
                    Ve(t, t.return, H)
                }
            }
            if (t === e) {
                oe = null;
                break
            }
            if (i = t.sibling,
            i !== null) {
                i.return = t.return,
                oe = i;
                break
            }
            oe = t.return
        }
    }
    function Wd(e) {
        for (; oe !== null; ) {
            var t = oe;
            if (t === e) {
                oe = null;
                break
            }
            var i = t.sibling;
            if (i !== null) {
                i.return = t.return,
                oe = i;
                break
            }
            oe = t.return
        }
    }
    function Hd(e) {
        for (; oe !== null; ) {
            var t = oe;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var i = t.return;
                    try {
                        Cs(4, t)
                    } catch (R) {
                        Ve(t, i, R)
                    }
                    break;
                case 1:
                    var s = t.stateNode;
                    if (typeof s.componentDidMount == "function") {
                        var a = t.return;
                        try {
                            s.componentDidMount()
                        } catch (R) {
                            Ve(t, a, R)
                        }
                    }
                    var c = t.return;
                    try {
                        za(t)
                    } catch (R) {
                        Ve(t, c, R)
                    }
                    break;
                case 5:
                    var h = t.return;
                    try {
                        za(t)
                    } catch (R) {
                        Ve(t, h, R)
                    }
                }
            } catch (R) {
                Ve(t, t.return, R)
            }
            if (t === e) {
                oe = null;
                break
            }
            var S = t.sibling;
            if (S !== null) {
                S.return = t.return,
                oe = S;
                break
            }
            oe = t.return
        }
    }
    var oy = Math.ceil
      , Es = W.ReactCurrentDispatcher
      , Ua = W.ReactCurrentOwner
      , At = W.ReactCurrentBatchConfig
      , Re = 0
      , rt = null
      , Ye = null
      , lt = 0
      , Nt = 0
      , ai = Qn(0)
      , Ze = 0
      , eo = null
      , Sr = 0
      , _s = 0
      , Wa = 0
      , to = null
      , xt = null
      , Ha = 0
      , ui = 1 / 0
      , Rn = null
      , ks = !1
      , Va = null
      , Jn = null
      , Rs = !1
      , Zn = null
      , Os = 0
      , no = 0
      , Qa = null
      , Ns = -1
      , Ps = 0;
    function gt() {
        return (Re & 6) !== 0 ? qe() : Ns !== -1 ? Ns : Ns = qe()
    }
    function er(e) {
        return (e.mode & 1) === 0 ? 1 : (Re & 2) !== 0 && lt !== 0 ? lt & -lt : Ug.transition !== null ? (Ps === 0 && (Ps = Fc()),
        Ps) : (e = Te,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : Vc(e.type)),
        e)
    }
    function Xt(e, t, i, s) {
        if (50 < no)
            throw no = 0,
            Qa = null,
            Error(o(185));
        ki(e, i, s),
        ((Re & 2) === 0 || e !== rt) && (e === rt && ((Re & 2) === 0 && (_s |= i),
        Ze === 4 && tr(e, lt)),
        St(e, s),
        i === 1 && Re === 0 && (t.mode & 1) === 0 && (ui = qe() + 500,
        is && Kn()))
    }
    function St(e, t) {
        var i = e.callbackNode;
        Uv(e, t);
        var s = zo(e, e === rt ? lt : 0);
        if (s === 0)
            i !== null && Lc(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = s & -s,
        e.callbackPriority !== t) {
            if (i != null && Lc(i),
            t === 1)
                e.tag === 0 ? $g(Qd.bind(null, e)) : Tf(Qd.bind(null, e)),
                Ag(function() {
                    (Re & 6) === 0 && Kn()
                }),
                i = null;
            else {
                switch (Ac(s)) {
                case 1:
                    i = _l;
                    break;
                case 4:
                    i = Ic;
                    break;
                case 16:
                    i = Do;
                    break;
                case 536870912:
                    i = Dc;
                    break;
                default:
                    i = Do
                }
                i = ep(i, Vd.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = i
        }
    }
    function Vd(e, t) {
        if (Ns = -1,
        Ps = 0,
        (Re & 6) !== 0)
            throw Error(o(327));
        var i = e.callbackNode;
        if (ci() && e.callbackNode !== i)
            return null;
        var s = zo(e, e === rt ? lt : 0);
        if (s === 0)
            return null;
        if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t)
            t = Ts(e, s);
        else {
            t = s;
            var a = Re;
            Re |= 2;
            var c = Kd();
            (rt !== e || lt !== t) && (Rn = null,
            ui = qe() + 500,
            Er(e, t));
            do
                try {
                    ay();
                    break
                } catch (S) {
                    qd(e, S)
                }
            while (!0);
            ca(),
            Es.current = c,
            Re = a,
            Ye !== null ? t = 0 : (rt = null,
            lt = 0,
            t = Ze)
        }
        if (t !== 0) {
            if (t === 2 && (a = kl(e),
            a !== 0 && (s = a,
            t = qa(e, a))),
            t === 1)
                throw i = eo,
                Er(e, 0),
                tr(e, s),
                St(e, qe()),
                i;
            if (t === 6)
                tr(e, s);
            else {
                if (a = e.current.alternate,
                (s & 30) === 0 && !sy(a) && (t = Ts(e, s),
                t === 2 && (c = kl(e),
                c !== 0 && (s = c,
                t = qa(e, c))),
                t === 1))
                    throw i = eo,
                    Er(e, 0),
                    tr(e, s),
                    St(e, qe()),
                    i;
                switch (e.finishedWork = a,
                e.finishedLanes = s,
                t) {
                case 0:
                case 1:
                    throw Error(o(345));
                case 2:
                    _r(e, xt, Rn);
                    break;
                case 3:
                    if (tr(e, s),
                    (s & 130023424) === s && (t = Ha + 500 - qe(),
                    10 < t)) {
                        if (zo(e, 0) !== 0)
                            break;
                        if (a = e.suspendedLanes,
                        (a & s) !== s) {
                            gt(),
                            e.pingedLanes |= e.suspendedLanes & a;
                            break
                        }
                        e.timeoutHandle = Zl(_r.bind(null, e, xt, Rn), t);
                        break
                    }
                    _r(e, xt, Rn);
                    break;
                case 4:
                    if (tr(e, s),
                    (s & 4194240) === s)
                        break;
                    for (t = e.eventTimes,
                    a = -1; 0 < s; ) {
                        var h = 31 - Vt(s);
                        c = 1 << h,
                        h = t[h],
                        h > a && (a = h),
                        s &= ~c
                    }
                    if (s = a,
                    s = qe() - s,
                    s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * oy(s / 1960)) - s,
                    10 < s) {
                        e.timeoutHandle = Zl(_r.bind(null, e, xt, Rn), s);
                        break
                    }
                    _r(e, xt, Rn);
                    break;
                case 5:
                    _r(e, xt, Rn);
                    break;
                default:
                    throw Error(o(329))
                }
            }
        }
        return St(e, qe()),
        e.callbackNode === i ? Vd.bind(null, e) : null
    }
    function qa(e, t) {
        var i = to;
        return e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256),
        e = Ts(e, t),
        e !== 2 && (t = xt,
        xt = i,
        t !== null && Ka(t)),
        e
    }
    function Ka(e) {
        xt === null ? xt = e : xt.push.apply(xt, e)
    }
    function sy(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && (i = i.stores,
                i !== null))
                    for (var s = 0; s < i.length; s++) {
                        var a = i[s]
                          , c = a.getSnapshot;
                        a = a.value;
                        try {
                            if (!Qt(c(), a))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (i = t.child,
            t.subtreeFlags & 16384 && i !== null)
                i.return = t,
                t = i;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function tr(e, t) {
        for (t &= ~Wa,
        t &= ~_s,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var i = 31 - Vt(t)
              , s = 1 << i;
            e[i] = -1,
            t &= ~s
        }
    }
    function Qd(e) {
        if ((Re & 6) !== 0)
            throw Error(o(327));
        ci();
        var t = zo(e, 0);
        if ((t & 1) === 0)
            return St(e, qe()),
            null;
        var i = Ts(e, t);
        if (e.tag !== 0 && i === 2) {
            var s = kl(e);
            s !== 0 && (t = s,
            i = qa(e, s))
        }
        if (i === 1)
            throw i = eo,
            Er(e, 0),
            tr(e, t),
            St(e, qe()),
            i;
        if (i === 6)
            throw Error(o(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        _r(e, xt, Rn),
        St(e, qe()),
        null
    }
    function Ga(e, t) {
        var i = Re;
        Re |= 1;
        try {
            return e(t)
        } finally {
            Re = i,
            Re === 0 && (ui = qe() + 500,
            is && Kn())
        }
    }
    function Cr(e) {
        Zn !== null && Zn.tag === 0 && (Re & 6) === 0 && ci();
        var t = Re;
        Re |= 1;
        var i = At.transition
          , s = Te;
        try {
            if (At.transition = null,
            Te = 1,
            e)
                return e()
        } finally {
            Te = s,
            At.transition = i,
            Re = t,
            (Re & 6) === 0 && Kn()
        }
    }
    function Ya() {
        Nt = ai.current,
        Fe(ai)
    }
    function Er(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var i = e.timeoutHandle;
        if (i !== -1 && (e.timeoutHandle = -1,
        Fg(i)),
        Ye !== null)
            for (i = Ye.return; i !== null; ) {
                var s = i;
                switch (oa(s),
                s.tag) {
                case 1:
                    s = s.type.childContextTypes,
                    s != null && ns();
                    break;
                case 3:
                    oi(),
                    Fe(yt),
                    Fe(ft),
                    ya();
                    break;
                case 5:
                    va(s);
                    break;
                case 4:
                    oi();
                    break;
                case 13:
                    Fe($e);
                    break;
                case 19:
                    Fe($e);
                    break;
                case 10:
                    fa(s.type._context);
                    break;
                case 22:
                case 23:
                    Ya()
                }
                i = i.return
            }
        if (rt = e,
        Ye = e = nr(e.current, null),
        lt = Nt = t,
        Ze = 0,
        eo = null,
        Wa = _s = Sr = 0,
        xt = to = null,
        wr !== null) {
            for (t = 0; t < wr.length; t++)
                if (i = wr[t],
                s = i.interleaved,
                s !== null) {
                    i.interleaved = null;
                    var a = s.next
                      , c = i.pending;
                    if (c !== null) {
                        var h = c.next;
                        c.next = a,
                        s.next = h
                    }
                    i.pending = s
                }
            wr = null
        }
        return e
    }
    function qd(e, t) {
        do {
            var i = Ye;
            try {
                if (ca(),
                hs.current = ys,
                ms) {
                    for (var s = Ue.memoizedState; s !== null; ) {
                        var a = s.queue;
                        a !== null && (a.pending = null),
                        s = s.next
                    }
                    ms = !1
                }
                if (xr = 0,
                nt = Je = Ue = null,
                Ki = !1,
                Gi = 0,
                Ua.current = null,
                i === null || i.return === null) {
                    Ze = 1,
                    eo = t,
                    Ye = null;
                    break
                }
                e: {
                    var c = e
                      , h = i.return
                      , S = i
                      , R = t;
                    if (t = lt,
                    S.flags |= 32768,
                    R !== null && typeof R == "object" && typeof R.then == "function") {
                        var F = R
                          , Q = S
                          , q = Q.tag;
                        if ((Q.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var H = Q.alternate;
                            H ? (Q.updateQueue = H.updateQueue,
                            Q.memoizedState = H.memoizedState,
                            Q.lanes = H.lanes) : (Q.updateQueue = null,
                            Q.memoizedState = null)
                        }
                        var ie = yd(h);
                        if (ie !== null) {
                            ie.flags &= -257,
                            wd(ie, h, S, c, t),
                            ie.mode & 1 && gd(c, F, t),
                            t = ie,
                            R = F;
                            var se = t.updateQueue;
                            if (se === null) {
                                var le = new Set;
                                le.add(R),
                                t.updateQueue = le
                            } else
                                se.add(R);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                gd(c, F, t),
                                Xa();
                                break e
                            }
                            R = Error(o(426))
                        }
                    } else if (ze && S.mode & 1) {
                        var Ke = yd(h);
                        if (Ke !== null) {
                            (Ke.flags & 65536) === 0 && (Ke.flags |= 256),
                            wd(Ke, h, S, c, t),
                            aa(si(R, S));
                            break e
                        }
                    }
                    c = R = si(R, S),
                    Ze !== 4 && (Ze = 2),
                    to === null ? to = [c] : to.push(c),
                    c = h;
                    do {
                        switch (c.tag) {
                        case 3:
                            c.flags |= 65536,
                            t &= -t,
                            c.lanes |= t;
                            var I = md(c, R, t);
                            Uf(c, I);
                            break e;
                        case 1:
                            S = R;
                            var P = c.type
                              , D = c.stateNode;
                            if ((c.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (Jn === null || !Jn.has(D)))) {
                                c.flags |= 65536,
                                t &= -t,
                                c.lanes |= t;
                                var X = vd(c, S, t);
                                Uf(c, X);
                                break e
                            }
                        }
                        c = c.return
                    } while (c !== null)
                }
                Yd(i)
            } catch (de) {
                t = de,
                Ye === i && i !== null && (Ye = i = i.return);
                continue
            }
            break
        } while (!0)
    }
    function Kd() {
        var e = Es.current;
        return Es.current = ys,
        e === null ? ys : e
    }
    function Xa() {
        (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
        rt === null || (Sr & 268435455) === 0 && (_s & 268435455) === 0 || tr(rt, lt)
    }
    function Ts(e, t) {
        var i = Re;
        Re |= 2;
        var s = Kd();
        (rt !== e || lt !== t) && (Rn = null,
        Er(e, t));
        do
            try {
                ly();
                break
            } catch (a) {
                qd(e, a)
            }
        while (!0);
        if (ca(),
        Re = i,
        Es.current = s,
        Ye !== null)
            throw Error(o(261));
        return rt = null,
        lt = 0,
        Ze
    }
    function ly() {
        for (; Ye !== null; )
            Gd(Ye)
    }
    function ay() {
        for (; Ye !== null && !Lv(); )
            Gd(Ye)
    }
    function Gd(e) {
        var t = Zd(e.alternate, e, Nt);
        e.memoizedProps = e.pendingProps,
        t === null ? Yd(e) : Ye = t,
        Ua.current = null
    }
    function Yd(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (i = ey(i, t, Nt),
                i !== null) {
                    Ye = i;
                    return
                }
            } else {
                if (i = ty(i, t),
                i !== null) {
                    i.flags &= 32767,
                    Ye = i;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Ze = 6,
                    Ye = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                Ye = t;
                return
            }
            Ye = t = e
        } while (t !== null);
        Ze === 0 && (Ze = 5)
    }
    function _r(e, t, i) {
        var s = Te
          , a = At.transition;
        try {
            At.transition = null,
            Te = 1,
            uy(e, t, i, s)
        } finally {
            At.transition = a,
            Te = s
        }
        return null
    }
    function uy(e, t, i, s) {
        do
            ci();
        while (Zn !== null);
        if ((Re & 6) !== 0)
            throw Error(o(327));
        i = e.finishedWork;
        var a = e.finishedLanes;
        if (i === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        i === e.current)
            throw Error(o(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var c = i.lanes | i.childLanes;
        if (Wv(e, c),
        e === rt && (Ye = rt = null,
        lt = 0),
        (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Rs || (Rs = !0,
        ep(Do, function() {
            return ci(),
            null
        })),
        c = (i.flags & 15990) !== 0,
        (i.subtreeFlags & 15990) !== 0 || c) {
            c = At.transition,
            At.transition = null;
            var h = Te;
            Te = 1;
            var S = Re;
            Re |= 4,
            Ua.current = null,
            ry(e, i),
            Bd(i, e),
            Ng(Xl),
            Uo = !!Yl,
            Xl = Yl = null,
            e.current = i,
            iy(i),
            Iv(),
            Re = S,
            Te = h,
            At.transition = c
        } else
            e.current = i;
        if (Rs && (Rs = !1,
        Zn = e,
        Os = a),
        c = e.pendingLanes,
        c === 0 && (Jn = null),
        Av(i.stateNode),
        St(e, qe()),
        t !== null)
            for (s = e.onRecoverableError,
            i = 0; i < t.length; i++)
                a = t[i],
                s(a.value, {
                    componentStack: a.stack,
                    digest: a.digest
                });
        if (ks)
            throw ks = !1,
            e = Va,
            Va = null,
            e;
        return (Os & 1) !== 0 && e.tag !== 0 && ci(),
        c = e.pendingLanes,
        (c & 1) !== 0 ? e === Qa ? no++ : (no = 0,
        Qa = e) : no = 0,
        Kn(),
        null
    }
    function ci() {
        if (Zn !== null) {
            var e = Ac(Os)
              , t = At.transition
              , i = Te;
            try {
                if (At.transition = null,
                Te = 16 > e ? 16 : e,
                Zn === null)
                    var s = !1;
                else {
                    if (e = Zn,
                    Zn = null,
                    Os = 0,
                    (Re & 6) !== 0)
                        throw Error(o(331));
                    var a = Re;
                    for (Re |= 4,
                    oe = e.current; oe !== null; ) {
                        var c = oe
                          , h = c.child;
                        if ((oe.flags & 16) !== 0) {
                            var S = c.deletions;
                            if (S !== null) {
                                for (var R = 0; R < S.length; R++) {
                                    var F = S[R];
                                    for (oe = F; oe !== null; ) {
                                        var Q = oe;
                                        switch (Q.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zi(8, Q, c)
                                        }
                                        var q = Q.child;
                                        if (q !== null)
                                            q.return = Q,
                                            oe = q;
                                        else
                                            for (; oe !== null; ) {
                                                Q = oe;
                                                var H = Q.sibling
                                                  , ie = Q.return;
                                                if (Dd(Q),
                                                Q === F) {
                                                    oe = null;
                                                    break
                                                }
                                                if (H !== null) {
                                                    H.return = ie,
                                                    oe = H;
                                                    break
                                                }
                                                oe = ie
                                            }
                                    }
                                }
                                var se = c.alternate;
                                if (se !== null) {
                                    var le = se.child;
                                    if (le !== null) {
                                        se.child = null;
                                        do {
                                            var Ke = le.sibling;
                                            le.sibling = null,
                                            le = Ke
                                        } while (le !== null)
                                    }
                                }
                                oe = c
                            }
                        }
                        if ((c.subtreeFlags & 2064) !== 0 && h !== null)
                            h.return = c,
                            oe = h;
                        else
                            e: for (; oe !== null; ) {
                                if (c = oe,
                                (c.flags & 2048) !== 0)
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zi(9, c, c.return)
                                    }
                                var I = c.sibling;
                                if (I !== null) {
                                    I.return = c.return,
                                    oe = I;
                                    break e
                                }
                                oe = c.return
                            }
                    }
                    var P = e.current;
                    for (oe = P; oe !== null; ) {
                        h = oe;
                        var D = h.child;
                        if ((h.subtreeFlags & 2064) !== 0 && D !== null)
                            D.return = h,
                            oe = D;
                        else
                            e: for (h = P; oe !== null; ) {
                                if (S = oe,
                                (S.flags & 2048) !== 0)
                                    try {
                                        switch (S.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Cs(9, S)
                                        }
                                    } catch (de) {
                                        Ve(S, S.return, de)
                                    }
                                if (S === h) {
                                    oe = null;
                                    break e
                                }
                                var X = S.sibling;
                                if (X !== null) {
                                    X.return = S.return,
                                    oe = X;
                                    break e
                                }
                                oe = S.return
                            }
                    }
                    if (Re = a,
                    Kn(),
                    on && typeof on.onPostCommitFiberRoot == "function")
                        try {
                            on.onPostCommitFiberRoot(Fo, e)
                        } catch {}
                    s = !0
                }
                return s
            } finally {
                Te = i,
                At.transition = t
            }
        }
        return !1
    }
    function Xd(e, t, i) {
        t = si(i, t),
        t = md(e, t, 1),
        e = Yn(e, t, 1),
        t = gt(),
        e !== null && (ki(e, 1, t),
        St(e, t))
    }
    function Ve(e, t, i) {
        if (e.tag === 3)
            Xd(e, e, i);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Xd(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Jn === null || !Jn.has(s))) {
                        e = si(i, e),
                        e = vd(t, e, 1),
                        t = Yn(t, e, 1),
                        e = gt(),
                        t !== null && (ki(t, 1, e),
                        St(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function cy(e, t, i) {
        var s = e.pingCache;
        s !== null && s.delete(t),
        t = gt(),
        e.pingedLanes |= e.suspendedLanes & i,
        rt === e && (lt & i) === i && (Ze === 4 || Ze === 3 && (lt & 130023424) === lt && 500 > qe() - Ha ? Er(e, 0) : Wa |= i),
        St(e, t)
    }
    function Jd(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = jo,
        jo <<= 1,
        (jo & 130023424) === 0 && (jo = 4194304)));
        var i = gt();
        e = En(e, t),
        e !== null && (ki(e, t, i),
        St(e, i))
    }
    function fy(e) {
        var t = e.memoizedState
          , i = 0;
        t !== null && (i = t.retryLane),
        Jd(e, i)
    }
    function dy(e, t) {
        var i = 0;
        switch (e.tag) {
        case 13:
            var s = e.stateNode
              , a = e.memoizedState;
            a !== null && (i = a.retryLane);
            break;
        case 19:
            s = e.stateNode;
            break;
        default:
            throw Error(o(314))
        }
        s !== null && s.delete(t),
        Jd(e, i)
    }
    var Zd;
    Zd = function(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || yt.current)
                bt = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
                    return bt = !1,
                    Zg(e, t, i);
                bt = (e.flags & 131072) !== 0
            }
        else
            bt = !1,
            ze && (t.flags & 1048576) !== 0 && Mf(t, ss, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var s = t.type;
            xs(e, t),
            e = t.pendingProps;
            var a = Jr(t, ft.current);
            ii(t, i),
            a = xa(null, t, s, e, a, i);
            var c = Sa();
            return t.flags |= 1,
            typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            wt(s) ? (c = !0,
            rs(t)) : c = !1,
            t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
            ha(t),
            a.updater = ws,
            t.stateNode = a,
            a._reactInternals = t,
            Oa(t, s, e, i),
            t = Ma(null, t, s, !0, c, i)) : (t.tag = 0,
            ze && c && ia(t),
            vt(null, t, a, i),
            t = t.child),
            t;
        case 16:
            s = t.elementType;
            e: {
                switch (xs(e, t),
                e = t.pendingProps,
                a = s._init,
                s = a(s._payload),
                t.type = s,
                a = t.tag = hy(s),
                e = Kt(s, e),
                a) {
                case 0:
                    t = Ta(null, t, s, e, i);
                    break e;
                case 1:
                    t = _d(null, t, s, e, i);
                    break e;
                case 11:
                    t = bd(null, t, s, e, i);
                    break e;
                case 14:
                    t = xd(null, t, s, Kt(s.type, e), i);
                    break e
                }
                throw Error(o(306, s, ""))
            }
            return t;
        case 0:
            return s = t.type,
            a = t.pendingProps,
            a = t.elementType === s ? a : Kt(s, a),
            Ta(e, t, s, a, i);
        case 1:
            return s = t.type,
            a = t.pendingProps,
            a = t.elementType === s ? a : Kt(s, a),
            _d(e, t, s, a, i);
        case 3:
            e: {
                if (kd(t),
                e === null)
                    throw Error(o(387));
                s = t.pendingProps,
                c = t.memoizedState,
                a = c.element,
                $f(e, t),
                ds(t, s, null, i);
                var h = t.memoizedState;
                if (s = h.element,
                c.isDehydrated)
                    if (c = {
                        element: s,
                        isDehydrated: !1,
                        cache: h.cache,
                        pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
                        transitions: h.transitions
                    },
                    t.updateQueue.baseState = c,
                    t.memoizedState = c,
                    t.flags & 256) {
                        a = si(Error(o(423)), t),
                        t = Rd(e, t, s, i, a);
                        break e
                    } else if (s !== a) {
                        a = si(Error(o(424)), t),
                        t = Rd(e, t, s, i, a);
                        break e
                    } else
                        for (Ot = Vn(t.stateNode.containerInfo.firstChild),
                        Rt = t,
                        ze = !0,
                        qt = null,
                        i = zf(t, null, s, i),
                        t.child = i; i; )
                            i.flags = i.flags & -3 | 4096,
                            i = i.sibling;
                else {
                    if (ti(),
                    s === a) {
                        t = kn(e, t, i);
                        break e
                    }
                    vt(e, t, s, i)
                }
                t = t.child
            }
            return t;
        case 5:
            return Hf(t),
            e === null && la(t),
            s = t.type,
            a = t.pendingProps,
            c = e !== null ? e.memoizedProps : null,
            h = a.children,
            Jl(s, a) ? h = null : c !== null && Jl(s, c) && (t.flags |= 32),
            Ed(e, t),
            vt(e, t, h, i),
            t.child;
        case 6:
            return e === null && la(t),
            null;
        case 13:
            return Od(e, t, i);
        case 4:
            return ma(t, t.stateNode.containerInfo),
            s = t.pendingProps,
            e === null ? t.child = ni(t, null, s, i) : vt(e, t, s, i),
            t.child;
        case 11:
            return s = t.type,
            a = t.pendingProps,
            a = t.elementType === s ? a : Kt(s, a),
            bd(e, t, s, a, i);
        case 7:
            return vt(e, t, t.pendingProps, i),
            t.child;
        case 8:
            return vt(e, t, t.pendingProps.children, i),
            t.child;
        case 12:
            return vt(e, t, t.pendingProps.children, i),
            t.child;
        case 10:
            e: {
                if (s = t.type._context,
                a = t.pendingProps,
                c = t.memoizedProps,
                h = a.value,
                Ie(us, s._currentValue),
                s._currentValue = h,
                c !== null)
                    if (Qt(c.value, h)) {
                        if (c.children === a.children && !yt.current) {
                            t = kn(e, t, i);
                            break e
                        }
                    } else
                        for (c = t.child,
                        c !== null && (c.return = t); c !== null; ) {
                            var S = c.dependencies;
                            if (S !== null) {
                                h = c.child;
                                for (var R = S.firstContext; R !== null; ) {
                                    if (R.context === s) {
                                        if (c.tag === 1) {
                                            R = _n(-1, i & -i),
                                            R.tag = 2;
                                            var F = c.updateQueue;
                                            if (F !== null) {
                                                F = F.shared;
                                                var Q = F.pending;
                                                Q === null ? R.next = R : (R.next = Q.next,
                                                Q.next = R),
                                                F.pending = R
                                            }
                                        }
                                        c.lanes |= i,
                                        R = c.alternate,
                                        R !== null && (R.lanes |= i),
                                        da(c.return, i, t),
                                        S.lanes |= i;
                                        break
                                    }
                                    R = R.next
                                }
                            } else if (c.tag === 10)
                                h = c.type === t.type ? null : c.child;
                            else if (c.tag === 18) {
                                if (h = c.return,
                                h === null)
                                    throw Error(o(341));
                                h.lanes |= i,
                                S = h.alternate,
                                S !== null && (S.lanes |= i),
                                da(h, i, t),
                                h = c.sibling
                            } else
                                h = c.child;
                            if (h !== null)
                                h.return = c;
                            else
                                for (h = c; h !== null; ) {
                                    if (h === t) {
                                        h = null;
                                        break
                                    }
                                    if (c = h.sibling,
                                    c !== null) {
                                        c.return = h.return,
                                        h = c;
                                        break
                                    }
                                    h = h.return
                                }
                            c = h
                        }
                vt(e, t, a.children, i),
                t = t.child
            }
            return t;
        case 9:
            return a = t.type,
            s = t.pendingProps.children,
            ii(t, i),
            a = Dt(a),
            s = s(a),
            t.flags |= 1,
            vt(e, t, s, i),
            t.child;
        case 14:
            return s = t.type,
            a = Kt(s, t.pendingProps),
            a = Kt(s.type, a),
            xd(e, t, s, a, i);
        case 15:
            return Sd(e, t, t.type, t.pendingProps, i);
        case 17:
            return s = t.type,
            a = t.pendingProps,
            a = t.elementType === s ? a : Kt(s, a),
            xs(e, t),
            t.tag = 1,
            wt(s) ? (e = !0,
            rs(t)) : e = !1,
            ii(t, i),
            pd(t, s, a),
            Oa(t, s, a, i),
            Ma(null, t, s, !0, e, i);
        case 19:
            return Pd(e, t, i);
        case 22:
            return Cd(e, t, i)
        }
        throw Error(o(156, t.tag))
    }
    ;
    function ep(e, t) {
        return Mc(e, t)
    }
    function py(e, t, i, s) {
        this.tag = e,
        this.key = i,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = s,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function jt(e, t, i, s) {
        return new py(e,t,i,s)
    }
    function Ja(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function hy(e) {
        if (typeof e == "function")
            return Ja(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === V)
                return 11;
            if (e === L)
                return 14
        }
        return 2
    }
    function nr(e, t) {
        var i = e.alternate;
        return i === null ? (i = jt(e.tag, t, e.key, e.mode),
        i.elementType = e.elementType,
        i.type = e.type,
        i.stateNode = e.stateNode,
        i.alternate = e,
        e.alternate = i) : (i.pendingProps = t,
        i.type = e.type,
        i.flags = 0,
        i.subtreeFlags = 0,
        i.deletions = null),
        i.flags = e.flags & 14680064,
        i.childLanes = e.childLanes,
        i.lanes = e.lanes,
        i.child = e.child,
        i.memoizedProps = e.memoizedProps,
        i.memoizedState = e.memoizedState,
        i.updateQueue = e.updateQueue,
        t = e.dependencies,
        i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        i.sibling = e.sibling,
        i.index = e.index,
        i.ref = e.ref,
        i
    }
    function Ms(e, t, i, s, a, c) {
        var h = 2;
        if (s = e,
        typeof e == "function")
            Ja(e) && (h = 1);
        else if (typeof e == "string")
            h = 5;
        else
            e: switch (e) {
            case J:
                return kr(i.children, a, c, t);
            case re:
                h = 8,
                a |= 8;
                break;
            case he:
                return e = jt(12, i, t, a | 2),
                e.elementType = he,
                e.lanes = c,
                e;
            case ne:
                return e = jt(13, i, t, a),
                e.elementType = ne,
                e.lanes = c,
                e;
            case T:
                return e = jt(19, i, t, a),
                e.elementType = T,
                e.lanes = c,
                e;
            case N:
                return Ls(i, a, c, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case Y:
                        h = 10;
                        break e;
                    case K:
                        h = 9;
                        break e;
                    case V:
                        h = 11;
                        break e;
                    case L:
                        h = 14;
                        break e;
                    case G:
                        h = 16,
                        s = null;
                        break e
                    }
                throw Error(o(130, e == null ? e : typeof e, ""))
            }
        return t = jt(h, i, t, a),
        t.elementType = e,
        t.type = s,
        t.lanes = c,
        t
    }
    function kr(e, t, i, s) {
        return e = jt(7, e, s, t),
        e.lanes = i,
        e
    }
    function Ls(e, t, i, s) {
        return e = jt(22, e, s, t),
        e.elementType = N,
        e.lanes = i,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function Za(e, t, i) {
        return e = jt(6, e, null, t),
        e.lanes = i,
        e
    }
    function eu(e, t, i) {
        return t = jt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = i,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function my(e, t, i, s, a) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Rl(0),
        this.expirationTimes = Rl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Rl(0),
        this.identifierPrefix = s,
        this.onRecoverableError = a,
        this.mutableSourceEagerHydrationData = null
    }
    function tu(e, t, i, s, a, c, h, S, R) {
        return e = new my(e,t,i,S,R),
        t === 1 ? (t = 1,
        c === !0 && (t |= 8)) : t = 0,
        c = jt(3, null, null, t),
        e.current = c,
        c.stateNode = e,
        c.memoizedState = {
            element: s,
            isDehydrated: i,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        ha(c),
        e
    }
    function vy(e, t, i) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: te,
            key: s == null ? null : "" + s,
            children: e,
            containerInfo: t,
            implementation: i
        }
    }
    function tp(e) {
        if (!e)
            return qn;
        e = e._reactInternals;
        e: {
            if (hr(e) !== e || e.tag !== 1)
                throw Error(o(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (wt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(o(171))
        }
        if (e.tag === 1) {
            var i = e.type;
            if (wt(i))
                return Nf(e, i, t)
        }
        return t
    }
    function np(e, t, i, s, a, c, h, S, R) {
        return e = tu(i, s, !0, e, a, c, h, S, R),
        e.context = tp(null),
        i = e.current,
        s = gt(),
        a = er(i),
        c = _n(s, a),
        c.callback = t ?? null,
        Yn(i, c, a),
        e.current.lanes = a,
        ki(e, a, s),
        St(e, s),
        e
    }
    function Is(e, t, i, s) {
        var a = t.current
          , c = gt()
          , h = er(a);
        return i = tp(i),
        t.context === null ? t.context = i : t.pendingContext = i,
        t = _n(c, h),
        t.payload = {
            element: e
        },
        s = s === void 0 ? null : s,
        s !== null && (t.callback = s),
        e = Yn(a, t, h),
        e !== null && (Xt(e, a, h, c),
        fs(e, a, h)),
        h
    }
    function Ds(e) {
        return e = e.current,
        e.child ? (e.child.tag === 5,
        e.child.stateNode) : null
    }
    function rp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }
    function nu(e, t) {
        rp(e, t),
        (e = e.alternate) && rp(e, t)
    }
    function gy() {
        return null
    }
    var ip = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function ru(e) {
        this._internalRoot = e
    }
    Fs.prototype.render = ru.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        Is(e, t, null, null)
    }
    ,
    Fs.prototype.unmount = ru.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Cr(function() {
                Is(null, e, null, null)
            }),
            t[bn] = null
        }
    }
    ;
    function Fs(e) {
        this._internalRoot = e
    }
    Fs.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Bc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < Un.length && t !== 0 && t < Un[i].priority; i++)
                ;
            Un.splice(i, 0, e),
            i === 0 && Wc(e)
        }
    }
    ;
    function iu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function As(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function op() {}
    function yy(e, t, i, s, a) {
        if (a) {
            if (typeof s == "function") {
                var c = s;
                s = function() {
                    var F = Ds(h);
                    c.call(F)
                }
            }
            var h = np(t, s, e, 0, null, !1, !1, "", op);
            return e._reactRootContainer = h,
            e[bn] = h.current,
            Bi(e.nodeType === 8 ? e.parentNode : e),
            Cr(),
            h
        }
        for (; a = e.lastChild; )
            e.removeChild(a);
        if (typeof s == "function") {
            var S = s;
            s = function() {
                var F = Ds(R);
                S.call(F)
            }
        }
        var R = tu(e, 0, !1, null, null, !1, !1, "", op);
        return e._reactRootContainer = R,
        e[bn] = R.current,
        Bi(e.nodeType === 8 ? e.parentNode : e),
        Cr(function() {
            Is(t, R, i, s)
        }),
        R
    }
    function js(e, t, i, s, a) {
        var c = i._reactRootContainer;
        if (c) {
            var h = c;
            if (typeof a == "function") {
                var S = a;
                a = function() {
                    var R = Ds(h);
                    S.call(R)
                }
            }
            Is(t, h, e, a)
        } else
            h = yy(i, t, e, a, s);
        return Ds(h)
    }
    jc = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var i = _i(t.pendingLanes);
                i !== 0 && (Ol(t, i | 1),
                St(t, qe()),
                (Re & 6) === 0 && (ui = qe() + 500,
                Kn()))
            }
            break;
        case 13:
            Cr(function() {
                var s = En(e, 1);
                if (s !== null) {
                    var a = gt();
                    Xt(s, e, 1, a)
                }
            }),
            nu(e, 1)
        }
    }
    ,
    Nl = function(e) {
        if (e.tag === 13) {
            var t = En(e, 134217728);
            if (t !== null) {
                var i = gt();
                Xt(t, e, 134217728, i)
            }
            nu(e, 134217728)
        }
    }
    ,
    zc = function(e) {
        if (e.tag === 13) {
            var t = er(e)
              , i = En(e, t);
            if (i !== null) {
                var s = gt();
                Xt(i, e, t, s)
            }
            nu(e, t)
        }
    }
    ,
    Bc = function() {
        return Te
    }
    ,
    $c = function(e, t) {
        var i = Te;
        try {
            return Te = e,
            t()
        } finally {
            Te = i
        }
    }
    ,
    $r = function(e, t, i) {
        switch (t) {
        case "input":
            if (_e(e, i),
            t = i.name,
            i.type === "radio" && t != null) {
                for (i = e; i.parentNode; )
                    i = i.parentNode;
                for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < i.length; t++) {
                    var s = i[t];
                    if (s !== e && s.form === e.form) {
                        var a = ts(s);
                        if (!a)
                            throw Error(o(90));
                        we(s),
                        _e(s, a)
                    }
                }
            }
            break;
        case "textarea":
            fe(e, i);
            break;
        case "select":
            t = i.value,
            t != null && ot(e, !!i.multiple, t, !1)
        }
    }
    ,
    _c = Ga,
    kc = Cr;
    var wy = {
        usingClientEntryPoint: !1,
        Events: [Wi, Yr, ts, Cc, Ec, Ga]
    }
      , ro = {
        findFiberByHostInstance: mr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , by = {
        bundleType: ro.bundleType,
        version: ro.version,
        rendererPackageName: ro.rendererPackageName,
        rendererConfig: ro.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: W.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Pc(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ro.findFiberByHostInstance || gy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!zs.isDisabled && zs.supportsFiber)
            try {
                Fo = zs.inject(by),
                on = zs
            } catch {}
    }
    return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy,
    Ct.createPortal = function(e, t) {
        var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!iu(t))
            throw Error(o(200));
        return vy(e, t, null, i)
    }
    ,
    Ct.createRoot = function(e, t) {
        if (!iu(e))
            throw Error(o(299));
        var i = !1
          , s = ""
          , a = ip;
        return t != null && (t.unstable_strictMode === !0 && (i = !0),
        t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        t = tu(e, 1, !1, null, null, i, !1, s, a),
        e[bn] = t.current,
        Bi(e.nodeType === 8 ? e.parentNode : e),
        new ru(t)
    }
    ,
    Ct.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = Pc(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    Ct.flushSync = function(e) {
        return Cr(e)
    }
    ,
    Ct.hydrate = function(e, t, i) {
        if (!As(t))
            throw Error(o(200));
        return js(null, e, t, !0, i)
    }
    ,
    Ct.hydrateRoot = function(e, t, i) {
        if (!iu(e))
            throw Error(o(405));
        var s = i != null && i.hydratedSources || null
          , a = !1
          , c = ""
          , h = ip;
        if (i != null && (i.unstable_strictMode === !0 && (a = !0),
        i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
        i.onRecoverableError !== void 0 && (h = i.onRecoverableError)),
        t = np(t, null, e, 1, i ?? null, a, !1, c, h),
        e[bn] = t.current,
        Bi(e),
        s)
            for (e = 0; e < s.length; e++)
                i = s[e],
                a = i._getVersion,
                a = a(i._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, a] : t.mutableSourceEagerHydrationData.push(i, a);
        return new Fs(t)
    }
    ,
    Ct.render = function(e, t, i) {
        if (!As(t))
            throw Error(o(200));
        return js(null, e, t, !1, i)
    }
    ,
    Ct.unmountComponentAtNode = function(e) {
        if (!As(e))
            throw Error(o(40));
        return e._reactRootContainer ? (Cr(function() {
            js(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[bn] = null
            })
        }),
        !0) : !1
    }
    ,
    Ct.unstable_batchedUpdates = Ga,
    Ct.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
        if (!As(i))
            throw Error(o(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(o(38));
        return js(e, t, i, !1, s)
    }
    ,
    Ct.version = "18.3.1-next-f1338f8080-20240426",
    Ct
}
var kp;
function oc() {
    if (kp)
        return hu.exports;
    kp = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    hu.exports = iw(),
    hu.exports
}
var sc = oc();
const gC = vo(sc);
function Rp(n, r, o) {
    let {reference: l, floating: u} = n;
    const f = lr(r)
      , d = ic(r)
      , p = rc(d)
      , v = Ln(r)
      , m = f === "y"
      , g = l.x + l.width / 2 - u.width / 2
      , y = l.y + l.height / 2 - u.height / 2
      , w = l[p] / 2 - u[p] / 2;
    let b;
    switch (v) {
    case "top":
        b = {
            x: g,
            y: l.y - u.height
        };
        break;
    case "bottom":
        b = {
            x: g,
            y: l.y + l.height
        };
        break;
    case "right":
        b = {
            x: l.x + l.width,
            y
        };
        break;
    case "left":
        b = {
            x: l.x - u.width,
            y
        };
        break;
    default:
        b = {
            x: l.x,
            y: l.y
        }
    }
    switch (vn(r)) {
    case "start":
        b[d] -= w * (o && m ? -1 : 1);
        break;
    case "end":
        b[d] += w * (o && m ? -1 : 1);
        break
    }
    return b
}
const ow = async (n, r, o) => {
    const {placement: l="bottom", strategy: u="absolute", middleware: f=[], platform: d} = o
      , p = f.filter(Boolean)
      , v = await (d.isRTL == null ? void 0 : d.isRTL(r));
    let m = await d.getElementRects({
        reference: n,
        floating: r,
        strategy: u
    })
      , {x: g, y} = Rp(m, l, v)
      , w = l
      , b = {}
      , E = 0;
    for (let x = 0; x < p.length; x++) {
        const {name: M, fn: A} = p[x]
          , {x: z, y: B, data: W, reset: Z} = await A({
            x: g,
            y,
            initialPlacement: l,
            placement: w,
            strategy: u,
            middlewareData: b,
            rects: m,
            platform: d,
            elements: {
                reference: n,
                floating: r
            }
        });
        g = z ?? g,
        y = B ?? y,
        b = {
            ...b,
            [M]: {
                ...b[M],
                ...W
            }
        },
        Z && E <= 50 && (E++,
        typeof Z == "object" && (Z.placement && (w = Z.placement),
        Z.rects && (m = Z.rects === !0 ? await d.getElementRects({
            reference: n,
            floating: r,
            strategy: u
        }) : Z.rects),
        {x: g, y} = Rp(m, w, v)),
        x = -1)
    }
    return {
        x: g,
        y,
        placement: w,
        strategy: u,
        middlewareData: b
    }
}
;
async function lc(n, r) {
    var o;
    r === void 0 && (r = {});
    const {x: l, y: u, platform: f, rects: d, elements: p, strategy: v} = n
      , {boundary: m="clippingAncestors", rootBoundary: g="viewport", elementContext: y="floating", altBoundary: w=!1, padding: b=0} = wi(r, n)
      , E = Xh(b)
      , M = p[w ? y === "floating" ? "reference" : "floating" : y]
      , A = rl(await f.getClippingRect({
        element: (o = await (f.isElement == null ? void 0 : f.isElement(M))) == null || o ? M : M.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
        boundary: m,
        rootBoundary: g,
        strategy: v
    }))
      , z = y === "floating" ? {
        x: l,
        y: u,
        width: d.floating.width,
        height: d.floating.height
    } : d.reference
      , B = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating))
      , W = await (f.isElement == null ? void 0 : f.isElement(B)) ? await (f.getScale == null ? void 0 : f.getScale(B)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , Z = rl(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: p,
        rect: z,
        offsetParent: B,
        strategy: v
    }) : z);
    return {
        top: (A.top - Z.top + E.top) / W.y,
        bottom: (Z.bottom - A.bottom + E.bottom) / W.y,
        left: (A.left - Z.left + E.left) / W.x,
        right: (Z.right - A.right + E.right) / W.x
    }
}
const sw = n => ({
    name: "arrow",
    options: n,
    async fn(r) {
        const {x: o, y: l, placement: u, rects: f, platform: d, elements: p, middlewareData: v} = r
          , {element: m, padding: g=0} = wi(n, r) || {};
        if (m == null)
            return {};
        const y = Xh(g)
          , w = {
            x: o,
            y: l
        }
          , b = ic(u)
          , E = rc(b)
          , x = await d.getDimensions(m)
          , M = b === "y"
          , A = M ? "top" : "left"
          , z = M ? "bottom" : "right"
          , B = M ? "clientHeight" : "clientWidth"
          , W = f.reference[E] + f.reference[b] - w[b] - f.floating[E]
          , Z = w[b] - f.reference[b]
          , te = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m));
        let J = te ? te[B] : 0;
        (!J || !await (d.isElement == null ? void 0 : d.isElement(te))) && (J = p.floating[B] || f.floating[E]);
        const re = W / 2 - Z / 2
          , he = J / 2 - x[E] / 2 - 1
          , Y = mi(y[A], he)
          , K = mi(y[z], he)
          , V = Y
          , ne = J - x[E] - K
          , T = J / 2 - x[E] / 2 + re
          , L = Du(V, T, ne)
          , G = !v.arrow && vn(u) != null && T !== L && f.reference[E] / 2 - (T < V ? Y : K) - x[E] / 2 < 0
          , N = G ? T < V ? T - V : T - ne : 0;
        return {
            [b]: w[b] + N,
            data: {
                [b]: L,
                centerOffset: T - L - N,
                ...G && {
                    alignmentOffset: N
                }
            },
            reset: G
        }
    }
});
function lw(n, r, o) {
    return (n ? [...o.filter(u => vn(u) === n), ...o.filter(u => vn(u) !== n)] : o.filter(u => Ln(u) === u)).filter(u => n ? vn(u) === n || (r ? tl(u) !== u : !1) : !0)
}
const aw = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "autoPlacement",
        options: n,
        async fn(r) {
            var o, l, u;
            const {rects: f, middlewareData: d, placement: p, platform: v, elements: m} = r
              , {crossAxis: g=!1, alignment: y, allowedPlacements: w=hp, autoAlignment: b=!0, ...E} = wi(n, r)
              , x = y !== void 0 || w === hp ? lw(y || null, b, w) : w
              , M = await lc(r, E)
              , A = ((o = d.autoPlacement) == null ? void 0 : o.index) || 0
              , z = x[A];
            if (z == null)
                return {};
            const B = Yh(z, f, await (v.isRTL == null ? void 0 : v.isRTL(m.floating)));
            if (p !== z)
                return {
                    reset: {
                        placement: x[0]
                    }
                };
            const W = [M[Ln(z)], M[B[0]], M[B[1]]]
              , Z = [...((l = d.autoPlacement) == null ? void 0 : l.overflows) || [], {
                placement: z,
                overflows: W
            }]
              , te = x[A + 1];
            if (te)
                return {
                    data: {
                        index: A + 1,
                        overflows: Z
                    },
                    reset: {
                        placement: te
                    }
                };
            const J = Z.map(Y => {
                const K = vn(Y.placement);
                return [Y.placement, K && g ? Y.overflows.slice(0, 2).reduce( (V, ne) => V + ne, 0) : Y.overflows[0], Y.overflows]
            }
            ).sort( (Y, K) => Y[1] - K[1])
              , he = ((u = J.filter(Y => Y[2].slice(0, vn(Y[0]) ? 2 : 3).every(K => K <= 0))[0]) == null ? void 0 : u[0]) || J[0][0];
            return he !== p ? {
                data: {
                    index: A + 1,
                    overflows: Z
                },
                reset: {
                    placement: he
                }
            } : {}
        }
    }
}
  , uw = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "flip",
        options: n,
        async fn(r) {
            var o, l;
            const {placement: u, middlewareData: f, rects: d, initialPlacement: p, platform: v, elements: m} = r
              , {mainAxis: g=!0, crossAxis: y=!0, fallbackPlacements: w, fallbackStrategy: b="bestFit", fallbackAxisSideDirection: E="none", flipAlignment: x=!0, ...M} = wi(n, r);
            if ((o = f.arrow) != null && o.alignmentOffset)
                return {};
            const A = Ln(u)
              , z = lr(p)
              , B = Ln(p) === p
              , W = await (v.isRTL == null ? void 0 : v.isRTL(m.floating))
              , Z = w || (B || !x ? [nl(p)] : v0(p))
              , te = E !== "none";
            !w && te && Z.push(...b0(p, x, E, W));
            const J = [p, ...Z]
              , re = await lc(r, M)
              , he = [];
            let Y = ((l = f.flip) == null ? void 0 : l.overflows) || [];
            if (g && he.push(re[A]),
            y) {
                const T = Yh(u, d, W);
                he.push(re[T[0]], re[T[1]])
            }
            if (Y = [...Y, {
                placement: u,
                overflows: he
            }],
            !he.every(T => T <= 0)) {
                var K, V;
                const T = (((K = f.flip) == null ? void 0 : K.index) || 0) + 1
                  , L = J[T];
                if (L && (!(y === "alignment" ? z !== lr(L) : !1) || Y.every(C => lr(C.placement) === z ? C.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: T,
                            overflows: Y
                        },
                        reset: {
                            placement: L
                        }
                    };
                let G = (V = Y.filter(N => N.overflows[0] <= 0).sort( (N, C) => N.overflows[1] - C.overflows[1])[0]) == null ? void 0 : V.placement;
                if (!G)
                    switch (b) {
                    case "bestFit":
                        {
                            var ne;
                            const N = (ne = Y.filter(C => {
                                if (te) {
                                    const U = lr(C.placement);
                                    return U === z || U === "y"
                                }
                                return !0
                            }
                            ).map(C => [C.placement, C.overflows.filter(U => U > 0).reduce( (U, j) => U + j, 0)]).sort( (C, U) => C[1] - U[1])[0]) == null ? void 0 : ne[0];
                            N && (G = N);
                            break
                        }
                    case "initialPlacement":
                        G = p;
                        break
                    }
                if (u !== G)
                    return {
                        reset: {
                            placement: G
                        }
                    }
            }
            return {}
        }
    }
}
  , cw = new Set(["left", "top"]);
async function fw(n, r) {
    const {placement: o, platform: l, elements: u} = n
      , f = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
      , d = Ln(o)
      , p = vn(o)
      , v = lr(o) === "y"
      , m = cw.has(d) ? -1 : 1
      , g = f && v ? -1 : 1
      , y = wi(r, n);
    let {mainAxis: w, crossAxis: b, alignmentAxis: E} = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis
    };
    return p && typeof E == "number" && (b = p === "end" ? E * -1 : E),
    v ? {
        x: b * g,
        y: w * m
    } : {
        x: w * m,
        y: b * g
    }
}
const dw = function(n) {
    return n === void 0 && (n = 0),
    {
        name: "offset",
        options: n,
        async fn(r) {
            var o, l;
            const {x: u, y: f, placement: d, middlewareData: p} = r
              , v = await fw(r, n);
            return d === ((o = p.offset) == null ? void 0 : o.placement) && (l = p.arrow) != null && l.alignmentOffset ? {} : {
                x: u + v.x,
                y: f + v.y,
                data: {
                    ...v,
                    placement: d
                }
            }
        }
    }
}
  , pw = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "shift",
        options: n,
        async fn(r) {
            const {x: o, y: l, placement: u} = r
              , {mainAxis: f=!0, crossAxis: d=!1, limiter: p={
                fn: M => {
                    let {x: A, y: z} = M;
                    return {
                        x: A,
                        y: z
                    }
                }
            }, ...v} = wi(n, r)
              , m = {
                x: o,
                y: l
            }
              , g = await lc(r, v)
              , y = lr(Ln(u))
              , w = Gh(y);
            let b = m[w]
              , E = m[y];
            if (f) {
                const M = w === "y" ? "top" : "left"
                  , A = w === "y" ? "bottom" : "right"
                  , z = b + g[M]
                  , B = b - g[A];
                b = Du(z, b, B)
            }
            if (d) {
                const M = y === "y" ? "top" : "left"
                  , A = y === "y" ? "bottom" : "right"
                  , z = E + g[M]
                  , B = E - g[A];
                E = Du(z, E, B)
            }
            const x = p.fn({
                ...r,
                [w]: b,
                [y]: E
            });
            return {
                ...x,
                data: {
                    x: x.x - o,
                    y: x.y - l,
                    enabled: {
                        [w]: f,
                        [y]: d
                    }
                }
            }
        }
    }
};
function pm(n) {
    const r = Tt(n);
    let o = parseFloat(r.width) || 0
      , l = parseFloat(r.height) || 0;
    const u = Xe(n)
      , f = u ? n.offsetWidth : o
      , d = u ? n.offsetHeight : l
      , p = el(o) !== f || el(l) !== d;
    return p && (o = f,
    l = d),
    {
        width: o,
        height: l,
        $: p
    }
}
function ac(n) {
    return Ge(n) ? n : n.contextElement
}
function pi(n) {
    const r = ac(n);
    if (!Xe(r))
        return mn(1);
    const o = r.getBoundingClientRect()
      , {width: l, height: u, $: f} = pm(r);
    let d = (f ? el(o.width) : o.width) / l
      , p = (f ? el(o.height) : o.height) / u;
    return (!d || !Number.isFinite(d)) && (d = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    {
        x: d,
        y: p
    }
}
const hw = mn(0);
function hm(n) {
    const r = Pt(n);
    return !dl() || !r.visualViewport ? hw : {
        x: r.visualViewport.offsetLeft,
        y: r.visualViewport.offsetTop
    }
}
function mw(n, r, o) {
    return r === void 0 && (r = !1),
    !o || r && o !== Pt(n) ? !1 : r
}
function Dr(n, r, o, l) {
    r === void 0 && (r = !1),
    o === void 0 && (o = !1);
    const u = n.getBoundingClientRect()
      , f = ac(n);
    let d = mn(1);
    r && (l ? Ge(l) && (d = pi(l)) : d = pi(n));
    const p = mw(f, o, l) ? hm(f) : mn(0);
    let v = (u.left + p.x) / d.x
      , m = (u.top + p.y) / d.y
      , g = u.width / d.x
      , y = u.height / d.y;
    if (f) {
        const w = Pt(f)
          , b = l && Ge(l) ? Pt(l) : l;
        let E = w
          , x = Iu(E);
        for (; x && l && b !== E; ) {
            const M = pi(x)
              , A = x.getBoundingClientRect()
              , z = Tt(x)
              , B = A.left + (x.clientLeft + parseFloat(z.paddingLeft)) * M.x
              , W = A.top + (x.clientTop + parseFloat(z.paddingTop)) * M.y;
            v *= M.x,
            m *= M.y,
            g *= M.x,
            y *= M.y,
            v += B,
            m += W,
            E = Pt(x),
            x = Iu(E)
        }
    }
    return rl({
        width: g,
        height: y,
        x: v,
        y: m
    })
}
function ml(n, r) {
    const o = pl(n).scrollLeft;
    return r ? r.left + o : Dr(gn(n)).left + o
}
function mm(n, r) {
    const o = n.getBoundingClientRect()
      , l = o.left + r.scrollLeft - ml(n, o)
      , u = o.top + r.scrollTop;
    return {
        x: l,
        y: u
    }
}
function vw(n) {
    let {elements: r, rect: o, offsetParent: l, strategy: u} = n;
    const f = u === "fixed"
      , d = gn(l)
      , p = r ? fl(r.floating) : !1;
    if (l === d || p && f)
        return o;
    let v = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , m = mn(1);
    const g = mn(0)
      , y = Xe(l);
    if ((y || !y && !f) && ((fr(l) !== "body" || wo(d)) && (v = pl(l)),
    Xe(l))) {
        const b = Dr(l);
        m = pi(l),
        g.x = b.x + l.clientLeft,
        g.y = b.y + l.clientTop
    }
    const w = d && !y && !f ? mm(d, v) : mn(0);
    return {
        width: o.width * m.x,
        height: o.height * m.y,
        x: o.x * m.x - v.scrollLeft * m.x + g.x + w.x,
        y: o.y * m.y - v.scrollTop * m.y + g.y + w.y
    }
}
function gw(n) {
    return Array.from(n.getClientRects())
}
function yw(n) {
    const r = gn(n)
      , o = pl(n)
      , l = n.ownerDocument.body
      , u = Tr(r.scrollWidth, r.clientWidth, l.scrollWidth, l.clientWidth)
      , f = Tr(r.scrollHeight, r.clientHeight, l.scrollHeight, l.clientHeight);
    let d = -o.scrollLeft + ml(n);
    const p = -o.scrollTop;
    return Tt(l).direction === "rtl" && (d += Tr(r.clientWidth, l.clientWidth) - u),
    {
        width: u,
        height: f,
        x: d,
        y: p
    }
}
const Op = 25;
function ww(n, r) {
    const o = Pt(n)
      , l = gn(n)
      , u = o.visualViewport;
    let f = l.clientWidth
      , d = l.clientHeight
      , p = 0
      , v = 0;
    if (u) {
        f = u.width,
        d = u.height;
        const g = dl();
        (!g || g && r === "fixed") && (p = u.offsetLeft,
        v = u.offsetTop)
    }
    const m = ml(l);
    if (m <= 0) {
        const g = l.ownerDocument
          , y = g.body
          , w = getComputedStyle(y)
          , b = g.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0
          , E = Math.abs(l.clientWidth - y.clientWidth - b);
        E <= Op && (f -= E)
    } else
        m <= Op && (f += m);
    return {
        width: f,
        height: d,
        x: p,
        y: v
    }
}
const bw = new Set(["absolute", "fixed"]);
function xw(n, r) {
    const o = Dr(n, !0, r === "fixed")
      , l = o.top + n.clientTop
      , u = o.left + n.clientLeft
      , f = Xe(n) ? pi(n) : mn(1)
      , d = n.clientWidth * f.x
      , p = n.clientHeight * f.y
      , v = u * f.x
      , m = l * f.y;
    return {
        width: d,
        height: p,
        x: v,
        y: m
    }
}
function Np(n, r, o) {
    let l;
    if (r === "viewport")
        l = ww(n, o);
    else if (r === "document")
        l = yw(gn(n));
    else if (Ge(r))
        l = xw(r, o);
    else {
        const u = hm(n);
        l = {
            x: r.x - u.x,
            y: r.y - u.y,
            width: r.width,
            height: r.height
        }
    }
    return rl(l)
}
function vm(n, r) {
    const o = Mn(n);
    return o === r || !Ge(o) || Pn(o) ? !1 : Tt(o).position === "fixed" || vm(o, r)
}
function Sw(n, r) {
    const o = r.get(n);
    if (o)
        return o;
    let l = ur(n, [], !1).filter(p => Ge(p) && fr(p) !== "body")
      , u = null;
    const f = Tt(n).position === "fixed";
    let d = f ? Mn(n) : n;
    for (; Ge(d) && !Pn(d); ) {
        const p = Tt(d)
          , v = nc(d);
        !v && p.position === "fixed" && (u = null),
        (f ? !v && !u : !v && p.position === "static" && !!u && bw.has(u.position) || wo(d) && !v && vm(n, d)) ? l = l.filter(g => g !== d) : u = p,
        d = Mn(d)
    }
    return r.set(n, l),
    l
}
function Cw(n) {
    let {element: r, boundary: o, rootBoundary: l, strategy: u} = n;
    const d = [...o === "clippingAncestors" ? fl(r) ? [] : Sw(r, this._c) : [].concat(o), l]
      , p = d[0]
      , v = d.reduce( (m, g) => {
        const y = Np(r, g, u);
        return m.top = Tr(y.top, m.top),
        m.right = mi(y.right, m.right),
        m.bottom = mi(y.bottom, m.bottom),
        m.left = Tr(y.left, m.left),
        m
    }
    , Np(r, p, u));
    return {
        width: v.right - v.left,
        height: v.bottom - v.top,
        x: v.left,
        y: v.top
    }
}
function Ew(n) {
    const {width: r, height: o} = pm(n);
    return {
        width: r,
        height: o
    }
}
function _w(n, r, o) {
    const l = Xe(r)
      , u = gn(r)
      , f = o === "fixed"
      , d = Dr(n, !0, f, r);
    let p = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const v = mn(0);
    function m() {
        v.x = ml(u)
    }
    if (l || !l && !f)
        if ((fr(r) !== "body" || wo(u)) && (p = pl(r)),
        l) {
            const b = Dr(r, !0, f, r);
            v.x = b.x + r.clientLeft,
            v.y = b.y + r.clientTop
        } else
            u && m();
    f && !l && u && m();
    const g = u && !l && !f ? mm(u, p) : mn(0)
      , y = d.left + p.scrollLeft - v.x - g.x
      , w = d.top + p.scrollTop - v.y - g.y;
    return {
        x: y,
        y: w,
        width: d.width,
        height: d.height
    }
}
function gu(n) {
    return Tt(n).position === "static"
}
function Pp(n, r) {
    if (!Xe(n) || Tt(n).position === "fixed")
        return null;
    if (r)
        return r(n);
    let o = n.offsetParent;
    return gn(n) === o && (o = o.ownerDocument.body),
    o
}
function gm(n, r) {
    const o = Pt(n);
    if (fl(n))
        return o;
    if (!Xe(n)) {
        let u = Mn(n);
        for (; u && !Pn(u); ) {
            if (Ge(u) && !gu(u))
                return u;
            u = Mn(u)
        }
        return o
    }
    let l = Pp(n, r);
    for (; l && o0(l) && gu(l); )
        l = Pp(l, r);
    return l && Pn(l) && gu(l) && !nc(l) ? o : l || c0(n) || o
}
const kw = async function(n) {
    const r = this.getOffsetParent || gm
      , o = this.getDimensions
      , l = await o(n.floating);
    return {
        reference: _w(n.reference, await r(n.floating), n.strategy),
        floating: {
            x: 0,
            y: 0,
            width: l.width,
            height: l.height
        }
    }
};
function Rw(n) {
    return Tt(n).direction === "rtl"
}
const Ow = {
    convertOffsetParentRelativeRectToViewportRelativeRect: vw,
    getDocumentElement: gn,
    getClippingRect: Cw,
    getOffsetParent: gm,
    getElementRects: kw,
    getClientRects: gw,
    getDimensions: Ew,
    getScale: pi,
    isElement: Ge,
    isRTL: Rw
};
function ym(n, r) {
    return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height
}
function Nw(n, r) {
    let o = null, l;
    const u = gn(n);
    function f() {
        var p;
        clearTimeout(l),
        (p = o) == null || p.disconnect(),
        o = null
    }
    function d(p, v) {
        p === void 0 && (p = !1),
        v === void 0 && (v = 1),
        f();
        const m = n.getBoundingClientRect()
          , {left: g, top: y, width: w, height: b} = m;
        if (p || r(),
        !w || !b)
            return;
        const E = di(y)
          , x = di(u.clientWidth - (g + w))
          , M = di(u.clientHeight - (y + b))
          , A = di(g)
          , B = {
            rootMargin: -E + "px " + -x + "px " + -M + "px " + -A + "px",
            threshold: Tr(0, mi(1, v)) || 1
        };
        let W = !0;
        function Z(te) {
            const J = te[0].intersectionRatio;
            if (J !== v) {
                if (!W)
                    return d();
                J ? d(!1, J) : l = setTimeout( () => {
                    d(!1, 1e-7)
                }
                , 1e3)
            }
            J === 1 && !ym(m, n.getBoundingClientRect()) && d(),
            W = !1
        }
        try {
            o = new IntersectionObserver(Z,{
                ...B,
                root: u.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(Z,B)
        }
        o.observe(n)
    }
    return d(!0),
    f
}
function wm(n, r, o, l) {
    l === void 0 && (l = {});
    const {ancestorScroll: u=!0, ancestorResize: f=!0, elementResize: d=typeof ResizeObserver == "function", layoutShift: p=typeof IntersectionObserver == "function", animationFrame: v=!1} = l
      , m = ac(n)
      , g = u || f ? [...m ? ur(m) : [], ...ur(r)] : [];
    g.forEach(A => {
        u && A.addEventListener("scroll", o, {
            passive: !0
        }),
        f && A.addEventListener("resize", o)
    }
    );
    const y = m && p ? Nw(m, o) : null;
    let w = -1
      , b = null;
    d && (b = new ResizeObserver(A => {
        let[z] = A;
        z && z.target === m && b && (b.unobserve(r),
        cancelAnimationFrame(w),
        w = requestAnimationFrame( () => {
            var B;
            (B = b) == null || B.observe(r)
        }
        )),
        o()
    }
    ),
    m && !v && b.observe(m),
    b.observe(r));
    let E, x = v ? Dr(n) : null;
    v && M();
    function M() {
        const A = Dr(n);
        x && !ym(x, A) && o(),
        x = A,
        E = requestAnimationFrame(M)
    }
    return o(),
    () => {
        var A;
        g.forEach(z => {
            u && z.removeEventListener("scroll", o),
            f && z.removeEventListener("resize", o)
        }
        ),
        y?.(),
        (A = b) == null || A.disconnect(),
        b = null,
        v && cancelAnimationFrame(E)
    }
}
const Pw = dw
  , Tw = aw
  , Mw = pw
  , Lw = uw
  , Tp = sw
  , Iw = (n, r, o) => {
    const l = new Map
      , u = {
        platform: Ow,
        ...o
    }
      , f = {
        ...u.platform,
        _c: l
    };
    return ow(n, r, {
        ...u,
        platform: f
    })
}
;
var Dw = typeof document < "u"
  , Fw = function() {}
  , Zs = Dw ? _.useLayoutEffect : Fw;
function ll(n, r) {
    if (n === r)
        return !0;
    if (typeof n != typeof r)
        return !1;
    if (typeof n == "function" && n.toString() === r.toString())
        return !0;
    let o, l, u;
    if (n && r && typeof n == "object") {
        if (Array.isArray(n)) {
            if (o = n.length,
            o !== r.length)
                return !1;
            for (l = o; l-- !== 0; )
                if (!ll(n[l], r[l]))
                    return !1;
            return !0
        }
        if (u = Object.keys(n),
        o = u.length,
        o !== Object.keys(r).length)
            return !1;
        for (l = o; l-- !== 0; )
            if (!{}.hasOwnProperty.call(r, u[l]))
                return !1;
        for (l = o; l-- !== 0; ) {
            const f = u[l];
            if (!(f === "_owner" && n.$$typeof) && !ll(n[f], r[f]))
                return !1
        }
        return !0
    }
    return n !== n && r !== r
}
function bm(n) {
    return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Mp(n, r) {
    const o = bm(n);
    return Math.round(r * o) / o
}
function yu(n) {
    const r = _.useRef(n);
    return Zs( () => {
        r.current = n
    }
    ),
    r
}
function Aw(n) {
    n === void 0 && (n = {});
    const {placement: r="bottom", strategy: o="absolute", middleware: l=[], platform: u, elements: {reference: f, floating: d}={}, transform: p=!0, whileElementsMounted: v, open: m} = n
      , [g,y] = _.useState({
        x: 0,
        y: 0,
        strategy: o,
        placement: r,
        middlewareData: {},
        isPositioned: !1
    })
      , [w,b] = _.useState(l);
    ll(w, l) || b(l);
    const [E,x] = _.useState(null)
      , [M,A] = _.useState(null)
      , z = _.useCallback(C => {
        C !== te.current && (te.current = C,
        x(C))
    }
    , [])
      , B = _.useCallback(C => {
        C !== J.current && (J.current = C,
        A(C))
    }
    , [])
      , W = f || E
      , Z = d || M
      , te = _.useRef(null)
      , J = _.useRef(null)
      , re = _.useRef(g)
      , he = v != null
      , Y = yu(v)
      , K = yu(u)
      , V = yu(m)
      , ne = _.useCallback( () => {
        if (!te.current || !J.current)
            return;
        const C = {
            placement: r,
            strategy: o,
            middleware: w
        };
        K.current && (C.platform = K.current),
        Iw(te.current, J.current, C).then(U => {
            const j = {
                ...U,
                isPositioned: V.current !== !1
            };
            T.current && !ll(re.current, j) && (re.current = j,
            sc.flushSync( () => {
                y(j)
            }
            ))
        }
        )
    }
    , [w, r, o, K, V]);
    Zs( () => {
        m === !1 && re.current.isPositioned && (re.current.isPositioned = !1,
        y(C => ({
            ...C,
            isPositioned: !1
        })))
    }
    , [m]);
    const T = _.useRef(!1);
    Zs( () => (T.current = !0,
    () => {
        T.current = !1
    }
    ), []),
    Zs( () => {
        if (W && (te.current = W),
        Z && (J.current = Z),
        W && Z) {
            if (Y.current)
                return Y.current(W, Z, ne);
            ne()
        }
    }
    , [W, Z, ne, Y, he]);
    const L = _.useMemo( () => ({
        reference: te,
        floating: J,
        setReference: z,
        setFloating: B
    }), [z, B])
      , G = _.useMemo( () => ({
        reference: W,
        floating: Z
    }), [W, Z])
      , N = _.useMemo( () => {
        const C = {
            position: o,
            left: 0,
            top: 0
        };
        if (!G.floating)
            return C;
        const U = Mp(G.floating, g.x)
          , j = Mp(G.floating, g.y);
        return p ? {
            ...C,
            transform: "translate(" + U + "px, " + j + "px)",
            ...bm(G.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: o,
            left: U,
            top: j
        }
    }
    , [o, p, G.floating, g.x, g.y]);
    return _.useMemo( () => ({
        ...g,
        update: ne,
        refs: L,
        elements: G,
        floatingStyles: N
    }), [g, ne, L, G, N])
}
const jw = n => {
    function r(o) {
        return {}.hasOwnProperty.call(o, "current")
    }
    return {
        name: "arrow",
        options: n,
        fn(o) {
            const {element: l, padding: u} = typeof n == "function" ? n(o) : n;
            return l && r(l) ? l.current != null ? Tp({
                element: l.current,
                padding: u
            }).fn(o) : {} : l ? Tp({
                element: l,
                padding: u
            }).fn(o) : {}
        }
    }
}
  , xm = (n, r) => ({
    ...Pw(n),
    options: [n, r]
})
  , zw = (n, r) => ({
    ...Mw(n),
    options: [n, r]
})
  , Bw = (n, r) => ({
    ...Lw(n),
    options: [n, r]
})
  , $w = (n, r) => ({
    ...Tw(n),
    options: [n, r]
})
  , Sm = (n, r) => ({
    ...jw(n),
    options: [n, r]
})
  , Uw = "data-floating-ui-focusable"
  , Lp = "active"
  , Ip = "selected"
  , xo = "ArrowLeft"
  , So = "ArrowRight"
  , Cm = "ArrowUp"
  , vl = "ArrowDown"
  , Ww = {
    ...jh
};
let Dp = !1
  , Hw = 0;
const Fp = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Hw++;
function Vw() {
    const [n,r] = _.useState( () => Dp ? Fp() : void 0);
    return We( () => {
        n == null && r(Fp())
    }
    , []),
    _.useEffect( () => {
        Dp = !0
    }
    , []),
    n
}
const Qw = Ww.useId
  , uc = Qw || Vw
  , Em = _.forwardRef(function(r, o) {
    const {context: {placement: l, elements: {floating: u}, middlewareData: {arrow: f, shift: d}}, width: p=14, height: v=7, tipRadius: m=0, strokeWidth: g=0, staticOffset: y, stroke: w, d: b, style: {transform: E, ...x}={}, ...M} = r
      , A = uc()
      , [z,B] = _.useState(!1);
    if (We( () => {
        if (!u)
            return;
        Tt(u).direction === "rtl" && B(!0)
    }
    , [u]),
    !u)
        return null;
    const [W,Z] = l.split("-")
      , te = W === "top" || W === "bottom";
    let J = y;
    (te && d != null && d.x || !te && d != null && d.y) && (J = null);
    const re = g * 2
      , he = re / 2
      , Y = p / 2 * (m / -8 + 1)
      , K = v / 2 * m / 4
      , V = !!b
      , ne = J && Z === "end" ? "bottom" : "top";
    let T = J && Z === "end" ? "right" : "left";
    J && z && (T = Z === "end" ? "left" : "right");
    const L = f?.x != null ? J || f.x : ""
      , G = f?.y != null ? J || f.y : ""
      , N = b || "M0,0" + (" H" + p) + (" L" + (p - Y) + "," + (v - K)) + (" Q" + p / 2 + "," + v + " " + Y + "," + (v - K)) + " Z"
      , C = {
        top: V ? "rotate(180deg)" : "",
        left: V ? "rotate(90deg)" : "rotate(-90deg)",
        bottom: V ? "" : "rotate(180deg)",
        right: V ? "rotate(-90deg)" : "rotate(90deg)"
    }[W];
    return k.jsxs("svg", {
        ...M,
        "aria-hidden": !0,
        ref: o,
        width: V ? p : p + re,
        height: p,
        viewBox: "0 0 " + p + " " + (v > p ? v : p),
        style: {
            position: "absolute",
            pointerEvents: "none",
            [T]: L,
            [ne]: G,
            [W]: te || V ? "100%" : "calc(100% - " + re / 2 + "px)",
            transform: [C, E].filter(U => !!U).join(" "),
            ...x
        },
        children: [re > 0 && k.jsx("path", {
            clipPath: "url(#" + A + ")",
            fill: "none",
            stroke: w,
            strokeWidth: re + (b ? 0 : 1),
            d: N
        }), k.jsx("path", {
            stroke: re && !b ? M.fill : "none",
            d: N
        }), k.jsx("clipPath", {
            id: A,
            children: k.jsx("rect", {
                x: -he,
                y: he * (V ? -1 : 1),
                width: p + re,
                height: p
            })
        })]
    })
});
function qw() {
    const n = new Map;
    return {
        emit(r, o) {
            var l;
            (l = n.get(r)) == null || l.forEach(u => u(o))
        },
        on(r, o) {
            n.has(r) || n.set(r, new Set),
            n.get(r).add(o)
        },
        off(r, o) {
            var l;
            (l = n.get(r)) == null || l.delete(o)
        }
    }
}
const Kw = _.createContext(null)
  , Gw = _.createContext(null)
  , _m = () => {
    var n;
    return ((n = _.useContext(Kw)) == null ? void 0 : n.id) || null
}
  , gl = () => _.useContext(Gw);
function po(n) {
    return "data-floating-ui-" + n
}
function $u(n) {
    n.current !== -1 && (clearTimeout(n.current),
    n.current = -1)
}
let Ap = 0;
function Or(n, r) {
    r === void 0 && (r = {});
    const {preventScroll: o=!1, cancelPrevious: l=!0, sync: u=!1} = r;
    l && cancelAnimationFrame(Ap);
    const f = () => n?.focus({
        preventScroll: o
    });
    u ? f() : Ap = requestAnimationFrame(f)
}
function Yw(n) {
    return n?.ownerDocument || document
}
const hi = {
    inert: new WeakMap,
    "aria-hidden": new WeakMap,
    none: new WeakMap
};
function jp(n) {
    return n === "inert" ? hi.inert : n === "aria-hidden" ? hi["aria-hidden"] : hi.none
}
let $s = new WeakSet
  , Us = {}
  , wu = 0;
const Xw = () => typeof HTMLElement < "u" && "inert"in HTMLElement.prototype
  , km = n => n && (n.host || km(n.parentNode))
  , Jw = (n, r) => r.map(o => {
    if (n.contains(o))
        return o;
    const l = km(o);
    return n.contains(l) ? l : null
}
).filter(o => o != null);
function Zw(n, r, o, l) {
    const u = "data-floating-ui-inert"
      , f = l ? "inert" : o ? "aria-hidden" : null
      , d = Jw(r, n)
      , p = new Set
      , v = new Set(d)
      , m = [];
    Us[u] || (Us[u] = new WeakMap);
    const g = Us[u];
    d.forEach(y),
    w(r),
    p.clear();
    function y(b) {
        !b || p.has(b) || (p.add(b),
        b.parentNode && y(b.parentNode))
    }
    function w(b) {
        !b || v.has(b) || [].forEach.call(b.children, E => {
            if (fr(E) !== "script")
                if (p.has(E))
                    w(E);
                else {
                    const x = f ? E.getAttribute(f) : null
                      , M = x !== null && x !== "false"
                      , A = jp(f)
                      , z = (A.get(E) || 0) + 1
                      , B = (g.get(E) || 0) + 1;
                    A.set(E, z),
                    g.set(E, B),
                    m.push(E),
                    z === 1 && M && $s.add(E),
                    B === 1 && E.setAttribute(u, ""),
                    !M && f && E.setAttribute(f, f === "inert" ? "" : "true")
                }
        }
        )
    }
    return wu++,
    () => {
        m.forEach(b => {
            const E = jp(f)
              , M = (E.get(b) || 0) - 1
              , A = (g.get(b) || 0) - 1;
            E.set(b, M),
            g.set(b, A),
            M || (!$s.has(b) && f && b.removeAttribute(f),
            $s.delete(b)),
            A || b.removeAttribute(u)
        }
        ),
        wu--,
        wu || (hi.inert = new WeakMap,
        hi["aria-hidden"] = new WeakMap,
        hi.none = new WeakMap,
        $s = new WeakSet,
        Us = {})
    }
}
function zp(n, r, o) {
    r === void 0 && (r = !1),
    o === void 0 && (o = !1);
    const l = Yw(n[0]).body;
    return Zw(n.concat(Array.from(l.querySelectorAll('[aria-live],[role="status"],output'))), l, r, o)
}
const yl = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
}
  , al = _.forwardRef(function(r, o) {
    const [l,u] = _.useState();
    We( () => {
        j0() && u("button")
    }
    , []);
    const f = {
        ref: o,
        tabIndex: 0,
        role: l,
        "aria-hidden": l ? void 0 : !0,
        [po("focus-guard")]: "",
        style: yl
    };
    return k.jsx("span", {
        ...r,
        ...f
    })
})
  , Rm = _.createContext(null)
  , Bp = po("portal");
function e1(n) {
    n === void 0 && (n = {});
    const {id: r, root: o} = n
      , l = uc()
      , u = Nm()
      , [f,d] = _.useState(null)
      , p = _.useRef(null);
    return We( () => () => {
        f?.remove(),
        queueMicrotask( () => {
            p.current = null
        }
        )
    }
    , [f]),
    We( () => {
        if (!l || p.current)
            return;
        const v = r ? document.getElementById(r) : null;
        if (!v)
            return;
        const m = document.createElement("div");
        m.id = l,
        m.setAttribute(Bp, ""),
        v.appendChild(m),
        p.current = m,
        d(m)
    }
    , [r, l]),
    We( () => {
        if (o === null || !l || p.current)
            return;
        let v = o || u?.portalNode;
        v && !tc(v) && (v = v.current),
        v = v || document.body;
        let m = null;
        r && (m = document.createElement("div"),
        m.id = r,
        v.appendChild(m));
        const g = document.createElement("div");
        g.id = l,
        g.setAttribute(Bp, ""),
        v = m || v,
        v.appendChild(g),
        p.current = g,
        d(g)
    }
    , [r, o, l, u]),
    f
}
function Om(n) {
    const {children: r, id: o, root: l, preserveTabOrder: u=!0} = n
      , f = e1({
        id: o,
        root: l
    })
      , [d,p] = _.useState(null)
      , v = _.useRef(null)
      , m = _.useRef(null)
      , g = _.useRef(null)
      , y = _.useRef(null)
      , w = d?.modal
      , b = d?.open
      , E = !!d && !d.modal && d.open && u && !!(l || f);
    return _.useEffect( () => {
        if (!f || !u || w)
            return;
        function x(M) {
            f && uo(M) && (M.type === "focusin" ? Sp : tw)(f)
        }
        return f.addEventListener("focusin", x, !0),
        f.addEventListener("focusout", x, !0),
        () => {
            f.removeEventListener("focusin", x, !0),
            f.removeEventListener("focusout", x, !0)
        }
    }
    , [f, u, w]),
    _.useEffect( () => {
        f && (b || Sp(f))
    }
    , [b, f]),
    k.jsxs(Rm.Provider, {
        value: _.useMemo( () => ({
            preserveTabOrder: u,
            beforeOutsideRef: v,
            afterOutsideRef: m,
            beforeInsideRef: g,
            afterInsideRef: y,
            portalNode: f,
            setFocusManagerState: p
        }), [u, f]),
        children: [E && f && k.jsx(al, {
            "data-type": "outside",
            ref: v,
            onFocus: x => {
                if (uo(x, f)) {
                    var M;
                    (M = g.current) == null || M.focus()
                } else {
                    const A = d ? d.domReference : null
                      , z = dm(A);
                    z?.focus()
                }
            }
        }), E && f && k.jsx("span", {
            "aria-owns": f.id,
            style: yl
        }), f && sc.createPortal(r, f), E && f && k.jsx(al, {
            "data-type": "outside",
            ref: m,
            onFocus: x => {
                if (uo(x, f)) {
                    var M;
                    (M = y.current) == null || M.focus()
                } else {
                    const A = d ? d.domReference : null
                      , z = fm(A);
                    z?.focus(),
                    d?.closeOnFocusOut && d?.onOpenChange(!1, x.nativeEvent, "focus-out")
                }
            }
        })]
    })
}
const Nm = () => _.useContext(Rm);
function $p(n) {
    return _.useMemo( () => r => {
        n.forEach(o => {
            o && (o.current = r)
        }
        )
    }
    , n)
}
const t1 = 20;
let ar = [];
function cc() {
    ar = ar.filter(n => n.isConnected)
}
function n1(n) {
    cc(),
    n && fr(n) !== "body" && (ar.push(n),
    ar.length > t1 && (ar = ar.slice(-20)))
}
function Up() {
    return cc(),
    ar[ar.length - 1]
}
function r1(n) {
    const r = bo();
    return im(n, r) ? n : hl(n, r)[0] || n
}
function Wp(n, r) {
    var o;
    if (!r.current.includes("floating") && !((o = n.getAttribute("role")) != null && o.includes("dialog")))
        return;
    const l = bo()
      , f = A0(n, l).filter(p => {
        const v = p.getAttribute("data-tabindex") || "";
        return im(p, l) || p.hasAttribute("data-tabindex") && !v.startsWith("-")
    }
    )
      , d = n.getAttribute("tabindex");
    r.current.includes("floating") || f.length === 0 ? d !== "0" && n.setAttribute("tabindex", "0") : (d !== "-1" || n.hasAttribute("data-tabindex") && n.getAttribute("data-tabindex") !== "-1") && (n.setAttribute("tabindex", "-1"),
    n.setAttribute("data-tabindex", "-1"))
}
const i1 = _.forwardRef(function(r, o) {
    return k.jsx("button", {
        ...r,
        type: "button",
        ref: o,
        tabIndex: -1,
        style: yl
    })
});
function Pm(n) {
    const {context: r, children: o, disabled: l=!1, order: u=["content"], guards: f=!0, initialFocus: d=0, returnFocus: p=!0, restoreFocus: v=!1, modal: m=!0, visuallyHiddenDismiss: g=!1, closeOnFocusOut: y=!0, outsideElementsInert: w=!1, getInsideElements: b= () => []} = n
      , {open: E, onOpenChange: x, events: M, dataRef: A, elements: {domReference: z, floating: B}} = r
      , W = ct( () => {
        var we;
        return (we = A.current.floatingContext) == null ? void 0 : we.nodeId
    }
    )
      , Z = ct(b)
      , te = typeof d == "number" && d < 0
      , J = zu(z) && te
      , re = Xw()
      , he = re ? f : !0
      , Y = !he || re && w
      , K = hn(u)
      , V = hn(d)
      , ne = hn(p)
      , T = gl()
      , L = Nm()
      , G = _.useRef(null)
      , N = _.useRef(null)
      , C = _.useRef(!1)
      , U = _.useRef(!1)
      , j = _.useRef(-1)
      , O = _.useRef(-1)
      , $ = L != null
      , ee = Bu(B)
      , ae = ct(function(we) {
        return we === void 0 && (we = ee),
        we ? hl(we, bo()) : []
    })
      , ue = ct(we => {
        const Ce = ae(we);
        return K.current.map(be => z && be === "reference" ? z : ee && be === "floating" ? ee : Ce).filter(Boolean).flat()
    }
    );
    _.useEffect( () => {
        if (l || !m)
            return;
        function we(be) {
            if (be.key === "Tab") {
                Et(ee, or($t(ee))) && ae().length === 0 && !J && at(be);
                const Me = ue()
                  , Ae = sr(be);
                K.current[0] === "reference" && Ae === z && (at(be),
                be.shiftKey ? Or(Me[Me.length - 1]) : Or(Me[1])),
                K.current[1] === "floating" && Ae === ee && be.shiftKey && (at(be),
                Or(Me[0]))
            }
        }
        const Ce = $t(ee);
        return Ce.addEventListener("keydown", we),
        () => {
            Ce.removeEventListener("keydown", we)
        }
    }
    , [l, z, ee, m, K, J, ae, ue]),
    _.useEffect( () => {
        if (l || !B)
            return;
        function we(Ce) {
            const be = sr(Ce)
              , Ae = ae().indexOf(be);
            Ae !== -1 && (j.current = Ae)
        }
        return B.addEventListener("focusin", we),
        () => {
            B.removeEventListener("focusin", we)
        }
    }
    , [l, B, ae]),
    _.useEffect( () => {
        if (l || !y)
            return;
        function we() {
            U.current = !0,
            setTimeout( () => {
                U.current = !1
            }
            )
        }
        function Ce(Ae) {
            const _e = Ae.relatedTarget
              , et = Ae.currentTarget
              , Qe = sr(Ae);
            queueMicrotask( () => {
                const He = W()
                  , ot = !(Et(z, _e) || Et(B, _e) || Et(_e, B) || Et(L?.portalNode, _e) || _e != null && _e.hasAttribute(po("focus-guard")) || T && (Mr(T.nodesRef.current, He).find(ce => {
                    var Se, fe;
                    return Et((Se = ce.context) == null ? void 0 : Se.elements.floating, _e) || Et((fe = ce.context) == null ? void 0 : fe.elements.domReference, _e)
                }
                ) || wp(T.nodesRef.current, He).find(ce => {
                    var Se, fe, Pe;
                    return [(Se = ce.context) == null ? void 0 : Se.elements.floating, Bu((fe = ce.context) == null ? void 0 : fe.elements.floating)].includes(_e) || ((Pe = ce.context) == null ? void 0 : Pe.elements.domReference) === _e
                }
                )));
                if (et === z && ee && Wp(ee, K),
                v && et !== z && !(Qe != null && Qe.isConnected) && or($t(ee)) === $t(ee).body) {
                    Xe(ee) && ee.focus();
                    const ce = j.current
                      , Se = ae()
                      , fe = Se[ce] || Se[Se.length - 1] || ee;
                    Xe(fe) && fe.focus()
                }
                if (A.current.insideReactTree) {
                    A.current.insideReactTree = !1;
                    return
                }
                (J || !m) && _e && ot && !U.current && _e !== Up() && (C.current = !0,
                x(!1, Ae, "focus-out"))
            }
            )
        }
        const be = !!(!T && L);
        function Me() {
            $u(O),
            A.current.insideReactTree = !0,
            O.current = window.setTimeout( () => {
                A.current.insideReactTree = !1
            }
            )
        }
        if (B && Xe(z))
            return z.addEventListener("focusout", Ce),
            z.addEventListener("pointerdown", we),
            B.addEventListener("focusout", Ce),
            be && B.addEventListener("focusout", Me, !0),
            () => {
                z.removeEventListener("focusout", Ce),
                z.removeEventListener("pointerdown", we),
                B.removeEventListener("focusout", Ce),
                be && B.removeEventListener("focusout", Me, !0)
            }
    }
    , [l, z, B, ee, m, T, L, x, y, v, ae, J, W, K, A]);
    const me = _.useRef(null)
      , xe = _.useRef(null)
      , ke = $p([me, L?.beforeInsideRef])
      , Ne = $p([xe, L?.afterInsideRef]);
    _.useEffect( () => {
        var we, Ce;
        if (l || !B)
            return;
        const be = Array.from((L == null || (we = L.portalNode) == null ? void 0 : we.querySelectorAll("[" + po("portal") + "]")) || [])
          , Ae = (Ce = (T ? wp(T.nodesRef.current, W()) : []).find(Qe => {
            var He;
            return zu(((He = Qe.context) == null ? void 0 : He.elements.domReference) || null)
        }
        )) == null || (Ce = Ce.context) == null ? void 0 : Ce.elements.domReference
          , _e = [B, Ae, ...be, ...Z(), G.current, N.current, me.current, xe.current, L?.beforeOutsideRef.current, L?.afterOutsideRef.current, K.current.includes("reference") || J ? z : null].filter(Qe => Qe != null)
          , et = m || J ? zp(_e, !Y, Y) : zp(_e);
        return () => {
            et()
        }
    }
    , [l, z, B, m, K, L, J, he, Y, T, W, Z]),
    We( () => {
        if (l || !Xe(ee))
            return;
        const we = $t(ee)
          , Ce = or(we);
        queueMicrotask( () => {
            const be = ue(ee)
              , Me = V.current
              , Ae = (typeof Me == "number" ? be[Me] : Me.current) || ee
              , _e = Et(ee, Ce);
            !te && !_e && E && Or(Ae, {
                preventScroll: Ae === ee
            })
        }
        )
    }
    , [l, E, ee, te, ue, V]),
    We( () => {
        if (l || !ee)
            return;
        const we = $t(ee)
          , Ce = or(we);
        n1(Ce);
        function be(_e) {
            let {reason: et, event: Qe, nested: He} = _e;
            if (["hover", "safe-polygon"].includes(et) && Qe.type === "mouseleave" && (C.current = !0),
            et === "outside-press")
                if (He)
                    C.current = !1;
                else if (am(Qe) || um(Qe))
                    C.current = !1;
                else {
                    let ot = !1;
                    document.createElement("div").focus({
                        get preventScroll() {
                            return ot = !0,
                            !1
                        }
                    }),
                    ot ? C.current = !1 : C.current = !0
                }
        }
        M.on("openchange", be);
        const Me = we.createElement("span");
        Me.setAttribute("tabindex", "-1"),
        Me.setAttribute("aria-hidden", "true"),
        Object.assign(Me.style, yl),
        $ && z && z.insertAdjacentElement("afterend", Me);
        function Ae() {
            if (typeof ne.current == "boolean") {
                const _e = z || Up();
                return _e && _e.isConnected ? _e : Me
            }
            return ne.current.current || Me
        }
        return () => {
            M.off("openchange", be);
            const _e = or(we)
              , et = Et(B, _e) || T && Mr(T.nodesRef.current, W(), !1).some(He => {
                var ot;
                return Et((ot = He.context) == null ? void 0 : ot.elements.floating, _e)
            }
            )
              , Qe = Ae();
            queueMicrotask( () => {
                const He = r1(Qe);
                ne.current && !C.current && Xe(He) && (!(He !== _e && _e !== we.body) || et) && He.focus({
                    preventScroll: !0
                }),
                Me.remove()
            }
            )
        }
    }
    , [l, B, ee, ne, A, M, T, $, z, W]),
    _.useEffect( () => (queueMicrotask( () => {
        C.current = !1
    }
    ),
    () => {
        queueMicrotask(cc)
    }
    ), [l]),
    We( () => {
        if (!l && L)
            return L.setFocusManagerState({
                modal: m,
                closeOnFocusOut: y,
                open: E,
                onOpenChange: x,
                domReference: z
            }),
            () => {
                L.setFocusManagerState(null)
            }
    }
    , [l, L, m, E, x, y, z]),
    We( () => {
        l || ee && Wp(ee, K)
    }
    , [l, ee, K]);
    function Be(we) {
        return l || !g || !m ? null : k.jsx(i1, {
            ref: we === "start" ? G : N,
            onClick: Ce => x(!1, Ce.nativeEvent),
            children: typeof g == "string" ? g : "Dismiss"
        })
    }
    const Wt = !l && he && (m ? !J : !0) && ($ || m);
    return k.jsxs(k.Fragment, {
        children: [Wt && k.jsx(al, {
            "data-type": "inside",
            ref: ke,
            onFocus: we => {
                if (m) {
                    const be = ue();
                    Or(u[0] === "reference" ? be[0] : be[be.length - 1])
                } else if (L != null && L.preserveTabOrder && L.portalNode)
                    if (C.current = !1,
                    uo(we, L.portalNode)) {
                        const be = fm(z);
                        be?.focus()
                    } else {
                        var Ce;
                        (Ce = L.beforeOutsideRef.current) == null || Ce.focus()
                    }
            }
        }), !J && Be("start"), o, Be("end"), Wt && k.jsx(al, {
            "data-type": "inside",
            ref: Ne,
            onFocus: we => {
                if (m)
                    Or(ue()[0]);
                else if (L != null && L.preserveTabOrder && L.portalNode)
                    if (y && (C.current = !0),
                    uo(we, L.portalNode)) {
                        const be = dm(z);
                        be?.focus()
                    } else {
                        var Ce;
                        (Ce = L.afterOutsideRef.current) == null || Ce.focus()
                    }
            }
        })]
    })
}
let Ws = 0;
const Hp = "--floating-ui-scrollbar-width";
function o1() {
    const n = om()
      , r = /iP(hone|ad|od)|iOS/.test(n) || n === "MacIntel" && navigator.maxTouchPoints > 1
      , o = document.body.style
      , u = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight"
      , f = window.innerWidth - document.documentElement.clientWidth
      , d = o.left ? parseFloat(o.left) : window.scrollX
      , p = o.top ? parseFloat(o.top) : window.scrollY;
    if (o.overflow = "hidden",
    o.setProperty(Hp, f + "px"),
    f && (o[u] = f + "px"),
    r) {
        var v, m;
        const g = ((v = window.visualViewport) == null ? void 0 : v.offsetLeft) || 0
          , y = ((m = window.visualViewport) == null ? void 0 : m.offsetTop) || 0;
        Object.assign(o, {
            position: "fixed",
            top: -(p - Math.floor(y)) + "px",
            left: -(d - Math.floor(g)) + "px",
            right: "0"
        })
    }
    return () => {
        Object.assign(o, {
            overflow: "",
            [u]: ""
        }),
        o.removeProperty(Hp),
        r && (Object.assign(o, {
            position: "",
            top: "",
            left: "",
            right: ""
        }),
        window.scrollTo(d, p))
    }
}
let Vp = () => {}
;
const s1 = _.forwardRef(function(r, o) {
    const {lockScroll: l=!1, ...u} = r;
    return We( () => {
        if (l)
            return Ws++,
            Ws === 1 && (Vp = o1()),
            () => {
                Ws--,
                Ws === 0 && Vp()
            }
    }
    , [l]),
    k.jsx("div", {
        ref: o,
        ...u,
        style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u.style
        }
    })
});
function Qp(n) {
    return Xe(n.target) && n.target.tagName === "BUTTON"
}
function l1(n) {
    return Xe(n.target) && n.target.tagName === "A"
}
function qp(n) {
    return lm(n)
}
function Tm(n, r) {
    r === void 0 && (r = {});
    const {open: o, onOpenChange: l, dataRef: u, elements: {domReference: f}} = n
      , {enabled: d=!0, event: p="click", toggle: v=!0, ignoreMouse: m=!1, keyboardHandlers: g=!0, stickIfOpen: y=!0} = r
      , w = _.useRef()
      , b = _.useRef(!1)
      , E = _.useMemo( () => ({
        onPointerDown(x) {
            w.current = x.pointerType
        },
        onMouseDown(x) {
            const M = w.current;
            x.button === 0 && p !== "click" && (bp(M) && m || (o && v && (!(u.current.openEvent && y) || u.current.openEvent.type === "mousedown") ? l(!1, x.nativeEvent, "click") : (x.preventDefault(),
            l(!0, x.nativeEvent, "click"))))
        },
        onClick(x) {
            const M = w.current;
            if (p === "mousedown" && w.current) {
                w.current = void 0;
                return
            }
            bp(M) && m || (o && v && (!(u.current.openEvent && y) || u.current.openEvent.type === "click") ? l(!1, x.nativeEvent, "click") : l(!0, x.nativeEvent, "click"))
        },
        onKeyDown(x) {
            w.current = void 0,
            !(x.defaultPrevented || !g || Qp(x)) && (x.key === " " && !qp(f) && (x.preventDefault(),
            b.current = !0),
            !l1(x) && x.key === "Enter" && l(!(o && v), x.nativeEvent, "click"))
        },
        onKeyUp(x) {
            x.defaultPrevented || !g || Qp(x) || qp(f) || x.key === " " && b.current && (b.current = !1,
            l(!(o && v), x.nativeEvent, "click"))
        }
    }), [u, f, p, m, g, l, o, y, v]);
    return _.useMemo( () => d ? {
        reference: E
    } : {}, [d, E])
}
const a1 = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick"
}
  , u1 = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture"
}
  , Kp = n => {
    var r, o;
    return {
        escapeKey: typeof n == "boolean" ? n : (r = n?.escapeKey) != null ? r : !1,
        outsidePress: typeof n == "boolean" ? n : (o = n?.outsidePress) != null ? o : !0
    }
}
;
function Mm(n, r) {
    r === void 0 && (r = {});
    const {open: o, onOpenChange: l, elements: u, dataRef: f} = n
      , {enabled: d=!0, escapeKey: p=!0, outsidePress: v=!0, outsidePressEvent: m="pointerdown", referencePress: g=!1, referencePressEvent: y="pointerdown", ancestorScroll: w=!1, bubbles: b, capture: E} = r
      , x = gl()
      , M = ct(typeof v == "function" ? v : () => !1)
      , A = typeof v == "function" ? M : v
      , z = _.useRef(!1)
      , {escapeKey: B, outsidePress: W} = Kp(b)
      , {escapeKey: Z, outsidePress: te} = Kp(E)
      , J = _.useRef(!1)
      , re = ct(T => {
        var L;
        if (!o || !d || !p || T.key !== "Escape" || J.current)
            return;
        const G = (L = f.current.floatingContext) == null ? void 0 : L.nodeId
          , N = x ? Mr(x.nodesRef.current, G) : [];
        if (!B && (T.stopPropagation(),
        N.length > 0)) {
            let C = !0;
            if (N.forEach(U => {
                var j;
                if ((j = U.context) != null && j.open && !U.context.dataRef.current.__escapeKeyBubbles) {
                    C = !1;
                    return
                }
            }
            ),
            !C)
                return
        }
        l(!1, V0(T) ? T.nativeEvent : T, "escape-key")
    }
    )
      , he = ct(T => {
        var L;
        const G = () => {
            var N;
            re(T),
            (N = sr(T)) == null || N.removeEventListener("keydown", G)
        }
        ;
        (L = sr(T)) == null || L.addEventListener("keydown", G)
    }
    )
      , Y = ct(T => {
        var L;
        const G = f.current.insideReactTree;
        f.current.insideReactTree = !1;
        const N = z.current;
        if (z.current = !1,
        m === "click" && N || G || typeof A == "function" && !A(T))
            return;
        const C = sr(T)
          , U = "[" + po("inert") + "]"
          , j = $t(u.floating).querySelectorAll(U);
        let O = Ge(C) ? C : null;
        for (; O && !Pn(O); ) {
            const ue = Mn(O);
            if (Pn(ue) || !Ge(ue))
                break;
            O = ue
        }
        if (j.length && Ge(C) && !W0(C) && !Et(C, u.floating) && Array.from(j).every(ue => !Et(O, ue)))
            return;
        if (Xe(C) && ne) {
            const ue = Pn(C)
              , me = Tt(C)
              , xe = /auto|scroll/
              , ke = ue || xe.test(me.overflowX)
              , Ne = ue || xe.test(me.overflowY)
              , Be = ke && C.clientWidth > 0 && C.scrollWidth > C.clientWidth
              , Wt = Ne && C.clientHeight > 0 && C.scrollHeight > C.clientHeight
              , we = me.direction === "rtl"
              , Ce = Wt && (we ? T.offsetX <= C.offsetWidth - C.clientWidth : T.offsetX > C.clientWidth)
              , be = Be && T.offsetY > C.clientHeight;
            if (Ce || be)
                return
        }
        const $ = (L = f.current.floatingContext) == null ? void 0 : L.nodeId
          , ee = x && Mr(x.nodesRef.current, $).some(ue => {
            var me;
            return du(T, (me = ue.context) == null ? void 0 : me.elements.floating)
        }
        );
        if (du(T, u.floating) || du(T, u.domReference) || ee)
            return;
        const ae = x ? Mr(x.nodesRef.current, $) : [];
        if (ae.length > 0) {
            let ue = !0;
            if (ae.forEach(me => {
                var xe;
                if ((xe = me.context) != null && xe.open && !me.context.dataRef.current.__outsidePressBubbles) {
                    ue = !1;
                    return
                }
            }
            ),
            !ue)
                return
        }
        l(!1, T, "outside-press")
    }
    )
      , K = ct(T => {
        var L;
        const G = () => {
            var N;
            Y(T),
            (N = sr(T)) == null || N.removeEventListener(m, G)
        }
        ;
        (L = sr(T)) == null || L.addEventListener(m, G)
    }
    );
    _.useEffect( () => {
        if (!o || !d)
            return;
        f.current.__escapeKeyBubbles = B,
        f.current.__outsidePressBubbles = W;
        let T = -1;
        function L(j) {
            l(!1, j, "ancestor-scroll")
        }
        function G() {
            window.clearTimeout(T),
            J.current = !0
        }
        function N() {
            T = window.setTimeout( () => {
                J.current = !1
            }
            , dl() ? 5 : 0)
        }
        const C = $t(u.floating);
        p && (C.addEventListener("keydown", Z ? he : re, Z),
        C.addEventListener("compositionstart", G),
        C.addEventListener("compositionend", N)),
        A && C.addEventListener(m, te ? K : Y, te);
        let U = [];
        return w && (Ge(u.domReference) && (U = ur(u.domReference)),
        Ge(u.floating) && (U = U.concat(ur(u.floating))),
        !Ge(u.reference) && u.reference && u.reference.contextElement && (U = U.concat(ur(u.reference.contextElement)))),
        U = U.filter(j => {
            var O;
            return j !== ((O = C.defaultView) == null ? void 0 : O.visualViewport)
        }
        ),
        U.forEach(j => {
            j.addEventListener("scroll", L, {
                passive: !0
            })
        }
        ),
        () => {
            p && (C.removeEventListener("keydown", Z ? he : re, Z),
            C.removeEventListener("compositionstart", G),
            C.removeEventListener("compositionend", N)),
            A && C.removeEventListener(m, te ? K : Y, te),
            U.forEach(j => {
                j.removeEventListener("scroll", L)
            }
            ),
            window.clearTimeout(T)
        }
    }
    , [f, u, p, A, m, o, l, w, d, B, W, re, Z, he, Y, te, K]),
    _.useEffect( () => {
        f.current.insideReactTree = !1
    }
    , [f, A, m]);
    const V = _.useMemo( () => ({
        onKeyDown: re,
        ...g && {
            [a1[y]]: T => {
                l(!1, T.nativeEvent, "reference-press")
            }
            ,
            ...y !== "click" && {
                onClick(T) {
                    l(!1, T.nativeEvent, "reference-press")
                }
            }
        }
    }), [re, l, g, y])
      , ne = _.useMemo( () => ({
        onKeyDown: re,
        onMouseDown() {
            z.current = !0
        },
        onMouseUp() {
            z.current = !0
        },
        [u1[m]]: () => {
            f.current.insideReactTree = !0
        }
    }), [re, m, f]);
    return _.useMemo( () => d ? {
        reference: V,
        floating: ne
    } : {}, [d, V, ne])
}
function c1(n) {
    const {open: r=!1, onOpenChange: o, elements: l} = n
      , u = uc()
      , f = _.useRef({})
      , [d] = _.useState( () => qw())
      , p = _m() != null
      , [v,m] = _.useState(l.reference)
      , g = ct( (b, E, x) => {
        f.current.openEvent = b ? E : void 0,
        d.emit("openchange", {
            open: b,
            event: E,
            reason: x,
            nested: p
        }),
        o?.(b, E, x)
    }
    )
      , y = _.useMemo( () => ({
        setPositionReference: m
    }), [])
      , w = _.useMemo( () => ({
        reference: v || l.reference || null,
        floating: l.floating || null,
        domReference: l.reference
    }), [v, l.reference, l.floating]);
    return _.useMemo( () => ({
        dataRef: f,
        open: r,
        onOpenChange: g,
        elements: w,
        events: d,
        floatingId: u,
        refs: y
    }), [r, g, w, d, u, y])
}
function Lm(n) {
    n === void 0 && (n = {});
    const {nodeId: r} = n
      , o = c1({
        ...n,
        elements: {
            reference: null,
            floating: null,
            ...n.elements
        }
    })
      , l = n.rootContext || o
      , u = l.elements
      , [f,d] = _.useState(null)
      , [p,v] = _.useState(null)
      , g = u?.domReference || f
      , y = _.useRef(null)
      , w = gl();
    We( () => {
        g && (y.current = g)
    }
    , [g]);
    const b = Aw({
        ...n,
        elements: {
            ...u,
            ...p && {
                reference: p
            }
        }
    })
      , E = _.useCallback(B => {
        const W = Ge(B) ? {
            getBoundingClientRect: () => B.getBoundingClientRect(),
            getClientRects: () => B.getClientRects(),
            contextElement: B
        } : B;
        v(W),
        b.refs.setReference(W)
    }
    , [b.refs])
      , x = _.useCallback(B => {
        (Ge(B) || B === null) && (y.current = B,
        d(B)),
        (Ge(b.refs.reference.current) || b.refs.reference.current === null || B !== null && !Ge(B)) && b.refs.setReference(B)
    }
    , [b.refs])
      , M = _.useMemo( () => ({
        ...b.refs,
        setReference: x,
        setPositionReference: E,
        domReference: y
    }), [b.refs, x, E])
      , A = _.useMemo( () => ({
        ...b.elements,
        domReference: g
    }), [b.elements, g])
      , z = _.useMemo( () => ({
        ...b,
        ...l,
        refs: M,
        elements: A,
        nodeId: r
    }), [b, M, A, r, l]);
    return We( () => {
        l.dataRef.current.floatingContext = z;
        const B = w?.nodesRef.current.find(W => W.id === r);
        B && (B.context = z)
    }
    ),
    _.useMemo( () => ({
        ...b,
        context: z,
        refs: M,
        elements: A
    }), [b, M, A, z])
}
function bu(n, r, o) {
    const l = new Map
      , u = o === "item";
    let f = n;
    if (u && n) {
        const {[Lp]: d, [Ip]: p, ...v} = n;
        f = v
    }
    return {
        ...o === "floating" && {
            tabIndex: -1,
            [Uw]: ""
        },
        ...f,
        ...r.map(d => {
            const p = d ? d[o] : null;
            return typeof p == "function" ? n ? p(n) : null : p
        }
        ).concat(n).reduce( (d, p) => (p && Object.entries(p).forEach(v => {
            let[m,g] = v;
            if (!(u && [Lp, Ip].includes(m)))
                if (m.indexOf("on") === 0) {
                    if (l.has(m) || l.set(m, []),
                    typeof g == "function") {
                        var y;
                        (y = l.get(m)) == null || y.push(g),
                        d[m] = function() {
                            for (var w, b = arguments.length, E = new Array(b), x = 0; x < b; x++)
                                E[x] = arguments[x];
                            return (w = l.get(m)) == null ? void 0 : w.map(M => M(...E)).find(M => M !== void 0)
                        }
                    }
                } else
                    d[m] = g
        }
        ),
        d), {})
    }
}
function Im(n) {
    n === void 0 && (n = []);
    const r = n.map(p => p?.reference)
      , o = n.map(p => p?.floating)
      , l = n.map(p => p?.item)
      , u = _.useCallback(p => bu(p, n, "reference"), r)
      , f = _.useCallback(p => bu(p, n, "floating"), o)
      , d = _.useCallback(p => bu(p, n, "item"), l);
    return _.useMemo( () => ({
        getReferenceProps: u,
        getFloatingProps: f,
        getItemProps: d
    }), [u, f, d])
}
const f1 = "Escape";
function wl(n, r, o) {
    switch (n) {
    case "vertical":
        return r;
    case "horizontal":
        return o;
    default:
        return r || o
    }
}
function Hs(n, r) {
    return wl(r, n === Cm || n === vl, n === xo || n === So)
}
function xu(n, r, o) {
    return wl(r, n === vl, o ? n === xo : n === So) || n === "Enter" || n === " " || n === ""
}
function Gp(n, r, o) {
    return wl(r, o ? n === xo : n === So, n === vl)
}
function Yp(n, r, o, l) {
    const u = o ? n === So : n === xo
      , f = n === Cm;
    return r === "both" || r === "horizontal" && l && l > 1 ? n === f1 : wl(r, u, f)
}
function d1(n, r) {
    const {open: o, onOpenChange: l, elements: u, floatingId: f} = n
      , {listRef: d, activeIndex: p, onNavigate: v= () => {}
    , enabled: m=!0, selectedIndex: g=null, allowEscape: y=!1, loop: w=!1, nested: b=!1, rtl: E=!1, virtual: x=!1, focusItemOnOpen: M="auto", focusItemOnHover: A=!0, openOnArrowKeyDown: z=!0, disabledIndices: B=void 0, orientation: W="vertical", parentOrientation: Z, cols: te=1, scrollItemIntoView: J=!0, virtualItemRef: re, itemSizes: he, dense: Y=!1} = r
      , K = Bu(u.floating)
      , V = hn(K)
      , ne = _m()
      , T = gl();
    We( () => {
        n.dataRef.current.orientation = W
    }
    , [n, W]);
    const L = ct( () => {
        v(C.current === -1 ? null : C.current)
    }
    )
      , G = zu(u.domReference)
      , N = _.useRef(M)
      , C = _.useRef(g ?? -1)
      , U = _.useRef(null)
      , j = _.useRef(!0)
      , O = _.useRef(L)
      , $ = _.useRef(!!u.floating)
      , ee = _.useRef(o)
      , ae = _.useRef(!1)
      , ue = _.useRef(!1)
      , me = hn(B)
      , xe = hn(o)
      , ke = hn(J)
      , Ne = hn(g)
      , [Be,Wt] = _.useState()
      , [we,Ce] = _.useState()
      , be = ct( () => {
        function ce(Le) {
            if (x) {
                var je;
                (je = Le.id) != null && je.endsWith("-fui-option") && (Le.id = f + "-" + Math.random().toString(16).slice(2, 10)),
                Wt(Le.id),
                T?.events.emit("virtualfocus", Le),
                re && (re.current = Le)
            } else
                Or(Le, {
                    sync: ae.current,
                    preventScroll: !0
                })
        }
        const Se = d.current[C.current]
          , fe = ue.current;
        Se && ce(Se),
        (ae.current ? Le => Le() : requestAnimationFrame)( () => {
            const Le = d.current[C.current] || Se;
            if (!Le)
                return;
            Se || ce(Le);
            const je = ke.current;
            je && Ae && (fe || !j.current) && (Le.scrollIntoView == null || Le.scrollIntoView(typeof je == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : je))
        }
        )
    }
    );
    We( () => {
        m && (o && u.floating ? N.current && g != null && (ue.current = !0,
        C.current = g,
        L()) : $.current && (C.current = -1,
        O.current()))
    }
    , [m, o, u.floating, g, L]),
    We( () => {
        if (m && o && u.floating)
            if (p == null) {
                if (ae.current = !1,
                Ne.current != null)
                    return;
                if ($.current && (C.current = -1,
                be()),
                (!ee.current || !$.current) && N.current && (U.current != null || N.current === !0 && U.current == null)) {
                    let ce = 0;
                    const Se = () => {
                        d.current[0] == null ? (ce < 2 && (ce ? requestAnimationFrame : queueMicrotask)(Se),
                        ce++) : (C.current = U.current == null || xu(U.current, W, E) || b ? pu(d, me.current) : xp(d, me.current),
                        U.current = null,
                        L())
                    }
                    ;
                    Se()
                }
            } else
                ao(d, p) || (C.current = p,
                be(),
                ue.current = !1)
    }
    , [m, o, u.floating, p, Ne, b, d, W, E, L, be, me]),
    We( () => {
        var ce;
        if (!m || u.floating || !T || x || !$.current)
            return;
        const Se = T.nodesRef.current
          , fe = (ce = Se.find(je => je.id === ne)) == null || (ce = ce.context) == null ? void 0 : ce.elements.floating
          , Pe = or($t(u.floating))
          , Le = Se.some(je => je.context && Et(je.context.elements.floating, Pe));
        fe && !Le && j.current && fe.focus({
            preventScroll: !0
        })
    }
    , [m, u.floating, T, ne, x]),
    We( () => {
        if (!m || !T || !x || ne)
            return;
        function ce(Se) {
            Ce(Se.id),
            re && (re.current = Se)
        }
        return T.events.on("virtualfocus", ce),
        () => {
            T.events.off("virtualfocus", ce)
        }
    }
    , [m, T, x, ne, re]),
    We( () => {
        O.current = L,
        ee.current = o,
        $.current = !!u.floating
    }
    ),
    We( () => {
        o || (U.current = null,
        N.current = M)
    }
    , [o, M]);
    const Me = p != null
      , Ae = _.useMemo( () => {
        function ce(fe) {
            if (!xe.current)
                return;
            const Pe = d.current.indexOf(fe);
            Pe !== -1 && C.current !== Pe && (C.current = Pe,
            L())
        }
        return {
            onFocus(fe) {
                let {currentTarget: Pe} = fe;
                ae.current = !0,
                ce(Pe)
            },
            onClick: fe => {
                let {currentTarget: Pe} = fe;
                return Pe.focus({
                    preventScroll: !0
                })
            }
            ,
            onMouseMove(fe) {
                let {currentTarget: Pe} = fe;
                ae.current = !0,
                ue.current = !1,
                A && ce(Pe)
            },
            onPointerLeave(fe) {
                let {pointerType: Pe} = fe;
                if (!(!j.current || Pe === "touch") && (ae.current = !0,
                !!A && (C.current = -1,
                L(),
                !x))) {
                    var Le;
                    (Le = V.current) == null || Le.focus({
                        preventScroll: !0
                    })
                }
            }
        }
    }
    , [xe, V, A, d, L, x])
      , _e = _.useCallback( () => {
        var ce;
        return Z ?? (T == null || (ce = T.nodesRef.current.find(Se => Se.id === ne)) == null || (ce = ce.context) == null || (ce = ce.dataRef) == null ? void 0 : ce.current.orientation)
    }
    , [ne, T, Z])
      , et = ct(ce => {
        if (j.current = !1,
        ae.current = !0,
        ce.which === 229 || !xe.current && ce.currentTarget === V.current)
            return;
        if (b && Yp(ce.key, W, E, te)) {
            Hs(ce.key, _e()) || at(ce),
            l(!1, ce.nativeEvent, "list-navigation"),
            Xe(u.domReference) && (x ? T?.events.emit("virtualfocus", u.domReference) : u.domReference.focus());
            return
        }
        const Se = C.current
          , fe = pu(d, B)
          , Pe = xp(d, B);
        if (G || (ce.key === "Home" && (at(ce),
        C.current = fe,
        L()),
        ce.key === "End" && (at(ce),
        C.current = Pe,
        L())),
        te > 1) {
            const Le = he || Array.from({
                length: d.current.length
            }, () => ({
                width: 1,
                height: 1
            }))
              , je = J0(Le, te, Y)
              , rn = je.findIndex(tt => tt != null && !Js(d, tt, B))
              , dr = je.reduce( (tt, yn, pr) => yn != null && !Js(d, yn, B) ? pr : tt, -1)
              , Ht = je[X0({
                current: je.map(tt => tt != null ? d.current[tt] : null)
            }, {
                event: ce,
                orientation: W,
                loop: w,
                rtl: E,
                cols: te,
                disabledIndices: ew([...(typeof B != "function" ? B : null) || d.current.map( (tt, yn) => Js(d, yn, B) ? yn : void 0), void 0], je),
                minIndex: rn,
                maxIndex: dr,
                prevIndex: Z0(C.current > Pe ? fe : C.current, Le, je, te, ce.key === vl ? "bl" : ce.key === (E ? xo : So) ? "tr" : "tl"),
                stopEvent: !0
            })];
            if (Ht != null && (C.current = Ht,
            L()),
            W === "both")
                return
        }
        if (Hs(ce.key, W)) {
            if (at(ce),
            o && !x && or(ce.currentTarget.ownerDocument) === ce.currentTarget) {
                C.current = xu(ce.key, W, E) ? fe : Pe,
                L();
                return
            }
            xu(ce.key, W, E) ? w ? C.current = Se >= Pe ? y && Se !== d.current.length ? -1 : fe : mt(d, {
                startingIndex: Se,
                disabledIndices: B
            }) : C.current = Math.min(Pe, mt(d, {
                startingIndex: Se,
                disabledIndices: B
            })) : w ? C.current = Se <= fe ? y && Se !== -1 ? d.current.length : Pe : mt(d, {
                startingIndex: Se,
                decrement: !0,
                disabledIndices: B
            }) : C.current = Math.max(fe, mt(d, {
                startingIndex: Se,
                decrement: !0,
                disabledIndices: B
            })),
            ao(d, C.current) && (C.current = -1),
            L()
        }
    }
    )
      , Qe = _.useMemo( () => x && o && Me && {
        "aria-activedescendant": we || Be
    }, [x, o, Me, we, Be])
      , He = _.useMemo( () => ({
        "aria-orientation": W === "both" ? void 0 : W,
        ...G ? {} : Qe,
        onKeyDown: et,
        onPointerMove() {
            j.current = !0
        }
    }), [Qe, et, W, G])
      , ot = _.useMemo( () => {
        function ce(fe) {
            M === "auto" && am(fe.nativeEvent) && (N.current = !0)
        }
        function Se(fe) {
            N.current = M,
            M === "auto" && um(fe.nativeEvent) && (N.current = !0)
        }
        return {
            ...Qe,
            onKeyDown(fe) {
                j.current = !1;
                const Pe = fe.key.startsWith("Arrow")
                  , Le = ["Home", "End"].includes(fe.key)
                  , je = Pe || Le
                  , rn = Gp(fe.key, W, E)
                  , dr = Yp(fe.key, W, E, te)
                  , Ht = Gp(fe.key, _e(), E)
                  , tt = Hs(fe.key, W)
                  , yn = (b ? Ht : tt) || fe.key === "Enter" || fe.key.trim() === "";
                if (x && o) {
                    const An = T?.nodesRef.current.find(jn => jn.parentId == null)
                      , Mt = T && An ? H0(T.nodesRef.current, An.id) : null;
                    if (je && Mt && re) {
                        const jn = new KeyboardEvent("keydown",{
                            key: fe.key,
                            bubbles: !0
                        });
                        if (rn || dr) {
                            var pr, bi;
                            const xi = ((pr = Mt.context) == null ? void 0 : pr.elements.domReference) === fe.currentTarget
                              , $r = dr && !xi ? (bi = Mt.context) == null ? void 0 : bi.elements.domReference : rn ? d.current.find(wn => wn?.id === Be) : null;
                            $r && (at(fe),
                            $r.dispatchEvent(jn),
                            Ce(void 0))
                        }
                        if ((tt || Le) && Mt.context && Mt.context.open && Mt.parentId && fe.currentTarget !== Mt.context.elements.domReference) {
                            var Mo;
                            at(fe),
                            (Mo = Mt.context.elements.domReference) == null || Mo.dispatchEvent(jn);
                            return
                        }
                    }
                    return et(fe)
                }
                if (!(!o && !z && Pe)) {
                    if (yn) {
                        const An = Hs(fe.key, _e());
                        U.current = b && An ? null : fe.key
                    }
                    if (b) {
                        Ht && (at(fe),
                        o ? (C.current = pu(d, me.current),
                        L()) : l(!0, fe.nativeEvent, "list-navigation"));
                        return
                    }
                    tt && (g != null && (C.current = g),
                    at(fe),
                    !o && z ? l(!0, fe.nativeEvent, "list-navigation") : et(fe),
                    o && L())
                }
            },
            onFocus() {
                o && !x && (C.current = -1,
                L())
            },
            onPointerDown: Se,
            onPointerEnter: Se,
            onMouseDown: ce,
            onClick: ce
        }
    }
    , [Be, Qe, te, et, me, M, d, b, L, l, o, z, W, _e, E, g, T, x, re]);
    return _.useMemo( () => m ? {
        reference: ot,
        floating: He,
        item: Ae
    } : {}, [m, ot, He, Ae])
}
function p1(n, r) {
    var o;
    const {open: l, dataRef: u} = n
      , {listRef: f, activeIndex: d, onMatch: p, onTypingChange: v, enabled: m=!0, findMatch: g=null, resetMs: y=750, ignoreKeys: w=[], selectedIndex: b=null} = r
      , E = _.useRef(-1)
      , x = _.useRef("")
      , M = _.useRef((o = b ?? d) != null ? o : -1)
      , A = _.useRef(null)
      , z = ct(p)
      , B = ct(v)
      , W = hn(g)
      , Z = hn(w);
    We( () => {
        l && ($u(E),
        A.current = null,
        x.current = "")
    }
    , [l]),
    We( () => {
        if (l && x.current === "") {
            var Y;
            M.current = (Y = b ?? d) != null ? Y : -1
        }
    }
    , [l, b, d]);
    const te = ct(Y => {
        Y ? u.current.typing || (u.current.typing = Y,
        B(Y)) : u.current.typing && (u.current.typing = Y,
        B(Y))
    }
    )
      , J = ct(Y => {
        function K(G, N, C) {
            const U = W.current ? W.current(N, C) : N.find(j => j?.toLocaleLowerCase().indexOf(C.toLocaleLowerCase()) === 0);
            return U ? G.indexOf(U) : -1
        }
        const V = f.current;
        if (x.current.length > 0 && x.current[0] !== " " && (K(V, V, x.current) === -1 ? te(!1) : Y.key === " " && at(Y)),
        V == null || Z.current.includes(Y.key) || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey)
            return;
        l && Y.key !== " " && (at(Y),
        te(!0)),
        V.every(G => {
            var N, C;
            return G ? ((N = G[0]) == null ? void 0 : N.toLocaleLowerCase()) !== ((C = G[1]) == null ? void 0 : C.toLocaleLowerCase()) : !0
        }
        ) && x.current === Y.key && (x.current = "",
        M.current = A.current),
        x.current += Y.key,
        $u(E),
        E.current = window.setTimeout( () => {
            x.current = "",
            M.current = A.current,
            te(!1)
        }
        , y);
        const T = M.current
          , L = K(V, [...V.slice((T || 0) + 1), ...V.slice(0, (T || 0) + 1)], x.current);
        L !== -1 ? (z(L),
        A.current = L) : Y.key !== " " && (x.current = "",
        te(!1))
    }
    )
      , re = _.useMemo( () => ({
        onKeyDown: J
    }), [J])
      , he = _.useMemo( () => ({
        onKeyDown: J,
        onKeyUp(Y) {
            Y.key === " " && te(!1)
        }
    }), [J, te]);
    return _.useMemo( () => m ? {
        reference: re,
        floating: he
    } : {}, [m, re, he])
}
const Dm = ({children: n, className: r}) => {
    const o = _.useRef(null)
      , [l,u] = _.useState(!1)
      , [f,d] = _.useState(!1);
    return _.useEffect( () => {
        o.current && o.current.scrollTop + o.current.clientHeight !== o.current.scrollHeight && d(!0)
    }
    , []),
    k.jsx("div", {
        ref: o,
        onScroll: p => {
            const v = p.target
              , {clientHeight: m, scrollTop: g, scrollHeight: y} = v;
            if (y <= 0) {
                d(!1),
                u(!1);
                return
            }
            u(g !== 0),
            g + m !== y ? d(!0) : d(!1)
        }
        ,
        className: pe("bc-filter-menu__content-container", {
            "bc-filter-menu__content-container--shadow-top": l,
            "bc-filter-menu__content-container--shadow-bottom": f
        }, r),
        children: k.jsx("div", {
            className: "bc-filter-menu__content",
            children: n
        })
    })
}
;
Dm.displayName = "BcFilterMenuContent";
const bl = _.createContext({})
  , h1 = ({className: n, children: r}) => k.jsx("div", {
    className: pe("bc-filter-menu__footer-container", n),
    children: k.jsx("div", {
        className: "bc-filter-menu__footer",
        children: r
    })
})
  , m1 = ({className: n, children: r}) => {
    const {closeMenu: o, titleId: l} = _.useContext(bl);
    return k.jsx("div", {
        className: pe("bc-filter-menu__header-container", n),
        children: k.jsxs("div", {
            className: "bc-filter-menu__header",
            children: [k.jsx("span", {
                className: "bc-filter-menu__title",
                id: l,
                children: r
            }), k.jsx("div", {
                children: k.jsx(Ir, {
                    className: "bc-filter-menu__close-btn",
                    size: "sm",
                    variant: "tertiary",
                    onClick: o,
                    tabIndex: -1,
                    "aria-label": "Close dialog",
                    children: k.jsx(yi, {
                        name: "cancel"
                    })
                })
            })]
        })
    })
}
  , Fm = ({className: n, children: r, floatingPortalId: o, initialFocus: l=0, staticArrowOffset: u=18, style: f, ...d}) => {
    const {arrowRef: p, context: v, getFloatingProps: m, isOpen: g, panelId: y, refs: w, strategy: b, x: E, y: x} = _.useContext(bl)
      , M = pe("bc-filter-menu", {
        "bc-filter-menu--open": g
    }, n)
      , A = k.jsx(Pm, {
        disabled: !g,
        context: v,
        initialFocus: l,
        modal: !1,
        closeOnFocusOut: !1,
        children: k.jsxs(k.Fragment, {
            children: [g && k.jsx("div", {
                className: "bc-filter-menu__overlay",
                children: k.jsx(s1, {})
            }), k.jsx("div", {
                className: M,
                children: k.jsx("div", {
                    "data-testid": "bc-filter-menu__panel-container",
                    ...d,
                    ...m(),
                    role: "menu",
                    className: "bc-filter-menu__panel-container",
                    id: y,
                    ref: w.setFloating,
                    style: {
                        ...f,
                        position: b,
                        top: x ?? 0,
                        left: E ?? 0
                    },
                    children: g && k.jsxs("div", {
                        className: "bc-filter-menu__panel-frame",
                        children: [k.jsx("div", {
                            className: "bc-filter-menu__arrow-svg",
                            children: k.jsx(Em, {
                                "data-testid": "bc-filter-menu__arrow",
                                ref: p,
                                context: v,
                                width: 14,
                                height: 7,
                                staticOffset: u,
                                d: "M7.8 9.8c-.4-.4-1-.4-1.4 0l-4 3.6-.4.4-1.9 1.7h14l-2-1.7-.3-.4-4-3.6Z"
                            })
                        }), k.jsx("div", {
                            className: "bc-filter-menu__panel",
                            children: r
                        })]
                    })
                })
            })]
        })
    });
    return o ? k.jsx(Om, {
        id: o,
        children: A
    }) : A
}
;
Fm.displayName = "BcFilterMenuPanel";
const v1 = ({label: n="Menu", children: r, ...o}) => {
    const {refs: l, getReferenceProps: u, panelId: f, isOpen: d} = _.useContext(bl);
    if (u === void 0)
        throw new Error("BcContentMenuButton must be used within a BcContentMenuContext");
    const p = {
        "data-testid": "bc-filter-menu-trigger__btn",
        variant: "tertiary"
    }
      , v = {
        ref: l.setReference,
        role: "button",
        "aria-haspopup": "menu",
        "aria-owns": f,
        "aria-controls": f,
        "aria-expanded": d,
        ...u()
    };
    if (!r) {
        const {className: b, ...E} = o;
        return k.jsx(Ir, {
            ...p,
            ...E,
            ...v,
            className: pe(b, d && "bc-btn--active"),
            children: n
        })
    }
    const m = _.Children.only(r);
    if (!_.isValidElement(m) || m.type !== Ir && m.type !== "button")
        return null;
    const g = m.props
      , {className: y, ...w} = g;
    return _.cloneElement(m, {
        className: pe(y, d && "bc-btn--active"),
        ...p,
        ...w,
        ...v
    })
}
  , Zt = ({children: n, className: r, floatingConfig: o, id: l, offsetOptions: u={
    mainAxis: 2
}}) => {
    const [f,d] = _.useState(o?.open ?? !1)
      , p = _.useRef(null);
    _.useEffect( () => {
        d(o?.open ?? !1)
    }
    , [o?.open]);
    const {x: v, y: m, strategy: g, refs: y, context: w} = Lm({
        open: f,
        onOpenChange: d,
        whileElementsMounted: wm,
        middleware: [$w({
            allowedPlacements: ["bottom-start", "bottom-end"],
            crossAxis: !0
        }), xm(u), Sm({
            element: p
        })],
        ...o
    })
      , b = Tm(w)
      , E = Mm(w)
      , {getReferenceProps: x, getFloatingProps: M, getItemProps: A} = Im([b, E])
      , z = gi({
        customId: l,
        prefix: "bc-filter-menu__"
    })
      , B = `${z}__title`
      , W = o?.onOpenChange ?? d
      , Z = {
        arrowRef: p,
        closeMenu: () => W(!1),
        context: w,
        getFloatingProps: M,
        getItemProps: A,
        getReferenceProps: x,
        isOpen: f,
        panelId: z,
        refs: y,
        strategy: g,
        titleId: B,
        x: v,
        y: m
    };
    return k.jsx(bl.Provider, {
        value: Z,
        children: k.jsx("div", {
            className: pe("bc-filter-menu-trigger", r),
            children: n
        })
    })
}
;
Zt.displayName = "BcFilterMenu";
Zt.Content = Dm;
Zt.Content.displayName = "BcFilterMenu.Content";
Zt.Footer = h1;
Zt.Footer.displayName = "BcFilterMenu.Footer";
Zt.Header = m1;
Zt.Header.displayName = "BcFilterMenu.Header";
Zt.Panel = Fm;
Zt.Panel.displayName = "BcFilterMenu.Panel";
Zt.Trigger = v1;
Zt.Trigger.displayName = "BcFilterMenu.Trigger";
const g1 = Object.freeze({
    bullet: "bc-list--bulleted",
    inline: "bc-list--inline",
    middot: "bc-list--middot",
    number: "bc-list--numbered"
})
  , y1 = Object.freeze({
    compact: "bc-list--compact",
    spacious: "bc-list--spacious"
})
  , Su = Object.freeze({
    ul: "ul",
    ol: "ol"
})
  , w1 = ({children: n, ...r}) => k.jsx("li", {
    role: "listitem",
    ...r,
    children: n
})
  , Nn = ({variant: n, spacing: r, isLined: o=!1, as: l=Su.ul, className: u, children: f, ...d}) => {
    const p = l;
    return l !== Su.ol && l !== Su.ul ? null : k.jsx(p, {
        className: pe("bc-list", u, n && g1[n], r && y1[r], o && "bc-list--lined"),
        role: "list",
        ...d,
        children: f
    })
}
;
Nn.Item = w1;
Nn.displayName = "BcList";
Nn.Item.displayName = "BcList.Item";
const b1 = [{
    label: "Terms & Conditions",
    url: "https://www.bugcrowd.com/terms-and-conditions/"
}, {
    label: "Privacy Policy",
    url: "https://www.bugcrowd.com/privacy/"
}, {
    label: "Security",
    url: "https://www.bugcrowd.com/solutions/security-companies"
}, {
    label: "Do Not Sell My Information",
    url: "https://www.bugcrowd.com/privacy/do-not-sell-my-information/"
}]
  , x1 = [{
    label: "Docs",
    url: "https://docs.bugcrowd.com/researchers/onboarding/welcome"
}, {
    label: "FAQ",
    url: "https://www.bugcrowd.com/hackers/faqs/"
}, {
    label: "Resources",
    url: "https://www.bugcrowd.com/resources"
}, {
    label: "Blog",
    url: "https://www.bugcrowd.com/blog"
}, {
    label: "Contact",
    url: "https://www.bugcrowd.com/about/contact"
}, {
    label: "Get Help",
    url: "https://bugcrowd-support.freshdesk.com/support/login"
}]
  , S1 = new Date().getFullYear()
  , C1 = `Copyright © 2014 – ${S1} Bugcrowd, Inc. All rights reserved.`
  , E1 = ({isSimplified: n=!1, className: r, copyrightInfo: o=C1, menuItemsRight: l=x1, menuItemsLeft: u=b1}) => k.jsxs("footer", {
    className: pe("bc-footer", r),
    children: [n && k.jsx(Nn, {
        variant: "inline",
        children: u.map(f => k.jsx(Nn.Item, {
            children: k.jsx("a", {
                href: f.url,
                children: f.label
            })
        }, f.label))
    }), !n && k.jsxs(k.Fragment, {
        children: [k.jsxs("nav", {
            className: "bc-footer__nav",
            "aria-label": "Footer navigation",
            children: [k.jsx(Nn, {
                variant: "inline",
                children: u.map(f => k.jsx(Nn.Item, {
                    children: k.jsx("a", {
                        href: f.url,
                        children: f.label
                    })
                }, f.label))
            }), l && k.jsx(Nn, {
                variant: "inline",
                children: l.map(f => k.jsx(Nn.Item, {
                    children: k.jsx("a", {
                        href: f.url,
                        children: f.label
                    })
                }, f.label))
            })]
        }), k.jsxs("div", {
            className: "bc-footer__copyright",
            children: [k.jsx("a", {
                href: "https://www.bugcrowd.com",
                children: k.jsx("span", {
                    className: "bc-footer__logo",
                    children: k.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 279 56",
                        children: [k.jsx("title", {
                            children: "Bugcrowd Logo"
                        }), k.jsx("g", {
                            fill: "currentColor",
                            children: k.jsx("path", {
                                d: "M277.12 34.27a1.87 1.87 0 0 1-1.88-1.87V5.66c0-3.12-2.54-5.66-5.66-5.66h-5.66v6.6h1.88c1.04 0 1.88.83 1.88 1.87v6.8c-2.5-2.95-6.01-4.83-9.9-4.83-7.54 0-13.65 6.94-13.65 15.55s6.11 15.55 13.65 15.55c3.96 0 7.54-1.94 10.04-5 .59 2.46 2.85 4.31 5.52 4.31H279v-6.6h-1.88zm-17.43-.28c-4.41 0-7.99-3.58-7.99-7.99s3.58-7.99 7.99-7.99 7.99 3.58 7.99 7.99-3.58 7.99-7.99 7.99zM104.36 11.14c-2.67 0-4.9 1.84-5.52 4.34-2.5-3.09-6.08-5-10.04-5-7.54 0-13.65 6.94-13.65 15.55s6.11 15.55 13.65 15.55c3.89 0 7.4-1.84 9.9-4.83v3.82c0 4.41-3.58 8.26-7.99 8.26H88.9v7.15h1.77c2.92 0 5.7-.66 8.02-2.08 4.51-2.71 7.57-7.67 7.57-13.33V19.64c0-1.04.83-1.87 1.88-1.87h1.88v-6.6zM90.68 33.98c-4.41 0-7.99-3.58-7.99-7.99S86.27 18 90.68 18s7.99 3.58 7.99 7.99-3.58 7.99-7.99 7.99zM21.22 10.45c-3.89 0-7.4 1.84-9.9 4.83V5.66C11.32 2.54 8.78 0 5.66 0H0v6.6h1.88c1.04 0 1.88.83 1.88 1.87v32.36h7.57V36.7c2.5 2.95 6.01 4.83 9.9 4.83 7.54 0 13.65-6.94 13.65-15.55 0-8.54-6.11-15.52-13.65-15.52zm-1.88 23.57c-4.41 0-7.99-3.58-7.99-7.99s3.58-7.99 7.99-7.99 7.99 3.58 7.99 7.99-3.58 7.99-7.99 7.99zM182.21 10.14c-8.58 0-15.56 6.94-15.56 15.55s6.95 15.55 15.56 15.55 15.56-6.94 15.56-15.55-6.98-15.55-15.56-15.55zm0 23.54c-4.41 0-7.99-3.58-7.99-7.99s3.58-7.99 7.99-7.99 7.99 3.58 7.99 7.99-3.58 7.99-7.99 7.99zM127.03 17.78c2.95 0 5.56 1.6 6.91 3.99l6.56-3.78a15.516 15.516 0 0 0-13.47-7.78c-8.58 0-15.56 6.98-15.56 15.55s6.98 15.55 15.56 15.55c5.76 0 10.77-3.12 13.47-7.78l-6.56-3.78a7.96 7.96 0 0 1-6.91 3.99c-4.41 0-7.99-3.58-7.99-7.99s3.58-7.99 7.99-7.99zM154.85 15.48a5.656 5.656 0 0 0-5.49-4.34h-5.66v6.6h1.88c1.04 0 1.88.83 1.88 1.87v21.21H155V25.79c0-4.41 3.58-7.99 7.99-7.99h1.88v-7.33c-3.92 0-7.5 1.91-10 5zM231.98 15.03l-3.65 13.57-4.69-17.36h-5.7l-4.69 17.39-3.65-13.57c-.76-2.26-2.88-3.89-5.38-3.89h-5.1v6.6h2.22c.83 0 1.56.56 1.81 1.32.03.07 5.83 21.8 5.83 21.8h7.61l4.2-15.62 4.2 15.62h7.61s5.83-21.73 5.83-21.8c.24-.76.97-1.32 1.81-1.32h2.22v-6.6h-5.1c-2.5-.03-4.62 1.6-5.38 3.85zM73.03 34.27v6.6h-5.66c-2.67 0-4.9-1.84-5.49-4.31-2.33 2.88-5.59 4.76-9.24 5-.1 0-.21 0-.31.03h-1.01c-.1 0-.21 0-.31-.03-5.59-.42-10-5.1-10-10.8V19.55c0-1.04-.83-1.87-1.88-1.87h-1.88v-6.6h5.66c3.13 0 5.66 2.53 5.66 5.66v10.73c0 3.61 2.95 6.56 6.56 6.56s6.56-2.95 6.56-6.56V11.08h7.57v21.28c0 1.04.83 1.87 1.88 1.87l1.88.03z"
                            })
                        })]
                    })
                })
            }), k.jsx("small", {
                children: o
            })]
        })]
    })]
});
E1.displayName = "BcFooter";
const _1 = ({isOptional: n=!1, isVisuallyHidden: r=!1, className: o, children: l, htmlFor: u, ...f}) => k.jsxs("label", {
    className: pe("bc-label", o, r && "bc-helper-sronly"),
    htmlFor: u,
    ...f,
    children: [l, n && k.jsxs(k.Fragment, {
        children: [" ", k.jsx(Zu, {
            className: "bc-helper-inlineblock bc-m-0",
            children: "(optional)"
        })]
    })]
});
_1.displayName = "BcLabel";
const fc = _.createContext({})
  , k1 = ({className: n, children: r, ...o}) => {
    const {refs: l, getReferenceProps: u, panelId: f, isOpen: d} = _.useContext(fc);
    if (u === void 0)
        throw new Error("BcMenuButton must be used within a BcMenuContext");
    return k.jsx(Ir, {
        "data-testid": "bc-menu__btn",
        variant: "tertiary",
        ...u(),
        ref: l.setReference,
        className: pe(n, d && "bc-btn--active"),
        role: "button",
        "aria-haspopup": "menu",
        "aria-owns": f,
        "aria-controls": f,
        "aria-expanded": d,
        ...o,
        children: r
    })
}
  , Am = () => k.jsx("hr", {
    "data-testid": "bc-menu__item-wrapper--separator",
    className: "bc-menu__item-wrapper bc-menu__item-wrapper--separator"
})
  , R1 = ({children: n, staticArrowOffset: r, className: o, style: l, ...u}) => {
    const {isOpen: f, context: d, getFloatingProps: p, panelId: v, refs: m, strategy: g, x: y, y: w, arrowRef: b, floatingPortalId: E, returnFocus: x} = _.useContext(fc)
      , M = k.jsx(Pm, {
        context: d,
        returnFocus: x ?? !0,
        children: k.jsx("div", {
            "data-testid": "bc-menu__panel-container",
            ...u,
            ...p(),
            role: "menu",
            "aria-expanded": !0,
            className: pe("bc-menu__panel-container", o),
            id: v,
            ref: m.setFloating,
            style: {
                ...l,
                position: g,
                top: w ?? 0,
                left: y ?? 0
            },
            children: k.jsxs("div", {
                className: "bc-menu__panel bc-panel bc-panel--lined bc-panel--shadow",
                children: [k.jsx("div", {
                    className: "bc-menu__arrow-svg",
                    children: k.jsx(Em, {
                        "data-testid": "bc-menu__arrow",
                        ref: b,
                        context: d,
                        width: 14,
                        height: 7,
                        staticOffset: r,
                        d: "M7.8 9.8c-.4-.4-1-.4-1.4 0l-4 3.6-.4.4-1.9 1.7h14l-2-1.7-.3-.4-4-3.6Z"
                    })
                }), k.jsx("div", {
                    className: "bc-panel__main",
                    children: n
                })]
            })
        })
    });
    return E ? f && k.jsx(Om, {
        id: E,
        children: M
    }) : f && M
}
  , Co = ({children: n, className: r, closeMenuOnSelect: o=!0, floatingConfig: l, floatingPortalId: u, returnFocus: f=!0, id: d, items: p, offsetOptions: v={
    mainAxis: 2
}}) => {
    const [m,g] = _.useState(0)
      , [y,w] = _.useState(!1)
      , b = _.useRef(null)
      , E = _.useRef([])
      , x = _.useRef(p.map(T => "name"in T && T.name || null))
      , {x: M, y: A, strategy: z, refs: B, context: W} = Lm({
        placement: "bottom-end",
        open: y,
        onOpenChange: w,
        whileElementsMounted: wm,
        middleware: [xm(v), Bw({
            padding: 10
        }), zw(), Sm({
            element: b
        })],
        ...l
    })
      , Z = Tm(W)
      , te = Mm(W)
      , J = d1(W, {
        enabled: !0,
        activeIndex: m,
        listRef: E,
        loop: !0,
        onNavigate: g
    })
      , re = p1(W, {
        enabled: !0,
        listRef: x,
        activeIndex: m,
        onMatch: g
    })
      , {getReferenceProps: he, getFloatingProps: Y, getItemProps: K} = Im([Z, te, J, re])
      , V = gi({
        customId: d,
        prefix: "bc-menu_"
    })
      , ne = {
        arrowRef: b,
        closeMenu: () => w(!1),
        context: W,
        getFloatingProps: Y,
        getItemProps: K,
        getReferenceProps: he,
        isOpen: y,
        panelId: d || V,
        refs: B,
        strategy: z,
        x: M,
        y: A,
        floatingPortalId: u,
        returnFocus: f
    };
    return k.jsx(fc.Provider, {
        value: ne,
        children: k.jsxs("div", {
            className: pe("bc-menu", r),
            children: [n, k.jsx(R1, {
                children: p.map( (T, L) => {
                    if (!("name"in T))
                        return k.jsx(Am, {}, `separator_${L}`);
                    const {name: G, render: N, shouldRender: C=!0} = T;
                    if (!C)
                        return null;
                    const U = {
                        onFocus: () => {
                            m !== L && g(L)
                        }
                        ,
                        tabIndex: m === L ? 0 : void 0,
                        ref: j => {
                            j && (E.current[L] = j)
                        }
                        ,
                        role: "menuitem"
                    };
                    return k.jsx("div", {
                        className: pe("bc-menu__item-wrapper"),
                        onClick: () => {
                            o && w(!1)
                        }
                        ,
                        children: N?.(U)
                    }, G)
                }
                )
            })]
        })
    })
}
;
Co.Button = k1;
Co.ItemSeparator = Am;
Co.displayName = "BcMenu";
Co.Button.displayName = "BcMenu.Button";
Co.ItemSeparator.displayName = "BcMenu.ItemSeparator";
var Vs = {
    exports: {}
}, ir = {}, Cu = {
    exports: {}
}, Eu, Xp;
function O1() {
    if (Xp)
        return Eu;
    Xp = 1;
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Eu = n,
    Eu
}
var _u, Jp;
function N1() {
    if (Jp)
        return _u;
    Jp = 1;
    var n = O1();
    function r() {}
    function o() {}
    return o.resetWarningCache = r,
    _u = function() {
        function l(d, p, v, m, g, y) {
            if (y !== n) {
                var w = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw w.name = "Invariant Violation",
                w
            }
        }
        l.isRequired = l;
        function u() {
            return l
        }
        var f = {
            array: l,
            bigint: l,
            bool: l,
            func: l,
            number: l,
            object: l,
            string: l,
            symbol: l,
            any: l,
            arrayOf: u,
            element: l,
            elementType: l,
            instanceOf: u,
            node: l,
            objectOf: u,
            oneOf: u,
            oneOfType: u,
            shape: u,
            exact: u,
            checkPropTypes: o,
            resetWarningCache: r
        };
        return f.PropTypes = f,
        f
    }
    ,
    _u
}
var Zp;
function jm() {
    return Zp || (Zp = 1,
    Cu.exports = N1()()),
    Cu.exports
}
var Qs = {
    exports: {}
}, zt = {}, qs = {
    exports: {}
}, eh;
function zm() {
    return eh || (eh = 1,
    (function(n, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = g;
        var o = "none"
          , l = "contents"
          , u = /input|select|textarea|button|object|iframe/;
        function f(y, w) {
            return w.getPropertyValue("overflow") !== "visible" || y.scrollWidth <= 0 && y.scrollHeight <= 0
        }
        function d(y) {
            var w = y.offsetWidth <= 0 && y.offsetHeight <= 0;
            if (w && !y.innerHTML)
                return !0;
            try {
                var b = window.getComputedStyle(y)
                  , E = b.getPropertyValue("display");
                return w ? E !== l && f(y, b) : E === o
            } catch {
                return console.warn("Failed to inspect element style"),
                !1
            }
        }
        function p(y) {
            for (var w = y, b = y.getRootNode && y.getRootNode(); w && w !== document.body; ) {
                if (b && w === b && (w = b.host.parentNode),
                d(w))
                    return !1;
                w = w.parentNode
            }
            return !0
        }
        function v(y, w) {
            var b = y.nodeName.toLowerCase()
              , E = u.test(b) && !y.disabled || b === "a" && y.href || w;
            return E && p(y)
        }
        function m(y) {
            var w = y.getAttribute("tabindex");
            w === null && (w = void 0);
            var b = isNaN(w);
            return (b || w >= 0) && v(y, !b)
        }
        function g(y) {
            var w = [].slice.call(y.querySelectorAll("*"), 0).reduce(function(b, E) {
                return b.concat(E.shadowRoot ? g(E.shadowRoot) : [E])
            }, []);
            return w.filter(m)
        }
        n.exports = r.default
    }
    )(qs, qs.exports)),
    qs.exports
}
var th;
function P1() {
    if (th)
        return zt;
    th = 1,
    Object.defineProperty(zt, "__esModule", {
        value: !0
    }),
    zt.resetState = d,
    zt.log = p,
    zt.handleBlur = v,
    zt.handleFocus = m,
    zt.markForFocusLater = g,
    zt.returnFocus = y,
    zt.popWithoutFocus = w,
    zt.setupScopedFocus = b,
    zt.teardownScopedFocus = E;
    var n = zm()
      , r = o(n);
    function o(x) {
        return x && x.__esModule ? x : {
            default: x
        }
    }
    var l = []
      , u = null
      , f = !1;
    function d() {
        l = []
    }
    function p() {}
    function v() {
        f = !0
    }
    function m() {
        if (f) {
            if (f = !1,
            !u)
                return;
            setTimeout(function() {
                if (!u.contains(document.activeElement)) {
                    var x = (0,
                    r.default)(u)[0] || u;
                    x.focus()
                }
            }, 0)
        }
    }
    function g() {
        l.push(document.activeElement)
    }
    function y() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
          , M = null;
        try {
            l.length !== 0 && (M = l.pop(),
            M.focus({
                preventScroll: x
            }));
            return
        } catch {
            console.warn(["You tried to return focus to", M, "but it is not in the DOM anymore"].join(" "))
        }
    }
    function w() {
        l.length > 0 && l.pop()
    }
    function b(x) {
        u = x,
        window.addEventListener ? (window.addEventListener("blur", v, !1),
        document.addEventListener("focus", m, !0)) : (window.attachEvent("onBlur", v),
        document.attachEvent("onFocus", m))
    }
    function E() {
        u = null,
        window.addEventListener ? (window.removeEventListener("blur", v),
        document.removeEventListener("focus", m)) : (window.detachEvent("onBlur", v),
        document.detachEvent("onFocus", m))
    }
    return zt
}
var Ks = {
    exports: {}
}, nh;
function T1() {
    return nh || (nh = 1,
    (function(n, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = d;
        var o = zm()
          , l = u(o);
        function u(p) {
            return p && p.__esModule ? p : {
                default: p
            }
        }
        function f() {
            var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
            return p.activeElement.shadowRoot ? f(p.activeElement.shadowRoot) : p.activeElement
        }
        function d(p, v) {
            var m = (0,
            l.default)(p);
            if (!m.length) {
                v.preventDefault();
                return
            }
            var g = void 0
              , y = v.shiftKey
              , w = m[0]
              , b = m[m.length - 1]
              , E = f();
            if (p === E) {
                if (!y)
                    return;
                g = b
            }
            if (b === E && !y && (g = w),
            w === E && y && (g = b),
            g) {
                v.preventDefault(),
                g.focus();
                return
            }
            var x = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent)
              , M = x != null && x[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
            if (M) {
                var A = m.indexOf(E);
                if (A > -1 && (A += y ? -1 : 1),
                g = m[A],
                typeof g > "u") {
                    v.preventDefault(),
                    g = y ? b : w,
                    g.focus();
                    return
                }
                v.preventDefault(),
                g.focus()
            }
        }
        n.exports = r.default
    }
    )(Ks, Ks.exports)),
    Ks.exports
}
var Jt = {}, ku, rh;
function M1() {
    if (rh)
        return ku;
    rh = 1;
    var n = function() {};
    return ku = n,
    ku
}
var cn = {}
  , Ru = {
    exports: {}
};
var ih;
function L1() {
    return ih || (ih = 1,
    (function(n) {
        (function() {
            var r = !!(typeof window < "u" && window.document && window.document.createElement)
              , o = {
                canUseDOM: r,
                canUseWorkers: typeof Worker < "u",
                canUseEventListeners: r && !!(window.addEventListener || window.attachEvent),
                canUseViewport: r && !!window.screen
            };
            n.exports ? n.exports = o : window.ExecutionEnvironment = o
        }
        )()
    }
    )(Ru)),
    Ru.exports
}
var oh;
function dc() {
    if (oh)
        return cn;
    oh = 1,
    Object.defineProperty(cn, "__esModule", {
        value: !0
    }),
    cn.canUseDOM = cn.SafeNodeList = cn.SafeHTMLCollection = void 0;
    var n = L1()
      , r = o(n);
    function o(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var l = r.default
      , u = l.canUseDOM ? window.HTMLElement : {};
    return cn.SafeHTMLCollection = l.canUseDOM ? window.HTMLCollection : {},
    cn.SafeNodeList = l.canUseDOM ? window.NodeList : {},
    cn.canUseDOM = l.canUseDOM,
    cn.default = u,
    cn
}
var sh;
function Bm() {
    if (sh)
        return Jt;
    sh = 1,
    Object.defineProperty(Jt, "__esModule", {
        value: !0
    }),
    Jt.resetState = f,
    Jt.log = d,
    Jt.assertNodeList = p,
    Jt.setElement = v,
    Jt.validateElement = m,
    Jt.hide = g,
    Jt.show = y,
    Jt.documentNotReadyOrSSRTesting = w;
    var n = M1()
      , r = l(n)
      , o = dc();
    function l(b) {
        return b && b.__esModule ? b : {
            default: b
        }
    }
    var u = null;
    function f() {
        u && (u.removeAttribute ? u.removeAttribute("aria-hidden") : u.length != null ? u.forEach(function(b) {
            return b.removeAttribute("aria-hidden")
        }) : document.querySelectorAll(u).forEach(function(b) {
            return b.removeAttribute("aria-hidden")
        })),
        u = null
    }
    function d() {}
    function p(b, E) {
        if (!b || !b.length)
            throw new Error("react-modal: No elements were found for selector " + E + ".")
    }
    function v(b) {
        var E = b;
        if (typeof E == "string" && o.canUseDOM) {
            var x = document.querySelectorAll(E);
            p(x, E),
            E = x
        }
        return u = E || u,
        u
    }
    function m(b) {
        var E = b || u;
        return E ? Array.isArray(E) || E instanceof HTMLCollection || E instanceof NodeList ? E : [E] : ((0,
        r.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")),
        [])
    }
    function g(b) {
        var E = !0
          , x = !1
          , M = void 0;
        try {
            for (var A = m(b)[Symbol.iterator](), z; !(E = (z = A.next()).done); E = !0) {
                var B = z.value;
                B.setAttribute("aria-hidden", "true")
            }
        } catch (W) {
            x = !0,
            M = W
        } finally {
            try {
                !E && A.return && A.return()
            } finally {
                if (x)
                    throw M
            }
        }
    }
    function y(b) {
        var E = !0
          , x = !1
          , M = void 0;
        try {
            for (var A = m(b)[Symbol.iterator](), z; !(E = (z = A.next()).done); E = !0) {
                var B = z.value;
                B.removeAttribute("aria-hidden")
            }
        } catch (W) {
            x = !0,
            M = W
        } finally {
            try {
                !E && A.return && A.return()
            } finally {
                if (x)
                    throw M
            }
        }
    }
    function w() {
        u = null
    }
    return Jt
}
var Rr = {}, lh;
function I1() {
    if (lh)
        return Rr;
    lh = 1,
    Object.defineProperty(Rr, "__esModule", {
        value: !0
    }),
    Rr.resetState = l,
    Rr.log = u;
    var n = {}
      , r = {};
    function o(m, g) {
        m.classList.remove(g)
    }
    function l() {
        var m = document.getElementsByTagName("html")[0];
        for (var g in n)
            o(m, n[g]);
        var y = document.body;
        for (var w in r)
            o(y, r[w]);
        n = {},
        r = {}
    }
    function u() {}
    var f = function(g, y) {
        return g[y] || (g[y] = 0),
        g[y] += 1,
        y
    }
      , d = function(g, y) {
        return g[y] && (g[y] -= 1),
        y
    }
      , p = function(g, y, w) {
        w.forEach(function(b) {
            f(y, b),
            g.add(b)
        })
    }
      , v = function(g, y, w) {
        w.forEach(function(b) {
            d(y, b),
            y[b] === 0 && g.remove(b)
        })
    };
    return Rr.add = function(g, y) {
        return p(g.classList, g.nodeName.toLowerCase() == "html" ? n : r, y.split(" "))
    }
    ,
    Rr.remove = function(g, y) {
        return v(g.classList, g.nodeName.toLowerCase() == "html" ? n : r, y.split(" "))
    }
    ,
    Rr
}
var fi = {}, ah;
function $m() {
    if (ah)
        return fi;
    ah = 1,
    Object.defineProperty(fi, "__esModule", {
        value: !0
    }),
    fi.log = l,
    fi.resetState = u;
    function n(f, d) {
        if (!(f instanceof d))
            throw new TypeError("Cannot call a class as a function")
    }
    var r = function f() {
        var d = this;
        n(this, f),
        this.register = function(p) {
            d.openInstances.indexOf(p) === -1 && (d.openInstances.push(p),
            d.emit("register"))
        }
        ,
        this.deregister = function(p) {
            var v = d.openInstances.indexOf(p);
            v !== -1 && (d.openInstances.splice(v, 1),
            d.emit("deregister"))
        }
        ,
        this.subscribe = function(p) {
            d.subscribers.push(p)
        }
        ,
        this.emit = function(p) {
            d.subscribers.forEach(function(v) {
                return v(p, d.openInstances.slice())
            })
        }
        ,
        this.openInstances = [],
        this.subscribers = []
    }
      , o = new r;
    function l() {
        console.log("portalOpenInstances ----------"),
        console.log(o.openInstances.length),
        o.openInstances.forEach(function(f) {
            return console.log(f)
        }),
        console.log("end portalOpenInstances ----------")
    }
    function u() {
        o = new r
    }
    return fi.default = o,
    fi
}
var oo = {}, uh;
function D1() {
    if (uh)
        return oo;
    uh = 1,
    Object.defineProperty(oo, "__esModule", {
        value: !0
    }),
    oo.resetState = d,
    oo.log = p;
    var n = $m()
      , r = o(n);
    function o(g) {
        return g && g.__esModule ? g : {
            default: g
        }
    }
    var l = void 0
      , u = void 0
      , f = [];
    function d() {
        for (var g = [l, u], y = 0; y < g.length; y++) {
            var w = g[y];
            w && w.parentNode && w.parentNode.removeChild(w)
        }
        l = u = null,
        f = []
    }
    function p() {
        console.log("bodyTrap ----------"),
        console.log(f.length);
        for (var g = [l, u], y = 0; y < g.length; y++) {
            var w = g[y]
              , b = w || {};
            console.log(b.nodeName, b.className, b.id)
        }
        console.log("edn bodyTrap ----------")
    }
    function v() {
        f.length !== 0 && f[f.length - 1].focusContent()
    }
    function m(g, y) {
        !l && !u && (l = document.createElement("div"),
        l.setAttribute("data-react-modal-body-trap", ""),
        l.style.position = "absolute",
        l.style.opacity = "0",
        l.setAttribute("tabindex", "0"),
        l.addEventListener("focus", v),
        u = l.cloneNode(),
        u.addEventListener("focus", v)),
        f = y,
        f.length > 0 ? (document.body.firstChild !== l && document.body.insertBefore(l, document.body.firstChild),
        document.body.lastChild !== u && document.body.appendChild(u)) : (l.parentElement && l.parentElement.removeChild(l),
        u.parentElement && u.parentElement.removeChild(u))
    }
    return r.default.subscribe(m),
    oo
}
var ch;
function F1() {
    return ch || (ch = 1,
    (function(n, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(T) {
            for (var L = 1; L < arguments.length; L++) {
                var G = arguments[L];
                for (var N in G)
                    Object.prototype.hasOwnProperty.call(G, N) && (T[N] = G[N])
            }
            return T
        }
          , l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
            return typeof T
        }
        : function(T) {
            return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
        }
          , u = (function() {
            function T(L, G) {
                for (var N = 0; N < G.length; N++) {
                    var C = G[N];
                    C.enumerable = C.enumerable || !1,
                    C.configurable = !0,
                    "value"in C && (C.writable = !0),
                    Object.defineProperty(L, C.key, C)
                }
            }
            return function(L, G, N) {
                return G && T(L.prototype, G),
                N && T(L, N),
                L
            }
        }
        )()
          , f = go()
          , d = jm()
          , p = Z(d)
          , v = P1()
          , m = W(v)
          , g = T1()
          , y = Z(g)
          , w = Bm()
          , b = W(w)
          , E = I1()
          , x = W(E)
          , M = dc()
          , A = Z(M)
          , z = $m()
          , B = Z(z);
        D1();
        function W(T) {
            if (T && T.__esModule)
                return T;
            var L = {};
            if (T != null)
                for (var G in T)
                    Object.prototype.hasOwnProperty.call(T, G) && (L[G] = T[G]);
            return L.default = T,
            L
        }
        function Z(T) {
            return T && T.__esModule ? T : {
                default: T
            }
        }
        function te(T, L) {
            if (!(T instanceof L))
                throw new TypeError("Cannot call a class as a function")
        }
        function J(T, L) {
            if (!T)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return L && (typeof L == "object" || typeof L == "function") ? L : T
        }
        function re(T, L) {
            if (typeof L != "function" && L !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof L);
            T.prototype = Object.create(L && L.prototype, {
                constructor: {
                    value: T,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            L && (Object.setPrototypeOf ? Object.setPrototypeOf(T, L) : T.__proto__ = L)
        }
        var he = {
            overlay: "ReactModal__Overlay",
            content: "ReactModal__Content"
        }
          , Y = function(L) {
            return L.code === "Tab" || L.keyCode === 9
        }
          , K = function(L) {
            return L.code === "Escape" || L.keyCode === 27
        }
          , V = 0
          , ne = (function(T) {
            re(L, T);
            function L(G) {
                te(this, L);
                var N = J(this, (L.__proto__ || Object.getPrototypeOf(L)).call(this, G));
                return N.setOverlayRef = function(C) {
                    N.overlay = C,
                    N.props.overlayRef && N.props.overlayRef(C)
                }
                ,
                N.setContentRef = function(C) {
                    N.content = C,
                    N.props.contentRef && N.props.contentRef(C)
                }
                ,
                N.afterClose = function() {
                    var C = N.props
                      , U = C.appElement
                      , j = C.ariaHideApp
                      , O = C.htmlOpenClassName
                      , $ = C.bodyOpenClassName
                      , ee = C.parentSelector
                      , ae = ee && ee().ownerDocument || document;
                    $ && x.remove(ae.body, $),
                    O && x.remove(ae.getElementsByTagName("html")[0], O),
                    j && V > 0 && (V -= 1,
                    V === 0 && b.show(U)),
                    N.props.shouldFocusAfterRender && (N.props.shouldReturnFocusAfterClose ? (m.returnFocus(N.props.preventScroll),
                    m.teardownScopedFocus()) : m.popWithoutFocus()),
                    N.props.onAfterClose && N.props.onAfterClose(),
                    B.default.deregister(N)
                }
                ,
                N.open = function() {
                    N.beforeOpen(),
                    N.state.afterOpen && N.state.beforeClose ? (clearTimeout(N.closeTimer),
                    N.setState({
                        beforeClose: !1
                    })) : (N.props.shouldFocusAfterRender && (m.setupScopedFocus(N.node),
                    m.markForFocusLater()),
                    N.setState({
                        isOpen: !0
                    }, function() {
                        N.openAnimationFrame = requestAnimationFrame(function() {
                            N.setState({
                                afterOpen: !0
                            }),
                            N.props.isOpen && N.props.onAfterOpen && N.props.onAfterOpen({
                                overlayEl: N.overlay,
                                contentEl: N.content
                            })
                        })
                    }))
                }
                ,
                N.close = function() {
                    N.props.closeTimeoutMS > 0 ? N.closeWithTimeout() : N.closeWithoutTimeout()
                }
                ,
                N.focusContent = function() {
                    return N.content && !N.contentHasFocus() && N.content.focus({
                        preventScroll: !0
                    })
                }
                ,
                N.closeWithTimeout = function() {
                    var C = Date.now() + N.props.closeTimeoutMS;
                    N.setState({
                        beforeClose: !0,
                        closesAt: C
                    }, function() {
                        N.closeTimer = setTimeout(N.closeWithoutTimeout, N.state.closesAt - Date.now())
                    })
                }
                ,
                N.closeWithoutTimeout = function() {
                    N.setState({
                        beforeClose: !1,
                        isOpen: !1,
                        afterOpen: !1,
                        closesAt: null
                    }, N.afterClose)
                }
                ,
                N.handleKeyDown = function(C) {
                    Y(C) && (0,
                    y.default)(N.content, C),
                    N.props.shouldCloseOnEsc && K(C) && (C.stopPropagation(),
                    N.requestClose(C))
                }
                ,
                N.handleOverlayOnClick = function(C) {
                    N.shouldClose === null && (N.shouldClose = !0),
                    N.shouldClose && N.props.shouldCloseOnOverlayClick && (N.ownerHandlesClose() ? N.requestClose(C) : N.focusContent()),
                    N.shouldClose = null
                }
                ,
                N.handleContentOnMouseUp = function() {
                    N.shouldClose = !1
                }
                ,
                N.handleOverlayOnMouseDown = function(C) {
                    !N.props.shouldCloseOnOverlayClick && C.target == N.overlay && C.preventDefault()
                }
                ,
                N.handleContentOnClick = function() {
                    N.shouldClose = !1
                }
                ,
                N.handleContentOnMouseDown = function() {
                    N.shouldClose = !1
                }
                ,
                N.requestClose = function(C) {
                    return N.ownerHandlesClose() && N.props.onRequestClose(C)
                }
                ,
                N.ownerHandlesClose = function() {
                    return N.props.onRequestClose
                }
                ,
                N.shouldBeClosed = function() {
                    return !N.state.isOpen && !N.state.beforeClose
                }
                ,
                N.contentHasFocus = function() {
                    return document.activeElement === N.content || N.content.contains(document.activeElement)
                }
                ,
                N.buildClassName = function(C, U) {
                    var j = (typeof U > "u" ? "undefined" : l(U)) === "object" ? U : {
                        base: he[C],
                        afterOpen: he[C] + "--after-open",
                        beforeClose: he[C] + "--before-close"
                    }
                      , O = j.base;
                    return N.state.afterOpen && (O = O + " " + j.afterOpen),
                    N.state.beforeClose && (O = O + " " + j.beforeClose),
                    typeof U == "string" && U ? O + " " + U : O
                }
                ,
                N.attributesFromObject = function(C, U) {
                    return Object.keys(U).reduce(function(j, O) {
                        return j[C + "-" + O] = U[O],
                        j
                    }, {})
                }
                ,
                N.state = {
                    afterOpen: !1,
                    beforeClose: !1
                },
                N.shouldClose = null,
                N.moveFromContentToOverlay = null,
                N
            }
            return u(L, [{
                key: "componentDidMount",
                value: function() {
                    this.props.isOpen && this.open()
                }
            }, {
                key: "componentDidUpdate",
                value: function(N, C) {
                    this.props.isOpen && !N.isOpen ? this.open() : !this.props.isOpen && N.isOpen && this.close(),
                    this.props.shouldFocusAfterRender && this.state.isOpen && !C.isOpen && this.focusContent()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.state.isOpen && this.afterClose(),
                    clearTimeout(this.closeTimer),
                    cancelAnimationFrame(this.openAnimationFrame)
                }
            }, {
                key: "beforeOpen",
                value: function() {
                    var N = this.props
                      , C = N.appElement
                      , U = N.ariaHideApp
                      , j = N.htmlOpenClassName
                      , O = N.bodyOpenClassName
                      , $ = N.parentSelector
                      , ee = $ && $().ownerDocument || document;
                    O && x.add(ee.body, O),
                    j && x.add(ee.getElementsByTagName("html")[0], j),
                    U && (V += 1,
                    b.hide(C)),
                    B.default.register(this)
                }
            }, {
                key: "render",
                value: function() {
                    var N = this.props
                      , C = N.id
                      , U = N.className
                      , j = N.overlayClassName
                      , O = N.defaultStyles
                      , $ = N.children
                      , ee = U ? {} : O.content
                      , ae = j ? {} : O.overlay;
                    if (this.shouldBeClosed())
                        return null;
                    var ue = {
                        ref: this.setOverlayRef,
                        className: this.buildClassName("overlay", j),
                        style: o({}, ae, this.props.style.overlay),
                        onClick: this.handleOverlayOnClick,
                        onMouseDown: this.handleOverlayOnMouseDown
                    }
                      , me = o({
                        id: C,
                        ref: this.setContentRef,
                        style: o({}, ee, this.props.style.content),
                        className: this.buildClassName("content", U),
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContentOnMouseDown,
                        onMouseUp: this.handleContentOnMouseUp,
                        onClick: this.handleContentOnClick,
                        role: this.props.role,
                        "aria-label": this.props.contentLabel
                    }, this.attributesFromObject("aria", o({
                        modal: !0
                    }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                        "data-testid": this.props.testId
                    })
                      , xe = this.props.contentElement(me, $);
                    return this.props.overlayElement(ue, xe)
                }
            }]),
            L
        }
        )(f.Component);
        ne.defaultProps = {
            style: {
                overlay: {},
                content: {}
            },
            defaultStyles: {}
        },
        ne.propTypes = {
            isOpen: p.default.bool.isRequired,
            defaultStyles: p.default.shape({
                content: p.default.object,
                overlay: p.default.object
            }),
            style: p.default.shape({
                content: p.default.object,
                overlay: p.default.object
            }),
            className: p.default.oneOfType([p.default.string, p.default.object]),
            overlayClassName: p.default.oneOfType([p.default.string, p.default.object]),
            parentSelector: p.default.func,
            bodyOpenClassName: p.default.string,
            htmlOpenClassName: p.default.string,
            ariaHideApp: p.default.bool,
            appElement: p.default.oneOfType([p.default.instanceOf(A.default), p.default.instanceOf(M.SafeHTMLCollection), p.default.instanceOf(M.SafeNodeList), p.default.arrayOf(p.default.instanceOf(A.default))]),
            onAfterOpen: p.default.func,
            onAfterClose: p.default.func,
            onRequestClose: p.default.func,
            closeTimeoutMS: p.default.number,
            shouldFocusAfterRender: p.default.bool,
            shouldCloseOnOverlayClick: p.default.bool,
            shouldReturnFocusAfterClose: p.default.bool,
            preventScroll: p.default.bool,
            role: p.default.string,
            contentLabel: p.default.string,
            aria: p.default.object,
            data: p.default.object,
            children: p.default.node,
            shouldCloseOnEsc: p.default.bool,
            overlayRef: p.default.func,
            contentRef: p.default.func,
            id: p.default.string,
            overlayElement: p.default.func,
            contentElement: p.default.func,
            testId: p.default.string
        },
        r.default = ne,
        n.exports = r.default
    }
    )(Qs, Qs.exports)),
    Qs.exports
}
function Um() {
    var n = this.constructor.getDerivedStateFromProps(this.props, this.state);
    n != null && this.setState(n)
}
function Wm(n) {
    function r(o) {
        var l = this.constructor.getDerivedStateFromProps(n, o);
        return l ?? null
    }
    this.setState(r.bind(this))
}
function Hm(n, r) {
    try {
        var o = this.props
          , l = this.state;
        this.props = n,
        this.state = r,
        this.__reactInternalSnapshotFlag = !0,
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(o, l)
    } finally {
        this.props = o,
        this.state = l
    }
}
Um.__suppressDeprecationWarning = !0;
Wm.__suppressDeprecationWarning = !0;
Hm.__suppressDeprecationWarning = !0;
function A1(n) {
    var r = n.prototype;
    if (!r || !r.isReactComponent)
        throw new Error("Can only polyfill class components");
    if (typeof n.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function")
        return n;
    var o = null
      , l = null
      , u = null;
    if (typeof r.componentWillMount == "function" ? o = "componentWillMount" : typeof r.UNSAFE_componentWillMount == "function" && (o = "UNSAFE_componentWillMount"),
    typeof r.componentWillReceiveProps == "function" ? l = "componentWillReceiveProps" : typeof r.UNSAFE_componentWillReceiveProps == "function" && (l = "UNSAFE_componentWillReceiveProps"),
    typeof r.componentWillUpdate == "function" ? u = "componentWillUpdate" : typeof r.UNSAFE_componentWillUpdate == "function" && (u = "UNSAFE_componentWillUpdate"),
    o !== null || l !== null || u !== null) {
        var f = n.displayName || n.name
          , d = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + f + " uses " + d + " but also contains the following legacy lifecycles:" + (o !== null ? `
  ` + o : "") + (l !== null ? `
  ` + l : "") + (u !== null ? `
  ` + u : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)
    }
    if (typeof n.getDerivedStateFromProps == "function" && (r.componentWillMount = Um,
    r.componentWillReceiveProps = Wm),
    typeof r.getSnapshotBeforeUpdate == "function") {
        if (typeof r.componentDidUpdate != "function")
            throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        r.componentWillUpdate = Hm;
        var p = r.componentDidUpdate;
        r.componentDidUpdate = function(m, g, y) {
            var w = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : y;
            p.call(this, m, g, w)
        }
    }
    return n
}
const j1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    polyfill: A1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , z1 = Cy(j1);
var fh;
function B1() {
    if (fh)
        return ir;
    fh = 1,
    Object.defineProperty(ir, "__esModule", {
        value: !0
    }),
    ir.bodyOpenClassName = ir.portalClassName = void 0;
    var n = Object.assign || function(K) {
        for (var V = 1; V < arguments.length; V++) {
            var ne = arguments[V];
            for (var T in ne)
                Object.prototype.hasOwnProperty.call(ne, T) && (K[T] = ne[T])
        }
        return K
    }
      , r = (function() {
        function K(V, ne) {
            for (var T = 0; T < ne.length; T++) {
                var L = ne[T];
                L.enumerable = L.enumerable || !1,
                L.configurable = !0,
                "value"in L && (L.writable = !0),
                Object.defineProperty(V, L.key, L)
            }
        }
        return function(V, ne, T) {
            return ne && K(V.prototype, ne),
            T && K(V, T),
            V
        }
    }
    )()
      , o = go()
      , l = M(o)
      , u = oc()
      , f = M(u)
      , d = jm()
      , p = M(d)
      , v = F1()
      , m = M(v)
      , g = Bm()
      , y = x(g)
      , w = dc()
      , b = M(w)
      , E = z1;
    function x(K) {
        if (K && K.__esModule)
            return K;
        var V = {};
        if (K != null)
            for (var ne in K)
                Object.prototype.hasOwnProperty.call(K, ne) && (V[ne] = K[ne]);
        return V.default = K,
        V
    }
    function M(K) {
        return K && K.__esModule ? K : {
            default: K
        }
    }
    function A(K, V) {
        if (!(K instanceof V))
            throw new TypeError("Cannot call a class as a function")
    }
    function z(K, V) {
        if (!K)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return V && (typeof V == "object" || typeof V == "function") ? V : K
    }
    function B(K, V) {
        if (typeof V != "function" && V !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof V);
        K.prototype = Object.create(V && V.prototype, {
            constructor: {
                value: K,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        V && (Object.setPrototypeOf ? Object.setPrototypeOf(K, V) : K.__proto__ = V)
    }
    var W = ir.portalClassName = "ReactModalPortal"
      , Z = ir.bodyOpenClassName = "ReactModal__Body--open"
      , te = w.canUseDOM && f.default.createPortal !== void 0
      , J = function(V) {
        return document.createElement(V)
    }
      , re = function() {
        return te ? f.default.createPortal : f.default.unstable_renderSubtreeIntoContainer
    };
    function he(K) {
        return K()
    }
    var Y = (function(K) {
        B(V, K);
        function V() {
            var ne, T, L, G;
            A(this, V);
            for (var N = arguments.length, C = Array(N), U = 0; U < N; U++)
                C[U] = arguments[U];
            return G = (T = (L = z(this, (ne = V.__proto__ || Object.getPrototypeOf(V)).call.apply(ne, [this].concat(C))),
            L),
            L.removePortal = function() {
                !te && f.default.unmountComponentAtNode(L.node);
                var j = he(L.props.parentSelector);
                j && j.contains(L.node) ? j.removeChild(L.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
            }
            ,
            L.portalRef = function(j) {
                L.portal = j
            }
            ,
            L.renderPortal = function(j) {
                var O = re()
                  , $ = O(L, l.default.createElement(m.default, n({
                    defaultStyles: V.defaultStyles
                }, j)), L.node);
                L.portalRef($)
            }
            ,
            T),
            z(L, G)
        }
        return r(V, [{
            key: "componentDidMount",
            value: function() {
                if (w.canUseDOM) {
                    te || (this.node = J("div")),
                    this.node.className = this.props.portalClassName;
                    var T = he(this.props.parentSelector);
                    T.appendChild(this.node),
                    !te && this.renderPortal(this.props)
                }
            }
        }, {
            key: "getSnapshotBeforeUpdate",
            value: function(T) {
                var L = he(T.parentSelector)
                  , G = he(this.props.parentSelector);
                return {
                    prevParent: L,
                    nextParent: G
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function(T, L, G) {
                if (w.canUseDOM) {
                    var N = this.props
                      , C = N.isOpen
                      , U = N.portalClassName;
                    T.portalClassName !== U && (this.node.className = U);
                    var j = G.prevParent
                      , O = G.nextParent;
                    O !== j && (j.removeChild(this.node),
                    O.appendChild(this.node)),
                    !(!T.isOpen && !C) && !te && this.renderPortal(this.props)
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (!(!w.canUseDOM || !this.node || !this.portal)) {
                    var T = this.portal.state
                      , L = Date.now()
                      , G = T.isOpen && this.props.closeTimeoutMS && (T.closesAt || L + this.props.closeTimeoutMS);
                    G ? (T.beforeClose || this.portal.closeWithTimeout(),
                    setTimeout(this.removePortal, G - L)) : this.removePortal()
                }
            }
        }, {
            key: "render",
            value: function() {
                if (!w.canUseDOM || !te)
                    return null;
                !this.node && te && (this.node = J("div"));
                var T = re();
                return T(l.default.createElement(m.default, n({
                    ref: this.portalRef,
                    defaultStyles: V.defaultStyles
                }, this.props)), this.node)
            }
        }], [{
            key: "setAppElement",
            value: function(T) {
                y.setElement(T)
            }
        }]),
        V
    }
    )(o.Component);
    return Y.propTypes = {
        isOpen: p.default.bool.isRequired,
        style: p.default.shape({
            content: p.default.object,
            overlay: p.default.object
        }),
        portalClassName: p.default.string,
        bodyOpenClassName: p.default.string,
        htmlOpenClassName: p.default.string,
        className: p.default.oneOfType([p.default.string, p.default.shape({
            base: p.default.string.isRequired,
            afterOpen: p.default.string.isRequired,
            beforeClose: p.default.string.isRequired
        })]),
        overlayClassName: p.default.oneOfType([p.default.string, p.default.shape({
            base: p.default.string.isRequired,
            afterOpen: p.default.string.isRequired,
            beforeClose: p.default.string.isRequired
        })]),
        appElement: p.default.oneOfType([p.default.instanceOf(b.default), p.default.instanceOf(w.SafeHTMLCollection), p.default.instanceOf(w.SafeNodeList), p.default.arrayOf(p.default.instanceOf(b.default))]),
        onAfterOpen: p.default.func,
        onRequestClose: p.default.func,
        closeTimeoutMS: p.default.number,
        ariaHideApp: p.default.bool,
        shouldFocusAfterRender: p.default.bool,
        shouldCloseOnOverlayClick: p.default.bool,
        shouldReturnFocusAfterClose: p.default.bool,
        preventScroll: p.default.bool,
        parentSelector: p.default.func,
        aria: p.default.object,
        data: p.default.object,
        role: p.default.string,
        contentLabel: p.default.string,
        shouldCloseOnEsc: p.default.bool,
        overlayRef: p.default.func,
        contentRef: p.default.func,
        id: p.default.string,
        overlayElement: p.default.func,
        contentElement: p.default.func
    },
    Y.defaultProps = {
        isOpen: !1,
        portalClassName: W,
        bodyOpenClassName: Z,
        role: "dialog",
        ariaHideApp: !0,
        closeTimeoutMS: 0,
        shouldFocusAfterRender: !0,
        shouldCloseOnEsc: !0,
        shouldCloseOnOverlayClick: !0,
        shouldReturnFocusAfterClose: !0,
        preventScroll: !1,
        parentSelector: function() {
            return document.body
        },
        overlayElement: function(V, ne) {
            return l.default.createElement("div", V, ne)
        },
        contentElement: function(V, ne) {
            return l.default.createElement("div", V, ne)
        }
    },
    Y.defaultStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px"
        }
    },
    (0,
    E.polyfill)(Y),
    ir.default = Y,
    ir
}
var dh;
function $1() {
    return dh || (dh = 1,
    (function(n, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = B1()
          , l = u(o);
        function u(f) {
            return f && f.__esModule ? f : {
                default: f
            }
        }
        r.default = l.default,
        n.exports = r.default
    }
    )(Vs, Vs.exports)),
    Vs.exports
}
var U1 = $1();
const Vm = vo(U1)
  , W1 = _.createContext({})
  , H1 = (n, r) => {
    switch (r.type) {
    case "OPENING_MODAL":
        return {
            ...n,
            isOpen: !0
        };
    case "CLOSING_MODAL":
        return {
            ...n,
            isOpen: !1
        }
    }
}
  , V1 = ({children: n}) => {
    const [r,o] = _.useReducer(H1, {
        isOpen: !1
    })
      , l = _.useMemo( () => ({
        ...r,
        closeModal: () => o({
            type: "CLOSING_MODAL"
        }),
        openModal: () => o({
            type: "OPENING_MODAL"
        })
    }), [r]);
    return k.jsx(W1.Provider, {
        value: l,
        children: n
    })
}
  , Q1 = Object.freeze({
    sm: "bc-modal--sm",
    lg: "bc-modal--lg"
})
  , q1 = ({className: n, children: r, ...o}) => k.jsx("div", {
    className: pe("bc-modal__header", n),
    ...o,
    children: r
})
  , K1 = ({className: n, children: r, ...o}) => k.jsx("span", {
    id: "bc_modal_title",
    className: pe("bc-modal__title", n),
    ...o,
    children: r
})
  , G1 = ({className: n, children: r, ...o}) => k.jsx("div", {
    className: pe("bc-modal__main", n),
    ...o,
    children: r
})
  , Y1 = ({className: n, children: r, ...o}) => k.jsx("div", {
    className: pe("bc-modal__footer", n),
    ...o,
    children: r
})
  , X1 = Vm
  , Ut = ({className: n, size: r, children: o, ...l}) => k.jsx(k.Fragment, {
    children: k.jsx(X1, {
        className: {
            base: pe("bc-modal", r && Q1[r], n),
            afterOpen: "bc-modal--after-open",
            beforeClose: "bc-modal--before-close"
        },
        overlayClassName: {
            base: "bc-overlay",
            afterOpen: "bc-overlay--after-open",
            beforeClose: "bc-overlay--before-close"
        },
        role: "dialog",
        aria: {
            labelledby: "bc_modal_title"
        },
        closeTimeoutMS: 200,
        ...l,
        children: o
    })
});
Ut.setAppElement = n => Vm.setAppElement(n);
Ut.Header = q1;
Ut.Footer = Y1;
Ut.Body = G1;
Ut.Provider = V1;
Ut.Title = K1;
Ut.displayName = "BcModal";
Ut.Header.displayName = "BcModal.Header";
Ut.Footer.displayName = "BcModal.Footer";
Ut.Body.displayName = "BcModal.Body";
Ut.Provider.displayName = "BcModal.Provider";
Ut.Title.displayName = "BcModal.Title";
const J1 = ({children: n, isActive: r, ...o}) => k.jsx("li", {
    ...o,
    children: _.Children.map(n, l => _.isValidElement(l) ? _.cloneElement(l, {
        className: "bc-nav-toc__link",
        "aria-current": r
    }) : null)
})
  , Z1 = ({children: n, className: r, href: o, onClick: l, ...u}) => !o || !o.trim().length ? null : k.jsx("a", {
    className: pe("bc-nav-toc__link", r),
    href: o,
    onClick: l,
    ...u,
    children: n
})
  , eb = Object.freeze({
    lg: "lg",
    sm: "sm"
})
  , Eo = ({children: n, size: r, isFixed: o, isSticky: l, isHeadingHidden: u, className: f, ...d}) => k.jsxs("nav", {
    className: pe("bc-nav-toc", r && `bc-nav-toc--${eb[r]}`, o && "bc-nav-toc--fixed", l && "bc-nav-toc--sticky", f),
    ...d,
    children: [!u && k.jsx("h3", {
        className: "bc-h4 bc-mt-0",
        id: "on-this-page-heading",
        children: "On this page"
    }), k.jsx("ol", {
        className: "bc-nav-toc__list",
        children: n
    })]
});
Eo.Item = J1;
Eo.Anchor = Z1;
Eo.displayName = "BcNavToc";
Eo.Item.displayName = "BcNavToc.Item";
Eo.Anchor.displayName = "BcNavToc.Anchor";
const tb = ({active: n, className: r}) => pe("bc-nav__item", {
    "bc-nav__item--active": n
}, r)
  , nb = ({className: n, active: r, children: o, ...l}) => k.jsx("li", {
    className: tb({
        active: r,
        className: n
    }),
    ...l,
    children: o
})
  , pc = ({className: n, children: r, ...o}) => k.jsx("nav", {
    className: pe("bc-body bc-body--dark bc-nav", n),
    ...o,
    children: k.jsx("ul", {
        className: "bc-nav__list",
        children: r
    })
});
pc.Item = nb;
pc.displayName = "BcNavbar";
pc.Item.displayName = "BcNavbar.Item";
const rb = Object.freeze({
    success: "bc-page-alert--success",
    warning: "bc-page-alert--warning",
    error: "bc-page-alert--error"
})
  , ib = Object.freeze({
    sm: "bc-page-alert--small"
})
  , ob = ({variant: n, size: r, children: o, className: l, ...u}) => k.jsxs("div", {
    className: pe("bc-page-alert", n && rb[n], r && ib[r], l),
    ...u,
    children: [o, k.jsx("div", {
        className: "bc-page-alert__icon",
        children: k.jsx(yi, {
            name: n ?? "info"
        })
    })]
});
ob.displayName = "BcPageAlert";
const ph = Object.freeze({
    xs: "xs",
    sm: "sm",
    lg: "lg",
    xl: "xl"
})
  , hh = Object.freeze({
    success: "success",
    branded: "branded"
})
  , _o = ({children: n, color: r, isInline: o, labelPlacement: l="bottom", size: u, value: f, className: d, ...p}) => k.jsxs("div", {
    className: pe("bc-progress-bar", r && hh[r] && `bc-progress-bar--${hh[r]}`, u && ph[u] && `bc-progress-bar--${ph[u]}`, o && "bc-progress-bar--inline", d),
    children: [l === "top" && n, k.jsx("div", {
        className: "bc-progress-bar__bar",
        ...p,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "arial-valuenow": f,
        role: "progressbar",
        children: k.jsx("span", {
            className: "bc-progress-bar__value",
            style: {
                width: `${f}%`
            }
        })
    }), l === "bottom" && n]
})
  , sb = ({children: n, className: r, ...o}) => k.jsx("span", {
    className: pe("bc-progress-bar__output", r),
    ...o,
    children: n
})
  , lb = ({value: n, ...r}) => k.jsx("output", {
    ...r,
    children: n
});
_o.Label = sb;
_o.Output = lb;
_o.displayName = "BcProgressBar";
_o.Label.displayName = "BcProgressBar.Label";
_o.Output.displayName = "BcProgressBar.Output";
const ab = ({children: n, className: r, isActive: o, disabled: l=!1, ...u}) => k.jsx("button", {
    className: pe("bc-segmented-control__btn", l && "bc-segmented-control__btn--disabled", r),
    ...u,
    type: "button",
    "aria-selected": o,
    role: "tab",
    disabled: l,
    children: n
})
  , Qm = ({children: n, className: r, name: o, id: l, isActive: u, disabled: f, ...d}) => {
    const p = gi({
        prefix: "bc_segment_"
    })
      , v = l || p;
    return k.jsxs(k.Fragment, {
        children: [k.jsx("input", {
            className: pe("bc-segmented-control__input", r),
            ...d,
            type: "radio",
            role: "tab",
            id: v,
            defaultChecked: u,
            name: o,
            disabled: f
        }), k.jsx("label", {
            htmlFor: v,
            className: pe("bc-segmented-control__label", f && "bc-segmented-control__label--disabled"),
            children: n
        })]
    })
}
  , ko = ({children: n, isFullWidth: r, ...o}) => {
    const l = gi({
        prefix: "bc_segment_name_"
    });
    return k.jsx(qh, {
        ...o,
        children: k.jsx("div", {
            className: pe("bc-segmented-control", n.length === 3 && "bc-segmented-control--trio", r && "bc-segmented-control--block"),
            role: "tablist",
            children: _.Children.map(n, u => {
                if (!_.isValidElement(u))
                    return null;
                if (u.type === Qm) {
                    const f = u.props;
                    return _.cloneElement(u, {
                        name: f.name || l
                    })
                }
                return _.cloneElement(u)
            }
            )
        })
    })
}
;
ko.Button = ab;
ko.Radio = Qm;
ko.displayName = "BcSegmentedControl";
ko.Button.displayName = "BcSegmentedControl.Button";
ko.Radio.displayName = "BcSegmentedControl.Radio";
const ub = Object.freeze({
    vertical: "bc-stats--vertical",
    inline: "bc-stats--inline",
    unlined: "bc-stats--unlined"
})
  , cb = Object.freeze({
    xs: "bc-stats--xs",
    lg: "bc-stats--lg"
})
  , fb = Object.freeze({
    up: "bc-stat--uptrend",
    down: "bc-stat--downtrend"
})
  , db = ({children: n}) => k.jsxs("span", {
    className: "bc-stat__title",
    children: [n, " "]
})
  , pb = ({children: n}) => k.jsxs("span", {
    className: "bc-stat__fig",
    children: [n, " "]
})
  , hb = ({children: n}) => k.jsx("span", {
    className: "bc-stat__info",
    children: n
})
  , mb = ({trend: n, children: r}) => k.jsx("li", {
    role: "listitem",
    className: pe("bc-stat", n && {
        [`${fb[n]}`]: n
    }),
    children: r
})
  , Dn = ({variant: n, size: r, children: o}) => k.jsx("ul", {
    role: "list",
    className: pe("bc-stats", n && ub[n], r && cb[r]),
    children: o
});
Dn.Stat = mb;
Dn.Title = db;
Dn.Figure = pb;
Dn.Info = hb;
Dn.displayName = "BcStats";
Dn.Stat.displayName = "BcStats.Stat";
Dn.Title.displayName = "BcStats.Title";
Dn.Figure.displayName = "BcStats.Figure";
Dn.Info.displayName = "BcStats.Info";
_.createContext(!1);
const Fn = ({children: n, className: r, ...o}) => k.jsx("nav", {
    "aria-label": "Secondary navigation",
    className: pe("bc-subnav", r),
    ...o,
    children: k.jsx("ul", {
        className: "bc-subnav__list",
        children: _.Children.map(n, l => {
            if (_.isValidElement(l) && l.type === qm)
                return _.cloneElement(l)
        }
        )
    })
})
  , vb = ({children: n}) => k.jsx("span", {
    className: "bc-subnav__item-string",
    "data-title": n,
    children: n
})
  , qm = ({isActive: n, children: r, ...o}) => k.jsx("li", {
    className: pe("bc-subnav__item", {
        "bc-subnav__item--active": n
    }),
    ...o,
    children: r
})
  , gb = ({children: n, href: r, ...o}) => !r || !r.trim().length ? null : k.jsx("a", {
    ...o,
    href: r,
    children: n
})
  , yb = ({children: n, ...r}) => k.jsx("button", {
    ...r,
    disabled: void 0,
    type: "button",
    children: n
});
Fn.Anchor = gb;
Fn.Button = yb;
Fn.Item = qm;
Fn.Label = vb;
Fn.displayName = "BcSubnav";
Fn.Anchor.displayName = "BcSubnav.Anchor";
Fn.Button.displayName = "BcSubnav.Button";
Fn.Item.displayName = "BcSubnav.Item";
Fn.Label.displayName = "BcSubnav.Label";
const wb = Object.freeze({
    ui: "bc-table--ui",
    hover: "bc-table--hover",
    striped: "bc-table--striped",
    small: "bc-table--small",
    unruled: "bc-table--unruled",
    bordered: "bc-table--bordered",
    columns: "bc-table--columns",
    unresponsive: "bc-table--unresponsive",
    sticky: "bc-table--sticky"
})
  , bb = ({children: n, className: r, toUpperCase: o, isAlignedRight: l, isNumeric: u, ...f}) => k.jsx("td", {
    className: pe(r, o && "bc-table__th-abbr", l && "bc-table__cell-right", u && "bc-table__cell-numeric") || void 0,
    ...f,
    children: n
})
  , xb = _.forwardRef( ({children: n, ...r}, o) => k.jsx("tbody", {
    ref: o,
    ...r,
    children: n
}))
  , Sb = ({children: n, ...r}) => k.jsx("tr", {
    ...r,
    children: n
})
  , Cb = ({children: n, className: r, toUpperCase: o, isAlignedRight: l, ...u}) => k.jsx("th", {
    className: pe(r, o && "bc-table__th-abbr", l && "bc-table__cell-right") || void 0,
    ...u,
    children: n
})
  , Eb = ({children: n, ...r}) => k.jsx("thead", {
    ...r,
    children: n
})
  , _b = ({variant: n, className: r}) => pe("bc-table", r, n && n.map(o => wb[o]))
  , en = ({variant: n, children: r, className: o, ...l}) => k.jsx("div", {
    className: _b({
        variant: n,
        className: o
    }),
    ...l,
    children: k.jsx("table", {
        children: r
    })
});
en.Thead = Eb;
en.Th = Cb;
en.Tr = Sb;
en.Tbody = xb;
en.Td = bb;
en.displayName = "BcTable";
en.Thead.displayName = "BcTable.Thead";
en.Th.displayName = "BcTable.Th";
en.Tr.displayName = "BcTable.Tr";
en.Tbody.displayName = "BcTable.Tbody";
en.Td.displayName = "BcTable.Td";
const kb = {
    activeTab: 0,
    onActivateTab: () => null,
    tabPrefix: void 0
}
  , Ro = _.createContext(kb)
  , Km = ({children: n}) => {
    const {tabPrefix: r} = _.useContext(Ro);
    return k.jsx("nav", {
        className: "bc-tabbed-nav",
        children: k.jsx("ul", {
            className: "bc-list",
            role: "tablist",
            children: _.Children.map(n, (o, l) => {
                if (!_.isValidElement(o))
                    return null;
                if (o.type === Gm) {
                    const {props: u} = o;
                    return _.cloneElement(o, {
                        tabId: `${r}_${l + 1}`,
                        value: u.value || l
                    })
                } else if (o.type === Ym) {
                    const {props: u} = o;
                    return _.cloneElement(o, {
                        tabId: `${r}_${l + 1}`,
                        value: u.value || l
                    })
                } else
                    return null
            }
            )
        })
    })
}
  , Uu = ({children: n, isActive: r, isDisabled: o, ...l}) => k.jsx("li", {
    className: pe("bc-tabbed-nav__item", {
        "bc-tabbed-nav__item--active": r,
        "bc-tabbed-nav__item--disabled": o
    }),
    ...l,
    children: n
})
  , Gm = ({children: n, tabId: r, value: o, isDisabled: l, ...u}) => {
    const {activeTab: f, onActivateTab: d} = _.useContext(Ro);
    return k.jsx(Uu, {
        isActive: o === f,
        isDisabled: l,
        ...u,
        children: k.jsx("button", {
            id: r,
            type: "button",
            role: "tab",
            "aria-selected": o === f,
            "aria-controls": `${r}_container`,
            onClick: () => o != null && d(o),
            disabled: l,
            children: n
        })
    })
}
  , Ym = ({children: n, href: r, value: o, tabId: l, isDisabled: u, ...f}) => {
    const {activeTab: d} = _.useContext(Ro);
    if (typeof n == "string") {
        const p = u || !(r != null && r.trim().length);
        return k.jsx(Uu, {
            isActive: o === d,
            isDisabled: p,
            ...f,
            children: k.jsx("a", {
                "aria-controls": `${l}_container`,
                "aria-current": o === d ? !0 : void 0,
                ...!p && {
                    href: r
                },
                role: "tab",
                "aria-disabled": p,
                children: n
            })
        })
    }
    return k.jsx(Uu, {
        isActive: o === d,
        isDisabled: u,
        ...f,
        children: _.Children.map(n, p => _.isValidElement(p) ? _.cloneElement(p, {
            ...p.type === "a" && u && {
                href: void 0,
                "aria-disabled": !0
            }
        }) : null)
    })
}
  , Xm = ({children: n}) => {
    const {activeTab: r, tabPrefix: o} = _.useContext(Ro);
    return k.jsx("div", {
        className: "bc-tabbed-panels",
        children: _.Children.map(n, (l, u) => _.isValidElement(l) ? l.type !== Jm ? l : !l.props.value && u !== r || l.props.value && l.props.value !== r ? null : _.cloneElement(l, {
            tabId: `${o}_${u + 1}`
        }) : (console.warn("Invalid element provided to TabPanels"),
        null))
    })
}
  , Jm = ({tabId: n, children: r}) => k.jsx(k.Fragment, {
    children: k.jsx("div", {
        role: "tabpanel",
        "aria-labelledby": n,
        id: `${n}_container`,
        children: r
    })
})
  , tn = ({activeTab: n=0, children: r, className: o="", onTabClick: l= () => null, style: u, tabPrefix: f, ...d}) => {
    const [p,v] = _.useState(n);
    _.useEffect( () => v(n), [n]);
    let m = gi({
        prefix: "bc_tabs_"
    });
    f && (m = f);
    const g = _.useCallback(w => {
        v(w),
        l(w)
    }
    , [v, l])
      , y = _.useMemo( () => ({
        activeTab: p,
        onActivateTab: g,
        tabPrefix: m
    }), [p, g, m]);
    return k.jsx(Ro.Provider, {
        value: y,
        children: k.jsx("div", {
            className: o,
            style: u,
            ...d,
            children: _.Children.map(r, w => _.isValidElement(w) && w.type === Km || _.isValidElement(w) && w.type === Xm ? _.cloneElement(w) : null)
        })
    })
}
;
tn.List = Km;
tn.Tab = Gm;
tn.TabNav = Ym;
tn.Panels = Xm;
tn.Panel = Jm;
tn.displayName = "BcTabs";
tn.List.displayName = "BcTabs.List";
tn.Tab.displayName = "BcTabs.Tab";
tn.TabNav.displayName = "BcTabs.TabNav";
tn.Panels.displayName = "BcTabs.Panels";
tn.Panel.displayName = "BcTabs.Panel";
var Ou = {
    exports: {}
};
var mh;
function Rb() {
    return mh || (mh = 1,
    (function(n) {
        (function() {
            var r = (function() {
                function o() {}
                o.prototype = Object.create(null);
                function l(y, w) {
                    for (var b = w.length, E = 0; E < b; ++E)
                        m(y, w[E])
                }
                var u = {}.hasOwnProperty;
                function f(y, w) {
                    y[w] = !0
                }
                function d(y, w) {
                    if (w.toString !== Object.prototype.toString && !w.toString.toString().includes("[native code]")) {
                        y[w.toString()] = !0;
                        return
                    }
                    for (var b in w)
                        u.call(w, b) && (y[b] = !!w[b])
                }
                var p = /\s+/;
                function v(y, w) {
                    for (var b = w.split(p), E = b.length, x = 0; x < E; ++x)
                        y[b[x]] = !0
                }
                function m(y, w) {
                    if (w) {
                        var b = typeof w;
                        b === "string" ? v(y, w) : Array.isArray(w) ? l(y, w) : b === "object" ? d(y, w) : b === "number" && f(y, w)
                    }
                }
                function g() {
                    for (var y = arguments.length, w = Array(y), b = 0; b < y; b++)
                        w[b] = arguments[b];
                    var E = new o;
                    l(E, w);
                    var x = [];
                    for (var M in E)
                        E[M] && x.push(M);
                    return x.join(" ")
                }
                return g
            }
            )();
            n.exports ? (r.default = r,
            n.exports = r) : window.classNames = r
        }
        )()
    }
    )(Ou)),
    Ou.exports
}
var Ob = Rb();
const Wu = vo(Ob)
  , Gs = Object.freeze({
    email: "email",
    number: "number",
    password: "password",
    search: "search",
    tel: "tel",
    text: "text",
    url: "url"
})
  , Nb = Object.freeze({
    code: "bc-text-input--code",
    number: "bc-text-input--number"
})
  , Pb = Object.freeze({
    internal: "bc-text-input--bugcrowd-internal",
    private: "bc-text-input--private"
})
  , Tb = ({variant: n, isInvalid: r, isValid: o, readOnly: l, isFullWidth: u, visibility: f, className: d}) => Wu("bc-text-input", r && "bc-text-input--invalid", o && "bc-text-input--valid", l && "bc-text-input--readonly", u && "bc-text-input--block", n && Nb[n], f && Pb[f], d)
  , Mb = n => {
    const r = n.target;
    r.blur(),
    n.stopPropagation(),
    setTimeout( () => {
        r.focus()
    }
    , 0)
}
  , Lb = _.forwardRef( ({as: n="input", isFullWidth: r, isInvalid: o, isValid: l, name: u, readOnly: f, variant: d, visibility: p, className: v, ...m}, g) => {
    const y = Tb({
        variant: d,
        isInvalid: o,
        isValid: l,
        readOnly: f,
        isFullWidth: r,
        visibility: p,
        className: v
    });
    if (n === "textarea") {
        const {...x} = m;
        return k.jsx("textarea", {
            ref: g,
            ...x,
            readOnly: f,
            name: u,
            className: Wu(y, "bc-text-input--textarea")
        })
    }
    const {type: w="text", ...b} = m
      , E = Gs[w] || Gs.text;
    return k.jsx("input", {
        ...E === "number" && {
            onWheel: Mb
        },
        ref: g,
        ...b,
        readOnly: f,
        type: E,
        name: u,
        className: Wu(y, {
            "bc-text-input--number": [Gs.number, Gs.tel].includes(E)
        })
    })
}
);
Lb.displayName = "BcTextInput";
var Zm = n => {
    throw TypeError(n)
}
, ev = (n, r, o) => r.has(n) || Zm("Cannot " + o), fn = (n, r, o) => (ev(n, r, "read from private field"),
o ? o.call(n) : r.get(n)), Nu = (n, r, o) => r.has(n) ? Zm("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(n) : r.set(n, o), dn = (n, r, o, l) => (ev(n, r, "write to private field"),
r.set(n, o),
o), pn, Nr, On;
class Ib {
    constructor() {
        Nu(this, pn),
        Nu(this, Nr),
        Nu(this, On),
        dn(this, pn, null),
        dn(this, Nr, []),
        dn(this, On, () => {
            for (const r of fn(this, Nr))
                r()
        }
        ),
        this.addMessage = r => {
            dn(this, pn, r),
            fn(this, On).call(this)
        }
        ,
        this.dismissMessage = () => {
            dn(this, pn, null),
            fn(this, On).call(this)
        }
        ,
        this.error = (r, o=!0) => {
            dn(this, pn, {
                autoDismiss: o,
                content: r,
                type: "error"
            }),
            fn(this, On).call(this)
        }
        ,
        this.getSnapshot = () => fn(this, pn),
        this.getServerSnapshot = () => null,
        this.subscribe = r => (fn(this, Nr).push(r),
        () => {
            dn(this, Nr, fn(this, Nr).filter(o => o !== r))
        }
        ),
        this.info = (r, o=!0) => {
            dn(this, pn, {
                autoDismiss: o,
                content: r
            }),
            fn(this, On).call(this)
        }
        ,
        this.success = (r, o=!0) => {
            dn(this, pn, {
                autoDismiss: o,
                content: r,
                type: "success"
            }),
            fn(this, On).call(this)
        }
        ,
        this.warning = (r, o=!0) => {
            dn(this, pn, {
                autoDismiss: o,
                content: r,
                type: "warning"
            }),
            fn(this, On).call(this)
        }
    }
}
pn = new WeakMap,
Nr = new WeakMap,
On = new WeakMap;
const Oo = new Ib;
Oo.addMessage;
Oo.error;
Oo.info;
Oo.success;
Oo.warning;
const vh = Object.freeze({
    xl: "bc-userblock--xl",
    lg: "bc-userblock--lg"
})
  , Db = ({children: n}) => k.jsx("span", {
    className: "bc-userblock__title",
    children: n
})
  , Fb = ({children: n}) => k.jsx("div", {
    className: "bc-userblock__meta",
    children: n
})
  , Ab = ({children: n}) => k.jsx("div", {
    className: "bc-userblock__actions",
    children: n
})
  , jb = ({children: n}) => k.jsx("div", {
    className: "bc-userblock__main",
    children: n
})
  , zb = ({children: n}) => k.jsx("ul", {
    role: "list",
    className: "bc-userblocks",
    children: n
})
  , nn = ({src: n, alt: r, size: o, isGroupChild: l, children: u, ...f}) => l ? k.jsxs("li", {
    role: "listitem",
    className: pe("bc-userblock", o && vh[o]),
    ...f,
    children: [k.jsx(fo, {
        src: n,
        alt: r
    }), u]
}) : k.jsxs("div", {
    className: pe("bc-userblock", o && vh[o]),
    ...f,
    children: [k.jsx(fo, {
        src: n,
        alt: r
    }), u]
});
nn.Actions = Ab;
nn.Group = zb;
nn.Main = jb;
nn.Meta = Fb;
nn.Title = Db;
nn.displayName = "BcUserblock";
nn.Actions.displayName = "BcUserblock.Actions";
nn.Group.displayName = "BcUserblock.Group";
nn.Main.displayName = "BcUserblock.Main";
nn.Meta.displayName = "BcUserblock.Meta";
nn.Title.displayName = "BcUserblock.Title";
const Bb = Object.freeze({
    leftActive: "bc-vertical-nav--leftactive"
})
  , Br = ({children: n, variant: r, className: o, ...l}) => k.jsx("nav", {
    className: pe("bc-vertical-nav", r && Bb[r], o),
    ...l,
    children: k.jsx("ul", {
        className: "bc-vertical-nav__list",
        children: n
    })
})
  , tv = ({children: n, className: r}) => k.jsx("ul", {
    className: r,
    children: _.Children.map(n, o => _.isValidElement(o) && o.type === Hu ? _.cloneElement(o) : k.jsx(Hu, {
        children: o
    }))
})
  , Hu = ({isActive: n, isDisabled: r, children: o, ...l}) => k.jsx("li", {
    ...l,
    children: _.Children.map(o, u => _.isValidElement(u) ? u.type === tv ? u : _.cloneElement(u, {
        className: "bc-vertical-nav__link",
        "aria-current": n && "page",
        "aria-disabled": r
    }) : null)
})
  , $b = ({children: n, className: r, href: o, ...l}) => !o || !o.trim().length ? null : k.jsx("a", {
    className: pe("bc-vertical-nav__link", r),
    href: o,
    ...l,
    children: n
});
Br.Anchor = $b;
Br.Item = Hu;
Br.Sublist = tv;
Br.displayName = "BcVerticalNav";
Br.Anchor.displayName = "BcVerticalNav.Anchor";
Br.Item.displayName = "BcVerticalNav.Item";
Br.Sublist.displayName = "BcVerticalNav.Sublist";
var Ys = {}, gh;
function Ub() {
    if (gh)
        return Ys;
    gh = 1;
    var n = oc();
    return Ys.createRoot = n.createRoot,
    Ys.hydrateRoot = n.hydrateRoot,
    Ys
}
var yC = Ub();
const yh = 6e4
  , wh = 525600
  , bh = 43200
  , xh = 1440
  , Sh = Symbol.for("constructDateFrom");
function hc(n, r) {
    return typeof n == "function" ? n(r) : n && typeof n == "object" && Sh in n ? n[Sh](r) : n instanceof Date ? new n.constructor(r) : new Date(r)
}
function Vu(n, r) {
    return hc(n, n)
}
let Wb = {};
function Hb() {
    return Wb
}
function Ch(n) {
    const r = Vu(n)
      , o = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return o.setUTCFullYear(r.getFullYear()),
    +n - +o
}
function Vb(n, ...r) {
    const o = hc.bind(null, n || r.find(l => typeof l == "object"));
    return r.map(o)
}
function Qb(n, r) {
    const o = +Vu(n) - +Vu(r);
    return o < 0 ? -1 : o > 0 ? 1 : o
}
function qb(n) {
    return hc(n, Date.now())
}
function Kb(n) {
    return r => {
        const l = (n ? Math[n] : Math.trunc)(r);
        return l === 0 ? 0 : l
    }
}
const Gb = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , Yb = (n, r, o) => {
    let l;
    const u = Gb[n];
    return typeof u == "string" ? l = u : r === 1 ? l = u.one : l = u.other.replace("{{count}}", r.toString()),
    o?.addSuffix ? o.comparison && o.comparison > 0 ? "in " + l : l + " ago" : l
}
;
function Pu(n) {
    return (r={}) => {
        const o = r.width ? String(r.width) : n.defaultWidth;
        return n.formats[o] || n.formats[n.defaultWidth]
    }
}
const Xb = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , Jb = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , Zb = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , ex = {
    date: Pu({
        formats: Xb,
        defaultWidth: "full"
    }),
    time: Pu({
        formats: Jb,
        defaultWidth: "full"
    }),
    dateTime: Pu({
        formats: Zb,
        defaultWidth: "full"
    })
}
  , tx = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , nx = (n, r, o, l) => tx[n];
function so(n) {
    return (r, o) => {
        const l = o?.context ? String(o.context) : "standalone";
        let u;
        if (l === "formatting" && n.formattingValues) {
            const d = n.defaultFormattingWidth || n.defaultWidth
              , p = o?.width ? String(o.width) : d;
            u = n.formattingValues[p] || n.formattingValues[d]
        } else {
            const d = n.defaultWidth
              , p = o?.width ? String(o.width) : n.defaultWidth;
            u = n.values[p] || n.values[d]
        }
        const f = n.argumentCallback ? n.argumentCallback(r) : r;
        return u[f]
    }
}
const rx = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , ix = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , ox = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , sx = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , lx = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , ax = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , ux = (n, r) => {
    const o = Number(n)
      , l = o % 100;
    if (l > 20 || l < 10)
        switch (l % 10) {
        case 1:
            return o + "st";
        case 2:
            return o + "nd";
        case 3:
            return o + "rd"
        }
    return o + "th"
}
  , cx = {
    ordinalNumber: ux,
    era: so({
        values: rx,
        defaultWidth: "wide"
    }),
    quarter: so({
        values: ix,
        defaultWidth: "wide",
        argumentCallback: n => n - 1
    }),
    month: so({
        values: ox,
        defaultWidth: "wide"
    }),
    day: so({
        values: sx,
        defaultWidth: "wide"
    }),
    dayPeriod: so({
        values: lx,
        defaultWidth: "wide",
        formattingValues: ax,
        defaultFormattingWidth: "wide"
    })
};
function lo(n) {
    return (r, o={}) => {
        const l = o.width
          , u = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth]
          , f = r.match(u);
        if (!f)
            return null;
        const d = f[0]
          , p = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth]
          , v = Array.isArray(p) ? dx(p, y => y.test(d)) : fx(p, y => y.test(d));
        let m;
        m = n.valueCallback ? n.valueCallback(v) : v,
        m = o.valueCallback ? o.valueCallback(m) : m;
        const g = r.slice(d.length);
        return {
            value: m,
            rest: g
        }
    }
}
function fx(n, r) {
    for (const o in n)
        if (Object.prototype.hasOwnProperty.call(n, o) && r(n[o]))
            return o
}
function dx(n, r) {
    for (let o = 0; o < n.length; o++)
        if (r(n[o]))
            return o
}
function px(n) {
    return (r, o={}) => {
        const l = r.match(n.matchPattern);
        if (!l)
            return null;
        const u = l[0]
          , f = r.match(n.parsePattern);
        if (!f)
            return null;
        let d = n.valueCallback ? n.valueCallback(f[0]) : f[0];
        d = o.valueCallback ? o.valueCallback(d) : d;
        const p = r.slice(u.length);
        return {
            value: d,
            rest: p
        }
    }
}
const hx = /^(\d+)(th|st|nd|rd)?/i
  , mx = /\d+/i
  , vx = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , gx = {
    any: [/^b/i, /^(a|c)/i]
}
  , yx = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , wx = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , bx = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , xx = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , Sx = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , Cx = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , Ex = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , _x = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , kx = {
    ordinalNumber: px({
        matchPattern: hx,
        parsePattern: mx,
        valueCallback: n => parseInt(n, 10)
    }),
    era: lo({
        matchPatterns: vx,
        defaultMatchWidth: "wide",
        parsePatterns: gx,
        defaultParseWidth: "any"
    }),
    quarter: lo({
        matchPatterns: yx,
        defaultMatchWidth: "wide",
        parsePatterns: wx,
        defaultParseWidth: "any",
        valueCallback: n => n + 1
    }),
    month: lo({
        matchPatterns: bx,
        defaultMatchWidth: "wide",
        parsePatterns: xx,
        defaultParseWidth: "any"
    }),
    day: lo({
        matchPatterns: Sx,
        defaultMatchWidth: "wide",
        parsePatterns: Cx,
        defaultParseWidth: "any"
    }),
    dayPeriod: lo({
        matchPatterns: Ex,
        defaultMatchWidth: "any",
        parsePatterns: _x,
        defaultParseWidth: "any"
    })
}
  , Rx = {
    code: "en-US",
    formatDistance: Yb,
    formatLong: ex,
    formatRelative: nx,
    localize: cx,
    match: kx,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function Ox(n, r, o) {
    const l = Hb()
      , u = o?.locale ?? l.locale ?? Rx
      , f = Qb(n, r);
    if (isNaN(f))
        throw new RangeError("Invalid time value");
    const d = Object.assign({}, o, {
        addSuffix: o?.addSuffix,
        comparison: f
    })
      , [p,v] = Vb(o?.in, ...f > 0 ? [r, n] : [n, r])
      , m = Kb(o?.roundingMethod ?? "round")
      , g = v.getTime() - p.getTime()
      , y = g / yh
      , w = Ch(v) - Ch(p)
      , b = (g - w) / yh
      , E = o?.unit;
    let x;
    if (E ? x = E : y < 1 ? x = "second" : y < 60 ? x = "minute" : y < xh ? x = "hour" : b < bh ? x = "day" : b < wh ? x = "month" : x = "year",
    x === "second") {
        const M = m(g / 1e3);
        return u.formatDistance("xSeconds", M, d)
    } else if (x === "minute") {
        const M = m(y);
        return u.formatDistance("xMinutes", M, d)
    } else if (x === "hour") {
        const M = m(y / 60);
        return u.formatDistance("xHours", M, d)
    } else if (x === "day") {
        const M = m(b / xh);
        return u.formatDistance("xDays", M, d)
    } else if (x === "month") {
        const M = m(b / bh);
        return M === 12 && E !== "month" ? u.formatDistance("xYears", 1, d) : u.formatDistance("xMonths", M, d)
    } else {
        const M = m(b / wh);
        return u.formatDistance("xYears", M, d)
    }
}
function wC(n, r) {
    return Ox(n, qb(n), r)
}
var No = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(n) {
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Fr = typeof window > "u" || "Deno"in globalThis;
function _t() {}
function Nx(n, r) {
    return typeof n == "function" ? n(r) : n
}
function Qu(n) {
    return typeof n == "number" && n >= 0 && n !== 1 / 0
}
function nv(n, r) {
    return Math.max(n + (r || 0) - Date.now(), 0)
}
function cr(n, r) {
    return typeof n == "function" ? n(r) : n
}
function Bt(n, r) {
    return typeof n == "function" ? n(r) : n
}
function Eh(n, r) {
    const {type: o="all", exact: l, fetchStatus: u, predicate: f, queryKey: d, stale: p} = n;
    if (d) {
        if (l) {
            if (r.queryHash !== mc(d, r.options))
                return !1
        } else if (!mo(r.queryKey, d))
            return !1
    }
    if (o !== "all") {
        const v = r.isActive();
        if (o === "active" && !v || o === "inactive" && v)
            return !1
    }
    return !(typeof p == "boolean" && r.isStale() !== p || u && u !== r.state.fetchStatus || f && !f(r))
}
function _h(n, r) {
    const {exact: o, status: l, predicate: u, mutationKey: f} = n;
    if (f) {
        if (!r.options.mutationKey)
            return !1;
        if (o) {
            if (ho(r.options.mutationKey) !== ho(f))
                return !1
        } else if (!mo(r.options.mutationKey, f))
            return !1
    }
    return !(l && r.state.status !== l || u && !u(r))
}
function mc(n, r) {
    return (r?.queryKeyHashFn || ho)(n)
}
function ho(n) {
    return JSON.stringify(n, (r, o) => Ku(o) ? Object.keys(o).sort().reduce( (l, u) => (l[u] = o[u],
    l), {}) : o)
}
function mo(n, r) {
    return n === r ? !0 : typeof n != typeof r ? !1 : n && r && typeof n == "object" && typeof r == "object" ? Object.keys(r).every(o => mo(n[o], r[o])) : !1
}
function rv(n, r) {
    if (n === r)
        return n;
    const o = kh(n) && kh(r);
    if (o || Ku(n) && Ku(r)) {
        const l = o ? n : Object.keys(n)
          , u = l.length
          , f = o ? r : Object.keys(r)
          , d = f.length
          , p = o ? [] : {}
          , v = new Set(l);
        let m = 0;
        for (let g = 0; g < d; g++) {
            const y = o ? g : f[g];
            (!o && v.has(y) || o) && n[y] === void 0 && r[y] === void 0 ? (p[y] = void 0,
            m++) : (p[y] = rv(n[y], r[y]),
            p[y] === n[y] && n[y] !== void 0 && m++)
        }
        return u === d && m === u ? n : p
    }
    return r
}
function qu(n, r) {
    if (!r || Object.keys(n).length !== Object.keys(r).length)
        return !1;
    for (const o in n)
        if (n[o] !== r[o])
            return !1;
    return !0
}
function kh(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function Ku(n) {
    if (!Rh(n))
        return !1;
    const r = n.constructor;
    if (r === void 0)
        return !0;
    const o = r.prototype;
    return !(!Rh(o) || !o.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype)
}
function Rh(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function Px(n) {
    return new Promise(r => {
        setTimeout(r, n)
    }
    )
}
function Gu(n, r, o) {
    return typeof o.structuralSharing == "function" ? o.structuralSharing(n, r) : o.structuralSharing !== !1 ? rv(n, r) : r
}
function Tx(n, r, o=0) {
    const l = [...n, r];
    return o && l.length > o ? l.slice(1) : l
}
function Mx(n, r, o=0) {
    const l = [r, ...n];
    return o && l.length > o ? l.slice(0, -1) : l
}
var vc = Symbol();
function iv(n, r) {
    return !n.queryFn && r?.initialPromise ? () => r.initialPromise : !n.queryFn || n.queryFn === vc ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn
}
function Lx(n, r) {
    return typeof n == "function" ? n(...r) : !!n
}
var Ix = class extends No {
    #t;
    #e;
    #n;
    constructor() {
        super(),
        this.#n = n => {
            if (!Fr && window.addEventListener) {
                const r = () => n();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
    }
    onSubscribe() {
        this.#e || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#e?.(),
        this.#e = void 0)
    }
    setEventListener(n) {
        this.#n = n,
        this.#e?.(),
        this.#e = n(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        )
    }
    setFocused(n) {
        this.#t !== n && (this.#t = n,
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(r => {
            r(n)
        }
        )
    }
    isFocused() {
        return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
    }
}
  , gc = new Ix
  , Dx = class extends No {
    #t = !0;
    #e;
    #n;
    constructor() {
        super(),
        this.#n = n => {
            if (!Fr && window.addEventListener) {
                const r = () => n(!0)
                  , o = () => n(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", o, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", o)
                }
            }
        }
    }
    onSubscribe() {
        this.#e || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#e?.(),
        this.#e = void 0)
    }
    setEventListener(n) {
        this.#n = n,
        this.#e?.(),
        this.#e = n(this.setOnline.bind(this))
    }
    setOnline(n) {
        this.#t !== n && (this.#t = n,
        this.listeners.forEach(o => {
            o(n)
        }
        ))
    }
    isOnline() {
        return this.#t
    }
}
  , ul = new Dx;
function Yu() {
    let n, r;
    const o = new Promise( (u, f) => {
        n = u,
        r = f
    }
    );
    o.status = "pending",
    o.catch( () => {}
    );
    function l(u) {
        Object.assign(o, u),
        delete o.resolve,
        delete o.reject
    }
    return o.resolve = u => {
        l({
            status: "fulfilled",
            value: u
        }),
        n(u)
    }
    ,
    o.reject = u => {
        l({
            status: "rejected",
            reason: u
        }),
        r(u)
    }
    ,
    o
}
function Fx(n) {
    return Math.min(1e3 * 2 ** n, 3e4)
}
function ov(n) {
    return (n ?? "online") === "online" ? ul.isOnline() : !0
}
var sv = class extends Error {
    constructor(n) {
        super("CancelledError"),
        this.revert = n?.revert,
        this.silent = n?.silent
    }
}
;
function Tu(n) {
    return n instanceof sv
}
function lv(n) {
    let r = !1, o = 0, l = !1, u;
    const f = Yu()
      , d = x => {
        l || (w(new sv(x)),
        n.abort?.())
    }
      , p = () => {
        r = !0
    }
      , v = () => {
        r = !1
    }
      , m = () => gc.isFocused() && (n.networkMode === "always" || ul.isOnline()) && n.canRun()
      , g = () => ov(n.networkMode) && n.canRun()
      , y = x => {
        l || (l = !0,
        n.onSuccess?.(x),
        u?.(),
        f.resolve(x))
    }
      , w = x => {
        l || (l = !0,
        n.onError?.(x),
        u?.(),
        f.reject(x))
    }
      , b = () => new Promise(x => {
        u = M => {
            (l || m()) && x(M)
        }
        ,
        n.onPause?.()
    }
    ).then( () => {
        u = void 0,
        l || n.onContinue?.()
    }
    )
      , E = () => {
        if (l)
            return;
        let x;
        const M = o === 0 ? n.initialPromise : void 0;
        try {
            x = M ?? n.fn()
        } catch (A) {
            x = Promise.reject(A)
        }
        Promise.resolve(x).then(y).catch(A => {
            if (l)
                return;
            const z = n.retry ?? (Fr ? 0 : 3)
              , B = n.retryDelay ?? Fx
              , W = typeof B == "function" ? B(o, A) : B
              , Z = z === !0 || typeof z == "number" && o < z || typeof z == "function" && z(o, A);
            if (r || !Z) {
                w(A);
                return
            }
            o++,
            n.onFail?.(o, A),
            Px(W).then( () => m() ? void 0 : b()).then( () => {
                r ? w(A) : E()
            }
            )
        }
        )
    }
    ;
    return {
        promise: f,
        cancel: d,
        continue: () => (u?.(),
        f),
        cancelRetry: p,
        continueRetry: v,
        canStart: g,
        start: () => (g() ? E() : b().then(E),
        f)
    }
}
var Ax = n => setTimeout(n, 0);
function jx() {
    let n = []
      , r = 0
      , o = p => {
        p()
    }
      , l = p => {
        p()
    }
      , u = Ax;
    const f = p => {
        r ? n.push(p) : u( () => {
            o(p)
        }
        )
    }
      , d = () => {
        const p = n;
        n = [],
        p.length && u( () => {
            l( () => {
                p.forEach(v => {
                    o(v)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: p => {
            let v;
            r++;
            try {
                v = p()
            } finally {
                r--,
                r || d()
            }
            return v
        }
        ,
        batchCalls: p => (...v) => {
            f( () => {
                p(...v)
            }
            )
        }
        ,
        schedule: f,
        setNotifyFunction: p => {
            o = p
        }
        ,
        setBatchNotifyFunction: p => {
            l = p
        }
        ,
        setScheduler: p => {
            u = p
        }
    }
}
var ut = jx()
  , av = class {
    #t;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Qu(this.gcTime) && (this.#t = setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (Fr ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#t && (clearTimeout(this.#t),
        this.#t = void 0)
    }
}
  , zx = class extends av {
    #t;
    #e;
    #n;
    #r;
    #i;
    #l;
    #s;
    constructor(n) {
        super(),
        this.#s = !1,
        this.#l = n.defaultOptions,
        this.setOptions(n.options),
        this.observers = [],
        this.#r = n.client,
        this.#n = this.#r.getQueryCache(),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        this.#t = Bx(this.options),
        this.state = n.state ?? this.#t,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#i?.promise
    }
    setOptions(n) {
        this.options = {
            ...this.#l,
            ...n
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(n, r) {
        const o = Gu(this.state.data, n, this.options);
        return this.#o({
            data: o,
            type: "success",
            dataUpdatedAt: r?.updatedAt,
            manual: r?.manual
        }),
        o
    }
    setState(n, r) {
        this.#o({
            type: "setState",
            state: n,
            setStateOptions: r
        })
    }
    cancel(n) {
        const r = this.#i?.promise;
        return this.#i?.cancel(n),
        r ? r.then(_t).catch(_t) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#t)
    }
    isActive() {
        return this.observers.some(n => Bt(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === vc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => cr(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !nv(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        this.observers.find(r => r.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#i?.continue()
    }
    onOnline() {
        this.observers.find(r => r.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#i?.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(r => r !== n),
        this.observers.length || (this.#i && (this.#s ? this.#i.cancel({
            revert: !0
        }) : this.#i.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#o({
            type: "invalidate"
        })
    }
    fetch(n, r) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && r?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#i)
                return this.#i.continueRetry(),
                this.#i.promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const v = this.observers.find(m => m.options.queryFn);
            v && this.setOptions(v.options)
        }
        const o = new AbortController
          , l = v => {
            Object.defineProperty(v, "signal", {
                enumerable: !0,
                get: () => (this.#s = !0,
                o.signal)
            })
        }
          , u = () => {
            const v = iv(this.options, r)
              , g = ( () => {
                const y = {
                    client: this.#r,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return l(y),
                y
            }
            )();
            return this.#s = !1,
            this.options.persister ? this.options.persister(v, g, this) : v(g)
        }
          , d = ( () => {
            const v = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#r,
                state: this.state,
                fetchFn: u
            };
            return l(v),
            v
        }
        )();
        this.options.behavior?.onFetch(d, this),
        this.#e = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions?.meta) && this.#o({
            type: "fetch",
            meta: d.fetchOptions?.meta
        });
        const p = v => {
            Tu(v) && v.silent || this.#o({
                type: "error",
                error: v
            }),
            Tu(v) || (this.#n.config.onError?.(v, this),
            this.#n.config.onSettled?.(this.state.data, v, this)),
            this.scheduleGc()
        }
        ;
        return this.#i = lv({
            initialPromise: r?.initialPromise,
            fn: d.fetchFn,
            abort: o.abort.bind(o),
            onSuccess: v => {
                if (v === void 0) {
                    p(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(v)
                } catch (m) {
                    p(m);
                    return
                }
                this.#n.config.onSuccess?.(v, this),
                this.#n.config.onSettled?.(v, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: p,
            onFail: (v, m) => {
                this.#o({
                    type: "failed",
                    failureCount: v,
                    error: m
                })
            }
            ,
            onPause: () => {
                this.#o({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#o({
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        }),
        this.#i.start()
    }
    #o(n) {
        const r = o => {
            switch (n.type) {
            case "failed":
                return {
                    ...o,
                    fetchFailureCount: n.failureCount,
                    fetchFailureReason: n.error
                };
            case "pause":
                return {
                    ...o,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...o,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...o,
                    ...uv(o.data, this.options),
                    fetchMeta: n.meta ?? null
                };
            case "success":
                return this.#e = void 0,
                {
                    ...o,
                    data: n.data,
                    dataUpdateCount: o.dataUpdateCount + 1,
                    dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!n.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const l = n.error;
                return Tu(l) && l.revert && this.#e ? {
                    ...this.#e,
                    fetchStatus: "idle"
                } : {
                    ...o,
                    error: l,
                    errorUpdateCount: o.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: o.fetchFailureCount + 1,
                    fetchFailureReason: l,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...o,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...o,
                    ...n.state
                }
            }
        }
        ;
        this.state = r(this.state),
        ut.batch( () => {
            this.observers.forEach(o => {
                o.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function uv(n, r) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: ov(r.networkMode) ? "fetching" : "paused",
        ...n === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Bx(n) {
    const r = typeof n.initialData == "function" ? n.initialData() : n.initialData
      , o = r !== void 0
      , l = o ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
    return {
        data: r,
        dataUpdateCount: 0,
        dataUpdatedAt: o ? l ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: o ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var $x = class extends No {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#t = new Map
    }
    #t;
    build(n, r, o) {
        const l = r.queryKey
          , u = r.queryHash ?? mc(l, r);
        let f = this.get(u);
        return f || (f = new zx({
            client: n,
            queryKey: l,
            queryHash: u,
            options: n.defaultQueryOptions(r),
            state: o,
            defaultOptions: n.getQueryDefaults(l)
        }),
        this.add(f)),
        f
    }
    add(n) {
        this.#t.has(n.queryHash) || (this.#t.set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const r = this.#t.get(n.queryHash);
        r && (n.destroy(),
        r === n && this.#t.delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        ut.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return this.#t.get(n)
    }
    getAll() {
        return [...this.#t.values()]
    }
    find(n) {
        const r = {
            exact: !0,
            ...n
        };
        return this.getAll().find(o => Eh(r, o))
    }
    findAll(n={}) {
        const r = this.getAll();
        return Object.keys(n).length > 0 ? r.filter(o => Eh(n, o)) : r
    }
    notify(n) {
        ut.batch( () => {
            this.listeners.forEach(r => {
                r(n)
            }
            )
        }
        )
    }
    onFocus() {
        ut.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ut.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
  , Ux = class extends av {
    #t;
    #e;
    #n;
    constructor(n) {
        super(),
        this.mutationId = n.mutationId,
        this.#e = n.mutationCache,
        this.#t = [],
        this.state = n.state || Wx(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        this.#t.includes(n) || (this.#t.push(n),
        this.clearGcTimeout(),
        this.#e.notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.#t = this.#t.filter(r => r !== n),
        this.scheduleGc(),
        this.#e.notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this))
    }
    continue() {
        return this.#n?.continue() ?? this.execute(this.state.variables)
    }
    async execute(n) {
        const r = () => {
            this.#r({
                type: "continue"
            })
        }
        ;
        this.#n = lv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n) : Promise.reject(new Error("No mutationFn found")),
            onFail: (u, f) => {
                this.#r({
                    type: "failed",
                    failureCount: u,
                    error: f
                })
            }
            ,
            onPause: () => {
                this.#r({
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#e.canRun(this)
        });
        const o = this.state.status === "pending"
          , l = !this.#n.canStart();
        try {
            if (o)
                r();
            else {
                this.#r({
                    type: "pending",
                    variables: n,
                    isPaused: l
                }),
                await this.#e.config.onMutate?.(n, this);
                const f = await this.options.onMutate?.(n);
                f !== this.state.context && this.#r({
                    type: "pending",
                    context: f,
                    variables: n,
                    isPaused: l
                })
            }
            const u = await this.#n.start();
            return await this.#e.config.onSuccess?.(u, n, this.state.context, this),
            await this.options.onSuccess?.(u, n, this.state.context),
            await this.#e.config.onSettled?.(u, null, this.state.variables, this.state.context, this),
            await this.options.onSettled?.(u, null, n, this.state.context),
            this.#r({
                type: "success",
                data: u
            }),
            u
        } catch (u) {
            try {
                throw await this.#e.config.onError?.(u, n, this.state.context, this),
                await this.options.onError?.(u, n, this.state.context),
                await this.#e.config.onSettled?.(void 0, u, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(void 0, u, n, this.state.context),
                u
            } finally {
                this.#r({
                    type: "error",
                    error: u
                })
            }
        } finally {
            this.#e.runNext(this)
        }
    }
    #r(n) {
        const r = o => {
            switch (n.type) {
            case "failed":
                return {
                    ...o,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return {
                    ...o,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...o,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...o,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...o,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...o,
                    data: void 0,
                    error: n.error,
                    failureCount: o.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = r(this.state),
        ut.batch( () => {
            this.#t.forEach(o => {
                o.onMutationUpdate(n)
            }
            ),
            this.#e.notify({
                mutation: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function Wx() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Hx = class extends No {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#t = new Set,
        this.#e = new Map,
        this.#n = 0
    }
    #t;
    #e;
    #n;
    build(n, r, o) {
        const l = new Ux({
            mutationCache: this,
            mutationId: ++this.#n,
            options: n.defaultMutationOptions(r),
            state: o
        });
        return this.add(l),
        l
    }
    add(n) {
        this.#t.add(n);
        const r = Xs(n);
        if (typeof r == "string") {
            const o = this.#e.get(r);
            o ? o.push(n) : this.#e.set(r, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (this.#t.delete(n)) {
            const r = Xs(n);
            if (typeof r == "string") {
                const o = this.#e.get(r);
                if (o)
                    if (o.length > 1) {
                        const l = o.indexOf(n);
                        l !== -1 && o.splice(l, 1)
                    } else
                        o[0] === n && this.#e.delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const r = Xs(n);
        if (typeof r == "string") {
            const l = this.#e.get(r)?.find(u => u.state.status === "pending");
            return !l || l === n
        } else
            return !0
    }
    runNext(n) {
        const r = Xs(n);
        return typeof r == "string" ? this.#e.get(r)?.find(l => l !== n && l.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        ut.batch( () => {
            this.#t.forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            this.#t.clear(),
            this.#e.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#t)
    }
    find(n) {
        const r = {
            exact: !0,
            ...n
        };
        return this.getAll().find(o => _h(r, o))
    }
    findAll(n={}) {
        return this.getAll().filter(r => _h(n, r))
    }
    notify(n) {
        ut.batch( () => {
            this.listeners.forEach(r => {
                r(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(r => r.state.isPaused);
        return ut.batch( () => Promise.all(n.map(r => r.continue().catch(_t))))
    }
}
;
function Xs(n) {
    return n.options.scope?.id
}
function Oh(n) {
    return {
        onFetch: (r, o) => {
            const l = r.options
              , u = r.fetchOptions?.meta?.fetchMore?.direction
              , f = r.state.data?.pages || []
              , d = r.state.data?.pageParams || [];
            let p = {
                pages: [],
                pageParams: []
            }
              , v = 0;
            const m = async () => {
                let g = !1;
                const y = E => {
                    Object.defineProperty(E, "signal", {
                        enumerable: !0,
                        get: () => (r.signal.aborted ? g = !0 : r.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        r.signal)
                    })
                }
                  , w = iv(r.options, r.fetchOptions)
                  , b = async (E, x, M) => {
                    if (g)
                        return Promise.reject();
                    if (x == null && E.pages.length)
                        return Promise.resolve(E);
                    const z = ( () => {
                        const te = {
                            client: r.client,
                            queryKey: r.queryKey,
                            pageParam: x,
                            direction: M ? "backward" : "forward",
                            meta: r.options.meta
                        };
                        return y(te),
                        te
                    }
                    )()
                      , B = await w(z)
                      , {maxPages: W} = r.options
                      , Z = M ? Mx : Tx;
                    return {
                        pages: Z(E.pages, B, W),
                        pageParams: Z(E.pageParams, x, W)
                    }
                }
                ;
                if (u && f.length) {
                    const E = u === "backward"
                      , x = E ? Vx : Nh
                      , M = {
                        pages: f,
                        pageParams: d
                    }
                      , A = x(l, M);
                    p = await b(M, A, E)
                } else {
                    const E = n ?? f.length;
                    do {
                        const x = v === 0 ? d[0] ?? l.initialPageParam : Nh(l, p);
                        if (v > 0 && x == null)
                            break;
                        p = await b(p, x),
                        v++
                    } while (v < E)
                }
                return p
            }
            ;
            r.options.persister ? r.fetchFn = () => r.options.persister?.(m, {
                client: r.client,
                queryKey: r.queryKey,
                meta: r.options.meta,
                signal: r.signal
            }, o) : r.fetchFn = m
        }
    }
}
function Nh(n, {pages: r, pageParams: o}) {
    const l = r.length - 1;
    return r.length > 0 ? n.getNextPageParam(r[l], r, o[l], o) : void 0
}
function Vx(n, {pages: r, pageParams: o}) {
    return r.length > 0 ? n.getPreviousPageParam?.(r[0], r, o[0], o) : void 0
}
var bC = class {
    #t;
    #e;
    #n;
    #r;
    #i;
    #l;
    #s;
    #o;
    constructor(n={}) {
        this.#t = n.queryCache || new $x,
        this.#e = n.mutationCache || new Hx,
        this.#n = n.defaultOptions || {},
        this.#r = new Map,
        this.#i = new Map,
        this.#l = 0
    }
    mount() {
        this.#l++,
        this.#l === 1 && (this.#s = gc.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#t.onFocus())
        }
        ),
        this.#o = ul.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#t.onOnline())
        }
        ))
    }
    unmount() {
        this.#l--,
        this.#l === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#o?.(),
        this.#o = void 0)
    }
    isFetching(n) {
        return this.#t.findAll({
            ...n,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(n) {
        return this.#e.findAll({
            ...n,
            status: "pending"
        }).length
    }
    getQueryData(n) {
        const r = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#t.get(r.queryHash)?.state.data
    }
    ensureQueryData(n) {
        const r = this.defaultQueryOptions(n)
          , o = this.#t.build(this, r)
          , l = o.state.data;
        return l === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && o.isStaleByTime(cr(r.staleTime, o)) && this.prefetchQuery(r),
        Promise.resolve(l))
    }
    getQueriesData(n) {
        return this.#t.findAll(n).map( ({queryKey: r, state: o}) => {
            const l = o.data;
            return [r, l]
        }
        )
    }
    setQueryData(n, r, o) {
        const l = this.defaultQueryOptions({
            queryKey: n
        })
          , f = this.#t.get(l.queryHash)?.state.data
          , d = Nx(r, f);
        if (d !== void 0)
            return this.#t.build(this, l).setData(d, {
                ...o,
                manual: !0
            })
    }
    setQueriesData(n, r, o) {
        return ut.batch( () => this.#t.findAll(n).map( ({queryKey: l}) => [l, this.setQueryData(l, r, o)]))
    }
    getQueryState(n) {
        const r = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#t.get(r.queryHash)?.state
    }
    removeQueries(n) {
        const r = this.#t;
        ut.batch( () => {
            r.findAll(n).forEach(o => {
                r.remove(o)
            }
            )
        }
        )
    }
    resetQueries(n, r) {
        const o = this.#t;
        return ut.batch( () => (o.findAll(n).forEach(l => {
            l.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...n
        }, r)))
    }
    cancelQueries(n, r={}) {
        const o = {
            revert: !0,
            ...r
        }
          , l = ut.batch( () => this.#t.findAll(n).map(u => u.cancel(o)));
        return Promise.all(l).then(_t).catch(_t)
    }
    invalidateQueries(n, r={}) {
        return ut.batch( () => (this.#t.findAll(n).forEach(o => {
            o.invalidate()
        }
        ),
        n?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...n,
            type: n?.refetchType ?? n?.type ?? "active"
        }, r)))
    }
    refetchQueries(n, r={}) {
        const o = {
            ...r,
            cancelRefetch: r.cancelRefetch ?? !0
        }
          , l = ut.batch( () => this.#t.findAll(n).filter(u => !u.isDisabled() && !u.isStatic()).map(u => {
            let f = u.fetch(void 0, o);
            return o.throwOnError || (f = f.catch(_t)),
            u.state.fetchStatus === "paused" ? Promise.resolve() : f
        }
        ));
        return Promise.all(l).then(_t)
    }
    fetchQuery(n) {
        const r = this.defaultQueryOptions(n);
        r.retry === void 0 && (r.retry = !1);
        const o = this.#t.build(this, r);
        return o.isStaleByTime(cr(r.staleTime, o)) ? o.fetch(r) : Promise.resolve(o.state.data)
    }
    prefetchQuery(n) {
        return this.fetchQuery(n).then(_t).catch(_t)
    }
    fetchInfiniteQuery(n) {
        return n.behavior = Oh(n.pages),
        this.fetchQuery(n)
    }
    prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(_t).catch(_t)
    }
    ensureInfiniteQueryData(n) {
        return n.behavior = Oh(n.pages),
        this.ensureQueryData(n)
    }
    resumePausedMutations() {
        return ul.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#t
    }
    getMutationCache() {
        return this.#e
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(n) {
        this.#n = n
    }
    setQueryDefaults(n, r) {
        this.#r.set(ho(n), {
            queryKey: n,
            defaultOptions: r
        })
    }
    getQueryDefaults(n) {
        const r = [...this.#r.values()]
          , o = {};
        return r.forEach(l => {
            mo(n, l.queryKey) && Object.assign(o, l.defaultOptions)
        }
        ),
        o
    }
    setMutationDefaults(n, r) {
        this.#i.set(ho(n), {
            mutationKey: n,
            defaultOptions: r
        })
    }
    getMutationDefaults(n) {
        const r = [...this.#i.values()]
          , o = {};
        return r.forEach(l => {
            mo(n, l.mutationKey) && Object.assign(o, l.defaultOptions)
        }
        ),
        o
    }
    defaultQueryOptions(n) {
        if (n._defaulted)
            return n;
        const r = {
            ...this.#n.queries,
            ...this.getQueryDefaults(n.queryKey),
            ...n,
            _defaulted: !0
        };
        return r.queryHash || (r.queryHash = mc(r.queryKey, r)),
        r.refetchOnReconnect === void 0 && (r.refetchOnReconnect = r.networkMode !== "always"),
        r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
        !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
        r.queryFn === vc && (r.enabled = !1),
        r
    }
    defaultMutationOptions(n) {
        return n?._defaulted ? n : {
            ...this.#n.mutations,
            ...n?.mutationKey && this.getMutationDefaults(n.mutationKey),
            ...n,
            _defaulted: !0
        }
    }
    clear() {
        this.#t.clear(),
        this.#e.clear()
    }
}
  , Qx = class extends No {
    constructor(n, r) {
        super(),
        this.options = r,
        this.#t = n,
        this.#o = null,
        this.#s = Yu(),
        this.options.experimental_prefetchInRender || this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        this.bindMethods(),
        this.setOptions(r)
    }
    #t;
    #e = void 0;
    #n = void 0;
    #r = void 0;
    #i;
    #l;
    #s;
    #o;
    #m;
    #d;
    #p;
    #u;
    #c;
    #a;
    #h = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#e.addObserver(this),
        Ph(this.#e, this.options) ? this.#f() : this.updateResult(),
        this.#w())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Xu(this.#e, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Xu(this.#e, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#b(),
        this.#x(),
        this.#e.removeObserver(this)
    }
    setOptions(n) {
        const r = this.options
          , o = this.#e;
        if (this.options = this.#t.defaultQueryOptions(n),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Bt(this.options.enabled, this.#e) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#S(),
        this.#e.setOptions(this.options),
        r._defaulted && !qu(this.options, r) && this.#t.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#e,
            observer: this
        });
        const l = this.hasListeners();
        l && Th(this.#e, o, this.options, r) && this.#f(),
        this.updateResult(),
        l && (this.#e !== o || Bt(this.options.enabled, this.#e) !== Bt(r.enabled, this.#e) || cr(this.options.staleTime, this.#e) !== cr(r.staleTime, this.#e)) && this.#v();
        const u = this.#g();
        l && (this.#e !== o || Bt(this.options.enabled, this.#e) !== Bt(r.enabled, this.#e) || u !== this.#a) && this.#y(u)
    }
    getOptimisticResult(n) {
        const r = this.#t.getQueryCache().build(this.#t, n)
          , o = this.createResult(r, n);
        return Kx(this, o) && (this.#r = o,
        this.#l = this.options,
        this.#i = this.#e.state),
        o
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(n, r) {
        return new Proxy(n,{
            get: (o, l) => (this.trackProp(l),
            r?.(l),
            Reflect.get(o, l))
        })
    }
    trackProp(n) {
        this.#h.add(n)
    }
    getCurrentQuery() {
        return this.#e
    }
    refetch({...n}={}) {
        return this.fetch({
            ...n
        })
    }
    fetchOptimistic(n) {
        const r = this.#t.defaultQueryOptions(n)
          , o = this.#t.getQueryCache().build(this.#t, r);
        return o.fetch().then( () => this.createResult(o, r))
    }
    fetch(n) {
        return this.#f({
            ...n,
            cancelRefetch: n.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#r))
    }
    #f(n) {
        this.#S();
        let r = this.#e.fetch(this.options, n);
        return n?.throwOnError || (r = r.catch(_t)),
        r
    }
    #v() {
        this.#b();
        const n = cr(this.options.staleTime, this.#e);
        if (Fr || this.#r.isStale || !Qu(n))
            return;
        const o = nv(this.#r.dataUpdatedAt, n) + 1;
        this.#u = setTimeout( () => {
            this.#r.isStale || this.updateResult()
        }
        , o)
    }
    #g() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#e) : this.options.refetchInterval) ?? !1
    }
    #y(n) {
        this.#x(),
        this.#a = n,
        !(Fr || Bt(this.options.enabled, this.#e) === !1 || !Qu(this.#a) || this.#a === 0) && (this.#c = setInterval( () => {
            (this.options.refetchIntervalInBackground || gc.isFocused()) && this.#f()
        }
        , this.#a))
    }
    #w() {
        this.#v(),
        this.#y(this.#g())
    }
    #b() {
        this.#u && (clearTimeout(this.#u),
        this.#u = void 0)
    }
    #x() {
        this.#c && (clearInterval(this.#c),
        this.#c = void 0)
    }
    createResult(n, r) {
        const o = this.#e
          , l = this.options
          , u = this.#r
          , f = this.#i
          , d = this.#l
          , v = n !== o ? n.state : this.#n
          , {state: m} = n;
        let g = {
            ...m
        }, y = !1, w;
        if (r._optimisticResults) {
            const re = this.hasListeners()
              , he = !re && Ph(n, r)
              , Y = re && Th(n, o, r, l);
            (he || Y) && (g = {
                ...g,
                ...uv(m.data, n.options)
            }),
            r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle")
        }
        let {error: b, errorUpdatedAt: E, status: x} = g;
        w = g.data;
        let M = !1;
        if (r.placeholderData !== void 0 && w === void 0 && x === "pending") {
            let re;
            u?.isPlaceholderData && r.placeholderData === d?.placeholderData ? (re = u.data,
            M = !0) : re = typeof r.placeholderData == "function" ? r.placeholderData(this.#p?.state.data, this.#p) : r.placeholderData,
            re !== void 0 && (x = "success",
            w = Gu(u?.data, re, r),
            y = !0)
        }
        if (r.select && w !== void 0 && !M)
            if (u && w === f?.data && r.select === this.#m)
                w = this.#d;
            else
                try {
                    this.#m = r.select,
                    w = r.select(w),
                    w = Gu(u?.data, w, r),
                    this.#d = w,
                    this.#o = null
                } catch (re) {
                    this.#o = re
                }
        this.#o && (b = this.#o,
        w = this.#d,
        E = Date.now(),
        x = "error");
        const A = g.fetchStatus === "fetching"
          , z = x === "pending"
          , B = x === "error"
          , W = z && A
          , Z = w !== void 0
          , J = {
            status: x,
            fetchStatus: g.fetchStatus,
            isPending: z,
            isSuccess: x === "success",
            isError: B,
            isInitialLoading: W,
            isLoading: W,
            data: w,
            dataUpdatedAt: g.dataUpdatedAt,
            error: b,
            errorUpdatedAt: E,
            failureCount: g.fetchFailureCount,
            failureReason: g.fetchFailureReason,
            errorUpdateCount: g.errorUpdateCount,
            isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
            isFetchedAfterMount: g.dataUpdateCount > v.dataUpdateCount || g.errorUpdateCount > v.errorUpdateCount,
            isFetching: A,
            isRefetching: A && !z,
            isLoadingError: B && !Z,
            isPaused: g.fetchStatus === "paused",
            isPlaceholderData: y,
            isRefetchError: B && Z,
            isStale: yc(n, r),
            refetch: this.refetch,
            promise: this.#s,
            isEnabled: Bt(r.enabled, n) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const re = K => {
                J.status === "error" ? K.reject(J.error) : J.data !== void 0 && K.resolve(J.data)
            }
              , he = () => {
                const K = this.#s = J.promise = Yu();
                re(K)
            }
              , Y = this.#s;
            switch (Y.status) {
            case "pending":
                n.queryHash === o.queryHash && re(Y);
                break;
            case "fulfilled":
                (J.status === "error" || J.data !== Y.value) && he();
                break;
            case "rejected":
                (J.status !== "error" || J.error !== Y.reason) && he();
                break
            }
        }
        return J
    }
    updateResult() {
        const n = this.#r
          , r = this.createResult(this.#e, this.options);
        if (this.#i = this.#e.state,
        this.#l = this.options,
        this.#i.data !== void 0 && (this.#p = this.#e),
        qu(r, n))
            return;
        this.#r = r;
        const o = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: l} = this.options
              , u = typeof l == "function" ? l() : l;
            if (u === "all" || !u && !this.#h.size)
                return !0;
            const f = new Set(u ?? this.#h);
            return this.options.throwOnError && f.add("error"),
            Object.keys(this.#r).some(d => {
                const p = d;
                return this.#r[p] !== n[p] && f.has(p)
            }
            )
        }
        ;
        this.#C({
            listeners: o()
        })
    }
    #S() {
        const n = this.#t.getQueryCache().build(this.#t, this.options);
        if (n === this.#e)
            return;
        const r = this.#e;
        this.#e = n,
        this.#n = n.state,
        this.hasListeners() && (r?.removeObserver(this),
        n.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#w()
    }
    #C(n) {
        ut.batch( () => {
            n.listeners && this.listeners.forEach(r => {
                r(this.#r)
            }
            ),
            this.#t.getQueryCache().notify({
                query: this.#e,
                type: "observerResultsUpdated"
            })
        }
        )
    }
}
;
function qx(n, r) {
    return Bt(r.enabled, n) !== !1 && n.state.data === void 0 && !(n.state.status === "error" && r.retryOnMount === !1)
}
function Ph(n, r) {
    return qx(n, r) || n.state.data !== void 0 && Xu(n, r, r.refetchOnMount)
}
function Xu(n, r, o) {
    if (Bt(r.enabled, n) !== !1 && cr(r.staleTime, n) !== "static") {
        const l = typeof o == "function" ? o(n) : o;
        return l === "always" || l !== !1 && yc(n, r)
    }
    return !1
}
function Th(n, r, o, l) {
    return (n !== r || Bt(l.enabled, n) === !1) && (!o.suspense || n.state.status !== "error") && yc(n, o)
}
function yc(n, r) {
    return Bt(r.enabled, n) !== !1 && n.isStaleByTime(cr(r.staleTime, n))
}
function Kx(n, r) {
    return !qu(n.getCurrentResult(), r)
}
var cv = _.createContext(void 0)
  , Gx = n => {
    const r = _.useContext(cv);
    if (n)
        return n;
    if (!r)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r
}
  , xC = ({client: n, children: r}) => (_.useEffect( () => (n.mount(),
() => {
    n.unmount()
}
), [n]),
k.jsx(cv.Provider, {
    value: n,
    children: r
}))
  , fv = _.createContext(!1)
  , Yx = () => _.useContext(fv);
fv.Provider;
function Xx() {
    let n = !1;
    return {
        clearReset: () => {
            n = !1
        }
        ,
        reset: () => {
            n = !0
        }
        ,
        isReset: () => n
    }
}
var Jx = _.createContext(Xx())
  , Zx = () => _.useContext(Jx)
  , eS = (n, r) => {
    (n.suspense || n.throwOnError || n.experimental_prefetchInRender) && (r.isReset() || (n.retryOnMount = !1))
}
  , tS = n => {
    _.useEffect( () => {
        n.clearReset()
    }
    , [n])
}
  , nS = ({result: n, errorResetBoundary: r, throwOnError: o, query: l, suspense: u}) => n.isError && !r.isReset() && !n.isFetching && l && (u && n.data === void 0 || Lx(o, [n.error, l]))
  , rS = n => {
    if (n.suspense) {
        const r = l => l === "static" ? l : Math.max(l ?? 1e3, 1e3)
          , o = n.staleTime;
        n.staleTime = typeof o == "function" ? (...l) => r(o(...l)) : r(o),
        typeof n.gcTime == "number" && (n.gcTime = Math.max(n.gcTime, 1e3))
    }
}
  , iS = (n, r) => n.isLoading && n.isFetching && !r
  , oS = (n, r) => n?.suspense && r.isPending
  , Mh = (n, r, o) => r.fetchOptimistic(n).catch( () => {
    o.clearReset()
}
);
function sS(n, r, o) {
    const l = Yx()
      , u = Zx()
      , f = Gx(o)
      , d = f.defaultQueryOptions(n);
    f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),
    d._optimisticResults = l ? "isRestoring" : "optimistic",
    rS(d),
    eS(d, u),
    tS(u);
    const p = !f.getQueryCache().get(d.queryHash)
      , [v] = _.useState( () => new r(f,d))
      , m = v.getOptimisticResult(d)
      , g = !l && n.subscribed !== !1;
    if (_.useSyncExternalStore(_.useCallback(y => {
        const w = g ? v.subscribe(ut.batchCalls(y)) : _t;
        return v.updateResult(),
        w
    }
    , [v, g]), () => v.getCurrentResult(), () => v.getCurrentResult()),
    _.useEffect( () => {
        v.setOptions(d)
    }
    , [d, v]),
    oS(d, m))
        throw Mh(d, v, u);
    if (nS({
        result: m,
        errorResetBoundary: u,
        throwOnError: d.throwOnError,
        query: f.getQueryCache().get(d.queryHash),
        suspense: d.suspense
    }))
        throw m.error;
    return f.getDefaultOptions().queries?._experimental_afterQuery?.(d, m),
    d.experimental_prefetchInRender && !Fr && iS(m, l) && (p ? Mh(d, v, u) : f.getQueryCache().get(d.queryHash)?.promise)?.catch(_t).finally( () => {
        v.updateResult()
    }
    ),
    d.notifyOnChangeProps ? m : v.trackResult(m)
}
function SC(n, r) {
    return sS(n, Qx, r)
}
function lS(n) {
    return n && typeof n.then == "function"
}
Promise.resolve(!1);
var aS = Promise.resolve(!0)
  , Tn = Promise.resolve();
function Pr(n, r) {
    return n || (n = 0),
    new Promise(function(o) {
        return setTimeout(function() {
            return o(r)
        }, n)
    }
    )
}
function uS(n, r) {
    return Math.floor(Math.random() * (r - n + 1) + n)
}
function Po() {
    return Math.random().toString(36).substring(2)
}
var Mu = 0;
function To() {
    var n = Date.now() * 1e3;
    return n <= Mu && (n = Mu + 1),
    Mu = n,
    n
}
function cS() {
    return typeof navigator < "u" && typeof navigator.locks < "u" && typeof navigator.locks.request == "function"
}
var fS = To
  , dS = "native";
function pS(n) {
    var r = {
        time: To(),
        messagesCallback: null,
        bc: new BroadcastChannel(n),
        subFns: []
    };
    return r.bc.onmessage = function(o) {
        r.messagesCallback && r.messagesCallback(o.data)
    }
    ,
    r
}
function hS(n) {
    n.bc.close(),
    n.subFns = []
}
function mS(n, r) {
    try {
        return n.bc.postMessage(r, !1),
        Tn
    } catch (o) {
        return Promise.reject(o)
    }
}
function vS(n, r) {
    n.messagesCallback = r
}
function gS() {
    if (typeof globalThis < "u" && globalThis.Deno && globalThis.Deno.args)
        return !0;
    if ((typeof window < "u" || typeof self < "u") && typeof BroadcastChannel == "function") {
        if (BroadcastChannel._pubkey)
            throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
        return !0
    } else
        return !1
}
function yS() {
    return 150
}
var wS = {
    create: pS,
    close: hS,
    onMessage: vS,
    postMessage: mS,
    canBeUsed: gS,
    type: dS,
    averageResponseTime: yS,
    microSeconds: fS
};
class dv {
    ttl;
    map = new Map;
    _to = !1;
    constructor(r) {
        this.ttl = r
    }
    has(r) {
        return this.map.has(r)
    }
    add(r) {
        this.map.set(r, pv()),
        this._to || (this._to = !0,
        setTimeout( () => {
            this._to = !1,
            bS(this)
        }
        , 0))
    }
    clear() {
        this.map.clear()
    }
}
function bS(n) {
    const r = pv() - n.ttl
      , o = n.map[Symbol.iterator]();
    for (; ; ) {
        const l = o.next().value;
        if (!l)
            return;
        const u = l[0];
        if (l[1] < r)
            n.map.delete(u);
        else
            return
    }
}
function pv() {
    return Date.now()
}
function wc() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , r = JSON.parse(JSON.stringify(n));
    return typeof r.webWorkerSupport > "u" && (r.webWorkerSupport = !0),
    r.idb || (r.idb = {}),
    r.idb.ttl || (r.idb.ttl = 1e3 * 45),
    r.idb.fallbackInterval || (r.idb.fallbackInterval = 150),
    n.idb && typeof n.idb.onclose == "function" && (r.idb.onclose = n.idb.onclose),
    r.localstorage || (r.localstorage = {}),
    r.localstorage.removeTimeout || (r.localstorage.removeTimeout = 1e3 * 60),
    n.methods && (r.methods = n.methods),
    r.node || (r.node = {}),
    r.node.ttl || (r.node.ttl = 1e3 * 60 * 2),
    r.node.maxParallelWrites || (r.node.maxParallelWrites = 2048),
    typeof r.node.useFastPath > "u" && (r.node.useFastPath = !0),
    r
}
var xS = To
  , SS = "pubkey.broadcast-channel-0-"
  , In = "messages"
  , xl = {
    durability: "relaxed"
}
  , CS = "idb";
function hv() {
    if (typeof indexedDB < "u")
        return indexedDB;
    if (typeof window < "u") {
        if (typeof window.mozIndexedDB < "u")
            return window.mozIndexedDB;
        if (typeof window.webkitIndexedDB < "u")
            return window.webkitIndexedDB;
        if (typeof window.msIndexedDB < "u")
            return window.msIndexedDB
    }
    return !1
}
function bc(n) {
    n.commit && n.commit()
}
function ES(n) {
    var r = hv()
      , o = SS + n
      , l = r.open(o);
    return l.onupgradeneeded = function(u) {
        var f = u.target.result;
        f.createObjectStore(In, {
            keyPath: "id",
            autoIncrement: !0
        })
    }
    ,
    new Promise(function(u, f) {
        l.onerror = function(d) {
            return f(d)
        }
        ,
        l.onsuccess = function() {
            u(l.result)
        }
    }
    )
}
function _S(n, r, o) {
    var l = Date.now()
      , u = {
        uuid: r,
        time: l,
        data: o
    }
      , f = n.transaction([In], "readwrite", xl);
    return new Promise(function(d, p) {
        f.oncomplete = function() {
            return d()
        }
        ,
        f.onerror = function(m) {
            return p(m)
        }
        ;
        var v = f.objectStore(In);
        v.add(u),
        bc(f)
    }
    )
}
function kS(n, r) {
    var o = n.transaction(In, "readonly", xl)
      , l = o.objectStore(In)
      , u = []
      , f = IDBKeyRange.bound(r + 1, 1 / 0);
    if (l.getAll) {
        var d = l.getAll(f);
        return new Promise(function(v, m) {
            d.onerror = function(g) {
                return m(g)
            }
            ,
            d.onsuccess = function(g) {
                v(g.target.result)
            }
        }
        )
    }
    function p() {
        try {
            return f = IDBKeyRange.bound(r + 1, 1 / 0),
            l.openCursor(f)
        } catch {
            return l.openCursor()
        }
    }
    return new Promise(function(v, m) {
        var g = p();
        g.onerror = function(y) {
            return m(y)
        }
        ,
        g.onsuccess = function(y) {
            var w = y.target.result;
            w ? w.value.id < r + 1 ? w.continue(r + 1) : (u.push(w.value),
            w.continue()) : (bc(o),
            v(u))
        }
    }
    )
}
function RS(n, r) {
    if (n.closed)
        return Promise.resolve([]);
    var o = n.db.transaction(In, "readwrite", xl)
      , l = o.objectStore(In);
    return Promise.all(r.map(function(u) {
        var f = l.delete(u);
        return new Promise(function(d) {
            f.onsuccess = function() {
                return d()
            }
        }
        )
    }))
}
function OS(n, r) {
    var o = Date.now() - r
      , l = n.transaction(In, "readonly", xl)
      , u = l.objectStore(In)
      , f = [];
    return new Promise(function(d) {
        u.openCursor().onsuccess = function(p) {
            var v = p.target.result;
            if (v) {
                var m = v.value;
                m.time < o ? (f.push(m),
                v.continue()) : (bc(l),
                d(f))
            } else
                d(f)
        }
    }
    )
}
function NS(n) {
    return OS(n.db, n.options.idb.ttl).then(function(r) {
        return RS(n, r.map(function(o) {
            return o.id
        }))
    })
}
function PS(n, r) {
    return r = wc(r),
    ES(n).then(function(o) {
        var l = {
            closed: !1,
            lastCursorId: 0,
            channelName: n,
            options: r,
            uuid: Po(),
            eMIs: new dv(r.idb.ttl * 2),
            writeBlockPromise: Tn,
            messagesCallback: null,
            readQueuePromises: [],
            db: o
        };
        return o.onclose = function() {
            l.closed = !0,
            r.idb.onclose && r.idb.onclose()
        }
        ,
        mv(l),
        l
    })
}
function mv(n) {
    n.closed || vv(n).then(function() {
        return Pr(n.options.idb.fallbackInterval)
    }).then(function() {
        return mv(n)
    })
}
function TS(n, r) {
    return !(n.uuid === r.uuid || r.eMIs.has(n.id) || n.data.time < r.messagesCallbackTime)
}
function vv(n) {
    return n.closed || !n.messagesCallback ? Tn : kS(n.db, n.lastCursorId).then(function(r) {
        var o = r.filter(function(l) {
            return !!l
        }).map(function(l) {
            return l.id > n.lastCursorId && (n.lastCursorId = l.id),
            l
        }).filter(function(l) {
            return TS(l, n)
        }).sort(function(l, u) {
            return l.time - u.time
        });
        return o.forEach(function(l) {
            n.messagesCallback && (n.eMIs.add(l.id),
            n.messagesCallback(l.data))
        }),
        Tn
    })
}
function MS(n) {
    n.closed = !0,
    n.db.close()
}
function LS(n, r) {
    return n.writeBlockPromise = n.writeBlockPromise.then(function() {
        return _S(n.db, n.uuid, r)
    }).then(function() {
        uS(0, 10) === 0 && NS(n)
    }),
    n.writeBlockPromise
}
function IS(n, r, o) {
    n.messagesCallbackTime = o,
    n.messagesCallback = r,
    vv(n)
}
function DS() {
    return !!hv()
}
function FS(n) {
    return n.idb.fallbackInterval * 2
}
var AS = {
    create: PS,
    close: MS,
    onMessage: IS,
    postMessage: LS,
    canBeUsed: DS,
    type: CS,
    averageResponseTime: FS,
    microSeconds: xS
}
  , jS = To
  , zS = "pubkey.broadcastChannel-"
  , BS = "localstorage";
function gv() {
    var n;
    if (typeof window > "u")
        return null;
    try {
        n = window.localStorage,
        n = window["ie8-eventlistener/storage"] || window.localStorage
    } catch {}
    return n
}
function yv(n) {
    return zS + n
}
function $S(n, r) {
    return new Promise(function(o) {
        Pr().then(function() {
            var l = yv(n.channelName)
              , u = {
                token: Po(),
                time: Date.now(),
                data: r,
                uuid: n.uuid
            }
              , f = JSON.stringify(u);
            gv().setItem(l, f);
            var d = document.createEvent("Event");
            d.initEvent("storage", !0, !0),
            d.key = l,
            d.newValue = f,
            window.dispatchEvent(d),
            o()
        })
    }
    )
}
function US(n, r) {
    var o = yv(n)
      , l = function(f) {
        f.key === o && r(JSON.parse(f.newValue))
    };
    return window.addEventListener("storage", l),
    l
}
function WS(n) {
    window.removeEventListener("storage", n)
}
function HS(n, r) {
    if (r = wc(r),
    !wv())
        throw new Error("BroadcastChannel: localstorage cannot be used");
    var o = Po()
      , l = new dv(r.localstorage.removeTimeout)
      , u = {
        channelName: n,
        uuid: o,
        eMIs: l
    };
    return u.listener = US(n, function(f) {
        u.messagesCallback && f.uuid !== o && (!f.token || l.has(f.token) || f.data.time && f.data.time < u.messagesCallbackTime || (l.add(f.token),
        u.messagesCallback(f.data)))
    }),
    u
}
function VS(n) {
    WS(n.listener)
}
function QS(n, r, o) {
    n.messagesCallbackTime = o,
    n.messagesCallback = r
}
function wv() {
    var n = gv();
    if (!n)
        return !1;
    try {
        var r = "__broadcastchannel_check";
        n.setItem(r, "works"),
        n.removeItem(r)
    } catch {
        return !1
    }
    return !0
}
function qS() {
    var n = 120
      , r = navigator.userAgent.toLowerCase();
    return r.includes("safari") && !r.includes("chrome") ? n * 2 : n
}
var KS = {
    create: HS,
    close: VS,
    onMessage: QS,
    postMessage: $S,
    canBeUsed: wv,
    type: BS,
    averageResponseTime: qS,
    microSeconds: jS
}
  , bv = To
  , GS = "simulate"
  , xc = new Set;
function YS(n) {
    var r = {
        time: bv(),
        name: n,
        messagesCallback: null
    };
    return xc.add(r),
    r
}
function XS(n) {
    xc.delete(n)
}
var xv = 5;
function JS(n, r) {
    return new Promise(function(o) {
        return setTimeout(function() {
            var l = Array.from(xc);
            l.forEach(function(u) {
                u.name === n.name && u !== n && u.messagesCallback && u.time < r.time && u.messagesCallback(r)
            }),
            o()
        }, xv)
    }
    )
}
function ZS(n, r) {
    n.messagesCallback = r
}
function eC() {
    return !0
}
function tC() {
    return xv
}
var nC = {
    create: YS,
    close: XS,
    onMessage: ZS,
    postMessage: JS,
    canBeUsed: eC,
    type: GS,
    averageResponseTime: tC,
    microSeconds: bv
}
  , Lh = [wS, AS, KS];
function rC(n) {
    var r = [].concat(n.methods, Lh).filter(Boolean);
    if (n.type) {
        if (n.type === "simulate")
            return nC;
        var o = r.find(function(u) {
            return u.type === n.type
        });
        if (o)
            return o;
        throw new Error("method-type " + n.type + " not found")
    }
    n.webWorkerSupport || (r = r.filter(function(u) {
        return u.type !== "idb"
    }));
    var l = r.find(function(u) {
        return u.canBeUsed()
    });
    if (l)
        return l;
    throw new Error("No usable method found in " + JSON.stringify(Lh.map(function(u) {
        return u.type
    })))
}
var Sv = new Set
  , iC = 0
  , Cv = function(r, o) {
    this.id = iC++,
    Sv.add(this),
    this.name = r,
    this.options = wc(o),
    this.method = rC(this.options),
    this._iL = !1,
    this._onML = null,
    this._addEL = {
        message: [],
        internal: []
    },
    this._uMP = new Set,
    this._befC = [],
    this._prepP = null,
    oC(this)
};
Cv._pubkey = !0;
Cv.prototype = {
    postMessage: function(r) {
        if (this.closed)
            throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(r));
        return Ih(this, "message", r)
    },
    postInternal: function(r) {
        return Ih(this, "internal", r)
    },
    set onmessage(n) {
        var r = this.method.microSeconds()
          , o = {
            time: r,
            fn: n
        };
        Fh(this, "message", this._onML),
        n && typeof n == "function" ? (this._onML = o,
        Dh(this, "message", o)) : this._onML = null
    },
    addEventListener: function(r, o) {
        var l = this.method.microSeconds()
          , u = {
            time: l,
            fn: o
        };
        Dh(this, r, u)
    },
    removeEventListener: function(r, o) {
        var l = this._addEL[r].find(function(u) {
            return u.fn === o
        });
        Fh(this, r, l)
    },
    close: function() {
        var r = this;
        if (!this.closed) {
            Sv.delete(this),
            this.closed = !0;
            var o = this._prepP ? this._prepP : Tn;
            return this._onML = null,
            this._addEL.message = [],
            o.then(function() {
                return Promise.all(Array.from(r._uMP))
            }).then(function() {
                return Promise.all(r._befC.map(function(l) {
                    return l()
                }))
            }).then(function() {
                return r.method.close(r._state)
            })
        }
    },
    get type() {
        return this.method.type
    },
    get isClosed() {
        return this.closed
    }
};
function Ih(n, r, o) {
    var l = n.method.microSeconds()
      , u = {
        time: l,
        type: r,
        data: o
    }
      , f = n._prepP ? n._prepP : Tn;
    return f.then(function() {
        var d = n.method.postMessage(n._state, u);
        return n._uMP.add(d),
        d.catch().then(function() {
            return n._uMP.delete(d)
        }),
        d
    })
}
function oC(n) {
    var r = n.method.create(n.name, n.options);
    lS(r) ? (n._prepP = r,
    r.then(function(o) {
        n._state = o
    })) : n._state = r
}
function Ev(n) {
    return n._addEL.message.length > 0 || n._addEL.internal.length > 0
}
function Dh(n, r, o) {
    n._addEL[r].push(o),
    sC(n)
}
function Fh(n, r, o) {
    n._addEL[r] = n._addEL[r].filter(function(l) {
        return l !== o
    }),
    lC(n)
}
function sC(n) {
    if (!n._iL && Ev(n)) {
        var r = function(u) {
            n._addEL[u.type].forEach(function(f) {
                u.time >= f.time && f.fn(u.data)
            })
        }
          , o = n.method.microSeconds();
        n._prepP ? n._prepP.then(function() {
            n._iL = !0,
            n.method.onMessage(n._state, r, o)
        }) : (n._iL = !0,
        n.method.onMessage(n._state, r, o))
    }
}
function lC(n) {
    if (n._iL && !Ev(n)) {
        n._iL = !1;
        var r = n.method.microSeconds();
        n.method.onMessage(n._state, null, r)
    }
}
function aC(n) {
    if (typeof WorkerGlobalScope == "function" && self instanceof WorkerGlobalScope) {
        var r = self.close.bind(self);
        self.close = function() {
            return n(),
            r()
        }
    } else {
        if (typeof window.addEventListener != "function")
            return;
        window.addEventListener("beforeunload", function() {
            n()
        }, !0),
        window.addEventListener("unload", function() {
            n()
        }, !0)
    }
}
function uC(n) {
    process.on("exit", function() {
        return n()
    }),
    process.on("beforeExit", function() {
        return n().then(function() {
            return process.exit()
        })
    }),
    process.on("SIGINT", function() {
        return n().then(function() {
            return process.exit()
        })
    }),
    process.on("uncaughtException", function(r) {
        return n().then(function() {
            console.trace(r),
            process.exit(101)
        })
    })
}
var cC = Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
  , fC = cC ? uC : aC
  , co = new Set
  , Ah = !1;
function dC() {
    Ah || (Ah = !0,
    fC(hC))
}
function pC(n) {
    if (dC(),
    typeof n != "function")
        throw new Error("Listener is no function");
    co.add(n);
    var r = {
        remove: function() {
            return co.delete(n)
        },
        run: function() {
            return co.delete(n),
            n()
        }
    };
    return r
}
function hC() {
    var n = [];
    return co.forEach(function(r) {
        n.push(r()),
        co.delete(r)
    }),
    Promise.all(n)
}
function Lr(n, r) {
    var o = {
        context: "leader",
        action: r,
        token: n.token
    };
    return n.broadcastChannel.postInternal(o)
}
function _v(n) {
    n.isLeader = !0,
    n._hasLeader = !0;
    var r = pC(function() {
        return n.die()
    });
    n._unl.push(r);
    var o = function(u) {
        u.context === "leader" && u.action === "apply" && Lr(n, "tell"),
        u.context === "leader" && u.action === "tell" && !n._dpLC && (n._dpLC = !0,
        n._dpL(),
        Lr(n, "tell"))
    };
    return n.broadcastChannel.addEventListener("internal", o),
    n._lstns.push(o),
    Lr(n, "tell")
}
var kv = function(r, o) {
    var l = this;
    this.broadcastChannel = r,
    r._befC.push(function() {
        return l.die()
    }),
    this._options = o,
    this.isLeader = !1,
    this.isDead = !1,
    this.token = Po(),
    this._lstns = [],
    this._unl = [],
    this._dpL = function() {}
    ,
    this._dpLC = !1,
    this._wKMC = {},
    this.lN = "pubkey-bc||" + r.method.type + "||" + r.name
};
kv.prototype = {
    hasLeader: function() {
        var r = this;
        return navigator.locks.query().then(function(o) {
            var l = o.held ? o.held.filter(function(u) {
                return u.name === r.lN
            }) : [];
            return !!(l && l.length > 0)
        })
    },
    awaitLeadership: function() {
        var r = this;
        if (!this._wLMP) {
            this._wKMC.c = new AbortController;
            var o = new Promise(function(l, u) {
                r._wKMC.res = l,
                r._wKMC.rej = u
            }
            );
            this._wLMP = new Promise(function(l) {
                navigator.locks.request(r.lN, {
                    signal: r._wKMC.c.signal
                }, function() {
                    return r._wKMC.c = void 0,
                    _v(r),
                    l(),
                    o
                }).catch(function() {})
            }
            )
        }
        return this._wLMP
    },
    set onduplicate(n) {},
    die: function() {
        var r = this;
        return this._lstns.forEach(function(o) {
            return r.broadcastChannel.removeEventListener("internal", o)
        }),
        this._lstns = [],
        this._unl.forEach(function(o) {
            return o.remove()
        }),
        this._unl = [],
        this.isLeader && (this.isLeader = !1),
        this.isDead = !0,
        this._wKMC.res && this._wKMC.res(),
        this._wKMC.c && this._wKMC.c.abort("LeaderElectionWebLock.die() called"),
        Lr(this, "death")
    }
};
var Rv = function(r, o) {
    var l = this;
    this.broadcastChannel = r,
    this._options = o,
    this.isLeader = !1,
    this._hasLeader = !1,
    this.isDead = !1,
    this.token = Po(),
    this._aplQ = Tn,
    this._aplQC = 0,
    this._unl = [],
    this._lstns = [],
    this._dpL = function() {}
    ,
    this._dpLC = !1;
    var u = function(d) {
        d.context === "leader" && (d.action === "death" && (l._hasLeader = !1),
        d.action === "tell" && (l._hasLeader = !0))
    };
    this.broadcastChannel.addEventListener("internal", u),
    this._lstns.push(u)
};
Rv.prototype = {
    hasLeader: function() {
        return Promise.resolve(this._hasLeader)
    },
    applyOnce: function(r) {
        var o = this;
        if (this.isLeader)
            return Pr(0, !0);
        if (this.isDead)
            return Pr(0, !1);
        if (this._aplQC > 1)
            return this._aplQ;
        var l = function() {
            if (o.isLeader)
                return aS;
            var f = !1, d, p = new Promise(function(g) {
                d = function() {
                    f = !0,
                    g()
                }
            }
            ), v = function(y) {
                y.context === "leader" && y.token != o.token && (y.action === "apply" && y.token > o.token && d(),
                y.action === "tell" && (d(),
                o._hasLeader = !0))
            };
            o.broadcastChannel.addEventListener("internal", v);
            var m = r ? o._options.responseTime * 4 : o._options.responseTime;
            return Lr(o, "apply").then(function() {
                return Promise.race([Pr(m), p.then(function() {
                    return Promise.reject(new Error)
                })])
            }).then(function() {
                return Lr(o, "apply")
            }).then(function() {
                return Promise.race([Pr(m), p.then(function() {
                    return Promise.reject(new Error)
                })])
            }).catch(function() {}).then(function() {
                return o.broadcastChannel.removeEventListener("internal", v),
                f ? !1 : _v(o).then(function() {
                    return !0
                })
            })
        };
        return this._aplQC = this._aplQC + 1,
        this._aplQ = this._aplQ.then(function() {
            return l()
        }).then(function() {
            o._aplQC = o._aplQC - 1
        }),
        this._aplQ.then(function() {
            return o.isLeader
        })
    },
    awaitLeadership: function() {
        return this._aLP || (this._aLP = mC(this)),
        this._aLP
    },
    set onduplicate(n) {
        this._dpL = n
    },
    die: function() {
        var r = this;
        return this._lstns.forEach(function(o) {
            return r.broadcastChannel.removeEventListener("internal", o)
        }),
        this._lstns = [],
        this._unl.forEach(function(o) {
            return o.remove()
        }),
        this._unl = [],
        this.isLeader && (this._hasLeader = !1,
        this.isLeader = !1),
        this.isDead = !0,
        Lr(this, "death")
    }
};
function mC(n) {
    return n.isLeader ? Tn : new Promise(function(r) {
        var o = !1;
        function l() {
            o || (o = !0,
            n.broadcastChannel.removeEventListener("internal", f),
            r(!0))
        }
        n.applyOnce().then(function() {
            n.isLeader && l()
        });
        var u = function() {
            return Pr(n._options.fallbackInterval).then(function() {
                if (!(n.isDead || o))
                    if (n.isLeader)
                        l();
                    else
                        return n.applyOnce(!0).then(function() {
                            n.isLeader ? l() : u()
                        })
            })
        };
        u();
        var f = function(p) {
            p.context === "leader" && p.action === "death" && (n._hasLeader = !1,
            n.applyOnce().then(function() {
                n.isLeader && l()
            }))
        };
        n.broadcastChannel.addEventListener("internal", f),
        n._lstns.push(f)
    }
    )
}
function vC(n, r) {
    return n || (n = {}),
    n = JSON.parse(JSON.stringify(n)),
    n.fallbackInterval || (n.fallbackInterval = 3e3),
    n.responseTime || (n.responseTime = r.method.averageResponseTime(r.options)),
    n
}
function CC(n, r) {
    if (n._leaderElector)
        throw new Error("BroadcastChannel already has a leader-elector");
    r = vC(r, n);
    var o = cS() ? new kv(n,r) : new Rv(n,r);
    return n._befC.push(function() {
        return o.die()
    }),
    n._leaderElector = o,
    o
}
export {Cv as B, qy as E, Lb as N, xC as Q, Ny as R, SC as a, Zu as b, CC as c, Ir as d, bC as e, wC as f, gC as g, _1 as h, E1 as i, k as j, Vy as k, yi as l, pc as m, jr as n, fo as o, ob as p, yC as q, _ as r, Ut as t, Gx as u};
