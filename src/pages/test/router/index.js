import Vue from 'vue';
import Router from 'vue-router';
import Index from '../index.vue';

// const _import = require('@/router/_import_' + process.env.NODE_ENV);
// const _import2 = (resolve, file) => require.ensure([], () => resolve(require('@/pages/' + file + '.vue')), file.replace(/\//g, '.'));
Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: {
                title: 'index'
            }
        },
        {
            path: '/a',
            name: 'a',
            component: resolve => require.ensure([], () => resolve(require('../a.vue')), 'aaa')
            // component:function(resolve) {
            //     return require.ensure([], () => resolve(require('../a.vue')), 'aaa')
            // },
            // component:resolve => require.ensure([], () => resolve(require('../a.vue')), 'aaa')
            // component: _import('test/a')
            // component: _import2(resolve, 'test/a')
        },
        {
            path: '/b',
            name: 'b',
            component: resolve => require.ensure([], () => resolve(require('../b.vue')), 'bbb')
            // component: _import('test/b')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        };
    }
});

export default router;
