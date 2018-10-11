<template>
    <div class="m-recommend">
        <p class="list-tit">精品推荐</p>
        <div class="list-swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img
                        src="https://yanxuan.nosdn.127.net/f11c5c3d9d06f063c1d08e332eaba1f8.jpg?imageView&quality=75&thumbnail=750x0"
                        alt="">
                    <p>一级庄候伯王奥比昂酒庄葡萄酒</p>
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="https://yanxuan.nosdn.127.net/12eaa34b392bc49134a47f8e3ef786ef.jpg?imageView&quality=75&thumbnail=750x0"
                        alt="">
                    <p>Dior品牌化妆品</p>
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
        name: 'todaylist',
        data() {
            return {
                // 轮播图参数
                swiperOption: {
                    loop: true,
                    direction: 'horizontal',
                    slidesPerView: 1.2,
                    centeredSlides: '',
                    spaceBetween: 15,
                },
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';

    .m-recommend {
        width: 100%;
        background: #FFFFFF;
        margin-top: px2rem(10px);
        .list-tit {
            font-size: px2rem(19px);
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: px2rem(53px);
            height: px2rem(53px);
            text-align: center;

        }

        .list-swiper {
            /*width:100%;*/
            padding-left: px2rem(10px);
            margin: auto;
            img {
                width: 100%;
                border-radius: px2rem(20px);
            }
            p {
                color: #666666;
                font-size: px2rem(13px);
                line-height: px2rem(29px);
            }
        }

    }
</style>
