<template>
    <div class="dm-popup dm-toast-popup" v-show="visible">
        <template v-if="type==='toast'">
            <div class="toast">
                {{content}}
            </div>
        </template>
        <template v-else>
            <div class="dm-layer">
                <div class="dm-mask" :class="[transparent?'transparent':'']"></div>
                <div class="dm-modal">
                    <div class="dm-toast">
                        <template>
                            <div class="dm-loading-indicator white">
                                <div class="dm-loading-item"></div>
                                <div class="dm-loading-item"></div>
                                <div class="dm-loading-item"></div>
                            </div>
                            <div>{{content || '加载中...'}}</div>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            transparent: {
                type: Boolean,
                default: false,
            },
            type: {
                type: String,
                default: 'toast'
            },
            content: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 2.5
            },
            callback: {
                type: Function,
                default: function () {

                }
            }
        },
        data() {
            return {
                visible: true
            };
        },
        methods: {
            close() {
                let $el = this.$el;
                this.visible = false;
                try {
                    $el.parentNode.removeChild($el);
                } catch (e) {
                    console.warn(e);
                }
            }
        },
        mounted() {
            let $el = document.getElementsByClassName('dm-toast-popup'), list = [];
            if ($el) {
                list = Array.prototype.slice.call($el);
            }
            list.forEach((item) => {
                try {
                    item.remove();
                } catch (e) {
                    console.warn(e);
                }
            });
            if (this.duration !== 0) {
                setTimeout(() => {
                    this.close();
                    this.callback();
                }, this.duration * 1000);
            }
        }
    };
</script>
