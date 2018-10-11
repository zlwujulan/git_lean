<template>
    <div class="m-for">
        <p class="title">为你推荐</p>
        <div class="recommend-list">
            <div class="list-inner">
                <div class="inner-img">
                    <img src="http://yanxuan.nosdn.127.net/73dfc5a79bd2c143e315eed9ec186e04.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="desc">海外品牌 100%纯棉 </p>
                </div>
                <div class="reduce">自营 | 满减</div>
                <div class="name">TRENDIANO男装夏装纯棉宽松字母印花圆领短袖...</div>
                <div class="price">
                    ￥108
                </div>
            </div>
            <div class="list-inner">
                <div class="inner-img">
                    <img src="http://yanxuan.nosdn.127.net/73dfc5a79bd2c143e315eed9ec186e04.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="desc">海外品牌 100%纯棉 </p>
                </div>
                <div class="reduce">自营 | 满减</div>
                <div class="name">TRENDIANO男装夏装纯棉宽松字母印花圆领短袖...</div>
                <div class="price">
                    ￥108
                </div>
            </div>
            <div class="list-inner">
                <div class="inner-img">
                    <img src="http://yanxuan.nosdn.127.net/73dfc5a79bd2c143e315eed9ec186e04.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="desc">海外品牌 100%纯棉 </p>
                </div>
                <div class="reduce">自营 | 满减</div>
                <div class="name">TRENDIANO男装夏装纯棉宽松字母印花圆领短袖...</div>
                <div class="price">
                    ￥108
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'recommendForyou'
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';
    .m-for {
        margin-top:  px2rem(10px);
        background: #FFFFFF;

    .title {
        height:  px2rem(53px);
        line-height:  px2rem(53px);
        text-align: center;
        font-size:  px2rem(19px);
        font-weight:500;
    }
        .recommend-list{
            width: 92%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .list-inner{
                width:48.5%;
                border:  px2rem(1px) solid #eeeeee;
                margin-bottom: 3%;
                border-radius: px2rem(5px);
                .inner-img{
                    position: relative;
                    img{
                        width: 100%;
                    }
                    .desc{
                        position: absolute;
                        width: 100%;
                        height: px2rem(25px);
                        background:rgba(240,240,240,1);
                        opacity:0.75;
                        bottom: 0;
                        line-height:  px2rem(25px);
                        text-align: center;
                        font-size: px2rem(12px);
                    }
                }
                .reduce{
                    height: px2rem(30px);
                    line-height: px2rem(30px);
                    color: #C2A38D;
                    padding-left: px2rem(8px);
                    font-size:  px2rem(10px);
                }
                .name{
                    font-size:  px2rem(12px);
                    color: #666666;
                    line-height: px2rem(17px);
                    padding:0  px2rem(7px);
                }
                .price{
                    font-size: px2rem(14px);
                    font-weight:500;
                    color:rgba(213,18,52,1);
                    line-height: px2rem(14px);
                    margin: px2rem(5px)  px2rem(7px);
                    padding-bottom: px2rem(10px) ;
                }
            }
        }

    }
</style>
