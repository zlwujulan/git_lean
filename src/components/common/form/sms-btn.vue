<template>
    <div class="dm-list-button">
        <button class="sms-btn" @click="preFetchSms" :disabled="disabled">
            {{txt}}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'sms-btn',
        props: {
            label: {
                type: String,
                default: '获取验证码'
            },
            wait: {
                type: [Number, String],
                default: 10
            },
            auto: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            disabled() {
                return this.countDownValue > 0 || this.loading;
            },
            txt() {
                if (this.loading) {
                    return '获取中';
                } else {
                    if (this.countDownValue > 0) {
                        return `${this.countDownValue}秒后重新获取`;
                    } else {
                        return this.label;
                    }
                }
            },
        },
        data() {
            return {
                loading: false,
                countDownValue: 0,
                pid: null
            };
        },
        methods: {
            startCooldown() {
                this.countDownValue = this.wait;
                // 先清除定时器
                clearInterval(this.pid);
                this.pid = setInterval(() => {
                    this.countDownValue--;
                    if (this.countDownValue <= 0) {
                        clearInterval(this.pid);
                    }
                }, 1000);
            },
            reset() {
                clearInterval(this.pid);
                this.countDownValue = 0;
            },
            clearInput() {
                const parent = this.$parent;
                parent && parent.reset && parent.reset.apply(parent, arguments);
            },
            preFetchSms() {
                this.$emit('start', this);
                if (this.auto) {
                    this.fetchSms();
                }

            },
            // todo 发起短信请求
            fetchSms(data) {
                this.clearInput(null, true);
                // 模拟短息异步获取
                setTimeout(() => {
                    this.startCooldown();
                }, 2000);
                try {
                    this.loading = true;
                    this.$api.fetchTaskVerifycode(data).then((resp) => {
                        this.loading = false;
                        this.startCooldown();
                        this.$emit('success', resp, this);
                    }, (err) => {
                        this.loading = false;
                        this.$emit('fail', err, this);
                    });
                } catch (e) {
                    this.loading = false;
                    console.warn(e);
                }

            }
        },
        mounted() {
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/helpers/index";
    .sms-btn {
        display: block;
        width: px2rem(100px);
        height: px2rem(30px);
        text-align: center;
        color: #333;
        font-size: px2rem(12px);
        background: #fff;
        line-height: px2rem(30px);
        border: 0;
        padding: 0;
    }
</style>
