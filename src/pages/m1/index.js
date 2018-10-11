import Vue from 'vue';
import App from './app';

// require('es6-promise').polyfill();

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.APP = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
