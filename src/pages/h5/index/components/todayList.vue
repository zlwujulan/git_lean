<template>
    <div class="today-list">
        <p class="list-tit">今日榜单</p>
        <div class="list-swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img
                        src="https://yanxuan.nosdn.127.net/f11c5c3d9d06f063c1d08e332eaba1f8.jpg?imageView&quality=75&thumbnail=750x0"
                        alt="">
                </swiper-slide>
                <swiper-slide>
                    <img
                        src="https://yanxuan.nosdn.127.net/12eaa34b392bc49134a47f8e3ef786ef.jpg?imageView&quality=75&thumbnail=750x0"
                        alt="">
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
                    pagination: '.swiper-pagination',
                    loop: true,
                    direction: 'horizontal',
                    autoplay: 2500,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 15,
                },
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';
    .today-list {
        width: 100%;
        background: #FFFFFF;
        overflow-x: hidden;
        .list-tit {
            font-size: px2rem(19px);
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: px2rem(53px);
            height: px2rem(53px);
            text-align: center;
            font-size: px2rem(19px) ;
        }

        .list-swiper{
        width:80%;
        margin:auto;
            img{
                width:100%;
                height:100%;
                border-radius:px2rem(20px);
            }
        }

        .swiper-container {
        overflow: visible!important;
        /*height: 1.75rem;*/
    }
        .swiper-slide-prev,.swiper-slide-next{
            display: flex !important;
            align-items: center;
            vertical-align: middle;

        }



    }
</style>
