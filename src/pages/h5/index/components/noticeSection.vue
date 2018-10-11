<template>
    <div class="m-notice">
        <div class="m-vip">
            <p class="m-respect">尊敬的V2会员您好</p>
            <div class="m-vip-ranking">

            </div>
            <div class="vip-check">
                <div>
                    <p>特权</p>
                    <p>查看</p>
                </div>
                <div class="arrow"></div>
            </div>
        </div>
        <!--新人特权-->
        <div class="m-nav">
            <div class="m-nav-l">
                <p class="new-privilege">新人特权</p>
                <p class="new-reduce">满<span class="col_red">300</span>减<span class="col_red">200</span></p>
            </div>
            <div class="m-nav-r">
                <div class="m-inner1">
                    <p>夏末清仓</p>
                    <p>满<span class="col_red">300</span>减<span class="col_red">200</span></p>
                </div>
                <div class="m-inner2">
                    <p>开学季</p>
                    <p>满<span class="col_red">300</span>减<span class="col_red">200</span></p>
                </div>
            </div>
        </div>
        <!--秀场头条-->
        <head-top></head-top>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';
    import HeadTop from './xcheadTop';

    export default {
        name: 'noticeSection',
        components: {
            HeadTop
        }
    };

</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';
    .m-notice {
        margin-top:px2rem(10px);
        padding:  px2rem(10px)  px2rem(15px) 0 px2rem(15px);
        background: #FFFFFF;
        .m-vip {
            width: 100%;
            height:  px2rem(77px);
            background: linear-gradient(90deg, rgba(247, 215, 149, 1), rgba(247, 215, 148, 1));
            border-radius:  px2rem(5px);
            position: relative;

            .m-respect {
                padding-top:  px2rem(10px);
                padding-left:  px2rem(10px);
                font-size:px2rem(14px);
                color: #333333;
            }
            .vip-check {
                position: absolute;
                right: px2rem(22px);
                top: 0;
                bottom: 0;
                margin: auto;
                width: px2rem(50px);
                height: px2rem(50px);
                background: #FFFFFF;
                border-radius: 50%;
                font-size:  px2rem(11px);
                color: rgba(155, 109, 38, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                border:  px2rem(5px) solid rgb(231,194,124);
                line-height: px2rem(12px);
                .arrow {
                    width:  px2rem(5px);
                    height:  px2rem(5px);
                    border-top:  px2rem(1px) solid #9B6D26;
                    border-right:  px2rem(1px) solid #9B6D26;
                    transform: rotate(45deg);

                }

            }

        }
        .m-nav {
            display: flex;
            justify-content: space-between;
            margin-top: px2rem(10px);
            color: #666666;
            .col_red {
                color: #D51234;
                font-weight: 600;
            }
            .m-nav-l {
                width: 53%;
                height:  px2rem(200px);
                background: #FFF1F3;
                font-weight: 500;
                border-radius:  px2rem(5px);
                .new-privilege {
                    font-size: px2rem(17px);
                    padding:  px2rem(19px)  px2rem(19px) px2rem(7px)  px2rem(19px);

                }
                .new-reduce {
                    padding-left:  px2rem(19px);

                }
            }
            .m-nav-r {
                width: 44%;
                height:  px2rem(200px);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                > div > p:nth-child(1) {
                    padding-top:  px2rem(20px);
                    padding-left: px2rem(15px);
                    border-radius:  px2rem(5px);
                }
                > div > p:nth-child(2) {
                    padding-left:  px2rem(15px);
                    border-radius:  px2rem(5px);
                }
                .m-inner1 {
                    width: 100%;
                    height: px2rem(96px);
                    background: #FFF2E8;
                }
                .m-inner2 {
                    width: 100%;
                    height: px2rem(96px);
                    background: #ECFAFD;
                }
            }
        }

    }
</style>
