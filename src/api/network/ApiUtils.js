import HttpUtils from './HttpUtils';

export default function ApiUtils(Urls) {
    let result = {}, list = [];

    Object.keys(Urls).forEach(function(name) {
        let value = Urls[name];
        if (typeof value === 'string') {
            list.push({
                name,
                uri: value
            });
        } else if (value.length) {
            list.push({
                name,
                uri: value[0],
                ...value[1]
            });
        }
    });
    list.forEach(function(item) {
        let name = item.name, url = item.uri, method = item.method || 'post', filter = item.filter;
        result[name] = async function(params, config = {}) {
            const response = await HttpUtils[method](url, params);
            // code为0表明请求正常
            if (!response.code || response.code === 10000) {
                filter && filter(response);
                //console.log(JSON.stringify(response))
                return Promise.resolve(response);
            } else {
                // 假如返回未登陆并且当前页面不是登陆页面则进行跳转
                if (response.code === 10001) {
                    console.log('未登陆');
                    config.auth && config.nav && config.nav.navigate('login/login/LoginPage', {
                        callback: config.callback
                    });
                }
                return Promise.reject(response);
            }
        };
    });

    return result;

}
