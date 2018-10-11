<template>
    <div class="m-wrapper" id="register">
        <navigation :title="title"></navigation>
        <div class="m-register">
            <div class="dm-list dm-list-form" >
                <form-item label="手机号" placeholder="请输入手机号" type="text" name="phone"
                           @userchange="handleChange" v-model="phone">
                </form-item>
                <form-item label="验证码" placeholder="请输入验证码" type=" " name="code"
                           @userchange="handleChange">
                    <template slot="actions">
                        <sms-btn @start="startCountDown" ref="smsBtn" :wait="60" id="smsBtn"></sms-btn>
                    </template>
                </form-item>

                <form-item label="密码" placeholder="请输入6~18位数字和字母的组合" type="password" name="pwd"
                           @userchange="handleChange">

                </form-item>
            </div>

            <button :disabled="!canClick" class="m-next" @click="goNext()">
                下一步
            </button>
            <!---->
            <div class="accept">
                <div class="selected" @click="agreeProtocol">
                    <img src="@/assets/img/aggree.png" alt="" v-if="agreement">
                    <span v-else class="no-select"></span>
                    <input type="checkbox" class="is-select">
                </div>
                <span>
                   阅读并接受
               </span>
                <span class="col-red"><a href="/static/protocol/service.html">《用户协议》</a></span>
            </div>

        </div>
    </div>
</template>


<script>
    import XiugouAPI from '@/api/XiugouAPI.js';
    import {validatePassword, validatePhone} from '@/utils/validate';
    import mAlert from '@/components/common/modal/m-alert.vue';
    import SmsBtn from '@/components/common/form/sms-btn.vue';

    export default {
        name: 'register',
        data() {
            return {
                title: '注册',
                password: '',
                showPassword: false, // 显示密码
                agreement: true, // 点击下一步，按钮样式
                phone: '', //  手机号
                code: '' // 验证码

            };
        },
        components: {
            mAlert,
            SmsBtn
        },
        computed: {
            canClick: function () {
                return this.phone && this.password && this.code;
            }
        },

        methods: {
            handleChange(value, component) {
                if (component.name === 'phone') {
                    this.phone = value;

                }
                if (component.name === 'code') {
                    this.code = value;
                }
                if (component.name === 'pwd') {
                    this.password = value;
                }

            },
            startCountDown() {
                if (!validatePhone(this.phone)) {
                    this.$notify('请输入正确的手机号');
                    return;
                }
                this.$notify('开始倒计时');
                this.$refs.smsBtn.startCooldown();
            },
            // 同意用户协议
            agreeProtocol() {
                this.agreement = !this.agreement;
            },

            goNext() {
                if (!validatePhone(this.phone)) {
                    this.$notify('请输入正确的手机号');
                    return;
                }

                if (!validatePassword(this.password)) {
                    this.$notify('请输入6到18位数字字母');
                    return;
                }
                if (!this.agreement) {
                    this.$notify('请同意协议');
                    return;
                }
                this.$loading();
                XiugouAPI.getApiCodeLogin({
                    phone: this.phone,
                    //密码 密码登陆时必传
                    password: this.password,
                    //短信验证码 验证码登录时必传
                    code: this.code,
                    //老用户校验返回的code
                    // authcode: '',
                    // //设备号
                    // device: '',
                    // //头像
                    // headImg: '',
                    // //昵称
                    // nickname: '',
                    // //openid
                    // openid: '',
                    // //系统版本
                    // systemVersion: '',
                    // //用户名
                    // username: '',
                    // //小程序换取的code
                    // wechatCode: '',
                    // //微信版本号
                    // wechatVersion: ''

                }).then((res) => {
                    this.$loading('hide');
                    this.$notify('注册成功');
                    this.$router.push('download');
                }).catch((res) => {
                    this.$loading('hide');
                    this.$notify(res.msg);

                });
            }

        }

    };
</script>

<style lang="scss" scoped>

    @import '../../../styles/index.scss';
    @import '../../../assets/css/helpers/index.scss';

    html, body {
        height: 100%;
    }

    .m-wrapper {
        width: 100%;
        height: 100%;
        background: rgb(247, 247, 247);
        font-size: px2rem(13px);
        .m-register {
            padding-top: px2rem(10px);
            .m-inner {
                background: #FFFFFF;
                /*height:px2rem(45px) ;*/
                line-height: px2rem(45px);
            }
        }
        .m-next {
            width: 77%;
            height: px2rem(48px);
            border-radius: px2rem(5px);
            background: #D51243;
            display: block;
            margin: px2rem(91px) auto 0;
            text-align: center;
            line-height: px2rem(48px);
            color: #FFFFFF;
            border: 1px solid transparent;
            outline: none;
            opacity: 1;

        }
        button[disabled] {
            opacity: 0.6;
        }
        .active {
            opacity: 1;
        }
        .accept {
            text-align: center;
            margin-top: px2rem(21px);
            .selected {
                display: inline-block;
                width: px2rem(11px);
                height: px2rem(11px);
                position: relative;
                .no-select {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    border: px2rem(1px) solid #666666;
                }
                img {
                    width: 100%;
                    height: 100%;

                }
                .is-select {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    margin: auto;
                    opacity: 0;
                }

            }
            .col-red {
                color: #D51243;
            }
        }
    }
</style>
<style>
    #register .sms-btn {
        color: #D51243;
        text-align:right;
    }

    #register .dm-list-main {
        width: 88%;
        margin: auto;

    }

    #register .dm-list-label {
        min-width: 1.2rem;
    }

    #register input::-webkit-input-placeholder {
        color: #666666;
    }

    #register .dm-icon-eye {
        background: url('/static/img/eyeclose.png') no-repeat center;
        background-size: 100%;
    }

    #register .dm-icon-eye-on {
        background: url('/static/img/eye.png') no-repeat center;
        background-size: 100%;
    }
</style>
