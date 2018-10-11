<template>
    <div class="m-hotsell">
        <p class="m-tit">超值热卖</p>
        <div class="sell-list">
            <div class="banner">
                <img
                    src="https://yanxuan.nosdn.127.net/0cde7413403c87de2f50759c9d457c63.jpg?imageView&quality=75&thumbnail=750x0"
                    alt="">
            </div>
            <!--轮播-->
            <div class="list-swiper">
                <swiper :options="swiperOption">
                    <swiper-slide class="slides">
                        <div class="list-inner">
                            <img
                                src="http://yanxuan.nosdn.127.net/63fe26022bf72fca8eb184347e12b04e.jpg?imageView&quality=65&thumbnail=330x330"
                                alt="">
                            <p class="list-innner-intro">波朗虫草菁华粉底液保湿持久</p>
                            <p class="list-inner-price">￥428</p>
                        </div>
                        <div class="list-inner">
                            <img
                                src="http://yanxuan.nosdn.127.net/63fe26022bf72fca8eb184347e12b04e.jpg?imageView&quality=65&thumbnail=330x330"
                                alt="">
                            <p class="list-innner-intro">波朗虫草菁华粉底液保湿持久</p>
                            <p class="list-inner-price">￥428</p>
                        </div>
                        <div class="list-inner">
                            <img
                                src="http://yanxuan.nosdn.127.net/ccdbdc82bdc8929723e4941a93f85550.png?imageView&quality=65&thumbnail=330x330"
                                alt="">
                            <p class="list-innner-intro">波朗虫草菁华粉底液保湿持久</p>
                            <p class="list-inner-price">￥428</p>
                        </div>

                    </swiper-slide>

                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';

    export default {
        name: 'hotsell',
        data() {
            return {
                // 轮播图参数
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    slidesPerView: 1.1,
                    centeredSlides: '',
                    spaceBetween: 1

                },
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';

    .m-hotsell {
        background: #FFFFFF;
        margin-top: px2rem(10px);
        .m-tit {
            height: px2rem(53px);
            line-height: px2rem(53px);
            text-align: center;
            font-weight: 500;
            font-size: px2rem(19px);

        }
        .sell-list {
            width: 92%;
            margin: auto;
            .banner {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            .list-swiper {
                width: 100%;
                margin-top: px2rem(10px);
                .slides {
                    display: flex;
                }
                .list-inner {
                    width: 35%;
                    font-size: px2rem(12px);
                    color: #666666;
                    margin-right: px2rem(10px);
                    img {
                        width: 100%;
                    }
                    .list-innner-intro {
                        margin: px2rem(10px) 0;

                    }
                    .list-inner-price {
                        color: #D51234;
                        font-size: px2rem(14px);
                        padding-bottom: px2rem(15px);
                    }
                }
            }
        }
    }
</style>
