<template>
    <div class="head-top">
        <div class="m-desc">
            <p>秀场</p>
            <p>头条</p>
        </div>
        <div class="m-list">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <div class="m-sw">
                        <div class="m-inner">
                            <p>
                                <span class="hot">最热</span>
                                <span class="hot-text">IPhone X 9月在美国加州福利院上市......</span>
                            </p>
                            <p class="m-top">
                                <span class="hot">最热</span>
                                <span class="hot-text">IPhone X 9月在美国加州福利院上市......</span>
                            </p>
                        </div>
                        <div class="m-intro">
                            <img
                                src="http://yanxuan.nosdn.127.net/149ac83f4c4b6d1e72e63b57cc543c87.jpg?imageView&quality=85&thumbnail=232y232"
                                alt="">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';

    export default {
        name: 'headtop',
        data() {
            return {
                // 轮播图参数
                swiperOption: {
                    pagination: '.swiper-pagination',
                    // loop: true,
                    direction: 'vertical',

                },
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';

    .head-top {
        margin: auto;
        display: flex;
        align-items: center;
        height: px2rem(72px);
        .m-desc {
            flex: 1;
            border-right: px2rem(1px) solid #eeeeee;
            font-weight: 600;
        }

        .m-list {
            font-size: 0;
            flex: 7;
            height: px2rem(47px);
            overflow: hidden;
            .m-sw {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: px2rem(47px);
                .m-inner {
                    padding-left: px2rem(8px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .m-top {
                        margin-top: px2rem(4px);
                    }
                    .hot {
                        display: inline-block;
                        border: px2rem(1px) solid #D51234;
                        font-size: px2rem(11px);
                        color: #D51234;
                        width: px2rem(30px);
                        height: px2rem(13px);
                        border-radius: px2rem(10px);
                        text-align: center;
                        line-height: px2rem(13px);
                        margin-right: px2rem(10px);
                    }
                    .hot-text {
                        font-size: px2rem(11px);
                        color: #666666;
                    }
                }
                .m-intro {

                    img {
                        width: px2rem(20px);
                        height: px2rem(38px);
                    }
                }
            }

        }
    }
</style>
