import ToastCompnent from './message.vue';
import Vue from 'vue';

const ToastConstructor = Vue.extend(ToastCompnent)

const Toast = (properties) => {
    const _props = properties || {};

    const Instance = new Vue({
        render (h) {
            return h(ToastConstructor, {
                props: _props
            });
        }
    });

    const component = Instance.$mount();

    document.body.appendChild(component.$el);
    //return VueComponent
    return Instance.$children[0];
}

export default Toast;
