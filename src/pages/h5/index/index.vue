<template>
    <div class="m-wrapper">
        <index-header></index-header>
        <index-swiper></index-swiper>
        <index-list></index-list>
        <index-notice></index-notice>
        <start-shop></start-shop>
        <today-list></today-list>
        <index-recommend></index-recommend>
        <hot-sell></hot-sell>
        <recommend-foryou></recommend-foryou>
       <div class="empty"></div>
        <index-footer></index-footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';
    // import '@/assets/styles/reset.css';
    import IndexHeader from './components/header';
    import IndexSwiper from './components/swiper';
    import IndexList from './components/menuList';
    import IndexNotice from './components/noticeSection';
    import StartShop from './components/startShop';
    import TodayList from './components/todayList';
    import IndexRecommend from './components/competitiveRecommend';
    import HotSell from './components/hotSell';
    import RecommendForyou from './components/recommendForyou';
    import IndexFooter from '@/common/footer';

    export default {
        name: 'index',
        components: {
            IndexHeader,
            IndexSwiper,
            IndexList,
            IndexNotice,
            StartShop,
            TodayList,
            IndexRecommend,
            HotSell,
            RecommendForyou,
            IndexFooter
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../assets/css/helpers/index.scss';
    .m-wrapper {
        background: #f5f5f5;
        .empty{
            height:  px2rem(53px);
            background: #FFFFFF;
        }
    }
</style>
