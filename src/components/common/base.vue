<script>
    // 注册全局组件
    import Vue from 'vue';
    import pageTitle from '@/components/common/page-title.vue';
    import FormItem from '@/components/common/form/form-item.vue';
    import formBtn from '@/components/common/form/form-btn.vue';
    import Navigation from '@/components/common/navigation.vue';
    import Toast from '@/components/common/toast';
    import {
        Flexbox,
        FlexboxItem
    } from '@/components/common/layout/flexbox';

    const components = {
        Navigation,
        pageTitle,
        FormItem,
        formBtn,
        Flexbox,
        FlexboxItem
    };
    let $el = null;
    const install = function (Vue) {
        if (install.installed) return;

        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        });

        Vue.prototype.$toast = Toast;
        /**
         * @param {string} content 显示内容
         * @param {string} type 显示类型 'loading','warn','success','network','fail'
         * @param {function} callback 回调函数
         * @returns
         */
        Vue.prototype.$loading = (content, callback) => {
            if (content === 'hide') {
                $el && $el.close && $el.close();
            } else {
                $el = Toast({
                    type: 'loading',
                    content,
                    callback,
                    duration: 0,
                    transparent: true
                });
            }
        };
        Vue.prototype.$notify = (content) => {
            Toast({ type: 'toast', content, mask: false });
        };

    };
    // auto install
    install(Vue);

    export default {};

</script>

<style>
    #app, body, html {
        height: 100%;
    }
</style>
