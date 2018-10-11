try {
    !function () {
        var cookie = function () {
            var Cookie = {
                cookieAPI: {
                    get: function (name) {
                        var nameEQ = name + '=';
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') {
                                c = c.substring(1, c.length);
                            }
                            if (c.indexOf(nameEQ) == 0) {
                                return decodeURIComponent(c.substring(nameEQ.length, c.length));
                            }
                        }
                        return false;
                    },
                    // cookie.set('age','18',1*60*60*1000 || {expires:1*60*60*1000}) or cookie.set({age:18},1*60*60*1000)
                    set: function (name, value, options) {
                        if (Cookie.isPlainObject(name)) {
                            for (var k in name) {
                                if (name.hasOwnProperty(k)) this.set(k, name[k], value);
                            }
                        }
                        else {
                            var opt = Cookie.isPlainObject(options) ? options : { expires: options },
                                expires = opt.expires !== undefined ? opt.expires : '',
                                now = new Date,
                                expiresDate = null,
                                path = opt.path ? ';path=' + opt.path : ';path=/',
                                domain = opt.domain ? ';domain=' + opt.domain : '',
                                secure = opt.secure ? ';secure' : '';

                            expiresDate = new Date(now.getTime() + expires);
                            expires = ';expires=' + expiresDate.toUTCString();

                            document.cookie = name + '=' + encodeURIComponent(value) + expires + path + domain + secure;
                        }
                    },
                    remove: function (names) {
                        names = Cookie.isArray(names) ? names : Cookie.toArray(arguments);
                        for (var i = 0, l = names.length; i < l; i++) {
                            this.set(names[i], '', -1);
                        }
                        return names;
                    },
                    clear: function () {
                        return this.remove(Cookie.getKeys(this.all()));
                    },
                    all: function () {
                        if (document.cookie === '') return {};
                        var cookies = document.cookie.split('; '), result = {};
                        for (var i = 0, l = cookies.length; i < l; i++) {
                            var item = cookies[i].split('=');
                            result[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
                        }
                        return result;
                    }
                },
                // return []
                getKeys: Object.names || function (obj) {
                    var names = [], name = '';
                    for (name in obj) {
                        if (obj.hasOwnProperty(name)) names.push(name);
                    }
                    return names;
                },
                isPlainObject: function (value) {
                    return !!value && Object.prototype.toString.call(value) === '[object Object]';
                },
                isArray: function (value) {
                    return value instanceof Array;
                },
                toArray: function (value) {
                    return Array.prototype.slice.call(value);
                }
            };

            var cookie = function (name, value, options) {
                var argm = arguments,
                    _cookie = function () {
                        if (argm.length === 0) return cookie.clear();
                        if (Cookie.isPlainObject(name) || (argm.length > 1 && name && value))
                            return cookie.set(name, value, options);
                        if (value === null) return cookie.remove(name);
                        if (argm.length === 1) return cookie.get(name);
                        return cookie.all();
                    };
                return _cookie();
            };
            for (var a in Cookie.cookieAPI) cookie[a] = Cookie.cookieAPI[a];
            return cookie;
        }();

        function parseJSON(e) {
            if (typeof e === 'string') {
                return e;
            }
            var t;
            try {
                t = stringify(e);
            } catch (r) {
                return '';
            }
            return t;
        }

        // 解析对象为JSON字符串
        function stringify(target) {
            if ('undefined' != typeof JSON) return JSON.stringify(target);
            if (target instanceof Array) {
                for (var t = [], r = 0; r < target.length; r++) t.push(stringify(target[r]));
                return '[' + t.join(',') + ']';
            }
            var n = [];
            for (var a in target)
                if (target.hasOwnProperty(a)) {
                    var i = '"' + a + '":',
                        o = target[a];
                    o && ('object' == typeof o ? i += stringify(o) : 'number' == typeof o ? i += o : i = i + '"' + o.replace(/\n/g, '\\n') + '"', n.push(i));
                }
            return '{' + n.join(',') + '}';
        }

        // 获取屏幕宽高
        function getViewportSize() {
            var screen = window.screen || {};
            return {
                width: screen.width || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: screen.height || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        }

        // 特性检测器
        var Detector = {
            create: function (el) {
                return document.createElement(el);
            },
            old: !!/(Android\s(1.|2.))|(Silk\/1.)/i.test(navigator.userAgent),
            // Detector.pfx('transition') return null or 'transition'
            pfx: function () {
                var t = document.createElement('dummy').style,
                    i = ['Webkit', 'Moz', 'O', 'ms'],
                    map = {};
                return function (e) {
                    if ('undefined' == typeof map[e]) {
                        var o = e.charAt(0).toUpperCase() + e.substr(1),
                            r = (e + ' ' + i.join(o + ' ') + o).split(' ');
                        map[e] = null;
                        for (var s in r) if (t[r[s]] !== undefined) {
                            map[e] = r[s];
                            break;
                        }
                    }
                    return map[e];
                };
            }()
        };
        var Feature = {
            cssTransition: function () {
                var t = null !== Detector.pfx('transition');
                return !!t;
            }(),
            localStorage: 'localStorage' in window,
            historyAPI: window.history && 'pushState' in window.history,
            addEventListener: !!document.addEventListener,
            JSON: 'JSON' in window,
            placeholder: 'placeholder' in document.createElement('input')
        };
        // 线上 CDN_URL = "//static.shulidata.com/v2017072801"
        var CDN_URL = window.CDN_URL || '';
        var s = CDN_URL.indexOf('com/');
        // 前端代码版本
        var appVersion = s > -1 ? CDN_URL.substr(s + 4) : 'dev';

        // 获取业务数据
        var SA_DATA = (function () {
            var metas = document.getElementsByTagName('meta');
            var target = {};
            for (var i = 0; i < metas.length; i++) {
                var meta = metas[i];
                if (meta.name = 'ctx' && meta.getAttribute('biz-no')) {
                    target = {
                        appVersion: appVersion,
                        bizNo: meta.getAttribute('biz-no'),
                        orgCode: meta.getAttribute('org-code'),
                        prodCode: meta.getAttribute('prod-code'),
                        bizType: meta.getAttribute('biz-type')
                    };
                    break;
                }
            }

            return target;
        })();
        var sd = window['SA'] || {};
        var view = getViewportSize();
        sd._t = sd._t || 1 * new Date, sd.has_load_sdk = !0;

        var _ = sd._ = {
            processError: function (errObj) {
                try {
                    if (errObj.stack) {
                        var url = errObj.stack.match('https?://[^\n]+');
                        url = url ? url[0] : '';
                        var rowCols = url.match(':(\\d+):(\\d+)');
                        if (!rowCols) {
                            rowCols = [0, 0, 0];
                        }

                        var stack = _.processStackMsg(errObj);
                        return {
                            msg: stack,
                            rowNum: rowCols[1],
                            colNum: rowCols[2],
                            target: url.replace(rowCols[0], ''),
                            _orgMsg: errObj.toString()
                        };
                    } else {
                        //ie 独有 error 对象信息，try-catch 捕获到错误信息传过来，造成没有msg
                        if (errObj.name && errObj.message && errObj.description) {
                            return {
                                msg: JSON.stringify(errObj)
                            };
                        }
                        return errObj;
                    }
                } catch (err) {
                    return errObj;
                }
            },
            processStackMsg: function (error) {
                var stack = error.stack
                    .replace(/\n/gi, '')
                    .split(/\bat\b/)
                    .slice(0, 9)
                    .join('@')
                    .replace(/\?[^:]+/gi, '');
                var msg = error.toString();
                if (stack.indexOf(msg) < 0) {
                    stack = msg + '@' + stack;
                }
                return stack;
            },
            isOBJByType: function (o, type) {
                return Object.prototype.toString.call(o) === '[object ' + (type || 'Object') + ']';
            }
        };
        var ArrayProto = Array.prototype,
            FuncProto = Function.prototype,
            ObjProto = Object.prototype,
            slice = ArrayProto.slice,
            toString = ObjProto.toString,
            hasOwnProperty = ObjProto.hasOwnProperty;

        // 本地存储
        var storeFactory = function (store) {
            var _local = store || {
                    getItem: function (key) {
                        return this[key];
                    },
                    setItem: function (key, value) {
                        this[key] = value;
                    },
                    removeItem: function (key) {
                        delete this[key];
                    }
                },
                _get = function (k) {
                    var d = _getData(k);
                    if (d != null) return d.value;
                    return null;
                }, _getData = function (k) {
                    if (k in _local) {
                        return JSON.parse(_local.getItem(k));
                    } else if (k in _local) return JSON.parse(_local.getItem(k));
                    else return null;
                }, _set = function (k, v) {
                    var d = {
                        value: v,
                        ts: (new Date).getTime()
                    };
                    d = JSON.stringify(d);

                    _local.setItem(k, d);
                }, _clear = function () {

                    _local.clear();
                }, _remove = function (k) {

                    _local.removeItem(k);
                }, _removeExpires = function (time) {
                    var now = (new Date).getTime(),
                        data;
                    for (var key in _local) {
                        data = _getData(key);
                        if (now - data.ts > time) {
                            _local.removeItem(key);

                        }
                    }
                }, _setData = function (k, data) {
                    var d;
                    if (typeof data === 'object') {
                        data.ts = (new Date).getTime();
                        d = JSON.stringify(data);
                        _local.setItem(k, d);
                    }
                };
            return {
                set: _set,
                get: _get,
                setData: _setData,
                getData: _getData,
                clear: _clear,
                remove: _remove,
                removeExpires: _removeExpires
            };
        };
        //
        sd.store = storeFactory(window.localStorage);

        _.each = function (t, r, a) {
            if (null == t) return !1;
            if (Array.prototype.forEach) t.forEach(r, a);
            else if (t.length === +t.length) {
                for (var i = 0, s = t.length; s > i; i++)
                    if (i in t && r.call(a, t[i], i, t) === n) return !1;
            } else
                for (var o in t)
                    if (hasOwnProperty.call(t, o) && r.call(a, t[o], o, t) === n) return !1;
        };
        _.extend = function (e) {
            return _.each(slice.call(arguments, 1), function (t) {
                for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
            }), e;
        };
        _.isFunction = function (cb) {
            if (!cb) return !1;
            try {
                return /^\s*\bfunction\b/.test(cb);
            } catch (t) {
                return !1;
            }
        };
        _.trim = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
        _.isObject = function (e) {
            return '[object Object]' == toString.call(e) && null != e;
        };
        _.isEmptyObject = function (e) {
            if (_.isObject(e)) {
                for (var t in e)
                    if (hasOwnProperty.call(e, t)) return !1;
                return !0;
            }
            return !1;
        };
        _.isUndefined = function (e) {
            return void 0 === e;
        };
        _.isString = function (e) {
            return '[object String]' == toString.call(e);
        };
        _.isDate = function (e) {
            return '[object Date]' == toString.call(e);
        };
        _.isBoolean = function (e) {
            return '[object Boolean]' == toString.call(e);
        };
        _.isNumber = function (e) {
            return '[object Number]' == toString.call(e) && /[\d\.]+/.test(String(e));
        };
        _.isElement = function (e) {
            return !(!e || 1 !== e.nodeType);
        };
        _.UUID = function () {
            function S4() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }

            function guid() {
                return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
            }

            return guid;
        }();
        _.bindReady = function (e) {
            function t() {
                return n ? !1 : (n = !0, void e());
            }

            function r() {
                if (!n) try {
                    document.documentElement.doScroll('left'), t();
                } catch (e) {
                    setTimeout(r, 10);
                }
            }

            var n = !1;
            if (document.addEventListener) document.addEventListener('DOMContentLoaded', t, !1);
            else if (document.attachEvent) {
                try {
                    var a = null != window.frameElement;
                } catch (i) {
                }
                document.documentElement.doScroll && !a && r(), document.attachEvent('onreadystatechange', function () {
                    'complete' === document.readyState && t();
                });
            }
            if (window.addEventListener) window.addEventListener('load', t, !1);
            else if (window.attachEvent) window.attachEvent('onload', t);
            else {
                var s = window.onload;
                window.onload = function () {
                    s && s(), t();
                };
            }
        };
        _.addEvent = function () {
            function bind(e, r, n) {
                var a = function (a) {
                    if (a = a || t(window.event)) {
                        a.target = a.srcElement;
                        var i, s, o = !0;
                        return _.isFunction(n) && (i = n(a)), s = r.call(e, a), (!1 === i || !1 === s) && (o = !1), o;
                    }
                };
                return a;
            }

            function t(e) {
                return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), e;
            }

            var r = function (el, evt, cb) {
                if (el && el.addEventListener) {
                    el.addEventListener(evt, cb, !1);
                }
                else {
                    var _evt = 'on' + evt,
                        _evtFn = el[_evt];
                    el[_evt] = bind(el, cb, _evtFn);
                }
            };
            t.preventDefault = function () {
                this.returnValue = !1;
            }, t.stopPropagation = function () {
                this.cancelBubble = !0;
            }, r.apply(null, arguments);
        };
        _.addHashEvent = function (cb) {
            var evt = 'pushState' in window.history ? 'popstate' : 'hashchange';
            _.addEvent(window, evt, cb);
        };
        _.xhr = function (cors) {
            // 假如跨域
            if (cors) {
                var t = new XMLHttpRequest;
                return 'withCredentials' in t ? t : 'undefined' != typeof XDomainRequest ? new XDomainRequest : t;
            }
            if (XMLHttpRequest) return new XMLHttpRequest;
            if (window.ActiveXObject) try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (r) {
                try {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                } catch (r) {
                }
            }
        };
        _.ajax = function (e) {
            function t(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return {};
                }
            }

            var r = _.xhr(e.cors);
            e.type || (e.type = e.data ? 'POST' : 'GET'), e = _.extend({
                success: function () {
                },
                error: function () {
                }
            }, e), r.onreadystatechange = function () {
                4 == r.readyState && (r.status >= 200 && r.status < 300 || 304 == r.status ? e.success(t(r.responseText)) : e.error(t(r.responseText), r.status), r.onreadystatechange = null, r.onload = null);
            }, r.open(e.type, e.url, !0);
            try {
                if (r.withCredentials = !0, _.isObject(e.header))
                    for (var n in e.header) r.setRequestHeader(n, e.header[n]);
                e.data && (r.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), 'application/json' === e.contentType ? r.setRequestHeader('Content-type', 'application/json; charset=UTF-8') : r.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'));
            } catch (a) {
            }
            r.send(e.data || null);
        };

        sd.sendCall = function (params) {
            //拼接参数串
            var args = '', me = this;
            for (var i in params) {
                if (args != '') {
                    args += '&';
                }
                args += i + '=' + encodeURIComponent(parseJSON(params[i]));
            }

            //通过Image对象请求后端脚本
            //当浏览器回收内存的时候这个请求是发不出去的，所以要将这个变量用window hold住
            var r = 'wap_log_' + Math.floor(2147483648 * Math.random()).toString(36), img = new Image(1, 1);
            window[r] = img;
            img.onload = img.onerror = img.onabort = function () {
                img.onload = null, img.onload = null, img.onload = null, window[r] = null, img = null;
            };
            img.src = (sd.para.server_url || '//uba.shulidata.com/uba.gif') + '?' + args;

        };
        //主动报错
        sd.notifyError = function (err, option) {
            var data = _.processError(err);
            var opt = option || {};
            var params = _.extend({}, { type: 'caught', detail: data }, opt);

            sd.track('js_error', params);
        };
        //捕获自定义数据
        sd.notify = function (title, option) {
            var opt = option || {};
            var params = _.extend({}, { title: title }, opt);
            sd.track('console', params);
        };
        sd.track = function (action, params) {
            // 如果是外链的js报错不上报错误 因为跨域没有详细错误信息
            if (params.detail && params.detail._orgMsg === 'Script error.') {
                return;
            }
            if (params.detail && params.detail._orgMsg) {
                params.detail.msg = params.detail._orgMsg;
                delete params.detail._orgMsg;
            }
            var uuid = _.UUID();
            var data = sd.para.data || {};
            var deviceSpec = sd.store.get('$device_id') ? sd.store.get('$device_id') : (sd.store.set('$device_id', uuid), uuid);
            params = params || {};
            params.title = params.title || document.title || '';
            params.referrer = params.referrer || '';
            params.lang = navigator.language || '';
            params.ua = navigator.userAgent;
            params.action = action;
            params.formId = params.formId || action;
            params.deviceSpec = deviceSpec;
            params.time = +new Date();
            params.url = params.url || location.href || '';

            _.extend(params, data);
            sd.sendCall(params);
        };

        sd._init = function () {
            var st = +new Date();
            // 是否是新用户
            var isNew = sd.store.get('$device_id') ? 0 : 1;
            var isFirst = 1;
            var daybreak = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1000;
            // 是否支持所有特性
            var flag = true, API = [];
            for (var f in Feature) {
                if (Feature[f] === false) {
                    flag = false;
                    API.push(f);
                }
            }
            // 今天第一次访问
            if (cookie('isFirst')) {
                isFirst = 0;
            } else {
                // 设置当天午夜过期
                cookie('isFirst', 1, daybreak - st);
                isFirst = 1;
            }
            // 假如有不支持的特性则上报
            !flag && sd.track('js_error', {
                title: '设备特性不支持',
                type: 'feature',
                detail: API.join(',')
            });
            // 绑定[action-bind-click]
            _.addEvent(document, 'click', function (e) {
                var evt = e || window.event,
                    target = evt.target || evt.srcElement,
                    id = target.id || '',
                    className = target.className || '',
                    name = target.name || '',
                    action = target.getAttribute('action-bind-click') || '',
                    text = target.textContent || target.innerText || '',
                    detail = _.trim(text),
                    subDetail = target.getAttribute('data-subdetail') || '',
                    tagName = target.tagName.toLowerCase();

                if ('body' === tagName || 'html' === tagName) return !1;
                (action || 'button' === tagName || 'a' === tagName || 'span' === tagName) && sd.track('click', {
                    url: location.href,
                    formId: action || id || name || tagName,
                    detail: detail,
                    subDetail: subDetail
                });
            });

            _.bindReady(function () {
                var et = +new Date();
                var diff = et - st;

                // DOM加载完成
                sd.track('domloaded', {
                    title: '页面首屏加载完成',
                    isFirst: isFirst,
                    isNew: isNew,
                    detail: diff
                });

            });
        };
        // 默认参数
        sd.para = sd.para || {}, sd.para_default = {
            data: _.extend({}, {
                notifierVersion: '1.0.0',
                view: view.width + ',' + view.height,
                appVersion: appVersion
            }, SA_DATA),
            max_string_length: 2000,
            is_trackLink: false
        };
        for (var i in sd.para_default) void 0 === sd.para[i] && (sd.para[i] = sd.para_default[i]);
        sd._init();

        var orgError = window.onerror;
        // rewrite window.oerror
        window.onerror = function (msg, url, line, col, error) {
            var newMsg = msg, params;

            if (error && error.stack) {
                newMsg = _.processStackMsg(error);
            }

            if (_.isOBJByType(newMsg, 'Event')) {
                newMsg += newMsg.type ? ('--' + newMsg.type + '--' + (newMsg.target ? (newMsg.target.tagName + '::' + newMsg.target.src) : '')) : '';
            }
            params = {
                type: 'uncaught',
                detail: {
                    msg: newMsg,
                    target: url,
                    rowNum: line,
                    colNum: col,
                    _orgMsg: msg
                }
            };
            sd.track('js_error', params);

            //orgError && orgError.apply(window, arguments);
        };

    }();
} catch (err) {
    window.console && window.console.log(err);
}
