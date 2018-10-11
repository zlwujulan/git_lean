<template>
    <div class="m-menu">
        <div>
            <img src="@/assets/img/earnmoney.png" alt="">
            <p>赚钱</p>
        </div>
        <div>
            <img src="@/assets/img/savemoney.png" alt="">
            <p>省钱</p>
        </div>
        <div>
            <img src="@/assets/img/share.png" alt="">
            <p>分享</p>
        </div>
        <div>
            <img src="@/assets/img/collage.png" alt="">
            <p>学院</p>
        </div>
        <div>
            <img src="@/assets/img/sales.png" alt="">
            <p>促销</p>
        </div>
        <div>
            <img src="@/assets/img/earnmoney.png" alt="">
            <p>手机相机</p>
        </div>
        <div>
            <img src="@/assets/img/earnmoney.png" alt="">
            <p>家电电脑</p>
        </div>
        <div>
            <img src="@/assets/img/earnmoney.png" alt="">
            <p>品质男装</p>
        </div>
        <div>
            <img src="@/assets/img/earnmoney.png" alt="">
            <p>美妆个护</p>
        </div>
        <div>
        <img src="@/assets/img/earnmoney.png" alt="">
        <p>全部分类</p>
    </div>

    </div>
</template>

<script>
    export default {
        name: 'menulist'
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';
    .m-menu {
        display: flex;
        flex-wrap:wrap;
        /*height:px2rem(173px);*/
        padding-top: px2rem(15px);
        padding-bottom: px2rem(5px);
        margin: auto;
        justify-content: space-between;
        align-content: space-between;
        text-align: center;
        background: #FFFFFF;

    }
    .m-menu>div{
        width:20%;

        p{
            color: #666666;
            font-size:px2rem(12px);
            margin-bottom:px2rem(10px) ;

        }
        img{
            width:px2rem(48px);
            height:px2rem(48px);
        }
    }

</style>
