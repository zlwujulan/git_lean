<template>
    <div class="wrap">
        <div class="wrap-top">
            <p>秀购商城</p>
            <p>好物不独享 省钱又赚钱</p>
        </div>
        <div class="dw-img">
            <img src="@/assets/img/download.gif" alt="下载app">
        </div>
        <div class="download" @click="download">下载App</div>
        <!--遮罩层-->
        <div class="m-cover" v-if="isWx" @click="closeCover">
            <div class="m-inner">
                <p>请点击右上角，选择在浏览器中打开</p>
                <div class="m-point">
                    <img src="/static/img/pointArrow.png" alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'download',
        data() {
            return {
                isWx: false
            };
        },
        methods: {
            closeCover() {
                this.isWx = false;
            },
            download() {
                if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
                    console.log('在微信');
                    this.isWx = true;
                } else {
                    console.log('不是在微信中');

                    let u = navigator.userAgent;
                    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    if (isAndroid) {
                        location.href = 'http://m.you.163.com/downloadapp?_stat_from=web_out_pz_baidu_1&from=web_out_pz_baidu_1&app_awake_from=app_rouse&ochannel=aos_pd_11';
                    } else if (isiOS) {
                        location.href = 'http://m.you.163.com/downloadapp?_stat_from=web_out_pz_baidu_1&from=web_out_pz_baidu_1&app_awake_from=app_rouse&ochannel=aos_pd_11';
                    }

                }

            }
        }
    };

</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';

    .wrap {
        width: 100%;
        height: 100%;
        margin: auto;
        text-align: center;
        background: #FFFFFF;
        .dw-img {
            width: 100%;
            margin-top: px2rem(23px);
            img {
                width: 60%;
            }
        }
        .wrap-top {
            padding-top: px2rem(71px);
            color: #222222;

        }
        .wrap-top > p:nth-child(1) {
            font-size: px2rem(18px);
            margin-bottom: px2rem(17px);
            font-weight: 600;
        }
        .wrap-top > p:nth-child(2) {
            font-size: px2rem(15px);
            font-weight: 600;
        }
        .download {
            width: px2rem(155px);
            height: px2rem(48px);
            background: #D51243;
            border-radius: px2rem(23px);
            font-size: px2rem(17px);
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: px2rem(48px);
            margin: px2rem(19px) auto px2rem(20px);
        }
        .m-cover {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.6;
            color: #FFFFFF;
            .m-inner {
                font-size: px2rem(14px);
                padding: px2rem(20px);
                .m-point {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: px2rem(50px);
                    img {
                        width: 100%;
                    }

                }
            }
        }
    }
</style>
