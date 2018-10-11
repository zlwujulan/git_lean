<template>
    <div class="dm-popup dm-dialog-popup" v-show="visible" ref="dialog">
        <div class="dm-layer">
            <div class="dm-mask" @click="overlayClick"></div>
            <div class="dm-modal">
                <div class="content">
                    <slot>
                        弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
                    </slot>
                    <a class="close" v-if="closeBtn" :class="[closeBtnPosition]" @click="close"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MDialog',
        data() {
            return {
                visible: false
            };
        },
        props: {
            title: {
                type: String,
                default: '提示'
            },
            closeBtn: {
                type: Boolean,
                default: true
            },
            closeBtnPosition: {
                type: String,
                default: 'left'
            },
            overlayClose: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            open: function () {
                this.visible = true;
                this.$emit('open');
            },
            close: function () {
                this.visible = false;
                this.$emit('close');
            },
            overlayClick: function () {
                if (this.overlayClose) {
                    this.close();
                }
            }
        },
        mounted: function () {
        }
    };
</script>
