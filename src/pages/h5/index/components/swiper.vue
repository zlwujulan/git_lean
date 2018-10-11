<template>
   <div class="m-swiper">
       <swiper :options="swiperOption">
           <swiper-slide >
               <img src="https://yanxuan.nosdn.127.net/f11c5c3d9d06f063c1d08e332eaba1f8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
           </swiper-slide>
           <swiper-slide >
               <img src="https://yanxuan.nosdn.127.net/12eaa34b392bc49134a47f8e3ef786ef.jpg?imageView&quality=75&thumbnail=750x0" alt="">
           </swiper-slide>

           <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
   </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';

    export default {
        name: 'indexSwiper',
        data() {
            return {
                // 轮播图参数
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                },
            };
        }
    };
</script>

<style lang="scss" scoped>
.m-swiper{
    width: 100%;
    background: #FFFFFF;
    img{
        width: 100%;
    }
}
</style>
