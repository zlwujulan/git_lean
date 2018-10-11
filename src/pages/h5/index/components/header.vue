<template>
    <div class="m-header">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="search">

            <img src="@/assets/img/search.png" alt="" class="sech-img">

            <span>请输入关键词搜索</span>

        </div>
        <img src="@/assets/img/concat.png" alt="联系" class="concat">
    </div>
</template>

<script>
    export default {
        name: 'Indexheader'
    };
</script>

<style lang="scss" scoped>
    @import '../../../../assets/css/helpers/index.scss';
    .m-header {
        position: fixed;
        top: 0;
        padding: 0  px2rem(15px);
        height: px2rem(80px);
        width:  100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10000;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(255, 255, 255, 0.1));
        .logo {
            width:px2rem(35px);
            height:px2rem(27px);
            img{
                width: 100%;
            }
        }
        .search {
            width: 80%;
            height: px2rem(30px);
            background: rgba(255, 255, 255, 1);
            opacity: 0.8;
            color: #666666;
            vertical-align: middle;
            display: flex;
            align-items: center;
            border-radius:px2rem(20px);
            margin: 0 px2rem(10px);
            .sech-img {
                display: inline-block;
                vertical-align: middle;
                background-size: 100%;
                width:  px2rem(16px);
                height:  px2rem(16px);
                margin: 0 px2rem(15px);

            }
        }
        .concat {
            width: px2rem(24px);

        }

    }
</style>
