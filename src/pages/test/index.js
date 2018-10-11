import Vue from 'vue';
import App from '../../App';
import router from './router';

// require('es6-promise').polyfill();

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.APP = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
