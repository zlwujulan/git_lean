import Vue from 'vue';
import App from './App';
import router from './router';
import '@/utils/polyfill';
import '@/errorLog';
import '@/permission';
import '@/components/common/base.vue';
import '@/assets/css/app.scss';
import * as filters from '@/filters';

Vue.config.productionTip = false;

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});
Vue.use(router);
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
