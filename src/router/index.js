import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const constantRouterMap = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require.ensure([], () => resolve(require('@/pages/h5/login.vue')), 'h5.login')
    },
    {
        path: '/index',
        name: 'index',
        component: resolve => require.ensure([], () => resolve(require('@/pages/h5/index/index.vue')), 'h5.index')
    },
    {
        path: '/product',
        name: 'product',
        component: resolve => require.ensure([], () => resolve(require('@/pages/h5/product/product.vue')), 'h5.product')
    },

    {
        path: '/download',
        name: 'download',
        component: resolve => require.ensure([], () => resolve(require('@/pages/h5/product/components/download.vue')), 'h5.download')
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require.ensure([], () => resolve(require('@/pages/h5/register/register.vue')), 'h5.register')
    },
    {
        path: '/demo',
        name: 'demo',
        component: resolve => require.ensure([], () => resolve(require('@/pages/demo/demo.vue')), 'h5.demo')
    },
    {
        path: '*',
        component: resolve => require.ensure([], () => resolve(require('@/pages/h5/404.vue')), 'h5.404')
    }
];

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});

