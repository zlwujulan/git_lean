'use strict';
const path = require('path');
const config = require('../config');
// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
let glob = require('glob');
// 页面模板
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
let PAGE_PATH = path.resolve(__dirname, '../src/pages');
// 用于做相应的merge处理
let merge = require('webpack-merge');

let entries = parseEntry();

let templates = parseTempalte();

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 

function formatDate(date, fmt) {
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'S+': date.getMilliseconds()
    };

    //因位date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：


    if (/(y+)/.test(fmt)) {
        //第一种：利用字符串连接符“+”给date.getFullYear()+""，加一个空字符串便可以将number类型转换成字符串。

        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {

            //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。

            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
        }
    }
    return fmt;
};

// 多入口配置
// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理
function parseEntry() {
    let entryFiles = glob.sync(PAGE_PATH + '/*/*.js');
    let map = {};

    entryFiles.forEach((filePath) => {
        //let basename = path.basename(filePath, path.extname(filePath));
        let basename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        let pageName = filePath.split('/').splice(-2)[0];
        let key = pageName + '/' + basename;

        map[key] = filePath;

    });
    map['app'] = path.resolve(__dirname, '../src/main.js');
    console.log('map', map);
    return map;
}

//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
function parseTempalte() {

    let template = path.resolve(__dirname, '../', 'index.html');
    let arr = [];
    let timestamp = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss.S');
    Object.keys(entries).forEach((key) => {
        let filename = key;
        console.log(key);
        if ('app' === key) {
            filename = 'index';
        }
        let conf = {
            // 模板来源
            template: template,
            cdn: process.env.NODE_ENV === 'production' ? config.build.CDN_URL : '',
            // 文件名称
            filename: filename + '.html',
            timestamp: timestamp,
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['manifest', 'vendor', key],
            inject: true
        };
        //console.log(conf)
        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                // minify: {
                //     removeComments: true,
                //     collapseWhitespace: true,
                //     removeAttributeQuotes: true
                // },
                chunksSortMode: 'dependency'
            });
        }

        arr.push(new HtmlWebpackPlugin(conf));
    });

    return arr;
}


exports.entry = entries;
exports.htmlPlugin = templates;
