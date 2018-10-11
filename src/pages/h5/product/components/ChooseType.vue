<template>
    <div class="wrap">
        <div class="wrap-info">
            <!--产品缩略图-->
            <div class="pro-img">
                <img
                    src="http://yanxuan.nosdn.127.net/b167614f22f52d2cecbacfa055628ec2.png?quality=90&thumbnail=200x200&imageView"
                    alt="缩略图">
            </div>
            <!--价格和库存-->
            <div class="pro-has">
                <p class="pro-sell-coin">￥455.50</p>
                <p>库存454654件</p>
                <p>银色,128G,港版</p>
            </div>
        </div>
        <!--商品属性-->
        <div class="color-classify">
            <p class="color-tell">颜色分类</p>
            <div class="colors">
                <p>金色</p>
                <p>金色</p>
                <p>金色</p>
                <p>金色</p>
            </div>
        </div>
        <!--购买数量-->
        <div class="buy-num">
            <div>购买数量</div>
            <div class="cart-num">
                <p class="add">-</p>
                <input type="text" readonly="readonly" v-model="value" class="num">
                <p class="reduce">+</p>
            </div>
        </div>
        <!--确认-->
        <div class="make-sure" @click="handleChooseClick">
            确认
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChooseType',
        data() {
            return {
                value: 1
            };
        },
        mounted() {
        },
        methods: {
            handleChooseClick() {
                this.$emit('close');
            }
        }
    };
</script>
<style lang="scss" scoped>
    .wrap {
        background: #FFFFFF;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000000;
        padding-bottom: 0.49rem;

        .wrap-info {
            height: 0.91rem;
            position: relative;
            .pro-img {
                position: absolute;
                width: 1.07rem;
                height: 1.07rem;
                left: 0.12rem;
                bottom: 0.18rem;
                border: 0.01rem solid #eeeeee;
                border-radius: 0.05rem;
                img {
                    width: 100%;
                }
            }
            .pro-has {
                padding: 0.1rem 1.36rem;
                font-weight: 500;
                color: #222222;
                font-size: 0.15rem;
                line-height: 0.18rem;
                .pro-sell-coin {
                    font-size: 0.18rem;
                    font-weight: bold;
                    color: #D51243;
                }
            }

        }
        .color-classify {
            margin: 0 0.15rem;
            border-bottom: 0.01rem solid #eeeeee;
            .color-tell {
                color: #666666;
                height: 0.3rem;
                line-height: 0.3rem;

            }
            .colors {
                display: flex;
                line-height: 0.3rem;
                padding-bottom: 0.1rem;
                p {
                    width: 0.49rem;
                    height: 0.3rem;
                    background: #EEEEEE;
                    border-radius: 0.03rem;
                    text-align: center;
                    margin-right: 0.1rem;

                }
            }
        }
        .buy-num {
            height: 0.81rem;
            display: flex;
            padding: 0 0.16rem;
            justify-content: space-between;
            align-items: center;
            .cart-num {
                width: 1.14rem;
                border-radius: 0.06rem;
                height: 0.3rem;
                display: flex;
                border: 0.01rem solid #eeeeee;
                text-align: center;
                align-items: center;
                .add, .reduce {
                    width: 0.3rem;
                    height: 0.3rem;
                    line-height: 0.3rem;

                }
                .num {
                    width: 0.46rem;
                    text-align: center;
                    box-sizing: border-box;
                    border-left: 0.01rem solid #eeeeee;
                    border-right: 0.01rem solid #eeeeee;
                }
            }
        }
        .make-sure {
            width: 100%;
            position: fixed;
            background: #D51243;
            color: #FFFFFF;
            line-height: 0.49rem;
            height: 0.49rem;
            text-align: center;
            font-size: 0.16rem;
        }
    }
</style>
