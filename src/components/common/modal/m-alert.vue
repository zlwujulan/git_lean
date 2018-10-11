<template>
    <m-dialog ref="modal" class="alert" :close-btn="false" :title="title" :overlay-close="false">
        <div class="hd">
            <slot>告知当前状态，信息和解决方法</slot>
        </div>
        <div class="ft">
            <button type="button" class="btn" data-modal="dismiss" @click="ok">{{yesText}}</button>
        </div>


    </m-dialog>
</template>

<script>
    import MDialog from './m-dialog.vue';

    export default {
        name: 'MAlert',
        components: { MDialog },
        data() {
            return {};
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            yesText: {
                type: String,
                default: '确定'
            }
        },
        methods: {
            open() {
                this.$refs.modal.open();
            },
            close() {
                this.$refs.modal.close();
            },
            ok() {
                this.close();
                this.$emit('ok');
            }
        }
    };
</script>
