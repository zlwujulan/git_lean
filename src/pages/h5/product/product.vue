<template>
    <div class="wrap">
        <!--系统出错显示页面-->
        <div class="error" v-if="showError">
            <!--图片-->
            <div class="pic">
                <img src="@/assets/img/nullpage.png" alt="错误图片">
            </div>
            <!--错误显示-->
            <div class="errorInfo">
                {{error}}
            </div>
        </div>
        <div class="home-wrapper" v-else>

            <!--swriper-->
            <div class="shrimper-wrap">
                <swiper :options="swiperOption" v-if="productBanner">
                    <swiper-slide v-for="(item,index) of productBanner" :key="index">
                        <img class="swipe-img"
                             :src="item.originalImg"/>
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!--详情产品的信息-->
            <div class="m-product-info" v-if="product">
                <div class="m-prod-tit">
                    <p>{{product.name}}</p>
                </div>
                <div class="m-prod-price">
                    <span class="m-current-price">￥{{priceList.price}} 起</span>
                    <span class="m-account-price"> ¥ {{priceList.originalPrice}}</span>
                    <span class="m-red-label">拼店价</span>
                </div>
                <div class="m-prod-sell">
                    <span class="m-express">快递：{{obtainInfo.freight}}</span>
                    <span>月销售{{obtainInfo.monthSaleTotal}}笔</span>
                </div>
            </div>
            <!--服务说明-->
            <div class="m-service">
                <span class="m-service-label">服务</span>
                <span>正品保证·急速发货 2小时内发货</span>
            </div>
            <!--详情和参数-->
            <div class="m-slide">
                <p class="m-slide-detail"><span :class="{cur:leftTab}" @click="tab('left')">详情</span></p>
                <p><span :class="{cur:rightTab}" @click="tab('right')">参数</span></p>
            </div>
            <!--详情页面和参数-->
            <div class="m-detail-session">
                <!--详情-->
                <div class="product-detail" v-if="leftTab">
                    <!--content-->
                    <div class="content product-info" v-html="content" v-if="content">
                        {{content}}
                    </div>


                    <!--<div class="m-detail-img">-->
                    <!--<img-->
                    <!--:src="product.imgUrl"-->
                    <!--alt="产品详情图"></img>-->
                    <!--</div>-->
                    <!--&lt;!&ndash;产品信息&ndash;&gt;-->
                    <!--<div class="product-info">-->
                    <!--<p>产品信息</p>-->
                    <!--<img src="http://yanxuan.nosdn.127.net/4e9dd862358d57f68c0e65f7534e0bec.jpg" alt="产品信息">-->
                    <!--</div>-->
                    <!--&lt;!&ndash;尺码信息&ndash;&gt;-->
                    <!--<div class="product-info">-->
                    <!--<p class="m-product-data">尺码信息</p>-->
                    <!--<img src="http://yanxuan.nosdn.127.net/4e9dd862358d57f68c0e65f7534e0bec.jpg" alt="产品信息">-->
                    <!--</div>-->

                </div>
                <!--参数-->
                <div class="product-param" v-if="rightTab">
                    <table border="1">
                        <tr v-for="(params,index) of paramList" :key="index">
                            <td>{{params.paramName}}</td>
                            <td>{{params.paramValue}}</td>
                        </tr>

                    </table>
                    <!--<img src="http://yanxuan.nosdn.127.net/4e9dd862358d57f68c0e65f7534e0bec.jpg" alt="参数图片">-->
                </div>
                <!--价格说明-->
                <div class="price-intro">
                    <p class="price-intro-tit">价格说明</p>
                    <div class="price-tell">
                        <p class="underline-price">划线价格：指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过销售价等，并非原价，仅供参考</p>
                        <p class="no-underline-price">
                            未划线价格：指商品的实时价格，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化最终以订单结算页价格为准。</p>
                    </div>
                </div>
            </div>
            <div class="empty"></div>
            <!--立即购买-->
            <div class="m-buy">
                <div class="shop-cart">
                    <img src="@/assets/img/shoppingcart.png" alt="">
                    <p>购物车</p>
                </div>
                <div class="buy-now"  @click="handleChooseClick">
                    立即购买
                </div>
                <div class="join-cart"  @click="handleChooseClick">
                    加入购物车
                </div>
            </div>
            <!--点击弹出的选择项-->
            <fade-animation>
                <choose-type
                    v-show="showChoose"
                    @close="handleChooseClose"
                ></choose-type>
            </fade-animation>
            <!--cover-->
            <div class="cover" v-show="showChoose" @click="closeCover">

            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';

    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';
    import '@/assets/styles/reset.css';
    import ChooseType from './components/ChooseType';
    import FadeAnimation from './components/FadeAnimation';
    import XiugouAPI from '@/api/XiugouAPI.js';

    function GetRequest() {
        let url = location.href || ''; //获取url中"?"符后的字串
        let theRequest = {};
        if (url.indexOf('?') !== -1) {
            let str = url.substr(url.indexOf('?') + 1);
            let strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
            }
        }
        return theRequest;
    }

    export default {
        name: 'product',
        components: {
            ChooseType,
            FadeAnimation
        },
        data() {
            return {
                // 错误提示
                error: '',
                showError: false,
                // 返回的数据
                obtainInfo: '',
                // 轮播图
                productBanner: [],
                // 商品
                product: '',
                // 参数
                paramList: '',
                // productlist
                priceList: '',
                //详细页面的详情
                content: '',
                // 轮播图参数
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    paginationType: 'fraction'
                },
                // tab切换
                leftTab: true,
                rightTab: false,
                // 显示选择项
                showChoose: false,
                //    声明一个空对象
                hasEmpty: {}
            };
        },
        computed: {},
        methods: {
            tab(type) {
                if (type === 'left') {
                    this.leftTab = true;
                    this.rightTab = false;
                } else {
                    this.leftTab = false;
                    this.rightTab = true;
                }
            },
            handleChooseClick() {
                // 跳转到下载APP中间页
                this.$router.push({path: '/download'});
                // this.showChoose = true;
            },
            handleChooseClose() {
                // this.showChoose = false;

            },
            closeCover() {
                // this.showChoose = false;
            }
        },
        mounted() {
            // 截取地址栏参数
            const query = GetRequest();
            let id = query.id;
            // 数据请求http://wwedwe.sadasc.com/gateyat/get/ew/dfd?a=-1
            XiugouAPI.getApiList({id}).then((res) => {
                console.log(res);
                this.showError = false;
                this.obtainInfo = res.data === null ? this.hasEmpty : res.data;
                this.productBanner = res.data.productImgList === null ? this.hasEmpty : res.productImgList;
                this.product = res.data.product[0] === null ? this.hasEmpty : res.data.product[0];
                this.paramList = res.data.paramList === null ? this.hasEmpty : res.data.paramList;
                this.priceList = res.data.priceList === null ? this.hasEmpty : res.data.priceList;
                //    详情
                if (res.data.product.hasOwnProperty('content')) {
                    this.content = res.data.product.content;
                } else {
                    this.content = this.hasEmpty;
                }

            }).catch((res) => {
                this.error = res.msg;
                this.showError = false;
                console.log(res);
            });
        }
    };
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/helpers/index.scss';

    .wrap {
        height: 100%;
        background: #FFFFFF;
    }

    .error {
        position: fixed;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
        }
        .errorInfo {
            text-align: center;
            font-size: px2rem(20px);
            margin-top: px2rem(100px);
        }
    }

    .home-wrapper {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        padding-bottom: px2rem(49px);

        .swiper-pagination {
            left: 85%;
            color: #FFFFFF;
            width: px2rem(43px);
            height: 0.2rem;
            background: #000000;
            opacity: 0.7;
            border-radius: px2rem(10px);
            line-height: px2rem(20px);
        }
        .swipe-img {
            width: 100%;
        }
        .m-product-info {
            background: #FFFFFF;
            padding: px2rem(10px) px2rem(15px);
            height: px2rem(108px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .m-prod-tit {
                font-size: px2rem(15px);
                font-weight: 500;
                color: rgba(34, 34, 34, 1);
                line-height: px2rem(24px);
            }
            .m-prod-price {
                position: relative;
                .m-current-price {
                    font-size: px2rem(18px);
                    font-weight: bold;
                    color: rgba(213, 18, 67, 1);
                }
                .m-account-price {
                    font-size: px2rem(10px);
                    font-weight: 500;
                    color: rgba(187, 187, 187, 1);
                    text-decoration: line-through
                }
                .m-red-label {
                    display: inline-block;
                    width: px2rem(38px);
                    height: px2rem(13px);
                    background: #D51243;
                    border-radius: px2rem(2px);
                    font-size: px2rem(10px);
                    color: #fff;
                    text-align: center;
                    line-height: px2rem(13px);
                    position: absolute;
                    top: px2rem(-2px);
                    margin-left: px2rem(5px);
                }
            }
            .m-prod-sell {
                font-size: px2rem(11px);
                color: rgba(187, 187, 187, 1);
                .m-express {
                    margin-right: px2rem(79px);
                }
            }
        }
        .m-service {
            height: px2rem(45px);
            line-height: px2rem(45px);
            color: #666666;
            background: #FFFFFF;
            margin: px2rem(10px) 0;
            padding-left: px2rem(16px);
            .m-service-label {
                display: inline-block;
                width: px2rem(32px);
                height: px2rem(16px);
                border: px2rem(1px) solid rgba(213, 18, 67, 1);
                border-radius: px2rem(2px);
                font-size: px2rem(13px);
                line-height: px2rem(16px);
                text-align: center;
                color: #D51243;
                margin-right: px2rem(12px);
            }
        }
        .m-slide {
            height: px2rem(40px);
            display: flex;
            background: #FFF;
            align-items: center;
            text-align: center;
            border-bottom: px2rem(1px) solid #eeeeee;
            p {
                flex: 1;
                height: px2rem(25px);
                line-height: px2rem(25px);
                color: #999999;
            }
            .cur {
                color: #D51243;
                border-bottom: px2rem(3px) solid #D51243;
                display: inline-block;
                height: px2rem(30px);
                width: px2rem(45px);
            }
            .m-slide-detail {

                box-sizing: border-box;
                border-right: px2rem(1px) solid #EEEEEE;
            }
        }
        .empty{
            height: px2rem(49px);
        }
        .m-buy {
            width: 100%;
            height: px2rem(49px);
            background: #FFFFFF;
            font-size: px2rem(14px);
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            text-align: center;

            border-top: px2rem(1px) solid #eeeeee;
            .shop-cart{
                flex: 1.5;
                display: flex;
                flex-direction: column;
                justify-content:center;
                height: px2rem(49px);
                align-items: center;
                color:#999999;
                font-size: px2rem(11px);

                img{
                    width: px2rem(19px);
                    margin-bottom: px2rem(6px);
                }
            }
            .buy-now{
                flex: 3;
                border-left: px2rem(1px) solid #EEEEEE;
                line-height: px2rem(49px);
            }
            .join-cart{
                flex: 3;
                background:#D51243;
                color: #FFFFFF;
                line-height: px2rem(49px);
            }
        }
        .m-detail-session {
            .product-info {
                margin-top: px2rem(10px);
                background: #FFFFFF;
                font-size: px2rem(15px);
                p {
                    height: px2rem(40px);
                    line-height: px2rem(40px);
                    padding-left: px2rem(15px);
                }
            }
            .product-param {
                background: #FFFFFF;
                padding: px2rem(20px) auto 0;
                table {
                    border:px2rem(1px) solid #eeeeee;
                    width: px2rem(345px);
                    margin: auto;
                    background: #FFFFFF;
                    tr {
                        height: px2rem(35px);
                    }
                    tr > td:nth-child(1) {
                        padding-left: px2rem(8px);
                        width: px2rem(80px);
                        background: #DDDDDD;
                        color: #333333;
                    }
                    tr > td:nth-child(2) {
                        color: #666666;
                        padding-left: px2rem(8px);
                    }
                }
            }
            img {
                width: 100%;
            }
            .m-detail-img {
                width: 100%;
                background: #eee;
            }
            .m-product-data {
                width: px2rem(60px);
                font-family: PingFang-SC-Medium;
                font-weight: 500;
                color: rgba(34, 34, 34, 1);
            }
            .price-intro {
                margin-top: px2rem(12px);
                background: #ffffff;
                .price-tell {
                    color: #999999;
                    font-size: px2rem(13px);
                    padding: px2rem(18px) px2rem(16px);
                    line-height: px2rem(20px);
                }
                .price-intro-tit {
                    height: px2rem(40px);
                    line-height: px2rem(40px);
                    border-bottom: px2rem(1px) solid #eeeeee;
                    padding-left: px2rem(16px);
                    color: #333;
                    font-size: px2rem(15px);
                }
                .underline-price {
                    margin-bottom: px2rem(10px);
                }
            }
        }
        .cover {
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.7;
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
        }
    }
</style>
