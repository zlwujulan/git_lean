if (Promise && Promise.prototype.then) {
    let promiseThen = Promise.prototype.then;

    Promise.prototype.then = function(resolve, reject) {
        return promiseThen.call(this, _wrapPromiseFunction(resolve), _wrapPromiseFunction(reject));
    };
}

let _errorProcess = function(error) {
    window.SA && window.SA.notifyError && window.SA.notifyError(error);
};

/**
 * 输入一个函数，将函数内代码包裹进try-catch执行，then的resolve、reject和普通函数不一样
 *
 * @param {any} fn
 * @returns 一个新的函数
 */
function _wrapPromiseFunction(fn) {

    // 如果fn是个函数，则直接放到try-catch中运行，否则要将类的方法包裹起来，promise中的fn要返回null，不能返回空函数
    if (typeof fn !== 'function') {
        return null;
    }

    return function() {
        try {
            return fn.apply(this, arguments);
        } catch (e) {
            _errorProcess(e);
            throw e;
        }
    };
}
