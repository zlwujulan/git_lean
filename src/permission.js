import router from './router';
// todo 权限管理
router.afterEach((to, from) => {
    // 数据埋点
    window.SA && window.SA.track && window.SA.track('pageview', {
        referrer: from.path,
        formId: to.path
    });
});
