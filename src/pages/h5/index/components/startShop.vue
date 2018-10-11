<template>
    <div class="m-shop">
        <div class="m-shop-tit">
            明星店铺
        </div>
        <!--shops-->
        <div class="m-shops">
            <div class="shop-example">
                <div class="person-banner">
                    <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
                </div>
                <div class="suc-person">
                    <div class="person">
                        <div class="person-img">
                            <img
                                src="http://yanxuan.nosdn.127.net/149ac83f4c4b6d1e72e63b57cc543c87.jpg?imageView&quality=85&thumbnail=232y232"
                                alt="">
                        </div>
                        <div class="person-show">
                            <p>
                                <span class="person-job">吴磊LEO</span>
                                <span class="rank">V5</span>
                            </p>
                            <p>
                                <span class="number">成员:200万+</span>
                            </p>
                        </div>
                    </div>
                    <div class="month-obtain">
                        <p class="fz-9">店铺本月收入</p>
                        <p class="fz-11">200082.98</p>
                    </div>
                    <div class="year-obtain">
                        <p class="fz-9">店铺累计收入</p>
                        <p class="fz-11">1002万元</p>
                    </div>
                </div>
            </div>
            <div class="shop-example">
                <div class="person-banner">
                    <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
                </div>
                <div class="suc-person">
                    <div class="person">
                        <div class="person-img">
                            <img
                                src="http://yanxuan.nosdn.127.net/149ac83f4c4b6d1e72e63b57cc543c87.jpg?imageView&quality=85&thumbnail=232y232"
                                alt="">
                        </div>
                        <div class="person-show">
                            <p>
                                <span class="person-job">吴磊LEO</span>
                                <span class="rank">V5</span>
                            </p>
                            <p>
                                <span class="number">成员:200万+</span>
                            </p>
                        </div>
                    </div>
                    <div class="month-obtain">
                        <p class="fz-9">店铺本月收入</p>
                        <p class="fz-11">200082.98</p>
                    </div>
                    <div class="year-obtain">
                        <p class="fz-9">店铺累计收入</p>
                        <p class="fz-11">1002万元</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'startShop'
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';
    .m-shop {
        width: 92%;
        margin: auto;
        .m-shop-tit {
            font-size:  px2rem(19px);
            font-weight: 500;
            height: px2rem(58px);
            line-height:  px2rem(58px);
            text-align: center;
        }
        .m-shops {
            .shop-example {
                margin-bottom:  px2rem(10px);

                .person-banner {
                    font-size: 0;
                    img {
                        width: 100%;
                        border-top-left-radius:  px2rem(10px);
                        border-top-right-radius:  px2rem(10px);
                    }
                }
                .suc-person {
                    background: #FFFFFF;
                    /*height: 0.65rem;*/
                    padding:  px2rem(10px) 0;
                    display: flex;
                    align-items: center;
                    background: #FFFFFF;
                    .fz-9 {
                        font-size:  px2rem(9px);
                        color: #666666;
                        margin-bottom:  px2rem(2px);
                    }
                    .fz-11 {
                        font-size:  px2rem(11px);
                    }
                    .person {
                        display: flex;
                        flex: 3;
                        align-items: center;
                        .person-img {
                            width:  px2rem(45px);
                            margin-left: px2rem(15px);
                            margin-right: px2rem(10px);
                            img {
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                            }
                        }
                        .person-show {
                            >p{
                                display: flex;
                                align-items: center;
                            }
                            .person-job {
                                font-size:  px2rem(12px);
                                font-weight: 600;
                            }
                            .rank {
                                display: inline-block;
                                text-align: center;
                                width:  px2rem(14px);
                                height:  px2rem(14px);
                                background: rgba(242, 211, 162, 1);
                                border-radius: 50%;
                                line-height: px2rem(14px);
                                font-size:  px2rem(8px);
                                color: #AB8433;
                                margin-left:  px2rem(5px);
                            }
                            .number {
                                font-size:  px2rem(10px);
                                font-weight: 300;
                                color: rgba(102, 102, 102, 1);
                                line-height:  px2rem(19px);
                            }
                        }
                    }
                    .month-obtain {
                        flex: 1.5;
                        align-items: center;
                        padding-left: 3%;
                        border-left: px2rem(1px) solid #eeeeee;
                        border-right:  px2rem(1px) solid #eeeeee;
                    }
                    .year-obtain {
                        flex: 1.5;
                        padding-left: 3%;
                    }
                }
            }

        }
    }
</style>
