<template>
    <m-dialog ref="modal" class="confirm" :close-btn="false" :title="title" :overlay-close="false">
        <div class="am-dialog-brief">你确定要取消吗</div>
        <template slot="footer">
            <button type="button" class="am-dialog-button" data-modal="dismiss" @click="handleCancel">{{noText}}</button>
            <button type="button" class="am-dialog-button" data-modal="dismiss" @click="ok">{{yesText}}</button>
        </template>
    </m-dialog>
</template>

<script>
    import MDialog from './m-dialog.vue';

    export default {
        name: 'MConfirm',
        components: { MDialog },
        data() {
            return {};
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            noText: {
                type: String,
                default: '取消'
            },
            yesText: {
                type: String,
                default: '确定'
            }
        },
        methods: {
            handleCancel() {
                this.$refs.modal.close();
            },
            open() {
                this.$refs.modal.open();
            },
            close() {
                this.$refs.modal.close();
            },
            ok() {
                this.$refs.modal.close();
                this.$emit('ok');
            }
        }
    };
</script>
