<template>
    <div class="m-footer">
        <div>
            <img src="@/assets/img/homeActive.png" alt="" v-if="active ==='Home'">
            <img src="@/assets/img/home.png" alt="" v-else>
            <p>首页</p>
        </div>
        <div>
            <img src="@/assets/img/findActive.png" alt="" v-if="active==='Find'">
            <img src="@/assets/img/find.png" alt="" v-else>
            <p>发现</p>
        </div>
        <div>
            <img src="@/assets/img/shopsActive.png" alt="" v-if="active==='Find'">
            <img src="@/assets/img/shops.png" alt="" v-else>
            <p>拼店</p>
        </div>
        <div>
            <img src="@/assets/img/cartsActive.png" alt="" v-if="active==='Find'">
            <img src="@/assets/img/carts.png" alt="" v-else>
            <p>购物车</p>
        </div>
        <div>
            <img src="@/assets/img/myActive.png" alt="" v-if="active==='Find'">
            <img src="@/assets/img/my.png" alt="" v-else>
            <p>我的</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'indexfooter',
        data() {
            return {
                active: 'Home',
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '../assets/css/helpers/index.scss';
    .m-footer {
        position: fixed;
        width: 100%;
        height:  px2rem(48px);
        background: #FFFFFF;
        z-index: 1000;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        font-size:  px2rem(12px);
        div{
            margin-top:  px2rem(9px);
            color: #666666;
            img{
                width:  px2rem(17px);
            }
        }


    }
</style>
