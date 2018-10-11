export default {
    /**
     * @param {string} content 显示内容
     * @param {string} type 显示类型 'loading','warn','success','network','fail'
     * @param {function} callback 回调函数
     * @returns
     */
    loading(content, type, callback) {

    },
    /**
     * @param {string} query字符串 选填 http://www.mr.com/?a=1&b=2#login
     * @returns {object} {a:1,b:2}
     */
    query2Object(str) {
        let url = str || document.URL;
        // removeURLAnchor
        url.indexOf('#') > 0 && (url = url.substring(0, url.indexOf('#')))
        let e = {},
            t = url,
            o = t.split('?').slice(1).join('');
        if (o.length < 3) {
            return e;
        }
        for (let n = o.split('&'), i = 0; i < n.length; i++) {
            let r = n[i], d = r.indexOf('=');
            if (!(0 > d || d === r.length - 1)) {
                let p = r.substring(0, d), s = r.substring(d + 1);
                0 !== p.length && 0 !== s.length && (e[p] = decodeURIComponent(s));
            }
        }
        return e;
    },

};
