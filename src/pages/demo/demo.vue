<template>
    <div class="home-wrapper">
        <navigation title="导航标题的长度字数是10个左右" mode="back"></navigation>
        <form-btn>测试按钮</form-btn>
        <m-alert ref="$alert">当前页面只在APP中展示</m-alert>
        <ul>
            <li v-for="(item ,index) in subjects" :key="index">
                {{item.title}}
            </li>
        </ul>
        <div>
            <button class="dm-button primary">按钮</button>
            <button class="dm-button  primary" disabled>小按钮</button>
        </div>
        <div class="red">red</div>
        <flexbox>
            <flexbox-item style="width: 100px">111</flexbox-item>
            <flexbox-item :span="1">222</flexbox-item>
        </flexbox>
        <!---->
        <div class="am-list">
            <div class="am-list-header">带说明的列表项（链接）</div>
            <div class="am-list-body">
                <a class="am-list-item">
                    <div class="am-list-content">标题文字</div>
                    <div class="am-list-arrow" aria-hidden="true"><span class="am-icon arrow horizontal"></span></div>
                </a>
                <a class="am-list-item">
                    <div class="am-list-content">标题文字</div>
                    <div class="am-list-extra">说明信息</div>
                    <div class="am-list-arrow" aria-hidden="true"><span class="am-icon arrow horizontal"></span></div>
                </a>
            </div>
            <div class="am-list-footer">单行列表尾纯文字</div>
        </div>

        <!--list-->
        <div class="dm-list">
            <div class="dm-list-item">
                <div class="dm-list-main">
                    <div><i class="icon u-icon u-icon-returnServiceApply"></i></div>
                    <div class="dm-list-control">申请退货</div>
                    <div><i class="dm-icon dm-icon-arrow-right"></i></div>
                </div>
            </div>
            <div class="dm-list-item">
                <div class="dm-list-main">
                    <div><i class="icon u-icon u-icon-returnServiceApply"></i></div>
                    <div class="dm-list-control">申请退货</div>
                    <div><i class="dm-icon dm-icon-arrow-right"></i></div>
                </div>
            </div>
        </div>

        <!--list-->
        <div class="dm-list dm-list-form">
            <div class="dm-list-item">
                <div class="dm-list-main">
                    <div class="dm-list-label">手机号码</div>
                    <div class="dm-list-control"><input type="text" style="background: red"></div>
                    <div class="dm-list-action">
                        <i class="dm-icon dm-icon-clear"></i>
                    </div>
                </div>
            </div>
            <div class="dm-list-item">
                <div class="dm-list-main">
                    <div class="dm-list-label">验证码</div>
                    <div class="dm-list-control"><input type="text" style="background: red"></div>
                    <div class="dm-list-action">

                    </div>

                </div>
            </div>
            <div class="dm-list-item">
                <div class="dm-list-main">
                    <div class="dm-list-label">身份证号码</div>
                    <div class="dm-list-control"><input type="text" placeholder="33XXXXXXX"></div>
                    <div class="dm-list-clear"></div>
                </div>
            </div>
        </div>

        <div class="dm-list dm-list-form">
            <div class="dm-list-item">
                <div class="dm-list-main">
                    <div class="dm-list-label">新密码</div>
                    <div class="dm-list-control"><input type="text" style="background: red"></div>
                    <div class="dm-list-action">
                        <i class="dm-icon dm-icon-eye-on"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="dm-list dm-list-form">
            <form-item label="我是文本" name="aa" placeholder="" type="text" external-value="123"
                       @userchange="handleChange">
            </form-item>
            <form-item label="文本" name="pwd" placeholder="测试一下" type="password" external-value="123"
                       @userchange="handleChange">
                <template slot="actions">
                    <sms-btn @start="startCountDown" ref="smsBtn" :wait="30"></sms-btn>
                </template>
            </form-item>
        </div>

    </div>
</template>

<script>
    import DoubanAPI from '@/api/DoubanAPI';
    import mAlert from '@/components/common/modal/m-alert.vue';
    import SmsBtn from '@/components/common/form/sms-btn.vue';

    export default {
        components: { mAlert, SmsBtn },
        data() {
            return {
                name: 'demo',
                subjects: []
            };
        },
        methods: {
            handleChange(value, component) {
                console.log(value, component);
            },
            startCountDown() {
                this.$notify('开始倒计时')
                this.$refs.smsBtn.startCooldown();
            },
        },
        mounted() {
            //this.$loading()
            this.$notify('我就提示')
            //this.$refs.$alert.open()
            //this.$toast({ type: 'loading', content: '请填写手机号码', duration: 0 });
            /*this.$loading('加载一下。。');
            DoubanAPI.getTheaterMovieList({}).then((res) => {
                this.subjects = res.subjects || [];
                console.log(res);
                this.$loading('hide');
                this.$refs.$alert.open()
            }).catch((res) => {
                console.log(res);
                this.$loading('hide');
            });*/
        }
    };
</script>


<style lang="scss" scoped>
    @import '../../assets/css/helpers/index.scss';

    .red {
        color: $color-red;
        font-size: px2rem(30px);
    }

    .c1 {
        color: #e4e4e4;
    }

    .pcbtn {
        display: block;
        width: 2.3rem;
        height: 0.75rem;
        text-align: center;
        color: #333;
        font-size: px2rem(12px);
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #7F7F7F;
        border-radius: 4px;
    }
</style>

