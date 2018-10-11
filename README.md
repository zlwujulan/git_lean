# meeruu_h5

> 这是一个vue项目 它包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

## 分支说明
develop分支为开发分支

## Build Setup
发布上线配置文件 `app.json` 中的`envType` 是打包的环境配置

根据不同环境发不同的包

方法一
```bash
node build/build --envType=qa
```

方法二
```bash
node build/build --api=https://api.meeruu.com/gateway
```



``` bash

# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# serve with hot reload at localhost:9528
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 访问地址

公司内部局域网
[http://static.mr.com](http://static.mr.com)

服务器NGINX 80端口目录 `/home/webapp/static`


## 快捷生成vue模板
推荐mac或git bash下使用

使用：
在当前目录下 sh ct.sh {文件名}  or  sh ct.sh {目录/文件名}

添加alias(linux、mac环境下)到项目目录下  
``` shell
path=`pwd`
echo "alias ct='sh ${path}'/ct.sh" >> ~/.bash_profile && source ~/.bash_profile
or
echo "alias ct='sh ${path}'/ct.sh" >> ~/.zshrc && source ~/.zshrc
```
开始享用：ct {文件名,不需要带后缀}

## 公共方法
```javascript
// 显示加载
this.$loading('加载中')
// 隐藏加载
this.$loading('hide')

// 消息提醒
this.$notify('我是一个消息体')
```

## 表单域(form-item.vue)
全局组件

### props
| 属性            | 类型     | 默认值 | 说明              |
| --------------- | -------- | -------| ----------------- |
| label           | String   |        | label标签  |
| name            | String   |        | input属性name的值|
| placeholder     | String   |        | input placeholder提示|
| type            | String   | text   | input类型(text/password) |
| external-value  | String   |        | input的初始值   |
| clear              | Boolean   |        | 是否需要使用clear按钮 默认true |



### methods
| 名称            | 参数         | 说明            |
| --------------- | ------------ | --------------- |
| reset     | emit |重置input的值|

### events
| 名称            | 参数         | 说明            |
| --------------- | ------------ | --------------- |
| userchange      | value,组件对象   |this.$emit('userchange', this.value, this)|

### slot
| 名称            | 说明            |
| --------------- | --------------- |
| actions         |表单域的后置内容|


## 短信验证码按钮(sms-btn.vue)
### props
| 属性            | 类型     | 默认值 | 说明              |
| --------------- | -------- | -------| ----------------- |
| label           | String   |        | label标签  |
| wait            | Number   |        | 倒计时事时间|
| auto              | Boolean   |        | 是否自动发起请求短息请求 默认false |



### methods
| 名称            | 参数         | 说明            |
| --------------- | ------------ | --------------- |
| startCooldown     |  |开始倒计时|

### events
| 名称            | 参数         | 说明            |
| --------------- | ------------ | --------------- |
| start      | value,组件对象   |报告父组件触发了点击事件|


## 导航(navigation.vue)
全局组件

### props
| 属性            | 类型     | 默认值 | 说明              |
| --------------- | -------- | -------| ----------------- |
| hidden           | Boolean   |        | 是否显示导航 默认false  |
| title            | String   |        | 导航栏标题|
| mode     | String   |        | `back` `home` 显示左侧icon|



